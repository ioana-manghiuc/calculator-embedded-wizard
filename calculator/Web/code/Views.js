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
var AV=[1,1];var AF=[0,0];var Da=[0,0,0,0];var Db="\uFEFF";var Ew="The Slide Touch Handler:";
var Ex="is already connected with a view.";var EU="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Hf="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
E.Lo={CT:null,H_:1,H9:1,BM:0xFFFFFFFF,CV:function(AJ,aClip,aOffset,Ap,aBlend){var
A;var E8=this.H9;var E9=this.H_;var EF=B.abf(this.AR,aOffset);var EG=B.abf(this.
AS,aOffset);var Gp;var Gq;var Aq=this.BM;if(B.aaX(EF,EG))return;aBlend=aBlend&&((
this.F&0x2)===0x2);Ap=Ap+1;Gp=Gq=Aq;if(Ap<256){Gp=(Gp&0x00FFFFFF)|((((Ap*((Gp>>24
)&0xFF))>>8)&0xFF)<<24);Gq=(Gq&0x00FFFFFF)|((((Ap*((Gq>>24)&0xFF))>>8)&0xFF)<<24
);}if((E8===1)&&(E9===1))AJ.Og(aClip,EF,EG,Gp,Gq,aBlend);else AJ.Oi(aClip,EF,EG,
E8,E9,Gp,Gq,aBlend);},GetExtent:function(){var E8=this.H9;var E9=this.H_;var EF=
this.AR;var EG=this.AS;if(((E8===1)&&(E9===1))||B.aaX(EF,EG))return B.Core.HY.GetExtent.
call(this);var FO=E8/2;var FP=E9/2;var Hw=EF[0];var Hx=EF[1];var Hy=EG[0];var Hz=
EG[1];var CH=Hy-Hw;var CI=Hz-Hx;var BK=Math.sqrt((CH*CH)+(CI*CI));CH=CH/BK;CI=CI
/BK;var Na=Hw+(CI*FO);var Nb=Hx-(CH*FO);var Ki=Hy+(CI*FP);var Kj=Hz-(CH*FP);var Kk=
Hy-(CI*FP);var Kl=Hz+(CH*FP);var Km=Hw-(CI*FO);var Kn=Hx+(CH*FO);var left=Na;var
right=Na;var top=Nb;var bottom=Nb;if(Ki<left)left=Ki;if(Kk<left)left=Kk;if(Km<left
)left=Km;if(Ki>right)right=Ki;if(Kk>right)right=Kk;if(Km>right)right=Km;if(Kj<top
)top=Kj;if(Kl<top)top=Kl;if(Kn<top)top=Kn;if(Kj>bottom)bottom=Kj;if(Kl>bottom)bottom=
Kl;if(Kn>bottom)bottom=Kn;var I=[left|0,top|0,right|0,bottom|0];I=[].concat(I.slice(
0,2),B.abf(I.slice(2,4),AV));return I;},Dt:function(Aw){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.T(this.GetClipping());},Pf:function(C){var A;if(C<1)C=1;if(
C===this.H_)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping()
);this.H_=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());if(((
C!==1)||(this.H9!==1))&&!this.CT){this.CT=B.aaL(B.ach.IY);if(this.CT.EM)B.zV([this
,this.Dt],this.CT,0);}if(((C===1)&&(this.H9===1))&&!!this.CT){if(this.CT.EM)B.z9([
this,this.Dt],this.CT,0);this.CT=null;}},Pe:function(C){var A;if(C<1)C=1;if(C===
this.H9)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());this.
H9=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());if(((C!==1)||(
this.H_!==1))&&!this.CT){this.CT=B.aaL(B.ach.IY);if(this.CT.EM)B.zV([this,this.Dt
],this.CT,0);}if(((C===1)&&(this.H_===1))&&!!this.CT){if(this.CT.EM)B.z9([this,this.
Dt],this.CT,0);this.CT=null;}},Bu:function(C){var A;if(C===this.BM)return;this.BM=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());},Lw:function(){
var A;return((this.F&0x1)===0x1);},Er:function(C){if(C)this.A7(0x1,0x0);else this.
A7(0x0,0x1);},_Init:function(aArg){B.Core.HY._Init.call(this,aArg);this.__proto__=
E.Lo;},_Mark:function(D){var A;B.Core.HY._Mark.call(this,D);if((A=this.CT)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Line"};E.Fs={LD:0,LC:0,KU:0xFFFFFFFF
,KV:0xFFFFFFFF,KX:0xFFFFFFFF,KW:0xFFFFFFFF,DC:0,BM:0xFFFFFFFF,CV:function(AJ,aClip
,aOffset,Ap,aBlend){var A;var Au=this.KW;var AA=this.KX;var Ax=this.KU;var Az=this.
KV;var Aq=this.BM;var E7=this.DC+this.LC;var Jw=this.DC+this.LD;var Ju=this.DC;var
Jt=this.DC;aBlend=aBlend&&((this.F&0x2)===0x2);Ap=Ap+1;if((((Au===AA)&&(Ax===Az)
)&&(Au===Ax))&&(Au===0xFFFFFFFF))Au=AA=Ax=Az=Aq;else if(Aq!==0xFFFFFFFF){Au=(Au&
0x00FFFFFF)|((((((Au>>24)&0xFF)*(((Aq>>24)&0xFF)+1))>>8)&0xFF)<<24);Au=(Au&0xFFFFFF00
)|((((Au&0xFF)*((Aq&0xFF)+1))>>8)&0xFF);Au=(Au&0xFFFF00FF)|((((((Au>>8)&0xFF)*(((
Aq>>8)&0xFF)+1))>>8)&0xFF)<<8);Au=(Au&0xFF00FFFF)|((((((Au>>16)&0xFF)*(((Aq>>16)&
0xFF)+1))>>8)&0xFF)<<16);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*(((Aq>>24)&0xFF)+
1))>>8)&0xFF)<<24);AA=(AA&0xFFFFFF00)|((((AA&0xFF)*((Aq&0xFF)+1))>>8)&0xFF);AA=(
AA&0xFFFF00FF)|((((((AA>>8)&0xFF)*(((Aq>>8)&0xFF)+1))>>8)&0xFF)<<8);AA=(AA&0xFF00FFFF
)|((((((AA>>16)&0xFF)*(((Aq>>16)&0xFF)+1))>>8)&0xFF)<<16);Ax=(Ax&0x00FFFFFF)|((((((
Ax>>24)&0xFF)*(((Aq>>24)&0xFF)+1))>>8)&0xFF)<<24);Ax=(Ax&0xFFFFFF00)|((((Ax&0xFF
)*((Aq&0xFF)+1))>>8)&0xFF);Ax=(Ax&0xFFFF00FF)|((((((Ax>>8)&0xFF)*(((Aq>>8)&0xFF)+
1))>>8)&0xFF)<<8);Ax=(Ax&0xFF00FFFF)|((((((Ax>>16)&0xFF)*(((Aq>>16)&0xFF)+1))>>8
)&0xFF)<<16);Az=(Az&0x00FFFFFF)|((((((Az>>24)&0xFF)*(((Aq>>24)&0xFF)+1))>>8)&0xFF
)<<24);Az=(Az&0xFFFFFF00)|((((Az&0xFF)*((Aq&0xFF)+1))>>8)&0xFF);Az=(Az&0xFFFF00FF
)|((((((Az>>8)&0xFF)*(((Aq>>8)&0xFF)+1))>>8)&0xFF)<<8);Az=(Az&0xFF00FFFF)|((((((
Az>>16)&0xFF)*(((Aq>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Ap<256){Au=(Au&0x00FFFFFF)|((((
Ap*((Au>>24)&0xFF))>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((Ap*((AA>>24)&0xFF))>>8
)&0xFF)<<24);Ax=(Ax&0x00FFFFFF)|((((Ap*((Ax>>24)&0xFF))>>8)&0xFF)<<24);Az=(Az&0x00FFFFFF
)|((((Ap*((Az>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!E7||!!Jw)||!!Ju)||!!Jt)AJ.Om(aClip
,B.abh(this.M,aOffset),E7,Jw,Ju,Jt,Au,AA,Az,Ax,aBlend);else AJ.JM(aClip,B.abh(this.
M,aOffset),Au,AA,Az,Ax,aBlend);},O6:function(C){var A;if(C<0)C=0;if(C===this.LD)
return;this.LD=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},O5:function(
C){var A;if(C<0)C=0;if(C===this.LC)return;this.LC=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.T(this.M);},OI:function(C){var A;if(C===this.KU)return;this.KU=C;if(
!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},OJ:function(C){var A;if(C===this.
KV)return;this.KV=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},OL:function(
C){var A;if(C===this.KX)return;this.KX=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.T(this.M);},OK:function(C){var A;if(C===this.KW)return;this.KW=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.T(this.M);},EO:function(C){var A;if(C<0)C=0;if(C===this.
DC)return;this.DC=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},Bu:function(
C){var A;if(C===this.BM)return;this.BM=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.T(this.M);},_Init:function(aArg){B.Core.A9._Init.call(this,aArg);this.__proto__=
E.Fs;},_className:"Views::Rectangle"};E.Bf={DC:0,Width:1,BM:0xFFFFFFFF,CV:function(
AJ,aClip,aOffset,Ap,aBlend){var A;var Au;var AA;var Ax;var Az;var Aq=this.BM;var
E7=this.DC;var Jw=this.DC;var Ju=this.DC;var Jt=this.DC;aBlend=aBlend&&((this.F&
0x2)===0x2);Ap=Ap+1;Au=AA=Ax=Az=Aq;if(Ap<256){Au=(Au&0x00FFFFFF)|((((Ap*((Au>>24
)&0xFF))>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((Ap*((AA>>24)&0xFF))>>8)&0xFF)<<24
);Ax=(Ax&0x00FFFFFF)|((((Ap*((Ax>>24)&0xFF))>>8)&0xFF)<<24);Az=(Az&0x00FFFFFF)|((((
Ap*((Az>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!E7||!!Jw)||!!Ju)||!!Jt)AJ.Oh(aClip,B.
abh(this.M,aOffset),this.Width,E7,Jw,Ju,Jt,Au,AA,Az,Ax,aBlend);else AJ.Oe(aClip,
B.abh(this.M,aOffset),this.Width,Au,AA,Az,Ax,aBlend);},EO:function(C){var A;if(C<
0)C=0;if(C===this.DC)return;this.DC=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(
this.M);},IT:function(C){var A;if(C<0)C=0;if(C===this.Width)return;this.Width=C;
if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},Bu:function(C){var A;if(C===
this.BM)return;this.BM=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},_Init:
function(aArg){B.Core.A9._Init.call(this,aArg);this.__proto__=E.Bf;},_className:
"Views::Border"};E.K_={timer:null,Ak:null,B$:-1,BM:0xFFFFFFFF,Fg:0,AX:0,Dw:false
,CV:function(AJ,aClip,aOffset,Ap,aBlend){var A;var Cj=this.Fg;if(this.B$>=0)Cj=this.
B$;if(!this.Ak||(Cj>=this.Ak.NoOfFrames))return;this.Ak.Update();var Au;var AA;var
Az;var Ax;var Aq=this.BM;var CM=(((Ap+1)*255)>>8)+1;var I=B.abh(this.M,aOffset);
aBlend=aBlend&&((this.F&0x2)===0x2);Au=AA=Ax=Az=Aq;if(CM<256){Au=(Au&0x00FFFFFF)|((((((
Au>>24)&0xFF)*CM)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CM)>>8)&
0xFF)<<24);Az=(Az&0x00FFFFFF)|((((((Az>>24)&0xFF)*CM)>>8)&0xFF)<<24);Ax=(Ax&0x00FFFFFF
)|((((((Ax>>24)&0xFF)*CM)>>8)&0xFF)<<24);}AJ.Od(aClip,this.Ak,Cj,I,0x1F,Au,AA,Az
,Ax,aBlend);},Dt:function(Aw){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.
M);},Cx:function(Aw){var A;var Cj=this.B$;var DO=0;if(!!this.Ak)DO=this.Ak.NoOfFrames
*this.Ak.FrameDelay;if((!!this.timer&&(this.B$<0))&&(DO>0))this.AX=this.timer.An-(
this.Fg*this.Ak.FrameDelay);if(!!this.timer&&(DO>0)){var X=(this.timer.An-this.AX
)|0;Cj=(X/this.Ak.FrameDelay)|0;if(X>=DO){Cj=Cj%this.Ak.NoOfFrames;this.AX=this.
timer.An-(X%DO);}}if(((Cj!==this.B$)&&!!this.G)&&((this.F&0x1)===0x1))this.G.T(this.
M);this.B$=Cj;if(!DO&&!!this.timer){B.z9([this,this.Cx],this.timer,0);this.timer=
null;}},Bu:function(C){var A;if(C===this.BM)return;this.BM=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.T(this.M);},G8:function(C){var A;if(this.Dw===C)return;this.
Dw=C;this.B$=-1;if(!C&&!!this.timer){B.z9([this,this.Cx],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.acj.Fb);B.zV([this,this.Cx],this.timer
,0);B.pe([this,this.Cx],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M
);},J2:function(C){var A;if(C<0)C=0;if((C===this.Fg)&&(this.B$===-1))return;this.
Fg=C;if(!this.timer)this.B$=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M
);},BE:function(C){var A;if(C===this.Ak)return;if(!!this.Ak&&this.Ak.EM)B.z9([this
,this.Dt],this.Ak,0);this.Ak=C;this.B$=-1;if(!!C&&C.EM)B.zV([this,this.Dt],C,0);
if(this.Dw){this.G8(false);this.G8(true);}if(!!this.G&&((this.F&0x1)===0x1))this.
G.T(this.M);},_Init:function(aArg){B.Core.A9._Init.call(this,aArg);this.__proto__=
E.K_;},_Mark:function(D){var A;B.Core.A9._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ak)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Frame"};E.BN={timer:null,Ak:null,AX:0,B$:0,BM:0xFFFFFFFF
,De:0x12,Fg:0,Dw:false,CV:function(AJ,aClip,aOffset,Ap,aBlend){var A;var Cj=this.
Fg;if(this.B$>=0)Cj=this.B$;if(!this.Ak||(Cj>=this.Ak.NoOfFrames))return;this.Ak.
Update();var N=this.G5();var Cd=this.Ak.FrameSize;if((N[0]>=N[2])||(N[1]>=N[3]))
return;var Au;var AA;var Az;var Ax;var Aq=this.BM;var CM=(((Ap+1)*255)>>8)+1;aBlend=
aBlend&&((this.F&0x2)===0x2);Au=AA=Ax=Az=Aq;if(CM<256){Au=(Au&0x00FFFFFF)|((((((
Au>>24)&0xFF)*CM)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CM)>>8)&
0xFF)<<24);Az=(Az&0x00FFFFFF)|((((((Az>>24)&0xFF)*CM)>>8)&0xFF)<<24);Ax=(Ax&0x00FFFFFF
)|((((((Ax>>24)&0xFF)*CM)>>8)&0xFF)<<24);}if(B.aaX([N[2]-N[0],N[3]-N[1]],Cd))AJ.
Mr(aClip,this.Ak,Cj,B.abh(this.M,aOffset),B.abe(this.M.slice(0,2),N.slice(0,2)),
Au,AA,Az,Ax,aBlend);else AJ.Po(aClip,this.Ak,Cj,B.abh(N,aOffset),[].concat(AF,Cd
),Au,AA,Az,Ax,aBlend,true);},Dt:function(Aw){var A;if(!!this.G&&((this.F&0x1)===
0x1))this.G.T(this.M);},Cx:function(Aw){var A;var Cj=this.B$;var DO=0;if(!!this.
Ak)DO=this.Ak.NoOfFrames*this.Ak.FrameDelay;if((!!this.timer&&(this.B$<0))&&(DO>
0))this.AX=this.timer.An-(this.Fg*this.Ak.FrameDelay);if(!!this.timer&&(DO>0)){var
X=(this.timer.An-this.AX)|0;Cj=(X/this.Ak.FrameDelay)|0;if(X>=DO){Cj=Cj%this.Ak.
NoOfFrames;this.AX=this.timer.An-(X%DO);}}if(((Cj!==this.B$)&&!!this.G)&&((this.
F&0x1)===0x1))this.G.T(this.M);this.B$=Cj;if(!DO&&!!this.timer){B.z9([this,this.
Cx],this.timer,0);this.timer=null;}},Bu:function(C){var A;if(C===this.BM)return;
this.BM=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},G8:function(C){var
A;if(this.Dw===C)return;this.Dw=C;this.B$=-1;if(!C&&!!this.timer){B.z9([this,this.
Cx],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.Fb);B.
zV([this,this.Cx],this.timer,0);B.pe([this,this.Cx],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.T(this.M);},Eg:function(C){var A;if(C===this.De)return;this.De=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},J2:function(C){var A;if(C<
0)C=0;if((C===this.Fg)&&(this.B$===-1))return;this.Fg=C;if(!this.timer)this.B$=-
1;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},BE:function(C){var A;if(C===
this.Ak)return;if(!!this.Ak&&this.Ak.EM)B.z9([this,this.Dt],this.Ak,0);this.Ak=C;
this.B$=-1;if(!!C&&C.EM)B.zV([this,this.Dt],C,0);if(this.Dw){this.G8(false);this.
G8(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);},Lw:function(){var
A;return((this.F&0x1)===0x1);},Er:function(C){if(C)this.A7(0x1,0x0);else this.A7(
0x0,0x1);},G5:function(){var A;if(!this.Ak)return Da;var Y=this.De;var Cd=this.Ak.
FrameSize;var Af=this.M;var width=Af[2]-Af[0];var height=Af[3]-Af[1];if(!Cd[0]||
!Cd[1])return Da;var Av=[0,0,width,height];var Aa=Av;if(((Y&0x40)===0x40)){var Mj=((((
Av[2]-Av[0])<<16)+((Cd[0]/2)|0))/Cd[0])|0;var Jx=((((Av[3]-Av[1])<<16)+((Cd[1]/2
)|0))/Cd[1])|0;var FZ=Mj;if(Jx>FZ)FZ=Jx;Aa=B.abL(Aa,((Cd[0]*FZ)+32768)>>16);Aa=B.
abI(Aa,((Cd[1]*FZ)+32768)>>16);}else if(((Y&0x80)===0x80)){var Mj=((((Av[2]-Av[0
])<<16)+((Cd[0]/2)|0))/Cd[0])|0;var Jx=((((Av[3]-Av[1])<<16)+((Cd[1]/2)|0))/Cd[1
])|0;var FZ=Mj;if(Jx<FZ)FZ=Jx;Aa=B.abL(Aa,((Cd[0]*FZ)+32768)>>16);Aa=B.abI(Aa,((
Cd[1]*FZ)+32768)>>16);}else if(!((Y&0x100)===0x100))Aa=B.abK(Aa,Cd);if((Aa[2]-Aa[
0])!==(Av[2]-Av[0])){if(((Y&0x4)===0x4))Aa=B.abM(Aa,Av[2]-(Aa[2]-Aa[0]));else if(((
Y&0x2)===0x2))Aa=B.abM(Aa,(Av[0]+(((Av[2]-Av[0])/2)|0))-(((Aa[2]-Aa[0])/2)|0));}
if((Aa[3]-Aa[1])!==(Av[3]-Av[1])){if(((Y&0x20)===0x20))Aa=B.abO(Aa,Av[3]-(Aa[3]-
Aa[1]));else if(((Y&0x10)===0x10))Aa=B.abO(Aa,(Av[1]+(((Av[3]-Av[1])/2)|0))-(((Aa[
3]-Aa[1])/2)|0));}Aa=B.abh(Aa,Af.slice(0,2));return Aa;},_Init:function(aArg){B.
Core.A9._Init.call(this,aArg);this.__proto__=E.BN;},_Mark:function(D){var A;B.Core.
A9._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Ak)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};E.Text={
ER:null,As:null,Es:null,Aj:B.jV,String:B.jV,Cu:null,G1:B.wf,Fu:B.wf,De:0x12,BM:0xFFFFFFFF
,ET:false,Fd:false,K2:false,B0:false,Ed:function(){if(!!this.Cu){this.L4(this.Cu
);this.Cu=null;}},CV:function(AJ,aClip,aOffset,Ap,aBlend){var A;if((this.Aj===B.
jV)||!this.As)return;var Y=this.De;var font=this.As;var Av=B.abh(this.M,aOffset);
var Au;var AA;var Az;var Ax;var col=this.BM;var CM=(((Ap+1)*255)>>8)+1;var B7=this.
Aj.charCodeAt(0)||0;var N=B.abh(this.G5(),aOffset);var E6=[Av[0]-N[0],(Av[1]-N[1
])-font.Ascent];if(B7<1)return;Au=AA=Ax=Az=col;if(CM<256){Au=(Au&0x00FFFFFF)|((((((
Au>>24)&0xFF)*CM)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CM)>>8)&
0xFF)<<24);Az=(Az&0x00FFFFFF)|((((((Az>>24)&0xFF)*CM)>>8)&0xFF)<<24);Ax=(Ax&0x00FFFFFF
)|((((((Ax>>24)&0xFF)*CM)>>8)&0xFF)<<24);}if(((Y&0x80)===0x80)){if(this.IH())Y=(
Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if((B7===1)&&!((Y&0x40)===0x40)){AJ.Mu(aClip,
font,this.Aj,2,(this.Aj.charCodeAt(1)||0)-1,Av,E6,0,0,Au,AA,Az,Ax,true);return;}
var leading=font.Leading;var FY=(font.Ascent+font.Descent)+leading;var Q$=aClip[
1]-N[1];var Ra=aClip[3]-N[1];var LT=N[2]-N[0];var EI=0;var H=1;var Aq=this.Aj.charCodeAt(
1)||0;while(((EI+FY)<Q$)&&(Aq>0)){H=H+Aq;EI=EI+FY;Aq=this.Aj.charCodeAt(H)||0;}while((
EI<Ra)&&(Aq>0)){var HD=B.abe(E6,[0,EI]);var GX=0;var CA=false;if(((((Y&0x40)===0x40
)&&((this.Aj.charCodeAt((H+Aq)-1)||0)!==0x0A))&&((this.Aj.charCodeAt(H+1)||0)!==
0x0A))&&((this.Aj.charCodeAt(H+Aq)||0)!==0x00))CA=true;if(CA&&!!(Y&0x6)){var KI=
H+Aq;var M_=this.Aj.indexOf(String.fromCharCode(0x20),H+1);var M$=this.Aj.indexOf(
String.fromCharCode(0xA0),H+1);if(((M_<0)||(M_>=KI))&&((M$<0)||(M$>=KI)))CA=false;
}if(CA)GX=LT;else if(((Y&0x4)===0x4))HD=[(HD[0]-LT)+font.Fh(this.Aj,H+1,Aq-1),HD[
1]];else if(((Y&0x2)===0x2))HD=[(HD[0]-((LT/2)|0))+((font.Fh(this.Aj,H+1,Aq-1)/2
)|0),HD[1]];AJ.Mu(aClip,font,this.Aj,H+1,Aq-1,Av,HD,GX,0,Au,AA,Az,Ax,true);H=H+Aq;
EI=EI+FY;Aq=this.Aj.charCodeAt(H)||0;}},R:function(C){var A;if(B.aaY(C,this.M))return;
var NX;NX=((A=this.M)[2]-A[0])!==(C[2]-C[0]);if(((NX&&this.ET)&&this.B0)&&!((this.
F&0x2000)===0x2000)){this.Aj=B.jV;this.B0=false;B.pe([this,this.GT],this);}if(((
this.Fd&&this.B0)&&!B.aaX([(A=this.M)[2]-A[0],A[3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&
!((this.F&0x2000)===0x2000)){this.Aj=B.jV;this.B0=false;B.pe([this,this.GT],this
);}B.Core.A9.R.call(this,C);B.pe([this,this.KD],this);},Q6:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.z1(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},Q5:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;
aIndex=B.z0(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},L4:function(aBidi){if(
!aBidi)return;B.rB(aBidi);},Rb:function(aSize){var bidi=null;bidi=B.v3(aSize);return bidi;
},KD:function(Aw){B.pe(this.Es,this);},GT:function(Aw){B.pe([this,this.FX],this);
},Rw:function(Aw){this.Ha(this.ER.At);},Rx:function(Aw){var A;var N=this.G5();var
KC=this.M.slice(0,2);if(N[0]>KC[0])N=[].concat(KC[0],N.slice(1,4));if(N[1]>KC[1]
)N=B.abP(N,KC[1]);var AY=B.abe(N.slice(0,2),this.M.slice(0,2));var HB=B.abe([(A=
this.M)[2]-A[0],A[3]-A[1]],[N[2]-N[0],N[3]-N[1]]);if(HB[0]>0)HB=[0,HB[1]];if(HB[
1]>0)HB=[HB[0],0];this.ER.At=this.Fu;this.ER.BC=B.abe(B.abf(this.Fu,HB),AY);this.
ER.BB=B.abe(this.Fu,AY);},FX:function(Aw){var A;if(this.B0)return;var width=(A=this.
M)[2]-A[0];var height=(A=this.M)[3]-A[1];var E5=-1;var font=this.As;if((!!font&&
!!!font.Ascent)&&!!!font.Descent)font=null;if(this.ET){E5=width;if(E5<0)E5=1;}if(
!!this.Cu){this.L4(this.Cu);this.Cu=null;}this.B0=true;if((this.String!==B.jV)&&
!!font){var length=this.String.length;if(this.K2)this.Cu=this.Rb(length);this.Aj=
font.Pi(this.String,0,E5,length,this.Cu);if(!!this.Cu&&!this.Ou()){this.L4(this.
Cu);this.Cu=null;}}else this.Aj=B.jV;this.G1=AF;if((this.Fd&&(this.Aj!==B.jV))&&
!!font){var Y=this.De;var leading=font.Leading;var Ay=this.Aj;var E7=this.IH();if(((
Y&0x80)===0x80)){if(E7)Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}var KH=(font.Ascent+
font.Descent)+leading;var B7=Ay.charCodeAt(0)||0;var GP=((height+leading)/KH)|0;
var LX=false;var Kp=false;if(GP<=0)GP=1;if(B7>GP){var AU=0;var Jv=0;var KJ=B7-1;
var BR;var Ck=Ay.length;var tmp=B.jV;if(!!(Y&0x110)&&!!(Y&0x28))Y&=~0x110;if(!!(
Y&0x110))Y&=~0x28;if(((Y&0x20)===0x20))Jv=B7-GP;else if(((Y&0x10)===0x10)||((Y&0x100
)===0x100)){Jv=((B7-GP)/2)|0;KJ=(Jv+GP)-1;}else KJ=GP-1;LX=Jv>0;Kp=KJ<(B7-1);for(
BR=1;AU<Jv;AU=AU+1)BR=BR+(Ay.charCodeAt(BR)||0);if(Kp)for(Ck=BR;AU<KJ;AU=AU+1)Ck=
Ck+(Ay.charCodeAt(Ck)||0);if(LX){var BK=Ay.charCodeAt(BR)||0;tmp=(Db+B.abW(Ay,BR
,BK))+Db;tmp=B.abQ(tmp,0,(BK+2)&0xFFFF);BR=BR+BK;if((tmp.charCodeAt(BK)||0)===0x0A
){tmp=B.abQ(tmp,BK,0xFEFF);tmp=B.abQ(tmp,BK+1,0x0A);}if((tmp.charCodeAt(2)||0)===
0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF
);}tmp=tmp+B.abW(Ay,BR,Ck-BR);if(Kp&&(Ck>=BR)){var BK=Ay.charCodeAt(Ck)||0;var CS=(
Db+B.abW(Ay,Ck,BK))+Db;CS=B.abQ(CS,0,(BK+2)&0xFFFF);CS=B.abQ(CS,1,0xFEFF);if((CS.
charCodeAt(BK)||0)===0x0A){CS=B.abQ(CS,BK,0xFEFF);CS=B.abQ(CS,BK+1,0x0A);}if((CS.
charCodeAt(2)||0)===0x0A){CS=B.abQ(CS,2,0xFEFF);CS=B.abQ(CS,1,0x0A);}else CS=B.abQ(
CS,1,0xFEFF);tmp=tmp+CS;}Ay=String.fromCharCode(GP&0xFFFF)+tmp;}var AU=0;var V=1;
var Mb=width;B7=Ay.charCodeAt(0)||0;for(;AU<B7;AU=AU+1){var GV=LX&&!AU;var GW=Kp&&(
AU===(B7-1));var DH=false;var DI=false;var Iq=E7;if((E7&&GV)&&!GW){GV=false;GW=true;
}else if((E7&&GW)&&!GV){GW=false;GV=true;}var DR=V+1;var BK=Ay.charCodeAt(V)||0;
var BR=DR;var Ck=(DR+BK)-2;var L9=-1;var L_=-1;if(!this.ET&&(font.Fh(Ay,DR,BK-1)>
Mb)){var Ho=Y;if(((Ho&0x2)===0x2)&&!!(Ho&0x5))Ho&=~0x2;if(((Ho&0x2)===0x2))Ho&=~
0x5;if(((Ho&0x4)===0x4))DH=true;else if(((Ho&0x2)===0x2)){DH=true;DI=true;}else DI=
true;}if((Ay.charCodeAt(BR)||0)===0x0A)BR=BR+1;if((Ay.charCodeAt(Ck)||0)===0x0A)
Ck=Ck-1;while(DH&&((Ay.charCodeAt(BR)||0)===0xFEFF))BR=BR+1;while(DI&&((Ay.charCodeAt(
Ck)||0)===0xFEFF))Ck=Ck-1;DH=DH&&!GW;DI=DI&&!GV;while((((DH||DI)||GV)||GW)&&(BR<
Ck)){if((DH&&(Iq||!DI))||GV){if(L9>0)Ay=B.abQ(Ay,L9,0xFEFF);Ay=B.abQ(Ay,BR,0x2026
);L9=BR;BR=BR+1;Iq=!Iq;GV=false;if(font.Fh(Ay,DR,BK-1)<=Mb){DH=false;DI=false;}else
DH=DH||!DI;}if((DI&&(!Iq||!DH))||GW){if(L_>0)Ay=B.abQ(Ay,L_,0xFEFF);Ay=B.abQ(Ay,
Ck,0x2026);L_=Ck;Ck=Ck-1;Iq=!Iq;GW=false;if(font.Fh(Ay,DR,BK-1)<=Mb){DH=false;DI=
false;}else DI=DI||!DH;}}V=V+BK;}this.G1=[font.My(Ay),((Ay.charCodeAt(0)||0)*KH)-
leading];this.Aj=Ay;}if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.M);B.pe([this
,this.KD],this);},OP:function(C){if(C===this.K2)return;this.K2=C;this.Aj=B.jV;this.
B0=false;B.pe([this,this.GT],this);},OO:function(C){if(C===this.Fd)return;this.Fd=
C;if((this.ET||C)||!!this.Es)this.F=this.F&~0x100;else this.F=this.F|0x100;this.
Aj=B.jV;this.B0=false;B.pe([this,this.GT],this);},Ly:function(C){if(B.aa0(C,this.
Es))return;this.Es=C;if((this.ET||!!C)||this.Fd)this.F=this.F&~0x100;else this.F=
this.F|0x100;},O8:function(C){if(C===this.ER)return;if(!!C&&!!C.Ip){B.ab5("%s%*%s"
,Ew,C,Ex);throw new Error(EU);}if(!!this.ER){this.ER.KF=null;this.ER.Ip=null;}this.
ER=C;if(!!C){C.KF=[this,this.Rx];C.Ip=[this,this.Rw];}},Hb:function(C){if(C===this.
ET)return;this.ET=C;if(this.B0){this.Aj=B.jV;this.B0=false;B.pe([this,this.GT],this
);}if((C||this.Fd)||!!this.Es)this.F=this.F&~0x100;else this.F=this.F|0x100;},Ha:
function(C){var A;if(B.aaX(C,this.Fu))return;this.Fu=C;if(!!this.G&&((this.F&0x1
)===0x1))this.G.T(this.M);if(this.B0)B.pe([this,this.KD],this);},Eg:function(C){
var A;if(C===this.De)return;this.De=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(
this.M);if(this.Fd){this.Aj=B.jV;this.B0=false;B.pe([this,this.GT],this);}if(this.
B0)B.pe([this,this.KD],this);},Cr:function(C){if(C===this.String)return;this.String=
C;this.Aj=B.jV;this.B0=false;B.pe([this,this.GT],this);},Gf:function(C){if(C===this.
As)return;this.As=C;this.Aj=B.jV;this.B0=false;B.pe([this,this.GT],this);},Bu:function(
C){var A;if(C===this.BM)return;this.BM=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.T(this.M);},IH:function(){if(!this.B0)this.FX(this);if(!this.Cu)return false;var
result=false;var bidi=this.Cu;result=B.v2(bidi);return result;},Ou:function(){if(
!this.B0)this.FX(this);if(!this.Cu)return false;var result=false;var bidi=this.Cu;
result=B.zZ(bidi);return result;},MT:function(aIndex){if(((this.String===B.jV)||
!this.As)||this.Fd)return AF;if(!this.B0)this.FX(this);if(aIndex<0)aIndex=0;var Rh=(
this.Aj.charCodeAt(0)||0)-1;var B8=this.Aj.charCodeAt(1)||0;var V=1;var F_=2;var
AU=0;var col=-1;var EZ=true;aIndex=aIndex+2;while((AU<Rh)&&((V+B8)<=aIndex)){V=V+
B8;AU=AU+1;F_=F_+1;aIndex=aIndex+1;B8=this.Aj.charCodeAt(V)||0;}if(aIndex>(V+B8)
)aIndex=V+B8;if(!!this.Cu)aIndex=(V+this.Q5(this.Cu,(V+1)-F_,(V+B8)-F_,(aIndex-V
)-1))+1;for(;aIndex>V;V=V+1){var AW=this.Aj.charCodeAt(V+1)||0;if(EZ)col=col+1;EZ=(
AW!==0xFEFF)&&(AW!==0x0A);}return[col,AU];},IV:function(I7){if(((this.String===B.
jV)||!this.As)||this.Fd)return 0;if(!this.B0)this.FX(this);var AU=I7[1];var col=
I7[0];var V=1;var F_=2;var B7=this.Aj.charCodeAt(0)||0;var B8=this.Aj.charCodeAt(
1)||0;if(AU>=B7){AU=B7-1;col=this.Aj.length;}if(AU<0){AU=0;col=0;}if(col<0)col=0;
while((AU>0)&&(B8>0)){V=V+B8;AU=AU-1;F_=F_+1;B8=this.Aj.charCodeAt(V)||0;}var DL=
V;var KK=(V-F_)+1;var KI=(KK+B8)-1;var Jq=false;while((col>=0)&&(B8>1)){var AW=this.
Aj.charCodeAt(V+1)||0;V=V+1;B8=B8-1;Jq=(AW===0xFEFF)||(AW===0x0A);if(!Jq){col=col-
1;DL=V;}}if((!Jq&&(col>=0))&&((this.Aj.charCodeAt(V+1)||0)===0x00))Jq=true;if(Jq
)DL=DL+1;DL=DL-F_;if(!!this.Cu)DL=KK+this.Q6(this.Cu,KK,KI,DL-KK);return DL;},J4:
function(Ch){var A;if((this.String===B.jV)||!this.As)return AF;if(!this.B0)this.
FX(this);var N=this.G5();if((N[0]>=N[2])||(N[1]>=N[3]))return AF;var font=this.As;
var Y=this.De;var B7=this.Aj.charCodeAt(0)||0;var leading=font.Leading;if(Ch[1]<
N[1])Ch=[Ch[0],N[1]];if(Ch[1]>=N[3])Ch=[Ch[0],N[3]-1];var FY=(font.Ascent+font.Descent
)+leading;var AU=((Ch[1]-N[1])/FY)|0;var Cn=this.K$(AU);var B8=Cn.length;var CA=
false;if(((Y&0x80)===0x80)){if(this.IH())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if(((
Y&0x40)===0x40)&&(AU<(B7-1)))CA=true;if((CA&&(Cn.indexOf(String.fromCharCode(0x20
),0)<0))&&(Cn.indexOf(String.fromCharCode(0xA0),0)<0))CA=false;if(CA){var V=1;var
HK=AU;while(HK>0){V=V+(this.Aj.charCodeAt(V)||0);HK=HK-1;}if(((this.Aj.charCodeAt(
V+1)||0)===0x0A)||((this.Aj.charCodeAt((V+(this.Aj.charCodeAt(V)||0))-1)||0)===0x0A
))CA=false;}var GX=0;var DS=0;if(CA)GX=N[2]-N[0];else if(((Y&0x4)===0x4))DS=(N[2
]-N[0])-font.Fh(Cn,0,B8);else if(((Y&0x2)===0x2))DS=(((N[2]-N[0])/2)|0)-((font.Fh(
Cn,0,B8)/2)|0);var col=font.Oq(Cn,0,B8,(Ch[0]-N[0])-DS,GX);if(col<0)col=0;return[
col,AU];},LG:function(I7){var A;if((this.String===B.jV)||!this.As)return AF;if(!
this.B0)this.FX(this);var B7=this.Aj.charCodeAt(0)||0;var font=this.As;var Y=this.
De;var AU=I7[1];var col=I7[0];if(AU>=B7){AU=B7-1;col=this.Aj.length;}if(AU<0){AU=
0;col=0;}var Cn=this.K$(AU);var B8=Cn.length;var N=this.G5();var CA=false;var leading=
font.Leading;if(((Y&0x80)===0x80)){if(this.IH())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|
0x1;}if(((Y&0x40)===0x40)&&(AU<(B7-1)))CA=true;if((CA&&(Cn.indexOf(String.fromCharCode(
0x20),0)<0))&&(Cn.indexOf(String.fromCharCode(0xA0),0)<0))CA=false;if(CA){var V=
1;var HK=AU;while(HK>0){V=V+(this.Aj.charCodeAt(V)||0);HK=HK-1;}if(((this.Aj.charCodeAt(
V+1)||0)===0x0A)||((this.Aj.charCodeAt((V+(this.Aj.charCodeAt(V)||0))-1)||0)===0x0A
))CA=false;}var EI=(N[1]+(AU*((font.Ascent+font.Descent)+leading)))+font.Ascent;
var GX=0;var DS=N[0];if(CA)GX=N[2]-N[0];else if(((Y&0x4)===0x4))DS=N[2]-font.Fh(
Cn,0,B8);else if(((Y&0x2)===0x2))DS=(DS+(((N[2]-N[0])/2)|0))-((font.Fh(Cn,0,B8)/
2)|0);var pos=font.Op(Cn,0,B8,col,GX);if(pos<0)pos=0;return[DS+pos,EI];},K$:function(
I6){if((this.String===B.jV)||!this.As)return B.jV;if(!this.B0)this.FX(this);var B7=
this.Aj.charCodeAt(0)||0;var V=1;if((!this.As||(I6<0))||(I6>=B7))return B.jV;while(
I6>0){V=V+(this.Aj.charCodeAt(V)||0);I6=I6-1;}var DR=V;var Ii=V+(this.Aj.charCodeAt(
V)||0);var AW=0x00;do{DR=DR+1;AW=this.Aj.charCodeAt(DR)||0;}while(((AW===0xFEFF)||(
AW===0x0A))&&(DR<=Ii));do{Ii=Ii-1;AW=this.Aj.charCodeAt(Ii)||0;}while(((AW===0xFEFF
)||(AW===0x0A))&&(DR<=Ii));var Cn=B.abW(this.Aj,DR,(Ii-DR)+1);var HA;for(HA=Cn.indexOf(
String.fromCharCode(0xFEFF),0);HA>=0;HA=Cn.indexOf(String.fromCharCode(0xFEFF),HA+
1)){var DL=HA+1;while((Cn.charCodeAt(DL)||0)===0xFEFF)DL=DL+1;Cn=B.ab1(Cn,HA,DL-
HA);}return Cn;},G5:function(){var A;if((this.String===B.jV)||!this.As)return Da;
if(!this.B0)this.FX(this);if(this.Aj===B.jV)return Da;var leading=this.As.Leading;
var KH=(this.As.Ascent+this.As.Descent)+this.As.Leading;if(B.aaX(this.G1,AF))this.
G1=[this.As.My(this.Aj),this.G1[1]];this.G1=[this.G1[0],((this.Aj.charCodeAt(0)||
0)*KH)-leading];var Y=this.De;var Af=this.M;var width=Af[2]-Af[0];var height=Af[
3]-Af[1];var Av=[0,0,width,height];var Aa=[].concat(Av.slice(0,2),B.abf(Av.slice(
0,2),this.G1));if(((Y&0x80)===0x80)){if(this.IH())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80
)|0x1;}if(((Y&0x40)===0x40)){var E5;E5=width;if(E5<0)E5=0;if(E5>(Aa[2]-Aa[0]))Aa=
B.abL(Aa,E5);}if((!!(Y&0x110)&&!!(Y&0x28))&&((Aa[3]-Aa[1])>(Av[3]-Av[1])))Y&=~0x110;
if(!!(Y&0x110))Y&=~0x28;if((((Y&0x2)===0x2)&&!!(Y&0x5))&&((Aa[2]-Aa[0])>(Av[2]-Av[
0])))Y&=~0x2;if(((Y&0x2)===0x2))Y&=~0x5;if((Aa[2]-Aa[0])!==(Av[2]-Av[0])){if(((Y&
0x4)===0x4))Aa=B.abM(Aa,Av[2]-(Aa[2]-Aa[0]));else if(((Y&0x2)===0x2))Aa=B.abM(Aa
,(Av[0]+(((Av[2]-Av[0])/2)|0))-(((Aa[2]-Aa[0])/2)|0));}if((Aa[3]-Aa[1])!==(Av[3]-
Av[1])){if(((Y&0x20)===0x20))Aa=B.abO(Aa,Av[3]-(Aa[3]-Aa[1]));else if(((Y&0x100)===
0x100))Aa=B.abO(Aa,((Av[1]+(((Av[3]-Av[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0))+(((this.
As.Descent-this.As.Ascent)/2)|0));else if(((Y&0x10)===0x10))Aa=B.abO(Aa,(Av[1]+(((
Av[3]-Av[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0));}Aa=B.abh(Aa,Af.slice(0,2));return B.
abh(Aa,this.Fu);},_Init:function(aArg){B.Core.A9._Init.call(this,aArg);this.__proto__=
E.Text;},_Done:function(){this.Ed();this.__proto__=B.Core.A9;B.Core.A9._Done.call(
this);},_Mark:function(D){var A;B.Core.A9._Mark.call(this,D);if((A=this.ER)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.As)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Es)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"
};E.He={Gv:null,Go:B.wf,AE:B.abi(4,3,0,null),Hc:B.wg,Ds:0,HE:0,LB:true,G$:function(
C){if(B.aaX(C,this.BP))return;B.Core.D0.G$.call(this,C);this.AE.Set(3,0,C[0]);this.
AE.Set(3,1,C[1]);this.AE.Set(3,2,1);this.Ds=0x45;B.pe([this,this.Iw],this);},Gk:
function(C){if(B.aaX(C,this.B9))return;B.Core.D0.Gk.call(this,C);this.AE.Set(2,0
,C[0]);this.AE.Set(2,1,C[1]);this.AE.Set(2,2,1);this.Ds=0x45;B.pe([this,this.Iw]
,this);},DZ:function(C){if(B.aaX(C,this.AS))return;B.Core.D0.DZ.call(this,C);this.
AE.Set(1,0,C[0]);this.AE.Set(1,1,C[1]);this.AE.Set(1,2,1);this.Ds=0x45;B.pe([this
,this.Iw],this);},Ep:function(C){if(B.aaX(C,this.AR))return;B.Core.D0.Ep.call(this
,C);this.AE.Set(0,0,C[0]);this.AE.Set(0,1,C[1]);this.AE.Set(0,2,1);this.Ds=0x45;
B.pe([this,this.Iw],this);},Q9:function(){return;},Iw:function(Aw){var A;this.Gv=
null;if(this.Ds===0x00)return;if(this.Ds===0x45){var ED=B._NewObject(B.Graphics.
MX,0);ED=ED.K0(this.AE.Get(0,0),this.AE.Get(0,1),this.AE.Get(1,0),this.AE.Get(1,
1),this.AE.Get(2,0),this.AE.Get(2,1),this.AE.Get(3,0),this.AE.Get(3,1));if(!!ED){
ED.JH(0,0);this.AE.Set(0,2,ED.IZ*240);ED.JH(1,0);this.AE.Set(1,2,ED.IZ*240);ED.JH(
1,1);this.AE.Set(2,2,ED.IZ*240);ED.JH(0,1);this.AE.Set(3,2,ED.IZ*240);}this.Q9();
}this.HE=this.Ds;this.Ds=0x00;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping(
));},O4:function(C){var A;if(C===this.LB)return;this.LB=C;if(!!this.G&&((this.F&
0x1)===0x1))this.G.T(this.GetClipping());},MJ:function(C){var A;if(B.aaY(C,this.
Hc))return;this.Hc=C;if((((this.HE===0x45)&&(this.Ds===0x00))&&!!this.G)&&((this.
F&0x1)===0x1))this.G.T(this.GetClipping());if((this.HE!==0x45)&&(this.Ds===0x00)
){this.Ds=this.HE;B.pe([this,this.Iw],this);}},HZ:function(Br){var A;if(!!!this.
Gv){this.Gv=B._NewObject(B.Graphics.Mz,0);this.Gv.K0(this.AE.Get(0,0),this.AE.Get(
0,1),this.AE.Get(1,0),this.AE.Get(1,1),this.AE.Get(2,0),this.AE.Get(2,1),this.AE.
Get(3,0),this.AE.Get(3,1));}if(!this.Gv.Pk(Br))return AF;var Dv=B.aaV(this.Hc,[].
concat(AF,this.Go));var DS=this.Gv.MY*(Dv[2]-Dv[0]);var EI=this.Gv.MZ*(Dv[3]-Dv[
1]);return B.abf([DS|0,EI|0],Dv.slice(0,2));},_Init:function(aArg){B.Core.D0._Init.
call(this,aArg);(this.AE=[]).__proto__=E.He.AE;this.__proto__=E.He;this.F=0x3;},
_Mark:function(D){var A;B.Core.D0._Mark.call(this,D);if((A=this.Gv)&&(A._cycle!=
D))A._Mark(A._cycle=D);},_className:"Views::WarpView"};E.LL={AL:null,bitmap:null
,Ab:null,EP:255,CV:function(AJ,aClip,aOffset,Ap,aBlend){var A;if(!this.bitmap)return;
this.bitmap.Update();var D8=aOffset[0];var D9=aOffset[1];var N=B.aaV(this.Hc,[].
concat(AF,this.Go));aBlend=aBlend&&((this.F&0x2)===0x2);Ap=Ap+1;var ND;var NE;var
NF;var NG;var Rl=this.EP;ND=NE=NF=NG=Rl;var Gp=255|(255<<8)|(255<<16)|((((Ap*ND)>>
8)&0xFF)<<24);var Gq=255|(255<<8)|(255<<16)|((((Ap*NE)>>8)&0xFF)<<24);var Q7=255|(
255<<8)|(255<<16)|((((Ap*NF)>>8)&0xFF)<<24);var Q8=255|(255<<8)|(255<<16)|((((Ap
*NG)>>8)&0xFF)<<24);aClip=B.aaV(aClip,B.abh(Da,aOffset));AJ.Ps(aClip,this.bitmap
,0,this.AE.Get(0,0)+D8,this.AE.Get(0,1)+D9,this.AE.Get(0,2),this.AE.Get(1,0)+D8,
this.AE.Get(1,1)+D9,this.AE.Get(1,2),this.AE.Get(2,0)+D8,this.AE.Get(2,1)+D9,this.
AE.Get(2,2),this.AE.Get(3,0)+D8,this.AE.Get(3,1)+D9,this.AE.Get(3,2),N,Gp,Gq,Q7,
Q8,aBlend,this.LB);},Bc:function(Ao){if(!this.Ab||!this.AL)return null;var Q=(B.
Core.EJ.isPrototypeOf(Ao)?Ao:null);var AO=(B.Core.HR.isPrototypeOf(Ao)?Ao:null);
if(!Q&&!AO)return null;var AY=AF;var W=this.AL.G;while(!!W&&(W!==this.Ab)){AY=B.
abe(AY,W.M.slice(0,2));W=W.G;}var J=this.AL;if(!!Q&&!Q.Down)this.AL=null;if(!!Q){
Q.Bi=B.abf(this.HZ(Q.Bi),AY);Q.Cq=B.abf(this.HZ(Q.Cq),AY);return J.Bc(Q);}if(!!AO
){var Ro=B.abf(this.HZ(B.abe(AO.Bi,AO.At)),AY);AO.Bi=B.abf(this.HZ(AO.Bi),AY);AO.
Cq=B.abf(this.HZ(AO.Cq),AY);AO.At=B.abe(AO.Bi,Ro);return J.Bc(AO);}return E.He.Bc.
call(this,Ao);},Eb:function(Ad,P,Ct,D2,Ey,EW){var A;if(!this.Ab||!((this.Ab.F&0x18
)===0x18))return null;var pos=B.aaI(Ad);pos=this.HZ(pos);var Dv=B.aaV(this.Hc,[].
concat(AF,this.Go));if(!B.wa(Dv,pos))return null;var Bx=this.Ab.Eb(B.abh(B.abh([
0,0,Ad[2]-Ad[0],Ad[3]-Ad[1]],pos),this.Ab.M.slice(0,2)),P,Ct,D2,null,EW);if(!!Bx
)this.AL=Bx.BV;else this.AL=null;if(!!this.AL)return B._NewObject(B.Core.IA,0).Initialize(
this,AF);return null;},Dt:function(Aw){var A;var NH=this.Go;if(!!this.Ab)this.bitmap=
this.Ab.AT;else this.bitmap=null;if(!!this.bitmap)this.Go=this.bitmap.FrameSize;
else this.Go=AF;if(((B.aaX(NH,this.Go)||((this.HE===0x45)&&(this.Ds===0x00)))&&!
!this.G)&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());if(((this.HE!==0x45)&&(
this.Ds===0x00))&&!B.aaX(NH,this.Go)){this.Ds=this.HE;B.pe([this,this.Iw],this);
}},IR:function(C){var A;if(C===this.EP)return;this.EP=C;if(!!this.G&&((this.F&0x1
)===0x1))this.G.T(this.GetClipping());},OR:function(C){if(C===this.Ab)return;if(
!!C&&(C===this.G))throw new Error(Hf);if(!!this.Ab){B.z9([this,this.Dt],this.Ab,
0);this.bitmap=null;}this.Ab=C;if(!!C){B.zV([this,this.Dt],C,0);this.bitmap=C.AT;
}this.Dt(this);},_Init:function(aArg){E.He._Init.call(this,aArg);this.__proto__=
E.LL;},_Mark:function(D){var A;E.He._Mark.call(this,D);if((A=this.AL)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};E.
Sh={N6:0x1,N5:0x2,N7:0x4,N_:0x8,N9:0x10,N8:0x20,SH:0x40,SI:0x80,SK:0x100};E.SL={
N6:0x1,N5:0x2,N7:0x4,N_:0x8,N9:0x10,N8:0x20,RY:0x40,RX:0x80,R3:0x100};E.Sr={Sq:0
,SF:1,SD:2,SE:3};
E._Init=function(){E.Lo.__proto__=B.Core.HY;E.Fs.__proto__=B.Core.A9;E.Bf.__proto__=
B.Core.A9;E.K_.__proto__=B.Core.A9;E.BN.__proto__=B.Core.A9;E.Text.__proto__=B.Core.
A9;E.He.__proto__=B.Core.D0;E.LL.__proto__=E.He;};E._ReInit=function(){};E.Dc=function(
D){};return E;})();

/* Embedded Wizard */