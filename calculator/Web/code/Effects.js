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
* Profile  : Web
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.aci)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
aci=(function(){var B=EmWiApp;var D={};

D.Ho={timer:null,Jp:0,FE:0,GX:0.001,B7:0,Az:0,AL:0,Di:0,DS:1000,DY:0,Cq:false,C2:
function(A0){if(!this.timer)return;if(!this.FE){this.FE=1;this.Jp=this.FE;this.AL=
this.timer.AN;this.Az=0;this.B7=-1;}var B4;if((this.FE>0)&&(this.Jp>0))B4=this.NQ(
);else if((this.FE<0)&&(this.Jp<0))B4=this.NT();else if(this.FE>0)B4=this.NR();else
B4=this.NS();if(B4)this.B0(false);},H6:function(Ns){this.JP(Ns);},NT:function(){
var Ab=(this.timer.AN-this.AL)|0;if(Ab<0)Ab=-Ab;var Cy=0;var CY=this.DS;var Bb=this.
DY+this.DS;var B4=false;var Ah=this.B7;if(!this.Az&&(Ab>=CY)){this.Az=1;Ab=Ab-CY;
this.AL=this.AL+CY;}if((this.Az>0)&&(Ab>=Bb)){var Bi=(Ab/Bb)|0;this.Az=this.Az+Bi;
Ab=Ab-(Bi*Bb);this.AL=this.AL+(Bi*Bb);}if((this.Az>2)&&!this.Di)this.Az=1;if(this.
Az>0)Cy=this.DY;if((this.Az>=this.Di)&&(this.Di>0)){B4=true;Ah=0;}else if(Ab>=Cy
)Ah=1-((Ab-Cy)*this.GX);else if(Ah>=0)Ah=0;if(Ah!==this.B7){if(Ah<0)Ah=0;if(Ah>1
)Ah=1;}if(Ah!==this.B7){this.B7=Ah;this.H6(Ah);}return B4;},NS:function(){var Ab=(
this.AL-this.timer.AN)|0;var Cy=0;var CY=this.DS;var Bb=this.DY+this.DS;var B4=false;
var Ah=this.B7;if((this.Az>1)&&(Ab<0)){var Bi=(((-Ab+Bb)-1)/Bb)|0;if((this.Az-Bi
)<=0)Bi=this.Az-1;this.Az=this.Az-Bi;Ab=Ab+(Bi*Bb);this.AL=this.AL+(Bi*Bb);}if(((
this.Az===1)&&(Ab<0))&&(this.Di>0)){this.Az=0;Ab=Ab+CY;this.AL=this.AL+CY;}if(((
this.Az===1)&&(Ab<0))&&!this.Di){var Bi=(((-Ab+Bb)-1)/Bb)|0;Ab=Ab+(Bi*Bb);this.AL=
this.AL+(Bi*Bb);}if(this.Az>0)Cy=this.DY;if(Ab<0){B4=true;Ah=1;}else if(Ab>=Cy)Ah=
1-((Ab-Cy)*this.GX);else if(Ah>=0)Ah=1;if(Ah!==this.B7){if(Ah<0)Ah=0;if(Ah>1)Ah=
1;}if(Ah!==this.B7){this.B7=Ah;this.H6(Ah);}return B4;},NR:function(){var Ab=(this.
AL-this.timer.AN)|0;var Cy=0;var CY=this.DS;var Bb=this.DY+this.DS;var B4=false;
var Ah=this.B7;if((this.Az>1)&&(Ab<0)){var Bi=(((-Ab+Bb)-1)/Bb)|0;if((this.Az-Bi
)<=0)Bi=this.Az-1;this.Az=this.Az-Bi;Ab=Ab+(Bi*Bb);this.AL=this.AL+(Bi*Bb);}if(((
this.Az===1)&&(Ab<0))&&(this.Di>0)){this.Az=0;Ab=Ab+CY;this.AL=this.AL+CY;}if(((
this.Az===1)&&(Ab<0))&&!this.Di){var Bi=(((-Ab+Bb)-1)/Bb)|0;Ab=Ab+(Bi*Bb);this.AL=
this.AL+(Bi*Bb);}if(this.Az>0)Cy=this.DY;if(Ab<0){B4=true;Ah=0;}else if(Ab>=Cy)Ah=(
Ab-Cy)*this.GX;else if(Ah>=0)Ah=0;if(Ah!==this.B7){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(
Ah!==this.B7){this.B7=Ah;this.H6(Ah);}return B4;},NQ:function(){var Ab=(this.timer.
AN-this.AL)|0;if(Ab<0)Ab=-Ab;var Cy=0;var CY=this.DS;var Bb=this.DY+this.DS;var B4=
false;var Ah=this.B7;if(!this.Az&&(Ab>=CY)){this.Az=1;Ab=Ab-CY;this.AL=this.AL+CY;
}if((this.Az>0)&&(Ab>=Bb)){var Bi=(Ab/Bb)|0;this.Az=this.Az+Bi;Ab=Ab-(Bi*Bb);this.
AL=this.AL+(Bi*Bb);}if((this.Az>2)&&!this.Di)this.Az=1;if(this.Az>0)Cy=this.DY;if((
this.Az>=this.Di)&&(this.Di>0)){B4=true;Ah=1;}else if(Ab>=Cy)Ah=(Ab-Cy)*this.GX;
else if(Ah>=0)Ah=1;if(Ah!==this.B7){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(Ah!==this.B7){
this.B7=Ah;this.H6(Ah);}return B4;},LO:function(C){if(C<0)C=0;this.Di=C;},Lx:function(
C){if(C<15)C=15;this.DS=C;this.GX=1/C;},LM:function(C){if(C<0)C=0;this.DY=C;},B0:
function(C){if(this.Cq===C)return;this.Cq=C;if(!C&&!!this.timer){B.z9([this,this.
C2],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(D.Fd);B.zV([
this,this.C2],this.timer,0);this.FE=0;B.pe([this,this.C2],this);}},JP:function(Kp
){},_Init:function(aArg){this.__proto__=D.Ho;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.timer)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);
},K:null,_cycle:0,_observers:null,_className:"Effects::Effect"};D.Cs={HB:null,Ke:
0,I$:0,JP:function(Kp){var Gb;this.Ke=this.I$+(Math.round((255-this.I$)*Kp)|0);if(
!!this.HB)(Gb=this.HB,Gb[2].call(Gb[0],this.Ke));},_Init:function(aArg){D.Ho._Init.
call(this,aArg);this.__proto__=D.Cs;},_Mark:function(E){var A;D.Ho._Mark.call(this
,E);if((A=this.HB)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);},_className:"Effects::Int32Effect"
};D.Il={Trigger:function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:
function(aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=D.Il;},_className:
"Effects::EffectTimerClass"};D.Fd={_Init:function(){D.Il._Init.call(this,0);this.
GG(15);this.B0(true);},_ReInit:function(){},_variants:function(){return this;},_this:
null};
D._Init=function(){D.Cs.__proto__=D.Ho;D.Il.__proto__=B.Core.Timer;};D._ReInit=function(
){var A;if((A=D.Fd._this))A._ReInit(),D.Fd._ReInit.call(A);};D.Cv=function(E){var
A;if((A=D.Fd._this)&&(A._cycle!=E))A._Done(D.Fd._this=null);};return D;})();

/* Embedded Wizard */