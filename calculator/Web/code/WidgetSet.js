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
EmWiApp.acg=(function(){var B=EmWiApp;var D={};
var AH=[0,0,0,0];var AF=[0,0];var CG=[-1,-1];var DF=[0,0,150,50];var Ec=[0,50];var
Ed=[150,50];var EU=[150,0];
D.CE={GA:null,Gq:null,Gt:null,Gs:null,Gr:null,HA:null,Hi:0,Hh:0,H_:0x3F,HC:0,HD:0
,HE:0,HF:0,HG:0,HH:0,I9:0x3F,IH:0xFF000000,IK:0xFF000000,IJ:0xFF000000,II:0xFF000000
,IL:0,Iy:0,IB:0,IA:0,Iz:0,IG:0x12,Ix:0x12,It:0x3F,Ip:-1,Is:-1,Ir:-1,Iq:-1,KeyCode:
149,LP:function(C){if(B.aa0(this.HA,C))return;this.HA=C;B.pe([this,this.AJ],this
);},C8:function(C){if(this.KeyCode===C)return;this.KeyCode=C;B.pe([this,this.AJ]
,this);},GC:function(C){if(this.Hi===C)return;this.Hi=C;B.pe([this,this.AJ],this
);},GB:function(C){if(this.Hh===C)return;this.Hh=C;B.pe([this,this.AJ],this);},GD:
function(C){if(this.H_===C)return;this.H_=C;B.pe([this,this.AJ],this);},LU:function(
C){if(this.HC===C)return;this.HC=C;B.pe([this,this.AJ],this);},LV:function(C){if(
this.HD===C)return;this.HD=C;B.pe([this,this.AJ],this);},LW:function(C){if(C<0)C=
0;if(this.HE===C)return;this.HE=C;B.pe([this,this.AJ],this);},LX:function(C){if(
C<0)C=0;if(this.HF===C)return;this.HF=C;B.pe([this,this.AJ],this);},LY:function(
C){if(this.HG===C)return;this.HG=C;B.pe([this,this.AJ],this);},LZ:function(C){if(
this.HH===C)return;this.HH=C;B.pe([this,this.AJ],this);},L0:function(C){if(this.
I9===C)return;this.I9=C;B.pe([this,this.AJ],this);},EO:function(C){if(this.IH===
C)return;this.IH=C;B.pe([this,this.AJ],this);},FW:function(C){if(this.IK===C)return;
this.IK=C;B.pe([this,this.AJ],this);},EQ:function(C){if(this.IJ===C)return;this.
IJ=C;B.pe([this,this.AJ],this);},EP:function(C){if(this.II===C)return;this.II=C;
B.pe([this,this.AJ],this);},J4:function(C){if(this.IL===C)return;this.IL=C;B.pe([
this,this.AJ],this);},LI:function(C){if(this.Iy===C)return;this.Iy=C;B.pe([this,
this.AJ],this);},LL:function(C){if(this.IB===C)return;this.IB=C;B.pe([this,this.
AJ],this);},LK:function(C){if(this.IA===C)return;this.IA=C;B.pe([this,this.AJ],this
);},LJ:function(C){if(this.Iz===C)return;this.Iz=C;B.pe([this,this.AJ],this);},J3:
function(C){if(this.IG===C)return;this.IG=C;B.pe([this,this.AJ],this);},ER:function(
C){if(this.GA===C)return;this.GA=C;B.pe([this,this.AJ],this);},LD:function(C){if(
this.Ix===C)return;this.Ix=C;B.pe([this,this.AJ],this);},GE:function(C){if(this.
It===C)return;this.It=C;B.pe([this,this.AJ],this);},Dn:function(C){if(this.Ip===
C)return;this.Ip=C;B.pe([this,this.AJ],this);},Dq:function(C){if(this.Is===C)return;
this.Is=C;B.pe([this,this.AJ],this);},Dp:function(C){if(this.Ir===C)return;this.
Ir=C;B.pe([this,this.AJ],this);},Do:function(C){if(this.Iq===C)return;this.Iq=C;
B.pe([this,this.AJ],this);},Dj:function(C){if(this.Gq===C)return;this.Gq=C;B.pe([
this,this.AJ],this);},Dm:function(C){if(this.Gt===C)return;this.Gt=C;B.pe([this,
this.AJ],this);},Dl:function(C){if(this.Gs===C)return;this.Gs=C;B.pe([this,this.
AJ],this);},Dk:function(C){if(this.Gr===C)return;this.Gr=C;B.pe([this,this.AJ],this
);},_Init:function(aArg){D.HI._Init.call(this,aArg);this.__proto__=D.CE;},_Mark:
function(E){var A;D.HI._Mark.call(this,E);if((A=this.GA)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.Gq)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Gt)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.Gs)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Gr)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HA)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);},_className:"WidgetSet::PushButtonConfig"};D.HI={AJ:function(
A0){B.we(this,0);},_Init:function(aArg){this.__proto__=D.HI;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"WidgetSet::WidgetConfig"};D.Aw={C0:null,B2:null,CZ:null,B$:null,BB:null,Cl:null
,FL:null,Aa:null,AS:null,Cd:null,A3:null,Bo:null,Gz:B.jV,JI:0,FM:-1,FO:-1,Hs:-1,
FN:-1,NO:0,N:function(C){var A;if(!!this.Aa){var Kt=[C[2]-C[0],C[3]-C[1]];var EG=
Kt;if(EG[0]<0)EG=[0,EG[1]];if(EG[1]<0)EG=[EG[0],0];var B3=B.abe(EG,Kt);if(!!B3[0
]){var A9=((this.C7&0x4)===0x4);var A_=((this.C7&0x8)===0x8);if(A9&&!A_)C=B.abN(
C,C[2]+B3[0]);else if(!A9&&A_)C=[].concat(C[0]-B3[0],C.slice(1,4));else{C=[].concat(
C[0]-((B3[0]/2)|0),C.slice(1,4));C=B.abN(C,C[0]+EG[0]);}}if(!!B3[1]){var A$=((this.
C7&0x10)===0x10);var A8=((this.C7&0x20)===0x20);if(A$&&!A8)C=[].concat(C.slice(0
,3),C[3]+B3[1]);else if(!A$&&A8)C=B.abP(C,C[1]-B3[1]);else{C=B.abP(C,C[1]-((B3[1
]/2)|0));C=[].concat(C.slice(0,3),C[1]+EG[1]);}}}B.Core.Am.N.call(this,C);},I_:function(
HN){var A;B.Core.Am.I_.call(this,HN);var KF=!!this.Aa&&(((!!this.Aa.Gr||!!this.Aa.
Gs)||!!this.Aa.Gt)||!!this.Aa.Gq);var KG=!!this.FL;var KJ=(!!this.Aa&&!!this.Gz)&&
!!this.Aa.GA;var KH=!!this.Aa&&(!!this.Aa.HH||!!this.Aa.HG);var KE=(!!this.Aa&&(
!!this.Aa.HD||!!this.Aa.HC))&&(!!this.Aa.HF||!!this.Aa.HE);var KI=!!this.Aa&&(!!
this.Aa.Hh||!!this.Aa.Hi);var X=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var Hf=AH;var
HO=AH;var Dc;if(KF&&!!!this.Cl){this.Cl=B._NewObject(B.acf.Iv,0);this.P(this.Cl,
0);}else if(!KF&&!!this.Cl){this.F$(this.Cl);this.Cl=null;}if(KG&&!!!this.BB){this.
BB=B._NewObject(B.acf.AX,0);this.P(this.BB,0);}else if(!KG&&!!this.BB){this.F$(this.
BB);this.BB=null;}if(KJ&&!!!this.B$){this.B$=B._NewObject(B.acf.Text,0);this.P(this.
B$,0);this.B$.LB(true);}else if(!KJ&&!!this.B$){this.F$(this.B$);this.B$=null;}if(
KH&&!!!this.CZ){this.CZ=B._NewObject(B.acf.ES,0);this.P(this.CZ,0);}else if(!KH&&
!!this.CZ){this.F$(this.CZ);this.CZ=null;}if(KE&&!!!this.B2){this.B2=B._NewObject(
B.acf.AU,0);this.P(this.B2,0);}else if(!KE&&!!this.B2){this.F$(this.B2);this.B2=
null;}if(KI&&!!!this.C0){this.C0=B._NewObject(B.acf.ES,0);this.P(this.C0,0);}else
if(!KI&&!!this.C0){this.F$(this.C0);this.C0=null;}if(!((HN&0x10)===0x10))Dc=0x44;
else if(((this.Bo.Down&&this.Bo.EL)||this.A3.Down)||this.Cd.Cq)Dc=0x41;else if(((
HN&0x40)===0x40))Dc=0x46;else Dc=0x45;this.NO=Dc;if(!!this.B2||!!this.CZ){var Aq=
this.Aa.I9;var I=X;var Ca;Ca=AF;if(((Aq&0x1)===0x1))Ca=[Ca[0]+(I[2]-I[0]),Ca[1]];
if(((Aq&0x2)===0x2))Ca=[Ca[0],Ca[1]+(I[3]-I[1])];Ca=B.aaD(Ca,AF);var A9=((Aq&0x4
)===0x4);var A_=((Aq&0x8)===0x8);var A$=((Aq&0x10)===0x10);var A8=((Aq&0x20)===0x20
);if(A9&&!A_)I=B.abN(I,I[0]+Ca[0]);else if(!A9&&A_)I=[].concat(I[2]-Ca[0],I.slice(
1,4));else{I=[].concat((((I[2]-I[0])/2)|0)-((Ca[0]/2)|0),I.slice(1,4));I=B.abN(I
,I[0]+Ca[0]);}if(A$&&!A8)I=[].concat(I.slice(0,3),I[1]+Ca[1]);else if(!A$&&A8)I=
B.abP(I,I[3]-Ca[1]);else{I=B.abP(I,(((I[3]-I[1])/2)|0)-((Ca[1]/2)|0));I=[].concat(
I.slice(0,3),I[1]+Ca[1]);}Hf=I;}if(!!this.C0){var Aq=this.Aa.H_;var I=X;var B1;B1=
AF;if(((Aq&0x1)===0x1))B1=[B1[0]+(I[2]-I[0]),B1[1]];if(((Aq&0x2)===0x2))B1=[B1[0
],B1[1]+(I[3]-I[1])];B1=B.aaD(B1,AF);var A9=((Aq&0x4)===0x4);var A_=((Aq&0x8)===
0x8);var A$=((Aq&0x10)===0x10);var A8=((Aq&0x20)===0x20);if(A9&&!A_)I=B.abN(I,I[
0]+B1[0]);else if(!A9&&A_)I=[].concat(I[2]-B1[0],I.slice(1,4));else{I=[].concat((((
I[2]-I[0])/2)|0)-((B1[0]/2)|0),I.slice(1,4));I=B.abN(I,I[0]+B1[0]);}if(A$&&!A8)I=[
].concat(I.slice(0,3),I[1]+B1[1]);else if(!A$&&A8)I=B.abP(I,I[3]-B1[1]);else{I=B.
abP(I,(((I[3]-I[1])/2)|0)-((B1[1]/2)|0));I=[].concat(I.slice(0,3),I[1]+B1[1]);}HO=
I;}if(!!this.B2){var BK;var width;switch(Dc){case 0x41:{BK=this.Aa.HC;width=this.
Aa.HE;}break;case 0x44:case 0x46:{BK=0x00000000;width=0;}break;default:{BK=this.
Aa.HD;width=this.Aa.HF;}}this.B2.N(Hf);this.B2.DC(0);this.B2.Bg(BK);this.B2.GH(width
);this.B2.CN(41);}if(!!this.CZ){var I=Hf;var BK;switch(Dc){case 0x41:BK=this.Aa.
HG;break;case 0x44:case 0x46:BK=0x00000000;break;default:BK=this.Aa.HH;}if((!!this.
B2&&!!this.B2.Width)&&(((this.B2.BH>>24)&0xFF)===255))I=B.aaT(I,CG);this.CZ.N(I);
this.CZ.DC(0);this.CZ.Bg(BK);this.CZ.CN(40);}if(!!this.C0){var I=HO;var BK;switch(
Dc){case 0x44:case 0x41:BK=0x00000000;break;case 0x46:BK=this.Aa.Hi;break;default:
BK=this.Aa.Hh;}this.C0.N(I);this.C0.DC(0);this.C0.Bg(BK);this.C0.CN(93);}if(!!this.
Cl){var bitmap;var Bs;var Aq=this.Aa.It;var I=[X[0],X[1],X[2],X[3]];switch(Dc){case
0x44:{bitmap=this.Aa.Gs;Bs=this.Aa.Ir;}break;case 0x41:{bitmap=this.Aa.Gq;Bs=this.
Aa.Ip;}break;case 0x46:{bitmap=this.Aa.Gt;Bs=this.Aa.Is;}break;default:{bitmap=this.
Aa.Gr;Bs=this.Aa.Iq;}}this.Cl.Fi(Bs<0);this.Cl.Bg(0xFFFFFFFF);if(Bs<0)Bs=0;if(!!
bitmap&&!((Aq&0x1)===0x1)){var A9=((Aq&0x4)===0x4);var A_=((Aq&0x8)===0x8);var AC=
bitmap.FrameSize[0];if(A9&&!A_)I=B.abN(I,I[0]+AC);else if(!A9&&A_)I=[].concat(I[
2]-AC,I.slice(1,4));else{I=[].concat(I[0]+((((I[2]-I[0])/2)|0)-((AC/2)|0)),I.slice(
1,4));I=B.abN(I,I[0]+AC);}}if(!!bitmap&&!((Aq&0x2)===0x2)){var A$=((Aq&0x10)===0x10
);var A8=((Aq&0x20)===0x20);var AB=bitmap.FrameSize[1];if(A$&&!A8)I=[].concat(I.
slice(0,3),I[1]+AB);else if(!A$&&A8)I=B.abP(I,I[3]-AB);else{I=B.abP(I,I[1]+((((I[
3]-I[1])/2)|0)-((AB/2)|0)));I=[].concat(I.slice(0,3),I[1]+AB);}}this.Cl.Hz(Bs);this.
Cl.AW(bitmap);this.Cl.N(I);this.Cl.CN(16);}if(!!this.BB&&!!this.Aa){var Bs;switch(
Dc){case 0x44:Bs=this.Hs;break;case 0x41:Bs=this.FM;break;case 0x46:Bs=this.FO;break;
default:Bs=this.FN;}this.BB.Fi(Bs<0);if(Bs<0)Bs=0;this.BB.N([X[0]+this.Aa.Iz,X[1
]+this.Aa.IB,X[2]-this.Aa.IA,X[3]-this.Aa.Iy]);this.BB.Fh(this.Aa.Ix);this.BB.AW(
this.FL);this.BB.Hz(Bs);this.BB.Bg(0xFFFFFFFF);this.BB.CN(59);}else if(!!this.BB
){var Bs;switch(Dc){case 0x44:Bs=this.Hs;break;case 0x41:Bs=this.FM;break;case 0x46:
Bs=this.FO;break;default:Bs=this.FN;}this.BB.N(X);this.BB.Fh(0x12);this.BB.AW(this.
FL);this.BB.Hz(Bs);this.BB.Bg(0xFFFFFFFF);this.BB.CN(59);}if(!!this.B$){var BK;switch(
Dc){case 0x44:BK=this.Aa.IJ;break;case 0x41:BK=this.Aa.IH;break;case 0x46:BK=this.
Aa.IK;break;default:BK=this.Aa.II;}this.B$.N([X[0],X[1],X[2],X[3]-this.Aa.IL]);this.
B$.Fh(this.Aa.IG);this.B$.IZ(true);this.B$.LA(true);this.B$.FV(this.Aa.GA);this.
B$.Ct(this.Gz);this.B$.Bg(BK);this.B$.CN(76);}if(!(!(A=Hf)[0]&&!A[1]&&!A[2]&&!A[
3])||!(!(A=HO)[0]&&!A[1]&&!A[2]&&!A[3])){var I=B.wC(Hf,HO);if(!!this.Cl)I=B.wC(I
,this.Cl.GetExtent());this.ExtendClipping(Math.max(-I[0],0),Math.max(I[2]-X[2],0
),Math.max(-I[1],0),Math.max(I[3]-X[3],0));}else this.ExtendClipping(0,0,0,0);if(
!!this.Aa)B.pe(this.Aa.HA,this);},JH:function(A0){var KL=this.A3.Fe;if(!!this.Aa
)this.A3.Fe=this.Aa.KeyCode;else this.A3.Fe=149;if(!KL&&!!this.A3.Fe)this.AR(0x4
,0x0);if(!!KL&&!this.A3.Fe)this.AR(0x0,0x4);if(!!this.Aa)this.N(this.M);this.CD(
);},NI:function(A0){this.CD();B.pe(this.AS,this);},NM:function(A0){var FA=0;if(!
!this.Aa)FA=50;this.Bo.B0(true);this.CD();if(((this.A3.AN-this.JI)|0)>=FA)B.pe(this.
AS,this);else{this.Cd.Hx(FA-((this.A3.AN-this.JI)|0));this.Cd.B0(true);}},NK:function(
A0){this.Bo.B0(false);this.CD();if(this.Cd.Cq){B.pe(this.AS,this);this.Cd.B0(false
);}this.JI=this.A3.AN;},NJ:function(A0){this.CD();},NH:function(A0){this.CD();},
NN:function(A0){var FA=0;if(!!this.Aa)FA=50;this.A3.Cq=true;if(!this.Bo.EL)return;
if(this.Bo.C3)return;if(this.Bo.BZ>=FA)B.pe(this.AS,this);else{this.Cd.Hx(FA-this.
Bo.BZ);this.Cd.B0(true);}},NL:function(A0){this.A3.Cq=false;if(this.Cd.Cq){B.pe(
this.AS,this);this.Cd.B0(false);}},LF:function(C){if(this.FM===C)return;this.FM=
C;this.CD();},LH:function(C){if(this.FO===C)return;this.FO=C;this.CD();},LG:function(
C){if(this.FN===C)return;this.FN=C;this.CD();},LE:function(C){if((((C===this.FN)&&(
C===this.Hs))&&(C===this.FO))&&(C===this.FM))return;this.FN=C;this.Hs=C;this.FO=
C;this.FM=C;this.CD();},LC:function(C){if(this.FL===C)return;this.FL=C;this.CD();
},A6:function(C){if(this.Gz===C)return;this.Gz=C;this.CD();},A5:function(C){if(this.
Aa===C)return;if(!!this.Aa)B.z9([this,this.JH],this.Aa,0);this.Aa=C;if(!!C)B.zV([
this,this.JH],C,0);B.pe([this,this.JH],this);},_Init:function(aArg){B.Core.Am._Init.
call(this,aArg);B.Core.Timer._Init.call(this.Cd={K:this},0);B.Core.FP._Init.call(
this.A3={K:this},0);B.Core.I6._Init.call(this.Bo={K:this},0);this.__proto__=D.Aw;
this.N(DF);this.Cd.GG(0);this.Cd.Hx(50);this.A3.Fe=149;this.Bo.IT(0x3F);this.Bo.
IY(Ec);this.Bo.IX(Ed);this.Bo.IW(EU);this.Bo.IV(AF);this.Bo.LT(16);this.Bo.LN(100
);this.P(this.Bo,0);this.Cd.FX=[this,this.NI];this.A3.Fg=[this,this.NM];this.A3.
EN=[this,this.NK];this.Bo.IS=[this,this.NJ];this.Bo.IR=[this,this.NH];this.Bo.Fg=[
this,this.NN];this.Bo.EN=[this,this.NL];},_Done:function(){this.__proto__=B.Core.
Am;this.Cd._Done();this.A3._Done();this.Bo._Done();B.Core.Am._Done.call(this);},
_ReInit:function(){B.Core.Am._ReInit.call(this);this.Cd._ReInit();this.A3._ReInit(
);this.Bo._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=
this.C0)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B2)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.CZ)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.B$)&&(A.
_cycle!=E))A._Mark(A._cycle=E);if((A=this.BB)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.Cl)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.FL)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Aa)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AS)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Cd)._cycle!=E)A._Mark(A.
_cycle=E);if((A=this.A3)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bo)._cycle!=E)
A._Mark(A._cycle=E);},_className:"WidgetSet::PushButton"};
D._Init=function(){D.CE.__proto__=D.HI;D.Aw.__proto__=B.Core.Am;};D._ReInit=function(
){};D.Cv=function(E){};return D;})();

/* Embedded Wizard */