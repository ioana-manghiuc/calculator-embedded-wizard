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
DI=[340,590];var Ed="No view to restack";var Ee="View is not in this group";var Fg=
"No view to remove";var I8="No view to add";var I9="View already in a group";var
I_="Recursive invalidate during active update cycle.";var GF=[-8,-8,9,9];var HF=[
0,0,1,1];var I$="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.BU={Ar:null,Ad:null,H:null,AH:null,F:0x103,C_:0,C8:0x14,GR:function(X,HH){},CP:
function(C){if(this.C_===C)return;this.C_=C;if(!!this.H){var Er=this.Ar;var B2=0;
while(!!Er&&(C>Er.C_)){Er=Er.Ar;B2=B2+1;}Er=this.Ad;while(!!Er&&(C<Er.C_)){Er=Er.
Ad;B2=B2-1;}if(!!B2)this.H.LS(this,B2);}},IP:function(C){var A;var B2=C^this.C8;
if(!B2)return;this.C8=C;if(!!this.AH&&!((this.F&0x400)===0x400)){this.H.F=this.H.
F|0x5000;B.pe([A=this.H,A.Cp],this);this.H.Ac([0,0,(A=this.H.M)[2]-A[0],A[3]-A[1
]]);}if(!!this.AH&&((this.F&0x400)===0x400)){this.AH.Fv.F=this.AH.Fv.F|0x1000;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},Gp:function(){var Aa=this.H;while(
!!Aa){var E6=(D.Root.isPrototypeOf(Aa)?Aa:null);if(!!E6)return E6;Aa=Aa.H;}return null;
},CL:function(AE,aClip,aOffset,Ay,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bo:function(Av){return null;},E$:function(Ag,N,Cg,Fi,Ef,F_){return null;},He:
function(Ag){return Ag;},Hf:function(X,CH){return AI;},IG:function(aOffset,HG){}
,GetExtent:function(){return AG;},AR:function(Cf,CG){var A;if(((this.F&0x200)===
0x200))Cf=Cf&~0x400;var JA=(this.F&~CG)|Cf;var Db=JA^this.F;this.F=JA;if(!!this.
H&&!!(Db&0x14)){var Ko=((this.F&0x14)===0x14);if(Ko&&!this.H.CN)this.H.FR(this);
if(!Ko&&(this.H.CN===this))this.H.FR(this.H.JO(this,0x14));}if(!!this.H&&!!(Db&0x403
))this.H.Ac(this.GetClipping());if(((!!this.AH&&!!this.H)&&((JA&0x400)===0x400))&&((
Db&0x1)===0x1)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp
],this);}if(!!this.H&&((Db&0x400)===0x400)){this.AH=null;this.F=this.F|0x800;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}if(((((Db&0x100000)===0x100000)&&((
CG&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AR(0x0,0x10);if(((((Db&0x100000)===0x100000)&&((Cf&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.H)&&((this.H.F&0x10)===0x10))))this.AR(0x10,0x0);if(((((Db&0x200000
)===0x200000)&&((CG&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AR(0x10,0x0);if((((((Db&0x200000)===0x200000)&&((Cf&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
H&&!((this.H.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.H)&&(null!==
this))))this.AR(0x0,0x10);},_Init:function(aArg){this.__proto__=D.BU;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ad)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.H)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AH)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::View"};D.GE={Bx:B.wf,BT:B.
wf,Bw:B.wf,BS:B.wf,GR:function(X,HH){var Z=B._NewObject(D.Hq,0);this.AH=null;Z.B5=
this.GetExtent();Z.AA=X;Z.Fv=HH;Z.G1=this.BS;Z.G2=this.Bw;Z.G3=this.BT;Z.G4=this.
Bx;this.AH=Z;},Hf:function(X,CH){var A;var Aq=this.C8;var Z=(D.Hq.isPrototypeOf(
A=this.AH)?A:null);var P=Z.B5[0];var Q=Z.B5[1];var S=Z.B5[2];var T=Z.B5[3];var B4=[
X[2]-X[0],X[3]-X[1]];var AC=S-P;var AB=T-Q;if(!CH){var C3=[(A=Z.AA)[2]-A[0],A[3]-
A[1]];P=P-Z.AA[0];Q=Q-Z.AA[1];if(C3[0]!==B4[0]){var A6=((Aq&0x4)===0x4);var A7=((
Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(!A6&&(Dy||!A7))P=((P*B4[0])/C3[0])|0;if(
!A7&&(Dy||!A6)){S=S-Z.AA[0];S=((S*B4[0])/C3[0])|0;S=S-B4[0];}else S=S-Z.AA[2];P=
P+X[0];S=S+X[2];if(!Dy){if(A6&&!A7)S=P+AC;else if(!A6&&A7)P=S-AC;else{P=P+((((S-
P)-AC)/2)|0);S=P+AC;}}}else{S=S-Z.AA[2];P=P+X[0];S=S+X[2];}if(C3[1]!==B4[1]){var
A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2)===0x2);if(!A8&&(
Dz||!A5))Q=((Q*B4[1])/C3[1])|0;if(!A5&&(Dz||!A8)){T=T-Z.AA[1];T=((T*B4[1])/C3[1]
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
)-1;AB=(T-Q)-1;var Ek=Z.B5[0];var El=Z.B5[1];var DM=(Z.B5[2]-Ek)-1;var DL=(Z.B5[
3]-El)-1;if(!DM)DM=1;if(!DL)DL=1;if(((this.F&0x100)===0x100)){this.BS=[P+((((Z.G1[
0]-Ek)*AC)/DM)|0),Q+((((Z.G1[1]-El)*AB)/DL)|0)];this.Bw=[P+((((Z.G2[0]-Ek)*AC)/DM
)|0),Q+((((Z.G2[1]-El)*AB)/DL)|0)];this.BT=[P+((((Z.G3[0]-Ek)*AC)/DM)|0),Q+((((Z.
G3[1]-El)*AB)/DL)|0)];this.Bx=[P+((((Z.G4[0]-Ek)*AC)/DM)|0),Q+((((Z.G4[1]-El)*AB
)/DL)|0)];}else{this.IR([P+((((Z.G1[0]-Ek)*AC)/DM)|0),Q+((((Z.G1[1]-El)*AB)/DL)|
0)]);this.IS([P+((((Z.G2[0]-Ek)*AC)/DM)|0),Q+((((Z.G2[1]-El)*AB)/DL)|0)]);this.IT([
P+((((Z.G3[0]-Ek)*AC)/DM)|0),Q+((((Z.G3[1]-El)*AB)/DL)|0)]);this.IU([P+((((Z.G4[
0]-Ek)*AC)/DM)|0),Q+((((Z.G4[1]-El)*AB)/DL)|0)]);this.AH=Z;}return[AC+1,AB+1];},
IG:function(aOffset,HG){if(HG){this.BS=B.abf(this.BS,aOffset);this.Bw=B.abf(this.
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
this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},IT:function(C){var A;if(B.
aaX(C,this.BT))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AH=null;this.BT=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},IS:function(
C){var A;if(B.aaX(C,this.Bw))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.GetClipping());this.AH=null;this.Bw=C;if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this
);}},IR:function(C){var A;if(B.aaX(C,this.BS))return;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.GetClipping());this.AH=null;this.BS=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400)
)&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.
pe([A=this.H,A.Cp],this);}},Iz:function(Fn){var AL=B.abi(4,B.wf,null);var G=0;var
AP=3;var Jt=false;var Ju=false;AL.Set(0,this.BS);AL.Set(1,this.Bw);AL.Set(2,this.
BT);AL.Set(3,this.Bx);while(G<4){var KP=AL.Get(G)[0];var H5=AL.Get(G)[1];var NQ=
AL.Get(AP)[0];var JI=AL.Get(AP)[1];if(((H5>Fn[1])!==(JI>Fn[1]))||((H5<Fn[1])!==(
JI<Fn[1]))){var KQ=((((NQ-KP)*(Fn[1]-H5))/(JI-H5))|0)+KP;if(Fn[0]>KQ)Jt=!Jt;if(Fn[
0]<KQ)Ju=!Ju;}AP=G;G=G+1;}return Jt||Ju;},K$:function(){return((((this.BS[0]===this.
Bx[0])&&(this.Bw[0]===this.BT[0]))&&(this.BS[1]===this.Bw[1]))&&(this.BT[1]===this.
Bx[1]))||((((this.BS[0]===this.Bw[0])&&(this.BT[0]===this.Bx[0]))&&(this.BS[1]===
this.Bx[1]))&&(this.Bw[1]===this.BT[1]));},_Init:function(aArg){D.BU._Init.call(
this,aArg);this.__proto__=D.GE;},_className:"Core::QuadView"};D.AW={M:B.wg,GR:function(
X,HH){var Z=B._NewObject(D.Hp,0);Z.B5=this.M;Z.AA=X;Z.Fv=HH;this.AH=Z;},Hf:function(
X,CH){var A;var Aq=this.C8;var Z=this.AH;var P=Z.B5[0];var Q=Z.B5[1];var S=Z.B5[
2];var T=Z.B5[3];var B4=[X[2]-X[0],X[3]-X[1]];var AC=S-P;var AB=T-Q;if(!CH){var C3=[(
A=Z.AA)[2]-A[0],A[3]-A[1]];P=P-Z.AA[0];Q=Q-Z.AA[1];if(C3[0]!==B4[0]){var A6=((Aq&
0x4)===0x4);var A7=((Aq&0x8)===0x8);var Dy=((Aq&0x1)===0x1);if(!A6&&(Dy||!A7))P=((
P*B4[0])/C3[0])|0;if(!A7&&(Dy||!A6)){S=S-Z.AA[0];S=((S*B4[0])/C3[0])|0;S=S-B4[0];
}else S=S-Z.AA[2];P=P+X[0];S=S+X[2];if(!Dy){if(A6&&!A7)S=P+AC;else if(!A6&&A7)P=
S-AC;else{P=P+((((S-P)-AC)/2)|0);S=P+AC;}}}else{S=S-Z.AA[2];P=P+X[0];S=S+X[2];}if(
C3[1]!==B4[1]){var A8=((Aq&0x10)===0x10);var A5=((Aq&0x20)===0x20);var Dz=((Aq&0x2
)===0x2);if(!A8&&(Dz||!A5))Q=((Q*B4[1])/C3[1])|0;if(!A5&&(Dz||!A8)){T=T-Z.AA[1];
T=((T*B4[1])/C3[1])|0;T=T-B4[1];}else T=T-Z.AA[3];Q=Q+X[1];T=T+X[3];if(!Dz){if(A8&&
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
S-P,T-Q];},IG:function(aOffset,HG){if(HG)this.M=B.abh(this.M,aOffset);else this.
O(B.abh(this.M,aOffset));},GetExtent:function(){return this.M;},O:function(C){var
A;if(B.aaY(C,this.M))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AH=null;this.M=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],this);}},_Init:function(
aArg){D.BU._Init.call(this,aArg);this.__proto__=D.AW;},_className:"Core::RectView"
};D.Ai={Bg:null,BL:null,HU:null,CN:null,FU:255,GM:0,GP:0,GO:0,GN:0,AN:function(aArg
){this.CC();},CL:function(AE,aClip,aOffset,Ay,aBlend){var A;Ay=((Ay+1)*this.FU)>>
8;aBlend=aBlend&&((this.F&0x2)===0x2);this.No(AE,aClip,B.abf(aOffset,this.M.slice(
0,2)),Ay,aBlend);},GetClipping:function(){var A;var I=this.M;I=[].concat(I[0]-this.
GN,I.slice(1,4));I=B.abP(I,I[1]-this.GP);I=B.abN(I,I[2]+this.GO);I=[].concat(I.slice(
0,3),I[3]+this.GM);if(((this.F&0x80000)===0x80000)){var Fz=AG;var J;for(J=this.Bg;
!!J;J=J.Ar)if(((J.F&0x1)===0x1))Fz=B.wC(Fz,J.GetClipping());I=B.wC(I,B.abh(Fz,this.
M.slice(0,2)));}return I;},E$:function(Ag,N,Cg,Fi,Ef,F_){var A;var J=this.BL;var
Fs=null;var Y=AG;var Cj=null;if(((A=B.lb(Ag,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ag=B.abg(Ag,this.M.slice(0,2));if(!!Ef){J=Ef;while(!!J&&(J.H!==this))J=J.H;}while(
!!J){if(((J.F&0x400)===0x400)&&!Cj){Cj=J.Ad;while(!!Cj&&!((Cj.F&0x200)===0x200))
Cj=Cj.Ad;if(!!Cj)Y=B.lb(Ag,Cj.GetExtent());else Y=AG;}if(Cj===J){Cj=null;Y=AG;}if((
!!Fi&&!!(D.Ai.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var B5=J.GetExtent();var HO=Fi;var Fr=null;if(HO===J)HO=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(B5,Y))[0]>=A[2])||(A[1]>=A[3])))Fr=
J.E$(Y,N,Cg,HO,Ef,F_);}else if(!(((A=B.lb(B5,Ag))[0]>=A[2])||(A[1]>=A[3]))||(Fi===
J))Fr=J.E$(Ag,N,Cg,HO,Ef,F_);J=J.Ad;if(!!Fr){if(!Fs||((Fr.Gk<Fs.Gk)&&(Fr.Gk>=0))
)Fs=Fr;if(!Fr.Gk)J=null;}}else J=J.Ad;Ef=null;}return Fs;},He:function(Ag){var A;
var CS;var J=this.Bg;var Fp=AG;var G0=true;var result=(Ag=CS=B.abg(Ag,this.M.slice(
0,2)),CS);while(!!J){if(((J.F&0x200)===0x200)){var Gf=(D.GD.isPrototypeOf(J)?J:null
);Fp=B.lb(Ag,Gf.M);G0=((Gf.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(G0){var Y=B.lb(J.GetClipping(),Fp);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))result=
B.wC(result,J.He(Y));}}else{var Y=B.lb(J.GetClipping(),Ag);if(!((Y[0]>=Y[2])||(Y[
1]>=Y[3])))result=B.wC(result,J.He(Y));}}J=J.Ar;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},AR:function(Cf,CG){var A;var HV=this.F;if((!!this.H&&((this.
F&0x80001)===0x80001))&&((CG&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.
AW.AR.call(this,Cf,CG);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cf&0x80000)===0x80000
))&&!((HV&0x80000)===0x80000))this.H.Ac(this.GetClipping());var Db=this.F^HV;if(
!!this.CN&&((Db&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CN.AR(0x40,0x0);else
this.CN.AR(0x0,0x40);}if(((Db&0x10)===0x10)){var J;for(J=this.Bg;!!J;J=J.Ar)if((((
J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000)===0x10000)||(
null===J)))J.AR(Cf&0x10,CG&0x10);}if(!!Db){this.F=this.F|0x8000;B.pe([this,this.
H4],this);}},O:function(C){var A;if(B.aaY(C,this.M))return;var E3=[(A=this.M)[2]-
A[0],A[3]-A[1]];var Jz=[C[2]-C[0],C[3]-C[1]];var Gg=!B.aaX(E3,Jz);D.AW.O.call(this
,C);if((Gg&&(E3[0]>0))&&(E3[1]>0)){var AA=[].concat(AI,E3);var J=this.Bg;while(!
!J){if((!J.AH&&(J.C8!==0x14))&&!((J.F&0x400)===0x400))J.GR(AA,null);J=J.Ar;}}if(
Gg){this.F=this.F|0x5000;B.pe([this,this.H4],this);}},KF:function(Av){var Kr=(D.
KeyEvent.isPrototypeOf(Av)?Av:null);var Dc=this.HU;if(!Kr)return null;while(!!Dc&&(
!Dc.BR||!Dc.Bo(Kr)))Dc=Dc.Ar;return Dc;},No:function(AE,aClip,aOffset,Ay,aBlend){
var A;var J=this.Bg;var Fp=AG;var G0=true;this.K1(AE,aClip,aOffset,Ay,aBlend);while(
!!J){if(((J.F&0x200)===0x200)){var Gf=(D.GD.isPrototypeOf(J)?J:null);G0=((Gf.F&0x1
)===0x1);Fp=aClip;if(!((Gf.F&0x80000)===0x80000))Fp=B.lb(Fp,B.abh(Gf.M,aOffset));
}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===0x400)){if(G0){var Y=B.lb(B.abh(J.GetClipping(
),aOffset),Fp);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])))J.CL(AE,Y,aOffset,Ay,aBlend);}}else{
var Y=B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((Y[0]>=Y[2])||(Y[1]>=Y[3])
))J.CL(AE,Y,aOffset,Ay,aBlend);}}J=J.Ar;}this.K4(AE,aClip,aOffset,Ay,aBlend);},ND:
function(){var A;var Jr=((this.F&0x1000)===0x1000);var Em=[0,0,(A=this.M)[2]-A[0
],A[3]-A[1]];var DN=false;var Gc=AG;var Jp=AG;var J=this.BL;var Cj=null;while(!!
J){if(((J.F&0x800)===0x800)){DN=true;J.F=J.F&~0x800;}if(DN&&((J.F&0x200)===0x200
))DN=false;J=J.Ad;}DN=false;J=this.Bg;if(Jr){this.F=this.F&~0x1000;Jr=!((Em[0]>=
Em[2])||(Em[1]>=Em[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400
)){if(!!J.AH&&(J.AH.Fv!==Cj))J.AH=null;if((!J.AH&&DN)&&(J.C8!==0x14))J.GR(Jp,Cj);
}if(!!J.AH){if(Jr&&!((J.F&0x400)===0x400))J.Hf(Em,0);if(DN&&((J.F&0x400)===0x400
))J.Hf(Jp,0);}if(((J.F&0x200)===0x200)){DN=((J.F&0x1000)===0x1000);Cj=(D.GD.isPrototypeOf(
J)?J:null);if(DN){J.F=J.F&~0x1000;Gc=Cj.M;Jp=Gc;DN=!((Gc[0]>=Gc[2])||(Gc[1]>=Gc[
3]));}if(DN)this.Ac(Cj.M);}J=J.Ar;}this.F=this.F&~0x2000;this.J8([Em[2]-Em[0],Em[
3]-Em[1]]);},Cp:function(AV){B.pe([this,this.H4],this);},H4:function(AV){var A;var
NO=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.ND();}if(((this.F&0x8000)===0x8000)||NO){this.F=this.F&~0x8000;this.I6(this.
F);}},FR:function(C){var A;if(!!C&&(C.H!==this))throw new Error(CF);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.CN)return;
if(!!this.CN)this.CN.AR(0x0,0x60);this.CN=C;if(!!C){if(((this.F&0x40)===0x40))C.
AR(0x60,0x0);else C.AR(0x20,0x0);}},IQ:function(C){var A;if(C>255)C=255;if(C<0)C=
0;if(C===this.FU)return;this.FU=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
GetClipping());},Nd:function(NP){this.IQ(NP);},Ff:function(C){if(C)this.AR(0x1,0x0
);else this.AR(0x0,0x1);},ExtendClipping:function(Fk,Fl,Fm,Fj){var A;var GL=this.
M;var Ch=GL;if(Fk<0)Fk=0;if(Fk>255)Fk=255;if(Fl<0)Fl=0;if(Fl>255)Fl=255;if(Fm<0)
Fm=0;if(Fm>255)Fm=255;if(Fj<0)Fj=0;if(Fj>255)Fj=255;Ch=[].concat(Ch[0]-(Math.max(
Fk,this.GN)&0xFF),Ch.slice(1,4));Ch=B.abN(Ch,Ch[2]+(Math.max(Fl,this.GO)&0xFF));
Ch=B.abP(Ch,Ch[1]-(Math.max(Fm,this.GP)&0xFF));Ch=[].concat(Ch.slice(0,3),Ch[3]+(
Math.max(Fj,this.GM)&0xFF));if(Fk!==this.GN){if((!!this.H&&((this.F&0x1)===0x1))&&
!((this.F&0x80000)===0x80000)){var I=Ch;I=B.abN(I,GL[0]);this.H.Ac(I);}this.GN=Fk&
0xFF;}if(Fl!==this.GO){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===
0x80000)){var I=Ch;I=[].concat(GL[2],I.slice(1,4));this.H.Ac(I);}this.GO=Fl&0xFF;
}if(Fm!==this.GP){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000
)){var I=Ch;I=[].concat(I.slice(0,3),GL[1]);this.H.Ac(I);}this.GP=Fm&0xFF;}if(Fj
!==this.GM){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){
var I=Ch;I=B.abP(I,GL[3]);this.H.Ac(I);}this.GM=Fj&0xFF;}},K4:function(AE,aClip,
aOffset,Ay,aBlend){},K1:function(AE,aClip,aOffset,Ay,aBlend){},GetMaximalSize:function(
){return DI;},GetMinimalSize:function(){return AI;},DispatchEvent:function(Av){var
A;var J=this.CN;var Aa=(D.Ai.isPrototypeOf(J)?J:null);var AY=null;if(!!J&&((((J.
F&0x10000)===0x10000)||((J.F&0x40000)===0x40000))||((J.F&0x20000)===0x20000))){J=
null;Aa=null;}if(!!Aa)AY=Aa.DispatchEvent(Av);else if(!!J)AY=J.Bo(Av);if(!AY)AY=
this.Bo(Av);if(!AY)AY=this.KF(Av);return AY;},BroadcastEventAtPosition:function(
Av,Kd,aFilter){var A;var J=this.BL;var AY=null;while(!!J&&!AY){if((!aFilter||((A=
aFilter)&&((J.F&A)===A)))&&B.wa(J.GetExtent(),Kd)){var Aa=(D.Ai.isPrototypeOf(J)?
J:null);if(!!Aa)AY=Aa.BroadcastEventAtPosition(Av,B.abe(Kd,Aa.M.slice(0,2)),aFilter
);else AY=J.Bo(Av);}J=J.Ad;}if(!AY)AY=this.Bo(Av);return AY;},BroadcastEvent:function(
Av,aFilter){var A;var J=this.BL;var AY=null;while(!!J&&!AY){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var Aa=(D.Ai.isPrototypeOf(J)?J:null);if(!!Aa)AY=Aa.BroadcastEvent(
Av,aFilter);else AY=J.Bo(Av);}J=J.Ad;}if(!AY)AY=this.Bo(Av);if(!AY)AY=this.KF(Av
);return AY;},J8:function(aSize){},I6:function(HJ){},CC:function(){this.F=this.F|
0x8000;B.pe([this,this.H4],this);},Ac:function(Ag){var A;var Aa=this;while(!!Aa&&
!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){if(!Aa.H&&(Aa!==this)){Aa.Ac(Ag);return;}if(!((
Aa.F&0x1)===0x1))return;var I=Aa.M;Ag=B.abh(Ag,I.slice(0,2));if(!((Aa.F&0x80000)===
0x80000)){I=[].concat(I[0]-Aa.GN,I.slice(1,4));I=B.abP(I,I[1]-Aa.GP);I=B.abN(I,I[
2]+Aa.GO);I=[].concat(I.slice(0,3),I[3]+Aa.GM);Ag=B.lb(Ag,I);}Aa=Aa.H;}},JO:function(
K,aFilter){var A;if(!K||(K.H!==this))return null;var E2=K.Ar;var E5=K.Ad;var GX=
0x10000;if(((aFilter&0x10000)===0x10000))GX=0x0;while(!!E2||!!E5){if((!!E2&&(!aFilter||((
A=aFilter)&&((E2.F&A)===A))))&&(!GX||!((A=GX)&&((E2.F&A)===A))))return E2;if((!!
E5&&(!aFilter||((A=aFilter)&&((E5.F&A)===A))))&&(!GX||!((A=GX)&&((E5.F&A)===A)))
)return E5;if(!!E2)E2=E2.Ar;if(!!E5)E5=E5.Ad;}return null;},LS:function(K,CU){var
A;if(!K)throw new Error(Ed);if(K.H!==this)throw new Error(Ee);var Eh=K;var A9=K;
var FB=K.C_;while(((CU>0)&&!!Eh.Ar)&&(Eh.Ar.C_<=FB)){Eh=Eh.Ar;CU=CU-1;}while(((CU<
0)&&!!A9.Ad)&&(A9.Ad.C_>=FB)){A9=A9.Ad;CU=CU+1;}if((Eh===K)&&(A9===K))return;if(((
K.F&0x401)===0x401)){if(!!K.Ad&&!!K.AH)K.Ad.F=K.Ad.F|0x800;K.F=K.F|0x800;this.F=
this.F|0x4000;B.pe([this,this.Cp],this);}if(((K.F&0x200)===0x200)){if(!!K.Ad)K.Ad.
F=K.Ad.F|0x800;K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cp],this);}if(
!!K.Ad)K.Ad.Ar=K.Ar;if(!!K.Ar)K.Ar.Ad=K.Ad;if(this.Bg===K)this.Bg=K.Ar;if(this.BL===
K)this.BL=K.Ad;if(Eh!==K){K.Ar=Eh.Ar;K.Ad=Eh;Eh.Ar=K;if(!!K.Ar)K.Ar.Ad=K;}if(A9!==
K){K.Ar=A9;K.Ad=A9.Ad;A9.Ad=K;if(!!K.Ad)K.Ad.Ar=K;}if(!K.Ar)this.BL=K;if(!K.Ad)this.
Bg=K;if(((K.F&0x1)===0x1))this.Ac(K.GetClipping());},FY:function(K){var A;if(!K)
throw new Error(Fg);if(K.H!==this)throw new Error(Ee);if((((K.F&0x401)===0x401)&&
!!K.Ad)&&!!K.AH){K.Ad.F=K.Ad.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cp],this
);}if(((K.F&0x200)===0x200)){if(!!K.Ad)K.Ad.F=K.Ad.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.Cp],this);}K.AH=null;if(this.CN===K)this.FR(this.JO(K,0x14));if(
!!K.Ad)K.Ad.Ar=K.Ar;if(!!K.Ar)K.Ar.Ad=K.Ad;if(this.Bg===K)this.Bg=K.Ar;if(this.BL===
K)this.BL=K.Ad;K.H=null;K.Ar=null;K.Ad=null;if((!((K.F&0x10)===0x10)&&((K.F&0x100000
)===0x100000))&&!((this.F&0x80)===0x80))K.AR(0x10,0x0);if(((K.F&0x1)===0x1))this.
Ac(K.GetClipping());},U:function(K,CU){var A;if(!K)throw new Error(I8);if(!!K.H)
throw new Error(I9);var A9=null;var FB=K.C_;if(((CU<0)&&!!this.BL)&&(this.BL.C_>=
FB)){A9=this.BL;CU=CU+1;}while((((CU<0)&&!!A9)&&!!A9.Ad)&&(A9.Ad.C_>=FB)){A9=A9.
Ad;CU=CU+1;}if((!A9&&!!this.BL)&&(this.BL.C_>FB))A9=this.BL;while((!!A9&&!!A9.Ad
)&&(A9.Ad.C_>FB))A9=A9.Ad;if(!A9){K.H=this;K.Ad=this.BL;if(!!this.BL)this.BL.Ar=
K;if(!this.Bg)this.Bg=K;this.BL=K;}else{K.H=this;K.Ad=A9.Ad;K.Ar=A9;A9.Ad=K;if(!
!K.Ad)K.Ad.Ar=K;else this.Bg=K;}if(((K.F&0x1)===0x1))this.Ac(K.GetClipping());if(((
K.F&0x80)===0x80)&&(B.aam().K9()===K))K.AR(0x10,0x0);else if(!((this.F&0x10)===0x10
)&&((K.F&0x200010)===0x200010))K.AR(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((
K.F&0x10)===0x10))&&((K.F&0x100000)===0x100000))K.AR(0x10,0x0);if(((!this.CN&&((
K.F&0x4)===0x4))&&((K.F&0x10)===0x10))&&!((K.F&0x10000)===0x10000))this.FR(K);if(((
K.F&0x401)===0x401)){K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Cp],this
);}if(((K.F&0x200)===0x200)){K.F=K.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Cp],this);}},Lf:function(){return this.FU;},_Init:function(aArg){D.AW._Init.call(
this,aArg);this.__proto__=D.Ai;this.F=0x10001F;this.AN(aArg);},_Mark:function(E){
var A;D.AW._Mark.call(this,E);if((A=this.Bg)&&(A._cycle!=E))A._Mark(A._cycle=E);
if((A=this.BL)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.HU)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.CN)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:
"Core::Group"};D.Root={Cm:null,AJ:B.abi(10,null,null),F$:null,Ej:null,Hb:0,AT:0,
BC:B.abi(10,0,null),HN:B.abi(10,B.wg,null),CY:B.abi(10,0,null),DK:B.abi(10,B.wf,
null),Gb:B.abi(10,0,null),Ei:B.abi(10,B.wf,null),CX:B.abi(10,B.wf,null),Ci:B.abi(
10,B.wf,null),Dw:B.abi(10,B.wf,null),Ap:0,HQ:0,HP:0,BP:B.abi(4,0,null),A$:B.abi(
4,B.wg,null),A_:0,GU:0,Ge:0,Js:true,AN:function(aArg){if(!!!this.L){var obj=this;
B.abD(obj);}},Gp:function(){return this;},CL:function(AE,aClip,aOffset,Ay,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AE.Io(aClip
,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);D.Ai.CL.call(this,AE,aClip,aOffset,Ay,aBlend);},AR:function(Cf
,CG){var A;D.Ai.AR.call(this,Cf,CG);if(!this.H&&(((Cf&0x1)===0x1)||((CG&0x1)===0x1
)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.H&&(((Cf&0x2)===0x2)||((
CG&0x2)===0x2)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},FR:function(C){if((
C!==null)||!C)D.Ai.FR.call(this,C);},IQ:function(C){var A;var Nt=this.FU;D.Ai.IQ.
call(this,C);if(((Nt!==this.FU)&&!this.H)&&((this.F&0x1)===0x1))this.Ac([0,0,(A=
this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Av){if(!!Av){Av.Gt=!!this.AT;
if(!!this.AT)Av.AD=this.AT;}var AY;AY=D.Ai.DispatchEvent.call(this,Av);this.AT=0;
return AY;},BroadcastEvent:function(Av,aFilter){if(!!Av){Av.Gt=!!this.AT;if(!!this.
AT)Av.AD=this.AT;}var AY=D.Ai.BroadcastEvent.call(this,Av,aFilter);this.AT=0;return AY;
},Ac:function(Ag){var A;if(this.Hb>0)throw new Error(I_);var fullScreenUpdate=false;
fullScreenUpdate=B.m7;if(fullScreenUpdate)Ag=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];
if(!!this.H){D.Ai.Ac.call(this,Ag);return;}Ag=B.lb(B.abh(Ag,this.M.slice(0,2)),this.
M);if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var G;for(G=0;G<this.A_;G=G+1)if(!(((
A=B.lb(this.A$.Get(G),Ag))[0]>=A[2])||(A[1]>=A[3]))){this.A$.Set(G,B.wC(this.A$.
Get(G),Ag));this.BP.Set(G,B.aaH(this.A$.Get(G)));return;}if(this.A_<3){this.A$.Set(
this.A_,Ag);this.BP.Set(this.A_,B.aaH(Ag));this.A_=this.A_+1;return;}var AP;var Cl;
var GT=0;var GW=0;var Kf=2147483647;this.A$.Set(this.A_,Ag);this.BP.Set(this.A_,
B.aaH(Ag));for(AP=0;AP<=this.A_;AP=AP+1)for(Cl=AP+1;Cl<=this.A_;Cl=Cl+1){var H3=
B.aaH(B.wC(this.A$.Get(AP),this.A$.Get(Cl)));var KE=((H3<<8)/(this.BP.Get(AP)+this.
BP.Get(Cl)))|0;if(KE<Kf){Kf=KE;GT=AP;GW=Cl;}}this.A$.Set(GT,B.wC(this.A$.Get(GT)
,this.A$.Get(GW)));this.BP.Set(GT,B.aaH(this.A$.Get(GT)));if(GW!==this.A_){this.
A$.Set(GW,this.A$.Get(this.A_));this.BP.Set(GW,this.BP.Get(this.A_));}},Nm:function(
){var BD=B._NewObject(D.Hj,0);BD.Gt=!!this.AT;if(!!this.AT)BD.AD=this.AT;return BD;
},Fq:function(){var BD=B._NewObject(D.FF,0);BD.Gt=!!this.AT;if(!!this.AT)BD.AD=this.
AT;return BD;},Ga:function(){var BD=B._NewObject(D.Ib,0);BD.Gt=!!this.AT;if(!!this.
AT)BD.AD=this.AT;return BD;},Nn:function(AV){var G;var Fs=false;for(G=0;G<10;G=G+
1)if(!!this.AJ.Get(G)){var Bh=this.Ci.Get(G);var Aa=this.AJ.Get(G).H;while(!!Aa&&(
Aa!==this)){Bh=B.abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(this.AJ.Get(G)!==this
)){var tmp=this.AJ.Get(G);this.Ap=G;this.AJ.Set(G,null);tmp.Bo(this.Fq().InitializeUp(
G,this.Ei.Get(G),this.DK.Get(G),this.CY.Get(G),this.BC.Get(G)+1,this.CX.Get(G),false
,this.Ci.Get(G),this.Dw.Get(G)));this.BroadcastEvent(this.Ga().InitializeUp(G,this.
BC.Get(G)+1,false,tmp,this.Ci.Get(G)),0x18);}else{this.CY.Set(G,(this.Ej.AD-this.
Gb.Get(G))|0);if(this.CY.Get(G)<10)this.CY.Set(G,10);this.Ap=G;this.AJ.Get(G).Bo(
this.Fq().InitializeHold(G,Bh,this.DK.Get(G),this.CY.Get(G),this.BC.Get(G)+1,this.
CX.Get(G),this.Ci.Get(G),this.Dw.Get(G)));Fs=true;}}if(!Fs)this.Ej.BN(false);},GetFPS:
function(){var ticksCount=0;var Kp=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.HQ&&(ticksCount>this.HQ))Kp=((this.HP*1000)/((ticksCount-this.HQ)|0))|0;this.
HP=0;this.HQ=ticksCount;return Kp;},Update:function(){var A;if(!this.F$)this.F$=
B._NewObject(B.Graphics.Canvas,0);this.F$.JV([(A=this.M)[2]-A[0],A[3]-A[1]]);this.
F$.Update();return this.UpdateGE20(this.F$);},UpdateGE20:function(AE){if(!this.BeginUpdate(
))return AG;var DR=this.UpdateCanvas(AE,AI);this.EndUpdate();return DR;},EndUpdate:
function(){if(this.A_>0){this.HP=this.HP+1;this.A_=0;}},UpdateCanvas:function(AE
,aOffset){var A;var DR=AG;var Nh=[].concat(aOffset,B.abf(AE.FrameSize,aOffset));
var G;var AP=this.A_;this.Hb=this.Hb+1;AE.Ft=this;for(G=0;(G<AP)&&(G<4);G=G+1)if(
this.BP.Get(G)>0){this.CL(AE,B.abg(this.A$.Get(G),aOffset),[-aOffset[0],-aOffset[
1]],255,true);DR=B.wC(DR,B.lb(Nh,this.A$.Get(G)));}else AP=AP+1;AE.Ft=null;this.
Hb=this.Hb-1;if(!((DR[0]>=DR[2])||(DR[1]>=DR[3])))return B.abg(DR,aOffset);else return DR;
},GetUpdateRegion:function(HI){var G;var AP=this.A_;if(HI<0)return AG;for(G=0;(G<
AP)&&(G<4);G=G+1)if(!this.BP.Get(G)){AP=AP+1;HI=HI+1;}else if(G===HI)return this.
A$.Get(G);return AG;},BeginUpdate:function(){var A;var G;if(!!this.A_&&!B.aaY(this.
A$.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[1]])){var KO=B.abi(3,B.wg,null);var KN=
this.A_;for(G=0;G<KN;G++)KO.Set(G,this.A$.Get(G));for(G=0;G<KN;G++){var KG=B.abh(
KO.Get(G),this.M.slice(0,2));var KH=this.He(KG);if(!B.aaY(KG,KH))this.Ac(B.abg(KH
,this.M.slice(0,2)));}}var AP;var Cl;for(AP=0;AP<(this.A_-1);AP++)if(this.BP.Get(
AP)>0)for(Cl=AP+1;Cl<this.A_;Cl++)if(this.BP.Get(Cl)>0){var H3=B.aaH(B.wC(this.A$.
Get(AP),this.A$.Get(Cl)));if(((H3-this.BP.Get(AP))-this.BP.Get(Cl))<0){this.A$.Set(
AP,B.wC(this.A$.Get(AP),this.A$.Get(Cl)));this.BP.Set(AP,H3);this.BP.Set(Cl,0);}
}for(G=this.A_-1;G>=0;G--)if(!this.BP.Get(G))this.A_=this.A_-1;return this.A_;},
DoesNeedUpdate:function(){if(this.A_>0)return true;return false;},Initialize:function(
aSize){this.O([].concat(AI,aSize));if(this.Js)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.M);return this;},SetRootFocus:function(Jd){if(Jd===this.Js)return false;
this.Js=Jd;if(!Jd)this.AR(0x0,0x40);else this.AR(0x40,0x0);return true;},SetUserInputTimestamp:
function(Ng){this.AT=Ng;},DriveKeyboardHitting:function(Be,GG,C$){var A;var JF=!
!this.Cm;if(!!this.Cm&&((!C$||(this.GU!==Be))||(this.Ge!==GG))){var BD=null;var J=(
D.BU.isPrototypeOf(A=this.Cm)?A:null);var Dc=(D.FN.isPrototypeOf(A=this.Cm)?A:null
);if(!!this.GU)BD=B._NewObject(D.KeyEvent,0).Initialize(this.GU,false);if(this.Ge
!==0x00)BD=B._NewObject(D.KeyEvent,0).Initialize2(this.Ge,false);if(!!Dc)Dc.Bo(BD
);else if(!!J)J.Bo(BD);this.GU=0;this.Ge=0x00;this.Cm=null;}if(!!this.Cm){var BD=
null;var J=(D.BU.isPrototypeOf(A=this.Cm)?A:null);var Dc=(D.FN.isPrototypeOf(A=this.
Cm)?A:null);if(!!Be)BD=B._NewObject(D.KeyEvent,0).Initialize(Be,true);if(this.Ge
!==0x00)BD=B._NewObject(D.KeyEvent,0).Initialize2(GG,true);if(!!Dc)Dc.Bo(BD);else
if(!!J)J.Bo(BD);}if(!this.Cm&&C$){if(!!Be)this.Cm=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize(Be,true));if(GG!==0x00)this.Cm=this.DispatchEvent(B._NewObject(
D.KeyEvent,0).Initialize2(GG,true));if(!(D.FN.isPrototypeOf(A=this.Cm)?A:null)&&
!(D.BU.isPrototypeOf(A=this.Cm)?A:null))this.Cm=null;this.GU=Be;this.Ge=GG;JF=JF||
!!this.Cm;}this.AT=0;return JF;},DriveCursorMovement:function(By){return this.DriveMultiTouchMovement(
this.Ap,By);},DriveMultiTouchMovement:function(N,By){if((N<0)||(N>9)){this.AT=0;
return false;}var Cx=B.abe(By,this.Ci.Get(N));this.Ci.Set(N,By);if(!this.AJ.Get(
N)||B.aaX(Cx,AI)){this.AT=0;return false;}var Bh=By;var Aa=this.AJ.Get(N).H;while(
!!Aa&&(Aa!==this)){Bh=B.abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(this.AJ.Get(N)
!==this)){var tmp=this.AJ.Get(N);this.Ap=N;this.AJ.Set(N,null);tmp.Bo(this.Fq().
InitializeUp(N,this.Ei.Get(N),this.DK.Get(N),this.CY.Get(N),this.BC.Get(N)+1,this.
CX.Get(N),false,this.Ci.Get(N),this.Dw.Get(N)));this.BroadcastEvent(this.Ga().InitializeUp(
N,this.BC.Get(N)+1,false,tmp,By),0x18);}else{this.Ei.Set(N,Bh);this.Ap=N;this.AJ.
Get(N).Bo(this.Nm().Initialize(N,Bh,this.DK.Get(N),Cx,this.CY.Get(N),this.BC.Get(
N)+1,this.CX.Get(N),By,this.Dw.Get(N)));}this.AT=0;return true;},DriveCursorHitting:
function(C$,N,By){return this.DriveMultiTouchHitting(C$,N,By);},DriveMultiTouchHitting:
function(C$,N,By){if((N<0)||(N>9)){this.AT=0;return false;}var ticksCount=this.AT;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var NI=this.AT;this.DriveMultiTouchMovement(
N,By);By=this.Ci.Get(N);this.AT=NI;if(C$)this.Dw.Set(N,By);if(C$&&!this.AJ.Get(N
)){var BV;var Bh=By;if(B.wa(this.HN.Get(N),By)&&((ticksCount-this.Gb.Get(N))<=250
))this.BC.Set(N,this.BC.Get(N)+1);else this.BC.Set(N,0);this.HN.Set(N,B.abh(GF,By
));this.Gb.Set(N,ticksCount);BV=this.E$(B.abh(GF,By),N,this.BC.Get(N)+1,null,null
,0x0);if(!!BV){this.BroadcastEvent(this.Ga().InitializeDown(N,this.BC.Get(N)+1,false
,BV.BU,By),0x18);this.AJ.Set(N,BV.BU);this.CX.Set(N,BV.D2);}else{this.AJ.Set(N,null
);this.CX.Set(N,AI);this.AT=0;return false;}var Aa=BV.BU.H;while(!!Aa&&(Aa!==this
)){Bh=B.abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}this.DK.Set(N,Bh);this.Ei.Set(N,Bh);this.
CY.Set(N,0);this.Ej.BN(true);this.Ap=N;this.AJ.Get(N).Bo(this.Fq().InitializeDown(
N,Bh,this.BC.Get(N)+1,this.CX.Get(N),false,By));this.AT=0;return true;}if(!C$&&!
!this.AJ.Get(N)){var Bh=By;var Aa=this.AJ.Get(N).H;while(!!Aa&&(Aa!==this)){Bh=B.
abe(Bh,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa)Bh=this.Ei.Get(N);this.Ap=N;var tmp=this.
AJ.Get(N);this.AJ.Set(N,null);tmp.Bo(this.Fq().InitializeUp(N,Bh,this.DK.Get(N),
this.CY.Get(N),this.BC.Get(N)+1,this.CX.Get(N),false,By,this.Dw.Get(N)));this.BroadcastEvent(
this.Ga().InitializeUp(N,this.BC.Get(N)+1,false,tmp,By),0x18);this.AT=0;return true;
}this.AT=0;return false;},LT:function(DJ,Kc,Ef,F_){if(DJ===this)DJ=null;if(!this.
AJ.Get(this.Ap))return;var BV;BV=this.E$(B.abh(GF,this.Ci.Get(this.Ap)),this.Ap,
1,DJ,Ef,F_);if(!!BV&&(this.AJ.Get(this.Ap)!==BV.BU))this.JM(BV.BU,BV.D2);if(!BV&&(
this.AJ.Get(this.Ap)!==Kc))this.JM(Kc,AI);},JM:function(DJ,CT){if(!this.AJ.Get(this.
Ap)||(this.AJ.Get(this.Ap)===DJ))return;var tmp=this.AJ.Get(this.Ap);this.AJ.Set(
this.Ap,null);tmp.Bo(this.Fq().InitializeUp(this.Ap,this.Ei.Get(this.Ap),this.DK.
Get(this.Ap),this.CY.Get(this.Ap),this.BC.Get(this.Ap)+1,this.CX.Get(this.Ap),true
,this.Ci.Get(this.Ap),this.Dw.Get(this.Ap)));this.BroadcastEvent(this.Ga().InitializeUp(
this.Ap,this.BC.Get(this.Ap)+1,true,tmp,this.Ci.Get(this.Ap)),0x18);var Bh=this.
Ci.Get(this.Ap);var Aa=null;if(!!DJ)Aa=DJ.H;while(!!Aa&&(Aa!==this)){Bh=B.abe(Bh
,Aa.M.slice(0,2));Aa=Aa.H;}if(!Aa&&(DJ!==this)){this.AJ.Set(this.Ap,null);return;
}this.BroadcastEvent(this.Ga().InitializeDown(this.Ap,this.BC.Get(this.Ap)+1,true
,DJ,this.Ci.Get(this.Ap)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.AJ.Set(this.Ap,DJ);this.CX.Set(this.Ap,CT);this.DK.Set(this.Ap,Bh
);this.Ei.Set(this.Ap,Bh);this.BC.Set(this.Ap,0);this.CY.Set(this.Ap,0);this.Gb.
Set(this.Ap,ticksCount);this.Dw.Set(this.Ap,this.Ci.Get(this.Ap));this.AJ.Get(this.
Ap).Bo(this.Fq().InitializeDown(this.Ap,Bh,this.BC.Get(this.Ap)+1,this.CX.Get(this.
Ap),true,this.Dw.Get(this.Ap)));},K9:function(){return null;},_Init:function(aArg
){D.Ai._Init.call(this,aArg);D.Timer._Init.call(this.Ej={L:this},0);(this.AJ=[]).
__proto__=D.Root.AJ;(this.BC=[]).__proto__=D.Root.BC;(this.HN=[]).__proto__=D.Root.
HN;(this.CY=[]).__proto__=D.Root.CY;(this.DK=[]).__proto__=D.Root.DK;(this.Gb=[]
).__proto__=D.Root.Gb;(this.Ei=[]).__proto__=D.Root.Ei;(this.CX=[]).__proto__=D.
Root.CX;(this.Ci=[]).__proto__=D.Root.Ci;(this.Dw=[]).__proto__=D.Root.Dw;(this.
BP=[]).__proto__=D.Root.BP;(this.A$=[]).__proto__=D.Root.A$;this.__proto__=D.Root;
this.F=0x10007F;this.Ej.GB(10);this.Ej.FT=[this,this.Nn];this.AN(aArg);},_Done:function(
){this.__proto__=D.Ai;this.Ej._Done();D.Ai._Done.call(this);},_ReInit:function(){
D.Ai._ReInit.call(this);this.Ej._ReInit();},_Mark:function(E){var A;D.Ai._Mark.call(
this,E);if((A=this.Cm)&&(A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.AJ,E);if((A=
this.F$)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ej)._cycle!=E)A._Mark(A._cycle=
E);},_className:"Core::Root"};D.Event={AD:0,Gt:false,AN:function(aArg){this.AD=this.
Hm();},Hm:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=D.Event;this.AN(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((
A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={AZ:0,Au:0,Down:false,Initialize2:function(Be,C$){this.
AZ=0;this.Au=Be;this.Down=C$;if((Be>=0x30)&&(Be<=0x39))this.AZ=(10+Be)-48;if((Be>=
0x41)&&(Be<=0x5A))this.AZ=(105+Be)-65;if((Be>=0x61)&&(Be<=0x7A))this.AZ=(105+Be)-
97;if(Be===0x20)this.AZ=131;if(!this.AZ)switch(Be){case 0x2B:this.AZ=132;break;case
0x2D:this.AZ=133;break;case 0x2A:this.AZ=134;break;case 0x2F:this.AZ=135;break;case
0x3D:this.AZ=136;break;case 0x2E:this.AZ=137;break;case 0x2C:this.AZ=138;break;case
0x3A:this.AZ=139;break;case 0x3B:this.AZ=140;break;default:;}return this;},Initialize:
function(Be,C$){this.AZ=Be;this.Down=C$;this.Au=0x00;var Ji=Be-10;var Jh=Be-105;
if((Ji>=0)&&(Ji<=9))this.Au=(48+Ji)&0xFFFF;if((Jh>=0)&&(Jh<=25))this.Au=(65+Jh)&
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
};D.Ib={I4:null,C7:B.wf,Ce:0,BM:0,Down:false,C4:false,InitializeUp:function(N,Cg
,Fh,Jf,Da){this.Down=false;this.BM=N;this.Ce=Cg;this.C7=Da;this.I4=Jf;this.C4=Fh;
return this;},InitializeDown:function(N,Cg,Fh,Jf,Da){this.Down=true;this.BM=N;this.
Ce=Cg;this.C7=Da;this.I4=Jf;this.C4=Fh;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Ib;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.I4)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.FF={Gr:B.wf,C7:B.wf,Ce:0,BZ:0,DB:B.wf,Cq:B.wf,BM:0,Down:false,C4:false,InitializeHold:
function(N,ED,GI,GJ,Cg,CT,Da,GH){this.Down=true;this.BM=N;this.Cq=B.abf(ED,CT);this.
DB=B.abf(GI,CT);this.BZ=GJ;this.Ce=Cg;this.C7=Da;this.Gr=GH;return this;},InitializeUp:
function(N,ED,GI,GJ,Cg,CT,Fh,Da,GH){this.Down=false;this.BM=N;this.Cq=B.abf(ED,CT
);this.DB=B.abf(GI,CT);this.BZ=GJ;this.Ce=Cg;this.C4=Fh;this.C7=Da;this.Gr=GH;return this;
},InitializeDown:function(N,ED,Cg,CT,Fh,Da){this.Down=true;this.BM=N;this.Cq=B.abf(
ED,CT);this.DB=B.abf(ED,CT);this.BZ=0;this.Ce=Cg;this.C4=Fh;this.C7=Da;this.Gr=Da;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.FF;},_className:"Core::CursorEvent"};D.Hj={Gr:B.wf,C7:B.wf,Ce:0,BZ:0,D2:B.wf,DB:
B.wf,Cq:B.wf,BM:0,Initialize:function(N,ED,GI,aOffset,GJ,Nf,CT,Da,GH){this.BM=N;
this.Cq=B.abf(ED,CT);this.DB=B.abf(GI,CT);this.D2=aOffset;this.BZ=GJ;this.Ce=Nf;
this.C7=Da;this.Gr=GH;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.Hj;},_className:"Core::DragEvent"};D.GD={CL:function(AE,
aClip,aOffset,Ay,aBlend){},GetClipping:function(){var A;var I=D.AW.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Fz=AG;var J;for(J=this.Ar;!!J&&!((J.F&
0x200)===0x200);J=J.Ar)if(((J.F&0x1)===0x1))Fz=B.wC(Fz,J.GetClipping());I=B.wC(I
,Fz);}return I;},AR:function(Cf,CG){var A;var HV=this.F;if((!!this.H&&((this.F&0x80001
)===0x80001))&&((CG&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.AW.AR.call(
this,Cf,CG);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cf&0x80000)===0x80000))&&!((
HV&0x80000)===0x80000))this.H.Ac(this.GetClipping());},O:function(C){var A;if(B.
aaY(C,this.M))return;var E3=[(A=this.M)[2]-A[0],A[3]-A[1]];var Jz=[C[2]-C[0],C[3
]-C[1]];var Gg=!B.aaX(E3,Jz);var Cx=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(Cx,AI)&&!Gg){var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400
)===0x400)){var tmp=((J.F&0x100)===0x100);J.IG(Cx,tmp);}J=J.Ar;}}if((Gg&&(E3[0]>
0))&&(E3[1]>0)){var AA=this.M;var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((
J.F&0x400)===0x400)){if(!!J.AH&&(J.AH.Fv!==this))J.AH=null;if(!J.AH&&(J.C8!==0x14
))J.GR(AA,this);}J=J.Ar;}}D.AW.O.call(this,C);if(!!this.H&&Gg){this.F=this.F|0x1000;
if(!((this.H.F&0x2000)===0x2000)){this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Cp],
this);}}},_Init:function(aArg){D.AW._Init.call(this,aArg);this.__proto__=D.GD;this.
F=0x203;},_className:"Core::Outline"};D.I2={IM:null,IL:null,Fc:null,Ew:null,AM:0
,BM:0,AD:0,Ce:0,BZ:0,D2:B.wf,DB:B.wf,Cq:B.wf,LU:8,JT:1,Down:false,Eu:false,C4:false
,Jn:false,Ks:0,CL:function(AE,aClip,aOffset,Ay,aBlend){},Bo:function(Av){var A;var
At=(D.FF.isPrototypeOf(Av)?Av:null);var CZ=(D.Hj.isPrototypeOf(Av)?Av:null);var HR=
this.Eu;var G5;var Gd;var KM;var Ep;var Kk;if(!At&&!CZ)return null;G5=(!!At&&At.
Down)&&!At.BZ;Gd=(!!At&&At.Down)&&(At.BZ>0);KM=(!!At&&At.Down)&&(At.BZ>this.Ks);
Ep=!!At&&!At.Down;Kk=!!CZ;if(G5)this.Ks=((A=(At.C4?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;
if(G5){var JB=0;var GQ;this.AM=this.AM|(1<<At.BM);for(GQ=this.AM&4095;GQ>0;GQ=GQ>>
1)if(!!(GQ&1))JB=JB+1;if(JB===1)this.AM=(this.AM|16777216)|(4096<<At.BM);}if(Ep&&(
this.AM<16777216)){var E6=this.Gp();var BV=null;if(!!E6){var NK=(!!this.Ad?this.
Ad:this.H);BV=E6.E$(B.abh(HF,At.C7),At.BM,At.Ce,null,NK,0x0);}if(!!BV){var G;for(
G=0;G<10;G++)if(!!(this.AM&(1<<G)))BV.BU.Bo(B._NewObject(D.FF,0).InitializeDown(
G,At.Cq,At.Ce,AI,true,At.C7));for(G=0;G<10;G++)if(!!(this.AM&(1<<G)))BV.BU.Bo(B.
_NewObject(D.FF,0).InitializeUp(G,At.Cq,At.Cq,0,At.Ce,AI,false,At.C7,At.C7));}}if(
Ep)this.AM=(this.AM&~(1<<At.BM))|33554432;if(KM&&(this.AM<16777216))this.AM=this.
AM|67108864;if(Ep&&At.C4)this.AM=this.AM|67108864;if(Ep&&!(this.AM&16777215))this.
AM=0;if(Gd&&(this.AM>=67108864)){var E6=this.Gp();if(!!E6)E6.LT(null,null,this,0x0
);}if((Gd&&!!(this.AM&16777216))&&!!(this.AM&33554432)){Gd=false;Ep=true;}if(!!At&&
!(this.AM&(4096<<At.BM)))return this;if(!!CZ&&!(this.AM&(4096<<CZ.BM)))return this;
if(Ep&&!(this.AM&16777216))return this;if(((G5||Kk)||Gd)&&((this.AM<16777216)||(
this.AM>=33554432)))return this;if(Ep)this.AM=this.AM&3758100479;if(Ep&&!(this.AM&
16777215))this.AM=0;if(!!At){this.Down=G5||Gd;this.Eu=this.Iz(At.Cq);this.DB=At.
DB;this.Cq=At.Cq;this.D2=AI;this.BZ=At.BZ;this.Ce=At.Ce;this.C4=At.C4;this.BM=At.
BM;this.AD=At.AD;if(At.Down&&!At.BZ)HR=false;}if(!!CZ){this.Down=true;this.Eu=this.
Iz(CZ.Cq);this.DB=CZ.DB;this.Cq=CZ.Cq;this.D2=CZ.D2;this.BZ=CZ.BZ;this.Ce=CZ.Ce;
this.BM=CZ.BM;this.C4=false;this.AD=CZ.AD;}var Jm=this.Down;if((!!At&&this.Down)&&
!this.BZ)(A=this.Ew)?A[1].call(A[0],this):null;if((this.Down&&this.Eu)&&!HR){this.
Jn=true;(A=this.IL)?A[1].call(A[0],this):null;}if(this.Jn&&(((Jm&&!this.Eu)&&HR)||((
!Jm&&this.Eu)&&HR))){this.Jn=false;(A=this.IM)?A[1].call(A[0],this):null;}if(!!At&&
!Jm)(A=this.Fc)?A[1].call(A[0],this):null;return this;},E$:function(Ag,N,Cg,Fi,Ef
,F_){var A;if(!!Fi&&(Fi!==this))return null;if((Cg<1)||(Cg>this.JT))return null;
if(this.AM>=33554432)return null;if((this.AM>=16777216)&&!(this.AM&(4096<<N)))return null;
if(this.K$()){var I=B.lb(Ag,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var EE=B.aaI(Ag);var Cx=AI;if(EE[0]<I[0])Cx=[I[0]-EE[0],Cx[1]];if(EE[0]>=I[2])Cx=[(
I[2]-EE[0])-1,Cx[1]];if(EE[1]<I[1])Cx=[Cx[0],I[1]-EE[1]];if(EE[1]>=I[3])Cx=[Cx[0
],(I[3]-EE[1])-1];return B._NewObject(D.Ic,0).Initialize(this,Cx);}}else{var AL=
B.abi(9,B.wf,null);var G;AL.Set(0,B.aaI(Ag));AL.Set(1,AL.Get(0));AL.Set(2,AL.Get(
0));AL.Set(3,AL.Get(0));AL.Set(4,AL.Get(0));AL.Set(1,[Ag[0],AL.Get(1)[1]]);AL.Set(
2,[AL.Get(2)[0],Ag[1]]);AL.Set(3,[Ag[2],AL.Get(3)[1]]);AL.Set(4,[AL.Get(4)[0],Ag[
3]]);AL.Set(5,Ag.slice(0,2));AL.Set(6,[Ag[2],Ag[1]]);AL.Set(7,[Ag[0],Ag[3]]);AL.
Set(8,Ag.slice(2,4));for(G=0;G<9;G=G+1)if(this.Iz(AL.Get(G)))return B._NewObject(
D.Ic,0).Initialize(this,B.abe(AL.Get(G),AL.Get(0)));}return null;},LF:function(C
){if(C<1)C=1;this.LU=C;},Lz:function(C){if(C<1)C=1;this.JT=C;},BN:function(C){if(
C)this.AR(0x100000,0x0);else this.AR(0x0,0x100000);},_Init:function(aArg){D.GE._Init.
call(this,aArg);this.__proto__=D.I2;this.F=0x10011B;},_Mark:function(E){var A;D.
GE._Mark.call(this,E);if((A=this.IM)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.IL)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fc)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.Ew)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);},_className:"Core::SimpleTouchHandler"};D.FN={Ar:null,Fc:null,Ew:null,Fx:0,AD:
0,J1:0,Fa:148,AZ:0,Au:0,BR:true,Down:false,I0:false,AN:function(aArg){var A;var Ft=(
D.Ai.isPrototypeOf(A=this.L)?A:null);if(!Ft)throw new Error(I$);this.Ar=Ft.HU;Ft.
HU=this;},Bo:function(Av){var A;if(!!Av&&Av.Lb(this.Fa)){this.Down=Av.Down;this.
AZ=Av.AZ;this.Au=Av.Au;this.AD=Av.AD;if(Av.Down){this.J1=this.Fx;this.I0=this.Fx>
0;if(!this.I0)(A=this.Ew)?A[1].call(A[0],this):null;this.Fx=this.Fx+1;return true;
}if(!Av.Down){this.I0=this.Fx>1;this.J1=this.Fx-1;this.Fx=0;(A=this.Fc)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FN;this.AN(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Fc)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ew)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=
E);},L:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Ic={BU:
null,Gk:0,D2:B.wf,Initialize:function(K,aOffset){this.BU=K;this.D2=aOffset;this.
Gk=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Ic;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.BU)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Hp={Fv:null,B5:B.wg,AA:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Hp;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Fv)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Hq={G4:B.wf,G3:B.wf
,G2:B.wf,G1:B.wf,_Init:function(aArg){D.Hp._Init.call(this,aArg);this.__proto__=
D.Hq;},_className:"Core::LayoutQuadContext"};D.D9={resource:null,CK:function(){this.
resource=null;},AN:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.D9;this.AN(aArg);B.h7++;},_Done:function(){this.CK();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.L)&&(A._cycle
!=E))A._Mark(A._cycle=E);},L:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FT:null,timer:null,AD:0,Period:1000,Hh:0,BR:false,CK:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},HZ:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},GB:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BR)this.HZ(this.Hh,C);},Ht:function(C){if(C<0)C=0;if(C===this.
Hh)return;this.Hh=C;if(this.BR)this.HZ(C,this.Period);},BN:function(C){if(C===this.
BR)return;this.BR=C;if(C)this.HZ(this.Hh,this.Period);else this.HZ(0,0);this.AD=
this.Hm();},Hm:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AD=this.Hm();if(!this.Period
)this.BN(false);(A=this.FT)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.CK();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FT)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.L)&&(A._cycle!=E))A._Mark(A._cycle=E);},L:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.OM={ON:0x1,NY:0x2,N9:0x4,OK:
0x8,BR:0x10,OE:0x20,N_:0x40,Oi:0x80,N8:0x100,Od:0x200,N7:0x400,Or:0x800,J8:0x1000
,OL:0x2000,Oo:0x4000,Op:0x8000,N4:0x10000,On:0x20000,OB:0x40000,N5:0x80000,Oq:0x100000
,N3:0x200000};D.C8={Os:0x1,Ot:0x2,NU:0x4,NV:0x8,NW:0x10,NT:0x20};D.Oa={Oj:0,OH:1
,N0:2,Oe:3,Ov:4,OI:5,OJ:6,N1:7,N2:8,Og:9,Of:10,Ox:11,Ow:12};D.KeyCode={NoKey:0,Ok:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.Ou={OR:0x1,OO:0x2,OP:0x4,OQ:0x8,Oh:
0x10,N$:0x20};
D._Init=function(){D.GE.__proto__=D.BU;D.AW.__proto__=D.BU;D.Ai.__proto__=D.AW;D.
Root.__proto__=D.Ai;D.KeyEvent.__proto__=D.Event;D.Ib.__proto__=D.Event;D.FF.__proto__=
D.Event;D.Hj.__proto__=D.Event;D.GD.__proto__=D.AW;D.I2.__proto__=D.GE;D.Hq.__proto__=
D.Hp;};D._ReInit=function(){};D.Cu=function(E){};return D;})();

/* Embedded Wizard */