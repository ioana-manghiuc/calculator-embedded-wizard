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

D.Hj={timer:null,Jk:0,FB:0,GR:0.001,B6:0,As:0,Az:0,Dj:0,CJ:1000,CN:0,BR:false,Co:
function(AV){if(!this.timer)return;if(!this.FB){this.FB=1;this.Jk=this.FB;this.Az=
this.timer.AD;this.As=0;this.B6=-1;}var B3;if((this.FB>0)&&(this.Jk>0))B3=this.NE(
);else if((this.FB<0)&&(this.Jk<0))B3=this.NH();else if(this.FB>0)B3=this.NF();else
B3=this.NG();if(B3)this.BN(false);},H1:function(Ne){this.JI(Ne);},NH:function(){
var R=(this.timer.AD-this.Az)|0;if(R<0)R=-R;var BO=0;var Cn=this.CJ;var AP=this.
CN+this.CJ;var B3=false;var Ah=this.B6;if(!this.As&&(R>=Cn)){this.As=1;R=R-Cn;this.
Az=this.Az+Cn;}if((this.As>0)&&(R>=AP)){var AX=(R/AP)|0;this.As=this.As+AX;R=R-(
AX*AP);this.Az=this.Az+(AX*AP);}if((this.As>2)&&!this.Dj)this.As=1;if(this.As>0)
BO=this.CN;if((this.As>=this.Dj)&&(this.Dj>0)){B3=true;Ah=0;}else if(R>=BO)Ah=1-((
R-BO)*this.GR);else if(Ah>=0)Ah=0;if(Ah!==this.B6){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(
Ah!==this.B6){this.B6=Ah;this.H1(Ah);}return B3;},NG:function(){var R=(this.Az-this.
timer.AD)|0;var BO=0;var Cn=this.CJ;var AP=this.CN+this.CJ;var B3=false;var Ah=this.
B6;if((this.As>1)&&(R<0)){var AX=(((-R+AP)-1)/AP)|0;if((this.As-AX)<=0)AX=this.As-
1;this.As=this.As-AX;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(((this.As===1)&&(R<
0))&&(this.Dj>0)){this.As=0;R=R+Cn;this.Az=this.Az+Cn;}if(((this.As===1)&&(R<0))&&
!this.Dj){var AX=(((-R+AP)-1)/AP)|0;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(this.
As>0)BO=this.CN;if(R<0){B3=true;Ah=1;}else if(R>=BO)Ah=1-((R-BO)*this.GR);else if(
Ah>=0)Ah=1;if(Ah!==this.B6){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(Ah!==this.B6){this.B6=
Ah;this.H1(Ah);}return B3;},NF:function(){var R=(this.Az-this.timer.AD)|0;var BO=
0;var Cn=this.CJ;var AP=this.CN+this.CJ;var B3=false;var Ah=this.B6;if((this.As>
1)&&(R<0)){var AX=(((-R+AP)-1)/AP)|0;if((this.As-AX)<=0)AX=this.As-1;this.As=this.
As-AX;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(((this.As===1)&&(R<0))&&(this.Dj>0
)){this.As=0;R=R+Cn;this.Az=this.Az+Cn;}if(((this.As===1)&&(R<0))&&!this.Dj){var
AX=(((-R+AP)-1)/AP)|0;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(this.As>0)BO=this.
CN;if(R<0){B3=true;Ah=0;}else if(R>=BO)Ah=(R-BO)*this.GR;else if(Ah>=0)Ah=0;if(Ah
!==this.B6){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(Ah!==this.B6){this.B6=Ah;this.H1(Ah);}
return B3;},NE:function(){var R=(this.timer.AD-this.Az)|0;if(R<0)R=-R;var BO=0;var
Cn=this.CJ;var AP=this.CN+this.CJ;var B3=false;var Ah=this.B6;if(!this.As&&(R>=Cn
)){this.As=1;R=R-Cn;this.Az=this.Az+Cn;}if((this.As>0)&&(R>=AP)){var AX=(R/AP)|0;
this.As=this.As+AX;R=R-(AX*AP);this.Az=this.Az+(AX*AP);}if((this.As>2)&&!this.Dj
)this.As=1;if(this.As>0)BO=this.CN;if((this.As>=this.Dj)&&(this.Dj>0)){B3=true;Ah=
1;}else if(R>=BO)Ah=(R-BO)*this.GR;else if(Ah>=0)Ah=1;if(Ah!==this.B6){if(Ah<0)Ah=
0;if(Ah>1)Ah=1;}if(Ah!==this.B6){this.B6=Ah;this.H1(Ah);}return B3;},LA:function(
C){if(C<0)C=0;this.Dj=C;},IM:function(C){if(C<15)C=15;this.CJ=C;this.GR=1/C;},IN:
function(C){if(C<0)C=0;this.CN=C;},BN:function(C){if(this.BR===C)return;this.BR=
C;if(!C&&!!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}if(C){
this.timer=B._GetAutoObject(D.Er);B.zV([this,this.Co],this.timer,0);this.FB=0;B.
pe([this,this.Co],this);}},JI:function(Ke){},_Init:function(aArg){this.__proto__=
D.Hj;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};D.Cs={DF:null,J9:0,I6:0,JI:function(Ke){var CR;this.J9=this.I6+(
Math.round((255-this.I6)*Ke)|0);if(!!this.DF)(CR=this.DF,CR[2].call(CR[0],this.J9
));},_Init:function(aArg){D.Hj._Init.call(this,aArg);this.__proto__=D.Cs;},_Mark:
function(E){var A;D.Hj._Mark.call(this,E);if((A=this.DF)&&((A=A[0])._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Effects::Int32Effect"};D.Dg={timer:null,DF:null,
As:0,Az:0,CJ:1000,CN:1000,BR:false,Co:function(AV){var CR;if(!this.timer)return;
if(this.As<0){this.Az=this.timer.AD;this.As=0;}var R=(this.timer.AD-this.Az)|0;var
Cn=this.CJ;var AP=this.CN+this.CJ;var BO=0;var Dv=this.As;if(!Dv&&(R>=Cn)){Dv=1;
R=R-Cn;}if((Dv>0)&&(R>=AP)){var AX=(R/AP)|0;R=R-(AX*AP);Dv=Dv+AX;}if(Dv>2)Dv=1;if(
Dv!==this.As){this.Az=this.timer.AD-(((A=R)<0)?A+0x100000000:A);this.As=Dv;}if(Dv>
0)BO=this.CN;if(!!this.DF){if(R>=BO)(CR=this.DF,CR[2].call(CR[0],false));if((R<BO
)&&(Dv>0))(CR=this.DF,CR[2].call(CR[0],true));}},IM:function(C){if(C<100)C=100;this.
CJ=C;},IN:function(C){if(C<0)C=0;this.CN=C;},BN:function(C){if(this.BR===C)return;
this.BR=C;if(!C&&!!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;
}if(C){this.timer=B._GetAutoObject(D.Er);B.zV([this,this.Co],this.timer,0);this.
As=-1;}},_Init:function(aArg){this.__proto__=D.Dg;B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.DF)&&((A=A[0])._cycle!=E))A.
_Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};D.Ie={Trigger:function(){B.Core.
Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer._Init.
call(this,aArg);this.__proto__=D.Ie;},_className:"Effects::EffectTimerClass"};D.
Er={_Init:function(){D.Ie._Init.call(this,0);this.GA(15);this.BN(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.Cs.__proto__=D.Hj;D.Ie.__proto__=B.Core.Timer;};D._ReInit=function(
){var A;if((A=D.Er._this))A._ReInit(),D.Er._ReInit.call(A);};D.Cu=function(E){var
A;if((A=D.Er._this)&&(A._cycle!=E))A._Done(D.Er._this=null);};return D;})();

/* Embedded Wizard */