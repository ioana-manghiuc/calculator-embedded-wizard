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
);if(EmWiApp.acg)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
acg=(function(){var B=EmWiApp;var D={};
var AI=[0,0];var AG=[0,0,0,0];var CF="\uFEFF";
D.EB={IZ:0,IY:0,H9:0xFFFFFFFF,H_:0xFFFFFFFF,Ia:0xFFFFFFFF,H$:0xFFFFFFFF,CR:0,BF:0xFFFFFFFF
,CK:function(AE,aClip,aOffset,Ay,aBlend){var A;var Ai=this.H$;var Ao=this.Ia;var
Ak=this.H9;var An=this.H_;var Ax=this.BF;var DP=this.CR+this.IY;var G9=this.CR+this.
IZ;var G7=this.CR;var G6=this.CR;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;if((((
Ai===Ao)&&(Ak===An))&&(Ai===Ak))&&(Ai===0xFFFFFFFF))Ai=Ao=Ak=An=Ax;else if(Ax!==
0xFFFFFFFF){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*(((Ax>>24)&0xFF)+1))>>8)&0xFF
)<<24);Ai=(Ai&0xFFFFFF00)|((((Ai&0xFF)*((Ax&0xFF)+1))>>8)&0xFF);Ai=(Ai&0xFFFF00FF
)|((((((Ai>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8)&0xFF)<<8);Ai=(Ai&0xFF00FFFF)|((((((
Ai>>16)&0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF)<<16);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24
)&0xFF)*(((Ax>>24)&0xFF)+1))>>8)&0xFF)<<24);Ao=(Ao&0xFFFFFF00)|((((Ao&0xFF)*((Ax&
0xFF)+1))>>8)&0xFF);Ao=(Ao&0xFFFF00FF)|((((((Ao>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8
)&0xFF)<<8);Ao=(Ao&0xFF00FFFF)|((((((Ao>>16)&0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF
)<<16);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*(((Ax>>24)&0xFF)+1))>>8)&0xFF)<<24
);Ak=(Ak&0xFFFFFF00)|((((Ak&0xFF)*((Ax&0xFF)+1))>>8)&0xFF);Ak=(Ak&0xFFFF00FF)|((((((
Ak>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8)&0xFF)<<8);Ak=(Ak&0xFF00FFFF)|((((((Ak>>16)&
0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF)<<16);An=(An&0x00FFFFFF)|((((((An>>24)&0xFF)
*(((Ax>>24)&0xFF)+1))>>8)&0xFF)<<24);An=(An&0xFFFFFF00)|((((An&0xFF)*((Ax&0xFF)+
1))>>8)&0xFF);An=(An&0xFFFF00FF)|((((((An>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8)&0xFF
)<<8);An=(An&0xFF00FFFF)|((((((An>>16)&0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Ay<256){Ai=(Ai&0x00FFFFFF)|((((Ay*((Ai>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF
)|((((Ay*((Ao>>24)&0xFF))>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((Ay*((Ak>>24)&0xFF
))>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((Ay*((An>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!DP||!!G9)||!!G7)||!!G6)AE.K9(aClip,B.abh(this.M,aOffset),DP,G9,G7,G6,Ai,Ao,An,
Ak,aBlend);else AE.Io(aClip,B.abh(this.M,aOffset),Ai,Ao,An,Ak,aBlend);},LF:function(
C){var A;if(C<0)C=0;if(C===this.IZ)return;this.IZ=C;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.M);},LE:function(C){var A;if(C<0)C=0;if(C===this.IY)return;this.
IY=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Li:function(C){var A;
if(C===this.H9)return;this.H9=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Lj:function(C){var A;if(C===this.H_)return;this.H_=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.M);},Ll:function(C){var A;if(C===this.Ia)return;this.
Ia=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lk:function(C){var A;
if(C===this.H$)return;this.H$=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},DE:function(C){var A;if(C<0)C=0;if(C===this.CR)return;this.CR=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},Be:function(C){var A;if(C===this.BF)return;
this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg
){B.Core.AW._Init.call(this,aArg);this.__proto__=D.EB;},_className:"Views::Rectangle"
};D.AT={CR:0,Width:1,BF:0xFFFFFFFF,CK:function(AE,aClip,aOffset,Ay,aBlend){var A;
var Ai;var Ao;var Ak;var An;var Ax=this.BF;var DP=this.CR;var G9=this.CR;var G7=
this.CR;var G6=this.CR;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;Ai=Ao=Ak=An=Ax;
if(Ay<256){Ai=(Ai&0x00FFFFFF)|((((Ay*((Ai>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF
)|((((Ay*((Ao>>24)&0xFF))>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((Ay*((Ak>>24)&0xFF
))>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((Ay*((An>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!DP||!!G9)||!!G7)||!!G6)AE.K6(aClip,B.abh(this.M,aOffset),this.Width,DP,G9,G7,G6
,Ai,Ao,An,Ak,aBlend);else AE.K4(aClip,B.abh(this.M,aOffset),this.Width,Ai,Ao,An,
Ak,aBlend);},DE:function(C){var A;if(C<0)C=0;if(C===this.CR)return;this.CR=C;if(
!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},GC:function(C){var A;if(C<0)C=
0;if(C===this.Width)return;this.Width=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.
Ac(this.M);},Be:function(C){var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg){B.Core.AW._Init.call(
this,aArg);this.__proto__=D.AT;},_className:"Views::Border"};D.Ip={timer:null,Ae:
null,BB:-1,BF:0xFFFFFFFF,DY:0,Az:0,CI:false,CK:function(AE,aClip,aOffset,Ay,aBlend
){var A;var BJ=this.DY;if(this.BB>=0)BJ=this.BB;if(!this.Ae||(BJ>=this.Ae.NoOfFrames
))return;this.Ae.Update();var Ai;var Ao;var An;var Ak;var Ax=this.BF;var B8=(((Ay+
1)*255)>>8)+1;var I=B.abh(this.M,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);Ai=
Ao=Ak=An=Ax;if(B8<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*B8)>>8)&0xFF)<<24);
Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B8)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((
An>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*B8)>>8)&
0xFF)<<24);}AE.K3(aClip,this.Ae,BJ,I,0x1F,Ai,Ao,An,Ak,aBlend);},GZ:function(AV){
var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Cp:function(AV){var A;
var BJ=this.BB;var C0=0;if(!!this.Ae)C0=this.Ae.NoOfFrames*this.Ae.FrameDelay;if((
!!this.timer&&(this.BB<0))&&(C0>0))this.Az=this.timer.AD-(this.DY*this.Ae.FrameDelay
);if(!!this.timer&&(C0>0)){var R=(this.timer.AD-this.Az)|0;BJ=(R/this.Ae.FrameDelay
)|0;if(R>=C0){BJ=BJ%this.Ae.NoOfFrames;this.Az=this.timer.AD-(R%C0);}}if(((BJ!==
this.BB)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BB=BJ;if(!C0&&!
!this.timer){B.z9([this,this.Cp],this.timer,0);this.timer=null;}},Be:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fe:function(C){var A;if(this.CI===C)return;this.CI=C;this.BB=-1;if(!C&&
!!this.timer){B.z9([this,this.Cp],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Es);B.zV([this,this.Cp],this.timer,0);B.pe([this,this.Cp]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Hv:function(C){var
A;if(C<0)C=0;if((C===this.DY)&&(this.BB===-1))return;this.DY=C;if(!this.timer)this.
BB=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Bd:function(C){var A;
if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FO)B.z9([this,this.GZ],this.Ae,0);this.
Ae=C;this.BB=-1;if(!!C&&C.FO)B.zV([this,this.GZ],C,0);if(this.CI){this.Fe(false);
this.Fe(true);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(
aArg){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Ip;},_Mark:function(E){var
A;B.Core.AW._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"
};D.Bk={timer:null,Ae:null,Az:0,BB:0,BF:0xFFFFFFFF,DS:0x12,DY:0,CI:false,CK:function(
AE,aClip,aOffset,Ay,aBlend){var A;var BJ=this.DY;if(this.BB>=0)BJ=this.BB;if(!this.
Ae||(BJ>=this.Ae.NoOfFrames))return;this.Ae.Update();var Y=this.Iq();var BY=this.
Ae.FrameSize;if((Y[0]>=Y[2])||(Y[1]>=Y[3]))return;var Ai;var Ao;var An;var Ak;var
Ax=this.BF;var B8=(((Ay+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);Ai=Ao=
Ak=An=Ax;if(B8<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ao=(
Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B8)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((An>>
24)&0xFF)*B8)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*B8)>>8)&0xFF
)<<24);}if(B.aaX([Y[2]-Y[0],Y[3]-Y[1]],BY))AE.K0(aClip,this.Ae,BJ,B.abh(this.M,aOffset
),B.abe(this.M.slice(0,2),Y.slice(0,2)),Ai,Ao,An,Ak,aBlend);else AE.LW(aClip,this.
Ae,BJ,B.abh(Y,aOffset),[].concat(AI,BY),Ai,Ao,An,Ak,aBlend,true);},GZ:function(AV
){var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Cp:function(AV){var
A;var BJ=this.BB;var C0=0;if(!!this.Ae)C0=this.Ae.NoOfFrames*this.Ae.FrameDelay;
if((!!this.timer&&(this.BB<0))&&(C0>0))this.Az=this.timer.AD-(this.DY*this.Ae.FrameDelay
);if(!!this.timer&&(C0>0)){var R=(this.timer.AD-this.Az)|0;BJ=(R/this.Ae.FrameDelay
)|0;if(R>=C0){BJ=BJ%this.Ae.NoOfFrames;this.Az=this.timer.AD-(R%C0);}}if(((BJ!==
this.BB)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BB=BJ;if(!C0&&!
!this.timer){B.z9([this,this.Cp],this.timer,0);this.timer=null;}},Be:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fe:function(C){var A;if(this.CI===C)return;this.CI=C;this.BB=-1;if(!C&&
!!this.timer){B.z9([this,this.Cp],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Es);B.zV([this,this.Cp],this.timer,0);B.pe([this,this.Cp]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Fd:function(C){var
A;if(C===this.DS)return;this.DS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Hv:function(C){var A;if(C<0)C=0;if((C===this.DY)&&(this.BB===-1))return;this.
DY=C;if(!this.timer)this.BB=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Bd:function(C){var A;if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FO)B.z9([this
,this.GZ],this.Ae,0);this.Ae=C;this.BB=-1;if(!!C&&C.FO)B.zV([this,this.GZ],C,0);
if(this.CI){this.Fe(false);this.Fe(true);}if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.M);},Lh:function(){var A;return((this.F&0x1)===0x1);},Ff:function(C){if(
C)this.AQ(0x1,0x0);else this.AQ(0x0,0x1);},Iq:function(){var A;if(!this.Ae)return AG;
var Af=this.DS;var BY=this.Ae.FrameSize;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];if(!BY[0]||!BY[1])return AG;var Aj=[0,0,width,height];var V=Aj;if(((
Af&0x40)===0x40)){var JH=((((Aj[2]-Aj[0])<<16)+((BY[0]/2)|0))/BY[0])|0;var G_=((((
Aj[3]-Aj[1])<<16)+((BY[1]/2)|0))/BY[1])|0;var Ep=JH;if(G_>Ep)Ep=G_;V=B.abL(V,((BY[
0]*Ep)+32768)>>16);V=B.abI(V,((BY[1]*Ep)+32768)>>16);}else if(((Af&0x80)===0x80)
){var JH=((((Aj[2]-Aj[0])<<16)+((BY[0]/2)|0))/BY[0])|0;var G_=((((Aj[3]-Aj[1])<<
16)+((BY[1]/2)|0))/BY[1])|0;var Ep=JH;if(G_<Ep)Ep=G_;V=B.abL(V,((BY[0]*Ep)+32768
)>>16);V=B.abI(V,((BY[1]*Ep)+32768)>>16);}else if(!((Af&0x100)===0x100))V=B.abK(
V,BY);if((V[2]-V[0])!==(Aj[2]-Aj[0])){if(((Af&0x4)===0x4))V=B.abM(V,Aj[2]-(V[2]-
V[0]));else if(((Af&0x2)===0x2))V=B.abM(V,(Aj[0]+(((Aj[2]-Aj[0])/2)|0))-(((V[2]-
V[0])/2)|0));}if((V[3]-V[1])!==(Aj[3]-Aj[1])){if(((Af&0x20)===0x20))V=B.abO(V,Aj[
3]-(V[3]-V[1]));else if(((Af&0x10)===0x10))V=B.abO(V,(Aj[1]+(((Aj[3]-Aj[1])/2)|0
))-(((V[3]-V[1])/2)|0));}V=B.abh(V,AA.slice(0,2));return V;},_Init:function(aArg
){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Bk;},_Mark:function(E){var A;
B.Core.AW._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E
);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};
D.Text={A_:null,AN:B.jV,String:B.jV,Cx:null,E9:B.wf,DS:0x12,BF:0xFFFFFFFF,FZ:false
,FH:false,Ig:false,B9:false,Di:function(){if(!!this.Cx){this.Jq(this.Cx);this.Cx=
null;}},CK:function(AE,aClip,aOffset,Ay,aBlend){var A;if((this.AN===B.jV)||!this.
A_)return;var Af=this.DS;var font=this.A_;var Aj=B.abh(this.M,aOffset);var Ai;var
Ao;var An;var Ak;var Nm=this.BF;var B8=(((Ay+1)*255)>>8)+1;var Dx=this.AN.charCodeAt(
0)||0;var Y=B.abh(this.Iq(),aOffset);var KA=[Aj[0]-Y[0],(Aj[1]-Y[1])-font.Ascent
];if(Dx<1)return;Ai=Ao=Ak=An=Nm;if(B8<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF
)*B8)>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B8)>>8)&0xFF)<<24);An=(
An&0x00FFFFFF)|((((((An>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>
24)&0xFF)*B8)>>8)&0xFF)<<24);}if(((Af&0x80)===0x80)){if(this.Ix())Af=(Af&~0x80)|
0x4;else Af=(Af&~0x80)|0x1;}if((Dx===1)&&!((Af&0x40)===0x40)){AE.JN(aClip,font,this.
AN,2,(this.AN.charCodeAt(1)||0)-1,Aj,KA,0,0,Ai,Ao,An,Ak,true);return;}var leading=
font.Leading;var JG=(font.Ascent+font.Descent)+leading;var Nk=aClip[1]-Y[1];var Nl=
aClip[3]-Y[1];var Jg=Y[2]-Y[0];var FE=0;var G=1;var Ax=this.AN.charCodeAt(1)||0;
while(((FE+JG)<Nk)&&(Ax>0)){G=G+Ax;FE=FE+JG;Ax=this.AN.charCodeAt(G)||0;}while((
FE<Nl)&&(Ax>0)){var Fu=B.abe(KA,[0,FE]);var KL=0;var HS=false;if(((((Af&0x40)===
0x40)&&((this.AN.charCodeAt((G+Ax)-1)||0)!==0x0A))&&((this.AN.charCodeAt(G+1)||0
)!==0x0A))&&((this.AN.charCodeAt(G+Ax)||0)!==0x00))HS=true;if(HS&&!!(Af&0x6)){var
KK=G+Ax;var Kh=this.AN.indexOf(String.fromCharCode(0x20),G+1);var Ki=this.AN.indexOf(
String.fromCharCode(0xA0),G+1);if(((Kh<0)||(Kh>=KK))&&((Ki<0)||(Ki>=KK)))HS=false;
}if(HS)KL=Jg;else if(((Af&0x4)===0x4))Fu=[(Fu[0]-Jg)+font.Gp(this.AN,G+1,Ax-1),Fu[
1]];else if(((Af&0x2)===0x2))Fu=[(Fu[0]-((Jg/2)|0))+((font.Gp(this.AN,G+1,Ax-1)/
2)|0),Fu[1]];AE.JN(aClip,font,this.AN,G+1,Ax-1,Aj,Fu,KL,0,Ai,Ao,An,Ak,true);G=G+
Ax;FE=FE+JG;Ax=this.AN.charCodeAt(G)||0;}},O:function(C){var A;if(B.aaY(C,this.M
))return;var KJ;KJ=((A=this.M)[2]-A[0])!==(C[2]-C[0]);if(((KJ&&this.FZ)&&this.B9
)&&!((this.F&0x2000)===0x2000)){this.AN=B.jV;this.B9=false;B.pe([this,this.E4],this
);}if(((this.FH&&this.B9)&&!B.aaX([(A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-
C[1]]))&&!((this.F&0x2000)===0x2000)){this.AN=B.jV;this.B9=false;B.pe([this,this.
E4],this);}B.Core.AW.O.call(this,C);B.pe([this,this.JE],this);},Jq:function(aBidi
){if(!aBidi)return;B.rB(aBidi);},Nn:function(aSize){var bidi=null;bidi=B.v3(aSize
);return bidi;},JE:function(AV){},E4:function(AV){B.pe([this,this.HX],this);},HX:
function(AV){var A;if(this.B9)return;var width=(A=this.M)[2]-A[0];var height=(A=
this.M)[3]-A[1];var DO=-1;var font=this.A_;if((!!font&&!!!font.Ascent)&&!!!font.
Descent)font=null;if(this.FZ){DO=width;if(DO<0)DO=1;}if(!!this.Cx){this.Jq(this.
Cx);this.Cx=null;}this.B9=true;if((this.String!==B.jV)&&!!font){var length=this.
String.length;if(this.Ig)this.Cx=this.Nn(length);this.AN=font.LQ(this.String,0,DO
,length,this.Cx);if(!!this.Cx&&!this.Lb()){this.Jq(this.Cx);this.Cx=null;}}else this.
AN=B.jV;this.E9=AI;if((this.FH&&(this.AN!==B.jV))&&!!font){var Af=this.DS;var leading=
font.Leading;var Al=this.AN;var DP=this.Ix();if(((Af&0x80)===0x80)){if(DP)Af=(Af&
~0x80)|0x4;else Af=(Af&~0x80)|0x1;}var HZ=(font.Ascent+font.Descent)+leading;var
Dx=Al.charCodeAt(0)||0;var E1=((height+leading)/HZ)|0;var Jk=false;var HL=false;
if(E1<=0)E1=1;if(Dx>E1){var De=0;var G8=0;var H0=Dx-1;var Bn;var BK=Al.length;var
tmp=B.jV;if(!!(Af&0x110)&&!!(Af&0x28))Af&=~0x110;if(!!(Af&0x110))Af&=~0x28;if(((
Af&0x20)===0x20))G8=Dx-E1;else if(((Af&0x10)===0x10)||((Af&0x100)===0x100)){G8=((
Dx-E1)/2)|0;H0=(G8+E1)-1;}else H0=E1-1;Jk=G8>0;HL=H0<(Dx-1);for(Bn=1;De<G8;De=De+
1)Bn=Bn+(Al.charCodeAt(Bn)||0);if(HL)for(BK=Bn;De<H0;De=De+1)BK=BK+(Al.charCodeAt(
BK)||0);if(Jk){var BW=Al.charCodeAt(Bn)||0;tmp=(CF+B.abW(Al,Bn,BW))+CF;tmp=B.abQ(
tmp,0,(BW+2)&0xFFFF);Bn=Bn+BW;if((tmp.charCodeAt(BW)||0)===0x0A){tmp=B.abQ(tmp,BW
,0xFEFF);tmp=B.abQ(tmp,BW+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp
,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(Al
,Bn,BK-Bn);if(HL&&(BK>=Bn)){var BW=Al.charCodeAt(BK)||0;var Cb=(CF+B.abW(Al,BK,BW
))+CF;Cb=B.abQ(Cb,0,(BW+2)&0xFFFF);Cb=B.abQ(Cb,1,0xFEFF);if((Cb.charCodeAt(BW)||
0)===0x0A){Cb=B.abQ(Cb,BW,0xFEFF);Cb=B.abQ(Cb,BW+1,0x0A);}if((Cb.charCodeAt(2)||
0)===0x0A){Cb=B.abQ(Cb,2,0xFEFF);Cb=B.abQ(Cb,1,0x0A);}else Cb=B.abQ(Cb,1,0xFEFF);
tmp=tmp+Cb;}Al=String.fromCharCode(E1&0xFFFF)+tmp;}var De=0;var HR=1;var Jy=width;
Dx=Al.charCodeAt(0)||0;for(;De<Dx;De=De+1){var E7=Jk&&!De;var E8=HL&&(De===(Dx-1
));var CV=false;var CW=false;var Gh=DP;if((DP&&E7)&&!E8){E7=false;E8=true;}else if((
DP&&E8)&&!E7){E8=false;E7=true;}var G$=HR+1;var BW=Al.charCodeAt(HR)||0;var Bn=G$;
var BK=(G$+BW)-2;var Jv=-1;var Jw=-1;if(!this.FZ&&(font.Gp(Al,G$,BW-1)>Jy)){var Fo=
Af;if(((Fo&0x2)===0x2)&&!!(Fo&0x5))Fo&=~0x2;if(((Fo&0x2)===0x2))Fo&=~0x5;if(((Fo&
0x4)===0x4))CV=true;else if(((Fo&0x2)===0x2)){CV=true;CW=true;}else CW=true;}if((
Al.charCodeAt(Bn)||0)===0x0A)Bn=Bn+1;if((Al.charCodeAt(BK)||0)===0x0A)BK=BK-1;while(
CV&&((Al.charCodeAt(Bn)||0)===0xFEFF))Bn=Bn+1;while(CW&&((Al.charCodeAt(BK)||0)===
0xFEFF))BK=BK-1;CV=CV&&!E8;CW=CW&&!E7;while((((CV||CW)||E7)||E8)&&(Bn<BK)){if((CV&&(
Gh||!CW))||E7){if(Jv>0)Al=B.abQ(Al,Jv,0xFEFF);Al=B.abQ(Al,Bn,0x2026);Jv=Bn;Bn=Bn+
1;Gh=!Gh;E7=false;if(font.Gp(Al,G$,BW-1)<=Jy){CV=false;CW=false;}else CV=CV||!CW;
}if((CW&&(!Gh||!CV))||E8){if(Jw>0)Al=B.abQ(Al,Jw,0xFEFF);Al=B.abQ(Al,BK,0x2026);
Jw=BK;BK=BK-1;Gh=!Gh;E8=false;if(font.Gp(Al,G$,BW-1)<=Jy){CV=false;CW=false;}else
CW=CW||!CV;}}HR=HR+BW;}this.E9=[font.JQ(Al),((Al.charCodeAt(0)||0)*HZ)-leading];
this.AN=Al;}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);B.pe([this,this.
JE],this);},Lp:function(C){if(C===this.Ig)return;this.Ig=C;this.AN=B.jV;this.B9=
false;B.pe([this,this.E4],this);},Lo:function(C){if(C===this.FH)return;this.FH=C;
if(this.FZ||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.AN=B.jV;this.B9=
false;B.pe([this,this.E4],this);},IV:function(C){if(C===this.FZ)return;this.FZ=C;
if(this.B9){this.AN=B.jV;this.B9=false;B.pe([this,this.E4],this);}if(C||this.FH)
this.F=this.F&~0x100;else this.F=this.F|0x100;},Fd:function(C){var A;if(C===this.
DS)return;this.DS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);if(this.
FH){this.AN=B.jV;this.B9=false;B.pe([this,this.E4],this);}if(this.B9)B.pe([this,
this.JE],this);},CP:function(C){if(C===this.String)return;this.String=C;this.AN=
B.jV;this.B9=false;B.pe([this,this.E4],this);},Gz:function(C){if(C===this.A_)return;
this.A_=C;this.AN=B.jV;this.B9=false;B.pe([this,this.E4],this);},Be:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Ix:function(){if(!this.B9)this.HX(this);if(!this.Cx)return false;var result=
false;var bidi=this.Cx;result=B.v2(bidi);return result;},Lb:function(){if(!this.
B9)this.HX(this);if(!this.Cx)return false;var result=false;var bidi=this.Cx;result=
B.zZ(bidi);return result;},Iq:function(){var A;if((this.String===B.jV)||!this.A_
)return AG;if(!this.B9)this.HX(this);if(this.AN===B.jV)return AG;var leading=this.
A_.Leading;var HZ=(this.A_.Ascent+this.A_.Descent)+this.A_.Leading;if(B.aaX(this.
E9,AI))this.E9=[this.A_.JQ(this.AN),this.E9[1]];this.E9=[this.E9[0],((this.AN.charCodeAt(
0)||0)*HZ)-leading];var Af=this.DS;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];var Aj=[0,0,width,height];var V=[].concat(Aj.slice(0,2),B.abf(Aj.slice(
0,2),this.E9));if(((Af&0x80)===0x80)){if(this.Ix())Af=(Af&~0x80)|0x4;else Af=(Af&
~0x80)|0x1;}if(((Af&0x40)===0x40)){var DO;DO=width;if(DO<0)DO=0;if(DO>(V[2]-V[0]
))V=B.abL(V,DO);}if((!!(Af&0x110)&&!!(Af&0x28))&&((V[3]-V[1])>(Aj[3]-Aj[1])))Af&=
~0x110;if(!!(Af&0x110))Af&=~0x28;if((((Af&0x2)===0x2)&&!!(Af&0x5))&&((V[2]-V[0])>(
Aj[2]-Aj[0])))Af&=~0x2;if(((Af&0x2)===0x2))Af&=~0x5;if((V[2]-V[0])!==(Aj[2]-Aj[0
])){if(((Af&0x4)===0x4))V=B.abM(V,Aj[2]-(V[2]-V[0]));else if(((Af&0x2)===0x2))V=
B.abM(V,(Aj[0]+(((Aj[2]-Aj[0])/2)|0))-(((V[2]-V[0])/2)|0));}if((V[3]-V[1])!==(Aj[
3]-Aj[1])){if(((Af&0x20)===0x20))V=B.abO(V,Aj[3]-(V[3]-V[1]));else if(((Af&0x100
)===0x100))V=B.abO(V,((Aj[1]+(((Aj[3]-Aj[1])/2)|0))-(((V[3]-V[1])/2)|0))+(((this.
A_.Descent-this.A_.Ascent)/2)|0));else if(((Af&0x10)===0x10))V=B.abO(V,(Aj[1]+(((
Aj[3]-Aj[1])/2)|0))-(((V[3]-V[1])/2)|0));}V=B.abh(V,AA.slice(0,2));return V;},_Init:
function(aArg){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(
){this.Di();this.__proto__=B.Core.AW;B.Core.AW._Done.call(this);},_Mark:function(
E){var A;B.Core.AW._Mark.call(this,E);if((A=this.A_)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::Text"};D.Oc={KT:0x1,KS:0x2,KU:0x4,KX:0x8,KW:0x10,KV:0x20
,OD:0x40,OE:0x80,OG:0x100};D.OH={KT:0x1,KS:0x2,KU:0x4,KX:0x8,KW:0x10,KV:0x20,NT:
0x40,NS:0x80,NY:0x100};D.On={Om:0,OB:1,Oz:2,OA:3};
D._Init=function(){D.EB.__proto__=B.Core.AW;D.AT.__proto__=B.Core.AW;D.Ip.__proto__=
B.Core.AW;D.Bk.__proto__=B.Core.AW;D.Text.__proto__=B.Core.AW;};D._ReInit=function(
){};D.Cv=function(E){};return D;})();

/* Embedded Wizard */