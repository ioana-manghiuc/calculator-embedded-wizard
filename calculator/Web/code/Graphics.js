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
);EmWiApp.Graphics=(function(){var B=EmWiApp;var D={};
var AH=[0,0];var AF="Can not resize explicitly attached graphics engine bitmaps";
var CG=[0,0,0,0];var DF="No graphics engine bitmap attached to this canvas";var Ec=
"The canvas is already initialized with a graphics engine bitmap";var Ed="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={Fv:null,Gx:B.wg,CL:0,GP:false,Dg:function(){if(this.GP)this.DetachBitmap(
);},AV:function(aArg){this.FR=true;},J1:function(C){if((C[0]<=0)||(C[1]<=0))C=AH;
if(B.aaX(C,this.FrameSize))return;if(this.GP)throw new Error(AF);this.FrameSize=
C;this.CJ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;}this.Gx=[].concat(AH,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.CL;for(this.CL=this.NoOfFrames-1;this.CL>=0;this.
CL--)this.Iu(this.Gx,this.Gx,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.CL=dstFrameNr;}}if(!(((A=this.Gx)[0]>=A[2])||(A[1]>=A[3])))this.Gx=CG;},DetachBitmap:
function(){if(!this.GP)throw new Error(DF);this.bitmap=null;this.GP=false;this.FrameSize=
AH;this.FrameDelay=0;this.NoOfFrames=1;this.CJ=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Ec);if(!aBitmap)return this;this.
bitmap=aBitmap;this.GP=true;var noOfFrames=1;var frameSize=AH;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.CJ=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Le:function(aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.CL;{B.aad(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth
,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Lh:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CL;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},JT:function(aClip,Jg,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,Ji,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!Jg||!Jg.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(Ji===1)orient=90;else if(Ji===2
)orient=180;else if(Ji===3)orient=270;var dstFrameNo=this.CL;var dstBitmap=this.
bitmap;var srcFont=Jg.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Lb:function(aClip,aBitmap,aFrameNr,aDstRect,Gc,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!Gc)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.CL;var srcRect=[
].concat(AH,aBitmap.FrameSize);var left=((Gc&0x1)===0x1);var top=((Gc&0x2)===0x2
);var right=((Gc&0x4)===0x4);var bottom=((Gc&0x8)===0x8);var interior=((Gc&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},L9:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
B.ab5("%s",Ed);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.CL;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},K_:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,
aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.CL;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Lc:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CL;{B.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Iu:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CL;{
B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.ach.Ae._Init.call(this,aArg);this.__proto__=D.Canvas;
this.AV(aArg);},_Done:function(){this.Dg();this.__proto__=B.ach.Ae;B.ach.Ae._Done.
call(this);},_Mark:function(E){var A;B.ach.Ae._Mark.call(this,E);if((A=this.Fv)&&(
A._cycle!=E))A._Mark(A._cycle=E);},_className:"Graphics::Canvas"};D.Of={Left:0x1
,A7:0x2,Right:0x4,N_:0x8,Oo:0x10};
D._Init=function(){D.Canvas.__proto__=B.ach.Ae;};D._ReInit=function(){};D.Cv=function(
E){};return D;})();

/* Embedded Wizard */