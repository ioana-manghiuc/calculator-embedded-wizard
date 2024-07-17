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

#ifndef Application_H
#define Application_H

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

#include "_ApplicationApplication.h"
#include "_ApplicationErrorDialog.h"
#include "_ApplicationNumKeyBtns.h"
#include "_ApplicationPair.h"
#include "_ApplicationResultTxtEd.h"

/* Font resource : 'Application::NumFont' */
EW_DECLARE_FONT_RES( ApplicationNumFont )

/* Font resource : 'Application::DigitalResFont' */
EW_DECLARE_FONT_RES( ApplicationDigitalResFont )

/* Bitmap resource : 'Application::CustomBtn' */
EW_DECLARE_BITMAP_RES( ApplicationCustomBtn )

/* Bitmap resource : 'Application::EqualsBtn' */
EW_DECLARE_BITMAP_RES( ApplicationEqualsBtn )

/* Font resource : 'Application::EqFont' */
EW_DECLARE_FONT_RES( ApplicationEqFont )

/* Bitmap resource : 'Application::PercentBtn' */
EW_DECLARE_BITMAP_RES( ApplicationPercentBtn )

/* Bitmap resource : 'Application::PowBtn' */
EW_DECLARE_BITMAP_RES( ApplicationPowBtn )

/* Font resource : 'Application::NumBoldFont' */
EW_DECLARE_FONT_RES( ApplicationNumBoldFont )

/* Bitmap resource : 'Application::DivideBtn' */
EW_DECLARE_BITMAP_RES( ApplicationDivideBtn )

/* Font resource : 'Application::MultiplyFont' */
EW_DECLARE_FONT_RES( ApplicationMultiplyFont )

/* Font resource : 'Application::ErrorFont' */
EW_DECLARE_FONT_RES( ApplicationErrorFont )

/* Font resource : 'Application::BtnFont' */
EW_DECLARE_FONT_RES( ApplicationBtnFont )

/* Bitmap resource : 'Application::OKBtn' */
EW_DECLARE_BITMAP_RES( ApplicationOKBtn )

/* Bitmap resource : 'Application::ParenthesisBtn' */
EW_DECLARE_BITMAP_RES( ApplicationParenthesisBtn )

/* Font resource : 'Application::NumFont1' */
EW_DECLARE_FONT_RES( ApplicationNumFont1 )

/* Bitmap resource : 'Application::BackBtn' */
EW_DECLARE_BITMAP_RES( ApplicationBackBtn )

#ifdef __cplusplus
  }
#endif

#endif /* Application_H */

/* Embedded Wizard */
