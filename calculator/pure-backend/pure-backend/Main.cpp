#include "EvaluateExpression.h"

int main() 
{
    std::string expression = "3 + 5.123 x 2";

    auto tokens = ShuntingYardAlgorithm(expression);

    for (const auto& token : tokens)
    {
        std::cout << token << " ";
    }

    float res = EvaluateRPN(expression);
    std::cout << "\nResult: " << res << std::endl;

    return 0;
}