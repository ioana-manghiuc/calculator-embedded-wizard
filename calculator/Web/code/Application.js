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
var AH="result here";var AF="C";var CG="=";var DF="(";var Ec="x";var Ed="B";var EU=
"none";var Ja="Expression is null.";var Jb="Parantheses used incorrectly.";var Jc=
"Expression contains characters that are not allowed.";var GK="Operators used incorrectly.";
var HJ=[0,0,340,590];var Jd=[18,36,318,101];var Kf=[20,30,320,105];var Mc=[20,129
,320,569];var Md=[-270,207,-20,307];var Me=[110,144,230,199];var Mf=[113,106,213
,136];var Mg="Text";var Mh="textKeyView is null";var Mi="focusedView is null";var
Mj=[0,0,300,440];var Mk=[0,1,300,440];var Ml=[1189,145,1254,195];var Je="Caption";
var Mm=[1189,5,1254,55];var Mn=[1189,75,1254,125];var Mo=[10,150,80,220];var Mp=
"1";var Mq=[80,150,150,220];var Mr="2";var Ms=[151,150,221,220];var Mt="3";var Mu=[
10,220,80,290];var Mv="4";var Mw=[80,220,150,290];var Mx="5";var My=[150,220,220
,290];var Mz="6";var MA=[10,290,80,360];var MB="7";var MC=[80,290,150,360];var MD=
"8";var ME=[150,290,220,360];var MF="9";var MG=[80,360,150,430];var MH="0";var MI=[
10,7,80,77];var MJ=[222,290,292,360];var MK="+";var ML=[223,220,293,290];var MM=
"-";var MN=[221,150,291,220];var MO=[222,80,292,150];var MP="/";var MQ=[9,360,79
,430];var MR=".";var MS=[80,80,150,150];var MT="^";var MU=[150,79,220,149];var MV=
"%";var MW=[10,80,45,150];var MX=[45,80,80,150];var MY=")";var MZ=[149,359,293,427
];var M0=[222,7,292,77];var Kg=[0,0,250,100];var M1=[0,-1,250,100];var Kh=[0,0,250
,30];var M2=[5,38,235,78];var M3="no errors";var M4=[213,3,243,28];var M5="X";var
M6=[159,61,243,91];var M7="OK";var M8=[5,0,145,30];var M9="CALCULATOR ERROR";var
M_=[0,0,120,54];var M$=[5,2,115,52];var Ki=[7,4,12,50];var Kj=[12,4,17,50];var Kk=[
17,4,22,50];var Kl=[22,4,27,50];var Na=[27,4,32,50];var Nb=[32,4,37,50];var Nc=[
37,4,42,50];var Nd=[42,4,47,50];var Ne=[47,4,52,50];var Nf=[52,4,57,50];var Ng=[
57,4,62,50];var Nh=[62,4,67,50];var Ni=[67,4,72,50];var Nj=[72,4,77,50];var Nk=[
77,4,82,50];var Nl=[82,4,87,50];var Nm=[87,4,92,50];var Nn=[92,4,97,50];var No=[
97,4,102,50];var Np=[102,4,107,50];var Nq=[13,6,97,46];var Jf="Stack is empty!";
D.H$={Text:null,Bm:null,CO:null,AU:null,EM:null,A3:null,Be:null,Fb:null,Cs:null,D_:
null,AV:function(aArg){var A;this.Fb.KO(this);},K8:function(A0){this.D_.Ct(this.
Lr());var BY;var DN=B.jV;if(this.A3.Au!==0x00)BY=String.fromCharCode(this.A3.Au);
else BY=this.EM.G0;if((this.Text.String===AH)||(BY===AF))this.L5();if((BY!==CG)&&(
BY!==AF)){var JB=this.Text.String.charCodeAt(this.Text.String.length-1)||0;if(BY===
DF){if(this.Text.String.length>0){if(this.DA(JB)||(JB===0x29))DN=(this.Text.String+
Ec)+BY;else DN=this.Text.String+BY;}else DN=this.Text.String+BY;}else if((BY===Ed
)||(this.A3.A1===151))DN=B.ab1(this.Text.String,this.Text.String.length-1,1);else
if(this.DA(BY.charCodeAt(0)||0)){if(JB===0x29)DN=(this.Text.String+Ec)+BY;else DN=
this.Text.String+BY;}else DN=this.Text.String+BY;this.Text.Ct(DN);}if((BY===CG)&&
this.Lp(this.Text.String))this.Text.Ct(this.Lf(this.Text.String));},Lg:function(
Bj,FC,Bt){var Al=0;switch(Bt.charCodeAt(0)||0){case 0x2B:Al=Bj+FC;break;case 0x2D:
Al=Bj-FC;break;case 0x78:Al=Bj*FC;break;case 0x2F:if(!!FC)Al=Bj/FC;else{if(Bj<0)
Al=Number.NEGATIVE_INFINITY;if(Bj>0)Al=Number.POSITIVE_INFINITY;if(!Bj)Al=Number.
NaN;}break;case 0x25:{var DN=Bj*FC;Al=DN/100;}break;case 0x5E:Al=Math.pow(Bj,FC);
break;default:Al=0;}return Al;},L5:function(){this.Text.Ct(B.jV);},Dh:function(Bt
){return(((((Bt===0x2B)||(Bt===0x2D))||(Bt===0x78))||(Bt===0x2F))||(Bt===0x25))||(
Bt===0x5E);},Hr:function(Bt){var H1;switch(Bt){case 0x78:case 0x2F:H1=2;break;case
0x25:case 0x5E:H1=3;break;default:H1=1;}return H1;},Lj:function(NV,V){var A;var Kw=
0;var Al=B._NewObject(D.Kc,0);var G3=B.jV;var G=NV;if(V!==B.jV){if((V.charCodeAt(
G)||0)===0x2D){G3=G3+String.fromCharCode(V.charCodeAt(G)||0);G++;}for(;G<V.length;
G++)if(!this.Dh(V.charCodeAt(G)||0)&&this.DA(V.charCodeAt(G)||0)){G3=G3+String.fromCharCode(
V.charCodeAt(G)||0);Kw=G;}else break;}Al.J0(Kw);Al.J5(EU);Al.J2(B.abX(G3,-1));return Al;
},Lp:function(V){if(V===B.jV){this.H0(this);this.Be.Cr.Ct(Ja);return false;}else
if(!this.K$(V)){this.H0(this);this.Be.Cr.Ct(Jb);return false;}else if(!this.K9(V
)){this.H0(this);this.Be.Cr.Ct(Jc);return false;}else if(!this.L2(V)){this.H0(this
);this.Be.Cr.Ct(GK);return false;}return true;},DA:function(Bt){return((Bt>=0x30
)&&(Bt<=0x39))||(Bt===0x2E);},K$:function(V){var De=B._NewObject(D.JQ,0);var G=0;
for(;G<V.length;G++)if((V.charCodeAt(G)||0)===0x28)De.Ce(V.charCodeAt(G)||0);else
if((V.charCodeAt(G)||0)===0x29){if(De.Ff())return false;De.D6();}return De.Ff();
},L2:function(V){var G=0;if(V!==B.jV){for(;G<V.length;G++)if(!G){if(!(((((V.charCodeAt(
G)||0)>=0x30)&&((V.charCodeAt(G)||0)<=0x39))||((V.charCodeAt(G)||0)===0x2D))||((
V.charCodeAt(G)||0)===0x28)))return false;}else{if((((V.charCodeAt(G)||0)===0x2D
)&&this.Dh(V.charCodeAt(G-1)||0))&&!this.DA(V.charCodeAt(G+1)||0))return false;if(((
this.Dh(V.charCodeAt(G)||0)&&this.Dh(V.charCodeAt(G-1)||0))&&((V.charCodeAt(G-1)||
0)===0x2D))&&((V.charCodeAt(G)||0)===0x2D))return false;if(((V.charCodeAt(G)||0)===
0x2E)&&((V.charCodeAt(G-1)||0)===0x2E))return false;if((G===(V.length-1))&&this.
Dh(V.charCodeAt(G)||0))return false;}}return true;},IE:function(Bt){if((Bt===0x28
)||(Bt===0x29))return true;return false;},K9:function(V){var G=0;for(;G<V.length;
G++)if(((this.Dh(V.charCodeAt(G)||0)===false)&&(this.IE(V.charCodeAt(G)||0)===false
))&&(this.DA(V.charCodeAt(G)||0)===false))return false;return true;},H0:function(
A0){this.Cs.B0(true);this.Be.AM(true);this.Be.N(B.abM(this.Be.M,45));this.Be.Hw=[
this,this.KN];},KN:function(A0){this.Be.N(B.abM(this.Be.M,-270));this.Be.AM(false
);},JY:function(V){var G=0;for(;G<V.length;G++)if(!this.DA(V.charCodeAt(G)||0)&&
!this.Lo(V.charCodeAt(G)||0))return false;return true;},Lo:function(Bt){return Bt===
0x2E;},L$:function(V){var Gn=B._NewObject(D.I7,0);var G=0;for(;G<V.length;G++)if(
this.Lq(V.charCodeAt(G)||0))continue;else if((this.DA(V.charCodeAt(G)||0)||(((V.
charCodeAt(G)||0)===0x2E)&&this.DA(V.charCodeAt(G+1)||0)))||((((V.charCodeAt(G)||
0)===0x2D)&&((!G||this.Dh(V.charCodeAt(G-1)||0))||((V.charCodeAt(G-1)||0)===0x28
)))&&(this.DA(V.charCodeAt(G+1)||0)||((V.charCodeAt(G+1)||0)===0x2E)))){var KB=this.
Lj(G,V);var NF=KB.IC.toFixed(6).replace(new RegExp('0{1,5}$'),'');G=KB.In;Gn.I1(
NF);continue;}else if(this.Dh(V.charCodeAt(G)||0)||this.IE(V.charCodeAt(G)||0)){
var Ax;Ax=String.fromCharCode(V.charCodeAt(G)||0);Gn.I1(Ax);continue;}else continue;
return Gn;},Lq:function(Bt){return((Bt===0x00)||(Bt===0x09))||(Bt===0x0A);},L_:function(
V){var Gn;var Fy=B._NewObject(D.J_,0);var BW=B._NewObject(D.J$,0);Gn=this.L$(V);
var BG=Gn.C5;while(!!BG){if(BG.Bv.length===1){var FF=BG.Bv.charCodeAt(0)||0;if(this.
DA(FF)){Fy.Ce(BG.Bv);Fy.L4();}else if(this.IE(FF)){if(FF===0x28)BW.Ce(DF);else if(
FF===0x29){while(!BW.Ff()&&(BW.DX()!==DF)){Fy.Ce(BW.DX());BW.D6();}if(!BW.Ff())BW.
D6();}}else if(this.Dh(FF)){if(!BW.Ff()){var top=BW.DX().charCodeAt(0)||0;if(this.
Dh(top)){if(this.Hr(top)<this.Hr(FF))BW.Ce(BG.Bv);else if(this.Hr(top)===this.Hr(
FF)){Fy.Ce(BW.DX());BW.D6();BW.Ce(BG.Bv);}}if(top===0x28)BW.Ce(BG.Bv);}else BW.Ce(
BG.Bv);}}else if(this.JY(BG.Bv)||this.JX(BG.Bv))Fy.Ce(BG.Bv);BG=BG.Bx;}while(!BW.
Ff()){Fy.Ce(BW.DX());BW.D6();}var Kx=B._NewObject(D.I7,0);var Cw=Fy.C5;while(!!Cw
){Kx.I1(Cw.Bv);Cw=Cw.Bx;}return Kx;},Lf:function(V){var J6;var De=B._NewObject(D.
JV,0);var Ky;var KW;J6=this.L_(V);var BG=J6.C5;while(!!BG){if(this.Dh(BG.Bv.charCodeAt(
0)||0)&&!this.JX(BG.Bv)){KW=De.DX();De.D6();Ky=De.DX();De.D6();De.Ce(this.Lg(Ky,
KW,String.fromCharCode(BG.Bv.charCodeAt(0)||0)));}else De.Ce(B.abX(BG.Bv,-1));BG=
BG.Bx;}var result;result=De.DX().toFixed(6).replace(new RegExp('0{1,5}$'),'');return result;
},JX:function(V){var NX=B.ab2(V,V.length-1);if((((V.charCodeAt(0)||0)===0x2D)&&this.
JY(NX))&&(V.length>1))return true;return false;},Lr:function(){var lvl=EU;lvl=displayBatteryLevel(
);return lvl;},_Init:function(aArg){B.Core.Root._Init.call(this,aArg);B.acf.Text.
_Init.call(this.Text={K:this},0);B.acf.ES._Init.call(this.Bm={K:this},0);B.acf.ES.
_Init.call(this.CO={K:this},0);B.acf.AU._Init.call(this.AU={K:this},0);D.IQ._Init.
call(this.EM={K:this},0);B.Core.FP._Init.call(this.A3={K:this},0);D.Be._Init.call(
this.Be={K:this},0);D.Go._Init.call(this.Fb={K:this},0);B.aci.Cs._Init.call(this.
Cs={K:this},0);B.acf.Text._Init.call(this.D_={K:this},0);this.__proto__=D.H$;var
A;this.N(HJ);this.Text.CN(3);this.Text.N(Jd);this.Text.Fh(0x14);this.Text.Ct(AH);
this.Text.Bg(0xFF381A0D);this.Bm.N(HJ);this.Bm.Bg(0xFFE9E6E2);this.CO.CN(2);this.
CO.N(Kf);this.CO.Lt(0xFFB7A899);this.CO.Lu(0xFFB7A899);this.CO.Lw(0xFFFFFFFF);this.
CO.Lv(0xFFFFFFFF);this.CO.DC(5);this.CO.Bg(0xFFF8E4CF);this.AU.CN(2);this.AU.N(Kf
);this.AU.DC(5);this.AU.GH(2);this.AU.Bg(0xFF240303);this.EM.CN(2);this.EM.N(Mc);
this.Be.CN(3);this.Be.N(Md);this.Be.AM(false);this.Fb.N(Me);this.Cs.LO(3);this.Cs.
Lx(400);this.Cs.LM(0);this.Cs.B0(true);this.Cs.I$=155;this.D_.N(Mf);this.D_.Ct(Mg
);this.P(this.Text,0);this.P(this.Bm,0);this.P(this.CO,0);this.P(this.AU,0);this.
P(this.EM,0);this.P(this.Be,0);this.P(this.Fb,0);this.P(this.D_,0);this.Text.FV(
B.aaL(D.Ik));this.A3.EN=[this,this.K8];this.Be.Hw=[this,this.KN];this.Cs.HB=[A=this.
Be,A.Ls,A.Nr];this.D_.FV(B.aaL(B.ach.Ij));this.AV(aArg);},_Done:function(){this.
__proto__=B.Core.Root;this.Text._Done();this.Bm._Done();this.CO._Done();this.AU.
_Done();this.EM._Done();this.A3._Done();this.Be._Done();this.Fb._Done();this.Cs.
_Done();this.D_._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.
Root._ReInit.call(this);this.Text._ReInit();this.Bm._ReInit();this.CO._ReInit();
this.AU._ReInit();this.EM._ReInit();this.A3._ReInit();this.Be._ReInit();this.Fb.
_ReInit();this.Cs._ReInit();this.D_._ReInit();},_Mark:function(E){var A;B.Core.Root.
_Mark.call(this,E);if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bm).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.CO)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.AU)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EM)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.A3)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Be)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Fb)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cs)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.D_)._cycle!=E)A._Mark(A._cycle=E);},_className:
"Application::Application"};D.Hv={_class:function(){return B.ach.A2;},0:{Data:function(
){return B.acr;},Cache:[],_this:null}};D.Ik={_class:function(){return B.ach.A2;}
,0:{Data:function(){return B.acm;},Cache:[],_this:null}};D.IQ={AU:null,AE:null,BI:
null,EK:null,EX:null,EY:null,EZ:null,D3:null,Ea:null,D$:null,DV:null,DU:null,D9:
null,D8:null,DT:null,DZ:null,Eb:null,Clear:null,Plus:null,Minus:null,Multiply:null
,Divide:null,Dy:null,Power:null,D5:null,D4:null,DR:null,Equals:null,BJ:null,Cu:null
,Bq:null,CB:null,Bf:null,Bn:null,Bw:null,CA:null,Cc:null,G0:B.jV,BC:function(A0){
var Ku=(B.acg.Aw.isPrototypeOf(A0)?A0:null);if(!!Ku){this.L1(Ku.Gz);var HP=0x00;
if(this.G0!==B.jV){HP=this.G0.charCodeAt(0)||0;if(HP!==0x00){this.Gu().DriveKeyboardHitting(
0,HP,true);this.Gu().DriveKeyboardHitting(0,HP,false);}}else B.ab5("%s",Mh);}else
B.ab5("%s",Mi);},L1:function(C){if(this.G0===C)return;this.G0=C;},NY:function(A0
){this.CD();},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);B.acf.AU._Init.
call(this.AU={K:this},0);B.acg.CE._Init.call(this.AE={K:this},0);B.acg.CE._Init.
call(this.BI={K:this},0);B.Core.Timer._Init.call(this.EK={K:this},0);B.acg.Aw._Init.
call(this.EX={K:this},0);B.acg.Aw._Init.call(this.EY={K:this},0);B.acg.Aw._Init.
call(this.EZ={K:this},0);B.acg.Aw._Init.call(this.D3={K:this},0);B.acg.Aw._Init.
call(this.Ea={K:this},0);B.acg.Aw._Init.call(this.D$={K:this},0);B.acg.Aw._Init.
call(this.DV={K:this},0);B.acg.Aw._Init.call(this.DU={K:this},0);B.acg.Aw._Init.
call(this.D9={K:this},0);B.acg.Aw._Init.call(this.D8={K:this},0);B.acg.Aw._Init.
call(this.DT={K:this},0);B.acg.Aw._Init.call(this.DZ={K:this},0);B.acg.Aw._Init.
call(this.Eb={K:this},0);B.acg.Aw._Init.call(this.Clear={K:this},0);B.acg.Aw._Init.
call(this.Plus={K:this},0);B.acg.Aw._Init.call(this.Minus={K:this},0);B.acg.Aw._Init.
call(this.Multiply={K:this},0);B.acg.Aw._Init.call(this.Divide={K:this},0);B.acg.
Aw._Init.call(this.Dy={K:this},0);B.acg.Aw._Init.call(this.Power={K:this},0);B.acg.
Aw._Init.call(this.D5={K:this},0);B.acg.Aw._Init.call(this.D4={K:this},0);B.acg.
Aw._Init.call(this.DR={K:this},0);B.acg.Aw._Init.call(this.Equals={K:this},0);B.
acg.CE._Init.call(this.BJ={K:this},0);B.acg.CE._Init.call(this.Cu={K:this},0);B.
acg.CE._Init.call(this.Bq={K:this},0);B.acg.CE._Init.call(this.CB={K:this},0);B.
acg.CE._Init.call(this.Bf={K:this},0);B.acg.CE._Init.call(this.Bn={K:this},0);B.
acg.CE._Init.call(this.Bw={K:this},0);B.acg.CE._Init.call(this.CA={K:this},0);B.
acg.Aw._Init.call(this.Cc={K:this},0);this.__proto__=D.IQ;this.N(Mj);this.AU.CN(-
1);this.AU.N(Mk);this.AU.DC(5);this.AU.GH(2);this.AU.Bg(0xFF240303);this.AE.C8(0
);this.AE.GC(0x00000403);this.AE.GB(0x00000000);this.AE.GD(0x3F);this.AE.EO(0xFF746B8E
);this.AE.FW(0xFF746B8E);this.AE.EQ(0xFF746B8E);this.AE.EP(0xFF000000);this.AE.GE(
0x3F);this.AE.Dn(1);this.AE.Dq(1);this.AE.Dp(0);this.AE.Do(0);this.BI.C8(136);this.
BI.EO(0xFFFEFCFF);this.BI.FW(0xFFFEFCFF);this.BI.EQ(0xFFFEFCFF);this.BI.EP(0xFF020099
);this.BI.Dn(1);this.BI.Dq(1);this.BI.Dp(0);this.BI.Do(0);this.EK.GG(0);this.EK.
Hx(100);this.EK.B0(false);this.EX.N(Ml);this.EX.A6(Je);this.EY.N(Mm);this.EY.A6(
Je);this.EZ.N(Mn);this.EZ.A6(Je);this.D3.N(Mo);this.D3.A6(Mp);this.Ea.N(Mq);this.
Ea.A6(Mr);this.D$.N(Ms);this.D$.A6(Mt);this.DV.N(Mu);this.DV.A6(Mv);this.DU.N(Mw
);this.DU.A6(Mx);this.D9.N(My);this.D9.A6(Mz);this.D8.N(MA);this.D8.A6(MB);this.
DT.N(MC);this.DT.A6(MD);this.DZ.N(ME);this.DZ.A6(MF);this.Eb.N(MG);this.Eb.A6(MH
);this.Clear.N(MI);this.Clear.A6(AF);this.Plus.N(MJ);this.Plus.A6(MK);this.Minus.
N(ML);this.Minus.A6(MM);this.Multiply.N(MN);this.Multiply.A6(Ec);this.Divide.N(MO
);this.Divide.A6(MP);this.Dy.IT(0x14);this.Dy.N(MQ);this.Dy.A6(MR);this.Power.N(
MS);this.Power.LF(1);this.Power.LH(1);this.Power.LG(0);this.Power.LE(0);this.Power.
A6(MT);this.D5.N(MU);this.D5.A6(MV);this.D4.N(MW);this.D4.A6(DF);this.DR.N(MX);this.
DR.A6(MY);this.Equals.N(MZ);this.Equals.A6(CG);this.BJ.C8(80);this.BJ.LI(2);this.
BJ.LL(2);this.BJ.LK(2);this.BJ.LJ(2);this.BJ.LD(0x12);this.BJ.Dn(1);this.BJ.Dq(1
);this.BJ.Dp(0);this.BJ.Do(0);this.Cu.C8(0);this.Cu.Dn(1);this.Cu.Dq(1);this.Cu.
Dp(0);this.Cu.Do(0);this.Bq.C8(0);this.Bq.GC(0x00000403);this.Bq.GB(0x00000000);
this.Bq.GD(0x3F);this.Bq.EO(0xFF746B8E);this.Bq.FW(0xFF746B8E);this.Bq.EQ(0xFF746B8E
);this.Bq.EP(0xFF000000);this.Bq.GE(0x3F);this.Bq.Dn(1);this.Bq.Dq(1);this.Bq.Dp(
0);this.Bq.Do(0);this.CB.C8(135);this.CB.Dn(1);this.CB.Dq(1);this.CB.Dp(0);this.
CB.Do(0);this.Bf.C8(134);this.Bf.GC(0x00000403);this.Bf.GB(0x00000000);this.Bf.GD(
0x3F);this.Bf.EO(0xFF746B8E);this.Bf.FW(0xFF746B8E);this.Bf.EQ(0xFF746B8E);this.
Bf.EP(0xFF000000);this.Bf.GE(0x3F);this.Bf.Dn(1);this.Bf.Dq(1);this.Bf.Dp(0);this.
Bf.Do(0);this.Bn.C8(0);this.Bn.GC(0x00000403);this.Bn.GB(0x00000000);this.Bn.GD(
0x3F);this.Bn.EO(0xFFFEFCFF);this.Bn.FW(0xFFFEFCFF);this.Bn.EQ(0xFFFEFCFF);this.
Bn.EP(0xFF000000);this.Bn.GE(0x3F);this.Bn.Dn(1);this.Bn.Dq(1);this.Bn.Dp(0);this.
Bn.Do(0);this.Bw.C8(0);this.Bw.GC(0x00000403);this.Bw.GB(0x00000000);this.Bw.GD(
0x3F);this.Bw.EO(0xFF746B8E);this.Bw.FW(0xFF746B8E);this.Bw.EQ(0xFF746B8E);this.
Bw.EP(0xFF000000);this.Bw.GE(0x3F);this.Bw.Dn(1);this.Bw.Dq(1);this.Bw.Dp(0);this.
Bw.Do(0);this.CA.C8(151);this.CA.Dn(1);this.CA.Dq(1);this.CA.Dp(0);this.CA.Do(0);
this.Cc.N(M0);this.Cc.A6(Ed);this.P(this.AU,0);this.P(this.EX,0);this.P(this.EY,
0);this.P(this.EZ,0);this.P(this.D3,0);this.P(this.Ea,0);this.P(this.D$,0);this.
P(this.DV,0);this.P(this.DU,0);this.P(this.D9,0);this.P(this.D8,0);this.P(this.DT
,0);this.P(this.DZ,0);this.P(this.Eb,0);this.P(this.Clear,0);this.P(this.Plus,0);
this.P(this.Minus,0);this.P(this.Multiply,0);this.P(this.Divide,0);this.P(this.Dy
,0);this.P(this.Power,0);this.P(this.D5,0);this.P(this.D4,0);this.P(this.DR,0);this.
P(this.Equals,0);this.P(this.Cc,0);this.AE.ER(B.aaL(D.Hv));this.AE.Dj(B.aaL(D.BQ
));this.AE.Dm(B.aaL(D.BQ));this.AE.Dl(B.aaL(D.BQ));this.AE.Dk(B.aaL(D.BQ));this.
BI.LP(null);this.BI.ER(B.aaL(D.Io));this.BI.Dj(B.aaL(D.FK));this.BI.Dm(B.aaL(D.FK
));this.BI.Dl(B.aaL(D.FK));this.BI.Dk(B.aaL(D.FK));this.EK.FX=[this,this.NY];this.
EX.A5(this.AE);this.EY.A5(this.BJ);this.EZ.A5(this.Cu);this.D3.AS=[this,this.BC];
this.D3.A5(this.AE);this.Ea.AS=[this,this.BC];this.Ea.A5(this.AE);this.D$.AS=[this
,this.BC];this.D$.A5(this.AE);this.DV.AS=[this,this.BC];this.DV.A5(this.AE);this.
DU.AS=[this,this.BC];this.DU.A5(this.AE);this.D9.AS=[this,this.BC];this.D9.A5(this.
AE);this.D8.AS=[this,this.BC];this.D8.A5(this.AE);this.DT.AS=[this,this.BC];this.
DT.A5(this.AE);this.DZ.AS=[this,this.BC];this.DZ.A5(this.AE);this.Eb.AS=[this,this.
BC];this.Eb.A5(this.AE);this.Clear.AS=[this,this.BC];this.Clear.A5(this.Bf);this.
Plus.AS=[this,this.BC];this.Plus.A5(this.Bq);this.Minus.AS=[this,this.BC];this.Minus.
A5(this.Bf);this.Multiply.AS=[this,this.BC];this.Multiply.A5(this.Bf);this.Divide.
AS=[this,this.BC];this.Divide.A5(this.CB);this.Dy.AS=[this,this.BC];this.Dy.A5(this.
AE);this.Power.AS=[this,this.BC];this.Power.LC(null);this.Power.A5(this.BJ);this.
D5.AS=[this,this.BC];this.D5.A5(this.Cu);this.D4.AS=[this,this.BC];this.D4.A5(this.
Bn);this.DR.AS=[this,this.BC];this.DR.A5(this.Bn);this.Equals.AS=[this,this.BC];
this.Equals.A5(this.BI);this.BJ.Dj(B.aaL(D.F_));this.BJ.Dm(B.aaL(D.F_));this.BJ.
Dl(B.aaL(D.F_));this.BJ.Dk(B.aaL(D.F_));this.Cu.Dj(B.aaL(D.F0));this.Cu.Dm(B.aaL(
D.F0));this.Cu.Dl(B.aaL(D.F0));this.Cu.Dk(B.aaL(D.F0));this.Bq.ER(B.aaL(D.IO));this.
Bq.Dj(B.aaL(D.BQ));this.Bq.Dm(B.aaL(D.BQ));this.Bq.Dl(B.aaL(D.BQ));this.Bq.Dk(B.
aaL(D.BQ));this.CB.Dj(B.aaL(D.FI));this.CB.Dm(B.aaL(D.FI));this.CB.Dl(B.aaL(D.FI
));this.CB.Dk(B.aaL(D.FI));this.Bf.ER(B.aaL(D.IN));this.Bf.Dj(B.aaL(D.BQ));this.
Bf.Dm(B.aaL(D.BQ));this.Bf.Dl(B.aaL(D.BQ));this.Bf.Dk(B.aaL(D.BQ));this.Bn.ER(B.
aaL(D.Hv));this.Bn.Dj(B.aaL(D.FZ));this.Bn.Dm(B.aaL(D.FZ));this.Bn.Dl(B.aaL(D.FZ
));this.Bn.Dk(B.aaL(D.FZ));this.Bw.ER(B.aaL(D.IP));this.Bw.Dj(B.aaL(D.BQ));this.
Bw.Dm(B.aaL(D.BQ));this.Bw.Dl(B.aaL(D.BQ));this.Bw.Dk(B.aaL(D.BQ));this.CA.Dj(B.
aaL(D.Cc));this.CA.Dm(B.aaL(D.Cc));this.CA.Dl(B.aaL(D.Cc));this.CA.Dk(B.aaL(D.Cc
));this.Cc.AS=[this,this.BC];this.Cc.A5(this.CA);},_Done:function(){this.__proto__=
B.Core.Am;this.AU._Done();this.AE._Done();this.BI._Done();this.EK._Done();this.EX.
_Done();this.EY._Done();this.EZ._Done();this.D3._Done();this.Ea._Done();this.D$.
_Done();this.DV._Done();this.DU._Done();this.D9._Done();this.D8._Done();this.DT.
_Done();this.DZ._Done();this.Eb._Done();this.Clear._Done();this.Plus._Done();this.
Minus._Done();this.Multiply._Done();this.Divide._Done();this.Dy._Done();this.Power.
_Done();this.D5._Done();this.D4._Done();this.DR._Done();this.Equals._Done();this.
BJ._Done();this.Cu._Done();this.Bq._Done();this.CB._Done();this.Bf._Done();this.
Bn._Done();this.Bw._Done();this.CA._Done();this.Cc._Done();B.Core.Am._Done.call(
this);},_ReInit:function(){B.Core.Am._ReInit.call(this);this.AU._ReInit();this.AE.
_ReInit();this.BI._ReInit();this.EK._ReInit();this.EX._ReInit();this.EY._ReInit(
);this.EZ._ReInit();this.D3._ReInit();this.Ea._ReInit();this.D$._ReInit();this.DV.
_ReInit();this.DU._ReInit();this.D9._ReInit();this.D8._ReInit();this.DT._ReInit(
);this.DZ._ReInit();this.Eb._ReInit();this.Clear._ReInit();this.Plus._ReInit();this.
Minus._ReInit();this.Multiply._ReInit();this.Divide._ReInit();this.Dy._ReInit();
this.Power._ReInit();this.D5._ReInit();this.D4._ReInit();this.DR._ReInit();this.
Equals._ReInit();this.BJ._ReInit();this.Cu._ReInit();this.Bq._ReInit();this.CB._ReInit(
);this.Bf._ReInit();this.Bn._ReInit();this.Bw._ReInit();this.CA._ReInit();this.Cc.
_ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=this.AU).
_cycle!=E)A._Mark(A._cycle=E);if((A=this.AE)._cycle!=E)A._Mark(A._cycle=E);if((A=
this.BI)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EK)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EX)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EY)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EZ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D3)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ea)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D$
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DV)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.DU)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D9)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.D8)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DT)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.DZ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eb)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Clear)._cycle!=E)A._Mark(A._cycle=E);if((A=this.
Plus)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Minus)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Multiply)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Divide)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Dy)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Power
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.D5)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.D4)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DR)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Equals)._cycle!=E)A._Mark(A._cycle=E);if((A=this.BJ)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Cu)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bq)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.CB)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bf
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Bn)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Bw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.CA)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Cc)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::NumKeyBtns"
};D.BQ={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationCustomBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.FK={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationEqualsBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[140,70],FrameDelay:0,_this:
null}};D.Io={_class:function(){return B.ach.A2;},0:{Data:function(){return B.acn;
},Cache:[],_this:null}};D.F0={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationPercentBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.F_={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationPowBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.IO={_class:function(){return B.ach.A2;},0:{Data:function(){return B.acq;
},Cache:[],_this:null}};D.FI={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationDivideBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.IN={_class:function(){return B.ach.A2;},0:{Data:function(){return B.acp;
},Cache:[],_this:null}};D.Kc={Kb:EU,IC:0,In:-1,AV:function(aArg){this.J2(Number.
POSITIVE_INFINITY);this.J0(-1);this.J5(EU);},J2:function(C){if(this.IC===C)return;
this.IC=C;},J0:function(C){if(this.In===C)return;this.In=C;},J5:function(C){if(this.
Kb===C)return;this.Kb=C;},_Init:function(aArg){this.__proto__=D.Kc;this.AV(aArg);
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:
0,_observers:null,_className:"Application::Tuple"};D.Be={Hw:null,Bm:null,DQ:null
,DE:null,ET:null,C4:null,Cr:null,Aw:null,DD:null,A4:null,Ds:null,KM:function(A0){
B.aaS(this.Hw,this);},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);B.acf.
ES._Init.call(this.Bm={K:this},0);B.acf.AU._Init.call(this.DQ={K:this},0);B.acf.
ES._Init.call(this.DE={K:this},0);B.acf.AU._Init.call(this.ET={K:this},0);B.acg.
CE._Init.call(this.C4={K:this},0);B.acf.Text._Init.call(this.Cr={K:this},0);B.acg.
Aw._Init.call(this.Aw={K:this},0);B.acg.Aw._Init.call(this.DD={K:this},0);B.acg.
CE._Init.call(this.A4={K:this},0);B.acf.Text._Init.call(this.Ds={K:this},0);this.
__proto__=D.Be;this.N(Kg);this.Bm.N(Kg);this.Bm.DC(3);this.Bm.Bg(0xFFE9E6E2);this.
DQ.N(M1);this.DQ.DC(3);this.DQ.GH(2);this.DQ.Bg(0xFF000447);this.DE.N(Kh);this.DE.
LS(3);this.DE.LR(3);this.DE.DC(3);this.DE.Bg(0xFF020099);this.ET.N(Kh);this.ET.GH(
2);this.ET.Bg(0xFF000446);this.C4.C8(149);this.C4.EO(0xFFFFFFFF);this.C4.EQ(0xFFFFFFFF
);this.C4.EP(0xFF000000);this.C4.J4(3);this.C4.J3(0x12);this.Cr.N(M2);this.Cr.IZ(
true);this.Cr.Fh(0x9);this.Cr.Ct(M3);this.Cr.Bg(0xFF00022D);this.Aw.N(M4);this.Aw.
A6(M5);this.DD.IT(0x18);this.DD.N(M6);this.DD.A6(M7);this.A4.C8(149);this.A4.LU(
0x00319420);this.A4.LV(0x002A843A);this.A4.LW(0);this.A4.LX(0);this.A4.LY(0x00517ECC
);this.A4.LZ(0x001F32B7);this.A4.L0(0x3F);this.A4.EO(0xFFFFFFFF);this.A4.EQ(0xFFFFFFFF
);this.A4.EP(0xFF000000);this.A4.J4(3);this.A4.J3(0x92);this.A4.Dn(1);this.A4.Dq(
1);this.A4.Dp(0);this.A4.Do(0);this.Ds.N(M8);this.Ds.IZ(true);this.Ds.Fh(0x19);this.
Ds.Ct(M9);this.Ds.Bg(0xFFDDE6F2);this.P(this.Bm,0);this.P(this.DQ,0);this.P(this.
DE,0);this.P(this.ET,0);this.P(this.Cr,0);this.P(this.Aw,0);this.P(this.DD,0);this.
P(this.Ds,0);this.C4.ER(B.aaL(D.Hm));this.Cr.FV(B.aaL(D.Hp));this.Aw.AS=[this,this.
KM];this.Aw.A5(this.C4);this.DD.AS=[this,this.KM];this.DD.A5(this.A4);this.A4.ER(
B.aaL(D.Hm));this.A4.Dj(B.aaL(D.FS));this.A4.Dm(B.aaL(D.FS));this.A4.Dl(B.aaL(D.
FS));this.A4.Dk(B.aaL(D.FS));this.Ds.FV(B.aaL(D.Hp));},_Done:function(){this.__proto__=
B.Core.Am;this.Bm._Done();this.DQ._Done();this.DE._Done();this.ET._Done();this.C4.
_Done();this.Cr._Done();this.Aw._Done();this.DD._Done();this.A4._Done();this.Ds.
_Done();B.Core.Am._Done.call(this);},_ReInit:function(){B.Core.Am._ReInit.call(this
);this.Bm._ReInit();this.DQ._ReInit();this.DE._ReInit();this.ET._ReInit();this.C4.
_ReInit();this.Cr._ReInit();this.Aw._ReInit();this.DD._ReInit();this.A4._ReInit(
);this.Ds._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this,E);if((A=
this.Hw)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Bm)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.DQ)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DE)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.ET)._cycle!=E)A._Mark(A._cycle=E);if((A=this.C4
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Cr)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Aw)._cycle!=E)A._Mark(A._cycle=E);if((A=this.DD)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.A4)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ds)._cycle!=E)A._Mark(
A._cycle=E);},_className:"Application::ErrorDialog"};D.Hp={_class:function(){return B.
ach.A2;},0:{Data:function(){return B.aco;},Cache:[],_this:null}};D.Hm={_class:function(
){return B.ach.A2;},0:{Data:function(){return B.acl;},Cache:[],_this:null}};D.FS={
_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationOKBtn.png",Format:
B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,30],FrameDelay:0,_this:null}};
D.FZ={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationParenthesisBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[35,70],FrameDelay:0,_this:
null}};D.IP={_class:function(){return B.ach.A2;},0:{Data:function(){return B.acs;
},Cache:[],_this:null}};D.Cc={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationBackBtn.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:2,FrameSize:[70,70],FrameDelay:0,_this:
null}};D.Ia={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationBatteryBgk.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[110,50],FrameDelay:0,_this:
null}};D.Bu={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationBatteryLine.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[5,46],FrameDelay:0,_this:
null}};D.Go={As:B.abi(20,null,null),Bk:B.abi(20,null,null),Bm:null,EC:null,ED:null
,EE:null,EF:null,E0:null,E1:null,E2:null,E3:null,Ex:null,Ey:null,Ez:null,EA:null
,EB:null,Em:null,En:null,Eo:null,Ep:null,Eq:null,Er:null,Es:null,Et:null,Eu:null
,Ev:null,Ew:null,Timer:null,Text:null,Dx:101,KO:function(A0){var A;this.Dx=(this.
Dx-0.05)|0;var BY;BY=this.Dx.toFixed();if(this.Dx<50)this.Text.Bg(0xFF005FBC);if(
this.Dx<20)this.Text.Bg(0xFF1400CB);this.Text.Ct(BY);if(this.Dx<0)this.Dx=0;if(this.
Dx<20)this.Mb(this.Dx);else this.Ma(this.Dx);},Ma:function(JJ){var JC=(JJ/5)|0;var
G=0;for(;G<20;G++)if(G<JC)this.As.Get(G).AM(true);else this.As.Get(G).AM(false);
},Mb:function(JJ){this.Ll();var JC=(JJ/5)|0;var G=0;for(;G<20;G++)if(G<JC)this.Bk.
Get(G).AM(true);else this.Bk.Get(G).AM(false);},Ll:function(){this.As.Get(0).AM(
false);this.As.Get(1).AM(false);this.As.Get(2).AM(false);this.As.Get(3).AM(false
);this.As.Get(4).AM(false);this.As.Get(5).AM(false);this.As.Get(6).AM(false);this.
As.Get(7).AM(false);this.As.Get(8).AM(false);this.As.Get(9).AM(false);this.As.Get(
10).AM(false);this.As.Get(11).AM(false);this.As.Get(12).AM(false);this.As.Get(13
).AM(false);this.As.Get(14).AM(false);this.As.Get(15).AM(false);this.As.Get(16).
AM(false);this.As.Get(17).AM(false);this.As.Get(18).AM(false);this.As.Get(19).AM(
false);},_Init:function(aArg){B.Core.Am._Init.call(this,aArg);B.acf.AX._Init.call(
this.Bm={K:this},0);B.acf.AX._Init.call(this.EC={K:this},0);B.acf.AX._Init.call(
this.ED={K:this},0);B.acf.AX._Init.call(this.EE={K:this},0);B.acf.AX._Init.call(
this.EF={K:this},0);B.acf.AX._Init.call(this.E0={K:this},0);B.acf.AX._Init.call(
this.E1={K:this},0);B.acf.AX._Init.call(this.E2={K:this},0);B.acf.AX._Init.call(
this.E3={K:this},0);B.acf.AX._Init.call(this.Ex={K:this},0);B.acf.AX._Init.call(
this.Ey={K:this},0);B.acf.AX._Init.call(this.Ez={K:this},0);B.acf.AX._Init.call(
this.EA={K:this},0);B.acf.AX._Init.call(this.EB={K:this},0);B.acf.AX._Init.call(
this.Em={K:this},0);B.acf.AX._Init.call(this.En={K:this},0);B.acf.AX._Init.call(
this.Eo={K:this},0);B.acf.AX._Init.call(this.Ep={K:this},0);B.acf.AX._Init.call(
this.Eq={K:this},0);B.acf.AX._Init.call(this.Er={K:this},0);B.acf.AX._Init.call(
this.Es={K:this},0);B.acf.AX._Init.call(this.Et={K:this},0);B.acf.AX._Init.call(
this.Eu={K:this},0);B.acf.AX._Init.call(this.Ev={K:this},0);B.acf.AX._Init.call(
this.Ew={K:this},0);B.Core.Timer._Init.call(this.Timer={K:this},0);B.acf.Text._Init.
call(this.Text={K:this},0);(this.As=[]).__proto__=D.Go.As;(this.Bk=[]).__proto__=
D.Go.Bk;this.__proto__=D.Go;this.N(M_);this.Bm.N(M$);this.EC.N(Ki);this.EC.AM(true
);this.ED.N(Kj);this.ED.AM(true);this.EE.N(Kk);this.EE.AM(true);this.EF.N(Kl);this.
EF.AM(true);this.E0.N(Ki);this.E1.N(Kj);this.E2.N(Kk);this.E3.N(Kl);this.Ex.N(Na
);this.Ey.N(Nb);this.Ez.N(Nc);this.EA.N(Nd);this.EB.N(Ne);this.Em.N(Nf);this.En.
N(Ng);this.Eo.N(Nh);this.Ep.N(Ni);this.Eq.N(Nj);this.Er.N(Nk);this.Es.N(Nl);this.
Et.N(Nm);this.Eu.N(Nn);this.Ev.N(No);this.Ew.N(Np);this.Timer.GG(7000);this.Timer.
B0(true);this.Text.N(Nq);this.Text.Ct(B.jV);this.Text.Bg(0xFF064600);this.P(this.
Bm,0);this.P(this.EC,0);this.P(this.ED,0);this.P(this.EE,0);this.P(this.EF,0);this.
P(this.E0,0);this.P(this.E1,0);this.P(this.E2,0);this.P(this.E3,0);this.P(this.Ex
,0);this.P(this.Ey,0);this.P(this.Ez,0);this.P(this.EA,0);this.P(this.EB,0);this.
P(this.Em,0);this.P(this.En,0);this.P(this.Eo,0);this.P(this.Ep,0);this.P(this.Eq
,0);this.P(this.Er,0);this.P(this.Es,0);this.P(this.Et,0);this.P(this.Eu,0);this.
P(this.Ev,0);this.P(this.Ew,0);this.P(this.Text,0);this.Bm.AW(B.aaL(D.Ia));this.
EC.AW(B.aaL(D.FQ));this.ED.AW(B.aaL(D.FQ));this.EE.AW(B.aaL(D.FQ));this.EF.AW(B.
aaL(D.FQ));this.E0.AW(B.aaL(D.Bu));this.E1.AW(B.aaL(D.Bu));this.E2.AW(B.aaL(D.Bu
));this.E3.AW(B.aaL(D.Bu));this.Ex.AW(B.aaL(D.Bu));this.Ey.AW(B.aaL(D.Bu));this.
Ez.AW(B.aaL(D.Bu));this.EA.AW(B.aaL(D.Bu));this.EB.AW(B.aaL(D.Bu));this.Em.AW(B.
aaL(D.Bu));this.En.AW(B.aaL(D.Bu));this.Eo.AW(B.aaL(D.Bu));this.Ep.AW(B.aaL(D.Bu
));this.Eq.AW(B.aaL(D.Bu));this.Er.AW(B.aaL(D.Bu));this.Es.AW(B.aaL(D.Bu));this.
Et.AW(B.aaL(D.Bu));this.Eu.AW(B.aaL(D.Bu));this.Ev.AW(B.aaL(D.Bu));this.Ew.AW(B.
aaL(D.Bu));this.Timer.FX=[this,this.KO];this.As.Set(0,this.E0);this.As.Set(1,this.
E1);this.As.Set(2,this.E2);this.As.Set(3,this.E3);this.As.Set(4,this.Ex);this.As.
Set(5,this.Ey);this.As.Set(6,this.Ez);this.As.Set(7,this.EA);this.As.Set(8,this.
EB);this.As.Set(9,this.Em);this.As.Set(10,this.En);this.As.Set(11,this.Eo);this.
As.Set(12,this.Ep);this.As.Set(13,this.Eq);this.As.Set(14,this.Er);this.As.Set(15
,this.Es);this.As.Set(16,this.Et);this.As.Set(17,this.Eu);this.As.Set(18,this.Ev
);this.As.Set(19,this.Ew);this.Text.FV(B.aaL(D.Ib));this.Bk.Set(0,this.EC);this.
Bk.Set(1,this.ED);this.Bk.Set(2,this.EE);this.Bk.Set(3,this.EF);this.Bk.Set(4,this.
Ex);this.Bk.Set(5,this.Ey);this.Bk.Set(6,this.Ez);this.Bk.Set(7,this.EA);this.Bk.
Set(8,this.EB);this.Bk.Set(9,this.Em);this.Bk.Set(10,this.En);this.Bk.Set(11,this.
Eo);this.Bk.Set(12,this.Ep);this.Bk.Set(13,this.Eq);this.Bk.Set(14,this.Er);this.
Bk.Set(15,this.Es);this.Bk.Set(16,this.Et);this.Bk.Set(17,this.Eu);this.Bk.Set(18
,this.Ev);this.Bk.Set(19,this.Ew);},_Done:function(){this.__proto__=B.Core.Am;this.
Bm._Done();this.EC._Done();this.ED._Done();this.EE._Done();this.EF._Done();this.
E0._Done();this.E1._Done();this.E2._Done();this.E3._Done();this.Ex._Done();this.
Ey._Done();this.Ez._Done();this.EA._Done();this.EB._Done();this.Em._Done();this.
En._Done();this.Eo._Done();this.Ep._Done();this.Eq._Done();this.Er._Done();this.
Es._Done();this.Et._Done();this.Eu._Done();this.Ev._Done();this.Ew._Done();this.
Timer._Done();this.Text._Done();B.Core.Am._Done.call(this);},_ReInit:function(){
B.Core.Am._ReInit.call(this);this.Bm._ReInit();this.EC._ReInit();this.ED._ReInit(
);this.EE._ReInit();this.EF._ReInit();this.E0._ReInit();this.E1._ReInit();this.E2.
_ReInit();this.E3._ReInit();this.Ex._ReInit();this.Ey._ReInit();this.Ez._ReInit(
);this.EA._ReInit();this.EB._ReInit();this.Em._ReInit();this.En._ReInit();this.Eo.
_ReInit();this.Ep._ReInit();this.Eq._ReInit();this.Er._ReInit();this.Es._ReInit(
);this.Et._ReInit();this.Eu._ReInit();this.Ev._ReInit();this.Ew._ReInit();this.Timer.
_ReInit();this.Text._ReInit();},_Mark:function(E){var A;B.Core.Am._Mark.call(this
,E);B.aa6(this.As,E);B.aa6(this.Bk,E);if((A=this.Bm)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.EC)._cycle!=E)A._Mark(A._cycle=E);if((A=this.ED)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EE)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EF)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.E0)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E1
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.E2)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.E3)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ex)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Ey)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ez)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.EA)._cycle!=E)A._Mark(A._cycle=E);if((A=this.EB)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Em)._cycle!=E)A._Mark(A._cycle=E);if((A=this.En
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eo)._cycle!=E)A._Mark(A._cycle=E);if((
A=this.Ep)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eq)._cycle!=E)A._Mark(A._cycle=
E);if((A=this.Er)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Es)._cycle!=E)A._Mark(
A._cycle=E);if((A=this.Et)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Eu)._cycle!=
E)A._Mark(A._cycle=E);if((A=this.Ev)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Ew
)._cycle!=E)A._Mark(A._cycle=E);if((A=this.Timer)._cycle!=E)A._Mark(A._cycle=E);
if((A=this.Text)._cycle!=E)A._Mark(A._cycle=E);},_className:"Application::Battery"
};D.I5={Bx:null,Bv:B.jV,Hy:function(C){if(this.Bv===C)return;this.Bv=C;},DB:function(
C){if(this.Bx===C)return;this.Bx=C;},_Init:function(aArg){this.__proto__=D.I5;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Bx)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K
)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Application::SimpleStringElement"};D.J_={C5:null,Df:null,CF:0,CC:false,Ce:function(
Ef){var B_=B._NewObject(D.I5,0);B_.Hy(Ef);B_.DB(null);if(!this.C5){this.GF(B_);this.
FT(B_);}else{this.Df.DB(B_);this.FT(B_);}},AV:function(aArg){this.GF(null);this.
FT(null);this.D2(0);this.D1(true);},L4:function(){var Cw=this.C5;while(!!Cw){B.ab5(
"%s",Cw.Bv);Cw=Cw.Bx;}},GF:function(C){if(this.C5===C)return;this.C5=C;},FT:function(
C){if(this.Df===C)return;this.Df=C;},D2:function(C){if(this.CF===C)return;this.CF=
C;},D1:function(C){if(this.CC===C)return;this.CC=C;},_Init:function(aArg){this.__proto__=
D.J_;this.AV(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.C5)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Df)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E
))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Application::StrQueue"
};D.J$={A7:null,CF:0,CC:false,AV:function(aArg){this.Dr(null);this.D2(0);this.D1(
true);},Dr:function(C){if(this.A7===C)return;this.A7=C;},D2:function(C){if(this.
CF===C)return;this.CF=C;},D1:function(C){if(this.CC===C)return;this.CC=C;},Ce:function(
Ef){var B_=B._NewObject(D.I5,0);B_.Hy(Ef);B_.DB(this.A7);this.Dr(B_);},D6:function(
){var Cw=this.A7;if(!Cw)B.ab5("%s",Jf);else this.Dr(this.A7.Bx);},DX:function(){
if(!!this.A7)return this.A7.Bv;return B.jV;},Ff:function(){if(!this.A7)return true;
return false;},_Init:function(aArg){this.__proto__=D.J$;this.AV(aArg);B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.A7)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E)
)A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Application::StrStack"
};D.J9={Bx:null,Ii:0,Lz:function(C){if(this.Ii===C)return;this.Ii=C;},DB:function(
C){if(this.Bx===C)return;this.Bx=C;},_Init:function(aArg){this.__proto__=D.J9;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(E){var A;if((A=this.Bx)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K
)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Application::SimpleFloatElement"};D.JV={A7:null,CF:0,CC:false,AV:function(aArg){
this.Dr(null);this.D2(0);this.D1(true);},Dr:function(C){if(this.A7===C)return;this.
A7=C;},D2:function(C){if(this.CF===C)return;this.CF=C;},D1:function(C){if(this.CC===
C)return;this.CC=C;},Ce:function(Ef){var Js=B._NewObject(D.J9,0);Js.Lz(Ef);Js.DB(
this.A7);this.Dr(Js);},D6:function(){var Cw=this.A7;if(!Cw)B.ab5("%s",Jf);else this.
Dr(this.A7.Bx);},DX:function(){if(!!this.A7)return this.A7.Ii;return 0;},_Init:function(
aArg){this.__proto__=D.JV;this.AV(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.A7)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Application::FloatStack"};D.Ka={Bx:null,I0:
null,Bv:B.jV,Hy:function(C){if(this.Bv===C)return;this.Bv=C;},DB:function(C){if(
this.Bx===C)return;this.Bx=C;},LQ:function(C){if(this.I0===C)return;this.I0=C;},
_Init:function(aArg){this.__proto__=D.Ka;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Bx)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.I0)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=
this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Application::StringElement"};D.I7={C5:null,Df:null,CF:0,CC:false,AV:function(aArg
){this.GF(null);this.FT(null);this.D2(0);this.D1(true);},GF:function(C){if(this.
C5===C)return;this.C5=C;},FT:function(C){if(this.Df===C)return;this.Df=C;},D2:function(
C){if(this.CF===C)return;this.CF=C;},D1:function(C){if(this.CC===C)return;this.CC=
C;},I1:function(Ef){var B_=B._NewObject(D.Ka,0);B_.Hy(Ef);B_.DB(null);B_.LQ(this.
Df);if(!!this.Df)this.Df.DB(B_);else this.GF(B_);this.FT(B_);},_Init:function(aArg
){this.__proto__=D.I7;this.AV(aArg);B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.C5)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.Df)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Application::StrVector"};D.JQ={A7:null,CF:0,CC:false,AV:function(aArg){this.Dr(
null);this.D2(0);this.D1(true);},Dr:function(C){if(this.A7===C)return;this.A7=C;
},D2:function(C){if(this.CF===C)return;this.CF=C;},D1:function(C){if(this.CC===C
)return;this.CC=C;},Ce:function(Ef){var Jn=B._NewObject(D.J8,0);Jn.Ly(Ef);Jn.DB(
this.A7);this.Dr(Jn);},D6:function(){var Cw=this.A7;if(!Cw)B.ab5("%s",Jf);else this.
Dr(this.A7.Bx);},Ff:function(){if(!this.A7)return true;return false;},_Init:function(
aArg){this.__proto__=D.JQ;this.AV(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.A7)&&(A._cycle
!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Application::CharStack"};D.J8={Bx:null,JR:
0,Ly:function(C){if(this.JR===C)return;this.JR=C;},DB:function(C){if(this.Bx===C
)return;this.Bx=C;},_Init:function(aArg){this.__proto__=D.J8;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.Bx)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(
A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Application::SimpleCharElement"
};D.Ib={_class:function(){return B.ach.A2;},0:{Data:function(){return B.ack;},Cache:[
],_this:null}};D.FQ={_class:function(){return B.ach.Ae;},0:{FileName:"./res/ApplicationLowBattery.png"
,Format:B._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[5,46],FrameDelay:0,_this:
null}};
D._Init=function(){D.H$.__proto__=B.Core.Root;D.IQ.__proto__=B.Core.Am;D.Be.__proto__=
B.Core.Am;D.Go.__proto__=B.Core.Am;};D._ReInit=function(){};D.Cv=function(E){var
A;if((A=D.Hv[0]._this)&&(A._cycle!=E))A._Done(D.Hv[0]._this=null);if((A=D.Ik[0].
_this)&&(A._cycle!=E))A._Done(D.Ik[0]._this=null);if((A=D.BQ[0]._this)&&(A._cycle
!=E))A._Done(D.BQ[0]._this=null);if((A=D.FK[0]._this)&&(A._cycle!=E))A._Done(D.FK[
0]._this=null);if((A=D.Io[0]._this)&&(A._cycle!=E))A._Done(D.Io[0]._this=null);if((
A=D.F0[0]._this)&&(A._cycle!=E))A._Done(D.F0[0]._this=null);if((A=D.F_[0]._this)&&(
A._cycle!=E))A._Done(D.F_[0]._this=null);if((A=D.IO[0]._this)&&(A._cycle!=E))A._Done(
D.IO[0]._this=null);if((A=D.FI[0]._this)&&(A._cycle!=E))A._Done(D.FI[0]._this=null
);if((A=D.IN[0]._this)&&(A._cycle!=E))A._Done(D.IN[0]._this=null);if((A=D.Hp[0].
_this)&&(A._cycle!=E))A._Done(D.Hp[0]._this=null);if((A=D.Hm[0]._this)&&(A._cycle
!=E))A._Done(D.Hm[0]._this=null);if((A=D.FS[0]._this)&&(A._cycle!=E))A._Done(D.FS[
0]._this=null);if((A=D.FZ[0]._this)&&(A._cycle!=E))A._Done(D.FZ[0]._this=null);if((
A=D.IP[0]._this)&&(A._cycle!=E))A._Done(D.IP[0]._this=null);if((A=D.Cc[0]._this)&&(
A._cycle!=E))A._Done(D.Cc[0]._this=null);if((A=D.Ia[0]._this)&&(A._cycle!=E))A._Done(
D.Ia[0]._this=null);if((A=D.Bu[0]._this)&&(A._cycle!=E))A._Done(D.Bu[0]._this=null
);if((A=D.Ib[0]._this)&&(A._cycle!=E))A._Done(D.Ib[0]._this=null);if((A=D.FQ[0].
_this)&&(A._cycle!=E))A._Done(D.FQ[0]._this=null);};return D;})();

/* Embedded Wizard */