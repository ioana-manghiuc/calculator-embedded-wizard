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

#ifndef _ApplicationNumKeyBtns_H
#define _ApplicationNumKeyBtns_H

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

#include "_CoreGroup.h"
#include "_CoreTimer.h"
#include "_ViewsBorder.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"

/* Forward declaration of the class Application::NumKeyBtns */
#ifndef _ApplicationNumKeyBtns_
  EW_DECLARE_CLASS( ApplicationNumKeyBtns )
#define _ApplicationNumKeyBtns_
#endif

/* Forward declaration of the class Core::KeyPressHandler */
#ifndef _CoreKeyPressHandler_
  EW_DECLARE_CLASS( CoreKeyPressHandler )
#define _CoreKeyPressHandler_
#endif

/* Forward declaration of the class Core::LayoutContext */
#ifndef _CoreLayoutContext_
  EW_DECLARE_CLASS( CoreLayoutContext )
#define _CoreLayoutContext_
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


/* Deklaration of class : 'Application::NumKeyBtns' */
EW_DEFINE_FIELDS( ApplicationNumKeyBtns, CoreGroup )
  EW_OBJECT  ( Border,          ViewsBorder )
  EW_OBJECT  ( DigitOpConfig,   WidgetSetPushButtonConfig )
  EW_OBJECT  ( EqualsConfig,    WidgetSetPushButtonConfig )
  EW_OBJECT  ( FlashKeyTimer,   CoreTimer )
  EW_OBJECT  ( empty00,         WidgetSetPushButton )
  EW_OBJECT  ( empty01,         WidgetSetPushButton )
  EW_OBJECT  ( empty02,         WidgetSetPushButton )
  EW_OBJECT  ( One,             WidgetSetPushButton )
  EW_OBJECT  ( Two,             WidgetSetPushButton )
  EW_OBJECT  ( Three,           WidgetSetPushButton )
  EW_OBJECT  ( Four,            WidgetSetPushButton )
  EW_OBJECT  ( Five,            WidgetSetPushButton )
  EW_OBJECT  ( Six,             WidgetSetPushButton )
  EW_OBJECT  ( Seven,           WidgetSetPushButton )
  EW_OBJECT  ( Eight,           WidgetSetPushButton )
  EW_OBJECT  ( Nine,            WidgetSetPushButton )
  EW_OBJECT  ( Zero,            WidgetSetPushButton )
  EW_OBJECT  ( Clear,           WidgetSetPushButton )
  EW_OBJECT  ( Plus,            WidgetSetPushButton )
  EW_OBJECT  ( Minus,           WidgetSetPushButton )
  EW_OBJECT  ( Multiply,        WidgetSetPushButton )
  EW_OBJECT  ( Divide,          WidgetSetPushButton )
  EW_OBJECT  ( PlusNeg,         WidgetSetPushButton )
  EW_OBJECT  ( Dot,             WidgetSetPushButton )
  EW_OBJECT  ( Power,           WidgetSetPushButton )
  EW_OBJECT  ( Percentage,      WidgetSetPushButton )
  EW_OBJECT  ( OpenParanthesis, WidgetSetPushButton )
  EW_OBJECT  ( ClosedParanthesis, WidgetSetPushButton )
  EW_OBJECT  ( Equals,          WidgetSetPushButton )
  EW_OBJECT  ( PowConfig,       WidgetSetPushButtonConfig )
  EW_OBJECT  ( PercentConfig,   WidgetSetPushButtonConfig )
  EW_OBJECT  ( DigitOpBoldConfig, WidgetSetPushButtonConfig )
  EW_OBJECT  ( DivideConfig,    WidgetSetPushButtonConfig )
  EW_OBJECT  ( MultiplyConfig,  WidgetSetPushButtonConfig )
  EW_OBJECT  ( ParanthesisConfig, WidgetSetPushButtonConfig )
  EW_OBJECT  ( NegateNumbers,   WidgetSetPushButtonConfig )
  EW_OBJECT  ( BackConfig,      WidgetSetPushButtonConfig )
  EW_OBJECT  ( BackBtn,         WidgetSetPushButton )
  EW_PROPERTY( keyString,       XString )
EW_END_OF_FIELDS( ApplicationNumKeyBtns )

/* Virtual Method Table (VMT) for the class : 'Application::NumKeyBtns' */
EW_DEFINE_METHODS( ApplicationNumKeyBtns, CoreGroup )
  EW_METHOD( initLayoutContext, void )( CoreRectView _this, XRect aBounds, CoreOutline 
    aOutline )
  EW_METHOD( GetRoot,           CoreRoot )( CoreView _this )
  EW_METHOD( Draw,              void )( CoreGroup _this, GraphicsCanvas aCanvas, 
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
  EW_METHOD( ChangeViewState,   void )( CoreGroup _this, XSet aSetState, XSet aClearState )
  EW_METHOD( OnSetBounds,       void )( CoreGroup _this, XRect value )
  EW_METHOD( OnSetFocus,        void )( CoreGroup _this, CoreView value )
  EW_METHOD( OnSetBuffered,     void )( CoreGroup _this, XBool value )
  EW_METHOD( DispatchEvent,     XObject )( CoreGroup _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreGroup _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateViewState,   void )( CoreGroup _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreGroup _this, XRect aArea )
EW_END_OF_METHODS( ApplicationNumKeyBtns )

/* 'C' function for method : 'Application::NumKeyBtns.onActivateKey()' */
void ApplicationNumKeyBtns_onActivateKey( ApplicationNumKeyBtns _this, XObject sender );

/* 'C' function for method : 'Application::NumKeyBtns.OnSetkeyString()' */
void ApplicationNumKeyBtns_OnSetkeyString( ApplicationNumKeyBtns _this, XString 
  value );

/* 'C' function for method : 'Application::NumKeyBtns.triggerTimer()' */
void ApplicationNumKeyBtns_triggerTimer( ApplicationNumKeyBtns _this, XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationNumKeyBtns_H */

/* Embedded Wizard */
