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
var AI=[0,0,0,0];var AG=[0,0];var CF=[-1,-1];var DI=[0,0,150,50];var Ed=[0,50];var
Ee=[150,50];var Fg=[150,0];
D.CD={Gv:null,Gl:null,Go:null,Gn:null,Gm:null,Hx:null,Hd:0,Hc:0,H6:0x3F,Hy:0,Hz:0
,HA:0,HB:0,HC:0,HD:0,I5:0x3F,IB:0xFF000000,IE:0xFF000000,ID:0xFF000000,IC:0xFF000000
,IF:0,Is:0,Iv:0,Iu:0,It:0,IA:0x12,Ir:0x12,In:0x3F,Ij:-1,Im:-1,Il:-1,Ik:-1,KeyCode:
149,LB:function(C){if(B.aa0(this.Hx,C))return;this.Hx=C;B.pe([this,this.AK],this
);},C9:function(C){if(this.KeyCode===C)return;this.KeyCode=C;B.pe([this,this.AK]
,this);},Gx:function(C){if(this.Hd===C)return;this.Hd=C;B.pe([this,this.AK],this
);},Gw:function(C){if(this.Hc===C)return;this.Hc=C;B.pe([this,this.AK],this);},Gy:
function(C){if(this.H6===C)return;this.H6=C;B.pe([this,this.AK],this);},LG:function(
C){if(this.Hy===C)return;this.Hy=C;B.pe([this,this.AK],this);},LH:function(C){if(
this.Hz===C)return;this.Hz=C;B.pe([this,this.AK],this);},LI:function(C){if(C<0)C=
0;if(this.HA===C)return;this.HA=C;B.pe([this,this.AK],this);},LJ:function(C){if(
C<0)C=0;if(this.HB===C)return;this.HB=C;B.pe([this,this.AK],this);},LK:function(
C){if(this.HC===C)return;this.HC=C;B.pe([this,this.AK],this);},LL:function(C){if(
this.HD===C)return;this.HD=C;B.pe([this,this.AK],this);},LM:function(C){if(this.
I5===C)return;this.I5=C;B.pe([this,this.AK],this);},Ex:function(C){if(this.IB===
C)return;this.IB=C;B.pe([this,this.AK],this);},FS:function(C){if(this.IE===C)return;
this.IE=C;B.pe([this,this.AK],this);},Ez:function(C){if(this.ID===C)return;this.
ID=C;B.pe([this,this.AK],this);},Ey:function(C){if(this.IC===C)return;this.IC=C;
B.pe([this,this.AK],this);},JY:function(C){if(this.IF===C)return;this.IF=C;B.pe([
this,this.AK],this);},Lv:function(C){if(this.Is===C)return;this.Is=C;B.pe([this,
this.AK],this);},Ly:function(C){if(this.Iv===C)return;this.Iv=C;B.pe([this,this.
AK],this);},Lx:function(C){if(this.Iu===C)return;this.Iu=C;B.pe([this,this.AK],this
);},Lw:function(C){if(this.It===C)return;this.It=C;B.pe([this,this.AK],this);},JX:
function(C){if(this.IA===C)return;this.IA=C;B.pe([this,this.AK],this);},EA:function(
C){if(this.Gv===C)return;this.Gv=C;B.pe([this,this.AK],this);},Lq:function(C){if(
this.Ir===C)return;this.Ir=C;B.pe([this,this.AK],this);},Gz:function(C){if(this.
In===C)return;this.In=C;B.pe([this,this.AK],this);},Do:function(C){if(this.Ij===
C)return;this.Ij=C;B.pe([this,this.AK],this);},Dr:function(C){if(this.Im===C)return;
this.Im=C;B.pe([this,this.AK],this);},Dq:function(C){if(this.Il===C)return;this.
Il=C;B.pe([this,this.AK],this);},Dp:function(C){if(this.Ik===C)return;this.Ik=C;
B.pe([this,this.AK],this);},Dk:function(C){if(this.Gl===C)return;this.Gl=C;B.pe([
this,this.AK],this);},Dn:function(C){if(this.Go===C)return;this.Go=C;B.pe([this,
this.AK],this);},Dm:function(C){if(this.Gn===C)return;this.Gn=C;B.pe([this,this.
AK],this);},Dl:function(C){if(this.Gm===C)return;this.Gm=C;B.pe([this,this.AK],this
);},_Init:function(aArg){D.HE._Init.call(this,aArg);this.__proto__=D.CD;},_Mark:
function(E){var A;D.HE._Mark.call(this,E);if((A=this.Gv)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Gl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Go)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Gn)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Gm)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Hx)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"WidgetSet::PushButtonConfig"};D.HE={AK:function(
AV){B.we(this,0);},_Init:function(aArg){this.__proto__=D.HE;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"WidgetSet::WidgetConfig"};D.Aw={C2:null,B1:null,C1:null,B_:null,Bz:null,Ck:null
,FJ:null,Ab:null,AS:null,Cc:null,A0:null,Bl:null,Gu:B.jV,JD:0,FK:-1,FM:-1,Ho:-1,
FL:-1,NC:0,O:function(C){var A;if(!!this.Ab){var Ki=[C[2]-C[0],C[3]-C[1]];var Eo=
Ki;if(Eo[0]<0)Eo=[0,Eo[1]];if(Eo[1]<0)Eo=[Eo[0],0];var B2=B.abe(Eo,Ki);if(!!B2[0
]){var A6=((this.C8&0x4)===0x4);var A7=((this.C8&0x8)===0x8);if(A6&&!A7)C=B.abN(
C,C[2]+B2[0]);else if(!A6&&A7)C=[].concat(C[0]-B2[0],C.slice(1,4));else{C=[].concat(
C[0]-((B2[0]/2)|0),C.slice(1,4));C=B.abN(C,C[0]+Eo[0]);}}if(!!B2[1]){var A8=((this.
C8&0x10)===0x10);var A5=((this.C8&0x20)===0x20);if(A8&&!A5)C=[].concat(C.slice(0
,3),C[3]+B2[1]);else if(!A8&&A5)C=B.abP(C,C[1]-B2[1]);else{C=B.abP(C,C[1]-((B2[1
]/2)|0));C=[].concat(C.slice(0,3),C[1]+Eo[1]);}}}B.Core.Ai.O.call(this,C);},I6:function(
HJ){var A;B.Core.Ai.I6.call(this,HJ);var Ku=!!this.Ab&&(((!!this.Ab.Gm||!!this.Ab.
Gn)||!!this.Ab.Go)||!!this.Ab.Gl);var Kv=!!this.FJ;var Ky=(!!this.Ab&&!!this.Gu)&&
!!this.Ab.Gv;var Kw=!!this.Ab&&(!!this.Ab.HD||!!this.Ab.HC);var Kt=(!!this.Ab&&(
!!this.Ab.Hz||!!this.Ab.Hy))&&(!!this.Ab.HB||!!this.Ab.HA);var Kx=!!this.Ab&&(!!
this.Ab.Hc||!!this.Ab.Hd);var Y=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var Ha=AI;var
HK=AI;var Dd;if(Ku&&!!!this.Ck){this.Ck=B._NewObject(B.acg.Ip,0);this.U(this.Ck,
0);}else if(!Ku&&!!this.Ck){this.FY(this.Ck);this.Ck=null;}if(Kv&&!!!this.Bz){this.
Bz=B._NewObject(B.acg.Bj,0);this.U(this.Bz,0);}else if(!Kv&&!!this.Bz){this.FY(this.
Bz);this.Bz=null;}if(Ky&&!!!this.B_){this.B_=B._NewObject(B.acg.Text,0);this.U(this.
B_,0);this.B_.Lo(true);}else if(!Ky&&!!this.B_){this.FY(this.B_);this.B_=null;}if(
Kw&&!!!this.C1){this.C1=B._NewObject(B.acg.EB,0);this.U(this.C1,0);}else if(!Kw&&
!!this.C1){this.FY(this.C1);this.C1=null;}if(Kt&&!!!this.B1){this.B1=B._NewObject(
B.acg.AU,0);this.U(this.B1,0);}else if(!Kt&&!!this.B1){this.FY(this.B1);this.B1=
null;}if(Kx&&!!!this.C2){this.C2=B._NewObject(B.acg.EB,0);this.U(this.C2,0);}else
if(!Kx&&!!this.C2){this.FY(this.C2);this.C2=null;}if(!((HJ&0x10)===0x10))Dd=0x44;
else if(((this.Bl.Down&&this.Bl.Eu)||this.A0.Down)||this.Cc.BR)Dd=0x41;else if(((
HJ&0x40)===0x40))Dd=0x46;else Dd=0x45;this.NC=Dd;if(!!this.B1||!!this.C1){var Aq=
this.Ab.I5;var I=Y;var B$;B$=AG;if(((Aq&0x1)===0x1))B$=[B$[0]+(I[2]-I[0]),B$[1]];
if(((Aq&0x2)===0x2))B$=[B$[0],B$[1]+(I[3]-I[1])];B$=B.aaD(B$,AG);var A6=((Aq&0x4
)===0x4);var A7=((Aq&0x8)===0x8);var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20
);if(A6&&!A7)I=B.abN(I,I[0]+B$[0]);else if(!A6&&A7)I=[].concat(I[2]-B$[0],I.slice(
1,4));else{I=[].concat((((I[2]-I[0])/2)|0)-((B$[0]/2)|0),I.slice(1,4));I=B.abN(I
,I[0]+B$[0]);}if(A8&&!A5)I=[].concat(I.slice(0,3),I[1]+B$[1]);else if(!A8&&A5)I=
B.abP(I,I[3]-B$[1]);else{I=B.abP(I,(((I[3]-I[1])/2)|0)-((B$[1]/2)|0));I=[].concat(
I.slice(0,3),I[1]+B$[1]);}Ha=I;}if(!!this.C2){var Aq=this.Ab.H6;var I=Y;var B0;B0=
AG;if(((Aq&0x1)===0x1))B0=[B0[0]+(I[2]-I[0]),B0[1]];if(((Aq&0x2)===0x2))B0=[B0[0
],B0[1]+(I[3]-I[1])];B0=B.aaD(B0,AG);var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===
0x8);var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);if(A6&&!A7)I=B.abN(I,I[
0]+B0[0]);else if(!A6&&A7)I=[].concat(I[2]-B0[0],I.slice(1,4));else{I=[].concat((((
I[2]-I[0])/2)|0)-((B0[0]/2)|0),I.slice(1,4));I=B.abN(I,I[0]+B0[0]);}if(A8&&!A5)I=[
].concat(I.slice(0,3),I[1]+B0[1]);else if(!A8&&A5)I=B.abP(I,I[3]-B0[1]);else{I=B.
abP(I,(((I[3]-I[1])/2)|0)-((B0[1]/2)|0));I=[].concat(I.slice(0,3),I[1]+B0[1]);}HK=
I;}if(!!this.B1){var BI;var width;switch(Dd){case 0x41:{BI=this.Ab.Hy;width=this.
Ab.HA;}break;case 0x44:case 0x46:{BI=0x00000000;width=0;}break;default:{BI=this.
Ab.Hz;width=this.Ab.HB;}}this.B1.O(Ha);this.B1.DE(0);this.B1.Bv(BI);this.B1.GC(width
);this.B1.CP(41);}if(!!this.C1){var I=Ha;var BI;switch(Dd){case 0x41:BI=this.Ab.
HC;break;case 0x44:case 0x46:BI=0x00000000;break;default:BI=this.Ab.HD;}if((!!this.
B1&&!!this.B1.Width)&&(((this.B1.BF>>24)&0xFF)===255))I=B.aaT(I,CF);this.C1.O(I);
this.C1.DE(0);this.C1.Bv(BI);this.C1.CP(40);}if(!!this.C2){var I=HK;var BI;switch(
Dd){case 0x44:case 0x41:BI=0x00000000;break;case 0x46:BI=this.Ab.Hd;break;default:
BI=this.Ab.Hc;}this.C2.O(I);this.C2.DE(0);this.C2.Bv(BI);this.C2.CP(93);}if(!!this.
Ck){var bitmap;var Bp;var Aq=this.Ab.In;var I=[Y[0],Y[1],Y[2],Y[3]];switch(Dd){case
0x44:{bitmap=this.Ab.Gn;Bp=this.Ab.Il;}break;case 0x41:{bitmap=this.Ab.Gl;Bp=this.
Ab.Ij;}break;case 0x46:{bitmap=this.Ab.Go;Bp=this.Ab.Im;}break;default:{bitmap=this.
Ab.Gm;Bp=this.Ab.Ik;}}this.Ck.Fe(Bp<0);this.Ck.Bv(0xFFFFFFFF);if(Bp<0)Bp=0;if(!!
bitmap&&!((Aq&0x1)===0x1)){var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===0x8);var AC=
bitmap.FrameSize[0];if(A6&&!A7)I=B.abN(I,I[0]+AC);else if(!A6&&A7)I=[].concat(I[
2]-AC,I.slice(1,4));else{I=[].concat(I[0]+((((I[2]-I[0])/2)|0)-((AC/2)|0)),I.slice(
1,4));I=B.abN(I,I[0]+AC);}}if(!!bitmap&&!((Aq&0x2)===0x2)){var A8=((Aq&0x10)===0x10
);var A5=((Aq&0x20)===0x20);var AB=bitmap.FrameSize[1];if(A8&&!A5)I=[].concat(I.
slice(0,3),I[1]+AB);else if(!A8&&A5)I=B.abP(I,I[3]-AB);else{I=B.abP(I,I[1]+((((I[
3]-I[1])/2)|0)-((AB/2)|0)));I=[].concat(I.slice(0,3),I[1]+AB);}}this.Ck.Hw(Bp);this.
Ck.Bd(bitmap);this.Ck.O(I);this.Ck.CP(16);}if(!!this.Bz&&!!this.Ab){var Bp;switch(
Dd){case 0x44:Bp=this.Ho;break;case 0x41:Bp=this.FK;break;case 0x46:Bp=this.FM;break;
default:Bp=this.FL;}this.Bz.Fe(Bp<0);if(Bp<0)Bp=0;this.Bz.O([Y[0]+this.Ab.It,Y[1
]+this.Ab.Iv,Y[2]-this.Ab.Iu,Y[3]-this.Ab.Is]);this.Bz.Fd(this.Ab.Ir);this.Bz.Bd(
this.FJ);this.Bz.Hw(Bp);this.Bz.Bv(0xFFFFFFFF);this.Bz.CP(59);}else if(!!this.Bz
){var Bp;switch(Dd){case 0x44:Bp=this.Ho;break;case 0x41:Bp=this.FK;break;case 0x46:
Bp=this.FM;break;default:Bp=this.FL;}this.Bz.O(Y);this.Bz.Fd(0x12);this.Bz.Bd(this.
FJ);this.Bz.Hw(Bp);this.Bz.Bv(0xFFFFFFFF);this.Bz.CP(59);}if(!!this.B_){var BI;switch(
Dd){case 0x44:BI=this.Ab.ID;break;case 0x41:BI=this.Ab.IB;break;case 0x46:BI=this.
Ab.IE;break;default:BI=this.Ab.IC;}this.B_.O([Y[0],Y[1],Y[2],Y[3]-this.Ab.IF]);this.
B_.Fd(this.Ab.IA);this.B_.IV(true);this.B_.Ln(true);this.B_.Hv(this.Ab.Gv);this.
B_.Ds(this.Gu);this.B_.Bv(BI);this.B_.CP(76);}if(!(!(A=Ha)[0]&&!A[1]&&!A[2]&&!A[
3])||!(!(A=HK)[0]&&!A[1]&&!A[2]&&!A[3])){var I=B.wC(Ha,HK);if(!!this.Ck)I=B.wC(I
,this.Ck.GetExtent());this.ExtendClipping(Math.max(-I[0],0),Math.max(I[2]-Y[2],0
),Math.max(-I[1],0),Math.max(I[3]-Y[3],0));}else this.ExtendClipping(0,0,0,0);if(
!!this.Ab)B.pe(this.Ab.Hx,this);},JC:function(AV){var KA=this.A0.Fa;if(!!this.Ab
)this.A0.Fa=this.Ab.KeyCode;else this.A0.Fa=149;if(!KA&&!!this.A0.Fa)this.AR(0x4
,0x0);if(!!KA&&!this.A0.Fa)this.AR(0x0,0x4);if(!!this.Ab)this.O(this.M);this.CC(
);},Nv:function(AV){this.CC();B.pe(this.AS,this);},Nz:function(AV){var Fy=0;if(!
!this.Ab)Fy=50;this.Bl.BN(true);this.CC();if(((this.A0.AD-this.JD)|0)>=Fy)B.pe(this.
AS,this);else{this.Cc.Ht(Fy-((this.A0.AD-this.JD)|0));this.Cc.BN(true);}},Nx:function(
AV){this.Bl.BN(false);this.CC();if(this.Cc.BR){B.pe(this.AS,this);this.Cc.BN(false
);}this.JD=this.A0.AD;},Nw:function(AV){this.CC();},Nu:function(AV){this.CC();},
NA:function(AV){var Fy=0;if(!!this.Ab)Fy=50;this.A0.BR=true;if(!this.Bl.Eu)return;
if(this.Bl.C4)return;if(this.Bl.BZ>=Fy)B.pe(this.AS,this);else{this.Cc.Ht(Fy-this.
Bl.BZ);this.Cc.BN(true);}},Ny:function(AV){this.A0.BR=false;if(this.Cc.BR){B.pe(
this.AS,this);this.Cc.BN(false);}},Ls:function(C){if(this.FK===C)return;this.FK=
C;this.CC();},Lu:function(C){if(this.FM===C)return;this.FM=C;this.CC();},Lt:function(
C){if(this.FL===C)return;this.FL=C;this.CC();},Lr:function(C){if((((C===this.FL)&&(
C===this.Ho))&&(C===this.FM))&&(C===this.FK))return;this.FL=C;this.Ho=C;this.FM=
C;this.FK=C;this.CC();},Lp:function(C){if(this.FJ===C)return;this.FJ=C;this.CC();
},A3:function(C){if(this.Gu===C)return;this.Gu=C;this.CC();},A2:function(C){if(this.
Ab===C)return;if(!!this.Ab)B.z9([this,this.JC],this.Ab,0);this.Ab=C;if(!!C)B.zV([
this,this.JC],C,0);B.pe([this,this.JC],this);},_Init:function(aArg){B.Core.Ai._Init.
call(this,aArg);B.Core.Timer._Init.call(this.Cc={L:this},0);B.Core.FN._Init.call(
this.A0={L:this},0);B.Core.I2._Init.call(this.Bl={L:this},0);this.__proto__=D.Aw;
this.O(DI);this.Cc.GB(0);this.Cc.Ht(50);this.A0.Fa=149;this.Bl.IP(0x3F);this.Bl.
IU(Ed);this.Bl.IT(Ee);this.Bl.IS(Fg);this.Bl.IR(AG);this.Bl.LF(16);this.Bl.Lz(100
);this.U(this.Bl,0);this.Cc.FT=[this,this.Nv];this.A0.Fc=[this,this.Nz];this.A0.
Ew=[this,this.Nx];this.Bl.IM=[this,this.Nw];this.Bl.IL=[this,this.Nu];this.Bl.Fc=[
this,this.NA];this.Bl.Ew=[this,this.Ny];},_Done:function(){this.__proto__=B.Core.
Ai;this.Cc._Done();this.A0._Done();this.Bl._Done();B.Core.Ai._Done.call(this);},
_ReInit:function(){B.Core.Ai._ReInit.call(this);this.Cc._ReInit();this.A0._ReInit(
);this.Bl._ReInit();},_Mark:function(E){var A;B.Core.Ai._Mark.call(this,E);if((A=
this.C2)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B1)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.C1)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B_)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Bz)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Ck)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FJ)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Ab)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AS)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cc)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.A0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bl)._cycle!=E)
A._Mark(A._cycle=E);},_className:"WidgetSet::PushButton"};
D._Init=function(){D.CD.__proto__=D.HE;D.Aw.__proto__=B.Core.Ai;};D._ReInit=function(
){};D.Cu=function(E){};return D;})();

/* Embedded Wizard */