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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var D={};
var AI=[0,0];var AG=[0,0,0,0];var CF="The view does not belong to this group";var
DI=[340,590];var Ec="No view to restack";var Ed="View is not in this group";var Ff=
"No view to remove";var I7="No view to add";var I8="View already in a group";var
I9="Recursive invalidate during active update cycle.";var GE=[-8,-8,9,9];var HE=[
0,0,1,1];var I_="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.BU={Ar:null,Ad:null,H:null,AH:null,F:0x103,C9:0,C7:0x14,GQ:function(X,HG){},CO:
function(C){if(this.C9===C)return;this.C9=C;if(!!this.H){var Eq=this.Ar;var B2=0;
while(!!Eq&&(C>Eq.C9)){Eq=Eq.Ar;B2=B2+1;}Eq=this.Ad;while(!!Eq&&(C<Eq.C9)){Eq=Eq.
Ad;B2=B2-1;}if(!!B2)this.H.LS(this,B2);}},IO:function(C){var A;var B2=C^this.C7;
if(!B2)return;this.C7=C;if(!!this.AH&&!((this.F&0x400)===0x400)){this.H.F=this.H.
F|0x5000;B.pe([A=this.H,A.Cp],this);this.H.Ac([0,0,(A=this.H.M)[2]-A[0],A[3]-A[1
]]);}if(!!this.AH&&((this.F&0x400)===0x400)){this.AH.Fu.F=this.AH.Fu.F|0x1000;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},Go:function(){var Aa=this.H;while(
!!Aa){var E5=(D.Root.isPrototypeOf(Aa)?Aa:null);if(!!E5)return E5;Aa=Aa.H;}return null;
},CK:function(AE,aClip,aOffset,Ay,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bo:function(Av){return null;},E_:function(Ag,N,Cg,Fh,Ee,F0){return null;},Hd:
function(Ag){return Ag;},He:function(X,CH){return AI;},IF:function(aOffset,HF){}
,GetExtent:function(){return AG;},AQ:function(Cf,CG){var A;if(((this.F&0x200)===
0x200))Cf=Cf&~0x400;var Jz=(this.F&~CG)|Cf;var Da=Jz^this.F;this.F=Jz;if(!!this.
H&&!!(Da&0x14)){var Ko=((this.F&0x14)===0x14);if(Ko&&!this.H.CM)this.H.FQ(this);
if(!Ko&&(this.H.CM===this))this.H.FQ(this.H.JN(this,0x14));}if(!!this.H&&!!(Da&0x403
))this.H.Ac(this.GetClipping());if(((!!this.AH&&!!this.H)&&((Jz&0x400)===0x400))&&((
Da&0x1)===0x1)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp
],this);}if(!!this.H&&((Da&0x400)===0x400)){this.AH=null;this.F=this.F|0x800;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}if(((((Da&0x100000)===0x100000)&&((
CG&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AQ(0x0,0x10);if(((((Da&0x100000)===0x100000)&&((Cf&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.H)&&((this.H.F&0x10)===0x10))))this.AQ(0x10,0x0);if(((((Da&0x200000
)===0x200000)&&((CG&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AQ(0x10,0x0);if((((((Da&0x200000)===0x200000)&&((Cf&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
H&&!((this.H.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.H)&&(null!==
this))))this.AQ(0x0,0x10);},_Init:function(aArg){this.__proto__=D.BU;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ad)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.H)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AH)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::View"};D.GD={Bx:B.wf,BT:B.
wf,Bw:B.wf,BS:B.wf,GQ:function(X,HG){var Z=B._NewObject(D.Hp,0);this.AH=null;Z.B5=
this.GetExtent();Z.AA=X;Z.Fu=HG;Z.G0=this.BS;Z.G1=this.Bw;Z.G2=this.BT;Z.G3=this.
Bx;this.AH=Z;},He:function(X,CH){var A;var Aq=this.C7;var Z=(D.Hp.isPrototypeOf(
A=this.AH)?A:null);var P=Z.B5[0];var Q=Z.B5[1];var S=Z.B5[2];var T=Z.B5[3];var B4=[
X[2]-X[0],X[3]-X[1]];var AC=S-P;var AB=T-Q;if(!CH){var C2=[(A=Z.AA)[2]-A[0],A[3]-
A[1]];P=P-Z.AA[0];Q=Q-Z.AA[1];if(C2[0]!==B4[0]){var A6=((Aq&0x4)===0x4);var A7=((
Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(!A6&&(Dy||!A7))P=((P*B4[0])/C2[0])|0;if(
!A7&&(Dy||!A6)){S=S-Z.AA[0];S=((S*B4[0])/C2[0])|0;S=S-B4[0];}else S=S-Z.AA[2];P=
P+X[0];S=S+X[2];if(!Dy){if(A6&&!A7)S=P+AC;else if(!A6&&A7)P=S-AC;else{P=P+((((S-
P)-AC)/2)|0);S=P+AC;}}}else{S=S-Z.AA[2];P=P+X[0];S=S+X[2];}if(C2[1]!==B4[1]){var
A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2)===0x2);if(!A8&&(
Dz||!A5))Q=((Q*B4[1])/C2[1])|0;if(!A5&&(Dz||!A8)){T=T-Z.AA[1];T=((T*B4[1])/C2[1]
)|0;T=T-B4[1];}else T=T-Z.AA[3];Q=Q+X[1];T=T+X[3];if(!Dz){if(A8&&!A5)T=Q+AB;else
if(!A8&&A5)Q=T-AB;else{Q=Q+((((T-Q)-AB)/2)|0);T=Q+AB;}}}else{T=T-Z.AA[3];Q=Q+X[1
];T=T+X[3];}}else{switch(CH){case 3:{P=X[0];S=P+AC;}break;case 4:{S=X[2];P=S-AC;
}break;case 1:{Q=X[1];T=Q+AB;}break;case 2:{T=X[3];Q=T-AB;}break;default:;}if((CH===
3)||(CH===4)){var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2
)===0x2);if(Dz){Q=X[1];T=X[3];}else if(A8&&!A5){Q=X[1];T=Q+AB;}else if(A5&&!A8){
T=X[3];Q=T-AB;}else{Q=X[1]+((((X[3]-X[1])-AB)/2)|0);T=Q+AB;}}if((CH===1)||(CH===
2)){var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(Dy
){P=X[0];S=X[2];}else if(A6&&!A7){P=X[0];S=P+AC;}else if(A7&&!A6){S=X[2];P=S-AC;
}else{P=X[0]+((((X[2]-X[0])-AC)/2)|0);S=P+AC;}}}Z.isEmpty=(P>=S)||(Q>=T);AC=(S-P
)-1;AB=(T-Q)-1;var Ej=Z.B5[0];var Ek=Z.B5[1];var DM=(Z.B5[2]-Ej)-1;var DL=(Z.B5[
3]-Ek)-1;if(!DM)DM=1;if(!DL)DL=1;if(((this.F&0x100)===0x100)){this.BS=[P+((((Z.G0[
0]-Ej)*AC)/DM)|0),Q+((((Z.G0[1]-Ek)*AB)/DL)|0)];this.Bw=[P+((((Z.G1[0]-Ej)*AC)/DM
)|0),Q+((((Z.G1[1]-Ek)*AB)/DL)|0)];this.BT=[P+((((Z.G2[0]-Ej)*AC)/DM)|0),Q+((((Z.
G2[1]-Ek)*AB)/DL)|0)];this.Bx=[P+((((Z.G3[0]-Ej)*AC)/DM)|0),Q+((((Z.G3[1]-Ek)*AB
)/DL)|0)];}else{this.IQ([P+((((Z.G0[0]-Ej)*AC)/DM)|0),Q+((((Z.G0[1]-Ek)*AB)/DL)|
0)]);this.IR([P+((((Z.G1[0]-Ej)*AC)/DM)|0),Q+((((Z.G1[1]-Ek)*AB)/DL)|0)]);this.IS([
P+((((Z.G2[0]-Ej)*AC)/DM)|0),Q+((((Z.G2[1]-Ek)*AB)/DL)|0)]);this.IT([P+((((Z.G3[
0]-Ej)*AC)/DM)|0),Q+((((Z.G3[1]-Ek)*AB)/DL)|0)]);this.AH=Z;}return[AC+1,AB+1];},
IF:function(aOffset,HF){if(HF){this.BS=B.abf(this.BS,aOffset);this.Bw=B.abf(this.
Bw,aOffset);this.BT=B.abf(this.BT,aOffset);this.Bx=B.abf(this.Bx,aOffset);}else{
this.IQ(B.abf(this.BS,aOffset));this.IR(B.abf(this.Bw,aOffset));this.IS(B.abf(this.
BT,aOffset));this.IT(B.abf(this.Bx,aOffset));}},GetExtent:function(){if(!!this.AH&&
this.AH.isEmpty)return AG;var P=this.BS[0];var Q=this.BS[1];var S=this.BT[0];var
T=this.BT[1];if((((this.Bx[0]!==P)||(this.Bw[1]!==Q))||(this.Bw[0]!==S))||(this.
Bx[1]!==T)){if(this.Bw[0]<P)P=this.Bw[0];if(this.BT[0]<P)P=this.BT[0];if(this.Bx[
0]<P)P=this.Bx[0];if(this.Bw[1]<Q)Q=this.Bw[1];if(this.BT[1]<Q)Q=this.BT[1];if(this.
Bx[1]<Q)Q=this.Bx[1];if(this.BS[0]>S)S=this.BS[0];if(this.Bw[0]>S)S=this.Bw[0];if(
this.Bx[0]>S)S=this.Bx[0];if(this.BS[1]>T)T=this.BS[1];if(this.Bw[1]>T)T=this.Bw[
1];if(this.Bx[1]>T)T=this.Bx[1];}else{var tmp;if(S<P){tmp=P;P=S;S=tmp;}if(T<Q){tmp=
Q;Q=T;T=tmp;}}return[P,Q,S+1,T+1];},IT:function(C){var A;if(B.aaX(C,this.Bx))return;
if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping());this.AH=null;this.
Bx=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.
H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},IS:function(C){var A;if(B.
aaX(C,this.BT))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AH=null;this.BT=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},IR:function(
C){var A;if(B.aaX(C,this.Bw))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.GetClipping());this.AH=null;this.Bw=C;if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this
);}},IQ:function(C){var A;if(B.aaX(C,this.BS))return;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.GetClipping());this.AH=null;this.BS=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400)
)&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.
pe([A=this.H,A.Cp],this);}},Iy:function(Fm){var AL=B.abi(4,B.wf,null);var G=0;var
AO=3;var Js=false;var Jt=false;AL.Set(0,this.BS);AL.Set(1,this.Bw);AL.Set(2,this.
BT);AL.Set(3,this.Bx);while(G<4){var KP=AL.Get(G)[0];var H4=AL.Get(G)[1];var NP=
AL.Get(AO)[0];var JH=AL.Get(AO)[1];if(((H4>Fm[1])!==(JH>Fm[1]))||((H4<Fm[1])!==(
JH<Fm[1]))){var KQ=((((NP-KP)*(Fm[1]-H4))/(JH-H4))|0)+KP;if(Fm[0]>KQ)Js=!Js;if(Fm[
0]<KQ)Jt=!Jt;}AO=G;G=G+1;}return Js||Jt;},K$:function(){return((((this.BS[0]===this.
Bx[0])&&(this.Bw[0]===this.BT[0]))&&(this.BS[1]===this.Bw[1]))&&(this.BT[1]===this.
Bx[1]))||((((this.BS[0]===this.Bw[0])&&(this.BT[0]===this.Bx[0]))&&(this.BS[1]===
this.Bx[1]))&&(this.Bw[1]===this.BT[1]));},_Init:function(aArg){D.BU._Init.call(
this,aArg);this.__proto__=D.GD;},_className:"Core::QuadView"};D.AW={M:B.wg,GQ:function(
X,HG){var Z=B._NewObject(D.Ho,0);Z.B5=this.M;Z.AA=X;Z.Fu=HG;this.AH=Z;},He:function(
X,CH){var A;var Aq=this.C7;var Z=this.AH;var P=Z.B5[0];var Q=Z.B5[1];var S=Z.B5[
2];var T=Z.B5[3];var B4=[X[2]-X[0],X[3]-X[1]];var AC=S-P;var AB=T-Q;if(!CH){var C2=[(
A=Z.AA)[2]-A[0],A[3]-A[1]];P=P-Z.AA[0];Q=Q-Z.AA[1];if(C2[0]!==B4[0]){var A6=((Aq&
0x4)===0x4);var A7=((Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(!A6&&(Dy||!A7))P=((
P*B4[0])/C2[0])|0;if(!A7&&(Dy||!A6)){S=S-Z.AA[0];S=((S*B4[0])/C2[0])|0;S=S-B4[0];
}else S=S-Z.AA[2];P=P+X[0];S=S+X[2];if(!Dy){if(A6&&!A7)S=P+AC;else if(!A6&&A7)P=
S-AC;else{P=P+((((S-P)-AC)/2)|0);S=P+AC;}}}else{S=S-Z.AA[2];P=P+X[0];S=S+X[2];}if(
C2[1]!==B4[1]){var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2
)===0x2);if(!A8&&(Dz||!A5))Q=((Q*B4[1])/C2[1])|0;if(!A5&&(Dz||!A8)){T=T-Z.AA[1];
T=((T*B4[1])/C2[1])|0;T=T-B4[1];}else T=T-Z.AA[3];Q=Q+X[1];T=T+X[3];if(!Dz){if(A8&&
!A5)T=Q+AB;else if(!A8&&A5)Q=T-AB;else{Q=Q+((((T-Q)-AB)/2)|0);T=Q+AB;}}}else{T=T-
Z.AA[3];Q=Q+X[1];T=T+X[3];}}else{switch(CH){case 3:{P=X[0];S=P+AC;}break;case 4:{
S=X[2];P=S-AC;}break;case 1:{Q=X[1];T=Q+AB;}break;case 2:{T=X[3];Q=T-AB;}break;default:;
}if((CH===3)||(CH===4)){var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((
Aq&0x2)===0x2);if(Dz){Q=X[1];T=X[3];}else if(A8&&!A5){Q=X[1];T=Q+AB;}else if(A5&&
!A8){T=X[3];Q=T-AB;}else{Q=X[1]+((((X[3]-X[1])-AB)/2)|0);T=Q+AB;}}if((CH===1)||(
CH===2)){var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);
if(Dy){P=X[0];S=X[2];}else if(A6&&!A7){P=X[0];S=P+AC;}else if(A7&&!A6){S=X[2];P=
S-AC;}else{P=X[0]+((((X[2]-X[0])-AC)/2)|0);S=P+AC;}}}Z.isEmpty=(P>=S)||(Q>=T);if(((
this.F&0x100)===0x100))this.M=[P,Q,S,T];else{this.O([P,Q,S,T]);this.AH=Z;}return[
S-P,T-Q];},IF:function(aOffset,HF){if(HF)this.M=B.abh(this.M,aOffset);else this.
O(B.abh(this.M,aOffset));},GetExtent:function(){return this.M;},O:function(C){var
A;if(B.aaY(C,this.M))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AH=null;this.M=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},_Init:function(
aArg){D.BU._Init.call(this,aArg);this.__proto__=D.AW;},_className:"Core::RectView"
};D.Am={Bg:null,BL:null,HT:null,CM:null,FT:255,GL:0,GO:0,GN:0,GM:0,AU:function(aArg
){this.CC();},CK:function(AE,aClip,aOffset,Ay,aBlend){var A;Ay=((Ay+1)*this.FT)>>
8;aBlend=aBlend&&((this.F&0x2)===0x2);this.No(AE,aClip,B.abf(aOffset,this.M.slice(
0,2)),Ay,aBlend);},GetClipping:function(){var A;var I=this.M;I=[].concat(I[0]-this.
GM,I.slice(1,4));I=B.abP(I,I[1]-this.GO);I=B.abN(I,I[2]+this.GN);I=[].concat(I.slice(
0,3),I[3]+this.GL);if(((this.F&0x80000)===0x80000)){var Fy=AG;var J;for(J=this.Bg;
!!J;J=J.Ar)if(((J.F&0x1)===0x1))Fy=B.wC(Fy,J.GetClipping());I=B.wC(I,B.abh(Fy,this.
M.slice(0,2)));}return I;},E_:function(Ag,N,Cg,Fh,Ee,F0){var A;var J=this.BL;var
Fr=null;var Y=AG;var Cj=null;if(((A=B.lb(Ag,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ag=B.abg(Ag,this.M.slice(0,2));if(!!Ee){J=Ee;while(!!J&&(J.H!==this))J=J.H;}while(
!!J){if(((J.F&0x400)===0x400)&&!Cj){Cj=J.Ad;while(!!Cj&&!((Cj.F&0x200)===0x200))
Cj=Cj.Ad;if(!!Cj)Y=B.lb(Ag,Cj.GetExtent());else Y=AG;}if(Cj===J){Cj=null;Y=AG;}if((
!!Fh&&!!(D.Am.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var B5=J.GetExtent();var HN=Fh;var Fq=null;if(HN===J)HN=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(B5,Y))[0]>=A[2])||(A[1]>=A[3])))Fq=
J.E_(Y,N,Cg,HN,Ee,F0);}else if(!(((A=B.lb(B5,Ag))[0]>=A[2])||(A[1]>=A[3]))||(Fh===
J))Fq=J.E_(Ag,N,Cg,HN,Ee,F0);J=J.Ad;if(!!Fq){if(!Fr||((Fq.Gj<Fr.Gj)&&(Fq.Gj>=0))
)Fr=Fq;if(!Fq.Gj)J=null;}}else J=J.Ad;Ee=null;}return Fr;},Hd:function(Ag){var A;
var CR;var J=this.Bg;var Fo=AG;var GZ=true;var result=(Ag=CR=B.abg(Ag,this.M.slice(
0,2)),CR);while(!!J){if(((J.F&0x200)===0x200)){var Ge=(D.GC.isPrototypeOf(J)?J:null
);Fo=B.lb(Ag,Ge.M);GZ=((Ge.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(GZ){var Y=B.lb(J.GetClipping(),Fo);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))result=
B.wC(result,J.Hd(Y));}}else{var Y=B.lb(J.GetClipping(),Ag);if(!((Y[0]>=Y[2])||(Y[
1]>=Y[3])))result=B.wC(result,J.Hd(Y));}}J=J.Ar;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},AQ:function(Cf,CG){var A;var HU=this.F;if((!!this.H&&((this.
F&0x80001)===0x80001))&&((CG&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.
AW.AQ.call(this,Cf,CG);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cf&0x80000)===0x80000
))&&!((HU&0x80000)===0x80000))this.H.Ac(this.GetClipping());var Da=this.F^HU;if(
!!this.CM&&((Da&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CM.AQ(0x40,0x0);else
this.CM.AQ(0x0,0x40);}if(((Da&0x10)===0x10)){var J;for(J=this.Bg;!!J;J=J.Ar)if((((
J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000)===0x10000)||(
null===J)))J.AQ(Cf&0x10,CG&0x10);}if(!!Da){this.F=this.F|0x8000;B.pe([this,this.
H3],this);}},O:function(C){var A;if(B.aaY(C,this.M))return;var E2=[(A=this.M)[2]-
A[0],A[3]-A[1]];var Jy=[C[2]-C[0],C[3]-C[1]];var Gf=!B.aaX(E2,Jy);D.AW.O.call(this
,C);if((Gf&&(E2[0]>0))&&(E2[1]>0)){var AA=[].concat(AI,E2);var J=this.Bg;while(!
!J){if((!J.AH&&(J.C7!==0x14))&&!((J.F&0x400)===0x400))J.GQ(AA,null);J=J.Ar;}}if(
Gf){this.F=this.F|0x5000;B.pe([this,this.H3],this);}},KF:function(Av){var Kr=(D.
KeyEvent.isPrototypeOf(Av)?Av:null);var Db=this.HT;if(!Kr)return null;while(!!Db&&(
!Db.BR||!Db.Bo(Kr)))Db=Db.Ar;return Db;},No:function(AE,aClip,aOffset,Ay,aBlend){
var A;var J=this.Bg;var Fo=AG;var GZ=true;this.K1(AE,aClip,aOffset,Ay,aBlend);while(
!!J){if(((J.F&0x200)===0x200)){var Ge=(D.GC.isPrototypeOf(J)?J:null);GZ=((Ge.F&0x1
)===0x1);Fo=aClip;if(!((Ge.F&0x80000)===0x80000))Fo=B.lb(Fo,B.abh(Ge.M,aOffset));
}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===0x400)){if(GZ){var Y=B.lb(B.abh(J.GetClipping(
),aOffset),Fo);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))J.CK(AE,Y,aOffset,Ay,aBlend);}}else{
var Y=B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])
))J.CK(AE,Y,aOffset,Ay,aBlend);}}J=J.Ar;}this.K4(AE,aClip,aOffset,Ay,aBlend);},ND:
function(){var A;var Jq=((this.F&0x1000)===0x1000);var El=[0,0,(A=this.M)[2]-A[0
],A[3]-A[1]];var DN=false;var Gb=AG;var Jo=AG;var J=this.BL;var Cj=null;while(!!
J){if(((J.F&0x800)===0x800)){DN=true;J.F=J.F&~0x800;}if(DN&&((J.F&0x200)===0x200
))DN=false;J=J.Ad;}DN=false;J=this.Bg;if(Jq){this.F=this.F&~0x1000;Jq=!((El[0]>=
El[2])||(El[1]>=El[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400
)){if(!!J.AH&&(J.AH.Fu!==Cj))J.AH=null;if((!J.AH&&DN)&&(J.C7!==0x14))J.GQ(Jo,Cj);
}if(!!J.AH){if(Jq&&!((J.F&0x400)===0x400))J.He(El,0);if(DN&&((J.F&0x400)===0x400
))J.He(Jo,0);}if(((J.F&0x200)===0x200)){DN=((J.F&0x1000)===0x1000);Cj=(D.GC.isPrototypeOf(
J)?J:null);if(DN){J.F=J.F&~0x1000;Gb=Cj.M;Jo=Gb;DN=!((Gb[0]>=Gb[2])||(Gb[1]>=Gb[
3]));}if(DN)this.Ac(Cj.M);}J=J.Ar;}this.F=this.F&~0x2000;this.J8([El[2]-El[0],El[
3]-El[1]]);},Cp:function(AV){B.pe([this,this.H3],this);},H3:function(AV){var A;var
NN=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.ND();}if(((this.F&0x8000)===0x8000)||NN){this.F=this.F&~0x8000;this.I5(this.
F);}},FQ:function(C){var A;if(!!C&&(C.H!==this))throw new Error(CF);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.CM)return;
if(!!this.CM)this.CM.AQ(0x0,0x60);this.CM=C;if(!!C){if(((this.F&0x40)===0x40))C.
AQ(0x60,0x0);else C.AQ(0x20,0x0);}},IP:function(C){var A;if(C>255)C=255;if(C<0)C=
0;if(C===this.FT)return;this.FT=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
GetClipping());},Nd:function(NO){this.IP(NO);},Fe:function(C){if(C)this.AQ(0x1,0x0
);else this.AQ(0x0,0x1);},ExtendClipping:function(Fj,Fk,Fl,Fi){var A;var GK=this.
M;var Ch=GK;if(Fj<0)Fj=0;if(Fj>255)Fj=255;if(Fk<0)Fk=0;if(Fk>255)Fk=255;if(Fl<0)
Fl=0;if(Fl>255)Fl=255;if(Fi<0)Fi=0;if(Fi>255)Fi=255;Ch=[].concat(Ch[0]-(Math.max(
Fj,this.GM)&0xFF),Ch.slice(1,4));Ch=B.abN(Ch,Ch[2]+(Math.max(Fk,this.GN)&0xFF));
Ch=B.abP(Ch,Ch[1]-(Math.max(Fl,this.GO)&0xFF));Ch=[].concat(Ch.slice(0,3),Ch[3]+(
Math.max(Fi,this.GL)&0xFF));if(Fj!==this.GM){if((!!this.H&&((this.F&0x1)===0x1))&&
!((this.F&0x80000)===0x80000)){var I=Ch;I=B.abN(I,GK[0]);this.H.Ac(I);}this.GM=Fj&
0xFF;}if(Fk!==this.GN){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===
0x80000)){var I=Ch;I=[].concat(GK[2],I.slice(1,4));this.H.Ac(I);}this.GN=Fk&0xFF;
}if(Fl!==this.GO){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000
)){var I=Ch;I=[].concat(I.slice(0,3),GK[1]);this.H.Ac(I);}this.GO=Fl&0xFF;}if(Fi
!==this.GL){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){
var I=Ch;I=B.abP(I,GK[3]);this.H.Ac(I);}this.GL=Fi&0xFF;}},K4:function(AE,aClip,
aOffset,Ay,aBlend){},K1:function(AE,aClip,aOffset,Ay,aBlend){},GetMaximalSize:function(
){return DI;},GetMinimalSize:function(){return AI;},DispatchEvent:function(Av){var
A;var J=this.CM;var Aa=(D.Am.isPrototypeOf(J)?J:null);var AY=null;if(!!J&&((((J.
F&0x10000)===0x10000)||((J.F&0x40000)===0x40000))||((J.F&0x20000)===0x20000))){J=
null;Aa=null;}if(!!Aa)AY=Aa.DispatchEvent(Av);else if(!!J)AY=J.Bo(Av);if(!AY)AY=
this.Bo(Av);if(!AY)AY=this.KF(Av);return AY;},BroadcastEventAtPosition:function(
Av,Kd,aFilter){var A;var J=this.BL;var AY=null;while(!!J&&!AY){if((!aFilter||((A=
aFilter)&&((J.F&A)===A)))&&B.wa(J.GetExtent(),Kd)){var Aa=(D.Am.isPrototypeOf(J)?
J:null);if(!!Aa)AY=Aa.BroadcastEventAtPosition(Av,B.abe(Kd,Aa.M.slice(0,2)),aFilter
);else AY=J.Bo(Av);}J=J.Ad;}if(!AY)AY=this.Bo(Av);return AY;},BroadcastEvent:function(
Av,aFilter){var A;var J=this.BL;var AY=null;while(!!J&&!AY){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var Aa=(D.Am.isPrototypeOf(J)?J:null);if(!!Aa)AY=Aa.BroadcastEvent(
Av,aFilter);else AY=J.Bo(Av);}J=J.Ad;}if(!AY)AY=this.Bo(Av);if(!AY)AY=this.KF(Av
);return AY;},J8:function(aSize){},I5:function(HI){},CC:function(){this.F=this.F|
0x8000;B.pe([this,this.H3],this);},Ac:function(Ag){var A;var Aa=this;while(!!Aa&&
!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){if(!Aa.H&&(Aa!==this)){Aa.Ac(Ag);return;}if(!((
Aa.F&0x1)===0x1))return;var I=Aa.M;Ag=B.abh(Ag,I.slice(0,2));if(!((Aa.F&0x80000)===
0x80000)){I=[].concat(I[0]-Aa.GM,I.slice(1,4));I=B.abP(I,I[1]-Aa.GO);I=B.abN(I,I[
2]+Aa.GN);I=[].concat(I.slice(0,3),I[3]+Aa.GL);Ag=B.lb(Ag,I);}Aa=Aa.H;}},JN:function(
K,aFilter){var A;if(!K||(K.H!==this))return null;var E1=K.Ar;var E4=K.Ad;var GW=
0x10000;if(((aFilter&0x10000)===0x10000))GW=0x0;while(!!E1||!!E4){if((!!E1&&(!aFilter||((
A=aFilter)&&((E1.F&A)===A))))&&(!GW||!((A=GW)&&((E1.F&A)===A))))return E1;if((!!
E4&&(!aFilter||((A=aFilter)&&((E4.F&A)===A))))&&(!GW||!((A=GW)&&((E4.F&A)===A)))
)return E4;if(!!E1)E1=E1.Ar;if(!!E4)E4=E4.Ad;}return null;},LS:function(K,CT){var
A;if(!K)throw new Error(Ec);if(K.H!==this)throw new Error(Ed);var Eg=K;var A9=K;
var FA=K.C9;while(((CT>0)&&!!Eg.Ar)&&(Eg.Ar.C9<=FA)){Eg=Eg.Ar;CT=CT-1;}while(((CT<
0)&&!!A9.Ad)&&(A9.Ad.C9>=FA)){A9=A9.Ad;CT=CT+1;}if((Eg===K)&&(A9===K))return;if(((
K.F&0x401)===0x401)){if(!!K.Ad&&!!K.AH)K.Ad.F=K.Ad.F|0x800;K.F=K.F|0x800;this.F=
this.F|0x4000;B.pe([this,this.Cp],this);}if(((K.F&0x200)===0x200)){if(!!K.Ad)K.Ad.
F=K.Ad.F|0x800;K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cp],this);}if(
!!K.Ad)K.Ad.Ar=K.Ar;if(!!K.Ar)K.Ar.Ad=K.Ad;if(this.Bg===K)this.Bg=K.Ar;if(this.BL===
K)this.BL=K.Ad;if(Eg!==K){K.Ar=Eg.Ar;K.Ad=Eg;Eg.Ar=K;if(!!K.Ar)K.Ar.Ad=K;}if(A9!==
K){K.Ar=A9;K.Ad=A9.Ad;A9.Ad=K;if(!!K.Ad)K.Ad.Ar=K;}if(!K.Ar)this.BL=K;if(!K.Ad)this.
Bg=K;if(((K.F&0x1)===0x1))this.Ac(K.GetClipping());},FX:function(K){var A;if(!K)
throw new Error(Ff);if(K.H!==this)throw new Error(Ed);if((((K.F&0x401)===0x401)&&
!!K.Ad)&&!!K.AH){K.Ad.F=K.Ad.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cp],this
);}if(((K.F&0x200)===0x200)){if(!!K.Ad)K.Ad.F=K.Ad.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.Cp],this);}K.AH=null;if(this.CM===K)this.FQ(this.JN(K,0x14));if(
!!K.Ad)K.Ad.Ar=K.Ar;if(!!K.Ar)K.Ar.Ad=K.Ad;if(this.Bg===K)this.Bg=K.Ar;if(this.BL===
K)this.BL=K.Ad;K.H=null;K.Ar=null;K.Ad=null;if((!((K.F&0x10)===0x10)&&((K.F&0x100000
)===0x100000))&&!((this.F&0x80)===0x80))K.AQ(0x10,0x0);if(((K.F&0x1)===0x1))this.
Ac(K.GetClipping());},U:function(K,CT){var A;if(!K)throw new Error(I7);if(!!K.H)
throw new Error(I8);var A9=null;var FA=K.C9;if(((CT<0)&&!!this.BL)&&(this.BL.C9>=
FA)){A9=this.BL;CT=CT+1;}while((((CT<0)&&!!A9)&&!!A9.Ad)&&(A9.Ad.C9>=FA)){A9=A9.
Ad;CT=CT+1;}if((!A9&&!!this.BL)&&(this.BL.C9>FA))A9=this.BL;while((!!A9&&!!A9.Ad
)&&(A9.Ad.C9>FA))A9=A9.Ad;if(!A9){K.H=this;K.Ad=this.BL;if(!!this.BL)this.BL.Ar=
K;if(!this.Bg)this.Bg=K;this.BL=K;}else{K.H=this;K.Ad=A9.Ad;K.Ar=A9;A9.Ad=K;if(!
!K.Ad)K.Ad.Ar=K;else this.Bg=K;}if(((K.F&0x1)===0x1))this.Ac(K.GetClipping());if(((
K.F&0x80)===0x80)&&(B.aam().K9()===K))K.AQ(0x10,0x0);else if(!((this.F&0x10)===0x10
)&&((K.F&0x200010)===0x200010))K.AQ(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((
K.F&0x10)===0x10))&&((K.F&0x100000)===0x100000))K.AQ(0x10,0x0);if(((!this.CM&&((
K.F&0x4)===0x4))&&((K.F&0x10)===0x10))&&!((K.F&0x10000)===0x10000))this.FQ(K);if(((
K.F&0x401)===0x401)){K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cp],this
);}if(((K.F&0x200)===0x200)){K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Cp],this);}},Lf:function(){return this.FT;},_Init:function(aArg){D.AW._Init.call(
this,aArg);this.__proto__=D.Am;this.F=0x10001F;this.AU(aArg);},_Mark:function(E){
var A;D.AW._Mark.call(this,E);if((A=this.Bg)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.BL)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HT)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.CM)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Core::Group"};D.Root={Cm:null,AJ:B.abi(10,null,null),F_:null,Ei:null,Ha:0,AS:0,
BC:B.abi(10,0,null),HM:B.abi(10,B.wg,null),CX:B.abi(10,0,null),DK:B.abi(10,B.wf,
null),Ga:B.abi(10,0,null),Eh:B.abi(10,B.wf,null),CW:B.abi(10,B.wf,null),Ci:B.abi(
10,B.wf,null),Dw:B.abi(10,B.wf,null),Ap:0,HP:0,HO:0,BP:B.abi(4,0,null),A$:B.abi(
4,B.wg,null),A_:0,GT:0,Gd:0,Jr:true,AU:function(aArg){if(!!!this.L){var obj=this;
B.abD(obj);}},Go:function(){return this;},CK:function(AE,aClip,aOffset,Ay,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AE.In(aClip
,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);D.Am.CK.call(this,AE,aClip,aOffset,Ay,aBlend);},AQ:function(Cf
,CG){var A;D.Am.AQ.call(this,Cf,CG);if(!this.H&&(((Cf&0x1)===0x1)||((CG&0x1)===0x1
)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.H&&(((Cf&0x2)===0x2)||((
CG&0x2)===0x2)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},FQ:function(C){if((
C!==null)||!C)D.Am.FQ.call(this,C);},IP:function(C){var A;var Nt=this.FT;D.Am.IP.
call(this,C);if(((Nt!==this.FT)&&!this.H)&&((this.F&0x1)===0x1))this.Ac([0,0,(A=
this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Av){if(!!Av){Av.Gs=!!this.AS;
if(!!this.AS)Av.AD=this.AS;}var AY;AY=D.Am.DispatchEvent.call(this,Av);this.AS=0;
return AY;},BroadcastEvent:function(Av,aFilter){if(!!Av){Av.Gs=!!this.AS;if(!!this.
AS)Av.AD=this.AS;}var AY=D.Am.BroadcastEvent.call(this,Av,aFilter);this.AS=0;return AY;
},Ac:function(Ag){var A;if(this.Ha>0)throw new Error(I9);var fullScreenUpdate=false;
fullScreenUpdate=B.m7;if(fullScreenUpdate)Ag=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];
if(!!this.H){D.Am.Ac.call(this,Ag);return;}Ag=B.lb(B.abh(Ag,this.M.slice(0,2)),this.
M);if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var G;for(G=0;G<this.A_;G=G+1)if(!(((
A=B.lb(this.A$.Get(G),Ag))[0]>=A[2])||(A[1]>=A[3]))){this.A$.Set(G,B.wC(this.A$.
Get(G),Ag));this.BP.Set(G,B.aaH(this.A$.Get(G)));return;}if(this.A_<3){this.A$.Set(
this.A_,Ag);this.BP.Set(this.A_,B.aaH(Ag));this.A_=this.A_+1;return;}var AO;var Cl;
var GS=0;var GV=0;var Kf=2147483647;this.A$.Set(this.A_,Ag);this.BP.Set(this.A_,
B.aaH(Ag));for(AO=0;AO<=this.A_;AO=AO+1)for(Cl=AO+1;Cl<=this.A_;Cl=Cl+1){var H2=
B.aaH(B.wC(this.A$.Get(AO),this.A$.Get(Cl)));var KE=((H2<<8)/(this.BP.Get(AO)+this.
BP.Get(Cl)))|0;if(KE<Kf){Kf=KE;GS=AO;GV=Cl;}}this.A$.Set(GS,B.wC(this.A$.Get(GS)
,this.A$.Get(GV)));this.BP.Set(GS,B.aaH(this.A$.Get(GS)));if(GV!==this.A_){this.
A$.Set(GV,this.A$.Get(this.A_));this.BP.Set(GV,this.BP.Get(this.A_));}},Nm:function(
){var BD=B._NewObject(D.Hi,0);BD.Gs=!!this.AS;if(!!this.AS)BD.AD=this.AS;return BD;
},Fp:function(){var BD=B._NewObject(D.FE,0);BD.Gs=!!this.AS;if(!!this.AS)BD.AD=this.
AS;return BD;},F$:function(){var BD=B._NewObject(D.Ia,0);BD.Gs=!!this.AS;if(!!this.
AS)BD.AD=this.AS;return BD;},Nn:function(AV){var G;var Fr=false;for(G=0;G<10;G=G+
1)if(!!this.AJ.Get(G)){var Bh=this.Ci.Get(G);var Aa=this.AJ.Get(G).H;while(!!Aa&&(
Aa!==this)){Bh=B.abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(this.AJ.Get(G)!==this
)){var tmp=this.AJ.Get(G);this.Ap=G;this.AJ.Set(G,null);tmp.Bo(this.Fp().InitializeUp(
G,this.Eh.Get(G),this.DK.Get(G),this.CX.Get(G),this.BC.Get(G)+1,this.CW.Get(G),false
,this.Ci.Get(G),this.Dw.Get(G)));this.BroadcastEvent(this.F$().InitializeUp(G,this.
BC.Get(G)+1,false,tmp,this.Ci.Get(G)),0x18);}else{this.CX.Set(G,(this.Ei.AD-this.
Ga.Get(G))|0);if(this.CX.Get(G)<10)this.CX.Set(G,10);this.Ap=G;this.AJ.Get(G).Bo(
this.Fp().InitializeHold(G,Bh,this.DK.Get(G),this.CX.Get(G),this.BC.Get(G)+1,this.
CW.Get(G),this.Ci.Get(G),this.Dw.Get(G)));Fr=true;}}if(!Fr)this.Ei.BN(false);},GetFPS:
function(){var ticksCount=0;var Kp=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.HP&&(ticksCount>this.HP))Kp=((this.HO*1000)/((ticksCount-this.HP)|0))|0;this.
HO=0;this.HP=ticksCount;return Kp;},Update:function(){var A;if(!this.F_)this.F_=
B._NewObject(B.Graphics.Canvas,0);this.F_.JU([(A=this.M)[2]-A[0],A[3]-A[1]]);this.
F_.Update();return this.UpdateGE20(this.F_);},UpdateGE20:function(AE){if(!this.BeginUpdate(
))return AG;var DR=this.UpdateCanvas(AE,AI);this.EndUpdate();return DR;},EndUpdate:
function(){if(this.A_>0){this.HO=this.HO+1;this.A_=0;}},UpdateCanvas:function(AE
,aOffset){var A;var DR=AG;var Nh=[].concat(aOffset,B.abf(AE.FrameSize,aOffset));
var G;var AO=this.A_;this.Ha=this.Ha+1;AE.Fs=this;for(G=0;(G<AO)&&(G<4);G=G+1)if(
this.BP.Get(G)>0){this.CK(AE,B.abg(this.A$.Get(G),aOffset),[-aOffset[0],-aOffset[
1]],255,true);DR=B.wC(DR,B.lb(Nh,this.A$.Get(G)));}else AO=AO+1;AE.Fs=null;this.
Ha=this.Ha-1;if(!((DR[0]>=DR[2])||(DR[1]>=DR[3])))return B.abg(DR,aOffset);else return DR;
},GetUpdateRegion:function(HH){var G;var AO=this.A_;if(HH<0)return AG;for(G=0;(G<
AO)&&(G<4);G=G+1)if(!this.BP.Get(G)){AO=AO+1;HH=HH+1;}else if(G===HH)return this.
A$.Get(G);return AG;},BeginUpdate:function(){var A;var G;if(!!this.A_&&!B.aaY(this.
A$.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[1]])){var KO=B.abi(3,B.wg,null);var KN=
this.A_;for(G=0;G<KN;G++)KO.Set(G,this.A$.Get(G));for(G=0;G<KN;G++){var KG=B.abh(
KO.Get(G),this.M.slice(0,2));var KH=this.Hd(KG);if(!B.aaY(KG,KH))this.Ac(B.abg(KH
,this.M.slice(0,2)));}}var AO;var Cl;for(AO=0;AO<(this.A_-1);AO++)if(this.BP.Get(
AO)>0)for(Cl=AO+1;Cl<this.A_;Cl++)if(this.BP.Get(Cl)>0){var H2=B.aaH(B.wC(this.A$.
Get(AO),this.A$.Get(Cl)));if(((H2-this.BP.Get(AO))-this.BP.Get(Cl))<0){this.A$.Set(
AO,B.wC(this.A$.Get(AO),this.A$.Get(Cl)));this.BP.Set(AO,H2);this.BP.Set(Cl,0);}
}for(G=this.A_-1;G>=0;G--)if(!this.BP.Get(G))this.A_=this.A_-1;return this.A_;},
DoesNeedUpdate:function(){if(this.A_>0)return true;return false;},Initialize:function(
aSize){this.O([].concat(AI,aSize));if(this.Jr)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.M);return this;},SetRootFocus:function(Jc){if(Jc===this.Jr)return false;
this.Jr=Jc;if(!Jc)this.AQ(0x0,0x40);else this.AQ(0x40,0x0);return true;},SetUserInputTimestamp:
function(Ng){this.AS=Ng;},DriveKeyboardHitting:function(Be,GF,C_){var A;var JE=!
!this.Cm;if(!!this.Cm&&((!C_||(this.GT!==Be))||(this.Gd!==GF))){var BD=null;var J=(
D.BU.isPrototypeOf(A=this.Cm)?A:null);var Db=(D.FM.isPrototypeOf(A=this.Cm)?A:null
);if(!!this.GT)BD=B._NewObject(D.KeyEvent,0).Initialize(this.GT,false);if(this.Gd
!==0x00)BD=B._NewObject(D.KeyEvent,0).Initialize2(this.Gd,false);if(!!Db)Db.Bo(BD
);else if(!!J)J.Bo(BD);this.GT=0;this.Gd=0x00;this.Cm=null;}if(!!this.Cm){var BD=
null;var J=(D.BU.isPrototypeOf(A=this.Cm)?A:null);var Db=(D.FM.isPrototypeOf(A=this.
Cm)?A:null);if(!!Be)BD=B._NewObject(D.KeyEvent,0).Initialize(Be,true);if(this.Gd
!==0x00)BD=B._NewObject(D.KeyEvent,0).Initialize2(GF,true);if(!!Db)Db.Bo(BD);else
if(!!J)J.Bo(BD);}if(!this.Cm&&C_){if(!!Be)this.Cm=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Be,true));if(GF!==0x00)this.Cm=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(GF,true));if(!(D.FM.isPrototypeOf(A=this.Cm)?A:null)&&
!(D.BU.isPrototypeOf(A=this.Cm)?A:null))this.Cm=null;this.GT=Be;this.Gd=GF;JE=JE||
!!this.Cm;}this.AS=0;return JE;},DriveCursorMovement:function(By){return this.DriveMultiTouchMovement(
this.Ap,By);},DriveMultiTouchMovement:function(N,By){if((N<0)||(N>9)){this.AS=0;
return false;}var Cx=B.abe(By,this.Ci.Get(N));this.Ci.Set(N,By);if(!this.AJ.Get(
N)||B.aaX(Cx,AI)){this.AS=0;return false;}var Bh=By;var Aa=this.AJ.Get(N).H;while(
!!Aa&&(Aa!==this)){Bh=B.abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(this.AJ.Get(N)
!==this)){var tmp=this.AJ.Get(N);this.Ap=N;this.AJ.Set(N,null);tmp.Bo(this.Fp().
InitializeUp(N,this.Eh.Get(N),this.DK.Get(N),this.CX.Get(N),this.BC.Get(N)+1,this.
CW.Get(N),false,this.Ci.Get(N),this.Dw.Get(N)));this.BroadcastEvent(this.F$().InitializeUp(
N,this.BC.Get(N)+1,false,tmp,By),0x18);}else{this.Eh.Set(N,Bh);this.Ap=N;this.AJ.
Get(N).Bo(this.Nm().Initialize(N,Bh,this.DK.Get(N),Cx,this.CX.Get(N),this.BC.Get(
N)+1,this.CW.Get(N),By,this.Dw.Get(N)));}this.AS=0;return true;},DriveCursorHitting:
function(C_,N,By){return this.DriveMultiTouchHitting(C_,N,By);},DriveMultiTouchHitting:
function(C_,N,By){if((N<0)||(N>9)){this.AS=0;return false;}var ticksCount=this.AS;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var NI=this.AS;this.DriveMultiTouchMovement(
N,By);By=this.Ci.Get(N);this.AS=NI;if(C_)this.Dw.Set(N,By);if(C_&&!this.AJ.Get(N
)){var BV;var Bh=By;if(B.wa(this.HM.Get(N),By)&&((ticksCount-this.Ga.Get(N))<=250
))this.BC.Set(N,this.BC.Get(N)+1);else this.BC.Set(N,0);this.HM.Set(N,B.abh(GE,By
));this.Ga.Set(N,ticksCount);BV=this.E_(B.abh(GE,By),N,this.BC.Get(N)+1,null,null
,0x0);if(!!BV){this.BroadcastEvent(this.F$().InitializeDown(N,this.BC.Get(N)+1,false
,BV.BU,By),0x18);this.AJ.Set(N,BV.BU);this.CW.Set(N,BV.D1);}else{this.AJ.Set(N,null
);this.CW.Set(N,AI);this.AS=0;return false;}var Aa=BV.BU.H;while(!!Aa&&(Aa!==this
)){Bh=B.abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}this.DK.Set(N,Bh);this.Eh.Set(N,Bh);this.
CX.Set(N,0);this.Ei.BN(true);this.Ap=N;this.AJ.Get(N).Bo(this.Fp().InitializeDown(
N,Bh,this.BC.Get(N)+1,this.CW.Get(N),false,By));this.AS=0;return true;}if(!C_&&!
!this.AJ.Get(N)){var Bh=By;var Aa=this.AJ.Get(N).H;while(!!Aa&&(Aa!==this)){Bh=B.
abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa)Bh=this.Eh.Get(N);this.Ap=N;var tmp=this.
AJ.Get(N);this.AJ.Set(N,null);tmp.Bo(this.Fp().InitializeUp(N,Bh,this.DK.Get(N),
this.CX.Get(N),this.BC.Get(N)+1,this.CW.Get(N),false,By,this.Dw.Get(N)));this.BroadcastEvent(
this.F$().InitializeUp(N,this.BC.Get(N)+1,false,tmp,By),0x18);this.AS=0;return true;
}this.AS=0;return false;},LT:function(DJ,Kc,Ee,F0){if(DJ===this)DJ=null;if(!this.
AJ.Get(this.Ap))return;var BV;BV=this.E_(B.abh(GE,this.Ci.Get(this.Ap)),this.Ap,
1,DJ,Ee,F0);if(!!BV&&(this.AJ.Get(this.Ap)!==BV.BU))this.JL(BV.BU,BV.D1);if(!BV&&(
this.AJ.Get(this.Ap)!==Kc))this.JL(Kc,AI);},JL:function(DJ,CS){if(!this.AJ.Get(this.
Ap)||(this.AJ.Get(this.Ap)===DJ))return;var tmp=this.AJ.Get(this.Ap);this.AJ.Set(
this.Ap,null);tmp.Bo(this.Fp().InitializeUp(this.Ap,this.Eh.Get(this.Ap),this.DK.
Get(this.Ap),this.CX.Get(this.Ap),this.BC.Get(this.Ap)+1,this.CW.Get(this.Ap),true
,this.Ci.Get(this.Ap),this.Dw.Get(this.Ap)));this.BroadcastEvent(this.F$().InitializeUp(
this.Ap,this.BC.Get(this.Ap)+1,true,tmp,this.Ci.Get(this.Ap)),0x18);var Bh=this.
Ci.Get(this.Ap);var Aa=null;if(!!DJ)Aa=DJ.H;while(!!Aa&&(Aa!==this)){Bh=B.abe(Bh
,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(DJ!==this)){this.AJ.Set(this.Ap,null);return;
}this.BroadcastEvent(this.F$().InitializeDown(this.Ap,this.BC.Get(this.Ap)+1,true
,DJ,this.Ci.Get(this.Ap)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.AJ.Set(this.Ap,DJ);this.CW.Set(this.Ap,CS);this.DK.Set(this.Ap,Bh
);this.Eh.Set(this.Ap,Bh);this.BC.Set(this.Ap,0);this.CX.Set(this.Ap,0);this.Ga.
Set(this.Ap,ticksCount);this.Dw.Set(this.Ap,this.Ci.Get(this.Ap));this.AJ.Get(this.
Ap).Bo(this.Fp().InitializeDown(this.Ap,Bh,this.BC.Get(this.Ap)+1,this.CW.Get(this.
Ap),true,this.Dw.Get(this.Ap)));},K9:function(){return null;},_Init:function(aArg
){D.Am._Init.call(this,aArg);D.Timer._Init.call(this.Ei={L:this},0);(this.AJ=[]).
__proto__=D.Root.AJ;(this.BC=[]).__proto__=D.Root.BC;(this.HM=[]).__proto__=D.Root.
HM;(this.CX=[]).__proto__=D.Root.CX;(this.DK=[]).__proto__=D.Root.DK;(this.Ga=[]
).__proto__=D.Root.Ga;(this.Eh=[]).__proto__=D.Root.Eh;(this.CW=[]).__proto__=D.
Root.CW;(this.Ci=[]).__proto__=D.Root.Ci;(this.Dw=[]).__proto__=D.Root.Dw;(this.
BP=[]).__proto__=D.Root.BP;(this.A$=[]).__proto__=D.Root.A$;this.__proto__=D.Root;
this.F=0x10007F;this.Ei.GA(10);this.Ei.FS=[this,this.Nn];this.AU(aArg);},_Done:function(
){this.__proto__=D.Am;this.Ei._Done();D.Am._Done.call(this);},_ReInit:function(){
D.Am._ReInit.call(this);this.Ei._ReInit();},_Mark:function(E){var A;D.Am._Mark.call(
this,E);if((A=this.Cm)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.AJ,E);if((A=
this.F_)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ei)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={AD:0,Gs:false,AU:function(aArg){this.AD=this.
Hl();},Hl:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.AU(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={AZ:0,Au:0,Down:false,Initialize2:function(Be,C_){this.
AZ=0;this.Au=Be;this.Down=C_;if((Be>=0x30)&&(Be<=0x39))this.AZ=(10+Be)-48;if((Be>=
0x41)&&(Be<=0x5A))this.AZ=(105+Be)-65;if((Be>=0x61)&&(Be<=0x7A))this.AZ=(105+Be)-
97;if(Be===0x20)this.AZ=131;if(!this.AZ)switch(Be){case 0x2B:this.AZ=132;break;case
0x2D:this.AZ=133;break;case 0x2A:this.AZ=134;break;case 0x2F:this.AZ=135;break;case
0x3D:this.AZ=136;break;case 0x2E:this.AZ=137;break;case 0x2C:this.AZ=138;break;case
0x3A:this.AZ=139;break;case 0x3B:this.AZ=140;break;default:;}return this;},Initialize:
function(Be,C_){this.AZ=Be;this.Down=C_;this.Au=0x00;var Jh=Be-10;var Jg=Be-105;
if((Jh>=0)&&(Jh<=9))this.Au=(48+Jh)&0xFFFF;if((Jg>=0)&&(Jg<=25))this.Au=(65+Jg)&
0xFFFF;if(Be===131)this.Au=0x20;if(this.Au===0x00)switch(Be){case 132:this.Au=0x2B;
break;case 133:this.Au=0x2D;break;case 134:this.Au=0x2A;break;case 135:this.Au=0x2F;
break;case 136:this.Au=0x3D;break;case 137:this.Au=0x2E;break;case 138:this.Au=0x2C;
break;case 139:this.Au=0x3A;break;case 140:this.Au=0x3B;break;default:;}return this;
},Lb:function(Kb){switch(Kb){case 141:return((this.Au>=0x41)&&(this.Au<=0x5A))||((
this.Au>=0x61)&&(this.Au<=0x7A));case 142:return(((this.Au>=0x41)&&(this.Au<=0x5A
))||((this.Au>=0x61)&&(this.Au<=0x7A)))||((this.Au>=0x30)&&(this.Au<=0x39));case
143:return(this.Au>=0x30)&&(this.Au<=0x39);case 144:return(((this.Au>=0x41)&&(this.
Au<=0x46))||((this.Au>=0x61)&&(this.Au<=0x66)))||((this.Au>=0x30)&&(this.Au<=0x39
));case 145:return this.Au!==0x00;case 146:return(this.Au===0x00)&&!!this.AZ;case
147:return(((this.AZ===6)||(this.AZ===7))||(this.AZ===4))||(this.AZ===5);case 148:
return(this.Au!==0x00)||!!this.AZ;default:;}return Kb===this.AZ;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Ia={I3:null,C6:B.wf,Ce:0,BM:0,Down:false,C3:false,InitializeUp:function(N,Cg
,Fg,Je,C$){this.Down=false;this.BM=N;this.Ce=Cg;this.C6=C$;this.I3=Je;this.C3=Fg;
return this;},InitializeDown:function(N,Cg,Fg,Je,C$){this.Down=true;this.BM=N;this.
Ce=Cg;this.C6=C$;this.I3=Je;this.C3=Fg;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Ia;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.I3)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.FE={Gq:B.wf,C6:B.wf,Ce:0,BZ:0,DB:B.wf,Cq:B.wf,BM:0,Down:false,C3:false,InitializeHold:
function(N,EC,GH,GI,Cg,CS,C$,GG){this.Down=true;this.BM=N;this.Cq=B.abf(EC,CS);this.
DB=B.abf(GH,CS);this.BZ=GI;this.Ce=Cg;this.C6=C$;this.Gq=GG;return this;},InitializeUp:
function(N,EC,GH,GI,Cg,CS,Fg,C$,GG){this.Down=false;this.BM=N;this.Cq=B.abf(EC,CS
);this.DB=B.abf(GH,CS);this.BZ=GI;this.Ce=Cg;this.C3=Fg;this.C6=C$;this.Gq=GG;return this;
},InitializeDown:function(N,EC,Cg,CS,Fg,C$){this.Down=true;this.BM=N;this.Cq=B.abf(
EC,CS);this.DB=B.abf(EC,CS);this.BZ=0;this.Ce=Cg;this.C3=Fg;this.C6=C$;this.Gq=C$;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.FE;},_className:"Core::CursorEvent"};D.Hi={Gq:B.wf,C6:B.wf,Ce:0,BZ:0,D1:B.wf,DB:
B.wf,Cq:B.wf,BM:0,Initialize:function(N,EC,GH,aOffset,GI,Nf,CS,C$,GG){this.BM=N;
this.Cq=B.abf(EC,CS);this.DB=B.abf(GH,CS);this.D1=aOffset;this.BZ=GI;this.Ce=Nf;
this.C6=C$;this.Gq=GG;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.Hi;},_className:"Core::DragEvent"};D.GC={CK:function(AE,
aClip,aOffset,Ay,aBlend){},GetClipping:function(){var A;var I=D.AW.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Fy=AG;var J;for(J=this.Ar;!!J&&!((J.F&
0x200)===0x200);J=J.Ar)if(((J.F&0x1)===0x1))Fy=B.wC(Fy,J.GetClipping());I=B.wC(I
,Fy);}return I;},AQ:function(Cf,CG){var A;var HU=this.F;if((!!this.H&&((this.F&0x80001
)===0x80001))&&((CG&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.AW.AQ.call(
this,Cf,CG);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cf&0x80000)===0x80000))&&!((
HU&0x80000)===0x80000))this.H.Ac(this.GetClipping());},O:function(C){var A;if(B.
aaY(C,this.M))return;var E2=[(A=this.M)[2]-A[0],A[3]-A[1]];var Jy=[C[2]-C[0],C[3
]-C[1]];var Gf=!B.aaX(E2,Jy);var Cx=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(Cx,AI)&&!Gf){var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400
)===0x400)){var tmp=((J.F&0x100)===0x100);J.IF(Cx,tmp);}J=J.Ar;}}if((Gf&&(E2[0]>
0))&&(E2[1]>0)){var AA=this.M;var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((
J.F&0x400)===0x400)){if(!!J.AH&&(J.AH.Fu!==this))J.AH=null;if(!J.AH&&(J.C7!==0x14
))J.GQ(AA,this);}J=J.Ar;}}D.AW.O.call(this,C);if(!!this.H&&Gf){this.F=this.F|0x1000;
if(!((this.H.F&0x2000)===0x2000)){this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],
this);}}},_Init:function(aArg){D.AW._Init.call(this,aArg);this.__proto__=D.GC;this.
F=0x203;},_className:"Core::Outline"};D.I1={IL:null,IK:null,Fb:null,Ev:null,AM:0
,BM:0,AD:0,Ce:0,BZ:0,D1:B.wf,DB:B.wf,Cq:B.wf,LU:8,JS:1,Down:false,Et:false,C3:false
,Jm:false,Ks:0,CK:function(AE,aClip,aOffset,Ay,aBlend){},Bo:function(Av){var A;var
At=(D.FE.isPrototypeOf(Av)?Av:null);var CY=(D.Hi.isPrototypeOf(Av)?Av:null);var HQ=
this.Et;var G4;var Gc;var KM;var Eo;var Kk;if(!At&&!CY)return null;G4=(!!At&&At.
Down)&&!At.BZ;Gc=(!!At&&At.Down)&&(At.BZ>0);KM=(!!At&&At.Down)&&(At.BZ>this.Ks);
Eo=!!At&&!At.Down;Kk=!!CY;if(G4)this.Ks=((A=(At.C3?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;
if(G4){var JA=0;var GP;this.AM=this.AM|(1<<At.BM);for(GP=this.AM&4095;GP>0;GP=GP>>
1)if(!!(GP&1))JA=JA+1;if(JA===1)this.AM=(this.AM|16777216)|(4096<<At.BM);}if(Eo&&(
this.AM<16777216)){var E5=this.Go();var BV=null;if(!!E5){var NK=(!!this.Ad?this.
Ad:this.H);BV=E5.E_(B.abh(HE,At.C6),At.BM,At.Ce,null,NK,0x0);}if(!!BV){var G;for(
G=0;G<10;G++)if(!!(this.AM&(1<<G)))BV.BU.Bo(B._NewObject(D.FE,0).InitializeDown(
G,At.Cq,At.Ce,AI,true,At.C6));for(G=0;G<10;G++)if(!!(this.AM&(1<<G)))BV.BU.Bo(B.
_NewObject(D.FE,0).InitializeUp(G,At.Cq,At.Cq,0,At.Ce,AI,false,At.C6,At.C6));}}if(
Eo)this.AM=(this.AM&~(1<<At.BM))|33554432;if(KM&&(this.AM<16777216))this.AM=this.
AM|67108864;if(Eo&&At.C3)this.AM=this.AM|67108864;if(Eo&&!(this.AM&16777215))this.
AM=0;if(Gc&&(this.AM>=67108864)){var E5=this.Go();if(!!E5)E5.LT(null,null,this,0x0
);}if((Gc&&!!(this.AM&16777216))&&!!(this.AM&33554432)){Gc=false;Eo=true;}if(!!At&&
!(this.AM&(4096<<At.BM)))return this;if(!!CY&&!(this.AM&(4096<<CY.BM)))return this;
if(Eo&&!(this.AM&16777216))return this;if(((G4||Kk)||Gc)&&((this.AM<16777216)||(
this.AM>=33554432)))return this;if(Eo)this.AM=this.AM&3758100479;if(Eo&&!(this.AM&
16777215))this.AM=0;if(!!At){this.Down=G4||Gc;this.Et=this.Iy(At.Cq);this.DB=At.
DB;this.Cq=At.Cq;this.D1=AI;this.BZ=At.BZ;this.Ce=At.Ce;this.C3=At.C3;this.BM=At.
BM;this.AD=At.AD;if(At.Down&&!At.BZ)HQ=false;}if(!!CY){this.Down=true;this.Et=this.
Iy(CY.Cq);this.DB=CY.DB;this.Cq=CY.Cq;this.D1=CY.D1;this.BZ=CY.BZ;this.Ce=CY.Ce;
this.BM=CY.BM;this.C3=false;this.AD=CY.AD;}var Jl=this.Down;if((!!At&&this.Down)&&
!this.BZ)(A=this.Ev)?A[1].call(A[0],this):null;if((this.Down&&this.Et)&&!HQ){this.
Jm=true;(A=this.IK)?A[1].call(A[0],this):null;}if(this.Jm&&(((Jl&&!this.Et)&&HQ)||((
!Jl&&this.Et)&&HQ))){this.Jm=false;(A=this.IL)?A[1].call(A[0],this):null;}if(!!At&&
!Jl)(A=this.Fb)?A[1].call(A[0],this):null;return this;},E_:function(Ag,N,Cg,Fh,Ee
,F0){var A;if(!!Fh&&(Fh!==this))return null;if((Cg<1)||(Cg>this.JS))return null;
if(this.AM>=33554432)return null;if((this.AM>=16777216)&&!(this.AM&(4096<<N)))return null;
if(this.K$()){var I=B.lb(Ag,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var ED=B.aaI(Ag);var Cx=AI;if(ED[0]<I[0])Cx=[I[0]-ED[0],Cx[1]];if(ED[0]>=I[2])Cx=[(
I[2]-ED[0])-1,Cx[1]];if(ED[1]<I[1])Cx=[Cx[0],I[1]-ED[1]];if(ED[1]>=I[3])Cx=[Cx[0
],(I[3]-ED[1])-1];return B._NewObject(D.Ib,0).Initialize(this,Cx);}}else{var AL=
B.abi(9,B.wf,null);var G;AL.Set(0,B.aaI(Ag));AL.Set(1,AL.Get(0));AL.Set(2,AL.Get(
0));AL.Set(3,AL.Get(0));AL.Set(4,AL.Get(0));AL.Set(1,[Ag[0],AL.Get(1)[1]]);AL.Set(
2,[AL.Get(2)[0],Ag[1]]);AL.Set(3,[Ag[2],AL.Get(3)[1]]);AL.Set(4,[AL.Get(4)[0],Ag[
3]]);AL.Set(5,Ag.slice(0,2));AL.Set(6,[Ag[2],Ag[1]]);AL.Set(7,[Ag[0],Ag[3]]);AL.
Set(8,Ag.slice(2,4));for(G=0;G<9;G=G+1)if(this.Iy(AL.Get(G)))return B._NewObject(
D.Ib,0).Initialize(this,B.abe(AL.Get(G),AL.Get(0)));}return null;},LF:function(C
){if(C<1)C=1;this.LU=C;},Lz:function(C){if(C<1)C=1;this.JS=C;},BN:function(C){if(
C)this.AQ(0x100000,0x0);else this.AQ(0x0,0x100000);},_Init:function(aArg){D.GD._Init.
call(this,aArg);this.__proto__=D.I1;this.F=0x10011B;},_Mark:function(E){var A;D.
GD._Mark.call(this,E);if((A=this.IL)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.IK)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fb)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Ev)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);},_className:"Core::SimpleTouchHandler"};D.FM={Ar:null,Fb:null,Ev:null,Fw:0,AD:
0,J0:0,E$:148,AZ:0,Au:0,BR:true,Down:false,IZ:false,AU:function(aArg){var A;var Fs=(
D.Am.isPrototypeOf(A=this.L)?A:null);if(!Fs)throw new Error(I_);this.Ar=Fs.HT;Fs.
HT=this;},Bo:function(Av){var A;if(!!Av&&Av.Lb(this.E$)){this.Down=Av.Down;this.
AZ=Av.AZ;this.Au=Av.Au;this.AD=Av.AD;if(Av.Down){this.J0=this.Fw;this.IZ=this.Fw>
0;if(!this.IZ)(A=this.Ev)?A[1].call(A[0],this):null;this.Fw=this.Fw+1;return true;
}if(!Av.Down){this.IZ=this.Fw>1;this.J0=this.Fw-1;this.Fw=0;(A=this.Fb)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FM;this.AU(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Fb)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ev)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Ib={BU:
null,Gj:0,D1:B.wf,Initialize:function(K,aOffset){this.BU=K;this.D1=aOffset;this.
Gj=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Ib;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.BU)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Ho={Fu:null,B5:B.wg,AA:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Ho;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Fu)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Hp={G3:B.wf,G2:B.wf
,G1:B.wf,G0:B.wf,_Init:function(aArg){D.Ho._Init.call(this,aArg);this.__proto__=
D.Hp;},_className:"Core::LayoutQuadContext"};D.D8={resource:null,Dh:function(){this.
resource=null;},AU:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.D8;this.AU(aArg);B.h7++;},_Done:function(){this.Dh();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FS:null,timer:null,AD:0,Period:1000,Hg:0,BR:false,Dh:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},HY:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},GA:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BR)this.HY(this.Hg,C);},Hs:function(C){if(C<0)C=0;if(C===this.
Hg)return;this.Hg=C;if(this.BR)this.HY(C,this.Period);},BN:function(C){if(C===this.
BR)return;this.BR=C;if(C)this.HY(this.Hg,this.Period);else this.HY(0,0);this.AD=
this.Hl();},Hl:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AD=this.Hl();if(!this.Period
)this.BN(false);(A=this.FS)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.Dh();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FS)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.OL={OM:0x1,NX:0x2,N8:0x4,OJ:
0x8,BR:0x10,OD:0x20,N9:0x40,Oh:0x80,N7:0x100,Oc:0x200,N6:0x400,Oq:0x800,J8:0x1000
,OK:0x2000,On:0x4000,Oo:0x8000,N3:0x10000,Om:0x20000,OA:0x40000,N4:0x80000,Op:0x100000
,N2:0x200000};D.C7={Or:0x1,Os:0x2,NT:0x4,NU:0x8,NV:0x10,NS:0x20};D.N$={Oi:0,OG:1
,NZ:2,Od:3,Ou:4,OH:5,OI:6,N0:7,N1:8,Of:9,Oe:10,Ow:11,Ov:12};D.KeyCode={NoKey:0,Ok:
1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:
12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:
22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33
,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:
41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49
,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:
58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:
68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76
,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:
86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:
95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:
103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:
112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:
121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:
130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:
138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Ot={OQ:0x1,ON:0x2,OO:0x4,OP:0x8,Og:
0x10,N_:0x20};
D._Init=function(){D.GD.__proto__=D.BU;D.AW.__proto__=D.BU;D.Am.__proto__=D.AW;D.
Root.__proto__=D.Am;D.KeyEvent.__proto__=D.Event;D.Ia.__proto__=D.Event;D.FE.__proto__=
D.Event;D.Hi.__proto__=D.Event;D.GC.__proto__=D.AW;D.I1.__proto__=D.GD;D.Hp.__proto__=
D.Ho;};D._ReInit=function(){};D.Cu=function(E){};return D;})();

/* Embedded Wizard */