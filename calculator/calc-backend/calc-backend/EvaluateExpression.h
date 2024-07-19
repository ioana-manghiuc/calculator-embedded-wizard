#pragma once

#ifdef EVALUATEEXPRESSION_EXPORTS
#define EVALUATEEXPRESSION_API __declspec(dllexport)
#else
#define EVALUATEEXPRESSION_API __declspec(dllimport)
#endif


EVALUATEEXPRESSION_API bool IsDot(char c);
EVALUATEEXPRESSION_API bool IsOperator(char c);
EVALUATEEXPRESSION_API bool IsParenthesis(char c);
EVALUATEEXPRESSION_API bool IsNumber(const std::string& expression);
EVALUATEEXPRESSION_API bool IsNegativeNumber(const std::string& expression);

EVALUATEEXPRESSION_API int GetPriorityOfOperator(const char& op);
EVALUATEEXPRESSION_API float ExecTwoOp(float first, float second, const char& op);

EVALUATEEXPRESSION_API std::vector<std::string> TokenizeExpression(const std::string& expression);
EVALUATEEXPRESSION_API std::vector<std::string> ShuntingYardAlgorithm(const std::string& expression);
EVALUATEEXPRESSION_API float EvaluateRPN(const std::string& expression);