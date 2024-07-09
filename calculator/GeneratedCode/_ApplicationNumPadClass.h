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
* Profile  : Profile
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

#ifndef _ApplicationNumPadClass_H
#define _ApplicationNumPadClass_H

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
#include "_CoreSimpleTouchHandler.h"
#include "_CoreTimer.h"
#include "_ViewsBorder.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"

/* Forward declaration of the class Application::NumPadClass */
#ifndef _ApplicationNumPadClass_
  EW_DECLARE_CLASS( ApplicationNumPadClass )
#define _ApplicationNumPadClass_
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


/* Deklaration of class : 'Application::NumPadClass' */
EW_DEFINE_FIELDS( ApplicationNumPadClass, CoreGroup )
  EW_OBJECT  ( One,             ViewsText )
  EW_OBJECT  ( Rectangle,       ViewsRectangle )
  EW_OBJECT  ( Zero,            ViewsText )
  EW_OBJECT  ( Nine,            ViewsText )
  EW_OBJECT  ( Six,             ViewsText )
  EW_OBJECT  ( Three,           ViewsText )
  EW_OBJECT  ( Eight,           ViewsText )
  EW_OBJECT  ( Five,            ViewsText )
  EW_OBJECT  ( Seven,           ViewsText )
  EW_OBJECT  ( Four,            ViewsText )
  EW_OBJECT  ( Two,             ViewsText )
  EW_OBJECT  ( Divide,          ViewsText )
  EW_OBJECT  ( Equals,          ViewsText )
  EW_OBJECT  ( Clear,           ViewsText )
  EW_OBJECT  ( Multiply,        ViewsText )
  EW_OBJECT  ( Subtract,        ViewsText )
  EW_OBJECT  ( Plus,            ViewsText )
  EW_OBJECT  ( FlashTimer,      CoreTimer )
  EW_OBJECT  ( Highlight,       ViewsRectangle )
  EW_OBJECT  ( TouchHandler,    CoreSimpleTouchHandler )
  EW_OBJECT  ( Border,          ViewsBorder )
  EW_VARIABLE( keyView,         CoreView )
  EW_VARIABLE( recentPosition,  XPoint )
EW_END_OF_FIELDS( ApplicationNumPadClass )

/* Virtual Method Table (VMT) for the class : 'Application::NumPadClass' */
EW_DEFINE_METHODS( ApplicationNumPadClass, CoreGroup )
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
  EW_METHOD( DispatchEvent,     XObject )( CoreGroup _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreGroup _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateViewState,   void )( ApplicationNumPadClass _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreGroup _this, XRect aArea )
EW_END_OF_METHODS( ApplicationNumPadClass )

/* This internal slot method is called when the user touches the keyboard area. */
void ApplicationNumPadClass_onPressTouch( ApplicationNumPadClass _this, XObject 
  sender );

/* This internal slot method is called when the user releases the touch screen after 
   touching the keyboard area. This activates the key the user has touched. */
void ApplicationNumPadClass_onReleaseTouch( ApplicationNumPadClass _this, XObject 
  sender );

/* This internal slot method is called when the user drags the finger while pressing 
   the keyboard. This updates the keyboard to highlight the key at the new touch 
   position. */
void ApplicationNumPadClass_onDragTouch( ApplicationNumPadClass _this, XObject sender );

/* This internal slot method is called when the '@FlashTimer' is expired. It ends 
   the short flash feedback effect. */
void ApplicationNumPadClass_onFlashTimer( ApplicationNumPadClass _this, XObject 
  sender );

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
void ApplicationNumPadClass_UpdateViewState( ApplicationNumPadClass _this, XSet 
  aState );

/* This internal slot method is called when the recently pressed key should be activated. 
   This is when the user presses on a key and then releases the finger again. */
void ApplicationNumPadClass_activateKey( ApplicationNumPadClass _this, XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationNumPadClass_H */

/* Embedded Wizard */
