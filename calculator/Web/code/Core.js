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
Core=(function(){var B=EmWiApp;var E={};
var AF=[0,0];var AV=[0,0,0,0];var C_="The view does not belong to this group";var
EF=[340,590];var Ds="No view to restack";var D8="View is not in this group";var GK=
"No view to remove";var Hx="No view to add";var FM="View already in a group";var
GL="Recursive invalidate during active update cycle.";var EG=[-8,-8,9,9];var Ki=[
0,0,1,1];var Kj="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
E.B$={Av:null,Af:null,I:null,AO:null,F:0x103,Dr:0,CA:0x14,HK:function(Z,IN){},Cg:
function(C){if(this.Dr===C)return;this.Dr=C;if(!!this.I){var E$=this.Av;var Ah=0;
while(!!E$&&(C>E$.Dr)){E$=E$.Av;Ah=Ah+1;}E$=this.Af;while(!!E$&&(C<E$.Dr)){E$=E$.
Af;Ah=Ah-1;}if(!!Ah)this.I.NE(this,Ah);}},Iw:function(C){var A;var Ah=C^this.CA;
if(!Ah)return;this.CA=C;if(!!this.AO&&!((this.F&0x400)===0x400)){this.I.F=this.I.
F|0x5000;B.pe([A=this.I,A.CK],this);this.I.Ac([0,0,(A=this.I.N)[2]-A[0],A[3]-A[1
]]);}if(!!this.AO&&((this.F&0x400)===0x400)){this.AO.F$.F=this.AO.F$.F|0x1000;this.
I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],this);}},Gp:function(){var Ab=this.I;while(
!!Ab){var DR=(E.Root.isPrototypeOf(Ab)?Ab:null);if(!!DR)return DR;Ab=Ab.I;}return null;
},C5:function(AM,aClip,aOffset,AG,aBlend){},GetClipping:function(){return this.GetExtent(
);},BA:function(AB){return null;},FA:function(Ai,P,CD,FO,DM,GN){return null;},Ia:
function(Ai){return Ai;},Ib:function(Z,C1){return AF;},JR:function(aOffset,IM){}
,GetExtent:function(){return AV;},AI:function(CC,C0){var A;if(((this.F&0x200)===
0x200))CC=CC&~0x400;var KN=(this.F&~C0)|CC;var Dw=KN^this.F;this.F=KN;if(!!this.
I&&!!(Dw&0x14)){var LR=((this.F&0x14)===0x14);if(LR&&!this.I.C7)this.I.GB(this);
if(!LR&&(this.I.C7===this))this.I.GB(this.I.K5(this,0x14));}if(!!this.I&&!!(Dw&0x403
))this.I.Ac(this.GetClipping());if(((!!this.AO&&!!this.I)&&((KN&0x400)===0x400))&&((
Dw&0x1)===0x1)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK
],this);}if(!!this.I&&((Dw&0x400)===0x400)){this.AO=null;this.F=this.F|0x800;this.
I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],this);}if(((((Dw&0x100000)===0x100000)&&((
C0&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AI(0x0,0x10);if(((((Dw&0x100000)===0x100000)&&((CC&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.I)&&((this.I.F&0x10)===0x10))))this.AI(0x10,0x0);if(((((Dw&0x200000
)===0x200000)&&((C0&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AI(0x10,0x0);if((((((Dw&0x200000)===0x200000)&&((CC&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
I&&!((this.I.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.I)&&(null!==
this))))this.AI(0x0,0x10);},_Init:function(aArg){this.__proto__=E.B$;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Av)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Af)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AO)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::View"};E.Hj={BF:B.wf,B9:B.
wf,BE:B.wf,B8:B.wf,HK:function(Z,IN){var Aa=B._NewObject(E.Il,0);this.AO=null;Aa.
Cn=this.GetExtent();Aa.AJ=Z;Aa.F$=IN;Aa.HX=this.B8;Aa.HY=this.BE;Aa.HZ=this.B9;Aa.
H0=this.BF;this.AO=Aa;},Ib:function(Z,C1){var A;var Au=this.CA;var Aa=(E.Il.isPrototypeOf(
A=this.AO)?A:null);var U=Aa.Cn[0];var V=Aa.Cn[1];var S=Aa.Cn[2];var W=Aa.Cn[3];var
Cm=[Z[2]-Z[0],Z[3]-Z[1]];var AL=S-U;var AK=W-V;if(!C1){var Dj=[(A=Aa.AJ)[2]-A[0]
,A[3]-A[1]];U=U-Aa.AJ[0];V=V-Aa.AJ[1];if(Dj[0]!==Cm[0]){var A4=((Au&0x4)===0x4);
var A5=((Au&0x8)===0x8);var DP=((Au&0x1)===0x1);if(!A4&&(DP||!A5))U=((U*Cm[0])/Dj[
0])|0;if(!A5&&(DP||!A4)){S=S-Aa.AJ[0];S=((S*Cm[0])/Dj[0])|0;S=S-Cm[0];}else S=S-
Aa.AJ[2];U=U+Z[0];S=S+Z[2];if(!DP){if(A4&&!A5)S=U+AL;else if(!A4&&A5)U=S-AL;else{
U=U+((((S-U)-AL)/2)|0);S=U+AL;}}}else{S=S-Aa.AJ[2];U=U+Z[0];S=S+Z[2];}if(Dj[1]!==
Cm[1]){var A6=((Au&0x10)===0x10);var A3=((Au&0x20)===0x20);var DQ=((Au&0x2)===0x2
);if(!A6&&(DQ||!A3))V=((V*Cm[1])/Dj[1])|0;if(!A3&&(DQ||!A6)){W=W-Aa.AJ[1];W=((W*
Cm[1])/Dj[1])|0;W=W-Cm[1];}else W=W-Aa.AJ[3];V=V+Z[1];W=W+Z[3];if(!DQ){if(A6&&!A3
)W=V+AK;else if(!A6&&A3)V=W-AK;else{V=V+((((W-V)-AK)/2)|0);W=V+AK;}}}else{W=W-Aa.
AJ[3];V=V+Z[1];W=W+Z[3];}}else{switch(C1){case 3:{U=Z[0];S=U+AL;}break;case 4:{S=
Z[2];U=S-AL;}break;case 1:{V=Z[1];W=V+AK;}break;case 2:{W=Z[3];V=W-AK;}break;default:;
}if((C1===3)||(C1===4)){var A6=((Au&0x10)===0x10);var A3=((Au&0x20)===0x20);var DQ=((
Au&0x2)===0x2);if(DQ){V=Z[1];W=Z[3];}else if(A6&&!A3){V=Z[1];W=V+AK;}else if(A3&&
!A6){W=Z[3];V=W-AK;}else{V=Z[1]+((((Z[3]-Z[1])-AK)/2)|0);W=V+AK;}}if((C1===1)||(
C1===2)){var A4=((Au&0x4)===0x4);var A5=((Au&0x8)===0x8);var DP=((Au&0x1)===0x1);
if(DP){U=Z[0];S=Z[2];}else if(A4&&!A5){U=Z[0];S=U+AL;}else if(A5&&!A4){S=Z[2];U=
S-AL;}else{U=Z[0]+((((Z[2]-Z[0])-AL)/2)|0);S=U+AL;}}}Aa.isEmpty=(U>=S)||(V>=W);AL=(
S-U)-1;AK=(W-V)-1;var EL=Aa.Cn[0];var EM=Aa.Cn[1];var D$=(Aa.Cn[2]-EL)-1;var D_=(
Aa.Cn[3]-EM)-1;if(!D$)D$=1;if(!D_)D_=1;if(((this.F&0x100)===0x100)){this.B8=[U+((((
Aa.HX[0]-EL)*AL)/D$)|0),V+((((Aa.HX[1]-EM)*AK)/D_)|0)];this.BE=[U+((((Aa.HY[0]-EL
)*AL)/D$)|0),V+((((Aa.HY[1]-EM)*AK)/D_)|0)];this.B9=[U+((((Aa.HZ[0]-EL)*AL)/D$)|
0),V+((((Aa.HZ[1]-EM)*AK)/D_)|0)];this.BF=[U+((((Aa.H0[0]-EL)*AL)/D$)|0),V+((((Aa.
H0[1]-EM)*AK)/D_)|0)];}else{this.Iy([U+((((Aa.HX[0]-EL)*AL)/D$)|0),V+((((Aa.HX[1
]-EM)*AK)/D_)|0)]);this.Iz([U+((((Aa.HY[0]-EL)*AL)/D$)|0),V+((((Aa.HY[1]-EM)*AK)
/D_)|0)]);this.IA([U+((((Aa.HZ[0]-EL)*AL)/D$)|0),V+((((Aa.HZ[1]-EM)*AK)/D_)|0)]);
this.IB([U+((((Aa.H0[0]-EL)*AL)/D$)|0),V+((((Aa.H0[1]-EM)*AK)/D_)|0)]);this.AO=Aa;
}return[AL+1,AK+1];},JR:function(aOffset,IM){if(IM){this.B8=B.abf(this.B8,aOffset
);this.BE=B.abf(this.BE,aOffset);this.B9=B.abf(this.B9,aOffset);this.BF=B.abf(this.
BF,aOffset);}else{this.Iy(B.abf(this.B8,aOffset));this.Iz(B.abf(this.BE,aOffset)
);this.IA(B.abf(this.B9,aOffset));this.IB(B.abf(this.BF,aOffset));}},GetExtent:function(
){if(!!this.AO&&this.AO.isEmpty)return AV;var U=this.B8[0];var V=this.B8[1];var S=
this.B9[0];var W=this.B9[1];if((((this.BF[0]!==U)||(this.BE[1]!==V))||(this.BE[0
]!==S))||(this.BF[1]!==W)){if(this.BE[0]<U)U=this.BE[0];if(this.B9[0]<U)U=this.B9[
0];if(this.BF[0]<U)U=this.BF[0];if(this.BE[1]<V)V=this.BE[1];if(this.B9[1]<V)V=this.
B9[1];if(this.BF[1]<V)V=this.BF[1];if(this.B8[0]>S)S=this.B8[0];if(this.BE[0]>S)
S=this.BE[0];if(this.BF[0]>S)S=this.BF[0];if(this.B8[1]>W)W=this.B8[1];if(this.BE[
1]>W)W=this.BE[1];if(this.BF[1]>W)W=this.BF[1];}else{var tmp;if(S<U){tmp=U;U=S;S=
tmp;}if(W<V){tmp=V;V=W;W=tmp;}}return[U,V,S+1,W+1];},IB:function(C){var A;if(B.aaX(
C,this.BF))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping()
);this.AO=null;this.BF=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],this);}},IA:function(
C){var A;if(B.aaX(C,this.B9))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(
this.GetClipping());this.AO=null;this.B9=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Ac(this.GetClipping());if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],this
);}},Iz:function(C){var A;if(B.aaX(C,this.BE))return;if(!!this.I&&((this.F&0x1)===
0x1))this.I.Ac(this.GetClipping());this.AO=null;this.BE=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Ac(this.GetClipping());if((!!this.I&&((this.F&0x400)===0x400)
)&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.
pe([A=this.I,A.CK],this);}},Iy:function(C){var A;if(B.aaX(C,this.B8))return;if(!
!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping());this.AO=null;this.B8=
C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping());if((!!this.I&&((
this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],this);}},JK:function(FT){var AR=B.abi(4
,B.wf,null);var H=0;var A0=3;var KF=false;var KG=false;AR.Set(0,this.B8);AR.Set(
1,this.BE);AR.Set(2,this.B9);AR.Set(3,this.BF);while(H<4){var Mo=AR.Get(H)[0];var
Jb=AR.Get(H)[1];var PJ=AR.Get(A0)[0];var KZ=AR.Get(A0)[1];if(((Jb>FT[1])!==(KZ>FT[
1]))||((Jb<FT[1])!==(KZ<FT[1]))){var Ee=((((PJ-Mo)*(FT[1]-Jb))/(KZ-Jb))|0)+Mo;if(
FT[0]>Ee)KF=!KF;if(FT[0]<Ee)KG=!KG;}A0=H;H=H+1;}return KF||KG;},MJ:function(){return((((
this.B8[0]===this.BF[0])&&(this.BE[0]===this.B9[0]))&&(this.B8[1]===this.BE[1]))&&(
this.B9[1]===this.BF[1]))||((((this.B8[0]===this.BE[0])&&(this.B9[0]===this.BF[0
]))&&(this.B8[1]===this.BF[1]))&&(this.BE[1]===this.B9[1]));},_Init:function(aArg
){E.B$._Init.call(this,aArg);this.__proto__=E.Hj;},_className:"Core::QuadView"};
E.Bb={N:B.wg,HK:function(Z,IN){var Aa=B._NewObject(E.Ik,0);Aa.Cn=this.N;Aa.AJ=Z;
Aa.F$=IN;this.AO=Aa;},Ib:function(Z,C1){var A;var Au=this.CA;var Aa=this.AO;var U=
Aa.Cn[0];var V=Aa.Cn[1];var S=Aa.Cn[2];var W=Aa.Cn[3];var Cm=[Z[2]-Z[0],Z[3]-Z[1
]];var AL=S-U;var AK=W-V;if(!C1){var Dj=[(A=Aa.AJ)[2]-A[0],A[3]-A[1]];U=U-Aa.AJ[
0];V=V-Aa.AJ[1];if(Dj[0]!==Cm[0]){var A4=((Au&0x4)===0x4);var A5=((Au&0x8)===0x8
);var DP=((Au&0x1)===0x1);if(!A4&&(DP||!A5))U=((U*Cm[0])/Dj[0])|0;if(!A5&&(DP||!
A4)){S=S-Aa.AJ[0];S=((S*Cm[0])/Dj[0])|0;S=S-Cm[0];}else S=S-Aa.AJ[2];U=U+Z[0];S=
S+Z[2];if(!DP){if(A4&&!A5)S=U+AL;else if(!A4&&A5)U=S-AL;else{U=U+((((S-U)-AL)/2)|
0);S=U+AL;}}}else{S=S-Aa.AJ[2];U=U+Z[0];S=S+Z[2];}if(Dj[1]!==Cm[1]){var A6=((Au&
0x10)===0x10);var A3=((Au&0x20)===0x20);var DQ=((Au&0x2)===0x2);if(!A6&&(DQ||!A3
))V=((V*Cm[1])/Dj[1])|0;if(!A3&&(DQ||!A6)){W=W-Aa.AJ[1];W=((W*Cm[1])/Dj[1])|0;W=
W-Cm[1];}else W=W-Aa.AJ[3];V=V+Z[1];W=W+Z[3];if(!DQ){if(A6&&!A3)W=V+AK;else if(!
A6&&A3)V=W-AK;else{V=V+((((W-V)-AK)/2)|0);W=V+AK;}}}else{W=W-Aa.AJ[3];V=V+Z[1];W=
W+Z[3];}}else{switch(C1){case 3:{U=Z[0];S=U+AL;}break;case 4:{S=Z[2];U=S-AL;}break;
case 1:{V=Z[1];W=V+AK;}break;case 2:{W=Z[3];V=W-AK;}break;default:;}if((C1===3)||(
C1===4)){var A6=((Au&0x10)===0x10);var A3=((Au&0x20)===0x20);var DQ=((Au&0x2)===
0x2);if(DQ){V=Z[1];W=Z[3];}else if(A6&&!A3){V=Z[1];W=V+AK;}else if(A3&&!A6){W=Z[
3];V=W-AK;}else{V=Z[1]+((((Z[3]-Z[1])-AK)/2)|0);W=V+AK;}}if((C1===1)||(C1===2)){
var A4=((Au&0x4)===0x4);var A5=((Au&0x8)===0x8);var DP=((Au&0x1)===0x1);if(DP){U=
Z[0];S=Z[2];}else if(A4&&!A5){U=Z[0];S=U+AL;}else if(A5&&!A4){S=Z[2];U=S-AL;}else{
U=Z[0]+((((Z[2]-Z[0])-AL)/2)|0);S=U+AL;}}}Aa.isEmpty=(U>=S)||(V>=W);if(((this.F&
0x100)===0x100))this.N=[U,V,S,W];else{this.M([U,V,S,W]);this.AO=Aa;}return[S-U,W-
V];},JR:function(aOffset,IM){if(IM)this.N=B.abh(this.N,aOffset);else this.M(B.abh(
this.N,aOffset));},GetExtent:function(){return this.N;},M:function(C){var A;if(B.
aaY(C,this.N))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping(
));this.AO=null;this.N=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],this);}},_Init:function(
aArg){E.B$._Init.call(this,aArg);this.__proto__=E.Bb;},_className:"Core::RectView"
};E.Ae={Bs:null,BZ:null,IZ:null,C7:null,DJ:255,HF:0,HI:0,HH:0,HG:0,A9:function(aArg
){this.BL();},C5:function(AM,aClip,aOffset,AG,aBlend){var A;AG=((AG+1)*this.DJ)>>
8;aBlend=aBlend&&((this.F&0x2)===0x2);this.Pg(AM,aClip,B.abf(aOffset,this.N.slice(
0,2)),AG,aBlend);},GetClipping:function(){var A;var G=this.N;G=[].concat(G[0]-this.
HG,G.slice(1,4));G=B.abP(G,G[1]-this.HI);G=B.abN(G,G[2]+this.HH);G=[].concat(G.slice(
0,3),G[3]+this.HF);if(((this.F&0x80000)===0x80000)){var Gd=AV;var J;for(J=this.Bs;
!!J;J=J.Av)if(((J.F&0x1)===0x1))Gd=B.wC(Gd,J.GetClipping());G=B.wC(G,B.abh(Gd,this.
N.slice(0,2)));}return G;},FA:function(Ai,P,CD,FO,DM,GN){var A;var J=this.BZ;var
FY=null;var Q=AV;var CG=null;if(((A=B.lb(Ai,this.N))[0]>=A[2])||(A[1]>=A[3]))return null;
Ai=B.abg(Ai,this.N.slice(0,2));if(!!DM){J=DM;while(!!J&&(J.I!==this))J=J.I;}while(
!!J){if(((J.F&0x400)===0x400)&&!CG){CG=J.Af;while(!!CG&&!((CG.F&0x200)===0x200))
CG=CG.Af;if(!!CG)Q=B.lb(Ai,CG.GetExtent());else Q=AV;}if(CG===J){CG=null;Q=AV;}if((
!!FO&&!!(E.Ae.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var Cn=J.GetExtent();var IT=FO;var FX=null;if(IT===J)IT=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(Cn,Q))[0]>=A[2])||(A[1]>=A[3])))FX=
J.FA(Q,P,CD,IT,DM,GN);}else if(!(((A=B.lb(Cn,Ai))[0]>=A[2])||(A[1]>=A[3]))||(FO===
J))FX=J.FA(Ai,P,CD,IT,DM,GN);J=J.Af;if(!!FX){if(!FY||((FX.G0<FY.G0)&&(FX.G0>=0))
)FY=FX;if(!FX.G0)J=null;}}else J=J.Af;DM=null;}return FY;},Ia:function(Ai){var A;
var BG;var J=this.Bs;var FV=AV;var HW=true;var result=(Ai=BG=B.abg(Ai,this.N.slice(
0,2)),BG);while(!!J){if(((J.F&0x200)===0x200)){var GV=(E.Hi.isPrototypeOf(J)?J:null
);FV=B.lb(Ai,GV.N);HW=((GV.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(HW){var Q=B.lb(J.GetClipping(),FV);if(!((Q[0]>=Q[2])||(Q[1]>=Q[3])))result=
B.wC(result,J.Ia(Q));}}else{var Q=B.lb(J.GetClipping(),Ai);if(!((Q[0]>=Q[2])||(Q[
1]>=Q[3])))result=B.wC(result,J.Ia(Q));}}J=J.Av;}return B.lb(B.abh(result,this.N.
slice(0,2)),this.N);},AI:function(CC,C0){var A;var I1=this.F;if((!!this.I&&((this.
F&0x80001)===0x80001))&&((C0&0x80000)===0x80000))this.I.Ac(this.GetClipping());E.
Bb.AI.call(this,CC,C0);if(((!!this.I&&((this.F&0x1)===0x1))&&((CC&0x80000)===0x80000
))&&!((I1&0x80000)===0x80000))this.I.Ac(this.GetClipping());var Dw=this.F^I1;if(
!!this.C7&&((Dw&0x40)===0x40)){if(((this.F&0x40)===0x40))this.C7.AI(0x40,0x0);else
this.C7.AI(0x0,0x40);}if(((Dw&0x10)===0x10)){var J;for(J=this.Bs;!!J;J=J.Av)if((((
J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000)===0x10000)||(
null===J)))J.AI(CC&0x10,C0&0x10);}if(!!Dw){this.F=this.F|0x8000;B.pe([this,this.
Ja],this);}},M:function(C){var A;if(B.aaY(C,this.N))return;var Ft=[(A=this.N)[2]-
A[0],A[3]-A[1]];var KM=[C[2]-C[0],C[3]-C[1]];var GW=!B.aaX(Ft,KM);E.Bb.M.call(this
,C);if((GW&&(Ft[0]>0))&&(Ft[1]>0)){var AJ=[].concat(AF,Ft);var J=this.Bs;while(!
!J){if((!J.AO&&(J.CA!==0x14))&&!((J.F&0x400)===0x400))J.HK(AJ,null);J=J.Av;}}if(
GW){this.F=this.F|0x5000;B.pe([this,this.Ja],this);}},Md:function(AB){var LW=(E.
KeyEvent.isPrototypeOf(AB)?AB:null);var Dx=this.IZ;if(!LW)return null;while(!!Dx&&(
!Dx.BS||!Dx.BA(LW)))Dx=Dx.Av;return Dx;},Pg:function(AM,aClip,aOffset,AG,aBlend){
var A;var J=this.Bs;var FV=AV;var HW=true;this.Mz(AM,aClip,aOffset,AG,aBlend);while(
!!J){if(((J.F&0x200)===0x200)){var GV=(E.Hi.isPrototypeOf(J)?J:null);HW=((GV.F&0x1
)===0x1);FV=aClip;if(!((GV.F&0x80000)===0x80000))FV=B.lb(FV,B.abh(GV.N,aOffset));
}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===0x400)){if(HW){var Q=B.lb(B.abh(J.GetClipping(
),aOffset),FV);if(!((Q[0]>=Q[2])||(Q[1]>=Q[3])))J.C5(AM,Q,aOffset,AG,aBlend);}}else{
var Q=B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((Q[0]>=Q[2])||(Q[1]>=Q[3])
))J.C5(AM,Q,aOffset,AG,aBlend);}}J=J.Av;}this.MC(AM,aClip,aOffset,AG,aBlend);},Pv:
function(){var A;var KD=((this.F&0x1000)===0x1000);var EN=[0,0,(A=this.N)[2]-A[0
],A[3]-A[1]];var Ea=false;var GR=AV;var KB=AV;var J=this.BZ;var CG=null;while(!!
J){if(((J.F&0x800)===0x800)){Ea=true;J.F=J.F&~0x800;}if(Ea&&((J.F&0x200)===0x200
))Ea=false;J=J.Af;}Ea=false;J=this.Bs;if(KD){this.F=this.F&~0x1000;KD=!((EN[0]>=
EN[2])||(EN[1]>=EN[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400
)){if(!!J.AO&&(J.AO.F$!==CG))J.AO=null;if((!J.AO&&Ea)&&(J.CA!==0x14))J.HK(KB,CG);
}if(!!J.AO){if(KD&&!((J.F&0x400)===0x400))J.Ib(EN,0);if(Ea&&((J.F&0x400)===0x400
))J.Ib(KB,0);}if(((J.F&0x200)===0x200)){Ea=((J.F&0x1000)===0x1000);CG=(E.Hi.isPrototypeOf(
J)?J:null);if(Ea){J.F=J.F&~0x1000;GR=CG.N;KB=GR;Ea=!((GR[0]>=GR[2])||(GR[1]>=GR[
3]));}if(Ea)this.Ac(CG.N);}J=J.Av;}this.F=this.F&~0x2000;this.Lv([EN[2]-EN[0],EN[
3]-EN[1]]);},CK:function(Ax){B.pe([this,this.Ja],this);},Ja:function(Ax){var A;var
PG=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.Pv();}if(((this.F&0x8000)===0x8000)||PG){this.F=this.F&~0x8000;this.Hw(this.
F);}},GB:function(C){var A;if(!!C&&(C.I!==this))throw new Error(C_);if(!!C&&!((C.
F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.C7)return;
if(!!this.C7)this.C7.AI(0x0,0x60);this.C7=C;if(!!C){if(((this.F&0x40)===0x40))C.
AI(0x60,0x0);else C.AI(0x20,0x0);}},MR:function(){var A;return((this.F&0x100000)===
0x100000);},Ba:function(C){if(C)this.AI(0x100000,0x0);else this.AI(0x0,0x100000);
},Hf:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.DJ)return;this.DJ=C;
if(!!this.I&&((this.F&0x1)===0x1))this.I.Ac(this.GetClipping());},O7:function(PH
){this.Hf(PH);},AA:function(C){if(C)this.AI(0x1,0x0);else this.AI(0x0,0x1);},ExtendClipping:
function(FQ,FR,FS,FP){var A;var HD=this.N;var CE=HD;if(FQ<0)FQ=0;if(FQ>255)FQ=255;
if(FR<0)FR=0;if(FR>255)FR=255;if(FS<0)FS=0;if(FS>255)FS=255;if(FP<0)FP=0;if(FP>255
)FP=255;CE=[].concat(CE[0]-(Math.max(FQ,this.HG)&0xFF),CE.slice(1,4));CE=B.abN(CE
,CE[2]+(Math.max(FR,this.HH)&0xFF));CE=B.abP(CE,CE[1]-(Math.max(FS,this.HI)&0xFF
));CE=[].concat(CE.slice(0,3),CE[3]+(Math.max(FP,this.HF)&0xFF));if(FQ!==this.HG
){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var G=CE;G=
B.abN(G,HD[0]);this.I.Ac(G);}this.HG=FQ&0xFF;}if(FR!==this.HH){if((!!this.I&&((this.
F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var G=CE;G=[].concat(HD[2],G.slice(
1,4));this.I.Ac(G);}this.HH=FR&0xFF;}if(FS!==this.HI){if((!!this.I&&((this.F&0x1
)===0x1))&&!((this.F&0x80000)===0x80000)){var G=CE;G=[].concat(G.slice(0,3),HD[1
]);this.I.Ac(G);}this.HI=FS&0xFF;}if(FP!==this.HF){if((!!this.I&&((this.F&0x1)===
0x1))&&!((this.F&0x80000)===0x80000)){var G=CE;G=B.abP(G,HD[3]);this.I.Ac(G);}this.
HF=FP&0xFF;}},MC:function(AM,aClip,aOffset,AG,aBlend){},Mz:function(AM,aClip,aOffset
,AG,aBlend){},GetMaximalSize:function(){return EF;},GetMinimalSize:function(){return AF;
},DispatchEvent:function(AB){var A;var J=this.C7;var Ab=(E.Ae.isPrototypeOf(J)?J:
null);var Bc=null;if(!!J&&((((J.F&0x10000)===0x10000)||((J.F&0x40000)===0x40000)
)||((J.F&0x20000)===0x20000))){J=null;Ab=null;}if(!!Ab)Bc=Ab.DispatchEvent(AB);else
if(!!J)Bc=J.BA(AB);if(!Bc)Bc=this.BA(AB);if(!Bc)Bc=this.Md(AB);return Bc;},BroadcastEventAtPosition:
function(AB,LH,aFilter){var A;var J=this.BZ;var Bc=null;while(!!J&&!Bc){if((!aFilter||((
A=aFilter)&&((J.F&A)===A)))&&B.wa(J.GetExtent(),LH)){var Ab=(E.Ae.isPrototypeOf(
J)?J:null);if(!!Ab)Bc=Ab.BroadcastEventAtPosition(AB,B.abe(LH,Ab.N.slice(0,2)),aFilter
);else Bc=J.BA(AB);}J=J.Af;}if(!Bc)Bc=this.BA(AB);return Bc;},BroadcastEvent:function(
AB,aFilter){var A;var J=this.BZ;var Bc=null;while(!!J&&!Bc){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var Ab=(E.Ae.isPrototypeOf(J)?J:null);if(!!Ab)Bc=Ab.BroadcastEvent(
AB,aFilter);else Bc=J.BA(AB);}J=J.Af;}if(!Bc)Bc=this.BA(AB);if(!Bc)Bc=this.Md(AB
);return Bc;},Lv:function(aSize){},Hw:function(Fh){},BL:function(){this.F=this.F|
0x8000;B.pe([this,this.Ja],this);},Ac:function(Ai){var A;var Ab=this;while(!!Ab&&
!((Ai[0]>=Ai[2])||(Ai[1]>=Ai[3]))){if(!Ab.I&&(Ab!==this)){Ab.Ac(Ai);return;}if(!((
Ab.F&0x1)===0x1))return;var G=Ab.N;Ai=B.abh(Ai,G.slice(0,2));if(!((Ab.F&0x80000)===
0x80000)){G=[].concat(G[0]-Ab.HG,G.slice(1,4));G=B.abP(G,G[1]-Ab.HI);G=B.abN(G,G[
2]+Ab.HH);G=[].concat(G.slice(0,3),G[3]+Ab.HF);Ai=B.lb(Ai,G);}Ab=Ab.I;}},K5:function(
L,aFilter){var A;if(!L||(L.I!==this))return null;var Fs=L.Av;var Fv=L.Af;var HS=
0x10000;if(((aFilter&0x10000)===0x10000))HS=0x0;while(!!Fs||!!Fv){if((!!Fs&&(!aFilter||((
A=aFilter)&&((Fs.F&A)===A))))&&(!HS||!((A=HS)&&((Fs.F&A)===A))))return Fs;if((!!
Fv&&(!aFilter||((A=aFilter)&&((Fv.F&A)===A))))&&(!HS||!((A=HS)&&((Fv.F&A)===A)))
)return Fv;if(!!Fs)Fs=Fs.Av;if(!!Fv)Fv=Fv.Af;}return null;},NE:function(L,Da){var
A;if(!L)throw new Error(Ds);if(L.I!==this)throw new Error(D8);var EI=L;var Bh=L;
var Gf=L.Dr;while(((Da>0)&&!!EI.Av)&&(EI.Av.Dr<=Gf)){EI=EI.Av;Da=Da-1;}while(((Da<
0)&&!!Bh.Af)&&(Bh.Af.Dr>=Gf)){Bh=Bh.Af;Da=Da+1;}if((EI===L)&&(Bh===L))return;if(((
L.F&0x401)===0x401)){if(!!L.Af&&!!L.AO)L.Af.F=L.Af.F|0x800;L.F=L.F|0x800;this.F=
this.F|0x4000;B.pe([this,this.CK],this);}if(((L.F&0x200)===0x200)){if(!!L.Af)L.Af.
F=L.Af.F|0x800;L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK],this);}if(
!!L.Af)L.Af.Av=L.Av;if(!!L.Av)L.Av.Af=L.Af;if(this.Bs===L)this.Bs=L.Av;if(this.BZ===
L)this.BZ=L.Af;if(EI!==L){L.Av=EI.Av;L.Af=EI;EI.Av=L;if(!!L.Av)L.Av.Af=L;}if(Bh!==
L){L.Av=Bh;L.Af=Bh.Af;Bh.Af=L;if(!!L.Af)L.Af.Av=L;}if(!L.Av)this.BZ=L;if(!L.Af)this.
Bs=L;if(((L.F&0x1)===0x1))this.Ac(L.GetClipping());},Ey:function(L){var A;if(!L)
throw new Error(GK);if(L.I!==this)throw new Error(D8);if((((L.F&0x401)===0x401)&&
!!L.Af)&&!!L.AO){L.Af.F=L.Af.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK],this
);}if(((L.F&0x200)===0x200)){if(!!L.Af)L.Af.F=L.Af.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.CK],this);}L.AO=null;if(this.C7===L)this.GB(this.K5(L,0x14));if(
!!L.Af)L.Af.Av=L.Av;if(!!L.Av)L.Av.Af=L.Af;if(this.Bs===L)this.Bs=L.Av;if(this.BZ===
L)this.BZ=L.Af;L.I=null;L.Av=null;L.Af=null;if((!((L.F&0x10)===0x10)&&((L.F&0x100000
)===0x100000))&&!((this.F&0x80)===0x80))L.AI(0x10,0x0);if(((L.F&0x1)===0x1))this.
Ac(L.GetClipping());},R:function(L,Da){var A;if(!L)throw new Error(Hx);if(!!L.I)
throw new Error(FM);var Bh=null;var Gf=L.Dr;if(((Da<0)&&!!this.BZ)&&(this.BZ.Dr>=
Gf)){Bh=this.BZ;Da=Da+1;}while((((Da<0)&&!!Bh)&&!!Bh.Af)&&(Bh.Af.Dr>=Gf)){Bh=Bh.
Af;Da=Da+1;}if((!Bh&&!!this.BZ)&&(this.BZ.Dr>Gf))Bh=this.BZ;while((!!Bh&&!!Bh.Af
)&&(Bh.Af.Dr>Gf))Bh=Bh.Af;if(!Bh){L.I=this;L.Af=this.BZ;if(!!this.BZ)this.BZ.Av=
L;if(!this.Bs)this.Bs=L;this.BZ=L;}else{L.I=this;L.Af=Bh.Af;L.Av=Bh;Bh.Af=L;if(!
!L.Af)L.Af.Av=L;else this.Bs=L;}if(((L.F&0x1)===0x1))this.Ac(L.GetClipping());if(((
L.F&0x80)===0x80)&&(B.aam().MH()===L))L.AI(0x10,0x0);else if(!((this.F&0x10)===0x10
)&&((L.F&0x200010)===0x200010))L.AI(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((
L.F&0x10)===0x10))&&((L.F&0x100000)===0x100000))L.AI(0x10,0x0);if(((!this.C7&&((
L.F&0x4)===0x4))&&((L.F&0x10)===0x10))&&!((L.F&0x10000)===0x10000))this.GB(L);if(((
L.F&0x401)===0x401)){L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK],this
);}if(((L.F&0x200)===0x200)){L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
CK],this);}},JZ:function(){return this.DJ;},_Init:function(aArg){E.Bb._Init.call(
this,aArg);this.__proto__=E.Ae;this.F=0x10001F;this.A9(aArg);},_Mark:function(D){
var A;E.Bb._Mark.call(this,D);if((A=this.Bs)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.BZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IZ)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.C7)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::Group"};E.Root={CJ:null,AQ:B.abi(10,null,null),GO:null,EK:null,H9:0,A7:0,
BN:B.abi(10,0,null),IS:B.abi(10,B.wg,null),De:B.abi(10,0,null),D9:B.abi(10,B.wf,
null),GQ:B.abi(10,0,null),EJ:B.abi(10,B.wf,null),Dd:B.abi(10,B.wf,null),CF:B.abi(
10,B.wf,null),DN:B.abi(10,B.wf,null),At:0,IV:0,IU:0,B6:B.abi(4,0,null),Bo:B.abi(
4,B.wg,null),Bm:0,HN:0,GT:0,KE:true,A9:function(aArg){if(!!!this.K){var obj=this;
B.abD(obj);}},Gp:function(){return this;},C5:function(AM,aClip,aOffset,AG,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AM.JA(aClip
,B.abh(B.abh(aClip,aOffset),this.N.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);E.Ae.C5.call(this,AM,aClip,aOffset,AG,aBlend);},AI:function(CC
,C0){var A;E.Ae.AI.call(this,CC,C0);if(!this.I&&(((CC&0x1)===0x1)||((C0&0x1)===0x1
)))this.Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);if(!this.I&&(((CC&0x2)===0x2)||((
C0&0x2)===0x2)))this.Ac([0,0,(A=this.N)[2]-A[0],A[3]-A[1]]);},GB:function(C){if((
C!==null)||!C)E.Ae.GB.call(this,C);},Hf:function(C){var A;var C3=this.DJ;E.Ae.Hf.
call(this,C);if(((C3!==this.DJ)&&!this.I)&&((this.F&0x1)===0x1))this.Ac([0,0,(A=
this.N)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(AB){if(!!AB){AB.G_=!!this.A7;
if(!!this.A7)AB.AU=this.A7;}var Bc;Bc=E.Ae.DispatchEvent.call(this,AB);this.A7=0;
return Bc;},BroadcastEvent:function(AB,aFilter){if(!!AB){AB.G_=!!this.A7;if(!!this.
A7)AB.AU=this.A7;}var Bc=E.Ae.BroadcastEvent.call(this,AB,aFilter);this.A7=0;return Bc;
},Ac:function(Ai){var A;if(this.H9>0)throw new Error(GL);var fullScreenUpdate=false;
fullScreenUpdate=B.m7;if(fullScreenUpdate)Ai=[0,0,(A=this.N)[2]-A[0],A[3]-A[1]];
if(!!this.I){E.Ae.Ac.call(this,Ai);return;}Ai=B.lb(B.abh(Ai,this.N.slice(0,2)),this.
N);if((Ai[0]>=Ai[2])||(Ai[1]>=Ai[3]))return;var H;for(H=0;H<this.Bm;H=H+1)if(!(((
A=B.lb(this.Bo.Get(H),Ai))[0]>=A[2])||(A[1]>=A[3]))){this.Bo.Set(H,B.wC(this.Bo.
Get(H),Ai));this.B6.Set(H,B.aaH(this.Bo.Get(H)));return;}if(this.Bm<3){this.Bo.Set(
this.Bm,Ai);this.B6.Set(this.Bm,B.aaH(Ai));this.Bm=this.Bm+1;return;}var A0;var CI;
var HM=0;var HP=0;var LJ=2147483647;this.Bo.Set(this.Bm,Ai);this.B6.Set(this.Bm,
B.aaH(Ai));for(A0=0;A0<=this.Bm;A0=A0+1)for(CI=A0+1;CI<=this.Bm;CI=CI+1){var I$=
B.aaH(B.wC(this.Bo.Get(A0),this.Bo.Get(CI)));var Mc=((I$<<8)/(this.B6.Get(A0)+this.
B6.Get(CI)))|0;if(Mc<LJ){LJ=Mc;HM=A0;HP=CI;}}this.Bo.Set(HM,B.wC(this.Bo.Get(HM)
,this.Bo.Get(HP)));this.B6.Set(HM,B.aaH(this.Bo.Get(HM)));if(HP!==this.Bm){this.
Bo.Set(HP,this.Bo.Get(this.Bm));this.B6.Set(HP,this.B6.Get(this.Bm));}},Pe:function(
){var BO=B._NewObject(E.Ie,0);BO.G_=!!this.A7;if(!!this.A7)BO.AU=this.A7;return BO;
},FW:function(){var BO=B._NewObject(E.Gk,0);BO.G_=!!this.A7;if(!!this.A7)BO.AU=this.
A7;return BO;},GP:function(){var BO=B._NewObject(E.Jn,0);BO.G_=!!this.A7;if(!!this.
A7)BO.AU=this.A7;return BO;},Pf:function(Ax){var H;var FY=false;for(H=0;H<10;H=H+
1)if(!!this.AQ.Get(H)){var Bu=this.CF.Get(H);var Ab=this.AQ.Get(H).I;while(!!Ab&&(
Ab!==this)){Bu=B.abe(Bu,Ab.N.slice(0,2));Ab=Ab.I;}if(!Ab&&(this.AQ.Get(H)!==this
)){var tmp=this.AQ.Get(H);this.At=H;this.AQ.Set(H,null);tmp.BA(this.FW().InitializeUp(
H,this.EJ.Get(H),this.D9.Get(H),this.De.Get(H),this.BN.Get(H)+1,this.Dd.Get(H),false
,this.CF.Get(H),this.DN.Get(H)));this.BroadcastEvent(this.GP().InitializeUp(H,this.
BN.Get(H)+1,false,tmp,this.CF.Get(H)),0x18);}else{this.De.Set(H,(this.EK.AU-this.
GQ.Get(H))|0);if(this.De.Get(H)<10)this.De.Set(H,10);this.At=H;this.AQ.Get(H).BA(
this.FW().InitializeHold(H,Bu,this.D9.Get(H),this.De.Get(H),this.BN.Get(H)+1,this.
Dd.Get(H),this.CF.Get(H),this.DN.Get(H)));FY=true;}}if(!FY)this.EK.Ba(false);},GetFPS:
function(){var ticksCount=0;var LS=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.IV&&(ticksCount>this.IV))LS=((this.IU*1000)/((ticksCount-this.IV)|0))|0;this.
IU=0;this.IV=ticksCount;return LS;},Update:function(){var A;if(!this.GO)this.GO=
B._NewObject(B.Graphics.Canvas,0);this.GO.Lc([(A=this.N)[2]-A[0],A[3]-A[1]]);this.
GO.Update();return this.UpdateGE20(this.GO);},UpdateGE20:function(AM){if(!this.BeginUpdate(
))return AV;var Ed=this.UpdateCanvas(AM,AF);this.EndUpdate();return Ed;},EndUpdate:
function(){if(this.Bm>0){this.IU=this.IU+1;this.Bm=0;}},UpdateCanvas:function(AM
,aOffset){var A;var Ed=AV;var O$=[].concat(aOffset,B.abf(AM.FrameSize,aOffset));
var H;var A0=this.Bm;this.H9=this.H9+1;AM.FZ=this;for(H=0;(H<A0)&&(H<4);H=H+1)if(
this.B6.Get(H)>0){this.C5(AM,B.abg(this.Bo.Get(H),aOffset),[-aOffset[0],-aOffset[
1]],255,true);Ed=B.wC(Ed,B.lb(O$,this.Bo.Get(H)));}else A0=A0+1;AM.FZ=null;this.
H9=this.H9-1;if(!((Ed[0]>=Ed[2])||(Ed[1]>=Ed[3])))return B.abg(Ed,aOffset);else return Ed;
},GetUpdateRegion:function(IO){var H;var A0=this.Bm;if(IO<0)return AV;for(H=0;(H<
A0)&&(H<4);H=H+1)if(!this.B6.Get(H)){A0=A0+1;IO=IO+1;}else if(H===IO)return this.
Bo.Get(H);return AV;},BeginUpdate:function(){var A;var H;if(!!this.Bm&&!B.aaY(this.
Bo.Get(0),[0,0,(A=this.N)[2]-A[0],A[3]-A[1]])){var Mm=B.abi(3,B.wg,null);var Ml=
this.Bm;for(H=0;H<Ml;H++)Mm.Set(H,this.Bo.Get(H));for(H=0;H<Ml;H++){var Me=B.abh(
Mm.Get(H),this.N.slice(0,2));var Mf=this.Ia(Me);if(!B.aaY(Me,Mf))this.Ac(B.abg(Mf
,this.N.slice(0,2)));}}var A0;var CI;for(A0=0;A0<(this.Bm-1);A0++)if(this.B6.Get(
A0)>0)for(CI=A0+1;CI<this.Bm;CI++)if(this.B6.Get(CI)>0){var I$=B.aaH(B.wC(this.Bo.
Get(A0),this.Bo.Get(CI)));if(((I$-this.B6.Get(A0))-this.B6.Get(CI))<0){this.Bo.Set(
A0,B.wC(this.Bo.Get(A0),this.Bo.Get(CI)));this.B6.Set(A0,I$);this.B6.Set(CI,0);}
}for(H=this.Bm-1;H>=0;H--)if(!this.B6.Get(H))this.Bm=this.Bm-1;return this.Bm;},
DoesNeedUpdate:function(){if(this.Bm>0)return true;return false;},Initialize:function(
aSize){this.M([].concat(AF,aSize));if(this.KE)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ac(this.N);return this;},SetRootFocus:function(Ko){if(Ko===this.KE)return false;
this.KE=Ko;if(!Ko)this.AI(0x0,0x40);else this.AI(0x40,0x0);return true;},SetUserInputTimestamp:
function(O_){this.A7=O_;},DriveKeyboardHitting:function(Bq,Hy,Dt){var A;var KW=!
!this.CJ;if(!!this.CJ&&((!Dt||(this.HN!==Bq))||(this.GT!==Hy))){var BO=null;var J=(
E.B$.isPrototypeOf(A=this.CJ)?A:null);var Dx=(E.Fd.isPrototypeOf(A=this.CJ)?A:null
);if(!!this.HN)BO=B._NewObject(E.KeyEvent,0).Initialize(this.HN,false);if(this.GT
!==0x00)BO=B._NewObject(E.KeyEvent,0).Initialize2(this.GT,false);if(!!Dx)Dx.BA(BO
);else if(!!J)J.BA(BO);this.HN=0;this.GT=0x00;this.CJ=null;}if(!!this.CJ){var BO=
null;var J=(E.B$.isPrototypeOf(A=this.CJ)?A:null);var Dx=(E.Fd.isPrototypeOf(A=this.
CJ)?A:null);if(!!Bq)BO=B._NewObject(E.KeyEvent,0).Initialize(Bq,true);if(this.GT
!==0x00)BO=B._NewObject(E.KeyEvent,0).Initialize2(Hy,true);if(!!Dx)Dx.BA(BO);else
if(!!J)J.BA(BO);}if(!this.CJ&&Dt){if(!!Bq)this.CJ=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize(Bq,true));if(Hy!==0x00)this.CJ=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize2(Hy,true));if(!(E.Fd.isPrototypeOf(A=this.CJ)?A:null)&&
!(E.B$.isPrototypeOf(A=this.CJ)?A:null))this.CJ=null;this.HN=Bq;this.GT=Hy;KW=KW||
!!this.CJ;}this.A7=0;return KW;},DriveCursorMovement:function(BH){return this.DriveMultiTouchMovement(
this.At,BH);},DriveMultiTouchMovement:function(P,BH){if((P<0)||(P>9)){this.A7=0;
return false;}var CT=B.abe(BH,this.CF.Get(P));this.CF.Set(P,BH);if(!this.AQ.Get(
P)||B.aaX(CT,AF)){this.A7=0;return false;}var Bu=BH;var Ab=this.AQ.Get(P).I;while(
!!Ab&&(Ab!==this)){Bu=B.abe(Bu,Ab.N.slice(0,2));Ab=Ab.I;}if(!Ab&&(this.AQ.Get(P)
!==this)){var tmp=this.AQ.Get(P);this.At=P;this.AQ.Set(P,null);tmp.BA(this.FW().
InitializeUp(P,this.EJ.Get(P),this.D9.Get(P),this.De.Get(P),this.BN.Get(P)+1,this.
Dd.Get(P),false,this.CF.Get(P),this.DN.Get(P)));this.BroadcastEvent(this.GP().InitializeUp(
P,this.BN.Get(P)+1,false,tmp,BH),0x18);}else{this.EJ.Set(P,Bu);this.At=P;this.AQ.
Get(P).BA(this.Pe().Initialize(P,Bu,this.D9.Get(P),CT,this.De.Get(P),this.BN.Get(
P)+1,this.Dd.Get(P),BH,this.DN.Get(P)));}this.A7=0;return true;},DriveCursorHitting:
function(Dt,P,BH){return this.DriveMultiTouchHitting(Dt,P,BH);},DriveMultiTouchHitting:
function(Dt,P,BH){if((P<0)||(P>9)){this.A7=0;return false;}var ticksCount=this.A7;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var PA=this.A7;this.DriveMultiTouchMovement(
P,BH);BH=this.CF.Get(P);this.A7=PA;if(Dt)this.DN.Set(P,BH);if(Dt&&!this.AQ.Get(P
)){var Ca;var Bu=BH;if(B.wa(this.IS.Get(P),BH)&&((ticksCount-this.GQ.Get(P))<=250
))this.BN.Set(P,this.BN.Get(P)+1);else this.BN.Set(P,0);this.IS.Set(P,B.abh(EG,BH
));this.GQ.Set(P,ticksCount);Ca=this.FA(B.abh(EG,BH),P,this.BN.Get(P)+1,null,null
,0x0);if(!!Ca){this.BroadcastEvent(this.GP().InitializeDown(P,this.BN.Get(P)+1,false
,Ca.B$,BH),0x18);this.AQ.Set(P,Ca.B$);this.Dd.Set(P,Ca.Er);}else{this.AQ.Set(P,null
);this.Dd.Set(P,AF);this.A7=0;return false;}var Ab=Ca.B$.I;while(!!Ab&&(Ab!==this
)){Bu=B.abe(Bu,Ab.N.slice(0,2));Ab=Ab.I;}this.D9.Set(P,Bu);this.EJ.Set(P,Bu);this.
De.Set(P,0);this.EK.Ba(true);this.At=P;this.AQ.Get(P).BA(this.FW().InitializeDown(
P,Bu,this.BN.Get(P)+1,this.Dd.Get(P),false,BH));this.A7=0;return true;}if(!Dt&&!
!this.AQ.Get(P)){var Bu=BH;var Ab=this.AQ.Get(P).I;while(!!Ab&&(Ab!==this)){Bu=B.
abe(Bu,Ab.N.slice(0,2));Ab=Ab.I;}if(!Ab)Bu=this.EJ.Get(P);this.At=P;var tmp=this.
AQ.Get(P);this.AQ.Set(P,null);tmp.BA(this.FW().InitializeUp(P,Bu,this.D9.Get(P),
this.De.Get(P),this.BN.Get(P)+1,this.Dd.Get(P),false,BH,this.DN.Get(P)));this.BroadcastEvent(
this.GP().InitializeUp(P,this.BN.Get(P)+1,false,tmp,BH),0x18);this.A7=0;return true;
}this.A7=0;return false;},Ln:function(Dv,IL,DM,GN){if(Dv===this)Dv=null;if(!this.
AQ.Get(this.At))return;var Ca;Ca=this.FA(B.abh(EG,this.CF.Get(this.At)),this.At,
1,Dv,DM,GN);if(!!Ca&&(this.AQ.Get(this.At)!==Ca.B$))this.K3(Ca.B$,Ca.Er);if(!Ca&&(
this.AQ.Get(this.At)!==IL))this.K3(IL,AF);},NF:function(Dv,IL,DM){this.Ln(Dv,IL,
DM,0x0);},K3:function(Dv,C$){if(!this.AQ.Get(this.At)||(this.AQ.Get(this.At)===Dv
))return;var tmp=this.AQ.Get(this.At);this.AQ.Set(this.At,null);tmp.BA(this.FW().
InitializeUp(this.At,this.EJ.Get(this.At),this.D9.Get(this.At),this.De.Get(this.
At),this.BN.Get(this.At)+1,this.Dd.Get(this.At),true,this.CF.Get(this.At),this.DN.
Get(this.At)));this.BroadcastEvent(this.GP().InitializeUp(this.At,this.BN.Get(this.
At)+1,true,tmp,this.CF.Get(this.At)),0x18);var Bu=this.CF.Get(this.At);var Ab=null;
if(!!Dv)Ab=Dv.I;while(!!Ab&&(Ab!==this)){Bu=B.abe(Bu,Ab.N.slice(0,2));Ab=Ab.I;}if(
!Ab&&(Dv!==this)){this.AQ.Set(this.At,null);return;}this.BroadcastEvent(this.GP(
).InitializeDown(this.At,this.BN.Get(this.At)+1,true,Dv,this.CF.Get(this.At)),0x18
);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;this.AQ.Set(this.At,
Dv);this.Dd.Set(this.At,C$);this.D9.Set(this.At,Bu);this.EJ.Set(this.At,Bu);this.
BN.Set(this.At,0);this.De.Set(this.At,0);this.GQ.Set(this.At,ticksCount);this.DN.
Set(this.At,this.CF.Get(this.At));this.AQ.Get(this.At).BA(this.FW().InitializeDown(
this.At,Bu,this.BN.Get(this.At)+1,this.Dd.Get(this.At),true,this.DN.Get(this.At)
));},MH:function(){return null;},_Init:function(aArg){E.Ae._Init.call(this,aArg);
E.Timer._Init.call(this.EK={K:this},0);(this.AQ=[]).__proto__=E.Root.AQ;(this.BN=[
]).__proto__=E.Root.BN;(this.IS=[]).__proto__=E.Root.IS;(this.De=[]).__proto__=E.
Root.De;(this.D9=[]).__proto__=E.Root.D9;(this.GQ=[]).__proto__=E.Root.GQ;(this.
EJ=[]).__proto__=E.Root.EJ;(this.Dd=[]).__proto__=E.Root.Dd;(this.CF=[]).__proto__=
E.Root.CF;(this.DN=[]).__proto__=E.Root.DN;(this.B6=[]).__proto__=E.Root.B6;(this.
Bo=[]).__proto__=E.Root.Bo;this.__proto__=E.Root;this.F=0x10007F;this.EK.FJ(10);
this.EK.FK=[this,this.Pf];this.A9(aArg);},_Done:function(){this.__proto__=E.Ae;this.
EK._Done();E.Ae._Done.call(this);},_ReInit:function(){E.Ae._ReInit.call(this);this.
EK._ReInit();},_Mark:function(D){var A;E.Ae._Mark.call(this,D);if((A=this.CJ)&&(
A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.AQ,D);if((A=this.GO)&&(A._cycle!=D))
A._Mark(A._cycle=D);if((A=this.EK)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"
};E.Event={AU:0,G_:false,A9:function(aArg){this.AU=this.Ih();},Ih:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=E.Event;this.A9(aArg);B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={Bd:0,Az:0,Down:false,Initialize2:function(Bq,Dt){this.
Bd=0;this.Az=Bq;this.Down=Dt;if((Bq>=0x30)&&(Bq<=0x39))this.Bd=(10+Bq)-48;if((Bq>=
0x41)&&(Bq<=0x5A))this.Bd=(105+Bq)-65;if((Bq>=0x61)&&(Bq<=0x7A))this.Bd=(105+Bq)-
97;if(Bq===0x20)this.Bd=131;if(!this.Bd)switch(Bq){case 0x2B:this.Bd=132;break;case
0x2D:this.Bd=133;break;case 0x2A:this.Bd=134;break;case 0x2F:this.Bd=135;break;case
0x3D:this.Bd=136;break;case 0x2E:this.Bd=137;break;case 0x2C:this.Bd=138;break;case
0x3A:this.Bd=139;break;case 0x3B:this.Bd=140;break;default:;}return this;},Initialize:
function(Bq,Dt){this.Bd=Bq;this.Down=Dt;this.Az=0x00;var Kt=Bq-10;var Ks=Bq-105;
if((Kt>=0)&&(Kt<=9))this.Az=(48+Kt)&0xFFFF;if((Ks>=0)&&(Ks<=25))this.Az=(65+Ks)&
0xFFFF;if(Bq===131)this.Az=0x20;if(this.Az===0x00)switch(Bq){case 132:this.Az=0x2B;
break;case 133:this.Az=0x2D;break;case 134:this.Az=0x2A;break;case 135:this.Az=0x2F;
break;case 136:this.Az=0x3D;break;case 137:this.Az=0x2E;break;case 138:this.Az=0x2C;
break;case 139:this.Az=0x3A;break;case 140:this.Az=0x3B;break;default:;}return this;
},MM:function(LG){switch(LG){case 141:return((this.Az>=0x41)&&(this.Az<=0x5A))||((
this.Az>=0x61)&&(this.Az<=0x7A));case 142:return(((this.Az>=0x41)&&(this.Az<=0x5A
))||((this.Az>=0x61)&&(this.Az<=0x7A)))||((this.Az>=0x30)&&(this.Az<=0x39));case
143:return(this.Az>=0x30)&&(this.Az<=0x39);case 144:return(((this.Az>=0x41)&&(this.
Az<=0x46))||((this.Az>=0x61)&&(this.Az<=0x66)))||((this.Az>=0x30)&&(this.Az<=0x39
));case 145:return this.Az!==0x00;case 146:return(this.Az===0x00)&&!!this.Bd;case
147:return(((this.Bd===6)||(this.Bd===7))||(this.Bd===4))||(this.Bd===5);case 148:
return(this.Az!==0x00)||!!this.Bd;default:;}return LG===this.Bd;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.Jn={Kb:null,Dp:B.wf,CB:0,B2:0,Down:false,Dm:false,InitializeUp:function(P,CD
,FN,Kq,Du){this.Down=false;this.B2=P;this.CB=CD;this.Dp=Du;this.Kb=Kq;this.Dm=FN;
return this;},InitializeDown:function(P,CD,FN,Kq,Du){this.Down=true;this.B2=P;this.
CB=CD;this.Dp=Du;this.Kb=Kq;this.Dm=FN;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.Jn;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.Kb)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.Gk={G8:B.wf,Dp:B.wf,CB:0,Cf:0,DC:B.wf,Cd:B.wf,B2:0,Down:false,Dm:false,InitializeHold:
function(P,Ff,HA,HB,CD,C$,Du,Hz){this.Down=true;this.B2=P;this.Cd=B.abf(Ff,C$);this.
DC=B.abf(HA,C$);this.Cf=HB;this.CB=CD;this.Dp=Du;this.G8=Hz;return this;},InitializeUp:
function(P,Ff,HA,HB,CD,C$,FN,Du,Hz){this.Down=false;this.B2=P;this.Cd=B.abf(Ff,C$
);this.DC=B.abf(HA,C$);this.Cf=HB;this.CB=CD;this.Dm=FN;this.Dp=Du;this.G8=Hz;return this;
},InitializeDown:function(P,Ff,CD,C$,FN,Du){this.Down=true;this.B2=P;this.Cd=B.abf(
Ff,C$);this.DC=B.abf(Ff,C$);this.Cf=0;this.CB=CD;this.Dm=FN;this.Dp=Du;this.G8=Du;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.Gk;},_className:"Core::CursorEvent"};E.Ie={G8:B.wf,Dp:B.wf,CB:0,Cf:0,Er:B.wf,DC:
B.wf,Cd:B.wf,B2:0,Initialize:function(P,Ff,HA,aOffset,HB,O9,C$,Du,Hz){this.B2=P;
this.Cd=B.abf(Ff,C$);this.DC=B.abf(HA,C$);this.Er=aOffset;this.Cf=HB;this.CB=O9;
this.Dp=Du;this.G8=Hz;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.Ie;},_className:"Core::DragEvent"};E.Hi={C5:function(AM,
aClip,aOffset,AG,aBlend){},GetClipping:function(){var A;var G=E.Bb.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Gd=AV;var J;for(J=this.Av;!!J&&!((J.F&
0x200)===0x200);J=J.Av)if(((J.F&0x1)===0x1))Gd=B.wC(Gd,J.GetClipping());G=B.wC(G
,Gd);}return G;},AI:function(CC,C0){var A;var I1=this.F;if((!!this.I&&((this.F&0x80001
)===0x80001))&&((C0&0x80000)===0x80000))this.I.Ac(this.GetClipping());E.Bb.AI.call(
this,CC,C0);if(((!!this.I&&((this.F&0x1)===0x1))&&((CC&0x80000)===0x80000))&&!((
I1&0x80000)===0x80000))this.I.Ac(this.GetClipping());},M:function(C){var A;if(B.
aaY(C,this.N))return;var Ft=[(A=this.N)[2]-A[0],A[3]-A[1]];var KM=[C[2]-C[0],C[3
]-C[1]];var GW=!B.aaX(Ft,KM);var CT=B.abe(C.slice(0,2),this.N.slice(0,2));if(!B.
aaX(CT,AF)&&!GW){var J=this.Av;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400
)===0x400)){var tmp=((J.F&0x100)===0x100);J.JR(CT,tmp);}J=J.Av;}}if((GW&&(Ft[0]>
0))&&(Ft[1]>0)){var AJ=this.N;var J=this.Av;while(!!J&&!((J.F&0x200)===0x200)){if(((
J.F&0x400)===0x400)){if(!!J.AO&&(J.AO.F$!==this))J.AO=null;if(!J.AO&&(J.CA!==0x14
))J.HK(AJ,this);}J=J.Av;}}E.Bb.M.call(this,C);if(!!this.I&&GW){this.F=this.F|0x1000;
if(!((this.I.F&0x2000)===0x2000)){this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.CK],
this);}}},_Init:function(aArg){E.Bb._Init.call(this,aArg);this.__proto__=E.Hi;this.
F=0x203;},_className:"Core::Outline"};E.IE={JV:null,J1:null,JW:null,DV:null,DG:null
,AY:0,B2:0,AU:0,CB:0,Cf:0,Er:B.wf,DC:B.wf,Cd:B.wf,NG:8,K_:1,Down:false,Fb:false,
Dm:false,Kz:false,LY:0,C5:function(AM,aClip,aOffset,AG,aBlend){},BA:function(AB){
var A;var Ay=(E.Gk.isPrototypeOf(AB)?AB:null);var C2=(E.Ie.isPrototypeOf(AB)?AB:
null);var IW=this.Fb;var H1;var GS;var Mk;var E8;var LN;if(!Ay&&!C2)return null;
H1=(!!Ay&&Ay.Down)&&!Ay.Cf;GS=(!!Ay&&Ay.Down)&&(Ay.Cf>0);Mk=(!!Ay&&Ay.Down)&&(Ay.
Cf>this.LY);E8=!!Ay&&!Ay.Down;LN=!!C2;if(H1)this.LY=((A=(Ay.Dm?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(H1){var KO=0;var HJ;this.AY=this.AY|(1<<Ay.B2);for(HJ=this.AY&4095;HJ>
0;HJ=HJ>>1)if(!!(HJ&1))KO=KO+1;if(KO===1)this.AY=(this.AY|16777216)|(4096<<Ay.B2
);}if(E8&&(this.AY<16777216)){var DR=this.Gp();var Ca=null;if(!!DR){var PC=(!!this.
Af?this.Af:this.I);Ca=DR.FA(B.abh(Ki,Ay.Dp),Ay.B2,Ay.CB,null,PC,0x0);}if(!!Ca){var
H;for(H=0;H<10;H++)if(!!(this.AY&(1<<H)))Ca.B$.BA(B._NewObject(E.Gk,0).InitializeDown(
H,Ay.Cd,Ay.CB,AF,true,Ay.Dp));for(H=0;H<10;H++)if(!!(this.AY&(1<<H)))Ca.B$.BA(B.
_NewObject(E.Gk,0).InitializeUp(H,Ay.Cd,Ay.Cd,0,Ay.CB,AF,false,Ay.Dp,Ay.Dp));}}if(
E8)this.AY=(this.AY&~(1<<Ay.B2))|33554432;if(Mk&&(this.AY<16777216))this.AY=this.
AY|67108864;if(E8&&Ay.Dm)this.AY=this.AY|67108864;if(E8&&!(this.AY&16777215))this.
AY=0;if(GS&&(this.AY>=67108864)){var DR=this.Gp();if(!!DR)DR.Ln(null,null,this,0x0
);}if((GS&&!!(this.AY&16777216))&&!!(this.AY&33554432)){GS=false;E8=true;}if(!!Ay&&
!(this.AY&(4096<<Ay.B2)))return this;if(!!C2&&!(this.AY&(4096<<C2.B2)))return this;
if(E8&&!(this.AY&16777216))return this;if(((H1||LN)||GS)&&((this.AY<16777216)||(
this.AY>=33554432)))return this;if(E8)this.AY=this.AY&3758100479;if(E8&&!(this.AY&
16777215))this.AY=0;if(!!Ay){this.Down=H1||GS;this.Fb=this.JK(Ay.Cd);this.DC=Ay.
DC;this.Cd=Ay.Cd;this.Er=AF;this.Cf=Ay.Cf;this.CB=Ay.CB;this.Dm=Ay.Dm;this.B2=Ay.
B2;this.AU=Ay.AU;if(Ay.Down&&!Ay.Cf)IW=false;}if(!!C2){this.Down=true;this.Fb=this.
JK(C2.Cd);this.DC=C2.DC;this.Cd=C2.Cd;this.Er=C2.Er;this.Cf=C2.Cf;this.CB=C2.CB;
this.B2=C2.B2;this.Dm=false;this.AU=C2.AU;}var Ky=this.Down;if(!!C2)(A=this.JV)?
A[1].call(A[0],this):null;if((!!Ay&&this.Down)&&!this.Cf)(A=this.DG)?A[1].call(A[
0],this):null;if((this.Down&&this.Fb)&&!IW){this.Kz=true;(A=this.JW)?A[1].call(A[
0],this):null;}if(this.Kz&&(((Ky&&!this.Fb)&&IW)||((!Ky&&this.Fb)&&IW))){this.Kz=
false;(A=this.J1)?A[1].call(A[0],this):null;}if(!!Ay&&!Ky)(A=this.DV)?A[1].call(
A[0],this):null;return this;},FA:function(Ai,P,CD,FO,DM,GN){var A;if(!!FO&&(FO!==
this))return null;if((CD<1)||(CD>this.K_))return null;if(this.AY>=33554432)return null;
if((this.AY>=16777216)&&!(this.AY&(4096<<P)))return null;if(this.MJ()){var G=B.lb(
Ai,this.GetExtent());if(!((G[0]>=G[2])||(G[1]>=G[3]))){var Fi=B.aaI(Ai);var CT=AF;
if(Fi[0]<G[0])CT=[G[0]-Fi[0],CT[1]];if(Fi[0]>=G[2])CT=[(G[2]-Fi[0])-1,CT[1]];if(
Fi[1]<G[1])CT=[CT[0],G[1]-Fi[1]];if(Fi[1]>=G[3])CT=[CT[0],(G[3]-Fi[1])-1];return B.
_NewObject(E.Jo,0).Initialize(this,CT);}}else{var AR=B.abi(9,B.wf,null);var H;AR.
Set(0,B.aaI(Ai));AR.Set(1,AR.Get(0));AR.Set(2,AR.Get(0));AR.Set(3,AR.Get(0));AR.
Set(4,AR.Get(0));AR.Set(1,[Ai[0],AR.Get(1)[1]]);AR.Set(2,[AR.Get(2)[0],Ai[1]]);AR.
Set(3,[Ai[2],AR.Get(3)[1]]);AR.Set(4,[AR.Get(4)[0],Ai[3]]);AR.Set(5,Ai.slice(0,2
));AR.Set(6,[Ai[2],Ai[1]]);AR.Set(7,[Ai[0],Ai[3]]);AR.Set(8,Ai.slice(2,4));for(H=
0;H<9;H=H+1)if(this.JK(AR.Get(H)))return B._NewObject(E.Jo,0).Initialize(this,B.
abe(AR.Get(H),AR.Get(0)));}return null;},Lj:function(C){if(C<1)C=1;this.NG=C;},Lg:
function(C){if(C<1)C=1;this.K_=C;},Ba:function(C){if(C)this.AI(0x100000,0x0);else
this.AI(0x0,0x100000);},_Init:function(aArg){E.Hj._Init.call(this,aArg);this.__proto__=
E.IE;this.F=0x10011B;},_Mark:function(D){var A;E.Hj._Mark.call(this,D);if((A=this.
JV)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J1)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.JW)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.DV)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.DG)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};E.Fd={
Av:null,DV:null,DG:null,Gb:0,AU:0,Lm:0,Ce:148,Bd:0,Az:0,BS:true,Down:false,J9:false
,A9:function(aArg){var A;var FZ=(E.Ae.isPrototypeOf(A=this.K)?A:null);if(!FZ)throw new
Error(Kj);this.Av=FZ.IZ;FZ.IZ=this;},BA:function(AB){var A;if(!!AB&&AB.MM(this.Ce
)){this.Down=AB.Down;this.Bd=AB.Bd;this.Az=AB.Az;this.AU=AB.AU;if(AB.Down){this.
Lm=this.Gb;this.J9=this.Gb>0;if(!this.J9)(A=this.DG)?A[1].call(A[0],this):null;this.
Gb=this.Gb+1;return true;}if(!AB.Down){this.J9=this.Gb>1;this.Lm=this.Gb-1;this.
Gb=0;(A=this.DV)?A[1].call(A[0],this):null;return true;}}return false;},_Init:function(
aArg){this.__proto__=E.Fd;this.A9(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Av)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.DV)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.DG)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};E.Jo={B$:null,G0:0,Er:B.wf,Initialize:function(L,aOffset){this.B$=L;this.Er=aOffset;
this.G0=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=E.Jo;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.B$)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};E.Ik={F$:null,Cn:B.wg,AJ:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=E.Ik;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.F$)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};E.Il={H0:B.wf,HZ:B.wf
,HY:B.wf,HX:B.wf,_Init:function(aArg){E.Ik._Init.call(this,aArg);this.__proto__=
E.Il;},_className:"Core::LayoutQuadContext"};E.Ez={resource:null,DB:function(){this.
resource=null;},A9:function(aArg){this.resource=aArg;},_Init:function(aArg){this.
__proto__=E.Ez;this.A9(aArg);B.h7++;},_Done:function(){this.DB();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};E.Timer={FK:null,timer:null,AU:0,Period:1000,Ic:0,BS:false,DB:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},I6:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},FJ:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.BS)this.I6(this.Ic,C);},GA:function(C){if(C<0)C=0;if(C===this.
Ic)return;this.Ic=C;if(this.BS)this.I6(C,this.Period);},Ba:function(C){if(C===this.
BS)return;this.BS=C;if(C)this.I6(this.Ic,this.Period);else this.I6(0,0);this.AU=
this.Ih();},Ih:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AU=this.Ih();if(!this.Period
)this.Ba(false);(A=this.FK)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.DB();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.FK)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.ID={Hc:null,A2:null,Ma:function(
Ax){var A;(A=this.Hc)?A[1].call(A[0],this):null;},Hg:function(C){if(B.aaZ(this.A2
,C))return;if(!!this.A2)B.z$([this,this.Ma],this.A2,0);this.A2=C;if(!!this.A2)B.
zX([this,this.Ma],this.A2,0);},_Init:function(aArg){this.__proto__=E.ID;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Hc)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.A2)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};E.QD={
QE:0x1,PR:0x2,P1:0x4,QB:0x8,BS:0x10,Qv:0x20,P2:0x40,Qa:0x80,P0:0x100,P7:0x200,PZ:
0x400,Qi:0x800,Lv:0x1000,QC:0x2000,Qf:0x4000,Qg:0x8000,PX:0x10000,Qe:0x20000,Qs:
0x40000,PY:0x80000,Qh:0x100000,PW:0x200000};E.CA={Qj:0x1,Qk:0x2,PN:0x4,PO:0x8,PP:
0x10,PM:0x20};E.P4={Qb:0,Qy:1,PT:2,P8:3,Qm:4,Qz:5,QA:6,PU:7,PV:8,P_:9,P9:10,Qo:11
,Qn:12};E.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:
18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:
28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:
38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:
46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55
,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:
64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,
Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};E.Ql={QI:0x1,QF:0x2,QG:0x4,QH:0x8,P$:0x10,P3:0x20};
E._Init=function(){E.Hj.__proto__=E.B$;E.Bb.__proto__=E.B$;E.Ae.__proto__=E.Bb;E.
Root.__proto__=E.Ae;E.KeyEvent.__proto__=E.Event;E.Jn.__proto__=E.Event;E.Gk.__proto__=
E.Event;E.Ie.__proto__=E.Event;E.Hi.__proto__=E.Bb;E.IE.__proto__=E.Hj;E.Il.__proto__=
E.Ik;};E._ReInit=function(){};E.CP=function(D){};return E;})();

/* Embedded Wizard */