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
var A4=[0,0];var Bi=[0,0,0,0];var Ds="\uFEFF";
E.Ck={N7:0,N6:0,Ne:0xFFFFFFFF,Nf:0xFFFFFFFF,Nh:0xFFFFFFFF,Ng:0xFFFFFFFF,ER:0,CE:0xFFFFFFFF
,Er:function(Bn,aClip,aOffset,Bg,aBlend){var A;var AL=this.Ng;var AV=this.Nh;var
AO=this.Ne;var AU=this.Nf;var Ba=this.CE;var Gs=this.ER+this.N6;var LC=this.ER+this.
N7;var Lz=this.ER;var Ly=this.ER;aBlend=aBlend&&((this.F&0x2)===0x2);Bg=Bg+1;if((((
AL===AV)&&(AO===AU))&&(AL===AO))&&(AL===0xFFFFFFFF))AL=AV=AO=AU=Ba;else if(Ba!==
0xFFFFFFFF){AL=(AL&0x00FFFFFF)|((((((AL>>24)&0xFF)*(((Ba>>24)&0xFF)+1))>>8)&0xFF
)<<24);AL=(AL&0xFFFFFF00)|((((AL&0xFF)*((Ba&0xFF)+1))>>8)&0xFF);AL=(AL&0xFFFF00FF
)|((((((AL>>8)&0xFF)*(((Ba>>8)&0xFF)+1))>>8)&0xFF)<<8);AL=(AL&0xFF00FFFF)|((((((
AL>>16)&0xFF)*(((Ba>>16)&0xFF)+1))>>8)&0xFF)<<16);AV=(AV&0x00FFFFFF)|((((((AV>>24
)&0xFF)*(((Ba>>24)&0xFF)+1))>>8)&0xFF)<<24);AV=(AV&0xFFFFFF00)|((((AV&0xFF)*((Ba&
0xFF)+1))>>8)&0xFF);AV=(AV&0xFFFF00FF)|((((((AV>>8)&0xFF)*(((Ba>>8)&0xFF)+1))>>8
)&0xFF)<<8);AV=(AV&0xFF00FFFF)|((((((AV>>16)&0xFF)*(((Ba>>16)&0xFF)+1))>>8)&0xFF
)<<16);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*(((Ba>>24)&0xFF)+1))>>8)&0xFF)<<24
);AO=(AO&0xFFFFFF00)|((((AO&0xFF)*((Ba&0xFF)+1))>>8)&0xFF);AO=(AO&0xFFFF00FF)|((((((
AO>>8)&0xFF)*(((Ba>>8)&0xFF)+1))>>8)&0xFF)<<8);AO=(AO&0xFF00FFFF)|((((((AO>>16)&
0xFF)*(((Ba>>16)&0xFF)+1))>>8)&0xFF)<<16);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)
*(((Ba>>24)&0xFF)+1))>>8)&0xFF)<<24);AU=(AU&0xFFFFFF00)|((((AU&0xFF)*((Ba&0xFF)+
1))>>8)&0xFF);AU=(AU&0xFFFF00FF)|((((((AU>>8)&0xFF)*(((Ba>>8)&0xFF)+1))>>8)&0xFF
)<<8);AU=(AU&0xFF00FFFF)|((((((AU>>16)&0xFF)*(((Ba>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(Bg<256){AL=(AL&0x00FFFFFF)|((((Bg*((AL>>24)&0xFF))>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF
)|((((Bg*((AV>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((Bg*((AO>>24)&0xFF
))>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((Bg*((AU>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!Gs||!!LC)||!!Lz)||!!Ly)Bn.R7(aClip,B.abh(this.M,aOffset),Gs,LC,Lz,Ly,AL,AV,AU,
AO,aBlend);else Bn.Nx(aClip,B.abh(this.M,aOffset),AL,AV,AU,AO,aBlend);},SM:function(
C){var A;if(C<0)C=0;if(C===this.N7)return;this.N7=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Al(this.M);},SL:function(C){var A;if(C<0)C=0;if(C===this.N6)return;this.
N6=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},NZ:function(C){var A;
if(C===this.Ne)return;this.Ne=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);},N0:function(C){var A;if(C===this.Nf)return;this.Nf=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Al(this.M);},Sq:function(C){var A;if(C===this.Nh)return;this.
Nh=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Sp:function(C){var A;
if(C===this.Ng)return;this.Ng=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);},DQ:function(C){var A;if(C<0)C=0;if(C===this.ER)return;this.ER=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},Av:function(C){var A;if(C===this.CE)return;
this.CE=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Ap:function(C){if(
C)this.At(0x1,0x0);else this.At(0x0,0x1);},_Init:function(aArg){B.Core.BC._Init.
call(this,aArg);this.__proto__=E.Ck;},_className:"Views::Rectangle"};E.A9={ER:0,
Width:1,CE:0xFFFFFFFF,Er:function(Bn,aClip,aOffset,Bg,aBlend){var A;var AL;var AV;
var AO;var AU;var Ba=this.CE;var Gs=this.ER;var LC=this.ER;var Lz=this.ER;var Ly=
this.ER;aBlend=aBlend&&((this.F&0x2)===0x2);Bg=Bg+1;AL=AV=AO=AU=Ba;if(Bg<256){AL=(
AL&0x00FFFFFF)|((((Bg*((AL>>24)&0xFF))>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF)|((((Bg*((
AV>>24)&0xFF))>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((Bg*((AO>>24)&0xFF))>>8)&0xFF
)<<24);AU=(AU&0x00FFFFFF)|((((Bg*((AU>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Gs||!!LC
)||!!Lz)||!!Ly)Bn.R3(aClip,B.abh(this.M,aOffset),this.Width,Gs,LC,Lz,Ly,AL,AV,AU
,AO,aBlend);else Bn.R1(aClip,B.abh(this.M,aOffset),this.Width,AL,AV,AU,AO,aBlend
);},DQ:function(C){var A;if(C<0)C=0;if(C===this.ER)return;this.ER=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},Js:function(C){var A;if(C<0)C=0;if(C===this.
Width)return;this.Width=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},
Av:function(C){var A;if(C===this.CE)return;this.CE=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Al(this.M);},Ap:function(C){if(C)this.At(0x1,0x0);else this.At(0x0,0x1
);},_Init:function(aArg){B.Core.BC._Init.call(this,aArg);this.__proto__=E.A9;},_className:
"Views::Border"};E.Kh={timer:null,Ah:null,CI:-1,CE:0xFFFFFFFF,Kc:0x1F,GF:0,Br:0,
Io:B.wf,EK:false,Er:function(Bn,aClip,aOffset,Bg,aBlend){var A;var CX=this.GF;if(
this.CI>=0)CX=this.CI;if(!this.Ah||(CX>=this.Ah.NoOfFrames))return;this.Ah.Update(
);var AL;var AV;var AU;var AO;var Ba=this.CE;var DC=(((Bg+1)*255)>>8)+1;var C7=this.
Kc;var H=B.abh(this.M,aOffset);var M3=B.abe([H[2]-H[0],H[3]-H[1]],this.Io);aBlend=
aBlend&&((this.F&0x2)===0x2);AL=AV=AO=AU=Ba;if(DC<256){AL=(AL&0x00FFFFFF)|((((((
AL>>24)&0xFF)*DC)>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF)|((((((AV>>24)&0xFF)*DC)>>8)&
0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*DC)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF
)|((((((AO>>24)&0xFF)*DC)>>8)&0xFF)<<24);}if(((this.Io[0]>0)&&(M3[0]>0))&&!((C7&
0x5)===0x5)){var Dx=((this.Ah.FrameSize[0]/3)|0)-M3[0];if(((C7&0x1)===0x1)){if(aClip[
2]>H[2])aClip=B.abN(aClip,H[2]);if(Dx>0)H=B.abN(H,H[2]+Dx);C7=C7|0x4;}else if(((
C7&0x4)===0x4)){if(aClip[0]<H[0])aClip=[].concat(H[0],aClip.slice(1,4));if(Dx>0)
H=[].concat(H[0]-Dx,H.slice(1,4));C7=C7|0x1;}else{if(aClip[0]<H[0])aClip=[].concat(
H[0],aClip.slice(1,4));if(aClip[2]>H[2])aClip=B.abN(aClip,H[2]);if(Dx>0){H=[].concat(
H[0]-((Dx/2)|0),H.slice(1,4));H=B.abN(H,(H[2]+Dx)-((Dx/2)|0));}C7=C7|0x5;}}if(((
this.Io[1]>0)&&(M3[1]>0))&&!((C7&0xA)===0xA)){var Dx=((this.Ah.FrameSize[1]/3)|0
)-M3[1];if(((C7&0x2)===0x2)){if(aClip[3]>H[3])aClip=[].concat(aClip.slice(0,3),H[
3]);if(Dx>0)H=[].concat(H.slice(0,3),H[3]+Dx);C7=C7|0x8;}else if(((C7&0x8)===0x8
)){if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(Dx>0)H=B.abP(H,H[1]-Dx);C7=C7|0x2;
}else{if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(aClip[3]>H[3])aClip=[].concat(
aClip.slice(0,3),H[3]);if(Dx>0){H=B.abP(H,H[1]-((Dx/2)|0));H=[].concat(H.slice(0
,3),(H[3]+Dx)-((Dx/2)|0));}C7=C7|0xA;}}Bn.R0(aClip,this.Ah,CX,H,C7,AL,AV,AU,AO,aBlend
);},Ln:function(Z){var A;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},D4:
function(Z){var A;var CX=this.CI;var E6=0;if(!!this.Ah)E6=this.Ah.NoOfFrames*this.
Ah.FrameDelay;if((!!this.timer&&(this.CI<0))&&(E6>0))this.Br=this.timer.AG-(this.
GF*this.Ah.FrameDelay);if(!!this.timer&&(E6>0)){var Ar=(this.timer.AG-this.Br)|0;
CX=(Ar/this.Ah.FrameDelay)|0;if(Ar>=E6){CX=CX%this.Ah.NoOfFrames;this.Br=this.timer.
AG-(Ar%E6);}}if(((CX!==this.CI)&&!!this.I)&&((this.F&0x1)===0x1))this.I.Al(this.
M);this.CI=CX;if(!E6&&!!this.timer){B.z9([this,this.D4],this.timer,0);this.timer=
null;}},Av:function(C){var A;if(C===this.CE)return;this.CE=C;if(!!this.I&&((this.
F&0x1)===0x1))this.I.Al(this.M);},Ga:function(C){var A;if(this.EK===C)return;this.
EK=C;this.CI=-1;if(!C&&!!this.timer){B.z9([this,this.D4],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.acj.HG);B.zV([this,this.D4],this.timer
,0);B.pe([this,this.D4],this);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);},PY:function(C){var A;if(C===this.Kc)return;this.Kc=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Al(this.M);},Fq:function(C){var A;if(C<0)C=0;if((C===this.GF)&&(
this.CI===-1))return;this.GF=C;if(!this.timer)this.CI=-1;if(!!this.I&&((this.F&0x1
)===0x1))this.I.Al(this.M);},By:function(C){var A;if(C===this.Ah)return;if(!!this.
Ah&&this.Ah.Jh)B.z9([this,this.Ln],this.Ah,0);this.Ah=C;this.CI=-1;if(!!C&&C.Jh)
B.zV([this,this.Ln],C,0);if(this.EK){this.Ga(false);this.Ga(true);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},Ap:function(C){if(C)this.At(0x1,0x0);else
this.At(0x0,0x1);},P8:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0
];if(B.aaX(C,this.Io))return;this.Io=C;if((!!this.I&&((this.F&0x1)===0x1))&&!((this.
Kc&0xF)===0xF))this.I.Al(this.M);},_Init:function(aArg){B.Core.BC._Init.call(this
,aArg);this.__proto__=E.Kh;},_Mark:function(D){var A;B.Core.BC._Mark.call(this,D
);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};E.AJ={timer:null,Ah:null,Br:
0,CI:0,CE:0xFFFFFFFF,Gu:0x12,GF:0,EK:false,Er:function(Bn,aClip,aOffset,Bg,aBlend
){var A;var CX=this.GF;if(this.CI>=0)CX=this.CI;if(!this.Ah||(CX>=this.Ah.NoOfFrames
))return;this.Ah.Update();var T=this.NA();var Bb=this.Ah.FrameSize;if((T[0]>=T[2
])||(T[1]>=T[3]))return;var AL;var AV;var AU;var AO;var Ba=this.CE;var DC=(((Bg+
1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);AL=AV=AO=AU=Ba;if(DC<256){AL=(
AL&0x00FFFFFF)|((((((AL>>24)&0xFF)*DC)>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF)|((((((AV>>
24)&0xFF)*DC)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*DC)>>8)&0xFF
)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*DC)>>8)&0xFF)<<24);}if(B.aaX([T[2]-
T[0],T[3]-T[1]],Bb))Bn.RX(aClip,this.Ah,CX,B.abh(this.M,aOffset),B.abe(this.M.slice(
0,2),T.slice(0,2)),AL,AV,AU,AO,aBlend);else Bn.Tk(aClip,this.Ah,CX,B.abh(T,aOffset
),[].concat(A4,Bb),AL,AV,AU,AO,aBlend,true);},Ln:function(Z){var A;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},D4:function(Z){var A;var CX=this.CI;var E6=
0;if(!!this.Ah)E6=this.Ah.NoOfFrames*this.Ah.FrameDelay;if((!!this.timer&&(this.
CI<0))&&(E6>0))this.Br=this.timer.AG-(this.GF*this.Ah.FrameDelay);if(!!this.timer&&(
E6>0)){var Ar=(this.timer.AG-this.Br)|0;CX=(Ar/this.Ah.FrameDelay)|0;if(Ar>=E6){
CX=CX%this.Ah.NoOfFrames;this.Br=this.timer.AG-(Ar%E6);}}if(((CX!==this.CI)&&!!this.
I)&&((this.F&0x1)===0x1))this.I.Al(this.M);this.CI=CX;if(!E6&&!!this.timer){B.z9([
this,this.D4],this.timer,0);this.timer=null;}},Av:function(C){var A;if(C===this.
CE)return;this.CE=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Ga:function(
C){var A;if(this.EK===C)return;this.EK=C;this.CI=-1;if(!C&&!!this.timer){B.z9([this
,this.D4],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.
HG);B.zV([this,this.D4],this.timer,0);B.pe([this,this.D4],this);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.M);},F$:function(C){var A;if(C===this.Gu)return;
this.Gu=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Fq:function(C){var
A;if(C<0)C=0;if((C===this.GF)&&(this.CI===-1))return;this.GF=C;if(!this.timer)this.
CI=-1;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},By:function(C){var A;
if(C===this.Ah)return;if(!!this.Ah&&this.Ah.Jh)B.z9([this,this.Ln],this.Ah,0);this.
Ah=C;this.CI=-1;if(!!C&&C.Jh)B.zV([this,this.Ln],C,0);if(this.EK){this.Ga(false);
this.Ga(true);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},Ap:function(
C){if(C)this.At(0x1,0x0);else this.At(0x0,0x1);},NA:function(){var A;if(!this.Ah
)return Bi;var AE=this.Gu;var Bb=this.Ah.FrameSize;var Aq=this.M;var width=Aq[2]-
Aq[0];var height=Aq[3]-Aq[1];if(!Bb[0]||!Bb[1])return Bi;var AN=[0,0,width,height
];var Ak=AN;if(((AE&0x40)===0x40)){var Pw=((((AN[2]-AN[0])<<16)+((Bb[0]/2)|0))/Bb[
0])|0;var LD=((((AN[3]-AN[1])<<16)+((Bb[1]/2)|0))/Bb[1])|0;var HA=Pw;if(LD>HA)HA=
LD;Ak=B.abL(Ak,((Bb[0]*HA)+32768)>>16);Ak=B.abI(Ak,((Bb[1]*HA)+32768)>>16);}else
if(((AE&0x80)===0x80)){var Pw=((((AN[2]-AN[0])<<16)+((Bb[0]/2)|0))/Bb[0])|0;var LD=((((
AN[3]-AN[1])<<16)+((Bb[1]/2)|0))/Bb[1])|0;var HA=Pw;if(LD<HA)HA=LD;Ak=B.abL(Ak,((
Bb[0]*HA)+32768)>>16);Ak=B.abI(Ak,((Bb[1]*HA)+32768)>>16);}else if(!((AE&0x100)===
0x100))Ak=B.abK(Ak,Bb);if((Ak[2]-Ak[0])!==(AN[2]-AN[0])){if(((AE&0x4)===0x4))Ak=
B.abM(Ak,AN[2]-(Ak[2]-Ak[0]));else if(((AE&0x2)===0x2))Ak=B.abM(Ak,(AN[0]+(((AN[
2]-AN[0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));}if((Ak[3]-Ak[1])!==(AN[3]-AN[1])){if(((
AE&0x20)===0x20))Ak=B.abO(Ak,AN[3]-(Ak[3]-Ak[1]));else if(((AE&0x10)===0x10))Ak=
B.abO(Ak,(AN[1]+(((AN[3]-AN[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0));}Ak=B.abh(Ak,Aq.slice(
0,2));return Ak;},_Init:function(aArg){B.Core.BC._Init.call(this,aArg);this.__proto__=
E.AJ;},_Mark:function(D){var A;B.Core.BC._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Image"};E.Text={B8:null,BI:B.jV,String:B.jV,Ei:null,Ij:B.
wf,Gu:0x12,CE:0xFFFFFFFF,Dd:255,JK:false,I_:false,Np:false,DD:false,FB:function(
){if(!!this.Ei){this.O1(this.Ei);this.Ei=null;}},Er:function(Bn,aClip,aOffset,Bg
,aBlend){var A;if((this.BI===B.jV)||!this.B8)return;var AE=this.Gu;var font=this.
B8;var AN=B.abh(this.M,aOffset);var AL;var AV;var AU;var AO;var U2=this.CE;var DC=(((
Bg+1)*this.Dd)>>8)+1;var FS=this.BI.charCodeAt(0)||0;var T=B.abh(this.NA(),aOffset
);var Cs=[AN[0]-T[0],(AN[1]-T[1])-font.Ascent];if(FS<1)return;AL=AV=AO=AU=U2;if(
DC<256){AL=(AL&0x00FFFFFF)|((((((AL>>24)&0xFF)*DC)>>8)&0xFF)<<24);AV=(AV&0x00FFFFFF
)|((((((AV>>24)&0xFF)*DC)>>8)&0xFF)<<24);AU=(AU&0x00FFFFFF)|((((((AU>>24)&0xFF)*
DC)>>8)&0xFF)<<24);AO=(AO&0x00FFFFFF)|((((((AO>>24)&0xFF)*DC)>>8)&0xFF)<<24);}if(((
AE&0x80)===0x80)){if(this.NH())AE=(AE&~0x80)|0x4;else AE=(AE&~0x80)|0x1;}if((FS===
1)&&!((AE&0x40)===0x40)){Bn.PK(aClip,font,this.BI,2,(this.BI.charCodeAt(1)||0)-1
,AN,Cs,0,0,AL,AV,AU,AO,true);return;}var leading=font.Leading;var Pv=(font.Ascent+
font.Descent)+leading;var U0=aClip[1]-T[1];var U1=aClip[3]-T[1];var OP=T[2]-T[0];
var D5=0;var G=1;var Ba=this.BI.charCodeAt(1)||0;while(((D5+Pv)<U0)&&(Ba>0)){G=G+
Ba;D5=D5+Pv;Ba=this.BI.charCodeAt(G)||0;}while((D5<U1)&&(Ba>0)){var IO=B.abe(Cs,[
0,D5]);var Ru=0;var MM=false;if(((((AE&0x40)===0x40)&&((this.BI.charCodeAt((G+Ba
)-1)||0)!==0x0A))&&((this.BI.charCodeAt(G+1)||0)!==0x0A))&&((this.BI.charCodeAt(
G+Ba)||0)!==0x00))MM=true;if(MM&&!!(AE&0x6)){var Rt=G+Ba;var QK=this.BI.indexOf(
String.fromCharCode(0x20),G+1);var QL=this.BI.indexOf(String.fromCharCode(0xA0),
G+1);if(((QK<0)||(QK>=Rt))&&((QL<0)||(QL>=Rt)))MM=false;}if(MM)Ru=OP;else if(((AE&
0x4)===0x4))IO=[(IO[0]-OP)+font.Kj(this.BI,G+1,Ba-1),IO[1]];else if(((AE&0x2)===
0x2))IO=[(IO[0]-((OP/2)|0))+((font.Kj(this.BI,G+1,Ba-1)/2)|0),IO[1]];Bn.PK(aClip
,font,this.BI,G+1,Ba-1,AN,IO,Ru,0,AL,AV,AU,AO,true);G=G+Ba;D5=D5+Pv;Ba=this.BI.charCodeAt(
G)||0;}},P:function(C){var A;if(B.aaY(C,this.M))return;var Rs;Rs=((A=this.M)[2]-
A[0])!==(C[2]-C[0]);if(((Rs&&this.JK)&&this.DD)&&!((this.F&0x2000)===0x2000)){this.
BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);}if(((this.I_&&this.DD)&&!B.aaX([(
A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000
)){this.BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);}B.Core.BC.P.call(this,C
);B.pe([this,this.Pq],this);},O1:function(aBidi){if(!aBidi)return;B.rB(aBidi);},
U4:function(aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},Pq:function(Z){}
,Ia:function(Z){B.pe([this,this.MW],this);},MW:function(Z){var A;if(this.DD)return;
var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3]-A[1];var Gr=-1;var font=this.
B8;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.JK){Gr=width;if(
Gr<0)Gr=1;}if(!!this.Ei){this.O1(this.Ei);this.Ei=null;}this.DD=true;if((this.String
!==B.jV)&&!!font){var length=this.String.length;if(this.Np)this.Ei=this.U4(length
);this.BI=font.Td(this.String,0,Gr,length,this.Ei);if(!!this.Ei&&!this.Sc()){this.
O1(this.Ei);this.Ei=null;}}else this.BI=B.jV;this.Ij=A4;if((this.I_&&(this.BI!==
B.jV))&&!!font){var AE=this.Gu;var leading=font.Leading;var AQ=this.BI;var Gs=this.
NH();if(((AE&0x80)===0x80)){if(Gs)AE=(AE&~0x80)|0x4;else AE=(AE&~0x80)|0x1;}var M0=(
font.Ascent+font.Descent)+leading;var FS=AQ.charCodeAt(0)||0;var H6=((height+leading
)/M0)|0;var OU=false;var MB=false;if(H6<=0)H6=1;if(FS>H6){var Fw=0;var LB=0;var M1=
FS-1;var Cn;var CY=AQ.length;var tmp=B.jV;if(!!(AE&0x110)&&!!(AE&0x28))AE&=~0x110;
if(!!(AE&0x110))AE&=~0x28;if(((AE&0x20)===0x20))LB=FS-H6;else if(((AE&0x10)===0x10
)||((AE&0x100)===0x100)){LB=((FS-H6)/2)|0;M1=(LB+H6)-1;}else M1=H6-1;OU=LB>0;MB=
M1<(FS-1);for(Cn=1;Fw<LB;Fw=Fw+1)Cn=Cn+(AQ.charCodeAt(Cn)||0);if(MB)for(CY=Cn;Fw<
M1;Fw=Fw+1)CY=CY+(AQ.charCodeAt(CY)||0);if(OU){var Di=AQ.charCodeAt(Cn)||0;tmp=(
Ds+B.abW(AQ,Cn,Di))+Ds;tmp=B.abQ(tmp,0,(Di+2)&0xFFFF);Cn=Cn+Di;if((tmp.charCodeAt(
Di)||0)===0x0A){tmp=B.abQ(tmp,Di,0xFEFF);tmp=B.abQ(tmp,Di+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(AQ,Cn,CY-Cn);if(MB&&(CY>=Cn)){var Di=AQ.charCodeAt(CY)||
0;var DK=(Ds+B.abW(AQ,CY,Di))+Ds;DK=B.abQ(DK,0,(Di+2)&0xFFFF);DK=B.abQ(DK,1,0xFEFF
);if((DK.charCodeAt(Di)||0)===0x0A){DK=B.abQ(DK,Di,0xFEFF);DK=B.abQ(DK,Di+1,0x0A
);}if((DK.charCodeAt(2)||0)===0x0A){DK=B.abQ(DK,2,0xFEFF);DK=B.abQ(DK,1,0x0A);}else
DK=B.abQ(DK,1,0xFEFF);tmp=tmp+DK;}AQ=String.fromCharCode(H6&0xFFFF)+tmp;}var Fw=
0;var DZ=1;var Pe=width;FS=AQ.charCodeAt(0)||0;for(;Fw<FS;Fw=Fw+1){var Ie=OU&&!Fw;
var If=MB&&(Fw===(FS-1));var EY=false;var EZ=false;var J1=Gs;if((Gs&&Ie)&&!If){Ie=
false;If=true;}else if((Gs&&If)&&!Ie){If=false;Ie=true;}var LE=DZ+1;var Di=AQ.charCodeAt(
DZ)||0;var Cn=LE;var CY=(LE+Di)-2;var O5=-1;var O6=-1;if(!this.JK&&(font.Kj(AQ,LE
,Di-1)>Pe)){var IG=AE;if(((IG&0x2)===0x2)&&!!(IG&0x5))IG&=~0x2;if(((IG&0x2)===0x2
))IG&=~0x5;if(((IG&0x4)===0x4))EY=true;else if(((IG&0x2)===0x2)){EY=true;EZ=true;
}else EZ=true;}if((AQ.charCodeAt(Cn)||0)===0x0A)Cn=Cn+1;if((AQ.charCodeAt(CY)||0
)===0x0A)CY=CY-1;while(EY&&((AQ.charCodeAt(Cn)||0)===0xFEFF))Cn=Cn+1;while(EZ&&((
AQ.charCodeAt(CY)||0)===0xFEFF))CY=CY-1;EY=EY&&!If;EZ=EZ&&!Ie;while((((EY||EZ)||
Ie)||If)&&(Cn<CY)){if((EY&&(J1||!EZ))||Ie){if(O5>0)AQ=B.abQ(AQ,O5,0xFEFF);AQ=B.abQ(
AQ,Cn,0x2026);O5=Cn;Cn=Cn+1;J1=!J1;Ie=false;if(font.Kj(AQ,LE,Di-1)<=Pe){EY=false;
EZ=false;}else EY=EY||!EZ;}if((EZ&&(!J1||!EY))||If){if(O6>0)AQ=B.abQ(AQ,O6,0xFEFF
);AQ=B.abQ(AQ,CY,0x2026);O6=CY;CY=CY-1;J1=!J1;If=false;if(font.Kj(AQ,LE,Di-1)<=Pe
){EY=false;EZ=false;}else EZ=EZ||!EY;}}DZ=DZ+Di;}this.Ij=[font.PM(AQ),((AQ.charCodeAt(
0)||0)*M0)-leading];this.BI=AQ;}if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.
M);B.pe([this,this.Pq],this);},St:function(C){if(C===this.Np)return;this.Np=C;this.
BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);},P0:function(C){if(C===this.I_)
return;this.I_=C;if(this.JK||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);},N2:function(C){if(C===this.JK)
return;this.JK=C;if(this.DD){this.BI=B.jV;this.DD=false;B.pe([this,this.Ia],this
);}if(C||this.I_)this.F=this.F&~0x100;else this.F=this.F|0x100;},F$:function(C){
var A;if(C===this.Gu)return;this.Gu=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(
this.M);if(this.I_){this.BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);}if(this.
DD)B.pe([this,this.Pq],this);},BW:function(C){if(C===this.String)return;this.String=
C;this.BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);},GO:function(C){if(C===this.
B8)return;this.B8=C;this.BI=B.jV;this.DD=false;B.pe([this,this.Ia],this);},Av:function(
C){var A;if(C===this.CE)return;this.CE=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Al(this.M);},EQ:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dd)return;
this.Dd=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.M);},NH:function(){if(
!this.DD)this.MW(this);if(!this.Ei)return false;var result=false;var bidi=this.Ei;
result=B.v2(bidi);return result;},Sc:function(){if(!this.DD)this.MW(this);if(!this.
Ei)return false;var result=false;var bidi=this.Ei;result=B.zZ(bidi);return result;
},NA:function(){var A;if((this.String===B.jV)||!this.B8)return Bi;if(!this.DD)this.
MW(this);if(this.BI===B.jV)return Bi;var leading=this.B8.Leading;var M0=(this.B8.
Ascent+this.B8.Descent)+this.B8.Leading;if(B.aaX(this.Ij,A4))this.Ij=[this.B8.PM(
this.BI),this.Ij[1]];this.Ij=[this.Ij[0],((this.BI.charCodeAt(0)||0)*M0)-leading
];var AE=this.Gu;var Aq=this.M;var width=Aq[2]-Aq[0];var height=Aq[3]-Aq[1];var AN=[
0,0,width,height];var Ak=[].concat(AN.slice(0,2),B.abf(AN.slice(0,2),this.Ij));if(((
AE&0x80)===0x80)){if(this.NH())AE=(AE&~0x80)|0x4;else AE=(AE&~0x80)|0x1;}if(((AE&
0x40)===0x40)){var Gr;Gr=width;if(Gr<0)Gr=0;if(Gr>(Ak[2]-Ak[0]))Ak=B.abL(Ak,Gr);
}if((!!(AE&0x110)&&!!(AE&0x28))&&((Ak[3]-Ak[1])>(AN[3]-AN[1])))AE&=~0x110;if(!!(
AE&0x110))AE&=~0x28;if((((AE&0x2)===0x2)&&!!(AE&0x5))&&((Ak[2]-Ak[0])>(AN[2]-AN[
0])))AE&=~0x2;if(((AE&0x2)===0x2))AE&=~0x5;if((Ak[2]-Ak[0])!==(AN[2]-AN[0])){if(((
AE&0x4)===0x4))Ak=B.abM(Ak,AN[2]-(Ak[2]-Ak[0]));else if(((AE&0x2)===0x2))Ak=B.abM(
Ak,(AN[0]+(((AN[2]-AN[0])/2)|0))-(((Ak[2]-Ak[0])/2)|0));}if((Ak[3]-Ak[1])!==(AN[
3]-AN[1])){if(((AE&0x20)===0x20))Ak=B.abO(Ak,AN[3]-(Ak[3]-Ak[1]));else if(((AE&0x100
)===0x100))Ak=B.abO(Ak,((AN[1]+(((AN[3]-AN[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0))+(((
this.B8.Descent-this.B8.Ascent)/2)|0));else if(((AE&0x10)===0x10))Ak=B.abO(Ak,(AN[
1]+(((AN[3]-AN[1])/2)|0))-(((Ak[3]-Ak[1])/2)|0));}Ak=B.abh(Ak,Aq.slice(0,2));return Ak;
},Kr:function(){return this.Dd;},_Init:function(aArg){B.Core.BC._Init.call(this,
aArg);this.__proto__=E.Text;},_Done:function(){this.FB();this.__proto__=B.Core.BC;
B.Core.BC._Done.call(this);},_Mark:function(D){var A;B.Core.BC._Mark.call(this,D
);if((A=this.B8)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};
E.WC={RI:0x1,RH:0x2,RJ:0x4,RM:0x8,RL:0x10,RK:0x20,W5:0x40,W6:0x80,W$:0x100};E.Xa={
RI:0x1,RH:0x2,RJ:0x4,RM:0x8,RL:0x10,RK:0x20,VZ:0x40,VY:0x80,V4:0x100};E.WM={WL:0
,W3:1,W1:2,W2:3};
E._Init=function(){E.Ck.__proto__=B.Core.BC;E.A9.__proto__=B.Core.BC;E.Kh.__proto__=
B.Core.BC;E.AJ.__proto__=B.Core.BC;E.Text.__proto__=B.Core.BC;};E._ReInit=function(
){};E.Ec=function(D){};return E;})();

/* Embedded Wizard */