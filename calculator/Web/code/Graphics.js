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
var AX=[0,0];var AF="Can not resize explicitly attached graphics engine bitmaps";
var Dk=[0,0,0,0];var Dl="No graphics engine bitmap attached to this canvas";var EB=
"The canvas is already initialized with a graphics engine bitmap";var EC="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var ED="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Hk="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var I7=[1,1];var I8=[2,2];
E.Canvas={E$:null,J7:null,DH:B.wg,C4:0,Jf:false,Et:function(){if(this.Jf)this.DetachBitmap(
);},Bl:function(aArg){this.ES=true;},IY:function(C){if((C[0]<=0)||(C[1]<=0))C=AX;
if(B.aaX(C,this.FrameSize))return;if(this.Jf)throw new Error(AF);this.FrameSize=
C;this.DE=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AX;this.FrameDelay=0;this.NoOfFrames=1;}this.DH=[].concat(AX,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.C4;for(this.C4=this.NoOfFrames-1;this.C4>=0;this.
C4--)this.JW(this.DH,this.DH,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.C4=dstFrameNr;}}if(!(((A=this.DH)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[
0]>0)&&(this.FrameSize[1]>0))(A=this.J7)?A[1].call(A[0],this):null;this.DH=Dk;}}
,DetachBitmap:function(){if(!this.Jf)throw new Error(Dl);this.bitmap=null;this.Jf=
false;this.FrameSize=AX;this.FrameDelay=0;this.NoOfFrames=1;this.DE=false;return this;
},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new Error(EB);if(!aBitmap
)return this;this.bitmap=aBitmap;this.Jf=true;var noOfFrames=1;var frameSize=AX;
var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=
aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=
frameDelay;this.DE=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},OG:function(
aClip,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.C4;{B.aad(dstBitmap,dstFrameNo,aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},OK:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C4;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},MK:function(aClip,L3,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,L5,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!L3||!L3.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(L5===1)orient=90;else if(L5===2
)orient=180;else if(L5===3)orient=270;var dstFrameNo=this.C4;var dstBitmap=this.
bitmap;var srcFont=L3.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},OC:function(aClip,aBitmap,aFrameNr,aDstRect,Ij,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!Ij)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.C4;var srcRect=[
].concat(AX,aBitmap.FrameSize);var left=((Ij&0x1)===0x1);var top=((Ij&0x2)===0x2
);var right=((Ij&0x4)===0x4);var bottom=((Ij&0x8)===0x8);var interior=((Ij&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},PT:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;
var y1=aDstY1;var y2=aDstY2;if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<
x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;
if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2
)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((
x2-x1)<-4096))||((y2-y1)>4096))||((y2-y1)<-4096)){B.ab5("%s",EC);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.C4;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},PO:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",ED);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.C4;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},MH:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNr=this.C4;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},OD:function(aClip,aDstRect
,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C4;{B.m6(
dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},JW:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.C4;{B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},OH:function(aClip,aDstPos1,aDstPos2,Rr,Rs,aColor1,
aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var Fe=Rr;var
Ff=Rs;var EM=aDstPos1;var EN=aDstPos2;if(B.aaX(EM,EN))return;if(Fe<=1)Fe=1;if(Ff<=
1)Ff=1;var FS=Fe/2;var FT=Ff/2;var HA=EM[0];var HB=EM[1];var HC=EN[0];var HD=EN[
1];var CP=HC-HA;var CQ=HD-HB;var BQ=Math.sqrt((CP*CP)+(CQ*CQ));if(((Fe>4096)||(Ff>
4096))||(BQ>4096)){B.ab5("%s",Hk);return;}CP=CP/BQ;CQ=CQ/BQ;var x1=HA+(CQ*FS);var
y1=HB-(CP*FS);var x2=HC+(CQ*FT);var y2=HD-(CP*FT);var x3=HC-(CQ*FT);var y3=HD+(CP
*FT);var x4=HA-(CQ*FS);var y4=HB+(CP*FS);var Oe=B.aaL(B.ach.I5);var srcRect=[].concat(
I7,B.abe(Oe.FrameSize,I8));var dstBitmap=this.bitmap;var dstFrameNo=this.C4;var srcBitmap=
Oe.bitmap;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3
,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false);}},OF:function(
aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C4;{B.aac(dstBitmap
,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}},_Init:function(aArg
){B.ach.Ai._Init.call(this,aArg);this.__proto__=E.Canvas;this.Bl(aArg);},_Done:function(
){this.Et();this.__proto__=B.ach.Ai;B.ach.Ai._Done.call(this);},_Mark:function(D
){var A;B.ach.Ai._Mark.call(this,D);if((A=this.E$)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J7)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"
};E.Ne={OZ:1,O0:0,O1:0,O2:0,O3:1,O4:0,J3:0,J4:0,O5:1,MS:0,I6:0,RH:true,JR:function(
aX,Rt){var Sk=((aX*this.J3)+(Rt*this.J4))+this.MS;this.I6=Sk;return true;},Ld:function(
FH,FK,FI,FL,Hq,Hr,FJ,FM){var Ji=FI-Hq;var Jk=FL-Hr;var Jj=FJ-Hq;var Jl=FM-Hr;var
JI=((FH-FI)+Hq)-FJ;var JJ=((FK-FL)+Hr)-FM;var Hw=(Ji*Jl)-(Jk*Jj);if(!Hw)return null;
this.J3=((JI*Jl)-(JJ*Jj))/Hw;this.J4=((Ji*JJ)-(Jk*JI))/Hw;this.O5=0;this.MS=1;this.
OZ=(FI-FH)+(this.J3*FI);this.O0=(FJ-FH)+(this.J4*FJ);this.O1=FH;this.O2=(FL-FK)+(
this.J3*FL);this.O3=(FM-FK)+(this.J4*FM);this.O4=FK;this.RH=false;return this;},
_Init:function(aArg){this.__proto__=E.Ne;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};E.MP={NJ:1,NK:0,NL:0,NM:0,NN:1,NO:0,NP:0,NQ:0,NR:1,Ng:0,Nf:0,Mm:false,PK:function(
By){if(!this.Mm)return false;var MC=By[0];var MD=By[1];var Si=((MC*this.NJ)+(MD*
this.NK))+this.NL;var Sj=((MC*this.NM)+(MD*this.NN))+this.NO;var Mx=((MC*this.NP
)+(MD*this.NQ))+this.NR;if(!!Mx){this.Nf=Si/Mx;this.Ng=Sj/Mx;return true;}return false;
},Ld:function(FH,FK,FI,FL,Hq,Hr,FJ,FM){var Ji=FI-Hq;var Jk=FL-Hr;var Jj=FJ-Hq;var
Jl=FM-Hr;var JI=((FH-FI)+Hq)-FJ;var JJ=((FK-FL)+Hr)-FM;var Hw=(Ji*Jl)-(Jk*Jj);this.
Mm=false;if(!Hw)return;var Is=((JI*Jl)-(JJ*Jj))/Hw;var Ag=((Ji*JJ)-(Jk*JI))/Hw;var
Kq=(FI-FH)+(Is*FI);var Kv=(FJ-FH)+(Ag*FJ);var Ar=FH;var KF=(FL-FK)+(Is*FL);var KH=(
FM-FK)+(Ag*FM);var GR=FK;this.NJ=KH-(GR*Ag);this.NK=(Ar*Ag)-Kv;this.NL=(Kv*GR)-(
Ar*KH);this.NM=(GR*Is)-KF;this.NN=Kq-(Ar*Is);this.NO=(Ar*KF)-(Kq*GR);this.NP=(KF
*Ag)-(KH*Is);this.NQ=(Kv*Is)-(Kq*Ag);this.NR=(Kq*KH)-(Kv*KF);this.Mm=true;},_Init:
function(aArg){this.__proto__=E.MP;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle!=
D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::InverseMatrix"
};E.SA={Left:0x1,Bx:0x2,Right:0x4,St:0x8,SI:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.Ai;};E._ReInit=function(){};E.Dm=function(
D){};return E;})();

/* Embedded Wizard */