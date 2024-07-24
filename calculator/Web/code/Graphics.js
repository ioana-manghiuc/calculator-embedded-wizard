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
var AI=[0,0];var AG="Can not resize explicitly attached graphics engine bitmaps";
var CF=[0,0,0,0];var DI="No graphics engine bitmap attached to this canvas";var Ec=
"The canvas is already initialized with a graphics engine bitmap";var Ed="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
D.Canvas={Fs:null,Gr:B.wg,CL:0,GJ:false,Dh:function(){if(this.GJ)this.DetachBitmap(
);},AU:function(aArg){this.FN=true;},JU:function(C){if((C[0]<=0)||(C[1]<=0))C=AI;
if(B.aaX(C,this.FrameSize))return;if(this.GJ)throw new Error(AG);this.FrameSize=
C;this.CI=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AI;this.FrameDelay=0;this.NoOfFrames=1;}this.Gr=[].concat(AI,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.CL;for(this.CL=this.NoOfFrames-1;this.CL>=0;this.
CL--)this.In(this.Gr,this.Gr,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.CL=dstFrameNr;}}if(!(((A=this.Gr)[0]>=A[2])||(A[1]>=A[3])))this.Gr=CF;},DetachBitmap:
function(){if(!this.GJ)throw new Error(DI);this.bitmap=null;this.GJ=false;this.FrameSize=
AI;this.FrameDelay=0;this.NoOfFrames=1;this.CI=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Ec);if(!aBitmap)return this;this.
bitmap=aBitmap;this.GJ=true;var noOfFrames=1;var frameSize=AI;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.CI=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},K5:function(aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.CL;{B.aad(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth
,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},K8:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CL;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},JM:function(aClip,Jb,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,Jd,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!Jb||!Jb.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(Jd===1)orient=90;else if(Jd===2
)orient=180;else if(Jd===3)orient=270;var dstFrameNo=this.CL;var dstBitmap=this.
bitmap;var srcFont=Jb.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},K2:function(aClip,aBitmap,aFrameNr,aDstRect,FZ,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!FZ)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.CL;var srcRect=[
].concat(AI,aBitmap.FrameSize);var left=((FZ&0x1)===0x1);var top=((FZ&0x2)===0x2
);var right=((FZ&0x4)===0x4);var bottom=((FZ&0x8)===0x8);var interior=((FZ&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},LV:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
B.ab5("%s",Ed);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.CL;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},KZ:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,
aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.CL;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},K3:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CL;{B.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},In:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CL;{
B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.ach.Ae._Init.call(this,aArg);this.__proto__=D.Canvas;
this.AU(aArg);},_Done:function(){this.Dh();this.__proto__=B.ach.Ae;B.ach.Ae._Done.
call(this);},_Mark:function(E){var A;B.ach.Ae._Mark.call(this,E);if((A=this.Fs)&&(
A._cycle!=E))A._Mark(A._cycle=E);},_className:"Graphics::Canvas"};D.N5={Left:0x1
,A4:0x2,Right:0x4,NY:0x8,Ob:0x10};
D._Init=function(){D.Canvas.__proto__=B.ach.Ae;};D._ReInit=function(){};D.Cu=function(
E){};return D;})();

/* Embedded Wizard */