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
);if(EmWiApp.acf)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
acf=(function(){var B=EmWiApp;var E={};
var AN=[1,1];var AO=[0,0];var DB=[0,0,0,0];var El="\uFEFF";var D0="The Slide Touch Handler:";
var Em="is already connected with a view.";var Fe="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var ET="Can not display the warp aspect of the superior group. Endless recursive "+
"dependency.";
E.Ms={De:null,IK:1,IJ:1,Bx:0xFFFFFFFF,Dg:function(AP,aClip,aOffset,Ar,aBlend){var
A;var Fs=this.IJ;var Ft=this.IK;var E1=B.abf(this.AZ,aOffset);var E2=B.abf(this.
A0,aOffset);var G1;var G2;var As=this.Bx;if(B.aaX(E1,E2))return;aBlend=aBlend&&((
this.F&0x2)===0x2);Ar=Ar+1;G1=G2=As;if(Ar<256){G1=(G1&0x00FFFFFF)|((((Ar*((G1>>24
)&0xFF))>>8)&0xFF)<<24);G2=(G2&0x00FFFFFF)|((((Ar*((G2>>24)&0xFF))>>8)&0xFF)<<24
);}if((Fs===1)&&(Ft===1))AP.PJ(aClip,E1,E2,G1,G2,aBlend);else AP.PL(aClip,E1,E2,
Fs,Ft,G1,G2,aBlend);},GetExtent:function(){var Fs=this.IJ;var Ft=this.IK;var E1=
this.AZ;var E2=this.A0;if(((Fs===1)&&(Ft===1))||B.aaX(E1,E2))return B.Core.Is.GetExtent.
call(this);var Gg=Fs/2;var Gh=Ft/2;var HZ=E1[0];var H0=E1[1];var H1=E2[0];var H2=
E2[1];var C3=H1-HZ;var C4=H2-H0;var BY=Math.sqrt((C3*C3)+(C4*C4));C3=C3/BY;C4=C4
/BY;var Ox=HZ+(C4*Gg);var Oy=H0-(C3*Gg);var Lh=H1+(C4*Gh);var Li=H2-(C3*Gh);var Lj=
H1-(C4*Gh);var Lk=H2+(C3*Gh);var Ll=HZ-(C4*Gg);var Lm=H0+(C3*Gg);var left=Ox;var
right=Ox;var top=Oy;var bottom=Oy;if(Lh<left)left=Lh;if(Lj<left)left=Lj;if(Ll<left
)left=Ll;if(Lh>right)right=Lh;if(Lj>right)right=Lj;if(Ll>right)right=Ll;if(Li<top
)top=Li;if(Lk<top)top=Lk;if(Lm<top)top=Lm;if(Li>bottom)bottom=Li;if(Lk>bottom)bottom=
Lk;if(Lm>bottom)bottom=Lm;var H=[left|0,top|0,right|0,bottom|0];H=[].concat(H.slice(
0,2),B.abf(H.slice(2,4),AN));return H;},DP:function(Ae){var A;if(!!this.G&&((this.
F&0x1)===0x1))this.G.V(this.GetClipping());},QT:function(C){var A;if(C<1)C=1;if(
C===this.IK)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping()
);this.IK=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if(((
C!==1)||(this.IJ!==1))&&!this.De){this.De=B.aaL(B.ach.JM);if(this.De.E7)B.zV([this
,this.DP],this.De,0);}if(((C===1)&&(this.IJ===1))&&!!this.De){if(this.De.E7)B.z9([
this,this.DP],this.De,0);this.De=null;}},QS:function(C){var A;if(C<1)C=1;if(C===
this.IJ)return;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());this.
IJ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if(((C!==1)||(
this.IK!==1))&&!this.De){this.De=B.aaL(B.ach.JM);if(this.De.E7)B.zV([this,this.DP
],this.De,0);}if(((C===1)&&(this.IK===1))&&!!this.De){if(this.De.E7)B.z9([this,this.
DP],this.De,0);this.De=null;}},AV:function(C){var A;if(C===this.Bx)return;this.Bx=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());},P_:function(){
var A;return((this.F&0x1)===0x1);},AI:function(C){if(C)this.A3(0x1,0x0);else this.
A3(0x0,0x1);},_Init:function(aArg){B.Core.Is._Init.call(this,aArg);this.__proto__=
E.Ms;},_Mark:function(D){var A;B.Core.Is._Mark.call(this,D);if((A=this.De)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Line"};E.CS={MN:0,MM:0,LY:0xFFFFFFFF
,LZ:0xFFFFFFFF,L1:0xFFFFFFFF,L0:0xFFFFFFFF,DY:0,Bx:0xFFFFFFFF,Dg:function(AP,aClip
,aOffset,Ar,aBlend){var A;var Ax=this.L0;var AE=this.L1;var AA=this.LY;var AD=this.
LZ;var As=this.Bx;var Fq=this.DY+this.MM;var Kp=this.DY+this.MN;var Kn=this.DY;var
Km=this.DY;aBlend=aBlend&&((this.F&0x2)===0x2);Ar=Ar+1;if((((Ax===AE)&&(AA===AD)
)&&(Ax===AA))&&(Ax===0xFFFFFFFF))Ax=AE=AA=AD=As;else if(As!==0xFFFFFFFF){Ax=(Ax&
0x00FFFFFF)|((((((Ax>>24)&0xFF)*(((As>>24)&0xFF)+1))>>8)&0xFF)<<24);Ax=(Ax&0xFFFFFF00
)|((((Ax&0xFF)*((As&0xFF)+1))>>8)&0xFF);Ax=(Ax&0xFFFF00FF)|((((((Ax>>8)&0xFF)*(((
As>>8)&0xFF)+1))>>8)&0xFF)<<8);Ax=(Ax&0xFF00FFFF)|((((((Ax>>16)&0xFF)*(((As>>16)&
0xFF)+1))>>8)&0xFF)<<16);AE=(AE&0x00FFFFFF)|((((((AE>>24)&0xFF)*(((As>>24)&0xFF)+
1))>>8)&0xFF)<<24);AE=(AE&0xFFFFFF00)|((((AE&0xFF)*((As&0xFF)+1))>>8)&0xFF);AE=(
AE&0xFFFF00FF)|((((((AE>>8)&0xFF)*(((As>>8)&0xFF)+1))>>8)&0xFF)<<8);AE=(AE&0xFF00FFFF
)|((((((AE>>16)&0xFF)*(((As>>16)&0xFF)+1))>>8)&0xFF)<<16);AA=(AA&0x00FFFFFF)|((((((
AA>>24)&0xFF)*(((As>>24)&0xFF)+1))>>8)&0xFF)<<24);AA=(AA&0xFFFFFF00)|((((AA&0xFF
)*((As&0xFF)+1))>>8)&0xFF);AA=(AA&0xFFFF00FF)|((((((AA>>8)&0xFF)*(((As>>8)&0xFF)+
1))>>8)&0xFF)<<8);AA=(AA&0xFF00FFFF)|((((((AA>>16)&0xFF)*(((As>>16)&0xFF)+1))>>8
)&0xFF)<<16);AD=(AD&0x00FFFFFF)|((((((AD>>24)&0xFF)*(((As>>24)&0xFF)+1))>>8)&0xFF
)<<24);AD=(AD&0xFFFFFF00)|((((AD&0xFF)*((As&0xFF)+1))>>8)&0xFF);AD=(AD&0xFFFF00FF
)|((((((AD>>8)&0xFF)*(((As>>8)&0xFF)+1))>>8)&0xFF)<<8);AD=(AD&0xFF00FFFF)|((((((
AD>>16)&0xFF)*(((As>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Ar<256){Ax=(Ax&0x00FFFFFF)|((((
Ar*((Ax>>24)&0xFF))>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((Ar*((AE>>24)&0xFF))>>8
)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((Ar*((AA>>24)&0xFF))>>8)&0xFF)<<24);AD=(AD&0x00FFFFFF
)|((((Ar*((AD>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Fq||!!Kp)||!!Kn)||!!Km)AP.PO(aClip
,B.abh(this.M,aOffset),Fq,Kp,Kn,Km,Ax,AE,AD,AA,aBlend);else AP.KF(aClip,B.abh(this.
M,aOffset),Ax,AE,AD,AA,aBlend);},Qv:function(C){var A;if(C<0)C=0;if(C===this.MN)
return;this.MN=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},Qu:function(
C){var A;if(C<0)C=0;if(C===this.MM)return;this.MM=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.V(this.M);},ME:function(C){var A;if(C===this.LY)return;this.LY=C;if(
!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},MF:function(C){var A;if(C===this.
LZ)return;this.LZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},Qa:function(
C){var A;if(C===this.L1)return;this.L1=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.V(this.M);},P$:function(C){var A;if(C===this.L0)return;this.L0=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.V(this.M);},E$:function(C){var A;if(C<0)C=0;if(C===this.
DY)return;this.DY=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},AV:function(
C){var A;if(C===this.Bx)return;this.Bx=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.V(this.M);},_Init:function(aArg){B.Core.Bh._Init.call(this,aArg);this.__proto__=
E.CS;},_className:"Views::Rectangle"};E.Bq={DY:0,Width:1,Bx:0xFFFFFFFF,Dg:function(
AP,aClip,aOffset,Ar,aBlend){var A;var Ax;var AE;var AA;var AD;var As=this.Bx;var
Fq=this.DY;var Kp=this.DY;var Kn=this.DY;var Km=this.DY;aBlend=aBlend&&((this.F&
0x2)===0x2);Ar=Ar+1;Ax=AE=AA=AD=As;if(Ar<256){Ax=(Ax&0x00FFFFFF)|((((Ar*((Ax>>24
)&0xFF))>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((Ar*((AE>>24)&0xFF))>>8)&0xFF)<<24
);AA=(AA&0x00FFFFFF)|((((Ar*((AA>>24)&0xFF))>>8)&0xFF)<<24);AD=(AD&0x00FFFFFF)|((((
Ar*((AD>>24)&0xFF))>>8)&0xFF)<<24);}if(((!!Fq||!!Kp)||!!Kn)||!!Km)AP.PK(aClip,B.
abh(this.M,aOffset),this.Width,Fq,Kp,Kn,Km,Ax,AE,AD,AA,aBlend);else AP.PG(aClip,
B.abh(this.M,aOffset),this.Width,Ax,AE,AD,AA,aBlend);},E$:function(C){var A;if(C<
0)C=0;if(C===this.DY)return;this.DY=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(
this.M);},Jx:function(C){var A;if(C<0)C=0;if(C===this.Width)return;this.Width=C;
if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},AV:function(C){var A;if(C===
this.Bx)return;this.Bx=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},_Init:
function(aArg){B.Core.Bh._Init.call(this,aArg);this.__proto__=E.Bq;},_className:
"Views::Border"};E.Jg={timer:null,Aa:null,Cl:-1,Bx:0xFFFFFFFF,Jb:0x1F,FC:0,A9:0,
Hv:B.wf,DS:false,Dg:function(AP,aClip,aOffset,Ar,aBlend){var A;var CB=this.FC;if(
this.Cl>=0)CB=this.Cl;if(!this.Aa||(CB>=this.Aa.NoOfFrames))return;this.Aa.Update(
);var Ax;var AE;var AD;var AA;var As=this.Bx;var C8=(((Ar+1)*255)>>8)+1;var CM=this.
Jb;var H=B.abh(this.M,aOffset);var LN=B.abe([H[2]-H[0],H[3]-H[1]],this.Hv);aBlend=
aBlend&&((this.F&0x2)===0x2);Ax=AE=AA=AD=As;if(C8<256){Ax=(Ax&0x00FFFFFF)|((((((
Ax>>24)&0xFF)*C8)>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((((AE>>24)&0xFF)*C8)>>8)&
0xFF)<<24);AD=(AD&0x00FFFFFF)|((((((AD>>24)&0xFF)*C8)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF
)|((((((AA>>24)&0xFF)*C8)>>8)&0xFF)<<24);}if(((this.Hv[0]>0)&&(LN[0]>0))&&!((CM&
0x5)===0x5)){var Ce=((this.Aa.FrameSize[0]/3)|0)-LN[0];if(((CM&0x1)===0x1)){if(aClip[
2]>H[2])aClip=B.abN(aClip,H[2]);if(Ce>0)H=B.abN(H,H[2]+Ce);CM=CM|0x4;}else if(((
CM&0x4)===0x4)){if(aClip[0]<H[0])aClip=[].concat(H[0],aClip.slice(1,4));if(Ce>0)
H=[].concat(H[0]-Ce,H.slice(1,4));CM=CM|0x1;}else{if(aClip[0]<H[0])aClip=[].concat(
H[0],aClip.slice(1,4));if(aClip[2]>H[2])aClip=B.abN(aClip,H[2]);if(Ce>0){H=[].concat(
H[0]-((Ce/2)|0),H.slice(1,4));H=B.abN(H,(H[2]+Ce)-((Ce/2)|0));}CM=CM|0x5;}}if(((
this.Hv[1]>0)&&(LN[1]>0))&&!((CM&0xA)===0xA)){var Ce=((this.Aa.FrameSize[1]/3)|0
)-LN[1];if(((CM&0x2)===0x2)){if(aClip[3]>H[3])aClip=[].concat(aClip.slice(0,3),H[
3]);if(Ce>0)H=[].concat(H.slice(0,3),H[3]+Ce);CM=CM|0x8;}else if(((CM&0x8)===0x8
)){if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(Ce>0)H=B.abP(H,H[1]-Ce);CM=CM|0x2;
}else{if(aClip[1]<H[1])aClip=B.abP(aClip,H[1]);if(aClip[3]>H[3])aClip=[].concat(
aClip.slice(0,3),H[3]);if(Ce>0){H=B.abP(H,H[1]-((Ce/2)|0));H=[].concat(H.slice(0
,3),(H[3]+Ce)-((Ce/2)|0));}CM=CM|0xA;}}AP.PF(aClip,this.Aa,CB,H,CM,Ax,AE,AD,AA,aBlend
);},DP:function(Ae){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},CP:
function(Ae){var A;var CB=this.Cl;var Ea=0;if(!!this.Aa)Ea=this.Aa.NoOfFrames*this.
Aa.FrameDelay;if((!!this.timer&&(this.Cl<0))&&(Ea>0))this.A9=this.timer.Ap-(this.
FC*this.Aa.FrameDelay);if(!!this.timer&&(Ea>0)){var Y=(this.timer.Ap-this.A9)|0;
CB=(Y/this.Aa.FrameDelay)|0;if(Y>=Ea){CB=CB%this.Aa.NoOfFrames;this.A9=this.timer.
Ap-(Y%Ea);}}if(((CB!==this.Cl)&&!!this.G)&&((this.F&0x1)===0x1))this.G.V(this.M);
this.Cl=CB;if(!Ea&&!!this.timer){B.z9([this,this.CP],this.timer,0);this.timer=null;
}},AV:function(C){var A;if(C===this.Bx)return;this.Bx=C;if(!!this.G&&((this.F&0x1
)===0x1))this.G.V(this.M);},E8:function(C){var A;if(this.DS===C)return;this.DS=C;
this.Cl=-1;if(!C&&!!this.timer){B.z9([this,this.CP],this.timer,0);this.timer=null;
}if(C){this.timer=B._GetAutoObject(B.acj.Fx);B.zV([this,this.CP],this.timer,0);B.
pe([this,this.CP],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},NS:
function(C){var A;if(C===this.Jb)return;this.Jb=C;if(!!this.G&&((this.F&0x1)===0x1
))this.G.V(this.M);},Hx:function(C){var A;if(C<0)C=0;if((C===this.FC)&&(this.Cl===-
1))return;this.FC=C;if(!this.timer)this.Cl=-1;if(!!this.G&&((this.F&0x1)===0x1))
this.G.V(this.M);},Bd:function(C){var A;if(C===this.Aa)return;if(!!this.Aa&&this.
Aa.E7)B.z9([this,this.DP],this.Aa,0);this.Aa=C;this.Cl=-1;if(!!C&&C.E7)B.zV([this
,this.DP],C,0);if(this.DS){this.E8(false);this.E8(true);}if(!!this.G&&((this.F&0x1
)===0x1))this.G.V(this.M);},AI:function(C){if(C)this.A3(0x1,0x0);else this.A3(0x0
,0x1);},NX:function(C){var A;if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];if(B.aaX(
C,this.Hv))return;this.Hv=C;if((!!this.G&&((this.F&0x1)===0x1))&&!((this.Jb&0xF)===
0xF))this.G.V(this.M);},_Init:function(aArg){B.Core.Bh._Init.call(this,aArg);this.
__proto__=E.Jg;},_Mark:function(D){var A;B.Core.Bh._Mark.call(this,D);if((A=this.
timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Views::Frame"};E.Bs={timer:null,Aa:null,A9:0,Cl:0,Bx:0xFFFFFFFF
,Ex:0x12,FC:0,DS:false,Dg:function(AP,aClip,aOffset,Ar,aBlend){var A;var CB=this.
FC;if(this.Cl>=0)CB=this.Cl;if(!this.Aa||(CB>=this.Aa.NoOfFrames))return;this.Aa.
Update();var L=this.Hs();var Cs=this.Aa.FrameSize;if((L[0]>=L[2])||(L[1]>=L[3]))
return;var Ax;var AE;var AD;var AA;var As=this.Bx;var C8=(((Ar+1)*255)>>8)+1;aBlend=
aBlend&&((this.F&0x2)===0x2);Ax=AE=AA=AD=As;if(C8<256){Ax=(Ax&0x00FFFFFF)|((((((
Ax>>24)&0xFF)*C8)>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((((AE>>24)&0xFF)*C8)>>8)&
0xFF)<<24);AD=(AD&0x00FFFFFF)|((((((AD>>24)&0xFF)*C8)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF
)|((((((AA>>24)&0xFF)*C8)>>8)&0xFF)<<24);}if(B.aaX([L[2]-L[0],L[3]-L[1]],Cs))AP.
NF(aClip,this.Aa,CB,B.abh(this.M,aOffset),B.abe(this.M.slice(0,2),L.slice(0,2)),
Ax,AE,AD,AA,aBlend);else AP.Q4(aClip,this.Aa,CB,B.abh(L,aOffset),[].concat(AO,Cs
),Ax,AE,AD,AA,aBlend,true);},DP:function(Ae){var A;if(!!this.G&&((this.F&0x1)===
0x1))this.G.V(this.M);},CP:function(Ae){var A;var CB=this.Cl;var Ea=0;if(!!this.
Aa)Ea=this.Aa.NoOfFrames*this.Aa.FrameDelay;if((!!this.timer&&(this.Cl<0))&&(Ea>
0))this.A9=this.timer.Ap-(this.FC*this.Aa.FrameDelay);if(!!this.timer&&(Ea>0)){var
Y=(this.timer.Ap-this.A9)|0;CB=(Y/this.Aa.FrameDelay)|0;if(Y>=Ea){CB=CB%this.Aa.
NoOfFrames;this.A9=this.timer.Ap-(Y%Ea);}}if(((CB!==this.Cl)&&!!this.G)&&((this.
F&0x1)===0x1))this.G.V(this.M);this.Cl=CB;if(!Ea&&!!this.timer){B.z9([this,this.
CP],this.timer,0);this.timer=null;}},AV:function(C){var A;if(C===this.Bx)return;
this.Bx=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},E8:function(C){var
A;if(this.DS===C)return;this.DS=C;this.Cl=-1;if(!C&&!!this.timer){B.z9([this,this.
CP],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.acj.Fx);B.
zV([this,this.CP],this.timer,0);B.pe([this,this.CP],this);}if(!!this.G&&((this.F&
0x1)===0x1))this.G.V(this.M);},GR:function(C){var A;if(C===this.Ex)return;this.Ex=
C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},Hx:function(C){var A;if(C<
0)C=0;if((C===this.FC)&&(this.Cl===-1))return;this.FC=C;if(!this.timer)this.Cl=-
1;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},Bd:function(C){var A;if(C===
this.Aa)return;if(!!this.Aa&&this.Aa.E7)B.z9([this,this.DP],this.Aa,0);this.Aa=C;
this.Cl=-1;if(!!C&&C.E7)B.zV([this,this.DP],C,0);if(this.DS){this.E8(false);this.
E8(true);}if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},AI:function(C){if(
C)this.A3(0x1,0x0);else this.A3(0x0,0x1);},Hs:function(){var A;if(!this.Aa)return DB;
var Z=this.Ex;var Cs=this.Aa.FrameSize;var Ah=this.M;var width=Ah[2]-Ah[0];var height=
Ah[3]-Ah[1];if(!Cs[0]||!Cs[1])return DB;var Ay=[0,0,width,height];var Ac=Ay;if(((
Z&0x40)===0x40)){var Nw=((((Ay[2]-Ay[0])<<16)+((Cs[0]/2)|0))/Cs[0])|0;var Kq=((((
Ay[3]-Ay[1])<<16)+((Cs[1]/2)|0))/Cs[1])|0;var GK=Nw;if(Kq>GK)GK=Kq;Ac=B.abL(Ac,((
Cs[0]*GK)+32768)>>16);Ac=B.abI(Ac,((Cs[1]*GK)+32768)>>16);}else if(((Z&0x80)===0x80
)){var Nw=((((Ay[2]-Ay[0])<<16)+((Cs[0]/2)|0))/Cs[0])|0;var Kq=((((Ay[3]-Ay[1])<<
16)+((Cs[1]/2)|0))/Cs[1])|0;var GK=Nw;if(Kq<GK)GK=Kq;Ac=B.abL(Ac,((Cs[0]*GK)+32768
)>>16);Ac=B.abI(Ac,((Cs[1]*GK)+32768)>>16);}else if(!((Z&0x100)===0x100))Ac=B.abK(
Ac,Cs);if((Ac[2]-Ac[0])!==(Ay[2]-Ay[0])){if(((Z&0x4)===0x4))Ac=B.abM(Ac,Ay[2]-(Ac[
2]-Ac[0]));else if(((Z&0x2)===0x2))Ac=B.abM(Ac,(Ay[0]+(((Ay[2]-Ay[0])/2)|0))-(((
Ac[2]-Ac[0])/2)|0));}if((Ac[3]-Ac[1])!==(Ay[3]-Ay[1])){if(((Z&0x20)===0x20))Ac=B.
abO(Ac,Ay[3]-(Ac[3]-Ac[1]));else if(((Z&0x10)===0x10))Ac=B.abO(Ac,(Ay[1]+(((Ay[3
]-Ay[1])/2)|0))-(((Ac[3]-Ac[1])/2)|0));}Ac=B.abh(Ac,Ah.slice(0,2));return Ac;},_Init:
function(aArg){B.Core.Bh._Init.call(this,aArg);this.__proto__=E.Bs;},_Mark:function(
D){var A;B.Core.Bh._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"
};E.Text={Fb:null,At:null,EP:null,Am:B.jV,String:B.jV,CK:null,Ho:B.wf,FR:B.wf,Ex:
0x12,Bx:0xFFFFFFFF,Dy:255,HG:false,Fz:false,L7:false,B9:false,EB:function(){if(!
!this.CK){this.Ne(this.CK);this.CK=null;}},Dg:function(AP,aClip,aOffset,Ar,aBlend
){var A;if((this.Am===B.jV)||!this.At)return;var Z=this.Ex;var font=this.At;var Ay=
B.abh(this.M,aOffset);var Ax;var AE;var AD;var AA;var col=this.Bx;var C8=(((Ar+1
)*this.Dy)>>8)+1;var Cf=this.Am.charCodeAt(0)||0;var L=B.abh(this.Hs(),aOffset);
var Fp=[Ay[0]-L[0],(Ay[1]-L[1])-font.Ascent];if(Cf<1)return;Ax=AE=AA=AD=col;if(C8<
256){Ax=(Ax&0x00FFFFFF)|((((((Ax>>24)&0xFF)*C8)>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF
)|((((((AE>>24)&0xFF)*C8)>>8)&0xFF)<<24);AD=(AD&0x00FFFFFF)|((((((AD>>24)&0xFF)*
C8)>>8)&0xFF)<<24);AA=(AA&0x00FFFFFF)|((((((AA>>24)&0xFF)*C8)>>8)&0xFF)<<24);}if(((
Z&0x80)===0x80)){if(this.Ji())Z=(Z&~0x80)|0x4;else Z=(Z&~0x80)|0x1;}if((Cf===1)&&
!((Z&0x40)===0x40)){AP.NI(aClip,font,this.Am,2,(this.Am.charCodeAt(1)||0)-1,Ay,Fp
,0,0,Ax,AE,AD,AA,true);return;}var leading=font.Leading;var GI=(font.Ascent+font.
Descent)+leading;var SQ=aClip[1]-L[1];var SR=aClip[3]-L[1];var M6=L[2]-L[0];var E3=
0;var I=1;var As=this.Am.charCodeAt(1)||0;while(((E3+GI)<SQ)&&(As>0)){I=I+As;E3=
E3+GI;As=this.Am.charCodeAt(I)||0;}while((E3<SR)&&(As>0)){var H6=B.abe(Fp,[0,E3]
);var Hj=0;var CT=false;if(((((Z&0x40)===0x40)&&((this.Am.charCodeAt((I+As)-1)||
0)!==0x0A))&&((this.Am.charCodeAt(I+1)||0)!==0x0A))&&((this.Am.charCodeAt(I+As)||
0)!==0x00))CT=true;if(CT&&!!(Z&0x6)){var LJ=I+As;var Ov=this.Am.indexOf(String.fromCharCode(
0x20),I+1);var Ow=this.Am.indexOf(String.fromCharCode(0xA0),I+1);if(((Ov<0)||(Ov>=
LJ))&&((Ow<0)||(Ow>=LJ)))CT=false;}if(CT)Hj=M6;else if(((Z&0x4)===0x4))H6=[(H6[0
]-M6)+font.FE(this.Am,I+1,As-1),H6[1]];else if(((Z&0x2)===0x2))H6=[(H6[0]-((M6/2
)|0))+((font.FE(this.Am,I+1,As-1)/2)|0),H6[1]];AP.NI(aClip,font,this.Am,I+1,As-1
,Ay,H6,Hj,0,Ax,AE,AD,AA,true);I=I+As;E3=E3+GI;As=this.Am.charCodeAt(I)||0;}},O:function(
C){var A;if(B.aaY(C,this.M))return;var Pm;Pm=((A=this.M)[2]-A[0])!==(C[2]-C[0]);
if(((Pm&&this.HG)&&this.B9)&&!((this.F&0x2000)===0x2000)){this.Am=B.jV;this.B9=false;
B.pe([this,this.Hf],this);}if(((this.Fz&&this.B9)&&!B.aaX([(A=this.M)[2]-A[0],A[
3]-A[1]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.Am=B.jV;this.
B9=false;B.pe([this,this.Hf],this);}B.Core.Bh.O.call(this,C);B.pe([this,this.LE]
,this);},SL:function(aBidi,aRowStart,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=
B.z1(aBidi,aRowStart,aRowEnd,aIndex);return aIndex;},SK:function(aBidi,aRowStart
,aRowEnd,aIndex){if(!aBidi)return aIndex;aIndex=B.z0(aBidi,aRowStart,aRowEnd,aIndex
);return aIndex;},Ne:function(aBidi){if(!aBidi)return;B.rB(aBidi);},SS:function(
aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},LE:function(Ae){B.pe(this.EP
,this);},Hf:function(Ae){B.pe([this,this.GH],this);},Tc:function(Ae){this.Jv(this.
Fb.Aw);},Td:function(Ae){var A;var L=this.Hs();var LD=this.M.slice(0,2);if(L[0]>
LD[0])L=[].concat(LD[0],L.slice(1,4));if(L[1]>LD[1])L=B.abP(L,LD[1]);var A$=B.abe(
L.slice(0,2),this.M.slice(0,2));var H4=B.abe([(A=this.M)[2]-A[0],A[3]-A[1]],[L[2
]-L[0],L[3]-L[1]]);if(H4[0]>0)H4=[0,H4[1]];if(H4[1]>0)H4=[H4[0],0];this.Fb.Aw=this.
FR;this.Fb.BR=B.abe(B.abf(this.FR,H4),A$);this.Fb.BQ=B.abe(this.FR,A$);},GH:function(
Ae){var A;if(this.B9)return;var width=(A=this.M)[2]-A[0];var height=(A=this.M)[3
]-A[1];var Fo=-1;var font=this.At;if((!!font&&!!!font.Ascent)&&!!!font.Descent)font=
null;if(this.HG){Fo=width;if(Fo<0)Fo=1;}if(!!this.CK){this.Ne(this.CK);this.CK=null;
}this.B9=true;if((this.String!==B.jV)&&!!font){var length=this.String.length;if(
this.L7)this.CK=this.SS(length);this.Am=font.QW(this.String,0,Fo,length,this.CK);
if(!!this.CK&&!this.PW()){this.Ne(this.CK);this.CK=null;}}else this.Am=B.jV;this.
Ho=AO;if((this.Fz&&(this.Am!==B.jV))&&!!font){var Z=this.Ex;var leading=font.Leading;
var AC=this.Am;var Fq=this.Ji();if(((Z&0x80)===0x80)){if(Fq)Z=(Z&~0x80)|0x4;else
Z=(Z&~0x80)|0x1;}var LI=(font.Ascent+font.Descent)+leading;var Cf=AC.charCodeAt(
0)||0;var Ha=((height+leading)/LI)|0;var M_=false;var Lo=false;if(Ha<=0)Ha=1;if(
Cf>Ha){var A2=0;var Ko=0;var LK=Cf-1;var B4;var CC=AC.length;var tmp=B.jV;if(!!(
Z&0x110)&&!!(Z&0x28))Z&=~0x110;if(!!(Z&0x110))Z&=~0x28;if(((Z&0x20)===0x20))Ko=Cf-
Ha;else if(((Z&0x10)===0x10)||((Z&0x100)===0x100)){Ko=((Cf-Ha)/2)|0;LK=(Ko+Ha)-1;
}else LK=Ha-1;M_=Ko>0;Lo=LK<(Cf-1);for(B4=1;A2<Ko;A2=A2+1)B4=B4+(AC.charCodeAt(B4
)||0);if(Lo)for(CC=B4;A2<LK;A2=A2+1)CC=CC+(AC.charCodeAt(CC)||0);if(M_){var BY=AC.
charCodeAt(B4)||0;tmp=(El+B.abW(AC,B4,BY))+El;tmp=B.abQ(tmp,0,(BY+2)&0xFFFF);B4=
B4+BY;if((tmp.charCodeAt(BY)||0)===0x0A){tmp=B.abQ(tmp,BY,0xFEFF);tmp=B.abQ(tmp,
BY+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(
tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(AC,B4,CC-B4);if(Lo&&(CC>=
B4)){var BY=AC.charCodeAt(CC)||0;var Dd=(El+B.abW(AC,CC,BY))+El;Dd=B.abQ(Dd,0,(BY+
2)&0xFFFF);Dd=B.abQ(Dd,1,0xFEFF);if((Dd.charCodeAt(BY)||0)===0x0A){Dd=B.abQ(Dd,BY
,0xFEFF);Dd=B.abQ(Dd,BY+1,0x0A);}if((Dd.charCodeAt(2)||0)===0x0A){Dd=B.abQ(Dd,2,
0xFEFF);Dd=B.abQ(Dd,1,0x0A);}else Dd=B.abQ(Dd,1,0xFEFF);tmp=tmp+Dd;}AC=String.fromCharCode(
Ha&0xFFFF)+tmp;}var A2=0;var Ab=1;var No=width;Cf=AC.charCodeAt(0)||0;for(;A2<Cf;
A2=A2+1){var Hh=M_&&!A2;var Hi=Lo&&(A2===(Cf-1));var D5=false;var D6=false;var I1=
Fq;if((Fq&&Hh)&&!Hi){Hh=false;Hi=true;}else if((Fq&&Hi)&&!Hh){Hi=false;Hh=true;}
var Ed=Ab+1;var BY=AC.charCodeAt(Ab)||0;var B4=Ed;var CC=(Ed+BY)-2;var Nj=-1;var
Nk=-1;if(!this.HG&&(font.FE(AC,Ed,BY-1)>No)){var HR=Z;if(((HR&0x2)===0x2)&&!!(HR&
0x5))HR&=~0x2;if(((HR&0x2)===0x2))HR&=~0x5;if(((HR&0x4)===0x4))D5=true;else if(((
HR&0x2)===0x2)){D5=true;D6=true;}else D6=true;}if((AC.charCodeAt(B4)||0)===0x0A)
B4=B4+1;if((AC.charCodeAt(CC)||0)===0x0A)CC=CC-1;while(D5&&((AC.charCodeAt(B4)||
0)===0xFEFF))B4=B4+1;while(D6&&((AC.charCodeAt(CC)||0)===0xFEFF))CC=CC-1;D5=D5&&
!Hi;D6=D6&&!Hh;while((((D5||D6)||Hh)||Hi)&&(B4<CC)){if((D5&&(I1||!D6))||Hh){if(Nj>
0)AC=B.abQ(AC,Nj,0xFEFF);AC=B.abQ(AC,B4,0x2026);Nj=B4;B4=B4+1;I1=!I1;Hh=false;if(
font.FE(AC,Ed,BY-1)<=No){D5=false;D6=false;}else D5=D5||!D6;}if((D6&&(!I1||!D5))||
Hi){if(Nk>0)AC=B.abQ(AC,Nk,0xFEFF);AC=B.abQ(AC,CC,0x2026);Nk=CC;CC=CC-1;I1=!I1;Hi=
false;if(font.FE(AC,Ed,BY-1)<=No){D5=false;D6=false;}else D6=D6||!D5;}}Ab=Ab+BY;
}this.Ho=[font.NM(AC),((AC.charCodeAt(0)||0)*LI)-leading];this.Am=AC;}if(!!this.
G&&((this.F&0x1)===0x1))this.G.V(this.M);B.pe([this,this.LE],this);},Qe:function(
C){if(C===this.L7)return;this.L7=C;this.Am=B.jV;this.B9=false;B.pe([this,this.Hf
],this);},Qd:function(C){if(C===this.Fz)return;this.Fz=C;if((this.HG||C)||!!this.
EP)this.F=this.F&~0x100;else this.F=this.F|0x100;this.Am=B.jV;this.B9=false;B.pe([
this,this.Hf],this);},MI:function(C){if(B.aa0(C,this.EP))return;this.EP=C;if((this.
HG||!!C)||this.Fz)this.F=this.F&~0x100;else this.F=this.F|0x100;},Qw:function(C){
if(C===this.Fb)return;if(!!C&&!!C.I0){B.ab5("%s%*%s",D0,C,Em);throw new Error(Fe
);}if(!!this.Fb){this.Fb.LG=null;this.Fb.I0=null;}this.Fb=C;if(!!C){C.LG=[this,this.
Td];C.I0=[this,this.Tc];}},KY:function(C){if(C===this.HG)return;this.HG=C;if(this.
B9){this.Am=B.jV;this.B9=false;B.pe([this,this.Hf],this);}if((C||this.Fz)||!!this.
EP)this.F=this.F&~0x100;else this.F=this.F|0x100;},Jv:function(C){var A;if(B.aaX(
C,this.FR))return;this.FR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);if(
this.B9)B.pe([this,this.LE],this);},GR:function(C){var A;if(C===this.Ex)return;this.
Ex=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);if(this.Fz){this.Am=B.jV;
this.B9=false;B.pe([this,this.Hf],this);}if(this.B9)B.pe([this,this.LE],this);},
BT:function(C){if(C===this.String)return;this.String=C;this.Am=B.jV;this.B9=false;
B.pe([this,this.Hf],this);},E9:function(C){if(C===this.At)return;this.At=C;this.
Am=B.jV;this.B9=false;B.pe([this,this.Hf],this);},AV:function(C){var A;if(C===this.
Bx)return;this.Bx=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.M);},Hz:function(
C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dy)return;this.Dy=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.V(this.M);},Ji:function(){if(!this.B9)this.GH(this);if(
!this.CK)return false;var result=false;var bidi=this.CK;result=B.v2(bidi);return result;
},PW:function(){if(!this.B9)this.GH(this);if(!this.CK)return false;var result=false;
var bidi=this.CK;result=B.zZ(bidi);return result;},N9:function(aIndex){if(((this.
String===B.jV)||!this.At)||this.Fz)return AO;if(!this.B9)this.GH(this);if(aIndex<
0)aIndex=0;var SY=(this.Am.charCodeAt(0)||0)-1;var Ch=this.Am.charCodeAt(1)||0;var
Ab=1;var GM=2;var A2=0;var col=-1;var Fi=true;aIndex=aIndex+2;while((A2<SY)&&((Ab+
Ch)<=aIndex)){Ab=Ab+Ch;A2=A2+1;GM=GM+1;aIndex=aIndex+1;Ch=this.Am.charCodeAt(Ab)||
0;}if(aIndex>(Ab+Ch))aIndex=Ab+Ch;if(!!this.CK)aIndex=(Ab+this.SK(this.CK,(Ab+1)-
GM,(Ab+Ch)-GM,(aIndex-Ab)-1))+1;for(;aIndex>Ab;Ab=Ab+1){var A8=this.Am.charCodeAt(
Ab+1)||0;if(Fi)col=col+1;Fi=(A8!==0xFEFF)&&(A8!==0x0A);}return[col,A2];},Jz:function(
JT){if(((this.String===B.jV)||!this.At)||this.Fz)return 0;if(!this.B9)this.GH(this
);var A2=JT[1];var col=JT[0];var Ab=1;var GM=2;var Cf=this.Am.charCodeAt(0)||0;var
Ch=this.Am.charCodeAt(1)||0;if(A2>=Cf){A2=Cf-1;col=this.Am.length;}if(A2<0){A2=0;
col=0;}if(col<0)col=0;while((A2>0)&&(Ch>0)){Ab=Ab+Ch;A2=A2-1;GM=GM+1;Ch=this.Am.
charCodeAt(Ab)||0;}var D9=Ab;var LL=(Ab-GM)+1;var LJ=(LL+Ch)-1;var Kj=false;while((
col>=0)&&(Ch>1)){var A8=this.Am.charCodeAt(Ab+1)||0;Ab=Ab+1;Ch=Ch-1;Kj=(A8===0xFEFF
)||(A8===0x0A);if(!Kj){col=col-1;D9=Ab;}}if((!Kj&&(col>=0))&&((this.Am.charCodeAt(
Ab+1)||0)===0x00))Kj=true;if(Kj)D9=D9+1;D9=D9-GM;if(!!this.CK)D9=LL+this.SL(this.
CK,LL,LJ,D9-LL);return D9;},KZ:function(Cz){var A;if((this.String===B.jV)||!this.
At)return AO;if(!this.B9)this.GH(this);var L=this.Hs();if((L[0]>=L[2])||(L[1]>=L[
3]))return AO;var font=this.At;var Z=this.Ex;var Cf=this.Am.charCodeAt(0)||0;var
leading=font.Leading;if(Cz[1]<L[1])Cz=[Cz[0],L[1]];if(Cz[1]>=L[3])Cz=[Cz[0],L[3]-
1];var GI=(font.Ascent+font.Descent)+leading;var A2=((Cz[1]-L[1])/GI)|0;var CF=this.
Md(A2);var Ch=CF.length;var CT=false;if(((Z&0x80)===0x80)){if(this.Ji())Z=(Z&~0x80
)|0x4;else Z=(Z&~0x80)|0x1;}if(((Z&0x40)===0x40)&&(A2<(Cf-1)))CT=true;if((CT&&(CF.
indexOf(String.fromCharCode(0x20),0)<0))&&(CF.indexOf(String.fromCharCode(0xA0),
0)<0))CT=false;if(CT){var Ab=1;var Ic=A2;while(Ic>0){Ab=Ab+(this.Am.charCodeAt(Ab
)||0);Ic=Ic-1;}if(((this.Am.charCodeAt(Ab+1)||0)===0x0A)||((this.Am.charCodeAt((
Ab+(this.Am.charCodeAt(Ab)||0))-1)||0)===0x0A))CT=false;}var Hj=0;var Cu=0;if(CT
)Hj=L[2]-L[0];else if(((Z&0x4)===0x4))Cu=(L[2]-L[0])-font.FE(CF,0,Ch);else if(((
Z&0x2)===0x2))Cu=(((L[2]-L[0])/2)|0)-((font.FE(CF,0,Ch)/2)|0);var col=font.PS(CF
,0,Ch,(Cz[0]-L[0])-Cu,Hj);if(col<0)col=0;return[col,A2];},MR:function(JT){var A;
if((this.String===B.jV)||!this.At)return AO;if(!this.B9)this.GH(this);var Cf=this.
Am.charCodeAt(0)||0;var font=this.At;var Z=this.Ex;var A2=JT[1];var col=JT[0];if(
A2>=Cf){A2=Cf-1;col=this.Am.length;}if(A2<0){A2=0;col=0;}var CF=this.Md(A2);var Ch=
CF.length;var L=this.Hs();var CT=false;var leading=font.Leading;if(((Z&0x80)===0x80
)){if(this.Ji())Z=(Z&~0x80)|0x4;else Z=(Z&~0x80)|0x1;}if(((Z&0x40)===0x40)&&(A2<(
Cf-1)))CT=true;if((CT&&(CF.indexOf(String.fromCharCode(0x20),0)<0))&&(CF.indexOf(
String.fromCharCode(0xA0),0)<0))CT=false;if(CT){var Ab=1;var Ic=A2;while(Ic>0){Ab=
Ab+(this.Am.charCodeAt(Ab)||0);Ic=Ic-1;}if(((this.Am.charCodeAt(Ab+1)||0)===0x0A
)||((this.Am.charCodeAt((Ab+(this.Am.charCodeAt(Ab)||0))-1)||0)===0x0A))CT=false;
}var E3=(L[1]+(A2*((font.Ascent+font.Descent)+leading)))+font.Ascent;var Hj=0;var
Cu=L[0];if(CT)Hj=L[2]-L[0];else if(((Z&0x4)===0x4))Cu=L[2]-font.FE(CF,0,Ch);else
if(((Z&0x2)===0x2))Cu=(Cu+(((L[2]-L[0])/2)|0))-((font.FE(CF,0,Ch)/2)|0);var pos=
font.PR(CF,0,Ch,col,Hj);if(pos<0)pos=0;return[Cu+pos,E3];},Md:function(JS){if((this.
String===B.jV)||!this.At)return B.jV;if(!this.B9)this.GH(this);var Cf=this.Am.charCodeAt(
0)||0;var Ab=1;if((!this.At||(JS<0))||(JS>=Cf))return B.jV;while(JS>0){Ab=Ab+(this.
Am.charCodeAt(Ab)||0);JS=JS-1;}var Ed=Ab;var IT=Ab+(this.Am.charCodeAt(Ab)||0);var
A8=0x00;do{Ed=Ed+1;A8=this.Am.charCodeAt(Ed)||0;}while(((A8===0xFEFF)||(A8===0x0A
))&&(Ed<=IT));do{IT=IT-1;A8=this.Am.charCodeAt(IT)||0;}while(((A8===0xFEFF)||(A8===
0x0A))&&(Ed<=IT));var CF=B.abW(this.Am,Ed,(IT-Ed)+1);var H3;for(H3=CF.indexOf(String.
fromCharCode(0xFEFF),0);H3>=0;H3=CF.indexOf(String.fromCharCode(0xFEFF),H3+1)){var
D9=H3+1;while((CF.charCodeAt(D9)||0)===0xFEFF)D9=D9+1;CF=B.ab1(CF,H3,D9-H3);}return CF;
},Hs:function(){var A;if((this.String===B.jV)||!this.At)return DB;if(!this.B9)this.
GH(this);if(this.Am===B.jV)return DB;var leading=this.At.Leading;var LI=(this.At.
Ascent+this.At.Descent)+this.At.Leading;if(B.aaX(this.Ho,AO))this.Ho=[this.At.NM(
this.Am),this.Ho[1]];this.Ho=[this.Ho[0],((this.Am.charCodeAt(0)||0)*LI)-leading
];var Z=this.Ex;var Ah=this.M;var width=Ah[2]-Ah[0];var height=Ah[3]-Ah[1];var Ay=[
0,0,width,height];var Ac=[].concat(Ay.slice(0,2),B.abf(Ay.slice(0,2),this.Ho));if(((
Z&0x80)===0x80)){if(this.Ji())Z=(Z&~0x80)|0x4;else Z=(Z&~0x80)|0x1;}if(((Z&0x40)===
0x40)){var Fo;Fo=width;if(Fo<0)Fo=0;if(Fo>(Ac[2]-Ac[0]))Ac=B.abL(Ac,Fo);}if((!!(
Z&0x110)&&!!(Z&0x28))&&((Ac[3]-Ac[1])>(Ay[3]-Ay[1])))Z&=~0x110;if(!!(Z&0x110))Z&=
~0x28;if((((Z&0x2)===0x2)&&!!(Z&0x5))&&((Ac[2]-Ac[0])>(Ay[2]-Ay[0])))Z&=~0x2;if(((
Z&0x2)===0x2))Z&=~0x5;if((Ac[2]-Ac[0])!==(Ay[2]-Ay[0])){if(((Z&0x4)===0x4))Ac=B.
abM(Ac,Ay[2]-(Ac[2]-Ac[0]));else if(((Z&0x2)===0x2))Ac=B.abM(Ac,(Ay[0]+(((Ay[2]-
Ay[0])/2)|0))-(((Ac[2]-Ac[0])/2)|0));}if((Ac[3]-Ac[1])!==(Ay[3]-Ay[1])){if(((Z&0x20
)===0x20))Ac=B.abO(Ac,Ay[3]-(Ac[3]-Ac[1]));else if(((Z&0x100)===0x100))Ac=B.abO(
Ac,((Ay[1]+(((Ay[3]-Ay[1])/2)|0))-(((Ac[3]-Ac[1])/2)|0))+(((this.At.Descent-this.
At.Ascent)/2)|0));else if(((Z&0x10)===0x10))Ac=B.abO(Ac,(Ay[1]+(((Ay[3]-Ay[1])/2
)|0))-(((Ac[3]-Ac[1])/2)|0));}Ac=B.abh(Ac,Ah.slice(0,2));return B.abh(Ac,this.FR
);},MB:function(){return this.Dy;},_Init:function(aArg){B.Core.Bh._Init.call(this
,aArg);this.__proto__=E.Text;},_Done:function(){this.EB();this.__proto__=B.Core.
Bh;B.Core.Bh._Done.call(this);},_Mark:function(D){var A;B.Core.Bh._Mark.call(this
,D);if((A=this.Fb)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.At)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.EP)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
},_className:"Views::Text"};E.HE={G7:null,G0:B.wf,AH:B.abi(4,3,0,null),HC:B.wg,DO:
0,H7:0,ML:true,GW:function(C){if(B.aaX(C,this.B3))return;B.Core.Ej.GW.call(this,
C);this.AH.Set(3,0,C[0]);this.AH.Set(3,1,C[1]);this.AH.Set(3,2,1);this.DO=0x45;B.
pe([this,this.I7],this);},FK:function(C){if(B.aaX(C,this.Cj))return;B.Core.Ej.FK.
call(this,C);this.AH.Set(2,0,C[0]);this.AH.Set(2,1,C[1]);this.AH.Set(2,2,1);this.
DO=0x45;B.pe([this,this.I7],this);},DX:function(C){if(B.aaX(C,this.A0))return;B.
Core.Ej.DX.call(this,C);this.AH.Set(1,0,C[0]);this.AH.Set(1,1,C[1]);this.AH.Set(
1,2,1);this.DO=0x45;B.pe([this,this.I7],this);},Ei:function(C){if(B.aaX(C,this.AZ
))return;B.Core.Ej.Ei.call(this,C);this.AH.Set(0,0,C[0]);this.AH.Set(0,1,C[1]);this.
AH.Set(0,2,1);this.DO=0x45;B.pe([this,this.I7],this);},SO:function(){return;},I7:
function(Ae){var A;this.G7=null;if(this.DO===0x00)return;if(this.DO===0x45){var EZ=
B._NewObject(B.Graphics.Od,0);EZ=EZ.L5(this.AH.Get(0,0),this.AH.Get(0,1),this.AH.
Get(1,0),this.AH.Get(1,1),this.AH.Get(2,0),this.AH.Get(2,1),this.AH.Get(3,0),this.
AH.Get(3,1));if(!!EZ){EZ.KA(0,0);this.AH.Set(0,2,EZ.JN*240);EZ.KA(1,0);this.AH.Set(
1,2,EZ.JN*240);EZ.KA(1,1);this.AH.Set(2,2,EZ.JN*240);EZ.KA(0,1);this.AH.Set(3,2,
EZ.JN*240);}this.SO();}this.H7=this.DO;this.DO=0x00;if(!!this.G&&((this.F&0x1)===
0x1))this.G.V(this.GetClipping());},Qt:function(C){var A;if(C===this.ML)return;this.
ML=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());},N0:function(
C){var A;if(B.aaY(C,this.HC))return;this.HC=C;if((((this.H7===0x45)&&(this.DO===
0x00))&&!!this.G)&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if((this.H7
!==0x45)&&(this.DO===0x00)){this.DO=this.H7;B.pe([this,this.I7],this);}},Iu:function(
BG){var A;if(!!!this.G7){this.G7=B._NewObject(B.Graphics.NN,0);this.G7.L5(this.AH.
Get(0,0),this.AH.Get(0,1),this.AH.Get(1,0),this.AH.Get(1,1),this.AH.Get(2,0),this.
AH.Get(2,1),this.AH.Get(3,0),this.AH.Get(3,1));}if(!this.G7.Q0(BG))return AO;var
DR=B.aaV(this.HC,[].concat(AO,this.G0));var Cu=this.G7.Oe*(DR[2]-DR[0]);var E3=this.
G7.Of*(DR[3]-DR[1]);return B.abf([Cu|0,E3|0],DR.slice(0,2));},_Init:function(aArg
){B.Core.Ej._Init.call(this,aArg);(this.AH=[]).__proto__=E.HE.AH;this.__proto__=
E.HE;this.F=0x3;},_Mark:function(D){var A;B.Core.Ej._Mark.call(this,D);if((A=this.
G7)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpView"};E.MZ={AS:
null,bitmap:null,W:null,Dy:255,Dg:function(AP,aClip,aOffset,Ar,aBlend){var A;if(
!this.bitmap)return;this.bitmap.Update();var Et=aOffset[0];var Eu=aOffset[1];var
L=B.aaV(this.HC,[].concat(AO,this.G0));aBlend=aBlend&&((this.F&0x2)===0x2);Ar=Ar+
1;var O2;var O3;var O4;var O5;var S1=this.Dy;O2=O3=O4=O5=S1;var G1=255|(255<<8)|(
255<<16)|((((Ar*O2)>>8)&0xFF)<<24);var G2=255|(255<<8)|(255<<16)|((((Ar*O3)>>8)&
0xFF)<<24);var SM=255|(255<<8)|(255<<16)|((((Ar*O4)>>8)&0xFF)<<24);var SN=255|(255<<
8)|(255<<16)|((((Ar*O5)>>8)&0xFF)<<24);aClip=B.aaV(aClip,B.abh(DB,aOffset));AP.Q$(
aClip,this.bitmap,0,this.AH.Get(0,0)+Et,this.AH.Get(0,1)+Eu,this.AH.Get(0,2),this.
AH.Get(1,0)+Et,this.AH.Get(1,1)+Eu,this.AH.Get(1,2),this.AH.Get(2,0)+Et,this.AH.
Get(2,1)+Eu,this.AH.Get(2,2),this.AH.Get(3,0)+Et,this.AH.Get(3,1)+Eu,this.AH.Get(
3,2),L,G1,G2,SM,SN,aBlend,this.ML);},Bn:function(Aq){if(!this.W||!this.AS)return null;
var S=(B.Core.E4.isPrototypeOf(Aq)?Aq:null);var AU=(B.Core.Ij.isPrototypeOf(Aq)?
Aq:null);if(!S&&!AU)return null;var A$=AO;var X=this.AS.G;while(!!X&&(X!==this.W
)){A$=B.abe(A$,X.M.slice(0,2));X=X.G;}var J=this.AS;if(!!S&&!S.Down)this.AS=null;
if(!!S){S.Bm=B.abf(this.Iu(S.Bm),A$);S.Cw=B.abf(this.Iu(S.Cw),A$);return J.Bn(S);
}if(!!AU){var S4=B.abf(this.Iu(B.abe(AU.Bm,AU.Aw)),A$);AU.Bm=B.abf(this.Iu(AU.Bm
),A$);AU.Cw=B.abf(this.Iu(AU.Cw),A$);AU.Aw=B.abe(AU.Bm,S4);return J.Bn(AU);}return E.
HE.Bn.call(this,Aq);},Ez:function(Ag,R,CJ,En,D3,Ff){var A;if(!this.W||!((this.W.
F&0x18)===0x18))return null;var pos=B.aaI(Ag);pos=this.Iu(pos);var DR=B.aaV(this.
HC,[].concat(AO,this.G0));if(!B.wa(DR,pos))return null;var BN=this.W.Ez(B.abh(B.
abh([0,0,Ag[2]-Ag[0],Ag[3]-Ag[1]],pos),this.W.M.slice(0,2)),R,CJ,En,null,Ff);if(
!!BN)this.AS=BN.B7;else this.AS=null;if(!!this.AS)return B._NewObject(B.Core.I$,
0).Initialize(this,AO);return null;},DP:function(Ae){var A;var O6=this.G0;if(!!this.
W)this.bitmap=this.W.A1;else this.bitmap=null;if(!!this.bitmap)this.G0=this.bitmap.
FrameSize;else this.G0=AO;if(((B.aaX(O6,this.G0)||((this.H7===0x45)&&(this.DO===
0x00)))&&!!this.G)&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if(((this.
H7!==0x45)&&(this.DO===0x00))&&!B.aaX(O6,this.G0)){this.DO=this.H7;B.pe([this,this.
I7],this);}},Hz:function(C){var A;if(C===this.Dy)return;this.Dy=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.V(this.GetClipping());},Qg:function(C){if(C===this.W)return;
if(!!C&&(C===this.G))throw new Error(ET);if(!!this.W){B.z9([this,this.DP],this.W
,0);this.bitmap=null;}this.W=C;if(!!C){B.zV([this,this.DP],C,0);this.bitmap=C.A1;
}this.DP(this);},_Init:function(aArg){E.HE._Init.call(this,aArg);this.__proto__=
E.MZ;},_Mark:function(D){var A;E.HE._Mark.call(this,D);if((A=this.AS)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.bitmap)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::WarpGroup"};E.
T0={Pw:0x1,Pv:0x2,Px:0x4,PA:0x8,Pz:0x10,Py:0x20,Uo:0x40,Uq:0x80,Us:0x100};E.Ut={
Pw:0x1,Pv:0x2,Px:0x4,PA:0x8,Pz:0x10,Py:0x20,TF:0x40,TE:0x80,TK:0x100};E.T_={T9:0
,Um:1,Uk:2,Ul:3};
E._Init=function(){E.Ms.__proto__=B.Core.Is;E.CS.__proto__=B.Core.Bh;E.Bq.__proto__=
B.Core.Bh;E.Jg.__proto__=B.Core.Bh;E.Bs.__proto__=B.Core.Bh;E.Text.__proto__=B.Core.
Bh;E.HE.__proto__=B.Core.Ej;E.MZ.__proto__=E.HE;};E._ReInit=function(){};E.DC=function(
D){};return E;})();

/* Embedded Wizard */