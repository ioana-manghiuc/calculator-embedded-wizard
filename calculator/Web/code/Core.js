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
var AH=[0,0];var AF=[0,0,0,0];var CG="The view does not belong to this group";var
DF=[340,590];var Ec="No view to restack";var Ed="View is not in this group";var EU=
"No view to remove";var Ja="No view to add";var Jb="View already in a group";var
Jc="Recursive invalidate during active update cycle.";var GK=[-8,-8,9,9];var HJ=[
0,0,1,1];var Jd="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
D.BT={Ar:null,Ad:null,H:null,AG:null,F:0x103,C9:0,C7:0x14,GW:function(W,HL){},CN:
function(C){if(this.C9===C)return;this.C9=C;if(!!this.H){var EJ=this.Ar;var B3=0;
while(!!EJ&&(C>EJ.C9)){EJ=EJ.Ar;B3=B3+1;}EJ=this.Ad;while(!!EJ&&(C<EJ.C9)){EJ=EJ.
Ad;B3=B3-1;}if(!!B3)this.H.L6(this,B3);}},IT:function(C){var A;var B3=C^this.C7;
if(!B3)return;this.C7=C;if(!!this.AG&&!((this.F&0x400)===0x400)){this.H.F=this.H.
F|0x5000;B.pe([A=this.H,A.Co],this);this.H.Ac([0,0,(A=this.H.M)[2]-A[0],A[3]-A[1
]]);}if(!!this.AG&&((this.F&0x400)===0x400)){this.AG.Fx.F=this.AG.Fx.F|0x1000;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],this);}},Gu:function(){var Z=this.H;while(
!!Z){var E9=(D.Root.isPrototypeOf(Z)?Z:null);if(!!E9)return E9;Z=Z.H;}return null;
},CK:function(AD,aClip,aOffset,Ay,aBlend){},GetClipping:function(){return this.GetExtent(
);},Br:function(Av){return null;},Fc:function(Ag,O,Ch,Fk,Ee,Gd){return null;},Hj:
function(Ag){return Ag;},Hk:function(W,CI){return AH;},IM:function(aOffset,HK){}
,GetExtent:function(){return AF;},AR:function(Cg,CH){var A;if(((this.F&0x200)===
0x200))Cg=Cg&~0x400;var JF=(this.F&~CH)|Cg;var Da=JF^this.F;this.F=JF;if(!!this.
H&&!!(Da&0x14)){var Kz=((this.F&0x14)===0x14);if(Kz&&!this.H.CM)this.H.FU(this);
if(!Kz&&(this.H.CM===this))this.H.FU(this.H.JU(this,0x14));}if(!!this.H&&!!(Da&0x403
))this.H.Ac(this.GetClipping());if(((!!this.AG&&!!this.H)&&((JF&0x400)===0x400))&&((
Da&0x1)===0x1)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co
],this);}if(!!this.H&&((Da&0x400)===0x400)){this.AG=null;this.F=this.F|0x800;this.
H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],this);}if(((((Da&0x100000)===0x100000)&&((
CH&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AR(0x0,0x10);if(((((Da&0x100000)===0x100000)&&((Cg&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.H)&&((this.H.F&0x10)===0x10))))this.AR(0x10,0x0);if(((((Da&0x200000
)===0x200000)&&((CH&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AR(0x10,0x0);if((((((Da&0x200000)===0x200000)&&((Cg&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
H&&!((this.H.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.H)&&(null!==
this))))this.AR(0x0,0x10);},_Init:function(aArg){this.__proto__=D.BT;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var
A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.Ad)&&(A._cycle!=E
))A._Mark(A._cycle=E);if((A=this.H)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.
AG)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=
E);},K:null,_cycle:0,_observers:null,_className:"Core::View"};D.GJ={Bz:B.wf,BS:B.
wf,By:B.wf,BR:B.wf,GW:function(W,HL){var Y=B._NewObject(D.Hu,0);this.AG=null;Y.B6=
this.GetExtent();Y.AA=W;Y.Fx=HL;Y.G6=this.BR;Y.G7=this.By;Y.G8=this.BS;Y.G9=this.
Bz;this.AG=Y;},Hk:function(W,CI){var A;var Aq=this.C7;var Y=(D.Hu.isPrototypeOf(
A=this.AG)?A:null);var Q=Y.B6[0];var R=Y.B6[1];var S=Y.B6[2];var T=Y.B6[3];var B5=[
W[2]-W[0],W[3]-W[1]];var AC=S-Q;var AB=T-R;if(!CI){var C1=[(A=Y.AA)[2]-A[0],A[3]-
A[1]];Q=Q-Y.AA[0];R=R-Y.AA[1];if(C1[0]!==B5[0]){var A9=((Aq&0x4)===0x4);var A_=((
Aq&0x8)===0x8);var Dv=((Aq&0x1)===0x1);if(!A9&&(Dv||!A_))Q=((Q*B5[0])/C1[0])|0;if(
!A_&&(Dv||!A9)){S=S-Y.AA[0];S=((S*B5[0])/C1[0])|0;S=S-B5[0];}else S=S-Y.AA[2];Q=
Q+W[0];S=S+W[2];if(!Dv){if(A9&&!A_)S=Q+AC;else if(!A9&&A_)Q=S-AC;else{Q=Q+((((S-
Q)-AC)/2)|0);S=Q+AC;}}}else{S=S-Y.AA[2];Q=Q+W[0];S=S+W[2];}if(C1[1]!==B5[1]){var
A$=((Aq&0x10)===0x10);var A8=((Aq&0x20)===0x20);var Dw=((Aq&0x2)===0x2);if(!A$&&(
Dw||!A8))R=((R*B5[1])/C1[1])|0;if(!A8&&(Dw||!A$)){T=T-Y.AA[1];T=((T*B5[1])/C1[1]
)|0;T=T-B5[1];}else T=T-Y.AA[3];R=R+W[1];T=T+W[3];if(!Dw){if(A$&&!A8)T=R+AB;else
if(!A$&&A8)R=T-AB;else{R=R+((((T-R)-AB)/2)|0);T=R+AB;}}}else{T=T-Y.AA[3];R=R+W[1
];T=T+W[3];}}else{switch(CI){case 3:{Q=W[0];S=Q+AC;}break;case 4:{S=W[2];Q=S-AC;
}break;case 1:{R=W[1];T=R+AB;}break;case 2:{T=W[3];R=T-AB;}break;default:;}if((CI===
3)||(CI===4)){var A$=((Aq&0x10)===0x10);var A8=((Aq&0x20)===0x20);var Dw=((Aq&0x2
)===0x2);if(Dw){R=W[1];T=W[3];}else if(A$&&!A8){R=W[1];T=R+AB;}else if(A8&&!A$){
T=W[3];R=T-AB;}else{R=W[1]+((((W[3]-W[1])-AB)/2)|0);T=R+AB;}}if((CI===1)||(CI===
2)){var A9=((Aq&0x4)===0x4);var A_=((Aq&0x8)===0x8);var Dv=((Aq&0x1)===0x1);if(Dv
){Q=W[0];S=W[2];}else if(A9&&!A_){Q=W[0];S=Q+AC;}else if(A_&&!A9){S=W[2];Q=S-AC;
}else{Q=W[0]+((((W[2]-W[0])-AC)/2)|0);S=Q+AC;}}}Y.isEmpty=(Q>=S)||(R>=T);AC=(S-Q
)-1;AB=(T-R)-1;var Ej=Y.B6[0];var Ek=Y.B6[1];var DJ=(Y.B6[2]-Ej)-1;var DI=(Y.B6[
3]-Ek)-1;if(!DJ)DJ=1;if(!DI)DI=1;if(((this.F&0x100)===0x100)){this.BR=[Q+((((Y.G6[
0]-Ej)*AC)/DJ)|0),R+((((Y.G6[1]-Ek)*AB)/DI)|0)];this.By=[Q+((((Y.G7[0]-Ej)*AC)/DJ
)|0),R+((((Y.G7[1]-Ek)*AB)/DI)|0)];this.BS=[Q+((((Y.G8[0]-Ej)*AC)/DJ)|0),R+((((Y.
G8[1]-Ek)*AB)/DI)|0)];this.Bz=[Q+((((Y.G9[0]-Ej)*AC)/DJ)|0),R+((((Y.G9[1]-Ek)*AB
)/DI)|0)];}else{this.IV([Q+((((Y.G6[0]-Ej)*AC)/DJ)|0),R+((((Y.G6[1]-Ek)*AB)/DI)|
0)]);this.IW([Q+((((Y.G7[0]-Ej)*AC)/DJ)|0),R+((((Y.G7[1]-Ek)*AB)/DI)|0)]);this.IX([
Q+((((Y.G8[0]-Ej)*AC)/DJ)|0),R+((((Y.G8[1]-Ek)*AB)/DI)|0)]);this.IY([Q+((((Y.G9[
0]-Ej)*AC)/DJ)|0),R+((((Y.G9[1]-Ek)*AB)/DI)|0)]);this.AG=Y;}return[AC+1,AB+1];},
IM:function(aOffset,HK){if(HK){this.BR=B.abf(this.BR,aOffset);this.By=B.abf(this.
By,aOffset);this.BS=B.abf(this.BS,aOffset);this.Bz=B.abf(this.Bz,aOffset);}else{
this.IV(B.abf(this.BR,aOffset));this.IW(B.abf(this.By,aOffset));this.IX(B.abf(this.
BS,aOffset));this.IY(B.abf(this.Bz,aOffset));}},GetExtent:function(){if(!!this.AG&&
this.AG.isEmpty)return AF;var Q=this.BR[0];var R=this.BR[1];var S=this.BS[0];var
T=this.BS[1];if((((this.Bz[0]!==Q)||(this.By[1]!==R))||(this.By[0]!==S))||(this.
Bz[1]!==T)){if(this.By[0]<Q)Q=this.By[0];if(this.BS[0]<Q)Q=this.BS[0];if(this.Bz[
0]<Q)Q=this.Bz[0];if(this.By[1]<R)R=this.By[1];if(this.BS[1]<R)R=this.BS[1];if(this.
Bz[1]<R)R=this.Bz[1];if(this.BR[0]>S)S=this.BR[0];if(this.By[0]>S)S=this.By[0];if(
this.Bz[0]>S)S=this.Bz[0];if(this.BR[1]>T)T=this.BR[1];if(this.By[1]>T)T=this.By[
1];if(this.Bz[1]>T)T=this.Bz[1];}else{var tmp;if(S<Q){tmp=Q;Q=S;S=tmp;}if(T<R){tmp=
R;R=T;T=tmp;}}return[Q,R,S+1,T+1];},IY:function(C){var A;if(B.aaX(C,this.Bz))return;
if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping());this.AG=null;this.
Bz=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.
H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],this);}},IX:function(C){var A;if(B.
aaX(C,this.BS))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AG=null;this.BS=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],this);}},IW:function(
C){var A;if(B.aaX(C,this.By))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(
this.GetClipping());this.AG=null;this.By=C;if(!!this.H&&((this.F&0x1)===0x1))this.
H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],this
);}},IV:function(C){var A;if(B.aaX(C,this.BR))return;if(!!this.H&&((this.F&0x1)===
0x1))this.H.Ac(this.GetClipping());this.AG=null;this.BR=C;if(!!this.H&&((this.F&
0x1)===0x1))this.H.Ac(this.GetClipping());if((!!this.H&&((this.F&0x400)===0x400)
)&&!((this.H.F&0x2000)===0x2000)){this.F=this.F|0x800;this.H.F=this.H.F|0x4000;B.
pe([A=this.H,A.Co],this);}},IF:function(Fp){var AK=B.abi(4,B.wf,null);var G=0;var
AQ=3;var Jx=false;var Jy=false;AK.Set(0,this.BR);AK.Set(1,this.By);AK.Set(2,this.
BS);AK.Set(3,this.Bz);while(G<4){var K0=AK.Get(G)[0];var H9=AK.Get(G)[1];var N1=
AK.Get(AQ)[0];var JO=AK.Get(AQ)[1];if(((H9>Fp[1])!==(JO>Fp[1]))||((H9<Fp[1])!==(
JO<Fp[1]))){var K1=((((N1-K0)*(Fp[1]-H9))/(JO-H9))|0)+K0;if(Fp[0]>K1)Jx=!Jx;if(Fp[
0]<K1)Jy=!Jy;}AQ=G;G=G+1;}return Jx||Jy;},Lk:function(){return((((this.BR[0]===this.
Bz[0])&&(this.By[0]===this.BS[0]))&&(this.BR[1]===this.By[1]))&&(this.BS[1]===this.
Bz[1]))||((((this.BR[0]===this.By[0])&&(this.BS[0]===this.Bz[0]))&&(this.BR[1]===
this.Bz[1]))&&(this.By[1]===this.BS[1]));},_Init:function(aArg){D.BT._Init.call(
this,aArg);this.__proto__=D.GJ;},_className:"Core::QuadView"};D.AY={M:B.wg,GW:function(
W,HL){var Y=B._NewObject(D.Ht,0);Y.B6=this.M;Y.AA=W;Y.Fx=HL;this.AG=Y;},Hk:function(
W,CI){var A;var Aq=this.C7;var Y=this.AG;var Q=Y.B6[0];var R=Y.B6[1];var S=Y.B6[
2];var T=Y.B6[3];var B5=[W[2]-W[0],W[3]-W[1]];var AC=S-Q;var AB=T-R;if(!CI){var C1=[(
A=Y.AA)[2]-A[0],A[3]-A[1]];Q=Q-Y.AA[0];R=R-Y.AA[1];if(C1[0]!==B5[0]){var A9=((Aq&
0x4)===0x4);var A_=((Aq&0x8)===0x8);var Dv=((Aq&0x1)===0x1);if(!A9&&(Dv||!A_))Q=((
Q*B5[0])/C1[0])|0;if(!A_&&(Dv||!A9)){S=S-Y.AA[0];S=((S*B5[0])/C1[0])|0;S=S-B5[0];
}else S=S-Y.AA[2];Q=Q+W[0];S=S+W[2];if(!Dv){if(A9&&!A_)S=Q+AC;else if(!A9&&A_)Q=
S-AC;else{Q=Q+((((S-Q)-AC)/2)|0);S=Q+AC;}}}else{S=S-Y.AA[2];Q=Q+W[0];S=S+W[2];}if(
C1[1]!==B5[1]){var A$=((Aq&0x10)===0x10);var A8=((Aq&0x20)===0x20);var Dw=((Aq&0x2
)===0x2);if(!A$&&(Dw||!A8))R=((R*B5[1])/C1[1])|0;if(!A8&&(Dw||!A$)){T=T-Y.AA[1];
T=((T*B5[1])/C1[1])|0;T=T-B5[1];}else T=T-Y.AA[3];R=R+W[1];T=T+W[3];if(!Dw){if(A$&&
!A8)T=R+AB;else if(!A$&&A8)R=T-AB;else{R=R+((((T-R)-AB)/2)|0);T=R+AB;}}}else{T=T-
Y.AA[3];R=R+W[1];T=T+W[3];}}else{switch(CI){case 3:{Q=W[0];S=Q+AC;}break;case 4:{
S=W[2];Q=S-AC;}break;case 1:{R=W[1];T=R+AB;}break;case 2:{T=W[3];R=T-AB;}break;default:;
}if((CI===3)||(CI===4)){var A$=((Aq&0x10)===0x10);var A8=((Aq&0x20)===0x20);var Dw=((
Aq&0x2)===0x2);if(Dw){R=W[1];T=W[3];}else if(A$&&!A8){R=W[1];T=R+AB;}else if(A8&&
!A$){T=W[3];R=T-AB;}else{R=W[1]+((((W[3]-W[1])-AB)/2)|0);T=R+AB;}}if((CI===1)||(
CI===2)){var A9=((Aq&0x4)===0x4);var A_=((Aq&0x8)===0x8);var Dv=((Aq&0x1)===0x1);
if(Dv){Q=W[0];S=W[2];}else if(A9&&!A_){Q=W[0];S=Q+AC;}else if(A_&&!A9){S=W[2];Q=
S-AC;}else{Q=W[0]+((((W[2]-W[0])-AC)/2)|0);S=Q+AC;}}}Y.isEmpty=(Q>=S)||(R>=T);if(((
this.F&0x100)===0x100))this.M=[Q,R,S,T];else{this.N([Q,R,S,T]);this.AG=Y;}return[
S-Q,T-R];},IM:function(aOffset,HK){if(HK)this.M=B.abh(this.M,aOffset);else this.
N(B.abh(this.M,aOffset));},GetExtent:function(){return this.M;},N:function(C){var
A;if(B.aaY(C,this.M))return;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));this.AG=null;this.M=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.GetClipping(
));if((!!this.H&&((this.F&0x400)===0x400))&&!((this.H.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],this);}},_Init:function(
aArg){D.BT._Init.call(this,aArg);this.__proto__=D.AY;},_className:"Core::RectView"
};D.Am={Bj:null,BN:null,HY:null,CM:null,FY:255,GR:0,GU:0,GT:0,GS:0,AV:function(aArg
){this.CD();},CK:function(AD,aClip,aOffset,Ay,aBlend){var A;Ay=((Ay+1)*this.FY)>>
8;aBlend=aBlend&&((this.F&0x2)===0x2);this.NC(AD,aClip,B.abf(aOffset,this.M.slice(
0,2)),Ay,aBlend);},GetClipping:function(){var A;var I=this.M;I=[].concat(I[0]-this.
GS,I.slice(1,4));I=B.abP(I,I[1]-this.GU);I=B.abN(I,I[2]+this.GT);I=[].concat(I.slice(
0,3),I[3]+this.GR);if(((this.F&0x80000)===0x80000)){var FB=AF;var J;for(J=this.Bj;
!!J;J=J.Ar)if(((J.F&0x1)===0x1))FB=B.wC(FB,J.GetClipping());I=B.wC(I,B.abh(FB,this.
M.slice(0,2)));}return I;},Fc:function(Ag,O,Ch,Fk,Ee,Gd){var A;var J=this.BN;var
Fu=null;var X=AF;var Ck=null;if(((A=B.lb(Ag,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ag=B.abg(Ag,this.M.slice(0,2));if(!!Ee){J=Ee;while(!!J&&(J.H!==this))J=J.H;}while(
!!J){if(((J.F&0x400)===0x400)&&!Ck){Ck=J.Ad;while(!!Ck&&!((Ck.F&0x200)===0x200))
Ck=Ck.Ad;if(!!Ck)X=B.lb(Ag,Ck.GetExtent());else X=AF;}if(Ck===J){Ck=null;X=AF;}if((
!!Fk&&!!(D.Am.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var B6=J.GetExtent();var HS=Fk;var Ft=null;if(HS===J)HS=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(B6,X))[0]>=A[2])||(A[1]>=A[3])))Ft=
J.Fc(X,O,Ch,HS,Ee,Gd);}else if(!(((A=B.lb(B6,Ag))[0]>=A[2])||(A[1]>=A[3]))||(Fk===
J))Ft=J.Fc(Ag,O,Ch,HS,Ee,Gd);J=J.Ad;if(!!Ft){if(!Fu||((Ft.Gp<Fu.Gp)&&(Ft.Gp>=0))
)Fu=Ft;if(!Ft.Gp)J=null;}}else J=J.Ad;Ee=null;}return Fu;},Hj:function(Ag){var A;
var Gb;var J=this.Bj;var Fr=AF;var G5=true;var result=(Ag=Gb=B.abg(Ag,this.M.slice(
0,2)),Gb);while(!!J){if(((J.F&0x200)===0x200)){var Gk=(D.GI.isPrototypeOf(J)?J:null
);Fr=B.lb(Ag,Gk.M);G5=((Gk.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(G5){var X=B.lb(J.GetClipping(),Fr);if(!((X[0]>=X[2])||(X[1]>=X[3])))result=
B.wC(result,J.Hj(X));}}else{var X=B.lb(J.GetClipping(),Ag);if(!((X[0]>=X[2])||(X[
1]>=X[3])))result=B.wC(result,J.Hj(X));}}J=J.Ar;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},AR:function(Cg,CH){var A;var HZ=this.F;if((!!this.H&&((this.
F&0x80001)===0x80001))&&((CH&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.
AY.AR.call(this,Cg,CH);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cg&0x80000)===0x80000
))&&!((HZ&0x80000)===0x80000))this.H.Ac(this.GetClipping());var Da=this.F^HZ;if(
!!this.CM&&((Da&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CM.AR(0x40,0x0);else
this.CM.AR(0x0,0x40);}if(((Da&0x10)===0x10)){var J;for(J=this.Bj;!!J;J=J.Ar)if((((
J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000)===0x10000)||(
null===J)))J.AR(Cg&0x10,CH&0x10);}if(!!Da){this.F=this.F|0x8000;B.pe([this,this.
H8],this);}},N:function(C){var A;if(B.aaY(C,this.M))return;var E6=[(A=this.M)[2]-
A[0],A[3]-A[1]];var JE=[C[2]-C[0],C[3]-C[1]];var Gl=!B.aaX(E6,JE);D.AY.N.call(this
,C);if((Gl&&(E6[0]>0))&&(E6[1]>0)){var AA=[].concat(AH,E6);var J=this.Bj;while(!
!J){if((!J.AG&&(J.C7!==0x14))&&!((J.F&0x400)===0x400))J.GW(AA,null);J=J.Ar;}}if(
Gl){this.F=this.F|0x5000;B.pe([this,this.H8],this);}},KQ:function(Av){var KC=(D.
KeyEvent.isPrototypeOf(Av)?Av:null);var Db=this.HY;if(!KC)return null;while(!!Db&&(
!Db.Cq||!Db.Br(KC)))Db=Db.Ar;return Db;},NC:function(AD,aClip,aOffset,Ay,aBlend){
var A;var J=this.Bj;var Fr=AF;var G5=true;this.La(AD,aClip,aOffset,Ay,aBlend);while(
!!J){if(((J.F&0x200)===0x200)){var Gk=(D.GI.isPrototypeOf(J)?J:null);G5=((Gk.F&0x1
)===0x1);Fr=aClip;if(!((Gk.F&0x80000)===0x80000))Fr=B.lb(Fr,B.abh(Gk.M,aOffset));
}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===0x400)){if(G5){var X=B.lb(B.abh(J.GetClipping(
),aOffset),Fr);if(!((X[0]>=X[2])||(X[1]>=X[3])))J.CK(AD,X,aOffset,Ay,aBlend);}}else{
var X=B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((X[0]>=X[2])||(X[1]>=X[3])
))J.CK(AD,X,aOffset,Ay,aBlend);}}J=J.Ar;}this.Ld(AD,aClip,aOffset,Ay,aBlend);},NP:
function(){var A;var Jv=((this.F&0x1000)===0x1000);var El=[0,0,(A=this.M)[2]-A[0
],A[3]-A[1]];var DK=false;var Gh=AF;var Jt=AF;var J=this.BN;var Ck=null;while(!!
J){if(((J.F&0x800)===0x800)){DK=true;J.F=J.F&~0x800;}if(DK&&((J.F&0x200)===0x200
))DK=false;J=J.Ad;}DK=false;J=this.Bj;if(Jv){this.F=this.F&~0x1000;Jv=!((El[0]>=
El[2])||(El[1]>=El[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400
)){if(!!J.AG&&(J.AG.Fx!==Ck))J.AG=null;if((!J.AG&&DK)&&(J.C7!==0x14))J.GW(Jt,Ck);
}if(!!J.AG){if(Jv&&!((J.F&0x400)===0x400))J.Hk(El,0);if(DK&&((J.F&0x400)===0x400
))J.Hk(Jt,0);}if(((J.F&0x200)===0x200)){DK=((J.F&0x1000)===0x1000);Ck=(D.GI.isPrototypeOf(
J)?J:null);if(DK){J.F=J.F&~0x1000;Gh=Ck.M;Jt=Gh;DK=!((Gh[0]>=Gh[2])||(Gh[1]>=Gh[
3]));}if(DK)this.Ac(Ck.M);}J=J.Ar;}this.F=this.F&~0x2000;this.Kd([El[2]-El[0],El[
3]-El[1]]);},Co:function(A0){B.pe([this,this.H8],this);},H8:function(A0){var A;var
NZ=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.NP();}if(((this.F&0x8000)===0x8000)||NZ){this.F=this.F&~0x8000;this.I_(this.
F);}},FU:function(C){var A;if(!!C&&(C.H!==this))throw new Error(CG);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.CM)return;
if(!!this.CM)this.CM.AR(0x0,0x60);this.CM=C;if(!!C){if(((this.F&0x40)===0x40))C.
AR(0x60,0x0);else C.AR(0x20,0x0);}},IU:function(C){var A;if(C>255)C=255;if(C<0)C=
0;if(C===this.FY)return;this.FY=C;if(!!this.H&&((this.F&0x1)===0x1))this.H.Ac(this.
GetClipping());},Nr:function(N0){this.IU(N0);},AM:function(C){if(C)this.AR(0x1,0x0
);else this.AR(0x0,0x1);},ExtendClipping:function(Fm,Fn,Fo,Fl){var A;var GQ=this.
M;var Ci=GQ;if(Fm<0)Fm=0;if(Fm>255)Fm=255;if(Fn<0)Fn=0;if(Fn>255)Fn=255;if(Fo<0)
Fo=0;if(Fo>255)Fo=255;if(Fl<0)Fl=0;if(Fl>255)Fl=255;Ci=[].concat(Ci[0]-(Math.max(
Fm,this.GS)&0xFF),Ci.slice(1,4));Ci=B.abN(Ci,Ci[2]+(Math.max(Fn,this.GT)&0xFF));
Ci=B.abP(Ci,Ci[1]-(Math.max(Fo,this.GU)&0xFF));Ci=[].concat(Ci.slice(0,3),Ci[3]+(
Math.max(Fl,this.GR)&0xFF));if(Fm!==this.GS){if((!!this.H&&((this.F&0x1)===0x1))&&
!((this.F&0x80000)===0x80000)){var I=Ci;I=B.abN(I,GQ[0]);this.H.Ac(I);}this.GS=Fm&
0xFF;}if(Fn!==this.GT){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===
0x80000)){var I=Ci;I=[].concat(GQ[2],I.slice(1,4));this.H.Ac(I);}this.GT=Fn&0xFF;
}if(Fo!==this.GU){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000
)){var I=Ci;I=[].concat(I.slice(0,3),GQ[1]);this.H.Ac(I);}this.GU=Fo&0xFF;}if(Fl
!==this.GR){if((!!this.H&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){
var I=Ci;I=B.abP(I,GQ[3]);this.H.Ac(I);}this.GR=Fl&0xFF;}},Ld:function(AD,aClip,
aOffset,Ay,aBlend){},La:function(AD,aClip,aOffset,Ay,aBlend){},GetMaximalSize:function(
){return DF;},GetMinimalSize:function(){return AH;},DispatchEvent:function(Av){var
A;var J=this.CM;var Z=(D.Am.isPrototypeOf(J)?J:null);var AZ=null;if(!!J&&((((J.F&
0x10000)===0x10000)||((J.F&0x40000)===0x40000))||((J.F&0x20000)===0x20000))){J=null;
Z=null;}if(!!Z)AZ=Z.DispatchEvent(Av);else if(!!J)AZ=J.Br(Av);if(!AZ)AZ=this.Br(
Av);if(!AZ)AZ=this.KQ(Av);return AZ;},BroadcastEventAtPosition:function(Av,Ko,aFilter
){var A;var J=this.BN;var AZ=null;while(!!J&&!AZ){if((!aFilter||((A=aFilter)&&((
J.F&A)===A)))&&B.wa(J.GetExtent(),Ko)){var Z=(D.Am.isPrototypeOf(J)?J:null);if(!
!Z)AZ=Z.BroadcastEventAtPosition(Av,B.abe(Ko,Z.M.slice(0,2)),aFilter);else AZ=J.
Br(Av);}J=J.Ad;}if(!AZ)AZ=this.Br(Av);return AZ;},BroadcastEvent:function(Av,aFilter
){var A;var J=this.BN;var AZ=null;while(!!J&&!AZ){if(!aFilter||((A=aFilter)&&((J.
F&A)===A))){var Z=(D.Am.isPrototypeOf(J)?J:null);if(!!Z)AZ=Z.BroadcastEvent(Av,aFilter
);else AZ=J.Br(Av);}J=J.Ad;}if(!AZ)AZ=this.Br(Av);if(!AZ)AZ=this.KQ(Av);return AZ;
},Kd:function(aSize){},I_:function(HN){},CD:function(){this.F=this.F|0x8000;B.pe([
this,this.H8],this);},Ac:function(Ag){var A;var Z=this;while(!!Z&&!((Ag[0]>=Ag[2
])||(Ag[1]>=Ag[3]))){if(!Z.H&&(Z!==this)){Z.Ac(Ag);return;}if(!((Z.F&0x1)===0x1)
)return;var I=Z.M;Ag=B.abh(Ag,I.slice(0,2));if(!((Z.F&0x80000)===0x80000)){I=[].
concat(I[0]-Z.GS,I.slice(1,4));I=B.abP(I,I[1]-Z.GU);I=B.abN(I,I[2]+Z.GT);I=[].concat(
I.slice(0,3),I[3]+Z.GR);Ag=B.lb(Ag,I);}Z=Z.H;}},JU:function(L,aFilter){var A;if(
!L||(L.H!==this))return null;var E5=L.Ar;var E8=L.Ad;var G2=0x10000;if(((aFilter&
0x10000)===0x10000))G2=0x0;while(!!E5||!!E8){if((!!E5&&(!aFilter||((A=aFilter)&&((
E5.F&A)===A))))&&(!G2||!((A=G2)&&((E5.F&A)===A))))return E5;if((!!E8&&(!aFilter||((
A=aFilter)&&((E8.F&A)===A))))&&(!G2||!((A=G2)&&((E8.F&A)===A))))return E8;if(!!E5
)E5=E5.Ar;if(!!E8)E8=E8.Ad;}return null;},L6:function(L,CR){var A;if(!L)throw new
Error(Ec);if(L.H!==this)throw new Error(Ed);var Eg=L;var Ba=L;var FD=L.C9;while(((
CR>0)&&!!Eg.Ar)&&(Eg.Ar.C9<=FD)){Eg=Eg.Ar;CR=CR-1;}while(((CR<0)&&!!Ba.Ad)&&(Ba.
Ad.C9>=FD)){Ba=Ba.Ad;CR=CR+1;}if((Eg===L)&&(Ba===L))return;if(((L.F&0x401)===0x401
)){if(!!L.Ad&&!!L.AG)L.Ad.F=L.Ad.F|0x800;L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.Co],this);}if(((L.F&0x200)===0x200)){if(!!L.Ad)L.Ad.F=L.Ad.F|0x800;L.F=
L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Co],this);}if(!!L.Ad)L.Ad.Ar=L.Ar;
if(!!L.Ar)L.Ar.Ad=L.Ad;if(this.Bj===L)this.Bj=L.Ar;if(this.BN===L)this.BN=L.Ad;if(
Eg!==L){L.Ar=Eg.Ar;L.Ad=Eg;Eg.Ar=L;if(!!L.Ar)L.Ar.Ad=L;}if(Ba!==L){L.Ar=Ba;L.Ad=
Ba.Ad;Ba.Ad=L;if(!!L.Ad)L.Ad.Ar=L;}if(!L.Ar)this.BN=L;if(!L.Ad)this.Bj=L;if(((L.
F&0x1)===0x1))this.Ac(L.GetClipping());},F$:function(L){var A;if(!L)throw new Error(
EU);if(L.H!==this)throw new Error(Ed);if((((L.F&0x401)===0x401)&&!!L.Ad)&&!!L.AG
){L.Ad.F=L.Ad.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Co],this);}if(((L.F&0x200
)===0x200)){if(!!L.Ad)L.Ad.F=L.Ad.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Co
],this);}L.AG=null;if(this.CM===L)this.FU(this.JU(L,0x14));if(!!L.Ad)L.Ad.Ar=L.Ar;
if(!!L.Ar)L.Ar.Ad=L.Ad;if(this.Bj===L)this.Bj=L.Ar;if(this.BN===L)this.BN=L.Ad;L.
H=null;L.Ar=null;L.Ad=null;if((!((L.F&0x10)===0x10)&&((L.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))L.AR(0x10,0x0);if(((L.F&0x1)===0x1))this.Ac(L.GetClipping(
));},P:function(L,CR){var A;if(!L)throw new Error(Ja);if(!!L.H)throw new Error(Jb
);var Ba=null;var FD=L.C9;if(((CR<0)&&!!this.BN)&&(this.BN.C9>=FD)){Ba=this.BN;CR=
CR+1;}while((((CR<0)&&!!Ba)&&!!Ba.Ad)&&(Ba.Ad.C9>=FD)){Ba=Ba.Ad;CR=CR+1;}if((!Ba&&
!!this.BN)&&(this.BN.C9>FD))Ba=this.BN;while((!!Ba&&!!Ba.Ad)&&(Ba.Ad.C9>FD))Ba=Ba.
Ad;if(!Ba){L.H=this;L.Ad=this.BN;if(!!this.BN)this.BN.Ar=L;if(!this.Bj)this.Bj=L;
this.BN=L;}else{L.H=this;L.Ad=Ba.Ad;L.Ar=Ba;Ba.Ad=L;if(!!L.Ad)L.Ad.Ar=L;else this.
Bj=L;}if(((L.F&0x1)===0x1))this.Ac(L.GetClipping());if(((L.F&0x80)===0x80)&&(B.aam(
).Li()===L))L.AR(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((L.F&0x200010)===0x200010
))L.AR(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((L.F&0x10)===0x10))&&((L.F&0x100000
)===0x100000))L.AR(0x10,0x0);if(((!this.CM&&((L.F&0x4)===0x4))&&((L.F&0x10)===0x10
))&&!((L.F&0x10000)===0x10000))this.FU(L);if(((L.F&0x401)===0x401)){L.F=L.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.Co],this);}if(((L.F&0x200)===0x200)){L.F=L.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.Co],this);}},Ls:function(){return this.
FY;},_Init:function(aArg){D.AY._Init.call(this,aArg);this.__proto__=D.Am;this.F=
0x10001F;this.AV(aArg);},_Mark:function(E){var A;D.AY._Mark.call(this,E);if((A=this.
Bj)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.BN)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.HY)&&(A._cycle!=E))A._Mark(A._cycle=E);if((A=this.CM)&&(A._cycle!=
E))A._Mark(A._cycle=E);},_className:"Core::Group"};D.Root={Cn:null,AI:B.abi(10,null
,null),Ge:null,Ei:null,Hg:0,AT:0,BE:B.abi(10,0,null),HR:B.abi(10,B.wg,null),CV:B.
abi(10,0,null),DH:B.abi(10,B.wf,null),Gg:B.abi(10,0,null),Eh:B.abi(10,B.wf,null)
,CU:B.abi(10,B.wf,null),Cj:B.abi(10,B.wf,null),Dt:B.abi(10,B.wf,null),Ap:0,HU:0,
HT:0,BP:B.abi(4,0,null),Bd:B.abi(4,B.wg,null),Bc:0,GZ:0,Gj:0,Jw:true,AV:function(
aArg){if(!!!this.K){var obj=this;B.abD(obj);}},Gu:function(){return this;},CK:function(
AD,aClip,aOffset,Ay,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)AD.Iu(aClip,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);D.Am.CK.call(this,AD,aClip,aOffset,Ay,aBlend
);},AR:function(Cg,CH){var A;D.Am.AR.call(this,Cg,CH);if(!this.H&&(((Cg&0x1)===0x1
)||((CH&0x1)===0x1)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.H&&(((
Cg&0x2)===0x2)||((CH&0x2)===0x2)))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},
FU:function(C){if((C!==null)||!C)D.Am.FU.call(this,C);},IU:function(C){var A;var
NG=this.FY;D.Am.IU.call(this,C);if(((NG!==this.FY)&&!this.H)&&((this.F&0x1)===0x1
))this.Ac([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Av){if(!!
Av){Av.Gy=!!this.AT;if(!!this.AT)Av.AN=this.AT;}var AZ;AZ=D.Am.DispatchEvent.call(
this,Av);this.AT=0;return AZ;},BroadcastEvent:function(Av,aFilter){if(!!Av){Av.Gy=
!!this.AT;if(!!this.AT)Av.AN=this.AT;}var AZ=D.Am.BroadcastEvent.call(this,Av,aFilter
);this.AT=0;return AZ;},Ac:function(Ag){var A;if(this.Hg>0)throw new Error(Jc);var
fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Ag=[0,0,(A=this.
M)[2]-A[0],A[3]-A[1]];if(!!this.H){D.Am.Ac.call(this,Ag);return;}Ag=B.lb(B.abh(Ag
,this.M.slice(0,2)),this.M);if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var G;for(G=
0;G<this.Bc;G=G+1)if(!(((A=B.lb(this.Bd.Get(G),Ag))[0]>=A[2])||(A[1]>=A[3]))){this.
Bd.Set(G,B.wC(this.Bd.Get(G),Ag));this.BP.Set(G,B.aaH(this.Bd.Get(G)));return;}if(
this.Bc<3){this.Bd.Set(this.Bc,Ag);this.BP.Set(this.Bc,B.aaH(Ag));this.Bc=this.Bc+
1;return;}var AQ;var Cm;var GY=0;var G1=0;var Kq=2147483647;this.Bd.Set(this.Bc,
Ag);this.BP.Set(this.Bc,B.aaH(Ag));for(AQ=0;AQ<=this.Bc;AQ=AQ+1)for(Cm=AQ+1;Cm<=
this.Bc;Cm=Cm+1){var H7=B.aaH(B.wC(this.Bd.Get(AQ),this.Bd.Get(Cm)));var KP=((H7<<
8)/(this.BP.Get(AQ)+this.BP.Get(Cm)))|0;if(KP<Kq){Kq=KP;GY=AQ;G1=Cm;}}this.Bd.Set(
GY,B.wC(this.Bd.Get(GY),this.Bd.Get(G1)));this.BP.Set(GY,B.aaH(this.Bd.Get(GY)));
if(G1!==this.Bc){this.Bd.Set(G1,this.Bd.Get(this.Bc));this.BP.Set(G1,this.BP.Get(
this.Bc));}},NA:function(){var BF=B._NewObject(D.Hn,0);BF.Gy=!!this.AT;if(!!this.
AT)BF.AN=this.AT;return BF;},Fs:function(){var BF=B._NewObject(D.FH,0);BF.Gy=!!this.
AT;if(!!this.AT)BF.AN=this.AT;return BF;},Gf:function(){var BF=B._NewObject(D.Ig
,0);BF.Gy=!!this.AT;if(!!this.AT)BF.AN=this.AT;return BF;},NB:function(A0){var G;
var Fu=false;for(G=0;G<10;G=G+1)if(!!this.AI.Get(G)){var Bl=this.Cj.Get(G);var Z=
this.AI.Get(G).H;while(!!Z&&(Z!==this)){Bl=B.abe(Bl,Z.M.slice(0,2));Z=Z.H;}if(!Z&&(
this.AI.Get(G)!==this)){var tmp=this.AI.Get(G);this.Ap=G;this.AI.Set(G,null);tmp.
Br(this.Fs().InitializeUp(G,this.Eh.Get(G),this.DH.Get(G),this.CV.Get(G),this.BE.
Get(G)+1,this.CU.Get(G),false,this.Cj.Get(G),this.Dt.Get(G)));this.BroadcastEvent(
this.Gf().InitializeUp(G,this.BE.Get(G)+1,false,tmp,this.Cj.Get(G)),0x18);}else{
this.CV.Set(G,(this.Ei.AN-this.Gg.Get(G))|0);if(this.CV.Get(G)<10)this.CV.Set(G,
10);this.Ap=G;this.AI.Get(G).Br(this.Fs().InitializeHold(G,Bl,this.DH.Get(G),this.
CV.Get(G),this.BE.Get(G)+1,this.CU.Get(G),this.Cj.Get(G),this.Dt.Get(G)));Fu=true;
}}if(!Fu)this.Ei.B0(false);},GetFPS:function(){var ticksCount=0;var KA=0;ticksCount=((
new Date).getTime()-B.v$)|0;if(!!this.HU&&(ticksCount>this.HU))KA=((this.HT*1000
)/((ticksCount-this.HU)|0))|0;this.HT=0;this.HU=ticksCount;return KA;},Update:function(
){var A;if(!this.Ge)this.Ge=B._NewObject(B.Graphics.Canvas,0);this.Ge.J1([(A=this.
M)[2]-A[0],A[3]-A[1]]);this.Ge.Update();return this.UpdateGE20(this.Ge);},UpdateGE20:
function(AD){if(!this.BeginUpdate())return AF;var DO=this.UpdateCanvas(AD,AH);this.
EndUpdate();return DO;},EndUpdate:function(){if(this.Bc>0){this.HT=this.HT+1;this.
Bc=0;}},UpdateCanvas:function(AD,aOffset){var A;var DO=AF;var Nv=[].concat(aOffset
,B.abf(AD.FrameSize,aOffset));var G;var AQ=this.Bc;this.Hg=this.Hg+1;AD.Fv=this;
for(G=0;(G<AQ)&&(G<4);G=G+1)if(this.BP.Get(G)>0){this.CK(AD,B.abg(this.Bd.Get(G)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);DO=B.wC(DO,B.lb(Nv,this.Bd.Get(G))
);}else AQ=AQ+1;AD.Fv=null;this.Hg=this.Hg-1;if(!((DO[0]>=DO[2])||(DO[1]>=DO[3])
))return B.abg(DO,aOffset);else return DO;},GetUpdateRegion:function(HM){var G;var
AQ=this.Bc;if(HM<0)return AF;for(G=0;(G<AQ)&&(G<4);G=G+1)if(!this.BP.Get(G)){AQ=
AQ+1;HM=HM+1;}else if(G===HM)return this.Bd.Get(G);return AF;},BeginUpdate:function(
){var A;var G;if(!!this.Bc&&!B.aaY(this.Bd.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]])){var KZ=B.abi(3,B.wg,null);var KY=this.Bc;for(G=0;G<KY;G++)KZ.Set(G,this.Bd.
Get(G));for(G=0;G<KY;G++){var KR=B.abh(KZ.Get(G),this.M.slice(0,2));var KS=this.
Hj(KR);if(!B.aaY(KR,KS))this.Ac(B.abg(KS,this.M.slice(0,2)));}}var AQ;var Cm;for(
AQ=0;AQ<(this.Bc-1);AQ++)if(this.BP.Get(AQ)>0)for(Cm=AQ+1;Cm<this.Bc;Cm++)if(this.
BP.Get(Cm)>0){var H7=B.aaH(B.wC(this.Bd.Get(AQ),this.Bd.Get(Cm)));if(((H7-this.BP.
Get(AQ))-this.BP.Get(Cm))<0){this.Bd.Set(AQ,B.wC(this.Bd.Get(AQ),this.Bd.Get(Cm)
));this.BP.Set(AQ,H7);this.BP.Set(Cm,0);}}for(G=this.Bc-1;G>=0;G--)if(!this.BP.Get(
G))this.Bc=this.Bc-1;return this.Bc;},DoesNeedUpdate:function(){if(this.Bc>0)return true;
return false;},Initialize:function(aSize){this.N([].concat(AH,aSize));if(this.Jw
)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ac(this.M);return this;},SetRootFocus:
function(Jh){if(Jh===this.Jw)return false;this.Jw=Jh;if(!Jh)this.AR(0x0,0x40);else
this.AR(0x40,0x0);return true;},SetUserInputTimestamp:function(Nu){this.AT=Nu;},
DriveKeyboardHitting:function(Bh,GL,C_){var A;var JL=!!this.Cn;if(!!this.Cn&&((!
C_||(this.GZ!==Bh))||(this.Gj!==GL))){var BF=null;var J=(D.BT.isPrototypeOf(A=this.
Cn)?A:null);var Db=(D.FP.isPrototypeOf(A=this.Cn)?A:null);if(!!this.GZ)BF=B._NewObject(
D.KeyEvent,0).Initialize(this.GZ,false);if(this.Gj!==0x00)BF=B._NewObject(D.KeyEvent
,0).Initialize2(this.Gj,false);if(!!Db)Db.Br(BF);else if(!!J)J.Br(BF);this.GZ=0;
this.Gj=0x00;this.Cn=null;}if(!!this.Cn){var BF=null;var J=(D.BT.isPrototypeOf(A=
this.Cn)?A:null);var Db=(D.FP.isPrototypeOf(A=this.Cn)?A:null);if(!!Bh)BF=B._NewObject(
D.KeyEvent,0).Initialize(Bh,true);if(this.Gj!==0x00)BF=B._NewObject(D.KeyEvent,0
).Initialize2(GL,true);if(!!Db)Db.Br(BF);else if(!!J)J.Br(BF);}if(!this.Cn&&C_){
if(!!Bh)this.Cn=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize(Bh,true
));if(GL!==0x00)this.Cn=this.DispatchEvent(B._NewObject(D.KeyEvent,0).Initialize2(
GL,true));if(!(D.FP.isPrototypeOf(A=this.Cn)?A:null)&&!(D.BT.isPrototypeOf(A=this.
Cn)?A:null))this.Cn=null;this.GZ=Bh;this.Gj=GL;JL=JL||!!this.Cn;}this.AT=0;return JL;
},DriveCursorMovement:function(BA){return this.DriveMultiTouchMovement(this.Ap,BA
);},DriveMultiTouchMovement:function(O,BA){if((O<0)||(O>9)){this.AT=0;return false;
}var Cz=B.abe(BA,this.Cj.Get(O));this.Cj.Set(O,BA);if(!this.AI.Get(O)||B.aaX(Cz,
AH)){this.AT=0;return false;}var Bl=BA;var Z=this.AI.Get(O).H;while(!!Z&&(Z!==this
)){Bl=B.abe(Bl,Z.M.slice(0,2));Z=Z.H;}if(!Z&&(this.AI.Get(O)!==this)){var tmp=this.
AI.Get(O);this.Ap=O;this.AI.Set(O,null);tmp.Br(this.Fs().InitializeUp(O,this.Eh.
Get(O),this.DH.Get(O),this.CV.Get(O),this.BE.Get(O)+1,this.CU.Get(O),false,this.
Cj.Get(O),this.Dt.Get(O)));this.BroadcastEvent(this.Gf().InitializeUp(O,this.BE.
Get(O)+1,false,tmp,BA),0x18);}else{this.Eh.Set(O,Bl);this.Ap=O;this.AI.Get(O).Br(
this.NA().Initialize(O,Bl,this.DH.Get(O),Cz,this.CV.Get(O),this.BE.Get(O)+1,this.
CU.Get(O),BA,this.Dt.Get(O)));}this.AT=0;return true;},DriveCursorHitting:function(
C_,O,BA){return this.DriveMultiTouchHitting(C_,O,BA);},DriveMultiTouchHitting:function(
C_,O,BA){if((O<0)||(O>9)){this.AT=0;return false;}var ticksCount=this.AT;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var NU=this.AT;this.DriveMultiTouchMovement(
O,BA);BA=this.Cj.Get(O);this.AT=NU;if(C_)this.Dt.Set(O,BA);if(C_&&!this.AI.Get(O
)){var BU;var Bl=BA;if(B.wa(this.HR.Get(O),BA)&&((ticksCount-this.Gg.Get(O))<=250
))this.BE.Set(O,this.BE.Get(O)+1);else this.BE.Set(O,0);this.HR.Set(O,B.abh(GK,BA
));this.Gg.Set(O,ticksCount);BU=this.Fc(B.abh(GK,BA),O,this.BE.Get(O)+1,null,null
,0x0);if(!!BU){this.BroadcastEvent(this.Gf().InitializeDown(O,this.BE.Get(O)+1,false
,BU.BT,BA),0x18);this.AI.Set(O,BU.BT);this.CU.Set(O,BU.D0);}else{this.AI.Set(O,null
);this.CU.Set(O,AH);this.AT=0;return false;}var Z=BU.BT.H;while(!!Z&&(Z!==this)){
Bl=B.abe(Bl,Z.M.slice(0,2));Z=Z.H;}this.DH.Set(O,Bl);this.Eh.Set(O,Bl);this.CV.Set(
O,0);this.Ei.B0(true);this.Ap=O;this.AI.Get(O).Br(this.Fs().InitializeDown(O,Bl,
this.BE.Get(O)+1,this.CU.Get(O),false,BA));this.AT=0;return true;}if(!C_&&!!this.
AI.Get(O)){var Bl=BA;var Z=this.AI.Get(O).H;while(!!Z&&(Z!==this)){Bl=B.abe(Bl,Z.
M.slice(0,2));Z=Z.H;}if(!Z)Bl=this.Eh.Get(O);this.Ap=O;var tmp=this.AI.Get(O);this.
AI.Set(O,null);tmp.Br(this.Fs().InitializeUp(O,Bl,this.DH.Get(O),this.CV.Get(O),
this.BE.Get(O)+1,this.CU.Get(O),false,BA,this.Dt.Get(O)));this.BroadcastEvent(this.
Gf().InitializeUp(O,this.BE.Get(O)+1,false,tmp,BA),0x18);this.AT=0;return true;}
this.AT=0;return false;},L7:function(DG,Kn,Ee,Gd){if(DG===this)DG=null;if(!this.
AI.Get(this.Ap))return;var BU;BU=this.Fc(B.abh(GK,this.Cj.Get(this.Ap)),this.Ap,
1,DG,Ee,Gd);if(!!BU&&(this.AI.Get(this.Ap)!==BU.BT))this.JS(BU.BT,BU.D0);if(!BU&&(
this.AI.Get(this.Ap)!==Kn))this.JS(Kn,AH);},JS:function(DG,CQ){if(!this.AI.Get(this.
Ap)||(this.AI.Get(this.Ap)===DG))return;var tmp=this.AI.Get(this.Ap);this.AI.Set(
this.Ap,null);tmp.Br(this.Fs().InitializeUp(this.Ap,this.Eh.Get(this.Ap),this.DH.
Get(this.Ap),this.CV.Get(this.Ap),this.BE.Get(this.Ap)+1,this.CU.Get(this.Ap),true
,this.Cj.Get(this.Ap),this.Dt.Get(this.Ap)));this.BroadcastEvent(this.Gf().InitializeUp(
this.Ap,this.BE.Get(this.Ap)+1,true,tmp,this.Cj.Get(this.Ap)),0x18);var Bl=this.
Cj.Get(this.Ap);var Z=null;if(!!DG)Z=DG.H;while(!!Z&&(Z!==this)){Bl=B.abe(Bl,Z.M.
slice(0,2));Z=Z.H;}if(!Z&&(DG!==this)){this.AI.Set(this.Ap,null);return;}this.BroadcastEvent(
this.Gf().InitializeDown(this.Ap,this.BE.Get(this.Ap)+1,true,DG,this.Cj.Get(this.
Ap)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;this.AI.Set(
this.Ap,DG);this.CU.Set(this.Ap,CQ);this.DH.Set(this.Ap,Bl);this.Eh.Set(this.Ap,
Bl);this.BE.Set(this.Ap,0);this.CV.Set(this.Ap,0);this.Gg.Set(this.Ap,ticksCount
);this.Dt.Set(this.Ap,this.Cj.Get(this.Ap));this.AI.Get(this.Ap).Br(this.Fs().InitializeDown(
this.Ap,Bl,this.BE.Get(this.Ap)+1,this.CU.Get(this.Ap),true,this.Dt.Get(this.Ap)
));},Li:function(){return null;},_Init:function(aArg){D.Am._Init.call(this,aArg);
D.Timer._Init.call(this.Ei={K:this},0);(this.AI=[]).__proto__=D.Root.AI;(this.BE=[
]).__proto__=D.Root.BE;(this.HR=[]).__proto__=D.Root.HR;(this.CV=[]).__proto__=D.
Root.CV;(this.DH=[]).__proto__=D.Root.DH;(this.Gg=[]).__proto__=D.Root.Gg;(this.
Eh=[]).__proto__=D.Root.Eh;(this.CU=[]).__proto__=D.Root.CU;(this.Cj=[]).__proto__=
D.Root.Cj;(this.Dt=[]).__proto__=D.Root.Dt;(this.BP=[]).__proto__=D.Root.BP;(this.
Bd=[]).__proto__=D.Root.Bd;this.__proto__=D.Root;this.F=0x10007F;this.Ei.GG(10);
this.Ei.FX=[this,this.NB];this.AV(aArg);},_Done:function(){this.__proto__=D.Am;this.
Ei._Done();D.Am._Done.call(this);},_ReInit:function(){D.Am._ReInit.call(this);this.
Ei._ReInit();},_Mark:function(E){var A;D.Am._Mark.call(this,E);if((A=this.Cn)&&(
A._cycle!=E))A._Mark(A._cycle=E);B.aa6(this.AI,E);if((A=this.Ge)&&(A._cycle!=E))
A._Mark(A._cycle=E);if((A=this.Ei)._cycle!=E)A._Mark(A._cycle=E);},_className:"Core::Root"
};D.Event={AN:0,Gy:false,AV:function(aArg){this.AN=this.Hq();},Hq:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=D.Event;this.AV(aArg);B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.
K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};D.KeyEvent={A1:0,Au:0,Down:false,Initialize2:function(Bh,C_){this.
A1=0;this.Au=Bh;this.Down=C_;if((Bh>=0x30)&&(Bh<=0x39))this.A1=(10+Bh)-48;if((Bh>=
0x41)&&(Bh<=0x5A))this.A1=(105+Bh)-65;if((Bh>=0x61)&&(Bh<=0x7A))this.A1=(105+Bh)-
97;if(Bh===0x20)this.A1=131;if(!this.A1)switch(Bh){case 0x2B:this.A1=132;break;case
0x2D:this.A1=133;break;case 0x2A:this.A1=134;break;case 0x2F:this.A1=135;break;case
0x3D:this.A1=136;break;case 0x2E:this.A1=137;break;case 0x2C:this.A1=138;break;case
0x3A:this.A1=139;break;case 0x3B:this.A1=140;break;default:;}return this;},Initialize:
function(Bh,C_){this.A1=Bh;this.Down=C_;this.Au=0x00;var Jm=Bh-10;var Jl=Bh-105;
if((Jm>=0)&&(Jm<=9))this.Au=(48+Jm)&0xFFFF;if((Jl>=0)&&(Jl<=25))this.Au=(65+Jl)&
0xFFFF;if(Bh===131)this.Au=0x20;if(this.Au===0x00)switch(Bh){case 132:this.Au=0x2B;
break;case 133:this.Au=0x2D;break;case 134:this.Au=0x2A;break;case 135:this.Au=0x2F;
break;case 136:this.Au=0x3D;break;case 137:this.Au=0x2E;break;case 138:this.Au=0x2C;
break;case 139:this.Au=0x3A;break;case 140:this.Au=0x3B;break;default:;}return this;
},Ln:function(Km){switch(Km){case 141:return((this.Au>=0x41)&&(this.Au<=0x5A))||((
this.Au>=0x61)&&(this.Au<=0x7A));case 142:return(((this.Au>=0x41)&&(this.Au<=0x5A
))||((this.Au>=0x61)&&(this.Au<=0x7A)))||((this.Au>=0x30)&&(this.Au<=0x39));case
143:return(this.Au>=0x30)&&(this.Au<=0x39);case 144:return(((this.Au>=0x41)&&(this.
Au<=0x46))||((this.Au>=0x61)&&(this.Au<=0x66)))||((this.Au>=0x30)&&(this.Au<=0x39
));case 145:return this.Au!==0x00;case 146:return(this.Au===0x00)&&!!this.A1;case
147:return(((this.A1===6)||(this.A1===7))||(this.A1===4))||(this.A1===5);case 148:
return(this.Au!==0x00)||!!this.A1;default:;}return Km===this.A1;},_Init:function(
aArg){D.Event._Init.call(this,aArg);this.__proto__=D.KeyEvent;},_className:"Core::KeyEvent"
};D.Ig={I8:null,C6:B.wf,Cf:0,BO:0,Down:false,C3:false,InitializeUp:function(O,Ch
,Fj,Jj,C$){this.Down=false;this.BO=O;this.Cf=Ch;this.C6=C$;this.I8=Jj;this.C3=Fj;
return this;},InitializeDown:function(O,Ch,Fj,Jj,C$){this.Down=true;this.BO=O;this.
Cf=Ch;this.C6=C$;this.I8=Jj;this.C3=Fj;return this;},_Init:function(aArg){D.Event.
_Init.call(this,aArg);this.__proto__=D.Ig;},_Mark:function(E){var A;D.Event._Mark.
call(this,E);if((A=this.I8)&&(A._cycle!=E))A._Mark(A._cycle=E);},_className:"Core::CursorGrabEvent"
};D.FH={Gw:B.wf,C6:B.wf,Cf:0,BZ:0,Dz:B.wf,Cp:B.wf,BO:0,Down:false,C3:false,InitializeHold:
function(O,EV,GN,GO,Ch,CQ,C$,GM){this.Down=true;this.BO=O;this.Cp=B.abf(EV,CQ);this.
Dz=B.abf(GN,CQ);this.BZ=GO;this.Cf=Ch;this.C6=C$;this.Gw=GM;return this;},InitializeUp:
function(O,EV,GN,GO,Ch,CQ,Fj,C$,GM){this.Down=false;this.BO=O;this.Cp=B.abf(EV,CQ
);this.Dz=B.abf(GN,CQ);this.BZ=GO;this.Cf=Ch;this.C3=Fj;this.C6=C$;this.Gw=GM;return this;
},InitializeDown:function(O,EV,Ch,CQ,Fj,C$){this.Down=true;this.BO=O;this.Cp=B.abf(
EV,CQ);this.Dz=B.abf(EV,CQ);this.BZ=0;this.Cf=Ch;this.C3=Fj;this.C6=C$;this.Gw=C$;
return this;},_Init:function(aArg){D.Event._Init.call(this,aArg);this.__proto__=
D.FH;},_className:"Core::CursorEvent"};D.Hn={Gw:B.wf,C6:B.wf,Cf:0,BZ:0,D0:B.wf,Dz:
B.wf,Cp:B.wf,BO:0,Initialize:function(O,EV,GN,aOffset,GO,Nt,CQ,C$,GM){this.BO=O;
this.Cp=B.abf(EV,CQ);this.Dz=B.abf(GN,CQ);this.D0=aOffset;this.BZ=GO;this.Cf=Nt;
this.C6=C$;this.Gw=GM;return this;},_Init:function(aArg){D.Event._Init.call(this
,aArg);this.__proto__=D.Hn;},_className:"Core::DragEvent"};D.GI={CK:function(AD,
aClip,aOffset,Ay,aBlend){},GetClipping:function(){var A;var I=D.AY.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var FB=AF;var J;for(J=this.Ar;!!J&&!((J.F&
0x200)===0x200);J=J.Ar)if(((J.F&0x1)===0x1))FB=B.wC(FB,J.GetClipping());I=B.wC(I
,FB);}return I;},AR:function(Cg,CH){var A;var HZ=this.F;if((!!this.H&&((this.F&0x80001
)===0x80001))&&((CH&0x80000)===0x80000))this.H.Ac(this.GetClipping());D.AY.AR.call(
this,Cg,CH);if(((!!this.H&&((this.F&0x1)===0x1))&&((Cg&0x80000)===0x80000))&&!((
HZ&0x80000)===0x80000))this.H.Ac(this.GetClipping());},N:function(C){var A;if(B.
aaY(C,this.M))return;var E6=[(A=this.M)[2]-A[0],A[3]-A[1]];var JE=[C[2]-C[0],C[3
]-C[1]];var Gl=!B.aaX(E6,JE);var Cz=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(Cz,AH)&&!Gl){var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400
)===0x400)){var tmp=((J.F&0x100)===0x100);J.IM(Cz,tmp);}J=J.Ar;}}if((Gl&&(E6[0]>
0))&&(E6[1]>0)){var AA=this.M;var J=this.Ar;while(!!J&&!((J.F&0x200)===0x200)){if(((
J.F&0x400)===0x400)){if(!!J.AG&&(J.AG.Fx!==this))J.AG=null;if(!J.AG&&(J.C7!==0x14
))J.GW(AA,this);}J=J.Ar;}}D.AY.N.call(this,C);if(!!this.H&&Gl){this.F=this.F|0x1000;
if(!((this.H.F&0x2000)===0x2000)){this.H.F=this.H.F|0x4000;B.pe([A=this.H,A.Co],
this);}}},_Init:function(aArg){D.AY._Init.call(this,aArg);this.__proto__=D.GI;this.
F=0x203;},_className:"Core::Outline"};D.I6={IS:null,IR:null,Fg:null,EN:null,AO:0
,BO:0,AN:0,Cf:0,BZ:0,D0:B.wf,Dz:B.wf,Cp:B.wf,L8:8,JZ:1,Down:false,EL:false,C3:false
,Jr:false,KD:0,CK:function(AD,aClip,aOffset,Ay,aBlend){},Br:function(Av){var A;var
At=(D.FH.isPrototypeOf(Av)?Av:null);var CW=(D.Hn.isPrototypeOf(Av)?Av:null);var HV=
this.EL;var G_;var Gi;var KX;var EH;var Kv;if(!At&&!CW)return null;G_=(!!At&&At.
Down)&&!At.BZ;Gi=(!!At&&At.Down)&&(At.BZ>0);KX=(!!At&&At.Down)&&(At.BZ>this.KD);
EH=!!At&&!At.Down;Kv=!!CW;if(G_)this.KD=((A=(At.C3?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;
if(G_){var JG=0;var GV;this.AO=this.AO|(1<<At.BO);for(GV=this.AO&4095;GV>0;GV=GV>>
1)if(!!(GV&1))JG=JG+1;if(JG===1)this.AO=(this.AO|16777216)|(4096<<At.BO);}if(EH&&(
this.AO<16777216)){var E9=this.Gu();var BU=null;if(!!E9){var NW=(!!this.Ad?this.
Ad:this.H);BU=E9.Fc(B.abh(HJ,At.C6),At.BO,At.Cf,null,NW,0x0);}if(!!BU){var G;for(
G=0;G<10;G++)if(!!(this.AO&(1<<G)))BU.BT.Br(B._NewObject(D.FH,0).InitializeDown(
G,At.Cp,At.Cf,AH,true,At.C6));for(G=0;G<10;G++)if(!!(this.AO&(1<<G)))BU.BT.Br(B.
_NewObject(D.FH,0).InitializeUp(G,At.Cp,At.Cp,0,At.Cf,AH,false,At.C6,At.C6));}}if(
EH)this.AO=(this.AO&~(1<<At.BO))|33554432;if(KX&&(this.AO<16777216))this.AO=this.
AO|67108864;if(EH&&At.C3)this.AO=this.AO|67108864;if(EH&&!(this.AO&16777215))this.
AO=0;if(Gi&&(this.AO>=67108864)){var E9=this.Gu();if(!!E9)E9.L7(null,null,this,0x0
);}if((Gi&&!!(this.AO&16777216))&&!!(this.AO&33554432)){Gi=false;EH=true;}if(!!At&&
!(this.AO&(4096<<At.BO)))return this;if(!!CW&&!(this.AO&(4096<<CW.BO)))return this;
if(EH&&!(this.AO&16777216))return this;if(((G_||Kv)||Gi)&&((this.AO<16777216)||(
this.AO>=33554432)))return this;if(EH)this.AO=this.AO&3758100479;if(EH&&!(this.AO&
16777215))this.AO=0;if(!!At){this.Down=G_||Gi;this.EL=this.IF(At.Cp);this.Dz=At.
Dz;this.Cp=At.Cp;this.D0=AH;this.BZ=At.BZ;this.Cf=At.Cf;this.C3=At.C3;this.BO=At.
BO;this.AN=At.AN;if(At.Down&&!At.BZ)HV=false;}if(!!CW){this.Down=true;this.EL=this.
IF(CW.Cp);this.Dz=CW.Dz;this.Cp=CW.Cp;this.D0=CW.D0;this.BZ=CW.BZ;this.Cf=CW.Cf;
this.BO=CW.BO;this.C3=false;this.AN=CW.AN;}var Jq=this.Down;if((!!At&&this.Down)&&
!this.BZ)(A=this.EN)?A[1].call(A[0],this):null;if((this.Down&&this.EL)&&!HV){this.
Jr=true;(A=this.IR)?A[1].call(A[0],this):null;}if(this.Jr&&(((Jq&&!this.EL)&&HV)||((
!Jq&&this.EL)&&HV))){this.Jr=false;(A=this.IS)?A[1].call(A[0],this):null;}if(!!At&&
!Jq)(A=this.Fg)?A[1].call(A[0],this):null;return this;},Fc:function(Ag,O,Ch,Fk,Ee
,Gd){var A;if(!!Fk&&(Fk!==this))return null;if((Ch<1)||(Ch>this.JZ))return null;
if(this.AO>=33554432)return null;if((this.AO>=16777216)&&!(this.AO&(4096<<O)))return null;
if(this.Lk()){var I=B.lb(Ag,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var EW=B.aaI(Ag);var Cz=AH;if(EW[0]<I[0])Cz=[I[0]-EW[0],Cz[1]];if(EW[0]>=I[2])Cz=[(
I[2]-EW[0])-1,Cz[1]];if(EW[1]<I[1])Cz=[Cz[0],I[1]-EW[1]];if(EW[1]>=I[3])Cz=[Cz[0
],(I[3]-EW[1])-1];return B._NewObject(D.Ih,0).Initialize(this,Cz);}}else{var AK=
B.abi(9,B.wf,null);var G;AK.Set(0,B.aaI(Ag));AK.Set(1,AK.Get(0));AK.Set(2,AK.Get(
0));AK.Set(3,AK.Get(0));AK.Set(4,AK.Get(0));AK.Set(1,[Ag[0],AK.Get(1)[1]]);AK.Set(
2,[AK.Get(2)[0],Ag[1]]);AK.Set(3,[Ag[2],AK.Get(3)[1]]);AK.Set(4,[AK.Get(4)[0],Ag[
3]]);AK.Set(5,Ag.slice(0,2));AK.Set(6,[Ag[2],Ag[1]]);AK.Set(7,[Ag[0],Ag[3]]);AK.
Set(8,Ag.slice(2,4));for(G=0;G<9;G=G+1)if(this.IF(AK.Get(G)))return B._NewObject(
D.Ih,0).Initialize(this,B.abe(AK.Get(G),AK.Get(0)));}return null;},LT:function(C
){if(C<1)C=1;this.L8=C;},LN:function(C){if(C<1)C=1;this.JZ=C;},B0:function(C){if(
C)this.AR(0x100000,0x0);else this.AR(0x0,0x100000);},_Init:function(aArg){D.GJ._Init.
call(this,aArg);this.__proto__=D.I6;this.F=0x10011B;},_Mark:function(E){var A;D.
GJ._Mark.call(this,E);if((A=this.IS)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((
A=this.IR)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.Fg)&&((A=A[0])._cycle
!=E))A._Mark(A._cycle=E);if((A=this.EN)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E
);},_className:"Core::SimpleTouchHandler"};D.FP={Ar:null,Fg:null,EN:null,Fz:0,AN:
0,J7:0,Fe:148,A1:0,Au:0,Cq:true,Down:false,I4:false,AV:function(aArg){var A;var Fv=(
D.Am.isPrototypeOf(A=this.K)?A:null);if(!Fv)throw new Error(Jd);this.Ar=Fv.HY;Fv.
HY=this;},Br:function(Av){var A;if(!!Av&&Av.Ln(this.Fe)){this.Down=Av.Down;this.
A1=Av.A1;this.Au=Av.Au;this.AN=Av.AN;if(Av.Down){this.J7=this.Fz;this.I4=this.Fz>
0;if(!this.I4)(A=this.EN)?A[1].call(A[0],this):null;this.Fz=this.Fz+1;return true;
}if(!Av.Down){this.I4=this.Fz>1;this.J7=this.Fz-1;this.Fz=0;(A=this.Fg)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
D.FP;this.AV(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(E){var A;if((A=this.Ar)&&(A._cycle!=E))A._Mark(A._cycle=
E);if((A=this.Fg)&&((A=A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.EN)&&((A=
A[0])._cycle!=E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=
E);},K:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"};D.Ih={BT:
null,Gp:0,D0:B.wf,Initialize:function(L,aOffset){this.BT=L;this.D0=aOffset;this.
Gp=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=D.Ih;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(E){var A;if((A=this.BT)&&(A._cycle!=E))A._Mark(
A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};D.Ht={Fx:null,B6:B.wg,AA:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=D.Ht;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.Fx)&&(A._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};D.Hu={G9:B.wf,G8:B.wf
,G7:B.wf,G6:B.wf,_Init:function(aArg){D.Ht._Init.call(this,aArg);this.__proto__=
D.Hu;},_className:"Core::LayoutQuadContext"};D.D7={resource:null,Dg:function(){this.
resource=null;},AV:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=D.D7;this.AV(aArg);B.h7++;},_Done:function(){this.Dg();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(E){var A;if((A=this.K)&&(A._cycle
!=E))A._Mark(A._cycle=E);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};D.Timer={FX:null,timer:null,AN:0,Period:1000,Hl:0,Cq:false,Dg:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},H3:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},GG:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Cq)this.H3(this.Hl,C);},Hx:function(C){if(C<0)C=0;if(C===this.
Hl)return;this.Hl=C;if(this.Cq)this.H3(C,this.Period);},B0:function(C){if(C===this.
Cq)return;this.Cq=C;if(C)this.H3(this.Hl,this.Period);else this.H3(0,0);this.AN=
this.Hq();},Hq:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AN=this.Hq();if(!this.Period
)this.B0(false);(A=this.FX)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=D.Timer;B.h7++;},_Done:function(){this.Dg();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(E){var A;if((A=this.FX)&&((A=A[0])._cycle!=
E))A._Mark(A._cycle=E);if((A=this.K)&&(A._cycle!=E))A._Mark(A._cycle=E);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};D.OX={OY:0x1,N9:0x2,Oi:0x4,OV:
0x8,Cq:0x10,OP:0x20,Oj:0x40,Ou:0x80,Oh:0x100,Op:0x200,Og:0x400,OC:0x800,Kd:0x1000
,OW:0x2000,Oz:0x4000,OA:0x8000,Od:0x10000,Oy:0x20000,OM:0x40000,Oe:0x80000,OB:0x100000
,Oc:0x200000};D.C7={OD:0x1,OE:0x2,N5:0x4,N6:0x8,N7:0x10,N4:0x20};D.Om={Ov:0,OS:1
,N$:2,Oq:3,OG:4,OT:5,OU:6,Oa:7,Ob:8,Os:9,Or:10,OI:11,OH:12};D.KeyCode={NoKey:0,Ok:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};D.OF={O2:0x1,OZ:0x2,O0:0x4,O1:0x8,Ot:
0x10,Ol:0x20};
D._Init=function(){D.GJ.__proto__=D.BT;D.AY.__proto__=D.BT;D.Am.__proto__=D.AY;D.
Root.__proto__=D.Am;D.KeyEvent.__proto__=D.Event;D.Ig.__proto__=D.Event;D.FH.__proto__=
D.Event;D.Hn.__proto__=D.Event;D.GI.__proto__=D.AY;D.I6.__proto__=D.GJ;D.Hu.__proto__=
D.Ht;};D._ReInit=function(){};D.Cv=function(E){};return D;})();

/* Embedded Wizard */