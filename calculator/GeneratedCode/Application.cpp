/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 13.04
* Profile  : Win32
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

#include "ewlocale.h"
#include "_ApplicationApplication.h"
#include "_ApplicationErrorDialog.h"
#include "_ApplicationNumKeyBtns.h"
#include "_ApplicationPair.h"
#include "_ApplicationResultTxtEd.h"
#include "_CoreGroup.h"
#include "_CoreKeyPressHandler.h"
#include "_CoreRoot.h"
#include "_CoreSimpleTouchHandler.h"
#include "_CoreSlideTouchHandler.h"
#include "_CoreTimer.h"
#include "_CoreView.h"
#include "_EffectsBoolEffect.h"
#include "_ResourcesBitmap.h"
#include "_ResourcesFont.h"
#include "_ViewsBorder.h"
#include "_ViewsLine.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "_ViewsWarpGroup.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"
#include "Application.h"
#include "Core.h"
#include "Resources.h"
#include "Views.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x000002D4, /* ratio 51.38 % */
  0xB8001D00, 0x800E4452, 0x00E60032, 0x0D8003A8, 0x40003A00, 0x10734000, 0x00844180,
  0x58181000, 0x8D464864, 0xDC7C7B1C, 0x48C51048, 0x1E3E788E, 0xC006E8E0, 0x312D001B,
  0xB1C0B002, 0x70948008, 0xA854562C, 0x984B8D30, 0x54F80111, 0x4325B128, 0x7C5D0E87,
  0x0A104894, 0xA13A3080, 0x114884B6, 0x41AB42A1, 0x40055E19, 0x96CFA826, 0xBC1A7E63,
  0x442C2008, 0x28007987, 0xE381E8CD, 0x11390013, 0xF10A841A, 0x0BA241A5, 0x2AEC5613,
  0xB1596BF1, 0x6D9A113A, 0x5AED2008, 0xDE6A3700, 0x6F581B84, 0x252D9FCF, 0xF5397D86,
  0x78A050A9, 0x3A8452C3, 0xB9442FF7, 0xB552257A, 0xE722510C, 0x967F458A, 0xE7F48CB6,
  0x3F6ABD9D, 0x11E8E02A, 0x3E884E6A, 0x18249F29, 0x19117763, 0xA6F867BE, 0x6F86BBE1,
  0x6713BE1B, 0x87045924, 0x61BE1CEF, 0xBBE15EF8, 0x1F17EF85, 0x8EA4700D, 0x8E72FADD,
  0xF17B9987, 0x8A77C25D, 0x7E09348F, 0x49710C5E, 0x2E56B4C5, 0x37DD7C23, 0x84A3D034,
  0x622FA633, 0xAD5867E6, 0xD3E7C5B0, 0x67D95E7C, 0x650E6114, 0x54470084, 0x44129454,
  0x50477DB3, 0xF84D2084, 0xFD2C0311, 0x06681124, 0x8497A5D9, 0x51F16045, 0xE0016E01,
  0xD013465E, 0x00104006, 0x47800130, 0x22B8B455, 0x25BE0D00, 0xDD365045, 0x1F8DA378,
  0x001018F5, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 350, 590 }};
static const XRect _Const0001 = {{ 1250, 21 }, { 1448, 86 }};
static const XStringRes _Const0002 = { _StringsDefault0, 0x0002 };
static const XColor _Const0003 = { 0x0D, 0x1A, 0x38, 0xFF };
static const XColor _Const0004 = { 0xE2, 0xE6, 0xE9, 0xFF };
static const XRect _Const0005 = {{ 20, 30 }, { 320, 105 }};
static const XColor _Const0006 = { 0x99, 0xA8, 0xB7, 0xFF };
static const XColor _Const0007 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XColor _Const0008 = { 0xCF, 0xE4, 0xF8, 0xFF };
static const XColor _Const0009 = { 0x03, 0x03, 0x24, 0xFF };
static const XRect _Const000A = {{ 20, 129 }, { 320, 569 }};
static const XRect _Const000B = {{ 20, 35 }, { 320, 100 }};
static const XStringRes _Const000C = { _StringsDefault0, 0x0010 };
static const XStringRes _Const000D = { _StringsDefault0, 0x0014 };
static const XStringRes _Const000E = { _StringsDefault0, 0x0018 };
static const XStringRes _Const000F = { _StringsDefault0, 0x001C };
static const XStringRes _Const0010 = { _StringsDefault0, 0x0020 };
static const XStringRes _Const0011 = { _StringsDefault0, 0x0027 };
static const XStringRes _Const0012 = { _StringsDefault0, 0x003D };
static const XStringRes _Const0013 = { _StringsDefault0, 0x005D };
static const XStringRes _Const0014 = { _StringsDefault0, 0x007B };
static const XRect _Const0015 = {{ 0, 0 }, { 300, 440 }};
static const XRect _Const0016 = {{ 0, 1 }, { 300, 440 }};
static const XColor _Const0017 = { 0x03, 0x04, 0x00, 0x00 };
static const XColor _Const0018 = { 0x00, 0x00, 0x00, 0x00 };
static const XColor _Const0019 = { 0x8E, 0x6B, 0x74, 0xFF };
static const XColor _Const001A = { 0x00, 0x00, 0x00, 0xFF };
static const XColor _Const001B = { 0xFF, 0xFC, 0xFE, 0xFF };
static const XColor _Const001C = { 0x99, 0x00, 0x02, 0xFF };
static const XRect _Const001D = {{ 1205, 149 }, { 1270, 199 }};
static const XStringRes _Const001E = { _StringsDefault0, 0x00B2 };
static const XRect _Const001F = {{ 1205, 9 }, { 1270, 59 }};
static const XRect _Const0020 = {{ 1205, 79 }, { 1270, 129 }};
static const XRect _Const0021 = {{ 10, 147 }, { 80, 217 }};
static const XStringRes _Const0022 = { _StringsDefault0, 0x00BC };
static const XRect _Const0023 = {{ 80, 147 }, { 150, 217 }};
static const XStringRes _Const0024 = { _StringsDefault0, 0x00C0 };
static const XRect _Const0025 = {{ 151, 147 }, { 221, 217 }};
static const XStringRes _Const0026 = { _StringsDefault0, 0x00C4 };
static const XRect _Const0027 = {{ 10, 217 }, { 80, 287 }};
static const XStringRes _Const0028 = { _StringsDefault0, 0x00C8 };
static const XRect _Const0029 = {{ 80, 217 }, { 150, 287 }};
static const XStringRes _Const002A = { _StringsDefault0, 0x00CC };
static const XRect _Const002B = {{ 150, 217 }, { 220, 287 }};
static const XStringRes _Const002C = { _StringsDefault0, 0x00D0 };
static const XRect _Const002D = {{ 10, 287 }, { 80, 357 }};
static const XStringRes _Const002E = { _StringsDefault0, 0x00D4 };
static const XRect _Const002F = {{ 80, 287 }, { 150, 357 }};
static const XStringRes _Const0030 = { _StringsDefault0, 0x00D8 };
static const XRect _Const0031 = {{ 150, 287 }, { 220, 357 }};
static const XStringRes _Const0032 = { _StringsDefault0, 0x00DC };
static const XRect _Const0033 = {{ 80, 357 }, { 150, 427 }};
static const XStringRes _Const0034 = { _StringsDefault0, 0x00E0 };
static const XRect _Const0035 = {{ 10, 4 }, { 80, 74 }};
static const XRect _Const0036 = {{ 222, 287 }, { 292, 357 }};
static const XStringRes _Const0037 = { _StringsDefault0, 0x00E4 };
static const XRect _Const0038 = {{ 222, 217 }, { 292, 287 }};
static const XStringRes _Const0039 = { _StringsDefault0, 0x00E8 };
static const XRect _Const003A = {{ 221, 147 }, { 291, 217 }};
static const XRect _Const003B = {{ 222, 77 }, { 292, 147 }};
static const XStringRes _Const003C = { _StringsDefault0, 0x00EC };
static const XRect _Const003D = {{ 10, 357 }, { 80, 427 }};
static const XStringRes _Const003E = { _StringsDefault0, 0x00F0 };
static const XRect _Const003F = {{ 150, 357 }, { 220, 427 }};
static const XStringRes _Const0040 = { _StringsDefault0, 0x00F6 };
static const XRect _Const0041 = {{ 80, 77 }, { 150, 147 }};
static const XStringRes _Const0042 = { _StringsDefault0, 0x00FA };
static const XRect _Const0043 = {{ 150, 77 }, { 220, 147 }};
static const XStringRes _Const0044 = { _StringsDefault0, 0x00FE };
static const XRect _Const0045 = {{ 10, 77 }, { 45, 147 }};
static const XRect _Const0046 = {{ 45, 77 }, { 80, 147 }};
static const XStringRes _Const0047 = { _StringsDefault0, 0x0102 };
static const XRect _Const0048 = {{ 222, 357 }, { 294, 425 }};
static const XRect _Const0049 = {{ 222, 4 }, { 292, 74 }};
static const XStringRes _Const004A = { _StringsDefault0, 0x0106 };
static const XStringRes _Const004B = { _StringsDefault0, 0x011C };
static const XRect _Const004C = {{ 0, 0 }, { 160, 120 }};
static const XPoint _Const004D = { 0, 120 };
static const XPoint _Const004E = { 160, 120 };
static const XPoint _Const004F = { 160, 0 };
static const XPoint _Const0050 = { 0, 0 };
static const XRect _Const0051 = {{ 2, 2 }, { 157, 117 }};
static const XStringRes _Const0052 = { _StringsDefault0, 0x0132 };
static const XPoint _Const0053 = { 50, 70 };
static const XPoint _Const0054 = { 50, 50 };
static const XPoint _Const0055 = { 20, 20 };
static const XPoint _Const0056 = { -10, -10 };
static const XColor _Const0057 = { 0xEE, 0xEE, 0xEE, 0xCC };
static const XStringRes _Const0058 = { _StringsDefault0, 0x013A };
static const XStringRes _Const0059 = { _StringsDefault0, 0x013E };
static const XRect _Const005A = {{ 0, 0 }, { 250, 100 }};
static const XRect _Const005B = {{ 0, -1 }, { 250, 100 }};
static const XColor _Const005C = { 0x47, 0x04, 0x00, 0xFF };
static const XRect _Const005D = {{ 0, 0 }, { 250, 30 }};
static const XColor _Const005E = { 0x46, 0x04, 0x00, 0xFF };
static const XRect _Const005F = {{ 5, 38 }, { 235, 78 }};
static const XStringRes _Const0060 = { _StringsDefault0, 0x0142 };
static const XColor _Const0061 = { 0x2D, 0x02, 0x00, 0xFF };
static const XRect _Const0062 = {{ 213, 3 }, { 243, 28 }};
static const XStringRes _Const0063 = { _StringsDefault0, 0x014E };
static const XRect _Const0064 = {{ 159, 61 }, { 243, 91 }};
static const XStringRes _Const0065 = { _StringsDefault0, 0x0152 };
static const XColor _Const0066 = { 0x20, 0x94, 0x31, 0x00 };
static const XColor _Const0067 = { 0x3A, 0x84, 0x2A, 0x00 };
static const XColor _Const0068 = { 0xCC, 0x7E, 0x51, 0x00 };
static const XColor _Const0069 = { 0xB7, 0x32, 0x1F, 0x00 };
static const XRect _Const006A = {{ 5, 0 }, { 145, 30 }};
static const XStringRes _Const006B = { _StringsDefault0, 0x0157 };
static const XColor _Const006C = { 0xF2, 0xE6, 0xDD, 0xFF };

#ifndef EW_DONT_CHECK_INDEX
  /* This function is used to check the indices when accessing an array.
     If you don't want this verification add the define EW_DONT_CHECK_INDEX
     to your Makefile or project settings. */
  static int EwCheckIndex( int aIndex, int aRange, const char* aFile, int aLine )
  {
    if (( aIndex < 0 ) || ( aIndex >= aRange ))
    {
      EwPrint( "[FATAL ERROR in %s:%d] Array index %d out of bounds %d",
                aFile, aLine, aIndex, aRange );
      EwPanic();
      return 0;
    }
    return aIndex;
  }

  #define EwCheckIndex( aIndex, aRange ) \
    EwCheckIndex( aIndex, aRange, __FILE__, __LINE__ )
#else
  #define EwCheckIndex( aIndex, aRange ) aIndex
#endif

/* User defined inline code: 'Application::Inline' */
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


XFloat EvaluateRPN(XString expression)
{
    std::string expr = expression;
    std::vector<std::string> RPN = ShuntingYardAlgorithm(expr);
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

    XFloat res = stk.top();
    return res;
}

