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

#ifndef _ApplicationApplication_H
#define _ApplicationApplication_H

#ifdef __cplusplus
  extern "C"
  {
#endif

#include "ewrte.h"
#if ( EW_RTE_VERSION >> 16 ) != 13
  #error Wrong version of Embedded Wizard Runtime Environment.
#endif

#include "ewgfx.h"
#if ( EW_GFX_VERSION >> 16 ) != 13
  #error Wrong version of Embedded Wizard Graphics Engine.
#endif

#include "_ApplicationNumKeyBtns.h"
#include "_ApplicationResultTxtEd.h"
#include "_CoreKeyPressHandler.h"
#include "_CoreRoot.h"
#include "_CoreTimer.h"
#include "_ViewsBorder.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"

/* Forward declaration of the class Application::Application */
#ifndef _ApplicationApplication_
  EW_DECLARE_CLASS( ApplicationApplication )
#define _ApplicationApplication_
#endif

/* Forward declaration of the class Application::ErrorDialog */
#ifndef _ApplicationErrorDialog_
  EW_DECLARE_CLASS( ApplicationErrorDialog )
#define _ApplicationErrorDialog_
#endif

/* Forward declaration of the class Application::Pair */
#ifndef _ApplicationPair_
  EW_DECLARE_CLASS( ApplicationPair )
#define _ApplicationPair_
#endif

/* Forward declaration of the class Core::Group */
#ifndef _CoreGroup_
  EW_DECLARE_CLASS( CoreGroup )
#define _CoreGroup_
#endif

/* Forward declaration of the class Core::LayoutContext */
#ifndef _CoreLayoutContext_
  EW_DECLARE_CLASS( CoreLayoutContext )
#define _CoreLayoutContext_
#endif

/* Forward declaration of the class Core::ModalContext */
#ifndef _CoreModalContext_
  EW_DECLARE_CLASS( CoreModalContext )
#define _CoreModalContext_
#endif

/* Forward declaration of the class Core::View */
#ifndef _CoreView_
  EW_DECLARE_CLASS( CoreView )
#define _CoreView_
#endif

/* Forward declaration of the class Graphics::Canvas */
#ifndef _GraphicsCanvas_
  EW_DECLARE_CLASS( GraphicsCanvas )
#define _GraphicsCanvas_
#endif


/* This is the root component of the entire GUI application. */
EW_DEFINE_FIELDS( ApplicationApplication, CoreRoot )
  EW_OBJECT  ( TextTxt,         ViewsText )
  EW_OBJECT  ( Bgk,             ViewsRectangle )
  EW_OBJECT  ( OutputBgk,       ViewsRectangle )
  EW_OBJECT  ( Border,          ViewsBorder )
  EW_OBJECT  ( Keypad,          ApplicationNumKeyBtns )
  EW_OBJECT  ( KeyHandler,      CoreKeyPressHandler )
  EW_OBJECT  ( Text,            ApplicationResultTxtEd )
  EW_OBJECT  ( HandleEnter,     CoreKeyPressHandler )
  EW_VARIABLE( ErrDialog,       ApplicationErrorDialog )
EW_END_OF_FIELDS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_METHODS( ApplicationApplication, CoreRoot )
  EW_METHOD( initLayoutContext, void )( CoreRectView _this, XRect aBounds, CoreOutline 
    aOutline )
  EW_METHOD( GetRoot,           CoreRoot )( CoreRoot _this )
  EW_METHOD( Draw,              void )( CoreRoot _this, GraphicsCanvas aCanvas, 
    XRect aClip, XPoint aOffset, XInt32 aOpacity, XBool aBlend )
  EW_METHOD( GetClipping,       XRect )( CoreGroup _this )
  EW_METHOD( HandleEvent,       XObject )( CoreView _this, CoreEvent aEvent )
  EW_METHOD( CursorHitTest,     CoreCursorHit )( CoreGroup _this, XRect aArea, XInt32 
    aFinger, XInt32 aStrikeCount, CoreView aDedicatedView, CoreView aStartView, 
    XSet aRetargetReason )
  EW_METHOD( AdjustDrawingArea, XRect )( CoreGroup _this, XRect aArea )
  EW_METHOD( ArrangeView,       XPoint )( CoreRectView _this, XRect aBounds, XEnum 
    aFormation )
  EW_METHOD( MoveView,          void )( CoreRectView _this, XPoint aOffset, XBool 
    aFastMove )
  EW_METHOD( GetExtent,         XRect )( CoreRectView _this )
  EW_METHOD( ChangeViewState,   void )( CoreRoot _this, XSet aSetState, XSet aClearState )
  EW_METHOD( OnSetBounds,       void )( CoreGroup _this, XRect value )
  EW_METHOD( OnSetFocus,        void )( CoreRoot _this, CoreView value )
  EW_METHOD( OnSetBuffered,     void )( CoreRoot _this, XBool value )
  EW_METHOD( DispatchEvent,     XObject )( CoreRoot _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreRoot _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateViewState,   void )( CoreGroup _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreRoot _this, XRect aArea )
EW_END_OF_METHODS( ApplicationApplication )

/* 'C' function for method : 'Application::Application.CalculateExpression()' */
void ApplicationApplication_CalculateExpression( ApplicationApplication _this, XObject 
  sender );

/* 'C' function for method : 'Application::Application.ExecTwoOp()' */
XFloat ApplicationApplication_ExecTwoOp( ApplicationApplication _this, XFloat first, 
  XFloat second, XString op );

/* 'C' function for method : 'Application::Application.ResetVariables()' */
void ApplicationApplication_ResetVariables( ApplicationApplication _this );

/* 'C' function for method : 'Application::Application.IsOperator()' */
XBool ApplicationApplication_IsOperator( ApplicationApplication _this, XChar op );

/* 'C' function for method : 'Application::Application.GetSubexpressionInParentheses()' */
ApplicationPair ApplicationApplication_GetSubexpressionInParentheses( ApplicationApplication _this, 
  XInt32 startPos, XString expression );

/* 'C' function for method : 'Application::Application.GetNumberFromPosition()' */
ApplicationPair ApplicationApplication_GetNumberFromPosition( ApplicationApplication _this, 
  XInt32 startPos, XString expression );

/* 'C' function for method : 'Application::Application.IsExpressionValid()' */
XBool ApplicationApplication_IsExpressionValid( ApplicationApplication _this, XString 
  expression );

/* 'C' function for method : 'Application::Application.IsDigit()' */
XBool ApplicationApplication_IsDigit( ApplicationApplication _this, XChar op );

/* 'C' function for method : 'Application::Application.CorrectParentheses()' */
XBool ApplicationApplication_CorrectParentheses( ApplicationApplication _this, XString 
  expression );

/* 'C' function for method : 'Application::Application.OperatorsCorrectlyUsed()' */
XBool ApplicationApplication_OperatorsCorrectlyUsed( ApplicationApplication _this, 
  XString expression );

/* 'C' function for method : 'Application::Application.IsParenthesis()' */
XBool ApplicationApplication_IsParenthesis( ApplicationApplication _this, XChar 
  op );

/* 'C' function for method : 'Application::Application.onShowDialog()' */
void ApplicationApplication_onShowDialog( ApplicationApplication _this, XObject 
  sender );

/* 'C' function for method : 'Application::Application.onCloseDialog()' */
void ApplicationApplication_onCloseDialog( ApplicationApplication _this, XObject 
  sender );

/* 'C' function for method : 'Application::Application.CharactersAllowed()' */
XBool ApplicationApplication_CharactersAllowed( ApplicationApplication _this, XString 
  expression );

/* 'C' function for method : 'Application::Application.ExecuteOperation()' */
XFloat ApplicationApplication_ExecuteOperation( ApplicationApplication _this, XString 
  expression );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationApplication_H */

/* Embedded Wizard */
