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
var A4=[0,0];var Bi="Can not resize explicitly attached graphics engine bitmaps";
var Dv=[0,0,0,0];var E0="No graphics engine bitmap attached to this canvas";var Ee=
"The canvas is already initialized with a graphics engine bitmap";var FQ="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
E.Canvas={Au:null,Kw:B.wg,ES:0,K$:false,FH:function(){if(this.K$)this.DetachBitmap(
);},Bu:function(aArg){this.Js=true;},Qh:function(C){if((C[0]<=0)||(C[1]<=0))C=A4;
if(B.aaX(C,this.FrameSize))return;if(this.K$)throw new Error(Bi);this.FrameSize=
C;this.EP=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
A4;this.FrameDelay=0;this.NoOfFrames=1;}this.Kw=[].concat(A4,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.ES;for(this.ES=this.NoOfFrames-1;this.ES>=0;this.
ES--)this.NL(this.Kw,this.Kw,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.ES=dstFrameNr;}}if(!(((A=this.Kw)[0]>=A[2])||(A[1]>=A[3])))this.Kw=Dv;},DetachBitmap:
function(){if(!this.K$)throw new Error(E0);this.bitmap=null;this.K$=false;this.FrameSize=
A4;this.FrameDelay=0;this.NoOfFrames=1;this.EP=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Ee);if(!aBitmap)return this;this.
bitmap=aBitmap;this.K$=true;var noOfFrames=1;var frameSize=A4;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.EP=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Si:function(aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=
this.bitmap;var dstFrameNo=this.ES;{B.aad(dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth
,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Sm:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.ES;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},PZ:function(aClip,O0,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,O2,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!O0||!O0.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(O2===1)orient=90;else if(O2===2
)orient=180;else if(O2===3)orient=270;var dstFrameNo=this.ES;var dstBitmap=this.
bitmap;var srcFont=O0.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Sf:function(aClip,aBitmap,aFrameNr,aDstRect,J1,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!J1)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.ES;var srcRect=[
].concat(A4,aBitmap.FrameSize);var left=((J1&0x1)===0x1);var top=((J1&0x2)===0x2
);var right=((J1&0x4)===0x4);var bottom=((J1&0x8)===0x8);var interior=((J1&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},TA:function(
aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.
bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1
];var left=aDstRect[0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-
left)>4096)||((right-left)<-4096))||((bottom-top)>4096))||((bottom-top)<-4096)){
B.ab5("%s",FQ);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var
dstFrameNo=this.ES;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,top
,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR,
aColorBL,aBlend,aFilter);}},Sc:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos,
aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.ES;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Sg:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.ES;{B.m6(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},NL:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.ES;{
B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.ach.Ah._Init.call(this,aArg);this.__proto__=E.Canvas;
this.Bu(aArg);},_Done:function(){this.FH();this.__proto__=B.ach.Ah;B.ach.Ah._Done.
call(this);},_Mark:function(D){var A;B.ach.Ah._Mark.call(this,D);if((A=this.Au)&&(
A._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};E.Ko={Left:0x1
,BX:0x2,Right:0x4,R6:0x8,WW:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.Ah;};E._ReInit=function(){};E.Ef=function(
D){};return E;})();

/* Embedded Wizard */