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

#include "ewlocale.h"
#include "_ApplicationApplication.h"
#include "_ApplicationNumPadClass.h"
#include "_CoreRoot.h"
#include "_CoreSimpleTouchHandler.h"
#include "_CoreTimer.h"
#include "_CoreView.h"
#include "_ResourcesBitmap.h"
#include "_ResourcesFont.h"
#include "_ViewsBorder.h"
#include "_ViewsImage.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "Application.h"
#include "Core.h"
#include "Resources.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x0000016E, /* ratio 55.74 % */
  0xB8000F00, 0x800A8452, 0x00F00032, 0x21A003A0, 0x62458181, 0x90F00434, 0x15898C20,
  0x08C0E48B, 0x824706D1, 0xC1163E33, 0xC886B221, 0x8869221B, 0x85F22194, 0x87221EC8,
  0xB2215488, 0x1315C885, 0x037C4037, 0x28000DC0, 0x041CE400, 0x00288730, 0x00EB3C83,
  0x0D000318, 0xD9461000, 0x10C9E000, 0x0CA19B6A, 0x3324F29D, 0x84440431, 0x1422193E,
  0xD42B908A, 0x00E0002A, 0xE1661AE0, 0xD2002B50, 0x6003BD0C, 0x62B6DB8A, 0x8AB8029F,
  0xB5D4EB30, 0x2C404513, 0xD8EDD3D2, 0xB40166A1, 0xAE50CA65, 0x0186C51D, 0x479A192C,
  0x54A9516F, 0xAB75F2F5, 0x08437015, 0xAC232710, 0x5928150C, 0x02CB45A3, 0xE277A1D0,
  0x000080C4, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 300, 400 }};
static const XRect _Const0001 = {{ 390, 0 }, { 698, 400 }};
static const XRect _Const0002 = {{ -228, 265 }, { -128, 295 }};
static const XStringRes _Const0003 = { _StringsDefault0, 0x0002 };
static const XRect _Const0004 = {{ 32, 145 }, { 272, 385 }};
static const XRect _Const0005 = {{ 0, 0 }, { 240, 240 }};
static const XRect _Const0006 = {{ 14, 16 }, { 64, 68 }};
static const XStringRes _Const0007 = { _StringsDefault0, 0x0009 };
static const XColor _Const0008 = { 0x00, 0x00, 0x00, 0xFF };
static const XRect _Const0009 = {{ -249, -4 }, { -9, 236 }};
static const XColor _Const000A = { 0x63, 0x86, 0x91, 0xFF };
static const XRect _Const000B = {{ 64, 165 }, { 114, 217 }};
static const XStringRes _Const000C = { _StringsDefault0, 0x000D };
static const XRect _Const000D = {{ 114, 113 }, { 164, 165 }};
static const XStringRes _Const000E = { _StringsDefault0, 0x0011 };
static const XRect _Const000F = {{ 114, 61 }, { 164, 113 }};
static const XStringRes _Const0010 = { _StringsDefault0, 0x0015 };
static const XRect _Const0011 = {{ 114, 16 }, { 164, 68 }};
static const XStringRes _Const0012 = { _StringsDefault0, 0x0019 };
static const XRect _Const0013 = {{ 64, 113 }, { 114, 165 }};
static const XStringRes _Const0014 = { _StringsDefault0, 0x001D };
static const XRect _Const0015 = {{ 64, 61 }, { 114, 113 }};
static const XStringRes _Const0016 = { _StringsDefault0, 0x0021 };
static const XRect _Const0017 = {{ 14, 113 }, { 64, 165 }};
static const XStringRes _Const0018 = { _StringsDefault0, 0x0025 };
static const XRect _Const0019 = {{ 14, 61 }, { 64, 113 }};
static const XStringRes _Const001A = { _StringsDefault0, 0x0029 };
static const XRect _Const001B = {{ 64, 16 }, { 114, 68 }};
static const XStringRes _Const001C = { _StringsDefault0, 0x002D };
static const XRect _Const001D = {{ 175, 131 }, { 225, 183 }};
static const XStringRes _Const001E = { _StringsDefault0, 0x0031 };
static const XRect _Const001F = {{ 175, 183 }, { 225, 235 }};
static const XStringRes _Const0020 = { _StringsDefault0, 0x0035 };
static const XColor _Const0021 = { 0x4A, 0x06, 0x04, 0xFF };
static const XRect _Const0022 = {{ 7, 174 }, { 57, 226 }};
static const XStringRes _Const0023 = { _StringsDefault0, 0x0039 };
static const XRect _Const0024 = {{ 175, 87 }, { 225, 139 }};
static const XStringRes _Const0025 = { _StringsDefault0, 0x003D };
static const XRect _Const0026 = {{ 175, 42 }, { 225, 94 }};
static const XStringRes _Const0027 = { _StringsDefault0, 0x0041 };
static const XRect _Const0028 = {{ 175, 4 }, { 225, 56 }};
static const XStringRes _Const0029 = { _StringsDefault0, 0x0045 };
static const XRect _Const002A = {{ 0, 0 }, { 50, 50 }};
static const XColor _Const002B = { 0x12, 0x3D, 0x4A, 0xFF };
static const XPoint _Const002C = { 0, 235 };
static const XPoint _Const002D = { 240, 236 };
static const XPoint _Const002E = { 240, 0 };
static const XPoint _Const002F = { 0, 0 };
static const XStringRes _Const0030 = { _StringsDefault0, 0x0049 };
static const XStringRes _Const0031 = { _StringsDefault0, 0x0064 };
static const XColor _Const0032 = { 0xFF, 0xFF, 0xFF, 0xFF };
static const XStringRes _Const0033 = { _StringsDefault0, 0x0085 };
static const XStringRes _Const0034 = { _StringsDefault0, 0x00A7 };

