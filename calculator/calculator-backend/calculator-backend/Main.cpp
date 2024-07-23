#include "EvaluateExpression.h"

int main()
{
    std::string expression = "5 - 1";
    float res = EvaluateRPN(expression);
    std::cout << "\nResult: " << res << std::endl;
    return 0;
}