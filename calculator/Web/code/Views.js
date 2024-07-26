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
var AY=[1,1];var AF=[0,0];var Do=[0,0,0,0];var Ei="\uFEFF";var Ej="The Slide Touch Handler:";
var Ek="is already connected with a view.";var E4="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var FJ="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
E.LO={C3:null,Iq:1,Ip:1,Bm:0xFFFFFFFF,C5:function(AL,aClip,aOffset,Ar,aBlend){var
A;var Fg=this.Ip;var Fh=this.Iq;var EO=B.abf(this.AT,aOffset);var EP=B.abf(this.
AU,aOffset);var GQ;var GR;var As=this.Bm;if(B.aaX(EO,EP))return;aBlend=aBlend&&((
this.F&0x2)===0x2);Ar=Ar+1;GQ=GR=As;if(Ar<256){GQ=(GQ&0x00FFFFFF)|((((Ar*((GQ>>24
)&0xFF))>>8)&0xFF)<<24);GR=(GR&0x00FFFFFF)|((((Ar*((GR>>24)&0xFF))>>8)&0xFF)<<24
);}if((Fg===1)&&(Fh===1))AL.O0(aClip,EO,EP,GQ,GR,aBlend);else AL.O2(aClip,EO,EP,
Fg,Fh,GQ,GR,aBlend);},GetExtent:function(){var Fg=this.Ip;var Fh=this.Iq;var EO=
this.AT;var EP=this.AU;if(((Fg===1)&&(Fh===1))||B.aaX(EO,EP))return B.Core.H8.GetExtent.
call(this);var FX=Fg/2;var FY=Fh/2;var HD=EO[0];var HE=EO[1];var HF=EP[0];var HG=
EP[1];var CR=HF-HD;var CS=HG-HE;var BR=Math.sqrt((CR*CR)+(CS*CS));CR=CR/BR;CS=CS
/BR;var NT=HD+(CS*FX);var NU=HE-(CR*FX);var KH=HF+(CS*FY);var KI=HG-(CR*FY);var KJ=
HF-(CS*FY);var KK=HG+(CR*FY);var KL=HD-(CS*FX);var KM=HE+(CR*FX);var left=NT;var
right=NT;var top=NU;var bottom=NU;if(KH<left)left=KH;if(KJ<left)left=KJ;if(KL<left
)left=KL;if(KH>right)right=KH;if(KJ>right)right=KJ;if(KL>right)right=KL;if(KI<top
)top=KI;if(KK<top)top=KK;if(KM<top)top=KM;if(KI>bottom)bottom=KI;if(KK>bottom)bottom=
KK;if(KM>bottom)bottom=KM;var I=[left|0,top|0,right|0,bottom|0];I=[].concat(I.slice(
0,2),B.abf(I.slice(2,4),AY));return I;},DD:function(Am){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.U(this.GetClipping());},PW:function(C){var A;if(C<1)C=1;if(
C===this.Iq)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping()
);this.Iq=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if(((
C!==1)||(this.Ip!==1))&&!this.C3){this.C3=B.aaL(B.ach.Jd);if(this.C3.EU)B.zV([this
,this.DD],this.C3,0);}if(((C===1)&&(this.Ip===1))&&!!this.C3){if(this.C3.EU)B.z9([
this,this.DD],this.C3,0);this.C3=null;}},PV:function(C){var A;if(C<1)C=1;if(C===
this.Ip)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());this.
Ip=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if(((C!==1)||(
this.Iq!==1))&&!this.C3){this.C3=B.aaL(B.ach.Jd);if(this.C3.EU)B.zV([this,this.DD
],this.C3,0);}if(((C===1)&&(this.Iq===1))&&!!this.C3){if(this.C3.EU)B.z9([this,this.
DD],this.C3,0);this.C3=null;}},AX:function(C){var A;if(C===this.Bm)return;this.Bm=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());},Po:function(){
var A;return((this.F&0x1)===0x1);},AM:function(C){if(C)this.A7(0x1,0x0);else this.
A7(0x0,0x1);},_Init:function(aArg){B.Core.H8._Init.call(this,aArg);this.__proto__=
E.LO;},_Mark:function(D){var A;B.Core.H8._Mark.call(this,D);if((A=this.C3)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Line"};E.CI={Mb:0,Ma:0,Li:0xFFFFFFFF
,Lj:0xFFFFFFFF,Ll:0xFFFFFFFF,Lk:0xFFFFFFFF,DT:0,Bm:0xFFFFFFFF,C5:function(AL,aClip
,aOffset,Ar,aBlend){var A;var Aw=this.Lk;var AB=this.Ll;var Ay=this.Li;var AA=this.
Lj;var As=this.Bm;var Ff=this.DT+this.Ma;var JR=this.DT+this.Mb;var JP=this.DT;var
JO=this.DT;aBlend=aBlend&&((this.F&0x2)===0x2);Ar=Ar+1;if((((Aw===AB)&&(Ay===AA)
)&&(Aw===Ay))&&(Aw===0xFFFFFFFF))Aw=AB=Ay=AA=As;else if(As!==0xFFFFFFFF){Aw=(Aw&
0x00FFFFFF)|((((((Aw>>24)&0xFF)*(((As>>24)&0xFF)+1))>>8)&0xFF)<<24);Aw=(Aw&0xFFFFFF00
)|((((Aw&0xFF)*((As&0xFF)+1))>>8)&0xFF);Aw=(Aw&0xFFFF00FF)|((((((Aw>>8)&0xFF)*(((
As>>8)&0xFF)+1))>>8)&0xFF)<<8);Aw=(Aw&0xFF00FFFF)|((((((Aw>>16)&0xFF)*(((As>>16)&
0xFF)+1))>>8)&0xFF)<<16);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*(((As>>24)&0xFF)+
1))>>8)&0xFF)<<24);AB=(AB&0xFFFFFF00)|((((AB&0xFF)*((As&0xFF)+1))>>8)&0xFF);AB=(
AB&0xFFFF00FF)|((((((AB>>8)&0xFF)*(((As>>8)&0xFF)+1))>>8)&0xFF)<<8);AB=(AB&0xFF00FFFF
)|((((((AB>>16)&0xFF)*(((As>>16)&0xFF)+1))>>8)&0xFF)<<16);Ay=(Ay&0x00FFFFFF)|((((((
Ay>>24)&0xFF)*(((As>>24)&0xFF)+1))>>8)&0xFF)<<24);Ay=(Ay&0xFFFFFF00)|((((Ay&0xFF
)*((As&0xFF)+1))>>8)&0xFF);Ay=(Ay&0xFFFF00FF)|((((((Ay>>8)&0xFF)*(((As>>8)&0xFF)+
1))>>8)&0xFF)<<8);Ay=(Ay&0xFF00FFFF)|((((((Ay>>16)&0xFF)*(((As>>16)&0xFF)+1))>>8
)&0xFF)<<16);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*(((As>>24)&0xFF)+1))>>8)&0xFF
)<<24);AA=(AA&0xFFFFFF00)|((((AA&0xFF)*((As&0xFF)+1))>>8)&0xFF);AA=(AA&0xFFFF00FF
)|((((((AA>>8)&0xFF)*(((As>>8)&0xFF)+1))>>8)&0xFF)<<8);AA=(AA&0xFF00FFFF)|((((((
AA>>16)&0xFF)*(((As>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Ar<256){Aw=(Aw&0x00FFFFFF)|((((
Ar*((Aw>>24)&0xFF))>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((Ar*((AB>>24)&0xFF))>>8
)&0xFF)<<24);Ay=(Ay&0x00FFFFFF)|((((Ar*((Ay>>24)&0xFF))>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF
)|((((Ar*((AA>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Ff||!!JR)||!!JP)||!!JO)AL.O5(aClip
,B.abh(this.M,aOffset),Ff,JR,JP,JO,Aw,AB,AA,Ay,aBlend);else AL.J7(aClip,B.abh(this.
M,aOffset),Aw,AB,AA,Ay,aBlend);},PL:function(C){var A;if(C<0)C=0;if(C===this.Mb)
return;this.Mb=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},PK:function(
C){var A;if(C<0)C=0;if(C===this.Ma)return;this.Ma=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.M);},L3:function(C){var A;if(C===this.Li)return;this.Li=C;if(
!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},L4:function(C){var A;if(C===this.
Lj)return;this.Lj=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Pq:function(
C){var A;if(C===this.Ll)return;this.Ll=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.M);},Pp:function(C){var A;if(C===this.Lk)return;this.Lk=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.M);},E0:function(C){var A;if(C<0)C=0;if(C===this.
DT)return;this.DT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},AX:function(
C){var A;if(C===this.Bm)return;this.Bm=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.M);},_Init:function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=
E.CI;},_className:"Views::Rectangle"};E.Bi={DT:0,Width:1,Bm:0xFFFFFFFF,C5:function(
AL,aClip,aOffset,Ar,aBlend){var A;var Aw;var AB;var Ay;var AA;var As=this.Bm;var
Ff=this.DT;var JR=this.DT;var JP=this.DT;var JO=this.DT;aBlend=aBlend&&((this.F&
0x2)===0x2);Ar=Ar+1;Aw=AB=Ay=AA=As;if(Ar<256){Aw=(Aw&0x00FFFFFF)|((((Ar*((Aw>>24
)&0xFF))>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((Ar*((AB>>24)&0xFF))>>8)&0xFF)<<24
);Ay=(Ay&0x00FFFFFF)|((((Ar*((Ay>>24)&0xFF))>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((
Ar*((AA>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Ff||!!JR)||!!JP)||!!JO)AL.O1(aClip,B.
abh(this.M,aOffset),this.Width,Ff,JR,JP,JO,Aw,AB,AA,Ay,aBlend);else AL.OY(aClip,
B.abh(this.M,aOffset),this.Width,Aw,AB,AA,Ay,aBlend);},E0:function(C){var A;if(C<
0)C=0;if(C===this.DT)return;this.DT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(
this.M);},Ja:function(C){var A;if(C<0)C=0;if(C===this.Width)return;this.Width=C;
if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},AX:function(C){var A;if(C===
this.Bm)return;this.Bm=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},_Init:
function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=E.Bi;},_className:
"Views::Border"};E.Ly={timer:null,Ai:null,Ce:-1,Bm:0xFFFFFFFF,Fq:0,A1:0,DG:false
,C5:function(AL,aClip,aOffset,Ar,aBlend){var A;var Cr=this.Fq;if(this.Ce>=0)Cr=this.
Ce;if(!this.Ai||(Cr>=this.Ai.NoOfFrames))return;this.Ai.Update();var Aw;var AB;var
AA;var Ay;var As=this.Bm;var CW=(((Ar+1)*255)>>8)+1;var I=B.abh(this.M,aOffset);
aBlend=aBlend&&((this.F&0x2)===0x2);Aw=AB=Ay=AA=As;if(CW<256){Aw=(Aw&0x00FFFFFF)|((((((
Aw>>24)&0xFF)*CW)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*CW)>>8)&
0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CW)>>8)&0xFF)<<24);Ay=(Ay&0x00FFFFFF
)|((((((Ay>>24)&0xFF)*CW)>>8)&0xFF)<<24);}AL.OX(aClip,this.Ai,Cr,I,0x1F,Aw,AB,AA
,Ay,aBlend);},DD:function(Am){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.
M);},CF:function(Am){var A;var Cr=this.Ce;var D4=0;if(!!this.Ai)D4=this.Ai.NoOfFrames
*this.Ai.FrameDelay;if((!!this.timer&&(this.Ce<0))&&(D4>0))this.A1=this.timer.Ao-(
this.Fq*this.Ai.FrameDelay);if(!!this.timer&&(D4>0)){var X=(this.timer.Ao-this.A1
)|0;Cr=(X/this.Ai.FrameDelay)|0;if(X>=D4){Cr=Cr%this.Ai.NoOfFrames;this.A1=this.
timer.Ao-(X%D4);}}if(((Cr!==this.Ce)&&!!this.G)&&((this.F&0x1)===0x1))this.G.U(this.
M);this.Ce=Cr;if(!D4&&!!this.timer){B.z9([this,this.CF],this.timer,0);this.timer=
null;}},AX:function(C){var A;if(C===this.Bm)return;this.Bm=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.U(this.M);},Hh:function(C){var A;if(this.DG===C)return;this.
DG=C;this.Ce=-1;if(!C&&!!this.timer){B.z9([this,this.CF],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.acj.Fl);B.zV([this,this.CF],this.timer
,0);B.pe([this,this.CF],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M
);},Kl:function(C){var A;if(C<0)C=0;if((C===this.Fq)&&(this.Ce===-1))return;this.
Fq=C;if(!this.timer)this.Ce=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M
);},Bl:function(C){var A;if(C===this.Ai)return;if(!!this.Ai&&this.Ai.EU)B.z9([this
,this.DD],this.Ai,0);this.Ai=C;this.Ce=-1;if(!!C&&C.EU)B.zV([this,this.DD],C,0);
if(this.DG){this.Hh(false);this.Hh(true);}if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.M);},_Init:function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=
E.Ly;},_Mark:function(D){var A;B.Core.Bb._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ai)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Frame"};E.Bo={timer:null,Ai:null,A1:0,Ce:0,Bm:0xFFFFFFFF
,Ev:0x12,Fq:0,DG:false,C5:function(AL,aClip,aOffset,Ar,aBlend){var A;var Cr=this.
Fq;if(this.Ce>=0)Cr=this.Ce;if(!this.Ai||(Cr>=this.Ai.NoOfFrames))return;this.Ai.
Update();var N=this.He();var Ci=this.Ai.FrameSize;if((N[0]>=N[2])||(N[1]>=N[3]))
return;var Aw;var AB;var AA;var Ay;var As=this.Bm;var CW=(((Ar+1)*255)>>8)+1;aBlend=
aBlend&&((this.F&0x2)===0x2);Aw=AB=Ay=AA=As;if(CW<256){Aw=(Aw&0x00FFFFFF)|((((((
Aw>>24)&0xFF)*CW)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*CW)>>8)&
0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CW)>>8)&0xFF)<<24);Ay=(Ay&0x00FFFFFF
)|((((((Ay>>24)&0xFF)*CW)>>8)&0xFF)<<24);}if(B.aaX([N[2]-N[0],N[3]-N[1]],Ci))AL.
M3(aClip,this.Ai,Cr,B.abh(this.M,aOffset),B.abe(this.M.slice(0,2),N.slice(0,2)),
Aw,AB,AA,Ay,aBlend);else AL.P6(aClip,this.Ai,Cr,B.abh(N,aOffset),[].concat(AF,Ci
),Aw,AB,AA,Ay,aBlend,true);},DD:function(Am){var A;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.M);},CF:function(Am){var A;var Cr=this.Ce;var D4=0;if(!!this.
Ai)D4=this.Ai.NoOfFrames*this.Ai.FrameDelay;if((!!this.timer&&(this.Ce<0))&&(D4>
0))this.A1=this.timer.Ao-(this.Fq*this.Ai.FrameDelay);if(!!this.timer&&(D4>0)){var
X=(this.timer.Ao-this.A1)|0;Cr=(X/this.Ai.FrameDelay)|0;if(X>=D4){Cr=Cr%this.Ai.
NoOfFrames;this.A1=this.timer.Ao-(X%D4);}}if(((Cr!==this.Ce)&&!!this.G)&&((this.
F&0x1)===0x1))this.G.U(this.M);this.Ce=Cr;if(!D4&&!!this.timer){B.z9([this,this.
CF],this.timer,0);this.timer=null;}},AX:function(C){var A;if(C===this.Bm)return;
this.Bm=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Hh:function(C){var
A;if(this.DG===C)return;this.DG=C;this.Ce=-1;if(!C&&!!this.timer){B.z9([this,this.
CF],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.Fl);B.
zV([this,this.CF],this.timer,0);B.pe([this,this.CF],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.U(this.M);},GI:function(C){var A;if(C===this.Ev)return;this.Ev=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Kl:function(C){var A;if(C<
0)C=0;if((C===this.Fq)&&(this.Ce===-1))return;this.Fq=C;if(!this.timer)this.Ce=-
1;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Bl:function(C){var A;if(C===
this.Ai)return;if(!!this.Ai&&this.Ai.EU)B.z9([this,this.DD],this.Ai,0);this.Ai=C;
this.Ce=-1;if(!!C&&C.EU)B.zV([this,this.DD],C,0);if(this.DG){this.Hh(false);this.
Hh(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},AM:function(C){if(
C)this.A7(0x1,0x0);else this.A7(0x0,0x1);},He:function(){var A;if(!this.Ai)return Do;
var Y=this.Ev;var Ci=this.Ai.FrameSize;var Af=this.M;var width=Af[2]-Af[0];var height=
Af[3]-Af[1];if(!Ci[0]||!Ci[1])return Do;var Ax=[0,0,width,height];var Aa=Ax;if(((
Y&0x40)===0x40)){var MT=((((Ax[2]-Ax[0])<<16)+((Ci[0]/2)|0))/Ci[0])|0;var JS=((((
Ax[3]-Ax[1])<<16)+((Ci[1]/2)|0))/Ci[1])|0;var Gy=MT;if(JS>Gy)Gy=JS;Aa=B.abL(Aa,((
Ci[0]*Gy)+32768)>>16);Aa=B.abI(Aa,((Ci[1]*Gy)+32768)>>16);}else if(((Y&0x80)===0x80
)){var MT=((((Ax[2]-Ax[0])<<16)+((Ci[0]/2)|0))/Ci[0])|0;var JS=((((Ax[3]-Ax[1])<<
16)+((Ci[1]/2)|0))/Ci[1])|0;var Gy=MT;if(JS<Gy)Gy=JS;Aa=B.abL(Aa,((Ci[0]*Gy)+32768
)>>16);Aa=B.abI(Aa,((Ci[1]*Gy)+32768)>>16);}else if(!((Y&0x100)===0x100))Aa=B.abK(
Aa,Ci);if((Aa[2]-Aa[0])!==(Ax[2]-Ax[0])){if(((Y&0x4)===0x4))Aa=B.abM(Aa,Ax[2]-(Aa[
2]-Aa[0]));else if(((Y&0x2)===0x2))Aa=B.abM(Aa,(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-(((
Aa[2]-Aa[0])/2)|0));}if((Aa[3]-Aa[1])!==(Ax[3]-Ax[1])){if(((Y&0x20)===0x20))Aa=B.
abO(Aa,Ax[3]-(Aa[3]-Aa[1]));else if(((Y&0x10)===0x10))Aa=B.abO(Aa,(Ax[1]+(((Ax[3
]-Ax[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0));}Aa=B.abh(Aa,Af.slice(0,2));return Aa;},_Init:
function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=E.Bo;},_Mark:function(
D){var A;B.Core.Bb._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Ai)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"
};E.Text={E2:null,Aq:null,EE:null,Ak:B.jV,String:B.jV,CC:null,Hb:B.wf,FD:B.wf,Ev:
0x12,Bm:0xFFFFFFFF,Dl:255,Hn:false,Fn:false,Lq:false,B3:false,Ez:function(){if(!
!this.CC){this.Mz(this.CC);this.CC=null;}},C5:function(AL,aClip,aOffset,Ar,aBlend
){var A;if((this.Ak===B.jV)||!this.Aq)return;var Y=this.Ev;var font=this.Aq;var Ax=
B.abh(this.M,aOffset);var Aw;var AB;var AA;var Ay;var col=this.Bm;var CW=(((Ar+1
)*this.Dl)>>8)+1;var B_=this.Ak.charCodeAt(0)||0;var N=B.abh(this.He(),aOffset);
var Fe=[Ax[0]-N[0],(Ax[1]-N[1])-font.Ascent];if(B_<1)return;Aw=AB=Ay=AA=col;if(CW<
256){Aw=(Aw&0x00FFFFFF)|((((((Aw>>24)&0xFF)*CW)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF
)|((((((AB>>24)&0xFF)*CW)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*
CW)>>8)&0xFF)<<24);Ay=(Ay&0x00FFFFFF)|((((((Ay>>24)&0xFF)*CW)>>8)&0xFF)<<24);}if(((
Y&0x80)===0x80)){if(this.IX())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|0x1;}if((B_===1)&&
!((Y&0x40)===0x40)){AL.M6(aClip,font,this.Ak,2,(this.Ak.charCodeAt(1)||0)-1,Ax,Fe
,0,0,Aw,AB,AA,Ay,true);return;}var leading=font.Leading;var Gx=(font.Ascent+font.
Descent)+leading;var RR=aClip[1]-N[1];var RS=aClip[3]-N[1];var Mp=N[2]-N[0];var EQ=
0;var H=1;var As=this.Ak.charCodeAt(1)||0;while(((EQ+Gx)<RR)&&(As>0)){H=H+As;EQ=
EQ+Gx;As=this.Ak.charCodeAt(H)||0;}while((EQ<RS)&&(As>0)){var HK=B.abe(Fe,[0,EQ]
);var G9=0;var CJ=false;if(((((Y&0x40)===0x40)&&((this.Ak.charCodeAt((H+As)-1)||
0)!==0x0A))&&((this.Ak.charCodeAt(H+1)||0)!==0x0A))&&((this.Ak.charCodeAt(H+As)||
0)!==0x00))CJ=true;if(CJ&&!!(Y&0x6)){var K7=H+As;var NR=this.Ak.indexOf(String.fromCharCode(
0x20),H+1);var NS=this.Ak.indexOf(String.fromCharCode(0xA0),H+1);if(((NR<0)||(NR>=
K7))&&((NS<0)||(NS>=K7)))CJ=false;}if(CJ)G9=Mp;else if(((Y&0x4)===0x4))HK=[(HK[0
]-Mp)+font.Fr(this.Ak,H+1,As-1),HK[1]];else if(((Y&0x2)===0x2))HK=[(HK[0]-((Mp/2
)|0))+((font.Fr(this.Ak,H+1,As-1)/2)|0),HK[1]];AL.M6(aClip,font,this.Ak,H+1,As-1
,Ax,HK,G9,0,Aw,AB,AA,Ay,true);H=H+As;EQ=EQ+Gx;As=this.Ak.charCodeAt(H)||0;}},O:function(
C){var A;if(B.aaY(C,this.M))return;var OF;OF=((A=this.M)[2]-A[0])!==(C[2]-C[0]);
if(((OF&&this.Hn)&&this.B3)&&!((this.F&0x2000)===0x2000)){this.Ak=B.jV;this.B3=false;
B.pe([this,this.G5],this);}if(((this.Fn&&this.B3)&&!B.aaX([(A=this.M)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.Ak=B.jV;this.
B3=false;B.pe([this,this.G5],this);}B.Core.Bb.O.call(this,C);B.pe([this,this.K2]
,this);},RM:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=
B.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},RL:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},Mz:function(aBidi){if(!aBidi)return;B.rB(aBidi);},RT:function(
aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},K2:function(Am){B.pe(this.EE
,this);},G5:function(Am){B.pe([this,this.Gw],this);},Sf:function(Am){this.I_(this.
E2.Av);},Sg:function(Am){var A;var N=this.He();var K1=this.M.slice(0,2);if(N[0]>
K1[0])N=[].concat(K1[0],N.slice(1,4));if(N[1]>K1[1])N=B.abP(N,K1[1]);var A2=B.abe(
N.slice(0,2),this.M.slice(0,2));var HI=B.abe([(A=this.M)[2]-A[0],A[3]-A[1]],[N[2
]-N[0],N[3]-N[1]]);if(HI[0]>0)HI=[0,HI[1]];if(HI[1]>0)HI=[HI[0],0];this.E2.Av=this.
FD;this.E2.BK=B.abe(B.abf(this.FD,HI),A2);this.E2.BJ=B.abe(this.FD,A2);},Gw:function(
Am){var A;if(this.B3)return;var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3
]-A[1];var Fd=-1;var font=this.Aq;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=
null;if(this.Hn){Fd=width;if(Fd<0)Fd=1;}if(!!this.CC){this.Mz(this.CC);this.CC=null;
}this.B3=true;if((this.String!==B.jV)&&!!font){var length=this.String.length;if(
this.Lq)this.CC=this.RT(length);this.Ak=font.PZ(this.String,0,Fd,length,this.CC);
if(!!this.CC&&!this.Pb()){this.Mz(this.CC);this.CC=null;}}else this.Ak=B.jV;this.
Hb=AF;if((this.Fn&&(this.Ak!==B.jV))&&!!font){var Y=this.Ev;var leading=font.Leading;
var Az=this.Ak;var Ff=this.IX();if(((Y&0x80)===0x80)){if(Ff)Y=(Y&~0x80)|0x4;else
Y=(Y&~0x80)|0x1;}var K6=(font.Ascent+font.Descent)+leading;var B_=Az.charCodeAt(
0)||0;var G1=((height+leading)/K6)|0;var Mt=false;var KO=false;if(G1<=0)G1=1;if(
B_>G1){var AW=0;var JQ=0;var K8=B_-1;var BX;var Cs=Az.length;var tmp=B.jV;if(!!(
Y&0x110)&&!!(Y&0x28))Y&=~0x110;if(!!(Y&0x110))Y&=~0x28;if(((Y&0x20)===0x20))JQ=B_-
G1;else if(((Y&0x10)===0x10)||((Y&0x100)===0x100)){JQ=((B_-G1)/2)|0;K8=(JQ+G1)-1;
}else K8=G1-1;Mt=JQ>0;KO=K8<(B_-1);for(BX=1;AW<JQ;AW=AW+1)BX=BX+(Az.charCodeAt(BX
)||0);if(KO)for(Cs=BX;AW<K8;AW=AW+1)Cs=Cs+(Az.charCodeAt(Cs)||0);if(Mt){var BR=Az.
charCodeAt(BX)||0;tmp=(Ei+B.abW(Az,BX,BR))+Ei;tmp=B.abQ(tmp,0,(BR+2)&0xFFFF);BX=
BX+BR;if((tmp.charCodeAt(BR)||0)===0x0A){tmp=B.abQ(tmp,BR,0xFEFF);tmp=B.abQ(tmp,
BR+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(
tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(Az,BX,Cs-BX);if(KO&&(Cs>=
BX)){var BR=Az.charCodeAt(Cs)||0;var C2=(Ei+B.abW(Az,Cs,BR))+Ei;C2=B.abQ(C2,0,(BR+
2)&0xFFFF);C2=B.abQ(C2,1,0xFEFF);if((C2.charCodeAt(BR)||0)===0x0A){C2=B.abQ(C2,BR
,0xFEFF);C2=B.abQ(C2,BR+1,0x0A);}if((C2.charCodeAt(2)||0)===0x0A){C2=B.abQ(C2,2,
0xFEFF);C2=B.abQ(C2,1,0x0A);}else C2=B.abQ(C2,1,0xFEFF);tmp=tmp+C2;}Az=String.fromCharCode(
G1&0xFFFF)+tmp;}var AW=0;var V=1;var MK=width;B_=Az.charCodeAt(0)||0;for(;AW<B_;
AW=AW+1){var G7=Mt&&!AW;var G8=KO&&(AW===(B_-1));var DX=false;var DY=false;var IG=
Ff;if((Ff&&G7)&&!G8){G7=false;G8=true;}else if((Ff&&G8)&&!G7){G8=false;G7=true;}
var D7=V+1;var BR=Az.charCodeAt(V)||0;var BX=D7;var Cs=(D7+BR)-2;var ME=-1;var MF=-
1;if(!this.Hn&&(font.Fr(Az,D7,BR-1)>MK)){var Hv=Y;if(((Hv&0x2)===0x2)&&!!(Hv&0x5
))Hv&=~0x2;if(((Hv&0x2)===0x2))Hv&=~0x5;if(((Hv&0x4)===0x4))DX=true;else if(((Hv&
0x2)===0x2)){DX=true;DY=true;}else DY=true;}if((Az.charCodeAt(BX)||0)===0x0A)BX=
BX+1;if((Az.charCodeAt(Cs)||0)===0x0A)Cs=Cs-1;while(DX&&((Az.charCodeAt(BX)||0)===
0xFEFF))BX=BX+1;while(DY&&((Az.charCodeAt(Cs)||0)===0xFEFF))Cs=Cs-1;DX=DX&&!G8;DY=
DY&&!G7;while((((DX||DY)||G7)||G8)&&(BX<Cs)){if((DX&&(IG||!DY))||G7){if(ME>0)Az=
B.abQ(Az,ME,0xFEFF);Az=B.abQ(Az,BX,0x2026);ME=BX;BX=BX+1;IG=!IG;G7=false;if(font.
Fr(Az,D7,BR-1)<=MK){DX=false;DY=false;}else DX=DX||!DY;}if((DY&&(!IG||!DX))||G8){
if(MF>0)Az=B.abQ(Az,MF,0xFEFF);Az=B.abQ(Az,Cs,0x2026);MF=Cs;Cs=Cs-1;IG=!IG;G8=false;
if(font.Fr(Az,D7,BR-1)<=MK){DX=false;DY=false;}else DY=DY||!DX;}}V=V+BR;}this.Hb=[
font.M_(Az),((Az.charCodeAt(0)||0)*K6)-leading];this.Ak=Az;}if(!!this.G&&((this.
F&0x1)===0x1))this.G.U(this.M);B.pe([this,this.K2],this);},Pu:function(C){if(C===
this.Lq)return;this.Lq=C;this.Ak=B.jV;this.B3=false;B.pe([this,this.G5],this);},
Pt:function(C){if(C===this.Fn)return;this.Fn=C;if((this.Hn||C)||!!this.EE)this.F=
this.F&~0x100;else this.F=this.F|0x100;this.Ak=B.jV;this.B3=false;B.pe([this,this.
G5],this);},L7:function(C){if(B.aa0(C,this.EE))return;this.EE=C;if((this.Hn||!!C
)||this.Fn)this.F=this.F&~0x100;else this.F=this.F|0x100;},PN:function(C){if(C===
this.E2)return;if(!!C&&!!C.IF){B.ab5("%s%*%s",Ej,C,Ek);throw new Error(E4);}if(!
!this.E2){this.E2.K4=null;this.E2.IF=null;}this.E2=C;if(!!C){C.K4=[this,this.Sg];
C.IF=[this,this.Sf];}},Kn:function(C){if(C===this.Hn)return;this.Hn=C;if(this.B3
){this.Ak=B.jV;this.B3=false;B.pe([this,this.G5],this);}if((C||this.Fn)||!!this.
EE)this.F=this.F&~0x100;else this.F=this.F|0x100;},I_:function(C){var A;if(B.aaX(
C,this.FD))return;this.FD=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);if(
this.B3)B.pe([this,this.K2],this);},GI:function(C){var A;if(C===this.Ev)return;this.
Ev=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);if(this.Fn){this.Ak=B.jV;
this.B3=false;B.pe([this,this.G5],this);}if(this.B3)B.pe([this,this.K2],this);},
By:function(C){if(C===this.String)return;this.String=C;this.Ak=B.jV;this.B3=false;
B.pe([this,this.G5],this);},Ed:function(C){if(C===this.Aq)return;this.Aq=C;this.
Ak=B.jV;this.B3=false;B.pe([this,this.G5],this);},AX:function(C){var A;if(C===this.
Bm)return;this.Bm=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Hj:function(
C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dl)return;this.Dl=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.M);},IX:function(){if(!this.B3)this.Gw(this);if(
!this.CC)return false;var result=false;var bidi=this.CC;result=B.v2(bidi);return result;
},Pb:function(){if(!this.B3)this.Gw(this);if(!this.CC)return false;var result=false;
var bidi=this.CC;result=B.zZ(bidi);return result;},Ns:function(aIndex){if(((this.
String===B.jV)||!this.Aq)||this.Fn)return AF;if(!this.B3)this.Gw(this);if(aIndex<
0)aIndex=0;var RZ=(this.Ak.charCodeAt(0)||0)-1;var Ca=this.Ak.charCodeAt(1)||0;var
V=1;var GA=2;var AW=0;var col=-1;var E9=true;aIndex=aIndex+2;while((AW<RZ)&&((V+
Ca)<=aIndex)){V=V+Ca;AW=AW+1;GA=GA+1;aIndex=aIndex+1;Ca=this.Ak.charCodeAt(V)||0;
}if(aIndex>(V+Ca))aIndex=V+Ca;if(!!this.CC)aIndex=(V+this.RL(this.CC,(V+1)-GA,(V+
Ca)-GA,(aIndex-V)-1))+1;for(;aIndex>V;V=V+1){var A0=this.Ak.charCodeAt(V+1)||0;if(
E9)col=col+1;E9=(A0!==0xFEFF)&&(A0!==0x0A);}return[col,AW];},Jb:function(Jo){if(((
this.String===B.jV)||!this.Aq)||this.Fn)return 0;if(!this.B3)this.Gw(this);var AW=
Jo[1];var col=Jo[0];var V=1;var GA=2;var B_=this.Ak.charCodeAt(0)||0;var Ca=this.
Ak.charCodeAt(1)||0;if(AW>=B_){AW=B_-1;col=this.Ak.length;}if(AW<0){AW=0;col=0;}
if(col<0)col=0;while((AW>0)&&(Ca>0)){V=V+Ca;AW=AW-1;GA=GA+1;Ca=this.Ak.charCodeAt(
V)||0;}var D1=V;var K9=(V-GA)+1;var K7=(K9+Ca)-1;var JL=false;while((col>=0)&&(Ca>
1)){var A0=this.Ak.charCodeAt(V+1)||0;V=V+1;Ca=Ca-1;JL=(A0===0xFEFF)||(A0===0x0A
);if(!JL){col=col-1;D1=V;}}if((!JL&&(col>=0))&&((this.Ak.charCodeAt(V+1)||0)===0x00
))JL=true;if(JL)D1=D1+1;D1=D1-GA;if(!!this.CC)D1=K9+this.RM(this.CC,K9,K7,D1-K9);
return D1;},Ko:function(Cp){var A;if((this.String===B.jV)||!this.Aq)return AF;if(
!this.B3)this.Gw(this);var N=this.He();if((N[0]>=N[2])||(N[1]>=N[3]))return AF;var
font=this.Aq;var Y=this.Ev;var B_=this.Ak.charCodeAt(0)||0;var leading=font.Leading;
if(Cp[1]<N[1])Cp=[Cp[0],N[1]];if(Cp[1]>=N[3])Cp=[Cp[0],N[3]-1];var Gx=(font.Ascent+
font.Descent)+leading;var AW=((Cp[1]-N[1])/Gx)|0;var Cv=this.Lz(AW);var Ca=Cv.length;
var CJ=false;if(((Y&0x80)===0x80)){if(this.IX())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|
0x1;}if(((Y&0x40)===0x40)&&(AW<(B_-1)))CJ=true;if((CJ&&(Cv.indexOf(String.fromCharCode(
0x20),0)<0))&&(Cv.indexOf(String.fromCharCode(0xA0),0)<0))CJ=false;if(CJ){var V=
1;var HR=AW;while(HR>0){V=V+(this.Ak.charCodeAt(V)||0);HR=HR-1;}if(((this.Ak.charCodeAt(
V+1)||0)===0x0A)||((this.Ak.charCodeAt((V+(this.Ak.charCodeAt(V)||0))-1)||0)===0x0A
))CJ=false;}var G9=0;var D9=0;if(CJ)G9=N[2]-N[0];else if(((Y&0x4)===0x4))D9=(N[2
]-N[0])-font.Fr(Cv,0,Ca);else if(((Y&0x2)===0x2))D9=(((N[2]-N[0])/2)|0)-((font.Fr(
Cv,0,Ca)/2)|0);var col=font.O9(Cv,0,Ca,(Cp[0]-N[0])-D9,G9);if(col<0)col=0;return[
col,AW];},Me:function(Jo){var A;if((this.String===B.jV)||!this.Aq)return AF;if(!
this.B3)this.Gw(this);var B_=this.Ak.charCodeAt(0)||0;var font=this.Aq;var Y=this.
Ev;var AW=Jo[1];var col=Jo[0];if(AW>=B_){AW=B_-1;col=this.Ak.length;}if(AW<0){AW=
0;col=0;}var Cv=this.Lz(AW);var Ca=Cv.length;var N=this.He();var CJ=false;var leading=
font.Leading;if(((Y&0x80)===0x80)){if(this.IX())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80)|
0x1;}if(((Y&0x40)===0x40)&&(AW<(B_-1)))CJ=true;if((CJ&&(Cv.indexOf(String.fromCharCode(
0x20),0)<0))&&(Cv.indexOf(String.fromCharCode(0xA0),0)<0))CJ=false;if(CJ){var V=
1;var HR=AW;while(HR>0){V=V+(this.Ak.charCodeAt(V)||0);HR=HR-1;}if(((this.Ak.charCodeAt(
V+1)||0)===0x0A)||((this.Ak.charCodeAt((V+(this.Ak.charCodeAt(V)||0))-1)||0)===0x0A
))CJ=false;}var EQ=(N[1]+(AW*((font.Ascent+font.Descent)+leading)))+font.Ascent;
var G9=0;var D9=N[0];if(CJ)G9=N[2]-N[0];else if(((Y&0x4)===0x4))D9=N[2]-font.Fr(
Cv,0,Ca);else if(((Y&0x2)===0x2))D9=(D9+(((N[2]-N[0])/2)|0))-((font.Fr(Cv,0,Ca)/
2)|0);var pos=font.O8(Cv,0,Ca,col,G9);if(pos<0)pos=0;return[D9+pos,EQ];},Lz:function(
Jn){if((this.String===B.jV)||!this.Aq)return B.jV;if(!this.B3)this.Gw(this);var B_=
this.Ak.charCodeAt(0)||0;var V=1;if((!this.Aq||(Jn<0))||(Jn>=B_))return B.jV;while(
Jn>0){V=V+(this.Ak.charCodeAt(V)||0);Jn=Jn-1;}var D7=V;var Iz=V+(this.Ak.charCodeAt(
V)||0);var A0=0x00;do{D7=D7+1;A0=this.Ak.charCodeAt(D7)||0;}while(((A0===0xFEFF)||(
A0===0x0A))&&(D7<=Iz));do{Iz=Iz-1;A0=this.Ak.charCodeAt(Iz)||0;}while(((A0===0xFEFF
)||(A0===0x0A))&&(D7<=Iz));var Cv=B.abW(this.Ak,D7,(Iz-D7)+1);var HH;for(HH=Cv.indexOf(
String.fromCharCode(0xFEFF),0);HH>=0;HH=Cv.indexOf(String.fromCharCode(0xFEFF),HH+
1)){var D1=HH+1;while((Cv.charCodeAt(D1)||0)===0xFEFF)D1=D1+1;Cv=B.ab1(Cv,HH,D1-
HH);}return Cv;},He:function(){var A;if((this.String===B.jV)||!this.Aq)return Do;
if(!this.B3)this.Gw(this);if(this.Ak===B.jV)return Do;var leading=this.Aq.Leading;
var K6=(this.Aq.Ascent+this.Aq.Descent)+this.Aq.Leading;if(B.aaX(this.Hb,AF))this.
Hb=[this.Aq.M_(this.Ak),this.Hb[1]];this.Hb=[this.Hb[0],((this.Ak.charCodeAt(0)||
0)*K6)-leading];var Y=this.Ev;var Af=this.M;var width=Af[2]-Af[0];var height=Af[
3]-Af[1];var Ax=[0,0,width,height];var Aa=[].concat(Ax.slice(0,2),B.abf(Ax.slice(
0,2),this.Hb));if(((Y&0x80)===0x80)){if(this.IX())Y=(Y&~0x80)|0x4;else Y=(Y&~0x80
)|0x1;}if(((Y&0x40)===0x40)){var Fd;Fd=width;if(Fd<0)Fd=0;if(Fd>(Aa[2]-Aa[0]))Aa=
B.abL(Aa,Fd);}if((!!(Y&0x110)&&!!(Y&0x28))&&((Aa[3]-Aa[1])>(Ax[3]-Ax[1])))Y&=~0x110;
if(!!(Y&0x110))Y&=~0x28;if((((Y&0x2)===0x2)&&!!(Y&0x5))&&((Aa[2]-Aa[0])>(Ax[2]-Ax[
0])))Y&=~0x2;if(((Y&0x2)===0x2))Y&=~0x5;if((Aa[2]-Aa[0])!==(Ax[2]-Ax[0])){if(((Y&
0x4)===0x4))Aa=B.abM(Aa,Ax[2]-(Aa[2]-Aa[0]));else if(((Y&0x2)===0x2))Aa=B.abM(Aa
,(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-(((Aa[2]-Aa[0])/2)|0));}if((Aa[3]-Aa[1])!==(Ax[3]-
Ax[1])){if(((Y&0x20)===0x20))Aa=B.abO(Aa,Ax[3]-(Aa[3]-Aa[1]));else if(((Y&0x100)===
0x100))Aa=B.abO(Aa,((Ax[1]+(((Ax[3]-Ax[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0))+(((this.
Aq.Descent-this.Aq.Ascent)/2)|0));else if(((Y&0x10)===0x10))Aa=B.abO(Aa,(Ax[1]+(((
Ax[3]-Ax[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0));}Aa=B.abh(Aa,Af.slice(0,2));return B.
abh(Aa,this.FD);},L0:function(){return this.Dl;},_Init:function(aArg){B.Core.Bb.
_Init.call(this,aArg);this.__proto__=E.Text;},_Done:function(){this.Ez();this.__proto__=
B.Core.Bb;B.Core.Bb._Done.call(this);},_Mark:function(D){var A;B.Core.Bb._Mark.call(
this,D);if((A=this.E2)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aq)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.EE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Views::Text"};E.Hm={GW:null,GP:B.wf,AE:B.abi(4,3,0,null),Hl:B.wg
,DC:0,HL:0,L$:true,Hk:function(C){if(B.aaX(C,this.BV))return;B.Core.Eg.Hk.call(this
,C);this.AE.Set(3,0,C[0]);this.AE.Set(3,1,C[1]);this.AE.Set(3,2,1);this.DC=0x45;
B.pe([this,this.IM],this);},GK:function(C){if(B.aaX(C,this.Cb))return;B.Core.Eg.
GK.call(this,C);this.AE.Set(2,0,C[0]);this.AE.Set(2,1,C[1]);this.AE.Set(2,2,1);this.
DC=0x45;B.pe([this,this.IM],this);},Ef:function(C){if(B.aaX(C,this.AU))return;B.
Core.Eg.Ef.call(this,C);this.AE.Set(1,0,C[0]);this.AE.Set(1,1,C[1]);this.AE.Set(
1,2,1);this.DC=0x45;B.pe([this,this.IM],this);},EC:function(C){if(B.aaX(C,this.AT
))return;B.Core.Eg.EC.call(this,C);this.AE.Set(0,0,C[0]);this.AE.Set(0,1,C[1]);this.
AE.Set(0,2,1);this.DC=0x45;B.pe([this,this.IM],this);},RP:function(){return;},IM:
function(Am){var A;this.GW=null;if(this.DC===0x00)return;if(this.DC===0x45){var EM=
B._NewObject(B.Graphics.Ny,0);EM=EM.Lo(this.AE.Get(0,0),this.AE.Get(0,1),this.AE.
Get(1,0),this.AE.Get(1,1),this.AE.Get(2,0),this.AE.Get(2,1),this.AE.Get(3,0),this.
AE.Get(3,1));if(!!EM){EM.J2(0,0);this.AE.Set(0,2,EM.Je*240);EM.J2(1,0);this.AE.Set(
1,2,EM.Je*240);EM.J2(1,1);this.AE.Set(2,2,EM.Je*240);EM.J2(0,1);this.AE.Set(3,2,
EM.Je*240);}this.RP();}this.HL=this.DC;this.DC=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.GetClipping());},PJ:function(C){var A;if(C===this.L$)return;this.
L$=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());},Ni:function(
C){var A;if(B.aaY(C,this.Hl))return;this.Hl=C;if((((this.HL===0x45)&&(this.DC===
0x00))&&!!this.G)&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((this.HL
!==0x45)&&(this.DC===0x00)){this.DC=this.HL;B.pe([this,this.IM],this);}},H_:function(
BA){var A;if(!!!this.GW){this.GW=B._NewObject(B.Graphics.M$,0);this.GW.Lo(this.AE.
Get(0,0),this.AE.Get(0,1),this.AE.Get(1,0),this.AE.Get(1,1),this.AE.Get(2,0),this.
AE.Get(2,1),this.AE.Get(3,0),this.AE.Get(3,1));}if(!this.GW.P3(BA))return AF;var
DF=B.aaV(this.Hl,[].concat(AF,this.GP));var D9=this.GW.Nz*(DF[2]-DF[0]);var EQ=this.
GW.NA*(DF[3]-DF[1]);return B.abf([D9|0,EQ|0],DF.slice(0,2));},_Init:function(aArg
){B.Core.Eg._Init.call(this,aArg);(this.AE=[]).__proto__=E.Hm.AE;this.__proto__=
E.Hm;this.F=0x3;},_Mark:function(D){var A;B.Core.Eg._Mark.call(this,D);if((A=this.
GW)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpView"};E.Mi={AN:
null,bitmap:null,Z:null,Dl:255,C5:function(AL,aClip,aOffset,Ar,aBlend){var A;if(
!this.bitmap)return;this.bitmap.Update();var Er=aOffset[0];var Es=aOffset[1];var
N=B.aaV(this.Hl,[].concat(AF,this.GP));aBlend=aBlend&&((this.F&0x2)===0x2);Ar=Ar+
1;var Oj;var Ol;var Om;var On;var R2=this.Dl;Oj=Ol=Om=On=R2;var GQ=255|(255<<8)|(
255<<16)|((((Ar*Oj)>>8)&0xFF)<<24);var GR=255|(255<<8)|(255<<16)|((((Ar*Ol)>>8)&
0xFF)<<24);var RN=255|(255<<8)|(255<<16)|((((Ar*Om)>>8)&0xFF)<<24);var RO=255|(255<<
8)|(255<<16)|((((Ar*On)>>8)&0xFF)<<24);aClip=B.aaV(aClip,B.abh(Do,aOffset));AL.Qb(
aClip,this.bitmap,0,this.AE.Get(0,0)+Er,this.AE.Get(0,1)+Es,this.AE.Get(0,2),this.
AE.Get(1,0)+Er,this.AE.Get(1,1)+Es,this.AE.Get(1,2),this.AE.Get(2,0)+Er,this.AE.
Get(2,1)+Es,this.AE.Get(2,2),this.AE.Get(3,0)+Er,this.AE.Get(3,1)+Es,this.AE.Get(
3,2),N,GQ,GR,RN,RO,aBlend,this.L$);},Bg:function(Ap){if(!this.Z||!this.AN)return null;
var R=(B.Core.ER.isPrototypeOf(Ap)?Ap:null);var AQ=(B.Core.H1.isPrototypeOf(Ap)?
Ap:null);if(!R&&!AQ)return null;var A2=AF;var W=this.AN.G;while(!!W&&(W!==this.Z
)){A2=B.abe(A2,W.M.slice(0,2));W=W.G;}var J=this.AN;if(!!R&&!R.Down)this.AN=null;
if(!!R){R.Bn=B.abf(this.H_(R.Bn),A2);R.Cy=B.abf(this.H_(R.Cy),A2);return J.Bg(R);
}if(!!AQ){var R5=B.abf(this.H_(B.abe(AQ.Bn,AQ.Av)),A2);AQ.Bn=B.abf(this.H_(AQ.Bn
),A2);AQ.Cy=B.abf(this.H_(AQ.Cy),A2);AQ.Av=B.abe(AQ.Bn,R5);return J.Bg(AQ);}return E.
Hm.Bg.call(this,Ap);},Ex:function(Ad,Q,CB,El,EG,E6){var A;if(!this.Z||!((this.Z.
F&0x18)===0x18))return null;var pos=B.aaI(Ad);pos=this.H_(pos);var DF=B.aaV(this.
Hl,[].concat(AF,this.GP));if(!B.wa(DF,pos))return null;var BG=this.Z.Ex(B.abh(B.
abh([0,0,Ad[2]-Ad[0],Ad[3]-Ad[1]],pos),this.Z.M.slice(0,2)),Q,CB,El,null,E6);if(
!!BG)this.AN=BG.BZ;else this.AN=null;if(!!this.AN)return B._NewObject(B.Core.IQ,
0).Initialize(this,AF);return null;},DD:function(Am){var A;var Oo=this.GP;if(!!this.
Z)this.bitmap=this.Z.AV;else this.bitmap=null;if(!!this.bitmap)this.GP=this.bitmap.
FrameSize;else this.GP=AF;if(((B.aaX(Oo,this.GP)||((this.HL===0x45)&&(this.DC===
0x00)))&&!!this.G)&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if(((this.
HL!==0x45)&&(this.DC===0x00))&&!B.aaX(Oo,this.GP)){this.DC=this.HL;B.pe([this,this.
IM],this);}},Hj:function(C){var A;if(C===this.Dl)return;this.Dl=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.GetClipping());},Pw:function(C){if(C===this.Z)return;
if(!!C&&(C===this.G))throw new Error(FJ);if(!!this.Z){B.z9([this,this.DD],this.Z
,0);this.bitmap=null;}this.Z=C;if(!!C){B.zV([this,this.DD],C,0);this.bitmap=C.AV;
}this.DD(this);},_Init:function(aArg){E.Hm._Init.call(this,aArg);this.__proto__=
E.Mi;},_Mark:function(D){var A;E.Hm._Mark.call(this,D);if((A=this.AN)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};E.
S3={OO:0x1,ON:0x2,OP:0x4,OS:0x8,OR:0x10,OQ:0x20,Tr:0x40,Ts:0x80,Tu:0x100};E.Tv={
OO:0x1,ON:0x2,OP:0x4,OS:0x8,OR:0x10,OQ:0x20,SI:0x40,SH:0x80,SN:0x100};E.Tb={Ta:0
,Tp:1,Tn:2,To:3};
E._Init=function(){E.LO.__proto__=B.Core.H8;E.CI.__proto__=B.Core.Bb;E.Bi.__proto__=
B.Core.Bb;E.Ly.__proto__=B.Core.Bb;E.Bo.__proto__=B.Core.Bb;E.Text.__proto__=B.Core.
Bb;E.Hm.__proto__=B.Core.Eg;E.Mi.__proto__=E.Hm;};E._ReInit=function(){};E.Dp=function(
D){};return E;})();

/* Embedded Wizard */