/* Initializer for the class 'Application::Application' */
void ApplicationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreRoot__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationApplication );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Text, &_this->_.XObject, 0 );
  ApplicationNumPadClass__Init( &_this->Outline, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Image, 1 );
  CoreRectView__OnSetBounds( &_this->Image, _Const0001 );
  ViewsImage_OnSetAlphaBlended( &_this->Image, 0 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Text, 3 );
  CoreRectView__OnSetBounds( &_this->Text, _Const0002 );
  ViewsText_OnSetString( &_this->Text, EwLoadString( &_Const0003 ));
  CoreView_OnSetStackingPriority((CoreView)&_this->Outline, 2 );
  CoreRectView__OnSetBounds( &_this->Outline, _Const0004 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Text ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Outline ), 0 );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ApplicationBgkImg, ResourcesBitmap ));
  ViewsText_OnSetFont( &_this->Text, EwLoadResource( &ResourcesDefaultFont, ResourcesFont ));
}

/* Re-Initializer for the class 'Application::Application' */
void ApplicationApplication__ReInit( ApplicationApplication _this )
{
  /* At first re-initialize the super class ... */
  CoreRoot__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Image );
  ViewsText__ReInit( &_this->Text );
  ApplicationNumPadClass__ReInit( &_this->Outline );
}

/* Finalizer method for the class 'Application::Application' */
void ApplicationApplication__Done( ApplicationApplication _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreRoot );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Image );
  ViewsText__Done( &_this->Text );
  ApplicationNumPadClass__Done( &_this->Outline );

  /* Don't forget to deinitialize the super class ... */
  CoreRoot__Done( &_this->_.Super );
}

/* Variants derived from the class : 'Application::Application' */
EW_DEFINE_CLASS_VARIANTS( ApplicationApplication )
EW_END_OF_CLASS_VARIANTS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_CLASS( ApplicationApplication, CoreRoot, Image, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, "Application::Application" )
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
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreRoot_InvalidateArea,
EW_END_OF_CLASS( ApplicationApplication )

/* Include a file containing the bitmap resource : 'Application::BgkImg' */
#include "_ApplicationBgkImg.h"

/* Table with links to derived variants of the bitmap resource : 'Application::BgkImg' */
EW_RES_WITHOUT_VARIANTS( ApplicationBgkImg )

/* Include a file containing the font resource : 'Application::NumFont' */
#include "_ApplicationNumFont.h"

/* Table with links to derived variants of the font resource : 'Application::NumFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationNumFont )

/* Include a file containing the font resource : 'Application::MidNumFont' */
#include "_ApplicationMidNumFont.h"

