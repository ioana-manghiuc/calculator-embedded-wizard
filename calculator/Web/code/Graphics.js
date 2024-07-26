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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var E={};
var AY=[0,0];var AF="Can not resize explicitly attached graphics engine bitmaps";
var Do=[0,0,0,0];var Ei="No graphics engine bitmap attached to this canvas";var Ej=
"The canvas is already initialized with a graphics engine bitmap";var Ek="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var E4="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var FJ="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Jf=[1,1];var Jg=[2,2];
E.Canvas={Fc:null,Kg:null,DJ:B.wg,C6:0,Jp:false,Ez:function(){if(this.Jp)this.DetachBitmap(
);},Bk:function(aArg){this.EU=true;},I6:function(C){if((C[0]<=0)||(C[1]<=0))C=AY;
if(B.aaX(C,this.FrameSize))return;if(this.Jp)throw new Error(AF);this.FrameSize=
C;this.DG=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AY;this.FrameDelay=0;this.NoOfFrames=1;}this.DJ=[].concat(AY,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.C6;for(this.C6=this.NoOfFrames-1;this.C6>=0;this.
C6--)this.J7(this.DJ,this.DJ,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.C6=dstFrameNr;}}if(!(((A=this.DJ)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[
0]>0)&&(this.FrameSize[1]>0))(A=this.Kg)?A[1].call(A[0],this):null;this.DJ=Do;}}
,DetachBitmap:function(){if(!this.Jp)throw new Error(Ei);this.bitmap=null;this.Jp=
false;this.FrameSize=AY;this.FrameDelay=0;this.NoOfFrames=1;this.DG=false;return this;
},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new Error(Ej);if(!aBitmap
)return this;this.bitmap=aBitmap;this.Jp=true;var noOfFrames=1;var frameSize=AY;
var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=
aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=
frameDelay;this.DG=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},O1:function(
aClip,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{B.aad(dstBitmap,dstFrameNo,aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},O5:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},M6:function(aClip,Ml,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,Mn,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!Ml||!Ml.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(Mn===1)orient=90;else if(Mn===2
)orient=180;else if(Mn===3)orient=270;var dstFrameNo=this.C6;var dstBitmap=this.
bitmap;var srcFont=Ml.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},OX:function(aClip,aBitmap,aFrameNr,aDstRect,Is,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!Is)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.C6;var srcRect=[
].concat(AY,aBitmap.FrameSize);var left=((Is&0x1)===0x1);var top=((Is&0x2)===0x2
);var right=((Is&0x4)===0x4);var bottom=((Is&0x8)===0x8);var interior=((Is&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Qb:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;
var y1=aDstY1;var y2=aDstY2;if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<
x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;
if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2
)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((
x2-x1)<-4096))||((y2-y1)>4096))||((y2-y1)<-4096)){B.ab5("%s",Ek);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C6;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},P6:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",E4);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C6;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},M3:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNr=this.C6;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},OY:function(aClip,aDstRect
,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{B.m6(
dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},J7:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.C6;{B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},O2:function(aClip,aDstPos1,aDstPos2,RI,RJ,aColor1,
aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var Fg=RI;var
Fh=RJ;var EO=aDstPos1;var EP=aDstPos2;if(B.aaX(EO,EP))return;if(Fg<=1)Fg=1;if(Fh<=
1)Fh=1;var FX=Fg/2;var FY=Fh/2;var HD=EO[0];var HE=EO[1];var HF=EP[0];var HG=EP[
1];var CR=HF-HD;var CS=HG-HE;var BR=Math.sqrt((CR*CR)+(CS*CS));if(((Fg>4096)||(Fh>
4096))||(BR>4096)){B.ab5("%s",FJ);return;}CR=CR/BR;CS=CS/BR;var x1=HD+(CS*FX);var
y1=HE-(CR*FX);var x2=HF+(CS*FY);var y2=HG-(CR*FY);var x3=HF-(CS*FY);var y3=HG+(CR
*FY);var x4=HD-(CS*FX);var y4=HE+(CR*FX);var OA=B.aaL(B.ach.Jd);var srcRect=[].concat(
Jf,B.abe(OA.FrameSize,Jg));var dstBitmap=this.bitmap;var dstFrameNo=this.C6;var srcBitmap=
OA.bitmap;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3
,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false);}},O0:function(
aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{B.aac(dstBitmap
,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}},_Init:function(aArg
){B.ach.Ai._Init.call(this,aArg);this.__proto__=E.Canvas;this.Bk(aArg);},_Done:function(
){this.Ez();this.__proto__=B.ach.Ai;B.ach.Ai._Done.call(this);},_Mark:function(D
){var A;B.ach.Ai._Mark.call(this,D);if((A=this.Fc)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Kg)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"
};E.Ny={Ph:1,Pi:0,Pj:0,Pk:0,Pl:1,Pm:0,Kc:0,Kd:0,Pn:1,Nc:0,Je:0,RY:true,J2:function(
aX,RK){var SG=((aX*this.Kc)+(RK*this.Kd))+this.Nc;this.Je=SG;return true;},Lo:function(
FM,FP,FN,FQ,Ht,Hu,FO,FR){var Js=FN-Ht;var Ju=FQ-Hu;var Jt=FO-Ht;var Jv=FR-Hu;var
JT=((FM-FN)+Ht)-FO;var JU=((FP-FQ)+Hu)-FR;var Hz=(Js*Jv)-(Ju*Jt);if(!Hz)return null;
this.Kc=((JT*Jv)-(JU*Jt))/Hz;this.Kd=((Js*JU)-(Ju*JT))/Hz;this.Pn=0;this.Nc=1;this.
Ph=(FN-FM)+(this.Kc*FN);this.Pi=(FO-FM)+(this.Kd*FO);this.Pj=FM;this.Pk=(FQ-FP)+(
this.Kc*FQ);this.Pl=(FR-FP)+(this.Kd*FR);this.Pm=FP;this.RY=false;return this;},
_Init:function(aArg){this.__proto__=E.Ny;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};E.M$={N4:1,N5:0,N6:0,N7:0,N8:1,N9:0,N_:0,N$:0,Oa:1,NA:0,Nz:0,MG:false,P3:function(
BA){if(!this.MG)return false;var MY=BA[0];var MZ=BA[1];var SE=((MY*this.N4)+(MZ*
this.N5))+this.N6;var SF=((MY*this.N7)+(MZ*this.N8))+this.N9;var MS=((MY*this.N_
)+(MZ*this.N$))+this.Oa;if(!!MS){this.Nz=SE/MS;this.NA=SF/MS;return true;}return false;
},Lo:function(FM,FP,FN,FQ,Ht,Hu,FO,FR){var Js=FN-Ht;var Ju=FQ-Hu;var Jt=FO-Ht;var
Jv=FR-Hu;var JT=((FM-FN)+Ht)-FO;var JU=((FP-FQ)+Hu)-FR;var Hz=(Js*Jv)-(Ju*Jt);this.
MG=false;if(!Hz)return;var IB=((JT*Jv)-(JU*Jt))/Hz;var Ag=((Js*JU)-(Ju*JT))/Hz;var
KB=(FN-FM)+(IB*FN);var KG=(FO-FM)+(Ag*FO);var As=FM;var KQ=(FQ-FP)+(IB*FQ);var KS=(
FR-FP)+(Ag*FR);var GV=FP;this.N4=KS-(GV*Ag);this.N5=(As*Ag)-KG;this.N6=(KG*GV)-(
As*KS);this.N7=(GV*IB)-KQ;this.N8=KB-(As*IB);this.N9=(As*KQ)-(KB*GV);this.N_=(KQ
*Ag)-(KS*IB);this.N$=(KG*IB)-(KB*Ag);this.Oa=(KB*KS)-(KG*KQ);this.MG=true;},_Init:
function(aArg){this.__proto__=E.M$;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle!=
D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::InverseMatrix"
};E.SW={Left:0x1,Bz:0x2,Right:0x4,SP:0x8,S4:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.Ai;};E._ReInit=function(){};E.Dp=function(
D){};return E;})();

/* Embedded Wizard */