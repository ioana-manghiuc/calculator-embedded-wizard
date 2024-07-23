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
,CL:function(AE,aClip,aOffset,Ay,aBlend){var A;var Aj=this.H$;var Ao=this.Ia;var
Al=this.H9;var An=this.H_;var Ax=this.BF;var DP=this.CR+this.IY;var G9=this.CR+this.
IZ;var G7=this.CR;var G6=this.CR;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;if((((
Aj===Ao)&&(Al===An))&&(Aj===Al))&&(Aj===0xFFFFFFFF))Aj=Ao=Al=An=Ax;else if(Ax!==
0xFFFFFFFF){Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF)*(((Ax>>24)&0xFF)+1))>>8)&0xFF
)<<24);Aj=(Aj&0xFFFFFF00)|((((Aj&0xFF)*((Ax&0xFF)+1))>>8)&0xFF);Aj=(Aj&0xFFFF00FF
)|((((((Aj>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8)&0xFF)<<8);Aj=(Aj&0xFF00FFFF)|((((((
Aj>>16)&0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF)<<16);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24
)&0xFF)*(((Ax>>24)&0xFF)+1))>>8)&0xFF)<<24);Ao=(Ao&0xFFFFFF00)|((((Ao&0xFF)*((Ax&
0xFF)+1))>>8)&0xFF);Ao=(Ao&0xFFFF00FF)|((((((Ao>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8
)&0xFF)<<8);Ao=(Ao&0xFF00FFFF)|((((((Ao>>16)&0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF
)<<16);Al=(Al&0x00FFFFFF)|((((((Al>>24)&0xFF)*(((Ax>>24)&0xFF)+1))>>8)&0xFF)<<24
);Al=(Al&0xFFFFFF00)|((((Al&0xFF)*((Ax&0xFF)+1))>>8)&0xFF);Al=(Al&0xFFFF00FF)|((((((
Al>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8)&0xFF)<<8);Al=(Al&0xFF00FFFF)|((((((Al>>16)&
0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF)<<16);An=(An&0x00FFFFFF)|((((((An>>24)&0xFF)
*(((Ax>>24)&0xFF)+1))>>8)&0xFF)<<24);An=(An&0xFFFFFF00)|((((An&0xFF)*((Ax&0xFF)+
1))>>8)&0xFF);An=(An&0xFFFF00FF)|((((((An>>8)&0xFF)*(((Ax>>8)&0xFF)+1))>>8)&0xFF
)<<8);An=(An&0xFF00FFFF)|((((((An>>16)&0xFF)*(((Ax>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Ay<256){Aj=(Aj&0x00FFFFFF)|((((Ay*((Aj>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF
)|((((Ay*((Ao>>24)&0xFF))>>8)&0xFF)<<24);Al=(Al&0x00FFFFFF)|((((Ay*((Al>>24)&0xFF
))>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((Ay*((An>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!DP||!!G9)||!!G7)||!!G6)AE.K8(aClip,B.abh(this.M,aOffset),DP,G9,G7,G6,Aj,Ao,An,
Al,aBlend);else AE.Io(aClip,B.abh(this.M,aOffset),Aj,Ao,An,Al,aBlend);},LE:function(
C){var A;if(C<0)C=0;if(C===this.IZ)return;this.IZ=C;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.M);},LD:function(C){var A;if(C<0)C=0;if(C===this.IY)return;this.
IY=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lh:function(C){var A;
if(C===this.H9)return;this.H9=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Li:function(C){var A;if(C===this.H_)return;this.H_=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.M);},Lk:function(C){var A;if(C===this.Ia)return;this.
Ia=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lj:function(C){var A;
if(C===this.H$)return;this.H$=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},DE:function(C){var A;if(C<0)C=0;if(C===this.CR)return;this.CR=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},Bv:function(C){var A;if(C===this.BF)return;
this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg
){B.Core.AW._Init.call(this,aArg);this.__proto__=D.EB;},_className:"Views::Rectangle"
};D.AU={CR:0,Width:1,BF:0xFFFFFFFF,CL:function(AE,aClip,aOffset,Ay,aBlend){var A;
var Aj;var Ao;var Al;var An;var Ax=this.BF;var DP=this.CR;var G9=this.CR;var G7=
this.CR;var G6=this.CR;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;Aj=Ao=Al=An=Ax;
if(Ay<256){Aj=(Aj&0x00FFFFFF)|((((Ay*((Aj>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF
)|((((Ay*((Ao>>24)&0xFF))>>8)&0xFF)<<24);Al=(Al&0x00FFFFFF)|((((Ay*((Al>>24)&0xFF
))>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((Ay*((An>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!DP||!!G9)||!!G7)||!!G6)AE.K5(aClip,B.abh(this.M,aOffset),this.Width,DP,G9,G7,G6
,Aj,Ao,An,Al,aBlend);else AE.K3(aClip,B.abh(this.M,aOffset),this.Width,Aj,Ao,An,
Al,aBlend);},DE:function(C){var A;if(C<0)C=0;if(C===this.CR)return;this.CR=C;if(
!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},GC:function(C){var A;if(C<0)C=
0;if(C===this.Width)return;this.Width=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.
Ac(this.M);},Bv:function(C){var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg){B.Core.AW._Init.call(
this,aArg);this.__proto__=D.AU;},_className:"Views::Border"};D.Ip={timer:null,Ae:
null,BB:-1,BF:0xFFFFFFFF,DZ:0,Az:0,CI:false,CL:function(AE,aClip,aOffset,Ay,aBlend
){var A;var BJ=this.DZ;if(this.BB>=0)BJ=this.BB;if(!this.Ae||(BJ>=this.Ae.NoOfFrames
))return;this.Ae.Update();var Aj;var Ao;var An;var Al;var Ax=this.BF;var B7=(((Ay+
1)*255)>>8)+1;var I=B.abh(this.M,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);Aj=
Ao=Al=An=Ax;if(B7<256){Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF)*B7)>>8)&0xFF)<<24);
Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B7)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((
An>>24)&0xFF)*B7)>>8)&0xFF)<<24);Al=(Al&0x00FFFFFF)|((((((Al>>24)&0xFF)*B7)>>8)&
0xFF)<<24);}AE.K2(aClip,this.Ae,BJ,I,0x1F,Aj,Ao,An,Al,aBlend);},GZ:function(AV){
var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Co:function(AV){var A;
var BJ=this.BB;var C0=0;if(!!this.Ae)C0=this.Ae.NoOfFrames*this.Ae.FrameDelay;if((
!!this.timer&&(this.BB<0))&&(C0>0))this.Az=this.timer.AD-(this.DZ*this.Ae.FrameDelay
);if(!!this.timer&&(C0>0)){var R=(this.timer.AD-this.Az)|0;BJ=(R/this.Ae.FrameDelay
)|0;if(R>=C0){BJ=BJ%this.Ae.NoOfFrames;this.Az=this.timer.AD-(R%C0);}}if(((BJ!==
this.BB)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BB=BJ;if(!C0&&!
!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}},Bv:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fe:function(C){var A;if(this.CI===C)return;this.CI=C;this.BB=-1;if(!C&&
!!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Es);B.zV([this,this.Co],this.timer,0);B.pe([this,this.Co]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Hw:function(C){var
A;if(C<0)C=0;if((C===this.DZ)&&(this.BB===-1))return;this.DZ=C;if(!this.timer)this.
BB=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Bd:function(C){var A;
if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FO)B.z9([this,this.GZ],this.Ae,0);this.
Ae=C;this.BB=-1;if(!!C&&C.FO)B.zV([this,this.GZ],C,0);if(this.CI){this.Fe(false);
this.Fe(true);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(
aArg){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Ip;},_Mark:function(E){var
A;B.Core.AW._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"
};D.Bj={timer:null,Ae:null,Az:0,BB:0,BF:0xFFFFFFFF,DS:0x12,DZ:0,CI:false,CL:function(
AE,aClip,aOffset,Ay,aBlend){var A;var BJ=this.DZ;if(this.BB>=0)BJ=this.BB;if(!this.
Ae||(BJ>=this.Ae.NoOfFrames))return;this.Ae.Update();var Y=this.Iq();var BY=this.
Ae.FrameSize;if((Y[0]>=Y[2])||(Y[1]>=Y[3]))return;var Aj;var Ao;var An;var Al;var
Ax=this.BF;var B7=(((Ay+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);Aj=Ao=
Al=An=Ax;if(B7<256){Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF)*B7)>>8)&0xFF)<<24);Ao=(
Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B7)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((An>>
24)&0xFF)*B7)>>8)&0xFF)<<24);Al=(Al&0x00FFFFFF)|((((((Al>>24)&0xFF)*B7)>>8)&0xFF
)<<24);}if(B.aaX([Y[2]-Y[0],Y[3]-Y[1]],BY))AE.KZ(aClip,this.Ae,BJ,B.abh(this.M,aOffset
),B.abe(this.M.slice(0,2),Y.slice(0,2)),Aj,Ao,An,Al,aBlend);else AE.LV(aClip,this.
Ae,BJ,B.abh(Y,aOffset),[].concat(AI,BY),Aj,Ao,An,Al,aBlend,true);},GZ:function(AV
){var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Co:function(AV){var
A;var BJ=this.BB;var C0=0;if(!!this.Ae)C0=this.Ae.NoOfFrames*this.Ae.FrameDelay;
if((!!this.timer&&(this.BB<0))&&(C0>0))this.Az=this.timer.AD-(this.DZ*this.Ae.FrameDelay
);if(!!this.timer&&(C0>0)){var R=(this.timer.AD-this.Az)|0;BJ=(R/this.Ae.FrameDelay
)|0;if(R>=C0){BJ=BJ%this.Ae.NoOfFrames;this.Az=this.timer.AD-(R%C0);}}if(((BJ!==
this.BB)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BB=BJ;if(!C0&&!
!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}},Bv:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fe:function(C){var A;if(this.CI===C)return;this.CI=C;this.BB=-1;if(!C&&
!!this.timer){B.z9([this,this.Co],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Es);B.zV([this,this.Co],this.timer,0);B.pe([this,this.Co]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Fd:function(C){var
A;if(C===this.DS)return;this.DS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Hw:function(C){var A;if(C<0)C=0;if((C===this.DZ)&&(this.BB===-1))return;this.
DZ=C;if(!this.timer)this.BB=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Bd:function(C){var A;if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FO)B.z9([this
,this.GZ],this.Ae,0);this.Ae=C;this.BB=-1;if(!!C&&C.FO)B.zV([this,this.GZ],C,0);
if(this.CI){this.Fe(false);this.Fe(true);}if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.M);},Lg:function(){var A;return((this.F&0x1)===0x1);},Ff:function(C){if(
C)this.AR(0x1,0x0);else this.AR(0x0,0x1);},Iq:function(){var A;if(!this.Ae)return AG;
var Af=this.DS;var BY=this.Ae.FrameSize;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];if(!BY[0]||!BY[1])return AG;var Ak=[0,0,width,height];var V=Ak;if(((
Af&0x40)===0x40)){var JH=((((Ak[2]-Ak[0])<<16)+((BY[0]/2)|0))/BY[0])|0;var G_=((((
Ak[3]-Ak[1])<<16)+((BY[1]/2)|0))/BY[1])|0;var Eq=JH;if(G_>Eq)Eq=G_;V=B.abL(V,((BY[
0]*Eq)+32768)>>16);V=B.abI(V,((BY[1]*Eq)+32768)>>16);}else if(((Af&0x80)===0x80)
){var JH=((((Ak[2]-Ak[0])<<16)+((BY[0]/2)|0))/BY[0])|0;var G_=((((Ak[3]-Ak[1])<<
16)+((BY[1]/2)|0))/BY[1])|0;var Eq=JH;if(G_<Eq)Eq=G_;V=B.abL(V,((BY[0]*Eq)+32768
)>>16);V=B.abI(V,((BY[1]*Eq)+32768)>>16);}else if(!((Af&0x100)===0x100))V=B.abK(
V,BY);if((V[2]-V[0])!==(Ak[2]-Ak[0])){if(((Af&0x4)===0x4))V=B.abM(V,Ak[2]-(V[2]-
V[0]));else if(((Af&0x2)===0x2))V=B.abM(V,(Ak[0]+(((Ak[2]-Ak[0])/2)|0))-(((V[2]-
V[0])/2)|0));}if((V[3]-V[1])!==(Ak[3]-Ak[1])){if(((Af&0x20)===0x20))V=B.abO(V,Ak[
3]-(V[3]-V[1]));else if(((Af&0x10)===0x10))V=B.abO(V,(Ak[1]+(((Ak[3]-Ak[1])/2)|0
))-(((V[3]-V[1])/2)|0));}V=B.abh(V,AA.slice(0,2));return V;},_Init:function(aArg
){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Bj;},_Mark:function(E){var A;
B.Core.AW._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=E
);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Image"};
D.Text={Bb:null,AO:B.jV,String:B.jV,Cw:null,E9:B.wf,DS:0x12,BF:0xFFFFFFFF,FZ:false
,FH:false,Ig:false,B8:false,CK:function(){if(!!this.Cw){this.Jq(this.Cw);this.Cw=
null;}},CL:function(AE,aClip,aOffset,Ay,aBlend){var A;if((this.AO===B.jV)||!this.
Bb)return;var Af=this.DS;var font=this.Bb;var Ak=B.abh(this.M,aOffset);var Aj;var
Ao;var An;var Al;var Nk=this.BF;var B7=(((Ay+1)*255)>>8)+1;var Dx=this.AO.charCodeAt(
0)||0;var Y=B.abh(this.Iq(),aOffset);var Kz=[Ak[0]-Y[0],(Ak[1]-Y[1])-font.Ascent
];if(Dx<1)return;Aj=Ao=Al=An=Nk;if(B7<256){Aj=(Aj&0x00FFFFFF)|((((((Aj>>24)&0xFF
)*B7)>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B7)>>8)&0xFF)<<24);An=(
An&0x00FFFFFF)|((((((An>>24)&0xFF)*B7)>>8)&0xFF)<<24);Al=(Al&0x00FFFFFF)|((((((Al>>
24)&0xFF)*B7)>>8)&0xFF)<<24);}if(((Af&0x80)===0x80)){if(this.Ix())Af=(Af&~0x80)|
0x4;else Af=(Af&~0x80)|0x1;}if((Dx===1)&&!((Af&0x40)===0x40)){AE.JN(aClip,font,this.
AO,2,(this.AO.charCodeAt(1)||0)-1,Ak,Kz,0,0,Aj,Ao,An,Al,true);return;}var leading=
font.Leading;var JG=(font.Ascent+font.Descent)+leading;var Ni=aClip[1]-Y[1];var Nj=
aClip[3]-Y[1];var Jg=Y[2]-Y[0];var FE=0;var G=1;var Ax=this.AO.charCodeAt(1)||0;
while(((FE+JG)<Ni)&&(Ax>0)){G=G+Ax;FE=FE+JG;Ax=this.AO.charCodeAt(G)||0;}while((
FE<Nj)&&(Ax>0)){var Fu=B.abe(Kz,[0,FE]);var KK=0;var HT=false;if(((((Af&0x40)===
0x40)&&((this.AO.charCodeAt((G+Ax)-1)||0)!==0x0A))&&((this.AO.charCodeAt(G+1)||0
)!==0x0A))&&((this.AO.charCodeAt(G+Ax)||0)!==0x00))HT=true;if(HT&&!!(Af&0x6)){var
KJ=G+Ax;var Kg=this.AO.indexOf(String.fromCharCode(0x20),G+1);var Kh=this.AO.indexOf(
String.fromCharCode(0xA0),G+1);if(((Kg<0)||(Kg>=KJ))&&((Kh<0)||(Kh>=KJ)))HT=false;
}if(HT)KK=Jg;else if(((Af&0x4)===0x4))Fu=[(Fu[0]-Jg)+font.Gq(this.AO,G+1,Ax-1),Fu[
1]];else if(((Af&0x2)===0x2))Fu=[(Fu[0]-((Jg/2)|0))+((font.Gq(this.AO,G+1,Ax-1)/
2)|0),Fu[1]];AE.JN(aClip,font,this.AO,G+1,Ax-1,Ak,Fu,KK,0,Aj,Ao,An,Al,true);G=G+
Ax;FE=FE+JG;Ax=this.AO.charCodeAt(G)||0;}},O:function(C){var A;if(B.aaY(C,this.M
))return;var KI;KI=((A=this.M)[2]-A[0])!==(C[2]-C[0]);if(((KI&&this.FZ)&&this.B8
)&&!((this.F&0x2000)===0x2000)){this.AO=B.jV;this.B8=false;B.pe([this,this.E4],this
);}if(((this.FH&&this.B8)&&!B.aaX([(A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-
C[1]]))&&!((this.F&0x2000)===0x2000)){this.AO=B.jV;this.B8=false;B.pe([this,this.
E4],this);}B.Core.AW.O.call(this,C);B.pe([this,this.JE],this);},Jq:function(aBidi
){if(!aBidi)return;B.rB(aBidi);},Nl:function(aSize){var bidi=null;bidi=B.v3(aSize
);return bidi;},JE:function(AV){},E4:function(AV){B.pe([this,this.HY],this);},HY:
function(AV){var A;if(this.B8)return;var width=(A=this.M)[2]-A[0];var height=(A=
this.M)[3]-A[1];var DO=-1;var font=this.Bb;if((!!font&&!!!font.Ascent)&&!!!font.
Descent)font=null;if(this.FZ){DO=width;if(DO<0)DO=1;}if(!!this.Cw){this.Jq(this.
Cw);this.Cw=null;}this.B8=true;if((this.String!==B.jV)&&!!font){var length=this.
String.length;if(this.Ig)this.Cw=this.Nl(length);this.AO=font.LP(this.String,0,DO
,length,this.Cw);if(!!this.Cw&&!this.La()){this.Jq(this.Cw);this.Cw=null;}}else this.
AO=B.jV;this.E9=AI;if((this.FH&&(this.AO!==B.jV))&&!!font){var Af=this.DS;var leading=
font.Leading;var Am=this.AO;var DP=this.Ix();if(((Af&0x80)===0x80)){if(DP)Af=(Af&
~0x80)|0x4;else Af=(Af&~0x80)|0x1;}var H0=(font.Ascent+font.Descent)+leading;var
Dx=Am.charCodeAt(0)||0;var E1=((height+leading)/H0)|0;var Jk=false;var HM=false;
if(E1<=0)E1=1;if(Dx>E1){var De=0;var G8=0;var H1=Dx-1;var Bm;var BK=Am.length;var
tmp=B.jV;if(!!(Af&0x110)&&!!(Af&0x28))Af&=~0x110;if(!!(Af&0x110))Af&=~0x28;if(((
Af&0x20)===0x20))G8=Dx-E1;else if(((Af&0x10)===0x10)||((Af&0x100)===0x100)){G8=((
Dx-E1)/2)|0;H1=(G8+E1)-1;}else H1=E1-1;Jk=G8>0;HM=H1<(Dx-1);for(Bm=1;De<G8;De=De+
1)Bm=Bm+(Am.charCodeAt(Bm)||0);if(HM)for(BK=Bm;De<H1;De=De+1)BK=BK+(Am.charCodeAt(
BK)||0);if(Jk){var BW=Am.charCodeAt(Bm)||0;tmp=(CF+B.abW(Am,Bm,BW))+CF;tmp=B.abQ(
tmp,0,(BW+2)&0xFFFF);Bm=Bm+BW;if((tmp.charCodeAt(BW)||0)===0x0A){tmp=B.abQ(tmp,BW
,0xFEFF);tmp=B.abQ(tmp,BW+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp
,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(Am
,Bm,BK-Bm);if(HM&&(BK>=Bm)){var BW=Am.charCodeAt(BK)||0;var Ca=(CF+B.abW(Am,BK,BW
))+CF;Ca=B.abQ(Ca,0,(BW+2)&0xFFFF);Ca=B.abQ(Ca,1,0xFEFF);if((Ca.charCodeAt(BW)||
0)===0x0A){Ca=B.abQ(Ca,BW,0xFEFF);Ca=B.abQ(Ca,BW+1,0x0A);}if((Ca.charCodeAt(2)||
0)===0x0A){Ca=B.abQ(Ca,2,0xFEFF);Ca=B.abQ(Ca,1,0x0A);}else Ca=B.abQ(Ca,1,0xFEFF);
tmp=tmp+Ca;}Am=String.fromCharCode(E1&0xFFFF)+tmp;}var De=0;var HS=1;var Jy=width;
Dx=Am.charCodeAt(0)||0;for(;De<Dx;De=De+1){var E7=Jk&&!De;var E8=HM&&(De===(Dx-1
));var CV=false;var CW=false;var Gh=DP;if((DP&&E7)&&!E8){E7=false;E8=true;}else if((
DP&&E8)&&!E7){E8=false;E7=true;}var G$=HS+1;var BW=Am.charCodeAt(HS)||0;var Bm=G$;
var BK=(G$+BW)-2;var Jv=-1;var Jw=-1;if(!this.FZ&&(font.Gq(Am,G$,BW-1)>Jy)){var Fo=
Af;if(((Fo&0x2)===0x2)&&!!(Fo&0x5))Fo&=~0x2;if(((Fo&0x2)===0x2))Fo&=~0x5;if(((Fo&
0x4)===0x4))CV=true;else if(((Fo&0x2)===0x2)){CV=true;CW=true;}else CW=true;}if((
Am.charCodeAt(Bm)||0)===0x0A)Bm=Bm+1;if((Am.charCodeAt(BK)||0)===0x0A)BK=BK-1;while(
CV&&((Am.charCodeAt(Bm)||0)===0xFEFF))Bm=Bm+1;while(CW&&((Am.charCodeAt(BK)||0)===
0xFEFF))BK=BK-1;CV=CV&&!E8;CW=CW&&!E7;while((((CV||CW)||E7)||E8)&&(Bm<BK)){if((CV&&(
Gh||!CW))||E7){if(Jv>0)Am=B.abQ(Am,Jv,0xFEFF);Am=B.abQ(Am,Bm,0x2026);Jv=Bm;Bm=Bm+
1;Gh=!Gh;E7=false;if(font.Gq(Am,G$,BW-1)<=Jy){CV=false;CW=false;}else CV=CV||!CW;
}if((CW&&(!Gh||!CV))||E8){if(Jw>0)Am=B.abQ(Am,Jw,0xFEFF);Am=B.abQ(Am,BK,0x2026);
Jw=BK;BK=BK-1;Gh=!Gh;E8=false;if(font.Gq(Am,G$,BW-1)<=Jy){CV=false;CW=false;}else
CW=CW||!CV;}}HS=HS+BW;}this.E9=[font.JQ(Am),((Am.charCodeAt(0)||0)*H0)-leading];
this.AO=Am;}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);B.pe([this,this.
JE],this);},Lo:function(C){if(C===this.Ig)return;this.Ig=C;this.AO=B.jV;this.B8=
false;B.pe([this,this.E4],this);},Ln:function(C){if(C===this.FH)return;this.FH=C;
if(this.FZ||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.AO=B.jV;this.B8=
false;B.pe([this,this.E4],this);},IV:function(C){if(C===this.FZ)return;this.FZ=C;
if(this.B8){this.AO=B.jV;this.B8=false;B.pe([this,this.E4],this);}if(C||this.FH)
this.F=this.F&~0x100;else this.F=this.F|0x100;},Fd:function(C){var A;if(C===this.
DS)return;this.DS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);if(this.
FH){this.AO=B.jV;this.B8=false;B.pe([this,this.E4],this);}if(this.B8)B.pe([this,
this.JE],this);},Ds:function(C){if(C===this.String)return;this.String=C;this.AO=
B.jV;this.B8=false;B.pe([this,this.E4],this);},Hv:function(C){if(C===this.Bb)return;
this.Bb=C;this.AO=B.jV;this.B8=false;B.pe([this,this.E4],this);},Bv:function(C){
var A;if(C===this.BF)return;this.BF=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Ix:function(){if(!this.B8)this.HY(this);if(!this.Cw)return false;var result=
false;var bidi=this.Cw;result=B.v2(bidi);return result;},La:function(){if(!this.
B8)this.HY(this);if(!this.Cw)return false;var result=false;var bidi=this.Cw;result=
B.zZ(bidi);return result;},Iq:function(){var A;if((this.String===B.jV)||!this.Bb
)return AG;if(!this.B8)this.HY(this);if(this.AO===B.jV)return AG;var leading=this.
Bb.Leading;var H0=(this.Bb.Ascent+this.Bb.Descent)+this.Bb.Leading;if(B.aaX(this.
E9,AI))this.E9=[this.Bb.JQ(this.AO),this.E9[1]];this.E9=[this.E9[0],((this.AO.charCodeAt(
0)||0)*H0)-leading];var Af=this.DS;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];var Ak=[0,0,width,height];var V=[].concat(Ak.slice(0,2),B.abf(Ak.slice(
0,2),this.E9));if(((Af&0x80)===0x80)){if(this.Ix())Af=(Af&~0x80)|0x4;else Af=(Af&
~0x80)|0x1;}if(((Af&0x40)===0x40)){var DO;DO=width;if(DO<0)DO=0;if(DO>(V[2]-V[0]
))V=B.abL(V,DO);}if((!!(Af&0x110)&&!!(Af&0x28))&&((V[3]-V[1])>(Ak[3]-Ak[1])))Af&=
~0x110;if(!!(Af&0x110))Af&=~0x28;if((((Af&0x2)===0x2)&&!!(Af&0x5))&&((V[2]-V[0])>(
Ak[2]-Ak[0])))Af&=~0x2;if(((Af&0x2)===0x2))Af&=~0x5;if((V[2]-V[0])!==(Ak[2]-Ak[0
])){if(((Af&0x4)===0x4))V=B.abM(V,Ak[2]-(V[2]-V[0]));else if(((Af&0x2)===0x2))V=
B.abM(V,(Ak[0]+(((Ak[2]-Ak[0])/2)|0))-(((V[2]-V[0])/2)|0));}if((V[3]-V[1])!==(Ak[
3]-Ak[1])){if(((Af&0x20)===0x20))V=B.abO(V,Ak[3]-(V[3]-V[1]));else if(((Af&0x100
)===0x100))V=B.abO(V,((Ak[1]+(((Ak[3]-Ak[1])/2)|0))-(((V[3]-V[1])/2)|0))+(((this.
Bb.Descent-this.Bb.Ascent)/2)|0));else if(((Af&0x10)===0x10))V=B.abO(V,(Ak[1]+(((
Ak[3]-Ak[1])/2)|0))-(((V[3]-V[1])/2)|0));}V=B.abh(V,AA.slice(0,2));return V;},_Init:
function(aArg){B.Core.AW._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(
){this.CK();this.__proto__=B.Core.AW;B.Core.AW._Done.call(this);},_Mark:function(
E){var A;B.Core.AW._Mark.call(this,E);if((A=this.Bb)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::Text"};D.Ob={KS:0x1,KR:0x2,KT:0x4,KW:0x8,KV:0x10,KU:0x20
,OC:0x40,OD:0x80,OF:0x100};D.OG={KS:0x1,KR:0x2,KT:0x4,KW:0x8,KV:0x10,KU:0x20,NS:
0x40,NR:0x80,NX:0x100};D.Om={Ol:0,OA:1,Oy:2,Oz:3};
D._Init=function(){D.EB.__proto__=B.Core.AW;D.AU.__proto__=B.Core.AW;D.Ip.__proto__=
B.Core.AW;D.Bj.__proto__=B.Core.AW;D.Text.__proto__=B.Core.AW;};D._ReInit=function(
){};D.Cu=function(E){};return D;})();

/* Embedded Wizard */