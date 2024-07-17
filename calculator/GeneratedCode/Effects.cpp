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
#include "_CoreTimer.h"
#include "_EffectsBoolEffect.h"
#include "_EffectsEffectTimerClass.h"
#include "Effects.h"

/* Initializer for the class 'Effects::BoolEffect' */
void EffectsBoolEffect__Init( EffectsBoolEffect _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  XObject__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( EffectsBoolEffect );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( EffectsBoolEffect );

  /* ... and initialize objects, variables, properties, etc. */
  _this->Value2 = 1;
  _this->CycleDuration = 1000;
  _this->InterCycleDelay = 1000;
}

/* Re-Initializer for the class 'Effects::BoolEffect' */
void EffectsBoolEffect__ReInit( EffectsBoolEffect _this )
{
  /* At first re-initialize the super class ... */
  XObject__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Effects::BoolEffect' */
void EffectsBoolEffect__Done( EffectsBoolEffect _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( XObject );

  /* Don't forget to deinitialize the super class ... */
  XObject__Done( &_this->_.Super );
}

/* 'C' function for method : 'Effects::BoolEffect.timerSlot()' */
void EffectsBoolEffect_timerSlot( EffectsBoolEffect _this, XObject sender )
{
  XInt32 time;
  XInt32 period0;
  XInt32 periodN;
  XInt32 delay;
  XInt32 counter;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->timer == 0 )
    return;

  if ( _this->cycleCounter < 0 )
  {
    _this->startTime = _this->timer->Time;
    _this->cycleCounter = 0;
  }

  time = (XInt32)( _this->timer->Time - _this->startTime );
  period0 = _this->CycleDuration;
  periodN = _this->InterCycleDelay + _this->CycleDuration;
  delay = 0;
  counter = _this->cycleCounter;

  if (( counter == 0 ) && ( time >= period0 ))
  {
    counter = 1;
    time = time - period0;
  }

  if (( counter > 0 ) && ( time >= periodN ))
  {
    XInt32 cycles = time / periodN;
    time = time - ( cycles * periodN );
    counter = counter + cycles;
  }

  if ( counter > 2 )
    counter = 1;

  if ( counter != _this->cycleCounter )
  {
    _this->startTime = _this->timer->Time - (XUInt32)time;
    _this->cycleCounter = counter;
  }

  if ( counter > 0 )
    delay = _this->InterCycleDelay;

  if ( _this->Outlet.Object != 0 )
  {
    if ( time >= delay )
      EwOnSetBool( _this->Outlet, _this->Value1 );

    if (( time < delay ) && ( counter > 0 ))
      EwOnSetBool( _this->Outlet, _this->Value2 );
  }
}

/* 'C' function for method : 'Effects::BoolEffect.OnSetCycleDuration()' */
void EffectsBoolEffect_OnSetCycleDuration( EffectsBoolEffect _this, XInt32 value )
{
  if ( value < 100 )
    value = 100;

  _this->CycleDuration = value;
}

/* 'C' function for method : 'Effects::BoolEffect.OnSetInterCycleDelay()' */
void EffectsBoolEffect_OnSetInterCycleDelay( EffectsBoolEffect _this, XInt32 value )
{
  if ( value < 0 )
    value = 0;

  _this->InterCycleDelay = value;
}

/* 'C' function for method : 'Effects::BoolEffect.OnSetEnabled()' */
void EffectsBoolEffect_OnSetEnabled( EffectsBoolEffect _this, XBool value )
{
  if ( _this->Enabled == value )
    return;

  _this->Enabled = value;

  if ( !value && ( _this->timer != 0 ))
  {
    EwDetachObjObserver( EwNewSlot( _this, EffectsBoolEffect_timerSlot ), (XObject)_this->timer, 
      0 );
    _this->timer = 0;
  }

  if ( value )
  {
    _this->timer = ((CoreTimer)EwGetAutoObject( &EffectsEffectTimer, EffectsEffectTimerClass ));
    EwAttachObjObserver( EwNewSlot( _this, EffectsBoolEffect_timerSlot ), (XObject)_this->timer, 
      0 );
    _this->cycleCounter = -1;
  }
}

/* Variants derived from the class : 'Effects::BoolEffect' */
EW_DEFINE_CLASS_VARIANTS( EffectsBoolEffect )
EW_END_OF_CLASS_VARIANTS( EffectsBoolEffect )

/* Virtual Method Table (VMT) for the class : 'Effects::BoolEffect' */
EW_DEFINE_CLASS( EffectsBoolEffect, XObject, timer, timer, Outlet, Outlet, cycleCounter, 
                 cycleCounter, "Effects::BoolEffect" )
EW_END_OF_CLASS( EffectsBoolEffect )

/* Initializer for the class 'Effects::EffectTimerClass' */
void EffectsEffectTimerClass__Init( EffectsEffectTimerClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreTimer__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( EffectsEffectTimerClass );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( EffectsEffectTimerClass );
}

/* Re-Initializer for the class 'Effects::EffectTimerClass' */
void EffectsEffectTimerClass__ReInit( EffectsEffectTimerClass _this )
{
  /* At first re-initialize the super class ... */
  CoreTimer__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Effects::EffectTimerClass' */
void EffectsEffectTimerClass__Done( EffectsEffectTimerClass _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreTimer );

  /* Don't forget to deinitialize the super class ... */
  CoreTimer__Done( &_this->_.Super );
}

/* The method Trigger() will be invoked when the timer is expired (when the interval 
   defined in @Begin or @Period is elapsed). The method can be overridden and implemented 
   in derived classes. The default implementation of this method sends a signal 
   to the slot method stored in the @OnTrigger property. */
void EffectsEffectTimerClass_Trigger( EffectsEffectTimerClass _this )
{
  CoreTimer_Trigger((CoreTimer)_this );
  EwNotifyObjObservers((XObject)_this, 0 );
}

/* Variants derived from the class : 'Effects::EffectTimerClass' */
EW_DEFINE_CLASS_VARIANTS( EffectsEffectTimerClass )
EW_END_OF_CLASS_VARIANTS( EffectsEffectTimerClass )

/* Virtual Method Table (VMT) for the class : 'Effects::EffectTimerClass' */
EW_DEFINE_CLASS( EffectsEffectTimerClass, CoreTimer, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Effects::EffectTimerClass" )
  EffectsEffectTimerClass_Trigger,
EW_END_OF_CLASS( EffectsEffectTimerClass )

/* The global autoobject Effects::EffectTimer triggers all actually active animation 
   effects. In this way all effects will run simultanously. Per default the timer 
   is configured with 15 ms period (~60 FPS). By overriding the Effects::EffectTimer 
   autoobject by a variant you can specify another resolution to drive the animations. */
EW_DEFINE_AUTOOBJECT( EffectsEffectTimer, EffectsEffectTimerClass )

/* Initializer for the auto object 'Effects::EffectTimer' */
void EffectsEffectTimer__Init( EffectsEffectTimerClass _this )
{
  CoreTimer_OnSetPeriod((CoreTimer)_this, 15 );
  CoreTimer_OnSetEnabled((CoreTimer)_this, 1 );
}

/* Re-Initializer for the auto object 'Effects::EffectTimer' */
void EffectsEffectTimer__ReInit( EffectsEffectTimerClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Effects::EffectTimer' */
EW_DEFINE_AUTOOBJECT_VARIANTS( EffectsEffectTimer )
EW_END_OF_AUTOOBJECT_VARIANTS( EffectsEffectTimer )

/* Embedded Wizard */