/* Initializer for the class 'Application::Application' */
void ApplicationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreRoot__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationApplication );

  /* ... then construct all embedded objects */
  ViewsText__Init( &_this->TextTxt, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->Bgk, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->OutputBgk, &_this->_.XObject, 0 );
  ViewsBorder__Init( &_this->Border, &_this->_.XObject, 0 );
  ApplicationNumKeyBtns__Init( &_this->Keypad, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->KeyHandler, &_this->_.XObject, 0 );
  ApplicationResultTxtEd__Init( &_this->Text, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->HandleEnter, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreView_OnSetStackingPriority((CoreView)&_this->TextTxt, 3 );
  CoreRectView__OnSetBounds( &_this->TextTxt, _Const0001 );
  ViewsText_OnSetAlignment( &_this->TextTxt, ViewsTextAlignmentAlignHorzRight | 
  ViewsTextAlignmentAlignVertCenter );
  ViewsText_OnSetString( &_this->TextTxt, EwLoadString( &_Const0002 ));
  ViewsText_OnSetColor( &_this->TextTxt, _Const0003 );
  CoreRectView__OnSetBounds( &_this->Bgk, _Const0000 );
  ViewsRectangle_OnSetColor( &_this->Bgk, _Const0004 );
  CoreView_OnSetStackingPriority((CoreView)&_this->OutputBgk, 2 );
  CoreRectView__OnSetBounds( &_this->OutputBgk, _Const0005 );
  ViewsRectangle_OnSetColorBL( &_this->OutputBgk, _Const0006 );
  ViewsRectangle_OnSetColorBR( &_this->OutputBgk, _Const0006 );
  ViewsRectangle_OnSetColorTR( &_this->OutputBgk, _Const0007 );
  ViewsRectangle_OnSetColorTL( &_this->OutputBgk, _Const0007 );
  ViewsRectangle_OnSetRadius( &_this->OutputBgk, 5 );
  ViewsRectangle_OnSetColor( &_this->OutputBgk, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Border, 2 );
  CoreRectView__OnSetBounds( &_this->Border, _Const0005 );
  ViewsBorder_OnSetRadius( &_this->Border, 5 );
  ViewsBorder_OnSetWidth( &_this->Border, 2 );
  ViewsBorder_OnSetColor( &_this->Border, _Const0009 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Keypad, 2 );
  CoreRectView__OnSetBounds( &_this->Keypad, _Const000A );
  CoreView_OnSetStackingPriority((CoreView)&_this->Text, 3 );
  CoreView_OnSetLayout((CoreView)&_this->Text, CoreLayoutAlignToLeft | CoreLayoutAlignToTop );
  CoreRectView__OnSetBounds( &_this->Text, _Const000B );
  ApplicationResultTxtEd_OnSetWrapText( &_this->Text, 0 );
  ApplicationResultTxtEd_OnSetAlignment( &_this->Text, ViewsTextAlignmentAlignHorzRight 
  | ViewsTextAlignmentAlignVertCenter );
  ApplicationResultTxtEd_OnSetString( &_this->Text, EwLoadString( &_Const0002 ));
  _this->HandleEnter.Filter = CoreKeyCodeEnter;
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TextTxt ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Bgk ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->OutputBgk ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Border ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Keypad ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Text ), 0 );
  ViewsText_OnSetFont( &_this->TextTxt, EwLoadResource( &ApplicationDigitalResFont, 
  ResourcesFont ));
  _this->KeyHandler.OnPress = EwNewSlot( _this, ApplicationApplication_CalculateExpression );
  _this->KeyHandler.OnHold = EwNullSlot;
  ApplicationResultTxtEd_OnSetFont( &_this->Text, EwLoadResource( &ApplicationDigitalResFont, 
  ResourcesFont ));
  _this->HandleEnter.OnPress = EwNewSlot( _this, ApplicationApplication_onCloseDialog );
  _this->HandleEnter.OnHold = EwNewSlot( _this, ApplicationApplication_onCloseDialog );
}

/* Re-Initializer for the class 'Application::Application' */
void ApplicationApplication__ReInit( ApplicationApplication _this )
{
  /* At first re-initialize the super class ... */
  CoreRoot__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsText__ReInit( &_this->TextTxt );
  ViewsRectangle__ReInit( &_this->Bgk );
  ViewsRectangle__ReInit( &_this->OutputBgk );
  ViewsBorder__ReInit( &_this->Border );
  ApplicationNumKeyBtns__ReInit( &_this->Keypad );
  CoreKeyPressHandler__ReInit( &_this->KeyHandler );
  ApplicationResultTxtEd__ReInit( &_this->Text );
  CoreKeyPressHandler__ReInit( &_this->HandleEnter );
}

/* Finalizer method for the class 'Application::Application' */
void ApplicationApplication__Done( ApplicationApplication _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreRoot );

  /* Finalize all embedded objects */
  ViewsText__Done( &_this->TextTxt );
  ViewsRectangle__Done( &_this->Bgk );
  ViewsRectangle__Done( &_this->OutputBgk );
  ViewsBorder__Done( &_this->Border );
  ApplicationNumKeyBtns__Done( &_this->Keypad );
  CoreKeyPressHandler__Done( &_this->KeyHandler );
  ApplicationResultTxtEd__Done( &_this->Text );
  CoreKeyPressHandler__Done( &_this->HandleEnter );

  /* Don't forget to deinitialize the super class ... */
  CoreRoot__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::Application.CalculateExpression()' */
void ApplicationApplication_CalculateExpression( ApplicationApplication _this, XObject 
  sender )
{
  XString str;
  XString temp;
  XInt32 cursorPosition;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  temp = 0;
  cursorPosition = EwGetStringLength( ApplicationResultTxtEd_OnGetString( &_this->Text )) 
  - 1;

  if ( _this->KeyHandler.CharCode != 0x0000 )
    str = EwNewStringChar( _this->KeyHandler.CharCode, 1 );
  else
    str = _this->Keypad.keyString;

  if ( !EwCompString( ApplicationResultTxtEd_OnGetString( &_this->Text ), EwLoadString( 
      &_Const0002 )) || !EwCompString( str, EwLoadString( &_Const000C )))
    ApplicationApplication_ResetVariables( _this );

  if (( _this->KeyHandler.Code == CoreKeyCodeLeft ) && ( cursorPosition > 0 ))
    cursorPosition--;

  ( _this->KeyHandler.Code == CoreKeyCodeRight ) && ( cursorPosition < EwGetStringLength( 
  ApplicationResultTxtEd_OnGetString( &_this->Text )));

  if (( EwCompString( str, EwLoadString( &_Const000D )) != 0 ) && ( EwCompString( 
      str, EwLoadString( &_Const000C )) != 0 ))
  {
    XChar lastChar = EwGetStringChar( ApplicationResultTxtEd_OnGetString( &_this->Text ), 
      EwGetStringLength( ApplicationResultTxtEd_OnGetString( &_this->Text )) - 1 );

    if ( !EwCompString( str, EwLoadString( &_Const000E )))
    {
      if ( EwGetStringLength( ApplicationResultTxtEd_OnGetString( &_this->Text )) 
          > 0 )
      {
        if ( ApplicationApplication_IsDigit( _this, lastChar ) || ( lastChar == 
            ')' ))
          temp = EwConcatString( EwConcatString( ApplicationResultTxtEd_OnGetString( 
          &_this->Text ), EwLoadString( &_Const000F )), str );
        else
          temp = EwConcatString( ApplicationResultTxtEd_OnGetString( &_this->Text ), 
          str );
      }
      else
        temp = EwConcatString( ApplicationResultTxtEd_OnGetString( &_this->Text ), 
        str );
    }
    else
      if ( ApplicationApplication_IsDigit( _this, EwGetStringChar( str, 0 )))
      {
        if ( lastChar == ')' )
          temp = EwConcatString( EwConcatString( ApplicationResultTxtEd_OnGetString( 
          &_this->Text ), EwLoadString( &_Const000F )), str );
        else
          temp = EwConcatString( ApplicationResultTxtEd_OnGetString( &_this->Text ), 
          str );
      }
      else
        temp = EwConcatString( ApplicationResultTxtEd_OnGetString( &_this->Text ), 
        str );

    ApplicationResultTxtEd_OnSetString( &_this->Text, temp );
  }

  if ( !EwCompString( str, EwLoadString( &_Const000D )) && ApplicationApplication_IsExpressionValid( 
      _this, ApplicationResultTxtEd_OnGetString( &_this->Text )))
  {
    XString input = ApplicationResultTxtEd_OnGetString( &_this->Text );
    EwTrace( "%s", input );
    result = EvaluateRPN(input);
    EwTrace( "%f", 0.0f );
    ApplicationResultTxtEd_OnSetString( &_this->Text, EwNewStringFloat( ApplicationApplication_ExecuteOperation( 
    _this, ApplicationResultTxtEd_OnGetString( &_this->Text )), 0, -1 ));
    ApplicationResultTxtEd_OnGetString( &_this->Text );
  }
}

/* 'C' function for method : 'Application::Application.ExecTwoOp()' */
XFloat ApplicationApplication_ExecTwoOp( ApplicationApplication _this, XFloat first, 
  XFloat second, XString op )
{
  XFloat res;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  res = 0.0f;

  switch ( EwGetStringChar( op, 0 ))
  {
    case '+' :
      res = first + second;
    break;

    case '-' :
      res = first - second;
    break;

    case 'x' :
      res = first * second;
    break;

    case '/' :
      if ( second != 0.0f )
        res = first / second;
      else
      {
        if ( first < 0.0f )
          res = EwNewFloatInfN();

        if ( first > 0.0f )
          res = EwNewFloatInfP();

        if ( first == 0.0f )
          res = EwNewFloatNaN();
      }
    break;

    case '%' :
    {
      XFloat temp = first * second;
      res = temp / 100;
    }
    break;

    case '^' :
      res = EwMathPow( first, second );
    break;

    default : 
      res = 0.0f;
  }

  return res;
}

/* 'C' function for method : 'Application::Application.ResetVariables()' */
void ApplicationApplication_ResetVariables( ApplicationApplication _this )
{
  ApplicationResultTxtEd_OnSetString( &_this->Text, 0 );
}

/* 'C' function for method : 'Application::Application.IsOperator()' */
XBool ApplicationApplication_IsOperator( ApplicationApplication _this, XChar op )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  return (XBool)(((((( op == '+' ) || ( op == '-' )) || ( op == 'x' )) || ( op == 
    '/' )) || ( op == '%' )) || ( op == '^' ));
}

/* 'C' function for method : 'Application::Application.GetSubexpressionInParentheses()' */
ApplicationPair ApplicationApplication_GetSubexpressionInParentheses( ApplicationApplication _this, 
  XInt32 startPos, XString expression )
{
  XString subexpression;
  XInt32 endPos;
  ApplicationPair res;
  XInt32 i;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  subexpression = 0;
  endPos = 0;
  res = EwNewObject( ApplicationPair, 0 );
  i = startPos + 1;

  if ( EwCompString( expression, 0 ) != 0 )
  {
    for ( ; i < EwGetStringLength( expression ); i++ )
      if ( EwGetStringChar( expression, i ) != ')' )
      {
        subexpression = EwConcatStringChar( subexpression, EwGetStringChar( expression, 
        i ));
        endPos = i;
      }
      else
        break;
  }

  ApplicationPair_OnSetEndPosition( res, endPos );
  ApplicationPair_OnSetSubexpression( res, subexpression );
  ApplicationPair_OnSetIdentifiedNumber( res, 0.0f );
  return res;
}

/* 'C' function for method : 'Application::Application.GetNumberFromPosition()' */
ApplicationPair ApplicationApplication_GetNumberFromPosition( ApplicationApplication _this, 
  XInt32 startPos, XString expression )
{
  XInt32 endPos = 0;
  ApplicationPair res = EwNewObject( ApplicationPair, 0 );
  XString nrStr = 0;
  XInt32 i = startPos;

  if ( EwCompString( expression, 0 ) != 0 )
  {
    for ( ; i < EwGetStringLength( expression ); i++ )
      if ( !ApplicationApplication_IsOperator( _this, EwGetStringChar( expression, 
          i )) && ApplicationApplication_IsDigit( _this, EwGetStringChar( expression, 
          i )))
      {
        nrStr = EwConcatStringChar( nrStr, EwGetStringChar( expression, i ));
        endPos = i;
      }
      else
        break;
  }

  ApplicationPair_OnSetEndPosition( res, endPos );
  ApplicationPair_OnSetSubexpression( res, EwLoadString( &_Const0010 ));
  ApplicationPair_OnSetIdentifiedNumber( res, EwStringParseFloat( nrStr, -1.0f ));
  return res;
}

/* 'C' function for method : 'Application::Application.IsExpressionValid()' */
XBool ApplicationApplication_IsExpressionValid( ApplicationApplication _this, XString 
  expression )
{
  if ( !EwCompString( expression, 0 ))
  {
    EwSignal( EwNewSlot( _this, ApplicationApplication_onShowDialog ), ((XObject)_this ));
    ViewsText_OnSetString( &_this->ErrDialog->ErrorText, EwLoadString( &_Const0011 ));
    return 0;
  }
  else
    if ( !ApplicationApplication_CorrectParentheses( _this, expression ))
    {
      EwSignal( EwNewSlot( _this, ApplicationApplication_onShowDialog ), ((XObject)_this ));
      ViewsText_OnSetString( &_this->ErrDialog->ErrorText, EwLoadString( &_Const0012 ));
      return 0;
    }
    else
      if ( !ApplicationApplication_OperatorsCorrectlyUsed( _this, expression ))
      {
        EwSignal( EwNewSlot( _this, ApplicationApplication_onShowDialog ), ((XObject)_this ));
        ViewsText_OnSetString( &_this->ErrDialog->ErrorText, EwLoadString( &_Const0013 ));
        return 0;
      }
      else
        if ( !ApplicationApplication_CharactersAllowed( _this, expression ))
        {
          EwSignal( EwNewSlot( _this, ApplicationApplication_onShowDialog ), ((XObject)_this ));
          ViewsText_OnSetString( &_this->ErrDialog->ErrorText, EwLoadString( &_Const0014 ));
          return 0;
        }

  return 1;
}

