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

D.Hk={timer:null,Jl:0,FC:0,GS:0.001,B7:0,As:0,Az:0,Dk:0,CJ:1000,CN:0,BR:false,Cp:
function(AV){if(!this.timer)return;if(!this.FC){this.FC=1;this.Jl=this.FC;this.Az=
this.timer.AD;this.As=0;this.B7=-1;}var B4;if((this.FC>0)&&(this.Jl>0))B4=this.NG(
);else if((this.FC<0)&&(this.Jl<0))B4=this.NJ();else if(this.FC>0)B4=this.NH();else
B4=this.NI();if(B4)this.BN(false);},H1:function(Ng){this.JJ(Ng);},NJ:function(){
var R=(this.timer.AD-this.Az)|0;if(R<0)R=-R;var BO=0;var Co=this.CJ;var AP=this.
CN+this.CJ;var B4=false;var Ah=this.B7;if(!this.As&&(R>=Co)){this.As=1;R=R-Co;this.
Az=this.Az+Co;}if((this.As>0)&&(R>=AP)){var AX=(R/AP)|0;this.As=this.As+AX;R=R-(
AX*AP);this.Az=this.Az+(AX*AP);}if((this.As>2)&&!this.Dk)this.As=1;if(this.As>0)
BO=this.CN;if((this.As>=this.Dk)&&(this.Dk>0)){B4=true;Ah=0;}else if(R>=BO)Ah=1-((
R-BO)*this.GS);else if(Ah>=0)Ah=0;if(Ah!==this.B7){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(
Ah!==this.B7){this.B7=Ah;this.H1(Ah);}return B4;},NI:function(){var R=(this.Az-this.
timer.AD)|0;var BO=0;var Co=this.CJ;var AP=this.CN+this.CJ;var B4=false;var Ah=this.
B7;if((this.As>1)&&(R<0)){var AX=(((-R+AP)-1)/AP)|0;if((this.As-AX)<=0)AX=this.As-
1;this.As=this.As-AX;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(((this.As===1)&&(R<
0))&&(this.Dk>0)){this.As=0;R=R+Co;this.Az=this.Az+Co;}if(((this.As===1)&&(R<0))&&
!this.Dk){var AX=(((-R+AP)-1)/AP)|0;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(this.
As>0)BO=this.CN;if(R<0){B4=true;Ah=1;}else if(R>=BO)Ah=1-((R-BO)*this.GS);else if(
Ah>=0)Ah=1;if(Ah!==this.B7){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(Ah!==this.B7){this.B7=
Ah;this.H1(Ah);}return B4;},NH:function(){var R=(this.Az-this.timer.AD)|0;var BO=
0;var Co=this.CJ;var AP=this.CN+this.CJ;var B4=false;var Ah=this.B7;if((this.As>
1)&&(R<0)){var AX=(((-R+AP)-1)/AP)|0;if((this.As-AX)<=0)AX=this.As-1;this.As=this.
As-AX;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(((this.As===1)&&(R<0))&&(this.Dk>0
)){this.As=0;R=R+Co;this.Az=this.Az+Co;}if(((this.As===1)&&(R<0))&&!this.Dk){var
AX=(((-R+AP)-1)/AP)|0;R=R+(AX*AP);this.Az=this.Az+(AX*AP);}if(this.As>0)BO=this.
CN;if(R<0){B4=true;Ah=0;}else if(R>=BO)Ah=(R-BO)*this.GS;else if(Ah>=0)Ah=0;if(Ah
!==this.B7){if(Ah<0)Ah=0;if(Ah>1)Ah=1;}if(Ah!==this.B7){this.B7=Ah;this.H1(Ah);}
return B4;},NG:function(){var R=(this.timer.AD-this.Az)|0;if(R<0)R=-R;var BO=0;var
Co=this.CJ;var AP=this.CN+this.CJ;var B4=false;var Ah=this.B7;if(!this.As&&(R>=Co
)){this.As=1;R=R-Co;this.Az=this.Az+Co;}if((this.As>0)&&(R>=AP)){var AX=(R/AP)|0;
this.As=this.As+AX;R=R-(AX*AP);this.Az=this.Az+(AX*AP);}if((this.As>2)&&!this.Dk
)this.As=1;if(this.As>0)BO=this.CN;if((this.As>=this.Dk)&&(this.Dk>0)){B4=true;Ah=
1;}else if(R>=BO)Ah=(R-BO)*this.GS;else if(Ah>=0)Ah=1;if(Ah!==this.B7){if(Ah<0)Ah=
0;if(Ah>1)Ah=1;}if(Ah!==this.B7){this.B7=Ah;this.H1(Ah);}return B4;},LB:function(
C){if(C<0)C=0;this.Dk=C;},IN:function(C){if(C<15)C=15;this.CJ=C;this.GS=1/C;},IO:
function(C){if(C<0)C=0;this.CN=C;},BN:function(C){if(this.BR===C)return;this.BR=
C;if(!C&&!!this.timer){B.z9([this,this.Cp],this.timer,0);this.timer=null;}if(C){
this.timer=B._GetAutoObject(D.Es);B.zV([this,this.Cp],this.timer,0);this.FC=0;B.
pe([this,this.Cp],this);}},JJ:function(Kf){},_Init:function(aArg){this.__proto__=
D.Hk;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(E){var A;if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};D.Ct={DF:null,J_:0,I7:0,JJ:function(Kf){var CS;this.J_=this.I7+(
Math.round((255-this.I7)*Kf)|0);if(!!this.DF)(CS=this.DF,CS[2].call(CS[0],this.J_
));},_Init:function(aArg){D.Hk._Init.call(this,aArg);this.__proto__=D.Ct;},_Mark:
function(E){var A;D.Hk._Mark.call(this,E);if((A=this.DF)&&((A=A[0])._cycle!=E))A.
_Mark(A._cycle=E);},_className:"Effects::Int32Effect"};D.Dh={timer:null,DF:null,
As:0,Az:0,CJ:1000,CN:1000,BR:false,Cp:function(AV){var CS;if(!this.timer)return;
if(this.As<0){this.Az=this.timer.AD;this.As=0;}var R=(this.timer.AD-this.Az)|0;var
Co=this.CJ;var AP=this.CN+this.CJ;var BO=0;var Dv=this.As;if(!Dv&&(R>=Co)){Dv=1;
R=R-Co;}if((Dv>0)&&(R>=AP)){var AX=(R/AP)|0;R=R-(AX*AP);Dv=Dv+AX;}if(Dv>2)Dv=1;if(
Dv!==this.As){this.Az=this.timer.AD-(((A=R)<0)?A+0x100000000:A);this.As=Dv;}if(Dv>
0)BO=this.CN;if(!!this.DF){if(R>=BO)(CS=this.DF,CS[2].call(CS[0],false));if((R<BO
)&&(Dv>0))(CS=this.DF,CS[2].call(CS[0],true));}},IN:function(C){if(C<100)C=100;this.
CJ=C;},IO:function(C){if(C<0)C=0;this.CN=C;},BN:function(C){if(this.BR===C)return;
this.BR=C;if(!C&&!!this.timer){B.z9([this,this.Cp],this.timer,0);this.timer=null;
}if(C){this.timer=B._GetAutoObject(D.Es);B.zV([this,this.Cp],this.timer,0);this.
As=-1;}},_Init:function(aArg){this.__proto__=D.Dh;B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
timer)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.DF)&&((A=A[0])._cycle!=E))A.
_Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:
0,_observers:null,_className:"Effects::BoolEffect"};D.If={Trigger:function(){B.Core.
Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer._Init.
call(this,aArg);this.__proto__=D.If;},_className:"Effects::EffectTimerClass"};D.
Es={_Init:function(){D.If._Init.call(this,0);this.GB(15);this.BN(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
D._Init=function(){D.Ct.__proto__=D.Hk;D.If.__proto__=B.Core.Timer;};D._ReInit=function(
){var A;if((A=D.Es._this))A._ReInit(),D.Es._ReInit.call(A);};D.Cv=function(E){var
A;if((A=D.Es._this)&&(A._cycle!=E))A._Done(D.Es._this=null);};return D;})();

/* Embedded Wizard */