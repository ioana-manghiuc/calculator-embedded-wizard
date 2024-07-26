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
);if(EmWiApp.acg)throw new Error("The unit file 'WidgetSet.js' included twice!");
EmWiApp.acg=(function(){var B=EmWiApp;var E={};
var AY=[0,0,0,0];var AF=[0,0];var Do=[-1,-1];var Ei=[0,0,150,50];var Ej=[0,50];var
Ek=[150,50];var E4=[150,0];
E.C$={I0:null,IS:null,IV:null,IU:null,IT:null,EE:null,JZ:0,JY:0,Ld:0x3F,Ks:0,Kt:0
,Ku:0,Kv:0,Kw:0,Kx:0,Mh:0x3F,LJ:0xFF000000,LM:0xFF000000,LL:0xFF000000,LK:0xFF000000
,LN:0,LB:0,LE:0,LD:0,LC:0,LI:0x12,LA:0x12,Lx:0x3F,Lt:-1,Lw:-1,Lv:-1,Lu:-1,KeyCode:
149,L7:function(C){if(B.aa0(this.EE,C))return;this.EE=C;B.pe([this,this.A9],this
);},Ee:function(C){if(this.KeyCode===C)return;this.KeyCode=C;B.pe([this,this.A9]
,this);},I3:function(C){if(this.JZ===C)return;this.JZ=C;B.pe([this,this.A9],this
);},I2:function(C){if(this.JY===C)return;this.JY=C;B.pe([this,this.A9],this);},I4:
function(C){if(this.Ld===C)return;this.Ld=C;B.pe([this,this.A9],this);},PO:function(
C){if(this.Ks===C)return;this.Ks=C;B.pe([this,this.A9],this);},PP:function(C){if(
this.Kt===C)return;this.Kt=C;B.pe([this,this.A9],this);},PQ:function(C){if(C<0)C=
0;if(this.Ku===C)return;this.Ku=C;B.pe([this,this.A9],this);},PR:function(C){if(
C<0)C=0;if(this.Kv===C)return;this.Kv=C;B.pe([this,this.A9],this);},PS:function(
C){if(this.Kw===C)return;this.Kw=C;B.pe([this,this.A9],this);},PT:function(C){if(
this.Kx===C)return;this.Kx=C;B.pe([this,this.A9],this);},PU:function(C){if(this.
Mh===C)return;this.Mh=C;B.pe([this,this.A9],this);},EV:function(C){if(this.LJ===
C)return;this.LJ=C;B.pe([this,this.A9],this);},GJ:function(C){if(this.LM===C)return;
this.LM=C;B.pe([this,this.A9],this);},EX:function(C){if(this.LL===C)return;this.
LL=C;B.pe([this,this.A9],this);},EW:function(C){if(this.LK===C)return;this.LK=C;
B.pe([this,this.A9],this);},L6:function(C){if(this.LN===C)return;this.LN=C;B.pe([
this,this.A9],this);},PD:function(C){if(this.LB===C)return;this.LB=C;B.pe([this,
this.A9],this);},PG:function(C){if(this.LE===C)return;this.LE=C;B.pe([this,this.
A9],this);},PF:function(C){if(this.LD===C)return;this.LD=C;B.pe([this,this.A9],this
);},PE:function(C){if(this.LC===C)return;this.LC=C;B.pe([this,this.A9],this);},Km:
function(C){if(this.LI===C)return;this.LI=C;B.pe([this,this.A9],this);},EY:function(
C){if(this.I0===C)return;this.I0=C;B.pe([this,this.A9],this);},Py:function(C){if(
this.LA===C)return;this.LA=C;B.pe([this,this.A9],this);},I5:function(C){if(this.
Lx===C)return;this.Lx=C;B.pe([this,this.A9],this);},DP:function(C){if(this.Lt===
C)return;this.Lt=C;B.pe([this,this.A9],this);},DS:function(C){if(this.Lw===C)return;
this.Lw=C;B.pe([this,this.A9],this);},DR:function(C){if(this.Lv===C)return;this.
Lv=C;B.pe([this,this.A9],this);},DQ:function(C){if(this.Lu===C)return;this.Lu=C;
B.pe([this,this.A9],this);},DL:function(C){if(this.IS===C)return;this.IS=C;B.pe([
this,this.A9],this);},DO:function(C){if(this.IV===C)return;this.IV=C;B.pe([this,
this.A9],this);},DN:function(C){if(this.IU===C)return;this.IU=C;B.pe([this,this.
A9],this);},DM:function(C){if(this.IT===C)return;this.IT=C;B.pe([this,this.A9],this
);},_Init:function(aArg){E.Ky._Init.call(this,aArg);this.__proto__=E.C$;},_Mark:
function(D){var A;E.Ky._Mark.call(this,D);if((A=this.I0)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.IS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IV)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.IU)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.IT)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.EE)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"};E.Ky={A9:function(
Am){B.we(this,0);},_Init:function(aArg){this.__proto__=E.Ky;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"WidgetSet::WidgetConfig"};E.AP={D6:null,CP:null,D5:null,C0:null,B9:null,De:null
,H3:null,Ae:null,Ba:null,C8:null,AZ:null,BW:null,IZ:B.jV,MN:0,H4:-1,H6:-1,J$:-1,
H5:-1,Sj:0,O:function(C){var A;if(!!this.Ae){var NV=[C[2]-C[0],C[3]-C[1]];var Gt=
NV;if(Gt[0]<0)Gt=[0,Gt[1]];if(Gt[1]<0)Gt=[Gt[0],0];var B0=B.abe(Gt,NV);if(!!B0[0
]){var A4=((this.DK&0x4)===0x4);var A5=((this.DK&0x8)===0x8);if(A4&&!A5)C=B.abN(
C,C[2]+B0[0]);else if(!A4&&A5)C=[].concat(C[0]-B0[0],C.slice(1,4));else{C=[].concat(
C[0]-((B0[0]/2)|0),C.slice(1,4));C=B.abN(C,C[0]+Gt[0]);}}if(!!B0[1]){var A6=((this.
DK&0x10)===0x10);var A3=((this.DK&0x20)===0x20);if(A6&&!A3)C=[].concat(C.slice(0
,3),C[3]+B0[1]);else if(!A6&&A3)C=B.abP(C,C[1]-B0[1]);else{C=B.abP(C,C[1]-((B0[1
]/2)|0));C=[].concat(C.slice(0,3),C[1]+Gt[1]);}}}B.Core.Z.O.call(this,C);},Jc:function(
FK){var A;B.Core.Z.Jc.call(this,FK);var Oe=!!this.Ae&&(((!!this.Ae.IT||!!this.Ae.
IU)||!!this.Ae.IV)||!!this.Ae.IS);var Of=!!this.H3;var Oi=(!!this.Ae&&!!this.IZ)&&
!!this.Ae.I0;var Og=!!this.Ae&&(!!this.Ae.Kx||!!this.Ae.Kw);var Od=(!!this.Ae&&(
!!this.Ae.Kt||!!this.Ae.Ks))&&(!!this.Ae.Kv||!!this.Ae.Ku);var Oh=!!this.Ae&&(!!
this.Ae.JY||!!this.Ae.JZ);var N=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var JV=AY;var
KD=AY;var Eq;if(Oe&&!!!this.De){this.De=B._NewObject(B.acf.Ly,0);this.T(this.De,
0);}else if(!Oe&&!!this.De){this.GL(this.De);this.De=null;}if(Of&&!!!this.B9){this.
B9=B._NewObject(B.acf.Bo,0);this.T(this.B9,0);}else if(!Of&&!!this.B9){this.GL(this.
B9);this.B9=null;}if(Oi&&!!!this.C0){this.C0=B._NewObject(B.acf.Text,0);this.T(this.
C0,0);this.C0.Pu(true);}else if(!Oi&&!!this.C0){this.GL(this.C0);this.C0=null;}if(
Og&&!!!this.D5){this.D5=B._NewObject(B.acf.CI,0);this.T(this.D5,0);}else if(!Og&&
!!this.D5){this.GL(this.D5);this.D5=null;}if(Od&&!!!this.CP){this.CP=B._NewObject(
B.acf.Bi,0);this.T(this.CP,0);}else if(!Od&&!!this.CP){this.GL(this.CP);this.CP=
null;}if(Oh&&!!!this.D6){this.D6=B._NewObject(B.acf.CI,0);this.T(this.D6,0);}else
if(!Oh&&!!this.D6){this.GL(this.D6);this.D6=null;}if(!((FK&0x10)===0x10))Eq=0x44;
else if(((this.BW.Down&&this.BW.GF)||this.AZ.Down)||this.C8.Ck)Eq=0x41;else if(((
FK&0x40)===0x40))Eq=0x46;else Eq=0x45;this.Sj=Eq;if(!!this.CP||!!this.D5){var Aj=
this.Ae.Mh;var I=N;var C1;C1=AF;if(((Aj&0x1)===0x1))C1=[C1[0]+(I[2]-I[0]),C1[1]];
if(((Aj&0x2)===0x2))C1=[C1[0],C1[1]+(I[3]-I[1])];C1=B.aaD(C1,AF);var A4=((Aj&0x4
)===0x4);var A5=((Aj&0x8)===0x8);var A6=((Aj&0x10)===0x10);var A3=((Aj&0x20)===0x20
);if(A4&&!A5)I=B.abN(I,I[0]+C1[0]);else if(!A4&&A5)I=[].concat(I[2]-C1[0],I.slice(
1,4));else{I=[].concat((((I[2]-I[0])/2)|0)-((C1[0]/2)|0),I.slice(1,4));I=B.abN(I
,I[0]+C1[0]);}if(A6&&!A3)I=[].concat(I.slice(0,3),I[1]+C1[1]);else if(!A6&&A3)I=
B.abP(I,I[3]-C1[1]);else{I=B.abP(I,(((I[3]-I[1])/2)|0)-((C1[1]/2)|0));I=[].concat(
I.slice(0,3),I[1]+C1[1]);}JV=I;}if(!!this.D6){var Aj=this.Ae.Ld;var I=N;var CO;CO=
AF;if(((Aj&0x1)===0x1))CO=[CO[0]+(I[2]-I[0]),CO[1]];if(((Aj&0x2)===0x2))CO=[CO[0
],CO[1]+(I[3]-I[1])];CO=B.aaD(CO,AF);var A4=((Aj&0x4)===0x4);var A5=((Aj&0x8)===
0x8);var A6=((Aj&0x10)===0x10);var A3=((Aj&0x20)===0x20);if(A4&&!A5)I=B.abN(I,I[
0]+CO[0]);else if(!A4&&A5)I=[].concat(I[2]-CO[0],I.slice(1,4));else{I=[].concat((((
I[2]-I[0])/2)|0)-((CO[0]/2)|0),I.slice(1,4));I=B.abN(I,I[0]+CO[0]);}if(A6&&!A3)I=[
].concat(I.slice(0,3),I[1]+CO[1]);else if(!A6&&A3)I=B.abP(I,I[3]-CO[1]);else{I=B.
abP(I,(((I[3]-I[1])/2)|0)-((CO[1]/2)|0));I=[].concat(I.slice(0,3),I[1]+CO[1]);}KD=
I;}if(!!this.CP){var Cq;var width;switch(Eq){case 0x41:{Cq=this.Ae.Ks;width=this.
Ae.Ku;}break;case 0x44:case 0x46:{Cq=0x00000000;width=0;}break;default:{Cq=this.
Ae.Kt;width=this.Ae.Kv;}}this.CP.O(JV);this.CP.E0(0);this.CP.AX(Cq);this.CP.Ja(width
);this.CP.Dk(41);}if(!!this.D5){var I=JV;var Cq;switch(Eq){case 0x41:Cq=this.Ae.
Kw;break;case 0x44:case 0x46:Cq=0x00000000;break;default:Cq=this.Ae.Kx;}if((!!this.
CP&&!!this.CP.Width)&&(((this.CP.Bm>>24)&0xFF)===255))I=B.aaT(I,Do);this.D5.O(I);
this.D5.E0(0);this.D5.AX(Cq);this.D5.Dk(40);}if(!!this.D6){var I=KD;var Cq;switch(
Eq){case 0x44:case 0x41:Cq=0x00000000;break;case 0x46:Cq=this.Ae.JZ;break;default:
Cq=this.Ae.JY;}this.D6.O(I);this.D6.E0(0);this.D6.AX(Cq);this.D6.Dk(93);}if(!!this.
De){var bitmap;var B1;var Aj=this.Ae.Lx;var I=[N[0],N[1],N[2],N[3]];switch(Eq){case
0x44:{bitmap=this.Ae.IU;B1=this.Ae.Lv;}break;case 0x41:{bitmap=this.Ae.IS;B1=this.
Ae.Lt;}break;case 0x46:{bitmap=this.Ae.IV;B1=this.Ae.Lw;}break;default:{bitmap=this.
Ae.IT;B1=this.Ae.Lu;}}this.De.Hh(B1<0);this.De.AX(0xFFFFFFFF);if(B1<0)B1=0;if(!!
bitmap&&!((Aj&0x1)===0x1)){var A4=((Aj&0x4)===0x4);var A5=((Aj&0x8)===0x8);var An=
bitmap.FrameSize[0];if(A4&&!A5)I=B.abN(I,I[0]+An);else if(!A4&&A5)I=[].concat(I[
2]-An,I.slice(1,4));else{I=[].concat(I[0]+((((I[2]-I[0])/2)|0)-((An/2)|0)),I.slice(
1,4));I=B.abN(I,I[0]+An);}}if(!!bitmap&&!((Aj&0x2)===0x2)){var A6=((Aj&0x10)===0x10
);var A3=((Aj&0x20)===0x20);var Ag=bitmap.FrameSize[1];if(A6&&!A3)I=[].concat(I.
slice(0,3),I[1]+Ag);else if(!A6&&A3)I=B.abP(I,I[3]-Ag);else{I=B.abP(I,I[1]+((((I[
3]-I[1])/2)|0)-((Ag/2)|0)));I=[].concat(I.slice(0,3),I[1]+Ag);}}this.De.Kl(B1);this.
De.Bl(bitmap);this.De.O(I);this.De.Dk(16);}if(!!this.B9&&!!this.Ae){var B1;switch(
Eq){case 0x44:B1=this.J$;break;case 0x41:B1=this.H4;break;case 0x46:B1=this.H6;break;
default:B1=this.H5;}this.B9.Hh(B1<0);if(B1<0)B1=0;this.B9.O([N[0]+this.Ae.LC,N[1
]+this.Ae.LE,N[2]-this.Ae.LD,N[3]-this.Ae.LB]);this.B9.GI(this.Ae.LA);this.B9.Bl(
this.H3);this.B9.Kl(B1);this.B9.AX(0xFFFFFFFF);this.B9.Dk(59);}else if(!!this.B9
){var B1;switch(Eq){case 0x44:B1=this.J$;break;case 0x41:B1=this.H4;break;case 0x46:
B1=this.H6;break;default:B1=this.H5;}this.B9.O(N);this.B9.GI(0x12);this.B9.Bl(this.
H3);this.B9.Kl(B1);this.B9.AX(0xFFFFFFFF);this.B9.Dk(59);}if(!!this.C0){var Cq;switch(
Eq){case 0x44:Cq=this.Ae.LL;break;case 0x41:Cq=this.Ae.LJ;break;case 0x46:Cq=this.
Ae.LM;break;default:Cq=this.Ae.LK;}this.C0.O([N[0],N[1],N[2],N[3]-this.Ae.LN]);this.
C0.GI(this.Ae.LI);this.C0.Kn(true);this.C0.Pt(true);this.C0.Ed(this.Ae.I0);this.
C0.By(this.IZ);this.C0.AX(Cq);this.C0.Dk(76);}if(!(!(A=JV)[0]&&!A[1]&&!A[2]&&!A[
3])||!(!(A=KD)[0]&&!A[1]&&!A[2]&&!A[3])){var I=B.wC(JV,KD);if(!!this.De)I=B.wC(I
,this.De.GetExtent());this.ExtendClipping(Math.max(-I[0],0),Math.max(I[2]-N[2],0
),Math.max(-I[1],0),Math.max(I[3]-N[3],0));}else this.ExtendClipping(0,0,0,0);if(
!!this.Ae)B.pe(this.Ae.EE,this);},MM:function(Am){var Op=this.AZ.D$;if(!!this.Ae
)this.AZ.D$=this.Ae.KeyCode;else this.AZ.D$=149;if(!Op&&!!this.AZ.D$)this.A7(0x4
,0x0);if(!!Op&&!this.AZ.D$)this.A7(0x0,0x4);if(!!this.Ae)this.O(this.M);this.Dw(
);},R_:function(Am){this.Dw();B.pe(this.Ba,this);},Se:function(Am){var HO=0;if(!
!this.Ae)HO=50;this.BW.Bx(true);this.Dw();if(((this.AZ.Ao-this.MN)|0)>=HO)B.pe(this.
Ba,this);else{this.C8.Kh(HO-((this.AZ.Ao-this.MN)|0));this.C8.Bx(true);}},Sd:function(
Am){this.BW.Bx(false);this.Dw();if(this.C8.Ck){B.pe(this.Ba,this);this.C8.Bx(false
);}this.MN=this.AZ.Ao;},Sb:function(Am){this.Dw();},R9:function(Am){this.Dw();},
MP:function(Am){var HO=0;if(!!this.Ae)HO=50;this.AZ.Ck=true;if(!this.BW.GF)return;
if(this.BW.Di)return;if(this.BW.B6>=HO)B.pe(this.Ba,this);else{this.C8.Kh(HO-this.
BW.B6);this.C8.Bx(true);}},MO:function(Am){this.AZ.Ck=false;if(this.C8.Ck){B.pe(
this.Ba,this);this.C8.Bx(false);}},PA:function(C){if(this.H4===C)return;this.H4=
C;this.Dw();},PC:function(C){if(this.H6===C)return;this.H6=C;this.Dw();},PB:function(
C){if(this.H5===C)return;this.H5=C;this.Dw();},Pz:function(C){if((((C===this.H5)&&(
C===this.J$))&&(C===this.H6))&&(C===this.H4))return;this.H5=C;this.J$=C;this.H6=
C;this.H4=C;this.Dw();},Px:function(C){if(this.H3===C)return;this.H3=C;this.Dw();
},Bq:function(C){if(this.IZ===C)return;this.IZ=C;this.Dw();},Bp:function(C){if(this.
Ae===C)return;if(!!this.Ae)B.z9([this,this.MM],this.Ae,0);this.Ae=C;if(!!C)B.zV([
this,this.MM],C,0);B.pe([this,this.MM],this);},_Init:function(aArg){B.Core.Z._Init.
call(this,aArg);B.Core.Timer._Init.call(this.C8={K:this},0);B.Core.Eb._Init.call(
this.AZ={K:this},0);B.Core.BM._Init.call(this.BW={K:this},0);this.__proto__=E.AP;
this.O(Ei);this.C8.I9(0);this.C8.Kh(50);this.AZ.D$=149;this.BW.Ig(0x3F);this.BW.
Hk(Ej);this.BW.GK(Ek);this.BW.Ef(E4);this.BW.EC(AF);this.BW.PM(16);this.BW.Ng(100
);this.T(this.BW,0);this.C8.Ih=[this,this.R_];this.AZ.GH=[this,this.Se];this.AZ.
Dj=[this,this.Sd];this.BW.L2=[this,this.Sb];this.BW.LW=[this,this.R9];this.BW.GH=[
this,this.MP];this.BW.Dj=[this,this.MO];},_Done:function(){this.__proto__=B.Core.
Z;this.C8._Done();this.AZ._Done();this.BW._Done();B.Core.Z._Done.call(this);},_ReInit:
function(){B.Core.Z._ReInit.call(this);this.C8._ReInit();this.AZ._ReInit();this.
BW._ReInit();},_Mark:function(D){var A;B.Core.Z._Mark.call(this,D);if((A=this.D6
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CP)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.D5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.C0)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.B9)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
De)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H3)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ae)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ba)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.C8)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
AZ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BW)._cycle!=D)A._Mark(A._cycle=D);}
,_className:"WidgetSet::PushButton"};
E._Init=function(){E.C$.__proto__=E.Ky;E.AP.__proto__=B.Core.Z;};E._ReInit=function(
){};E.Dp=function(D){};return E;})();

/* Embedded Wizard */