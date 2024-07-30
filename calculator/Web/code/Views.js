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
var AF=[0,0];var AV=[0,0,0,0];var C_="\uFEFF";
E.B_={J8:0,J7:0,Ji:0xFFFFFFFF,Jj:0xFFFFFFFF,Jl:0xFFFFFFFF,Jk:0xFFFFFFFF,C9:0,BJ:0xFFFFFFFF
,C5:function(AM,aClip,aOffset,AG,aBlend){var A;var Al=this.Jk;var As=this.Jl;var
Ao=this.Ji;var Ar=this.Jj;var AE=this.BJ;var Ec=this.C9+this.J7;var H5=this.C9+this.
J8;var H3=this.C9;var H2=this.C9;aBlend=aBlend&&((this.F&0x2)===0x2);AG=AG+1;if((((
Al===As)&&(Ao===Ar))&&(Al===Ao))&&(Al===0xFFFFFFFF))Al=As=Ao=Ar=AE;else if(AE!==
0xFFFFFFFF){Al=(Al&0x00FFFFFF)|((((((Al>>24)&0xFF)*(((AE>>24)&0xFF)+1))>>8)&0xFF
)<<24);Al=(Al&0xFFFFFF00)|((((Al&0xFF)*((AE&0xFF)+1))>>8)&0xFF);Al=(Al&0xFFFF00FF
)|((((((Al>>8)&0xFF)*(((AE>>8)&0xFF)+1))>>8)&0xFF)<<8);Al=(Al&0xFF00FFFF)|((((((
Al>>16)&0xFF)*(((AE>>16)&0xFF)+1))>>8)&0xFF)<<16);As=(As&0x00FFFFFF)|((((((As>>24
)&0xFF)*(((AE>>24)&0xFF)+1))>>8)&0xFF)<<24);As=(As&0xFFFFFF00)|((((As&0xFF)*((AE&
0xFF)+1))>>8)&0xFF);As=(As&0xFFFF00FF)|((((((As>>8)&0xFF)*(((AE>>8)&0xFF)+1))>>8
)&0xFF)<<8);As=(As&0xFF00FFFF)|((((((As>>16)&0xFF)*(((AE>>16)&0xFF)+1))>>8)&0xFF
)<<16);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*(((AE>>24)&0xFF)+1))>>8)&0xFF)<<24
);Ao=(Ao&0xFFFFFF00)|((((Ao&0xFF)*((AE&0xFF)+1))>>8)&0xFF);Ao=(Ao&0xFFFF00FF)|((((((
Ao>>8)&0xFF)*(((AE>>8)&0xFF)+1))>>8)&0xFF)<<8);Ao=(Ao&0xFF00FFFF)|((((((Ao>>16)&
0xFF)*(((AE>>16)&0xFF)+1))>>8)&0xFF)<<16);Ar=(Ar&0x00FFFFFF)|((((((Ar>>24)&0xFF)
*(((AE>>24)&0xFF)+1))>>8)&0xFF)<<24);Ar=(Ar&0xFFFFFF00)|((((Ar&0xFF)*((AE&0xFF)+
1))>>8)&0xFF);Ar=(Ar&0xFFFF00FF)|((((((Ar>>8)&0xFF)*(((AE>>8)&0xFF)+1))>>8)&0xFF
)<<8);Ar=(Ar&0xFF00FFFF)|((((((Ar>>16)&0xFF)*(((AE>>16)&0xFF)+1))>>8)&0xFF)<<16);
}if(AG<256){Al=(Al&0x00FFFFFF)|((((AG*((Al>>24)&0xFF))>>8)&0xFF)<<24);As=(As&0x00FFFFFF
)|((((AG*((As>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((AG*((Ao>>24)&0xFF
))>>8)&0xFF)<<24);Ar=(Ar&0x00FFFFFF)|((((AG*((Ar>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!Ec||!!H5)||!!H3)||!!H2)AM.MG(aClip,B.abh(this.N,aOffset),Ec,H5,H3,H2,Al,As,Ar,
Ao,aBlend);else AM.JA(aClip,B.abh(this.N,aOffset),Al,As,Ar,Ao,aBlend);},Nb:function(
C){var A;if(C<0)C=0;if(C===this.J8)return;this.J8=C;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Ac(this.N);},Na:function(C){var A;if(C<0)C=0;if(C===this.J7)return;this.
J7=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},J2:function(C){var A;
if(C===this.Ji)return;this.Ji=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.
N);},J3:function(C){var A;if(C===this.Jj)return;this.Jj=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Ac(this.N);},MT:function(C){var A;if(C===this.Jl)return;this.
Jl=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},MS:function(C){var A;
if(C===this.Jk)return;this.Jk=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.
N);},Dq:function(C){var A;if(C<0)C=0;if(C===this.C9)return;this.C9=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ac(this.N);},AP:function(C){var A;if(C===this.BJ)return;
this.BJ=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},_Init:function(aArg
){B.Core.Bb._Init.call(this,aArg);this.__proto__=E.B_;},_className:"Views::Rectangle"
};E.AC={C9:0,Width:1,BJ:0xFFFFFFFF,C5:function(AM,aClip,aOffset,AG,aBlend){var A;
var Al;var As;var Ao;var Ar;var AE=this.BJ;var Ec=this.C9;var H5=this.C9;var H3=
this.C9;var H2=this.C9;aBlend=aBlend&&((this.F&0x2)===0x2);AG=AG+1;Al=As=Ao=Ar=AE;
if(AG<256){Al=(Al&0x00FFFFFF)|((((AG*((Al>>24)&0xFF))>>8)&0xFF)<<24);As=(As&0x00FFFFFF
)|((((AG*((As>>24)&0xFF))>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((AG*((Ao>>24)&0xFF
))>>8)&0xFF)<<24);Ar=(Ar&0x00FFFFFF)|((((AG*((Ar>>24)&0xFF))>>8)&0xFF)<<24);}if(((
!!Ec||!!H5)||!!H3)||!!H2)AM.MD(aClip,B.abh(this.N,aOffset),this.Width,Ec,H5,H3,H2
,Al,As,Ar,Ao,aBlend);else AM.MB(aClip,B.abh(this.N,aOffset),this.Width,Al,As,Ar,
Ao,aBlend);},Dq:function(C){var A;if(C<0)C=0;if(C===this.C9)return;this.C9=C;if(
!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},GD:function(C){var A;if(C<0)C=
0;if(C===this.Width)return;this.Width=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.
Ac(this.N);},AP:function(C){var A;if(C===this.BJ)return;this.BJ=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ac(this.N);},_Init:function(aArg){B.Core.Bb._Init.call(
this,aArg);this.__proto__=E.AC;},_className:"Views::Border"};E.G6={timer:null,X:
null,BM:-1,BJ:0xFFFFFFFF,G1:0x1F,Em:0,AS:0,FC:B.wf,C4:false,C5:function(AM,aClip
,aOffset,AG,aBlend){var A;var BX=this.Em;if(this.BM>=0)BX=this.BM;if(!this.X||(BX>=
this.X.NoOfFrames))return;this.X.Update();var Al;var As;var Ar;var Ao;var AE=this.
BJ;var Cp=(((AG+1)*255)>>8)+1;var B3=this.G1;var G=B.abh(this.N,aOffset);var I_=
B.abe([G[2]-G[0],G[3]-G[1]],this.FC);aBlend=aBlend&&((this.F&0x2)===0x2);Al=As=Ao=
Ar=AE;if(Cp<256){Al=(Al&0x00FFFFFF)|((((((Al>>24)&0xFF)*Cp)>>8)&0xFF)<<24);As=(As&
0x00FFFFFF)|((((((As>>24)&0xFF)*Cp)>>8)&0xFF)<<24);Ar=(Ar&0x00FFFFFF)|((((((Ar>>
24)&0xFF)*Cp)>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*Cp)>>8)&0xFF
)<<24);}if(((this.FC[0]>0)&&(I_[0]>0))&&!((B3&0x5)===0x5)){var Ck=((this.X.FrameSize[
0]/3)|0)-I_[0];if(((B3&0x1)===0x1)){if(aClip[2]>G[2])aClip=B.abN(aClip,G[2]);if(
Ck>0)G=B.abN(G,G[2]+Ck);B3=B3|0x4;}else if(((B3&0x4)===0x4)){if(aClip[0]<G[0])aClip=[
].concat(G[0],aClip.slice(1,4));if(Ck>0)G=[].concat(G[0]-Ck,G.slice(1,4));B3=B3|
0x1;}else{if(aClip[0]<G[0])aClip=[].concat(G[0],aClip.slice(1,4));if(aClip[2]>G[
2])aClip=B.abN(aClip,G[2]);if(Ck>0){G=[].concat(G[0]-((Ck/2)|0),G.slice(1,4));G=
B.abN(G,(G[2]+Ck)-((Ck/2)|0));}B3=B3|0x5;}}if(((this.FC[1]>0)&&(I_[1]>0))&&!((B3&
0xA)===0xA)){var Ck=((this.X.FrameSize[1]/3)|0)-I_[1];if(((B3&0x2)===0x2)){if(aClip[
3]>G[3])aClip=[].concat(aClip.slice(0,3),G[3]);if(Ck>0)G=[].concat(G.slice(0,3),
G[3]+Ck);B3=B3|0x8;}else if(((B3&0x8)===0x8)){if(aClip[1]<G[1])aClip=B.abP(aClip
,G[1]);if(Ck>0)G=B.abP(G,G[1]-Ck);B3=B3|0x2;}else{if(aClip[1]<G[1])aClip=B.abP(aClip
,G[1]);if(aClip[3]>G[3])aClip=[].concat(aClip.slice(0,3),G[3]);if(Ck>0){G=B.abP(
G,G[1]-((Ck/2)|0));G=[].concat(G.slice(0,3),(G[3]+Ck)-((Ck/2)|0));}B3=B3|0xA;}}AM.
MA(aClip,this.X,BX,G,B3,Al,As,Ar,Ao,aBlend);},HU:function(Ax){var A;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ac(this.N);},Dl:function(Ax){var A;var BX=this.BM;var Df=
0;if(!!this.X)Df=this.X.NoOfFrames*this.X.FrameDelay;if((!!this.timer&&(this.BM<
0))&&(Df>0))this.AS=this.timer.AU-(this.Em*this.X.FrameDelay);if(!!this.timer&&(
Df>0)){var Ad=(this.timer.AU-this.AS)|0;BX=(Ad/this.X.FrameDelay)|0;if(Ad>=Df){BX=
BX%this.X.NoOfFrames;this.AS=this.timer.AU-(Ad%Df);}}if(((BX!==this.BM)&&!!this.
I)&&((this.F&0x1)===0x1))this.I.Ac(this.N);this.BM=BX;if(!Df&&!!this.timer){B.z9([
this,this.Dl],this.timer,0);this.timer=null;}},AP:function(C){var A;if(C===this.
BJ)return;this.BJ=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},DW:function(
C){var A;if(this.C4===C)return;this.C4=C;this.BM=-1;if(!C&&!!this.timer){B.z9([this
,this.Dl],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(B.aci.
FB);B.zV([this,this.Dl],this.timer,0);B.pe([this,this.Dl],this);}if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ac(this.N);},La:function(C){var A;if(C===this.G1)return;
this.G1=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},FE:function(C){var
A;if(C<0)C=0;if((C===this.Em)&&(this.BM===-1))return;this.Em=C;if(!this.timer)this.
BM=-1;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},AT:function(C){var A;
if(C===this.X)return;if(!!this.X&&this.X.Gv)B.z9([this,this.HU],this.X,0);this.X=
C;this.BM=-1;if(!!C&&C.Gv)B.zV([this,this.HU],C,0);if(this.C4){this.DW(false);this.
DW(true);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},AA:function(C){if(
C)this.AI(0x1,0x0);else this.AI(0x0,0x1);},Lh:function(C){var A;if(C[0]<0)C=[0,C[
1]];if(C[1]<0)C=[C[0],0];if(B.aaX(C,this.FC))return;this.FC=C;if((!!this.I&&((this.
F&0x1)===0x1))&&!((this.G1&0xF)===0xF))this.I.Ac(this.N);},_Init:function(aArg){
B.Core.Bb._Init.call(this,aArg);this.__proto__=E.G6;},_Mark:function(D){var A;B.
Core.Bb._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.X)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"};E.
A8={timer:null,X:null,AS:0,BM:0,BJ:0xFFFFFFFF,Ef:0x12,Em:0,C4:false,C5:function(
AM,aClip,aOffset,AG,aBlend){var A;var BX=this.Em;if(this.BM>=0)BX=this.BM;if(!this.
X||(BX>=this.X.NoOfFrames))return;this.X.Update();var Q=this.JB();var Cc=this.X.
FrameSize;if((Q[0]>=Q[2])||(Q[1]>=Q[3]))return;var Al;var As;var Ar;var Ao;var AE=
this.BJ;var Cp=(((AG+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===0x2);Al=As=Ao=
Ar=AE;if(Cp<256){Al=(Al&0x00FFFFFF)|((((((Al>>24)&0xFF)*Cp)>>8)&0xFF)<<24);As=(As&
0x00FFFFFF)|((((((As>>24)&0xFF)*Cp)>>8)&0xFF)<<24);Ar=(Ar&0x00FFFFFF)|((((((Ar>>
24)&0xFF)*Cp)>>8)&0xFF)<<24);Ao=(Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*Cp)>>8)&0xFF
)<<24);}if(B.aaX([Q[2]-Q[0],Q[3]-Q[1]],Cc))AM.Mx(aClip,this.X,BX,B.abh(this.N,aOffset
),B.abe(this.N.slice(0,2),Q.slice(0,2)),Al,As,Ar,Ao,aBlend);else AM.NH(aClip,this.
X,BX,B.abh(Q,aOffset),[].concat(AF,Cc),Al,As,Ar,Ao,aBlend,true);},HU:function(Ax
){var A;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},Dl:function(Ax){var
A;var BX=this.BM;var Df=0;if(!!this.X)Df=this.X.NoOfFrames*this.X.FrameDelay;if((
!!this.timer&&(this.BM<0))&&(Df>0))this.AS=this.timer.AU-(this.Em*this.X.FrameDelay
);if(!!this.timer&&(Df>0)){var Ad=(this.timer.AU-this.AS)|0;BX=(Ad/this.X.FrameDelay
)|0;if(Ad>=Df){BX=BX%this.X.NoOfFrames;this.AS=this.timer.AU-(Ad%Df);}}if(((BX!==
this.BM)&&!!this.I)&&((this.F&0x1)===0x1))this.I.Ac(this.N);this.BM=BX;if(!Df&&!
!this.timer){B.z9([this,this.Dl],this.timer,0);this.timer=null;}},AP:function(C){
var A;if(C===this.BJ)return;this.BJ=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(
this.N);},DW:function(C){var A;if(this.C4===C)return;this.C4=C;this.BM=-1;if(!C&&
!!this.timer){B.z9([this,this.Dl],this.timer,0);this.timer=null;}if(C){this.timer=
B._GetAutoObject(B.aci.FB);B.zV([this,this.Dl],this.timer,0);B.pe([this,this.Dl]
,this);}if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},FD:function(C){var
A;if(C===this.Ef)return;this.Ef=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.
N);},FE:function(C){var A;if(C<0)C=0;if((C===this.Em)&&(this.BM===-1))return;this.
Em=C;if(!this.timer)this.BM=-1;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.
N);},AT:function(C){var A;if(C===this.X)return;if(!!this.X&&this.X.Gv)B.z9([this
,this.HU],this.X,0);this.X=C;this.BM=-1;if(!!C&&C.Gv)B.zV([this,this.HU],C,0);if(
this.C4){this.DW(false);this.DW(true);}if(!!this.I&&((this.F&0x1)===0x1))this.I.
Ac(this.N);},AA:function(C){if(C)this.AI(0x1,0x0);else this.AI(0x0,0x1);},JB:function(
){var A;if(!this.X)return AV;var Ag=this.Ef;var Cc=this.X.FrameSize;var AJ=this.
N;var width=AJ[2]-AJ[0];var height=AJ[3]-AJ[1];if(!Cc[0]||!Cc[1])return AV;var Am=[
0,0,width,height];var Y=Am;if(((Ag&0x40)===0x40)){var KY=((((Am[2]-Am[0])<<16)+((
Cc[0]/2)|0))/Cc[0])|0;var H6=((((Am[3]-Am[1])<<16)+((Cc[1]/2)|0))/Cc[1])|0;var E_=
KY;if(H6>E_)E_=H6;Y=B.abL(Y,((Cc[0]*E_)+32768)>>16);Y=B.abI(Y,((Cc[1]*E_)+32768)>>
16);}else if(((Ag&0x80)===0x80)){var KY=((((Am[2]-Am[0])<<16)+((Cc[0]/2)|0))/Cc[
0])|0;var H6=((((Am[3]-Am[1])<<16)+((Cc[1]/2)|0))/Cc[1])|0;var E_=KY;if(H6<E_)E_=
H6;Y=B.abL(Y,((Cc[0]*E_)+32768)>>16);Y=B.abI(Y,((Cc[1]*E_)+32768)>>16);}else if(
!((Ag&0x100)===0x100))Y=B.abK(Y,Cc);if((Y[2]-Y[0])!==(Am[2]-Am[0])){if(((Ag&0x4)===
0x4))Y=B.abM(Y,Am[2]-(Y[2]-Y[0]));else if(((Ag&0x2)===0x2))Y=B.abM(Y,(Am[0]+(((Am[
2]-Am[0])/2)|0))-(((Y[2]-Y[0])/2)|0));}if((Y[3]-Y[1])!==(Am[3]-Am[1])){if(((Ag&0x20
)===0x20))Y=B.abO(Y,Am[3]-(Y[3]-Y[1]));else if(((Ag&0x10)===0x10))Y=B.abO(Y,(Am[
1]+(((Am[3]-Am[1])/2)|0))-(((Y[3]-Y[1])/2)|0));}Y=B.abh(Y,AJ.slice(0,2));return Y;
},_Init:function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=E.A8;},_Mark:
function(D){var A;B.Core.Bb._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.X)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Views::Image"};E.Text={Bk:null,AZ:B.jV,String:B.jV,CR:null,Fy:B.wf,Ef:0x12,BJ:0xFFFFFFFF
,DJ:255,GJ:false,Gm:false,Js:false,Cq:false,DB:function(){if(!!this.CR){this.KC(
this.CR);this.CR=null;}},C5:function(AM,aClip,aOffset,AG,aBlend){var A;if((this.
AZ===B.jV)||!this.Bk)return;var Ag=this.Ef;var font=this.Bk;var Am=B.abh(this.N,
aOffset);var Al;var As;var Ar;var Ao;var Pc=this.BJ;var Cp=(((AG+1)*this.DJ)>>8)+
1;var DO=this.AZ.charCodeAt(0)||0;var Q=B.abh(this.JB(),aOffset);var L6=[Am[0]-Q[
0],(Am[1]-Q[1])-font.Ascent];if(DO<1)return;Al=As=Ao=Ar=Pc;if(Cp<256){Al=(Al&0x00FFFFFF
)|((((((Al>>24)&0xFF)*Cp)>>8)&0xFF)<<24);As=(As&0x00FFFFFF)|((((((As>>24)&0xFF)*
Cp)>>8)&0xFF)<<24);Ar=(Ar&0x00FFFFFF)|((((((Ar>>24)&0xFF)*Cp)>>8)&0xFF)<<24);Ao=(
Ao&0x00FFFFFF)|((((((Ao>>24)&0xFF)*Cp)>>8)&0xFF)<<24);}if(((Ag&0x80)===0x80)){if(
this.JI())Ag=(Ag&~0x80)|0x4;else Ag=(Ag&~0x80)|0x1;}if((DO===1)&&!((Ag&0x40)===0x40
)){AM.K4(aClip,font,this.AZ,2,(this.AZ.charCodeAt(1)||0)-1,Am,L6,0,0,Al,As,Ar,Ao
,true);return;}var leading=font.Leading;var KX=(font.Ascent+font.Descent)+leading;
var Pa=aClip[1]-Q[1];var Pb=aClip[3]-Q[1];var Kr=Q[2]-Q[0];var Gi=0;var H=1;var AE=
this.AZ.charCodeAt(1)||0;while(((Gi+KX)<Pa)&&(AE>0)){H=H+AE;Gi=Gi+KX;AE=this.AZ.
charCodeAt(H)||0;}while((Gi<Pb)&&(AE>0)){var F0=B.abe(L6,[0,Gi]);var Mi=0;var IY=
false;if(((((Ag&0x40)===0x40)&&((this.AZ.charCodeAt((H+AE)-1)||0)!==0x0A))&&((this.
AZ.charCodeAt(H+1)||0)!==0x0A))&&((this.AZ.charCodeAt(H+AE)||0)!==0x00))IY=true;
if(IY&&!!(Ag&0x6)){var Mh=H+AE;var LK=this.AZ.indexOf(String.fromCharCode(0x20),
H+1);var LL=this.AZ.indexOf(String.fromCharCode(0xA0),H+1);if(((LK<0)||(LK>=Mh))&&((
LL<0)||(LL>=Mh)))IY=false;}if(IY)Mi=Kr;else if(((Ag&0x4)===0x4))F0=[(F0[0]-Kr)+font.
G7(this.AZ,H+1,AE-1),F0[1]];else if(((Ag&0x2)===0x2))F0=[(F0[0]-((Kr/2)|0))+((font.
G7(this.AZ,H+1,AE-1)/2)|0),F0[1]];AM.K4(aClip,font,this.AZ,H+1,AE-1,Am,F0,Mi,0,Al
,As,Ar,Ao,true);H=H+AE;Gi=Gi+KX;AE=this.AZ.charCodeAt(H)||0;}},M:function(C){var
A;if(B.aaY(C,this.N))return;var Mg;Mg=((A=this.N)[2]-A[0])!==(C[2]-C[0]);if(((Mg&&
this.GJ)&&this.Cq)&&!((this.F&0x2000)===0x2000)){this.AZ=B.jV;this.Cq=false;B.pe([
this,this.Fu],this);}if(((this.Gm&&this.Cq)&&!B.aaX([(A=this.N)[2]-A[0],A[3]-A[1
]],[C[2]-C[0],C[3]-C[1]]))&&!((this.F&0x2000)===0x2000)){this.AZ=B.jV;this.Cq=false;
B.pe([this,this.Fu],this);}B.Core.Bb.M.call(this,C);B.pe([this,this.KU],this);},
KC:function(aBidi){if(!aBidi)return;B.rB(aBidi);},Pd:function(aSize){var bidi=null;
bidi=B.v3(aSize);return bidi;},KU:function(Ax){},Fu:function(Ax){B.pe([this,this.
I5],this);},I5:function(Ax){var A;if(this.Cq)return;var width=(A=this.N)[2]-A[0];
var height=(A=this.N)[3]-A[1];var Eb=-1;var font=this.Bk;if((!!font&&!!!font.Ascent
)&&!!!font.Descent)font=null;if(this.GJ){Eb=width;if(Eb<0)Eb=1;}if(!!this.CR){this.
KC(this.CR);this.CR=null;}this.Cq=true;if((this.String!==B.jV)&&!!font){var length=
this.String.length;if(this.Js)this.CR=this.Pd(length);this.AZ=font.Nz(this.String
,0,Eb,length,this.CR);if(!!this.CR&&!this.ML()){this.KC(this.CR);this.CR=null;}}
else this.AZ=B.jV;this.Fy=AF;if((this.Gm&&(this.AZ!==B.jV))&&!!font){var Ag=this.
Ef;var leading=font.Leading;var Aq=this.AZ;var Ec=this.JI();if(((Ag&0x80)===0x80
)){if(Ec)Ag=(Ag&~0x80)|0x4;else Ag=(Ag&~0x80)|0x1;}var I7=(font.Ascent+font.Descent
)+leading;var DO=Aq.charCodeAt(0)||0;var Fq=((height+leading)/I7)|0;var Kw=false;
var IR=false;if(Fq<=0)Fq=1;if(DO>Fq){var Dy=0;var H4=0;var I8=DO-1;var Bx;var BY=
Aq.length;var tmp=B.jV;if(!!(Ag&0x110)&&!!(Ag&0x28))Ag&=~0x110;if(!!(Ag&0x110))Ag&=
~0x28;if(((Ag&0x20)===0x20))H4=DO-Fq;else if(((Ag&0x10)===0x10)||((Ag&0x100)===0x100
)){H4=((DO-Fq)/2)|0;I8=(H4+Fq)-1;}else I8=Fq-1;Kw=H4>0;IR=I8<(DO-1);for(Bx=1;Dy<
H4;Dy=Dy+1)Bx=Bx+(Aq.charCodeAt(Bx)||0);if(IR)for(BY=Bx;Dy<I8;Dy=Dy+1)BY=BY+(Aq.
charCodeAt(BY)||0);if(Kw){var Cb=Aq.charCodeAt(Bx)||0;tmp=(C_+B.abW(Aq,Bx,Cb))+C_;
tmp=B.abQ(tmp,0,(Cb+2)&0xFFFF);Bx=Bx+Cb;if((tmp.charCodeAt(Cb)||0)===0x0A){tmp=B.
abQ(tmp,Cb,0xFEFF);tmp=B.abQ(tmp,Cb+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=
B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+
B.abW(Aq,Bx,BY-Bx);if(IR&&(BY>=Bx)){var Cb=Aq.charCodeAt(BY)||0;var Cu=(C_+B.abW(
Aq,BY,Cb))+C_;Cu=B.abQ(Cu,0,(Cb+2)&0xFFFF);Cu=B.abQ(Cu,1,0xFEFF);if((Cu.charCodeAt(
Cb)||0)===0x0A){Cu=B.abQ(Cu,Cb,0xFEFF);Cu=B.abQ(Cu,Cb+1,0x0A);}if((Cu.charCodeAt(
2)||0)===0x0A){Cu=B.abQ(Cu,2,0xFEFF);Cu=B.abQ(Cu,1,0x0A);}else Cu=B.abQ(Cu,1,0xFEFF
);tmp=tmp+Cu;}Aq=String.fromCharCode(Fq&0xFFFF)+tmp;}var Dy=0;var IX=1;var KL=width;
DO=Aq.charCodeAt(0)||0;for(;Dy<DO;Dy=Dy+1){var Fw=Kw&&!Dy;var Fx=IR&&(Dy===(DO-1
));var Db=false;var Dc=false;var GX=Ec;if((Ec&&Fw)&&!Fx){Fw=false;Fx=true;}else if((
Ec&&Fx)&&!Fw){Fx=false;Fw=true;}var H7=IX+1;var Cb=Aq.charCodeAt(IX)||0;var Bx=H7;
var BY=(H7+Cb)-2;var KH=-1;var KI=-1;if(!this.GJ&&(font.G7(Aq,H7,Cb-1)>KL)){var FU=
Ag;if(((FU&0x2)===0x2)&&!!(FU&0x5))FU&=~0x2;if(((FU&0x2)===0x2))FU&=~0x5;if(((FU&
0x4)===0x4))Db=true;else if(((FU&0x2)===0x2)){Db=true;Dc=true;}else Dc=true;}if((
Aq.charCodeAt(Bx)||0)===0x0A)Bx=Bx+1;if((Aq.charCodeAt(BY)||0)===0x0A)BY=BY-1;while(
Db&&((Aq.charCodeAt(Bx)||0)===0xFEFF))Bx=Bx+1;while(Dc&&((Aq.charCodeAt(BY)||0)===
0xFEFF))BY=BY-1;Db=Db&&!Fx;Dc=Dc&&!Fw;while((((Db||Dc)||Fw)||Fx)&&(Bx<BY)){if((Db&&(
GX||!Dc))||Fw){if(KH>0)Aq=B.abQ(Aq,KH,0xFEFF);Aq=B.abQ(Aq,Bx,0x2026);KH=Bx;Bx=Bx+
1;GX=!GX;Fw=false;if(font.G7(Aq,H7,Cb-1)<=KL){Db=false;Dc=false;}else Db=Db||!Dc;
}if((Dc&&(!GX||!Db))||Fx){if(KI>0)Aq=B.abQ(Aq,KI,0xFEFF);Aq=B.abQ(Aq,BY,0x2026);
KI=BY;BY=BY-1;GX=!GX;Fx=false;if(font.G7(Aq,H7,Cb-1)<=KL){Db=false;Dc=false;}else
Dc=Dc||!Db;}}IX=IX+Cb;}this.Fy=[font.K7(Aq),((Aq.charCodeAt(0)||0)*I7)-leading];
this.AZ=Aq;}if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);B.pe([this,this.
KU],this);},MX:function(C){if(C===this.Js)return;this.Js=C;this.AZ=B.jV;this.Cq=
false;B.pe([this,this.Fu],this);},MW:function(C){if(C===this.Gm)return;this.Gm=C;
if(this.GJ||C)this.F=this.F&~0x100;else this.F=this.F|0x100;this.AZ=B.jV;this.Cq=
false;B.pe([this,this.Fu],this);},J4:function(C){if(C===this.GJ)return;this.GJ=C;
if(this.Cq){this.AZ=B.jV;this.Cq=false;B.pe([this,this.Fu],this);}if(C||this.Gm)
this.F=this.F&~0x100;else this.F=this.F|0x100;},FD:function(C){var A;if(C===this.
Ef)return;this.Ef=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);if(this.
Gm){this.AZ=B.jV;this.Cq=false;B.pe([this,this.Fu],this);}if(this.Cq)B.pe([this,
this.KU],this);},B7:function(C){if(C===this.String)return;this.String=C;this.AZ=
B.jV;this.Cq=false;B.pe([this,this.Fu],this);},GC:function(C){if(C===this.Bk)return;
this.Bk=C;this.AZ=B.jV;this.Cq=false;B.pe([this,this.Fu],this);},AP:function(C){
var A;if(C===this.BJ)return;this.BJ=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(
this.N);},Hf:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.DJ)return;this.
DJ=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.N);},JI:function(){if(!this.
Cq)this.I5(this);if(!this.CR)return false;var result=false;var bidi=this.CR;result=
B.v2(bidi);return result;},ML:function(){if(!this.Cq)this.I5(this);if(!this.CR)return false;
var result=false;var bidi=this.CR;result=B.zZ(bidi);return result;},JB:function(
){var A;if((this.String===B.jV)||!this.Bk)return AV;if(!this.Cq)this.I5(this);if(
this.AZ===B.jV)return AV;var leading=this.Bk.Leading;var I7=(this.Bk.Ascent+this.
Bk.Descent)+this.Bk.Leading;if(B.aaX(this.Fy,AF))this.Fy=[this.Bk.K7(this.AZ),this.
Fy[1]];this.Fy=[this.Fy[0],((this.AZ.charCodeAt(0)||0)*I7)-leading];var Ag=this.
Ef;var AJ=this.N;var width=AJ[2]-AJ[0];var height=AJ[3]-AJ[1];var Am=[0,0,width,
height];var Y=[].concat(Am.slice(0,2),B.abf(Am.slice(0,2),this.Fy));if(((Ag&0x80
)===0x80)){if(this.JI())Ag=(Ag&~0x80)|0x4;else Ag=(Ag&~0x80)|0x1;}if(((Ag&0x40)===
0x40)){var Eb;Eb=width;if(Eb<0)Eb=0;if(Eb>(Y[2]-Y[0]))Y=B.abL(Y,Eb);}if((!!(Ag&0x110
)&&!!(Ag&0x28))&&((Y[3]-Y[1])>(Am[3]-Am[1])))Ag&=~0x110;if(!!(Ag&0x110))Ag&=~0x28;
if((((Ag&0x2)===0x2)&&!!(Ag&0x5))&&((Y[2]-Y[0])>(Am[2]-Am[0])))Ag&=~0x2;if(((Ag&
0x2)===0x2))Ag&=~0x5;if((Y[2]-Y[0])!==(Am[2]-Am[0])){if(((Ag&0x4)===0x4))Y=B.abM(
Y,Am[2]-(Y[2]-Y[0]));else if(((Ag&0x2)===0x2))Y=B.abM(Y,(Am[0]+(((Am[2]-Am[0])/2
)|0))-(((Y[2]-Y[0])/2)|0));}if((Y[3]-Y[1])!==(Am[3]-Am[1])){if(((Ag&0x20)===0x20
))Y=B.abO(Y,Am[3]-(Y[3]-Y[1]));else if(((Ag&0x100)===0x100))Y=B.abO(Y,((Am[1]+(((
Am[3]-Am[1])/2)|0))-(((Y[3]-Y[1])/2)|0))+(((this.Bk.Descent-this.Bk.Ascent)/2)|0
));else if(((Ag&0x10)===0x10))Y=B.abO(Y,(Am[1]+(((Am[3]-Am[1])/2)|0))-(((Y[3]-Y[
1])/2)|0));}Y=B.abh(Y,AJ.slice(0,2));return Y;},JZ:function(){return this.DJ;},_Init:
function(aArg){B.Core.Bb._Init.call(this,aArg);this.__proto__=E.Text;},_Done:function(
){this.DB();this.__proto__=B.Core.Bb;B.Core.Bb._Done.call(this);},_Mark:function(
D){var A;B.Core.Bb._Mark.call(this,D);if((A=this.Bk)&&(A._cycle!=D))A._Mark(A._cycle=
D);},_className:"Views::Text"};E.P5={Mq:0x1,Mp:0x2,Mr:0x4,Mu:0x8,Mt:0x10,Ms:0x20
,Qt:0x40,Qu:0x80,Qw:0x100};E.Qx={Mq:0x1,Mp:0x2,Mr:0x4,Mu:0x8,Mt:0x10,Ms:0x20,PL:
0x40,PK:0x80,PQ:0x100};E.Qd={Qc:0,Qr:1,Qp:2,Qq:3};
E._Init=function(){E.B_.__proto__=B.Core.Bb;E.AC.__proto__=B.Core.Bb;E.G6.__proto__=
B.Core.Bb;E.A8.__proto__=B.Core.Bb;E.Text.__proto__=B.Core.Bb;};E._ReInit=function(
){};E.CP=function(D){};return E;})();

/* Embedded Wizard */