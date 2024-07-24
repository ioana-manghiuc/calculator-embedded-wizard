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
DI=[340,590];var Ec="No view to restack";var Ed="View is not in this group";var Fg=
"No view to remove";var I8="No view to add";var I9="View already in a group";var
I_="Recursive invalidate during active update cycle.";var GF=[-8,-8,9,9];var HE=[
0,0,1,1];var I$="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.BU={Ar:null,Ad:null,H:null,AH:null,F:0x103,C_:0,C8:0x14,GR:function(X,HG){},CO:
function(C){if(this.C_===C)return;this.C_=C;if(!!this.H){var Eq=this.Ar;var B3=0;
while(!!Eq&&(C>Eq.C_)){Eq=Eq.Ar;B3=B3+1;}Eq=this.Ad;while(!!Eq&&(C<Eq.C_)){Eq=Eq.
Ad;B3=B3-1;}if(!!B3)this.H.LT(this,B3);}},IP:function(C){var A;var B3=C^this.C8;
if(!B3)return;this.C8=C;if(!!this.AH&&!((this.F&0x400)===0x400)){this.H.F=this.H.
F|0x5000;B.pe([A=this.H,A.Cq],this);this.H.Ac([0,0,(A=this.H.M)[2]-A[0],A[3]-A[1
]]);}if(!!this.AH&&((this.F&0x400)===0x400)){this.AH.Fv.F=this.AH.Fv.F|0x1000;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],this);}},Go:function(){var Aa=this.H;while(
!!Aa){var E6=(D.Root.isPrototypeOf(Aa)?Aa:null);if(!!E6)return E6;Aa=Aa.H;}return null;
},CK:function(AE,aClip,aOffset,Ay,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bp:function(Av){return null;},E$:function(Ag,N,Ch,Fi,Ee,F_){return null;},He:
function(Ag){return Ag;},Hf:function(X,CH){return AI;},IG:function(aOffset,HF){}
,GetExtent:function(){return AG;},AQ:function(Cg,CG){var A;if(((this.F&0x200)===
0x200))Cg=Cg&~0x400;var JA=(this.F&~CG)|Cg;var Db=JA^this.F;this.F=JA;if(!!this.
H&&!!(Db&0x14)){var Kp=((this.F&0x14)===0x14);if(Kp&&!this.H.CM)this.H.FR(this);
if(!Kp&&(this.H.CM===this))this.H.FR(this.H.JO(this,0x14));}if(!!this.H&&!!(Db&0x403
))this.H.Ac(this.GetClipping());if(((!!this.AH&&!!this.H)&&((JA&0x400)===0x400))&&((
Db&0x1)===0x1)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq
],this);}if(!!this.H&&((Db&0x400)===0x400)){this.AH=null;this.F=this.F|0x800;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],this);}if(((((Db&0x100000)===0x100000)&&((
CG&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AQ(0x0,0x10);if(((((Db&0x100000)===0x100000)&&((Cg&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.H)&&((this.H.F&0x10)===0x10))))this.AQ(0x10,0x0);if(((((Db&0x200000
)===0x200000)&&((CG&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AQ(0x10,0x0);if((((((Db&0x200000)===0x200000)&&((Cg&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
H&&!((this.H.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.H)&&(null!==
this))))this.AQ(0x0,0x10);},_Init:function(aArg){this.__proto__=D.BU;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ad)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.H)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AH)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::View"};D.GE={Bx:B.wf,BT:B.
wf,Bw:B.wf,BS:B.wf,GR:function(X,HG){var Z=B._NewObject(D.Hq,0);this.AH=null;Z.B6=
this.GetExtent();Z.AA=X;Z.Fv=HG;Z.G1=this.BS;Z.G2=this.Bw;Z.G3=this.BT;Z.G4=this.
Bx;this.AH=Z;},Hf:function(X,CH){var A;var Aq=this.C8;var Z=(D.Hq.isPrototypeOf(
A=this.AH)?A:null);var P=Z.B6[0];var Q=Z.B6[1];var S=Z.B6[2];var T=Z.B6[3];var B5=[
X[2]-X[0],X[3]-X[1]];var AC=S-P;var AB=T-Q;if(!CH){var C3=[(A=Z.AA)[2]-A[0],A[3]-
A[1]];P=P-Z.AA[0];Q=Q-Z.AA[1];if(C3[0]!==B5[0]){var A6=((Aq&0x4)===0x4);var A7=((
Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(!A6&&(Dy||!A7))P=((P*B5[0])/C3[0])|0;if(
!A7&&(Dy||!A6)){S=S-Z.AA[0];S=((S*B5[0])/C3[0])|0;S=S-B5[0];}else S=S-Z.AA[2];P=
P+X[0];S=S+X[2];if(!Dy){if(A6&&!A7)S=P+AC;else if(!A6&&A7)P=S-AC;else{P=P+((((S-
P)-AC)/2)|0);S=P+AC;}}}else{S=S-Z.AA[2];P=P+X[0];S=S+X[2];}if(C3[1]!==B5[1]){var
A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2)===0x2);if(!A8&&(
Dz||!A5))Q=((Q*B5[1])/C3[1])|0;if(!A5&&(Dz||!A8)){T=T-Z.AA[1];T=((T*B5[1])/C3[1]
)|0;T=T-B5[1];}else T=T-Z.AA[3];Q=Q+X[1];T=T+X[3];if(!Dz){if(A8&&!A5)T=Q+AB;else
if(!A8&&A5)Q=T-AB;else{Q=Q+((((T-Q)-AB)/2)|0);T=Q+AB;}}}else{T=T-Z.AA[3];Q=Q+X[1
];T=T+X[3];}}else{switch(CH){case 3:{P=X[0];S=P+AC;}break;case 4:{S=X[2];P=S-AC;
}break;case 1:{Q=X[1];T=Q+AB;}break;case 2:{T=X[3];Q=T-AB;}break;default:;}if((CH===
3)||(CH===4)){var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2
)===0x2);if(Dz){Q=X[1];T=X[3];}else if(A8&&!A5){Q=X[1];T=Q+AB;}else if(A5&&!A8){
T=X[3];Q=T-AB;}else{Q=X[1]+((((X[3]-X[1])-AB)/2)|0);T=Q+AB;}}if((CH===1)||(CH===
2)){var A6=((Aq&0x4)===0x4);var A7=((Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(Dy
){P=X[0];S=X[2];}else if(A6&&!A7){P=X[0];S=P+AC;}else if(A7&&!A6){S=X[2];P=S-AC;
}else{P=X[0]+((((X[2]-X[0])-AC)/2)|0);S=P+AC;}}}Z.isEmpty=(P>=S)||(Q>=T);AC=(S-P
)-1;AB=(T-Q)-1;var Ej=Z.B6[0];var Ek=Z.B6[1];var DM=(Z.B6[2]-Ej)-1;var DL=(Z.B6[
3]-Ek)-1;if(!DM)DM=1;if(!DL)DL=1;if(((this.F&0x100)===0x100)){this.BS=[P+((((Z.G1[
0]-Ej)*AC)/DM)|0),Q+((((Z.G1[1]-Ek)*AB)/DL)|0)];this.Bw=[P+((((Z.G2[0]-Ej)*AC)/DM
)|0),Q+((((Z.G2[1]-Ek)*AB)/DL)|0)];this.BT=[P+((((Z.G3[0]-Ej)*AC)/DM)|0),Q+((((Z.
G3[1]-Ek)*AB)/DL)|0)];this.Bx=[P+((((Z.G4[0]-Ej)*AC)/DM)|0),Q+((((Z.G4[1]-Ek)*AB
)/DL)|0)];}else{this.IR([P+((((Z.G1[0]-Ej)*AC)/DM)|0),Q+((((Z.G1[1]-Ek)*AB)/DL)|
0)]);this.IS([P+((((Z.G2[0]-Ej)*AC)/DM)|0),Q+((((Z.G2[1]-Ek)*AB)/DL)|0)]);this.IT([
P+((((Z.G3[0]-Ej)*AC)/DM)|0),Q+((((Z.G3[1]-Ek)*AB)/DL)|0)]);this.IU([P+((((Z.G4[
0]-Ej)*AC)/DM)|0),Q+((((Z.G4[1]-Ek)*AB)/DL)|0)]);this.AH=Z;}return[AC+1,AB+1];},
IG:function(aOffset,HF){if(HF){this.BS=B.abf(this.BS,aOffset);this.Bw=B.abf(this.
Bw,aOffset);this.BT=B.abf(this.BT,aOffset);this.Bx=B.abf(this.Bx,aOffset);}else{
this.IR(B.abf(this.BS,aOffset));this.IS(B.abf(this.Bw,aOffset));this.IT(B.abf(this.
BT,aOffset));this.IU(B.abf(this.Bx,aOffset));}},GetExtent:function(){if(!!this.AH&&
this.AH.isEmpty)return AG;var P=this.BS[0];var Q=this.BS[1];var S=this.BT[0];var
T=this.BT[1];if((((this.Bx[0]!==P)||(this.Bw[1]!==Q))||(this.Bw[0]!==S))||(this.
Bx[1]!==T)){if(this.Bw[0]<P)P=this.Bw[0];if(this.BT[0]<P)P=this.BT[0];if(this.Bx[
0]<P)P=this.Bx[0];if(this.Bw[1]<Q)Q=this.Bw[1];if(this.BT[1]<Q)Q=this.BT[1];if(this.
Bx[1]<Q)Q=this.Bx[1];if(this.BS[0]>S)S=this.BS[0];if(this.Bw[0]>S)S=this.Bw[0];if(
this.Bx[0]>S)S=this.Bx[0];if(this.BS[1]>T)T=this.BS[1];if(this.Bw[1]>T)T=this.Bw[
1];if(this.Bx[1]>T)T=this.Bx[1];}else{var tmp;if(S<P){tmp=P;P=S;S=tmp;}if(T<Q){tmp=
Q;Q=T;T=tmp;}}return[P,Q,S+1,T+1];},IU:function(C){var A;if(B.aaX(C,this.Bx))return;
if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping());this.AH=null;this.
Bx=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.
H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],this);}},IT:function(C){var A;if(B.
aaX(C,this.BT))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AH=null;this.BT=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],this);}},IS:function(
C){var A;if(B.aaX(C,this.Bw))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.GetClipping());this.AH=null;this.Bw=C;if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],this
);}},IR:function(C){var A;if(B.aaX(C,this.BS))return;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.GetClipping());this.AH=null;this.BS=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400)
)&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.
pe([A=this.H,A.Cq],this);}},Iz:function(Fn){var AL=B.abi(4,B.wf,null);var G=0;var
AO=3;var Jt=false;var Ju=false;AL.Set(0,this.BS);AL.Set(1,this.Bw);AL.Set(2,this.
BT);AL.Set(3,this.Bx);while(G<4){var KQ=AL.Get(G)[0];var H4=AL.Get(G)[1];var NR=
AL.Get(AO)[0];var JI=AL.Get(AO)[1];if(((H4>Fn[1])!==(JI>Fn[1]))||((H4<Fn[1])!==(
JI<Fn[1]))){var KR=((((NR-KQ)*(Fn[1]-H4))/(JI-H4))|0)+KQ;if(Fn[0]>KR)Jt=!Jt;if(Fn[
0]<KR)Ju=!Ju;}AO=G;G=G+1;}return Jt||Ju;},La:function(){return((((this.BS[0]===this.
Bx[0])&&(this.Bw[0]===this.BT[0]))&&(this.BS[1]===this.Bw[1]))&&(this.BT[1]===this.
Bx[1]))||((((this.BS[0]===this.Bw[0])&&(this.BT[0]===this.Bx[0]))&&(this.BS[1]===
this.Bx[1]))&&(this.Bw[1]===this.BT[1]));},_Init:function(aArg){D.BU._Init.call(
this,aArg);this.__proto__=D.GE;},_className:"Core::QuadView"};D.AW={M:B.wg,GR:function(
X,HG){var Z=B._NewObject(D.Hp,0);Z.B6=this.M;Z.AA=X;Z.Fv=HG;this.AH=Z;},Hf:function(
X,CH){var A;var Aq=this.C8;var Z=this.AH;var P=Z.B6[0];var Q=Z.B6[1];var S=Z.B6[
2];var T=Z.B6[3];var B5=[X[2]-X[0],X[3]-X[1]];var AC=S-P;var AB=T-Q;if(!CH){var C3=[(
A=Z.AA)[2]-A[0],A[3]-A[1]];P=P-Z.AA[0];Q=Q-Z.AA[1];if(C3[0]!==B5[0]){var A6=((Aq&
0x4)===0x4);var A7=((Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(!A6&&(Dy||!A7))P=((
P*B5[0])/C3[0])|0;if(!A7&&(Dy||!A6)){S=S-Z.AA[0];S=((S*B5[0])/C3[0])|0;S=S-B5[0];
}else S=S-Z.AA[2];P=P+X[0];S=S+X[2];if(!Dy){if(A6&&!A7)S=P+AC;else if(!A6&&A7)P=
S-AC;else{P=P+((((S-P)-AC)/2)|0);S=P+AC;}}}else{S=S-Z.AA[2];P=P+X[0];S=S+X[2];}if(
C3[1]!==B5[1]){var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2
)===0x2);if(!A8&&(Dz||!A5))Q=((Q*B5[1])/C3[1])|0;if(!A5&&(Dz||!A8)){T=T-Z.AA[1];
T=((T*B5[1])/C3[1])|0;T=T-B5[1];}else T=T-Z.AA[3];Q=Q+X[1];T=T+X[3];if(!Dz){if(A8&&
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
S-P,T-Q];},IG:function(aOffset,HF){if(HF)this.M=B.abh(this.M,aOffset);else this.
O(B.abh(this.M,aOffset));},GetExtent:function(){return this.M;},O:function(C){var
A;if(B.aaY(C,this.M))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AH=null;this.M=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],this);}},_Init:function(
aArg){D.BU._Init.call(this,aArg);this.__proto__=D.AW;},_className:"Core::RectView"
};D.Am={Bh:null,BL:null,HT:null,CM:null,FU:255,GM:0,GP:0,GO:0,GN:0,AU:function(aArg
){this.CC();},CK:function(AE,aClip,aOffset,Ay,aBlend){var A;Ay=((Ay+1)*this.FU)>>
8;aBlend=aBlend&&((this.F&0x2)===0x2);this.Nq(AE,aClip,B.abf(aOffset,this.M.slice(
0,2)),Ay,aBlend);},GetClipping:function(){var A;var I=this.M;I=[].concat(I[0]-this.
GN,I.slice(1,4));I=B.abP(I,I[1]-this.GP);I=B.abN(I,I[2]+this.GO);I=[].concat(I.slice(
0,3),I[3]+this.GM);if(((this.F&0x80000)===0x80000)){var Fz=AG;var J;for(J=this.Bh;
!!J;J=J.Ar)if(((J.F&0x1)===0x1))Fz=B.wC(Fz,J.GetClipping());I=B.wC(I,B.abh(Fz,this.
M.slice(0,2)));}return I;},E$:function(Ag,N,Ch,Fi,Ee,F_){var A;var J=this.BL;var
Fs=null;var Y=AG;var Ck=null;if(((A=B.lb(Ag,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ag=B.abg(Ag,this.M.slice(0,2));if(!!Ee){J=Ee;while(!!J&&(J.H!==this))J=J.H;}while(
!!J){if(((J.F&0x400)===0x400)&&!Ck){Ck=J.Ad;while(!!Ck&&!((Ck.F&0x200)===0x200))
Ck=Ck.Ad;if(!!Ck)Y=B.lb(Ag,Ck.GetExtent());else Y=AG;}if(Ck===J){Ck=null;Y=AG;}if((
!!Fi&&!!(D.Am.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var B6=J.GetExtent();var HN=Fi;var Fr=null;if(HN===J)HN=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(B6,Y))[0]>=A[2])||(A[1]>=A[3])))Fr=
J.E$(Y,N,Ch,HN,Ee,F_);}else if(!(((A=B.lb(B6,Ag))[0]>=A[2])||(A[1]>=A[3]))||(Fi===
J))Fr=J.E$(Ag,N,Ch,HN,Ee,F_);J=J.Ad;if(!!Fr){if(!Fs||((Fr.Gj<Fs.Gj)&&(Fr.Gj>=0))
)Fs=Fr;if(!Fr.Gj)J=null;}}else J=J.Ad;Ee=null;}return Fs;},He:function(Ag){var A;
var CS;var J=this.Bh;var Fp=AG;var G0=true;var result=(Ag=CS=B.abg(Ag,this.M.slice(
0,2)),CS);while(!!J){if(((J.F&0x200)===0x200)){var Gf=(D.GD.isPrototypeOf(J)?J:null
);Fp=B.lb(Ag,Gf.M);G0=((Gf.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(G0){var Y=B.lb(J.GetClipping(),Fp);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))result=
B.wC(result,J.He(Y));}}else{var Y=B.lb(J.GetClipping(),Ag);if(!((Y[0]>=Y[2])||(Y[
1]>=Y[3])))result=B.wC(result,J.He(Y));}}J=J.Ar;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},AQ:function(Cg,CG){var A;var HU=this.F;if((!!this.H&&((this.
F&0x80001)===0x80001))&&((CG&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.
AW.AQ.call(this,Cg,CG);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cg&0x80000)===0x80000
))&&!((HU&0x80000)===0x80000))this.H.Ac(this.GetClipping());var Db=this.F^HU;if(
!!this.CM&&((Db&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CM.AQ(0x40,0x0);else
this.CM.AQ(0x0,0x40);}if(((Db&0x10)===0x10)){var J;for(J=this.Bh;!!J;J=J.Ar)if((((
J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000)===0x10000)||(
null===J)))J.AQ(Cg&0x10,CG&0x10);}if(!!Db){this.F=this.F|0x8000;B.pe([this,this.
H3],this);}},O:function(C){var A;if(B.aaY(C,this.M))return;var E3=[(A=this.M)[2]-
A[0],A[3]-A[1]];var Jz=[C[2]-C[0],C[3]-C[1]];var Gg=!B.aaX(E3,Jz);D.AW.O.call(this
,C);if((Gg&&(E3[0]>0))&&(E3[1]>0)){var AA=[].concat(AI,E3);var J=this.Bh;while(!
!J){if((!J.AH&&(J.C8!==0x14))&&!((J.F&0x400)===0x400))J.GR(AA,null);J=J.Ar;}}if(
Gg){this.F=this.F|0x5000;B.pe([this,this.H3],this);}},KG:function(Av){var Ks=(D.
KeyEvent.isPrototypeOf(Av)?Av:null);var Dc=this.HT;if(!Ks)return null;while(!!Dc&&(
!Dc.BR||!Dc.Bp(Ks)))Dc=Dc.Ar;return Dc;},Nq:function(AE,aClip,aOffset,Ay,aBlend){
var A;var J=this.Bh;var Fp=AG;var G0=true;this.K2(AE,aClip,aOffset,Ay,aBlend);while(
!!J){if(((J.F&0x200)===0x200)){var Gf=(D.GD.isPrototypeOf(J)?J:null);G0=((Gf.F&0x1
)===0x1);Fp=aClip;if(!((Gf.F&0x80000)===0x80000))Fp=B.lb(Fp,B.abh(Gf.M,aOffset));
}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===0x400)){if(G0){var Y=B.lb(B.abh(J.GetClipping(
),aOffset),Fp);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))J.CK(AE,Y,aOffset,Ay,aBlend);}}else{
var Y=B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])
))J.CK(AE,Y,aOffset,Ay,aBlend);}}J=J.Ar;}this.K5(AE,aClip,aOffset,Ay,aBlend);},NF:
function(){var A;var Jr=((this.F&0x1000)===0x1000);var El=[0,0,(A=this.M)[2]-A[0
],A[3]-A[1]];var DN=false;var Gc=AG;var Jp=AG;var J=this.BL;var Ck=null;while(!!
J){if(((J.F&0x800)===0x800)){DN=true;J.F=J.F&~0x800;}if(DN&&((J.F&0x200)===0x200
))DN=false;J=J.Ad;}DN=false;J=this.Bh;if(Jr){this.F=this.F&~0x1000;Jr=!((El[0]>=
El[2])||(El[1]>=El[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400
)){if(!!J.AH&&(J.AH.Fv!==Ck))J.AH=null;if((!J.AH&&DN)&&(J.C8!==0x14))J.GR(Jp,Ck);
}if(!!J.AH){if(Jr&&!((J.F&0x400)===0x400))J.Hf(El,0);if(DN&&((J.F&0x400)===0x400
))J.Hf(Jp,0);}if(((J.F&0x200)===0x200)){DN=((J.F&0x1000)===0x1000);Ck=(D.GD.isPrototypeOf(
J)?J:null);if(DN){J.F=J.F&~0x1000;Gc=Ck.M;Jp=Gc;DN=!((Gc[0]>=Gc[2])||(Gc[1]>=Gc[
3]));}if(DN)this.Ac(Ck.M);}J=J.Ar;}this.F=this.F&~0x2000;this.J9([El[2]-El[0],El[
3]-El[1]]);},Cq:function(AV){B.pe([this,this.H3],this);},H3:function(AV){var A;var
NP=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.NF();}if(((this.F&0x8000)===0x8000)||NP){this.F=this.F&~0x8000;this.I6(this.
F);}},FR:function(C){var A;if(!!C&&(C.H!==this))throw new Error(CF);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.CM)return;
if(!!this.CM)this.CM.AQ(0x0,0x60);this.CM=C;if(!!C){if(((this.F&0x40)===0x40))C.
AQ(0x60,0x0);else C.AQ(0x20,0x0);}},IQ:function(C){var A;if(C>255)C=255;if(C<0)C=
0;if(C===this.FU)return;this.FU=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
GetClipping());},Nf:function(NQ){this.IQ(NQ);},Ff:function(C){if(C)this.AQ(0x1,0x0
);else this.AQ(0x0,0x1);},ExtendClipping:function(Fk,Fl,Fm,Fj){var A;var GL=this.
M;var Ci=GL;if(Fk<0)Fk=0;if(Fk>255)Fk=255;if(Fl<0)Fl=0;if(Fl>255)Fl=255;if(Fm<0)
Fm=0;if(Fm>255)Fm=255;if(Fj<0)Fj=0;if(Fj>255)Fj=255;Ci=[].concat(Ci[0]-(Math.max(
Fk,this.GN)&0xFF),Ci.slice(1,4));Ci=B.abN(Ci,Ci[2]+(Math.max(Fl,this.GO)&0xFF));
Ci=B.abP(Ci,Ci[1]-(Math.max(Fm,this.GP)&0xFF));Ci=[].concat(Ci.slice(0,3),Ci[3]+(
Math.max(Fj,this.GM)&0xFF));if(Fk!==this.GN){if((!!this.H&&((this.F&0x1)===0x1))&&
!((this.F&0x80000)===0x80000)){var I=Ci;I=B.abN(I,GL[0]);this.H.Ac(I);}this.GN=Fk&
0xFF;}if(Fl!==this.GO){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===
0x80000)){var I=Ci;I=[].concat(GL[2],I.slice(1,4));this.H.Ac(I);}this.GO=Fl&0xFF;
}if(Fm!==this.GP){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000
)){var I=Ci;I=[].concat(I.slice(0,3),GL[1]);this.H.Ac(I);}this.GP=Fm&0xFF;}if(Fj
!==this.GM){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){
var I=Ci;I=B.abP(I,GL[3]);this.H.Ac(I);}this.GM=Fj&0xFF;}},K5:function(AE,aClip,
aOffset,Ay,aBlend){},K2:function(AE,aClip,aOffset,Ay,aBlend){},GetMaximalSize:function(
){return DI;},GetMinimalSize:function(){return AI;},DispatchEvent:function(Av){var
A;var J=this.CM;var Aa=(D.Am.isPrototypeOf(J)?J:null);var AY=null;if(!!J&&((((J.
F&0x10000)===0x10000)||((J.F&0x40000)===0x40000))||((J.F&0x20000)===0x20000))){J=
null;Aa=null;}if(!!Aa)AY=Aa.DispatchEvent(Av);else if(!!J)AY=J.Bp(Av);if(!AY)AY=
this.Bp(Av);if(!AY)AY=this.KG(Av);return AY;},BroadcastEventAtPosition:function(
Av,Ke,aFilter){var A;var J=this.BL;var AY=null;while(!!J&&!AY){if((!aFilter||((A=
aFilter)&&((J.F&A)===A)))&&B.wa(J.GetExtent(),Ke)){var Aa=(D.Am.isPrototypeOf(J)?
J:null);if(!!Aa)AY=Aa.BroadcastEventAtPosition(Av,B.abe(Ke,Aa.M.slice(0,2)),aFilter
);else AY=J.Bp(Av);}J=J.Ad;}if(!AY)AY=this.Bp(Av);return AY;},BroadcastEvent:function(
Av,aFilter){var A;var J=this.BL;var AY=null;while(!!J&&!AY){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var Aa=(D.Am.isPrototypeOf(J)?J:null);if(!!Aa)AY=Aa.BroadcastEvent(
Av,aFilter);else AY=J.Bp(Av);}J=J.Ad;}if(!AY)AY=this.Bp(Av);if(!AY)AY=this.KG(Av
);return AY;},J9:function(aSize){},I6:function(HI){},CC:function(){this.F=this.F|
0x8000;B.pe([this,this.H3],this);},Ac:function(Ag){var A;var Aa=this;while(!!Aa&&
!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){if(!Aa.H&&(Aa!==this)){Aa.Ac(Ag);return;}if(!((
Aa.F&0x1)===0x1))return;var I=Aa.M;Ag=B.abh(Ag,I.slice(0,2));if(!((Aa.F&0x80000)===
0x80000)){I=[].concat(I[0]-Aa.GN,I.slice(1,4));I=B.abP(I,I[1]-Aa.GP);I=B.abN(I,I[
2]+Aa.GO);I=[].concat(I.slice(0,3),I[3]+Aa.GM);Ag=B.lb(Ag,I);}Aa=Aa.H;}},JO:function(
K,aFilter){var A;if(!K||(K.H!==this))return null;var E2=K.Ar;var E5=K.Ad;var GX=
0x10000;if(((aFilter&0x10000)===0x10000))GX=0x0;while(!!E2||!!E5){if((!!E2&&(!aFilter||((
A=aFilter)&&((E2.F&A)===A))))&&(!GX||!((A=GX)&&((E2.F&A)===A))))return E2;if((!!
E5&&(!aFilter||((A=aFilter)&&((E5.F&A)===A))))&&(!GX||!((A=GX)&&((E5.F&A)===A)))
)return E5;if(!!E2)E2=E2.Ar;if(!!E5)E5=E5.Ad;}return null;},LT:function(K,CU){var
A;if(!K)throw new Error(Ec);if(K.H!==this)throw new Error(Ed);var Eg=K;var A9=K;
var FB=K.C_;while(((CU>0)&&!!Eg.Ar)&&(Eg.Ar.C_<=FB)){Eg=Eg.Ar;CU=CU-1;}while(((CU<
0)&&!!A9.Ad)&&(A9.Ad.C_>=FB)){A9=A9.Ad;CU=CU+1;}if((Eg===K)&&(A9===K))return;if(((
K.F&0x401)===0x401)){if(!!K.Ad&&!!K.AH)K.Ad.F=K.Ad.F|0x800;K.F=K.F|0x800;this.F=
this.F|0x4000;B.pe([this,this.Cq],this);}if(((K.F&0x200)===0x200)){if(!!K.Ad)K.Ad.
F=K.Ad.F|0x800;K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cq],this);}if(
!!K.Ad)K.Ad.Ar=K.Ar;if(!!K.Ar)K.Ar.Ad=K.Ad;if(this.Bh===K)this.Bh=K.Ar;if(this.BL===
K)this.BL=K.Ad;if(Eg!==K){K.Ar=Eg.Ar;K.Ad=Eg;Eg.Ar=K;if(!!K.Ar)K.Ar.Ad=K;}if(A9!==
K){K.Ar=A9;K.Ad=A9.Ad;A9.Ad=K;if(!!K.Ad)K.Ad.Ar=K;}if(!K.Ar)this.BL=K;if(!K.Ad)this.
Bh=K;if(((K.F&0x1)===0x1))this.Ac(K.GetClipping());},FY:function(K){var A;if(!K)
throw new Error(Fg);if(K.H!==this)throw new Error(Ed);if((((K.F&0x401)===0x401)&&
!!K.Ad)&&!!K.AH){K.Ad.F=K.Ad.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cq],this
);}if(((K.F&0x200)===0x200)){if(!!K.Ad)K.Ad.F=K.Ad.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.Cq],this);}K.AH=null;if(this.CM===K)this.FR(this.JO(K,0x14));if(
!!K.Ad)K.Ad.Ar=K.Ar;if(!!K.Ar)K.Ar.Ad=K.Ad;if(this.Bh===K)this.Bh=K.Ar;if(this.BL===
K)this.BL=K.Ad;K.H=null;K.Ar=null;K.Ad=null;if((!((K.F&0x10)===0x10)&&((K.F&0x100000
)===0x100000))&&!((this.F&0x80)===0x80))K.AQ(0x10,0x0);if(((K.F&0x1)===0x1))this.
Ac(K.GetClipping());},U:function(K,CU){var A;if(!K)throw new Error(I8);if(!!K.H)
throw new Error(I9);var A9=null;var FB=K.C_;if(((CU<0)&&!!this.BL)&&(this.BL.C_>=
FB)){A9=this.BL;CU=CU+1;}while((((CU<0)&&!!A9)&&!!A9.Ad)&&(A9.Ad.C_>=FB)){A9=A9.
Ad;CU=CU+1;}if((!A9&&!!this.BL)&&(this.BL.C_>FB))A9=this.BL;while((!!A9&&!!A9.Ad
)&&(A9.Ad.C_>FB))A9=A9.Ad;if(!A9){K.H=this;K.Ad=this.BL;if(!!this.BL)this.BL.Ar=
K;if(!this.Bh)this.Bh=K;this.BL=K;}else{K.H=this;K.Ad=A9.Ad;K.Ar=A9;A9.Ad=K;if(!
!K.Ad)K.Ad.Ar=K;else this.Bh=K;}if(((K.F&0x1)===0x1))this.Ac(K.GetClipping());if(((
K.F&0x80)===0x80)&&(B.aam().K_()===K))K.AQ(0x10,0x0);else if(!((this.F&0x10)===0x10
)&&((K.F&0x200010)===0x200010))K.AQ(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((
K.F&0x10)===0x10))&&((K.F&0x100000)===0x100000))K.AQ(0x10,0x0);if(((!this.CM&&((
K.F&0x4)===0x4))&&((K.F&0x10)===0x10))&&!((K.F&0x10000)===0x10000))this.FR(K);if(((
K.F&0x401)===0x401)){K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cq],this
);}if(((K.F&0x200)===0x200)){K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Cq],this);}},Lg:function(){return this.FU;},_Init:function(aArg){D.AW._Init.call(
this,aArg);this.__proto__=D.Am;this.F=0x10001F;this.AU(aArg);},_Mark:function(E){
var A;D.AW._Mark.call(this,E);if((A=this.Bh)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.BL)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HT)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.CM)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Core::Group"};D.Root={Cn:null,AJ:B.abi(10,null,null),F$:null,Ei:null,Hb:0,AS:0,
BC:B.abi(10,0,null),HM:B.abi(10,B.wg,null),CY:B.abi(10,0,null),DK:B.abi(10,B.wf,
null),Gb:B.abi(10,0,null),Eh:B.abi(10,B.wf,null),CX:B.abi(10,B.wf,null),Cj:B.abi(
10,B.wf,null),Dw:B.abi(10,B.wf,null),Ap:0,HP:0,HO:0,BP:B.abi(4,0,null),Ba:B.abi(
4,B.wg,null),A$:0,GU:0,Ge:0,Js:true,AU:function(aArg){if(!!!this.L){var obj=this;
B.abD(obj);}},Go:function(){return this;},CK:function(AE,aClip,aOffset,Ay,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AE.Io(aClip
,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);D.Am.CK.call(this,AE,aClip,aOffset,Ay,aBlend);},AQ:function(Cg
,CG){var A;D.Am.AQ.call(this,Cg,CG);if(!this.H&&(((Cg&0x1)===0x1)||((CG&0x1)===0x1
)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.H&&(((Cg&0x2)===0x2)||((
CG&0x2)===0x2)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},FR:function(C){if((
C!==null)||!C)D.Am.FR.call(this,C);},IQ:function(C){var A;var Nv=this.FU;D.Am.IQ.
call(this,C);if(((Nv!==this.FU)&&!this.H)&&((this.F&0x1)===0x1))this.Ac([0,0,(A=
this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Av){if(!!Av){Av.Gs=!!this.AS;
if(!!this.AS)Av.AD=this.AS;}var AY;AY=D.Am.DispatchEvent.call(this,Av);this.AS=0;
return AY;},BroadcastEvent:function(Av,aFilter){if(!!Av){Av.Gs=!!this.AS;if(!!this.
AS)Av.AD=this.AS;}var AY=D.Am.BroadcastEvent.call(this,Av,aFilter);this.AS=0;return AY;
},Ac:function(Ag){var A;if(this.Hb>0)throw new Error(I_);var fullScreenUpdate=false;
fullScreenUpdate=B.m7;if(fullScreenUpdate)Ag=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];
if(!!this.H){D.Am.Ac.call(this,Ag);return;}Ag=B.lb(B.abh(Ag,this.M.slice(0,2)),this.
M);if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var G;for(G=0;G<this.A$;G=G+1)if(!(((
A=B.lb(this.Ba.Get(G),Ag))[0]>=A[2])||(A[1]>=A[3]))){this.Ba.Set(G,B.wC(this.Ba.
Get(G),Ag));this.BP.Set(G,B.aaH(this.Ba.Get(G)));return;}if(this.A$<3){this.Ba.Set(
this.A$,Ag);this.BP.Set(this.A$,B.aaH(Ag));this.A$=this.A$+1;return;}var AO;var Cm;
var GT=0;var GW=0;var Kg=2147483647;this.Ba.Set(this.A$,Ag);this.BP.Set(this.A$,
B.aaH(Ag));for(AO=0;AO<=this.A$;AO=AO+1)for(Cm=AO+1;Cm<=this.A$;Cm=Cm+1){var H2=
B.aaH(B.wC(this.Ba.Get(AO),this.Ba.Get(Cm)));var KF=((H2<<8)/(this.BP.Get(AO)+this.
BP.Get(Cm)))|0;if(KF<Kg){Kg=KF;GT=AO;GW=Cm;}}this.Ba.Set(GT,B.wC(this.Ba.Get(GT)
,this.Ba.Get(GW)));this.BP.Set(GT,B.aaH(this.Ba.Get(GT)));if(GW!==this.A$){this.
Ba.Set(GW,this.Ba.Get(this.A$));this.BP.Set(GW,this.BP.Get(this.A$));}},No:function(
){var BD=B._NewObject(D.Hj,0);BD.Gs=!!this.AS;if(!!this.AS)BD.AD=this.AS;return BD;
},Fq:function(){var BD=B._NewObject(D.FF,0);BD.Gs=!!this.AS;if(!!this.AS)BD.AD=this.
AS;return BD;},Ga:function(){var BD=B._NewObject(D.Ib,0);BD.Gs=!!this.AS;if(!!this.
AS)BD.AD=this.AS;return BD;},Np:function(AV){var G;var Fs=false;for(G=0;G<10;G=G+
1)if(!!this.AJ.Get(G)){var Bi=this.Cj.Get(G);var Aa=this.AJ.Get(G).H;while(!!Aa&&(
Aa!==this)){Bi=B.abe(Bi,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(this.AJ.Get(G)!==this
)){var tmp=this.AJ.Get(G);this.Ap=G;this.AJ.Set(G,null);tmp.Bp(this.Fq().InitializeUp(
G,this.Eh.Get(G),this.DK.Get(G),this.CY.Get(G),this.BC.Get(G)+1,this.CX.Get(G),false
,this.Cj.Get(G),this.Dw.Get(G)));this.BroadcastEvent(this.Ga().InitializeUp(G,this.
BC.Get(G)+1,false,tmp,this.Cj.Get(G)),0x18);}else{this.CY.Set(G,(this.Ei.AD-this.
Gb.Get(G))|0);if(this.CY.Get(G)<10)this.CY.Set(G,10);this.Ap=G;this.AJ.Get(G).Bp(
this.Fq().InitializeHold(G,Bi,this.DK.Get(G),this.CY.Get(G),this.BC.Get(G)+1,this.
CX.Get(G),this.Cj.Get(G),this.Dw.Get(G)));Fs=true;}}if(!Fs)this.Ei.BN(false);},GetFPS:
function(){var ticksCount=0;var Kq=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.HP&&(ticksCount>this.HP))Kq=((this.HO*1000)/((ticksCount-this.HP)|0))|0;this.
HO=0;this.HP=ticksCount;return Kq;},Update:function(){var A;if(!this.F$)this.F$=
B._NewObject(B.Graphics.Canvas,0);this.F$.JV([(A=this.M)[2]-A[0],A[3]-A[1]]);this.
F$.Update();return this.UpdateGE20(this.F$);},UpdateGE20:function(AE){if(!this.BeginUpdate(
))return AG;var DR=this.UpdateCanvas(AE,AI);this.EndUpdate();return DR;},EndUpdate:
function(){if(this.A$>0){this.HO=this.HO+1;this.A$=0;}},UpdateCanvas:function(AE
,aOffset){var A;var DR=AG;var Nj=[].concat(aOffset,B.abf(AE.FrameSize,aOffset));
var G;var AO=this.A$;this.Hb=this.Hb+1;AE.Ft=this;for(G=0;(G<AO)&&(G<4);G=G+1)if(
this.BP.Get(G)>0){this.CK(AE,B.abg(this.Ba.Get(G),aOffset),[-aOffset[0],-aOffset[
1]],255,true);DR=B.wC(DR,B.lb(Nj,this.Ba.Get(G)));}else AO=AO+1;AE.Ft=null;this.
Hb=this.Hb-1;if(!((DR[0]>=DR[2])||(DR[1]>=DR[3])))return B.abg(DR,aOffset);else return DR;
},GetUpdateRegion:function(HH){var G;var AO=this.A$;if(HH<0)return AG;for(G=0;(G<
AO)&&(G<4);G=G+1)if(!this.BP.Get(G)){AO=AO+1;HH=HH+1;}else if(G===HH)return this.
Ba.Get(G);return AG;},BeginUpdate:function(){var A;var G;if(!!this.A$&&!B.aaY(this.
Ba.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[1]])){var KP=B.abi(3,B.wg,null);var KO=
this.A$;for(G=0;G<KO;G++)KP.Set(G,this.Ba.Get(G));for(G=0;G<KO;G++){var KH=B.abh(
KP.Get(G),this.M.slice(0,2));var KI=this.He(KH);if(!B.aaY(KH,KI))this.Ac(B.abg(KI
,this.M.slice(0,2)));}}var AO;var Cm;for(AO=0;AO<(this.A$-1);AO++)if(this.BP.Get(
AO)>0)for(Cm=AO+1;Cm<this.A$;Cm++)if(this.BP.Get(Cm)>0){var H2=B.aaH(B.wC(this.Ba.
Get(AO),this.Ba.Get(Cm)));if(((H2-this.BP.Get(AO))-this.BP.Get(Cm))<0){this.Ba.Set(
AO,B.wC(this.Ba.Get(AO),this.Ba.Get(Cm)));this.BP.Set(AO,H2);this.BP.Set(Cm,0);}
}for(G=this.A$-1;G>=0;G--)if(!this.BP.Get(G))this.A$=this.A$-1;return this.A$;},
DoesNeedUpdate:function(){if(this.A$>0)return true;return false;},Initialize:function(
aSize){this.O([].concat(AI,aSize));if(this.Js)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.M);return this;},SetRootFocus:function(Jd){if(Jd===this.Js)return false;
this.Js=Jd;if(!Jd)this.AQ(0x0,0x40);else this.AQ(0x40,0x0);return true;},SetUserInputTimestamp:
function(Ni){this.AS=Ni;},DriveKeyboardHitting:function(Bf,GG,C$){var A;var JF=!
!this.Cn;if(!!this.Cn&&((!C$||(this.GU!==Bf))||(this.Ge!==GG))){var BD=null;var J=(
D.BU.isPrototypeOf(A=this.Cn)?A:null);var Dc=(D.FN.isPrototypeOf(A=this.Cn)?A:null
);if(!!this.GU)BD=B._NewObject(D.KeyEvent,0).Initialize(this.GU,false);if(this.Ge
!==0x00)BD=B._NewObject(D.KeyEvent,0).Initialize2(this.Ge,false);if(!!Dc)Dc.Bp(BD
);else if(!!J)J.Bp(BD);this.GU=0;this.Ge=0x00;this.Cn=null;}if(!!this.Cn){var BD=
null;var J=(D.BU.isPrototypeOf(A=this.Cn)?A:null);var Dc=(D.FN.isPrototypeOf(A=this.
Cn)?A:null);if(!!Bf)BD=B._NewObject(D.KeyEvent,0).Initialize(Bf,true);if(this.Ge
!==0x00)BD=B._NewObject(D.KeyEvent,0).Initialize2(GG,true);if(!!Dc)Dc.Bp(BD);else
if(!!J)J.Bp(BD);}if(!this.Cn&&C$){if(!!Bf)this.Cn=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Bf,true));if(GG!==0x00)this.Cn=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(GG,true));if(!(D.FN.isPrototypeOf(A=this.Cn)?A:null)&&
!(D.BU.isPrototypeOf(A=this.Cn)?A:null))this.Cn=null;this.GU=Bf;this.Ge=GG;JF=JF||
!!this.Cn;}this.AS=0;return JF;},DriveCursorMovement:function(By){return this.DriveMultiTouchMovement(
this.Ap,By);},DriveMultiTouchMovement:function(N,By){if((N<0)||(N>9)){this.AS=0;
return false;}var Cy=B.abe(By,this.Cj.Get(N));this.Cj.Set(N,By);if(!this.AJ.Get(
N)||B.aaX(Cy,AI)){this.AS=0;return false;}var Bi=By;var Aa=this.AJ.Get(N).H;while(
!!Aa&&(Aa!==this)){Bi=B.abe(Bi,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(this.AJ.Get(N)
!==this)){var tmp=this.AJ.Get(N);this.Ap=N;this.AJ.Set(N,null);tmp.Bp(this.Fq().
InitializeUp(N,this.Eh.Get(N),this.DK.Get(N),this.CY.Get(N),this.BC.Get(N)+1,this.
CX.Get(N),false,this.Cj.Get(N),this.Dw.Get(N)));this.BroadcastEvent(this.Ga().InitializeUp(
N,this.BC.Get(N)+1,false,tmp,By),0x18);}else{this.Eh.Set(N,Bi);this.Ap=N;this.AJ.
Get(N).Bp(this.No().Initialize(N,Bi,this.DK.Get(N),Cy,this.CY.Get(N),this.BC.Get(
N)+1,this.CX.Get(N),By,this.Dw.Get(N)));}this.AS=0;return true;},DriveCursorHitting:
function(C$,N,By){return this.DriveMultiTouchHitting(C$,N,By);},DriveMultiTouchHitting:
function(C$,N,By){if((N<0)||(N>9)){this.AS=0;return false;}var ticksCount=this.AS;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var NK=this.AS;this.DriveMultiTouchMovement(
N,By);By=this.Cj.Get(N);this.AS=NK;if(C$)this.Dw.Set(N,By);if(C$&&!this.AJ.Get(N
)){var BV;var Bi=By;if(B.wa(this.HM.Get(N),By)&&((ticksCount-this.Gb.Get(N))<=250
))this.BC.Set(N,this.BC.Get(N)+1);else this.BC.Set(N,0);this.HM.Set(N,B.abh(GF,By
));this.Gb.Set(N,ticksCount);BV=this.E$(B.abh(GF,By),N,this.BC.Get(N)+1,null,null
,0x0);if(!!BV){this.BroadcastEvent(this.Ga().InitializeDown(N,this.BC.Get(N)+1,false
,BV.BU,By),0x18);this.AJ.Set(N,BV.BU);this.CX.Set(N,BV.D1);}else{this.AJ.Set(N,null
);this.CX.Set(N,AI);this.AS=0;return false;}var Aa=BV.BU.H;while(!!Aa&&(Aa!==this
)){Bi=B.abe(Bi,Aa.M.slice(0,2));Aa=Aa.H;}this.DK.Set(N,Bi);this.Eh.Set(N,Bi);this.
CY.Set(N,0);this.Ei.BN(true);this.Ap=N;this.AJ.Get(N).Bp(this.Fq().InitializeDown(
N,Bi,this.BC.Get(N)+1,this.CX.Get(N),false,By));this.AS=0;return true;}if(!C$&&!
!this.AJ.Get(N)){var Bi=By;var Aa=this.AJ.Get(N).H;while(!!Aa&&(Aa!==this)){Bi=B.
abe(Bi,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa)Bi=this.Eh.Get(N);this.Ap=N;var tmp=this.
AJ.Get(N);this.AJ.Set(N,null);tmp.Bp(this.Fq().InitializeUp(N,Bi,this.DK.Get(N),
this.CY.Get(N),this.BC.Get(N)+1,this.CX.Get(N),false,By,this.Dw.Get(N)));this.BroadcastEvent(
this.Ga().InitializeUp(N,this.BC.Get(N)+1,false,tmp,By),0x18);this.AS=0;return true;
}this.AS=0;return false;},LU:function(DJ,Kd,Ee,F_){if(DJ===this)DJ=null;if(!this.
AJ.Get(this.Ap))return;var BV;BV=this.E$(B.abh(GF,this.Cj.Get(this.Ap)),this.Ap,
1,DJ,Ee,F_);if(!!BV&&(this.AJ.Get(this.Ap)!==BV.BU))this.JM(BV.BU,BV.D1);if(!BV&&(
this.AJ.Get(this.Ap)!==Kd))this.JM(Kd,AI);},JM:function(DJ,CT){if(!this.AJ.Get(this.
Ap)||(this.AJ.Get(this.Ap)===DJ))return;var tmp=this.AJ.Get(this.Ap);this.AJ.Set(
this.Ap,null);tmp.Bp(this.Fq().InitializeUp(this.Ap,this.Eh.Get(this.Ap),this.DK.
Get(this.Ap),this.CY.Get(this.Ap),this.BC.Get(this.Ap)+1,this.CX.Get(this.Ap),true
,this.Cj.Get(this.Ap),this.Dw.Get(this.Ap)));this.BroadcastEvent(this.Ga().InitializeUp(
this.Ap,this.BC.Get(this.Ap)+1,true,tmp,this.Cj.Get(this.Ap)),0x18);var Bi=this.
Cj.Get(this.Ap);var Aa=null;if(!!DJ)Aa=DJ.H;while(!!Aa&&(Aa!==this)){Bi=B.abe(Bi
,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(DJ!==this)){this.AJ.Set(this.Ap,null);return;
}this.BroadcastEvent(this.Ga().InitializeDown(this.Ap,this.BC.Get(this.Ap)+1,true
,DJ,this.Cj.Get(this.Ap)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.AJ.Set(this.Ap,DJ);this.CX.Set(this.Ap,CT);this.DK.Set(this.Ap,Bi
);this.Eh.Set(this.Ap,Bi);this.BC.Set(this.Ap,0);this.CY.Set(this.Ap,0);this.Gb.
Set(this.Ap,ticksCount);this.Dw.Set(this.Ap,this.Cj.Get(this.Ap));this.AJ.Get(this.
Ap).Bp(this.Fq().InitializeDown(this.Ap,Bi,this.BC.Get(this.Ap)+1,this.CX.Get(this.
Ap),true,this.Dw.Get(this.Ap)));},K_:function(){return null;},_Init:function(aArg
){D.Am._Init.call(this,aArg);D.Timer._Init.call(this.Ei={L:this},0);(this.AJ=[]).
__proto__=D.Root.AJ;(this.BC=[]).__proto__=D.Root.BC;(this.HM=[]).__proto__=D.Root.
HM;(this.CY=[]).__proto__=D.Root.CY;(this.DK=[]).__proto__=D.Root.DK;(this.Gb=[]
).__proto__=D.Root.Gb;(this.Eh=[]).__proto__=D.Root.Eh;(this.CX=[]).__proto__=D.
Root.CX;(this.Cj=[]).__proto__=D.Root.Cj;(this.Dw=[]).__proto__=D.Root.Dw;(this.
BP=[]).__proto__=D.Root.BP;(this.Ba=[]).__proto__=D.Root.Ba;this.__proto__=D.Root;
this.F=0x10007F;this.Ei.GB(10);this.Ei.FT=[this,this.Np];this.AU(aArg);},_Done:function(
){this.__proto__=D.Am;this.Ei._Done();D.Am._Done.call(this);},_ReInit:function(){
D.Am._ReInit.call(this);this.Ei._ReInit();},_Mark:function(E){var A;D.Am._Mark.call(
this,E);if((A=this.Cn)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.AJ,E);if((A=
this.F$)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ei)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={AD:0,Gs:false,AU:function(aArg){this.AD=this.
Hm();},Hm:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.AU(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={AZ:0,Au:0,Down:false,Initialize2:function(Bf,C$){this.
AZ=0;this.Au=Bf;this.Down=C$;if((Bf>=0x30)&&(Bf<=0x39))this.AZ=(10+Bf)-48;if((Bf>=
0x41)&&(Bf<=0x5A))this.AZ=(105+Bf)-65;if((Bf>=0x61)&&(Bf<=0x7A))this.AZ=(105+Bf)-
97;if(Bf===0x20)this.AZ=131;if(!this.AZ)switch(Bf){case 0x2B:this.AZ=132;break;case
0x2D:this.AZ=133;break;case 0x2A:this.AZ=134;break;case 0x2F:this.AZ=135;break;case
0x3D:this.AZ=136;break;case 0x2E:this.AZ=137;break;case 0x2C:this.AZ=138;break;case
0x3A:this.AZ=139;break;case 0x3B:this.AZ=140;break;default:;}return this;},Initialize:
function(Bf,C$){this.AZ=Bf;this.Down=C$;this.Au=0x00;var Ji=Bf-10;var Jh=Bf-105;
if((Ji>=0)&&(Ji<=9))this.Au=(48+Ji)&0xFFFF;if((Jh>=0)&&(Jh<=25))this.Au=(65+Jh)&
0xFFFF;if(Bf===131)this.Au=0x20;if(this.Au===0x00)switch(Bf){case 132:this.Au=0x2B;
break;case 133:this.Au=0x2D;break;case 134:this.Au=0x2A;break;case 135:this.Au=0x2F;
break;case 136:this.Au=0x3D;break;case 137:this.Au=0x2E;break;case 138:this.Au=0x2C;
break;case 139:this.Au=0x3A;break;case 140:this.Au=0x3B;break;default:;}return this;
},Lc:function(Kc){switch(Kc){case 141:return((this.Au>=0x41)&&(this.Au<=0x5A))||((
this.Au>=0x61)&&(this.Au<=0x7A));case 142:return(((this.Au>=0x41)&&(this.Au<=0x5A
))||((this.Au>=0x61)&&(this.Au<=0x7A)))||((this.Au>=0x30)&&(this.Au<=0x39));case
143:return(this.Au>=0x30)&&(this.Au<=0x39);case 144:return(((this.Au>=0x41)&&(this.
Au<=0x46))||((this.Au>=0x61)&&(this.Au<=0x66)))||((this.Au>=0x30)&&(this.Au<=0x39
));case 145:return this.Au!==0x00;case 146:return(this.Au===0x00)&&!!this.AZ;case
147:return(((this.AZ===6)||(this.AZ===7))||(this.AZ===4))||(this.AZ===5);case 148:
return(this.Au!==0x00)||!!this.AZ;default:;}return Kc===this.AZ;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Ib={I4:null,C7:B.wf,Cf:0,BM:0,Down:false,C4:false,InitializeUp:function(N,Ch
,Fh,Jf,Da){this.Down=false;this.BM=N;this.Cf=Ch;this.C7=Da;this.I4=Jf;this.C4=Fh;
return this;},InitializeDown:function(N,Ch,Fh,Jf,Da){this.Down=true;this.BM=N;this.
Cf=Ch;this.C7=Da;this.I4=Jf;this.C4=Fh;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Ib;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.I4)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.FF={Gq:B.wf,C7:B.wf,Cf:0,B0:0,DB:B.wf,Cr:B.wf,BM:0,Down:false,C4:false,InitializeHold:
function(N,ED,GI,GJ,Ch,CT,Da,GH){this.Down=true;this.BM=N;this.Cr=B.abf(ED,CT);this.
DB=B.abf(GI,CT);this.B0=GJ;this.Cf=Ch;this.C7=Da;this.Gq=GH;return this;},InitializeUp:
function(N,ED,GI,GJ,Ch,CT,Fh,Da,GH){this.Down=false;this.BM=N;this.Cr=B.abf(ED,CT
);this.DB=B.abf(GI,CT);this.B0=GJ;this.Cf=Ch;this.C4=Fh;this.C7=Da;this.Gq=GH;return this;
},InitializeDown:function(N,ED,Ch,CT,Fh,Da){this.Down=true;this.BM=N;this.Cr=B.abf(
ED,CT);this.DB=B.abf(ED,CT);this.B0=0;this.Cf=Ch;this.C4=Fh;this.C7=Da;this.Gq=Da;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.FF;},_className:"Core::CursorEvent"};D.Hj={Gq:B.wf,C7:B.wf,Cf:0,B0:0,D1:B.wf,DB:
B.wf,Cr:B.wf,BM:0,Initialize:function(N,ED,GI,aOffset,GJ,Nh,CT,Da,GH){this.BM=N;
this.Cr=B.abf(ED,CT);this.DB=B.abf(GI,CT);this.D1=aOffset;this.B0=GJ;this.Cf=Nh;
this.C7=Da;this.Gq=GH;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.Hj;},_className:"Core::DragEvent"};D.GD={CK:function(AE,
aClip,aOffset,Ay,aBlend){},GetClipping:function(){var A;var I=D.AW.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Fz=AG;var J;for(J=this.Ar;!!J&&!((J.F&
0x200)===0x200);J=J.Ar)if(((J.F&0x1)===0x1))Fz=B.wC(Fz,J.GetClipping());I=B.wC(I
,Fz);}return I;},AQ:function(Cg,CG){var A;var HU=this.F;if((!!this.H&&((this.F&0x80001
)===0x80001))&&((CG&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.AW.AQ.call(
this,Cg,CG);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cg&0x80000)===0x80000))&&!((
HU&0x80000)===0x80000))this.H.Ac(this.GetClipping());},O:function(C){var A;if(B.
aaY(C,this.M))return;var E3=[(A=this.M)[2]-A[0],A[3]-A[1]];var Jz=[C[2]-C[0],C[3
]-C[1]];var Gg=!B.aaX(E3,Jz);var Cy=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(Cy,AI)&&!Gg){var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400
)===0x400)){var tmp=((J.F&0x100)===0x100);J.IG(Cy,tmp);}J=J.Ar;}}if((Gg&&(E3[0]>
0))&&(E3[1]>0)){var AA=this.M;var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((
J.F&0x400)===0x400)){if(!!J.AH&&(J.AH.Fv!==this))J.AH=null;if(!J.AH&&(J.C8!==0x14
))J.GR(AA,this);}J=J.Ar;}}D.AW.O.call(this,C);if(!!this.H&&Gg){this.F=this.F|0x1000;
if(!((this.H.F&0x2000)===0x2000)){this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cq],
this);}}},_Init:function(aArg){D.AW._Init.call(this,aArg);this.__proto__=D.GD;this.
F=0x203;},_className:"Core::Outline"};D.I2={IM:null,IL:null,Fc:null,Ew:null,AM:0
,BM:0,AD:0,Cf:0,B0:0,D1:B.wf,DB:B.wf,Cr:B.wf,LV:8,JT:1,Down:false,Eu:false,C4:false
,Jn:false,Kt:0,CK:function(AE,aClip,aOffset,Ay,aBlend){},Bp:function(Av){var A;var
At=(D.FF.isPrototypeOf(Av)?Av:null);var CZ=(D.Hj.isPrototypeOf(Av)?Av:null);var HQ=
this.Eu;var G5;var Gd;var KN;var Eo;var Kl;if(!At&&!CZ)return null;G5=(!!At&&At.
Down)&&!At.B0;Gd=(!!At&&At.Down)&&(At.B0>0);KN=(!!At&&At.Down)&&(At.B0>this.Kt);
Eo=!!At&&!At.Down;Kl=!!CZ;if(G5)this.Kt=((A=(At.C4?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;
if(G5){var JB=0;var GQ;this.AM=this.AM|(1<<At.BM);for(GQ=this.AM&4095;GQ>0;GQ=GQ>>
1)if(!!(GQ&1))JB=JB+1;if(JB===1)this.AM=(this.AM|16777216)|(4096<<At.BM);}if(Eo&&(
this.AM<16777216)){var E6=this.Go();var BV=null;if(!!E6){var NM=(!!this.Ad?this.
Ad:this.H);BV=E6.E$(B.abh(HE,At.C7),At.BM,At.Cf,null,NM,0x0);}if(!!BV){var G;for(
G=0;G<10;G++)if(!!(this.AM&(1<<G)))BV.BU.Bp(B._NewObject(D.FF,0).InitializeDown(
G,At.Cr,At.Cf,AI,true,At.C7));for(G=0;G<10;G++)if(!!(this.AM&(1<<G)))BV.BU.Bp(B.
_NewObject(D.FF,0).InitializeUp(G,At.Cr,At.Cr,0,At.Cf,AI,false,At.C7,At.C7));}}if(
Eo)this.AM=(this.AM&~(1<<At.BM))|33554432;if(KN&&(this.AM<16777216))this.AM=this.
AM|67108864;if(Eo&&At.C4)this.AM=this.AM|67108864;if(Eo&&!(this.AM&16777215))this.
AM=0;if(Gd&&(this.AM>=67108864)){var E6=this.Go();if(!!E6)E6.LU(null,null,this,0x0
);}if((Gd&&!!(this.AM&16777216))&&!!(this.AM&33554432)){Gd=false;Eo=true;}if(!!At&&
!(this.AM&(4096<<At.BM)))return this;if(!!CZ&&!(this.AM&(4096<<CZ.BM)))return this;
if(Eo&&!(this.AM&16777216))return this;if(((G5||Kl)||Gd)&&((this.AM<16777216)||(
this.AM>=33554432)))return this;if(Eo)this.AM=this.AM&3758100479;if(Eo&&!(this.AM&
16777215))this.AM=0;if(!!At){this.Down=G5||Gd;this.Eu=this.Iz(At.Cr);this.DB=At.
DB;this.Cr=At.Cr;this.D1=AI;this.B0=At.B0;this.Cf=At.Cf;this.C4=At.C4;this.BM=At.
BM;this.AD=At.AD;if(At.Down&&!At.B0)HQ=false;}if(!!CZ){this.Down=true;this.Eu=this.
Iz(CZ.Cr);this.DB=CZ.DB;this.Cr=CZ.Cr;this.D1=CZ.D1;this.B0=CZ.B0;this.Cf=CZ.Cf;
this.BM=CZ.BM;this.C4=false;this.AD=CZ.AD;}var Jm=this.Down;if((!!At&&this.Down)&&
!this.B0)(A=this.Ew)?A[1].call(A[0],this):null;if((this.Down&&this.Eu)&&!HQ){this.
Jn=true;(A=this.IL)?A[1].call(A[0],this):null;}if(this.Jn&&(((Jm&&!this.Eu)&&HQ)||((
!Jm&&this.Eu)&&HQ))){this.Jn=false;(A=this.IM)?A[1].call(A[0],this):null;}if(!!At&&
!Jm)(A=this.Fc)?A[1].call(A[0],this):null;return this;},E$:function(Ag,N,Ch,Fi,Ee
,F_){var A;if(!!Fi&&(Fi!==this))return null;if((Ch<1)||(Ch>this.JT))return null;
if(this.AM>=33554432)return null;if((this.AM>=16777216)&&!(this.AM&(4096<<N)))return null;
if(this.La()){var I=B.lb(Ag,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var EE=B.aaI(Ag);var Cy=AI;if(EE[0]<I[0])Cy=[I[0]-EE[0],Cy[1]];if(EE[0]>=I[2])Cy=[(
I[2]-EE[0])-1,Cy[1]];if(EE[1]<I[1])Cy=[Cy[0],I[1]-EE[1]];if(EE[1]>=I[3])Cy=[Cy[0
],(I[3]-EE[1])-1];return B._NewObject(D.Ic,0).Initialize(this,Cy);}}else{var AL=
B.abi(9,B.wf,null);var G;AL.Set(0,B.aaI(Ag));AL.Set(1,AL.Get(0));AL.Set(2,AL.Get(
0));AL.Set(3,AL.Get(0));AL.Set(4,AL.Get(0));AL.Set(1,[Ag[0],AL.Get(1)[1]]);AL.Set(
2,[AL.Get(2)[0],Ag[1]]);AL.Set(3,[Ag[2],AL.Get(3)[1]]);AL.Set(4,[AL.Get(4)[0],Ag[
3]]);AL.Set(5,Ag.slice(0,2));AL.Set(6,[Ag[2],Ag[1]]);AL.Set(7,[Ag[0],Ag[3]]);AL.
Set(8,Ag.slice(2,4));for(G=0;G<9;G=G+1)if(this.Iz(AL.Get(G)))return B._NewObject(
D.Ic,0).Initialize(this,B.abe(AL.Get(G),AL.Get(0)));}return null;},LG:function(C
){if(C<1)C=1;this.LV=C;},LA:function(C){if(C<1)C=1;this.JT=C;},BN:function(C){if(
C)this.AQ(0x100000,0x0);else this.AQ(0x0,0x100000);},_Init:function(aArg){D.GE._Init.
call(this,aArg);this.__proto__=D.I2;this.F=0x10011B;},_Mark:function(E){var A;D.
GE._Mark.call(this,E);if((A=this.IM)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.IL)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fc)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Ew)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);},_className:"Core::SimpleTouchHandler"};D.FN={Ar:null,Fc:null,Ew:null,Fx:0,AD:
0,J1:0,Fa:148,AZ:0,Au:0,BR:true,Down:false,I0:false,AU:function(aArg){var A;var Ft=(
D.Am.isPrototypeOf(A=this.L)?A:null);if(!Ft)throw new Error(I$);this.Ar=Ft.HT;Ft.
HT=this;},Bp:function(Av){var A;if(!!Av&&Av.Lc(this.Fa)){this.Down=Av.Down;this.
AZ=Av.AZ;this.Au=Av.Au;this.AD=Av.AD;if(Av.Down){this.J1=this.Fx;this.I0=this.Fx>
0;if(!this.I0)(A=this.Ew)?A[1].call(A[0],this):null;this.Fx=this.Fx+1;return true;
}if(!Av.Down){this.I0=this.Fx>1;this.J1=this.Fx-1;this.Fx=0;(A=this.Fc)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FN;this.AU(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Fc)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ew)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Ic={BU:
null,Gj:0,D1:B.wf,Initialize:function(K,aOffset){this.BU=K;this.D1=aOffset;this.
Gj=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Ic;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.BU)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Hp={Fv:null,B6:B.wg,AA:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Hp;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Fv)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Hq={G4:B.wf,G3:B.wf
,G2:B.wf,G1:B.wf,_Init:function(aArg){D.Hp._Init.call(this,aArg);this.__proto__=
D.Hq;},_className:"Core::LayoutQuadContext"};D.D8={resource:null,Di:function(){this.
resource=null;},AU:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.D8;this.AU(aArg);B.h7++;},_Done:function(){this.Di();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FT:null,timer:null,AD:0,Period:1000,Hh:0,BR:false,Di:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},HY:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},GB:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BR)this.HY(this.Hh,C);},Ht:function(C){if(C<0)C=0;if(C===this.
Hh)return;this.Hh=C;if(this.BR)this.HY(C,this.Period);},BN:function(C){if(C===this.
BR)return;this.BR=C;if(C)this.HY(this.Hh,this.Period);else this.HY(0,0);this.AD=
this.Hm();},Hm:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AD=this.Hm();if(!this.Period
)this.BN(false);(A=this.FT)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.Di();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FT)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.ON={OO:0x1,NZ:0x2,N_:0x4,OL:
0x8,BR:0x10,OF:0x20,N$:0x40,Oj:0x80,N9:0x100,Oe:0x200,N8:0x400,Os:0x800,J9:0x1000
,OM:0x2000,Op:0x4000,Oq:0x8000,N5:0x10000,Oo:0x20000,OC:0x40000,N6:0x80000,Or:0x100000
,N4:0x200000};D.C8={Ot:0x1,Ou:0x2,NV:0x4,NW:0x8,NX:0x10,NU:0x20};D.Ob={Ol:0,OI:1
,N1:2,Of:3,Ow:4,OJ:5,OK:6,N2:7,N3:8,Oh:9,Og:10,Oy:11,Ox:12};D.KeyCode={NoKey:0,Ok:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Ov={OS:0x1,OP:0x2,OQ:0x4,OR:0x8,Oi:
0x10,Oa:0x20};
D._Init=function(){D.GE.__proto__=D.BU;D.AW.__proto__=D.BU;D.Am.__proto__=D.AW;D.
Root.__proto__=D.Am;D.KeyEvent.__proto__=D.Event;D.Ib.__proto__=D.Event;D.FF.__proto__=
D.Event;D.Hj.__proto__=D.Event;D.GD.__proto__=D.AW;D.I2.__proto__=D.GE;D.Hq.__proto__=
D.Hp;};D._ReInit=function(){};D.Cv=function(E){};return D;})();

/* Embedded Wizard */