/* 'C' function for method : 'Application::Application.IsDigit()' */
XBool ApplicationApplication_IsDigit( ApplicationApplication _this, XChar op )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  return (XBool)((( op >= '0' ) && ( op <= '9' )) || ( op == '.' ));
}

/* 'C' function for method : 'Application::Application.CorrectParentheses()' */
XBool ApplicationApplication_CorrectParentheses( ApplicationApplication _this, XString 
  expression )
{
  XChar stack[ 1000 ] = {0};
  XInt32 top;
  XInt32 i;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  top = -1;
  i = 0;

  if ( EwCompString( expression, 0 ) != 0 )
    for ( ; i < EwGetStringLength( expression ); i++ )
    {
      XChar c = EwGetStringChar( expression, i );

      if ( c == '(' )
      {
        if ( top < 999 )
          stack[ EwCheckIndex( ++top, 1000 )] = c;
        else
          return 0;
      }
      else
        if ( c == ')' )
        {
          if ( top == -1 )
            return 0;
          else
            top--;
        }
    }

  return (XBool)( top == -1 );
}

/* 'C' function for method : 'Application::Application.OperatorsCorrectlyUsed()' */
XBool ApplicationApplication_OperatorsCorrectlyUsed( ApplicationApplication _this, 
  XString expression )
{
  XInt32 i = 0;

  if ( EwCompString( expression, 0 ) != 0 )
  {
    for ( ; i < EwGetStringLength( expression ); i++ )
      if ( i == 0 )
      {
        if ( !(((( EwGetStringChar( expression, i ) >= '0' ) && ( EwGetStringChar( 
            expression, i ) <= '9' )) || ( EwGetStringChar( expression, i ) == '-' )) 
            || ( EwGetStringChar( expression, i ) == '(' )))
          return 0;
      }
      else
      {
        if ( ApplicationApplication_IsOperator( _this, EwGetStringChar( expression, 
            i )) && ApplicationApplication_IsOperator( _this, EwGetStringChar( expression, 
            i - 1 )))
          return 0;

        if (( i == ( EwGetStringLength( expression ) - 1 )) && ApplicationApplication_IsOperator( 
            _this, EwGetStringChar( expression, i )))
          return 0;
      }
  }

  return 1;
}

/* 'C' function for method : 'Application::Application.IsParenthesis()' */
XBool ApplicationApplication_IsParenthesis( ApplicationApplication _this, XChar 
  op )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );

  if (( op == '(' ) || ( op == ')' ))
    return 1;

  return 0;
}

/* 'C' function for method : 'Application::Application.onShowDialog()' */
void ApplicationApplication_onShowDialog( ApplicationApplication _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  _this->ErrDialog = EwNewObject( ApplicationErrorDialog, 0 );
  CoreRectView__OnSetBounds( _this->ErrDialog, EwSetRectX( _this->ErrDialog->Super2.Bounds, 
  45 ));
  CoreRectView__OnSetBounds( _this->ErrDialog, EwSetRectY( _this->ErrDialog->Super2.Bounds, 
  185 ));
  CoreView_OnSetStackingPriority((CoreView)_this->ErrDialog, 3 );
  _this->ErrDialog->OnCloseDialog = EwNewSlot( _this, ApplicationApplication_onCloseDialog );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)_this->ErrDialog ), 0 );
  CoreRoot_BeginModal((CoreRoot)_this, ((CoreGroup)_this->ErrDialog ));
}

/* 'C' function for method : 'Application::Application.onCloseDialog()' */
void ApplicationApplication_onCloseDialog( ApplicationApplication _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreRoot_EndModal((CoreRoot)_this, ((CoreGroup)_this->ErrDialog ));
  CoreGroup_Remove((CoreGroup)_this, ((CoreView)_this->ErrDialog ));
  _this->ErrDialog = 0;
}

/* 'C' function for method : 'Application::Application.CharactersAllowed()' */
XBool ApplicationApplication_CharactersAllowed( ApplicationApplication _this, XString 
  expression )
{
  XInt32 i = 0;

  for ( ; i < EwGetStringLength( expression ); i++ )
    if ((( ApplicationApplication_IsOperator( _this, EwGetStringChar( expression, 
        i )) == 0 ) && ( ApplicationApplication_IsParenthesis( _this, EwGetStringChar( 
        expression, i )) == 0 )) && ( ApplicationApplication_IsDigit( _this, EwGetStringChar( 
        expression, i )) == 0 ))
      return 0;

  return 1;
}

/* 'C' function for method : 'Application::Application.ExecuteOperation()' */
XFloat ApplicationApplication_ExecuteOperation( ApplicationApplication _this, XString 
  expression )
{
  XFloat firstOp = 0.0f;
  XFloat secondOp = 0.0f;
  XFloat res = 0.0f;
  XInt32 i = 0;
  ApplicationPair pair = EwNewObject( ApplicationPair, 0 );
  XFloat intermediate = 0.0f;
  XBool firstSet = 0;
  XBool secondSet = 0;
  XBool intermediateSet = 0;
  XChar op = 0x0000;

  for ( ; i < EwGetStringLength( expression ); i++ )
  {
    if ( EwGetStringChar( expression, i ) == '(' )
    {
      pair = ApplicationApplication_GetSubexpressionInParentheses( _this, i, expression );
      intermediate = ApplicationApplication_ExecuteOperation( _this, pair->Subexpression );
      intermediateSet = 1;
      i = pair->EndPosition;
      continue;
    }

    if ( EwGetStringChar( expression, i ) == ')' )
      continue;

    if ( ApplicationApplication_IsDigit( _this, EwGetStringChar( expression, i )))
    {
      pair = ApplicationApplication_GetNumberFromPosition( _this, i, expression );
      i = pair->EndPosition;

      if (( !firstSet && !secondSet ) && !intermediateSet )
      {
        firstOp = pair->IdentifiedNumber;
        firstSet = 1;
        continue;
      }

      if (( !firstSet && !secondSet ) && intermediateSet )
      {
        firstOp = intermediate;
        intermediate = 0.0f;
        firstSet = 1;
        intermediateSet = 0;
      }

      if (( firstSet && !secondSet ) && !intermediateSet )
      {
        secondOp = pair->IdentifiedNumber;
        secondSet = 1;
      }

      if (( firstSet && !secondSet ) && intermediateSet )
      {
        secondOp = intermediate;
        intermediate = 0.0f;
        secondSet = 1;
        intermediateSet = 0;
      }

      if (( firstSet && secondSet ) && ( op != 0x0000 ))
      {
        res = ApplicationApplication_ExecTwoOp( _this, firstOp, secondOp, EwNewStringChar( 
        op, 1 ));
        firstOp = 0.0f;
        secondOp = 0.0f;
        firstSet = 0;
        secondSet = 0;
        op = 0x0000;
      }

      continue;
    }

    if ( ApplicationApplication_IsOperator( _this, EwGetStringChar( expression, 
        i )))
      op = EwGetStringChar( expression, i );
  }

  return res;
}

