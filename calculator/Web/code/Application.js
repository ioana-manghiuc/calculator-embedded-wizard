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
);EmWiApp.kR=(function(){var B=EmWiApp;var D={};
var AI="result here";var AG="C";var CF="=";var DI="(";var Ec="x";var Ed="B";var Ff=
"none";var I7="Expression is null.";var I8="Parantheses used incorrectly.";var I9=
"Operators used incorrectly.";var GE="Expression contains characters that are not allowed.";
var HE=[0,0,340,590];var I_=[18,36,318,101];var J_=[20,30,320,105];var LZ=[20,129
,320,569];var L0=[-270,207,-20,307];var L1=[110,144,230,199];var L2="textKeyView is null";
var L3="focusedView is null";var L4=[0,0,300,440];var L5=[0,1,300,440];var L6=[1189
,145,1254,195];var I$="Caption";var L7=[1189,5,1254,55];var L8=[1189,75,1254,125
];var L9=[10,150,80,220];var L_="1";var L$=[80,150,150,220];var Ma="2";var Mb=[151
,150,221,220];var Mc="3";var Md=[10,220,80,290];var Me="4";var Mf=[80,220,150,290
];var Mg="5";var Mh=[150,220,220,290];var Mi="6";var Mj=[10,290,80,360];var Mk="7";
var Ml=[80,290,150,360];var Mm="8";var Mn=[150,290,220,360];var Mo="9";var Mp=[80
,360,150,430];var Mq="0";var Mr=[10,7,80,77];var Ms=[222,290,292,360];var Mt="+";
var Mu=[223,220,293,290];var Mv="-";var Mw=[221,150,291,220];var Mx=[222,80,292,
150];var My="/";var Mz=[9,360,79,430];var MA=".";var MB=[80,80,150,150];var MC="^";
var MD=[150,79,220,149];var ME="%";var MF=[10,80,45,150];var MG=[45,80,80,150];var
MH=")";var MI=[149,359,293,427];var MJ=[222,7,292,77];var J$=[0,0,250,100];var MK=[
0,-1,250,100];var Ka=[0,0,250,30];var ML=[5,38,235,78];var MM="no errors";var MN=[
213,3,243,28];var MO="X";var MP=[159,61,243,91];var MQ="OK";var MR=[5,0,145,30];
var MS="CALCULATOR ERROR";var MT=[0,0,120,54];var MU=[5,2,115,52];var MV=[7,4,12
,50];var MW=[12,4,17,50];var MX=[17,4,22,50];var MY=[22,4,27,50];var MZ=[27,4,32
,50];var M0=[32,4,37,50];var M1=[37,4,42,50];var M2=[42,4,47,50];var M3=[47,4,52
,50];var M4=[52,4,57,50];var M5=[57,4,62,50];var M6=[62,4,67,50];var M7=[67,4,72
,50];var M8=[72,4,77,50];var M9=[77,4,82,50];var M_=[82,4,87,50];var M$=[87,4,92
,50];var Na=[92,4,97,50];var Nb=[97,4,102,50];var Nc=[102,4,107,50];var Ja="Stack is empty!";
D.H6={Text:null,Bi:null,CP:null,AT:null,Eu:null,A0:null,Ba:null,E9:null,Cs:null,AU:
function(aArg){var A;this.E9.KD(this);},KX:function(AV){var Cy;var DQ=B.jV;if(this.
A0.Au!==0x00)Cy=String.fromCharCode(this.A0.Au);else Cy=this.Eu.GU;if((this.Text.
String===AI)||(Cy===AG))this.LR();if((Cy!==CF)&&(Cy!==AG)){var Jw=this.Text.String.
charCodeAt(this.Text.String.length-1)||0;if(Cy===DI){if(this.Text.String.length>
0){if(this.DC(Jw)||(Jw===0x29))DQ=(this.Text.String+Ec)+Cy;else DQ=this.Text.String+
Cy;}else DQ=this.Text.String+Cy;}else if((Cy===Ed)||(this.A0.AZ===151))DQ=B.ab1(
this.Text.String,this.Text.String.length-1,1);else if(this.DC(Cy.charCodeAt(0)||
0)){if(Jw===0x29)DQ=(this.Text.String+Ec)+Cy;else DQ=this.Text.String+Cy;}else DQ=
this.Text.String+Cy;this.Text.Ds(DQ);}if((Cy===CF)&&this.Ld(this.Text.String))this.
Text.Ds(this.K6(this.Text.String));},K7:function(Bg,Fz,Bq){var Al=0;switch(Bq.charCodeAt(
0)||0){case 0x2B:Al=Bg+Fz;break;case 0x2D:Al=Bg-Fz;break;case 0x78:Al=Bg*Fz;break;
case 0x2F:if(!!Fz)Al=Bg/Fz;else{if(Bg<0)Al=Number.NEGATIVE_INFINITY;if(Bg>0)Al=Number.
POSITIVE_INFINITY;if(!Bg)Al=Number.NaN;}break;case 0x25:{var DQ=Bg*Fz;Al=DQ/100;
}break;case 0x5E:Al=Math.pow(Bg,Fz);break;default:Al=0;}return Al;},LR:function(
){this.Text.Ds(B.jV);},Di:function(Bq){return(((((Bq===0x2B)||(Bq===0x2D))||(Bq===
0x78))||(Bq===0x2F))||(Bq===0x25))||(Bq===0x5E);},Hm:function(Bq){var HW;switch(
Bq){case 0x78:case 0x2F:HW=2;break;case 0x25:case 0x5E:HW=3;break;default:HW=1;}
return HW;},K_:function(NJ,W){var A;var Kl=0;var Al=B._NewObject(D.J7,0);var GX=
B.jV;var G=NJ;if(W!==B.jV){if((W.charCodeAt(G)||0)===0x2D){GX=GX+String.fromCharCode(
W.charCodeAt(G)||0);G++;}for(;G<W.length;G++)if(!this.Di(W.charCodeAt(G)||0)&&this.
DC(W.charCodeAt(G)||0)){GX=GX+String.fromCharCode(W.charCodeAt(G)||0);Kl=G;}else
break;}Al.JT(Kl);Al.JY(Ff);Al.JV(B.abX(GX,-1));return Al;},Ld:function(W){if(W===
B.jV){this.HV(this);this.Ba.Cr.Ds(I7);return false;}else if(!this.K0(W)){this.HV(
this);this.Ba.Cr.Ds(I8);return false;}else if(!this.LO(W)){this.HV(this);this.Ba.
Cr.Ds(I9);return false;}else if(!this.KY(W)){this.HV(this);this.Ba.Cr.Ds(GE);return false;
}return true;},DC:function(Bq){return((Bq>=0x30)&&(Bq<=0x39))||(Bq===0x2E);},K0:
function(W){var De=B._NewObject(D.JJ,0);var G=0;for(;G<W.length;G++)if((W.charCodeAt(
G)||0)===0x28)De.Cd(W.charCodeAt(G)||0);else if((W.charCodeAt(G)||0)===0x29){if(
De.Fa())return false;De.D7();}return De.Fa();},LO:function(W){var G=0;if(W!==B.jV
){for(;G<W.length;G++)if(!G){if(!(((((W.charCodeAt(G)||0)>=0x30)&&((W.charCodeAt(
G)||0)<=0x39))||((W.charCodeAt(G)||0)===0x2D))||((W.charCodeAt(G)||0)===0x28)))return false;
}else{if((((W.charCodeAt(G)||0)===0x2D)&&this.Di(W.charCodeAt(G-1)||0))&&!this.DC(
W.charCodeAt(G+1)||0))return false;if(((this.Di(W.charCodeAt(G)||0)&&this.Di(W.charCodeAt(
G-1)||0))&&((W.charCodeAt(G-1)||0)===0x2D))&&((W.charCodeAt(G)||0)===0x2D))return false;
if(((W.charCodeAt(G)||0)===0x2E)&&((W.charCodeAt(G-1)||0)===0x2E))return false;if((
G===(W.length-1))&&this.Di(W.charCodeAt(G)||0))return false;}}return true;},Ix:function(
Bq){if((Bq===0x28)||(Bq===0x29))return true;return false;},KY:function(W){var G=
0;for(;G<W.length;G++)if(((this.Di(W.charCodeAt(G)||0)===false)&&(this.Ix(W.charCodeAt(
G)||0)===false))&&(this.DC(W.charCodeAt(G)||0)===false))return false;return true;
},HV:function(AV){this.Cs.BN(true);this.Ba.Fe(true);this.Ba.O(B.abM(this.Ba.M,45
));this.Ba.Hr=[this,this.KC];},KC:function(AV){this.Ba.O(B.abM(this.Ba.M,-270));
this.Ba.Fe(false);},JR:function(W){var G=0;for(;G<W.length;G++)if(!this.DC(W.charCodeAt(
G)||0)&&!this.Lc(W.charCodeAt(G)||0))return false;return true;},Lc:function(Bq){
return Bq===0x2E;},LX:function(W){var Gh=B._NewObject(D.I2,0);var G=0;for(;G<W.length;
G++)if(this.Le(W.charCodeAt(G)||0))continue;else if((this.DC(W.charCodeAt(G)||0)||(((
W.charCodeAt(G)||0)===0x2E)&&this.DC(W.charCodeAt(G+1)||0)))||((((W.charCodeAt(G
)||0)===0x2D)&&((!G||this.Di(W.charCodeAt(G-1)||0))||((W.charCodeAt(G-1)||0)===0x28
)))&&(this.DC(W.charCodeAt(G+1)||0)||((W.charCodeAt(G+1)||0)===0x2E)))){var Kq=this.
K_(G,W);var Ns=Kq.Iv.toFixed(6).replace(new RegExp('0{1,5}$'),'');G=Kq.Ig;Gh.IW(
Ns);continue;}else if(this.Di(W.charCodeAt(G)||0)||this.Ix(W.charCodeAt(G)||0)){
var Ax;Ax=String.fromCharCode(W.charCodeAt(G)||0);Gh.IW(Ax);continue;}else continue;
return Gh;},Le:function(Bq){return((Bq===0x00)||(Bq===0x09))||(Bq===0x0A);},LW:function(
W){var Gh;var Fv=B._NewObject(D.J3,0);var BX=B._NewObject(D.J4,0);Gh=this.LX(W);
var BE=Gh.C5;while(!!BE){if(BE.Bs.length===1){var FC=BE.Bs.charCodeAt(0)||0;if(this.
DC(FC)){Fv.Cd(BE.Bs);Fv.LQ();}else if(this.Ix(FC)){if(FC===0x28)BX.Cd(DI);else if(
FC===0x29){while(!BX.Fa()&&(BX.DZ()!==DI)){Fv.Cd(BX.DZ());BX.D7();}if(!BX.Fa())BX.
D7();}}else if(this.Di(FC)){if(!BX.Fa()){var top=BX.DZ().charCodeAt(0)||0;if(this.
Di(top)){if(this.Hm(top)<this.Hm(FC))BX.Cd(BE.Bs);else if(this.Hm(top)===this.Hm(
FC)){Fv.Cd(BX.DZ());BX.D7();BX.Cd(BE.Bs);}}if(top===0x28)BX.Cd(BE.Bs);}else BX.Cd(
BE.Bs);}}else if(this.JR(BE.Bs)||this.JQ(BE.Bs))Fv.Cd(BE.Bs);BE=BE.Bu;}while(!BX.
Fa()){Fv.Cd(BX.DZ());BX.D7();}var Km=B._NewObject(D.I2,0);var Cv=Fv.C5;while(!!Cv
){Km.IW(Cv.Bs);Cv=Cv.Bu;}return Km;},K6:function(W){var JZ;var De=B._NewObject(D.
JO,0);var Kn;var KL;JZ=this.LW(W);var BE=JZ.C5;while(!!BE){if(this.Di(BE.Bs.charCodeAt(
0)||0)&&!this.JQ(BE.Bs)){KL=De.DZ();De.D7();Kn=De.DZ();De.D7();De.Cd(this.K7(Kn,
KL,String.fromCharCode(BE.Bs.charCodeAt(0)||0)));}else De.Cd(B.abX(BE.Bs,-1));BE=
BE.Bu;}var result;result=De.DZ().toFixed(6).replace(new RegExp('0{1,5}$'),'');return result;
},JQ:function(W){var NL=B.ab2(W,W.length-1);if((((W.charCodeAt(0)||0)===0x2D)&&this.
JR(NL))&&(W.length>1))return true;return false;},_Init:function(aArg){B.Core.Root.
_Init.call(this,aArg);B.acg.Text._Init.call(this.Text={L:this},0);B.acg.EA._Init.
call(this.Bi={L:this},0);B.acg.EA._Init.call(this.CP={L:this},0);B.acg.AT._Init.
call(this.AT={L:this},0);D.IJ._Init.call(this.Eu={L:this},0);B.Core.FM._Init.call(
this.A0={L:this},0);D.Ba._Init.call(this.Ba={L:this},0);D.Hf._Init.call(this.E9={
L:this},0);B.aci.Cs._Init.call(this.Cs={L:this},0);this.__proto__=D.H6;var A;this.
O(HE);this.Text.CO(3);this.Text.O(I_);this.Text.Fc(0x14);this.Text.Ds(AI);this.Text.
Bv(0xFF381A0D);this.Bi.O(HE);this.Bi.Bv(0xFFE9E6E2);this.CP.CO(2);this.CP.O(J_);
this.CP.Lh(0xFFB7A899);this.CP.Li(0xFFB7A899);this.CP.Lk(0xFFFFFFFF);this.CP.Lj(
0xFFFFFFFF);this.CP.DE(5);this.CP.Bv(0xFFF8E4CF);this.AT.CO(2);this.AT.O(J_);this.
AT.DE(5);this.AT.GB(2);this.AT.Bv(0xFF240303);this.Eu.CO(2);this.Eu.O(LZ);this.Ba.
CO(3);this.Ba.O(L0);this.Ba.Fe(false);this.E9.O(L1);this.Cs.LA(3);this.Cs.IM(400
);this.Cs.IN(0);this.Cs.BN(true);this.Cs.I6=155;this.U(this.Text,0);this.U(this.
Bi,0);this.U(this.CP,0);this.U(this.AT,0);this.U(this.Eu,0);this.U(this.Ba,0);this.
U(this.E9,0);this.Text.Hu(B.aaL(D.Id));this.A0.Ev=[this,this.KX];this.Ba.Hr=[this
,this.KC];this.Cs.DF=[A=this.Ba,A.Lf,A.Nd];this.AU(aArg);},_Done:function(){this.
__proto__=B.Core.Root;this.Text._Done();this.Bi._Done();this.CP._Done();this.AT.
_Done();this.Eu._Done();this.A0._Done();this.Ba._Done();this.E9._Done();this.Cs.
_Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root._ReInit.call(
this);this.Text._ReInit();this.Bi._ReInit();this.CP._ReInit();this.AT._ReInit();
this.Eu._ReInit();this.A0._ReInit();this.Ba._ReInit();this.E9._ReInit();this.Cs.
_ReInit();},_Mark:function(E){var A;B.Core.Root._Mark.call(this,E);if((A=this.Text
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bi)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.CP)._cycle!=E)A._Mark(A._cycle=E);if((A=this.AT)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Eu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.A0)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Ba)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E9)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Cs)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Application::Application"};D.Hq={_class:function(){return B.ach.Bb;},0:{Data:function(
){return B.acq;},Cache:[],_this:null}};D.Id={_class:function(){return B.ach.Bb;}
,0:{Data:function(){return B.acl;},Cache:[],_this:null}};D.IJ={AT:null,AF:null,BG:
null,Es:null,EE:null,EF:null,EG:null,D4:null,Ea:null,D$:null,DX:null,DW:null,D_:
null,D9:null,DV:null,D0:null,Eb:null,Clear:null,Plus:null,Minus:null,Multiply:null
,Divide:null,DA:null,Power:null,D6:null,D5:null,DU:null,Equals:null,BH:null,Ct:null
,Bn:null,CA:null,Bc:null,Bk:null,Bt:null,Cz:null,Cb:null,GU:B.jV,BA:function(AV){
var Kj=(B.acf.Aw.isPrototypeOf(AV)?AV:null);if(!!Kj){this.LN(Kj.Gt);var HK=0x00;
if(this.GU!==B.jV){HK=this.GU.charCodeAt(0)||0;if(HK!==0x00){this.Go().DriveKeyboardHitting(
0,HK,true);this.Go().DriveKeyboardHitting(0,HK,false);}}else B.ab5("%s",L2);}else
B.ab5("%s",L3);},LN:function(C){if(this.GU===C)return;this.GU=C;},NM:function(AV
){this.CC();},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);B.acg.AT._Init.
call(this.AT={L:this},0);B.acf.CD._Init.call(this.AF={L:this},0);B.acf.CD._Init.
call(this.BG={L:this},0);B.Core.Timer._Init.call(this.Es={L:this},0);B.acf.Aw._Init.
call(this.EE={L:this},0);B.acf.Aw._Init.call(this.EF={L:this},0);B.acf.Aw._Init.
call(this.EG={L:this},0);B.acf.Aw._Init.call(this.D4={L:this},0);B.acf.Aw._Init.
call(this.Ea={L:this},0);B.acf.Aw._Init.call(this.D$={L:this},0);B.acf.Aw._Init.
call(this.DX={L:this},0);B.acf.Aw._Init.call(this.DW={L:this},0);B.acf.Aw._Init.
call(this.D_={L:this},0);B.acf.Aw._Init.call(this.D9={L:this},0);B.acf.Aw._Init.
call(this.DV={L:this},0);B.acf.Aw._Init.call(this.D0={L:this},0);B.acf.Aw._Init.
call(this.Eb={L:this},0);B.acf.Aw._Init.call(this.Clear={L:this},0);B.acf.Aw._Init.
call(this.Plus={L:this},0);B.acf.Aw._Init.call(this.Minus={L:this},0);B.acf.Aw._Init.
call(this.Multiply={L:this},0);B.acf.Aw._Init.call(this.Divide={L:this},0);B.acf.
Aw._Init.call(this.DA={L:this},0);B.acf.Aw._Init.call(this.Power={L:this},0);B.acf.
Aw._Init.call(this.D6={L:this},0);B.acf.Aw._Init.call(this.D5={L:this},0);B.acf.
Aw._Init.call(this.DU={L:this},0);B.acf.Aw._Init.call(this.Equals={L:this},0);B.
acf.CD._Init.call(this.BH={L:this},0);B.acf.CD._Init.call(this.Ct={L:this},0);B.
acf.CD._Init.call(this.Bn={L:this},0);B.acf.CD._Init.call(this.CA={L:this},0);B.
acf.CD._Init.call(this.Bc={L:this},0);B.acf.CD._Init.call(this.Bk={L:this},0);B.
acf.CD._Init.call(this.Bt={L:this},0);B.acf.CD._Init.call(this.Cz={L:this},0);B.
acf.Aw._Init.call(this.Cb={L:this},0);this.__proto__=D.IJ;this.O(L4);this.AT.CO(-
1);this.AT.O(L5);this.AT.DE(5);this.AT.GB(2);this.AT.Bv(0xFF240303);this.AF.C8(0
);this.AF.Gw(0x00000403);this.AF.Gv(0x00000000);this.AF.Gx(0x3F);this.AF.Ew(0xFF746B8E
);this.AF.FR(0xFF746B8E);this.AF.Ey(0xFF746B8E);this.AF.Ex(0xFF000000);this.AF.Gy(
0x3F);this.AF.Do(1);this.AF.Dr(1);this.AF.Dq(0);this.AF.Dp(0);this.BG.C8(136);this.
BG.Ew(0xFFFEFCFF);this.BG.FR(0xFFFEFCFF);this.BG.Ey(0xFFFEFCFF);this.BG.Ex(0xFF020099
);this.BG.Do(1);this.BG.Dr(1);this.BG.Dq(0);this.BG.Dp(0);this.Es.GA(0);this.Es.
Hs(100);this.Es.BN(false);this.EE.O(L6);this.EE.A3(I$);this.EF.O(L7);this.EF.A3(
I$);this.EG.O(L8);this.EG.A3(I$);this.D4.O(L9);this.D4.A3(L_);this.Ea.O(L$);this.
Ea.A3(Ma);this.D$.O(Mb);this.D$.A3(Mc);this.DX.O(Md);this.DX.A3(Me);this.DW.O(Mf
);this.DW.A3(Mg);this.D_.O(Mh);this.D_.A3(Mi);this.D9.O(Mj);this.D9.A3(Mk);this.
DV.O(Ml);this.DV.A3(Mm);this.D0.O(Mn);this.D0.A3(Mo);this.Eb.O(Mp);this.Eb.A3(Mq
);this.Clear.O(Mr);this.Clear.A3(AG);this.Plus.O(Ms);this.Plus.A3(Mt);this.Minus.
O(Mu);this.Minus.A3(Mv);this.Multiply.O(Mw);this.Multiply.A3(Ec);this.Divide.O(Mx
);this.Divide.A3(My);this.DA.IO(0x14);this.DA.O(Mz);this.DA.A3(MA);this.Power.O(
MB);this.Power.Ls(1);this.Power.Lu(1);this.Power.Lt(0);this.Power.Lr(0);this.Power.
A3(MC);this.D6.O(MD);this.D6.A3(ME);this.D5.O(MF);this.D5.A3(DI);this.DU.O(MG);this.
DU.A3(MH);this.Equals.O(MI);this.Equals.A3(CF);this.BH.C8(80);this.BH.Lv(2);this.
BH.Ly(2);this.BH.Lx(2);this.BH.Lw(2);this.BH.Lq(0x12);this.BH.Do(1);this.BH.Dr(1
);this.BH.Dq(0);this.BH.Dp(0);this.Ct.C8(0);this.Ct.Do(1);this.Ct.Dr(1);this.Ct.
Dq(0);this.Ct.Dp(0);this.Bn.C8(0);this.Bn.Gw(0x00000403);this.Bn.Gv(0x00000000);
this.Bn.Gx(0x3F);this.Bn.Ew(0xFF746B8E);this.Bn.FR(0xFF746B8E);this.Bn.Ey(0xFF746B8E
);this.Bn.Ex(0xFF000000);this.Bn.Gy(0x3F);this.Bn.Do(1);this.Bn.Dr(1);this.Bn.Dq(
0);this.Bn.Dp(0);this.CA.C8(135);this.CA.Do(1);this.CA.Dr(1);this.CA.Dq(0);this.
CA.Dp(0);this.Bc.C8(134);this.Bc.Gw(0x00000403);this.Bc.Gv(0x00000000);this.Bc.Gx(
0x3F);this.Bc.Ew(0xFF746B8E);this.Bc.FR(0xFF746B8E);this.Bc.Ey(0xFF746B8E);this.
Bc.Ex(0xFF000000);this.Bc.Gy(0x3F);this.Bc.Do(1);this.Bc.Dr(1);this.Bc.Dq(0);this.
Bc.Dp(0);this.Bk.C8(0);this.Bk.Gw(0x00000403);this.Bk.Gv(0x00000000);this.Bk.Gx(
0x3F);this.Bk.Ew(0xFFFEFCFF);this.Bk.FR(0xFFFEFCFF);this.Bk.Ey(0xFFFEFCFF);this.
Bk.Ex(0xFF000000);this.Bk.Gy(0x3F);this.Bk.Do(1);this.Bk.Dr(1);this.Bk.Dq(0);this.
Bk.Dp(0);this.Bt.C8(0);this.Bt.Gw(0x00000403);this.Bt.Gv(0x00000000);this.Bt.Gx(
0x3F);this.Bt.Ew(0xFF746B8E);this.Bt.FR(0xFF746B8E);this.Bt.Ey(0xFF746B8E);this.
Bt.Ex(0xFF000000);this.Bt.Gy(0x3F);this.Bt.Do(1);this.Bt.Dr(1);this.Bt.Dq(0);this.
Bt.Dp(0);this.Cz.C8(151);this.Cz.Do(1);this.Cz.Dr(1);this.Cz.Dq(0);this.Cz.Dp(0);
this.Cb.O(MJ);this.Cb.A3(Ed);this.U(this.AT,0);this.U(this.EE,0);this.U(this.EF,
0);this.U(this.EG,0);this.U(this.D4,0);this.U(this.Ea,0);this.U(this.D$,0);this.
U(this.DX,0);this.U(this.DW,0);this.U(this.D_,0);this.U(this.D9,0);this.U(this.DV
,0);this.U(this.D0,0);this.U(this.Eb,0);this.U(this.Clear,0);this.U(this.Plus,0);
this.U(this.Minus,0);this.U(this.Multiply,0);this.U(this.Divide,0);this.U(this.DA
,0);this.U(this.Power,0);this.U(this.D6,0);this.U(this.D5,0);this.U(this.DU,0);this.
U(this.Equals,0);this.U(this.Cb,0);this.AF.Ez(B.aaL(D.Hq));this.AF.Dk(B.aaL(D.BQ
));this.AF.Dn(B.aaL(D.BQ));this.AF.Dm(B.aaL(D.BQ));this.AF.Dl(B.aaL(D.BQ));this.
BG.LB(null);this.BG.Ez(B.aaL(D.Ih));this.BG.Dk(B.aaL(D.FH));this.BG.Dn(B.aaL(D.FH
));this.BG.Dm(B.aaL(D.FH));this.BG.Dl(B.aaL(D.FH));this.Es.FS=[this,this.NM];this.
EE.A2(this.AF);this.EF.A2(this.BH);this.EG.A2(this.Ct);this.D4.AR=[this,this.BA];
this.D4.A2(this.AF);this.Ea.AR=[this,this.BA];this.Ea.A2(this.AF);this.D$.AR=[this
,this.BA];this.D$.A2(this.AF);this.DX.AR=[this,this.BA];this.DX.A2(this.AF);this.
DW.AR=[this,this.BA];this.DW.A2(this.AF);this.D_.AR=[this,this.BA];this.D_.A2(this.
AF);this.D9.AR=[this,this.BA];this.D9.A2(this.AF);this.DV.AR=[this,this.BA];this.
DV.A2(this.AF);this.D0.AR=[this,this.BA];this.D0.A2(this.AF);this.Eb.AR=[this,this.
BA];this.Eb.A2(this.AF);this.Clear.AR=[this,this.BA];this.Clear.A2(this.Bc);this.
Plus.AR=[this,this.BA];this.Plus.A2(this.Bn);this.Minus.AR=[this,this.BA];this.Minus.
A2(this.Bc);this.Multiply.AR=[this,this.BA];this.Multiply.A2(this.Bc);this.Divide.
AR=[this,this.BA];this.Divide.A2(this.CA);this.DA.AR=[this,this.BA];this.DA.A2(this.
AF);this.Power.AR=[this,this.BA];this.Power.Lp(null);this.Power.A2(this.BH);this.
D6.AR=[this,this.BA];this.D6.A2(this.Ct);this.D5.AR=[this,this.BA];this.D5.A2(this.
Bk);this.DU.AR=[this,this.BA];this.DU.A2(this.Bk);this.Equals.AR=[this,this.BA];
this.Equals.A2(this.BG);this.BH.Dk(B.aaL(D.FW));this.BH.Dn(B.aaL(D.FW));this.BH.
Dm(B.aaL(D.FW));this.BH.Dl(B.aaL(D.FW));this.Ct.Dk(B.aaL(D.FV));this.Ct.Dn(B.aaL(
D.FV));this.Ct.Dm(B.aaL(D.FV));this.Ct.Dl(B.aaL(D.FV));this.Bn.Ez(B.aaL(D.IH));this.
Bn.Dk(B.aaL(D.BQ));this.Bn.Dn(B.aaL(D.BQ));this.Bn.Dm(B.aaL(D.BQ));this.Bn.Dl(B.
aaL(D.BQ));this.CA.Dk(B.aaL(D.FF));this.CA.Dn(B.aaL(D.FF));this.CA.Dm(B.aaL(D.FF
));this.CA.Dl(B.aaL(D.FF));this.Bc.Ez(B.aaL(D.IG));this.Bc.Dk(B.aaL(D.BQ));this.
Bc.Dn(B.aaL(D.BQ));this.Bc.Dm(B.aaL(D.BQ));this.Bc.Dl(B.aaL(D.BQ));this.Bk.Ez(B.
aaL(D.Hq));this.Bk.Dk(B.aaL(D.FU));this.Bk.Dn(B.aaL(D.FU));this.Bk.Dm(B.aaL(D.FU
));this.Bk.Dl(B.aaL(D.FU));this.Bt.Ez(B.aaL(D.II));this.Bt.Dk(B.aaL(D.BQ));this.
Bt.Dn(B.aaL(D.BQ));this.Bt.Dm(B.aaL(D.BQ));this.Bt.Dl(B.aaL(D.BQ));this.Cz.Dk(B.
aaL(D.Cb));this.Cz.Dn(B.aaL(D.Cb));this.Cz.Dm(B.aaL(D.Cb));this.Cz.Dl(B.aaL(D.Cb
));this.Cb.AR=[this,this.BA];this.Cb.A2(this.Cz);},_Done:function(){this.__proto__=
B.Core.Am;this.AT._Done();this.AF._Done();this.BG._Done();this.Es._Done();this.EE.
_Done();this.EF._Done();this.EG._Done();this.D4._Done();this.Ea._Done();this.D$.
_Done();this.DX._Done();this.DW._Done();this.D_._Done();this.D9._Done();this.DV.
_Done();this.D0._Done();this.Eb._Done();this.Clear._Done();this.Plus._Done();this.
Minus._Done();this.Multiply._Done();this.Divide._Done();this.DA._Done();this.Power.
_Done();this.D6._Done();this.D5._Done();this.DU._Done();this.Equals._Done();this.
BH._Done();this.Ct._Done();this.Bn._Done();this.CA._Done();this.Bc._Done();this.
Bk._Done();this.Bt._Done();this.Cz._Done();this.Cb._Done();B.Core.Am._Done.call(
this);},_ReInit:function(){B.Core.Am._ReInit.call(this);this.AT._ReInit();this.AF.
_ReInit();this.BG._ReInit();this.Es._ReInit();this.EE._ReInit();this.EF._ReInit(
);this.EG._ReInit();this.D4._ReInit();this.Ea._ReInit();this.D$._ReInit();this.DX.
_ReInit();this.DW._ReInit();this.D_._ReInit();this.D9._ReInit();this.DV._ReInit(
);this.D0._ReInit();this.Eb._ReInit();this.Clear._ReInit();this.Plus._ReInit();this.
Minus._ReInit();this.Multiply._ReInit();this.Divide._ReInit();this.DA._ReInit();
this.Power._ReInit();this.D6._ReInit();this.D5._ReInit();this.DU._ReInit();this.
Equals._ReInit();this.BH._ReInit();this.Ct._ReInit();this.Bn._ReInit();this.CA._ReInit(
);this.Bc._ReInit();this.Bk._ReInit();this.Bt._ReInit();this.Cz._ReInit();this.Cb.
_ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=this.AT).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.AF)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.BG)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Es)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EE)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EF)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EG)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D4)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ea)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D$
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DX)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.DW)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D_)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.D9)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DV)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.D0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eb)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Clear)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Plus)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Minus)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Multiply)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Divide)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.DA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Power
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D6)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.D5)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DU)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Equals)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BH)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Ct)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bn)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.CA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bc
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bk)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Bt)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cz)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Cb)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::NumKeyBtns"
};D.BQ={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationCustomBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.FH={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationEqualsBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[140,70],FrameDelay:0,_this:
null}};D.Ih={_class:function(){return B.ach.Bb;},0:{Data:function(){return B.acm;
},Cache:[],_this:null}};D.FV={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationPercentBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.FW={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationPowBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.IH={_class:function(){return B.ach.Bb;},0:{Data:function(){return B.acp;
},Cache:[],_this:null}};D.FF={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationDivideBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.IG={_class:function(){return B.ach.Bb;},0:{Data:function(){return B.aco;
},Cache:[],_this:null}};D.J7={J6:Ff,Iv:0,Ig:-1,AU:function(aArg){this.JV(Number.
POSITIVE_INFINITY);this.JT(-1);this.JY(Ff);},JV:function(C){if(this.Iv===C)return;
this.Iv=C;},JT:function(C){if(this.Ig===C)return;this.Ig=C;},JY:function(C){if(this.
J6===C)return;this.J6=C;},_Init:function(aArg){this.__proto__=D.J7;this.AU(aArg);
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:
0,_observers:null,_className:"Application::Tuple"};D.Ba={Hr:null,Bi:null,DT:null
,DH:null,EB:null,C4:null,Cr:null,Aw:null,DG:null,A1:null,Du:null,KB:function(AV){
B.aaS(this.Hr,this);},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);B.acg.
EA._Init.call(this.Bi={L:this},0);B.acg.AT._Init.call(this.DT={L:this},0);B.acg.
EA._Init.call(this.DH={L:this},0);B.acg.AT._Init.call(this.EB={L:this},0);B.acf.
CD._Init.call(this.C4={L:this},0);B.acg.Text._Init.call(this.Cr={L:this},0);B.acf.
Aw._Init.call(this.Aw={L:this},0);B.acf.Aw._Init.call(this.DG={L:this},0);B.acf.
CD._Init.call(this.A1={L:this},0);B.acg.Text._Init.call(this.Du={L:this},0);this.
__proto__=D.Ba;this.O(J$);this.Bi.O(J$);this.Bi.DE(3);this.Bi.Bv(0xFFE9E6E2);this.
DT.O(MK);this.DT.DE(3);this.DT.GB(2);this.DT.Bv(0xFF000447);this.DH.O(Ka);this.DH.
LE(3);this.DH.LD(3);this.DH.DE(3);this.DH.Bv(0xFF020099);this.EB.O(Ka);this.EB.GB(
2);this.EB.Bv(0xFF000446);this.C4.C8(149);this.C4.Ew(0xFFFFFFFF);this.C4.Ey(0xFFFFFFFF
);this.C4.Ex(0xFF000000);this.C4.JX(3);this.C4.JW(0x12);this.Cr.O(ML);this.Cr.IU(
true);this.Cr.Fc(0x9);this.Cr.Ds(MM);this.Cr.Bv(0xFF00022D);this.Aw.O(MN);this.Aw.
A3(MO);this.DG.IO(0x18);this.DG.O(MP);this.DG.A3(MQ);this.A1.C8(149);this.A1.LG(
0x00319420);this.A1.LH(0x002A843A);this.A1.LI(0);this.A1.LJ(0);this.A1.LK(0x00517ECC
);this.A1.LL(0x001F32B7);this.A1.LM(0x3F);this.A1.Ew(0xFFFFFFFF);this.A1.Ey(0xFFFFFFFF
);this.A1.Ex(0xFF000000);this.A1.JX(3);this.A1.JW(0x92);this.A1.Do(1);this.A1.Dr(
1);this.A1.Dq(0);this.A1.Dp(0);this.Du.O(MR);this.Du.IU(true);this.Du.Fc(0x19);this.
Du.Ds(MS);this.Du.Bv(0xFFDDE6F2);this.U(this.Bi,0);this.U(this.DT,0);this.U(this.
DH,0);this.U(this.EB,0);this.U(this.Cr,0);this.U(this.Aw,0);this.U(this.DG,0);this.
U(this.Du,0);this.C4.Ez(B.aaL(D.Hh));this.Cr.Hu(B.aaL(D.Hk));this.Aw.AR=[this,this.
KB];this.Aw.A2(this.C4);this.DG.AR=[this,this.KB];this.DG.A2(this.A1);this.A1.Ez(
B.aaL(D.Hh));this.A1.Dk(B.aaL(D.FO));this.A1.Dn(B.aaL(D.FO));this.A1.Dm(B.aaL(D.
FO));this.A1.Dl(B.aaL(D.FO));this.Du.Hu(B.aaL(D.Hk));},_Done:function(){this.__proto__=
B.Core.Am;this.Bi._Done();this.DT._Done();this.DH._Done();this.EB._Done();this.C4.
_Done();this.Cr._Done();this.Aw._Done();this.DG._Done();this.A1._Done();this.Du.
_Done();B.Core.Am._Done.call(this);},_ReInit:function(){B.Core.Am._ReInit.call(this
);this.Bi._ReInit();this.DT._ReInit();this.DH._ReInit();this.EB._ReInit();this.C4.
_ReInit();this.Cr._ReInit();this.Aw._ReInit();this.DG._ReInit();this.A1._ReInit(
);this.Du._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=
this.Hr)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Bi)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.DT)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DH)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.EB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C4
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cr)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Aw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DG)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.A1)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Du)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Application::ErrorDialog"};D.Hk={_class:function(){return B.
ach.Bb;},0:{Data:function(){return B.acn;},Cache:[],_this:null}};D.Hh={_class:function(
){return B.ach.Bb;},0:{Data:function(){return B.ack;},Cache:[],_this:null}};D.FO={
_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationOKBtn.png",Format:
B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,30],FrameDelay:0,_this:null}};
D.FU={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationParenthesisBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[35,70],FrameDelay:0,_this:
null}};D.II={_class:function(){return B.ach.Bb;},0:{Data:function(){return B.acr;
},Cache:[],_this:null}};D.Cb={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationBackBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.H7={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationBatteryBgk.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[110,50],FrameDelay:0,_this:
null}};D.Br={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationBatteryLine.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[5,46],FrameDelay:0,_this:
null}};D.Hf={Bf:B.abi(20,null,null),Bi:null,EH:null,ES:null,ET:null,EU:null,EV:null
,EW:null,EX:null,EY:null,EZ:null,EI:null,EJ:null,EK:null,EL:null,EM:null,EN:null
,EO:null,EP:null,EQ:null,ER:null,Em:null,Dg:null,Timer:null,Gi:100,KD:function(AV
){var A;this.Gi=(this.Gi-0.5)|0;if(this.Gi<0)this.Gi=0;this.LY(this.Gi);},LY:function(
NB){var Nq=(NB/5)|0;var G=0;for(;G<20;G++)if(G<Nq)this.Bf.Get(G).Fe(true);else this.
Bf.Get(G).Fe(false);},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);B.acg.
Bj._Init.call(this.Bi={L:this},0);B.acg.Bj._Init.call(this.EH={L:this},0);B.acg.
Bj._Init.call(this.ES={L:this},0);B.acg.Bj._Init.call(this.ET={L:this},0);B.acg.
Bj._Init.call(this.EU={L:this},0);B.acg.Bj._Init.call(this.EV={L:this},0);B.acg.
Bj._Init.call(this.EW={L:this},0);B.acg.Bj._Init.call(this.EX={L:this},0);B.acg.
Bj._Init.call(this.EY={L:this},0);B.acg.Bj._Init.call(this.EZ={L:this},0);B.acg.
Bj._Init.call(this.EI={L:this},0);B.acg.Bj._Init.call(this.EJ={L:this},0);B.acg.
Bj._Init.call(this.EK={L:this},0);B.acg.Bj._Init.call(this.EL={L:this},0);B.acg.
Bj._Init.call(this.EM={L:this},0);B.acg.Bj._Init.call(this.EN={L:this},0);B.acg.
Bj._Init.call(this.EO={L:this},0);B.acg.Bj._Init.call(this.EP={L:this},0);B.acg.
Bj._Init.call(this.EQ={L:this},0);B.acg.Bj._Init.call(this.ER={L:this},0);B.acg.
Bj._Init.call(this.Em={L:this},0);B.aci.Dg._Init.call(this.Dg={L:this},0);B.Core.
Timer._Init.call(this.Timer={L:this},0);(this.Bf=[]).__proto__=D.Hf.Bf;this.__proto__=
D.Hf;var A;this.O(MT);this.Bi.O(MU);this.EH.O(MV);this.ES.O(MW);this.ET.O(MX);this.
EU.O(MY);this.EV.O(MZ);this.EW.O(M0);this.EX.O(M1);this.EY.O(M2);this.EZ.O(M3);this.
EI.O(M4);this.EJ.O(M5);this.EK.O(M6);this.EL.O(M7);this.EM.O(M8);this.EN.O(M9);this.
EO.O(M_);this.EP.O(M$);this.EQ.O(Na);this.ER.O(Nb);this.Em.O(Nc);this.Dg.IM(500);
this.Dg.IN(500);this.Dg.BN(false);this.Timer.GA(3000);this.Timer.BN(true);this.U(
this.Bi,0);this.U(this.EH,0);this.U(this.ES,0);this.U(this.ET,0);this.U(this.EU,
0);this.U(this.EV,0);this.U(this.EW,0);this.U(this.EX,0);this.U(this.EY,0);this.
U(this.EZ,0);this.U(this.EI,0);this.U(this.EJ,0);this.U(this.EK,0);this.U(this.EL
,0);this.U(this.EM,0);this.U(this.EN,0);this.U(this.EO,0);this.U(this.EP,0);this.
U(this.EQ,0);this.U(this.ER,0);this.U(this.Em,0);this.Bi.Bd(B.aaL(D.H7));this.EH.
Bd(B.aaL(D.Br));this.ES.Bd(B.aaL(D.Br));this.ET.Bd(B.aaL(D.Br));this.EU.Bd(B.aaL(
D.Br));this.EV.Bd(B.aaL(D.Br));this.EW.Bd(B.aaL(D.Br));this.EX.Bd(B.aaL(D.Br));this.
EY.Bd(B.aaL(D.Br));this.EZ.Bd(B.aaL(D.Br));this.EI.Bd(B.aaL(D.Br));this.EJ.Bd(B.
aaL(D.Br));this.EK.Bd(B.aaL(D.Br));this.EL.Bd(B.aaL(D.Br));this.EM.Bd(B.aaL(D.Br
));this.EN.Bd(B.aaL(D.Br));this.EO.Bd(B.aaL(D.Br));this.EP.Bd(B.aaL(D.Br));this.
EQ.Bd(B.aaL(D.Br));this.ER.Bd(B.aaL(D.Br));this.Em.Bd(B.aaL(D.Br));this.Dg.DF=[A=
this.Em,A.Lg,A.Fe];this.Timer.FS=[this,this.KD];this.Bf.Set(0,this.EH);this.Bf.Set(
1,this.ES);this.Bf.Set(2,this.ET);this.Bf.Set(3,this.EU);this.Bf.Set(4,this.EV);
this.Bf.Set(5,this.EW);this.Bf.Set(6,this.EX);this.Bf.Set(7,this.EY);this.Bf.Set(
8,this.EZ);this.Bf.Set(9,this.EI);this.Bf.Set(10,this.EJ);this.Bf.Set(11,this.EK
);this.Bf.Set(12,this.EL);this.Bf.Set(13,this.EM);this.Bf.Set(14,this.EN);this.Bf.
Set(15,this.EO);this.Bf.Set(16,this.EP);this.Bf.Set(17,this.EQ);this.Bf.Set(18,this.
ER);this.Bf.Set(19,this.Em);},_Done:function(){this.__proto__=B.Core.Am;this.Bi.
_Done();this.EH._Done();this.ES._Done();this.ET._Done();this.EU._Done();this.EV.
_Done();this.EW._Done();this.EX._Done();this.EY._Done();this.EZ._Done();this.EI.
_Done();this.EJ._Done();this.EK._Done();this.EL._Done();this.EM._Done();this.EN.
_Done();this.EO._Done();this.EP._Done();this.EQ._Done();this.ER._Done();this.Em.
_Done();this.Dg._Done();this.Timer._Done();B.Core.Am._Done.call(this);},_ReInit:
function(){B.Core.Am._ReInit.call(this);this.Bi._ReInit();this.EH._ReInit();this.
ES._ReInit();this.ET._ReInit();this.EU._ReInit();this.EV._ReInit();this.EW._ReInit(
);this.EX._ReInit();this.EY._ReInit();this.EZ._ReInit();this.EI._ReInit();this.EJ.
_ReInit();this.EK._ReInit();this.EL._ReInit();this.EM._ReInit();this.EN._ReInit(
);this.EO._ReInit();this.EP._ReInit();this.EQ._ReInit();this.ER._ReInit();this.Em.
_ReInit();this.Dg._ReInit();this.Timer._ReInit();},_Mark:function(E){var A;B.Core.
Am._Mark.call(this,E);B.aa6(this.Bf,E);if((A=this.Bi)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EH)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ES)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.ET)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EU)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.EV)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EW
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EX)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.EY)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EZ)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EJ)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EK)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EL)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.EM)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EN
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EO)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.EP)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EQ)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.ER)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Em)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Dg)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Timer)._cycle
!=E)A._Mark(A._cycle=E);},_className:"Application::Battery"};D.I0={Bu:null,Bs:B.
jV,Ht:function(C){if(this.Bs===C)return;this.Bs=C;},DD:function(C){if(this.Bu===
C)return;this.Bu=C;},_Init:function(aArg){this.__proto__=D.I0;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Bu)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(
A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Application::SimpleStringElement"
};D.J3={C5:null,Df:null,CE:0,CB:false,Cd:function(Ef){var B9=B._NewObject(D.I0,0
);B9.Ht(Ef);B9.DD(null);if(!this.C5){this.Gz(B9);this.FP(B9);}else{this.Df.DD(B9
);this.FP(B9);}},AU:function(aArg){this.Gz(null);this.FP(null);this.D3(0);this.D2(
true);},LQ:function(){var Cv=this.C5;while(!!Cv){B.ab5("%s",Cv.Bs);Cv=Cv.Bu;}},Gz:
function(C){if(this.C5===C)return;this.C5=C;},FP:function(C){if(this.Df===C)return;
this.Df=C;},D3:function(C){if(this.CE===C)return;this.CE=C;},D2:function(C){if(this.
CB===C)return;this.CB=C;},_Init:function(aArg){this.__proto__=D.J3;this.AU(aArg);
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.C5)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Df
)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Application::StrQueue"};D.J4={A4:
null,CE:0,CB:false,AU:function(aArg){this.Dt(null);this.D3(0);this.D2(true);},Dt:
function(C){if(this.A4===C)return;this.A4=C;},D3:function(C){if(this.CE===C)return;
this.CE=C;},D2:function(C){if(this.CB===C)return;this.CB=C;},Cd:function(Ef){var
B9=B._NewObject(D.I0,0);B9.Ht(Ef);B9.DD(this.A4);this.Dt(B9);},D7:function(){var
Cv=this.A4;if(!Cv)B.ab5("%s",Ja);else this.Dt(this.A4.Bu);},DZ:function(){if(!!this.
A4)return this.A4.Bs;return B.jV;},Fa:function(){if(!this.A4)return true;return false;
},_Init:function(aArg){this.__proto__=D.J4;this.AU(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.A4)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(
A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Application::StrStack"
};D.J2={Bu:null,Ic:0,Lm:function(C){if(this.Ic===C)return;this.Ic=C;},DD:function(
C){if(this.Bu===C)return;this.Bu=C;},_Init:function(aArg){this.__proto__=D.J2;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Bu)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L
)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Application::SimpleFloatElement"};D.JO={A4:null,CE:0,CB:false,AU:function(aArg){
this.Dt(null);this.D3(0);this.D2(true);},Dt:function(C){if(this.A4===C)return;this.
A4=C;},D3:function(C){if(this.CE===C)return;this.CE=C;},D2:function(C){if(this.CB===
C)return;this.CB=C;},Cd:function(Ef){var Jn=B._NewObject(D.J2,0);Jn.Lm(Ef);Jn.DD(
this.A4);this.Dt(Jn);},D7:function(){var Cv=this.A4;if(!Cv)B.ab5("%s",Ja);else this.
Dt(this.A4.Bu);},DZ:function(){if(!!this.A4)return this.A4.Ic;return 0;},_Init:function(
aArg){this.__proto__=D.JO;this.AU(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.A4)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Application::FloatStack"};D.J5={Bu:null,IV:
null,Bs:B.jV,Ht:function(C){if(this.Bs===C)return;this.Bs=C;},DD:function(C){if(
this.Bu===C)return;this.Bu=C;},LC:function(C){if(this.IV===C)return;this.IV=C;},
_Init:function(aArg){this.__proto__=D.J5;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Bu)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.IV)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Application::StringElement"};D.I2={C5:null,Df:null,CE:0,CB:false,AU:function(aArg
){this.Gz(null);this.FP(null);this.D3(0);this.D2(true);},Gz:function(C){if(this.
C5===C)return;this.C5=C;},FP:function(C){if(this.Df===C)return;this.Df=C;},D3:function(
C){if(this.CE===C)return;this.CE=C;},D2:function(C){if(this.CB===C)return;this.CB=
C;},IW:function(Ef){var B9=B._NewObject(D.J5,0);B9.Ht(Ef);B9.DD(null);B9.LC(this.
Df);if(!!this.Df)this.Df.DD(B9);else this.Gz(B9);this.FP(B9);},_Init:function(aArg
){this.__proto__=D.I2;this.AU(aArg);B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.C5)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Df)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Application::StrVector"};D.JJ={A4:null,CE:0,CB:false,AU:function(aArg){this.Dt(
null);this.D3(0);this.D2(true);},Dt:function(C){if(this.A4===C)return;this.A4=C;
},D3:function(C){if(this.CE===C)return;this.CE=C;},D2:function(C){if(this.CB===C
)return;this.CB=C;},Cd:function(Ef){var Ji=B._NewObject(D.J1,0);Ji.Ll(Ef);Ji.DD(
this.A4);this.Dt(Ji);},D7:function(){var Cv=this.A4;if(!Cv)B.ab5("%s",Ja);else this.
Dt(this.A4.Bu);},Fa:function(){if(!this.A4)return true;return false;},_Init:function(
aArg){this.__proto__=D.JJ;this.AU(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.A4)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Application::CharStack"};D.J1={Bu:null,JK:
0,Ll:function(C){if(this.JK===C)return;this.JK=C;},DD:function(C){if(this.Bu===C
)return;this.Bu=C;},_Init:function(aArg){this.__proto__=D.J1;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Bu)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(
A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Application::SimpleCharElement"
};import{getBatteryLevel}from'./battery-logger.js';
D._Init=function(){D.H6.__proto__=B.Core.Root;D.IJ.__proto__=B.Core.Am;D.Ba.__proto__=
B.Core.Am;D.Hf.__proto__=B.Core.Am;};D._ReInit=function(){};D.Cu=function(E){var
A;if((A=D.Hq[0]._this)&&(A._cycle!=E))A._Done(D.Hq[0]._this=null);if((A=D.Id[0].
_this)&&(A._cycle!=E))A._Done(D.Id[0]._this=null);if((A=D.BQ[0]._this)&&(A._cycle
!=E))A._Done(D.BQ[0]._this=null);if((A=D.FH[0]._this)&&(A._cycle!=E))A._Done(D.FH[
0]._this=null);if((A=D.Ih[0]._this)&&(A._cycle!=E))A._Done(D.Ih[0]._this=null);if((
A=D.FV[0]._this)&&(A._cycle!=E))A._Done(D.FV[0]._this=null);if((A=D.FW[0]._this)&&(
A._cycle!=E))A._Done(D.FW[0]._this=null);if((A=D.IH[0]._this)&&(A._cycle!=E))A._Done(
D.IH[0]._this=null);if((A=D.FF[0]._this)&&(A._cycle!=E))A._Done(D.FF[0]._this=null
);if((A=D.IG[0]._this)&&(A._cycle!=E))A._Done(D.IG[0]._this=null);if((A=D.Hk[0].
_this)&&(A._cycle!=E))A._Done(D.Hk[0]._this=null);if((A=D.Hh[0]._this)&&(A._cycle
!=E))A._Done(D.Hh[0]._this=null);if((A=D.FO[0]._this)&&(A._cycle!=E))A._Done(D.FO[
0]._this=null);if((A=D.FU[0]._this)&&(A._cycle!=E))A._Done(D.FU[0]._this=null);if((
A=D.II[0]._this)&&(A._cycle!=E))A._Done(D.II[0]._this=null);if((A=D.Cb[0]._this)&&(
A._cycle!=E))A._Done(D.Cb[0]._this=null);if((A=D.H7[0]._this)&&(A._cycle!=E))A._Done(
D.H7[0]._this=null);if((A=D.Br[0]._this)&&(A._cycle!=E))A._Done(D.Br[0]._this=null
);};return D;})();

/* Embedded Wizard */