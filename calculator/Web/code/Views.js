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
var AX=[1,1];var AF=[0,0];var Dk=[0,0,0,0];var Dl="\uFEFF";var EB="The Slide Touch Handler:";
var EC="is already connected with a view.";var ED="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var Hk="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
E.LD={C1:null,Ih:1,Ig:1,Bv:0xFFFFFFFF,C3:function(AK,aClip,aOffset,Aq,aBlend){var
A;var Fe=this.Ig;var Ff=this.Ih;var EM=B.abf(this.AT,aOffset);var EN=B.abf(this.
AU,aOffset);var GM;var GN;var Ar=this.Bv;if(B.aaX(EM,EN))return;aBlend=aBlend&&((
this.F&0x2)===0x2);Aq=Aq+1;GM=GN=Ar;if(Aq<256){GM=(GM&0x00FFFFFF)|((((Aq*((GM>>24
)&0xFF))>>8)&0xFF)<<24);GN=(GN&0x00FFFFFF)|((((Aq*((GN>>24)&0xFF))>>8)&0xFF)<<24
);}if((Fe===1)&&(Ff===1))AK.OF(aClip,EM,EN,GM,GN,aBlend);else AK.OH(aClip,EM,EN,
Fe,Ff,GM,GN,aBlend);},GetExtent:function(){var Fe=this.Ig;var Ff=this.Ih;var EM=
this.AT;var EN=this.AU;if(((Fe===1)&&(Ff===1))||B.aaX(EM,EN))return B.Core.H4.GetExtent.
call(this);var FS=Fe/2;var FT=Ff/2;var HA=EM[0];var HB=EM[1];var HC=EN[0];var HD=
EN[1];var CP=HC-HA;var CQ=HD-HB;var BQ=Math.sqrt((CP*CP)+(CQ*CQ));CP=CP/BQ;CQ=CQ
/BQ;var Ny=HA+(CQ*FS);var Nz=HB-(CP*FS);var Kw=HC+(CQ*FT);var Kx=HD-(CP*FT);var Ky=
HC-(CQ*FT);var Kz=HD+(CP*FT);var KA=HA-(CQ*FS);var KB=HB+(CP*FS);var left=Ny;var
right=Ny;var top=Nz;var bottom=Nz;if(Kw<left)left=Kw;if(Ky<left)left=Ky;if(KA<left
)left=KA;if(Kw>right)right=Kw;if(Ky>right)right=Ky;if(KA>right)right=KA;if(Kx<top
)top=Kx;if(Kz<top)top=Kz;if(KB<top)top=KB;if(Kx>bottom)bottom=Kx;if(Kz>bottom)bottom=
Kz;if(KB>bottom)bottom=KB;var I=[left|0,top|0,right|0,bottom|0];I=[].concat(I.slice(
0,2),B.abf(I.slice(2,4),AX));return I;},DB:function(Au){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.U(this.GetClipping());},PE:function(C){var A;if(C<1)C=1;if(
C===this.Ih)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping()
);this.Ih=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if(((
C!==1)||(this.Ig!==1))&&!this.C1){this.C1=B.aaL(B.ach.I5);if(this.C1.ES)B.zV([this
,this.DB],this.C1,0);}if(((C===1)&&(this.Ig===1))&&!!this.C1){if(this.C1.ES)B.z9([
this,this.DB],this.C1,0);this.C1=null;}},PD:function(C){var A;if(C<1)C=1;if(C===
this.Ig)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());this.
Ig=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if(((C!==1)||(
this.Ih!==1))&&!this.C1){this.C1=B.aaL(B.ach.I5);if(this.C1.ES)B.zV([this,this.DB
],this.C1,0);}if(((C===1)&&(this.Ih===1))&&!!this.C1){if(this.C1.ES)B.z9([this,this.
DB],this.C1,0);this.C1=null;}},A1:function(C){var A;if(C===this.Bv)return;this.Bv=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());},O6:function(){
var A;return((this.F&0x1)===0x1);},AS:function(C){if(C)this.A9(0x1,0x0);else this.
A9(0x0,0x1);},_Init:function(aArg){B.Core.H4._Init.call(this,aArg);this.__proto__=
E.LD;},_Mark:function(D){var A;B.Core.H4._Mark.call(this,D);if((A=this.C1)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Line"};E.CH={LV:0,LU:0,K9:0xFFFFFFFF
,K_:0xFFFFFFFF,La:0xFFFFFFFF,K$:0xFFFFFFFF,DS:0,Bv:0xFFFFFFFF,C3:function(AK,aClip
,aOffset,Aq,aBlend){var A;var Aw=this.K$;var AB=this.La;var Ay=this.K9;var AA=this.
K_;var Ar=this.Bv;var Fc=this.DS+this.LU;var JG=this.DS+this.LV;var JE=this.DS;var
JD=this.DS;aBlend=aBlend&&((this.F&0x2)===0x2);Aq=Aq+1;if((((Aw===AB)&&(Ay===AA)
)&&(Aw===Ay))&&(Aw===0xFFFFFFFF))Aw=AB=Ay=AA=Ar;else if(Ar!==0xFFFFFFFF){Aw=(Aw&
0x00FFFFFF)|((((((Aw>>24)&0xFF)*(((Ar>>24)&0xFF)+1))>>8)&0xFF)<<24);Aw=(Aw&0xFFFFFF00
)|((((Aw&0xFF)*((Ar&0xFF)+1))>>8)&0xFF);Aw=(Aw&0xFFFF00FF)|((((((Aw>>8)&0xFF)*(((
Ar>>8)&0xFF)+1))>>8)&0xFF)<<8);Aw=(Aw&0xFF00FFFF)|((((((Aw>>16)&0xFF)*(((Ar>>16)&
0xFF)+1))>>8)&0xFF)<<16);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*(((Ar>>24)&0xFF)+
1))>>8)&0xFF)<<24);AB=(AB&0xFFFFFF00)|((((AB&0xFF)*((Ar&0xFF)+1))>>8)&0xFF);AB=(
AB&0xFFFF00FF)|((((((AB>>8)&0xFF)*(((Ar>>8)&0xFF)+1))>>8)&0xFF)<<8);AB=(AB&0xFF00FFFF
)|((((((AB>>16)&0xFF)*(((Ar>>16)&0xFF)+1))>>8)&0xFF)<<16);Ay=(Ay&0x00FFFFFF)|((((((
Ay>>24)&0xFF)*(((Ar>>24)&0xFF)+1))>>8)&0xFF)<<24);Ay=(Ay&0xFFFFFF00)|((((Ay&0xFF
)*((Ar&0xFF)+1))>>8)&0xFF);Ay=(Ay&0xFFFF00FF)|((((((Ay>>8)&0xFF)*(((Ar>>8)&0xFF)+
1))>>8)&0xFF)<<8);Ay=(Ay&0xFF00FFFF)|((((((Ay>>16)&0xFF)*(((Ar>>16)&0xFF)+1))>>8
)&0xFF)<<16);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*(((Ar>>24)&0xFF)+1))>>8)&0xFF
)<<24);AA=(AA&0xFFFFFF00)|((((AA&0xFF)*((Ar&0xFF)+1))>>8)&0xFF);AA=(AA&0xFFFF00FF
)|((((((AA>>8)&0xFF)*(((Ar>>8)&0xFF)+1))>>8)&0xFF)<<8);AA=(AA&0xFF00FFFF)|((((((
AA>>16)&0xFF)*(((Ar>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Aq<256){Aw=(Aw&0x00FFFFFF)|((((
Aq*((Aw>>24)&0xFF))>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((Aq*((AB>>24)&0xFF))>>8
)&0xFF)<<24);Ay=(Ay&0x00FFFFFF)|((((Aq*((Ay>>24)&0xFF))>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF
)|((((Aq*((AA>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Fc||!!JG)||!!JE)||!!JD)AK.OK(aClip
,B.abh(this.M,aOffset),Fc,JG,JE,JD,Aw,AB,AA,Ay,aBlend);else AK.JW(aClip,B.abh(this.
M,aOffset),Aw,AB,AA,Ay,aBlend);},Pt:function(C){var A;if(C<0)C=0;if(C===this.LV)
return;this.LV=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Ps:function(
C){var A;if(C<0)C=0;if(C===this.LU)return;this.LU=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.M);},O7:function(C){var A;if(C===this.K9)return;this.K9=C;if(
!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},O8:function(C){var A;if(C===this.
K_)return;this.K_=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},O_:function(
C){var A;if(C===this.La)return;this.La=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.M);},O9:function(C){var A;if(C===this.K$)return;this.K$=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.M);},EZ:function(C){var A;if(C<0)C=0;if(C===this.
DS)return;this.DS=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},A1:function(
C){var A;if(C===this.Bv)return;this.Bv=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.M);},_Init:function(aArg){B.Core.A$._Init.call(this,aArg);this.__proto__=
E.CH;},_className:"Views::Rectangle"};E.Bj={DS:0,Width:1,Bv:0xFFFFFFFF,C3:function(
AK,aClip,aOffset,Aq,aBlend){var A;var Aw;var AB;var Ay;var AA;var Ar=this.Bv;var
Fc=this.DS;var JG=this.DS;var JE=this.DS;var JD=this.DS;aBlend=aBlend&&((this.F&
0x2)===0x2);Aq=Aq+1;Aw=AB=Ay=AA=Ar;if(Aq<256){Aw=(Aw&0x00FFFFFF)|((((Aq*((Aw>>24
)&0xFF))>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((Aq*((AB>>24)&0xFF))>>8)&0xFF)<<24
);Ay=(Ay&0x00FFFFFF)|((((Aq*((Ay>>24)&0xFF))>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((
Aq*((AA>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Fc||!!JG)||!!JE)||!!JD)AK.OG(aClip,B.
abh(this.M,aOffset),this.Width,Fc,JG,JE,JD,Aw,AB,AA,Ay,aBlend);else AK.OD(aClip,
B.abh(this.M,aOffset),this.Width,Aw,AB,AA,Ay,aBlend);},EZ:function(C){var A;if(C<
0)C=0;if(C===this.DS)return;this.DS=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(
this.M);},I2:function(C){var A;if(C<0)C=0;if(C===this.Width)return;this.Width=C;
if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},A1:function(C){var A;if(C===
this.Bv)return;this.Bv=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},_Init:
function(aArg){B.Core.A$._Init.call(this,aArg);this.__proto__=E.Bj;},_className:
"Views::Border"};E.Ln={timer:null,Ai:null,Ce:-1,Bv:0xFFFFFFFF,Fo:0,AZ:0,DE:false
,C3:function(AK,aClip,aOffset,Aq,aBlend){var A;var Cq=this.Fo;if(this.Ce>=0)Cq=this.
Ce;if(!this.Ai||(Cq>=this.Ai.NoOfFrames))return;this.Ai.Update();var Aw;var AB;var
AA;var Ay;var Ar=this.Bv;var CU=(((Aq+1)*255)>>8)+1;var I=B.abh(this.M,aOffset);
aBlend=aBlend&&((this.F&0x2)===0x2);Aw=AB=Ay=AA=Ar;if(CU<256){Aw=(Aw&0x00FFFFFF)|((((((
Aw>>24)&0xFF)*CU)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*CU)>>8)&
0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CU)>>8)&0xFF)<<24);Ay=(Ay&0x00FFFFFF
)|((((((Ay>>24)&0xFF)*CU)>>8)&0xFF)<<24);}AK.OC(aClip,this.Ai,Cq,I,0x1F,Aw,AB,AA
,Ay,aBlend);},DB:function(Au){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.
M);},CF:function(Au){var A;var Cq=this.Ce;var D3=0;if(!!this.Ai)D3=this.Ai.NoOfFrames
*this.Ai.FrameDelay;if((!!this.timer&&(this.Ce<0))&&(D3>0))this.AZ=this.timer.An-(
this.Fo*this.Ai.FrameDelay);if(!!this.timer&&(D3>0)){var W=(this.timer.An-this.AZ
)|0;Cq=(W/this.Ai.FrameDelay)|0;if(W>=D3){Cq=Cq%this.Ai.NoOfFrames;this.AZ=this.
timer.An-(W%D3);}}if(((Cq!==this.Ce)&&!!this.G)&&((this.F&0x1)===0x1))this.G.U(this.
M);this.Ce=Cq;if(!D3&&!!this.timer){B.z9([this,this.CF],this.timer,0);this.timer=
null;}},A1:function(C){var A;if(C===this.Bv)return;this.Bv=C;if(!!this.G&&((this.
F&0x1)===0x1))this.G.U(this.M);},Hd:function(C){var A;if(this.DE===C)return;this.
DE=C;this.Ce=-1;if(!C&&!!this.timer){B.z9([this,this.CF],this.timer,0);this.timer=
null;}if(C){this.timer=B._GetAutoObject(B.acj.Fj);B.zV([this,this.CF],this.timer
,0);B.pe([this,this.CF],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M
);},Ka:function(C){var A;if(C<0)C=0;if((C===this.Fo)&&(this.Ce===-1))return;this.
Fo=C;if(!this.timer)this.Ce=-1;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M
);},Bn:function(C){var A;if(C===this.Ai)return;if(!!this.Ai&&this.Ai.ES)B.z9([this
,this.DB],this.Ai,0);this.Ai=C;this.Ce=-1;if(!!C&&C.ES)B.zV([this,this.DB],C,0);
if(this.DE){this.Hd(false);this.Hd(true);}if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.M);},_Init:function(aArg){B.Core.A$._Init.call(this,aArg);this.__proto__=
E.Ln;},_Mark:function(D){var A;B.Core.A$._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ai)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Frame"};E.Bp={timer:null,Ai:null,AZ:0,Ce:0,Bv:0xFFFFFFFF
,Ep:0x12,Fo:0,DE:false,C3:function(AK,aClip,aOffset,Aq,aBlend){var A;var Cq=this.
Fo;if(this.Ce>=0)Cq=this.Ce;if(!this.Ai||(Cq>=this.Ai.NoOfFrames))return;this.Ai.
Update();var N=this.Ha();var Ci=this.Ai.FrameSize;if((N[0]>=N[2])||(N[1]>=N[3]))
return;var Aw;var AB;var AA;var Ay;var Ar=this.Bv;var CU=(((Aq+1)*255)>>8)+1;aBlend=
aBlend&&((this.F&0x2)===0x2);Aw=AB=Ay=AA=Ar;if(CU<256){Aw=(Aw&0x00FFFFFF)|((((((
Aw>>24)&0xFF)*CU)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*CU)>>8)&
0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*CU)>>8)&0xFF)<<24);Ay=(Ay&0x00FFFFFF
)|((((((Ay>>24)&0xFF)*CU)>>8)&0xFF)<<24);}if(B.aaX([N[2]-N[0],N[3]-N[1]],Ci))AK.
MH(aClip,this.Ai,Cq,B.abh(this.M,aOffset),B.abe(this.M.slice(0,2),N.slice(0,2)),
Aw,AB,AA,Ay,aBlend);else AK.PO(aClip,this.Ai,Cq,B.abh(N,aOffset),[].concat(AF,Ci
),Aw,AB,AA,Ay,aBlend,true);},DB:function(Au){var A;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.M);},CF:function(Au){var A;var Cq=this.Ce;var D3=0;if(!!this.
Ai)D3=this.Ai.NoOfFrames*this.Ai.FrameDelay;if((!!this.timer&&(this.Ce<0))&&(D3>
0))this.AZ=this.timer.An-(this.Fo*this.Ai.FrameDelay);if(!!this.timer&&(D3>0)){var
W=(this.timer.An-this.AZ)|0;Cq=(W/this.Ai.FrameDelay)|0;if(W>=D3){Cq=Cq%this.Ai.
NoOfFrames;this.AZ=this.timer.An-(W%D3);}}if(((Cq!==this.Ce)&&!!this.G)&&((this.
F&0x1)===0x1))this.G.U(this.M);this.Ce=Cq;if(!D3&&!!this.timer){B.z9([this,this.
CF],this.timer,0);this.timer=null;}},A1:function(C){var A;if(C===this.Bv)return;
this.Bv=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Hd:function(C){var
A;if(this.DE===C)return;this.DE=C;this.Ce=-1;if(!C&&!!this.timer){B.z9([this,this.
CF],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.Fj);B.
zV([this,this.CF],this.timer,0);B.pe([this,this.CF],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.U(this.M);},GD:function(C){var A;if(C===this.Ep)return;this.Ep=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Ka:function(C){var A;if(C<
0)C=0;if((C===this.Fo)&&(this.Ce===-1))return;this.Fo=C;if(!this.timer)this.Ce=-
1;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Bn:function(C){var A;if(C===
this.Ai)return;if(!!this.Ai&&this.Ai.ES)B.z9([this,this.DB],this.Ai,0);this.Ai=C;
this.Ce=-1;if(!!C&&C.ES)B.zV([this,this.DB],C,0);if(this.DE){this.Hd(false);this.
Hd(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},AS:function(C){if(
C)this.A9(0x1,0x0);else this.A9(0x0,0x1);},Ha:function(){var A;if(!this.Ai)return Dk;
var X=this.Ep;var Ci=this.Ai.FrameSize;var Af=this.M;var width=Af[2]-Af[0];var height=
Af[3]-Af[1];if(!Ci[0]||!Ci[1])return Dk;var Ax=[0,0,width,height];var Aa=Ax;if(((
X&0x40)===0x40)){var My=((((Ax[2]-Ax[0])<<16)+((Ci[0]/2)|0))/Ci[0])|0;var JH=((((
Ax[3]-Ax[1])<<16)+((Ci[1]/2)|0))/Ci[1])|0;var Gt=My;if(JH>Gt)Gt=JH;Aa=B.abL(Aa,((
Ci[0]*Gt)+32768)>>16);Aa=B.abI(Aa,((Ci[1]*Gt)+32768)>>16);}else if(((X&0x80)===0x80
)){var My=((((Ax[2]-Ax[0])<<16)+((Ci[0]/2)|0))/Ci[0])|0;var JH=((((Ax[3]-Ax[1])<<
16)+((Ci[1]/2)|0))/Ci[1])|0;var Gt=My;if(JH<Gt)Gt=JH;Aa=B.abL(Aa,((Ci[0]*Gt)+32768
)>>16);Aa=B.abI(Aa,((Ci[1]*Gt)+32768)>>16);}else if(!((X&0x100)===0x100))Aa=B.abK(
Aa,Ci);if((Aa[2]-Aa[0])!==(Ax[2]-Ax[0])){if(((X&0x4)===0x4))Aa=B.abM(Aa,Ax[2]-(Aa[
2]-Aa[0]));else if(((X&0x2)===0x2))Aa=B.abM(Aa,(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-(((
Aa[2]-Aa[0])/2)|0));}if((Aa[3]-Aa[1])!==(Ax[3]-Ax[1])){if(((X&0x20)===0x20))Aa=B.
abO(Aa,Ax[3]-(Aa[3]-Aa[1]));else if(((X&0x10)===0x10))Aa=B.abO(Aa,(Ax[1]+(((Ax[3
]-Ax[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0));}Aa=B.abh(Aa,Af.slice(0,2));return Aa;},_Init:
function(aArg){B.Core.A$._Init.call(this,aArg);this.__proto__=E.Bp;},_Mark:function(
D){var A;B.Core.A$._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Ai)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"
};E.Text={E0:null,As:null,Ez:null,Ak:B.jV,String:B.jV,CC:null,G9:B.wf,Fz:B.wf,Ep:
0x12,Bv:0xFFFFFFFF,Dh:255,Hj:false,Fl:false,Lf:false,B3:false,Et:function(){if(!
!this.CC){this.Mf(this.CC);this.CC=null;}},C3:function(AK,aClip,aOffset,Aq,aBlend
){var A;if((this.Ak===B.jV)||!this.As)return;var X=this.Ep;var font=this.As;var Ax=
B.abh(this.M,aOffset);var Aw;var AB;var AA;var Ay;var col=this.Bv;var CU=(((Aq+1
)*this.Dh)>>8)+1;var B$=this.Ak.charCodeAt(0)||0;var N=B.abh(this.Ha(),aOffset);
var Fb=[Ax[0]-N[0],(Ax[1]-N[1])-font.Ascent];if(B$<1)return;Aw=AB=Ay=AA=col;if(CU<
256){Aw=(Aw&0x00FFFFFF)|((((((Aw>>24)&0xFF)*CU)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF
)|((((((AB>>24)&0xFF)*CU)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*
CU)>>8)&0xFF)<<24);Ay=(Ay&0x00FFFFFF)|((((((Ay>>24)&0xFF)*CU)>>8)&0xFF)<<24);}if(((
X&0x80)===0x80)){if(this.IP())X=(X&~0x80)|0x4;else X=(X&~0x80)|0x1;}if((B$===1)&&
!((X&0x40)===0x40)){AK.MK(aClip,font,this.Ak,2,(this.Ak.charCodeAt(1)||0)-1,Ax,Fb
,0,0,Aw,AB,AA,Ay,true);return;}var leading=font.Leading;var Gs=(font.Ascent+font.
Descent)+leading;var RA=aClip[1]-N[1];var RB=aClip[3]-N[1];var L7=N[2]-N[0];var EO=
0;var H=1;var Ar=this.Ak.charCodeAt(1)||0;while(((EO+Gs)<RA)&&(Ar>0)){H=H+Ar;EO=
EO+Gs;Ar=this.Ak.charCodeAt(H)||0;}while((EO<RB)&&(Ar>0)){var HH=B.abe(Fb,[0,EO]
);var G5=0;var CI=false;if(((((X&0x40)===0x40)&&((this.Ak.charCodeAt((H+Ar)-1)||
0)!==0x0A))&&((this.Ak.charCodeAt(H+1)||0)!==0x0A))&&((this.Ak.charCodeAt(H+Ar)||
0)!==0x00))CI=true;if(CI&&!!(X&0x6)){var KW=H+Ar;var Nw=this.Ak.indexOf(String.fromCharCode(
0x20),H+1);var Nx=this.Ak.indexOf(String.fromCharCode(0xA0),H+1);if(((Nw<0)||(Nw>=
KW))&&((Nx<0)||(Nx>=KW)))CI=false;}if(CI)G5=L7;else if(((X&0x4)===0x4))HH=[(HH[0
]-L7)+font.Fp(this.Ak,H+1,Ar-1),HH[1]];else if(((X&0x2)===0x2))HH=[(HH[0]-((L7/2
)|0))+((font.Fp(this.Ak,H+1,Ar-1)/2)|0),HH[1]];AK.MK(aClip,font,this.Ak,H+1,Ar-1
,Ax,HH,G5,0,Aw,AB,AA,Ay,true);H=H+Ar;EO=EO+Gs;Ar=this.Ak.charCodeAt(H)||0;}},O:function(
C){var A;if(B.aaY(C,this.M))return;var Oj;Oj=((A=this.M)[2]-A[0])!==(C[2]-C[0]);
if(((Oj&&this.Hj)&&this.B3)&&!((this.F&0x2000)===0x2000)){this.Ak=B.jV;this.B3=false;
B.pe([this,this.G1],this);}if(((this.Fl&&this.B3)&&!B.aaX([(A=this.M)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.Ak=B.jV;this.
B3=false;B.pe([this,this.G1],this);}B.Core.A$.O.call(this,C);B.pe([this,this.KR]
,this);},Rv:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=
B.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},Ru:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},Mf:function(aBidi){if(!aBidi)return;B.rB(aBidi);},RC:function(
aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},KR:function(Au){B.pe(this.Ez
,this);},G1:function(Au){B.pe([this,this.Gr],this);},RX:function(Au){this.I1(this.
E0.Av);},RY:function(Au){var A;var N=this.Ha();var KQ=this.M.slice(0,2);if(N[0]>
KQ[0])N=[].concat(KQ[0],N.slice(1,4));if(N[1]>KQ[1])N=B.abP(N,KQ[1]);var A0=B.abe(
N.slice(0,2),this.M.slice(0,2));var HF=B.abe([(A=this.M)[2]-A[0],A[3]-A[1]],[N[2
]-N[0],N[3]-N[1]]);if(HF[0]>0)HF=[0,HF[1]];if(HF[1]>0)HF=[HF[0],0];this.E0.Av=this.
Fz;this.E0.BJ=B.abe(B.abf(this.Fz,HF),A0);this.E0.BI=B.abe(this.Fz,A0);},Gr:function(
Au){var A;if(this.B3)return;var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3
]-A[1];var Fa=-1;var font=this.As;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=
null;if(this.Hj){Fa=width;if(Fa<0)Fa=1;}if(!!this.CC){this.Mf(this.CC);this.CC=null;
}this.B3=true;if((this.String!==B.jV)&&!!font){var length=this.String.length;if(
this.Lf)this.CC=this.RC(length);this.Ak=font.PH(this.String,0,Fa,length,this.CC);
if(!!this.CC&&!this.OS()){this.Mf(this.CC);this.CC=null;}}else this.Ak=B.jV;this.
G9=AF;if((this.Fl&&(this.Ak!==B.jV))&&!!font){var X=this.Ep;var leading=font.Leading;
var Az=this.Ak;var Fc=this.IP();if(((X&0x80)===0x80)){if(Fc)X=(X&~0x80)|0x4;else
X=(X&~0x80)|0x1;}var KV=(font.Ascent+font.Descent)+leading;var B$=Az.charCodeAt(
0)||0;var GX=((height+leading)/KV)|0;var L$=false;var KD=false;if(GX<=0)GX=1;if(
B$>GX){var AW=0;var JF=0;var KX=B$-1;var BW;var Cr=Az.length;var tmp=B.jV;if(!!(
X&0x110)&&!!(X&0x28))X&=~0x110;if(!!(X&0x110))X&=~0x28;if(((X&0x20)===0x20))JF=B$-
GX;else if(((X&0x10)===0x10)||((X&0x100)===0x100)){JF=((B$-GX)/2)|0;KX=(JF+GX)-1;
}else KX=GX-1;L$=JF>0;KD=KX<(B$-1);for(BW=1;AW<JF;AW=AW+1)BW=BW+(Az.charCodeAt(BW
)||0);if(KD)for(Cr=BW;AW<KX;AW=AW+1)Cr=Cr+(Az.charCodeAt(Cr)||0);if(L$){var BQ=Az.
charCodeAt(BW)||0;tmp=(Dl+B.abW(Az,BW,BQ))+Dl;tmp=B.abQ(tmp,0,(BQ+2)&0xFFFF);BW=
BW+BQ;if((tmp.charCodeAt(BQ)||0)===0x0A){tmp=B.abQ(tmp,BQ,0xFEFF);tmp=B.abQ(tmp,
BQ+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(
tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(Az,BW,Cr-BW);if(KD&&(Cr>=
BW)){var BQ=Az.charCodeAt(Cr)||0;var C0=(Dl+B.abW(Az,Cr,BQ))+Dl;C0=B.abQ(C0,0,(BQ+
2)&0xFFFF);C0=B.abQ(C0,1,0xFEFF);if((C0.charCodeAt(BQ)||0)===0x0A){C0=B.abQ(C0,BQ
,0xFEFF);C0=B.abQ(C0,BQ+1,0x0A);}if((C0.charCodeAt(2)||0)===0x0A){C0=B.abQ(C0,2,
0xFEFF);C0=B.abQ(C0,1,0x0A);}else C0=B.abQ(C0,1,0xFEFF);tmp=tmp+C0;}Az=String.fromCharCode(
GX&0xFFFF)+tmp;}var AW=0;var Y=1;var Mp=width;B$=Az.charCodeAt(0)||0;for(;AW<B$;
AW=AW+1){var G3=L$&&!AW;var G4=KD&&(AW===(B$-1));var DW=false;var DX=false;var Ix=
Fc;if((Fc&&G3)&&!G4){G3=false;G4=true;}else if((Fc&&G4)&&!G3){G4=false;G3=true;}
var D6=Y+1;var BQ=Az.charCodeAt(Y)||0;var BW=D6;var Cr=(D6+BQ)-2;var Mk=-1;var Ml=-
1;if(!this.Hj&&(font.Fp(Az,D6,BQ-1)>Mp)){var Hs=X;if(((Hs&0x2)===0x2)&&!!(Hs&0x5
))Hs&=~0x2;if(((Hs&0x2)===0x2))Hs&=~0x5;if(((Hs&0x4)===0x4))DW=true;else if(((Hs&
0x2)===0x2)){DW=true;DX=true;}else DX=true;}if((Az.charCodeAt(BW)||0)===0x0A)BW=
BW+1;if((Az.charCodeAt(Cr)||0)===0x0A)Cr=Cr-1;while(DW&&((Az.charCodeAt(BW)||0)===
0xFEFF))BW=BW+1;while(DX&&((Az.charCodeAt(Cr)||0)===0xFEFF))Cr=Cr-1;DW=DW&&!G4;DX=
DX&&!G3;while((((DW||DX)||G3)||G4)&&(BW<Cr)){if((DW&&(Ix||!DX))||G3){if(Mk>0)Az=
B.abQ(Az,Mk,0xFEFF);Az=B.abQ(Az,BW,0x2026);Mk=BW;BW=BW+1;Ix=!Ix;G3=false;if(font.
Fp(Az,D6,BQ-1)<=Mp){DW=false;DX=false;}else DW=DW||!DX;}if((DX&&(!Ix||!DW))||G4){
if(Ml>0)Az=B.abQ(Az,Ml,0xFEFF);Az=B.abQ(Az,Cr,0x2026);Ml=Cr;Cr=Cr-1;Ix=!Ix;G4=false;
if(font.Fp(Az,D6,BQ-1)<=Mp){DW=false;DX=false;}else DX=DX||!DW;}}Y=Y+BQ;}this.G9=[
font.MO(Az),((Az.charCodeAt(0)||0)*KV)-leading];this.Ak=Az;}if(!!this.G&&((this.
F&0x1)===0x1))this.G.U(this.M);B.pe([this,this.KR],this);},Pc:function(C){if(C===
this.Lf)return;this.Lf=C;this.Ak=B.jV;this.B3=false;B.pe([this,this.G1],this);},
Pb:function(C){if(C===this.Fl)return;this.Fl=C;if((this.Hj||C)||!!this.Ez)this.F=
this.F&~0x100;else this.F=this.F|0x100;this.Ak=B.jV;this.B3=false;B.pe([this,this.
G1],this);},LQ:function(C){if(B.aa0(C,this.Ez))return;this.Ez=C;if((this.Hj||!!C
)||this.Fl)this.F=this.F&~0x100;else this.F=this.F|0x100;},Pv:function(C){if(C===
this.E0)return;if(!!C&&!!C.Iw){B.ab5("%s%*%s",EB,C,EC);throw new Error(ED);}if(!
!this.E0){this.E0.KT=null;this.E0.Iw=null;}this.E0=C;if(!!C){C.KT=[this,this.RY];
C.Iw=[this,this.RX];}},Kc:function(C){if(C===this.Hj)return;this.Hj=C;if(this.B3
){this.Ak=B.jV;this.B3=false;B.pe([this,this.G1],this);}if((C||this.Fl)||!!this.
Ez)this.F=this.F&~0x100;else this.F=this.F|0x100;},I1:function(C){var A;if(B.aaX(
C,this.Fz))return;this.Fz=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);if(
this.B3)B.pe([this,this.KR],this);},GD:function(C){var A;if(C===this.Ep)return;this.
Ep=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);if(this.Fl){this.Ak=B.jV;
this.B3=false;B.pe([this,this.G1],this);}if(this.B3)B.pe([this,this.KR],this);},
B9:function(C){if(C===this.String)return;this.String=C;this.Ak=B.jV;this.B3=false;
B.pe([this,this.G1],this);},ET:function(C){if(C===this.As)return;this.As=C;this.
Ak=B.jV;this.B3=false;B.pe([this,this.G1],this);},A1:function(C){var A;if(C===this.
Bv)return;this.Bv=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.M);},Hf:function(
C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dh)return;this.Dh=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.M);},IP:function(){if(!this.B3)this.Gr(this);if(
!this.CC)return false;var result=false;var bidi=this.CC;result=B.v2(bidi);return result;
},OS:function(){if(!this.B3)this.Gr(this);if(!this.CC)return false;var result=false;
var bidi=this.CC;result=B.zZ(bidi);return result;},M_:function(aIndex){if(((this.
String===B.jV)||!this.As)||this.Fl)return AF;if(!this.B3)this.Gr(this);if(aIndex<
0)aIndex=0;var RI=(this.Ak.charCodeAt(0)||0)-1;var Cb=this.Ak.charCodeAt(1)||0;var
Y=1;var Gv=2;var AW=0;var col=-1;var E6=true;aIndex=aIndex+2;while((AW<RI)&&((Y+
Cb)<=aIndex)){Y=Y+Cb;AW=AW+1;Gv=Gv+1;aIndex=aIndex+1;Cb=this.Ak.charCodeAt(Y)||0;
}if(aIndex>(Y+Cb))aIndex=Y+Cb;if(!!this.CC)aIndex=(Y+this.Ru(this.CC,(Y+1)-Gv,(Y+
Cb)-Gv,(aIndex-Y)-1))+1;for(;aIndex>Y;Y=Y+1){var AY=this.Ak.charCodeAt(Y+1)||0;if(
E6)col=col+1;E6=(AY!==0xFEFF)&&(AY!==0x0A);}return[col,AW];},I3:function(Je){if(((
this.String===B.jV)||!this.As)||this.Fl)return 0;if(!this.B3)this.Gr(this);var AW=
Je[1];var col=Je[0];var Y=1;var Gv=2;var B$=this.Ak.charCodeAt(0)||0;var Cb=this.
Ak.charCodeAt(1)||0;if(AW>=B$){AW=B$-1;col=this.Ak.length;}if(AW<0){AW=0;col=0;}
if(col<0)col=0;while((AW>0)&&(Cb>0)){Y=Y+Cb;AW=AW-1;Gv=Gv+1;Cb=this.Ak.charCodeAt(
Y)||0;}var D0=Y;var KY=(Y-Gv)+1;var KW=(KY+Cb)-1;var JA=false;while((col>=0)&&(Cb>
1)){var AY=this.Ak.charCodeAt(Y+1)||0;Y=Y+1;Cb=Cb-1;JA=(AY===0xFEFF)||(AY===0x0A
);if(!JA){col=col-1;D0=Y;}}if((!JA&&(col>=0))&&((this.Ak.charCodeAt(Y+1)||0)===0x00
))JA=true;if(JA)D0=D0+1;D0=D0-Gv;if(!!this.CC)D0=KY+this.Rv(this.CC,KY,KW,D0-KY);
return D0;},Kd:function(Co){var A;if((this.String===B.jV)||!this.As)return AF;if(
!this.B3)this.Gr(this);var N=this.Ha();if((N[0]>=N[2])||(N[1]>=N[3]))return AF;var
font=this.As;var X=this.Ep;var B$=this.Ak.charCodeAt(0)||0;var leading=font.Leading;
if(Co[1]<N[1])Co=[Co[0],N[1]];if(Co[1]>=N[3])Co=[Co[0],N[3]-1];var Gs=(font.Ascent+
font.Descent)+leading;var AW=((Co[1]-N[1])/Gs)|0;var Cu=this.Lo(AW);var Cb=Cu.length;
var CI=false;if(((X&0x80)===0x80)){if(this.IP())X=(X&~0x80)|0x4;else X=(X&~0x80)|
0x1;}if(((X&0x40)===0x40)&&(AW<(B$-1)))CI=true;if((CI&&(Cu.indexOf(String.fromCharCode(
0x20),0)<0))&&(Cu.indexOf(String.fromCharCode(0xA0),0)<0))CI=false;if(CI){var Y=
1;var HO=AW;while(HO>0){Y=Y+(this.Ak.charCodeAt(Y)||0);HO=HO-1;}if(((this.Ak.charCodeAt(
Y+1)||0)===0x0A)||((this.Ak.charCodeAt((Y+(this.Ak.charCodeAt(Y)||0))-1)||0)===0x0A
))CI=false;}var G5=0;var D7=0;if(CI)G5=N[2]-N[0];else if(((X&0x4)===0x4))D7=(N[2
]-N[0])-font.Fp(Cu,0,Cb);else if(((X&0x2)===0x2))D7=(((N[2]-N[0])/2)|0)-((font.Fp(
Cu,0,Cb)/2)|0);var col=font.OO(Cu,0,Cb,(Co[0]-N[0])-D7,G5);if(col<0)col=0;return[
col,AW];},LX:function(Je){var A;if((this.String===B.jV)||!this.As)return AF;if(!
this.B3)this.Gr(this);var B$=this.Ak.charCodeAt(0)||0;var font=this.As;var X=this.
Ep;var AW=Je[1];var col=Je[0];if(AW>=B$){AW=B$-1;col=this.Ak.length;}if(AW<0){AW=
0;col=0;}var Cu=this.Lo(AW);var Cb=Cu.length;var N=this.Ha();var CI=false;var leading=
font.Leading;if(((X&0x80)===0x80)){if(this.IP())X=(X&~0x80)|0x4;else X=(X&~0x80)|
0x1;}if(((X&0x40)===0x40)&&(AW<(B$-1)))CI=true;if((CI&&(Cu.indexOf(String.fromCharCode(
0x20),0)<0))&&(Cu.indexOf(String.fromCharCode(0xA0),0)<0))CI=false;if(CI){var Y=
1;var HO=AW;while(HO>0){Y=Y+(this.Ak.charCodeAt(Y)||0);HO=HO-1;}if(((this.Ak.charCodeAt(
Y+1)||0)===0x0A)||((this.Ak.charCodeAt((Y+(this.Ak.charCodeAt(Y)||0))-1)||0)===0x0A
))CI=false;}var EO=(N[1]+(AW*((font.Ascent+font.Descent)+leading)))+font.Ascent;
var G5=0;var D7=N[0];if(CI)G5=N[2]-N[0];else if(((X&0x4)===0x4))D7=N[2]-font.Fp(
Cu,0,Cb);else if(((X&0x2)===0x2))D7=(D7+(((N[2]-N[0])/2)|0))-((font.Fp(Cu,0,Cb)/
2)|0);var pos=font.ON(Cu,0,Cb,col,G5);if(pos<0)pos=0;return[D7+pos,EO];},Lo:function(
Jd){if((this.String===B.jV)||!this.As)return B.jV;if(!this.B3)this.Gr(this);var B$=
this.Ak.charCodeAt(0)||0;var Y=1;if((!this.As||(Jd<0))||(Jd>=B$))return B.jV;while(
Jd>0){Y=Y+(this.Ak.charCodeAt(Y)||0);Jd=Jd-1;}var D6=Y;var Iq=Y+(this.Ak.charCodeAt(
Y)||0);var AY=0x00;do{D6=D6+1;AY=this.Ak.charCodeAt(D6)||0;}while(((AY===0xFEFF)||(
AY===0x0A))&&(D6<=Iq));do{Iq=Iq-1;AY=this.Ak.charCodeAt(Iq)||0;}while(((AY===0xFEFF
)||(AY===0x0A))&&(D6<=Iq));var Cu=B.abW(this.Ak,D6,(Iq-D6)+1);var HE;for(HE=Cu.indexOf(
String.fromCharCode(0xFEFF),0);HE>=0;HE=Cu.indexOf(String.fromCharCode(0xFEFF),HE+
1)){var D0=HE+1;while((Cu.charCodeAt(D0)||0)===0xFEFF)D0=D0+1;Cu=B.ab1(Cu,HE,D0-
HE);}return Cu;},Ha:function(){var A;if((this.String===B.jV)||!this.As)return Dk;
if(!this.B3)this.Gr(this);if(this.Ak===B.jV)return Dk;var leading=this.As.Leading;
var KV=(this.As.Ascent+this.As.Descent)+this.As.Leading;if(B.aaX(this.G9,AF))this.
G9=[this.As.MO(this.Ak),this.G9[1]];this.G9=[this.G9[0],((this.Ak.charCodeAt(0)||
0)*KV)-leading];var X=this.Ep;var Af=this.M;var width=Af[2]-Af[0];var height=Af[
3]-Af[1];var Ax=[0,0,width,height];var Aa=[].concat(Ax.slice(0,2),B.abf(Ax.slice(
0,2),this.G9));if(((X&0x80)===0x80)){if(this.IP())X=(X&~0x80)|0x4;else X=(X&~0x80
)|0x1;}if(((X&0x40)===0x40)){var Fa;Fa=width;if(Fa<0)Fa=0;if(Fa>(Aa[2]-Aa[0]))Aa=
B.abL(Aa,Fa);}if((!!(X&0x110)&&!!(X&0x28))&&((Aa[3]-Aa[1])>(Ax[3]-Ax[1])))X&=~0x110;
if(!!(X&0x110))X&=~0x28;if((((X&0x2)===0x2)&&!!(X&0x5))&&((Aa[2]-Aa[0])>(Ax[2]-Ax[
0])))X&=~0x2;if(((X&0x2)===0x2))X&=~0x5;if((Aa[2]-Aa[0])!==(Ax[2]-Ax[0])){if(((X&
0x4)===0x4))Aa=B.abM(Aa,Ax[2]-(Aa[2]-Aa[0]));else if(((X&0x2)===0x2))Aa=B.abM(Aa
,(Ax[0]+(((Ax[2]-Ax[0])/2)|0))-(((Aa[2]-Aa[0])/2)|0));}if((Aa[3]-Aa[1])!==(Ax[3]-
Ax[1])){if(((X&0x20)===0x20))Aa=B.abO(Aa,Ax[3]-(Aa[3]-Aa[1]));else if(((X&0x100)===
0x100))Aa=B.abO(Aa,((Ax[1]+(((Ax[3]-Ax[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0))+(((this.
As.Descent-this.As.Ascent)/2)|0));else if(((X&0x10)===0x10))Aa=B.abO(Aa,(Ax[1]+(((
Ax[3]-Ax[1])/2)|0))-(((Aa[3]-Aa[1])/2)|0));}Aa=B.abh(Aa,Af.slice(0,2));return B.
abh(Aa,this.Fz);},LN:function(){return this.Dh;},_Init:function(aArg){B.Core.A$.
_Init.call(this,aArg);this.__proto__=E.Text;},_Done:function(){this.Et();this.__proto__=
B.Core.A$;B.Core.A$._Done.call(this);},_Mark:function(D){var A;B.Core.A$._Mark.call(
this,D);if((A=this.E0)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.As)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ez)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Views::Text"};E.Hi={GS:null,GL:B.wf,AE:B.abi(4,3,0,null),Hh:B.wg
,DA:0,HI:0,LT:true,Hg:function(C){if(B.aaX(C,this.BU))return;B.Core.Ed.Hg.call(this
,C);this.AE.Set(3,0,C[0]);this.AE.Set(3,1,C[1]);this.AE.Set(3,2,1);this.DA=0x45;
B.pe([this,this.ID],this);},GF:function(C){if(B.aaX(C,this.Cc))return;B.Core.Ed.
GF.call(this,C);this.AE.Set(2,0,C[0]);this.AE.Set(2,1,C[1]);this.AE.Set(2,2,1);this.
DA=0x45;B.pe([this,this.ID],this);},Ec:function(C){if(B.aaX(C,this.AU))return;B.
Core.Ed.Ec.call(this,C);this.AE.Set(1,0,C[0]);this.AE.Set(1,1,C[1]);this.AE.Set(
1,2,1);this.DA=0x45;B.pe([this,this.ID],this);},Ex:function(C){if(B.aaX(C,this.AT
))return;B.Core.Ed.Ex.call(this,C);this.AE.Set(0,0,C[0]);this.AE.Set(0,1,C[1]);this.
AE.Set(0,2,1);this.DA=0x45;B.pe([this,this.ID],this);},Ry:function(){return;},ID:
function(Au){var A;this.GS=null;if(this.DA===0x00)return;if(this.DA===0x45){var EK=
B._NewObject(B.Graphics.Ne,0);EK=EK.Ld(this.AE.Get(0,0),this.AE.Get(0,1),this.AE.
Get(1,0),this.AE.Get(1,1),this.AE.Get(2,0),this.AE.Get(2,1),this.AE.Get(3,0),this.
AE.Get(3,1));if(!!EK){EK.JR(0,0);this.AE.Set(0,2,EK.I6*240);EK.JR(1,0);this.AE.Set(
1,2,EK.I6*240);EK.JR(1,1);this.AE.Set(2,2,EK.I6*240);EK.JR(0,1);this.AE.Set(3,2,
EK.I6*240);}this.Ry();}this.HI=this.DA;this.DA=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.GetClipping());},Pr:function(C){var A;if(C===this.LT)return;this.
LT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());},MZ:function(
C){var A;if(B.aaY(C,this.Hh))return;this.Hh=C;if((((this.HI===0x45)&&(this.DA===
0x00))&&!!this.G)&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((this.HI
!==0x45)&&(this.DA===0x00)){this.DA=this.HI;B.pe([this,this.ID],this);}},H6:function(
By){var A;if(!!!this.GS){this.GS=B._NewObject(B.Graphics.MP,0);this.GS.Ld(this.AE.
Get(0,0),this.AE.Get(0,1),this.AE.Get(1,0),this.AE.Get(1,1),this.AE.Get(2,0),this.
AE.Get(2,1),this.AE.Get(3,0),this.AE.Get(3,1));}if(!this.GS.PK(By))return AF;var
DD=B.aaV(this.Hh,[].concat(AF,this.GL));var D7=this.GS.Nf*(DD[2]-DD[0]);var EO=this.
GS.Ng*(DD[3]-DD[1]);return B.abf([D7|0,EO|0],DD.slice(0,2));},_Init:function(aArg
){B.Core.Ed._Init.call(this,aArg);(this.AE=[]).__proto__=E.Hi.AE;this.__proto__=
E.Hi;this.F=0x3;},_Mark:function(D){var A;B.Core.Ed._Mark.call(this,D);if((A=this.
GS)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpView"};E.L1={AM:
null,bitmap:null,Z:null,Dh:255,C3:function(AK,aClip,aOffset,Aq,aBlend){var A;if(
!this.bitmap)return;this.bitmap.Update();var El=aOffset[0];var Em=aOffset[1];var
N=B.aaV(this.Hh,[].concat(AF,this.GL));aBlend=aBlend&&((this.F&0x2)===0x2);Aq=Aq+
1;var N0;var N1;var N2;var N3;var RL=this.Dh;N0=N1=N2=N3=RL;var GM=255|(255<<8)|(
255<<16)|((((Aq*N0)>>8)&0xFF)<<24);var GN=255|(255<<8)|(255<<16)|((((Aq*N1)>>8)&
0xFF)<<24);var Rw=255|(255<<8)|(255<<16)|((((Aq*N2)>>8)&0xFF)<<24);var Rx=255|(255<<
8)|(255<<16)|((((Aq*N3)>>8)&0xFF)<<24);aClip=B.aaV(aClip,B.abh(Dk,aOffset));AK.PT(
aClip,this.bitmap,0,this.AE.Get(0,0)+El,this.AE.Get(0,1)+Em,this.AE.Get(0,2),this.
AE.Get(1,0)+El,this.AE.Get(1,1)+Em,this.AE.Get(1,2),this.AE.Get(2,0)+El,this.AE.
Get(2,1)+Em,this.AE.Get(2,2),this.AE.Get(3,0)+El,this.AE.Get(3,1)+Em,this.AE.Get(
3,2),N,GM,GN,Rw,Rx,aBlend,this.LT);},Be:function(Ao){if(!this.Z||!this.AM)return null;
var R=(B.Core.EP.isPrototypeOf(Ao)?Ao:null);var AP=(B.Core.HX.isPrototypeOf(Ao)?
Ao:null);if(!R&&!AP)return null;var A0=AF;var V=this.AM.G;while(!!V&&(V!==this.Z
)){A0=B.abe(A0,V.M.slice(0,2));V=V.G;}var J=this.AM;if(!!R&&!R.Down)this.AM=null;
if(!!R){R.Bo=B.abf(this.H6(R.Bo),A0);R.Cw=B.abf(this.H6(R.Cw),A0);return J.Be(R);
}if(!!AP){var RO=B.abf(this.H6(B.abe(AP.Bo,AP.Av)),A0);AP.Bo=B.abf(this.H6(AP.Bo
),A0);AP.Cw=B.abf(this.H6(AP.Cw),A0);AP.Av=B.abe(AP.Bo,RO);return J.Be(AP);}return E.
Hi.Be.call(this,Ao);},Er:function(Ad,Q,CB,Ef,EE,E3){var A;if(!this.Z||!((this.Z.
F&0x18)===0x18))return null;var pos=B.aaI(Ad);pos=this.H6(pos);var DD=B.aaV(this.
Hh,[].concat(AF,this.GL));if(!B.wa(DD,pos))return null;var BE=this.Z.Er(B.abh(B.
abh([0,0,Ad[2]-Ad[0],Ad[3]-Ad[1]],pos),this.Z.M.slice(0,2)),Q,CB,Ef,null,E3);if(
!!BE)this.AM=BE.BZ;else this.AM=null;if(!!this.AM)return B._NewObject(B.Core.II,
0).Initialize(this,AF);return null;},DB:function(Au){var A;var N4=this.GL;if(!!this.
Z)this.bitmap=this.Z.AV;else this.bitmap=null;if(!!this.bitmap)this.GL=this.bitmap.
FrameSize;else this.GL=AF;if(((B.aaX(N4,this.GL)||((this.HI===0x45)&&(this.DA===
0x00)))&&!!this.G)&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if(((this.
HI!==0x45)&&(this.DA===0x00))&&!B.aaX(N4,this.GL)){this.DA=this.HI;B.pe([this,this.
ID],this);}},Hf:function(C){var A;if(C===this.Dh)return;this.Dh=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.GetClipping());},Pe:function(C){if(C===this.Z)return;
if(!!C&&(C===this.G))throw new Error(Hk);if(!!this.Z){B.z9([this,this.DB],this.Z
,0);this.bitmap=null;}this.Z=C;if(!!C){B.zV([this,this.DB],C,0);this.bitmap=C.AV;
}this.DB(this);},_Init:function(aArg){E.Hi._Init.call(this,aArg);this.__proto__=
E.L1;},_Mark:function(D){var A;E.Hi._Mark.call(this,D);if((A=this.AM)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};E.
SH={Ot:0x1,Os:0x2,Ou:0x4,Ox:0x8,Ow:0x10,Ov:0x20,S7:0x40,S8:0x80,S_:0x100};E.S$={
Ot:0x1,Os:0x2,Ou:0x4,Ox:0x8,Ow:0x10,Ov:0x20,Sm:0x40,Sl:0x80,Sr:0x100};E.SR={SQ:0
,S5:1,S3:2,S4:3};
E._Init=function(){E.LD.__proto__=B.Core.H4;E.CH.__proto__=B.Core.A$;E.Bj.__proto__=
B.Core.A$;E.Ln.__proto__=B.Core.A$;E.Bp.__proto__=B.Core.A$;E.Text.__proto__=B.Core.
A$;E.Hi.__proto__=B.Core.Ed;E.L1.__proto__=E.Hi;};E._ReInit=function(){};E.Dm=function(
D){};return E;})();

/* Embedded Wizard */