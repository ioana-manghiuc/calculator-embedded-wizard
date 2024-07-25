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
);if(EmWiApp.kR)throw new Error("The unit file 'Application.js' included twice!"
);EmWiApp.kR=(function(){var B=EmWiApp;var E={};
var AX="result here";var AF="C";var Dk="=";var Dl="(";var EB="x";var EC="B";var ED=
"none";var Hk="Expression is null.";var I7="Parantheses used incorrectly.";var I8=
"Expression contains characters that are not allowed.";var I9="Operators used incorrectly.";
var I_=[0,0,340,590];var Kn=[20,30,320,105];var PU=[14,34,314,99];var PV=[20,129
,320,569];var PW=[-270,207,-20,307];var PX=[110,144,230,199];var PY=[-260,394,-120
,449];var PZ=[-329,115,-29,180];var P0="textKeyView is null";var P1="focusedView is null";
var P2=[0,0,300,440];var P3=[0,1,300,440];var P4=[1189,145,1254,195];var Ko="Caption";
var P5=[1189,5,1254,55];var P6=[1189,75,1254,125];var P7=[10,150,80,220];var P8=
"1";var P9=[80,150,150,220];var P_="2";var P$=[151,150,221,220];var Qa="3";var Qb=[
10,220,80,290];var Qc="4";var Qd=[80,220,150,290];var Qe="5";var Qf=[150,220,220
,290];var Qg="6";var Qh=[10,290,80,360];var Qi="7";var Qj=[80,290,150,360];var Qk=
"8";var Ql=[150,290,220,360];var Qm="9";var Qn=[80,360,150,430];var Qo="0";var Qp=[
10,7,80,77];var Qq=[222,290,292,360];var Qr="+";var Qs=[223,220,293,290];var Qt=
"-";var Qu=[221,150,291,220];var Qv=[222,80,292,150];var Qw="/";var Qx=[9,360,79
,430];var Qy=".";var Qz=[80,80,150,150];var QA="^";var QB=[150,79,220,149];var Ii=
"%";var QC=[10,80,45,150];var QD=[45,80,80,150];var QE=")";var QF=[149,359,293,427
];var QG=[222,7,292,77];var Nh=[0,0,250,100];var QH=[0,-1,250,100];var Ni=[0,0,250
,30];var QI=[5,38,235,78];var QJ="no errors";var QK=[213,3,243,28];var QL="X";var
QM=[159,61,243,91];var Nj="OK";var QN=[5,0,145,30];var QO="CALCULATOR ERROR";var
QP=[0,0,120,54];var QQ=[5,2,115,52];var Nk=[7,4,12,50];var Nl=[12,4,17,50];var Nm=[
17,4,22,50];var Nn=[22,4,27,50];var QR=[27,4,32,50];var QS=[32,4,37,50];var QT=[
37,4,42,50];var QU=[42,4,47,50];var QV=[47,4,52,50];var QW=[52,4,57,50];var QX=[
57,4,62,50];var QY=[62,4,67,50];var QZ=[67,4,72,50];var Q0=[72,4,77,50];var Q1=[
77,4,82,50];var Q2=[82,4,87,50];var Q3=[87,4,92,50];var Q4=[92,4,97,50];var Q5=[
97,4,102,50];var Q6=[102,4,107,50];var Q7=[13,6,97,46];var L2="Stack is empty!";
var No=[0,0,140,55];var Q8=[-63,-1,-23,34];var Q9=[-59,100,71,136];var Q_="change battery";
var Q$=[9,5,129,30];var Ra="enter value..";var Rb=[11,30,131,50];var Kp=[0,0];var
Rc=[20,20];var Rd=[-10,-10];var Re="\n";var Rf="\n";var Np=[0,0,160,120];var Rg=[
0,120];var Rh=[160,120];var Ri=[160,0];var Rj=[2,2,157,117];var Rk="Text\n";var Rl=[
50,70];var Rm=[50,50];
E.K5={BS:null,DR:null,Bj:null,Text:null,GB:null,Bm:null,BH:null,D8:null,BA:null,HU:
null,GI:null,BB:null,Bl:function(aArg){var A;this.D8.Od(this);},Oy:function(Au){
var AO;var Fd=B.jV;if(this.Bm.AL!==0x00)AO=String.fromCharCode(this.Bm.AL);else AO=
this.GB.Ju;if((this.Text.String===AX)||(AO===AF))this.PL();if((AO!==Dk)&&(AO!==AF
)){var Mn=this.Text.String.charCodeAt(this.Text.String.length-1)||0;if(AO===Dl){
if(this.Text.String.length>0){if(this.ER(Mn)||(Mn===0x29))Fd=(this.Text.String+EB
)+AO;else Fd=this.Text.String+AO;}else Fd=this.Text.String+AO;}else if((AO===EC)||(
this.Bm.A_===151))Fd=B.ab1(this.Text.String,this.Text.String.length-1,1);else if(
this.ER(AO.charCodeAt(0)||0)){if(Mn===0x29)Fd=(this.Text.String+EB)+AO;else Fd=this.
Text.String+AO;}else Fd=this.Text.String+AO;this.Text.B9(Fd);}if((AO===Dk)&&this.
OV(this.Text.String))this.Text.B9(this.OI(this.Text.String));},OJ:function(BP,HQ
,B2){var Az=0;switch(B2.charCodeAt(0)||0){case 0x2B:Az=BP+HQ;break;case 0x2D:Az=
BP-HQ;break;case 0x78:Az=BP*HQ;break;case 0x2F:if(!!HQ)Az=BP/HQ;else{if(BP<0)Az=
Number.NEGATIVE_INFINITY;if(BP>0)Az=Number.POSITIVE_INFINITY;if(!BP)Az=Number.NaN;
}break;case 0x25:{var Fd=BP*HQ;Az=Fd/100;}break;case 0x5E:Az=Math.pow(BP,HQ);break;
default:Az=0;}return Az;},PL:function(){this.Text.B9(B.jV);},Eu:function(B2){return(((((
B2===0x2B)||(B2===0x2D))||(B2===0x78))||(B2===0x2F))||(B2===0x25))||(B2===0x5E);
},JZ:function(B2){var KS;switch(B2){case 0x78:case 0x2F:KS=2;break;case 0x25:case
0x5E:KS=3;break;default:KS=1;}return KS;},OM:function(R_,Ab){var A;var ND=0;var Az=
B._NewObject(E.Na,0);var Jy=B.jV;var H=R_;if(Ab!==B.jV){if((Ab.charCodeAt(H)||0)===
0x2D){Jy=Jy+String.fromCharCode(Ab.charCodeAt(H)||0);H++;}for(;H<Ab.length;H++)if(
!this.Eu(Ab.charCodeAt(H)||0)&&this.ER(Ab.charCodeAt(H)||0)){Jy=Jy+String.fromCharCode(
Ab.charCodeAt(H)||0);ND=H;}else break;}Az.MU(ND);Az.M0(ED);Az.MV(B.abX(Jy,-1));return Az;
},OV:function(Ab){if(Ab===B.jV){this.KP(this);this.BH.Df.B9(Hk);return false;}else
if(!this.OA(Ab)){this.KP(this);this.BH.Df.B9(I7);return false;}else if(!this.Oz(
Ab)){this.KP(this);this.BH.Df.B9(I8);return false;}else if(!this.PG(Ab)){this.KP(
this);this.BH.Df.B9(I9);return false;}return true;},ER:function(B2){return((B2>=
0x30)&&(B2<=0x39))||(B2===0x2E);},OA:function(Ab){var Eo=B._NewObject(E.MG,0);var
H=0;for(;H<Ab.length;H++)if((Ab.charCodeAt(H)||0)===0x28)Eo.C6(Ab.charCodeAt(H)||
0);else if((Ab.charCodeAt(H)||0)===0x29){if(Eo.Hb())return false;Eo.Fx();}return Eo.
Hb();},PG:function(Ab){var H=0;if(Ab!==B.jV){for(;H<Ab.length;H++)if(!H){if(!(((((
Ab.charCodeAt(H)||0)>=0x30)&&((Ab.charCodeAt(H)||0)<=0x39))||((Ab.charCodeAt(H)||
0)===0x2D))||((Ab.charCodeAt(H)||0)===0x28)))return false;}else{if((((Ab.charCodeAt(
H)||0)===0x2D)&&this.Eu(Ab.charCodeAt(H-1)||0))&&!this.ER(Ab.charCodeAt(H+1)||0)
)return false;if(((this.Eu(Ab.charCodeAt(H)||0)&&this.Eu(Ab.charCodeAt(H-1)||0))&&((
Ab.charCodeAt(H-1)||0)===0x2D))&&((Ab.charCodeAt(H)||0)===0x2D))return false;if(((
Ab.charCodeAt(H)||0)===0x2E)&&((Ab.charCodeAt(H-1)||0)===0x2E))return false;if((
H===(Ab.length-1))&&this.Eu(Ab.charCodeAt(H)||0))return false;}}return true;},Lv:
function(B2){if((B2===0x28)||(B2===0x29))return true;return false;},Oz:function(
Ab){var H=0;for(;H<Ab.length;H++)if(((this.Eu(Ab.charCodeAt(H)||0)===false)&&(this.
Lv(Ab.charCodeAt(H)||0)===false))&&(this.ER(Ab.charCodeAt(H)||0)===false))return false;
return true;},KP:function(Au){this.BA.BY(true);this.BH.AS(true);this.BH.O(B.abM(
this.BH.M,45));this.BH.J6=[this,this.N$];},N$:function(Au){this.BH.O(B.abM(this.
BH.M,-270));this.BH.AS(false);},MR:function(Ab){var H=0;for(;H<Ab.length;H++)if(
!this.ER(Ab.charCodeAt(H)||0)&&!this.OU(Ab.charCodeAt(H)||0))return false;return true;
},OU:function(B2){return B2===0x2E;},PQ:function(Ab){var IC=B._NewObject(E.LZ,0);
var H=0;for(;H<Ab.length;H++)if(this.OW(Ab.charCodeAt(H)||0))continue;else if((this.
ER(Ab.charCodeAt(H)||0)||(((Ab.charCodeAt(H)||0)===0x2E)&&this.ER(Ab.charCodeAt(
H+1)||0)))||((((Ab.charCodeAt(H)||0)===0x2D)&&((!H||this.Eu(Ab.charCodeAt(H-1)||
0))||((Ab.charCodeAt(H-1)||0)===0x28)))&&(this.ER(Ab.charCodeAt(H+1)||0)||((Ab.charCodeAt(
H+1)||0)===0x2E)))){var NI=this.OM(H,Ab);var RK=NI.Lu.toFixed(6).replace(new RegExp(
'0{1,5}$'),'');H=NI.Lg;IC.LS(RK);continue;}else if(this.Eu(Ab.charCodeAt(H)||0)||
this.Lv(Ab.charCodeAt(H)||0)){var Ar;Ar=String.fromCharCode(Ab.charCodeAt(H)||0);
IC.LS(Ar);continue;}else continue;return IC;},OW:function(B2){return((B2===0x00)||(
B2===0x09))||(B2===0x0A);},PP:function(Ab){var IC;var HJ=B._NewObject(E.M7,0);var
CJ=B._NewObject(E.M8,0);IC=this.PQ(Ab);var Cj=IC.D$;while(!!Cj){if(Cj.B5.length===
1){var HT=Cj.B5.charCodeAt(0)||0;if(this.ER(HT)){HJ.C6(Cj.B5);HJ.PJ();}else if(this.
Lv(HT)){if(HT===0x28)CJ.C6(Dl);else if(HT===0x29){while(!CJ.Hb()&&(CJ.Fq()!==Dl)
){HJ.C6(CJ.Fq());CJ.Fx();}if(!CJ.Hb())CJ.Fx();}}else if(this.Eu(HT)){if(!CJ.Hb()
){var top=CJ.Fq().charCodeAt(0)||0;if(this.Eu(top)){if(this.JZ(top)<this.JZ(HT))
CJ.C6(Cj.B5);else if(this.JZ(top)===this.JZ(HT)){HJ.C6(CJ.Fq());CJ.Fx();CJ.C6(Cj.
B5);}}if(top===0x28)CJ.C6(Cj.B5);}else CJ.C6(Cj.B5);}}else if(this.MR(Cj.B5)||this.
MQ(Cj.B5))HJ.C6(Cj.B5);Cj=Cj.B8;}while(!CJ.Hb()){HJ.C6(CJ.Fq());CJ.Fx();}var NE=
B._NewObject(E.LZ,0);var Dn=HJ.D$;while(!!Dn){NE.LS(Dn.B5);Dn=Dn.B8;}return NE;}
,OI:function(Ab){var M2;var Eo=B._NewObject(E.MM,0);var NF;var Ol;M2=this.PP(Ab);
var Cj=M2.D$;while(!!Cj){if(this.Eu(Cj.B5.charCodeAt(0)||0)&&!this.MQ(Cj.B5)){Ol=
Eo.Fq();Eo.Fx();NF=Eo.Fq();Eo.Fx();Eo.C6(this.OJ(NF,Ol,String.fromCharCode(Cj.B5.
charCodeAt(0)||0)));}else Eo.C6(B.abX(Cj.B5,-1));Cj=Cj.B8;}var result;result=Eo.
Fq().toFixed(6).replace(new RegExp('0{1,5}$'),'');return result;},MQ:function(Ab
){var R$=B.ab2(Ab,Ab.length-1);if((((Ab.charCodeAt(0)||0)===0x2D)&&this.MR(R$))&&(
Ab.length>1))return true;return false;},OY:function(){this.Bm.Dg=null;this.D8.BA.
BY(true);if(this.D8.BA.Cl===false){this.D8.AS(false);this.GI.AS(true);}},RQ:function(
Au){if(!this.D8.Dp)this.OY();},_Init:function(aArg){B.Core.Root._Init.call(this,
aArg);B.acf.CH._Init.call(this.BS={K:this},0);B.acf.CH._Init.call(this.DR={K:this
},0);B.acf.Bj._Init.call(this.Bj={K:this},0);B.acf.Text._Init.call(this.Text={K:
this},0);E.LH._Init.call(this.GB={K:this},0);B.Core.Ev._Init.call(this.Bm={K:this
},0);E.BH._Init.call(this.BH={K:this},0);E.IG._Init.call(this.D8={K:this},0);B.acj.
BA._Init.call(this.BA={K:this},0);B.Core.M1._Init.call(this.HU={K:this},0);E.K8.
_Init.call(this.GI={K:this},0);E.Dw._Init.call(this.BB={K:this},0);this.__proto__=
E.K5;var A;this.O(I_);this.BS.O(I_);this.BS.A1(0xFFE9E6E2);this.DR.Du(2);this.DR.
O(Kn);this.DR.O7(0xFFB7A899);this.DR.O8(0xFFB7A899);this.DR.O_(0xFFFFFFFF);this.
DR.O9(0xFFFFFFFF);this.DR.EZ(5);this.DR.A1(0xFFF8E4CF);this.Bj.Du(2);this.Bj.O(Kn
);this.Bj.EZ(5);this.Bj.I2(2);this.Bj.A1(0xFF240303);this.Text.Du(3);this.Text.O(
PU);this.Text.GD(0x14);this.Text.B9(AX);this.Text.A1(0xFF381A0D);this.GB.Du(2);this.
GB.O(PV);this.BH.Du(3);this.BH.O(PW);this.BH.AS(false);this.D8.O(PX);this.BA.MY(
3);this.BA.J_(400);this.BA.LP(0);this.BA.BY(true);this.BA.If=155;this.GI.O(PY);this.
GI.AS(false);this.BB.Du(3);this.BB.O(PZ);this.BB.B9(AX);this.BB.A1(0xFF381A0D);this.
T(this.BS,0);this.T(this.DR,0);this.T(this.Bj,0);this.T(this.Text,0);this.T(this.
GB,0);this.T(this.BH,0);this.T(this.D8,0);this.T(this.GI,0);this.T(this.BB,0);this.
Text.ET(B.aaL(E.JT));this.Bm.Dg=[this,this.Oy];this.Bm.Ea=null;this.BH.J6=[this,
this.N$];this.BA.Cy=[A=this.BH,A.LN,A.Rn];this.HU.LL=[this,this.RQ];this.HU.Pp([
A=this.D8,A.LM,A.IW]);this.BB.ET(B.aaL(E.JT));this.Bl(aArg);},_Done:function(){this.
__proto__=B.Core.Root;this.BS._Done();this.DR._Done();this.Bj._Done();this.Text.
_Done();this.GB._Done();this.Bm._Done();this.BH._Done();this.D8._Done();this.BA.
_Done();this.HU._Done();this.GI._Done();this.BB._Done();B.Core.Root._Done.call(this
);},_ReInit:function(){B.Core.Root._ReInit.call(this);this.BS._ReInit();this.DR.
_ReInit();this.Bj._ReInit();this.Text._ReInit();this.GB._ReInit();this.Bm._ReInit(
);this.BH._ReInit();this.D8._ReInit();this.BA._ReInit();this.HU._ReInit();this.GI.
_ReInit();this.BB._ReInit();},_Mark:function(D){var A;B.Core.Root._Mark.call(this
,D);if((A=this.BS)._cycle!=D)A._Mark(A._cycle=D);if((A=this.DR)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Bj)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Text)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.GB)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
Bm)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BH)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.D8)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BA)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.HU)._cycle!=D)A._Mark(A._cycle=D);if((A=this.GI)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.BB)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::Application"
};E.J5={_class:function(){return B.ach.As;},0:{Data:function(){return B.acs;},Cache:[
],_this:null}};E.JT={_class:function(){return B.ach.As;},0:{Data:function(){return B.
acn;},Cache:[],_this:null}};E.LH={Bj:null,A6:null,Cm:null,Gy:null,GO:null,GP:null
,GQ:null,Fu:null,FD:null,FC:null,Fn:null,Fm:null,FB:null,FA:null,Fk:null,Fr:null
,FE:null,Clear:null,Plus:null,Minus:null,Multiply:null,Divide:null,EQ:null,Power:
null,Fw:null,Fv:null,Fi:null,Equals:null,Cn:null,Di:null,BX:null,Dq:null,BK:null
,BT:null,B7:null,Do:null,C2:null,Ju:B.jV,Ca:function(Au){var NB=(B.acg.Ap.isPrototypeOf(
Au)?Au:null);if(!!NB){this.PF(NB.IR);var KC=0x00;if(this.Ju!==B.jV){KC=this.Ju.charCodeAt(
0)||0;if(KC!==0x00){this.Gz().DriveKeyboardHitting(0,KC,true);this.Gz().DriveKeyboardHitting(
0,KC,false);}}else B.ab5("%s",P0);}else B.ab5("%s",P1);},PF:function(C){if(this.
Ju===C)return;this.Ju=C;},Sc:function(Au){this.Dt();},_Init:function(aArg){B.Core.
Z._Init.call(this,aArg);B.acf.Bj._Init.call(this.Bj={K:this},0);B.acg.C7._Init.call(
this.A6={K:this},0);B.acg.C7._Init.call(this.Cm={K:this},0);B.Core.Timer._Init.call(
this.Gy={K:this},0);B.acg.Ap._Init.call(this.GO={K:this},0);B.acg.Ap._Init.call(
this.GP={K:this},0);B.acg.Ap._Init.call(this.GQ={K:this},0);B.acg.Ap._Init.call(
this.Fu={K:this},0);B.acg.Ap._Init.call(this.FD={K:this},0);B.acg.Ap._Init.call(
this.FC={K:this},0);B.acg.Ap._Init.call(this.Fn={K:this},0);B.acg.Ap._Init.call(
this.Fm={K:this},0);B.acg.Ap._Init.call(this.FB={K:this},0);B.acg.Ap._Init.call(
this.FA={K:this},0);B.acg.Ap._Init.call(this.Fk={K:this},0);B.acg.Ap._Init.call(
this.Fr={K:this},0);B.acg.Ap._Init.call(this.FE={K:this},0);B.acg.Ap._Init.call(
this.Clear={K:this},0);B.acg.Ap._Init.call(this.Plus={K:this},0);B.acg.Ap._Init.
call(this.Minus={K:this},0);B.acg.Ap._Init.call(this.Multiply={K:this},0);B.acg.
Ap._Init.call(this.Divide={K:this},0);B.acg.Ap._Init.call(this.EQ={K:this},0);B.
acg.Ap._Init.call(this.Power={K:this},0);B.acg.Ap._Init.call(this.Fw={K:this},0);
B.acg.Ap._Init.call(this.Fv={K:this},0);B.acg.Ap._Init.call(this.Fi={K:this},0);
B.acg.Ap._Init.call(this.Equals={K:this},0);B.acg.C7._Init.call(this.Cn={K:this}
,0);B.acg.C7._Init.call(this.Di={K:this},0);B.acg.C7._Init.call(this.BX={K:this}
,0);B.acg.C7._Init.call(this.Dq={K:this},0);B.acg.C7._Init.call(this.BK={K:this}
,0);B.acg.C7._Init.call(this.BT={K:this},0);B.acg.C7._Init.call(this.B7={K:this}
,0);B.acg.C7._Init.call(this.Do={K:this},0);B.acg.Ap._Init.call(this.C2={K:this}
,0);this.__proto__=E.LH;this.O(P2);this.Bj.Du(-1);this.Bj.O(P3);this.Bj.EZ(5);this.
Bj.I2(2);this.Bj.A1(0xFF240303);this.A6.Eb(0);this.A6.IU(0x00000403);this.A6.IT(
0x00000000);this.A6.IV(0x3F);this.A6.EU(0xFF746B8E);this.A6.GE(0xFF746B8E);this.
A6.EW(0xFF746B8E);this.A6.EV(0xFF000000);this.A6.IX(0x3F);this.A6.DN(1);this.A6.
DQ(1);this.A6.DP(0);this.A6.DO(0);this.Cm.Eb(136);this.Cm.EU(0xFFFEFCFF);this.Cm.
GE(0xFFFEFCFF);this.Cm.EW(0xFFFEFCFF);this.Cm.EV(0xFF020099);this.Cm.DN(1);this.
Cm.DQ(1);this.Cm.DP(0);this.Cm.DO(0);this.Gy.I0(0);this.Gy.J8(100);this.Gy.BY(false
);this.GO.O(P4);this.GO.Bh(Ko);this.GP.O(P5);this.GP.Bh(Ko);this.GQ.O(P6);this.GQ.
Bh(Ko);this.Fu.O(P7);this.Fu.Bh(P8);this.FD.O(P9);this.FD.Bh(P_);this.FC.O(P$);this.
FC.Bh(Qa);this.Fn.O(Qb);this.Fn.Bh(Qc);this.Fm.O(Qd);this.Fm.Bh(Qe);this.FB.O(Qf
);this.FB.Bh(Qg);this.FA.O(Qh);this.FA.Bh(Qi);this.Fk.O(Qj);this.Fk.Bh(Qk);this.
Fr.O(Ql);this.Fr.Bh(Qm);this.FE.O(Qn);this.FE.Bh(Qo);this.Clear.O(Qp);this.Clear.
Bh(AF);this.Plus.O(Qq);this.Plus.Bh(Qr);this.Minus.O(Qs);this.Minus.Bh(Qt);this.
Multiply.O(Qu);this.Multiply.Bh(EB);this.Divide.O(Qv);this.Divide.Bh(Qw);this.EQ.
H$(0x14);this.EQ.O(Qx);this.EQ.Bh(Qy);this.Power.O(Qz);this.Power.Pi(1);this.Power.
Pk(1);this.Power.Pj(0);this.Power.Ph(0);this.Power.Bh(QA);this.Fw.O(QB);this.Fw.
Bh(Ii);this.Fv.O(QC);this.Fv.Bh(Dl);this.Fi.O(QD);this.Fi.Bh(QE);this.Equals.O(QF
);this.Equals.Bh(Dk);this.Cn.Eb(80);this.Cn.Pl(2);this.Cn.Po(2);this.Cn.Pn(2);this.
Cn.Pm(2);this.Cn.Pg(0x12);this.Cn.DN(1);this.Cn.DQ(1);this.Cn.DP(0);this.Cn.DO(0
);this.Di.Eb(0);this.Di.DN(1);this.Di.DQ(1);this.Di.DP(0);this.Di.DO(0);this.BX.
Eb(0);this.BX.IU(0x00000403);this.BX.IT(0x00000000);this.BX.IV(0x3F);this.BX.EU(
0xFF746B8E);this.BX.GE(0xFF746B8E);this.BX.EW(0xFF746B8E);this.BX.EV(0xFF000000);
this.BX.IX(0x3F);this.BX.DN(1);this.BX.DQ(1);this.BX.DP(0);this.BX.DO(0);this.Dq.
Eb(135);this.Dq.DN(1);this.Dq.DQ(1);this.Dq.DP(0);this.Dq.DO(0);this.BK.Eb(134);
this.BK.IU(0x00000403);this.BK.IT(0x00000000);this.BK.IV(0x3F);this.BK.EU(0xFF746B8E
);this.BK.GE(0xFF746B8E);this.BK.EW(0xFF746B8E);this.BK.EV(0xFF000000);this.BK.IX(
0x3F);this.BK.DN(1);this.BK.DQ(1);this.BK.DP(0);this.BK.DO(0);this.BT.Eb(0);this.
BT.IU(0x00000403);this.BT.IT(0x00000000);this.BT.IV(0x3F);this.BT.EU(0xFFFEFCFF);
this.BT.GE(0xFFFEFCFF);this.BT.EW(0xFFFEFCFF);this.BT.EV(0xFF000000);this.BT.IX(
0x3F);this.BT.DN(1);this.BT.DQ(1);this.BT.DP(0);this.BT.DO(0);this.B7.Eb(0);this.
B7.IU(0x00000403);this.B7.IT(0x00000000);this.B7.IV(0x3F);this.B7.EU(0xFF746B8E);
this.B7.GE(0xFF746B8E);this.B7.EW(0xFF746B8E);this.B7.EV(0xFF000000);this.B7.IX(
0x3F);this.B7.DN(1);this.B7.DQ(1);this.B7.DP(0);this.B7.DO(0);this.Do.Eb(151);this.
Do.DN(1);this.Do.DQ(1);this.Do.DP(0);this.Do.DO(0);this.C2.O(QG);this.C2.Bh(EC);
this.T(this.Bj,0);this.T(this.GO,0);this.T(this.GP,0);this.T(this.GQ,0);this.T(this.
Fu,0);this.T(this.FD,0);this.T(this.FC,0);this.T(this.Fn,0);this.T(this.Fm,0);this.
T(this.FB,0);this.T(this.FA,0);this.T(this.Fk,0);this.T(this.Fr,0);this.T(this.FE
,0);this.T(this.Clear,0);this.T(this.Plus,0);this.T(this.Minus,0);this.T(this.Multiply
,0);this.T(this.Divide,0);this.T(this.EQ,0);this.T(this.Power,0);this.T(this.Fw,
0);this.T(this.Fv,0);this.T(this.Fi,0);this.T(this.Equals,0);this.T(this.C2,0);this.
A6.EX(B.aaL(E.J5));this.A6.DJ(B.aaL(E.CG));this.A6.DM(B.aaL(E.CG));this.A6.DL(B.
aaL(E.CG));this.A6.DK(B.aaL(E.CG));this.Cm.LQ(null);this.Cm.EX(B.aaL(E.Lh));this.
Cm.DJ(B.aaL(E.HY));this.Cm.DM(B.aaL(E.HY));this.Cm.DL(B.aaL(E.HY));this.Cm.DK(B.
aaL(E.HY));this.Gy.Ia=[this,this.Sc];this.GO.Bg(this.A6);this.GP.Bg(this.Cn);this.
GQ.Bg(this.Di);this.Fu.Bf=[this,this.Ca];this.Fu.Bg(this.A6);this.FD.Bf=[this,this.
Ca];this.FD.Bg(this.A6);this.FC.Bf=[this,this.Ca];this.FC.Bg(this.A6);this.Fn.Bf=[
this,this.Ca];this.Fn.Bg(this.A6);this.Fm.Bf=[this,this.Ca];this.Fm.Bg(this.A6);
this.FB.Bf=[this,this.Ca];this.FB.Bg(this.A6);this.FA.Bf=[this,this.Ca];this.FA.
Bg(this.A6);this.Fk.Bf=[this,this.Ca];this.Fk.Bg(this.A6);this.Fr.Bf=[this,this.
Ca];this.Fr.Bg(this.A6);this.FE.Bf=[this,this.Ca];this.FE.Bg(this.A6);this.Clear.
Bf=[this,this.Ca];this.Clear.Bg(this.BK);this.Plus.Bf=[this,this.Ca];this.Plus.Bg(
this.BX);this.Minus.Bf=[this,this.Ca];this.Minus.Bg(this.BK);this.Multiply.Bf=[this
,this.Ca];this.Multiply.Bg(this.BK);this.Divide.Bf=[this,this.Ca];this.Divide.Bg(
this.Dq);this.EQ.Bf=[this,this.Ca];this.EQ.Bg(this.A6);this.Power.Bf=[this,this.
Ca];this.Power.Pf(null);this.Power.Bg(this.Cn);this.Fw.Bf=[this,this.Ca];this.Fw.
Bg(this.Di);this.Fv.Bf=[this,this.Ca];this.Fv.Bg(this.BT);this.Fi.Bf=[this,this.
Ca];this.Fi.Bg(this.BT);this.Equals.Bf=[this,this.Ca];this.Equals.Bg(this.Cm);this.
Cn.DJ(B.aaL(E.Id));this.Cn.DM(B.aaL(E.Id));this.Cn.DL(B.aaL(E.Id));this.Cn.DK(B.
aaL(E.Id));this.Di.DJ(B.aaL(E.Ic));this.Di.DM(B.aaL(E.Ic));this.Di.DL(B.aaL(E.Ic
));this.Di.DK(B.aaL(E.Ic));this.BX.EX(B.aaL(E.LF));this.BX.DJ(B.aaL(E.CG));this.
BX.DM(B.aaL(E.CG));this.BX.DL(B.aaL(E.CG));this.BX.DK(B.aaL(E.CG));this.Dq.DJ(B.
aaL(E.HW));this.Dq.DM(B.aaL(E.HW));this.Dq.DL(B.aaL(E.HW));this.Dq.DK(B.aaL(E.HW
));this.BK.EX(B.aaL(E.LE));this.BK.DJ(B.aaL(E.CG));this.BK.DM(B.aaL(E.CG));this.
BK.DL(B.aaL(E.CG));this.BK.DK(B.aaL(E.CG));this.BT.EX(B.aaL(E.J5));this.BT.DJ(B.
aaL(E.Ib));this.BT.DM(B.aaL(E.Ib));this.BT.DL(B.aaL(E.Ib));this.BT.DK(B.aaL(E.Ib
));this.B7.EX(B.aaL(E.LG));this.B7.DJ(B.aaL(E.CG));this.B7.DM(B.aaL(E.CG));this.
B7.DL(B.aaL(E.CG));this.B7.DK(B.aaL(E.CG));this.Do.DJ(B.aaL(E.C2));this.Do.DM(B.
aaL(E.C2));this.Do.DL(B.aaL(E.C2));this.Do.DK(B.aaL(E.C2));this.C2.Bf=[this,this.
Ca];this.C2.Bg(this.Do);},_Done:function(){this.__proto__=B.Core.Z;this.Bj._Done(
);this.A6._Done();this.Cm._Done();this.Gy._Done();this.GO._Done();this.GP._Done(
);this.GQ._Done();this.Fu._Done();this.FD._Done();this.FC._Done();this.Fn._Done(
);this.Fm._Done();this.FB._Done();this.FA._Done();this.Fk._Done();this.Fr._Done(
);this.FE._Done();this.Clear._Done();this.Plus._Done();this.Minus._Done();this.Multiply.
_Done();this.Divide._Done();this.EQ._Done();this.Power._Done();this.Fw._Done();this.
Fv._Done();this.Fi._Done();this.Equals._Done();this.Cn._Done();this.Di._Done();this.
BX._Done();this.Dq._Done();this.BK._Done();this.BT._Done();this.B7._Done();this.
Do._Done();this.C2._Done();B.Core.Z._Done.call(this);},_ReInit:function(){B.Core.
Z._ReInit.call(this);this.Bj._ReInit();this.A6._ReInit();this.Cm._ReInit();this.
Gy._ReInit();this.GO._ReInit();this.GP._ReInit();this.GQ._ReInit();this.Fu._ReInit(
);this.FD._ReInit();this.FC._ReInit();this.Fn._ReInit();this.Fm._ReInit();this.FB.
_ReInit();this.FA._ReInit();this.Fk._ReInit();this.Fr._ReInit();this.FE._ReInit(
);this.Clear._ReInit();this.Plus._ReInit();this.Minus._ReInit();this.Multiply._ReInit(
);this.Divide._ReInit();this.EQ._ReInit();this.Power._ReInit();this.Fw._ReInit();
this.Fv._ReInit();this.Fi._ReInit();this.Equals._ReInit();this.Cn._ReInit();this.
Di._ReInit();this.BX._ReInit();this.Dq._ReInit();this.BK._ReInit();this.BT._ReInit(
);this.B7._ReInit();this.Do._ReInit();this.C2._ReInit();},_Mark:function(D){var A;
B.Core.Z._Mark.call(this,D);if((A=this.Bj)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
A6)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Cm)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.Gy)._cycle!=D)A._Mark(A._cycle=D);if((A=this.GO)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.GP)._cycle!=D)A._Mark(A._cycle=D);if((A=this.GQ)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Fu)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FD)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.FC)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Fn
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Fm)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.FB)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FA)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Fk)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Fr)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.FE)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Clear)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.Plus)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
Minus)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Multiply)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Divide)._cycle!=D)A._Mark(A._cycle=D);if((A=this.EQ)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Power)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Fw)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.Fv)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
Fi)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Equals)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Cn)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Di)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.BX)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Dq)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.BK)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BT
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.B7)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.Do)._cycle!=D)A._Mark(A._cycle=D);if((A=this.C2)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Application::NumKeyBtns"};E.CG={_class:function(){return B.ach.
Ai;},0:{FileName:"./res/ApplicationCustomBtn.png",Format:B._PIXEL_FORMAT_NATIVE,
NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:null}};E.HY={_class:function(){
return B.ach.Ai;},0:{FileName:"./res/ApplicationEqualsBtn.png",Format:B._PIXEL_FORMAT_NATIVE
,NoOfFrames:2,FrameSize:[140,70],FrameDelay:0,_this:null}};E.Lh={_class:function(
){return B.ach.As;},0:{Data:function(){return B.aco;},Cache:[],_this:null}};E.Ic={
_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationPercentBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};E.Id={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationPowBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};E.LF={_class:function(){return B.ach.As;},0:{Data:function(){return B.acr;
},Cache:[],_this:null}};E.HW={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationDivideBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};E.LE={_class:function(){return B.ach.As;},0:{Data:function(){return B.acq;
},Cache:[],_this:null}};E.Na={M$:ED,Lu:0,Lg:-1,Bl:function(aArg){this.MV(Number.
POSITIVE_INFINITY);this.MU(-1);this.M0(ED);},MV:function(C){if(this.Lu===C)return;
this.Lu=C;},MU:function(C){if(this.Lg===C)return;this.Lg=C;},M0:function(C){if(this.
M$===C)return;this.M$=C;},_Init:function(aArg){this.__proto__=E.Na;this.Bl(aArg);
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:
0,_observers:null,_className:"Application::Tuple"};E.BH={J6:null,BS:null,Fh:null
,E1:null,GJ:null,D9:null,Df:null,Ap:null,Cz:null,Bw:null,EA:null,N8:function(Au){
B.aaS(this.J6,this);},_Init:function(aArg){B.Core.Z._Init.call(this,aArg);B.acf.
CH._Init.call(this.BS={K:this},0);B.acf.Bj._Init.call(this.Fh={K:this},0);B.acf.
CH._Init.call(this.E1={K:this},0);B.acf.Bj._Init.call(this.GJ={K:this},0);B.acg.
C7._Init.call(this.D9={K:this},0);B.acf.Text._Init.call(this.Df={K:this},0);B.acg.
Ap._Init.call(this.Ap={K:this},0);B.acg.Ap._Init.call(this.Cz={K:this},0);B.acg.
C7._Init.call(this.Bw={K:this},0);B.acf.Text._Init.call(this.EA={K:this},0);this.
__proto__=E.BH;this.O(Nh);this.BS.O(Nh);this.BS.EZ(3);this.BS.A1(0xFFE9E6E2);this.
Fh.O(QH);this.Fh.EZ(3);this.Fh.I2(2);this.Fh.A1(0xFF000447);this.E1.O(Ni);this.E1.
Pt(3);this.E1.Ps(3);this.E1.EZ(3);this.E1.A1(0xFF020099);this.GJ.O(Ni);this.GJ.I2(
2);this.GJ.A1(0xFF000446);this.D9.Eb(149);this.D9.EU(0xFFFFFFFF);this.D9.EW(0xFFFFFFFF
);this.D9.EV(0xFF000000);this.D9.MW(3);this.D9.Kb(0x12);this.Df.O(QI);this.Df.Kc(
true);this.Df.GD(0x9);this.Df.B9(QJ);this.Df.A1(0xFF00022D);this.Ap.O(QK);this.Ap.
Bh(QL);this.Cz.H$(0x18);this.Cz.O(QM);this.Cz.Bh(Nj);this.Bw.Eb(149);this.Bw.Pw(
0x00319420);this.Bw.Px(0x002A843A);this.Bw.Py(0);this.Bw.Pz(0);this.Bw.PA(0x00517ECC
);this.Bw.PB(0x001F32B7);this.Bw.PC(0x3F);this.Bw.EU(0xFFFFFFFF);this.Bw.EW(0xFFFFFFFF
);this.Bw.EV(0xFF000000);this.Bw.MW(3);this.Bw.Kb(0x92);this.Bw.DN(1);this.Bw.DQ(
1);this.Bw.DP(0);this.Bw.DO(0);this.EA.O(QN);this.EA.Kc(true);this.EA.GD(0x19);this.
EA.B9(QO);this.EA.A1(0xFFDDE6F2);this.T(this.BS,0);this.T(this.Fh,0);this.T(this.
E1,0);this.T(this.GJ,0);this.T(this.Df,0);this.T(this.Ap,0);this.T(this.Cz,0);this.
T(this.EA,0);this.D9.EX(B.aaL(E.JQ));this.Df.ET(B.aaL(E.JV));this.Ap.Bf=[this,this.
N8];this.Ap.Bg(this.D9);this.Cz.Bf=[this,this.N8];this.Cz.Bg(this.Bw);this.Bw.EX(
B.aaL(E.JQ));this.Bw.DJ(B.aaL(E.H8));this.Bw.DM(B.aaL(E.H8));this.Bw.DL(B.aaL(E.
H8));this.Bw.DK(B.aaL(E.H8));this.EA.ET(B.aaL(E.JV));},_Done:function(){this.__proto__=
B.Core.Z;this.BS._Done();this.Fh._Done();this.E1._Done();this.GJ._Done();this.D9.
_Done();this.Df._Done();this.Ap._Done();this.Cz._Done();this.Bw._Done();this.EA.
_Done();B.Core.Z._Done.call(this);},_ReInit:function(){B.Core.Z._ReInit.call(this
);this.BS._ReInit();this.Fh._ReInit();this.E1._ReInit();this.GJ._ReInit();this.D9.
_ReInit();this.Df._ReInit();this.Ap._ReInit();this.Cz._ReInit();this.Bw._ReInit(
);this.EA._ReInit();},_Mark:function(D){var A;B.Core.Z._Mark.call(this,D);if((A=
this.J6)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.BS)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Fh)._cycle!=D)A._Mark(A._cycle=D);if((A=this.E1)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.GJ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.D9
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Df)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.Ap)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Cz)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Bw)._cycle!=D)A._Mark(A._cycle=D);if((A=this.EA)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Application::ErrorDialog"};E.JV={_class:function(){return B.
ach.As;},0:{Data:function(){return B.acp;},Cache:[],_this:null}};E.JQ={_class:function(
){return B.ach.As;},0:{Data:function(){return B.acl;},Cache:[],_this:null}};E.H8={
_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationOKBtn.png",Format:
B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,30],FrameDelay:0,_this:null}};
E.Ib={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationParenthesisBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[35,70],FrameDelay:0,_this:
null}};E.LG={_class:function(){return B.ach.As;},0:{Data:function(){return B.act;
},Cache:[],_this:null}};E.C2={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationBackBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};E.K6={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationBatteryBgk.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[110,50],FrameDelay:0,_this:
null}};E.B4={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationBatteryLine.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[5,46],FrameDelay:0,_this:
null}};E.IG={AG:B.abi(20,null,null),BR:B.abi(20,null,null),BS:null,Gi:null,Gj:null
,Gk:null,Gl:null,GT:null,GU:null,GV:null,GW:null,Gd:null,Ge:null,Gf:null,Gg:null
,Gh:null,FV:null,FW:null,FX:null,FY:null,FZ:null,F0:null,F_:null,F$:null,Ga:null
,Gb:null,Gc:null,Timer:null,Text:null,BA:null,Dp:7,Od:function(Au){var A;this.IW((
this.Dp-0.05)|0);var AO;AO=this.Dp.toFixed();if(this.Dp<50)this.Text.A1(0xFF005FBC
);if(this.Dp<20)this.Text.A1(0xFF1400CB);this.Text.B9(AO);if(this.Dp<0)this.IW(0
);if(this.Dp<20)this.PS(this.Dp);else this.PR(this.Dp);},PR:function(Mv){var Mo=(
Mv/5)|0;var H=0;for(;H<20;H++)if(H<Mo)this.AG.Get(H).AS(true);else this.AG.Get(H
).AS(false);},PS:function(Mv){this.OR();var Mo=(Mv/5)|0;var H=0;for(;H<20;H++)if(
H<Mo)this.BR.Get(H).AS(true);else this.BR.Get(H).AS(false);},OR:function(){this.
AG.Get(0).AS(false);this.AG.Get(1).AS(false);this.AG.Get(2).AS(false);this.AG.Get(
3).AS(false);this.AG.Get(4).AS(false);this.AG.Get(5).AS(false);this.AG.Get(6).AS(
false);this.AG.Get(7).AS(false);this.AG.Get(8).AS(false);this.AG.Get(9).AS(false
);this.AG.Get(10).AS(false);this.AG.Get(11).AS(false);this.AG.Get(12).AS(false);
this.AG.Get(13).AS(false);this.AG.Get(14).AS(false);this.AG.Get(15).AS(false);this.
AG.Get(16).AS(false);this.AG.Get(17).AS(false);this.AG.Get(18).AS(false);this.AG.
Get(19).AS(false);},LM:function(){return this.Dp;},IW:function(C){if(this.Dp===C
)return;this.Dp=C;{}B.abo([this,this.LM,this.IW],0);},UpdateProperty:function(Ns
){if(Ns!==this.Dp){this.Dp=Ns;B.abo([this,this.LM,this.IW],0);}},_Init:function(
aArg){B.Core.Z._Init.call(this,aArg);B.acf.Bp._Init.call(this.BS={K:this},0);B.acf.
Bp._Init.call(this.Gi={K:this},0);B.acf.Bp._Init.call(this.Gj={K:this},0);B.acf.
Bp._Init.call(this.Gk={K:this},0);B.acf.Bp._Init.call(this.Gl={K:this},0);B.acf.
Bp._Init.call(this.GT={K:this},0);B.acf.Bp._Init.call(this.GU={K:this},0);B.acf.
Bp._Init.call(this.GV={K:this},0);B.acf.Bp._Init.call(this.GW={K:this},0);B.acf.
Bp._Init.call(this.Gd={K:this},0);B.acf.Bp._Init.call(this.Ge={K:this},0);B.acf.
Bp._Init.call(this.Gf={K:this},0);B.acf.Bp._Init.call(this.Gg={K:this},0);B.acf.
Bp._Init.call(this.Gh={K:this},0);B.acf.Bp._Init.call(this.FV={K:this},0);B.acf.
Bp._Init.call(this.FW={K:this},0);B.acf.Bp._Init.call(this.FX={K:this},0);B.acf.
Bp._Init.call(this.FY={K:this},0);B.acf.Bp._Init.call(this.FZ={K:this},0);B.acf.
Bp._Init.call(this.F0={K:this},0);B.acf.Bp._Init.call(this.F_={K:this},0);B.acf.
Bp._Init.call(this.F$={K:this},0);B.acf.Bp._Init.call(this.Ga={K:this},0);B.acf.
Bp._Init.call(this.Gb={K:this},0);B.acf.Bp._Init.call(this.Gc={K:this},0);B.Core.
Timer._Init.call(this.Timer={K:this},0);B.acf.Text._Init.call(this.Text={K:this}
,0);B.acj.BA._Init.call(this.BA={K:this},0);(this.AG=[]).__proto__=E.IG.AG;(this.
BR=[]).__proto__=E.IG.BR;this.__proto__=E.IG;var A;this.O(QP);this.BS.O(QQ);this.
Gi.O(Nk);this.Gi.AS(true);this.Gj.O(Nl);this.Gj.AS(true);this.Gk.O(Nm);this.Gk.AS(
true);this.Gl.O(Nn);this.Gl.AS(true);this.GT.O(Nk);this.GU.O(Nl);this.GV.O(Nm);this.
GW.O(Nn);this.Gd.O(QR);this.Ge.O(QS);this.Gf.O(QT);this.Gg.O(QU);this.Gh.O(QV);this.
FV.O(QW);this.FW.O(QX);this.FX.O(QY);this.FY.O(QZ);this.FZ.O(Q0);this.F0.O(Q1);this.
F_.O(Q2);this.F$.O(Q3);this.Ga.O(Q4);this.Gb.O(Q5);this.Gc.O(Q6);this.Timer.I0(7000
);this.Timer.BY(true);this.Text.O(Q7);this.Text.B9(B.jV);this.Text.A1(0xFF064600
);this.BA.MY(5);this.BA.J_(500);this.T(this.BS,0);this.T(this.Gi,0);this.T(this.
Gj,0);this.T(this.Gk,0);this.T(this.Gl,0);this.T(this.GT,0);this.T(this.GU,0);this.
T(this.GV,0);this.T(this.GW,0);this.T(this.Gd,0);this.T(this.Ge,0);this.T(this.Gf
,0);this.T(this.Gg,0);this.T(this.Gh,0);this.T(this.FV,0);this.T(this.FW,0);this.
T(this.FX,0);this.T(this.FY,0);this.T(this.FZ,0);this.T(this.F0,0);this.T(this.F_
,0);this.T(this.F$,0);this.T(this.Ga,0);this.T(this.Gb,0);this.T(this.Gc,0);this.
T(this.Text,0);this.BS.Bn(B.aaL(E.K6));this.Gi.Bn(B.aaL(E.H5));this.Gj.Bn(B.aaL(
E.H5));this.Gk.Bn(B.aaL(E.H5));this.Gl.Bn(B.aaL(E.H5));this.GT.Bn(B.aaL(E.B4));this.
GU.Bn(B.aaL(E.B4));this.GV.Bn(B.aaL(E.B4));this.GW.Bn(B.aaL(E.B4));this.Gd.Bn(B.
aaL(E.B4));this.Ge.Bn(B.aaL(E.B4));this.Gf.Bn(B.aaL(E.B4));this.Gg.Bn(B.aaL(E.B4
));this.Gh.Bn(B.aaL(E.B4));this.FV.Bn(B.aaL(E.B4));this.FW.Bn(B.aaL(E.B4));this.
FX.Bn(B.aaL(E.B4));this.FY.Bn(B.aaL(E.B4));this.FZ.Bn(B.aaL(E.B4));this.F0.Bn(B.
aaL(E.B4));this.F_.Bn(B.aaL(E.B4));this.F$.Bn(B.aaL(E.B4));this.Ga.Bn(B.aaL(E.B4
));this.Gb.Bn(B.aaL(E.B4));this.Gc.Bn(B.aaL(E.B4));this.Timer.Ia=[this,this.Od];
this.AG.Set(0,this.GT);this.AG.Set(1,this.GU);this.AG.Set(2,this.GV);this.AG.Set(
3,this.GW);this.AG.Set(4,this.Gd);this.AG.Set(5,this.Ge);this.AG.Set(6,this.Gf);
this.AG.Set(7,this.Gg);this.AG.Set(8,this.Gh);this.AG.Set(9,this.FV);this.AG.Set(
10,this.FW);this.AG.Set(11,this.FX);this.AG.Set(12,this.FY);this.AG.Set(13,this.
FZ);this.AG.Set(14,this.F0);this.AG.Set(15,this.F_);this.AG.Set(16,this.F$);this.
AG.Set(17,this.Ga);this.AG.Set(18,this.Gb);this.AG.Set(19,this.Gc);this.Text.ET(
B.aaL(E.K7));this.BR.Set(0,this.Gi);this.BR.Set(1,this.Gj);this.BR.Set(2,this.Gk
);this.BR.Set(3,this.Gl);this.BR.Set(4,this.Gd);this.BR.Set(5,this.Ge);this.BR.Set(
6,this.Gf);this.BR.Set(7,this.Gg);this.BR.Set(8,this.Gh);this.BR.Set(9,this.FV);
this.BR.Set(10,this.FW);this.BR.Set(11,this.FX);this.BR.Set(12,this.FY);this.BR.
Set(13,this.FZ);this.BR.Set(14,this.F0);this.BR.Set(15,this.F_);this.BR.Set(16,this.
F$);this.BR.Set(17,this.Ga);this.BR.Set(18,this.Gb);this.BR.Set(19,this.Gc);this.
BA.Cy=[A=this.Text,A.LN,A.Hf];},_Done:function(){this.__proto__=B.Core.Z;this.BS.
_Done();this.Gi._Done();this.Gj._Done();this.Gk._Done();this.Gl._Done();this.GT.
_Done();this.GU._Done();this.GV._Done();this.GW._Done();this.Gd._Done();this.Ge.
_Done();this.Gf._Done();this.Gg._Done();this.Gh._Done();this.FV._Done();this.FW.
_Done();this.FX._Done();this.FY._Done();this.FZ._Done();this.F0._Done();this.F_.
_Done();this.F$._Done();this.Ga._Done();this.Gb._Done();this.Gc._Done();this.Timer.
_Done();this.Text._Done();this.BA._Done();B.Core.Z._Done.call(this);},_ReInit:function(
){B.Core.Z._ReInit.call(this);this.BS._ReInit();this.Gi._ReInit();this.Gj._ReInit(
);this.Gk._ReInit();this.Gl._ReInit();this.GT._ReInit();this.GU._ReInit();this.GV.
_ReInit();this.GW._ReInit();this.Gd._ReInit();this.Ge._ReInit();this.Gf._ReInit(
);this.Gg._ReInit();this.Gh._ReInit();this.FV._ReInit();this.FW._ReInit();this.FX.
_ReInit();this.FY._ReInit();this.FZ._ReInit();this.F0._ReInit();this.F_._ReInit(
);this.F$._ReInit();this.Ga._ReInit();this.Gb._ReInit();this.Gc._ReInit();this.Timer.
_ReInit();this.Text._ReInit();this.BA._ReInit();},_Mark:function(D){var A;B.Core.
Z._Mark.call(this,D);B.aa6(this.AG,D);B.aa6(this.BR,D);if((A=this.BS)._cycle!=D)
A._Mark(A._cycle=D);if((A=this.Gi)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gj).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Gk)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.Gl)._cycle!=D)A._Mark(A._cycle=D);if((A=this.GT)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.GU)._cycle!=D)A._Mark(A._cycle=D);if((A=this.GV)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.GW)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gd)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.Ge)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gf
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gg)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.Gh)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FV)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.FW)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FX)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.FY)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FZ)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.F0)._cycle!=D)A._Mark(A._cycle=D);if((A=this.F_
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.F$)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.Ga)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gb)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Gc)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Timer)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Text)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BA)._cycle
!=D)A._Mark(A._cycle=D);},_className:"Application::Battery"};E.LY={B8:null,B5:B.
jV,J$:function(C){if(this.B5===C)return;this.B5=C;},EY:function(C){if(this.B8===
C)return;this.B8=C;},_Init:function(aArg){this.__proto__=E.LY;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.B8)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Application::SimpleStringElement"
};E.M7={D$:null,Eq:null,Dv:0,Dr:false,C6:function(FG){var CX=B._NewObject(E.LY,0
);CX.J$(FG);CX.EY(null);if(!this.D$){this.IZ(CX);this.H_(CX);}else{this.Eq.EY(CX
);this.H_(CX);}},Bl:function(aArg){this.IZ(null);this.H_(null);this.Ft(0);this.Fs(
true);},PJ:function(){var Dn=this.D$;while(!!Dn){B.ab5("%s",Dn.B5);Dn=Dn.B8;}},IZ:
function(C){if(this.D$===C)return;this.D$=C;},H_:function(C){if(this.Eq===C)return;
this.Eq=C;},Ft:function(C){if(this.Dv===C)return;this.Dv=C;},Fs:function(C){if(this.
Dr===C)return;this.Dr=C;},_Init:function(aArg){this.__proto__=E.M7;this.Bl(aArg);
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.D$)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Eq
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Application::StrQueue"};E.M8={Bx:
null,Dv:0,Dr:false,Bl:function(aArg){this.Ey(null);this.Ft(0);this.Fs(true);},Ey:
function(C){if(this.Bx===C)return;this.Bx=C;},Ft:function(C){if(this.Dv===C)return;
this.Dv=C;},Fs:function(C){if(this.Dr===C)return;this.Dr=C;},C6:function(FG){var
CX=B._NewObject(E.LY,0);CX.J$(FG);CX.EY(this.Bx);this.Ey(CX);},Fx:function(){var
Dn=this.Bx;if(!Dn)B.ab5("%s",L2);else this.Ey(this.Bx.B8);},Fq:function(){if(!!this.
Bx)return this.Bx.B5;return B.jV;},Hb:function(){if(!this.Bx)return true;return false;
},_Init:function(aArg){this.__proto__=E.M8;this.Bl(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Bx)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Application::StrStack"
};E.M6={B8:null,Lb:0,Pa:function(C){if(this.Lb===C)return;this.Lb=C;},EY:function(
C){if(this.B8===C)return;this.B8=C;},_Init:function(aArg){this.__proto__=E.M6;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.B8)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K
)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Application::SimpleFloatElement"};E.MM={Bx:null,Dv:0,Dr:false,Bl:function(aArg){
this.Ey(null);this.Ft(0);this.Fs(true);},Ey:function(C){if(this.Bx===C)return;this.
Bx=C;},Ft:function(C){if(this.Dv===C)return;this.Dv=C;},Fs:function(C){if(this.Dr===
C)return;this.Dr=C;},C6:function(FG){var Md=B._NewObject(E.M6,0);Md.Pa(FG);Md.EY(
this.Bx);this.Ey(Md);},Fx:function(){var Dn=this.Bx;if(!Dn)B.ab5("%s",L2);else this.
Ey(this.Bx.B8);},Fq:function(){if(!!this.Bx)return this.Bx.Lb;return 0;},_Init:function(
aArg){this.__proto__=E.MM;this.Bl(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Bx)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Application::FloatStack"};E.M9={B8:null,LR:
null,B5:B.jV,J$:function(C){if(this.B5===C)return;this.B5=C;},EY:function(C){if(
this.B8===C)return;this.B8=C;},Pq:function(C){if(this.LR===C)return;this.LR=C;},
_Init:function(aArg){this.__proto__=E.M9;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.B8)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.LR)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Application::StringElement"};E.LZ={D$:null,Eq:null,Dv:0,Dr:false,Bl:function(aArg
){this.IZ(null);this.H_(null);this.Ft(0);this.Fs(true);},IZ:function(C){if(this.
D$===C)return;this.D$=C;},H_:function(C){if(this.Eq===C)return;this.Eq=C;},Ft:function(
C){if(this.Dv===C)return;this.Dv=C;},Fs:function(C){if(this.Dr===C)return;this.Dr=
C;},LS:function(FG){var CX=B._NewObject(E.M9,0);CX.J$(FG);CX.EY(null);CX.Pq(this.
Eq);if(!!this.Eq)this.Eq.EY(CX);else this.IZ(CX);this.H_(CX);},_Init:function(aArg
){this.__proto__=E.LZ;this.Bl(aArg);B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.D$)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Eq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Application::StrVector"};E.MG={Bx:null,Dv:0,Dr:false,Bl:function(aArg){this.Ey(
null);this.Ft(0);this.Fs(true);},Ey:function(C){if(this.Bx===C)return;this.Bx=C;
},Ft:function(C){if(this.Dv===C)return;this.Dv=C;},Fs:function(C){if(this.Dr===C
)return;this.Dr=C;},C6:function(FG){var L_=B._NewObject(E.M5,0);L_.O$(FG);L_.EY(
this.Bx);this.Ey(L_);},Fx:function(){var Dn=this.Bx;if(!Dn)B.ab5("%s",L2);else this.
Ey(this.Bx.B8);},Hb:function(){if(!this.Bx)return true;return false;},_Init:function(
aArg){this.__proto__=E.MG;this.Bl(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Bx)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Application::CharStack"};E.M5={B8:null,MI:
0,O$:function(C){if(this.MI===C)return;this.MI=C;},EY:function(C){if(this.B8===C
)return;this.B8=C;},_Init:function(aArg){this.__proto__=E.M5;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.B8)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Application::SimpleCharElement"
};E.K7={_class:function(){return B.ach.As;},0:{Data:function(){return B.ack;},Cache:[
],_this:null}};E.H5={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationLowBattery.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[5,46],FrameDelay:0,_this:
null}};E.K8={Cz:null,Ap:null,Ck:null,CH:null,BB:null,Cx:null,GG:null,_Init:function(
aArg){B.Core.Z._Init.call(this,aArg);B.acg.Ap._Init.call(this.Cz={K:this},0);B.acg.
Ap._Init.call(this.Ap={K:this},0);B.acg.C7._Init.call(this.Ck={K:this},0);B.acf.
CH._Init.call(this.CH={K:this},0);E.Dw._Init.call(this.BB={K:this},0);B.acg.C7._Init.
call(this.Cx={K:this},0);B.acg.Ap._Init.call(this.GG={K:this},0);this.__proto__=
E.K8;this.O(No);this.Cz.O(Q8);this.Cz.Bh(Ko);this.Ap.O(Q9);this.Ap.Bh(Q_);this.Ck.
EU(0xFFECD9C5);this.Ck.GE(0xFFECD9C5);this.Ck.EW(0xFF4C2B00);this.Ck.EV(0xFF4C2B00
);this.Ck.Kb(0x52);this.Ck.DN(1);this.Ck.DQ(1);this.Ck.DP(0);this.Ck.DO(0);this.
CH.O(No);this.CH.A1(0xFF6D544B);this.BB.O(Q$);this.BB.B9(Ra);this.BB.A1(0xFFFFFFFF
);this.Cx.EU(0xFFECD9C5);this.Cx.GE(0xFFECD9C5);this.Cx.EW(0xFF4C2B00);this.Cx.EV(
0xFF4C2B00);this.Cx.Kb(0x52);this.Cx.DN(1);this.Cx.DQ(1);this.Cx.DP(0);this.Cx.DO(
0);this.GG.O(Rb);this.GG.Bh(Nj);this.T(this.Cz,0);this.T(this.Ap,0);this.T(this.
CH,0);this.T(this.BB,0);this.T(this.GG,0);this.Cz.Bg(this.Ck);this.Ap.Bg(this.Ck
);this.Ck.EX(B.aaL(E.IH));this.Ck.DJ(B.aaL(E.HV));this.Ck.DM(B.aaL(E.HV));this.Ck.
DL(B.aaL(E.HV));this.Ck.DK(B.aaL(E.HV));this.BB.ET(B.aaL(E.IH));this.Cx.EX(B.aaL(
E.IH));this.Cx.DJ(B.aaL(E.H9));this.Cx.DM(B.aaL(E.H9));this.Cx.DL(B.aaL(E.H9));this.
Cx.DK(B.aaL(E.H9));this.GG.Bg(this.Cx);},_Done:function(){this.__proto__=B.Core.
Z;this.Cz._Done();this.Ap._Done();this.Ck._Done();this.CH._Done();this.BB._Done(
);this.Cx._Done();this.GG._Done();B.Core.Z._Done.call(this);},_ReInit:function(){
B.Core.Z._ReInit.call(this);this.Cz._ReInit();this.Ap._ReInit();this.Ck._ReInit(
);this.CH._ReInit();this.BB._ReInit();this.Cx._ReInit();this.GG._ReInit();},_Mark:
function(D){var A;B.Core.Z._Mark.call(this,D);if((A=this.Cz)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.Ap)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Ck)._cycle!=D)
A._Mark(A._cycle=D);if((A=this.CH)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BB).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Cx)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.GG)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::ChangeBattery"
};E.HV={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationChangeBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[130,36],FrameDelay:0,_this:
null}};E.IH={_class:function(){return B.ach.As;},0:{Data:function(){return B.acm;
},Cache:[],_this:null}};E.Dw={EL:null,Bs:null,As:null,Dy:null,Es:null,G_:null,G$:
null,Hc:null,Gx:null,Dj:null,BL:null,Text:null,Bu:null,BC:0,Bv:0xFF000000,EF:false
,I4:function(FF){var A;B.aci.Dw.I4.call(this,FF);if(((FF&0x40)===0x40))this.Dy.BY(
true);else{this.Dy.BY(false);this.Bu.AS(false);}},Oq:function(Au){var A;if(!this.
Bs)return;var DD=this.Bs.Hh;var BO=this.Bs.GetExtent();var Af=this.M;var Jh=this.
Bu.AT;var Iy=Jh[0]-(((DD[2]-DD[0])/2)|0);if(Iy<0)Iy=0;if((Iy+(DD[2]-DD[0]))>(Af[
2]-Af[0]))Iy=(Af[2]-Af[0])-(DD[2]-DD[0]);this.Bs.MZ(B.abJ(this.Bs.Hh,[Iy,Jh[1]])
);var RF=(Af[0]+Jh[0])-((Jh[0]-Iy)*2);var Fb=[RF-BO[0],(Af[1]+Jh[1])-BO[3]];this.
Bs.H7(Fb,false);this.EL.H7(Fb,false);},Sf:function(Au){var A;var Af=this.Text.M;
var El=0;var Em=0;if(this.Bu.AT[0]<Af[0])El=Af[0]-this.Bu.AT[0];if(this.Bu.AT[0]>
Af[2])El=Af[2]-this.Bu.AT[0];if(this.Bu.AT[1]<Af[1])Em=Af[1]-this.Bu.AT[1];if(this.
Bu.AU[1]>Af[3])Em=Af[3]-this.Bu.AU[1];if(!!El||!!Em)this.Text.I1(B.abf(this.Text.
Fz,[El,Em]));El=this.Text.Fz[0];Em=this.Text.Fz[1];var Ci=[(A=this.Text.Ha())[2]-
A[0],A[3]-A[1]];if(Ci[0]<=((A=this.Text.M)[2]-A[0]))El=0;if(Ci[1]<=((A=this.Text.
M)[3]-A[1]))Em=0;this.Text.I1([El,Em]);},K1:function(Au){if(!this.As)return;var R1=
this.Text.M_(this.BC);var pos=this.Text.LX(R1);this.Bu.Ex(B.abe(pos,[0,this.As.Ascent
]));this.Bu.Ec(B.abf(pos,[0,this.As.Descent]));if(this.Dy.Cl){this.Dy.BY(false);
this.Dy.BY(true);}if(this.EF){B.pe([this,this.Sf],this);this.EF=false;}if(!!this.
Bs)B.pe([this,this.Oq],this);},Mu:function(Au){if(!!this.Bs){this.G.GH(this.Bs);
this.G.GH(this.EL);this.Bs=null;this.EL=null;this.J9(false);}},Oa:function(Au){if(
!!this.Bs){var Bt=this.Text.Kd(this.BL.Bo);var CT=this.Text.I3(Bt);var AY=this.Text.
String.charCodeAt(CT)||0;if(((AY===0x5E)||(AY===0x7E))||(AY===0x25))CT=CT-1;if(CT
!==this.BC){this.BC=CT;B.pe([this,this.K1],this);this.EF=true;}}else{var Fb=B.abe(
this.BL.Bo,this.BL.Cw);if((((Fb[0]<-8)||(Fb[0]>8))||(Fb[1]<-8))||(Fb[1]>8))this.
Gz().Lc(this.Dj,Kp);}},RT:function(Au){var A;if((this.BL.B6>=300)&&!this.Bs){var
height=this.Bu.AU[1]-this.Bu.AT[1];var width=height*3;if(height>((A=this.M)[3]-A[
1]))height=(A=this.M)[3]-A[1];if(width>((A=this.M)[2]-A[0]))width=(A=this.M)[2]-
A[0];this.J9(true);this.Bs=B._NewObject(B.acf.L1,0);this.EL=B._NewObject(B.acf.CH
,0);this.Bs.Pe(this);this.Bs.Pr(true);this.Bs.Hf(200);this.Bs.MZ([0,0,width,height
]);this.Bs.Ec([width*2,this.Bs.AU[1]]);this.Bs.GF([width*2,this.Bs.Cc[1]]);this.
Bs.GF([this.Bs.Cc[0],height*2]);this.Bs.Hg([this.Bs.BU[0],height*2]);this.EL.O(B.
abK(this.EL.M,B.abf([width*2,height*2],Rc)));this.EL.O(B.abJ(this.EL.M,Rd));this.
EL.A1(0xCCEEEEEE);this.G.T(this.EL,0);this.G.T(this.Bs,0);B.pe([this,this.Oq],this
);}if(!!this.Bs)this.Oa(this);},Mt:function(Au){if(!this.OQ(0x40))this.LI();var Bt=
this.Text.Kd(this.BL.Bo);var CT=this.Text.I3(Bt);var AY=this.Text.String.charCodeAt(
CT)||0;if(((AY===0x5E)||(AY===0x7E))||(AY===0x25))CT=CT-1;if(CT!==this.BC){this.
BC=CT;B.pe([this,this.K1],this);this.EF=true;}},N9:function(Au){if(!this.As)return;
var Bt=this.Text.M_(this.BC);if(this.Es.A_===6){Bt=[Bt[0]-1,Bt[1]];if(this.Text.
I3(Bt)===this.BC){Bt=[Bt[0],Bt[1]-1];Bt=[this.Text.Lo(Bt[1]).length,Bt[1]];}}if(
this.Es.A_===7){Bt=[Bt[0]+1,Bt[1]];if(this.Text.I3(Bt)===this.BC){Bt=[Bt[0],Bt[1
]+1];Bt=[0,Bt[1]];}}if(this.Es.A_===4){var pos=this.Text.LX(Bt);var Gs=(this.As.
Ascent+this.As.Descent)+this.As.Leading;Bt=this.Text.Kd(B.abe(pos,[0,Gs]));}if(this.
Es.A_===5){var pos=this.Text.LX(Bt);var Gs=(this.As.Ascent+this.As.Descent)+this.
As.Leading;Bt=this.Text.Kd(B.abf(pos,[0,Gs]));}var CT=this.Text.I3(Bt);var AY=this.
Text.String.charCodeAt(CT)||0;if(((AY===0x5E)||(AY===0x7E))||(AY===0x25))CT=CT-1;
if(CT!==this.BC){this.BC=CT;B.pe([this,this.K1],this);this.EF=true;}},N6:function(
Au){if(!this.BC)return;var AY=this.Text.String.charCodeAt(this.BC-1)||0;var E6=1;
if(((AY===0x5E)||(AY===0x7E))||(AY===0x25))E6=2;this.Text.B9(B.ab1(this.Text.String
,this.BC-E6,E6));this.BC=this.BC-E6;this.EF=true;},N_:function(Au){if(this.BC>=(
this.Text.String.length-1))return;var AY=this.Text.String.charCodeAt(this.BC)||0;
var E6=1;if(AY===0x25)E6=2;this.Text.B9(B.ab1(this.Text.String,this.BC,E6));this.
EF=true;},Oc:function(Au){this.Text.B9(B.abU(this.Text.String,Re,this.BC));this.
BC=this.BC+1;this.EF=true;},N7:function(Au){var AY=this.Gx.AL;var AO=String.fromCharCode(
AY);if((((AY===0x5E)||(AY===0x7E))||(AY===0xAD))||(AY===0x25))AO=Ii+String.fromCharCode(
AY);this.Text.B9(B.abU(this.Text.String,AO,this.BC));this.BC=this.BC+AO.length;this.
EF=true;},B9:function(C){var AO=C;var Y=AO.indexOf(String.fromCharCode(0x25),0);
while(Y>=0){AO=B.abU(AO,Ii,Y);Y=AO.indexOf(String.fromCharCode(0x25),Y+2);}Y=AO.
indexOf(String.fromCharCode(0x5E),0);while(Y>=0){AO=B.abU(AO,Ii,Y);Y=AO.indexOf(
String.fromCharCode(0x5E),Y+2);}Y=AO.indexOf(String.fromCharCode(0x7E),0);while(
Y>=0){AO=B.abU(AO,Ii,Y);Y=AO.indexOf(String.fromCharCode(0x7E),Y+2);}Y=AO.indexOf(
String.fromCharCode(0xAD),0);while(Y>=0){AO=B.abU(AO,Ii,Y);Y=AO.indexOf(String.fromCharCode(
0xAD),Y+2);}if(this.BC>AO.length)this.BC=AO.length;this.Text.B9(AO+Rf);this.EF=true;
this.Text.I1(Kp);},A1:function(C){if(this.Bv===C)return;this.Bv=C;this.Text.A1(C
);this.Bu.A1(C);},ET:function(C){if(this.As===C)return;this.As=C;this.Text.ET(C);
this.EF=true;this.Text.I1(Kp);},_Init:function(aArg){B.aci.Dw._Init.call(this,aArg
);B.acj.MF._Init.call(this.Dy={K:this},0);B.Core.Ev._Init.call(this.Es={K:this},
0);B.Core.Ev._Init.call(this.G_={K:this},0);B.Core.Ev._Init.call(this.G$={K:this
},0);B.Core.Ev._Init.call(this.Hc={K:this},0);B.Core.Ev._Init.call(this.Gx={K:this
},0);B.Core.Dj._Init.call(this.Dj={K:this},0);B.Core.BL._Init.call(this.BL={K:this
},0);B.acf.Text._Init.call(this.Text={K:this},0);B.acf.LD._Init.call(this.Bu={K:
this},0);this.__proto__=E.Dw;var A;this.O(Np);this.Dy.Nd=false;this.Dy.If=true;this.
Dy.J_(500);this.Dy.LP(500);this.Es.D_=147;this.G_.D_=151;this.G$.D_=44;this.Hc.D_=
149;this.Gx.D_=145;this.Dj.H$(0x3F);this.Dj.O(Np);this.Dj.Ke=false;this.Dj.Pd(0.05
);this.BL.H$(0x3F);this.BL.Hg(Rg);this.BL.GF(Rh);this.BL.Ec(Ri);this.BL.Ex(Kp);this.
BL.MX(3);this.Text.H$(0x3F);this.Text.O(Rj);this.Text.Kc(true);this.Text.GD(0x11
);this.Text.B9(Rk);this.Text.A1(0xFF000000);this.Bu.Ec(Rl);this.Bu.Ex(Rm);this.Bu.
PE(2);this.Bu.PD(2);this.Bu.A1(0xFF000000);this.Bu.AS(false);this.T(this.Dj,0);this.
T(this.BL,0);this.T(this.Text,0);this.T(this.Bu,0);this.Dy.Cy=[A=this.Bu,A.O6,A.
AS];this.Es.Dg=[this,this.N9];this.Es.Ea=[this,this.N9];this.G_.Dg=[this,this.N6
];this.G_.Ea=[this,this.N6];this.G$.Dg=[this,this.N_];this.G$.Ea=[this,this.N_];
this.Hc.Dg=[this,this.Oc];this.Hc.Ea=[this,this.Oc];this.Gx.Dg=[this,this.N7];this.
Gx.Ea=[this,this.N7];this.BL.LJ=[this,this.Oa];this.BL.Ea=[this,this.RT];this.BL.
GC=[this,this.Mu];this.BL.Dg=[this,this.Mt];this.Text.LQ([this,this.K1]);this.Text.
Pv(this.Dj);this.Text.ET(B.aaL(B.ach.JX));this.As=B.aaL(B.ach.JX);},_Done:function(
){this.__proto__=B.aci.Dw;this.Dy._Done();this.Es._Done();this.G_._Done();this.G$.
_Done();this.Hc._Done();this.Gx._Done();this.Dj._Done();this.BL._Done();this.Text.
_Done();this.Bu._Done();B.aci.Dw._Done.call(this);},_ReInit:function(){B.aci.Dw.
_ReInit.call(this);this.Dy._ReInit();this.Es._ReInit();this.G_._ReInit();this.G$.
_ReInit();this.Hc._ReInit();this.Gx._ReInit();this.Dj._ReInit();this.BL._ReInit(
);this.Text._ReInit();this.Bu._ReInit();},_Mark:function(D){var A;B.aci.Dw._Mark.
call(this,D);if((A=this.EL)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bs)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.As)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Dy)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Es)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.G_)._cycle!=D)A._Mark(A._cycle=D);if((A=this.G$)._cycle!=
D)A._Mark(A._cycle=D);if((A=this.Hc)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Gx
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Dj)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.BL)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Text)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.Bu)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::TextEditor"
};E.H9={_class:function(){return B.ach.Ai;},0:{FileName:"./res/ApplicationOkChangeBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[120,20],FrameDelay:0,_this:
null}};
E._Init=function(){E.K5.__proto__=B.Core.Root;E.LH.__proto__=B.Core.Z;E.BH.__proto__=
B.Core.Z;E.IG.__proto__=B.Core.Z;E.K8.__proto__=B.Core.Z;E.Dw.__proto__=B.aci.Dw;
};E._ReInit=function(){};E.Dm=function(D){var A;if((A=E.J5[0]._this)&&(A._cycle!=
D))A._Done(E.J5[0]._this=null);if((A=E.JT[0]._this)&&(A._cycle!=D))A._Done(E.JT[
0]._this=null);if((A=E.CG[0]._this)&&(A._cycle!=D))A._Done(E.CG[0]._this=null);if((
A=E.HY[0]._this)&&(A._cycle!=D))A._Done(E.HY[0]._this=null);if((A=E.Lh[0]._this)&&(
A._cycle!=D))A._Done(E.Lh[0]._this=null);if((A=E.Ic[0]._this)&&(A._cycle!=D))A._Done(
E.Ic[0]._this=null);if((A=E.Id[0]._this)&&(A._cycle!=D))A._Done(E.Id[0]._this=null
);if((A=E.LF[0]._this)&&(A._cycle!=D))A._Done(E.LF[0]._this=null);if((A=E.HW[0].
_this)&&(A._cycle!=D))A._Done(E.HW[0]._this=null);if((A=E.LE[0]._this)&&(A._cycle
!=D))A._Done(E.LE[0]._this=null);if((A=E.JV[0]._this)&&(A._cycle!=D))A._Done(E.JV[
0]._this=null);if((A=E.JQ[0]._this)&&(A._cycle!=D))A._Done(E.JQ[0]._this=null);if((
A=E.H8[0]._this)&&(A._cycle!=D))A._Done(E.H8[0]._this=null);if((A=E.Ib[0]._this)&&(
A._cycle!=D))A._Done(E.Ib[0]._this=null);if((A=E.LG[0]._this)&&(A._cycle!=D))A._Done(
E.LG[0]._this=null);if((A=E.C2[0]._this)&&(A._cycle!=D))A._Done(E.C2[0]._this=null
);if((A=E.K6[0]._this)&&(A._cycle!=D))A._Done(E.K6[0]._this=null);if((A=E.B4[0].
_this)&&(A._cycle!=D))A._Done(E.B4[0]._this=null);if((A=E.K7[0]._this)&&(A._cycle
!=D))A._Done(E.K7[0]._this=null);if((A=E.H5[0]._this)&&(A._cycle!=D))A._Done(E.H5[
0]._this=null);if((A=E.HV[0]._this)&&(A._cycle!=D))A._Done(E.HV[0]._this=null);if((
A=E.IH[0]._this)&&(A._cycle!=D))A._Done(E.IH[0]._this=null);if((A=E.H9[0]._this)&&(
A._cycle!=D))A._Done(E.H9[0]._this=null);};return E;})();

/* Embedded Wizard */