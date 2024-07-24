# calculator-embedded-wizard
A project implemented using Embedded Wizard 13. 

For executing operations (*addition, subtraction, multiplication, division, exponentiation, percentage*), either the device's **physical keyboard** or the **virtual** one can be used. The application handles key events using PushButtons (virtual) and a KeyPressHandler (physical). The logic for executing these operations is implemented to evaluate arithmetic expressions and contains the following steps:
- expression is validated: operators & parentheses must be used correctly, and it must only contain allowed characters (digits and operators). If the expression is not valid, an Error Dialog pops up which signals where the error came from; 
- expression is **tokenized** into a vector of strings (numbers & operators);
- tokens are then converted into a **Reverse Polish notation (RPN) using the Shunting Yard algorithm**;
- RPN is evaluated and all calculations are executed according to the priority of the operators.

The data structures used (vector, stack, queue) have been implemented in the Chora Programming Language. The stack and queue structures use simple elements, which hold data and a reference to the next element. The vector structure uses elements that hold data, as well as references to the next and previous elements.

The battery component simulates the calculator losing battery as it is being used. At the moment it is only a prototype.

All the buttons integrated into the virtual keyboard are customized using the Face Bitmap property and change their appearance when pressed (the FaceFrame changes when in or out of focus). 

<img align="center" width="250" src="https://github.com/user-attachments/assets/ddbdeb1c-3c23-474f-b99d-7d2be8726b03">

\
Since the application uses images for the buttons, the HTML file should be opened on localhost for them to be visible in the browser. The easiest way to do this is:
- use **Node.js** (instructions for installation here: https://nodejs.org/en/download/package-manager )
- run the command **npm install http-server -g** in CMD
- navigate to the path of the _calculator-app.html_ file (_calculator\Web directory_) in CMD, and run **http-server**
- in your browser, type **localhost:8080** and the application should run




