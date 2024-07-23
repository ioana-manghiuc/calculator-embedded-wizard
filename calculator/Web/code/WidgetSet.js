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
var AV=[0,0,0,0];var AF=[0,0];var Da=[-1,-1];var Db=[0,0,150,50];var Ew=[0,50];var
Ex=[150,50];var EU=[150,0];
E.Dn={IK:null,IC:null,IF:null,IE:null,ID:null,Es:null,JE:0,JD:0,KQ:0x3F,J6:0,J7:0
,J8:0,J9:0,J_:0,J$:0,LJ:0x3F,Lj:0xFF000000,Lm:0xFF000000,Ll:0xFF000000,Lk:0xFF000000
,Ln:0,Lb:0,Le:0,Ld:0,Lc:0,Li:0x12,La:0x12,K9:0x3F,K5:-1,K8:-1,K7:-1,K6:-1,KeyCode:
149,Ly:function(C){if(B.aa0(this.Es,C))return;this.Es=C;B.pe([this,this.A5],this
);},DY:function(C){if(this.KeyCode===C)return;this.KeyCode=C;B.pe([this,this.A5]
,this);},IM:function(C){if(this.JE===C)return;this.JE=C;B.pe([this,this.A5],this
);},IL:function(C){if(this.JD===C)return;this.JD=C;B.pe([this,this.A5],this);},IN:
function(C){if(this.KQ===C)return;this.KQ=C;B.pe([this,this.A5],this);},O9:function(
C){if(this.J6===C)return;this.J6=C;B.pe([this,this.A5],this);},O_:function(C){if(
this.J7===C)return;this.J7=C;B.pe([this,this.A5],this);},O$:function(C){if(C<0)C=
0;if(this.J8===C)return;this.J8=C;B.pe([this,this.A5],this);},Pa:function(C){if(
C<0)C=0;if(this.J9===C)return;this.J9=C;B.pe([this,this.A5],this);},Pb:function(
C){if(this.J_===C)return;this.J_=C;B.pe([this,this.A5],this);},Pc:function(C){if(
this.J$===C)return;this.J$=C;B.pe([this,this.A5],this);},Pd:function(C){if(this.
LJ===C)return;this.LJ=C;B.pe([this,this.A5],this);},Gg:function(C){if(this.Lj===
C)return;this.Lj=C;B.pe([this,this.A5],this);},H3:function(C){if(this.Lm===C)return;
this.Lm=C;B.pe([this,this.A5],this);},Gi:function(C){if(this.Ll===C)return;this.
Ll=C;B.pe([this,this.A5],this);},Gh:function(C){if(this.Lk===C)return;this.Lk=C;
B.pe([this,this.A5],this);},MH:function(C){if(this.Ln===C)return;this.Ln=C;B.pe([
this,this.A5],this);},OY:function(C){if(this.Lb===C)return;this.Lb=C;B.pe([this,
this.A5],this);},O1:function(C){if(this.Le===C)return;this.Le=C;B.pe([this,this.
A5],this);},O0:function(C){if(this.Ld===C)return;this.Ld=C;B.pe([this,this.A5],this
);},OZ:function(C){if(this.Lc===C)return;this.Lc=C;B.pe([this,this.A5],this);},MG:
function(C){if(this.Li===C)return;this.Li=C;B.pe([this,this.A5],this);},Gj:function(
C){if(this.IK===C)return;this.IK=C;B.pe([this,this.A5],this);},OT:function(C){if(
this.La===C)return;this.La=C;B.pe([this,this.A5],this);},IO:function(C){if(this.
K9===C)return;this.K9=C;B.pe([this,this.A5],this);},El:function(C){if(this.K5===
C)return;this.K5=C;B.pe([this,this.A5],this);},Eo:function(C){if(this.K8===C)return;
this.K8=C;B.pe([this,this.A5],this);},En:function(C){if(this.K7===C)return;this.
K7=C;B.pe([this,this.A5],this);},Em:function(C){if(this.K6===C)return;this.K6=C;
B.pe([this,this.A5],this);},Eh:function(C){if(this.IC===C)return;this.IC=C;B.pe([
this,this.A5],this);},Ek:function(C){if(this.IF===C)return;this.IF=C;B.pe([this,
this.A5],this);},Ej:function(C){if(this.IE===C)return;this.IE=C;B.pe([this,this.
A5],this);},Ei:function(C){if(this.ID===C)return;this.ID=C;B.pe([this,this.A5],this
);},_Init:function(aArg){E.Ka._Init.call(this,aArg);this.__proto__=E.Dn;},_Mark:
function(D){var A;E.Ka._Mark.call(this,D);if((A=this.IK)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.IC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IF)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.IE)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.ID)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Es)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"};E.Ka={A5:function(
Aw){B.we(this,0);},_Init:function(aArg){this.__proto__=E.Ka;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"WidgetSet::WidgetConfig"};E.AN={DQ:null,CF:null,DP:null,CQ:null,B5:null,C4:null
,HT:null,Ae:null,A8:null,CX:null,Bd:null,BQ:null,IJ:B.jV,Me:0,HU:-1,HW:-1,JQ:-1,
HV:-1,Rz:0,R:function(C){var A;if(!!this.Ae){var Nc=[C[2]-C[0],C[3]-C[1]];var FU=
Nc;if(FU[0]<0)FU=[0,FU[1]];if(FU[1]<0)FU=[FU[0],0];var BW=B.abe(FU,Nc);if(!!BW[0
]){var A0=((this.DA&0x4)===0x4);var A1=((this.DA&0x8)===0x8);if(A0&&!A1)C=B.abN(
C,C[2]+BW[0]);else if(!A0&&A1)C=[].concat(C[0]-BW[0],C.slice(1,4));else{C=[].concat(
C[0]-((BW[0]/2)|0),C.slice(1,4));C=B.abN(C,C[0]+FU[0]);}}if(!!BW[1]){var A2=((this.
DA&0x10)===0x10);var AZ=((this.DA&0x20)===0x20);if(A2&&!AZ)C=[].concat(C.slice(0
,3),C[3]+BW[1]);else if(!A2&&AZ)C=B.abP(C,C[1]-BW[1]);else{C=B.abP(C,C[1]-((BW[1
]/2)|0));C=[].concat(C.slice(0,3),C[1]+FU[1]);}}}B.Core.Ab.R.call(this,C);},IX:function(
FB){var A;B.Core.Ab.IX.call(this,FB);var Nx=!!this.Ae&&(((!!this.Ae.ID||!!this.Ae.
IE)||!!this.Ae.IF)||!!this.Ae.IC);var Ny=!!this.HT;var NB=(!!this.Ae&&!!this.IJ)&&
!!this.Ae.IK;var Nz=!!this.Ae&&(!!this.Ae.J$||!!this.Ae.J_);var Nw=(!!this.Ae&&(
!!this.Ae.J7||!!this.Ae.J6))&&(!!this.Ae.J9||!!this.Ae.J8);var NA=!!this.Ae&&(!!
this.Ae.JD||!!this.Ae.JE);var N=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var JA=AV;var
Ke=AV;var D7;if(Nx&&!!!this.C4){this.C4=B._NewObject(B.acf.K_,0);this.U(this.C4,
0);}else if(!Nx&&!!this.C4){this.Gl(this.C4);this.C4=null;}if(Ny&&!!!this.B5){this.
B5=B._NewObject(B.acf.BN,0);this.U(this.B5,0);}else if(!Ny&&!!this.B5){this.Gl(this.
B5);this.B5=null;}if(NB&&!!!this.CQ){this.CQ=B._NewObject(B.acf.Text,0);this.U(this.
CQ,0);this.CQ.OP(true);}else if(!NB&&!!this.CQ){this.Gl(this.CQ);this.CQ=null;}if(
Nz&&!!!this.DP){this.DP=B._NewObject(B.acf.Fs,0);this.U(this.DP,0);}else if(!Nz&&
!!this.DP){this.Gl(this.DP);this.DP=null;}if(Nw&&!!!this.CF){this.CF=B._NewObject(
B.acf.Bf,0);this.U(this.CF,0);}else if(!Nw&&!!this.CF){this.Gl(this.CF);this.CF=
null;}if(NA&&!!!this.DQ){this.DQ=B._NewObject(B.acf.Fs,0);this.U(this.DQ,0);}else
if(!NA&&!!this.DQ){this.Gl(this.DQ);this.DQ=null;}if(!((FB&0x10)===0x10))D7=0x44;
else if(((this.BQ.Down&&this.BQ.Gd)||this.Bd.Down)||this.CX.Cp)D7=0x41;else if(((
FB&0x40)===0x40))D7=0x46;else D7=0x45;this.Rz=D7;if(!!this.CF||!!this.DP){var Ai=
this.Ae.LJ;var I=N;var CR;CR=AF;if(((Ai&0x1)===0x1))CR=[CR[0]+(I[2]-I[0]),CR[1]];
if(((Ai&0x2)===0x2))CR=[CR[0],CR[1]+(I[3]-I[1])];CR=B.aaD(CR,AF);var A0=((Ai&0x4
)===0x4);var A1=((Ai&0x8)===0x8);var A2=((Ai&0x10)===0x10);var AZ=((Ai&0x20)===0x20
);if(A0&&!A1)I=B.abN(I,I[0]+CR[0]);else if(!A0&&A1)I=[].concat(I[2]-CR[0],I.slice(
1,4));else{I=[].concat((((I[2]-I[0])/2)|0)-((CR[0]/2)|0),I.slice(1,4));I=B.abN(I
,I[0]+CR[0]);}if(A2&&!AZ)I=[].concat(I.slice(0,3),I[1]+CR[1]);else if(!A2&&AZ)I=
B.abP(I,I[3]-CR[1]);else{I=B.abP(I,(((I[3]-I[1])/2)|0)-((CR[1]/2)|0));I=[].concat(
I.slice(0,3),I[1]+CR[1]);}JA=I;}if(!!this.DQ){var Ai=this.Ae.KQ;var I=N;var CE;CE=
AF;if(((Ai&0x1)===0x1))CE=[CE[0]+(I[2]-I[0]),CE[1]];if(((Ai&0x2)===0x2))CE=[CE[0
],CE[1]+(I[3]-I[1])];CE=B.aaD(CE,AF);var A0=((Ai&0x4)===0x4);var A1=((Ai&0x8)===
0x8);var A2=((Ai&0x10)===0x10);var AZ=((Ai&0x20)===0x20);if(A0&&!A1)I=B.abN(I,I[
0]+CE[0]);else if(!A0&&A1)I=[].concat(I[2]-CE[0],I.slice(1,4));else{I=[].concat((((
I[2]-I[0])/2)|0)-((CE[0]/2)|0),I.slice(1,4));I=B.abN(I,I[0]+CE[0]);}if(A2&&!AZ)I=[
].concat(I.slice(0,3),I[1]+CE[1]);else if(!A2&&AZ)I=B.abP(I,I[3]-CE[1]);else{I=B.
abP(I,(((I[3]-I[1])/2)|0)-((CE[1]/2)|0));I=[].concat(I.slice(0,3),I[1]+CE[1]);}Ke=
I;}if(!!this.CF){var Ci;var width;switch(D7){case 0x41:{Ci=this.Ae.J6;width=this.
Ae.J8;}break;case 0x44:case 0x46:{Ci=0x00000000;width=0;}break;default:{Ci=this.
Ae.J7;width=this.Ae.J9;}}this.CF.R(JA);this.CF.EO(0);this.CF.Bu(Ci);this.CF.IT(width
);this.CF.Dm(41);}if(!!this.DP){var I=JA;var Ci;switch(D7){case 0x41:Ci=this.Ae.
J_;break;case 0x44:case 0x46:Ci=0x00000000;break;default:Ci=this.Ae.J$;}if((!!this.
CF&&!!this.CF.Width)&&(((this.CF.BM>>24)&0xFF)===255))I=B.aaT(I,Da);this.DP.R(I);
this.DP.EO(0);this.DP.Bu(Ci);this.DP.Dm(40);}if(!!this.DQ){var I=Ke;var Ci;switch(
D7){case 0x44:case 0x41:Ci=0x00000000;break;case 0x46:Ci=this.Ae.JE;break;default:
Ci=this.Ae.JD;}this.DQ.R(I);this.DQ.EO(0);this.DQ.Bu(Ci);this.DQ.Dm(93);}if(!!this.
C4){var bitmap;var BX;var Ai=this.Ae.K9;var I=[N[0],N[1],N[2],N[3]];switch(D7){case
0x44:{bitmap=this.Ae.IE;BX=this.Ae.K7;}break;case 0x41:{bitmap=this.Ae.IC;BX=this.
Ae.K5;}break;case 0x46:{bitmap=this.Ae.IF;BX=this.Ae.K8;}break;default:{bitmap=this.
Ae.ID;BX=this.Ae.K6;}}this.C4.G8(BX<0);this.C4.Bu(0xFFFFFFFF);if(BX<0)BX=0;if(!!
bitmap&&!((Ai&0x1)===0x1)){var A0=((Ai&0x4)===0x4);var A1=((Ai&0x8)===0x8);var Am=
bitmap.FrameSize[0];if(A0&&!A1)I=B.abN(I,I[0]+Am);else if(!A0&&A1)I=[].concat(I[
2]-Am,I.slice(1,4));else{I=[].concat(I[0]+((((I[2]-I[0])/2)|0)-((Am/2)|0)),I.slice(
1,4));I=B.abN(I,I[0]+Am);}}if(!!bitmap&&!((Ai&0x2)===0x2)){var A2=((Ai&0x10)===0x10
);var AZ=((Ai&0x20)===0x20);var Ag=bitmap.FrameSize[1];if(A2&&!AZ)I=[].concat(I.
slice(0,3),I[1]+Ag);else if(!A2&&AZ)I=B.abP(I,I[3]-Ag);else{I=B.abP(I,I[1]+((((I[
3]-I[1])/2)|0)-((Ag/2)|0)));I=[].concat(I.slice(0,3),I[1]+Ag);}}this.C4.J2(BX);this.
C4.BE(bitmap);this.C4.R(I);this.C4.Dm(16);}if(!!this.B5&&!!this.Ae){var BX;switch(
D7){case 0x44:BX=this.JQ;break;case 0x41:BX=this.HU;break;case 0x46:BX=this.HW;break;
default:BX=this.HV;}this.B5.G8(BX<0);if(BX<0)BX=0;this.B5.R([N[0]+this.Ae.Lc,N[1
]+this.Ae.Le,N[2]-this.Ae.Ld,N[3]-this.Ae.Lb]);this.B5.Eg(this.Ae.La);this.B5.BE(
this.HT);this.B5.J2(BX);this.B5.Bu(0xFFFFFFFF);this.B5.Dm(59);}else if(!!this.B5
){var BX;switch(D7){case 0x44:BX=this.JQ;break;case 0x41:BX=this.HU;break;case 0x46:
BX=this.HW;break;default:BX=this.HV;}this.B5.R(N);this.B5.Eg(0x12);this.B5.BE(this.
HT);this.B5.J2(BX);this.B5.Bu(0xFFFFFFFF);this.B5.Dm(59);}if(!!this.CQ){var Ci;switch(
D7){case 0x44:Ci=this.Ae.Ll;break;case 0x41:Ci=this.Ae.Lj;break;case 0x46:Ci=this.
Ae.Lm;break;default:Ci=this.Ae.Lk;}this.CQ.R([N[0],N[1],N[2],N[3]-this.Ae.Ln]);this.
CQ.Eg(this.Ae.Li);this.CQ.Hb(true);this.CQ.OO(true);this.CQ.Gf(this.Ae.IK);this.
CQ.Cr(this.IJ);this.CQ.Bu(Ci);this.CQ.Dm(76);}if(!(!(A=JA)[0]&&!A[1]&&!A[2]&&!A[
3])||!(!(A=Ke)[0]&&!A[1]&&!A[2]&&!A[3])){var I=B.wC(JA,Ke);if(!!this.C4)I=B.wC(I
,this.C4.GetExtent());this.ExtendClipping(Math.max(-I[0],0),Math.max(I[2]-N[2],0
),Math.max(-I[1],0),Math.max(I[3]-N[3],0));}else this.ExtendClipping(0,0,0,0);if(
!!this.Ae)B.pe(this.Ae.Es,this);},Md:function(Aw){var NI=this.Bd.DU;if(!!this.Ae
)this.Bd.DU=this.Ae.KeyCode;else this.Bd.DU=149;if(!NI&&!!this.Bd.DU)this.A7(0x4
,0x0);if(!!NI&&!this.Bd.DU)this.A7(0x0,0x4);if(!!this.Ae)this.R(this.M);this.Dk(
);},Rr:function(Aw){this.Dk();B.pe(this.A8,this);},Rv:function(Aw){var HH=0;if(!
!this.Ae)HH=50;this.BQ.BU(true);this.Dk();if(((this.Bd.An-this.Me)|0)>=HH)B.pe(this.
A8,this);else{this.CX.JY(HH-((this.Bd.An-this.Me)|0));this.CX.BU(true);}},Ru:function(
Aw){this.BQ.BU(false);this.Dk();if(this.CX.Cp){B.pe(this.A8,this);this.CX.BU(false
);}this.Me=this.Bd.An;},Rt:function(Aw){this.Dk();},Rq:function(Aw){this.Dk();},
Mg:function(Aw){var HH=0;if(!!this.Ae)HH=50;this.Bd.Cp=true;if(!this.BQ.Gd)return;
if(this.BQ.C8)return;if(this.BQ.B3>=HH)B.pe(this.A8,this);else{this.CX.JY(HH-this.
BQ.B3);this.CX.BU(true);}},Mf:function(Aw){this.Bd.Cp=false;if(this.CX.Cp){B.pe(
this.A8,this);this.CX.BU(false);}},OV:function(C){if(this.HU===C)return;this.HU=
C;this.Dk();},OX:function(C){if(this.HW===C)return;this.HW=C;this.Dk();},OW:function(
C){if(this.HV===C)return;this.HV=C;this.Dk();},OU:function(C){if((((C===this.HV)&&(
C===this.JQ))&&(C===this.HW))&&(C===this.HU))return;this.HV=C;this.JQ=C;this.HW=
C;this.HU=C;this.Dk();},OS:function(C){if(this.HT===C)return;this.HT=C;this.Dk();
},Bk:function(C){if(this.IJ===C)return;this.IJ=C;this.Dk();},Bj:function(C){if(this.
Ae===C)return;if(!!this.Ae)B.z9([this,this.Md],this.Ae,0);this.Ae=C;if(!!C)B.zV([
this,this.Md],C,0);B.pe([this,this.Md],this);},_Init:function(aArg){B.Core.Ab._Init.
call(this,aArg);B.Core.Timer._Init.call(this.CX={K:this},0);B.Core.Ee._Init.call(
this.Bd={K:this},0);B.Core.BF._Init.call(this.BQ={K:this},0);this.__proto__=E.AN;
this.R(Db);this.CX.IS(0);this.CX.JY(50);this.Bd.DU=149;this.BQ.G_(0x3F);this.BQ.
G$(Ew);this.BQ.Gk(Ex);this.BQ.DZ(EU);this.BQ.Ep(AF);this.BQ.O7(16);this.BQ.MI(100
);this.U(this.BQ,0);this.CX.H4=[this,this.Rr];this.Bd.Ge=[this,this.Rv];this.Bd.
Dl=[this,this.Ru];this.BQ.Lx=[this,this.Rt];this.BQ.Lv=[this,this.Rq];this.BQ.Ge=[
this,this.Mg];this.BQ.Dl=[this,this.Mf];},_Done:function(){this.__proto__=B.Core.
Ab;this.CX._Done();this.Bd._Done();this.BQ._Done();B.Core.Ab._Done.call(this);},
_ReInit:function(){B.Core.Ab._ReInit.call(this);this.CX._ReInit();this.Bd._ReInit(
);this.BQ._ReInit();},_Mark:function(D){var A;B.Core.Ab._Mark.call(this,D);if((A=
this.DQ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CF)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.DP)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CQ)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.B5)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.C4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.HT)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.Ae)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
A8)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CX)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.Bd)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BQ)._cycle!=D)
A._Mark(A._cycle=D);},_className:"WidgetSet::PushButton"};
E._Init=function(){E.Dn.__proto__=E.Ka;E.AN.__proto__=B.Core.Ab;};E._ReInit=function(
){};E.Dc=function(D){};return E;})();

/* Embedded Wizard */