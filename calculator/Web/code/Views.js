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
var A4=[0,0];var Bi=[0,0,0,0];var Dv="\uFEFF";
E.Cj={Oo:0,On:0,Ns:0xFFFFFFFF,Nt:0xFFFFFFFF,Nv:0xFFFFFFFF,Nu:0xFFFFFFFF,EZ:0,CE:0xFFFFFFFF
,Ev:function(Bo,aClip,aOffset,Bg,aBlend){var A;var AL=this.Nu;var AV=this.Nv;var
AO=this.Ns;var AU=this.Nt;var Bb=this.CE;var Gw=this.EZ+this.On;var LM=this.EZ+this.
Oo;var LJ=this.EZ;var LI=this.EZ;aBlend=aBlend&&((this.F&0x2)===0x2);Bg=Bg+1;if((((
AL===AV)&&(AO===AU))&&(AL===AO))&&(AL===0xFFFFFFFF))AL=AV=AO=AU=Bb;else if(Bb!==
0xFFFFFFFF){AL=(AL&0x00FFFFFF)|((((((AL>>24)&0xFF)*(((Bb>>24)&0xFF)+1))>>8)&0xFF
)<<24);AL=(AL&0xFFFFFF00)|((((AL&0xFF)*((Bb&0xFF)+1))>>8)&0xFF);AL=(AL&0xFFFF00FF
)|((((((AL>>8)&0xFF)*(((Bb>>8)&0xFF)+1))>>8)&0xFF)<<8);AL=(AL&0xFF00FFFF)|((((((
AL>>16)&0xFF)*(((Bb>>16)&0xFF)+1))>>8)&0xFF)<<16);AV=(AV&0x00FFFFFF)|((((((AV>>24
)&0xFF)*(((Bb>>24)&0xFF)+1))>>8)&0xFF)<<24);AV=(AV&0xFFFFFF00)|((((AV&0xFF)*((Bb&
0xFF)+1))>>8)&0xFF);AV=(AV&0xFFFF00FF)|((((((AV>>8)&0xFF)*(((Bb>>8)&0xFF)+1))>>8
)&0xFF)<<8);AV=(AV&0xFF00FFFF)|((((((AV>>16)&0xFF)*(((Bb>>16)&0xFF)+1))>>8)&0xFF
)<<16);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*(((Bb>>24)&0xFF)+1))>>8)&0xFF)<<24
);AO=(AO&0xFFFFFF00)|((((AO&0xFF)*((Bb&0xFF)+1))>>8)&0xFF);AO=(AO&0xFFFF00FF)|((((((
AO>>8)&0xFF)*(((Bb>>8)&0xFF)+1))>>8)&0xFF)<<8);AO=(AO&0xFF00FFFF)|((((((AO>>16)&
0xFF)*(((Bb>>16)&0xFF)+1))>>8)&0xFF)<<16);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)
*(((Bb>>24)&0xFF)+1))>>8)&0xFF)<<24);AU=(AU&0xFFFFFF00)|((((AU&0xFF)*((Bb&0xFF)+
1))>>8)&0xFF);AU=(AU&0xFFFF00FF)|((((((AU>>8)&0xFF)*(((Bb>>8)&0xFF)+1))>>8)&0xFF
)<<8);AU=(AU&0xFF00FFFF)|((((((AU>>16)&0xFF)*(((Bb>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Bg<256){AL=(AL&0x00FFFFFF)|((((Bg*((AL>>24)&0xFF))>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF
)|((((Bg*((AV>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((Bg*((AO>>24)&0xFF
))>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((Bg*((AU>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!Gw||!!LM)||!!LJ)||!!LI)Bo.Sm(aClip,B.abh(this.M,aOffset),Gw,LM,LJ,LI,AL,AV,AU,
AO,aBlend);else Bo.NL(aClip,B.abh(this.M,aOffset),AL,AV,AU,AO,aBlend);},S3:function(
C){var A;if(C<0)C=0;if(C===this.Oo)return;this.Oo=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Al(this.M);},S2:function(C){var A;if(C<0)C=0;if(C===this.On)return;this.
On=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Od:function(C){var A;
if(C===this.Ns)return;this.Ns=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);},Oe:function(C){var A;if(C===this.Nt)return;this.Nt=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Al(this.M);},SH:function(C){var A;if(C===this.Nv)return;this.
Nv=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},SG:function(C){var A;
if(C===this.Nu)return;this.Nu=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);},DT:function(C){var A;if(C<0)C=0;if(C===this.EZ)return;this.EZ=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},Av:function(C){var A;if(C===this.CE)return;
this.CE=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Aq:function(C){if(
C)this.At(0x1,0x0);else this.At(0x0,0x1);},_Init:function(aArg){B.Core.BD._Init.
call(this,aArg);this.__proto__=E.Cj;},_className:"Views::Rectangle"};E.A9={EZ:0,
Width:1,CE:0xFFFFFFFF,Ev:function(Bo,aClip,aOffset,Bg,aBlend){var A;var AL;var AV;
var AO;var AU;var Bb=this.CE;var Gw=this.EZ;var LM=this.EZ;var LJ=this.EZ;var LI=
this.EZ;aBlend=aBlend&&((this.F&0x2)===0x2);Bg=Bg+1;AL=AV=AO=AU=Bb;if(Bg<256){AL=(
AL&0x00FFFFFF)|((((Bg*((AL>>24)&0xFF))>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF)|((((Bg*((
AV>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((Bg*((AO>>24)&0xFF))>>8)&0xFF
)<<24);AU=(AU&0x00FFFFFF)|((((Bg*((AU>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Gw||!!LM
)||!!LJ)||!!LI)Bo.Si(aClip,B.abh(this.M,aOffset),this.Width,Gw,LM,LJ,LI,AL,AV,AU
,AO,aBlend);else Bo.Sg(aClip,B.abh(this.M,aOffset),this.Width,AL,AV,AU,AO,aBlend
);},DT:function(C){var A;if(C<0)C=0;if(C===this.EZ)return;this.EZ=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},JG:function(C){var A;if(C<0)C=0;if(C===this.
Width)return;this.Width=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},
Av:function(C){var A;if(C===this.CE)return;this.CE=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Al(this.M);},Aq:function(C){if(C)this.At(0x1,0x0);else this.At(0x0,0x1
);},_Init:function(aArg){B.Core.BD._Init.call(this,aArg);this.__proto__=E.A9;},_className:
"Views::Border"};E.Kt={timer:null,Ah:null,CI:-1,CE:0xFFFFFFFF,Ko:0x1F,GJ:0,Br:0,
It:B.wf,EP:false,Ev:function(Bo,aClip,aOffset,Bg,aBlend){var A;var CZ=this.GJ;if(
this.CI>=0)CZ=this.CI;if(!this.Ah||(CZ>=this.Ah.NoOfFrames))return;this.Ah.Update(
);var AL;var AV;var AU;var AO;var Bb=this.CE;var DF=(((Bg+1)*255)>>8)+1;var C9=this.
Ko;var H=B.abh(this.M,aOffset);var Ne=B.abe([H[2]-H[0],H[3]-H[1]],this.It);aBlend=
aBlend&&((this.F&0x2)===0x2);AL=AV=AO=AU=Bb;if(DF<256){AL=(AL&0x00FFFFFF)|((((((
AL>>24)&0xFF)*DF)>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF)|((((((AV>>24)&0xFF)*DF)>>8)&
0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*DF)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((((AO>>24)&0xFF)*DF)>>8)&0xFF)<<24);}if(((this.It[0]>0)&&(Ne[0]>0))&&!((C9&
0x5)===0x5)){var DA=((this.Ah.FrameSize[0]/3)|0)-Ne[0];if(((C9&0x1)===0x1)){if(aClip[
2]>H[2])aClip=B.abN(aClip,H[2]);if(DA>0)H=B.abN(H,H[2]+DA);C9=C9|0x4;}else if(((
C9&0x4)===0x4)){if(aClip[0]<H[0])aClip=[].concat(H[0],aClip.slice(1,4));if(DA>0)
H=[].concat(H[0]-DA,H.slice(1,4));C9=C9|0x1;}else{if(aClip[0]<H[0])aClip=[].concat(
H[0],aClip.slice(1,4));if(aClip[2]>H[2])aClip=B.abN(aClip,H[2]);if(DA>0){H=[].concat(
H[0]-((DA/2)|0),H.slice(1,4));H=B.abN(H,(H[2]+DA)-((DA/2)|0));}C9=C9|0x5;}}if(((
this.It[1]>0)&&(Ne[1]>0))&&!((C9&0xA)===0xA)){var DA=((this.Ah.FrameSize[1]/3)|0
)-Ne[1];if(((C9&0x2)===0x2)){if(aClip[3]>H[3])aClip=[].concat(aClip.slice(0,3),H[
3]);if(DA>0)H=[].concat(H.slice(0,3),H[3]+DA);C9=C9|0x8;}else if(((C9&0x8)===0x8
)){if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(DA>0)H=B.abP(H,H[1]-DA);C9=C9|0x2;
}else{if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(aClip[3]>H[3])aClip=[].concat(
aClip.slice(0,3),H[3]);if(DA>0){H=B.abP(H,H[1]-((DA/2)|0));H=[].concat(H.slice(0
,3),(H[3]+DA)-((DA/2)|0));}C9=C9|0xA;}}Bo.Sf(aClip,this.Ah,CZ,H,C9,AL,AV,AU,AO,aBlend
);},Ly:function(Y){var A;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},D7:
function(Y){var A;var CZ=this.CI;var Fc=0;if(!!this.Ah)Fc=this.Ah.NoOfFrames*this.
Ah.FrameDelay;if((!!this.timer&&(this.CI<0))&&(Fc>0))this.Br=this.timer.AG-(this.
GJ*this.Ah.FrameDelay);if(!!this.timer&&(Fc>0)){var As=(this.timer.AG-this.Br)|0;
CZ=(As/this.Ah.FrameDelay)|0;if(As>=Fc){CZ=CZ%this.Ah.NoOfFrames;this.Br=this.timer.
AG-(As%Fc);}}if(((CZ!==this.CI)&&!!this.I)&&((this.F&0x1)===0x1))this.I.Al(this.
M);this.CI=CZ;if(!Fc&&!!this.timer){B.z9([this,this.D7],this.timer,0);this.timer=
null;}},Av:function(C){var A;if(C===this.CE)return;this.CE=C;if(!!this.I&&((this.
F&0x1)===0x1))this.I.Al(this.M);},Ge:function(C){var A;if(this.EP===C)return;this.
EP=C;this.CI=-1;if(!C&&!!this.timer){B.z9([this,this.D7],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.acj.HI);B.zV([this,this.D7],this.timer
,0);B.pe([this,this.D7],this);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);},Qc:function(C){var A;if(C===this.Ko)return;this.Ko=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Al(this.M);},Fv:function(C){var A;if(C<0)C=0;if((C===this.GJ)&&(
this.CI===-1))return;this.GJ=C;if(!this.timer)this.CI=-1;if(!!this.I&&((this.F&0x1
)===0x1))this.I.Al(this.M);},Bz:function(C){var A;if(C===this.Ah)return;if(!!this.
Ah&&this.Ah.Js)B.z9([this,this.Ly],this.Ah,0);this.Ah=C;this.CI=-1;if(!!C&&C.Js)
B.zV([this,this.Ly],C,0);if(this.EP){this.Ge(false);this.Ge(true);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},Aq:function(C){if(C)this.At(0x1,0x0);else
this.At(0x0,0x1);},Qm:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0
];if(B.aaX(C,this.It))return;this.It=C;if((!!this.I&&((this.F&0x1)===0x1))&&!((this.
Ko&0xF)===0xF))this.I.Al(this.M);},_Init:function(aArg){B.Core.BD._Init.call(this
,aArg);this.__proto__=E.Kt;},_Mark:function(D){var A;B.Core.BD._Mark.call(this,D
);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};E.AJ={timer:null,Ah:null,Br:
0,CI:0,CE:0xFFFFFFFF,Gy:0x12,GJ:0,EP:false,Ev:function(Bo,aClip,aOffset,Bg,aBlend
){var A;var CZ=this.GJ;if(this.CI>=0)CZ=this.CI;if(!this.Ah||(CZ>=this.Ah.NoOfFrames
))return;this.Ah.Update();var T=this.NO();var Bc=this.Ah.FrameSize;if((T[0]>=T[2
])||(T[1]>=T[3]))return;var AL;var AV;var AU;var AO;var Bb=this.CE;var DF=(((Bg+
1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);AL=AV=AO=AU=Bb;if(DF<256){AL=(
AL&0x00FFFFFF)|((((((AL>>24)&0xFF)*DF)>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF)|((((((AV>>
24)&0xFF)*DF)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*DF)>>8)&0xFF
)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*DF)>>8)&0xFF)<<24);}if(B.aaX([T[2]-
T[0],T[3]-T[1]],Bc))Bo.Sc(aClip,this.Ah,CZ,B.abh(this.M,aOffset),B.abe(this.M.slice(
0,2),T.slice(0,2)),AL,AV,AU,AO,aBlend);else Bo.TA(aClip,this.Ah,CZ,B.abh(T,aOffset
),[].concat(A4,Bc),AL,AV,AU,AO,aBlend,true);},Ly:function(Y){var A;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},D7:function(Y){var A;var CZ=this.CI;var Fc=
0;if(!!this.Ah)Fc=this.Ah.NoOfFrames*this.Ah.FrameDelay;if((!!this.timer&&(this.
CI<0))&&(Fc>0))this.Br=this.timer.AG-(this.GJ*this.Ah.FrameDelay);if(!!this.timer&&(
Fc>0)){var As=(this.timer.AG-this.Br)|0;CZ=(As/this.Ah.FrameDelay)|0;if(As>=Fc){
CZ=CZ%this.Ah.NoOfFrames;this.Br=this.timer.AG-(As%Fc);}}if(((CZ!==this.CI)&&!!this.
I)&&((this.F&0x1)===0x1))this.I.Al(this.M);this.CI=CZ;if(!Fc&&!!this.timer){B.z9([
this,this.D7],this.timer,0);this.timer=null;}},Av:function(C){var A;if(C===this.
CE)return;this.CE=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Ge:function(
C){var A;if(this.EP===C)return;this.EP=C;this.CI=-1;if(!C&&!!this.timer){B.z9([this
,this.D7],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.
HI);B.zV([this,this.D7],this.timer,0);B.pe([this,this.D7],this);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},Gd:function(C){var A;if(C===this.Gy)return;
this.Gy=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Fv:function(C){var
A;if(C<0)C=0;if((C===this.GJ)&&(this.CI===-1))return;this.GJ=C;if(!this.timer)this.
CI=-1;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Bz:function(C){var A;
if(C===this.Ah)return;if(!!this.Ah&&this.Ah.Js)B.z9([this,this.Ly],this.Ah,0);this.
Ah=C;this.CI=-1;if(!!C&&C.Js)B.zV([this,this.Ly],C,0);if(this.EP){this.Ge(false);
this.Ge(true);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Aq:function(
C){if(C)this.At(0x1,0x0);else this.At(0x0,0x1);},NO:function(){var A;if(!this.Ah
)return Bi;var AE=this.Gy;var Bc=this.Ah.FrameSize;var Ar=this.M;var width=Ar[2]-
Ar[0];var height=Ar[3]-Ar[1];if(!Bc[0]||!Bc[1])return Bi;var AN=[0,0,width,height
];var Ak=AN;if(((AE&0x40)===0x40)){var PM=((((AN[2]-AN[0])<<16)+((Bc[0]/2)|0))/Bc[
0])|0;var LN=((((AN[3]-AN[1])<<16)+((Bc[1]/2)|0))/Bc[1])|0;var HC=PM;if(LN>HC)HC=
LN;Ak=B.abL(Ak,((Bc[0]*HC)+32768)>>16);Ak=B.abI(Ak,((Bc[1]*HC)+32768)>>16);}else
if(((AE&0x80)===0x80)){var PM=((((AN[2]-AN[0])<<16)+((Bc[0]/2)|0))/Bc[0])|0;var LN=((((
AN[3]-AN[1])<<16)+((Bc[1]/2)|0))/Bc[1])|0;var HC=PM;if(LN<HC)HC=LN;Ak=B.abL(Ak,((
Bc[0]*HC)+32768)>>16);Ak=B.abI(Ak,((Bc[1]*HC)+32768)>>16);}else if(!((AE&0x100)===
0x100))Ak=B.abK(Ak,Bc);if((Ak[2]-Ak[0])!==(AN[2]-AN[0])){if(((AE&0x4)===0x4))Ak=
B.abM(Ak,AN[2]-(Ak[2]-Ak[0]));else if(((AE&0x2)===0x2))Ak=B.abM(Ak,(AN[0]+(((AN[
2]-AN[0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));}if((Ak[3]-Ak[1])!==(AN[3]-AN[1])){if(((
AE&0x20)===0x20))Ak=B.abO(Ak,AN[3]-(Ak[3]-Ak[1]));else if(((AE&0x10)===0x10))Ak=
B.abO(Ak,(AN[1]+(((AN[3]-AN[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0));}Ak=B.abh(Ak,Ar.slice(
0,2));return Ak;},_Init:function(aArg){B.Core.BD._Init.call(this,aArg);this.__proto__=
E.AJ;},_Mark:function(D){var A;B.Core.BD._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Image"};E.Text={B7:null,BJ:B.jV,String:B.jV,Ek:null,Io:B.
wf,Gy:0x12,CE:0xFFFFFFFF,Dg:255,JY:false,Ji:false,ND:false,DG:false,FH:function(
){if(!!this.Ek){this.Pe(this.Ek);this.Ek=null;}},Ev:function(Bo,aClip,aOffset,Bg
,aBlend){var A;if((this.BJ===B.jV)||!this.B7)return;var AE=this.Gy;var font=this.
B7;var AN=B.abh(this.M,aOffset);var AL;var AV;var AU;var AO;var Vf=this.CE;var DF=(((
Bg+1)*this.Dg)>>8)+1;var FX=this.BJ.charCodeAt(0)||0;var T=B.abh(this.NO(),aOffset
);var Cs=[AN[0]-T[0],(AN[1]-T[1])-font.Ascent];if(FX<1)return;AL=AV=AO=AU=Vf;if(
DF<256){AL=(AL&0x00FFFFFF)|((((((AL>>24)&0xFF)*DF)>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF
)|((((((AV>>24)&0xFF)*DF)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*
DF)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*DF)>>8)&0xFF)<<24);}if(((
AE&0x80)===0x80)){if(this.NV())AE=(AE&~0x80)|0x4;else AE=(AE&~0x80)|0x1;}if((FX===
1)&&!((AE&0x40)===0x40)){Bo.PZ(aClip,font,this.BJ,2,(this.BJ.charCodeAt(1)||0)-1
,AN,Cs,0,0,AL,AV,AU,AO,true);return;}var leading=font.Leading;var PL=(font.Ascent+
font.Descent)+leading;var Vd=aClip[1]-T[1];var Ve=aClip[3]-T[1];var O4=T[2]-T[0];
var D8=0;var G=1;var Bb=this.BJ.charCodeAt(1)||0;while(((D8+PL)<Vd)&&(Bb>0)){G=G+
Bb;D8=D8+PL;Bb=this.BJ.charCodeAt(G)||0;}while((D8<Ve)&&(Bb>0)){var IW=B.abe(Cs,[
0,D8]);var RM=0;var MZ=false;if(((((AE&0x40)===0x40)&&((this.BJ.charCodeAt((G+Bb
)-1)||0)!==0x0A))&&((this.BJ.charCodeAt(G+1)||0)!==0x0A))&&((this.BJ.charCodeAt(
G+Bb)||0)!==0x00))MZ=true;if(MZ&&!!(AE&0x6)){var RL=G+Bb;var Q2=this.BJ.indexOf(
String.fromCharCode(0x20),G+1);var Q3=this.BJ.indexOf(String.fromCharCode(0xA0),
G+1);if(((Q2<0)||(Q2>=RL))&&((Q3<0)||(Q3>=RL)))MZ=false;}if(MZ)RM=O4;else if(((AE&
0x4)===0x4))IW=[(IW[0]-O4)+font.Kv(this.BJ,G+1,Bb-1),IW[1]];else if(((AE&0x2)===
0x2))IW=[(IW[0]-((O4/2)|0))+((font.Kv(this.BJ,G+1,Bb-1)/2)|0),IW[1]];Bo.PZ(aClip
,font,this.BJ,G+1,Bb-1,AN,IW,RM,0,AL,AV,AU,AO,true);G=G+Bb;D8=D8+PL;Bb=this.BJ.charCodeAt(
G)||0;}},P:function(C){var A;if(B.aaY(C,this.M))return;var RK;RK=((A=this.M)[2]-
A[0])!==(C[2]-C[0]);if(((RK&&this.JY)&&this.DG)&&!((this.F&0x2000)===0x2000)){this.
BJ=B.jV;this.DG=false;B.pe([this,this.If],this);}if(((this.Ji&&this.DG)&&!B.aaX([(
A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000
)){this.BJ=B.jV;this.DG=false;B.pe([this,this.If],this);}B.Core.BD.P.call(this,C
);B.pe([this,this.PF],this);},Pe:function(aBidi){if(!aBidi)return;B.rB(aBidi);},
Vh:function(aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},PF:function(Y){}
,If:function(Y){B.pe([this,this.M9],this);},M9:function(Y){var A;if(this.DG)return;
var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3]-A[1];var Gv=-1;var font=this.
B7;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.JY){Gv=width;if(
Gv<0)Gv=1;}if(!!this.Ek){this.Pe(this.Ek);this.Ek=null;}this.DG=true;if((this.String
!==B.jV)&&!!font){var length=this.String.length;if(this.ND)this.Ek=this.Vh(length
);this.BJ=font.Tu(this.String,0,Gv,length,this.Ek);if(!!this.Ek&&!this.St()){this.
Pe(this.Ek);this.Ek=null;}}else this.BJ=B.jV;this.Io=A4;if((this.Ji&&(this.BJ!==
B.jV))&&!!font){var AE=this.Gy;var leading=font.Leading;var AQ=this.BJ;var Gw=this.
NV();if(((AE&0x80)===0x80)){if(Gw)AE=(AE&~0x80)|0x4;else AE=(AE&~0x80)|0x1;}var Nb=(
font.Ascent+font.Descent)+leading;var FX=AQ.charCodeAt(0)||0;var H$=((height+leading
)/Nb)|0;var O9=false;var MO=false;if(H$<=0)H$=1;if(FX>H$){var FC=0;var LL=0;var Nc=
FX-1;var Cm;var C0=AQ.length;var tmp=B.jV;if(!!(AE&0x110)&&!!(AE&0x28))AE&=~0x110;
if(!!(AE&0x110))AE&=~0x28;if(((AE&0x20)===0x20))LL=FX-H$;else if(((AE&0x10)===0x10
)||((AE&0x100)===0x100)){LL=((FX-H$)/2)|0;Nc=(LL+H$)-1;}else Nc=H$-1;O9=LL>0;MO=
Nc<(FX-1);for(Cm=1;FC<LL;FC=FC+1)Cm=Cm+(AQ.charCodeAt(Cm)||0);if(MO)for(C0=Cm;FC<
Nc;FC=FC+1)C0=C0+(AQ.charCodeAt(C0)||0);if(O9){var Dn=AQ.charCodeAt(Cm)||0;tmp=(
Dv+B.abW(AQ,Cm,Dn))+Dv;tmp=B.abQ(tmp,0,(Dn+2)&0xFFFF);Cm=Cm+Dn;if((tmp.charCodeAt(
Dn)||0)===0x0A){tmp=B.abQ(tmp,Dn,0xFEFF);tmp=B.abQ(tmp,Dn+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(AQ,Cm,C0-Cm);if(MO&&(C0>=Cm)){var Dn=AQ.charCodeAt(C0)||
0;var DN=(Dv+B.abW(AQ,C0,Dn))+Dv;DN=B.abQ(DN,0,(Dn+2)&0xFFFF);DN=B.abQ(DN,1,0xFEFF
);if((DN.charCodeAt(Dn)||0)===0x0A){DN=B.abQ(DN,Dn,0xFEFF);DN=B.abQ(DN,Dn+1,0x0A
);}if((DN.charCodeAt(2)||0)===0x0A){DN=B.abQ(DN,2,0xFEFF);DN=B.abQ(DN,1,0x0A);}else
DN=B.abQ(DN,1,0xFEFF);tmp=tmp+DN;}AQ=String.fromCharCode(H$&0xFFFF)+tmp;}var FC=
0;var D2=1;var Pt=width;FX=AQ.charCodeAt(0)||0;for(;FC<FX;FC=FC+1){var Ij=O9&&!FC;
var Ik=MO&&(FC===(FX-1));var E6=false;var E7=false;var Kc=Gw;if((Gw&&Ij)&&!Ik){Ij=
false;Ik=true;}else if((Gw&&Ik)&&!Ij){Ik=false;Ij=true;}var LO=D2+1;var Dn=AQ.charCodeAt(
D2)||0;var Cm=LO;var C0=(LO+Dn)-2;var Pi=-1;var Pj=-1;if(!this.JY&&(font.Kv(AQ,LO
,Dn-1)>Pt)){var IO=AE;if(((IO&0x2)===0x2)&&!!(IO&0x5))IO&=~0x2;if(((IO&0x2)===0x2
))IO&=~0x5;if(((IO&0x4)===0x4))E6=true;else if(((IO&0x2)===0x2)){E6=true;E7=true;
}else E7=true;}if((AQ.charCodeAt(Cm)||0)===0x0A)Cm=Cm+1;if((AQ.charCodeAt(C0)||0
)===0x0A)C0=C0-1;while(E6&&((AQ.charCodeAt(Cm)||0)===0xFEFF))Cm=Cm+1;while(E7&&((
AQ.charCodeAt(C0)||0)===0xFEFF))C0=C0-1;E6=E6&&!Ik;E7=E7&&!Ij;while((((E6||E7)||
Ij)||Ik)&&(Cm<C0)){if((E6&&(Kc||!E7))||Ij){if(Pi>0)AQ=B.abQ(AQ,Pi,0xFEFF);AQ=B.abQ(
AQ,Cm,0x2026);Pi=Cm;Cm=Cm+1;Kc=!Kc;Ij=false;if(font.Kv(AQ,LO,Dn-1)<=Pt){E6=false;
E7=false;}else E6=E6||!E7;}if((E7&&(!Kc||!E6))||Ik){if(Pj>0)AQ=B.abQ(AQ,Pj,0xFEFF
);AQ=B.abQ(AQ,C0,0x2026);Pj=C0;C0=C0-1;Kc=!Kc;Ik=false;if(font.Kv(AQ,LO,Dn-1)<=Pt
){E6=false;E7=false;}else E7=E7||!E6;}}D2=D2+Dn;}this.Io=[font.P1(AQ),((AQ.charCodeAt(
0)||0)*Nb)-leading];this.BJ=AQ;}if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);B.pe([this,this.PF],this);},SK:function(C){if(C===this.ND)return;this.ND=C;this.
BJ=B.jV;this.DG=false;B.pe([this,this.If],this);},Qe:function(C){if(C===this.Ji)
return;this.Ji=C;if(this.JY||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
BJ=B.jV;this.DG=false;B.pe([this,this.If],this);},Og:function(C){if(C===this.JY)
return;this.JY=C;if(this.DG){this.BJ=B.jV;this.DG=false;B.pe([this,this.If],this
);}if(C||this.Ji)this.F=this.F&~0x100;else this.F=this.F|0x100;},Gd:function(C){
var A;if(C===this.Gy)return;this.Gy=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(
this.M);if(this.Ji){this.BJ=B.jV;this.DG=false;B.pe([this,this.If],this);}if(this.
DG)B.pe([this,this.PF],this);},B8:function(C){if(C===this.String)return;this.String=
C;this.BJ=B.jV;this.DG=false;B.pe([this,this.If],this);},GS:function(C){if(C===this.
B7)return;this.B7=C;this.BJ=B.jV;this.DG=false;B.pe([this,this.If],this);},Av:function(
C){var A;if(C===this.CE)return;this.CE=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Al(this.M);},EY:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dg)return;
this.Dg=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},NV:function(){if(
!this.DG)this.M9(this);if(!this.Ek)return false;var result=false;var bidi=this.Ek;
result=B.v2(bidi);return result;},St:function(){if(!this.DG)this.M9(this);if(!this.
Ek)return false;var result=false;var bidi=this.Ek;result=B.zZ(bidi);return result;
},NO:function(){var A;if((this.String===B.jV)||!this.B7)return Bi;if(!this.DG)this.
M9(this);if(this.BJ===B.jV)return Bi;var leading=this.B7.Leading;var Nb=(this.B7.
Ascent+this.B7.Descent)+this.B7.Leading;if(B.aaX(this.Io,A4))this.Io=[this.B7.P1(
this.BJ),this.Io[1]];this.Io=[this.Io[0],((this.BJ.charCodeAt(0)||0)*Nb)-leading
];var AE=this.Gy;var Ar=this.M;var width=Ar[2]-Ar[0];var height=Ar[3]-Ar[1];var AN=[
0,0,width,height];var Ak=[].concat(AN.slice(0,2),B.abf(AN.slice(0,2),this.Io));if(((
AE&0x80)===0x80)){if(this.NV())AE=(AE&~0x80)|0x4;else AE=(AE&~0x80)|0x1;}if(((AE&
0x40)===0x40)){var Gv;Gv=width;if(Gv<0)Gv=0;if(Gv>(Ak[2]-Ak[0]))Ak=B.abL(Ak,Gv);
}if((!!(AE&0x110)&&!!(AE&0x28))&&((Ak[3]-Ak[1])>(AN[3]-AN[1])))AE&=~0x110;if(!!(
AE&0x110))AE&=~0x28;if((((AE&0x2)===0x2)&&!!(AE&0x5))&&((Ak[2]-Ak[0])>(AN[2]-AN[
0])))AE&=~0x2;if(((AE&0x2)===0x2))AE&=~0x5;if((Ak[2]-Ak[0])!==(AN[2]-AN[0])){if(((
AE&0x4)===0x4))Ak=B.abM(Ak,AN[2]-(Ak[2]-Ak[0]));else if(((AE&0x2)===0x2))Ak=B.abM(
Ak,(AN[0]+(((AN[2]-AN[0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));}if((Ak[3]-Ak[1])!==(AN[
3]-AN[1])){if(((AE&0x20)===0x20))Ak=B.abO(Ak,AN[3]-(Ak[3]-Ak[1]));else if(((AE&0x100
)===0x100))Ak=B.abO(Ak,((AN[1]+(((AN[3]-AN[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0))+(((
this.B7.Descent-this.B7.Ascent)/2)|0));else if(((AE&0x10)===0x10))Ak=B.abO(Ak,(AN[
1]+(((AN[3]-AN[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0));}Ak=B.abh(Ak,Ar.slice(0,2));return Ak;
},KC:function(){return this.Dg;},_Init:function(aArg){B.Core.BD._Init.call(this,
aArg);this.__proto__=E.Text;},_Done:function(){this.FH();this.__proto__=B.Core.BD;
B.Core.BD._Done.call(this);},_Mark:function(D){var A;B.Core.BD._Mark.call(this,D
);if((A=this.B7)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};
E.WV={R0:0x1,RZ:0x2,R1:0x4,R4:0x8,R3:0x10,R2:0x20,Xm:0x40,Xn:0x80,Xs:0x100};E.Xt={
R0:0x1,RZ:0x2,R1:0x4,R4:0x8,R3:0x10,R2:0x20,Wg:0x40,Wf:0x80,Wl:0x100};E.W5={W4:0
,Xk:1,Xi:2,Xj:3};
E._Init=function(){E.Cj.__proto__=B.Core.BD;E.A9.__proto__=B.Core.BD;E.Kt.__proto__=
B.Core.BD;E.AJ.__proto__=B.Core.BD;E.Text.__proto__=B.Core.BD;};E._ReInit=function(
){};E.Ef=function(D){};return E;})();

/* Embedded Wizard */