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

E.J5={timer:null,LX:null,Mu:0,HV:0,JB:0.001,CU:0,AJ:0,A1:0,EB:0,DH:1000,DI:0,Ck:false
,CF:function(Am){var A;if(!this.timer)return;if(!this.HV){this.HV=1;this.Mu=this.
HV;this.A1=this.timer.Ao;this.AJ=0;this.CU=-1;}var CT;if((this.HV>0)&&(this.Mu>0
))CT=this.Sm();else if((this.HV<0)&&(this.Mu<0))CT=this.Sp();else if(this.HV>0)CT=
this.Sn();else CT=this.So();if(CT){this.Bx(false);(A=this.LX)?A[1].call(A[0],this
):null;}},K_:function(RF){this.M0(RF);},Sp:function(){var X=(this.timer.Ao-this.
A1)|0;if(X<0)X=-X;var CD=0;var Dh=this.DH;var Bd=this.DI+this.DH;var CT=false;var
At=this.CU;if(!this.AJ&&(X>=Dh)){this.AJ=1;X=X-Dh;this.A1=this.A1+Dh;}if((this.AJ>
0)&&(X>=Bd)){var Br=(X/Bd)|0;this.AJ=this.AJ+Br;X=X-(Br*Bd);this.A1=this.A1+(Br*
Bd);}if((this.AJ>2)&&!this.EB)this.AJ=1;if(this.AJ>0)CD=this.DI;if((this.AJ>=this.
EB)&&(this.EB>0)){CT=true;At=0;}else if(X>=CD)At=1-((X-CD)*this.JB);else if(At>=
0)At=0;if(At!==this.CU){if(At<0)At=0;if(At>1)At=1;}if(At!==this.CU){this.CU=At;this.
K_(At);}return CT;},So:function(){var X=(this.A1-this.timer.Ao)|0;var CD=0;var Dh=
this.DH;var Bd=this.DI+this.DH;var CT=false;var At=this.CU;if((this.AJ>1)&&(X<0)
){var Br=(((-X+Bd)-1)/Bd)|0;if((this.AJ-Br)<=0)Br=this.AJ-1;this.AJ=this.AJ-Br;X=
X+(Br*Bd);this.A1=this.A1+(Br*Bd);}if(((this.AJ===1)&&(X<0))&&(this.EB>0)){this.
AJ=0;X=X+Dh;this.A1=this.A1+Dh;}if(((this.AJ===1)&&(X<0))&&!this.EB){var Br=(((-
X+Bd)-1)/Bd)|0;X=X+(Br*Bd);this.A1=this.A1+(Br*Bd);}if(this.AJ>0)CD=this.DI;if(X<
0){CT=true;At=1;}else if(X>=CD)At=1-((X-CD)*this.JB);else if(At>=0)At=1;if(At!==
this.CU){if(At<0)At=0;if(At>1)At=1;}if(At!==this.CU){this.CU=At;this.K_(At);}return CT;
},Sn:function(){var X=(this.A1-this.timer.Ao)|0;var CD=0;var Dh=this.DH;var Bd=this.
DI+this.DH;var CT=false;var At=this.CU;if((this.AJ>1)&&(X<0)){var Br=(((-X+Bd)-1
)/Bd)|0;if((this.AJ-Br)<=0)Br=this.AJ-1;this.AJ=this.AJ-Br;X=X+(Br*Bd);this.A1=this.
A1+(Br*Bd);}if(((this.AJ===1)&&(X<0))&&(this.EB>0)){this.AJ=0;X=X+Dh;this.A1=this.
A1+Dh;}if(((this.AJ===1)&&(X<0))&&!this.EB){var Br=(((-X+Bd)-1)/Bd)|0;X=X+(Br*Bd
);this.A1=this.A1+(Br*Bd);}if(this.AJ>0)CD=this.DI;if(X<0){CT=true;At=0;}else if(
X>=CD)At=(X-CD)*this.JB;else if(At>=0)At=0;if(At!==this.CU){if(At<0)At=0;if(At>1
)At=1;}if(At!==this.CU){this.CU=At;this.K_(At);}return CT;},Sm:function(){var X=(
this.timer.Ao-this.A1)|0;if(X<0)X=-X;var CD=0;var Dh=this.DH;var Bd=this.DI+this.
DH;var CT=false;var At=this.CU;if(!this.AJ&&(X>=Dh)){this.AJ=1;X=X-Dh;this.A1=this.
A1+Dh;}if((this.AJ>0)&&(X>=Bd)){var Br=(X/Bd)|0;this.AJ=this.AJ+Br;X=X-(Br*Bd);this.
A1=this.A1+(Br*Bd);}if((this.AJ>2)&&!this.EB)this.AJ=1;if(this.AJ>0)CD=this.DI;if((
this.AJ>=this.EB)&&(this.EB>0)){CT=true;At=1;}else if(X>=CD)At=(X-CD)*this.JB;else
if(At>=0)At=1;if(At!==this.CU){if(At<0)At=0;if(At>1)At=1;}if(At!==this.CU){this.
CU=At;this.K_(At);}return CT;},Nh:function(C){if(C<0)C=0;this.EB=C;},Kj:function(
C){if(C<15)C=15;this.DH=C;this.JB=1/C;},L5:function(C){if(C<0)C=0;this.DI=C;},Bx:
function(C){if(this.Ck===C)return;this.Ck=C;if(!C&&!!this.timer){B.z9([this,this.
CF],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.Fl);B.zV([
this,this.CF],this.timer,0);this.HV=0;B.pe([this,this.CF],this);}},M0:function(NP
){},_Init:function(aArg){this.__proto__=E.J5;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.timer)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.LX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};E.BD={Cz:null,Nw:0,Io:0,M0:function(NP){var DU;
this.Nw=this.Io+(Math.round((255-this.Io)*NP)|0);if(!!this.Cz)(DU=this.Cz,DU[2].
call(DU[0],this.Nw));},_Init:function(aArg){E.J5._Init.call(this,aArg);this.__proto__=
E.BD;},_Mark:function(D){var A;E.J5._Mark.call(this,D);if((A=this.Cz)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};E.M1={timer:
null,Cz:null,AJ:0,A1:0,DH:1000,DI:1000,Ck:false,Io:false,Nx:true,CF:function(Am){
var DU;if(!this.timer)return;if(this.AJ<0){this.A1=this.timer.Ao;this.AJ=0;}var X=(
this.timer.Ao-this.A1)|0;var Dh=this.DH;var Bd=this.DI+this.DH;var CD=0;var EI=this.
AJ;if(!EI&&(X>=Dh)){EI=1;X=X-Dh;}if((EI>0)&&(X>=Bd)){var Br=(X/Bd)|0;X=X-(Br*Bd);
EI=EI+Br;}if(EI>2)EI=1;if(EI!==this.AJ){this.A1=this.timer.Ao-(((A=X)<0)?A+0x100000000:
A);this.AJ=EI;}if(EI>0)CD=this.DI;if(!!this.Cz){if(X>=CD)(DU=this.Cz,DU[2].call(
DU[0],this.Io));if((X<CD)&&(EI>0))(DU=this.Cz,DU[2].call(DU[0],this.Nx));}},Kj:function(
C){if(C<100)C=100;this.DH=C;},L5:function(C){if(C<0)C=0;this.DI=C;},Bx:function(
C){if(this.Ck===C)return;this.Ck=C;if(!C&&!!this.timer){B.z9([this,this.CF],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.Fl);B.zV([this,this.
CF],this.timer,0);this.AJ=-1;}},_Init:function(aArg){this.__proto__=E.M1;B.h7++;
},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cz)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};E.Lp={Trigger:
function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.
Core.Timer._Init.call(this,aArg);this.__proto__=E.Lp;},_className:"Effects::EffectTimerClass"
};E.Fl={_Init:function(){E.Lp._Init.call(this,0);this.I9(15);this.Bx(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
E._Init=function(){E.BD.__proto__=E.J5;E.Lp.__proto__=B.Core.Timer;};E._ReInit=function(
){var A;if((A=E.Fl._this))A._ReInit(),E.Fl._ReInit.call(A);};E.Dp=function(D){var
A;if((A=E.Fl._this)&&(A._cycle!=D))A._Done(E.Fl._this=null);};return E;})();

/* Embedded Wizard */