/* Table with links to derived variants of the font resource : 'Application::MidNumFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationMidNumFont )

/* Initializer for the class 'Application::NumPadClass' */
void ApplicationNumPadClass__Init( ApplicationNumPadClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationNumPadClass );

  /* ... then construct all embedded objects */
  ViewsText__Init( &_this->One, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Zero, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Nine, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Six, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Three, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Eight, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Five, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Seven, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Four, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Two, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Divide, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Equals, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Clear, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Multiply, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Subtract, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Plus, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->FlashTimer, &_this->_.XObject, 0 );
  ViewsRectangle__Init( &_this->Highlight, &_this->_.XObject, 0 );
  CoreSimpleTouchHandler__Init( &_this->TouchHandler, &_this->_.XObject, 0 );
  ViewsBorder__Init( &_this->Border, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationNumPadClass );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0005 );
  CoreView_OnSetStackingPriority((CoreView)&_this->One, 2 );
  CoreRectView__OnSetBounds( &_this->One, _Const0006 );
  ViewsText_OnSetString( &_this->One, EwLoadString( &_Const0007 ));
  ViewsText_OnSetColor( &_this->One, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Rectangle, 1 );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0009 );
  ViewsRectangle_OnSetColor( &_this->Rectangle, _Const000A );
  CoreView_OnSetStackingPriority((CoreView)&_this->Zero, 2 );
  CoreRectView__OnSetBounds( &_this->Zero, _Const000B );
  ViewsText_OnSetString( &_this->Zero, EwLoadString( &_Const000C ));
  ViewsText_OnSetColor( &_this->Zero, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Nine, 2 );
  CoreRectView__OnSetBounds( &_this->Nine, _Const000D );
  ViewsText_OnSetString( &_this->Nine, EwLoadString( &_Const000E ));
  ViewsText_OnSetColor( &_this->Nine, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Six, 2 );
  CoreRectView__OnSetBounds( &_this->Six, _Const000F );
  ViewsText_OnSetString( &_this->Six, EwLoadString( &_Const0010 ));
  ViewsText_OnSetColor( &_this->Six, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Three, 2 );
  CoreRectView__OnSetBounds( &_this->Three, _Const0011 );
  ViewsText_OnSetString( &_this->Three, EwLoadString( &_Const0012 ));
  ViewsText_OnSetColor( &_this->Three, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Eight, 2 );
  CoreRectView__OnSetBounds( &_this->Eight, _Const0013 );
  ViewsText_OnSetString( &_this->Eight, EwLoadString( &_Const0014 ));
  ViewsText_OnSetColor( &_this->Eight, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Five, 2 );
  CoreRectView__OnSetBounds( &_this->Five, _Const0015 );
  ViewsText_OnSetString( &_this->Five, EwLoadString( &_Const0016 ));
  ViewsText_OnSetColor( &_this->Five, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Seven, 2 );
  CoreRectView__OnSetBounds( &_this->Seven, _Const0017 );
  ViewsText_OnSetString( &_this->Seven, EwLoadString( &_Const0018 ));
  ViewsText_OnSetColor( &_this->Seven, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Four, 2 );
  CoreRectView__OnSetBounds( &_this->Four, _Const0019 );
  ViewsText_OnSetString( &_this->Four, EwLoadString( &_Const001A ));
  ViewsText_OnSetColor( &_this->Four, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Two, 2 );
  CoreRectView__OnSetBounds( &_this->Two, _Const001B );
  ViewsText_OnSetString( &_this->Two, EwLoadString( &_Const001C ));
  ViewsText_OnSetColor( &_this->Two, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Divide, 2 );
  CoreRectView__OnSetBounds( &_this->Divide, _Const001D );
  ViewsText_OnSetString( &_this->Divide, EwLoadString( &_Const001E ));
  ViewsText_OnSetColor( &_this->Divide, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Equals, 2 );
  CoreRectView__OnSetBounds( &_this->Equals, _Const001F );
  ViewsText_OnSetString( &_this->Equals, EwLoadString( &_Const0020 ));
  ViewsText_OnSetColor( &_this->Equals, _Const0021 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Clear, 2 );
  CoreRectView__OnSetBounds( &_this->Clear, _Const0022 );
  ViewsText_OnSetString( &_this->Clear, EwLoadString( &_Const0023 ));
  ViewsText_OnSetColor( &_this->Clear, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Multiply, 2 );
  CoreRectView__OnSetBounds( &_this->Multiply, _Const0024 );
  ViewsText_OnSetString( &_this->Multiply, EwLoadString( &_Const0025 ));
  ViewsText_OnSetColor( &_this->Multiply, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Subtract, 2 );
  CoreRectView__OnSetBounds( &_this->Subtract, _Const0026 );
  ViewsText_OnSetString( &_this->Subtract, EwLoadString( &_Const0027 ));
  ViewsText_OnSetColor( &_this->Subtract, _Const0008 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Plus, 2 );
  CoreRectView__OnSetBounds( &_this->Plus, _Const0028 );
  ViewsText_OnSetString( &_this->Plus, EwLoadString( &_Const0029 ));
  ViewsText_OnSetColor( &_this->Plus, _Const0008 );
  CoreTimer_OnSetPeriod( &_this->FlashTimer, 0 );
  CoreTimer_OnSetBegin( &_this->FlashTimer, 50 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Highlight, 2 );
  CoreRectView__OnSetBounds( &_this->Highlight, _Const002A );
  ViewsRectangle_OnSetColor( &_this->Highlight, _Const002B );
  ViewsRectangle_OnSetVisible( &_this->Highlight, 0 );
  CoreView_OnSetStackingPriority((CoreView)&_this->TouchHandler, 3 );
  CoreView_OnSetLayout((CoreView)&_this->TouchHandler, CoreLayoutAlignToBottom | 
  CoreLayoutAlignToLeft | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz 
  | CoreLayoutResizeVert );
  CoreQuadView_OnSetPoint4((CoreQuadView)&_this->TouchHandler, _Const002C );
  CoreQuadView_OnSetPoint3((CoreQuadView)&_this->TouchHandler, _Const002D );
  CoreQuadView_OnSetPoint2((CoreQuadView)&_this->TouchHandler, _Const002E );
  CoreQuadView_OnSetPoint1((CoreQuadView)&_this->TouchHandler, _Const002F );
  _this->TouchHandler.EnableMultiTouch = 1;
  CoreSimpleTouchHandler_OnSetMaxStrikeCount( &_this->TouchHandler, 100 );
  CoreView_OnSetLayout((CoreView)&_this->Border, CoreLayoutAlignToBottom | CoreLayoutAlignToLeft 
  | CoreLayoutAlignToRight | CoreLayoutAlignToTop | CoreLayoutResizeHorz | CoreLayoutResizeVert );
  CoreRectView__OnSetBounds( &_this->Border, _Const0005 );
  ViewsBorder_OnSetWidth( &_this->Border, 3 );
  ViewsBorder_OnSetColor( &_this->Border, _Const0008 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->One ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Zero ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Nine ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Six ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Three ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Eight ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Five ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Seven ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Four ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Two ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Divide ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Equals ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Clear ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Multiply ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Subtract ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Plus ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Highlight ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TouchHandler ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Border ), 0 );
  ViewsText_OnSetFont( &_this->One, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Zero, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Nine, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Six, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Three, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Eight, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Five, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Seven, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Four, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Two, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Divide, EwLoadResource( &ApplicationMidNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Equals, EwLoadResource( &ApplicationNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Clear, EwLoadResource( &ApplicationMidNumFont, ResourcesFont ));
  ViewsText_OnSetFont( &_this->Multiply, EwLoadResource( &ApplicationMidNumFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->Subtract, EwLoadResource( &ApplicationMidNumFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->Plus, EwLoadResource( &ApplicationMidNumFont, ResourcesFont ));
  _this->FlashTimer.OnTrigger = EwNewSlot( _this, ApplicationNumPadClass_onFlashTimer );
  _this->TouchHandler.OnDrag = EwNewSlot( _this, ApplicationNumPadClass_onDragTouch );
  _this->TouchHandler.OnRelease = EwNewSlot( _this, ApplicationNumPadClass_onReleaseTouch );
  _this->TouchHandler.OnPress = EwNewSlot( _this, ApplicationNumPadClass_onPressTouch );
}

/* Re-Initializer for the class 'Application::NumPadClass' */
void ApplicationNumPadClass__ReInit( ApplicationNumPadClass _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsText__ReInit( &_this->One );
  ViewsRectangle__ReInit( &_this->Rectangle );
  ViewsText__ReInit( &_this->Zero );
  ViewsText__ReInit( &_this->Nine );
  ViewsText__ReInit( &_this->Six );
  ViewsText__ReInit( &_this->Three );
  ViewsText__ReInit( &_this->Eight );
  ViewsText__ReInit( &_this->Five );
  ViewsText__ReInit( &_this->Seven );
  ViewsText__ReInit( &_this->Four );
  ViewsText__ReInit( &_this->Two );
  ViewsText__ReInit( &_this->Divide );
  ViewsText__ReInit( &_this->Equals );
  ViewsText__ReInit( &_this->Clear );
  ViewsText__ReInit( &_this->Multiply );
  ViewsText__ReInit( &_this->Subtract );
  ViewsText__ReInit( &_this->Plus );
  CoreTimer__ReInit( &_this->FlashTimer );
  ViewsRectangle__ReInit( &_this->Highlight );
  CoreSimpleTouchHandler__ReInit( &_this->TouchHandler );
  ViewsBorder__ReInit( &_this->Border );
}

/* Finalizer method for the class 'Application::NumPadClass' */
void ApplicationNumPadClass__Done( ApplicationNumPadClass _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsText__Done( &_this->One );
  ViewsRectangle__Done( &_this->Rectangle );
  ViewsText__Done( &_this->Zero );
  ViewsText__Done( &_this->Nine );
  ViewsText__Done( &_this->Six );
  ViewsText__Done( &_this->Three );
  ViewsText__Done( &_this->Eight );
  ViewsText__Done( &_this->Five );
  ViewsText__Done( &_this->Seven );
  ViewsText__Done( &_this->Four );
  ViewsText__Done( &_this->Two );
  ViewsText__Done( &_this->Divide );
  ViewsText__Done( &_this->Equals );
  ViewsText__Done( &_this->Clear );
  ViewsText__Done( &_this->Multiply );
  ViewsText__Done( &_this->Subtract );
  ViewsText__Done( &_this->Plus );
  CoreTimer__Done( &_this->FlashTimer );
  ViewsRectangle__Done( &_this->Highlight );
  CoreSimpleTouchHandler__Done( &_this->TouchHandler );
  ViewsBorder__Done( &_this->Border );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* This internal slot method is called when the user touches the keyboard area. */
void ApplicationNumPadClass_onPressTouch( ApplicationNumPadClass _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );
  EwTrace( "%s", EwLoadString( &_Const0030 ));

  if ( _this->FlashTimer.Enabled )
  {
    EwSignal( EwNewSlot( _this, ApplicationNumPadClass_activateKey ), ((XObject)_this ));
    CoreTimer_OnSetEnabled( &_this->FlashTimer, 0 );
  }

  _this->recentPosition = _this->TouchHandler.CurrentPos;
  EwTrace( "%p", _this->recentPosition );
}

/* This internal slot method is called when the user releases the touch screen after 
   touching the keyboard area. This activates the key the user has touched. */
void ApplicationNumPadClass_onReleaseTouch( ApplicationNumPadClass _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );

  if ( !_this->TouchHandler.Inside )
    return;

  if ( _this->TouchHandler.HoldPeriod >= _this->FlashTimer.Begin )
    EwSignal( EwNewSlot( _this, ApplicationNumPadClass_activateKey ), ((XObject)_this ));
  else
    CoreTimer_OnSetEnabled( &_this->FlashTimer, 1 );
}

/* This internal slot method is called when the user drags the finger while pressing 
   the keyboard. This updates the keyboard to highlight the key at the new touch 
   position. */
void ApplicationNumPadClass_onDragTouch( ApplicationNumPadClass _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );
  _this->recentPosition = _this->TouchHandler.CurrentPos;
}

/* This internal slot method is called when the '@FlashTimer' is expired. It ends 
   the short flash feedback effect. */
void ApplicationNumPadClass_onFlashTimer( ApplicationNumPadClass _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_InvalidateViewState((CoreGroup)_this );
  EwSignal( EwNewSlot( _this, ApplicationNumPadClass_activateKey ), ((XObject)_this ));
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
void ApplicationNumPadClass_UpdateViewState( ApplicationNumPadClass _this, XSet 
  aState )
{
  CoreView isKeyView;
  XBool isPressed;

  CoreGroup_UpdateViewState((CoreGroup)_this, aState );
  EwTrace( "%s", EwLoadString( &_Const0031 ));
  isKeyView = 0;
  isPressed = (XBool)(( _this->TouchHandler.Down && _this->TouchHandler.Inside ) 
  || _this->FlashTimer.Enabled );

  if ( isPressed && EwIsPointInRect( CoreView__GetExtent( &_this->TouchHandler ), 
      _this->recentPosition ))
    isKeyView = CoreGroup_FindViewAtPosition((CoreGroup)_this, 0, _this->recentPosition, 
    0 );

  if (( EwCastObject( isKeyView, ViewsText ) == 0 ) && ( EwCastObject( isKeyView, 
      ViewsImage ) == 0 ))
    isKeyView = 0;

  if ( isKeyView != _this->keyView )
  {
    ViewsText isTextKeyView = EwCastObject( isKeyView, ViewsText );
    ViewsText textKeyView = EwCastObject( _this->keyView, ViewsText );

    if ( isKeyView != 0 )
    {
      CoreRectView__OnSetBounds( &_this->Highlight, CoreView__GetExtent( isKeyView ));
      ViewsRectangle_OnSetVisible( &_this->Highlight, 1 );
    }
    else
      ViewsRectangle_OnSetVisible( &_this->Highlight, 0 );

    if ( isTextKeyView != 0 )
      ViewsText_OnSetColor( isTextKeyView, _Const0032 );

    if ( textKeyView != 0 )
      ViewsText_OnSetColor( textKeyView, _Const0008 );
  }

  _this->keyView = isKeyView;
}

/* This internal slot method is called when the recently pressed key should be activated. 
   This is when the user presses on a key and then releases the finger again. */
void ApplicationNumPadClass_activateKey( ApplicationNumPadClass _this, XObject sender )
{
  ViewsText textKeyView;
  XChar charCode;
  XEnum keyCode;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  textKeyView = EwCastObject( _this->keyView, ViewsText );
  charCode = 0x0000;
  keyCode = CoreKeyCodeNoKey;
  EwTrace( "%s", EwLoadString( &_Const0033 ));

  if ( textKeyView != 0 )
  {
    charCode = EwGetStringChar( textKeyView->String, 0 );
    EwTrace( "%s", EwConcatStringChar( EwLoadString( &_Const0034 ), charCode ));
  }

  if (( textKeyView != 0 ) && ( EwGetStringChar( textKeyView->String, 0 ) == '=' ))
    keyCode = CoreKeyCodeEnter;

  if (( textKeyView != 0 ) && !EwCompString( textKeyView->String, EwLoadString( 
      &_Const0023 )))
    keyCode = CoreKeyCodeDelete;

  if (( charCode != 0x0000 ) && ( keyCode == CoreKeyCodeNoKey ))
  {
    CoreRoot_DriveKeyboardHitting( CoreView__GetRoot( _this ), CoreKeyCodeNoKey, 
    charCode, 1 );
    CoreRoot_DriveKeyboardHitting( CoreView__GetRoot( _this ), CoreKeyCodeNoKey, 
    charCode, 0 );
  }

  if ( keyCode != CoreKeyCodeNoKey )
  {
    CoreRoot_DriveKeyboardHitting( CoreView__GetRoot( _this ), keyCode, 0x0000, 
    1 );
    CoreRoot_DriveKeyboardHitting( CoreView__GetRoot( _this ), keyCode, 0x0000, 
    0 );
  }
}

/* Variants derived from the class : 'Application::NumPadClass' */
EW_DEFINE_CLASS_VARIANTS( ApplicationNumPadClass )
EW_END_OF_CLASS_VARIANTS( ApplicationNumPadClass )

/* Virtual Method Table (VMT) for the class : 'Application::NumPadClass' */
EW_DEFINE_CLASS( ApplicationNumPadClass, CoreGroup, One, keyView, recentPosition, 
                 recentPosition, recentPosition, recentPosition, "Application::NumPadClass" )
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
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  ApplicationNumPadClass_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationNumPadClass )

/* Embedded Wizard */
