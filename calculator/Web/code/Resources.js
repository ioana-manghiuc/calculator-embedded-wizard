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
);if(EmWiApp.ach)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.ach=(function(){var B=EmWiApp;var E={};
var A4=[0,0];var Bi="The property \'FrameSize\' is READ ONLY.";
E.Ah={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.wf,Jh:false,EK:false,FB:function(
){if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=A4;this.FrameDelay=0;this.NoOfFrames=1;this.EK=false;},Bt:function(
aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=A4;var frameDelay=
0;{var bmp=B.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.Jh=true;this.EK=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},P3:function(C){throw new Error(
Bi);},Update:function(){},_Init:function(aArg){B.Core.GU._Init.call(this,aArg);this.
__proto__=E.Ah;this.Bt(aArg);},_Done:function(){this.FB();this.__proto__=B.Core.
GU;B.Core.GU._Done.call(this);},_className:"Resources::Bitmap"};E.B8={font:null,
Leading:0,Descent:0,Ascent:0,FB:function(){this.Va();},Bt:function(aArg){this.Vf(
aArg);},Va:function(){if(!this.font)return;var handle=this.font;B.aal(handle);this.
font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},Vf:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aa5(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},PM:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.aav(handle,aFlowString);return advance;
},Td:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;
if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jV;var handle=this.
font;var result=B.jV;result=B.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Kj:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.m9(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.GU._Init.call(this,aArg);this.__proto__=E.B8;this.Bt(aArg);
},_Done:function(){this.FB();this.__proto__=B.Core.GU;B.Core.GU._Done.call(this);
},_className:"Resources::Font"};E.NU={_class:function(){return E.Ah;},0:{FileName:
"./res/ResourcesNavigationIconsMedium.png",Format:B._PIXEL_FORMAT_ALPHA8,NoOfFrames:
20,FrameSize:[36,36],FrameDelay:0,_this:null}};
E._Init=function(){E.Ah.__proto__=B.Core.GU;E.B8.__proto__=B.Core.GU;};E._ReInit=
function(){};E.Ec=function(D){var A;if((A=E.NU[0]._this)&&(A._cycle!=D))A._Done(
E.NU[0]._this=null);};return E;})();

/* Embedded Wizard */