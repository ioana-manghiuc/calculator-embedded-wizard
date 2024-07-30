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
aci=(function(){var B=EmWiApp;var E={};

E.If={timer:null,JX:null,Kx:0,Gg:0,HL:0.001,Co:0,AH:0,AS:0,DE:0,Ei:1000,En:0,BS:false
,Dl:function(Ax){var A;if(!this.timer)return;if(!this.Gg){this.Gg=1;this.Kx=this.
Gg;this.AS=this.timer.AU;this.AH=0;this.Co=-1;}var Cl;if((this.Gg>0)&&(this.Kx>0
))Cl=this.Pw();else if((this.Gg<0)&&(this.Kx<0))Cl=this.Pz();else if(this.Gg>0)Cl=
this.Px();else Cl=this.Py();if(Cl){this.Ba(false);(A=this.JX)?A[1].call(A[0],this
):null;}},I9:function(O8){this.K0(O8);},Pz:function(){var Ad=(this.timer.AU-this.
AS)|0;if(Ad<0)Ad=-Ad;var CS=0;var Dg=this.Ei;var Bi=this.En+this.Ei;var Cl=false;
var Aj=this.Co;if(!this.AH&&(Ad>=Dg)){this.AH=1;Ad=Ad-Dg;this.AS=this.AS+Dg;}if((
this.AH>0)&&(Ad>=Bi)){var Br=(Ad/Bi)|0;this.AH=this.AH+Br;Ad=Ad-(Br*Bi);this.AS=
this.AS+(Br*Bi);}if((this.AH>2)&&!this.DE)this.AH=1;if(this.AH>0)CS=this.En;if((
this.AH>=this.DE)&&(this.DE>0)){Cl=true;Aj=0;}else if(Ad>=CS)Aj=1-((Ad-CS)*this.
HL);else if(Aj>=0)Aj=0;if(Aj!==this.Co){if(Aj<0)Aj=0;if(Aj>1)Aj=1;}if(Aj!==this.
Co){this.Co=Aj;this.I9(Aj);}return Cl;},Py:function(){var Ad=(this.AS-this.timer.
AU)|0;var CS=0;var Dg=this.Ei;var Bi=this.En+this.Ei;var Cl=false;var Aj=this.Co;
if((this.AH>1)&&(Ad<0)){var Br=(((-Ad+Bi)-1)/Bi)|0;if((this.AH-Br)<=0)Br=this.AH-
1;this.AH=this.AH-Br;Ad=Ad+(Br*Bi);this.AS=this.AS+(Br*Bi);}if(((this.AH===1)&&(
Ad<0))&&(this.DE>0)){this.AH=0;Ad=Ad+Dg;this.AS=this.AS+Dg;}if(((this.AH===1)&&(
Ad<0))&&!this.DE){var Br=(((-Ad+Bi)-1)/Bi)|0;Ad=Ad+(Br*Bi);this.AS=this.AS+(Br*Bi
);}if(this.AH>0)CS=this.En;if(Ad<0){Cl=true;Aj=1;}else if(Ad>=CS)Aj=1-((Ad-CS)*this.
HL);else if(Aj>=0)Aj=1;if(Aj!==this.Co){if(Aj<0)Aj=0;if(Aj>1)Aj=1;}if(Aj!==this.
Co){this.Co=Aj;this.I9(Aj);}return Cl;},Px:function(){var Ad=(this.AS-this.timer.
AU)|0;var CS=0;var Dg=this.Ei;var Bi=this.En+this.Ei;var Cl=false;var Aj=this.Co;
if((this.AH>1)&&(Ad<0)){var Br=(((-Ad+Bi)-1)/Bi)|0;if((this.AH-Br)<=0)Br=this.AH-
1;this.AH=this.AH-Br;Ad=Ad+(Br*Bi);this.AS=this.AS+(Br*Bi);}if(((this.AH===1)&&(
Ad<0))&&(this.DE>0)){this.AH=0;Ad=Ad+Dg;this.AS=this.AS+Dg;}if(((this.AH===1)&&(
Ad<0))&&!this.DE){var Br=(((-Ad+Bi)-1)/Bi)|0;Ad=Ad+(Br*Bi);this.AS=this.AS+(Br*Bi
);}if(this.AH>0)CS=this.En;if(Ad<0){Cl=true;Aj=0;}else if(Ad>=CS)Aj=(Ad-CS)*this.
HL;else if(Aj>=0)Aj=0;if(Aj!==this.Co){if(Aj<0)Aj=0;if(Aj>1)Aj=1;}if(Aj!==this.Co
){this.Co=Aj;this.I9(Aj);}return Cl;},Pw:function(){var Ad=(this.timer.AU-this.AS
)|0;if(Ad<0)Ad=-Ad;var CS=0;var Dg=this.Ei;var Bi=this.En+this.Ei;var Cl=false;var
Aj=this.Co;if(!this.AH&&(Ad>=Dg)){this.AH=1;Ad=Ad-Dg;this.AS=this.AS+Dg;}if((this.
AH>0)&&(Ad>=Bi)){var Br=(Ad/Bi)|0;this.AH=this.AH+Br;Ad=Ad-(Br*Bi);this.AS=this.
AS+(Br*Bi);}if((this.AH>2)&&!this.DE)this.AH=1;if(this.AH>0)CS=this.En;if((this.
AH>=this.DE)&&(this.DE>0)){Cl=true;Aj=1;}else if(Ad>=CS)Aj=(Ad-CS)*this.HL;else if(
Aj>=0)Aj=1;if(Aj!==this.Co){if(Aj<0)Aj=0;if(Aj>1)Aj=1;}if(Aj!==this.Co){this.Co=
Aj;this.I9(Aj);}return Cl;},Li:function(C){if(C<0)C=0;this.DE=C;},K$:function(C){
if(C<15)C=15;this.Ei=C;this.HL=1/C;},M8:function(C){if(C<0)C=0;this.En=C;},Ba:function(
C){if(this.BS===C)return;this.BS=C;if(!C&&!!this.timer){B.z9([this,this.Dl],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.FB);B.zV([this,this.
Dl],this.timer,0);this.Gg=0;B.pe([this,this.Dl],this);}},K0:function(LI){},_Init:
function(aArg){this.__proto__=E.If;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.timer)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.JX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};E.Bl={A2:null,Lw:0,Kh:0,K0:function(LI){var BG;
this.Lw=this.Kh+(Math.round((255-this.Kh)*LI)|0);if(!!this.A2)(BG=this.A2,BG[2].
call(BG[0],this.Lw));},_Init:function(aArg){E.If._Init.call(this,aArg);this.__proto__=
E.Bl;},_Mark:function(D){var A;E.If._Mark.call(this,D);if((A=this.A2)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};E.Jr={Trigger:
function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.
Core.Timer._Init.call(this,aArg);this.__proto__=E.Jr;},_className:"Effects::EffectTimerClass"
};E.FB={_Init:function(){E.Jr._Init.call(this,0);this.FJ(15);this.Ba(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
E._Init=function(){E.Bl.__proto__=E.If;E.Jr.__proto__=B.Core.Timer;};E._ReInit=function(
){var A;if((A=E.FB._this))A._ReInit(),E.FB._ReInit.call(A);};E.CP=function(D){var
A;if((A=E.FB._this)&&(A._cycle!=D))A._Done(E.FB._this=null);};return E;})();

/* Embedded Wizard */