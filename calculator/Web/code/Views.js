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
acf=(function(){var B=EmWiApp;var E={};
var AV=[0,0];var Bf=[0,0,0,0];var DM="\uFEFF";
E.Cc={Nh:0,Ng:0,Mm:0xFFFFFFFF,Mn:0xFFFFFFFF,Mp:0xFFFFFFFF,Mo:0xFFFFFFFF,En:0,Ct:0xFFFFFFFF
,D3:function(Bc,aClip,aOffset,A8,aBlend){var A;var AH=this.Mo;var AQ=this.Mp;var
AK=this.Mm;var AP=this.Mn;var A7=this.Ct;var FZ=this.En+this.Ng;var KS=this.En+this.
Nh;var KP=this.En;var KO=this.En;aBlend=aBlend&&((this.F&0x2)===0x2);A8=A8+1;if((((
AH===AQ)&&(AK===AP))&&(AH===AK))&&(AH===0xFFFFFFFF))AH=AQ=AK=AP=A7;else if(A7!==
0xFFFFFFFF){AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*(((A7>>24)&0xFF)+1))>>8)&0xFF
)<<24);AH=(AH&0xFFFFFF00)|((((AH&0xFF)*((A7&0xFF)+1))>>8)&0xFF);AH=(AH&0xFFFF00FF
)|((((((AH>>8)&0xFF)*(((A7>>8)&0xFF)+1))>>8)&0xFF)<<8);AH=(AH&0xFF00FFFF)|((((((
AH>>16)&0xFF)*(((A7>>16)&0xFF)+1))>>8)&0xFF)<<16);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24
)&0xFF)*(((A7>>24)&0xFF)+1))>>8)&0xFF)<<24);AQ=(AQ&0xFFFFFF00)|((((AQ&0xFF)*((A7&
0xFF)+1))>>8)&0xFF);AQ=(AQ&0xFFFF00FF)|((((((AQ>>8)&0xFF)*(((A7>>8)&0xFF)+1))>>8
)&0xFF)<<8);AQ=(AQ&0xFF00FFFF)|((((((AQ>>16)&0xFF)*(((A7>>16)&0xFF)+1))>>8)&0xFF
)<<16);AK=(AK&0x00FFFFFF)|((((((AK>>24)&0xFF)*(((A7>>24)&0xFF)+1))>>8)&0xFF)<<24
);AK=(AK&0xFFFFFF00)|((((AK&0xFF)*((A7&0xFF)+1))>>8)&0xFF);AK=(AK&0xFFFF00FF)|((((((
AK>>8)&0xFF)*(((A7>>8)&0xFF)+1))>>8)&0xFF)<<8);AK=(AK&0xFF00FFFF)|((((((AK>>16)&
0xFF)*(((A7>>16)&0xFF)+1))>>8)&0xFF)<<16);AP=(AP&0x00FFFFFF)|((((((AP>>24)&0xFF)
*(((A7>>24)&0xFF)+1))>>8)&0xFF)<<24);AP=(AP&0xFFFFFF00)|((((AP&0xFF)*((A7&0xFF)+
1))>>8)&0xFF);AP=(AP&0xFFFF00FF)|((((((AP>>8)&0xFF)*(((A7>>8)&0xFF)+1))>>8)&0xFF
)<<8);AP=(AP&0xFF00FFFF)|((((((AP>>16)&0xFF)*(((A7>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(A8<256){AH=(AH&0x00FFFFFF)|((((A8*((AH>>24)&0xFF))>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF
)|((((A8*((AQ>>24)&0xFF))>>8)&0xFF)<<24);AK=(AK&0x00FFFFFF)|((((A8*((AK>>24)&0xFF
))>>8)&0xFF)<<24);AP=(AP&0x00FFFFFF)|((((A8*((AP>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!FZ||!!KS)||!!KP)||!!KO)Bc.QJ(aClip,B.abh(this.M,aOffset),FZ,KS,KP,KO,AH,AQ,AP,
AK,aBlend);else Bc.MM(aClip,B.abh(this.M,aOffset),AH,AQ,AP,AK,aBlend);},RE:function(
C){var A;if(C<0)C=0;if(C===this.Nh)return;this.Nh=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Ao(this.M);},RD:function(C){var A;if(C<0)C=0;if(C===this.Ng)return;this.
Ng=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},Na:function(C){var A;
if(C===this.Mm)return;this.Mm=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.
M);},Nb:function(C){var A;if(C===this.Mn)return;this.Mn=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Ao(this.M);},Q3:function(C){var A;if(C===this.Mp)return;this.
Mp=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},Q2:function(C){var A;
if(C===this.Mo)return;this.Mo=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.
M);},Du:function(C){var A;if(C<0)C=0;if(C===this.En)return;this.En=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ao(this.M);},Aq:function(C){var A;if(C===this.Ct)return;
this.Ct=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},Am:function(C){if(
C)this.AC(0x1,0x0);else this.AC(0x0,0x1);},_Init:function(aArg){B.Core.Bv._Init.
call(this,aArg);this.__proto__=E.Cc;},_className:"Views::Rectangle"};E.A4={En:0,
Width:1,Ct:0xFFFFFFFF,D3:function(Bc,aClip,aOffset,A8,aBlend){var A;var AH;var AQ;
var AK;var AP;var A7=this.Ct;var FZ=this.En;var KS=this.En;var KP=this.En;var KO=
this.En;aBlend=aBlend&&((this.F&0x2)===0x2);A8=A8+1;AH=AQ=AK=AP=A7;if(A8<256){AH=(
AH&0x00FFFFFF)|((((A8*((AH>>24)&0xFF))>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((A8*((
AQ>>24)&0xFF))>>8)&0xFF)<<24);AK=(AK&0x00FFFFFF)|((((A8*((AK>>24)&0xFF))>>8)&0xFF
)<<24);AP=(AP&0x00FFFFFF)|((((A8*((AP>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!FZ||!!KS
)||!!KP)||!!KO)Bc.QF(aClip,B.abh(this.M,aOffset),this.Width,FZ,KS,KP,KO,AH,AQ,AP
,AK,aBlend);else Bc.QD(aClip,B.abh(this.M,aOffset),this.Width,AH,AQ,AP,AK,aBlend
);},Du:function(C){var A;if(C<0)C=0;if(C===this.En)return;this.En=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ao(this.M);},IO:function(C){var A;if(C<0)C=0;if(C===this.
Width)return;this.Width=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},
Aq:function(C){var A;if(C===this.Ct)return;this.Ct=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Ao(this.M);},Am:function(C){if(C)this.AC(0x1,0x0);else this.AC(0x0,0x1
);},_Init:function(aArg){B.Core.Bv._Init.call(this,aArg);this.__proto__=E.A4;},_className:
"Views::Border"};E.Iy={timer:null,Af:null,Cw:-1,Ct:0xFFFFFFFF,Jm:0x1F,Gf:0,Bg:0,
HQ:B.wf,Ei:false,D3:function(Bc,aClip,aOffset,A8,aBlend){var A;var CL=this.Gf;if(
this.Cw>=0)CL=this.Cw;if(!this.Af||(CL>=this.Af.NoOfFrames))return;this.Af.Update(
);var AH;var AQ;var AP;var AK;var A7=this.Ct;var Df=(((A8+1)*255)>>8)+1;var CU=this.
Jm;var H=B.abh(this.M,aOffset);var Ma=B.abe([H[2]-H[0],H[3]-H[1]],this.HQ);aBlend=
aBlend&&((this.F&0x2)===0x2);AH=AQ=AK=AP=A7;if(Df<256){AH=(AH&0x00FFFFFF)|((((((
AH>>24)&0xFF)*Df)>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>24)&0xFF)*Df)>>8)&
0xFF)<<24);AP=(AP&0x00FFFFFF)|((((((AP>>24)&0xFF)*Df)>>8)&0xFF)<<24);AK=(AK&0x00FFFFFF
)|((((((AK>>24)&0xFF)*Df)>>8)&0xFF)<<24);}if(((this.HQ[0]>0)&&(Ma[0]>0))&&!((CU&
0x5)===0x5)){var Da=((this.Af.FrameSize[0]/3)|0)-Ma[0];if(((CU&0x1)===0x1)){if(aClip[
2]>H[2])aClip=B.abN(aClip,H[2]);if(Da>0)H=B.abN(H,H[2]+Da);CU=CU|0x4;}else if(((
CU&0x4)===0x4)){if(aClip[0]<H[0])aClip=[].concat(H[0],aClip.slice(1,4));if(Da>0)
H=[].concat(H[0]-Da,H.slice(1,4));CU=CU|0x1;}else{if(aClip[0]<H[0])aClip=[].concat(
H[0],aClip.slice(1,4));if(aClip[2]>H[2])aClip=B.abN(aClip,H[2]);if(Da>0){H=[].concat(
H[0]-((Da/2)|0),H.slice(1,4));H=B.abN(H,(H[2]+Da)-((Da/2)|0));}CU=CU|0x5;}}if(((
this.HQ[1]>0)&&(Ma[1]>0))&&!((CU&0xA)===0xA)){var Da=((this.Af.FrameSize[1]/3)|0
)-Ma[1];if(((CU&0x2)===0x2)){if(aClip[3]>H[3])aClip=[].concat(aClip.slice(0,3),H[
3]);if(Da>0)H=[].concat(H.slice(0,3),H[3]+Da);CU=CU|0x8;}else if(((CU&0x8)===0x8
)){if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(Da>0)H=B.abP(H,H[1]-Da);CU=CU|0x2;
}else{if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(aClip[3]>H[3])aClip=[].concat(
aClip.slice(0,3),H[3]);if(Da>0){H=B.abP(H,H[1]-((Da/2)|0));H=[].concat(H.slice(0
,3),(H[3]+Da)-((Da/2)|0));}CU=CU|0xA;}}Bc.QC(aClip,this.Af,CL,H,CU,AH,AQ,AP,AK,aBlend
);},KB:function(X){var A;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},DD:
function(X){var A;var CL=this.Cw;var Ex=0;if(!!this.Af)Ex=this.Af.NoOfFrames*this.
Af.FrameDelay;if((!!this.timer&&(this.Cw<0))&&(Ex>0))this.Bg=this.timer.AA-(this.
Gf*this.Af.FrameDelay);if(!!this.timer&&(Ex>0)){var As=(this.timer.AA-this.Bg)|0;
CL=(As/this.Af.FrameDelay)|0;if(As>=Ex){CL=CL%this.Af.NoOfFrames;this.Bg=this.timer.
AA-(As%Ex);}}if(((CL!==this.Cw)&&!!this.I)&&((this.F&0x1)===0x1))this.I.Ao(this.
M);this.Cw=CL;if(!Ex&&!!this.timer){B.z9([this,this.DD],this.timer,0);this.timer=
null;}},Aq:function(C){var A;if(C===this.Ct)return;this.Ct=C;if(!!this.I&&((this.
F&0x1)===0x1))this.I.Ao(this.M);},E4:function(C){var A;if(this.Ei===C)return;this.
Ei=C;this.Cw=-1;if(!C&&!!this.timer){B.z9([this,this.DD],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.acj.G9);B.zV([this,this.DD],this.timer
,0);B.pe([this,this.DD],this);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.
M);},OL:function(C){var A;if(C===this.Jm)return;this.Jm=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Ao(this.M);},D6:function(C){var A;if(C<0)C=0;if((C===this.Gf)&&(
this.Cw===-1))return;this.Gf=C;if(!this.timer)this.Cw=-1;if(!!this.I&&((this.F&0x1
)===0x1))this.I.Ao(this.M);},Bi:function(C){var A;if(C===this.Af)return;if(!!this.
Af&&this.Af.IF)B.z9([this,this.KB],this.Af,0);this.Af=C;this.Cw=-1;if(!!C&&C.IF)
B.zV([this,this.KB],C,0);if(this.Ei){this.E4(false);this.E4(true);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ao(this.M);},Am:function(C){if(C)this.AC(0x1,0x0);else
this.AC(0x0,0x1);},OS:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0
];if(B.aaX(C,this.HQ))return;this.HQ=C;if((!!this.I&&((this.F&0x1)===0x1))&&!((this.
Jm&0xF)===0xF))this.I.Ao(this.M);},_Init:function(aArg){B.Core.Bv._Init.call(this
,aArg);this.__proto__=E.Iy;},_Mark:function(D){var A;B.Core.Bv._Mark.call(this,D
);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Af)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};E.AB={timer:null,Af:null,Bg:
0,Cw:0,Ct:0xFFFFFFFF,F_:0x12,Gf:0,Ei:false,D3:function(Bc,aClip,aOffset,A8,aBlend
){var A;var CL=this.Gf;if(this.Cw>=0)CL=this.Cw;if(!this.Af||(CL>=this.Af.NoOfFrames
))return;this.Af.Update();var Q=this.MP();var CD=this.Af.FrameSize;if((Q[0]>=Q[2
])||(Q[1]>=Q[3]))return;var AH;var AQ;var AP;var AK;var A7=this.Ct;var Df=(((A8+
1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);AH=AQ=AK=AP=A7;if(Df<256){AH=(
AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*Df)>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF)|((((((AQ>>
24)&0xFF)*Df)>>8)&0xFF)<<24);AP=(AP&0x00FFFFFF)|((((((AP>>24)&0xFF)*Df)>>8)&0xFF
)<<24);AK=(AK&0x00FFFFFF)|((((((AK>>24)&0xFF)*Df)>>8)&0xFF)<<24);}if(B.aaX([Q[2]-
Q[0],Q[3]-Q[1]],CD))Bc.Qz(aClip,this.Af,CL,B.abh(this.M,aOffset),B.abe(this.M.slice(
0,2),Q.slice(0,2)),AH,AQ,AP,AK,aBlend);else Bc.Sb(aClip,this.Af,CL,B.abh(Q,aOffset
),[].concat(AV,CD),AH,AQ,AP,AK,aBlend,true);},KB:function(X){var A;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ao(this.M);},DD:function(X){var A;var CL=this.Cw;var Ex=
0;if(!!this.Af)Ex=this.Af.NoOfFrames*this.Af.FrameDelay;if((!!this.timer&&(this.
Cw<0))&&(Ex>0))this.Bg=this.timer.AA-(this.Gf*this.Af.FrameDelay);if(!!this.timer&&(
Ex>0)){var As=(this.timer.AA-this.Bg)|0;CL=(As/this.Af.FrameDelay)|0;if(As>=Ex){
CL=CL%this.Af.NoOfFrames;this.Bg=this.timer.AA-(As%Ex);}}if(((CL!==this.Cw)&&!!this.
I)&&((this.F&0x1)===0x1))this.I.Ao(this.M);this.Cw=CL;if(!Ex&&!!this.timer){B.z9([
this,this.DD],this.timer,0);this.timer=null;}},Aq:function(C){var A;if(C===this.
Ct)return;this.Ct=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},E4:function(
C){var A;if(this.Ei===C)return;this.Ei=C;this.Cw=-1;if(!C&&!!this.timer){B.z9([this
,this.DD],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.
G9);B.zV([this,this.DD],this.timer,0);B.pe([this,this.DD],this);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ao(this.M);},Fz:function(C){var A;if(C===this.F_)return;
this.F_=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},D6:function(C){var
A;if(C<0)C=0;if((C===this.Gf)&&(this.Cw===-1))return;this.Gf=C;if(!this.timer)this.
Cw=-1;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},Bi:function(C){var A;
if(C===this.Af)return;if(!!this.Af&&this.Af.IF)B.z9([this,this.KB],this.Af,0);this.
Af=C;this.Cw=-1;if(!!C&&C.IF)B.zV([this,this.KB],C,0);if(this.Ei){this.E4(false);
this.E4(true);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},Am:function(
C){if(C)this.AC(0x1,0x0);else this.AC(0x0,0x1);},MP:function(){var A;if(!this.Af
)return Bf;var Ay=this.F_;var CD=this.Af.FrameSize;var AG=this.M;var width=AG[2]-
AG[0];var height=AG[3]-AG[1];if(!CD[0]||!CD[1])return Bf;var AJ=[0,0,width,height
];var Al=AJ;if(((Ay&0x40)===0x40)){var Oo=((((AJ[2]-AJ[0])<<16)+((CD[0]/2)|0))/CD[
0])|0;var KT=((((AJ[3]-AJ[1])<<16)+((CD[1]/2)|0))/CD[1])|0;var G5=Oo;if(KT>G5)G5=
KT;Al=B.abL(Al,((CD[0]*G5)+32768)>>16);Al=B.abI(Al,((CD[1]*G5)+32768)>>16);}else
if(((Ay&0x80)===0x80)){var Oo=((((AJ[2]-AJ[0])<<16)+((CD[0]/2)|0))/CD[0])|0;var KT=((((
AJ[3]-AJ[1])<<16)+((CD[1]/2)|0))/CD[1])|0;var G5=Oo;if(KT<G5)G5=KT;Al=B.abL(Al,((
CD[0]*G5)+32768)>>16);Al=B.abI(Al,((CD[1]*G5)+32768)>>16);}else if(!((Ay&0x100)===
0x100))Al=B.abK(Al,CD);if((Al[2]-Al[0])!==(AJ[2]-AJ[0])){if(((Ay&0x4)===0x4))Al=
B.abM(Al,AJ[2]-(Al[2]-Al[0]));else if(((Ay&0x2)===0x2))Al=B.abM(Al,(AJ[0]+(((AJ[
2]-AJ[0])/2)|0))-(((Al[2]-Al[0])/2)|0));}if((Al[3]-Al[1])!==(AJ[3]-AJ[1])){if(((
Ay&0x20)===0x20))Al=B.abO(Al,AJ[3]-(Al[3]-Al[1]));else if(((Ay&0x10)===0x10))Al=
B.abO(Al,(AJ[1]+(((AJ[3]-AJ[1])/2)|0))-(((Al[3]-Al[1])/2)|0));}Al=B.abh(Al,AG.slice(
0,2));return Al;},_Init:function(aArg){B.Core.Bv._Init.call(this,aArg);this.__proto__=
E.AB;},_Mark:function(D){var A;B.Core.Bv._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Image"};E.Text={B0:null,BA:B.jV,String:B.jV,DS:null,HJ:B.
wf,F_:0x12,Ct:0xFFFFFFFF,EM:255,IW:false,Iv:false,Mw:false,Dg:false,E0:function(
){if(!!this.DS){this.NX(this.DS);this.DS=null;}},D3:function(Bc,aClip,aOffset,A8
,aBlend){var A;if((this.BA===B.jV)||!this.B0)return;var Ay=this.F_;var font=this.
B0;var AJ=B.abh(this.M,aOffset);var AH;var AQ;var AP;var AK;var TW=this.Ct;var Df=(((
A8+1)*this.EM)>>8)+1;var Fo=this.BA.charCodeAt(0)||0;var Q=B.abh(this.MP(),aOffset
);var Ci=[AJ[0]-Q[0],(AJ[1]-Q[1])-font.Ascent];if(Fo<1)return;AH=AQ=AK=AP=TW;if(
Df<256){AH=(AH&0x00FFFFFF)|((((((AH>>24)&0xFF)*Df)>>8)&0xFF)<<24);AQ=(AQ&0x00FFFFFF
)|((((((AQ>>24)&0xFF)*Df)>>8)&0xFF)<<24);AP=(AP&0x00FFFFFF)|((((((AP>>24)&0xFF)*
Df)>>8)&0xFF)<<24);AK=(AK&0x00FFFFFF)|((((((AK>>24)&0xFF)*Df)>>8)&0xFF)<<24);}if(((
Ay&0x80)===0x80)){if(this.MW())Ay=(Ay&~0x80)|0x4;else Ay=(Ay&~0x80)|0x1;}if((Fo===
1)&&!((Ay&0x40)===0x40)){Bc.Oz(aClip,font,this.BA,2,(this.BA.charCodeAt(1)||0)-1
,AJ,Ci,0,0,AH,AQ,AP,AK,true);return;}var leading=font.Leading;var On=(font.Ascent+
font.Descent)+leading;var TT=aClip[1]-Q[1];var TU=aClip[3]-Q[1];var NL=Q[2]-Q[0];
var Ft=0;var G=1;var A7=this.BA.charCodeAt(1)||0;while(((Ft+On)<TT)&&(A7>0)){G=G+
A7;Ft=Ft+On;A7=this.BA.charCodeAt(G)||0;}while((Ft<TU)&&(A7>0)){var If=B.abe(Ci,[
0,Ft]);var P_=0;var LX=false;if(((((Ay&0x40)===0x40)&&((this.BA.charCodeAt((G+A7
)-1)||0)!==0x0A))&&((this.BA.charCodeAt(G+1)||0)!==0x0A))&&((this.BA.charCodeAt(
G+A7)||0)!==0x00))LX=true;if(LX&&!!(Ay&0x6)){var P9=G+A7;var Pq=this.BA.indexOf(
String.fromCharCode(0x20),G+1);var Pr=this.BA.indexOf(String.fromCharCode(0xA0),
G+1);if(((Pq<0)||(Pq>=P9))&&((Pr<0)||(Pr>=P9)))LX=false;}if(LX)P_=NL;else if(((Ay&
0x4)===0x4))If=[(If[0]-NL)+font.JA(this.BA,G+1,A7-1),If[1]];else if(((Ay&0x2)===
0x2))If=[(If[0]-((NL/2)|0))+((font.JA(this.BA,G+1,A7-1)/2)|0),If[1]];Bc.Oz(aClip
,font,this.BA,G+1,A7-1,AJ,If,P_,0,AH,AQ,AP,AK,true);G=G+A7;Ft=Ft+On;A7=this.BA.charCodeAt(
G)||0;}},N:function(C){var A;if(B.aaY(C,this.M))return;var P8;P8=((A=this.M)[2]-
A[0])!==(C[2]-C[0]);if(((P8&&this.IW)&&this.Dg)&&!((this.F&0x2000)===0x2000)){this.
BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);}if(((this.Iv&&this.Dg)&&!B.aaX([(
A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000
)){this.BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);}B.Core.Bv.N.call(this,C
);B.pe([this,this.Oi],this);},NX:function(aBidi){if(!aBidi)return;B.rB(aBidi);},
TX:function(aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},Oi:function(X){}
,HA:function(X){B.pe([this,this.L5],this);},L5:function(X){var A;if(this.Dg)return;
var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3]-A[1];var FX=-1;var font=this.
B0;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.IW){FX=width;if(
FX<0)FX=1;}if(!!this.DS){this.NX(this.DS);this.DS=null;}this.Dg=true;if((this.String
!==B.jV)&&!!font){var length=this.String.length;if(this.Mw)this.DS=this.TX(length
);this.BA=font.R7(this.String,0,FX,length,this.DS);if(!!this.DS&&!this.QQ()){this.
NX(this.DS);this.DS=null;}}else this.BA=B.jV;this.HJ=AV;if((this.Iv&&(this.BA!==
B.jV))&&!!font){var Ay=this.F_;var leading=font.Leading;var AL=this.BA;var FZ=this.
MW();if(((Ay&0x80)===0x80)){if(FZ)Ay=(Ay&~0x80)|0x4;else Ay=(Ay&~0x80)|0x1;}var L9=(
font.Ascent+font.Descent)+leading;var Fo=AL.charCodeAt(0)||0;var Hw=((height+leading
)/L9)|0;var NQ=false;var LN=false;if(Hw<=0)Hw=1;if(Fo>Hw){var EW=0;var KR=0;var L_=
Fo-1;var Ce;var CM=AL.length;var tmp=B.jV;if(!!(Ay&0x110)&&!!(Ay&0x28))Ay&=~0x110;
if(!!(Ay&0x110))Ay&=~0x28;if(((Ay&0x20)===0x20))KR=Fo-Hw;else if(((Ay&0x10)===0x10
)||((Ay&0x100)===0x100)){KR=((Fo-Hw)/2)|0;L_=(KR+Hw)-1;}else L_=Hw-1;NQ=KR>0;LN=
L_<(Fo-1);for(Ce=1;EW<KR;EW=EW+1)Ce=Ce+(AL.charCodeAt(Ce)||0);if(LN)for(CM=Ce;EW<
L_;EW=EW+1)CM=CM+(AL.charCodeAt(CM)||0);if(NQ){var C3=AL.charCodeAt(Ce)||0;tmp=(
DM+B.abW(AL,Ce,C3))+DM;tmp=B.abQ(tmp,0,(C3+2)&0xFFFF);Ce=Ce+C3;if((tmp.charCodeAt(
C3)||0)===0x0A){tmp=B.abQ(tmp,C3,0xFEFF);tmp=B.abQ(tmp,C3+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(AL,Ce,CM-Ce);if(LN&&(CM>=Ce)){var C3=AL.charCodeAt(CM)||
0;var Dn=(DM+B.abW(AL,CM,C3))+DM;Dn=B.abQ(Dn,0,(C3+2)&0xFFFF);Dn=B.abQ(Dn,1,0xFEFF
);if((Dn.charCodeAt(C3)||0)===0x0A){Dn=B.abQ(Dn,C3,0xFEFF);Dn=B.abQ(Dn,C3+1,0x0A
);}if((Dn.charCodeAt(2)||0)===0x0A){Dn=B.abQ(Dn,2,0xFEFF);Dn=B.abQ(Dn,1,0x0A);}else
Dn=B.abQ(Dn,1,0xFEFF);tmp=tmp+Dn;}AL=String.fromCharCode(Hw&0xFFFF)+tmp;}var EW=
0;var Dz=1;var N$=width;Fo=AL.charCodeAt(0)||0;for(;EW<Fo;EW=EW+1){var HE=NQ&&!EW;
var HF=LN&&(EW===(Fo-1));var Er=false;var Es=false;var Jc=FZ;if((FZ&&HE)&&!HF){HE=
false;HF=true;}else if((FZ&&HF)&&!HE){HF=false;HE=true;}var KU=Dz+1;var C3=AL.charCodeAt(
Dz)||0;var Ce=KU;var CM=(KU+C3)-2;var N1=-1;var N2=-1;if(!this.IW&&(font.JA(AL,KU
,C3-1)>N$)){var H9=Ay;if(((H9&0x2)===0x2)&&!!(H9&0x5))H9&=~0x2;if(((H9&0x2)===0x2
))H9&=~0x5;if(((H9&0x4)===0x4))Er=true;else if(((H9&0x2)===0x2)){Er=true;Es=true;
}else Es=true;}if((AL.charCodeAt(Ce)||0)===0x0A)Ce=Ce+1;if((AL.charCodeAt(CM)||0
)===0x0A)CM=CM-1;while(Er&&((AL.charCodeAt(Ce)||0)===0xFEFF))Ce=Ce+1;while(Es&&((
AL.charCodeAt(CM)||0)===0xFEFF))CM=CM-1;Er=Er&&!HF;Es=Es&&!HE;while((((Er||Es)||
HE)||HF)&&(Ce<CM)){if((Er&&(Jc||!Es))||HE){if(N1>0)AL=B.abQ(AL,N1,0xFEFF);AL=B.abQ(
AL,Ce,0x2026);N1=Ce;Ce=Ce+1;Jc=!Jc;HE=false;if(font.JA(AL,KU,C3-1)<=N$){Er=false;
Es=false;}else Er=Er||!Es;}if((Es&&(!Jc||!Er))||HF){if(N2>0)AL=B.abQ(AL,N2,0xFEFF
);AL=B.abQ(AL,CM,0x2026);N2=CM;CM=CM-1;Jc=!Jc;HF=false;if(font.JA(AL,KU,C3-1)<=N$
){Er=false;Es=false;}else Es=Es||!Er;}}Dz=Dz+C3;}this.HJ=[font.OB(AL),((AL.charCodeAt(
0)||0)*L9)-leading];this.BA=AL;}if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.
M);B.pe([this,this.Oi],this);},Q6:function(C){if(C===this.Mw)return;this.Mw=C;this.
BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);},OM:function(C){if(C===this.Iv)
return;this.Iv=C;if(this.IW||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);},Nd:function(C){if(C===this.IW)
return;this.IW=C;if(this.Dg){this.BA=B.jV;this.Dg=false;B.pe([this,this.HA],this
);}if(C||this.Iv)this.F=this.F&~0x100;else this.F=this.F|0x100;},Fz:function(C){
var A;if(C===this.F_)return;this.F_=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(
this.M);if(this.Iv){this.BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);}if(this.
Dg)B.pe([this,this.Oi],this);},BK:function(C){if(C===this.String)return;this.String=
C;this.BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);},FA:function(C){if(C===this.
B0)return;this.B0=C;this.BA=B.jV;this.Dg=false;B.pe([this,this.HA],this);},Aq:function(
C){var A;if(C===this.Ct)return;this.Ct=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Ao(this.M);},FC:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.EM)return;
this.EM=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.M);},MW:function(){if(
!this.Dg)this.L5(this);if(!this.DS)return false;var result=false;var bidi=this.DS;
result=B.v2(bidi);return result;},QQ:function(){if(!this.Dg)this.L5(this);if(!this.
DS)return false;var result=false;var bidi=this.DS;result=B.zZ(bidi);return result;
},MP:function(){var A;if((this.String===B.jV)||!this.B0)return Bf;if(!this.Dg)this.
L5(this);if(this.BA===B.jV)return Bf;var leading=this.B0.Leading;var L9=(this.B0.
Ascent+this.B0.Descent)+this.B0.Leading;if(B.aaX(this.HJ,AV))this.HJ=[this.B0.OB(
this.BA),this.HJ[1]];this.HJ=[this.HJ[0],((this.BA.charCodeAt(0)||0)*L9)-leading
];var Ay=this.F_;var AG=this.M;var width=AG[2]-AG[0];var height=AG[3]-AG[1];var AJ=[
0,0,width,height];var Al=[].concat(AJ.slice(0,2),B.abf(AJ.slice(0,2),this.HJ));if(((
Ay&0x80)===0x80)){if(this.MW())Ay=(Ay&~0x80)|0x4;else Ay=(Ay&~0x80)|0x1;}if(((Ay&
0x40)===0x40)){var FX;FX=width;if(FX<0)FX=0;if(FX>(Al[2]-Al[0]))Al=B.abL(Al,FX);
}if((!!(Ay&0x110)&&!!(Ay&0x28))&&((Al[3]-Al[1])>(AJ[3]-AJ[1])))Ay&=~0x110;if(!!(
Ay&0x110))Ay&=~0x28;if((((Ay&0x2)===0x2)&&!!(Ay&0x5))&&((Al[2]-Al[0])>(AJ[2]-AJ[
0])))Ay&=~0x2;if(((Ay&0x2)===0x2))Ay&=~0x5;if((Al[2]-Al[0])!==(AJ[2]-AJ[0])){if(((
Ay&0x4)===0x4))Al=B.abM(Al,AJ[2]-(Al[2]-Al[0]));else if(((Ay&0x2)===0x2))Al=B.abM(
Al,(AJ[0]+(((AJ[2]-AJ[0])/2)|0))-(((Al[2]-Al[0])/2)|0));}if((Al[3]-Al[1])!==(AJ[
3]-AJ[1])){if(((Ay&0x20)===0x20))Al=B.abO(Al,AJ[3]-(Al[3]-Al[1]));else if(((Ay&0x100
)===0x100))Al=B.abO(Al,((AJ[1]+(((AJ[3]-AJ[1])/2)|0))-(((Al[3]-Al[1])/2)|0))+(((
this.B0.Descent-this.B0.Ascent)/2)|0));else if(((Ay&0x10)===0x10))Al=B.abO(Al,(AJ[
1]+(((AJ[3]-AJ[1])/2)|0))-(((Al[3]-Al[1])/2)|0));}Al=B.abh(Al,AG.slice(0,2));return Al;
},Ld:function(){return this.EM;},_Init:function(aArg){B.Core.Bv._Init.call(this,
aArg);this.__proto__=E.Text;},_Done:function(){this.E0();this.__proto__=B.Core.Bv;
B.Core.Bv._Done.call(this);},_Mark:function(D){var A;B.Core.Bv._Mark.call(this,D
);if((A=this.B0)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};
E.Vj={Qm:0x1,Ql:0x2,Qn:0x4,Qq:0x8,Qp:0x10,Qo:0x20,VN:0x40,VO:0x80,VT:0x100};E.VU={
Qm:0x1,Ql:0x2,Qn:0x4,Qq:0x8,Qp:0x10,Qo:0x20,UH:0x40,UG:0x80,UM:0x100};E.Vu={Vt:0
,VL:1,VJ:2,VK:3};
E._Init=function(){E.Cc.__proto__=B.Core.Bv;E.A4.__proto__=B.Core.Bv;E.Iy.__proto__=
B.Core.Bv;E.AB.__proto__=B.Core.Bv;E.Text.__proto__=B.Core.Bv;};E._ReInit=function(
){};E.DN=function(D){};return E;})();

/* Embedded Wizard */