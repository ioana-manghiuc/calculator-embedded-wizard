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

#ifndef _ApplicationPair_H
#define _ApplicationPair_H

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

/* Forward declaration of the class Application::Pair */
#ifndef _ApplicationPair_
  EW_DECLARE_CLASS( ApplicationPair )
#define _ApplicationPair_
#endif


/* Deklaration of class : 'Application::Pair' */
EW_DEFINE_FIELDS( ApplicationPair, XObject )
  EW_PROPERTY( Subexpression,   XString )
  EW_PROPERTY( IdentifiedNumber, XFloat )
  EW_PROPERTY( EndPosition,     XInt32 )
EW_END_OF_FIELDS( ApplicationPair )

/* Virtual Method Table (VMT) for the class : 'Application::Pair' */
EW_DEFINE_METHODS( ApplicationPair, XObject )
EW_END_OF_METHODS( ApplicationPair )

/* 'C' function for method : 'Application::Pair.Init()' */
void ApplicationPair_Init( ApplicationPair _this, XHandle aArg );

/* 'C' function for method : 'Application::Pair.OnSetIdentifiedNumber()' */
void ApplicationPair_OnSetIdentifiedNumber( ApplicationPair _this, XFloat value );

/* 'C' function for method : 'Application::Pair.OnSetEndPosition()' */
void ApplicationPair_OnSetEndPosition( ApplicationPair _this, XInt32 value );

/* 'C' function for method : 'Application::Pair.OnSetSubexpression()' */
void ApplicationPair_OnSetSubexpression( ApplicationPair _this, XString value );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationPair_H */

/* Embedded Wizard */
