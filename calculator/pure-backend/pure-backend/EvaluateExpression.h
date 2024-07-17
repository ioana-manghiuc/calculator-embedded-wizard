#include "ValidateExpression.h"
#include <iostream>
#include <vector>
#include <queue>

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

std::pair<int, std::string> GetSubexpressionInParentheses(int startPos, const std::string expression)
{
    int endPos;
    std::string subexpression = "";

    if (!expression.empty())
    {
        for (int i = 0; i < expression.length(); i++)
        {
            if (expression[i] != ')')
            {
                subexpression += subexpression[i];
                endPos = i;
            }
            else
            {
                break;
            }
        }
    }

    return { endPos, subexpression };
}

std::pair<int, std::string> GetNumberFromPosition(int startPos, const std::string& expression) {
    int endPos = startPos;
    std::string number;
    for (int i = startPos; i < expression.length(); ++i) {
        if (std::isdigit(expression[i]) || expression[i] == '.') {
            number += expression[i];
            endPos = i;
        }
        else {
            break;
        }
    }
    return { endPos, number };
}

float ExecTwoOp(float first, float second, const char& op)
{
    switch (op)
    {
    case '+':
        return first + second;
    case '-':
        return first - second;
    case 'x':
        return first * second;
    case '/':
    {
        if (second != 0)
            return first / second;
        else
        {
            if (first < 0.0)
            {
                return -std::numeric_limits<float>::infinity();
            }
            else if (first > 0.0)
            {
                return std::numeric_limits<float>::infinity();
            }
            else
            {
                return std::numeric_limits<float>::quiet_NaN();
            }
        }
    }
    case '%':
    {
        float temp = first * second;
        return temp / 100;
    }
    case '^':
        return pow(first, second);
    default:
        return 0;
    }
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

        if (isdigit(expression[i]) || (expression[i] == '.' && isdigit(expression[i + 1]))) 
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
    int first, second;

    for (const std::string& token : RPN)
    {
        if (IsOperator(token[0]))
        {
			second = stk.top();
			stk.pop();
			first = stk.top();
			stk.pop();
			stk.push(ExecTwoOp(first, second, token[0]));
		}
        else
        {
			stk.push(std::stof(token));
		}
    }

    return stk.top();
}