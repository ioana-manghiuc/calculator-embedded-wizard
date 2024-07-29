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
var AN=[0,0];var AO="Can not resize explicitly attached graphics engine bitmaps";
var DB=[0,0,0,0];var El="No graphics engine bitmap attached to this canvas";var D0=
"The canvas is already initialized with a graphics engine bitmap";var Em="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var Fe="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var ET="DrawThickLine() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var HH=[1,1];var HI=[2,2];
E.Canvas={Fn:null,KQ:null,DV:B.wg,Dh:0,JU:false,EB:function(){if(this.JU)this.DetachBitmap(
);},Bt:function(aArg){this.E7=true;},Js:function(C){if((C[0]<=0)||(C[1]<=0))C=AN;
if(B.aaX(C,this.FrameSize))return;if(this.JU)throw new Error(AO);this.FrameSize=
C;this.DS=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AN;this.FrameDelay=0;this.NoOfFrames=1;}this.DV=[].concat(AN,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.Dh;for(this.Dh=this.NoOfFrames-1;this.Dh>=0;this.
Dh--)this.KF(this.DV,this.DV,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.Dh=dstFrameNr;}}if(!(((A=this.DV)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[
0]>0)&&(this.FrameSize[1]>0))(A=this.KQ)?A[1].call(A[0],this):null;this.DV=DB;}}
,DetachBitmap:function(){if(!this.JU)throw new Error(El);this.bitmap=null;this.JU=
false;this.FrameSize=AN;this.FrameDelay=0;this.NoOfFrames=1;this.DS=false;return this;
},AttachBitmap:function(aBitmap){if(!!this.bitmap)throw new Error(D0);if(!aBitmap
)return this;this.bitmap=aBitmap;this.JU=true;var noOfFrames=1;var frameSize=AN;
var frameDelay=0;{noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=
aBitmap.FrameDelay;}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=
frameDelay;this.DS=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},PK:function(
aClip,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;
var dstBitmap=this.bitmap;var dstFrameNo=this.Dh;{B.aad(dstBitmap,dstFrameNo,aClip
,aDstRect,aEdgeWidth,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},PO:function(aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Dh;{B.rA(dstBitmap,dstFrameNo
,aClip,aDstRect,aRadiusTL,aRadiusTR,aRadiusBR,aRadiusBL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend);}},NI:function(aClip,M2,aString,aOffset,aCount,aDstRect,aSrcPos
,aMinWidth,M4,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(aOffset<0)aOffset=0;if((!M2||!M2.font)||((aOffset>0)&&(
aOffset>=aString.length)))return;var orient=0;if(M4===1)orient=90;else if(M4===2
)orient=180;else if(M4===3)orient=270;var dstFrameNo=this.Dh;var dstBitmap=this.
bitmap;var srcFont=M2.font;{B.rz(dstBitmap,srcFont,aString,aOffset,aCount,dstFrameNo
,aClip,aDstRect,aSrcPos,aMinWidth,orient,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},PF:function(aClip,aBitmap,aFrameNr,aDstRect,IM,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend){var A;if(!this.bitmap)this.Update();if(!this.bitmap)return;if((((!aBitmap||
!aBitmap.bitmap)||!IM)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var
dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.Dh;var srcRect=[
].concat(AN,aBitmap.FrameSize);var left=((IM&0x1)===0x1);var top=((IM&0x2)===0x2
);var right=((IM&0x4)===0x4);var bottom=((IM&0x8)===0x8);var interior=((IM&0x10)===
0x10);{B.aab(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left
,top,right,bottom,interior,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Q$:function(
aClip,aBitmap,aFrameNr,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3
,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(
!this.bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap
)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames))return;var x1=aDstX1;var x2=aDstX2;
var y1=aDstY1;var y2=aDstY2;if(aDstX2<x1)x1=aDstX2;if(aDstX3<x1)x1=aDstX3;if(aDstX4<
x1)x1=aDstX4;if(aDstX2>x2)x2=aDstX2;if(aDstX3>x2)x2=aDstX3;if(aDstX4>x2)x2=aDstX4;
if(aDstY2<y1)y1=aDstY2;if(aDstY3<y1)y1=aDstY3;if(aDstY4<y1)y1=aDstY4;if(aDstY2>y2
)y2=aDstY2;if(aDstY3>y2)y2=aDstY3;if(aDstY4>y2)y2=aDstY4;if(((((x2-x1)>4096)||((
x2-x1)<-4096))||((y2-y1)>4096))||((y2-y1)<-4096)){B.ab5("%s",Em);return;}var dstBitmap=
this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=this.Dh;{B.ab6(dstBitmap
,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3
,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect,aColor1,aColor2,aColor3,aColor4,aBlend
,aFilter);}},Q4:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.bitmap
)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.NoOfFrames
))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2];var bottom=
aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-top)>4096)
)||((bottom-top)<-4096)){B.ab5("%s",Fe);return;}var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Dh;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,aFrameNr
,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend,aFilter);}},NF:function(aClip,aBitmap,aFrameNr,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=
aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNr=this.Dh;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect
,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},PG:function(aClip,aDstRect
,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Dh;{B.m6(
dstBitmap,dstFrameNo,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL
,aBlend);}},KF:function(aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
){if(!this.bitmap)this.Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;
var dstFrameNo=this.Dh;{B.fR(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR
,aColorBR,aColorBL,aBlend);}},PL:function(aClip,aDstPos1,aDstPos2,SH,SI,aColor1,
aColor2,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;var Fs=SH;var
Ft=SI;var E1=aDstPos1;var E2=aDstPos2;if(B.aaX(E1,E2))return;if(Fs<=1)Fs=1;if(Ft<=
1)Ft=1;var Gg=Fs/2;var Gh=Ft/2;var HZ=E1[0];var H0=E1[1];var H1=E2[0];var H2=E2[
1];var C3=H1-HZ;var C4=H2-H0;var BY=Math.sqrt((C3*C3)+(C4*C4));if(((Fs>4096)||(Ft>
4096))||(BY>4096)){B.ab5("%s",ET);return;}C3=C3/BY;C4=C4/BY;var x1=HZ+(C4*Gg);var
y1=H0-(C3*Gg);var x2=H1+(C4*Gh);var y2=H2-(C3*Gh);var x3=H1-(C4*Gh);var y3=H2+(C3
*Gh);var x4=HZ-(C4*Gg);var y4=H0+(C3*Gg);var Ph=B.aaL(B.ach.JM);var srcRect=[].concat(
HH,B.abe(Ph.FrameSize,HI));var dstBitmap=this.bitmap;var dstFrameNo=this.Dh;var srcBitmap=
Ph.bitmap;{B.ab6(dstBitmap,srcBitmap,dstFrameNo,0,aClip,x1,y1,1.0,x2,y2,1.0,x3,y3
,1.0,x4,y4,1.0,srcRect,aColor1,aColor2,aColor2,aColor1,aBlend,false);}},PJ:function(
aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend){if(!this.bitmap)this.Update();if(
!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Dh;{B.aac(dstBitmap
,dstFrameNo,aClip,aDstPos1,aDstPos2,aColor1,aColor2,aBlend);}},_Init:function(aArg
){B.ach.Aa._Init.call(this,aArg);this.__proto__=E.Canvas;this.Bt(aArg);},_Done:function(
){this.EB();this.__proto__=B.ach.Aa;B.ach.Aa._Done.call(this);},_Mark:function(D
){var A;B.ach.Aa._Mark.call(this,D);if((A=this.Fn)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.KQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"
};E.Od={P2:1,P3:0,P4:0,P5:0,P6:1,P7:0,KL:0,KM:0,P8:1,NQ:0,JN:0,SX:true,KA:function(
aX,SJ){var TD=((aX*this.KL)+(SJ*this.KM))+this.NQ;this.JN=TD;return true;},L5:function(
FY,F_,FZ,F$,HP,HQ,F0,Ga){var JY=FZ-HP;var J0=F$-HQ;var JZ=F0-HP;var J1=Ga-HQ;var
Kr=((FY-FZ)+HP)-F0;var Ks=((F_-F$)+HQ)-Ga;var HV=(JY*J1)-(J0*JZ);if(!HV)return null;
this.KL=((Kr*J1)-(Ks*JZ))/HV;this.KM=((JY*Ks)-(J0*Kr))/HV;this.P8=0;this.NQ=1;this.
P2=(FZ-FY)+(this.KL*FZ);this.P3=(F0-FY)+(this.KM*F0);this.P4=FY;this.P5=(F$-F_)+(
this.KL*F$);this.P6=(Ga-F_)+(this.KM*Ga);this.P7=F_;this.SX=false;return this;},
_Init:function(aArg){this.__proto__=E.Od;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::WarpMatrix"
};E.NN={OI:1,OJ:0,OK:0,OL:0,OM:1,ON:0,OO:0,OP:0,OQ:1,Of:0,Oe:0,Nl:false,Q0:function(
BG){if(!this.Nl)return false;var NA=BG[0];var NB=BG[1];var TB=((NA*this.OI)+(NB*
this.OJ))+this.OK;var TC=((NA*this.OL)+(NB*this.OM))+this.ON;var Nv=((NA*this.OO
)+(NB*this.OP))+this.OQ;if(!!Nv){this.Oe=TB/Nv;this.Of=TC/Nv;return true;}return false;
},L5:function(FY,F_,FZ,F$,HP,HQ,F0,Ga){var JY=FZ-HP;var J0=F$-HQ;var JZ=F0-HP;var
J1=Ga-HQ;var Kr=((FY-FZ)+HP)-F0;var Ks=((F_-F$)+HQ)-Ga;var HV=(JY*J1)-(J0*JZ);this.
Nl=false;if(!HV)return;var IV=((Kr*J1)-(Ks*JZ))/HV;var Ai=((JY*Ks)-(J0*Kr))/HV;var
La=(FZ-FY)+(IV*FZ);var Lg=(F0-FY)+(Ai*F0);var As=FY;var Ce=(F$-F_)+(IV*F$);var Lr=(
Ga-F_)+(Ai*Ga);var G6=F_;this.OI=Lr-(G6*Ai);this.OJ=(As*Ai)-Lg;this.OK=(Lg*G6)-(
As*Lr);this.OL=(G6*IV)-Ce;this.OM=La-(As*IV);this.ON=(As*Ce)-(La*G6);this.OO=(Ce
*Ai)-(Lr*IV);this.OP=(Lg*IV)-(La*Ai);this.OQ=(La*Lr)-(Lg*Ce);this.Nl=true;},_Init:
function(aArg){this.__proto__=E.NN;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle!=
D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Graphics::InverseMatrix"
};E.Jb={Left:0x1,BF:0x2,Right:0x4,TM:0x8,T1:0x10};
E._Init=function(){E.Canvas.__proto__=B.ach.Aa;};E._ReInit=function(){};E.DC=function(
D){};return E;})();

/* Embedded Wizard */