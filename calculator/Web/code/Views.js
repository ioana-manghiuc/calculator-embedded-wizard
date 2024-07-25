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
);if(EmWiApp.acf)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
acf=(function(){var B=EmWiApp;var D={};
var AH=[0,0];var AF=[0,0,0,0];var CG="\uFEFF";
D.ES={I3:0,I2:0,Ic:0xFFFFFFFF,Id:0xFFFFFFFF,If:0xFFFFFFFF,Ie:0xFFFFFFFF,CP:0,BH:0xFFFFFFFF
,CK:function(AD,aClip,aOffset,Ay,aBlend){var A;var Ai=this.Ie;var Ao=this.If;var
Ak=this.Ic;var An=this.Id;var Ax=this.BH;var DM=this.CP+this.I2;var Hc=this.CP+this.
I3;var Ha=this.CP;var G$=this.CP;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;if((((
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
!!DM||!!Hc)||!!Ha)||!!G$)AD.Lh(aClip,B.abh(this.M,aOffset),DM,Hc,Ha,G$,Ai,Ao,An,
Ak,aBlend);else AD.Iu(aClip,B.abh(this.M,aOffset),Ai,Ao,An,Ak,aBlend);},LS:function(
C){var A;if(C<0)C=0;if(C===this.I3)return;this.I3=C;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.M);},LR:function(C){var A;if(C<0)C=0;if(C===this.I2)return;this.
I2=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lt:function(C){var A;
if(C===this.Ic)return;this.Ic=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Lu:function(C){var A;if(C===this.Id)return;this.Id=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.M);},Lw:function(C){var A;if(C===this.If)return;this.
If=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Lv:function(C){var A;
if(C===this.Ie)return;this.Ie=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},DC:function(C){var A;if(C<0)C=0;if(C===this.CP)return;this.CP=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},Bg:function(C){var A;if(C===this.BH)return;
this.BH=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg
){B.Core.AY._Init.call(this,aArg);this.__proto__=D.ES;},_className:"Views::Rectangle"
};D.AU={CP:0,Width:1,BH:0xFFFFFFFF,CK:function(AD,aClip,aOffset,Ay,aBlend){var A;
var Ai;var Ao;var Ak;var An;var Ax=this.BH;var DM=this.CP;var Hc=this.CP;var Ha=
this.CP;var G$=this.CP;aBlend=aBlend&&((this.F&0x2)===0x2);Ay=Ay+1;Ai=Ao=Ak=An=Ax;
if(Ay<256){Ai=(Ai&0x00FFFFFF)|((((Ay*((Ai>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF
)|((((Ay*((Ao>>24)&0xFF))>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((Ay*((Ak>>24)&0xFF
))>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((Ay*((An>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!DM||!!Hc)||!!Ha)||!!G$)AD.Le(aClip,B.abh(this.M,aOffset),this.Width,DM,Hc,Ha,G$
,Ai,Ao,An,Ak,aBlend);else AD.Lc(aClip,B.abh(this.M,aOffset),this.Width,Ai,Ao,An,
Ak,aBlend);},DC:function(C){var A;if(C<0)C=0;if(C===this.CP)return;this.CP=C;if(
!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},GH:function(C){var A;if(C<0)C=
0;if(C===this.Width)return;this.Width=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.
Ac(this.M);},Bg:function(C){var A;if(C===this.BH)return;this.BH=C;if(!!this.H&&((
this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(aArg){B.Core.AY._Init.call(
this,aArg);this.__proto__=D.AU;},_className:"Views::Border"};D.Iv={timer:null,Ae:
null,BD:-1,BH:0xFFFFFFFF,DW:0,AL:0,CJ:false,CK:function(AD,aClip,aOffset,Ay,aBlend
){var A;var BL=this.DW;if(this.BD>=0)BL=this.BD;if(!this.Ae||(BL>=this.Ae.NoOfFrames
))return;this.Ae.Update();var Ai;var Ao;var An;var Ak;var Ax=this.BH;var B8=(((Ay+
1)*255)>>8)+1;var I=B.abh(this.M,aOffset);aBlend=aBlend&&((this.F&0x2)===0x2);Ai=
Ao=Ak=An=Ax;if(B8<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*B8)>>8)&0xFF)<<24);
Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B8)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((
An>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*B8)>>8)&
0xFF)<<24);}AD.Lb(aClip,this.Ae,BL,I,0x1F,Ai,Ao,An,Ak,aBlend);},G4:function(A0){
var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},C2:function(A0){var A;
var BL=this.BD;var CX=0;if(!!this.Ae)CX=this.Ae.NoOfFrames*this.Ae.FrameDelay;if((
!!this.timer&&(this.BD<0))&&(CX>0))this.AL=this.timer.AN-(this.DW*this.Ae.FrameDelay
);if(!!this.timer&&(CX>0)){var Ab=(this.timer.AN-this.AL)|0;BL=(Ab/this.Ae.FrameDelay
)|0;if(Ab>=CX){BL=BL%this.Ae.NoOfFrames;this.AL=this.timer.AN-(Ab%CX);}}if(((BL!==
this.BD)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BD=BL;if(!CX&&!
!this.timer){B.z9([this,this.C2],this.timer,0);this.timer=null;}},Bg:function(C){
var A;if(C===this.BH)return;this.BH=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fi:function(C){var A;if(this.CJ===C)return;this.CJ=C;this.BD=-1;if(!C&&
!!this.timer){B.z9([this,this.C2],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Fd);B.zV([this,this.C2],this.timer,0);B.pe([this,this.C2]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Hz:function(C){var
A;if(C<0)C=0;if((C===this.DW)&&(this.BD===-1))return;this.DW=C;if(!this.timer)this.
BD=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},AW:function(C){var A;
if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FR)B.z9([this,this.G4],this.Ae,0);this.
Ae=C;this.BD=-1;if(!!C&&C.FR)B.zV([this,this.G4],C,0);if(this.CJ){this.Fi(false);
this.Fi(true);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},_Init:function(
aArg){B.Core.AY._Init.call(this,aArg);this.__proto__=D.Iv;},_Mark:function(E){var
A;B.Core.AY._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Views::Frame"
};D.AX={timer:null,Ae:null,AL:0,BD:0,BH:0xFFFFFFFF,DP:0x12,DW:0,CJ:false,CK:function(
AD,aClip,aOffset,Ay,aBlend){var A;var BL=this.DW;if(this.BD>=0)BL=this.BD;if(!this.
Ae||(BL>=this.Ae.NoOfFrames))return;this.Ae.Update();var X=this.Iw();var BX=this.
Ae.FrameSize;if((X[0]>=X[2])||(X[1]>=X[3]))return;var Ai;var Ao;var An;var Ak;var
Ax=this.BH;var B8=(((Ay+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);Ai=Ao=
Ak=An=Ax;if(B8<256){Ai=(Ai&0x00FFFFFF)|((((((Ai>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ao=(
Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B8)>>8)&0xFF)<<24);An=(An&0x00FFFFFF)|((((((An>>
24)&0xFF)*B8)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF)|((((((Ak>>24)&0xFF)*B8)>>8)&0xFF
)<<24);}if(B.aaX([X[2]-X[0],X[3]-X[1]],BX))AD.K_(aClip,this.Ae,BL,B.abh(this.M,aOffset
),B.abe(this.M.slice(0,2),X.slice(0,2)),Ai,Ao,An,Ak,aBlend);else AD.L9(aClip,this.
Ae,BL,B.abh(X,aOffset),[].concat(AH,BX),Ai,Ao,An,Ak,aBlend,true);},G4:function(A0
){var A;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},C2:function(A0){var
A;var BL=this.BD;var CX=0;if(!!this.Ae)CX=this.Ae.NoOfFrames*this.Ae.FrameDelay;
if((!!this.timer&&(this.BD<0))&&(CX>0))this.AL=this.timer.AN-(this.DW*this.Ae.FrameDelay
);if(!!this.timer&&(CX>0)){var Ab=(this.timer.AN-this.AL)|0;BL=(Ab/this.Ae.FrameDelay
)|0;if(Ab>=CX){BL=BL%this.Ae.NoOfFrames;this.AL=this.timer.AN-(Ab%CX);}}if(((BL!==
this.BD)&&!!this.H)&&((this.F&0x1)===0x1))this.H.Ac(this.M);this.BD=BL;if(!CX&&!
!this.timer){B.z9([this,this.C2],this.timer,0);this.timer=null;}},Bg:function(C){
var A;if(C===this.BH)return;this.BH=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},Fi:function(C){var A;if(this.CJ===C)return;this.CJ=C;this.BD=-1;if(!C&&
!!this.timer){B.z9([this,this.C2],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.Fd);B.zV([this,this.C2],this.timer,0);B.pe([this,this.C2]
,this);}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);},Fh:function(C){var
A;if(C===this.DP)return;this.DP=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},Hz:function(C){var A;if(C<0)C=0;if((C===this.DW)&&(this.BD===-1))return;this.
DW=C;if(!this.timer)this.BD=-1;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
M);},AW:function(C){var A;if(C===this.Ae)return;if(!!this.Ae&&this.Ae.FR)B.z9([this
,this.G4],this.Ae,0);this.Ae=C;this.BD=-1;if(!!C&&C.FR)B.zV([this,this.G4],C,0);
if(this.CJ){this.Fi(false);this.Fi(true);}if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.M);},AM:function(C){if(C)this.AR(0x1,0x0);else this.AR(0x0,0x1);},Iw:function(
){var A;if(!this.Ae)return AF;var Af=this.DP;var BX=this.Ae.FrameSize;var AA=this.
M;var width=AA[2]-AA[0];var height=AA[3]-AA[1];if(!BX[0]||!BX[1])return AF;var Aj=[
0,0,width,height];var U=Aj;if(((Af&0x40)===0x40)){var JN=((((Aj[2]-Aj[0])<<16)+((
BX[0]/2)|0))/BX[0])|0;var Hd=((((Aj[3]-Aj[1])<<16)+((BX[1]/2)|0))/BX[1])|0;var EI=
JN;if(Hd>EI)EI=Hd;U=B.abL(U,((BX[0]*EI)+32768)>>16);U=B.abI(U,((BX[1]*EI)+32768)>>
16);}else if(((Af&0x80)===0x80)){var JN=((((Aj[2]-Aj[0])<<16)+((BX[0]/2)|0))/BX[
0])|0;var Hd=((((Aj[3]-Aj[1])<<16)+((BX[1]/2)|0))/BX[1])|0;var EI=JN;if(Hd<EI)EI=
Hd;U=B.abL(U,((BX[0]*EI)+32768)>>16);U=B.abI(U,((BX[1]*EI)+32768)>>16);}else if(
!((Af&0x100)===0x100))U=B.abK(U,BX);if((U[2]-U[0])!==(Aj[2]-Aj[0])){if(((Af&0x4)===
0x4))U=B.abM(U,Aj[2]-(U[2]-U[0]));else if(((Af&0x2)===0x2))U=B.abM(U,(Aj[0]+(((Aj[
2]-Aj[0])/2)|0))-(((U[2]-U[0])/2)|0));}if((U[3]-U[1])!==(Aj[3]-Aj[1])){if(((Af&0x20
)===0x20))U=B.abO(U,Aj[3]-(U[3]-U[1]));else if(((Af&0x10)===0x10))U=B.abO(U,(Aj[
1]+(((Aj[3]-Aj[1])/2)|0))-(((U[3]-U[1])/2)|0));}U=B.abh(U,AA.slice(0,2));return U;
},_Init:function(aArg){B.Core.AY._Init.call(this,aArg);this.__proto__=D.AX;},_Mark:
function(E){var A;B.Core.AY._Mark.call(this,E);if((A=this.timer)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Ae)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Views::Image"};D.Text={A2:null,AP:B.jV,String:B.jV,Cx:null,Fa:B.wf,DP:0x12,BH:0xFFFFFFFF
,Ga:false,FJ:false,Im:false,B9:false,Dg:function(){if(!!this.Cx){this.Ju(this.Cx
);this.Cx=null;}},CK:function(AD,aClip,aOffset,Ay,aBlend){var A;if((this.AP===B.
jV)||!this.A2)return;var Af=this.DP;var font=this.A2;var Aj=B.abh(this.M,aOffset
);var Ai;var Ao;var An;var Ak;var Ny=this.BH;var B8=(((Ay+1)*255)>>8)+1;var Du=this.
AP.charCodeAt(0)||0;var X=B.abh(this.Iw(),aOffset);var KK=[Aj[0]-X[0],(Aj[1]-X[1
])-font.Ascent];if(Du<1)return;Ai=Ao=Ak=An=Ny;if(B8<256){Ai=(Ai&0x00FFFFFF)|((((((
Ai>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*B8)>>8)&
0xFF)<<24);An=(An&0x00FFFFFF)|((((((An>>24)&0xFF)*B8)>>8)&0xFF)<<24);Ak=(Ak&0x00FFFFFF
)|((((((Ak>>24)&0xFF)*B8)>>8)&0xFF)<<24);}if(((Af&0x80)===0x80)){if(this.ID())Af=(
Af&~0x80)|0x4;else Af=(Af&~0x80)|0x1;}if((Du===1)&&!((Af&0x40)===0x40)){AD.JT(aClip
,font,this.AP,2,(this.AP.charCodeAt(1)||0)-1,Aj,KK,0,0,Ai,Ao,An,Ak,true);return;
}var leading=font.Leading;var JM=(font.Ascent+font.Descent)+leading;var Nw=aClip[
1]-X[1];var Nx=aClip[3]-X[1];var Jk=X[2]-X[0];var FG=0;var G=1;var Ax=this.AP.charCodeAt(
1)||0;while(((FG+JM)<Nw)&&(Ax>0)){G=G+Ax;FG=FG+JM;Ax=this.AP.charCodeAt(G)||0;}while((
FG<Nx)&&(Ax>0)){var Fw=B.abe(KK,[0,FG]);var KV=0;var HX=false;if(((((Af&0x40)===
0x40)&&((this.AP.charCodeAt((G+Ax)-1)||0)!==0x0A))&&((this.AP.charCodeAt(G+1)||0
)!==0x0A))&&((this.AP.charCodeAt(G+Ax)||0)!==0x00))HX=true;if(HX&&!!(Af&0x6)){var
KU=G+Ax;var Kr=this.AP.indexOf(String.fromCharCode(0x20),G+1);var Ks=this.AP.indexOf(
String.fromCharCode(0xA0),G+1);if(((Kr<0)||(Kr>=KU))&&((Ks<0)||(Ks>=KU)))HX=false;
}if(HX)KV=Jk;else if(((Af&0x4)===0x4))Fw=[(Fw[0]-Jk)+font.Gv(this.AP,G+1,Ax-1),Fw[
1]];else if(((Af&0x2)===0x2))Fw=[(Fw[0]-((Jk/2)|0))+((font.Gv(this.AP,G+1,Ax-1)/
2)|0),Fw[1]];AD.JT(aClip,font,this.AP,G+1,Ax-1,Aj,Fw,KV,0,Ai,Ao,An,Ak,true);G=G+
Ax;FG=FG+JM;Ax=this.AP.charCodeAt(G)||0;}},N:function(C){var A;if(B.aaY(C,this.M
))return;var KT;KT=((A=this.M)[2]-A[0])!==(C[2]-C[0]);if(((KT&&this.Ga)&&this.B9
)&&!((this.F&0x2000)===0x2000)){this.AP=B.jV;this.B9=false;B.pe([this,this.E7],this
);}if(((this.FJ&&this.B9)&&!B.aaX([(A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-
C[1]]))&&!((this.F&0x2000)===0x2000)){this.AP=B.jV;this.B9=false;B.pe([this,this.
E7],this);}B.Core.AY.N.call(this,C);B.pe([this,this.JK],this);},Ju:function(aBidi
){if(!aBidi)return;B.rB(aBidi);},Nz:function(aSize){var bidi=null;bidi=B.v3(aSize
);return bidi;},JK:function(A0){},E7:function(A0){B.pe([this,this.H2],this);},H2:
function(A0){var A;if(this.B9)return;var width=(A=this.M)[2]-A[0];var height=(A=
this.M)[3]-A[1];var DL=-1;var font=this.A2;if((!!font&&!!!font.Ascent)&&!!!font.
Descent)font=null;if(this.Ga){DL=width;if(DL<0)DL=1;}if(!!this.Cx){this.Ju(this.
Cx);this.Cx=null;}this.B9=true;if((this.String!==B.jV)&&!!font){var length=this.
String.length;if(this.Im)this.Cx=this.Nz(length);this.AP=font.L3(this.String,0,DL
,length,this.Cx);if(!!this.Cx&&!this.Lm()){this.Ju(this.Cx);this.Cx=null;}}else this.
AP=B.jV;this.Fa=AH;if((this.FJ&&(this.AP!==B.jV))&&!!font){var Af=this.DP;var leading=
font.Leading;var Al=this.AP;var DM=this.ID();if(((Af&0x80)===0x80)){if(DM)Af=(Af&
~0x80)|0x4;else Af=(Af&~0x80)|0x1;}var H4=(font.Ascent+font.Descent)+leading;var
Du=Al.charCodeAt(0)||0;var E4=((height+leading)/H4)|0;var Jo=false;var HQ=false;
if(E4<=0)E4=1;if(Du>E4){var Dd=0;var Hb=0;var H5=Du-1;var Bp;var BM=Al.length;var
tmp=B.jV;if(!!(Af&0x110)&&!!(Af&0x28))Af&=~0x110;if(!!(Af&0x110))Af&=~0x28;if(((
Af&0x20)===0x20))Hb=Du-E4;else if(((Af&0x10)===0x10)||((Af&0x100)===0x100)){Hb=((
Du-E4)/2)|0;H5=(Hb+E4)-1;}else H5=E4-1;Jo=Hb>0;HQ=H5<(Du-1);for(Bp=1;Dd<Hb;Dd=Dd+
1)Bp=Bp+(Al.charCodeAt(Bp)||0);if(HQ)for(BM=Bp;Dd<H5;Dd=Dd+1)BM=BM+(Al.charCodeAt(
BM)||0);if(Jo){var BV=Al.charCodeAt(Bp)||0;tmp=(CG+B.abW(Al,Bp,BV))+CG;tmp=B.abQ(
tmp,0,(BV+2)&0xFFFF);Bp=Bp+BV;if((tmp.charCodeAt(BV)||0)===0x0A){tmp=B.abQ(tmp,BV
,0xFEFF);tmp=B.abQ(tmp,BV+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp
,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(Al
,Bp,BM-Bp);if(HQ&&(BM>=Bp)){var BV=Al.charCodeAt(BM)||0;var Cb=(CG+B.abW(Al,BM,BV
))+CG;Cb=B.abQ(Cb,0,(BV+2)&0xFFFF);Cb=B.abQ(Cb,1,0xFEFF);if((Cb.charCodeAt(BV)||
0)===0x0A){Cb=B.abQ(Cb,BV,0xFEFF);Cb=B.abQ(Cb,BV+1,0x0A);}if((Cb.charCodeAt(2)||
0)===0x0A){Cb=B.abQ(Cb,2,0xFEFF);Cb=B.abQ(Cb,1,0x0A);}else Cb=B.abQ(Cb,1,0xFEFF);
tmp=tmp+Cb;}Al=String.fromCharCode(E4&0xFFFF)+tmp;}var Dd=0;var HW=1;var JD=width;
Du=Al.charCodeAt(0)||0;for(;Dd<Du;Dd=Dd+1){var E_=Jo&&!Dd;var E$=HQ&&(Dd===(Du-1
));var CS=false;var CT=false;var Gm=DM;if((DM&&E_)&&!E$){E_=false;E$=true;}else if((
DM&&E$)&&!E_){E$=false;E_=true;}var He=HW+1;var BV=Al.charCodeAt(HW)||0;var Bp=He;
var BM=(He+BV)-2;var Jz=-1;var JA=-1;if(!this.Ga&&(font.Gv(Al,He,BV-1)>JD)){var Fq=
Af;if(((Fq&0x2)===0x2)&&!!(Fq&0x5))Fq&=~0x2;if(((Fq&0x2)===0x2))Fq&=~0x5;if(((Fq&
0x4)===0x4))CS=true;else if(((Fq&0x2)===0x2)){CS=true;CT=true;}else CT=true;}if((
Al.charCodeAt(Bp)||0)===0x0A)Bp=Bp+1;if((Al.charCodeAt(BM)||0)===0x0A)BM=BM-1;while(
CS&&((Al.charCodeAt(Bp)||0)===0xFEFF))Bp=Bp+1;while(CT&&((Al.charCodeAt(BM)||0)===
0xFEFF))BM=BM-1;CS=CS&&!E$;CT=CT&&!E_;while((((CS||CT)||E_)||E$)&&(Bp<BM)){if((CS&&(
Gm||!CT))||E_){if(Jz>0)Al=B.abQ(Al,Jz,0xFEFF);Al=B.abQ(Al,Bp,0x2026);Jz=Bp;Bp=Bp+
1;Gm=!Gm;E_=false;if(font.Gv(Al,He,BV-1)<=JD){CS=false;CT=false;}else CS=CS||!CT;
}if((CT&&(!Gm||!CS))||E$){if(JA>0)Al=B.abQ(Al,JA,0xFEFF);Al=B.abQ(Al,BM,0x2026);
JA=BM;BM=BM-1;Gm=!Gm;E$=false;if(font.Gv(Al,He,BV-1)<=JD){CS=false;CT=false;}else
CT=CT||!CS;}}HW=HW+BV;}this.Fa=[font.JW(Al),((Al.charCodeAt(0)||0)*H4)-leading];
this.AP=Al;}if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);B.pe([this,this.
JK],this);},LB:function(C){if(C===this.Im)return;this.Im=C;this.AP=B.jV;this.B9=
false;B.pe([this,this.E7],this);},LA:function(C){if(C===this.FJ)return;this.FJ=C;
if(this.Ga||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.AP=B.jV;this.B9=
false;B.pe([this,this.E7],this);},IZ:function(C){if(C===this.Ga)return;this.Ga=C;
if(this.B9){this.AP=B.jV;this.B9=false;B.pe([this,this.E7],this);}if(C||this.FJ)
this.F=this.F&~0x100;else this.F=this.F|0x100;},Fh:function(C){var A;if(C===this.
DP)return;this.DP=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.M);if(this.
FJ){this.AP=B.jV;this.B9=false;B.pe([this,this.E7],this);}if(this.B9)B.pe([this,
this.JK],this);},Ct:function(C){if(C===this.String)return;this.String=C;this.AP=
B.jV;this.B9=false;B.pe([this,this.E7],this);},FV:function(C){if(C===this.A2)return;
this.A2=C;this.AP=B.jV;this.B9=false;B.pe([this,this.E7],this);},Bg:function(C){
var A;if(C===this.BH)return;this.BH=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.M);},ID:function(){if(!this.B9)this.H2(this);if(!this.Cx)return false;var result=
false;var bidi=this.Cx;result=B.v2(bidi);return result;},Lm:function(){if(!this.
B9)this.H2(this);if(!this.Cx)return false;var result=false;var bidi=this.Cx;result=
B.zZ(bidi);return result;},Iw:function(){var A;if((this.String===B.jV)||!this.A2
)return AF;if(!this.B9)this.H2(this);if(this.AP===B.jV)return AF;var leading=this.
A2.Leading;var H4=(this.A2.Ascent+this.A2.Descent)+this.A2.Leading;if(B.aaX(this.
Fa,AH))this.Fa=[this.A2.JW(this.AP),this.Fa[1]];this.Fa=[this.Fa[0],((this.AP.charCodeAt(
0)||0)*H4)-leading];var Af=this.DP;var AA=this.M;var width=AA[2]-AA[0];var height=
AA[3]-AA[1];var Aj=[0,0,width,height];var U=[].concat(Aj.slice(0,2),B.abf(Aj.slice(
0,2),this.Fa));if(((Af&0x80)===0x80)){if(this.ID())Af=(Af&~0x80)|0x4;else Af=(Af&
~0x80)|0x1;}if(((Af&0x40)===0x40)){var DL;DL=width;if(DL<0)DL=0;if(DL>(U[2]-U[0]
))U=B.abL(U,DL);}if((!!(Af&0x110)&&!!(Af&0x28))&&((U[3]-U[1])>(Aj[3]-Aj[1])))Af&=
~0x110;if(!!(Af&0x110))Af&=~0x28;if((((Af&0x2)===0x2)&&!!(Af&0x5))&&((U[2]-U[0])>(
Aj[2]-Aj[0])))Af&=~0x2;if(((Af&0x2)===0x2))Af&=~0x5;if((U[2]-U[0])!==(Aj[2]-Aj[0
])){if(((Af&0x4)===0x4))U=B.abM(U,Aj[2]-(U[2]-U[0]));else if(((Af&0x2)===0x2))U=
B.abM(U,(Aj[0]+(((Aj[2]-Aj[0])/2)|0))-(((U[2]-U[0])/2)|0));}if((U[3]-U[1])!==(Aj[
3]-Aj[1])){if(((Af&0x20)===0x20))U=B.abO(U,Aj[3]-(U[3]-U[1]));else if(((Af&0x100
)===0x100))U=B.abO(U,((Aj[1]+(((Aj[3]-Aj[1])/2)|0))-(((U[3]-U[1])/2)|0))+(((this.
A2.Descent-this.A2.Ascent)/2)|0));else if(((Af&0x10)===0x10))U=B.abO(U,(Aj[1]+(((
Aj[3]-Aj[1])/2)|0))-(((U[3]-U[1])/2)|0));}U=B.abh(U,AA.slice(0,2));return U;},_Init:
function(aArg){B.Core.AY._Init.call(this,aArg);this.__proto__=D.Text;},_Done:function(
){this.Dg();this.__proto__=B.Core.AY;B.Core.AY._Done.call(this);},_Mark:function(
E){var A;B.Core.AY._Mark.call(this,E);if((A=this.A2)&&(A._cycle!=E))A._Mark(A._cycle=
E);},_className:"Views::Text"};D.On={K3:0x1,K2:0x2,K4:0x4,K7:0x8,K6:0x10,K5:0x20
,ON:0x40,OO:0x80,OQ:0x100};D.OR={K3:0x1,K2:0x2,K4:0x4,K7:0x8,K6:0x10,K5:0x20,N3:
0x40,N2:0x80,N8:0x100};D.Ox={Ow:0,OL:1,OJ:2,OK:3};
D._Init=function(){D.ES.__proto__=B.Core.AY;D.AU.__proto__=B.Core.AY;D.Iv.__proto__=
B.Core.AY;D.AX.__proto__=B.Core.AY;D.Text.__proto__=B.Core.AY;};D._ReInit=function(
){};D.Cv=function(E){};return D;})();

/* Embedded Wizard */