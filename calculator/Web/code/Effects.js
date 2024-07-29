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

E.KD={timer:null,Mz:null,M$:0,Ig:0,J7:0.001,C6:0,AM:0,A9:0,ED:0,DT:1000,DU:0,B1:false
,CP:function(Ae){var A;if(!this.timer)return;if(!this.Ig){this.Ig=1;this.M$=this.
Ig;this.A9=this.timer.Ap;this.AM=0;this.C6=-1;}var C5;if((this.Ig>0)&&(this.M$>0
))C5=this.Ti();else if((this.Ig<0)&&(this.M$<0))C5=this.Tl();else if(this.Ig>0)C5=
this.Tj();else C5=this.Tk();if(C5){this.Bb(false);(A=this.Mz)?A[1].call(A[0],this
):null;}},LM:function(SE){this.NC(SE);},Tl:function(){var Y=(this.timer.Ap-this.
A9)|0;if(Y<0)Y=-Y;var CL=0;var Du=this.DT;var Bj=this.DU+this.DT;var C5=false;var
Au=this.C6;if(!this.AM&&(Y>=Du)){this.AM=1;Y=Y-Du;this.A9=this.A9+Du;}if((this.AM>
0)&&(Y>=Bj)){var By=(Y/Bj)|0;this.AM=this.AM+By;Y=Y-(By*Bj);this.A9=this.A9+(By*
Bj);}if((this.AM>2)&&!this.ED)this.AM=1;if(this.AM>0)CL=this.DU;if((this.AM>=this.
ED)&&(this.ED>0)){C5=true;Au=0;}else if(Y>=CL)Au=1-((Y-CL)*this.J7);else if(Au>=
0)Au=0;if(Au!==this.C6){if(Au<0)Au=0;if(Au>1)Au=1;}if(Au!==this.C6){this.C6=Au;this.
LM(Au);}return C5;},Tk:function(){var Y=(this.A9-this.timer.Ap)|0;var CL=0;var Du=
this.DT;var Bj=this.DU+this.DT;var C5=false;var Au=this.C6;if((this.AM>1)&&(Y<0)
){var By=(((-Y+Bj)-1)/Bj)|0;if((this.AM-By)<=0)By=this.AM-1;this.AM=this.AM-By;Y=
Y+(By*Bj);this.A9=this.A9+(By*Bj);}if(((this.AM===1)&&(Y<0))&&(this.ED>0)){this.
AM=0;Y=Y+Du;this.A9=this.A9+Du;}if(((this.AM===1)&&(Y<0))&&!this.ED){var By=(((-
Y+Bj)-1)/Bj)|0;Y=Y+(By*Bj);this.A9=this.A9+(By*Bj);}if(this.AM>0)CL=this.DU;if(Y<
0){C5=true;Au=1;}else if(Y>=CL)Au=1-((Y-CL)*this.J7);else if(Au>=0)Au=1;if(Au!==
this.C6){if(Au<0)Au=0;if(Au>1)Au=1;}if(Au!==this.C6){this.C6=Au;this.LM(Au);}return C5;
},Tj:function(){var Y=(this.A9-this.timer.Ap)|0;var CL=0;var Du=this.DT;var Bj=this.
DU+this.DT;var C5=false;var Au=this.C6;if((this.AM>1)&&(Y<0)){var By=(((-Y+Bj)-1
)/Bj)|0;if((this.AM-By)<=0)By=this.AM-1;this.AM=this.AM-By;Y=Y+(By*Bj);this.A9=this.
A9+(By*Bj);}if(((this.AM===1)&&(Y<0))&&(this.ED>0)){this.AM=0;Y=Y+Du;this.A9=this.
A9+Du;}if(((this.AM===1)&&(Y<0))&&!this.ED){var By=(((-Y+Bj)-1)/Bj)|0;Y=Y+(By*Bj
);this.A9=this.A9+(By*Bj);}if(this.AM>0)CL=this.DU;if(Y<0){C5=true;Au=0;}else if(
Y>=CL)Au=(Y-CL)*this.J7;else if(Au>=0)Au=0;if(Au!==this.C6){if(Au<0)Au=0;if(Au>1
)Au=1;}if(Au!==this.C6){this.C6=Au;this.LM(Au);}return C5;},Ti:function(){var Y=(
this.timer.Ap-this.A9)|0;if(Y<0)Y=-Y;var CL=0;var Du=this.DT;var Bj=this.DU+this.
DT;var C5=false;var Au=this.C6;if(!this.AM&&(Y>=Du)){this.AM=1;Y=Y-Du;this.A9=this.
A9+Du;}if((this.AM>0)&&(Y>=Bj)){var By=(Y/Bj)|0;this.AM=this.AM+By;Y=Y-(By*Bj);this.
A9=this.A9+(By*Bj);}if((this.AM>2)&&!this.ED)this.AM=1;if(this.AM>0)CL=this.DU;if((
this.AM>=this.ED)&&(this.ED>0)){C5=true;Au=1;}else if(Y>=CL)Au=(Y-CL)*this.J7;else
if(Au>=0)Au=1;if(Au!==this.C6){if(Au<0)Au=0;if(Au>1)Au=1;}if(Au!==this.C6){this.
C6=Au;this.LM(Au);}return C5;},NY:function(C){if(C<0)C=0;this.ED=C;},KV:function(
C){if(C<15)C=15;this.DT=C;this.J7=1/C;},MG:function(C){if(C<0)C=0;this.DU=C;},Bb:
function(C){if(this.B1===C)return;this.B1=C;if(!C&&!!this.timer){B.z9([this,this.
CP],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.Fx);B.zV([
this,this.CP],this.timer,0);this.Ig=0;B.pe([this,this.CP],this);}},NC:function(Ot
){},_Init:function(aArg){this.__proto__=E.KD;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.timer)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Mz)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:
null,_className:"Effects::Effect"};E.BJ={A_:null,Ob:0,II:0,NC:function(Ot){var Bw;
this.Ob=this.II+(Math.round((255-this.II)*Ot)|0);if(!!this.A_)(Bw=this.A_,Bw[2].
call(Bw[0],this.Ob));},_Init:function(aArg){E.KD._Init.call(this,aArg);this.__proto__=
E.BJ;},_Mark:function(D){var A;E.KD._Mark.call(this,D);if((A=this.A_)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};E.ND={timer:
null,A_:null,AM:0,A9:0,DT:1000,DU:1000,B1:false,II:false,Oc:true,CP:function(Ae){
var Bw;if(!this.timer)return;if(this.AM<0){this.A9=this.timer.Ap;this.AM=0;}var Y=(
this.timer.Ap-this.A9)|0;var Du=this.DT;var Bj=this.DU+this.DT;var CL=0;var EV=this.
AM;if(!EV&&(Y>=Du)){EV=1;Y=Y-Du;}if((EV>0)&&(Y>=Bj)){var By=(Y/Bj)|0;Y=Y-(By*Bj);
EV=EV+By;}if(EV>2)EV=1;if(EV!==this.AM){this.A9=this.timer.Ap-(((A=Y)<0)?A+0x100000000:
A);this.AM=EV;}if(EV>0)CL=this.DU;if(!!this.A_){if(Y>=CL)(Bw=this.A_,Bw[2].call(
Bw[0],this.II));if((Y<CL)&&(EV>0))(Bw=this.A_,Bw[2].call(Bw[0],this.Oc));}},KV:function(
C){if(C<100)C=100;this.DT=C;},MG:function(C){if(C<0)C=0;this.DU=C;},Bb:function(
C){if(this.B1===C)return;this.B1=C;if(!C&&!!this.timer){B.z9([this,this.CP],this.
timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.Fx);B.zV([this,this.
CP],this.timer,0);this.AM=-1;}},_Init:function(aArg){this.__proto__=E.ND;B.h7++;
},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.A_)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};E.L6={Trigger:
function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.
Core.Timer._Init.call(this,aArg);this.__proto__=E.L6;},_className:"Effects::EffectTimerClass"
};E.Fx={_Init:function(){E.L6._Init.call(this,0);this.HA(15);this.Bb(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
E._Init=function(){E.BJ.__proto__=E.KD;E.L6.__proto__=B.Core.Timer;};E._ReInit=function(
){var A;if((A=E.Fx._this))A._ReInit(),E.Fx._ReInit.call(A);};E.DC=function(D){var
A;if((A=E.Fx._this)&&(A._cycle!=D))A._Done(E.Fx._this=null);};return E;})();

/* Embedded Wizard */