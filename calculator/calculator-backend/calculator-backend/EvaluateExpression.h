#include <iostream>
#include <vector>
#include <queue>
#include <string>
#include <stack>

bool IsDot(char c)
{
    return c == '.';
}

bool IsOperator(char c)
{
    return c == '+' || c == '-' || c == 'x' || c == '/' || c == '%' || c == '^';
}

bool IsParenthesis(char c)
{
    return c == '(' || c == ')';
}

bool IsNumber(const std::string& expression)
{
    for (const char& c : expression)
    {
        if (!isdigit(c) && !IsDot(c))
        {
            return false;
        }
    }
    return true;
}

bool IsNegativeNumber(const std::string& expression)
{
    std::string subexpr = expression.substr(1, expression.length() - 1);
    if (expression[0] == '-' && IsNumber(subexpr))
    {
        return true;
    }
    return false;
}

int GetPriorityOfOperator(const char& op)
{
    int priority = 0;
    switch (op)
    {
    case '+':
        priority = 1;
        break;
    case '-':
        priority = 1;
        break;
    case 'x':
        priority = 2;
        break;
    case '/':
        priority = 2;
        break;
    case '%':
        priority = 3;
        break;
    case '^':
        priority = 3;
        break;
    default:
        priority = 1;
        break;
    }

    return priority;
}

float ExecTwoOp(float first, float second, const char& op)
{
    float res = 0.0;
    switch (op)
    {
    case '+':
        res = first + second;
        break;
    case '-':
        res = first - second;
        break;
    case 'x':
        res = first * second;
        break;
    case '/':
    {
        if (second != 0)
        {
            res = first / second;
            break;
        }
        else
        {
            if (first < 0.0)
            {
                res = -std::numeric_limits<float>::infinity();
                break;
            }
            else if (first > 0.0)
            {
                res = std::numeric_limits<float>::infinity();
                break;
            }
            else
            {
                res = std::numeric_limits<float>::quiet_NaN();
                break;
            }
        }
    }
    case '%':
    {
        float temp = first * second;
        res = temp / 100;
        break;
    }
    case '^':
        res = pow(first, second);
        break;
    default:
        res = 0;
        break;
    }

    return res;
}

std::vector<std::string> TokenizeExpression(const std::string& expression)
{
    std::vector<std::string> tokens;
    int i = 0;

    while (i < expression.length())
    {
        if (isspace(expression[i]))
        {
            i++;
            continue;
        }
        else if (isdigit(expression[i]) || (expression[i] == '.' && isdigit(expression[i + 1])))
        {
            std::string number;
            while (i < expression.length() && (isdigit(expression[i]) || expression[i] == '.'))
            {
                number += expression[i];
                i++;
            }
            tokens.push_back(number);
        }
        else if (IsOperator(expression[i]) || IsParenthesis(expression[i]))
        {
            tokens.push_back(std::string(1, expression[i]));
            i++;
        }
        else
        {
            i++;
        }
    }

    return tokens;
}


std::vector<std::string> ShuntingYardAlgorithm(const std::string& expression)
{
    std::vector<std::string> tokens = TokenizeExpression(expression);
   /* for (const auto token : tokens)
    {
        std::cout << token << "!";
    }*/
    std::queue<std::string> output;
    std::stack<std::string> operators;

    for (const std::string& token : tokens)
    {
        if (token.size() == 1)
        {
            char t = token[0];
            if (std::isdigit(t))
            {
                output.push(token);
            }
            else if (IsOperator(t) || IsParenthesis(t))
            {
                if (IsParenthesis(t))
                {
                    if (t == '(')
                    {
                        operators.push("(");
                    }
                    else if (t == ')')
                    {
                        while (!operators.empty() && operators.top() != "(")
                        {
                            output.push(operators.top());
                            operators.pop();
                        }
                        if (!operators.empty())
                            operators.pop();
                    }
                }
                if (IsOperator(t))
                {
                    if (!operators.empty())
                    {
                        char top = operators.top()[0];
                        if (IsOperator(top))
                        {
                            if (GetPriorityOfOperator(top) < GetPriorityOfOperator(t))
                            {
                                operators.push(token);
                            }
                            else if (GetPriorityOfOperator(top) == GetPriorityOfOperator(t))
                            {
                                output.push(operators.top());
                                operators.pop();
                                operators.push(token);
                            }
                        }
                        if (top == '(')
                        {
                            operators.push(token);
                        }

                    }
                    else
                        operators.push(token);
                }
            }
        }
        else if (token.size() > 1 && IsNumber(token))
        {
            output.push(token);
        }
    }

    while (!operators.empty())
    {
        output.push(operators.top());
        operators.pop();
    }

    std::vector<std::string> expr;

    while (!output.empty())
    {
        expr.push_back(output.front());
        output.pop();
    }

    return expr;
}


float EvaluateRPN(const std::string& expression)
{
    std::vector<std::string> RPN = ShuntingYardAlgorithm(expression);
    std::stack<float> stk;
    float first, second;

    for (const std::string& token : RPN)
    {
        if (IsOperator(token[0]) /*&& !IsNegativeNumber(token)*/)
        {
            second = stk.top();
            stk.pop();
            first = stk.top();
            stk.pop();
            stk.push(ExecTwoOp(first, second, token[0]));
        }
        else if (IsNumber(token))
        {
            stk.push(std::stof(token));
        }
    }

    return stk.top();
}