/* Variants derived from the class : 'Application::Application' */
EW_DEFINE_CLASS_VARIANTS( ApplicationApplication )
EW_END_OF_CLASS_VARIANTS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_CLASS( ApplicationApplication, CoreRoot, TextTxt, ErrDialog, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Application::Application" )
  CoreRectView_initLayoutContext,
  CoreRoot_GetRoot,
  CoreRoot_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreRoot_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreRoot_OnSetFocus,
  CoreRoot_OnSetBuffered,
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreRoot_InvalidateArea,
EW_END_OF_CLASS( ApplicationApplication )

/* Include a file containing the font resource : 'Application::NumFont' */
#include "_ApplicationNumFont.h"

/* Table with links to derived variants of the font resource : 'Application::NumFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationNumFont )

/* Include a file containing the font resource : 'Application::DigitalResFont' */
#include "_ApplicationDigitalResFont.h"

/* Table with links to derived variants of the font resource : 'Application::DigitalResFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationDigitalResFont )

/* Initializer for the class 'Application::NumKeyBtns' */
void ApplicationNumKeyBtns__Init( ApplicationNumKeyBtns _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationNumKeyBtns );

  /* ... then construct all embedded objects */
  ViewsBorder__Init( &_this->Border, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->DigitOpConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->EqualsConfig, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->FlashKeyTimer, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->empty00, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->empty01, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->empty02, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->One, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Two, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Three, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Four, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Five, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Six, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Seven, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Eight, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Nine, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Zero, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Clear, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Plus, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Minus, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Multiply, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Divide, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PlusNeg, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Dot, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Power, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Percentage, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->OpenParanthesis, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->ClosedParanthesis, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Equals, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->PowConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->PercentConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->DigitOpBoldConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->DivideConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->MultiplyConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->ParanthesisConfig, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->NegateNumbers, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->BackConfig, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->BackBtn, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationNumKeyBtns );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0015 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Border, -1 );
  CoreRectView__OnSetBounds( &_this->Border, _Const0016 );
  ViewsBorder_OnSetRadius( &_this->Border, 5 );
  ViewsBorder_OnSetWidth( &_this->Border, 2 );
  ViewsBorder_OnSetColor( &_this->Border, _Const0009 );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->DigitOpConfig, CoreKeyCodeNoKey );
  WidgetSetPushButtonConfig_OnSetAccentColorFocused( &_this->DigitOpConfig, _Const0017 );
  WidgetSetPushButtonConfig_OnSetAccentColorDefault( &_this->DigitOpConfig, _Const0018 );
  WidgetSetPushButtonConfig_OnSetAccentLayout( &_this->DigitOpConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->DigitOpConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->DigitOpConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->DigitOpConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->DigitOpConfig, _Const001A );
  WidgetSetPushButtonConfig_OnSetFaceLayout( &_this->DigitOpConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->DigitOpConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->DigitOpConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->DigitOpConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->DigitOpConfig, 0 );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->EqualsConfig, CoreKeyCodeEnter );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->EqualsConfig, _Const001B );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->EqualsConfig, _Const001B );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->EqualsConfig, _Const001B );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->EqualsConfig, _Const001C );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->EqualsConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->EqualsConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->EqualsConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->EqualsConfig, 0 );
  CoreTimer_OnSetPeriod( &_this->FlashKeyTimer, 0 );
  CoreTimer_OnSetBegin( &_this->FlashKeyTimer, 100 );
  CoreTimer_OnSetEnabled( &_this->FlashKeyTimer, 0 );
  CoreRectView__OnSetBounds( &_this->empty00, _Const001D );
  WidgetSetPushButton_OnSetLabel( &_this->empty00, EwLoadString( &_Const001E ));
  CoreRectView__OnSetBounds( &_this->empty01, _Const001F );
  WidgetSetPushButton_OnSetLabel( &_this->empty01, EwLoadString( &_Const001E ));
  CoreRectView__OnSetBounds( &_this->empty02, _Const0020 );
  WidgetSetPushButton_OnSetLabel( &_this->empty02, EwLoadString( &_Const001E ));
  CoreRectView__OnSetBounds( &_this->One, _Const0021 );
  WidgetSetPushButton_OnSetLabel( &_this->One, EwLoadString( &_Const0022 ));
  CoreRectView__OnSetBounds( &_this->Two, _Const0023 );
  WidgetSetPushButton_OnSetLabel( &_this->Two, EwLoadString( &_Const0024 ));
  CoreRectView__OnSetBounds( &_this->Three, _Const0025 );
  WidgetSetPushButton_OnSetLabel( &_this->Three, EwLoadString( &_Const0026 ));
  CoreRectView__OnSetBounds( &_this->Four, _Const0027 );
  WidgetSetPushButton_OnSetLabel( &_this->Four, EwLoadString( &_Const0028 ));
  CoreRectView__OnSetBounds( &_this->Five, _Const0029 );
  WidgetSetPushButton_OnSetLabel( &_this->Five, EwLoadString( &_Const002A ));
  CoreRectView__OnSetBounds( &_this->Six, _Const002B );
  WidgetSetPushButton_OnSetLabel( &_this->Six, EwLoadString( &_Const002C ));
  CoreRectView__OnSetBounds( &_this->Seven, _Const002D );
  WidgetSetPushButton_OnSetLabel( &_this->Seven, EwLoadString( &_Const002E ));
  CoreRectView__OnSetBounds( &_this->Eight, _Const002F );
  WidgetSetPushButton_OnSetLabel( &_this->Eight, EwLoadString( &_Const0030 ));
  CoreRectView__OnSetBounds( &_this->Nine, _Const0031 );
  WidgetSetPushButton_OnSetLabel( &_this->Nine, EwLoadString( &_Const0032 ));
  CoreRectView__OnSetBounds( &_this->Zero, _Const0033 );
  WidgetSetPushButton_OnSetLabel( &_this->Zero, EwLoadString( &_Const0034 ));
  CoreRectView__OnSetBounds( &_this->Clear, _Const0035 );
  WidgetSetPushButton_OnSetLabel( &_this->Clear, EwLoadString( &_Const000C ));
  CoreRectView__OnSetBounds( &_this->Plus, _Const0036 );
  WidgetSetPushButton_OnSetLabel( &_this->Plus, EwLoadString( &_Const0037 ));
  CoreRectView__OnSetBounds( &_this->Minus, _Const0038 );
  WidgetSetPushButton_OnSetLabel( &_this->Minus, EwLoadString( &_Const0039 ));
  CoreRectView__OnSetBounds( &_this->Multiply, _Const003A );
  WidgetSetPushButton_OnSetLabel( &_this->Multiply, EwLoadString( &_Const000F ));
  CoreRectView__OnSetBounds( &_this->Divide, _Const003B );
  WidgetSetPushButton_OnSetLabel( &_this->Divide, EwLoadString( &_Const003C ));
  CoreRectView__OnSetBounds( &_this->PlusNeg, _Const003D );
  WidgetSetPushButton_OnSetLabel( &_this->PlusNeg, EwLoadString( &_Const003E ));
  CoreView_OnSetLayout((CoreView)&_this->Dot, CoreLayoutAlignToLeft | CoreLayoutAlignToTop );
  CoreRectView__OnSetBounds( &_this->Dot, _Const003F );
  WidgetSetPushButton_OnSetLabel( &_this->Dot, EwLoadString( &_Const0040 ));
  CoreRectView__OnSetBounds( &_this->Power, _Const0041 );
  WidgetSetPushButton_OnSetIconFrameActive( &_this->Power, 1 );
  WidgetSetPushButton_OnSetIconFrameFocused( &_this->Power, 1 );
  WidgetSetPushButton_OnSetIconFrameDefault( &_this->Power, 0 );
  WidgetSetPushButton_OnSetIconFrame( &_this->Power, 0 );
  WidgetSetPushButton_OnSetLabel( &_this->Power, EwLoadString( &_Const0042 ));
  CoreRectView__OnSetBounds( &_this->Percentage, _Const0043 );
  WidgetSetPushButton_OnSetLabel( &_this->Percentage, EwLoadString( &_Const0044 ));
  CoreRectView__OnSetBounds( &_this->OpenParanthesis, _Const0045 );
  WidgetSetPushButton_OnSetLabel( &_this->OpenParanthesis, EwLoadString( &_Const000E ));
  CoreRectView__OnSetBounds( &_this->ClosedParanthesis, _Const0046 );
  WidgetSetPushButton_OnSetLabel( &_this->ClosedParanthesis, EwLoadString( &_Const0047 ));
  CoreRectView__OnSetBounds( &_this->Equals, _Const0048 );
  WidgetSetPushButton_OnSetLabel( &_this->Equals, EwLoadString( &_Const000D ));
  WidgetSetPushButtonConfig_OnSetIconMarginBottom( &_this->PowConfig, 2 );
  WidgetSetPushButtonConfig_OnSetIconMarginTop( &_this->PowConfig, 2 );
  WidgetSetPushButtonConfig_OnSetIconMarginRight( &_this->PowConfig, 2 );
  WidgetSetPushButtonConfig_OnSetIconMarginLeft( &_this->PowConfig, 2 );
  WidgetSetPushButtonConfig_OnSetIconAlignment( &_this->PowConfig, ViewsImageAlignmentAlignHorzCenter 
  | ViewsImageAlignmentAlignVertCenter );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->PowConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->PowConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->PowConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->PowConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->PercentConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->PercentConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->PercentConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->PercentConfig, 0 );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->DigitOpBoldConfig, CoreKeyCodeNoKey );
  WidgetSetPushButtonConfig_OnSetAccentColorFocused( &_this->DigitOpBoldConfig, 
  _Const0017 );
  WidgetSetPushButtonConfig_OnSetAccentColorDefault( &_this->DigitOpBoldConfig, 
  _Const0018 );
  WidgetSetPushButtonConfig_OnSetAccentLayout( &_this->DigitOpBoldConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->DigitOpBoldConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->DigitOpBoldConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->DigitOpBoldConfig, 
  _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->DigitOpBoldConfig, _Const001A );
  WidgetSetPushButtonConfig_OnSetFaceLayout( &_this->DigitOpBoldConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->DigitOpBoldConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->DigitOpBoldConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->DigitOpBoldConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->DigitOpBoldConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->DivideConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->DivideConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->DivideConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->DivideConfig, 0 );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->MultiplyConfig, CoreKeyCodeNoKey );
  WidgetSetPushButtonConfig_OnSetAccentColorFocused( &_this->MultiplyConfig, _Const0017 );
  WidgetSetPushButtonConfig_OnSetAccentColorDefault( &_this->MultiplyConfig, _Const0018 );
  WidgetSetPushButtonConfig_OnSetAccentLayout( &_this->MultiplyConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->MultiplyConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->MultiplyConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->MultiplyConfig, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->MultiplyConfig, _Const001A );
  WidgetSetPushButtonConfig_OnSetFaceLayout( &_this->MultiplyConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->MultiplyConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->MultiplyConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->MultiplyConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->MultiplyConfig, 0 );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->ParanthesisConfig, CoreKeyCodeNoKey );
  WidgetSetPushButtonConfig_OnSetAccentColorFocused( &_this->ParanthesisConfig, 
  _Const0017 );
  WidgetSetPushButtonConfig_OnSetAccentColorDefault( &_this->ParanthesisConfig, 
  _Const0018 );
  WidgetSetPushButtonConfig_OnSetAccentLayout( &_this->ParanthesisConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->ParanthesisConfig, _Const001B );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->ParanthesisConfig, _Const001B );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->ParanthesisConfig, 
  _Const001B );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->ParanthesisConfig, _Const001A );
  WidgetSetPushButtonConfig_OnSetFaceLayout( &_this->ParanthesisConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->ParanthesisConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->ParanthesisConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->ParanthesisConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->ParanthesisConfig, 0 );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->NegateNumbers, CoreKeyCodeNoKey );
  WidgetSetPushButtonConfig_OnSetAccentColorFocused( &_this->NegateNumbers, _Const0017 );
  WidgetSetPushButtonConfig_OnSetAccentColorDefault( &_this->NegateNumbers, _Const0018 );
  WidgetSetPushButtonConfig_OnSetAccentLayout( &_this->NegateNumbers, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->NegateNumbers, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->NegateNumbers, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->NegateNumbers, _Const0019 );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->NegateNumbers, _Const001A );
  WidgetSetPushButtonConfig_OnSetFaceLayout( &_this->NegateNumbers, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->NegateNumbers, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->NegateNumbers, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->NegateNumbers, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->NegateNumbers, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->BackConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->BackConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->BackConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->BackConfig, 0 );
  CoreRectView__OnSetBounds( &_this->BackBtn, _Const0049 );
  WidgetSetPushButton_OnSetLabel( &_this->BackBtn, EwLoadString( &_Const003C ));
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Border ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->empty00 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->empty01 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->empty02 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->One ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Two ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Three ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Four ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Five ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Six ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Seven ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Eight ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Nine ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Zero ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Clear ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Plus ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Minus ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Multiply ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Divide ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PlusNeg ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Dot ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Power ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Percentage ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->OpenParanthesis ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ClosedParanthesis ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Equals ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BackBtn ), 0 );
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->DigitOpConfig, EwLoadResource( 
  &ApplicationNumFont, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->DigitOpConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->DigitOpConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->DigitOpConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->DigitOpConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetOnUpdate( &_this->EqualsConfig, EwNullSlot );
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->EqualsConfig, EwLoadResource( 
  &ApplicationEqFont, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->EqualsConfig, EwLoadResource( 
  &ApplicationEqualsBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->EqualsConfig, EwLoadResource( 
  &ApplicationEqualsBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->EqualsConfig, EwLoadResource( 
  &ApplicationEqualsBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->EqualsConfig, EwLoadResource( 
  &ApplicationEqualsBtn, ResourcesBitmap ));
  _this->FlashKeyTimer.OnTrigger = EwNewSlot( _this, ApplicationNumKeyBtns_triggerTimer );
  WidgetSetPushButton_OnSetAppearance( &_this->empty00, &_this->DigitOpConfig );
  WidgetSetPushButton_OnSetAppearance( &_this->empty01, &_this->PowConfig );
  WidgetSetPushButton_OnSetAppearance( &_this->empty02, &_this->PercentConfig );
  _this->One.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->One, &_this->DigitOpConfig );
  _this->Two.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Two, &_this->DigitOpConfig );
  _this->Three.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Three, &_this->DigitOpConfig );
  _this->Four.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Four, &_this->DigitOpConfig );
  _this->Five.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Five, &_this->DigitOpConfig );
  _this->Six.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Six, &_this->DigitOpConfig );
  _this->Seven.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Seven, &_this->DigitOpConfig );
  _this->Eight.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Eight, &_this->DigitOpConfig );
  _this->Nine.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Nine, &_this->DigitOpConfig );
  _this->Zero.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Zero, &_this->DigitOpConfig );
  _this->Clear.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Clear, &_this->MultiplyConfig );
  _this->Plus.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Plus, &_this->DigitOpBoldConfig );
  _this->Minus.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Minus, &_this->MultiplyConfig );
  _this->Multiply.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Multiply, &_this->MultiplyConfig );
  _this->Divide.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Divide, &_this->DivideConfig );
  _this->PlusNeg.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->PlusNeg, &_this->NegateNumbers );
  _this->Dot.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Dot, &_this->DigitOpConfig );
  _this->Power.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetIcon( &_this->Power, 0 );
  WidgetSetPushButton_OnSetAppearance( &_this->Power, &_this->PowConfig );
  _this->Percentage.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Percentage, &_this->PercentConfig );
  _this->OpenParanthesis.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->OpenParanthesis, &_this->ParanthesisConfig );
  _this->ClosedParanthesis.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->ClosedParanthesis, &_this->ParanthesisConfig );
  _this->Equals.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->Equals, &_this->EqualsConfig );
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->PowConfig, EwLoadResource( 
  &ApplicationPowBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->PowConfig, EwLoadResource( 
  &ApplicationPowBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->PowConfig, EwLoadResource( 
  &ApplicationPowBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->PowConfig, EwLoadResource( 
  &ApplicationPowBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->PercentConfig, EwLoadResource( 
  &ApplicationPercentBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->PercentConfig, EwLoadResource( 
  &ApplicationPercentBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->PercentConfig, EwLoadResource( 
  &ApplicationPercentBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->PercentConfig, EwLoadResource( 
  &ApplicationPercentBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->DigitOpBoldConfig, EwLoadResource( 
  &ApplicationNumBoldFont, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->DigitOpBoldConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->DigitOpBoldConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->DigitOpBoldConfig, 
  EwLoadResource( &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->DigitOpBoldConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->DivideConfig, EwLoadResource( 
  &ApplicationDivideBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->DivideConfig, EwLoadResource( 
  &ApplicationDivideBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->DivideConfig, EwLoadResource( 
  &ApplicationDivideBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->DivideConfig, EwLoadResource( 
  &ApplicationDivideBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->MultiplyConfig, EwLoadResource( 
  &ApplicationMultiplyFont, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->MultiplyConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->MultiplyConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->MultiplyConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->MultiplyConfig, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->ParanthesisConfig, EwLoadResource( 
  &ApplicationNumFont, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->ParanthesisConfig, EwLoadResource( 
  &ApplicationParenthesisBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->ParanthesisConfig, EwLoadResource( 
  &ApplicationParenthesisBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->ParanthesisConfig, 
  EwLoadResource( &ApplicationParenthesisBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->ParanthesisConfig, EwLoadResource( 
  &ApplicationParenthesisBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->NegateNumbers, EwLoadResource( 
  &ApplicationNumFont1, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->NegateNumbers, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->NegateNumbers, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->NegateNumbers, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->NegateNumbers, EwLoadResource( 
  &ApplicationCustomBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->BackConfig, EwLoadResource( 
  &ApplicationBackBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->BackConfig, EwLoadResource( 
  &ApplicationBackBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->BackConfig, EwLoadResource( 
  &ApplicationBackBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->BackConfig, EwLoadResource( 
  &ApplicationBackBtn, ResourcesBitmap ));
  _this->BackBtn.OnActivate = EwNewSlot( _this, ApplicationNumKeyBtns_onActivateKey );
  WidgetSetPushButton_OnSetAppearance( &_this->BackBtn, &_this->BackConfig );
}

/* Re-Initializer for the class 'Application::NumKeyBtns' */
void ApplicationNumKeyBtns__ReInit( ApplicationNumKeyBtns _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsBorder__ReInit( &_this->Border );
  WidgetSetPushButtonConfig__ReInit( &_this->DigitOpConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->EqualsConfig );
  CoreTimer__ReInit( &_this->FlashKeyTimer );
  WidgetSetPushButton__ReInit( &_this->empty00 );
  WidgetSetPushButton__ReInit( &_this->empty01 );
  WidgetSetPushButton__ReInit( &_this->empty02 );
  WidgetSetPushButton__ReInit( &_this->One );
  WidgetSetPushButton__ReInit( &_this->Two );
  WidgetSetPushButton__ReInit( &_this->Three );
  WidgetSetPushButton__ReInit( &_this->Four );
  WidgetSetPushButton__ReInit( &_this->Five );
  WidgetSetPushButton__ReInit( &_this->Six );
  WidgetSetPushButton__ReInit( &_this->Seven );
  WidgetSetPushButton__ReInit( &_this->Eight );
  WidgetSetPushButton__ReInit( &_this->Nine );
  WidgetSetPushButton__ReInit( &_this->Zero );
  WidgetSetPushButton__ReInit( &_this->Clear );
  WidgetSetPushButton__ReInit( &_this->Plus );
  WidgetSetPushButton__ReInit( &_this->Minus );
  WidgetSetPushButton__ReInit( &_this->Multiply );
  WidgetSetPushButton__ReInit( &_this->Divide );
  WidgetSetPushButton__ReInit( &_this->PlusNeg );
  WidgetSetPushButton__ReInit( &_this->Dot );
  WidgetSetPushButton__ReInit( &_this->Power );
  WidgetSetPushButton__ReInit( &_this->Percentage );
  WidgetSetPushButton__ReInit( &_this->OpenParanthesis );
  WidgetSetPushButton__ReInit( &_this->ClosedParanthesis );
  WidgetSetPushButton__ReInit( &_this->Equals );
  WidgetSetPushButtonConfig__ReInit( &_this->PowConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->PercentConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->DigitOpBoldConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->DivideConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->MultiplyConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->ParanthesisConfig );
  WidgetSetPushButtonConfig__ReInit( &_this->NegateNumbers );
  WidgetSetPushButtonConfig__ReInit( &_this->BackConfig );
  WidgetSetPushButton__ReInit( &_this->BackBtn );
}

/* Finalizer method for the class 'Application::NumKeyBtns' */
void ApplicationNumKeyBtns__Done( ApplicationNumKeyBtns _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsBorder__Done( &_this->Border );
  WidgetSetPushButtonConfig__Done( &_this->DigitOpConfig );
  WidgetSetPushButtonConfig__Done( &_this->EqualsConfig );
  CoreTimer__Done( &_this->FlashKeyTimer );
  WidgetSetPushButton__Done( &_this->empty00 );
  WidgetSetPushButton__Done( &_this->empty01 );
  WidgetSetPushButton__Done( &_this->empty02 );
  WidgetSetPushButton__Done( &_this->One );
  WidgetSetPushButton__Done( &_this->Two );
  WidgetSetPushButton__Done( &_this->Three );
  WidgetSetPushButton__Done( &_this->Four );
  WidgetSetPushButton__Done( &_this->Five );
  WidgetSetPushButton__Done( &_this->Six );
  WidgetSetPushButton__Done( &_this->Seven );
  WidgetSetPushButton__Done( &_this->Eight );
  WidgetSetPushButton__Done( &_this->Nine );
  WidgetSetPushButton__Done( &_this->Zero );
  WidgetSetPushButton__Done( &_this->Clear );
  WidgetSetPushButton__Done( &_this->Plus );
  WidgetSetPushButton__Done( &_this->Minus );
  WidgetSetPushButton__Done( &_this->Multiply );
  WidgetSetPushButton__Done( &_this->Divide );
  WidgetSetPushButton__Done( &_this->PlusNeg );
  WidgetSetPushButton__Done( &_this->Dot );
  WidgetSetPushButton__Done( &_this->Power );
  WidgetSetPushButton__Done( &_this->Percentage );
  WidgetSetPushButton__Done( &_this->OpenParanthesis );
  WidgetSetPushButton__Done( &_this->ClosedParanthesis );
  WidgetSetPushButton__Done( &_this->Equals );
  WidgetSetPushButtonConfig__Done( &_this->PowConfig );
  WidgetSetPushButtonConfig__Done( &_this->PercentConfig );
  WidgetSetPushButtonConfig__Done( &_this->DigitOpBoldConfig );
  WidgetSetPushButtonConfig__Done( &_this->DivideConfig );
  WidgetSetPushButtonConfig__Done( &_this->MultiplyConfig );
  WidgetSetPushButtonConfig__Done( &_this->ParanthesisConfig );
  WidgetSetPushButtonConfig__Done( &_this->NegateNumbers );
  WidgetSetPushButtonConfig__Done( &_this->BackConfig );
  WidgetSetPushButton__Done( &_this->BackBtn );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::NumKeyBtns.onActivateKey()' */
void ApplicationNumKeyBtns_onActivateKey( ApplicationNumKeyBtns _this, XObject sender )
{
  WidgetSetPushButton currentSender = EwCastObject( sender, WidgetSetPushButton );

  if ( currentSender != 0 )
  {
    XChar charCode;
    ApplicationNumKeyBtns_OnSetkeyString( _this, currentSender->Label );
    charCode = 0x0000;

    if ( EwCompString( _this->keyString, 0 ) != 0 )
    {
      charCode = EwGetStringChar( _this->keyString, 0 );

      if ( charCode != 0x0000 )
      {
        CoreRoot_DriveKeyboardHitting( CoreView__GetRoot( _this ), CoreKeyCodeNoKey, 
        charCode, 1 );
        CoreRoot_DriveKeyboardHitting( CoreView__GetRoot( _this ), CoreKeyCodeNoKey, 
        charCode, 0 );
      }
    }
    else
      EwTrace( "%s", EwLoadString( &_Const004A ));
  }
  else
    EwTrace( "%s", EwLoadString( &_Const004B ));
}

/* 'C' function for method : 'Application::NumKeyBtns.OnSetkeyString()' */
void ApplicationNumKeyBtns_OnSetkeyString( ApplicationNumKeyBtns _this, XString 
  value )
{
  if ( !EwCompString( _this->keyString, value ))
    return;

  _this->keyString = EwShareString( value );
}

/* 'C' function for method : 'Application::NumKeyBtns.triggerTimer()' */
void ApplicationNumKeyBtns_triggerTimer( ApplicationNumKeyBtns _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );
}

/* Variants derived from the class : 'Application::NumKeyBtns' */
EW_DEFINE_CLASS_VARIANTS( ApplicationNumKeyBtns )
EW_END_OF_CLASS_VARIANTS( ApplicationNumKeyBtns )

/* Virtual Method Table (VMT) for the class : 'Application::NumKeyBtns' */
EW_DEFINE_CLASS( ApplicationNumKeyBtns, CoreGroup, Border, keyString, keyString, 
                 keyString, keyString, _.VMT, "Application::NumKeyBtns" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetBuffered,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationNumKeyBtns )

/* Include a file containing the bitmap resource : 'Application::CustomBtn' */
#include "_ApplicationCustomBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::CustomBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationCustomBtn )

/* Initializer for the class 'Application::ResultTxtEd' */
void ApplicationResultTxtEd__Init( ApplicationResultTxtEd _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  TemplatesTextEditor__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationResultTxtEd );

  /* ... then construct all embedded objects */
  EffectsBoolEffect__Init( &_this->blinkEffect, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->CursorKeyHandler, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->BackspaceKeyHandler, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->DeleteKeyHandler, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->NewlineKeyHandler, &_this->_.XObject, 0 );
  CoreKeyPressHandler__Init( &_this->CharacterKeyHandler, &_this->_.XObject, 0 );
  CoreSlideTouchHandler__Init( &_this->SlideTouchHandler, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->SimpleTouchHandler, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Text, &_this->_.XObject, 0 );
  ViewsLine__Init( &_this->Caret, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationResultTxtEd );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const004C );
  _this->blinkEffect.Value2 = 0;
  _this->blinkEffect.Value1 = 1;
  EffectsBoolEffect_OnSetCycleDuration( &_this->blinkEffect, 500 );
  EffectsBoolEffect_OnSetInterCycleDelay( &_this->blinkEffect, 500 );
  _this->CursorKeyHandler.Filter = CoreKeyCodeCursorKeys;
  _this->BackspaceKeyHandler.Filter = CoreKeyCodeBackspace;
  _this->DeleteKeyHandler.Filter = CoreKeyCodeDelete;
  _this->NewlineKeyHandler.Filter = CoreKeyCodeEnter;
  _this->CharacterKeyHandler.Filter = CoreKeyCodeCharacterKeys;
  CoreView_OnSetLayout((CoreView)&_this->SlideTouchHandler, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  CoreRectView__OnSetBounds( &_this->SlideTouchHandler, _Const004C );
  _this->SlideTouchHandler.SlideHorz = 0;
  CoreSlideTouchHandler_OnSetFriction( &_this->SlideTouchHandler, 0.05f );
  CoreView_OnSetLayout((CoreView)&_this->SimpleTouchHandler, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  CoreQuadView__OnSetPoint4( &_this->SimpleTouchHandler, _Const004D );
  CoreQuadView__OnSetPoint3( &_this->SimpleTouchHandler, _Const004E );
  CoreQuadView__OnSetPoint2( &_this->SimpleTouchHandler, _Const004F );
  CoreQuadView__OnSetPoint1( &_this->SimpleTouchHandler, _Const0050 );
  CoreSimpleTouchHandler_OnSetMaxStrikeCount( &_this->SimpleTouchHandler, 3 );
  CoreView_OnSetLayout((CoreView)&_this->Text, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz | CoreLayoutResizeVert );
  CoreRectView__OnSetBounds( &_this->Text, _Const0051 );
  ViewsText_OnSetWrapText( &_this->Text, 1 );
  ViewsText_OnSetAlignment( &_this->Text, ViewsTextAlignmentAlignHorzLeft | ViewsTextAlignmentAlignVertCenter );
  ViewsText_OnSetString( &_this->Text, EwLoadString( &_Const0052 ));
  ViewsText_OnSetColor( &_this->Text, _Const001A );
  CoreLineView_OnSetPoint2((CoreLineView)&_this->Caret, _Const0053 );
  CoreLineView_OnSetPoint1((CoreLineView)&_this->Caret, _Const0054 );
  ViewsLine_OnSetWidth2( &_this->Caret, 2 );
  ViewsLine_OnSetWidth1( &_this->Caret, 2 );
  ViewsLine_OnSetColor( &_this->Caret, _Const001A );
  ViewsLine_OnSetVisible( &_this->Caret, 0 );
  _this->WrapText = 1;
  _this->Alignment = ViewsTextAlignmentAlignHorzLeft | ViewsTextAlignmentAlignVertCenter;
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SlideTouchHandler ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SimpleTouchHandler ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Text ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Caret ), 0 );
  _this->blinkEffect.Outlet = EwNewRef( &_this->Caret, ViewsLine_OnGetVisible, ViewsLine_OnSetVisible );
  _this->CursorKeyHandler.OnPress = EwNewSlot( _this, ApplicationResultTxtEd_onCursorKey );
  _this->CursorKeyHandler.OnHold = EwNewSlot( _this, ApplicationResultTxtEd_onCursorKey );
  _this->BackspaceKeyHandler.OnPress = EwNewSlot( _this, ApplicationResultTxtEd_onBackspaceKey );
  _this->BackspaceKeyHandler.OnHold = EwNewSlot( _this, ApplicationResultTxtEd_onBackspaceKey );
  _this->DeleteKeyHandler.OnPress = EwNewSlot( _this, ApplicationResultTxtEd_onDeleteKey );
  _this->DeleteKeyHandler.OnHold = EwNewSlot( _this, ApplicationResultTxtEd_onDeleteKey );
  _this->NewlineKeyHandler.OnPress = EwNewSlot( _this, ApplicationResultTxtEd_onNewlineKey );
  _this->NewlineKeyHandler.OnHold = EwNewSlot( _this, ApplicationResultTxtEd_onNewlineKey );
  _this->CharacterKeyHandler.OnPress = EwNewSlot( _this, ApplicationResultTxtEd_onCharacterKey );
  _this->CharacterKeyHandler.OnHold = EwNewSlot( _this, ApplicationResultTxtEd_onCharacterKey );
  _this->SimpleTouchHandler.OnDrag = EwNewSlot( _this, ApplicationResultTxtEd_onDragTouch );
  _this->SimpleTouchHandler.OnHold = EwNewSlot( _this, ApplicationResultTxtEd_onHoldTouch );
  _this->SimpleTouchHandler.OnRelease = EwNewSlot( _this, ApplicationResultTxtEd_onReleaseTouch );
  _this->SimpleTouchHandler.OnPress = EwNewSlot( _this, ApplicationResultTxtEd_onPressTouch );
  ViewsText_OnSetOnUpdate( &_this->Text, EwNewSlot( _this, ApplicationResultTxtEd_updateCaret ));
  ViewsText_OnSetSlideHandler( &_this->Text, &_this->SlideTouchHandler );
  ViewsText_OnSetFont( &_this->Text, EwLoadResource( &ResourcesFontMedium, ResourcesFont ));
  _this->Font = EwLoadResource( &ResourcesFontMedium, ResourcesFont );
}

/* Re-Initializer for the class 'Application::ResultTxtEd' */
void ApplicationResultTxtEd__ReInit( ApplicationResultTxtEd _this )
{
  /* At first re-initialize the super class ... */
  TemplatesTextEditor__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  EffectsBoolEffect__ReInit( &_this->blinkEffect );
  CoreKeyPressHandler__ReInit( &_this->CursorKeyHandler );
  CoreKeyPressHandler__ReInit( &_this->BackspaceKeyHandler );
  CoreKeyPressHandler__ReInit( &_this->DeleteKeyHandler );
  CoreKeyPressHandler__ReInit( &_this->NewlineKeyHandler );
  CoreKeyPressHandler__ReInit( &_this->CharacterKeyHandler );
  CoreSlideTouchHandler__ReInit( &_this->SlideTouchHandler );
  CoreSimpleTouchHandler__ReInit( &_this->SimpleTouchHandler );
  ViewsText__ReInit( &_this->Text );
  ViewsLine__ReInit( &_this->Caret );
}

/* Finalizer method for the class 'Application::ResultTxtEd' */
void ApplicationResultTxtEd__Done( ApplicationResultTxtEd _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( TemplatesTextEditor );

  /* Finalize all embedded objects */
  EffectsBoolEffect__Done( &_this->blinkEffect );
  CoreKeyPressHandler__Done( &_this->CursorKeyHandler );
  CoreKeyPressHandler__Done( &_this->BackspaceKeyHandler );
  CoreKeyPressHandler__Done( &_this->DeleteKeyHandler );
  CoreKeyPressHandler__Done( &_this->NewlineKeyHandler );
  CoreKeyPressHandler__Done( &_this->CharacterKeyHandler );
  CoreSlideTouchHandler__Done( &_this->SlideTouchHandler );
  CoreSimpleTouchHandler__Done( &_this->SimpleTouchHandler );
  ViewsText__Done( &_this->Text );
  ViewsLine__Done( &_this->Caret );

  /* Don't forget to deinitialize the super class ... */
  TemplatesTextEditor__Done( &_this->_.Super );
}

/* The method UpdateViewState() is invoked automatically after the state of the 
   component has been changed. This method can be overridden and filled with logic 
   to ensure the visual aspect of the component does reflect its current state. 
   For example, the 'enabled' state of the component can affect its colors (disabled 
   components may appear pale). In this case the logic of the method should modify 
   the respective color properties accordingly to the current 'enabled' state. 
   The current state of the component is passed as a set in the parameter aState. 
   It reflects the very basic component state like its visibility or the ability 
   to react to user inputs. Beside this common state, the method can also involve 
   any other variables used in the component as long as they reflect its current 
   state. For example, the toggle switch component can take in account its toggle 
   state 'on' or 'off' and change accordingly the location of the slider, etc.
   Usually, this method will be invoked automatically by the framework. Optionally 
   you can request its invocation by using the method @InvalidateViewState(). */
void ApplicationResultTxtEd_UpdateViewState( ApplicationResultTxtEd _this, XSet 
  aState )
{
  CoreGroup_UpdateViewState((CoreGroup)_this, aState );

  if ((( aState & CoreViewStateFocused ) == CoreViewStateFocused ))
    EffectsBoolEffect_OnSetEnabled( &_this->blinkEffect, 1 );
  else
  {
    EffectsBoolEffect_OnSetEnabled( &_this->blinkEffect, 0 );
    ViewsLine_OnSetVisible( &_this->Caret, 0 );
  }
}

/* This slot method is called after the caret has been adjusted. Its job is to adjust 
   too the position of the magnifying glass view where the augmented text content 
   around the caret is shown. */
void ApplicationResultTxtEd_updateMagnifyingView( ApplicationResultTxtEd _this, 
  XObject sender )
{
  XRect srcArea;
  XRect extent;
  XRect bounds;
  XPoint caret;
  XInt32 srcX;
  XInt32 dstX;
  XPoint ofs;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->magnifyingView == 0 )
    return;

  srcArea = _this->magnifyingView->Super1.SourceArea;
  extent = CoreView__GetExtent( _this->magnifyingView );
  bounds = _this->Super3.Bounds;
  caret = _this->Caret.Super1.Point1;
  srcX = caret.X - ( EwGetRectW( srcArea ) / 2 );

  if ( srcX < 0 )
    srcX = 0;

  if (( srcX + EwGetRectW( srcArea )) > EwGetRectW( bounds ))
    srcX = EwGetRectW( bounds ) - EwGetRectW( srcArea );

  ViewsWarpView_OnSetSourceArea((ViewsWarpView)_this->magnifyingView, EwSetRectOrigin( 
  _this->magnifyingView->Super1.SourceArea, EwNewPoint( srcX, caret.Y )));
  dstX = ( bounds.Point1.X + caret.X ) - (( caret.X - srcX ) * 2 );
  ofs = EwNewPoint( dstX - extent.Point1.X, ( bounds.Point1.Y + caret.Y ) - extent.Point2.Y );
  CoreView__MoveView( _this->magnifyingView, ofs, 0 );
  CoreView__MoveView( _this->magnifyingBack, ofs, 0 );
}

/* This slot method is called after a short delay when the user has moved the caret 
   or modified the text. Its job is to ensure that the caret is still visible. If 
   necessary, the editor content is scrolled. */
void ApplicationResultTxtEd_updateScrollOffset( ApplicationResultTxtEd _this, XObject 
  sender )
{
  XRect bounds;
  XInt32 ofsX;
  XInt32 ofsY;
  XPoint size;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  bounds = _this->Text.Super1.Bounds;
  ofsX = 0;
  ofsY = 0;

  if ( _this->Caret.Super1.Point1.X < bounds.Point1.X )
    ofsX = bounds.Point1.X - _this->Caret.Super1.Point1.X;

  if ( _this->Caret.Super1.Point1.X > bounds.Point2.X )
    ofsX = bounds.Point2.X - _this->Caret.Super1.Point1.X;

  if ( _this->Caret.Super1.Point1.Y < bounds.Point1.Y )
    ofsY = bounds.Point1.Y - _this->Caret.Super1.Point1.Y;

  if ( _this->Caret.Super1.Point2.Y > bounds.Point2.Y )
    ofsY = bounds.Point2.Y - _this->Caret.Super1.Point2.Y;

  if (( ofsX != 0 ) || ( ofsY != 0 ))
    ViewsText_OnSetScrollOffset( &_this->Text, EwMovePointPos( _this->Text.ScrollOffset, 
    EwNewPoint( ofsX, ofsY )));

  ofsX = _this->Text.ScrollOffset.X;
  ofsY = _this->Text.ScrollOffset.Y;
  size = EwGetRectSize( ViewsText_GetContentArea( &_this->Text ));

  if ( size.X <= EwGetRectW( _this->Text.Super1.Bounds ))
    ofsX = 0;

  if ( size.Y <= EwGetRectH( _this->Text.Super1.Bounds ))
    ofsY = 0;

  ViewsText_OnSetScrollOffset( &_this->Text, EwNewPoint( ofsX, ofsY ));
}

/* This slot method is attached to the Text view. Each time the Text view has rearranged 
   the text, this method is called. Its job is to adjust the caret to the evtl. 
   new position. */
void ApplicationResultTxtEd_updateCaret( ApplicationResultTxtEd _this, XObject sender )
{
  XPoint rowCol;
  XPoint pos;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->Font == 0 )
    return;

  rowCol = ViewsText_StringIndex2RowCol( &_this->Text, _this->caretIndex );
  pos = ViewsText_RowCol2Position( &_this->Text, rowCol );
  CoreLineView_OnSetPoint1((CoreLineView)&_this->Caret, EwMovePointNeg( pos, EwNewPoint( 
  0, _this->Font->Ascent )));
  CoreLineView_OnSetPoint2((CoreLineView)&_this->Caret, EwMovePointPos( pos, EwNewPoint( 
  0, _this->Font->Descent )));

  if ( _this->blinkEffect.Enabled )
  {
    EffectsBoolEffect_OnSetEnabled( &_this->blinkEffect, 0 );
    EffectsBoolEffect_OnSetEnabled( &_this->blinkEffect, 1 );
  }

  if ( _this->autoScroll )
  {
    EwPostSignal( EwNewSlot( _this, ApplicationResultTxtEd_updateScrollOffset ), 
      ((XObject)_this ));
    _this->autoScroll = 0;
  }

  if ( _this->magnifyingView != 0 )
    EwPostSignal( EwNewSlot( _this, ApplicationResultTxtEd_updateMagnifyingView ), 
      ((XObject)_this ));
}

/* This method is called from the corresponding SimpleTouchHandler. Its job is to 
   hide the magnifying glass view again. */
void ApplicationResultTxtEd_onReleaseTouch( ApplicationResultTxtEd _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->magnifyingView != 0 )
  {
    CoreGroup_Remove( _this->Super4.Owner, ((CoreView)_this->magnifyingView ));
    CoreGroup_Remove( _this->Super4.Owner, ((CoreView)_this->magnifyingBack ));
    _this->magnifyingView = 0;
    _this->magnifyingBack = 0;
    CoreGroup__OnSetBuffered( _this, 0 );
  }
}

/* This method is called from the corresponding SimpleTouchHandler. Its job is to 
   move the caret accordingly to the user's finger movement. */
void ApplicationResultTxtEd_onDragTouch( ApplicationResultTxtEd _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->magnifyingView != 0 )
  {
    XPoint rc = ViewsText_Position2RowCol( &_this->Text, _this->SimpleTouchHandler.CurrentPos );
    XInt32 newCaretIndex = ViewsText_RowCol2StringIndex( &_this->Text, rc );
    XChar ch = EwGetStringChar( _this->Text.String, newCaretIndex );

    if ((( ch == '^' ) || ( ch == '~' )) || ( ch == '%' ))
      newCaretIndex = newCaretIndex - 1;

    if ( newCaretIndex != _this->caretIndex )
    {
      _this->caretIndex = newCaretIndex;
      EwPostSignal( EwNewSlot( _this, ApplicationResultTxtEd_updateCaret ), ((XObject)_this ));
      _this->autoScroll = 1;
    }
  }
  else
  {
    XPoint ofs = EwMovePointNeg( _this->SimpleTouchHandler.CurrentPos, _this->SimpleTouchHandler.HittingPos );

    if (((( ofs.X < -8 ) || ( ofs.X > 8 )) || ( ofs.Y < -8 )) || ( ofs.Y > 8 ))
      CoreRoot_DeflectCursor( CoreView__GetRoot( _this ), ((CoreView)&_this->SlideTouchHandler ), 
      _Const0050 );
  }
}

/* This method is called from the corresponding SimpleTouchHandler. Its job is to 
   activate the caret movement mode if the user has pressed the finger on the screen 
   for a while. The method also shows a small magnifying glass where the text around 
   the caret is shown. This should help the user to navigate the caret with the 
   finger. */
void ApplicationResultTxtEd_onHoldTouch( ApplicationResultTxtEd _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if (( _this->SimpleTouchHandler.HoldPeriod >= 300 ) && ( _this->magnifyingView 
      == 0 ))
  {
    XInt32 height = _this->Caret.Super1.Point2.Y - _this->Caret.Super1.Point1.Y;
    XInt32 width = height * 3;

    if ( height > EwGetRectH( _this->Super3.Bounds ))
      height = EwGetRectH( _this->Super3.Bounds );

    if ( width > EwGetRectW( _this->Super3.Bounds ))
      width = EwGetRectW( _this->Super3.Bounds );

    CoreGroup__OnSetBuffered( _this, 1 );
    _this->magnifyingView = EwNewObject( ViewsWarpGroup, 0 );
    _this->magnifyingBack = EwNewObject( ViewsRectangle, 0 );
    ViewsWarpGroup_OnSetGroup( _this->magnifyingView, ((CoreGroup)_this ));
    ViewsWarpView_OnSetQuality((ViewsWarpView)_this->magnifyingView, 1 );
    ViewsWarpGroup_OnSetOpacity( _this->magnifyingView, 200 );
    ViewsWarpView_OnSetSourceArea((ViewsWarpView)_this->magnifyingView, EwNewRect( 
    0, 0, width, height ));
    CoreQuadView__OnSetPoint2( _this->magnifyingView, EwSetPointX( _this->magnifyingView->Super2.Point2, 
    width * 2 ));
    CoreQuadView__OnSetPoint3( _this->magnifyingView, EwSetPointX( _this->magnifyingView->Super2.Point3, 
    width * 2 ));
    CoreQuadView__OnSetPoint3( _this->magnifyingView, EwSetPointY( _this->magnifyingView->Super2.Point3, 
    height * 2 ));
    CoreQuadView__OnSetPoint4( _this->magnifyingView, EwSetPointY( _this->magnifyingView->Super2.Point4, 
    height * 2 ));
    CoreRectView__OnSetBounds( _this->magnifyingBack, EwSetRectSize( _this->magnifyingBack->Super1.Bounds, 
    EwMovePointPos( EwNewPoint( width * 2, height * 2 ), _Const0055 )));
    CoreRectView__OnSetBounds( _this->magnifyingBack, EwSetRectOrigin( _this->magnifyingBack->Super1.Bounds, 
    _Const0056 ));
    ViewsRectangle_OnSetColor( _this->magnifyingBack, _Const0057 );
    CoreGroup_Add( _this->Super4.Owner, ((CoreView)_this->magnifyingBack ), 0 );
    CoreGroup_Add( _this->Super4.Owner, ((CoreView)_this->magnifyingView ), 0 );
    EwPostSignal( EwNewSlot( _this, ApplicationResultTxtEd_updateMagnifyingView ), 
      ((XObject)_this ));
  }

  if ( _this->magnifyingView != 0 )
    EwSignal( EwNewSlot( _this, ApplicationResultTxtEd_onDragTouch ), ((XObject)_this ));
}

/* This method is called from the corresponding SimpleTouchHandler. Its job is to 
   obtain the focused state for the editor so the user can interact with the editor 
   content and to place the caret at the touched position. */
void ApplicationResultTxtEd_onPressTouch( ApplicationResultTxtEd _this, XObject 
  sender )
{
  XPoint rc;
  XInt32 newCaretIndex;
  XChar ch;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( !CoreGroup_HasViewState((CoreGroup)_this, CoreViewStateFocused ))
    CoreGroup_ObtainFocus((CoreGroup)_this );

  rc = ViewsText_Position2RowCol( &_this->Text, _this->SimpleTouchHandler.CurrentPos );
  newCaretIndex = ViewsText_RowCol2StringIndex( &_this->Text, rc );
  ch = EwGetStringChar( _this->Text.String, newCaretIndex );

  if ((( ch == '^' ) || ( ch == '~' )) || ( ch == '%' ))
    newCaretIndex = newCaretIndex - 1;

  if ( newCaretIndex != _this->caretIndex )
  {
    _this->caretIndex = newCaretIndex;
    EwPostSignal( EwNewSlot( _this, ApplicationResultTxtEd_updateCaret ), ((XObject)_this ));
    _this->autoScroll = 1;
  }
}

/* This method is called from the corresponding keyboard handler. Its job is to 
   move the caret up/down/left or right in the editor text. */
void ApplicationResultTxtEd_onCursorKey( ApplicationResultTxtEd _this, XObject sender )
{
  XPoint rc;
  XInt32 newCaretIndex;
  XChar ch;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->Font == 0 )
    return;

  rc = ViewsText_StringIndex2RowCol( &_this->Text, _this->caretIndex );

  if ( _this->CursorKeyHandler.Code == CoreKeyCodeLeft )
  {
    rc.X = ( rc.X - 1 );

    if ( ViewsText_RowCol2StringIndex( &_this->Text, rc ) == _this->caretIndex )
    {
      rc.Y = ( rc.Y - 1 );
      rc.X = EwGetStringLength( ViewsText_GetRowString( &_this->Text, rc.Y ));
    }
  }

  if ( _this->CursorKeyHandler.Code == CoreKeyCodeRight )
  {
    rc.X = ( rc.X + 1 );

    if ( ViewsText_RowCol2StringIndex( &_this->Text, rc ) == _this->caretIndex )
    {
      rc.Y = ( rc.Y + 1 );
      rc.X = 0;
    }
  }

  if ( _this->CursorKeyHandler.Code == CoreKeyCodeUp )
  {
    XPoint pos = ViewsText_RowCol2Position( &_this->Text, rc );
    XInt32 rowHeight = ( _this->Font->Ascent + _this->Font->Descent ) + _this->Font->Leading;
    rc = ViewsText_Position2RowCol( &_this->Text, EwMovePointNeg( pos, EwNewPoint( 
    0, rowHeight )));
  }

  if ( _this->CursorKeyHandler.Code == CoreKeyCodeDown )
  {
    XPoint pos = ViewsText_RowCol2Position( &_this->Text, rc );
    XInt32 rowHeight = ( _this->Font->Ascent + _this->Font->Descent ) + _this->Font->Leading;
    rc = ViewsText_Position2RowCol( &_this->Text, EwMovePointPos( pos, EwNewPoint( 
    0, rowHeight )));
  }

  newCaretIndex = ViewsText_RowCol2StringIndex( &_this->Text, rc );
  ch = EwGetStringChar( _this->Text.String, newCaretIndex );

  if ((( ch == '^' ) || ( ch == '~' )) || ( ch == '%' ))
    newCaretIndex = newCaretIndex - 1;

  if ( newCaretIndex != _this->caretIndex )
  {
    _this->caretIndex = newCaretIndex;
    EwPostSignal( EwNewSlot( _this, ApplicationResultTxtEd_updateCaret ), ((XObject)_this ));
    _this->autoScroll = 1;
  }
}

/* This method is called from the corresponding keyboard handler. Its job is to 
   delete the sign preceding the current caret position and to move the caret accordingly. */
void ApplicationResultTxtEd_onBackspaceKey( ApplicationResultTxtEd _this, XObject 
  sender )
{
  XChar ch;
  XInt32 count;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->caretIndex == 0 )
    return;

  ch = EwGetStringChar( _this->Text.String, _this->caretIndex - 1 );
  count = 1;

  if ((( ch == '^' ) || ( ch == '~' )) || ( ch == '%' ))
    count = 2;

  ViewsText_OnSetString( &_this->Text, EwStringRemove( _this->Text.String, _this->caretIndex 
  - count, count ));
  _this->caretIndex = _this->caretIndex - count;
  _this->autoScroll = 1;
}

/* This method is called from the corresponding keyboard handler. Its job is to 
   delete the sign at the current caret position. */
void ApplicationResultTxtEd_onDeleteKey( ApplicationResultTxtEd _this, XObject sender )
{
  XChar ch;
  XInt32 count;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->caretIndex >= ( EwGetStringLength( _this->Text.String ) - 1 ))
    return;

  ch = EwGetStringChar( _this->Text.String, _this->caretIndex );
  count = 1;

  if ( ch == '%' )
    count = 2;

  ViewsText_OnSetString( &_this->Text, EwStringRemove( _this->Text.String, _this->caretIndex, 
  count ));
  _this->autoScroll = 1;
}

/* This method is called from the corresponding keyboard handler. Its job is to 
   insert at the current caret position the <new line> sign and to move the caret 
   to the next row. */
void ApplicationResultTxtEd_onNewlineKey( ApplicationResultTxtEd _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsText_OnSetString( &_this->Text, EwStringInsert( _this->Text.String, EwLoadString( 
  &_Const0058 ), _this->caretIndex ));
  _this->caretIndex = _this->caretIndex + 1;
  _this->autoScroll = 1;
}

/* This method is called from the corresponding keyboard handler. Its job is to 
   insert at the current caret position the sign which has been input by the user 
   and to move the caret to the next column. */
void ApplicationResultTxtEd_onCharacterKey( ApplicationResultTxtEd _this, XObject 
  sender )
{
  XChar ch;
  XString str;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ch = _this->CharacterKeyHandler.CharCode;
  str = EwNewStringChar( ch, 1 );

  if (((( ch == '^' ) || ( ch == '~' )) || ( ch == 0x00AD )) || ( ch == '%' ))
    str = EwConcatStringChar( EwLoadString( &_Const0044 ), ch );

  ViewsText_OnSetString( &_this->Text, EwStringInsert( _this->Text.String, str, 
  _this->caretIndex ));
  _this->caretIndex = _this->caretIndex + EwGetStringLength( str );
  _this->autoScroll = 1;
}

/* 'C' function for method : 'Application::ResultTxtEd.OnSetWrapText()' */
void ApplicationResultTxtEd_OnSetWrapText( ApplicationResultTxtEd _this, XBool value )
{
  if ( _this->WrapText == value )
    return;

  _this->WrapText = value;
  ViewsText_OnSetWrapText( &_this->Text, value );
  _this->SlideTouchHandler.SlideHorz = (XBool)!value;
  _this->autoScroll = 1;
  ViewsText_OnSetScrollOffset( &_this->Text, _Const0050 );
}

/* 'C' function for method : 'Application::ResultTxtEd.OnSetAlignment()' */
void ApplicationResultTxtEd_OnSetAlignment( ApplicationResultTxtEd _this, XSet value )
{
  if ( _this->Alignment == value )
    return;

  _this->Alignment = value;
  ViewsText_OnSetAlignment( &_this->Text, value );
  _this->autoScroll = 1;
  ViewsText_OnSetScrollOffset( &_this->Text, _Const0050 );
}

/* 'C' function for method : 'Application::ResultTxtEd.OnGetString()' */
XString ApplicationResultTxtEd_OnGetString( ApplicationResultTxtEd _this )
{
  XString str = _this->Text.String;
  XInt32 inx = EwStringFindChar( str, '%', 0 );

  while ( inx >= 0 )
  {
    str = EwStringRemove( str, inx, 1 );
    inx = EwStringFindChar( str, '%', inx + 1 );
  }

  return EwStringLeft( str, EwGetStringLength( str ) - 1 );
}

/* 'C' function for method : 'Application::ResultTxtEd.OnSetString()' */
void ApplicationResultTxtEd_OnSetString( ApplicationResultTxtEd _this, XString value )
{
  XString str = value;
  XInt32 inx = EwStringFindChar( str, '%', 0 );

  while ( inx >= 0 )
  {
    str = EwStringInsert( str, EwLoadString( &_Const0044 ), inx );
    inx = EwStringFindChar( str, '%', inx + 2 );
  }

  inx = EwStringFindChar( str, '^', 0 );

  while ( inx >= 0 )
  {
    str = EwStringInsert( str, EwLoadString( &_Const0044 ), inx );
    inx = EwStringFindChar( str, '^', inx + 2 );
  }

  inx = EwStringFindChar( str, '~', 0 );

  while ( inx >= 0 )
  {
    str = EwStringInsert( str, EwLoadString( &_Const0044 ), inx );
    inx = EwStringFindChar( str, '~', inx + 2 );
  }

  inx = EwStringFindChar( str, 0x00AD, 0 );

  while ( inx >= 0 )
  {
    str = EwStringInsert( str, EwLoadString( &_Const0044 ), inx );
    inx = EwStringFindChar( str, 0x00AD, inx + 2 );
  }

  if ( _this->caretIndex > EwGetStringLength( str ))
    _this->caretIndex = EwGetStringLength( str );

  ViewsText_OnSetString( &_this->Text, EwConcatString( str, EwLoadString( &_Const0059 )));
  _this->autoScroll = 1;
  ViewsText_OnSetScrollOffset( &_this->Text, _Const0050 );
}

/* 'C' function for method : 'Application::ResultTxtEd.OnSetFont()' */
void ApplicationResultTxtEd_OnSetFont( ApplicationResultTxtEd _this, ResourcesFont 
  value )
{
  if ( _this->Font == value )
    return;

  _this->Font = value;
  ViewsText_OnSetFont( &_this->Text, value );
  _this->autoScroll = 1;
  ViewsText_OnSetScrollOffset( &_this->Text, _Const0050 );
}

/* Variants derived from the class : 'Application::ResultTxtEd' */
EW_DEFINE_CLASS_VARIANTS( ApplicationResultTxtEd )
EW_END_OF_CLASS_VARIANTS( ApplicationResultTxtEd )

/* Virtual Method Table (VMT) for the class : 'Application::ResultTxtEd' */
EW_DEFINE_CLASS( ApplicationResultTxtEd, TemplatesTextEditor, blinkEffect, magnifyingBack, 
                 caretIndex, caretIndex, caretIndex, caretIndex, "Application::ResultTxtEd" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetBuffered,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  ApplicationResultTxtEd_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationResultTxtEd )

/* Include a file containing the bitmap resource : 'Application::EqualsBtn' */
#include "_ApplicationEqualsBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::EqualsBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationEqualsBtn )

/* Include a file containing the font resource : 'Application::EqFont' */
#include "_ApplicationEqFont.h"

/* Table with links to derived variants of the font resource : 'Application::EqFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationEqFont )

/* Include a file containing the bitmap resource : 'Application::PercentBtn' */
#include "_ApplicationPercentBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PercentBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationPercentBtn )

/* Include a file containing the bitmap resource : 'Application::PowBtn' */
#include "_ApplicationPowBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PowBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationPowBtn )

/* Include a file containing the font resource : 'Application::NumBoldFont' */
#include "_ApplicationNumBoldFont.h"

/* Table with links to derived variants of the font resource : 'Application::NumBoldFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationNumBoldFont )

/* Include a file containing the bitmap resource : 'Application::DivideBtn' */
#include "_ApplicationDivideBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::DivideBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationDivideBtn )

/* Include a file containing the font resource : 'Application::MultiplyFont' */
#include "_ApplicationMultiplyFont.h"

/* Table with links to derived variants of the font resource : 'Application::MultiplyFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationMultiplyFont )

/* Initializer for the class 'Application::Pair' */
void ApplicationPair__Init( ApplicationPair _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  XObject__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationPair );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationPair );

  /* ... and initialize objects, variables, properties, etc. */
  _this->EndPosition = -1;
  _this->Subexpression = EwShareString( EwLoadString( &_Const0010 ));

  /* Call the user defined constructor */
  ApplicationPair_Init( _this, aArg );
}

/* Re-Initializer for the class 'Application::Pair' */
void ApplicationPair__ReInit( ApplicationPair _this )
{
  /* At first re-initialize the super class ... */
  XObject__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Application::Pair' */
void ApplicationPair__Done( ApplicationPair _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( XObject );

  /* Don't forget to deinitialize the super class ... */
  XObject__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::Pair.Init()' */
void ApplicationPair_Init( ApplicationPair _this, XHandle aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  ApplicationPair_OnSetIdentifiedNumber( _this, EwNewFloatInfP());
  ApplicationPair_OnSetEndPosition( _this, -1 );
  ApplicationPair_OnSetSubexpression( _this, EwLoadString( &_Const0010 ));
}

/* 'C' function for method : 'Application::Pair.OnSetIdentifiedNumber()' */
void ApplicationPair_OnSetIdentifiedNumber( ApplicationPair _this, XFloat value )
{
  if ( _this->IdentifiedNumber == value )
    return;

  _this->IdentifiedNumber = value;
}

/* 'C' function for method : 'Application::Pair.OnSetEndPosition()' */
void ApplicationPair_OnSetEndPosition( ApplicationPair _this, XInt32 value )
{
  if ( _this->EndPosition == value )
    return;

  _this->EndPosition = value;
}

/* 'C' function for method : 'Application::Pair.OnSetSubexpression()' */
void ApplicationPair_OnSetSubexpression( ApplicationPair _this, XString value )
{
  if ( !EwCompString( _this->Subexpression, value ))
    return;

  _this->Subexpression = EwShareString( value );
}

/* Variants derived from the class : 'Application::Pair' */
EW_DEFINE_CLASS_VARIANTS( ApplicationPair )
EW_END_OF_CLASS_VARIANTS( ApplicationPair )

/* Virtual Method Table (VMT) for the class : 'Application::Pair' */
EW_DEFINE_CLASS( ApplicationPair, XObject, Subexpression, Subexpression, Subexpression, 
                 Subexpression, Subexpression, IdentifiedNumber, "Application::Pair" )
EW_END_OF_CLASS( ApplicationPair )

/* Initializer for the class 'Application::ErrorDialog' */
void ApplicationErrorDialog__Init( ApplicationErrorDialog _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationErrorDialog );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Bgk, &_this->_.XObject, 0 );
  ViewsBorder__Init( &_this->BgkBorder, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->TopBar, &_this->_.XObject, 0 );
  ViewsBorder__Init( &_this->TopBarBgk, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->ExitBtnConfig, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->ErrorText, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PushButton, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->PushButton1, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->OkBtnConfig, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Title, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationErrorDialog );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const005A );
  CoreRectView__OnSetBounds( &_this->Bgk, _Const005A );
  ViewsRectangle_OnSetRadius( &_this->Bgk, 3 );
  ViewsRectangle_OnSetColor( &_this->Bgk, _Const0004 );
  CoreRectView__OnSetBounds( &_this->BgkBorder, _Const005B );
  ViewsBorder_OnSetRadius( &_this->BgkBorder, 3 );
  ViewsBorder_OnSetWidth( &_this->BgkBorder, 2 );
  ViewsBorder_OnSetColor( &_this->BgkBorder, _Const005C );
  CoreRectView__OnSetBounds( &_this->TopBar, _Const005D );
  ViewsRectangle_OnSetRadiusTR( &_this->TopBar, 3 );
  ViewsRectangle_OnSetRadiusTL( &_this->TopBar, 3 );
  ViewsRectangle_OnSetRadius( &_this->TopBar, 3 );
  ViewsRectangle_OnSetColor( &_this->TopBar, _Const001C );
  CoreRectView__OnSetBounds( &_this->TopBarBgk, _Const005D );
  ViewsBorder_OnSetWidth( &_this->TopBarBgk, 2 );
  ViewsBorder_OnSetColor( &_this->TopBarBgk, _Const005E );
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->ExitBtnConfig, CoreKeyCodeEnter );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->ExitBtnConfig, _Const0007 );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->ExitBtnConfig, _Const0007 );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->ExitBtnConfig, _Const001A );
  WidgetSetPushButtonConfig_OnSetLabelMarginBottom( &_this->ExitBtnConfig, 3 );
  WidgetSetPushButtonConfig_OnSetLabelAlignment( &_this->ExitBtnConfig, ViewsTextAlignmentAlignHorzCenter 
  | ViewsTextAlignmentAlignVertCenter );
  CoreRectView__OnSetBounds( &_this->ErrorText, _Const005F );
  ViewsText_OnSetWrapText( &_this->ErrorText, 1 );
  ViewsText_OnSetAlignment( &_this->ErrorText, ViewsTextAlignmentAlignHorzLeft | 
  ViewsTextAlignmentAlignVertTop );
  ViewsText_OnSetString( &_this->ErrorText, EwLoadString( &_Const0060 ));
  ViewsText_OnSetColor( &_this->ErrorText, _Const0061 );
  CoreRectView__OnSetBounds( &_this->PushButton, _Const0062 );
  WidgetSetPushButton_OnSetLabel( &_this->PushButton, EwLoadString( &_Const0063 ));
  CoreView_OnSetLayout((CoreView)&_this->PushButton1, CoreLayoutAlignToRight | CoreLayoutAlignToTop );
  CoreRectView__OnSetBounds( &_this->PushButton1, _Const0064 );
  WidgetSetPushButton_OnSetLabel( &_this->PushButton1, EwLoadString( &_Const0065 ));
  WidgetSetPushButtonConfig_OnSetKeyCode( &_this->OkBtnConfig, CoreKeyCodeEnter );
  WidgetSetPushButtonConfig_OnSetThumbBorderColorActive( &_this->OkBtnConfig, _Const0066 );
  WidgetSetPushButtonConfig_OnSetThumbBorderColorDefault( &_this->OkBtnConfig, _Const0067 );
  WidgetSetPushButtonConfig_OnSetThumbBorderWidthActive( &_this->OkBtnConfig, 0 );
  WidgetSetPushButtonConfig_OnSetThumbBorderWidthDefault( &_this->OkBtnConfig, 0 );
  WidgetSetPushButtonConfig_OnSetThumbColorActive( &_this->OkBtnConfig, _Const0068 );
  WidgetSetPushButtonConfig_OnSetThumbColorDefault( &_this->OkBtnConfig, _Const0069 );
  WidgetSetPushButtonConfig_OnSetThumbLayout( &_this->OkBtnConfig, CoreLayoutAlignToBottom 
  | CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->OkBtnConfig, _Const0007 );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->OkBtnConfig, _Const0007 );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->OkBtnConfig, _Const001A );
  WidgetSetPushButtonConfig_OnSetLabelMarginBottom( &_this->OkBtnConfig, 3 );
  WidgetSetPushButtonConfig_OnSetLabelAlignment( &_this->OkBtnConfig, ViewsTextAlignmentAlignHorzAuto 
  | ViewsTextAlignmentAlignHorzCenter | ViewsTextAlignmentAlignVertCenter );
  WidgetSetPushButtonConfig_OnSetFaceFrameActive( &_this->OkBtnConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameFocused( &_this->OkBtnConfig, 1 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDisabled( &_this->OkBtnConfig, 0 );
  WidgetSetPushButtonConfig_OnSetFaceFrameDefault( &_this->OkBtnConfig, 0 );
  CoreRectView__OnSetBounds( &_this->Title, _Const006A );
  ViewsText_OnSetWrapText( &_this->Title, 1 );
  ViewsText_OnSetAlignment( &_this->Title, ViewsTextAlignmentAlignHorzLeft | ViewsTextAlignmentAlignVertCenter 
  | ViewsTextAlignmentAlignVertTop );
  ViewsText_OnSetString( &_this->Title, EwLoadString( &_Const006B ));
  ViewsText_OnSetColor( &_this->Title, _Const006C );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Bgk ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BgkBorder ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TopBar ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TopBarBgk ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ErrorText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PushButton ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->PushButton1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Title ), 0 );
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->ExitBtnConfig, EwLoadResource( 
  &ApplicationBtnFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->ErrorText, EwLoadResource( &ApplicationErrorFont, 
  ResourcesFont ));
  _this->PushButton.OnActivate = EwNewSlot( _this, ApplicationErrorDialog_onClose );
  WidgetSetPushButton_OnSetAppearance( &_this->PushButton, &_this->ExitBtnConfig );
  _this->PushButton1.OnActivate = EwNewSlot( _this, ApplicationErrorDialog_onClose );
  WidgetSetPushButton_OnSetAppearance( &_this->PushButton1, &_this->OkBtnConfig );
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->OkBtnConfig, EwLoadResource( 
  &ApplicationBtnFont, ResourcesFont ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapActive( &_this->OkBtnConfig, EwLoadResource( 
  &ApplicationOKBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapFocused( &_this->OkBtnConfig, EwLoadResource( 
  &ApplicationOKBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDisabled( &_this->OkBtnConfig, EwLoadResource( 
  &ApplicationOKBtn, ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetFaceBitmapDefault( &_this->OkBtnConfig, EwLoadResource( 
  &ApplicationOKBtn, ResourcesBitmap ));
  ViewsText_OnSetFont( &_this->Title, EwLoadResource( &ApplicationErrorFont, ResourcesFont ));
}

/* Re-Initializer for the class 'Application::ErrorDialog' */
void ApplicationErrorDialog__ReInit( ApplicationErrorDialog _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Bgk );
  ViewsBorder__ReInit( &_this->BgkBorder );
  ViewsRectangle__ReInit( &_this->TopBar );
  ViewsBorder__ReInit( &_this->TopBarBgk );
  WidgetSetPushButtonConfig__ReInit( &_this->ExitBtnConfig );
  ViewsText__ReInit( &_this->ErrorText );
  WidgetSetPushButton__ReInit( &_this->PushButton );
  WidgetSetPushButton__ReInit( &_this->PushButton1 );
  WidgetSetPushButtonConfig__ReInit( &_this->OkBtnConfig );
  ViewsText__ReInit( &_this->Title );
}

/* Finalizer method for the class 'Application::ErrorDialog' */
void ApplicationErrorDialog__Done( ApplicationErrorDialog _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Bgk );
  ViewsBorder__Done( &_this->BgkBorder );
  ViewsRectangle__Done( &_this->TopBar );
  ViewsBorder__Done( &_this->TopBarBgk );
  WidgetSetPushButtonConfig__Done( &_this->ExitBtnConfig );
  ViewsText__Done( &_this->ErrorText );
  WidgetSetPushButton__Done( &_this->PushButton );
  WidgetSetPushButton__Done( &_this->PushButton1 );
  WidgetSetPushButtonConfig__Done( &_this->OkBtnConfig );
  ViewsText__Done( &_this->Title );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::ErrorDialog.onClose()' */
void ApplicationErrorDialog_onClose( ApplicationErrorDialog _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  EwIdleSignal( _this->OnCloseDialog, ((XObject)_this ));
}

/* Variants derived from the class : 'Application::ErrorDialog' */
EW_DEFINE_CLASS_VARIANTS( ApplicationErrorDialog )
EW_END_OF_CLASS_VARIANTS( ApplicationErrorDialog )

/* Virtual Method Table (VMT) for the class : 'Application::ErrorDialog' */
EW_DEFINE_CLASS( ApplicationErrorDialog, CoreGroup, Bgk, OnCloseDialog, OnCloseDialog, 
                 _.VMT, _.VMT, _.VMT, "Application::ErrorDialog" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetBuffered,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationErrorDialog )

/* Include a file containing the font resource : 'Application::ErrorFont' */
#include "_ApplicationErrorFont.h"

/* Table with links to derived variants of the font resource : 'Application::ErrorFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationErrorFont )

/* Include a file containing the font resource : 'Application::BtnFont' */
#include "_ApplicationBtnFont.h"

/* Table with links to derived variants of the font resource : 'Application::BtnFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationBtnFont )

/* Include a file containing the bitmap resource : 'Application::OKBtn' */
#include "_ApplicationOKBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::OKBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationOKBtn )

/* Include a file containing the bitmap resource : 'Application::ParenthesisBtn' */
#include "_ApplicationParenthesisBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::ParenthesisBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationParenthesisBtn )

/* Include a file containing the font resource : 'Application::NumFont1' */
#include "_ApplicationNumFont1.h"

/* Table with links to derived variants of the font resource : 'Application::NumFont1' */
EW_RES_WITHOUT_VARIANTS( ApplicationNumFont1 )

/* Include a file containing the bitmap resource : 'Application::BackBtn' */
#include "_ApplicationBackBtn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::BackBtn' */
EW_RES_WITHOUT_VARIANTS( ApplicationBackBtn )

/* Embedded Wizard */
