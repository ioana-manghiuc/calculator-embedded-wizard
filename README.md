# calculator-embedded-wizard
A project implemented using Embedded Wizard 13. 

For executing operations (*addition, subtraction, multiplication, division, exponentiation, percentage*), either the device's **physical keyboard** or the **virtual** one can be used. The application handles key events using PushButtons (virtual) and a KeyPressHandler (physical). The logic for executing these operations is implemented to evaluate arithmetic expressions and contains the following steps:
- expression is validated: operators & parentheses must be used correctly, and it must only contain allowed characters (digits and operators). If the expression is not valid, an Error Dialog pops up which signals where the error came from; 
- expression is **tokenized** into a vector of strings (numbers & operators);
- tokens are then converted into a **Reverse Polish notation (RPN) using the Shunting Yard algorithm**;
- RPN is evaluated and all calculations are executed according to the priority of the operators.

The data structures used (vector, stack, queue) have been implemented in the Chora Programming Language. The stack and queue structures use simple elements, which hold data and a reference to the next element. The vector structure uses elements that hold data, as well as references to the next and previous elements.

The battery component simulates the calculator losing battery as it is being used. When the battery runs out the calculator "shuts off" (if keys are pressed nothing will show in the result textbox), and the user is prompted to "add a new battery" which means entering a new battery level by using the horizontal slider (its values range from 20 to 100, so that the user can't add a dead battery). Then the calculator powers back on.

The second page is a Length Converter for *milimeters, centimeters, meters,* and *kilometers*. The user can switch between the two dialogs by pressing the button in the top-left corner which opens a menu.

<img align="center" width="250" src="https://github.com/user-attachments/assets/5b3a630b-ddb2-4ace-8af0-1d1efdd80915">
<img align="center" width="250" src="https://github.com/user-attachments/assets/022292b6-098a-4ea1-b211-9563c0dd3ca8">

\
Since the application uses images for the buttons and battery, run the HTML file in localhost for them to be visible in the browser. The easiest way to do this is:
- use **Node.js** (instructions for installation here: https://nodejs.org/en/download/package-manager )
- run the command **npm install -g serve** in CMD
- navigate to the path of the _EmWiApp.html_ file (_calculator\Web directory_) in CMD, and run **serve**
- then a message should show up, letting you know the local address (which is also automatically copied to clipboard)

Another option is to use Node.js with **http-server**:
- run the command **npm install http-server -g** in CMD
- navigate to the path of the _EmWiApp.html_ file (_calculator\Web directory_) in CMD, and run **http-server**
- in your browser, type **localhost:8080** and the application should run




