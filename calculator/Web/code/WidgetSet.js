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
Ed=[150,50];var Fg=[150,0];
D.CD={Gu:null,Gk:null,Gn:null,Gm:null,Gl:null,Hw:null,Hd:0,Hc:0,H5:0x3F,Hx:0,Hy:0
,Hz:0,HA:0,HB:0,HC:0,I5:0x3F,IB:0xFF000000,IE:0xFF000000,ID:0xFF000000,IC:0xFF000000
,IF:0,Is:0,Iv:0,Iu:0,It:0,IA:0x12,Ir:0x12,In:0x3F,Ij:-1,Im:-1,Il:-1,Ik:-1,KeyCode:
149,LC:function(C){if(B.aa0(this.Hw,C))return;this.Hw=C;B.pe([this,this.AK],this
);},C9:function(C){if(this.KeyCode===C)return;this.KeyCode=C;B.pe([this,this.AK]
,this);},Gw:function(C){if(this.Hd===C)return;this.Hd=C;B.pe([this,this.AK],this
);},Gv:function(C){if(this.Hc===C)return;this.Hc=C;B.pe([this,this.AK],this);},Gx:
function(C){if(this.H5===C)return;this.H5=C;B.pe([this,this.AK],this);},LH:function(
C){if(this.Hx===C)return;this.Hx=C;B.pe([this,this.AK],this);},LI:function(C){if(
this.Hy===C)return;this.Hy=C;B.pe([this,this.AK],this);},LJ:function(C){if(C<0)C=
0;if(this.Hz===C)return;this.Hz=C;B.pe([this,this.AK],this);},LK:function(C){if(
C<0)C=0;if(this.HA===C)return;this.HA=C;B.pe([this,this.AK],this);},LL:function(
C){if(this.HB===C)return;this.HB=C;B.pe([this,this.AK],this);},LM:function(C){if(
this.HC===C)return;this.HC=C;B.pe([this,this.AK],this);},LN:function(C){if(this.
I5===C)return;this.I5=C;B.pe([this,this.AK],this);},Ex:function(C){if(this.IB===
C)return;this.IB=C;B.pe([this,this.AK],this);},FS:function(C){if(this.IE===C)return;
this.IE=C;B.pe([this,this.AK],this);},Ez:function(C){if(this.ID===C)return;this.
ID=C;B.pe([this,this.AK],this);},Ey:function(C){if(this.IC===C)return;this.IC=C;
B.pe([this,this.AK],this);},JY:function(C){if(this.IF===C)return;this.IF=C;B.pe([
this,this.AK],this);},Lw:function(C){if(this.Is===C)return;this.Is=C;B.pe([this,
this.AK],this);},Lz:function(C){if(this.Iv===C)return;this.Iv=C;B.pe([this,this.
AK],this);},Ly:function(C){if(this.Iu===C)return;this.Iu=C;B.pe([this,this.AK],this
);},Lx:function(C){if(this.It===C)return;this.It=C;B.pe([this,this.AK],this);},JX:
function(C){if(this.IA===C)return;this.IA=C;B.pe([this,this.AK],this);},EA:function(
C){if(this.Gu===C)return;this.Gu=C;B.pe([this,this.AK],this);},Lr:function(C){if(
this.Ir===C)return;this.Ir=C;B.pe([this,this.AK],this);},Gy:function(C){if(this.
In===C)return;this.In=C;B.pe([this,this.AK],this);},Dp:function(C){if(this.Ij===
C)return;this.Ij=C;B.pe([this,this.AK],this);},Ds:function(C){if(this.Im===C)return;
this.Im=C;B.pe([this,this.AK],this);},Dr:function(C){if(this.Il===C)return;this.
Il=C;B.pe([this,this.AK],this);},Dq:function(C){if(this.Ik===C)return;this.Ik=C;
B.pe([this,this.AK],this);},Dl:function(C){if(this.Gk===C)return;this.Gk=C;B.pe([
this,this.AK],this);},Do:function(C){if(this.Gn===C)return;this.Gn=C;B.pe([this,
this.AK],this);},Dn:function(C){if(this.Gm===C)return;this.Gm=C;B.pe([this,this.
AK],this);},Dm:function(C){if(this.Gl===C)return;this.Gl=C;B.pe([this,this.AK],this
);},_Init:function(aArg){D.HD._Init.call(this,aArg);this.__proto__=D.CD;},_Mark:
function(E){var A;D.HD._Mark.call(this,E);if((A=this.Gu)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Gk)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Gn)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Gm)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Gl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Hw)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"WidgetSet::PushButtonConfig"};D.HD={AK:function(
AV){B.we(this,0);},_Init:function(aArg){this.__proto__=D.HD;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"WidgetSet::WidgetConfig"};D.Aw={C2:null,B2:null,C1:null,B$:null,Bz:null,Cl:null
,FJ:null,Ab:null,AR:null,Cd:null,A0:null,Bm:null,Gt:B.jV,JD:0,FK:-1,FM:-1,Ho:-1,
FL:-1,NE:0,O:function(C){var A;if(!!this.Ab){var Kj=[C[2]-C[0],C[3]-C[1]];var En=
Kj;if(En[0]<0)En=[0,En[1]];if(En[1]<0)En=[En[0],0];var B3=B.abe(En,Kj);if(!!B3[0
]){var A6=((this.C8&0x4)===0x4);var A7=((this.C8&0x8)===0x8);if(A6&&!A7)C=B.abN(
C,C[2]+B3[0]);else if(!A6&&A7)C=[].concat(C[0]-B3[0],C.slice(1,4));else{C=[].concat(
C[0]-((B3[0]/2)|0),C.slice(1,4));C=B.abN(C,C[0]+En[0]);}}if(!!B3[1]){var A8=((this.
C8&0x10)===0x10);var A5=((this.C8&0x20)===0x20);if(A8&&!A5)C=[].concat(C.slice(0
,3),C[3]+B3[1]);else if(!A8&&A5)C=B.abP(C,C[1]-B3[1]);else{C=B.abP(C,C[1]-((B3[1
]/2)|0));C=[].concat(C.slice(0,3),C[1]+En[1]);}}}B.Core.Am.O.call(this,C);},I6:function(
HI){var A;B.Core.Am.I6.call(this,HI);var Kv=!!this.Ab&&(((!!this.Ab.Gl||!!this.Ab.
Gm)||!!this.Ab.Gn)||!!this.Ab.Gk);var Kw=!!this.FJ;var Kz=(!!this.Ab&&!!this.Gt)&&
!!this.Ab.Gu;var Kx=!!this.Ab&&(!!this.Ab.HC||!!this.Ab.HB);var Ku=(!!this.Ab&&(
!!this.Ab.Hy||!!this.Ab.Hx))&&(!!this.Ab.HA||!!this.Ab.Hz);var Ky=!!this.Ab&&(!!
this.Ab.Hc||!!this.Ab.Hd);var Y=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var Ha=AI;var
HJ=AI;var Dd;if(Kv&&!!!this.Cl){this.Cl=B._NewObject(B.acg.Ip,0);this.U(this.Cl,
0);}else if(!Kv&&!!this.Cl){this.FY(this.Cl);this.Cl=null;}if(Kw&&!!!this.Bz){this.
Bz=B._NewObject(B.acg.Bk,0);this.U(this.Bz,0);}else if(!Kw&&!!this.Bz){this.FY(this.
Bz);this.Bz=null;}if(Kz&&!!!this.B$){this.B$=B._NewObject(B.acg.Text,0);this.U(this.
B$,0);this.B$.Lp(true);}else if(!Kz&&!!this.B$){this.FY(this.B$);this.B$=null;}if(
Kx&&!!!this.C1){this.C1=B._NewObject(B.acg.EB,0);this.U(this.C1,0);}else if(!Kx&&
!!this.C1){this.FY(this.C1);this.C1=null;}if(Ku&&!!!this.B2){this.B2=B._NewObject(
B.acg.AT,0);this.U(this.B2,0);}else if(!Ku&&!!this.B2){this.FY(this.B2);this.B2=
null;}if(Ky&&!!!this.C2){this.C2=B._NewObject(B.acg.EB,0);this.U(this.C2,0);}else
if(!Ky&&!!this.C2){this.FY(this.C2);this.C2=null;}if(!((HI&0x10)===0x10))Dd=0x44;
else if(((this.Bm.Down&&this.Bm.Eu)||this.A0.Down)||this.Cd.BR)Dd=0x41;else if(((
HI&0x40)===0x40))Dd=0x46;else Dd=0x45;this.NE=Dd;if(!!this.B2||!!this.C1){var Aq=
this.Ab.I5;var I=Y;var Ca;Ca=AG;if(((Aq&0x1)===0x1))Ca=[Ca[0]+(I[2]-I[0]),Ca[1]];
if(((Aq&0x2)===0x2))Ca=[Ca[0],Ca[1]+(I[3]-I[1])];Ca=B.aaD(Ca,AG);var A6=((Aq&0x4
)===0x4);var A7=((Aq&0x8)===0x8);var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20
);if(A6&&!A7)I=B.abN(I,I[0]+Ca[0]);else if(!A6&&A7)I=[].concat(I[2]-Ca[0],I.slice(
1,4));else{I=[].concat((((I[2]-I[0])/2)|0)-((Ca[0]/2)|0),I.slice(1,4));I=B.abN(I
,I[0]+Ca[0]);}if(A8&&!A5)I=[].concat(I.slice(0,3),I[1]+Ca[1]);else if(!A8&&A5)I=
B.abP(I,I[3]-Ca[1]);else{I=B.abP(I,(((I[3]-I[1])/2)|0)-((Ca[1]/2)|0));I=[].concat(
I.slice(0,3),I[1]+Ca[1]);}Ha=I;}if(!!this.C2){var Aq=this.Ab.H5;var I=Y;var B1;B1=
AG;if(((Aq&0x1)===0x1))B1=[B1[0]+(I[2]-I[0]),B1[1]];if(((Aq&0x2)===0x2))B1=[B1[0
],B1[1]+(I[3]-I[1])];B1=B.aaD(B1,AG);var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===
0x8);var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);if(A6&&!A7)I=B.abN(I,I[
0]+B1[0]);else if(!A6&&A7)I=[].concat(I[2]-B1[0],I.slice(1,4));else{I=[].concat((((
I[2]-I[0])/2)|0)-((B1[0]/2)|0),I.slice(1,4));I=B.abN(I,I[0]+B1[0]);}if(A8&&!A5)I=[
].concat(I.slice(0,3),I[1]+B1[1]);else if(!A8&&A5)I=B.abP(I,I[3]-B1[1]);else{I=B.
abP(I,(((I[3]-I[1])/2)|0)-((B1[1]/2)|0));I=[].concat(I.slice(0,3),I[1]+B1[1]);}HJ=
I;}if(!!this.B2){var BI;var width;switch(Dd){case 0x41:{BI=this.Ab.Hx;width=this.
Ab.Hz;}break;case 0x44:case 0x46:{BI=0x00000000;width=0;}break;default:{BI=this.
Ab.Hy;width=this.Ab.HA;}}this.B2.O(Ha);this.B2.DE(0);this.B2.Be(BI);this.B2.GC(width
);this.B2.CO(41);}if(!!this.C1){var I=Ha;var BI;switch(Dd){case 0x41:BI=this.Ab.
HB;break;case 0x44:case 0x46:BI=0x00000000;break;default:BI=this.Ab.HC;}if((!!this.
B2&&!!this.B2.Width)&&(((this.B2.BF>>24)&0xFF)===255))I=B.aaT(I,CF);this.C1.O(I);
this.C1.DE(0);this.C1.Be(BI);this.C1.CO(40);}if(!!this.C2){var I=HJ;var BI;switch(
Dd){case 0x44:case 0x41:BI=0x00000000;break;case 0x46:BI=this.Ab.Hd;break;default:
BI=this.Ab.Hc;}this.C2.O(I);this.C2.DE(0);this.C2.Be(BI);this.C2.CO(93);}if(!!this.
Cl){var bitmap;var Bq;var Aq=this.Ab.In;var I=[Y[0],Y[1],Y[2],Y[3]];switch(Dd){case
0x44:{bitmap=this.Ab.Gm;Bq=this.Ab.Il;}break;case 0x41:{bitmap=this.Ab.Gk;Bq=this.
Ab.Ij;}break;case 0x46:{bitmap=this.Ab.Gn;Bq=this.Ab.Im;}break;default:{bitmap=this.
Ab.Gl;Bq=this.Ab.Ik;}}this.Cl.Fe(Bq<0);this.Cl.Be(0xFFFFFFFF);if(Bq<0)Bq=0;if(!!
bitmap&&!((Aq&0x1)===0x1)){var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===0x8);var AC=
bitmap.FrameSize[0];if(A6&&!A7)I=B.abN(I,I[0]+AC);else if(!A6&&A7)I=[].concat(I[
2]-AC,I.slice(1,4));else{I=[].concat(I[0]+((((I[2]-I[0])/2)|0)-((AC/2)|0)),I.slice(
1,4));I=B.abN(I,I[0]+AC);}}if(!!bitmap&&!((Aq&0x2)===0x2)){var A8=((Aq&0x10)===0x10
);var A5=((Aq&0x20)===0x20);var AB=bitmap.FrameSize[1];if(A8&&!A5)I=[].concat(I.
slice(0,3),I[1]+AB);else if(!A8&&A5)I=B.abP(I,I[3]-AB);else{I=B.abP(I,I[1]+((((I[
3]-I[1])/2)|0)-((AB/2)|0)));I=[].concat(I.slice(0,3),I[1]+AB);}}this.Cl.Hv(Bq);this.
Cl.Bd(bitmap);this.Cl.O(I);this.Cl.CO(16);}if(!!this.Bz&&!!this.Ab){var Bq;switch(
Dd){case 0x44:Bq=this.Ho;break;case 0x41:Bq=this.FK;break;case 0x46:Bq=this.FM;break;
default:Bq=this.FL;}this.Bz.Fe(Bq<0);if(Bq<0)Bq=0;this.Bz.O([Y[0]+this.Ab.It,Y[1
]+this.Ab.Iv,Y[2]-this.Ab.Iu,Y[3]-this.Ab.Is]);this.Bz.Fd(this.Ab.Ir);this.Bz.Bd(
this.FJ);this.Bz.Hv(Bq);this.Bz.Be(0xFFFFFFFF);this.Bz.CO(59);}else if(!!this.Bz
){var Bq;switch(Dd){case 0x44:Bq=this.Ho;break;case 0x41:Bq=this.FK;break;case 0x46:
Bq=this.FM;break;default:Bq=this.FL;}this.Bz.O(Y);this.Bz.Fd(0x12);this.Bz.Bd(this.
FJ);this.Bz.Hv(Bq);this.Bz.Be(0xFFFFFFFF);this.Bz.CO(59);}if(!!this.B$){var BI;switch(
Dd){case 0x44:BI=this.Ab.ID;break;case 0x41:BI=this.Ab.IB;break;case 0x46:BI=this.
Ab.IE;break;default:BI=this.Ab.IC;}this.B$.O([Y[0],Y[1],Y[2],Y[3]-this.Ab.IF]);this.
B$.Fd(this.Ab.IA);this.B$.IV(true);this.B$.Lo(true);this.B$.Gz(this.Ab.Gu);this.
B$.CP(this.Gt);this.B$.Be(BI);this.B$.CO(76);}if(!(!(A=Ha)[0]&&!A[1]&&!A[2]&&!A[
3])||!(!(A=HJ)[0]&&!A[1]&&!A[2]&&!A[3])){var I=B.wC(Ha,HJ);if(!!this.Cl)I=B.wC(I
,this.Cl.GetExtent());this.ExtendClipping(Math.max(-I[0],0),Math.max(I[2]-Y[2],0
),Math.max(-I[1],0),Math.max(I[3]-Y[3],0));}else this.ExtendClipping(0,0,0,0);if(
!!this.Ab)B.pe(this.Ab.Hw,this);},JC:function(AV){var KB=this.A0.Fa;if(!!this.Ab
)this.A0.Fa=this.Ab.KeyCode;else this.A0.Fa=149;if(!KB&&!!this.A0.Fa)this.AQ(0x4
,0x0);if(!!KB&&!this.A0.Fa)this.AQ(0x0,0x4);if(!!this.Ab)this.O(this.M);this.CC(
);},Nx:function(AV){this.CC();B.pe(this.AR,this);},NB:function(AV){var Fy=0;if(!
!this.Ab)Fy=50;this.Bm.BN(true);this.CC();if(((this.A0.AD-this.JD)|0)>=Fy)B.pe(this.
AR,this);else{this.Cd.Ht(Fy-((this.A0.AD-this.JD)|0));this.Cd.BN(true);}},Nz:function(
AV){this.Bm.BN(false);this.CC();if(this.Cd.BR){B.pe(this.AR,this);this.Cd.BN(false
);}this.JD=this.A0.AD;},Ny:function(AV){this.CC();},Nw:function(AV){this.CC();},
NC:function(AV){var Fy=0;if(!!this.Ab)Fy=50;this.A0.BR=true;if(!this.Bm.Eu)return;
if(this.Bm.C4)return;if(this.Bm.B0>=Fy)B.pe(this.AR,this);else{this.Cd.Ht(Fy-this.
Bm.B0);this.Cd.BN(true);}},NA:function(AV){this.A0.BR=false;if(this.Cd.BR){B.pe(
this.AR,this);this.Cd.BN(false);}},Lt:function(C){if(this.FK===C)return;this.FK=
C;this.CC();},Lv:function(C){if(this.FM===C)return;this.FM=C;this.CC();},Lu:function(
C){if(this.FL===C)return;this.FL=C;this.CC();},Ls:function(C){if((((C===this.FL)&&(
C===this.Ho))&&(C===this.FM))&&(C===this.FK))return;this.FL=C;this.Ho=C;this.FM=
C;this.FK=C;this.CC();},Lq:function(C){if(this.FJ===C)return;this.FJ=C;this.CC();
},A3:function(C){if(this.Gt===C)return;this.Gt=C;this.CC();},A2:function(C){if(this.
Ab===C)return;if(!!this.Ab)B.z9([this,this.JC],this.Ab,0);this.Ab=C;if(!!C)B.zV([
this,this.JC],C,0);B.pe([this,this.JC],this);},_Init:function(aArg){B.Core.Am._Init.
call(this,aArg);B.Core.Timer._Init.call(this.Cd={L:this},0);B.Core.FN._Init.call(
this.A0={L:this},0);B.Core.I2._Init.call(this.Bm={L:this},0);this.__proto__=D.Aw;
this.O(DI);this.Cd.GB(0);this.Cd.Ht(50);this.A0.Fa=149;this.Bm.IP(0x3F);this.Bm.
IU(Ec);this.Bm.IT(Ed);this.Bm.IS(Fg);this.Bm.IR(AG);this.Bm.LG(16);this.Bm.LA(100
);this.U(this.Bm,0);this.Cd.FT=[this,this.Nx];this.A0.Fc=[this,this.NB];this.A0.
Ew=[this,this.Nz];this.Bm.IM=[this,this.Ny];this.Bm.IL=[this,this.Nw];this.Bm.Fc=[
this,this.NC];this.Bm.Ew=[this,this.NA];},_Done:function(){this.__proto__=B.Core.
Am;this.Cd._Done();this.A0._Done();this.Bm._Done();B.Core.Am._Done.call(this);},
_ReInit:function(){B.Core.Am._ReInit.call(this);this.Cd._ReInit();this.A0._ReInit(
);this.Bm._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=
this.C2)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B2)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.C1)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B$)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Bz)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Cl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FJ)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Ab)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AR)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cd)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.A0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bm)._cycle!=E)
A._Mark(A._cycle=E);},_className:"WidgetSet::PushButton"};
D._Init=function(){D.CD.__proto__=D.HD;D.Aw.__proto__=B.Core.Am;};D._ReInit=function(
){};D.Cv=function(E){};return D;})();

/* Embedded Wizard */