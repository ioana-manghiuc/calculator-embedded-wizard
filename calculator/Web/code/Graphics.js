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
var AV=[0,0];var Bf="Can not resize explicitly attached graphics engine bitmaps";
var DM=[0,0,0,0];var Fj="No graphics engine bitmap attached to this canvas";var Eo=
"The canvas is already initialized with a graphics engine bitmap";var FM="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
E.Canvas={Cr:null,JB:B.wg,El:0,Kb:false,E0:function(){if(this.Kb)this.DetachBitmap(
);},Bw:function(aArg){this.IF=true;},OO:function(C){if((C[0]<=0)||(C[1]<=0))C=AV;
if(B.aaX(C,this.FrameSize))return;if(this.Kb)throw new Error(Bf);this.FrameSize=
C;this.Ei=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AV;this.FrameDelay=0;this.NoOfFrames=1;}this.JB=[].concat(AV,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.El;for(this.El=this.NoOfFrames-1;this.El>=0;this.
El--)this.MM(this.JB,this.JB,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.El=dstFrameNr;}}if(!(((A=this.JB)[0]>=A[2])||(A[1]>=A[3])))this.JB=DM;},DetachBitmap:
function(){if(!this.Kb)throw new Error(Fj);this.bitmap=null;this.Kb=false;this.FrameSize=
AV;this.FrameDelay=0;this.NoOfFrames=1;this.Ei=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Eo);if(!aBitmap)return this;this.
bitmap=aBitmap;this.Kb=true;var noOfFrames=1;var frameSize=AV;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.Ei=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},QF:function(aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.El;{B.aad(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth
,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},QJ:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.El;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Oz:function(aClip,NH,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,NJ,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!NH||!NH.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(NJ===1)orient=90;else if(NJ===2
)orient=180;else if(NJ===3)orient=270;var dstFrameNo=this.El;var dstBitmap=this.
bitmap;var srcFont=NH.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},QC:function(aClip,aBitmap,aFrameNr,aDstRect,I0,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!I0)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.El;var srcRect=[
].concat(AV,aBitmap.FrameSize);var left=((I0&0x1)===0x1);var top=((I0&0x2)===0x2
);var right=((I0&0x4)===0x4);var bottom=((I0&0x8)===0x8);var interior=((I0&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Sb:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
B.ab5("%s",FM);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.El;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},Qz:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,
aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.El;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},QD:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.El;{B.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},MM:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.El;{
B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.ach.Af._Init.call(this,aArg);this.__proto__=E.Canvas;
this.Bw(aArg);},_Done:function(){this.E0();this.__proto__=B.ach.Af;B.ach.Af._Done.
call(this);},_Mark:function(D){var A;B.ach.Af._Mark.call(this,D);if((A=this.Cr)&&(
A._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};E.Jm={Left:0x1
,BU:0x2,Right:0x4,UR:0x8,Vk:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.Af;};E._ReInit=function(){};E.DN=function(
D){};return E;})();

/* Embedded Wizard */