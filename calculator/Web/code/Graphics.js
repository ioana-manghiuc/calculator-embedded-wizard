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
var AF=[0,0];var AV="Can not resize explicitly attached graphics engine bitmaps";
var C_=[0,0,0,0];var EF="No graphics engine bitmap attached to this canvas";var Ds=
"The canvas is already initialized with a graphics engine bitmap";var D8="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
E.Canvas={FZ:null,G9:B.wg,C6:0,HC:false,DB:function(){if(this.HC)this.DetachBitmap(
);},A9:function(aArg){this.Gv=true;},Lc:function(C){if((C[0]<=0)||(C[1]<=0))C=AF;
if(B.aaX(C,this.FrameSize))return;if(this.HC)throw new Error(AV);this.FrameSize=
C;this.C4=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AF;this.FrameDelay=0;this.NoOfFrames=1;}this.G9=[].concat(AF,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.C6;for(this.C6=this.NoOfFrames-1;this.C6>=0;this.
C6--)this.JA(this.G9,this.G9,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.C6=dstFrameNr;}}if(!(((A=this.G9)[0]>=A[2])||(A[1]>=A[3])))this.G9=C_;},DetachBitmap:
function(){if(!this.HC)throw new Error(EF);this.bitmap=null;this.HC=false;this.FrameSize=
AF;this.FrameDelay=0;this.NoOfFrames=1;this.C4=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Ds);if(!aBitmap)return this;this.
bitmap=aBitmap;this.HC=true;var noOfFrames=1;var frameSize=AF;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.C4=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},MD:function(aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.C6;{B.aad(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth
,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},MG:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},K4:function(aClip,Kn,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,Kp,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!Kn||!Kn.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(Kp===1)orient=90;else if(Kp===2
)orient=180;else if(Kp===3)orient=270;var dstFrameNo=this.C6;var dstBitmap=this.
bitmap;var srcFont=Kn.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},MA:function(aClip,aBitmap,aFrameNr,aDstRect,GM,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!GM)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.C6;var srcRect=[
].concat(AF,aBitmap.FrameSize);var left=((GM&0x1)===0x1);var top=((GM&0x2)===0x2
);var right=((GM&0x4)===0x4);var bottom=((GM&0x8)===0x8);var interior=((GM&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},NH:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
B.ab5("%s",D8);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.C6;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},Mx:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,
aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.C6;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},MB:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{B.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},JA:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.C6;{
B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.ach.X._Init.call(this,aArg);this.__proto__=E.Canvas;
this.A9(aArg);},_Done:function(){this.DB();this.__proto__=B.ach.X;B.ach.X._Done.
call(this);},_Mark:function(D){var A;B.ach.X._Mark.call(this,D);if((A=this.FZ)&&(
A._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};E.G1={Left:0x1
,Bg:0x2,Right:0x4,PS:0x8,P6:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.X;};E._ReInit=function(){};E.CP=function(
D){};return E;})();

/* Embedded Wizard */