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
var AV=[0,0];var AF="Can not resize explicitly attached graphics engine bitmaps";
var Da=[0,0,0,0];var Db="No graphics engine bitmap attached to this canvas";var Ew=
"The canvas is already initialized with a graphics engine bitmap";var Ex="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var EU="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Hf="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Hg=[1,1];var I0=[2,2];
E.Canvas={E4:null,JX:null,Dz:B.wg,CW:0,I8:false,Ed:function(){if(this.I8)this.DetachBitmap(
);},Bh:function(aArg){this.EM=true;},IP:function(C){if((C[0]<=0)||(C[1]<=0))C=AV;
if(B.aaX(C,this.FrameSize))return;if(this.I8)throw new Error(AF);this.FrameSize=
C;this.Dw=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AV;this.FrameDelay=0;this.NoOfFrames=1;}this.Dz=[].concat(AV,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.CW;for(this.CW=this.NoOfFrames-1;this.CW>=0;this.
CW--)this.JM(this.Dz,this.Dz,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.CW=dstFrameNr;}}if(!(((A=this.Dz)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[
0]>0)&&(this.FrameSize[1]>0))(A=this.JX)?A[1].call(A[0],this):null;this.Dz=Da;}}
,DetachBitmap:function(){if(!this.I8)throw new Error(Db);this.bitmap=null;this.I8=
false;this.FrameSize=AV;this.FrameDelay=0;this.NoOfFrames=1;this.Dw=false;return this;
},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new Error(Ew);if(!aBitmap
)return this;this.bitmap=aBitmap;this.I8=true;var noOfFrames=1;var frameSize=AV;
var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=
aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=
frameDelay;this.Dw=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Oh:function(
aClip,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.CW;{B.aad(dstBitmap,dstFrameNo,aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Om:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CW;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},Mu:function(aClip,LP,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,LR,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!LP||!LP.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(LR===1)orient=90;else if(LR===2
)orient=180;else if(LR===3)orient=270;var dstFrameNo=this.CW;var dstBitmap=this.
bitmap;var srcFont=LP.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},Od:function(aClip,aBitmap,aFrameNr,aDstRect,Ib,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!Ib)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.CW;var srcRect=[
].concat(AV,aBitmap.FrameSize);var left=((Ib&0x1)===0x1);var top=((Ib&0x2)===0x2
);var right=((Ib&0x4)===0x4);var bottom=((Ib&0x8)===0x8);var interior=((Ib&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Ps:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;
var y1=aDstY1;var y2=aDstY2;if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<
x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;
if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2
)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((
x2-x1)<-4096))||((y2-y1)>4096))||((y2-y1)<-4096)){B.ab5("%s",Ex);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.CW;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},Po:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",EU);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.CW;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},Mr:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNr=this.CW;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Oe:function(aClip,aDstRect
,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CW;{B.m6(
dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},JM:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.CW;{B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},Oi:function(aClip,aDstPos1,aDstPos2,Q2,Q3,aColor1,
aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var E8=Q2;var
E9=Q3;var EF=aDstPos1;var EG=aDstPos2;if(B.aaX(EF,EG))return;if(E8<=1)E8=1;if(E9<=
1)E9=1;var FO=E8/2;var FP=E9/2;var Hw=EF[0];var Hx=EF[1];var Hy=EG[0];var Hz=EG[
1];var CH=Hy-Hw;var CI=Hz-Hx;var BK=Math.sqrt((CH*CH)+(CI*CI));if(((E8>4096)||(E9>
4096))||(BK>4096)){B.ab5("%s",Hf);return;}CH=CH/BK;CI=CI/BK;var x1=Hw+(CI*FO);var
y1=Hx-(CH*FO);var x2=Hy+(CI*FP);var y2=Hz-(CH*FP);var x3=Hy-(CI*FP);var y3=Hz+(CH
*FP);var x4=Hw-(CI*FO);var y4=Hx+(CH*FO);var NS=B.aaL(B.ach.IY);var srcRect=[].concat(
Hg,B.abe(NS.FrameSize,I0));var dstBitmap=this.bitmap;var dstFrameNo=this.CW;var srcBitmap=
NS.bitmap;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3
,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false);}},Og:function(
aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.CW;{B.aac(dstBitmap
,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}},_Init:function(aArg
){B.ach.Ak._Init.call(this,aArg);this.__proto__=E.Canvas;this.Bh(aArg);},_Done:function(
){this.Ed();this.__proto__=B.ach.Ak;B.ach.Ak._Done.call(this);},_Mark:function(D
){var A;B.ach.Ak._Mark.call(this,D);if((A=this.E4)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.JX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"
};E.MX={OA:1,OB:0,OC:0,OD:0,OE:1,OF:0,JT:0,JU:0,OG:1,MC:0,IZ:0,Rg:true,JH:function(
aX,Q4){var RW=((aX*this.JT)+(Q4*this.JU))+this.MC;this.IZ=RW;return true;},K0:function(
FD,FG,FE,FH,Hm,Hn,FF,FI){var I$=FE-Hm;var Jb=FH-Hn;var Ja=FF-Hm;var Jc=FI-Hn;var
Jy=((FD-FE)+Hm)-FF;var Jz=((FG-FH)+Hn)-FI;var Hs=(I$*Jc)-(Jb*Ja);if(!Hs)return null;
this.JT=((Jy*Jc)-(Jz*Ja))/Hs;this.JU=((I$*Jz)-(Jb*Jy))/Hs;this.OG=0;this.MC=1;this.
OA=(FE-FD)+(this.JT*FE);this.OB=(FF-FD)+(this.JU*FF);this.OC=FD;this.OD=(FH-FG)+(
this.JT*FH);this.OE=(FI-FG)+(this.JU*FI);this.OF=FG;this.Rg=false;return this;},
_Init:function(aArg){this.__proto__=E.MX;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};E.Mz={Nl:1,Nm:0,Nn:0,No:0,Np:1,Nq:0,Nr:0,Ns:0,Nt:1,MZ:0,MY:0,L$:false,Pk:function(
Br){if(!this.L$)return false;var Mn=Br[0];var Mo=Br[1];var RU=((Mn*this.Nl)+(Mo*
this.Nm))+this.Nn;var RV=((Mn*this.No)+(Mo*this.Np))+this.Nq;var Mi=((Mn*this.Nr
)+(Mo*this.Ns))+this.Nt;if(!!Mi){this.MY=RU/Mi;this.MZ=RV/Mi;return true;}return false;
},K0:function(FD,FG,FE,FH,Hm,Hn,FF,FI){var I$=FE-Hm;var Jb=FH-Hn;var Ja=FF-Hm;var
Jc=FI-Hn;var Jy=((FD-FE)+Hm)-FF;var Jz=((FG-FH)+Hn)-FI;var Hs=(I$*Jc)-(Jb*Ja);this.
L$=false;if(!Hs)return;var Ik=((Jy*Jc)-(Jz*Ja))/Hs;var Ag=((I$*Jz)-(Jb*Jy))/Hs;var
Kc=(FE-FD)+(Ik*FE);var Kh=(FF-FD)+(Ag*FF);var Aq=FD;var Kr=(FH-FG)+(Ik*FH);var Kt=(
FI-FG)+(Ag*FI);var Gu=FG;this.Nl=Kt-(Gu*Ag);this.Nm=(Aq*Ag)-Kh;this.Nn=(Kh*Gu)-(
Aq*Kt);this.No=(Gu*Ik)-Kr;this.Np=Kc-(Aq*Ik);this.Nq=(Aq*Kr)-(Kc*Gu);this.Nr=(Kr
*Ag)-(Kt*Ik);this.Ns=(Kh*Ik)-(Kc*Ag);this.Nt=(Kc*Kt)-(Kh*Kr);this.L$=true;},_Init:
function(aArg){this.__proto__=E.Mz;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle!=
D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::InverseMatrix"
};E.Sa={Left:0x1,Bq:0x2,Right:0x4,R5:0x8,Si:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.Ak;};E._ReInit=function(){};E.Dc=function(
D){};return E;})();

/* Embedded Wizard */