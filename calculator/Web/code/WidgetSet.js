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
);if(EmWiApp.acf)throw new Error("The unit file 'WidgetSet.js' included twice!");
EmWiApp.acf=(function(){var B=EmWiApp;var D={};
var AI=[0,0,0,0];var AG=[0,0];var CF=[-1,-1];var DI=[0,0,150,50];var Ec=[0,50];var
Ed=[150,50];var Ff=[150,0];
D.CD={Gu:null,Gk:null,Gn:null,Gm:null,Gl:null,Hw:null,Hc:0,Hb:0,H5:0x3F,Hx:0,Hy:0
,Hz:0,HA:0,HB:0,HC:0,I4:0x3F,IA:0xFF000000,ID:0xFF000000,IC:0xFF000000,IB:0xFF000000
,IE:0,Ir:0,Iu:0,It:0,Is:0,Iz:0x12,Iq:0x12,Im:0x3F,Ii:-1,Il:-1,Ik:-1,Ij:-1,KeyCode:
149,LB:function(C){if(B.aa0(this.Hw,C))return;this.Hw=C;B.pe([this,this.AK],this
);},C8:function(C){if(this.KeyCode===C)return;this.KeyCode=C;B.pe([this,this.AK]
,this);},Gw:function(C){if(this.Hc===C)return;this.Hc=C;B.pe([this,this.AK],this
);},Gv:function(C){if(this.Hb===C)return;this.Hb=C;B.pe([this,this.AK],this);},Gx:
function(C){if(this.H5===C)return;this.H5=C;B.pe([this,this.AK],this);},LG:function(
C){if(this.Hx===C)return;this.Hx=C;B.pe([this,this.AK],this);},LH:function(C){if(
this.Hy===C)return;this.Hy=C;B.pe([this,this.AK],this);},LI:function(C){if(C<0)C=
0;if(this.Hz===C)return;this.Hz=C;B.pe([this,this.AK],this);},LJ:function(C){if(
C<0)C=0;if(this.HA===C)return;this.HA=C;B.pe([this,this.AK],this);},LK:function(
C){if(this.HB===C)return;this.HB=C;B.pe([this,this.AK],this);},LL:function(C){if(
this.HC===C)return;this.HC=C;B.pe([this,this.AK],this);},LM:function(C){if(this.
I4===C)return;this.I4=C;B.pe([this,this.AK],this);},Ew:function(C){if(this.IA===
C)return;this.IA=C;B.pe([this,this.AK],this);},FR:function(C){if(this.ID===C)return;
this.ID=C;B.pe([this,this.AK],this);},Ey:function(C){if(this.IC===C)return;this.
IC=C;B.pe([this,this.AK],this);},Ex:function(C){if(this.IB===C)return;this.IB=C;
B.pe([this,this.AK],this);},JX:function(C){if(this.IE===C)return;this.IE=C;B.pe([
this,this.AK],this);},Lv:function(C){if(this.Ir===C)return;this.Ir=C;B.pe([this,
this.AK],this);},Ly:function(C){if(this.Iu===C)return;this.Iu=C;B.pe([this,this.
AK],this);},Lx:function(C){if(this.It===C)return;this.It=C;B.pe([this,this.AK],this
);},Lw:function(C){if(this.Is===C)return;this.Is=C;B.pe([this,this.AK],this);},JW:
function(C){if(this.Iz===C)return;this.Iz=C;B.pe([this,this.AK],this);},Ez:function(
C){if(this.Gu===C)return;this.Gu=C;B.pe([this,this.AK],this);},Lq:function(C){if(
this.Iq===C)return;this.Iq=C;B.pe([this,this.AK],this);},Gy:function(C){if(this.
Im===C)return;this.Im=C;B.pe([this,this.AK],this);},Do:function(C){if(this.Ii===
C)return;this.Ii=C;B.pe([this,this.AK],this);},Dr:function(C){if(this.Il===C)return;
this.Il=C;B.pe([this,this.AK],this);},Dq:function(C){if(this.Ik===C)return;this.
Ik=C;B.pe([this,this.AK],this);},Dp:function(C){if(this.Ij===C)return;this.Ij=C;
B.pe([this,this.AK],this);},Dk:function(C){if(this.Gk===C)return;this.Gk=C;B.pe([
this,this.AK],this);},Dn:function(C){if(this.Gn===C)return;this.Gn=C;B.pe([this,
this.AK],this);},Dm:function(C){if(this.Gm===C)return;this.Gm=C;B.pe([this,this.
AK],this);},Dl:function(C){if(this.Gl===C)return;this.Gl=C;B.pe([this,this.AK],this
);},_Init:function(aArg){D.HD._Init.call(this,aArg);this.__proto__=D.CD;},_Mark:
function(E){var A;D.HD._Mark.call(this,E);if((A=this.Gu)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Gk)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Gn)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Gm)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Gl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Hw)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"WidgetSet::PushButtonConfig"};D.HD={AK:function(
AV){B.we(this,0);},_Init:function(aArg){this.__proto__=D.HD;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"WidgetSet::WidgetConfig"};D.Aw={C1:null,B1:null,C0:null,B_:null,Bz:null,Ck:null
,FI:null,Ab:null,AR:null,Cc:null,A0:null,Bl:null,Gt:B.jV,JC:0,FJ:-1,FL:-1,Hn:-1,
FK:-1,NC:0,O:function(C){var A;if(!!this.Ab){var Ki=[C[2]-C[0],C[3]-C[1]];var En=
Ki;if(En[0]<0)En=[0,En[1]];if(En[1]<0)En=[En[0],0];var B2=B.abe(En,Ki);if(!!B2[0
]){var A6=((this.C7&0x4)===0x4);var A7=((this.C7&0x8)===0x8);if(A6&&!A7)C=B.abN(
C,C[2]+B2[0]);else if(!A6&&A7)C=[].concat(C[0]-B2[0],C.slice(1,4));else{C=[].concat(
C[0]-((B2[0]/2)|0),C.slice(1,4));C=B.abN(C,C[0]+En[0]);}}if(!!B2[1]){var A8=((this.
C7&0x10)===0x10);var A5=((this.C7&0x20)===0x20);if(A8&&!A5)C=[].concat(C.slice(0
,3),C[3]+B2[1]);else if(!A8&&A5)C=B.abP(C,C[1]-B2[1]);else{C=B.abP(C,C[1]-((B2[1
]/2)|0));C=[].concat(C.slice(0,3),C[1]+En[1]);}}}B.Core.Am.O.call(this,C);},I5:function(
HI){var A;B.Core.Am.I5.call(this,HI);var Ku=!!this.Ab&&(((!!this.Ab.Gl||!!this.Ab.
Gm)||!!this.Ab.Gn)||!!this.Ab.Gk);var Kv=!!this.FI;var Ky=(!!this.Ab&&!!this.Gt)&&
!!this.Ab.Gu;var Kw=!!this.Ab&&(!!this.Ab.HC||!!this.Ab.HB);var Kt=(!!this.Ab&&(
!!this.Ab.Hy||!!this.Ab.Hx))&&(!!this.Ab.HA||!!this.Ab.Hz);var Kx=!!this.Ab&&(!!
this.Ab.Hb||!!this.Ab.Hc);var Y=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var G$=AI;var
HJ=AI;var Dc;if(Ku&&!!!this.Ck){this.Ck=B._NewObject(B.acg.Io,0);this.U(this.Ck,
0);}else if(!Ku&&!!this.Ck){this.FX(this.Ck);this.Ck=null;}if(Kv&&!!!this.Bz){this.
Bz=B._NewObject(B.acg.Bj,0);this.U(this.Bz,0);}else if(!Kv&&!!this.Bz){this.FX(this.
Bz);this.Bz=null;}if(Ky&&!!!this.B_){this.B_=B._NewObject(B.acg.Text,0);this.U(this.
B_,0);this.B_.Lo(true);}else if(!Ky&&!!this.B_){this.FX(this.B_);this.B_=null;}if(
Kw&&!!!this.C0){this.C0=B._NewObject(B.acg.EA,0);this.U(this.C0,0);}else if(!Kw&&
!!this.C0){this.FX(this.C0);this.C0=null;}if(Kt&&!!!this.B1){this.B1=B._NewObject(
B.acg.AT,0);this.U(this.B1,0);}else if(!Kt&&!!this.B1){this.FX(this.B1);this.B1=
null;}if(Kx&&!!!this.C1){this.C1=B._NewObject(B.acg.EA,0);this.U(this.C1,0);}else
if(!Kx&&!!this.C1){this.FX(this.C1);this.C1=null;}if(!((HI&0x10)===0x10))Dc=0x44;
else if(((this.Bl.Down&&this.Bl.Et)||this.A0.Down)||this.Cc.BR)Dc=0x41;else if(((
HI&0x40)===0x40))Dc=0x46;else Dc=0x45;this.NC=Dc;if(!!this.B1||!!this.C0){var Aq=
this.Ab.I4;var I=Y;var B$;B$=AG;if(((Aq&0x1)===0x1))B$=[B$[0]+(I[2]-I[0]),B$[1]];
if(((Aq&0x2)===0x2))B$=[B$[0],B$[1]+(I[3]-I[1])];B$=B.aaD(B$,AG);var A6=((Aq&0x4
)===0x4);var A7=((Aq&0x8)===0x8);var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20
);if(A6&&!A7)I=B.abN(I,I[0]+B$[0]);else if(!A6&&A7)I=[].concat(I[2]-B$[0],I.slice(
1,4));else{I=[].concat((((I[2]-I[0])/2)|0)-((B$[0]/2)|0),I.slice(1,4));I=B.abN(I
,I[0]+B$[0]);}if(A8&&!A5)I=[].concat(I.slice(0,3),I[1]+B$[1]);else if(!A8&&A5)I=
B.abP(I,I[3]-B$[1]);else{I=B.abP(I,(((I[3]-I[1])/2)|0)-((B$[1]/2)|0));I=[].concat(
I.slice(0,3),I[1]+B$[1]);}G$=I;}if(!!this.C1){var Aq=this.Ab.H5;var I=Y;var B0;B0=
AG;if(((Aq&0x1)===0x1))B0=[B0[0]+(I[2]-I[0]),B0[1]];if(((Aq&0x2)===0x2))B0=[B0[0
],B0[1]+(I[3]-I[1])];B0=B.aaD(B0,AG);var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===
0x8);var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);if(A6&&!A7)I=B.abN(I,I[
0]+B0[0]);else if(!A6&&A7)I=[].concat(I[2]-B0[0],I.slice(1,4));else{I=[].concat((((
I[2]-I[0])/2)|0)-((B0[0]/2)|0),I.slice(1,4));I=B.abN(I,I[0]+B0[0]);}if(A8&&!A5)I=[
].concat(I.slice(0,3),I[1]+B0[1]);else if(!A8&&A5)I=B.abP(I,I[3]-B0[1]);else{I=B.
abP(I,(((I[3]-I[1])/2)|0)-((B0[1]/2)|0));I=[].concat(I.slice(0,3),I[1]+B0[1]);}HJ=
I;}if(!!this.B1){var BI;var width;switch(Dc){case 0x41:{BI=this.Ab.Hx;width=this.
Ab.Hz;}break;case 0x44:case 0x46:{BI=0x00000000;width=0;}break;default:{BI=this.
Ab.Hy;width=this.Ab.HA;}}this.B1.O(G$);this.B1.DE(0);this.B1.Bv(BI);this.B1.GB(width
);this.B1.CO(41);}if(!!this.C0){var I=G$;var BI;switch(Dc){case 0x41:BI=this.Ab.
HB;break;case 0x44:case 0x46:BI=0x00000000;break;default:BI=this.Ab.HC;}if((!!this.
B1&&!!this.B1.Width)&&(((this.B1.BF>>24)&0xFF)===255))I=B.aaT(I,CF);this.C0.O(I);
this.C0.DE(0);this.C0.Bv(BI);this.C0.CO(40);}if(!!this.C1){var I=HJ;var BI;switch(
Dc){case 0x44:case 0x41:BI=0x00000000;break;case 0x46:BI=this.Ab.Hc;break;default:
BI=this.Ab.Hb;}this.C1.O(I);this.C1.DE(0);this.C1.Bv(BI);this.C1.CO(93);}if(!!this.
Ck){var bitmap;var Bp;var Aq=this.Ab.Im;var I=[Y[0],Y[1],Y[2],Y[3]];switch(Dc){case
0x44:{bitmap=this.Ab.Gm;Bp=this.Ab.Ik;}break;case 0x41:{bitmap=this.Ab.Gk;Bp=this.
Ab.Ii;}break;case 0x46:{bitmap=this.Ab.Gn;Bp=this.Ab.Il;}break;default:{bitmap=this.
Ab.Gl;Bp=this.Ab.Ij;}}this.Ck.Fd(Bp<0);this.Ck.Bv(0xFFFFFFFF);if(Bp<0)Bp=0;if(!!
bitmap&&!((Aq&0x1)===0x1)){var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===0x8);var AC=
bitmap.FrameSize[0];if(A6&&!A7)I=B.abN(I,I[0]+AC);else if(!A6&&A7)I=[].concat(I[
2]-AC,I.slice(1,4));else{I=[].concat(I[0]+((((I[2]-I[0])/2)|0)-((AC/2)|0)),I.slice(
1,4));I=B.abN(I,I[0]+AC);}}if(!!bitmap&&!((Aq&0x2)===0x2)){var A8=((Aq&0x10)===0x10
);var A5=((Aq&0x20)===0x20);var AB=bitmap.FrameSize[1];if(A8&&!A5)I=[].concat(I.
slice(0,3),I[1]+AB);else if(!A8&&A5)I=B.abP(I,I[3]-AB);else{I=B.abP(I,I[1]+((((I[
3]-I[1])/2)|0)-((AB/2)|0)));I=[].concat(I.slice(0,3),I[1]+AB);}}this.Ck.Hv(Bp);this.
Ck.Bd(bitmap);this.Ck.O(I);this.Ck.CO(16);}if(!!this.Bz&&!!this.Ab){var Bp;switch(
Dc){case 0x44:Bp=this.Hn;break;case 0x41:Bp=this.FJ;break;case 0x46:Bp=this.FL;break;
default:Bp=this.FK;}this.Bz.Fd(Bp<0);if(Bp<0)Bp=0;this.Bz.O([Y[0]+this.Ab.Is,Y[1
]+this.Ab.Iu,Y[2]-this.Ab.It,Y[3]-this.Ab.Ir]);this.Bz.Fc(this.Ab.Iq);this.Bz.Bd(
this.FI);this.Bz.Hv(Bp);this.Bz.Bv(0xFFFFFFFF);this.Bz.CO(59);}else if(!!this.Bz
){var Bp;switch(Dc){case 0x44:Bp=this.Hn;break;case 0x41:Bp=this.FJ;break;case 0x46:
Bp=this.FL;break;default:Bp=this.FK;}this.Bz.O(Y);this.Bz.Fc(0x12);this.Bz.Bd(this.
FI);this.Bz.Hv(Bp);this.Bz.Bv(0xFFFFFFFF);this.Bz.CO(59);}if(!!this.B_){var BI;switch(
Dc){case 0x44:BI=this.Ab.IC;break;case 0x41:BI=this.Ab.IA;break;case 0x46:BI=this.
Ab.ID;break;default:BI=this.Ab.IB;}this.B_.O([Y[0],Y[1],Y[2],Y[3]-this.Ab.IE]);this.
B_.Fc(this.Ab.Iz);this.B_.IU(true);this.B_.Ln(true);this.B_.Hu(this.Ab.Gu);this.
B_.Ds(this.Gt);this.B_.Bv(BI);this.B_.CO(76);}if(!(!(A=G$)[0]&&!A[1]&&!A[2]&&!A[
3])||!(!(A=HJ)[0]&&!A[1]&&!A[2]&&!A[3])){var I=B.wC(G$,HJ);if(!!this.Ck)I=B.wC(I
,this.Ck.GetExtent());this.ExtendClipping(Math.max(-I[0],0),Math.max(I[2]-Y[2],0
),Math.max(-I[1],0),Math.max(I[3]-Y[3],0));}else this.ExtendClipping(0,0,0,0);if(
!!this.Ab)B.pe(this.Ab.Hw,this);},JB:function(AV){var KA=this.A0.E$;if(!!this.Ab
)this.A0.E$=this.Ab.KeyCode;else this.A0.E$=149;if(!KA&&!!this.A0.E$)this.AQ(0x4
,0x0);if(!!KA&&!this.A0.E$)this.AQ(0x0,0x4);if(!!this.Ab)this.O(this.M);this.CC(
);},Nv:function(AV){this.CC();B.pe(this.AR,this);},Nz:function(AV){var Fx=0;if(!
!this.Ab)Fx=50;this.Bl.BN(true);this.CC();if(((this.A0.AD-this.JC)|0)>=Fx)B.pe(this.
AR,this);else{this.Cc.Hs(Fx-((this.A0.AD-this.JC)|0));this.Cc.BN(true);}},Nx:function(
AV){this.Bl.BN(false);this.CC();if(this.Cc.BR){B.pe(this.AR,this);this.Cc.BN(false
);}this.JC=this.A0.AD;},Nw:function(AV){this.CC();},Nu:function(AV){this.CC();},
NA:function(AV){var Fx=0;if(!!this.Ab)Fx=50;this.A0.BR=true;if(!this.Bl.Et)return;
if(this.Bl.C3)return;if(this.Bl.BZ>=Fx)B.pe(this.AR,this);else{this.Cc.Hs(Fx-this.
Bl.BZ);this.Cc.BN(true);}},Ny:function(AV){this.A0.BR=false;if(this.Cc.BR){B.pe(
this.AR,this);this.Cc.BN(false);}},Ls:function(C){if(this.FJ===C)return;this.FJ=
C;this.CC();},Lu:function(C){if(this.FL===C)return;this.FL=C;this.CC();},Lt:function(
C){if(this.FK===C)return;this.FK=C;this.CC();},Lr:function(C){if((((C===this.FK)&&(
C===this.Hn))&&(C===this.FL))&&(C===this.FJ))return;this.FK=C;this.Hn=C;this.FL=
C;this.FJ=C;this.CC();},Lp:function(C){if(this.FI===C)return;this.FI=C;this.CC();
},A3:function(C){if(this.Gt===C)return;this.Gt=C;this.CC();},A2:function(C){if(this.
Ab===C)return;if(!!this.Ab)B.z9([this,this.JB],this.Ab,0);this.Ab=C;if(!!C)B.zV([
this,this.JB],C,0);B.pe([this,this.JB],this);},_Init:function(aArg){B.Core.Am._Init.
call(this,aArg);B.Core.Timer._Init.call(this.Cc={L:this},0);B.Core.FM._Init.call(
this.A0={L:this},0);B.Core.I1._Init.call(this.Bl={L:this},0);this.__proto__=D.Aw;
this.O(DI);this.Cc.GA(0);this.Cc.Hs(50);this.A0.E$=149;this.Bl.IO(0x3F);this.Bl.
IT(Ec);this.Bl.IS(Ed);this.Bl.IR(Ff);this.Bl.IQ(AG);this.Bl.LF(16);this.Bl.Lz(100
);this.U(this.Bl,0);this.Cc.FS=[this,this.Nv];this.A0.Fb=[this,this.Nz];this.A0.
Ev=[this,this.Nx];this.Bl.IL=[this,this.Nw];this.Bl.IK=[this,this.Nu];this.Bl.Fb=[
this,this.NA];this.Bl.Ev=[this,this.Ny];},_Done:function(){this.__proto__=B.Core.
Am;this.Cc._Done();this.A0._Done();this.Bl._Done();B.Core.Am._Done.call(this);},
_ReInit:function(){B.Core.Am._ReInit.call(this);this.Cc._ReInit();this.A0._ReInit(
);this.Bl._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=
this.C1)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B1)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.C0)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B_)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Bz)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Ck)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FI)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Ab)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AR)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cc)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.A0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bl)._cycle!=E)
A._Mark(A._cycle=E);},_className:"WidgetSet::PushButton"};
D._Init=function(){D.CD.__proto__=D.HD;D.Aw.__proto__=B.Core.Am;};D._ReInit=function(
){};D.Cu=function(E){};return D;})();

/* Embedded Wizard */