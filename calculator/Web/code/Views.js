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
D.EA={IY:0,IX:0,H8:0xFFFFFFFF,H9:0xFFFFFFFF,H$:0xFFFFFFFF,H_:0xFFFFFFFF,CQ:0,BF:0xFFFFFFFF
,CK:function(AE,aClip,aOffset,Ay,aBlend){var A;var Ai=this.H_;var Ao=this.H$;var
Ak=this.H8;var An=this.H9;var Ax=this.BF;var DP=this.CQ+this.IX;var G8=this.CQ+this.
IY;var G6=this.CQ;var G5=this.CQ;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;if((((
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
!!DP||!!G8)||!!G6)||!!G5)AE.K8(aClip,B.abh(this.M,aOffset),DP,G8,G6,G5,Ai,Ao,An,
Ak,aBlend);else AE.In(aClip,B.abh(this.M,aOffset),Ai,Ao,An,Ak,aBlend);},LE:function(
C){var A;if(C<0)C=0;if(C===this.IY)return;this.IY=C;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.M);},LD:function(C){var A;if(C<0)C=0;if(C===this.IX)return;this.
IX=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lh:function(C){var A;
if(C===this.H8)return;this.H8=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Li:function(C){var A;if(C===this.H9)return;this.H9=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.M);},Lk:function(C){var A;if(C===this.H$)return;this.
H$=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lj:function(C){var A;
if(C===this.H_)return;this.H_=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},DE:function(C){var A;if(C<0)C=0;if(C===this.CQ)return;this.CQ=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},Bv:function(C){var A;if(C===this.BF)return;
this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg
){B.Core.AW._Init.call(this,aArg);this.__proto__=D.EA;},_className:"Views::Rectangle"
};D.AT={CQ:0,Width:1,BF:0xFFFFFFFF,CK:function(AE,aClip,aOffset,Ay,aBlend){var A;
var Ai;var Ao;var Ak;var An;var Ax=this.BF;var DP=this.CQ;var G8=this.CQ;var G6=
this.CQ;var G5=this.CQ;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;Ai=Ao=Ak=An=Ax;
if(Ay<256){Ai=(Ai&0x00FFFFFF)|((((Ay*((Ai>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF
)|((((Ay*((Ao>>24)&0xFF))>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((Ay*((Ak>>24)&0xFF
))>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((Ay*((An>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!DP||!!G8)||!!G6)||!!G5)AE.K5(aClip,B.abh(this.M,aOffset),this.Width,DP,G8,G6,G5
,Ai,Ao,An,Ak,aBlend);else AE.K3(aClip,B.abh(this.M,aOffset),this.Width,Ai,Ao,An,
Ak,aBlend);},DE:function(C){var A;if(C<0)C=0;if(C===this.CQ)return;this.CQ=C;if(
!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},GB:function(C){var A;if(C<0)C=
0;if(C===this.Width)return;this.Width=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.
Ac(this.M);},Bv:function(C){var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg){B.Core.AW._Init.call(
this,aArg);this.__proto__=D.AT;},_className:"Views::Border"};D.Io={timer:null,Ae:
null,BB:-1,BF:0xFFFFFFFF,DY:0,Az:0,CI:false,CK:function(AE,aClip,aOffset,Ay,aBlend
){var A;var BJ=this.DY;if(this.BB>=0)BJ=this.BB;if(!this.Ae||(BJ>=this.Ae.NoOfFrames
))return;this.Ae.Update();var Ai;var Ao;var An;var Ak;var Ax=this.BF;var B7=(((Ay+
1)*255)>>8)+1;var I=B.abh(this.M,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);Ai=
Ao=Ak=An=Ax;if(B7<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*B7)>>8)&0xFF)<<24);
Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B7)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((
An>>24)&0xFF)*B7)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*B7)>>8)&
0xFF)<<24);}AE.K2(aClip,this.Ae,BJ,I,0x1F,Ai,Ao,An,Ak,aBlend);},GY:function(AV){
var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Co:function(AV){var A;
var BJ=this.BB;var CZ=0;if(!!this.Ae)CZ=this.Ae.NoOfFrames*this.Ae.FrameDelay;if((
!!this.timer&&(this.BB<0))&&(CZ>0))this.Az=this.timer.AD-(this.DY*this.Ae.FrameDelay
);if(!!this.timer&&(CZ>0)){var R=(this.timer.AD-this.Az)|0;BJ=(R/this.Ae.FrameDelay
)|0;if(R>=CZ){BJ=BJ%this.Ae.NoOfFrames;this.Az=this.timer.AD-(R%CZ);}}if(((BJ!==
this.BB)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BB=BJ;if(!CZ&&!
!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}},Bv:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fd:function(C){var A;if(this.CI===C)return;this.CI=C;this.BB=-1;if(!C&&
!!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Er);B.zV([this,this.Co],this.timer,0);B.pe([this,this.Co]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Hv:function(C){var
A;if(C<0)C=0;if((C===this.DY)&&(this.BB===-1))return;this.DY=C;if(!this.timer)this.
BB=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Bd:function(C){var A;
if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FN)B.z9([this,this.GY],this.Ae,0);this.
Ae=C;this.BB=-1;if(!!C&&C.FN)B.zV([this,this.GY],C,0);if(this.CI){this.Fd(false);
this.Fd(true);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(
aArg){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Io;},_Mark:function(E){var
A;B.Core.AW._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"
};D.Bj={timer:null,Ae:null,Az:0,BB:0,BF:0xFFFFFFFF,DS:0x12,DY:0,CI:false,CK:function(
AE,aClip,aOffset,Ay,aBlend){var A;var BJ=this.DY;if(this.BB>=0)BJ=this.BB;if(!this.
Ae||(BJ>=this.Ae.NoOfFrames))return;this.Ae.Update();var Y=this.Ip();var BY=this.
Ae.FrameSize;if((Y[0]>=Y[2])||(Y[1]>=Y[3]))return;var Ai;var Ao;var An;var Ak;var
Ax=this.BF;var B7=(((Ay+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);Ai=Ao=
Ak=An=Ax;if(B7<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*B7)>>8)&0xFF)<<24);Ao=(
Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B7)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((An>>
24)&0xFF)*B7)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*B7)>>8)&0xFF
)<<24);}if(B.aaX([Y[2]-Y[0],Y[3]-Y[1]],BY))AE.KZ(aClip,this.Ae,BJ,B.abh(this.M,aOffset
),B.abe(this.M.slice(0,2),Y.slice(0,2)),Ai,Ao,An,Ak,aBlend);else AE.LV(aClip,this.
Ae,BJ,B.abh(Y,aOffset),[].concat(AI,BY),Ai,Ao,An,Ak,aBlend,true);},GY:function(AV
){var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Co:function(AV){var
A;var BJ=this.BB;var CZ=0;if(!!this.Ae)CZ=this.Ae.NoOfFrames*this.Ae.FrameDelay;
if((!!this.timer&&(this.BB<0))&&(CZ>0))this.Az=this.timer.AD-(this.DY*this.Ae.FrameDelay
);if(!!this.timer&&(CZ>0)){var R=(this.timer.AD-this.Az)|0;BJ=(R/this.Ae.FrameDelay
)|0;if(R>=CZ){BJ=BJ%this.Ae.NoOfFrames;this.Az=this.timer.AD-(R%CZ);}}if(((BJ!==
this.BB)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BB=BJ;if(!CZ&&!
!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}},Bv:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fd:function(C){var A;if(this.CI===C)return;this.CI=C;this.BB=-1;if(!C&&
!!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Er);B.zV([this,this.Co],this.timer,0);B.pe([this,this.Co]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Fc:function(C){var
A;if(C===this.DS)return;this.DS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Hv:function(C){var A;if(C<0)C=0;if((C===this.DY)&&(this.BB===-1))return;this.
DY=C;if(!this.timer)this.BB=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Bd:function(C){var A;if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FN)B.z9([this
,this.GY],this.Ae,0);this.Ae=C;this.BB=-1;if(!!C&&C.FN)B.zV([this,this.GY],C,0);
if(this.CI){this.Fd(false);this.Fd(true);}if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.M);},Lg:function(){var A;return((this.F&0x1)===0x1);},Fe:function(C){if(
C)this.AQ(0x1,0x0);else this.AQ(0x0,0x1);},Ip:function(){var A;if(!this.Ae)return AG;
var Af=this.DS;var BY=this.Ae.FrameSize;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];if(!BY[0]||!BY[1])return AG;var Aj=[0,0,width,height];var V=Aj;if(((
Af&0x40)===0x40)){var JG=((((Aj[2]-Aj[0])<<16)+((BY[0]/2)|0))/BY[0])|0;var G9=((((
Aj[3]-Aj[1])<<16)+((BY[1]/2)|0))/BY[1])|0;var Ep=JG;if(G9>Ep)Ep=G9;V=B.abL(V,((BY[
0]*Ep)+32768)>>16);V=B.abI(V,((BY[1]*Ep)+32768)>>16);}else if(((Af&0x80)===0x80)
){var JG=((((Aj[2]-Aj[0])<<16)+((BY[0]/2)|0))/BY[0])|0;var G9=((((Aj[3]-Aj[1])<<
16)+((BY[1]/2)|0))/BY[1])|0;var Ep=JG;if(G9<Ep)Ep=G9;V=B.abL(V,((BY[0]*Ep)+32768
)>>16);V=B.abI(V,((BY[1]*Ep)+32768)>>16);}else if(!((Af&0x100)===0x100))V=B.abK(
V,BY);if((V[2]-V[0])!==(Aj[2]-Aj[0])){if(((Af&0x4)===0x4))V=B.abM(V,Aj[2]-(V[2]-
V[0]));else if(((Af&0x2)===0x2))V=B.abM(V,(Aj[0]+(((Aj[2]-Aj[0])/2)|0))-(((V[2]-
V[0])/2)|0));}if((V[3]-V[1])!==(Aj[3]-Aj[1])){if(((Af&0x20)===0x20))V=B.abO(V,Aj[
3]-(V[3]-V[1]));else if(((Af&0x10)===0x10))V=B.abO(V,(Aj[1]+(((Aj[3]-Aj[1])/2)|0
))-(((V[3]-V[1])/2)|0));}V=B.abh(V,AA.slice(0,2));return V;},_Init:function(aArg
){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Bj;},_Mark:function(E){var A;
B.Core.AW._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E
);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};
D.Text={Bb:null,AN:B.jV,String:B.jV,Cw:null,E8:B.wf,DS:0x12,BF:0xFFFFFFFF,FY:false
,FG:false,If:false,B8:false,Dh:function(){if(!!this.Cw){this.Jp(this.Cw);this.Cw=
null;}},CK:function(AE,aClip,aOffset,Ay,aBlend){var A;if((this.AN===B.jV)||!this.
Bb)return;var Af=this.DS;var font=this.Bb;var Aj=B.abh(this.M,aOffset);var Ai;var
Ao;var An;var Ak;var Nk=this.BF;var B7=(((Ay+1)*255)>>8)+1;var Dx=this.AN.charCodeAt(
0)||0;var Y=B.abh(this.Ip(),aOffset);var Kz=[Aj[0]-Y[0],(Aj[1]-Y[1])-font.Ascent
];if(Dx<1)return;Ai=Ao=Ak=An=Nk;if(B7<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF
)*B7)>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B7)>>8)&0xFF)<<24);An=(
An&0x00FFFFFF)|((((((An>>24)&0xFF)*B7)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>
24)&0xFF)*B7)>>8)&0xFF)<<24);}if(((Af&0x80)===0x80)){if(this.Iw())Af=(Af&~0x80)|
0x4;else Af=(Af&~0x80)|0x1;}if((Dx===1)&&!((Af&0x40)===0x40)){AE.JM(aClip,font,this.
AN,2,(this.AN.charCodeAt(1)||0)-1,Aj,Kz,0,0,Ai,Ao,An,Ak,true);return;}var leading=
font.Leading;var JF=(font.Ascent+font.Descent)+leading;var Ni=aClip[1]-Y[1];var Nj=
aClip[3]-Y[1];var Jf=Y[2]-Y[0];var FD=0;var G=1;var Ax=this.AN.charCodeAt(1)||0;
while(((FD+JF)<Ni)&&(Ax>0)){G=G+Ax;FD=FD+JF;Ax=this.AN.charCodeAt(G)||0;}while((
FD<Nj)&&(Ax>0)){var Ft=B.abe(Kz,[0,FD]);var KK=0;var HS=false;if(((((Af&0x40)===
0x40)&&((this.AN.charCodeAt((G+Ax)-1)||0)!==0x0A))&&((this.AN.charCodeAt(G+1)||0
)!==0x0A))&&((this.AN.charCodeAt(G+Ax)||0)!==0x00))HS=true;if(HS&&!!(Af&0x6)){var
KJ=G+Ax;var Kg=this.AN.indexOf(String.fromCharCode(0x20),G+1);var Kh=this.AN.indexOf(
String.fromCharCode(0xA0),G+1);if(((Kg<0)||(Kg>=KJ))&&((Kh<0)||(Kh>=KJ)))HS=false;
}if(HS)KK=Jf;else if(((Af&0x4)===0x4))Ft=[(Ft[0]-Jf)+font.Gp(this.AN,G+1,Ax-1),Ft[
1]];else if(((Af&0x2)===0x2))Ft=[(Ft[0]-((Jf/2)|0))+((font.Gp(this.AN,G+1,Ax-1)/
2)|0),Ft[1]];AE.JM(aClip,font,this.AN,G+1,Ax-1,Aj,Ft,KK,0,Ai,Ao,An,Ak,true);G=G+
Ax;FD=FD+JF;Ax=this.AN.charCodeAt(G)||0;}},O:function(C){var A;if(B.aaY(C,this.M
))return;var KI;KI=((A=this.M)[2]-A[0])!==(C[2]-C[0]);if(((KI&&this.FY)&&this.B8
)&&!((this.F&0x2000)===0x2000)){this.AN=B.jV;this.B8=false;B.pe([this,this.E3],this
);}if(((this.FG&&this.B8)&&!B.aaX([(A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-
C[1]]))&&!((this.F&0x2000)===0x2000)){this.AN=B.jV;this.B8=false;B.pe([this,this.
E3],this);}B.Core.AW.O.call(this,C);B.pe([this,this.JD],this);},Jp:function(aBidi
){if(!aBidi)return;B.rB(aBidi);},Nl:function(aSize){var bidi=null;bidi=B.v3(aSize
);return bidi;},JD:function(AV){},E3:function(AV){B.pe([this,this.HX],this);},HX:
function(AV){var A;if(this.B8)return;var width=(A=this.M)[2]-A[0];var height=(A=
this.M)[3]-A[1];var DO=-1;var font=this.Bb;if((!!font&&!!!font.Ascent)&&!!!font.
Descent)font=null;if(this.FY){DO=width;if(DO<0)DO=1;}if(!!this.Cw){this.Jp(this.
Cw);this.Cw=null;}this.B8=true;if((this.String!==B.jV)&&!!font){var length=this.
String.length;if(this.If)this.Cw=this.Nl(length);this.AN=font.LP(this.String,0,DO
,length,this.Cw);if(!!this.Cw&&!this.La()){this.Jp(this.Cw);this.Cw=null;}}else this.
AN=B.jV;this.E8=AI;if((this.FG&&(this.AN!==B.jV))&&!!font){var Af=this.DS;var leading=
font.Leading;var Al=this.AN;var DP=this.Iw();if(((Af&0x80)===0x80)){if(DP)Af=(Af&
~0x80)|0x4;else Af=(Af&~0x80)|0x1;}var HZ=(font.Ascent+font.Descent)+leading;var
Dx=Al.charCodeAt(0)||0;var E0=((height+leading)/HZ)|0;var Jj=false;var HL=false;
if(E0<=0)E0=1;if(Dx>E0){var Dd=0;var G7=0;var H0=Dx-1;var Bm;var BK=Al.length;var
tmp=B.jV;if(!!(Af&0x110)&&!!(Af&0x28))Af&=~0x110;if(!!(Af&0x110))Af&=~0x28;if(((
Af&0x20)===0x20))G7=Dx-E0;else if(((Af&0x10)===0x10)||((Af&0x100)===0x100)){G7=((
Dx-E0)/2)|0;H0=(G7+E0)-1;}else H0=E0-1;Jj=G7>0;HL=H0<(Dx-1);for(Bm=1;Dd<G7;Dd=Dd+
1)Bm=Bm+(Al.charCodeAt(Bm)||0);if(HL)for(BK=Bm;Dd<H0;Dd=Dd+1)BK=BK+(Al.charCodeAt(
BK)||0);if(Jj){var BW=Al.charCodeAt(Bm)||0;tmp=(CF+B.abW(Al,Bm,BW))+CF;tmp=B.abQ(
tmp,0,(BW+2)&0xFFFF);Bm=Bm+BW;if((tmp.charCodeAt(BW)||0)===0x0A){tmp=B.abQ(tmp,BW
,0xFEFF);tmp=B.abQ(tmp,BW+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp
,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(Al
,Bm,BK-Bm);if(HL&&(BK>=Bm)){var BW=Al.charCodeAt(BK)||0;var Ca=(CF+B.abW(Al,BK,BW
))+CF;Ca=B.abQ(Ca,0,(BW+2)&0xFFFF);Ca=B.abQ(Ca,1,0xFEFF);if((Ca.charCodeAt(BW)||
0)===0x0A){Ca=B.abQ(Ca,BW,0xFEFF);Ca=B.abQ(Ca,BW+1,0x0A);}if((Ca.charCodeAt(2)||
0)===0x0A){Ca=B.abQ(Ca,2,0xFEFF);Ca=B.abQ(Ca,1,0x0A);}else Ca=B.abQ(Ca,1,0xFEFF);
tmp=tmp+Ca;}Al=String.fromCharCode(E0&0xFFFF)+tmp;}var Dd=0;var HR=1;var Jx=width;
Dx=Al.charCodeAt(0)||0;for(;Dd<Dx;Dd=Dd+1){var E6=Jj&&!Dd;var E7=HL&&(Dd===(Dx-1
));var CU=false;var CV=false;var Gg=DP;if((DP&&E6)&&!E7){E6=false;E7=true;}else if((
DP&&E7)&&!E6){E7=false;E6=true;}var G_=HR+1;var BW=Al.charCodeAt(HR)||0;var Bm=G_;
var BK=(G_+BW)-2;var Ju=-1;var Jv=-1;if(!this.FY&&(font.Gp(Al,G_,BW-1)>Jx)){var Fn=
Af;if(((Fn&0x2)===0x2)&&!!(Fn&0x5))Fn&=~0x2;if(((Fn&0x2)===0x2))Fn&=~0x5;if(((Fn&
0x4)===0x4))CU=true;else if(((Fn&0x2)===0x2)){CU=true;CV=true;}else CV=true;}if((
Al.charCodeAt(Bm)||0)===0x0A)Bm=Bm+1;if((Al.charCodeAt(BK)||0)===0x0A)BK=BK-1;while(
CU&&((Al.charCodeAt(Bm)||0)===0xFEFF))Bm=Bm+1;while(CV&&((Al.charCodeAt(BK)||0)===
0xFEFF))BK=BK-1;CU=CU&&!E7;CV=CV&&!E6;while((((CU||CV)||E6)||E7)&&(Bm<BK)){if((CU&&(
Gg||!CV))||E6){if(Ju>0)Al=B.abQ(Al,Ju,0xFEFF);Al=B.abQ(Al,Bm,0x2026);Ju=Bm;Bm=Bm+
1;Gg=!Gg;E6=false;if(font.Gp(Al,G_,BW-1)<=Jx){CU=false;CV=false;}else CU=CU||!CV;
}if((CV&&(!Gg||!CU))||E7){if(Jv>0)Al=B.abQ(Al,Jv,0xFEFF);Al=B.abQ(Al,BK,0x2026);
Jv=BK;BK=BK-1;Gg=!Gg;E7=false;if(font.Gp(Al,G_,BW-1)<=Jx){CU=false;CV=false;}else
CV=CV||!CU;}}HR=HR+BW;}this.E8=[font.JP(Al),((Al.charCodeAt(0)||0)*HZ)-leading];
this.AN=Al;}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);B.pe([this,this.
JD],this);},Lo:function(C){if(C===this.If)return;this.If=C;this.AN=B.jV;this.B8=
false;B.pe([this,this.E3],this);},Ln:function(C){if(C===this.FG)return;this.FG=C;
if(this.FY||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.AN=B.jV;this.B8=
false;B.pe([this,this.E3],this);},IU:function(C){if(C===this.FY)return;this.FY=C;
if(this.B8){this.AN=B.jV;this.B8=false;B.pe([this,this.E3],this);}if(C||this.FG)
this.F=this.F&~0x100;else this.F=this.F|0x100;},Fc:function(C){var A;if(C===this.
DS)return;this.DS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);if(this.
FG){this.AN=B.jV;this.B8=false;B.pe([this,this.E3],this);}if(this.B8)B.pe([this,
this.JD],this);},Ds:function(C){if(C===this.String)return;this.String=C;this.AN=
B.jV;this.B8=false;B.pe([this,this.E3],this);},Hu:function(C){if(C===this.Bb)return;
this.Bb=C;this.AN=B.jV;this.B8=false;B.pe([this,this.E3],this);},Bv:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Iw:function(){if(!this.B8)this.HX(this);if(!this.Cw)return false;var result=
false;var bidi=this.Cw;result=B.v2(bidi);return result;},La:function(){if(!this.
B8)this.HX(this);if(!this.Cw)return false;var result=false;var bidi=this.Cw;result=
B.zZ(bidi);return result;},Ip:function(){var A;if((this.String===B.jV)||!this.Bb
)return AG;if(!this.B8)this.HX(this);if(this.AN===B.jV)return AG;var leading=this.
Bb.Leading;var HZ=(this.Bb.Ascent+this.Bb.Descent)+this.Bb.Leading;if(B.aaX(this.
E8,AI))this.E8=[this.Bb.JP(this.AN),this.E8[1]];this.E8=[this.E8[0],((this.AN.charCodeAt(
0)||0)*HZ)-leading];var Af=this.DS;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];var Aj=[0,0,width,height];var V=[].concat(Aj.slice(0,2),B.abf(Aj.slice(
0,2),this.E8));if(((Af&0x80)===0x80)){if(this.Iw())Af=(Af&~0x80)|0x4;else Af=(Af&
~0x80)|0x1;}if(((Af&0x40)===0x40)){var DO;DO=width;if(DO<0)DO=0;if(DO>(V[2]-V[0]
))V=B.abL(V,DO);}if((!!(Af&0x110)&&!!(Af&0x28))&&((V[3]-V[1])>(Aj[3]-Aj[1])))Af&=
~0x110;if(!!(Af&0x110))Af&=~0x28;if((((Af&0x2)===0x2)&&!!(Af&0x5))&&((V[2]-V[0])>(
Aj[2]-Aj[0])))Af&=~0x2;if(((Af&0x2)===0x2))Af&=~0x5;if((V[2]-V[0])!==(Aj[2]-Aj[0
])){if(((Af&0x4)===0x4))V=B.abM(V,Aj[2]-(V[2]-V[0]));else if(((Af&0x2)===0x2))V=
B.abM(V,(Aj[0]+(((Aj[2]-Aj[0])/2)|0))-(((V[2]-V[0])/2)|0));}if((V[3]-V[1])!==(Aj[
3]-Aj[1])){if(((Af&0x20)===0x20))V=B.abO(V,Aj[3]-(V[3]-V[1]));else if(((Af&0x100
)===0x100))V=B.abO(V,((Aj[1]+(((Aj[3]-Aj[1])/2)|0))-(((V[3]-V[1])/2)|0))+(((this.
Bb.Descent-this.Bb.Ascent)/2)|0));else if(((Af&0x10)===0x10))V=B.abO(V,(Aj[1]+(((
Aj[3]-Aj[1])/2)|0))-(((V[3]-V[1])/2)|0));}V=B.abh(V,AA.slice(0,2));return V;},_Init:
function(aArg){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(
){this.Dh();this.__proto__=B.Core.AW;B.Core.AW._Done.call(this);},_Mark:function(
E){var A;B.Core.AW._Mark.call(this,E);if((A=this.Bb)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::Text"};D.Oa={KS:0x1,KR:0x2,KT:0x4,KW:0x8,KV:0x10,KU:0x20
,OB:0x40,OC:0x80,OE:0x100};D.OF={KS:0x1,KR:0x2,KT:0x4,KW:0x8,KV:0x10,KU:0x20,NR:
0x40,NQ:0x80,NW:0x100};D.Ol={Oj:0,Oz:1,Ox:2,Oy:3};
D._Init=function(){D.EA.__proto__=B.Core.AW;D.AT.__proto__=B.Core.AW;D.Io.__proto__=
B.Core.AW;D.Bj.__proto__=B.Core.AW;D.Text.__proto__=B.Core.AW;};D._ReInit=function(
){};D.Cu=function(E){};return D;})();

/* Embedded Wizard */