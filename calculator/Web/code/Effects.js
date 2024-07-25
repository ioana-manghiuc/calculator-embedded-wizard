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
);if(EmWiApp.acj)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
acj=(function(){var B=EmWiApp;var E={};

E.JU={timer:null,Ma:0,HS:0,Jr:0.001,CS:0,AJ:0,AZ:0,Ew:0,DF:1000,DG:0,Cl:false,CF:
function(Au){if(!this.timer)return;if(!this.HS){this.HS=1;this.Ma=this.HS;this.AZ=
this.timer.An;this.AJ=0;this.CS=-1;}var CR;if((this.HS>0)&&(this.Ma>0))CR=this.R2(
);else if((this.HS<0)&&(this.Ma<0))CR=this.R5();else if(this.HS>0)CR=this.R3();else
CR=this.R4();if(CR)this.BY(false);},KZ:function(Ro){this.ME(Ro);},R5:function(){
var W=(this.timer.An-this.AZ)|0;if(W<0)W=-W;var CD=0;var Dd=this.DF;var Bb=this.
DG+this.DF;var CR=false;var At=this.CS;if(!this.AJ&&(W>=Dd)){this.AJ=1;W=W-Dd;this.
AZ=this.AZ+Dd;}if((this.AJ>0)&&(W>=Bb)){var Bq=(W/Bb)|0;this.AJ=this.AJ+Bq;W=W-(
Bq*Bb);this.AZ=this.AZ+(Bq*Bb);}if((this.AJ>2)&&!this.Ew)this.AJ=1;if(this.AJ>0)
CD=this.DG;if((this.AJ>=this.Ew)&&(this.Ew>0)){CR=true;At=0;}else if(W>=CD)At=1-((
W-CD)*this.Jr);else if(At>=0)At=0;if(At!==this.CS){if(At<0)At=0;if(At>1)At=1;}if(
At!==this.CS){this.CS=At;this.KZ(At);}return CR;},R4:function(){var W=(this.AZ-this.
timer.An)|0;var CD=0;var Dd=this.DF;var Bb=this.DG+this.DF;var CR=false;var At=this.
CS;if((this.AJ>1)&&(W<0)){var Bq=(((-W+Bb)-1)/Bb)|0;if((this.AJ-Bq)<=0)Bq=this.AJ-
1;this.AJ=this.AJ-Bq;W=W+(Bq*Bb);this.AZ=this.AZ+(Bq*Bb);}if(((this.AJ===1)&&(W<
0))&&(this.Ew>0)){this.AJ=0;W=W+Dd;this.AZ=this.AZ+Dd;}if(((this.AJ===1)&&(W<0))&&
!this.Ew){var Bq=(((-W+Bb)-1)/Bb)|0;W=W+(Bq*Bb);this.AZ=this.AZ+(Bq*Bb);}if(this.
AJ>0)CD=this.DG;if(W<0){CR=true;At=1;}else if(W>=CD)At=1-((W-CD)*this.Jr);else if(
At>=0)At=1;if(At!==this.CS){if(At<0)At=0;if(At>1)At=1;}if(At!==this.CS){this.CS=
At;this.KZ(At);}return CR;},R3:function(){var W=(this.AZ-this.timer.An)|0;var CD=
0;var Dd=this.DF;var Bb=this.DG+this.DF;var CR=false;var At=this.CS;if((this.AJ>
1)&&(W<0)){var Bq=(((-W+Bb)-1)/Bb)|0;if((this.AJ-Bq)<=0)Bq=this.AJ-1;this.AJ=this.
AJ-Bq;W=W+(Bq*Bb);this.AZ=this.AZ+(Bq*Bb);}if(((this.AJ===1)&&(W<0))&&(this.Ew>0
)){this.AJ=0;W=W+Dd;this.AZ=this.AZ+Dd;}if(((this.AJ===1)&&(W<0))&&!this.Ew){var
Bq=(((-W+Bb)-1)/Bb)|0;W=W+(Bq*Bb);this.AZ=this.AZ+(Bq*Bb);}if(this.AJ>0)CD=this.
DG;if(W<0){CR=true;At=0;}else if(W>=CD)At=(W-CD)*this.Jr;else if(At>=0)At=0;if(At
!==this.CS){if(At<0)At=0;if(At>1)At=1;}if(At!==this.CS){this.CS=At;this.KZ(At);}
return CR;},R2:function(){var W=(this.timer.An-this.AZ)|0;if(W<0)W=-W;var CD=0;var
Dd=this.DF;var Bb=this.DG+this.DF;var CR=false;var At=this.CS;if(!this.AJ&&(W>=Dd
)){this.AJ=1;W=W-Dd;this.AZ=this.AZ+Dd;}if((this.AJ>0)&&(W>=Bb)){var Bq=(W/Bb)|0;
this.AJ=this.AJ+Bq;W=W-(Bq*Bb);this.AZ=this.AZ+(Bq*Bb);}if((this.AJ>2)&&!this.Ew
)this.AJ=1;if(this.AJ>0)CD=this.DG;if((this.AJ>=this.Ew)&&(this.Ew>0)){CR=true;At=
1;}else if(W>=CD)At=(W-CD)*this.Jr;else if(At>=0)At=1;if(At!==this.CS){if(At<0)At=
0;if(At>1)At=1;}if(At!==this.CS){this.CS=At;this.KZ(At);}return CR;},MY:function(
C){if(C<0)C=0;this.Ew=C;},J_:function(C){if(C<15)C=15;this.DF=C;this.Jr=1/C;},LP:
function(C){if(C<0)C=0;this.DG=C;},BY:function(C){if(this.Cl===C)return;this.Cl=
C;if(!C&&!!this.timer){B.z9([this,this.CF],this.timer,0);this.timer=null;}if(C){
this.timer=B._GetAutoObject(E.Fj);B.zV([this,this.CF],this.timer,0);this.HS=0;B.
pe([this,this.CF],this);}},ME:function(Nu){},_Init:function(aArg){this.__proto__=
E.JU;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};E.BA={Cy:null,Nc:0,If:0,ME:function(Nu){var DT;this.Nc=this.If+(
Math.round((255-this.If)*Nu)|0);if(!!this.Cy)(DT=this.Cy,DT[2].call(DT[0],this.Nc
));},_Init:function(aArg){E.JU._Init.call(this,aArg);this.__proto__=E.BA;},_Mark:
function(D){var A;E.JU._Mark.call(this,D);if((A=this.Cy)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);},_className:"Effects::Int32Effect"};E.MF={timer:null,Cy:null,
AJ:0,AZ:0,DF:1000,DG:1000,Cl:false,If:false,Nd:true,CF:function(Au){var DT;if(!this.
timer)return;if(this.AJ<0){this.AZ=this.timer.An;this.AJ=0;}var W=(this.timer.An-
this.AZ)|0;var Dd=this.DF;var Bb=this.DG+this.DF;var CD=0;var EG=this.AJ;if(!EG&&(
W>=Dd)){EG=1;W=W-Dd;}if((EG>0)&&(W>=Bb)){var Bq=(W/Bb)|0;W=W-(Bq*Bb);EG=EG+Bq;}if(
EG>2)EG=1;if(EG!==this.AJ){this.AZ=this.timer.An-(((A=W)<0)?A+0x100000000:A);this.
AJ=EG;}if(EG>0)CD=this.DG;if(!!this.Cy){if(W>=CD)(DT=this.Cy,DT[2].call(DT[0],this.
If));if((W<CD)&&(EG>0))(DT=this.Cy,DT[2].call(DT[0],this.Nd));}},J_:function(C){
if(C<100)C=100;this.DF=C;},LP:function(C){if(C<0)C=0;this.DG=C;},BY:function(C){
if(this.Cl===C)return;this.Cl=C;if(!C&&!!this.timer){B.z9([this,this.CF],this.timer
,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.Fj);B.zV([this,this.CF]
,this.timer,0);this.AJ=-1;}},_Init:function(aArg){this.__proto__=E.MF;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cy)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);
},K:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};E.Le={Trigger:
function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.
Core.Timer._Init.call(this,aArg);this.__proto__=E.Le;},_className:"Effects::EffectTimerClass"
};E.Fj={_Init:function(){E.Le._Init.call(this,0);this.I0(15);this.BY(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
E._Init=function(){E.BA.__proto__=E.JU;E.Le.__proto__=B.Core.Timer;};E._ReInit=function(
){var A;if((A=E.Fj._this))A._ReInit(),E.Fj._ReInit.call(A);};E.Dm=function(D){var
A;if((A=E.Fj._this)&&(A._cycle!=D))A._Done(E.Fj._this=null);};return E;})();

/* Embedded Wizard */