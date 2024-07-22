#include "EvaluateExpression.h"

int main() 
{
    //std::string expression = "3 + 5.123 x 2";
    std::string expression = "5 - 1";
    //std::string expression = "(2+3)";
    //std::string expression = "2 x -5";

    //auto tokens = ShuntingYardAlgorithm(expression);

    //for (const auto& token : tokens)
    //{
    //    std::cout << token << " ";
    //}

    float res = EvaluateRPN(expression);
    std::cout << "\nResult: " << res << std::endl;
   // std::cout << 5 / -5 ;
    return 0;
}