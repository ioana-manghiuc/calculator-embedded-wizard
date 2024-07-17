#include <string>
#include <stack>

// use isalphs() --> character is alphabetic
// use isdigit() --> character is digit
// use isspace() --> character is white-space

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

std::pair<std::string, bool> CharactersAllowed(const std::string& expression)
{
	for (const char& c : expression)
	{
		if (!isdigit(c) && !isspace(c) && !IsDot(c) && !IsOperator(c) && !IsParenthesis(c))
		{
			return { "Expression contains characters that are not allowed.", false };
		}
	}
	return { "", true };
}

std::pair<std::string, bool> OperatorsCorrectlyUsed(const std::string& expression)
{

	for (int i = 0; i < expression.length(); i++)
	{
		if (i == 0)
		{
			if (!(isdigit(expression[i]) || expression[i] == '-' || expression[i] == '('))
			{
				return { "Operators used incorrectly.", false };
			}
		}
		else
		{
			if (IsOperator(expression[i]) && IsOperator(expression[i - 1]))
			{
				return { "Operators used incorrectly.", false };
			}

			if (i == expression.length() - 1 && IsOperator(expression[i]))
			{
				return { "Operators used incorrectly.", false };
			}
		}
	}


	return { "", true };
}


std::pair<std::string, bool> ParenthesisCorrectlyUsed(const std::string& expression)
{
	std::stack<char> stk;

	for (const char& c : expression)
	{
		if (c == '(')
		{
			stk.push(c);
		}
		else if (c == ')')
		{
			if (stk.empty())
			{
				return { "Parenthesis used incorrectly.", false };
			}
			stk.pop();
		}
		return { "", stk.empty() };
	}
}
