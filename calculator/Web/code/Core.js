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
var AV=[0,0];var Bf=[0,0,0,0];var DM="The view does not belong to this group";var
Fj=[340,600];var Eo="No view to restack";var FM="View is not in this group";var H0=
"No view to remove";var H1="No view to add";var Hg="View already in a group";var
H2="Recursive invalidate during active update cycle.";var FN=[-8,-8,9,9];var Nu=
"No group to end the modal state.";var Nv="The group is not modal.";var Nw="No group to obtain the modal state.";
var Nx="The group serves already as the \'virtual keyboard\'.";var Ly="The group is already modal.";
var Ny="The method Restack() is not available in Core::VerticalList.";var FO="The method Remove() is not available in Core::VerticalList.";
var Lz="The method Add() is not available in Core::VerticalList.";var Nz="The Slide Touch Handler:";
var NA="is already connected with a view.";var NB="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var NC=[0,0,170,120];var LA=[0,0,1,1];var ND="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
E.Aw={Aa:null,Y:null,I:null,Bd:null,F:0x103,EN:0,CG:0x14,Kl:function(Ap,LF){},CR:
function(C){if(this.EN===C)return;this.EN=C;if(!!this.I){var G6=this.Aa;var Ak=0;
while(!!G6&&(C>G6.EN)){G6=G6.Aa;Ak=Ak+1;}G6=this.Y;while(!!G6&&(C<G6.EN)){G6=G6.
Y;Ak=Ak-1;}if(!!Ak)this.I.OX(this,Ak);}},C6:function(C){var A;var Ak=C^this.CG;if(
!Ak)return;this.CG=C;if(!!this.Bd&&!((this.F&0x400)===0x400)){this.I.F=this.I.F|
0x5000;B.pe([A=this.I,A.DE],this);this.I.Ao([0,0,(A=this.I.M)[2]-A[0],A[3]-A[1]]
);}if(!!this.Bd&&((this.F&0x400)===0x400)){this.Bd.Ij.F=this.Bd.Ij.F|0x1000;this.
I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE],this);}},Fv:function(){var An=this.I;while(
!!An){var BE=(E.Root.isPrototypeOf(An)?An:null);if(!!BE)return BE;An=An.I;}return null;
},D3:function(Bc,aClip,aOffset,A8,aBlend){},GetClipping:function(){return this.GetExtent(
);},BO:function(Ax){return null;},EG:function(At,U,CT,Ep,Ee,FP){return null;},K0:
function(At){return At;},K1:function(Ap,Ec){return AV;},K9:function(aOffset,LC){
},GetExtent:function(){return Bf;},AC:function(Dv,Eb){var A;if(((this.F&0x200)===
0x200))Dv=Dv&~0x400;var Oc=(this.F&~Eb)|Dv;var ET=Oc^this.F;this.F=Oc;if(!!this.
I&&!!(ET&0x14)){var PA=((this.F&0x14)===0x14);if(PA&&!this.I.Dq)this.I.EL(this);
if(!PA&&(this.I.Dq===this))this.I.EL(this.I.MN(this,0x14));}if(!!this.I&&!!(ET&0x403
))this.I.Ao(this.GetClipping());if(((!!this.Bd&&!!this.I)&&((Oc&0x400)===0x400))&&((
ET&0x1)===0x1)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE
],this);}if(!!this.I&&((ET&0x400)===0x400)){this.Bd=null;this.F=this.F|0x800;this.
I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE],this);}if(((((ET&0x100000)===0x100000)&&((
Eb&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.AC(0x0,0x10);if(((((ET&0x100000)===0x100000)&&((Dv&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.I)&&((this.I.F&0x10)===0x10))))this.AC(0x10,0x0);if(((((ET&0x200000
)===0x200000)&&((Eb&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.AC(0x10,0x0);if((((((ET&0x200000)===0x200000)&&((Dv&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
I&&!((this.I.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.I)&&(null!==
this))))this.AC(0x0,0x10);},_Init:function(aArg){this.__proto__=E.Aw;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Y)&&(A._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Bd)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::View"};E.JR={Co:B.wf,C0:B.
wf,Cn:B.wf,CZ:B.wf,Kl:function(Ap,LF){var Aj=B._NewObject(E.K8,0);this.Bd=null;Aj.
Dd=this.GetExtent();Aj.AG=Ap;Aj.Ij=LF;Aj.KJ=this.CZ;Aj.KK=this.Cn;Aj.KL=this.C0;
Aj.KM=this.Co;this.Bd=Aj;},K1:function(Ap,Ec){var A;var AS=this.CG;var Aj=(E.K8.
isPrototypeOf(A=this.Bd)?A:null);var Ab=Aj.Dd[0];var Ac=Aj.Dd[1];var Z=Aj.Dd[2];
var Ad=Aj.Dd[3];var Dc=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var A$=Z-Ab;var AI=Ad-Ac;if(!Ec
){var EB=[(A=Aj.AG)[2]-A[0],A[3]-A[1]];Ab=Ab-Aj.AG[0];Ac=Ac-Aj.AG[1];if(EB[0]!==
Dc[0]){var Bo=((AS&0x4)===0x4);var Bp=((AS&0x8)===0x8);var Fq=((AS&0x1)===0x1);if(
!Bo&&(Fq||!Bp))Ab=((Ab*Dc[0])/EB[0])|0;if(!Bp&&(Fq||!Bo)){Z=Z-Aj.AG[0];Z=((Z*Dc[
0])/EB[0])|0;Z=Z-Dc[0];}else Z=Z-Aj.AG[2];Ab=Ab+Ap[0];Z=Z+Ap[2];if(!Fq){if(Bo&&!
Bp)Z=Ab+A$;else if(!Bo&&Bp)Ab=Z-A$;else{Ab=Ab+((((Z-Ab)-A$)/2)|0);Z=Ab+A$;}}}else{
Z=Z-Aj.AG[2];Ab=Ab+Ap[0];Z=Z+Ap[2];}if(EB[1]!==Dc[1]){var Bq=((AS&0x10)===0x10);
var Bn=((AS&0x20)===0x20);var Fr=((AS&0x2)===0x2);if(!Bq&&(Fr||!Bn))Ac=((Ac*Dc[1
])/EB[1])|0;if(!Bn&&(Fr||!Bq)){Ad=Ad-Aj.AG[1];Ad=((Ad*Dc[1])/EB[1])|0;Ad=Ad-Dc[1
];}else Ad=Ad-Aj.AG[3];Ac=Ac+Ap[1];Ad=Ad+Ap[3];if(!Fr){if(Bq&&!Bn)Ad=Ac+AI;else if(
!Bq&&Bn)Ac=Ad-AI;else{Ac=Ac+((((Ad-Ac)-AI)/2)|0);Ad=Ac+AI;}}}else{Ad=Ad-Aj.AG[3];
Ac=Ac+Ap[1];Ad=Ad+Ap[3];}}else{switch(Ec){case 3:{Ab=Ap[0];Z=Ab+A$;}break;case 4:{
Z=Ap[2];Ab=Z-A$;}break;case 1:{Ac=Ap[1];Ad=Ac+AI;}break;case 2:{Ad=Ap[3];Ac=Ad-AI;
}break;default:;}if((Ec===3)||(Ec===4)){var Bq=((AS&0x10)===0x10);var Bn=((AS&0x20
)===0x20);var Fr=((AS&0x2)===0x2);if(Fr){Ac=Ap[1];Ad=Ap[3];}else if(Bq&&!Bn){Ac=
Ap[1];Ad=Ac+AI;}else if(Bn&&!Bq){Ad=Ap[3];Ac=Ad-AI;}else{Ac=Ap[1]+((((Ap[3]-Ap[1
])-AI)/2)|0);Ad=Ac+AI;}}if((Ec===1)||(Ec===2)){var Bo=((AS&0x4)===0x4);var Bp=((
AS&0x8)===0x8);var Fq=((AS&0x1)===0x1);if(Fq){Ab=Ap[0];Z=Ap[2];}else if(Bo&&!Bp){
Ab=Ap[0];Z=Ab+A$;}else if(Bp&&!Bo){Z=Ap[2];Ab=Z-A$;}else{Ab=Ap[0]+((((Ap[2]-Ap[0
])-A$)/2)|0);Z=Ab+A$;}}}Aj.isEmpty=(Ab>=Z)||(Ac>=Ad);A$=(Z-Ab)-1;AI=(Ad-Ac)-1;var
GC=Aj.Dd[0];var GD=Aj.Dd[1];var FV=(Aj.Dd[2]-GC)-1;var FU=(Aj.Dd[3]-GD)-1;if(!FV
)FV=1;if(!FU)FU=1;if(((this.F&0x100)===0x100)){this.CZ=[Ab+((((Aj.KJ[0]-GC)*A$)/
FV)|0),Ac+((((Aj.KJ[1]-GD)*AI)/FU)|0)];this.Cn=[Ab+((((Aj.KK[0]-GC)*A$)/FV)|0),Ac+((((
Aj.KK[1]-GD)*AI)/FU)|0)];this.C0=[Ab+((((Aj.KL[0]-GC)*A$)/FV)|0),Ac+((((Aj.KL[1]-
GD)*AI)/FU)|0)];this.Co=[Ab+((((Aj.KM[0]-GC)*A$)/FV)|0),Ac+((((Aj.KM[1]-GD)*AI)/
FU)|0)];}else{this.Hb([Ab+((((Aj.KJ[0]-GC)*A$)/FV)|0),Ac+((((Aj.KJ[1]-GD)*AI)/FU
)|0)]);this.Hc([Ab+((((Aj.KK[0]-GC)*A$)/FV)|0),Ac+((((Aj.KK[1]-GD)*AI)/FU)|0)]);
this.Hd([Ab+((((Aj.KL[0]-GC)*A$)/FV)|0),Ac+((((Aj.KL[1]-GD)*AI)/FU)|0)]);this.He([
Ab+((((Aj.KM[0]-GC)*A$)/FV)|0),Ac+((((Aj.KM[1]-GD)*AI)/FU)|0)]);this.Bd=Aj;}return[
A$+1,AI+1];},K9:function(aOffset,LC){if(LC){this.CZ=B.abf(this.CZ,aOffset);this.
Cn=B.abf(this.Cn,aOffset);this.C0=B.abf(this.C0,aOffset);this.Co=B.abf(this.Co,aOffset
);}else{this.Hb(B.abf(this.CZ,aOffset));this.Hc(B.abf(this.Cn,aOffset));this.Hd(
B.abf(this.C0,aOffset));this.He(B.abf(this.Co,aOffset));}},GetExtent:function(){
if(!!this.Bd&&this.Bd.isEmpty)return Bf;var Ab=this.CZ[0];var Ac=this.CZ[1];var Z=
this.C0[0];var Ad=this.C0[1];if((((this.Co[0]!==Ab)||(this.Cn[1]!==Ac))||(this.Cn[
0]!==Z))||(this.Co[1]!==Ad)){if(this.Cn[0]<Ab)Ab=this.Cn[0];if(this.C0[0]<Ab)Ab=
this.C0[0];if(this.Co[0]<Ab)Ab=this.Co[0];if(this.Cn[1]<Ac)Ac=this.Cn[1];if(this.
C0[1]<Ac)Ac=this.C0[1];if(this.Co[1]<Ac)Ac=this.Co[1];if(this.CZ[0]>Z)Z=this.CZ[
0];if(this.Cn[0]>Z)Z=this.Cn[0];if(this.Co[0]>Z)Z=this.Co[0];if(this.CZ[1]>Ad)Ad=
this.CZ[1];if(this.Cn[1]>Ad)Ad=this.Cn[1];if(this.Co[1]>Ad)Ad=this.Co[1];}else{var
tmp;if(Z<Ab){tmp=Ab;Ab=Z;Z=tmp;}if(Ad<Ac){tmp=Ac;Ac=Ad;Ad=tmp;}}return[Ab,Ac,Z+1
,Ad+1];},He:function(C){var A;if(B.aaX(C,this.Co))return;if(!!this.I&&((this.F&0x1
)===0x1))this.I.Ao(this.GetClipping());this.Bd=null;this.Co=C;if(!!this.I&&((this.
F&0x1)===0x1))this.I.Ao(this.GetClipping());if((!!this.I&&((this.F&0x400)===0x400
))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;
B.pe([A=this.I,A.DE],this);}},Hd:function(C){var A;if(B.aaX(C,this.C0))return;if(
!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.GetClipping());this.Bd=null;this.C0=
C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.GetClipping());if((!!this.I&&((
this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.
I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE],this);}},Hc:function(C){var A;if(B.aaX(
C,this.Cn))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.GetClipping()
);this.Bd=null;this.Cn=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE],this);}},Hb:function(
C){var A;if(B.aaX(C,this.CZ))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(
this.GetClipping());this.Bd=null;this.CZ=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Ao(this.GetClipping());if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE],this
);}},MY:function(DQ){var Bs=B.abi(4,B.wf,null);var G=0;var BC=3;var NZ=false;var
N0=false;Bs.Set(0,this.CZ);Bs.Set(1,this.Cn);Bs.Set(2,this.C0);Bs.Set(3,this.Co);
while(G<4){var Qj=Bs.Get(G)[0];var Mf=Bs.Get(G)[1];var UF=Bs.Get(BC)[0];var Ou=Bs.
Get(BC)[1];if(((Mf>DQ[1])!==(Ou>DQ[1]))||((Mf<DQ[1])!==(Ou<DQ[1]))){var ED=((((UF-
Qj)*(DQ[1]-Mf))/(Ou-Mf))|0)+Qj;if(DQ[0]>ED)NZ=!NZ;if(DQ[0]<ED)N0=!N0;}BC=G;G=G+1;
}return NZ||N0;},QO:function(){return((((this.CZ[0]===this.Co[0])&&(this.Cn[0]===
this.C0[0]))&&(this.CZ[1]===this.Cn[1]))&&(this.C0[1]===this.Co[1]))||((((this.CZ[
0]===this.Cn[0])&&(this.C0[0]===this.Co[0]))&&(this.CZ[1]===this.Co[1]))&&(this.
Cn[1]===this.C0[1]));},_Init:function(aArg){E.Aw._Init.call(this,aArg);this.__proto__=
E.JR;},_className:"Core::QuadView"};E.Bv={M:B.wg,Kl:function(Ap,LF){var Aj=B._NewObject(
E.K7,0);Aj.Dd=this.M;Aj.AG=Ap;Aj.Ij=LF;this.Bd=Aj;},K1:function(Ap,Ec){var A;var
AS=this.CG;var Aj=this.Bd;var Ab=Aj.Dd[0];var Ac=Aj.Dd[1];var Z=Aj.Dd[2];var Ad=
Aj.Dd[3];var Dc=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var A$=Z-Ab;var AI=Ad-Ac;if(!Ec){var EB=[(
A=Aj.AG)[2]-A[0],A[3]-A[1]];Ab=Ab-Aj.AG[0];Ac=Ac-Aj.AG[1];if(EB[0]!==Dc[0]){var Bo=((
AS&0x4)===0x4);var Bp=((AS&0x8)===0x8);var Fq=((AS&0x1)===0x1);if(!Bo&&(Fq||!Bp)
)Ab=((Ab*Dc[0])/EB[0])|0;if(!Bp&&(Fq||!Bo)){Z=Z-Aj.AG[0];Z=((Z*Dc[0])/EB[0])|0;Z=
Z-Dc[0];}else Z=Z-Aj.AG[2];Ab=Ab+Ap[0];Z=Z+Ap[2];if(!Fq){if(Bo&&!Bp)Z=Ab+A$;else
if(!Bo&&Bp)Ab=Z-A$;else{Ab=Ab+((((Z-Ab)-A$)/2)|0);Z=Ab+A$;}}}else{Z=Z-Aj.AG[2];Ab=
Ab+Ap[0];Z=Z+Ap[2];}if(EB[1]!==Dc[1]){var Bq=((AS&0x10)===0x10);var Bn=((AS&0x20
)===0x20);var Fr=((AS&0x2)===0x2);if(!Bq&&(Fr||!Bn))Ac=((Ac*Dc[1])/EB[1])|0;if(!
Bn&&(Fr||!Bq)){Ad=Ad-Aj.AG[1];Ad=((Ad*Dc[1])/EB[1])|0;Ad=Ad-Dc[1];}else Ad=Ad-Aj.
AG[3];Ac=Ac+Ap[1];Ad=Ad+Ap[3];if(!Fr){if(Bq&&!Bn)Ad=Ac+AI;else if(!Bq&&Bn)Ac=Ad-
AI;else{Ac=Ac+((((Ad-Ac)-AI)/2)|0);Ad=Ac+AI;}}}else{Ad=Ad-Aj.AG[3];Ac=Ac+Ap[1];Ad=
Ad+Ap[3];}}else{switch(Ec){case 3:{Ab=Ap[0];Z=Ab+A$;}break;case 4:{Z=Ap[2];Ab=Z-
A$;}break;case 1:{Ac=Ap[1];Ad=Ac+AI;}break;case 2:{Ad=Ap[3];Ac=Ad-AI;}break;default:;
}if((Ec===3)||(Ec===4)){var Bq=((AS&0x10)===0x10);var Bn=((AS&0x20)===0x20);var Fr=((
AS&0x2)===0x2);if(Fr){Ac=Ap[1];Ad=Ap[3];}else if(Bq&&!Bn){Ac=Ap[1];Ad=Ac+AI;}else
if(Bn&&!Bq){Ad=Ap[3];Ac=Ad-AI;}else{Ac=Ap[1]+((((Ap[3]-Ap[1])-AI)/2)|0);Ad=Ac+AI;
}}if((Ec===1)||(Ec===2)){var Bo=((AS&0x4)===0x4);var Bp=((AS&0x8)===0x8);var Fq=((
AS&0x1)===0x1);if(Fq){Ab=Ap[0];Z=Ap[2];}else if(Bo&&!Bp){Ab=Ap[0];Z=Ab+A$;}else if(
Bp&&!Bo){Z=Ap[2];Ab=Z-A$;}else{Ab=Ap[0]+((((Ap[2]-Ap[0])-A$)/2)|0);Z=Ab+A$;}}}Aj.
isEmpty=(Ab>=Z)||(Ac>=Ad);if(((this.F&0x100)===0x100))this.M=[Ab,Ac,Z,Ad];else{this.
N([Ab,Ac,Z,Ad]);this.Bd=Aj;}return[Z-Ab,Ad-Ac];},K9:function(aOffset,LC){if(LC)this.
M=B.abh(this.M,aOffset);else this.N(B.abh(this.M,aOffset));},GetExtent:function(
){return this.M;},N:function(C){var A;if(B.aaY(C,this.M))return;if(!!this.I&&((this.
F&0x1)===0x1))this.I.Ao(this.GetClipping());this.Bd=null;this.M=C;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Ao(this.GetClipping());if((!!this.I&&((this.F&0x400)===
0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;
B.pe([A=this.I,A.DE],this);}},TK:function(Ot){this.N(Ot);},QW:function(){return this.
M;},_Init:function(aArg){E.Aw._Init.call(this,aArg);this.__proto__=E.Bv;},_className:
"Core::RectView"};E.V={A9:null,Bk:null,LY:null,Dq:null,EM:255,Kf:0,Ki:0,Kh:0,Kg:
0,Bw:function(aArg){this.AN();},D3:function(Bc,aClip,aOffset,A8,aBlend){var A;A8=((
A8+1)*this.EM)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.T0(Bc,aClip,B.abf(aOffset
,this.M.slice(0,2)),A8,aBlend);},GetClipping:function(){var A;var H=this.M;H=[].
concat(H[0]-this.Kg,H.slice(1,4));H=B.abP(H,H[1]-this.Ki);H=B.abN(H,H[2]+this.Kh
);H=[].concat(H.slice(0,3),H[3]+this.Kf);if(((this.F&0x80000)===0x80000)){var In=
Bf;var K;for(K=this.A9;!!K;K=K.Aa)if(((K.F&0x1)===0x1))In=B.wC(In,K.GetClipping(
));H=B.wC(H,B.abh(In,this.M.slice(0,2)));}return H;},EG:function(At,U,CT,Ep,Ee,FP
){var A;var K=this.Bk;var Id=null;var Q=Bf;var Dy=null;if(((A=B.lb(At,this.M))[0
]>=A[2])||(A[1]>=A[3]))return null;At=B.abg(At,this.M.slice(0,2));if(!!Ee){K=Ee;
while(!!K&&(K.I!==this))K=K.I;}while(!!K){if(((K.F&0x400)===0x400)&&!Dy){Dy=K.Y;
while(!!Dy&&!((Dy.F&0x200)===0x200))Dy=Dy.Y;if(!!Dy)Q=B.lb(At,Dy.GetExtent());else
Q=Bf;}if(Dy===K){Dy=null;Q=Bf;}if((!!Ep&&!!(E.V.isPrototypeOf(K)?K:null))||((((((
K.F&0x8)===0x8)&&((K.F&0x10)===0x10))&&!((K.F&0x40000)===0x40000))&&!((K.F&0x20000
)===0x20000))&&(!((K.F&0x10000)===0x10000)||(null===K)))){var Dd=K.GetExtent();var
LQ=Ep;var Ia=null;if(LQ===K)LQ=null;if(((K.F&0x400)===0x400)){if(!(((A=B.lb(Dd,Q
))[0]>=A[2])||(A[1]>=A[3])))Ia=K.EG(Q,U,CT,LQ,Ee,FP);}else if(!(((A=B.lb(Dd,At))[
0]>=A[2])||(A[1]>=A[3]))||(Ep===K))Ia=K.EG(At,U,CT,LQ,Ee,FP);K=K.Y;if(!!Ia){if(!
Id||((Ia.Jk<Id.Jk)&&(Ia.Jk>=0)))Id=Ia;if(!Ia.Jk)K=null;}}else K=K.Y;Ee=null;}return Id;
},K0:function(At){var A;var B1;var K=this.A9;var H_=Bf;var KI=true;var result=(At=
B1=B.abg(At,this.M.slice(0,2)),B1);while(!!K){if(((K.F&0x200)===0x200)){var I$=(
E.JQ.isPrototypeOf(K)?K:null);H_=B.lb(At,I$.M);KI=((I$.F&0x1)===0x1);}if(((K.F&0x1
)===0x1)){if(((K.F&0x400)===0x400)){if(KI){var Q=B.lb(K.GetClipping(),H_);if(!((
Q[0]>=Q[2])||(Q[1]>=Q[3])))result=B.wC(result,K.K0(Q));}}else{var Q=B.lb(K.GetClipping(
),At);if(!((Q[0]>=Q[2])||(Q[1]>=Q[3])))result=B.wC(result,K.K0(Q));}}K=K.Aa;}return B.
lb(B.abh(result,this.M.slice(0,2)),this.M);},AC:function(Dv,Eb){var A;var L0=this.
F;if((!!this.I&&((this.F&0x80001)===0x80001))&&((Eb&0x80000)===0x80000))this.I.Ao(
this.GetClipping());E.Bv.AC.call(this,Dv,Eb);if(((!!this.I&&((this.F&0x1)===0x1)
)&&((Dv&0x80000)===0x80000))&&!((L0&0x80000)===0x80000))this.I.Ao(this.GetClipping(
));var ET=this.F^L0;if(!!this.Dq&&((ET&0x40)===0x40)){if(((this.F&0x40)===0x40))
this.Dq.AC(0x40,0x0);else this.Dq.AC(0x0,0x40);}if(((ET&0x10)===0x10)){var K;for(
K=this.A9;!!K;K=K.Aa)if((((K.F&0x300000)===0x300000)&&!((K.F&0x80)===0x80))&&(!((
K.F&0x10000)===0x10000)||(null===K)))K.AC(Dv&0x10,Eb&0x10);}if(!!ET){this.F=this.
F|0x8000;B.pe([this,this.Md],this);}},N:function(C){var A;if(B.aaY(C,this.M))return;
var Hz=[(A=this.M)[2]-A[0],A[3]-A[1]];var Ob=[C[2]-C[0],C[3]-C[1]];var Jb=!B.aaX(
Hz,Ob);E.Bv.N.call(this,C);if((Jb&&(Hz[0]>0))&&(Hz[1]>0)){var AG=[].concat(AV,Hz
);var K=this.A9;while(!!K){if((!K.Bd&&(K.CG!==0x14))&&!((K.F&0x400)===0x400))K.Kl(
AG,null);K=K.Aa;}}if(Jb){this.F=this.F|0x5000;B.pe([this,this.Md],this);}},Ol:function(
Ax){var PL=(E.KeyEvent.isPrototypeOf(Ax)?Ax:null);var EU=this.LY;if(!PL)return null;
while(!!EU&&(!EU.BI||!EU.BO(PL)))EU=EU.Aa;return EU;},T0:function(Bc,aClip,aOffset
,A8,aBlend){var A;var K=this.A9;var H_=Bf;var KI=true;this.QB(Bc,aClip,aOffset,A8
,aBlend);while(!!K){if(((K.F&0x200)===0x200)){var I$=(E.JQ.isPrototypeOf(K)?K:null
);KI=((I$.F&0x1)===0x1);H_=aClip;if(!((I$.F&0x80000)===0x80000))H_=B.lb(H_,B.abh(
I$.M,aOffset));}if(((K.F&0x1)===0x1)){if(((K.F&0x400)===0x400)){if(KI){var Q=B.lb(
B.abh(K.GetClipping(),aOffset),H_);if(!((Q[0]>=Q[2])||(Q[1]>=Q[3])))K.D3(Bc,Q,aOffset
,A8,aBlend);}}else{var Q=B.lb(B.abh(K.GetClipping(),aOffset),aClip);if(!((Q[0]>=
Q[2])||(Q[1]>=Q[3])))K.D3(Bc,Q,aOffset,A8,aBlend);}}K=K.Aa;}this.QE(Bc,aClip,aOffset
,A8,aBlend);},Uo:function(){var A;var NY=((this.F&0x1000)===0x1000);var GE=[0,0,(
A=this.M)[2]-A[0],A[3]-A[1]];var FW=false;var I5=Bf;var NW=Bf;var K=this.Bk;var Dy=
null;while(!!K){if(((K.F&0x800)===0x800)){FW=true;K.F=K.F&~0x800;}if(FW&&((K.F&0x200
)===0x200))FW=false;K=K.Y;}FW=false;K=this.A9;if(NY){this.F=this.F&~0x1000;NY=!((
GE[0]>=GE[2])||(GE[1]>=GE[3]));}this.F=this.F|0x2000;while(!!K){if(((K.F&0x400)===
0x400)){if(!!K.Bd&&(K.Bd.Ij!==Dy))K.Bd=null;if((!K.Bd&&FW)&&(K.CG!==0x14))K.Kl(NW
,Dy);}if(!!K.Bd){if(NY&&!((K.F&0x400)===0x400))K.K1(GE,0);if(FW&&((K.F&0x400)===
0x400))K.K1(NW,0);}if(((K.F&0x200)===0x200)){FW=((K.F&0x1000)===0x1000);Dy=(E.JQ.
isPrototypeOf(K)?K:null);if(FW){K.F=K.F&~0x1000;I5=Dy.M;NW=I5;FW=!((I5[0]>=I5[2]
)||(I5[1]>=I5[3]));}if(FW)this.Ao(Dy.M);}K=K.Aa;}this.F=this.F&~0x2000;this.Lx([
GE[2]-GE[0],GE[3]-GE[1]]);},DE:function(X){B.pe([this,this.Md],this);},Md:function(
X){var A;var UE=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=
this.F&~0x4000;this.Uo();}if(((this.F&0x8000)===0x8000)||UE){this.F=this.F&~0x8000;
this.EP(this.F);}},EL:function(C){var A;if(!!C&&(C.I!==this))throw new Error(DM);
if(!!C&&!((C.F&0x14)===0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(
C===this.Dq)return;if(!!this.Dq)this.Dq.AC(0x0,0x60);this.Dq=C;if(!!C){if(((this.
F&0x40)===0x40))C.AC(0x60,0x0);else C.AC(0x20,0x0);}},QX:function(){var A;return((
this.F&0x100000)===0x100000);},Ah:function(C){if(C)this.AC(0x100000,0x0);else this.
AC(0x0,0x100000);},FC:function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.EM
)return;this.EM=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Ao(this.GetClipping()
);},Pj:function(Ot){this.FC(Ot);},Am:function(C){if(C)this.AC(0x1,0x0);else this.
AC(0x0,0x1);},ExtendClipping:function(H5,H6,H7,H4){var A;var Kc=this.M;var Dw=Kc;
if(H5<0)H5=0;if(H5>255)H5=255;if(H6<0)H6=0;if(H6>255)H6=255;if(H7<0)H7=0;if(H7>255
)H7=255;if(H4<0)H4=0;if(H4>255)H4=255;Dw=[].concat(Dw[0]-(Math.max(H5,this.Kg)&0xFF
),Dw.slice(1,4));Dw=B.abN(Dw,Dw[2]+(Math.max(H6,this.Kh)&0xFF));Dw=B.abP(Dw,Dw[1
]-(Math.max(H7,this.Ki)&0xFF));Dw=[].concat(Dw.slice(0,3),Dw[3]+(Math.max(H4,this.
Kf)&0xFF));if(H5!==this.Kg){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var H=Dw;H=B.abN(H,Kc[0]);this.I.Ao(H);}this.Kg=H5&0xFF;}if(H6!==this.
Kh){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=Dw;
H=[].concat(Kc[2],H.slice(1,4));this.I.Ao(H);}this.Kh=H6&0xFF;}if(H7!==this.Ki){
if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=Dw;H=[
].concat(H.slice(0,3),Kc[1]);this.I.Ao(H);}this.Ki=H7&0xFF;}if(H4!==this.Kf){if((
!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=Dw;H=B.abP(
H,Kc[3]);this.I.Ao(H);}this.Kf=H4&0xFF;}},QE:function(Bc,aClip,aOffset,A8,aBlend
){},QB:function(Bc,aClip,aOffset,A8,aBlend){},GetMaximalSize:function(){return Fj;
},GetMinimalSize:function(){return AV;},OH:function(DQ){var tmp=this;while(!!tmp
){DQ=B.abe(DQ,tmp.M.slice(0,2));tmp=tmp.I;}return DQ;},QN:function(DQ){var tmp=this;
while(!!tmp){DQ=B.abf(DQ,tmp.M.slice(0,2));tmp=tmp.I;}return DQ;},DispatchEvent:
function(Ax){var A;var K=this.Dq;var An=(E.V.isPrototypeOf(K)?K:null);var Bj=null;
if(!!K&&((((K.F&0x10000)===0x10000)||((K.F&0x40000)===0x40000))||((K.F&0x20000)===
0x20000))){K=null;An=null;}if(!!An)Bj=An.DispatchEvent(Ax);else if(!!K)Bj=K.BO(Ax
);if(!Bj)Bj=this.BO(Ax);if(!Bj)Bj=this.Ol(Ax);return Bj;},BroadcastEventAtPosition:
function(Ax,Pm,aFilter){var A;var K=this.Bk;var Bj=null;while(!!K&&!Bj){if((!aFilter||((
A=aFilter)&&((K.F&A)===A)))&&B.wa(K.GetExtent(),Pm)){var An=(E.V.isPrototypeOf(K
)?K:null);if(!!An)Bj=An.BroadcastEventAtPosition(Ax,B.abe(Pm,An.M.slice(0,2)),aFilter
);else Bj=K.BO(Ax);}K=K.Y;}if(!Bj)Bj=this.BO(Ax);return Bj;},BroadcastEvent:function(
Ax,aFilter){var A;var K=this.Bk;var Bj=null;while(!!K&&!Bj){if(!aFilter||((A=aFilter
)&&((K.F&A)===A))){var An=(E.V.isPrototypeOf(K)?K:null);if(!!An)Bj=An.BroadcastEvent(
Ax,aFilter);else Bj=K.BO(Ax);}K=K.Y;}if(!Bj)Bj=this.BO(Ax);if(!Bj)Bj=this.Ol(Ax);
return Bj;},Lx:function(aSize){},EP:function(CJ){},AN:function(){this.F=this.F|0x8000;
B.pe([this,this.Md],this);},Ao:function(At){var A;var An=this;while(!!An&&!((At[
0]>=At[2])||(At[1]>=At[3]))){if(!An.I&&(An!==this)){An.Ao(At);return;}if(!((An.F&
0x1)===0x1))return;var H=An.M;At=B.abh(At,H.slice(0,2));if(!((An.F&0x80000)===0x80000
)){H=[].concat(H[0]-An.Kg,H.slice(1,4));H=B.abP(H,H[1]-An.Ki);H=B.abN(H,H[2]+An.
Kh);H=[].concat(H.slice(0,3),H[3]+An.Kf);At=B.lb(At,H);}An=An.I;}},MN:function(P
,aFilter){var A;if(!P||(P.I!==this))return null;var Hy=P.Aa;var HB=P.Y;var Kz=0x10000;
if(((aFilter&0x10000)===0x10000))Kz=0x0;while(!!Hy||!!HB){if((!!Hy&&(!aFilter||((
A=aFilter)&&((Hy.F&A)===A))))&&(!Kz||!((A=Kz)&&((Hy.F&A)===A))))return Hy;if((!!
HB&&(!aFilter||((A=aFilter)&&((HB.F&A)===A))))&&(!Kz||!((A=Kz)&&((HB.F&A)===A)))
)return HB;if(!!Hy)Hy=Hy.Aa;if(!!HB)HB=HB.Y;}return null;},OX:function(P,DP){var
A;if(!P)throw new Error(Eo);if(P.I!==this)throw new Error(FM);var Gy=P;var BV=P;
var Ip=P.EN;while(((DP>0)&&!!Gy.Aa)&&(Gy.Aa.EN<=Ip)){Gy=Gy.Aa;DP=DP-1;}while(((DP<
0)&&!!BV.Y)&&(BV.Y.EN>=Ip)){BV=BV.Y;DP=DP+1;}if((Gy===P)&&(BV===P))return;if(((P.
F&0x401)===0x401)){if(!!P.Y&&!!P.Bd)P.Y.F=P.Y.F|0x800;P.F=P.F|0x800;this.F=this.
F|0x4000;B.pe([this,this.DE],this);}if(((P.F&0x200)===0x200)){if(!!P.Y)P.Y.F=P.Y.
F|0x800;P.F=P.F|0x800;this.F=this.F|0x4000;B.pe([this,this.DE],this);}if(!!P.Y)P.
Y.Aa=P.Aa;if(!!P.Aa)P.Aa.Y=P.Y;if(this.A9===P)this.A9=P.Aa;if(this.Bk===P)this.Bk=
P.Y;if(Gy!==P){P.Aa=Gy.Aa;P.Y=Gy;Gy.Aa=P;if(!!P.Aa)P.Aa.Y=P;}if(BV!==P){P.Aa=BV;
P.Y=BV.Y;BV.Y=P;if(!!P.Y)P.Y.Aa=P;}if(!P.Aa)this.Bk=P;if(!P.Y)this.A9=P;if(((P.F&
0x1)===0x1))this.Ao(P.GetClipping());},D8:function(P){var A;if(!P)throw new Error(
H0);if(P.I!==this)throw new Error(FM);if((((P.F&0x401)===0x401)&&!!P.Y)&&!!P.Bd){
P.Y.F=P.Y.F|0x800;this.F=this.F|0x4000;B.pe([this,this.DE],this);}if(((P.F&0x200
)===0x200)){if(!!P.Y)P.Y.F=P.Y.F|0x800;this.F=this.F|0x4000;B.pe([this,this.DE],
this);}P.Bd=null;if(this.Dq===P)this.EL(this.MN(P,0x14));if(!!P.Y)P.Y.Aa=P.Aa;if(
!!P.Aa)P.Aa.Y=P.Y;if(this.A9===P)this.A9=P.Aa;if(this.Bk===P)this.Bk=P.Y;P.I=null;
P.Aa=null;P.Y=null;if((!((P.F&0x10)===0x10)&&((P.F&0x100000)===0x100000))&&!((this.
F&0x80)===0x80))P.AC(0x10,0x0);if(((P.F&0x1)===0x1))this.Ao(P.GetClipping());},S:
function(P,DP){var A;if(!P)throw new Error(H1);if(!!P.I)throw new Error(Hg);var BV=
null;var Ip=P.EN;if(((DP<0)&&!!this.Bk)&&(this.Bk.EN>=Ip)){BV=this.Bk;DP=DP+1;}while((((
DP<0)&&!!BV)&&!!BV.Y)&&(BV.Y.EN>=Ip)){BV=BV.Y;DP=DP+1;}if((!BV&&!!this.Bk)&&(this.
Bk.EN>Ip))BV=this.Bk;while((!!BV&&!!BV.Y)&&(BV.Y.EN>Ip))BV=BV.Y;if(!BV){P.I=this;
P.Y=this.Bk;if(!!this.Bk)this.Bk.Aa=P;if(!this.A9)this.A9=P;this.Bk=P;}else{P.I=
this;P.Y=BV.Y;P.Aa=BV;BV.Y=P;if(!!P.Y)P.Y.Aa=P;else this.A9=P;}if(((P.F&0x1)===0x1
))this.Ao(P.GetClipping());if(((P.F&0x80)===0x80)&&(B.aam().QL()===P))P.AC(0x10,
0x0);else if(!((this.F&0x10)===0x10)&&((P.F&0x200010)===0x200010))P.AC(0x0,0x10);
else if((((this.F&0x10)===0x10)&&!((P.F&0x10)===0x10))&&((P.F&0x100000)===0x100000
))P.AC(0x10,0x0);if(((!this.Dq&&((P.F&0x4)===0x4))&&((P.F&0x10)===0x10))&&!((P.F&
0x10000)===0x10000))this.EL(P);if(((P.F&0x401)===0x401)){P.F=P.F|0x800;this.F=this.
F|0x4000;B.pe([this,this.DE],this);}if(((P.F&0x200)===0x200)){P.F=P.F|0x800;this.
F=this.F|0x4000;B.pe([this,this.DE],this);}},Ld:function(){return this.EM;},_Init:
function(aArg){E.Bv._Init.call(this,aArg);this.__proto__=E.V;this.F=0x10001F;this.
Bw(aArg);},_Mark:function(D){var A;E.Bv._Mark.call(this,D);if((A=this.A9)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Bk)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.LY)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dq)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::Group"};E.Root={DC:null,BX:null,Br:B.abi(10,null
,null),I2:null,GA:null,KX:0,Bz:0,Cq:B.abi(10,0,null),LP:B.abi(10,B.wg,null),Eu:B.
abi(10,0,null),FS:B.abi(10,B.wf,null),I4:B.abi(10,0,null),Gz:B.abi(10,B.wf,null)
,Et:B.abi(10,B.wf,null),Dx:B.abi(10,B.wf,null),Fk:B.abi(10,B.wf,null),AR:0,LS:0,
LR:0,CX:B.abi(4,0,null),B4:B.abi(4,B.wg,null),B2:0,Ks:0,I6:0,Kk:true,Bw:function(
aArg){if(!!!this.J){var obj=this;B.abD(obj);}},Fv:function(){return this;},D3:function(
Bc,aClip,aOffset,A8,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(
!fullScreenUpdate)Bc.MM(aClip,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);E.V.D3.call(this,Bc,aClip,aOffset,A8,aBlend
);},AC:function(Dv,Eb){var A;E.V.AC.call(this,Dv,Eb);if(!this.I&&(((Dv&0x1)===0x1
)||((Eb&0x1)===0x1)))this.Ao([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.I&&(((
Dv&0x2)===0x2)||((Eb&0x2)===0x2)))this.Ao([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},
EL:function(C){if((C!==null)||!C)E.V.EL.call(this,C);},FC:function(C){var A;var Eh=
this.EM;E.V.FC.call(this,C);if(((Eh!==this.EM)&&!this.I)&&((this.F&0x1)===0x1))this.
Ao([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Ax){if(!!Ax){Ax.
JC=!!this.Bz;if(!!this.Bz)Ax.AA=this.Bz;}var Bj=null;if(!!this.BX){Bj=this.BX.Cr.
DispatchEvent(Ax);if(!Bj)Bj=this.BO(Ax);if(!Bj)Bj=this.Ol(Ax);this.Bz=0;return Bj;
}Bj=E.V.DispatchEvent.call(this,Ax);this.Bz=0;return Bj;},BroadcastEvent:function(
Ax,aFilter){if(!!Ax){Ax.JC=!!this.Bz;if(!!this.Bz)Ax.AA=this.Bz;}var Bj=E.V.BroadcastEvent.
call(this,Ax,aFilter);this.Bz=0;return Bj;},Ao:function(At){var A;if(this.KX>0)throw new
Error(H2);var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate)At=[
0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.I){E.V.Ao.call(this,At);return;}At=B.
lb(B.abh(At,this.M.slice(0,2)),this.M);if((At[0]>=At[2])||(At[1]>=At[3]))return;
var G;for(G=0;G<this.B2;G=G+1)if(!(((A=B.lb(this.B4.Get(G),At))[0]>=A[2])||(A[1]>=
A[3]))){this.B4.Set(G,B.wC(this.B4.Get(G),At));this.CX.Set(G,B.aaH(this.B4.Get(G
)));return;}if(this.B2<3){this.B4.Set(this.B2,At);this.CX.Set(this.B2,B.aaH(At));
this.B2=this.B2+1;return;}var BC;var DB;var Kr=0;var Kt=0;var Pp=2147483647;this.
B4.Set(this.B2,At);this.CX.Set(this.B2,B.aaH(At));for(BC=0;BC<=this.B2;BC=BC+1)for(
DB=BC+1;DB<=this.B2;DB=DB+1){var Mc=B.aaH(B.wC(this.B4.Get(BC),this.B4.Get(DB)));
var P4=((Mc<<8)/(this.CX.Get(BC)+this.CX.Get(DB)))|0;if(P4<Pp){Pp=P4;Kr=BC;Kt=DB;
}}this.B4.Set(Kr,B.wC(this.B4.Get(Kr),this.B4.Get(Kt)));this.CX.Set(Kr,B.aaH(this.
B4.Get(Kr)));if(Kt!==this.B2){this.B4.Set(Kt,this.B4.Get(this.B2));this.CX.Set(Kt
,this.CX.Get(this.B2));}},TY:function(){var Cy=B._NewObject(E.Jl,0);Cy.JC=!!this.
Bz;if(!!this.Bz)Cy.AA=this.Bz;return Cy;},H$:function(){var Cy=B._NewObject(E.Ga
,0);Cy.JC=!!this.Bz;if(!!this.Bz)Cy.AA=this.Bz;return Cy;},I3:function(){var Cy=
B._NewObject(E.Jj,0);Cy.JC=!!this.Bz;if(!!this.Bz)Cy.AA=this.Bz;return Cy;},TZ:function(
X){var G;var Id=false;for(G=0;G<10;G=G+1)if(!!this.Br.Get(G)){var A_=this.Dx.Get(
G);var An=this.Br.Get(G).I;while(!!An&&(An!==this)){A_=B.abe(A_,An.M.slice(0,2));
An=An.I;}if(!An&&(this.Br.Get(G)!==this)){var tmp=this.Br.Get(G);this.AR=G;this.
Br.Set(G,null);tmp.BO(this.H$().InitializeUp(G,this.Gz.Get(G),this.FS.Get(G),this.
Eu.Get(G),this.Cq.Get(G)+1,this.Et.Get(G),false,this.Dx.Get(G),this.Fk.Get(G)));
this.BroadcastEvent(this.I3().InitializeUp(G,this.Cq.Get(G)+1,false,tmp,this.Dx.
Get(G)),0x18);}else{this.Eu.Set(G,(this.GA.AA-this.I4.Get(G))|0);if(this.Eu.Get(
G)<10)this.Eu.Set(G,10);this.AR=G;this.Br.Get(G).BO(this.H$().InitializeHold(G,A_
,this.FS.Get(G),this.Eu.Get(G),this.Cq.Get(G)+1,this.Et.Get(G),this.Dx.Get(G),this.
Fk.Get(G)));Id=true;}}if(!Id)this.GA.Ah(false);},GetFPS:function(){var ticksCount=
0;var PB=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.LS&&(ticksCount>this.
LS))PB=((this.LR*1000)/((ticksCount-this.LS)|0))|0;this.LR=0;this.LS=ticksCount;
return PB;},Update:function(){var A;if(!this.I2)this.I2=B._NewObject(B.Graphics.
Canvas,0);this.I2.OO([(A=this.M)[2]-A[0],A[3]-A[1]]);this.I2.Update();return this.
UpdateGE20(this.I2);},UpdateGE20:function(Bc){if(!this.BeginUpdate())return Bf;var
F0=this.UpdateCanvas(Bc,AV);this.EndUpdate();return F0;},EndUpdate:function(){if(
this.B2>0){this.LR=this.LR+1;this.B2=0;}},UpdateCanvas:function(Bc,aOffset){var A;
var F0=Bf;var TS=[].concat(aOffset,B.abf(Bc.FrameSize,aOffset));var G;var BC=this.
B2;this.KX=this.KX+1;Bc.Cr=this;for(G=0;(G<BC)&&(G<4);G=G+1)if(this.CX.Get(G)>0){
this.D3(Bc,B.abg(this.B4.Get(G),aOffset),[-aOffset[0],-aOffset[1]],255,true);F0=
B.wC(F0,B.lb(TS,this.B4.Get(G)));}else BC=BC+1;Bc.Cr=null;this.KX=this.KX-1;if(!((
F0[0]>=F0[2])||(F0[1]>=F0[3])))return B.abg(F0,aOffset);else return F0;},GetUpdateRegion:
function(LG){var G;var BC=this.B2;if(LG<0)return Bf;for(G=0;(G<BC)&&(G<4);G=G+1)
if(!this.CX.Get(G)){BC=BC+1;LG=LG+1;}else if(G===LG)return this.B4.Get(G);return Bf;
},BeginUpdate:function(){var A;var G;if(!!this.B2&&!B.aaY(this.B4.Get(0),[0,0,(A=
this.M)[2]-A[0],A[3]-A[1]])){var Qd=B.abi(3,B.wg,null);var Qc=this.B2;for(G=0;G<
Qc;G++)Qd.Set(G,this.B4.Get(G));for(G=0;G<Qc;G++){var P5=B.abh(Qd.Get(G),this.M.
slice(0,2));var P6=this.K0(P5);if(!B.aaY(P5,P6))this.Ao(B.abg(P6,this.M.slice(0,
2)));}}var BC;var DB;for(BC=0;BC<(this.B2-1);BC++)if(this.CX.Get(BC)>0)for(DB=BC+
1;DB<this.B2;DB++)if(this.CX.Get(DB)>0){var Mc=B.aaH(B.wC(this.B4.Get(BC),this.B4.
Get(DB)));if(((Mc-this.CX.Get(BC))-this.CX.Get(DB))<0){this.B4.Set(BC,B.wC(this.
B4.Get(BC),this.B4.Get(DB)));this.CX.Set(BC,Mc);this.CX.Set(DB,0);}}for(G=this.B2-
1;G>=0;G--)if(!this.CX.Get(G))this.B2=this.B2-1;return this.B2;},DoesNeedUpdate:
function(){if(this.B2>0)return true;return false;},Initialize:function(aSize){this.
N([].concat(AV,aSize));if(this.Kk)this.F=this.F|0x60;else this.F=this.F|0x20;this.
Ao(this.M);return this;},SetRootFocus:function(NI){if(NI===this.Kk)return false;
this.Kk=NI;if(!NI){if(!!this.BX)this.BX.Cr.AC(0x0,0x40);else this.AC(0x0,0x40);}
else if(!!this.BX)this.BX.Cr.AC(0x40,0x0);else this.AC(0x40,0x0);return true;},SetUserInputTimestamp:
function(TR){this.Bz=TR;},DriveKeyboardHitting:function(B9,J9,EQ){var A;var Om=!
!this.DC;if(!!this.DC&&((!EQ||(this.Ks!==B9))||(this.I6!==J9))){var Cy=null;var K=(
E.Aw.isPrototypeOf(A=this.DC)?A:null);var EU=(E.DI.isPrototypeOf(A=this.DC)?A:null
);if(!!this.Ks)Cy=B._NewObject(E.KeyEvent,0).Initialize(this.Ks,false);if(this.I6
!==0x00)Cy=B._NewObject(E.KeyEvent,0).Initialize2(this.I6,false);if(!!EU)EU.BO(Cy
);else if(!!K)K.BO(Cy);this.Ks=0;this.I6=0x00;this.DC=null;}if(!!this.DC){var Cy=
null;var K=(E.Aw.isPrototypeOf(A=this.DC)?A:null);var EU=(E.DI.isPrototypeOf(A=this.
DC)?A:null);if(!!B9)Cy=B._NewObject(E.KeyEvent,0).Initialize(B9,true);if(this.I6
!==0x00)Cy=B._NewObject(E.KeyEvent,0).Initialize2(J9,true);if(!!EU)EU.BO(Cy);else
if(!!K)K.BO(Cy);}if(!this.DC&&EQ){if(!!B9)this.DC=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize(B9,true));if(J9!==0x00)this.DC=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize2(J9,true));if(!(E.DI.isPrototypeOf(A=this.DC)?A:null)&&
!(E.Aw.isPrototypeOf(A=this.DC)?A:null))this.DC=null;this.Ks=B9;this.I6=J9;Om=Om||
!!this.DC;}this.Bz=0;return Om;},DriveCursorMovement:function(By){return this.DriveMultiTouchMovement(
this.AR,By);},DriveMultiTouchMovement:function(U,By){if((U<0)||(U>9)){this.Bz=0;
return false;}var BQ=B.abe(By,this.Dx.Get(U));this.Dx.Set(U,By);if(!this.Br.Get(
U)||B.aaX(BQ,AV)){this.Bz=0;return false;}var A_=By;var An=this.Br.Get(U).I;while(
!!An&&(An!==this)){A_=B.abe(A_,An.M.slice(0,2));An=An.I;}if(!An&&(this.Br.Get(U)
!==this)){var tmp=this.Br.Get(U);this.AR=U;this.Br.Set(U,null);tmp.BO(this.H$().
InitializeUp(U,this.Gz.Get(U),this.FS.Get(U),this.Eu.Get(U),this.Cq.Get(U)+1,this.
Et.Get(U),false,this.Dx.Get(U),this.Fk.Get(U)));this.BroadcastEvent(this.I3().InitializeUp(
U,this.Cq.Get(U)+1,false,tmp,By),0x18);}else{this.Gz.Set(U,A_);this.AR=U;this.Br.
Get(U).BO(this.TY().Initialize(U,A_,this.FS.Get(U),BQ,this.Eu.Get(U),this.Cq.Get(
U)+1,this.Et.Get(U),By,this.Fk.Get(U)));}this.Bz=0;return true;},DriveCursorHitting:
function(EQ,U,By){return this.DriveMultiTouchHitting(EQ,U,By);},DriveMultiTouchHitting:
function(EQ,U,By){if((U<0)||(U>9)){this.Bz=0;return false;}var ticksCount=this.Bz;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var Uu=this.Bz;this.DriveMultiTouchMovement(
U,By);By=this.Dx.Get(U);this.Bz=Uu;if(EQ)this.Fk.Set(U,By);if(EQ&&!this.Br.Get(U
)){var BW;var A_=By;if(B.wa(this.LP.Get(U),By)&&((ticksCount-this.I4.Get(U))<=250
))this.Cq.Set(U,this.Cq.Get(U)+1);else this.Cq.Set(U,0);this.LP.Set(U,B.abh(FN,By
));this.I4.Set(U,ticksCount);if(!!this.BX)BW=this.EG(B.abh(FN,By),U,this.Cq.Get(
U)+1,this.BX.Cr,null,0x0);else BW=this.EG(B.abh(FN,By),U,this.Cq.Get(U)+1,null,null
,0x0);if(!!BW){this.BroadcastEvent(this.I3().InitializeDown(U,this.Cq.Get(U)+1,false
,BW.Aw,By),0x18);this.Br.Set(U,BW.Aw);this.Et.Set(U,BW.AO);}else{this.Br.Set(U,null
);this.Et.Set(U,AV);this.Bz=0;return false;}var An=BW.Aw.I;while(!!An&&(An!==this
)){A_=B.abe(A_,An.M.slice(0,2));An=An.I;}this.FS.Set(U,A_);this.Gz.Set(U,A_);this.
Eu.Set(U,0);this.GA.Ah(true);this.AR=U;this.Br.Get(U).BO(this.H$().InitializeDown(
U,A_,this.Cq.Get(U)+1,this.Et.Get(U),false,By));this.Bz=0;return true;}if(!EQ&&!
!this.Br.Get(U)){var A_=By;var An=this.Br.Get(U).I;while(!!An&&(An!==this)){A_=B.
abe(A_,An.M.slice(0,2));An=An.I;}if(!An)A_=this.Gz.Get(U);this.AR=U;var tmp=this.
Br.Get(U);this.Br.Set(U,null);tmp.BO(this.H$().InitializeUp(U,A_,this.FS.Get(U),
this.Eu.Get(U),this.Cq.Get(U)+1,this.Et.Get(U),false,By,this.Fk.Get(U)));this.BroadcastEvent(
this.I3().InitializeUp(U,this.Cq.Get(U)+1,false,tmp,By),0x18);this.Bz=0;return true;
}this.Bz=0;return false;},Lp:function(Ed,LB,Ee,FP){if(Ed===this)Ed=null;if(!!!Ed&&
!!this.BX)Ed=this.BX.Cr;if(!this.Br.Get(this.AR))return;var BW;BW=this.EG(B.abh(
FN,this.Dx.Get(this.AR)),this.AR,1,Ed,Ee,FP);if(!!BW&&(this.Br.Get(this.AR)!==BW.
Aw))this.Ox(BW.Aw,BW.AO);if(!BW&&(this.Br.Get(this.AR)!==LB))this.Ox(LB,AV);},Sa:
function(Ed,LB,Ee){this.Lp(Ed,LB,Ee,0x0);},Ox:function(Ed,Eq){if(!this.Br.Get(this.
AR)||(this.Br.Get(this.AR)===Ed))return;var tmp=this.Br.Get(this.AR);this.Br.Set(
this.AR,null);tmp.BO(this.H$().InitializeUp(this.AR,this.Gz.Get(this.AR),this.FS.
Get(this.AR),this.Eu.Get(this.AR),this.Cq.Get(this.AR)+1,this.Et.Get(this.AR),true
,this.Dx.Get(this.AR),this.Fk.Get(this.AR)));this.BroadcastEvent(this.I3().InitializeUp(
this.AR,this.Cq.Get(this.AR)+1,true,tmp,this.Dx.Get(this.AR)),0x18);var A_=this.
Dx.Get(this.AR);var An=null;if(!!Ed)An=Ed.I;while(!!An&&(An!==this)){A_=B.abe(A_
,An.M.slice(0,2));An=An.I;}if(!An&&(Ed!==this)){this.Br.Set(this.AR,null);return;
}this.BroadcastEvent(this.I3().InitializeDown(this.AR,this.Cq.Get(this.AR)+1,true
,Ed,this.Dx.Get(this.AR)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.Br.Set(this.AR,Ed);this.Et.Set(this.AR,Eq);this.FS.Set(this.AR,A_
);this.Gz.Set(this.AR,A_);this.Cq.Set(this.AR,0);this.Eu.Set(this.AR,0);this.I4.
Set(this.AR,ticksCount);this.Fk.Set(this.AR,this.Dx.Get(this.AR));this.Br.Get(this.
AR).BO(this.H$().InitializeDown(this.AR,A_,this.Cq.Get(this.AR)+1,this.Et.Get(this.
AR),true,this.Fk.Get(this.AR)));},QL:function(){if(!!this.BX)return this.BX.Cr;return null;
},QG:function(ES){var A;if(!ES)throw new Error(Nu);if(!((ES.F&0x80)===0x80))throw new
Error(Nv);if(this.BX.Cr===ES)this.BX=this.BX.Aa;else{var Kj=this.BX;while(Kj.Aa.
Cr!==ES)Kj=Kj.Aa;Kj.Aa=Kj.Aa.Aa;}ES.AC(0x0,0xD0);if(this.Kk){if(!!this.BX)this.BX.
Cr.AC(0x50,0x0);else this.AC(0x50,0x0);}},Qr:function(ES){var A;var Aj=B._NewObject(
E.OJ,0);if(!ES)throw new Error(Nw);if(ES===null)throw new Error(Nx);if(((ES.F&0x80
)===0x80))throw new Error(Ly);if(!!this.BX)this.BX.Cr.AC(0x0,0x50);else this.AC(
0x0,0x50);Aj.Aa=this.BX;Aj.Cr=ES;this.BX=Aj;if(this.Kk)ES.AC(0xD0,0x0);else ES.AC(
0x90,0x0);},_Init:function(aArg){E.V._Init.call(this,aArg);E.Timer._Init.call(this.
GA={J:this},0);(this.Br=[]).__proto__=E.Root.Br;(this.Cq=[]).__proto__=E.Root.Cq;(
this.LP=[]).__proto__=E.Root.LP;(this.Eu=[]).__proto__=E.Root.Eu;(this.FS=[]).__proto__=
E.Root.FS;(this.I4=[]).__proto__=E.Root.I4;(this.Gz=[]).__proto__=E.Root.Gz;(this.
Et=[]).__proto__=E.Root.Et;(this.Dx=[]).__proto__=E.Root.Dx;(this.Fk=[]).__proto__=
E.Root.Fk;(this.CX=[]).__proto__=E.Root.CX;(this.B4=[]).__proto__=E.Root.B4;this.
__proto__=E.Root;this.F=0x10007F;this.GA.FD(10);this.GA.FE=[this,this.TZ];this.Bw(
aArg);},_Done:function(){this.__proto__=E.V;this.GA._Done();E.V._Done.call(this);
},_ReInit:function(){E.V._ReInit.call(this);this.GA._ReInit();},_Mark:function(D
){var A;E.V._Mark.call(this,D);if((A=this.DC)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.BX)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.Br,D);if((A=this.I2
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.GA)._cycle!=D)A._Mark(A._cycle=D
);},_className:"Core::Root"};E.Event={AA:0,JC:false,Bw:function(aArg){this.AA=this.
Jz();},Jz:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=E.Event;this.Bw(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={BN:0,A0:0,Down:false,Initialize2:function(B9,EQ){this.
BN=0;this.A0=B9;this.Down=EQ;if((B9>=0x30)&&(B9<=0x39))this.BN=(10+B9)-48;if((B9>=
0x41)&&(B9<=0x5A))this.BN=(105+B9)-65;if((B9>=0x61)&&(B9<=0x7A))this.BN=(105+B9)-
97;if(B9===0x20)this.BN=131;if(!this.BN)switch(B9){case 0x2B:this.BN=132;break;case
0x2D:this.BN=133;break;case 0x2A:this.BN=134;break;case 0x2F:this.BN=135;break;case
0x3D:this.BN=136;break;case 0x2E:this.BN=137;break;case 0x2C:this.BN=138;break;case
0x3A:this.BN=139;break;case 0x3B:this.BN=140;break;default:;}return this;},Initialize:
function(B9,EQ){this.BN=B9;this.Down=EQ;this.A0=0x00;var NN=B9-10;var NM=B9-105;
if((NN>=0)&&(NN<=9))this.A0=(48+NN)&0xFFFF;if((NM>=0)&&(NM<=25))this.A0=(65+NM)&
0xFFFF;if(B9===131)this.A0=0x20;if(this.A0===0x00)switch(B9){case 132:this.A0=0x2B;
break;case 133:this.A0=0x2D;break;case 134:this.A0=0x2A;break;case 135:this.A0=0x2F;
break;case 136:this.A0=0x3D;break;case 137:this.A0=0x2E;break;case 138:this.A0=0x2C;
break;case 139:this.A0=0x3A;break;case 140:this.A0=0x3B;break;default:;}return this;
},QR:function(Pk){switch(Pk){case 141:return((this.A0>=0x41)&&(this.A0<=0x5A))||((
this.A0>=0x61)&&(this.A0<=0x7A));case 142:return(((this.A0>=0x41)&&(this.A0<=0x5A
))||((this.A0>=0x61)&&(this.A0<=0x7A)))||((this.A0>=0x30)&&(this.A0<=0x39));case
143:return(this.A0>=0x30)&&(this.A0<=0x39);case 144:return(((this.A0>=0x41)&&(this.
A0<=0x46))||((this.A0>=0x61)&&(this.A0<=0x66)))||((this.A0>=0x30)&&(this.A0<=0x39
));case 145:return this.A0!==0x00;case 146:return(this.A0===0x00)&&!!this.BN;case
147:return(((this.BN===6)||(this.BN===7))||(this.BN===4))||(this.BN===5);case 148:
return(this.A0!==0x00)||!!this.BN;default:;}return Pk===this.BN;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.Jj={JW:null,Ck:B.wf,CS:0,BJ:0,Down:false,CY:false,InitializeUp:function(U,CT
,H3,NK,ER){this.Down=false;this.BJ=U;this.CS=CT;this.Ck=ER;this.JW=NK;this.CY=H3;
return this;},InitializeDown:function(U,CT,H3,NK,ER){this.Down=true;this.BJ=U;this.
CS=CT;this.Ck=ER;this.JW=NK;this.CY=H3;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.Jj;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.JW)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.Ga={Gg:B.wf,Ck:B.wf,CS:0,B6:0,DG:B.wf,Cu:B.wf,BJ:0,Down:false,CY:false,InitializeHold:
function(U,Hi,J$,Ka,CT,Eq,ER,J_){this.Down=true;this.BJ=U;this.Cu=B.abf(Hi,Eq);this.
DG=B.abf(J$,Eq);this.B6=Ka;this.CS=CT;this.Ck=ER;this.Gg=J_;return this;},InitializeUp:
function(U,Hi,J$,Ka,CT,Eq,H3,ER,J_){this.Down=false;this.BJ=U;this.Cu=B.abf(Hi,Eq
);this.DG=B.abf(J$,Eq);this.B6=Ka;this.CS=CT;this.CY=H3;this.Ck=ER;this.Gg=J_;return this;
},InitializeDown:function(U,Hi,CT,Eq,H3,ER){this.Down=true;this.BJ=U;this.Cu=B.abf(
Hi,Eq);this.DG=B.abf(Hi,Eq);this.B6=0;this.CS=CT;this.CY=H3;this.Ck=ER;this.Gg=ER;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.Ga;},_className:"Core::CursorEvent"};E.Jl={Gg:B.wf,Ck:B.wf,CS:0,B6:0,AO:B.wf,DG:
B.wf,Cu:B.wf,BJ:0,Initialize:function(U,Hi,J$,aOffset,Ka,TQ,Eq,ER,J_){this.BJ=U;
this.Cu=B.abf(Hi,Eq);this.DG=B.abf(J$,Eq);this.AO=aOffset;this.B6=Ka;this.CS=TQ;
this.Ck=ER;this.Gg=J_;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.Jl;},_className:"Core::DragEvent"};E.JQ={D3:function(Bc,
aClip,aOffset,A8,aBlend){},GetClipping:function(){var A;var H=E.Bv.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var In=Bf;var K;for(K=this.Aa;!!K&&!((K.F&
0x200)===0x200);K=K.Aa)if(((K.F&0x1)===0x1))In=B.wC(In,K.GetClipping());H=B.wC(H
,In);}return H;},AC:function(Dv,Eb){var A;var L0=this.F;if((!!this.I&&((this.F&0x80001
)===0x80001))&&((Eb&0x80000)===0x80000))this.I.Ao(this.GetClipping());E.Bv.AC.call(
this,Dv,Eb);if(((!!this.I&&((this.F&0x1)===0x1))&&((Dv&0x80000)===0x80000))&&!((
L0&0x80000)===0x80000))this.I.Ao(this.GetClipping());},N:function(C){var A;if(B.
aaY(C,this.M))return;var Hz=[(A=this.M)[2]-A[0],A[3]-A[1]];var Ob=[C[2]-C[0],C[3
]-C[1]];var Jb=!B.aaX(Hz,Ob);var BQ=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(BQ,AV)&&!Jb){var K=this.Aa;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&0x400
)===0x400)){var tmp=((K.F&0x100)===0x100);K.K9(BQ,tmp);}K=K.Aa;}}if((Jb&&(Hz[0]>
0))&&(Hz[1]>0)){var AG=this.M;var K=this.Aa;while(!!K&&!((K.F&0x200)===0x200)){if(((
K.F&0x400)===0x400)){if(!!K.Bd&&(K.Bd.Ij!==this))K.Bd=null;if(!K.Bd&&(K.CG!==0x14
))K.Kl(AG,this);}K=K.Aa;}}E.Bv.N.call(this,C);if(!!this.I&&Jb){this.F=this.F|0x1000;
if(!((this.I.F&0x2000)===0x2000)){this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.DE],
this);}}},_Init:function(aArg){E.Bv._Init.call(this,aArg);this.__proto__=E.JQ;this.
F=0x203;},_className:"Core::Outline"};E.A3={DA:null,Bb:null,Aw:null,FH:null,I9:null
,Em:null,EC:-1,DW:0,LW:8,GG:0,D7:0,IV:B.wf,C5:-1,Cd:0,Cp:-1,EK:24,Cm:0,Ha:null,PM:
false,DispatchEvent:function(Ax){var A;var result=null;if(((this.Cp>=0)&&(this.Cp<
this.Cm))&&!this.Dq){this.C5=this.Cp;this.Aw=(E.Aw.isPrototypeOf(A=B._NewObject(
this.Ha,0))?A:null);if(!!this.Bk)this.Bk.Aa=this.Aw;else this.A9=this.Aw;this.Aw.
Y=this.Bk;this.Bk=this.Aw;this.Aw.I=this;this.IV=[(A=this.M)[2]-A[0],this.EK];(A=
this.Em)?A[1].call(A[0],this):null;var An=(E.V.isPrototypeOf(A=this.Aw)?A:null);
if(!!An)result=An.DispatchEvent(Ax);else result=this.Aw.BO(Ax);if(!!this.Aw.Y)this.
Aw.Y.Aa=null;else this.A9=null;this.Bk=this.Aw.Y;this.Aw.Y=null;this.Aw.I=null;this.
Aw=null;}if(!result)result=E.V.DispatchEvent.call(this,Ax);return result;},EP:function(
CJ){var A;if(!this.Ha)return;this.PM=true;var CV=this.Oh(0-this.Cd,1);var Dj=this.
Oh((((A=this.M)[3]-A[1])-this.Cd)-1,2);var LO=Dj-CV;if(LO<1)LO=1;var LK=(LO/2)|0;
var LL=(LO/3)|0;if(!LK)LK=1;if(!LL)LL=1;if(CV<this.DW){CV=CV-LK;Dj=Dj+LL;}else if(
Dj>this.EC){CV=CV-LL;Dj=Dj+LK;}else{CV=this.DW;Dj=this.EC;}if(CV>=this.Cm){CV=0;
Dj=-1;}else if(Dj<0){CV=0;Dj=-1;}if(Dj>=this.Cm)Dj=this.Cm-1;if(CV<0)CV=0;var L7=
this.DW;var L8=this.EC;var N9=0;var N_=-1;if(CV>L7)L7=CV;if(Dj<L8)L8=Dj;if(L7<=L8
){while((this.EC<Dj)&&(this.DW<L7)){this.L4();this.Pt();}while((this.DW>CV)&&(this.
EC>L8)){this.P7();this.Ps();}}else{this.EC=(this.EC-this.DW)+CV;this.DW=CV;N9=this.
DW;N_=this.EC;}while(this.DW<CV)this.L4();while(this.EC>Dj)this.P7();while(this.
DW>CV)this.Ps();while(this.EC<Dj)this.Pt();var T=this.A9;var Dz=this.DW;var A_=[
0,this.Cd+this.GF(Dz,0)];var AI=(A=this.M)[3]-A[1];var Py=null;var Qf=(A=this.M)[
2]-A[0];while(!!T){var Hr=Dz;var KQ=((Hr>=0)&&(Hr<=-1))||((Dz>=N9)&&(Dz<=N_));var
NU=T.GetExtent();var Ci=B.abe(A_,NU.slice(0,2));if(KQ)this.D7=this.EK;else this.
D7=NU[3]-NU[1];var N5=A_[1];var N6=A_[1]+this.D7;if(!B.aaX(Ci,AV))T.K9(Ci,true);
if((KQ&&(N5<AI))&&(N6>0)){this.Aw=T;this.C5=Hr;this.IV=[Qf,this.D7];(A=this.Em)?
A[1].call(A[0],this):null;}T=T.Aa;Dz+=1;A_=[A_[0],A_[1]+this.D7];}Dz=this.DW;T=this.
A9;A_=[0,this.Cd+this.GF(Dz,0)];while(!!T){var Hr=Dz;var KQ=((Hr>=0)&&(Hr<=-1))||((
Dz>=N9)&&(Dz<=N_));if(KQ)this.D7=this.EK;else this.D7=(A=T.GetExtent())[3]-A[1];
var N5=A_[1];var N6=A_[1]+this.D7;if(KQ&&!((N5<AI)&&(N6>0))){this.Aw=T;this.C5=Hr;
this.IV=[Qf,this.D7];(A=this.Em)?A[1].call(A[0],this):null;}if(Hr===this.Cp)Py=T;
T=T.Aa;Dz+=1;A_=[A_[0],A_[1]+this.D7];}this.Aw=null;this.C5=-1;this.EL(Py);this.
PM=false;},MN:function(P,aFilter){return null;},OX:function(P,DP){throw new Error(
Ny);},D8:function(P){throw new Error(FO);},S:function(P,DP){throw new Error(Lz);
},GF:function(I1,TL){return I1*this.EK;},Oh:function(By,TL){return(By/this.EK)|0;
},P7:function(){var T=this.Bk;if(!T)return null;if(T===this.Dq)this.EL(null);this.
EC=this.EC-1;if(!!T.Y)T.Y.Aa=null;else this.A9=null;this.Bk=T.Y;T.Y=null;T.I=null;
T.Bd=null;if(this.GG<this.LW){if(!!this.DA)this.DA.Y=T;T.Aa=this.DA;this.DA=T;this.
GG++;}return T;},Pt:function(){var A;var T=this.DA;var Kq=this.Ha;var Qi=++this.
EC;while(!!T&&(((A=T)?A.__proto__:null)!==Kq))T=T.Aa;if(!!T){if(!!T.Aa)T.Aa.Y=T.
Y;if(!!T.Y)T.Y.Aa=T.Aa;if(this.DA===T)this.DA=T.Aa;T.Aa=null;T.Y=null;this.GG--;
}else{T=(E.Aw.isPrototypeOf(A=B._NewObject(Kq,0))?A:null);T.C6(0x1D);if(!!this.GG
)this.LW++;}this.D7=this.EK;this.C5=Qi;this.IV=[(A=this.M)[2]-A[0],this.D7];this.
Aw=T;(A=this.Em)?A[1].call(A[0],this):null;this.Aw=null;this.C5=-1;if(!!this.Bk)
this.Bk.Aa=T;T.I=this;T.Y=this.Bk;this.Bk=T;if(!this.A9)this.A9=T;if(Qi===this.Cp
)this.EL(T);return T;},L4:function(){var T=this.A9;if(!T)return null;if(T===this.
Dq)this.EL(null);this.DW=this.DW+1;if(!!T.Aa)T.Aa.Y=null;else this.Bk=null;this.
A9=T.Aa;T.Aa=null;T.I=null;T.Bd=null;if(this.GG<this.LW){if(!!this.DA)this.DA.Y=
T;T.Aa=this.DA;this.DA=T;this.GG++;}return T;},Ps:function(){var A;var T=this.DA;
var Kq=this.Ha;var Qh=--this.DW;while(!!T&&(((A=T)?A.__proto__:null)!==Kq))T=T.Aa;
if(!!T){if(!!T.Aa)T.Aa.Y=T.Y;if(!!T.Y)T.Y.Aa=T.Aa;if(this.DA===T)this.DA=T.Aa;T.
Aa=null;T.Y=null;this.GG--;}else{T=(E.Aw.isPrototypeOf(A=B._NewObject(Kq,0))?A:null
);T.C6(0x1D);if(!!this.GG)this.LW++;}this.D7=this.EK;this.C5=Qh;this.IV=[(A=this.
M)[2]-A[0],this.D7];this.Aw=T;(A=this.Em)?A[1].call(A[0],this):null;this.Aw=null;
this.C5=-1;if(!!this.A9)this.A9.Y=T;T.I=this;T.Aa=this.A9;this.A9=T;if(!this.Bk)
this.Bk=T;if(Qh===this.Cp)this.EL(T);return T;},PZ:function(X){var A;this.Bb.A2=
null;this.Bb.HC=null;this.Bb=null;(A=this.I9)?A[1].call(A[0],this):null;},Uj:function(
X){this.JN(this.FH.AO[1]);},Uk:function(X){var A;if(!!this.Bb){this.Bb.Ah(false);
this.Bb.A2=null;this.Bb.HC=null;this.Bb=null;}{var Q=this.OC(0,this.Cm-1);var L1=
this.M.slice(0,2);if(Q[0]>L1[0])Q=[].concat(L1[0],Q.slice(1,4));if(Q[1]>L1[1])Q=
B.abP(Q,L1[1]);var BQ=Q[1]-this.M[1];var Oa=((A=this.M)[3]-A[1])-(Q[3]-Q[1]);if(
Oa>0)Oa=0;this.FH.AO=[0,this.Cd];this.FH.Bm=[0,(this.Cd+Oa)-BQ];this.FH.Bl=[0,this.
Cd-BQ];}},RG:function(C){if(C===this.FH)return;if(!!C&&!!C.Ja){B.ab5("%s%*%s",Nz
,C,NA);throw new Error(NB);}if(!!this.FH){this.FH.L3=null;this.FH.Ja=null;}this.
FH=C;if(!!C){C.L3=[this,this.Uk];C.Ja=[this,this.Uj];}},JN:function(C){var A;if(
C===this.Cd)return;this.Cd=C;this.AN();this.Ao([0,0,(A=this.M)[2]-A[0],A[3]-A[1]
]);},JO:function(C){if(C<0)C=-1;if(C===this.Cp)return;this.Cp=C;this.AN();},Ry:function(
C){var A;if(C<1)C=1;if(C===this.EK)return;this.EK=C;while(!!this.L4());this.AN();
this.Ao([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},Lm:function(C){var A;if(C<0)C=0;if(
C===this.Cm)return;var Q=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(C>this.Cm){Q=[].concat(
Q.slice(0,3),this.Cd+this.GF(C,3));Q=B.abP(Q,this.Cd+this.GF(this.Cm,3));}else{Q=
B.abP(Q,this.Cd+this.GF(C,3));Q=[].concat(Q.slice(0,3),this.Cd+this.GF(this.Cm,3
));}this.Cm=C;this.AN();this.Ao(Q);},Rx:function(C){var A;if(C===this.Ha)return;
this.Ha=C;while(!!this.L4());this.DA=null;this.GG=0;this.AN();this.Ao([0,0,(A=this.
M)[2]-A[0],A[3]-A[1]]);},Qk:function(NG,DO){var A;var LT=this.Cd;var PC=(((A=this.
M)[3]-A[1])-this.Cd)-this.GF(this.Cm,3);var Ci=0;if(LT>0)Ci=-LT;else if(PC>0)Ci=
PC;if((Ci>0)&&(Ci>-LT))Ci=-LT;if(!Ci){(DO)?DO[1].call(DO[0],this):null;return;}if(
!!this.Bb){this.Bb.Ah(false);this.Bb.A2=null;this.Bb.HC=null;this.I9=null;}this.
Bb=NG;if(!this.Bb){this.JN(this.Cd+Ci);(DO)?DO[1].call(DO[0],this):null;}else{this.
Bb.Ah(false);this.Bb.IN(1);this.Bb.A2=[this,this.OK,this.JN];this.Bb.C1=this.Cd;
this.Bb.FK=this.Cd+Ci;this.Bb.HC=[this,this.PZ];this.Bb.OT(false);this.Bb.Ah(true
);this.I9=DO;}},K3:function(I1,Pl,NG,DO){var A;if((I1<0)||(I1>=this.Cm))return;var
H=this.OC(I1,I1);var AG=this.M;var Kn=B.lb(H,AG);if((!Pl&&!((Kn[0]>=Kn[2])||(Kn[
1]>=Kn[3])))||(Pl&&B.aaY(Kn,H))){(DO)?DO[1].call(DO[0],this):null;return;}var Ci=
0;if(H[3]>AG[3])Ci=H[3]-AG[3];if(Ci>(H[1]-AG[1]))Ci=H[1]-AG[1];if(!!this.Bb){this.
Bb.Ah(false);this.Bb.A2=null;this.Bb.HC=null;this.I9=null;}this.Bb=NG;if(!this.Bb
){this.JN(this.Cd-Ci);(DO)?DO[1].call(DO[0],this):null;}else{this.Bb.Ah(false);this.
Bb.IN(1);this.Bb.A2=[this,this.OK,this.JN];this.Bb.C1=this.Cd;this.Bb.FK=this.Cd-
Ci;this.Bb.HC=[this,this.PZ];this.Bb.OT(false);this.Bb.Ah(true);this.I9=DO;}},QK:
function(By){if(((this.Cm<=0)||(By[0]<this.M[0]))||(By[0]>=this.M[2]))return-1;By=
B.abe(By,this.M.slice(0,2));{var T=By[1]-this.Cd;if(T>0)T=this.Oh(T,0);if((T<0)||(
T>=this.Cm))return-1;return T;}},OC:function(LD,LE){if(LD<0)LD=0;if(LE>=this.Cm)
LE=this.Cm-1;if(LD>LE)return Bf;var Q=this.M;var Ci=this.Cd;Q=[].concat(Q.slice(
0,3),(Q[1]+Ci)+this.GF(LE+1,0));Q=B.abP(Q,(Q[1]+Ci)+this.GF(LD,0));return Q;},OK:
function(){return this.Cd;},_Init:function(aArg){E.V._Init.call(this,aArg);this.
__proto__=E.A3;this.N(NC);this.Ha=B.acf.Text;},_Mark:function(D){var A;E.V._Mark.
call(this,D);if((A=this.DA)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bb)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aw)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.FH)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I9)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Em)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Core::VerticalList"};E.HY={M9:null,IK:null,II:null,D5:null,CQ:null
,Mb:0,Ai:0,BJ:0,AA:0,CS:0,B6:0,AO:B.wf,DG:B.wf,Cu:B.wf,JT:8,FG:0,OI:1,Down:false
,EJ:false,CY:false,NT:false,Kv:0,D3:function(Bc,aClip,aOffset,A8,aBlend){},BO:function(
Ax){var A;var W=(E.Ga.isPrototypeOf(Ax)?Ax:null);var A6=(E.Jl.isPrototypeOf(Ax)?
Ax:null);var LV=this.EJ;var EV;var Ef;var KV;var CC;var Ke;if(!W&&!A6)return null;
EV=(!!W&&W.Down)&&!W.B6;Ef=(!!W&&W.Down)&&(W.B6>0);KV=(!!W&&W.Down)&&(W.B6>this.
Kv);CC=!!W&&!W.Down;Ke=!!A6;if(EV)this.Kv=((A=(W.CY?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if((((this.FG&0x20)===0x20)&&(this.Ai>0))&&(this.Ai<33554432)){var BG=(E.Jj.
isPrototypeOf(Ax)?Ax:null);if(((!!BG&&BG.Down)&&(BG.JW!==this))&&B.wa(this.GetExtent(
),this.I.OH(BG.Ck))){this.Mb=0x20;this.Ai=this.Ai|67108864;return null;}}if(EV){
var Ie=0;var Fl;this.Ai=this.Ai|(1<<W.BJ);for(Fl=this.Ai&4095;Fl>0;Fl=Fl>>1)if(!
!(Fl&1))Ie=Ie+1;if(Ie===1)this.Ai=(this.Ai|16777216)|(4096<<W.BJ);}if(CC&&(this.
Ai<16777216)){var BE=this.Fv();var BW=null;if(!!BE){var Oq=(!!this.Y?this.Y:this.
I);var NR=(!!BE.BX?BE.BX.Cr:null);BW=BE.EG(B.abh(LA,W.Ck),W.BJ,W.CS,NR,Oq,0x0);}
if(!!BW){var G;for(G=0;G<10;G++)if(!!(this.Ai&(1<<G)))BW.Aw.BO(B._NewObject(E.Ga
,0).InitializeDown(G,W.Cu,W.CS,AV,true,W.Ck));for(G=0;G<10;G++)if(!!(this.Ai&(1<<
G)))BW.Aw.BO(B._NewObject(E.Ga,0).InitializeUp(G,W.Cu,W.Cu,0,W.CS,AV,false,W.Ck,
W.Ck));}}if(CC)this.Ai=(this.Ai&~(1<<W.BJ))|33554432;if(KV&&(this.Ai<16777216))this.
Ai=this.Ai|67108864;if(CC&&W.CY)this.Ai=this.Ai|67108864;if(CC&&!(this.Ai&4095))
this.Mb=0x0;if(CC&&!(this.Ai&16777215))this.Ai=0;if(Ef&&(this.Ai>=67108864)){var
BE=this.Fv();if(!!BE)BE.Lp(null,null,this,this.Mb);}if((Ef&&!!(this.Ai&16777216)
)&&!!(this.Ai&33554432)){Ef=false;CC=true;}if(!!W&&!(this.Ai&(4096<<W.BJ)))return this;
if(!!A6&&!(this.Ai&(4096<<A6.BJ)))return this;if(CC&&!(this.Ai&16777216))return this;
if(((EV||Ke)||Ef)&&((this.Ai<16777216)||(this.Ai>=33554432)))return this;if(CC)this.
Ai=this.Ai&3758100479;if(CC&&!(this.Ai&16777215))this.Ai=0;if(!!W){this.Down=EV||
Ef;this.EJ=this.MY(W.Cu);this.DG=W.DG;this.Cu=W.Cu;this.AO=AV;this.B6=W.B6;this.
CS=W.CS;this.CY=W.CY;this.BJ=W.BJ;this.AA=W.AA;if(W.Down&&!W.B6)LV=false;}if(!!A6
){this.Down=true;this.EJ=this.MY(A6.Cu);this.DG=A6.DG;this.Cu=A6.Cu;this.AO=A6.AO;
this.B6=A6.B6;this.CS=A6.CS;this.BJ=A6.BJ;this.CY=false;this.AA=A6.AA;}var NS=this.
Down;if(!!A6)(A=this.M9)?A[1].call(A[0],this):null;if((!!W&&this.Down)&&!this.B6
)(A=this.CQ)?A[1].call(A[0],this):null;if((this.Down&&this.EJ)&&!LV){this.NT=true;(
A=this.II)?A[1].call(A[0],this):null;}if(this.NT&&(((NS&&!this.EJ)&&LV)||((!NS&&
this.EJ)&&LV))){this.NT=false;(A=this.IK)?A[1].call(A[0],this):null;}if(!!W&&!NS
)(A=this.D5)?A[1].call(A[0],this):null;if(!!this.FG){var HD=0x0;if(((((this.FG&0x10
)===0x10)&&!!W)&&W.Down)&&(W.B6>=1000))HD=0x10;if((((this.FG&0x1)===0x1)&&!!A6)&&((
A6.Ck[1]-A6.Gg[1])<=-this.JT))HD=0x1;if((((this.FG&0x2)===0x2)&&!!A6)&&((A6.Ck[1
]-A6.Gg[1])>=this.JT))HD=0x2;if((((this.FG&0x4)===0x4)&&!!A6)&&((A6.Ck[0]-A6.Gg[
0])<=-this.JT))HD=0x4;if((((this.FG&0x8)===0x8)&&!!A6)&&((A6.Ck[0]-A6.Gg[0])>=this.
JT))HD=0x8;if(!!HD){var BE=this.Fv();if(!!BE){this.Mb=HD;BE.Lp(null,this,this,HD
);}}}return this;},EG:function(At,U,CT,Ep,Ee,FP){var A;if(!!Ep&&(Ep!==this))return null;
if((CT<1)||(CT>this.OI))return null;if(this.Ai>=33554432)return null;if((this.Ai>=
16777216)&&!(this.Ai&(4096<<U)))return null;if(!!(FP&this.FG))return null;if(this.
QO()){var H=B.lb(At,this.GetExtent());if(!((H[0]>=H[2])||(H[1]>=H[3]))){var C$=B.
aaI(At);var BQ=AV;if(C$[0]<H[0])BQ=[H[0]-C$[0],BQ[1]];if(C$[0]>=H[2])BQ=[(H[2]-C$[
0])-1,BQ[1]];if(C$[1]<H[1])BQ=[BQ[0],H[1]-C$[1]];if(C$[1]>=H[3])BQ=[BQ[0],(H[3]-
C$[1])-1];return B._NewObject(E.K2,0).Initialize(this,BQ);}}else{var Bs=B.abi(9,
B.wf,null);var G;Bs.Set(0,B.aaI(At));Bs.Set(1,Bs.Get(0));Bs.Set(2,Bs.Get(0));Bs.
Set(3,Bs.Get(0));Bs.Set(4,Bs.Get(0));Bs.Set(1,[At[0],Bs.Get(1)[1]]);Bs.Set(2,[Bs.
Get(2)[0],At[1]]);Bs.Set(3,[At[2],Bs.Get(3)[1]]);Bs.Set(4,[Bs.Get(4)[0],At[3]]);
Bs.Set(5,At.slice(0,2));Bs.Set(6,[At[2],At[1]]);Bs.Set(7,[At[0],At[3]]);Bs.Set(8
,At.slice(2,4));for(G=0;G<9;G=G+1)if(this.MY(Bs.Get(G)))return B._NewObject(E.K2
,0).Initialize(this,B.abe(Bs.Get(G),Bs.Get(0)));}return null;},Nc:function(C){if(
C<1)C=1;this.JT=C;},JL:function(C){if(C<1)C=1;this.OI=C;},Ah:function(C){if(C)this.
AC(0x100000,0x0);else this.AC(0x0,0x100000);},_Init:function(aArg){E.JR._Init.call(
this,aArg);this.__proto__=E.HY;this.F=0x10011B;},_Mark:function(D){var A;E.JR._Mark.
call(this,D);if((A=this.M9)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
IK)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.II)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.D5)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.CQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};E.D_={timer:null,L3:null,Ja:null,Ai:0,LJ:0,Im:0,LU:B.wf,Ic:0,FR:0,AZ:0,HI:0,Jd:
0,Ib:0,FQ:0,AY:0,HH:0,HG:0,DG:B.wf,Oy:B.wf,Bl:B.wf,Bm:B.wf,AO:B.wf,D$:B.wf,IS:false
,Ev:false,Ew:false,LI:false,Kv:0,D3:function(Bc,aClip,aOffset,A8,aBlend){},BO:function(
Ax){var A;var W=(E.Ga.isPrototypeOf(Ax)?Ax:null);var A6=(E.Jl.isPrototypeOf(Ax)?
Ax:null);var BG=(E.Jj.isPrototypeOf(Ax)?Ax:null);var EV;var Ef;var KV;var CC;var
Ke;EV=(!!W&&W.Down)&&!W.B6;Ef=(!!W&&W.Down)&&(W.B6>0);KV=(!!W&&W.Down)&&(W.B6>this.
Kv);CC=!!W&&!W.Down;Ke=!!A6;if(EV)this.Kv=((A=(W.CY?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if(EV){var Ie=0;var Fl;this.Ai=this.Ai|(1<<W.BJ);for(Fl=this.Ai&4095;Fl>0;Fl=
Fl>>1)if(!!(Fl&1))Ie=Ie+1;if(Ie===1)this.Ai=(this.Ai|16777216)|(4096<<W.BJ);}if(
CC&&(this.Ai<16777216)){var BE=this.Fv();var BW=null;if(!!BE){var Oq=(!!this.Y?this.
Y:this.I);var NR=(!!BE.BX?BE.BX.Cr:null);BW=BE.EG(B.abh(LA,W.Ck),W.BJ,W.CS,NR,Oq
,0x0);}if(!!BW){var G;for(G=0;G<10;G++)if(!!(this.Ai&(1<<G)))BW.Aw.BO(B._NewObject(
E.Ga,0).InitializeDown(G,W.Cu,W.CS,AV,true,W.Ck));for(G=0;G<10;G++)if(!!(this.Ai&(
1<<G)))BW.Aw.BO(B._NewObject(E.Ga,0).InitializeUp(G,W.Cu,W.Cu,0,W.CS,AV,false,W.
Ck,W.Ck));}}if(CC)this.Ai=(this.Ai&~(1<<W.BJ))|33554432;if(KV&&(this.Ai<16777216
))this.Ai=this.Ai|67108864;if(CC&&W.CY)this.Ai=this.Ai|67108864;if(CC&&!(this.Ai&
16777215))this.Ai=0;if(Ef&&(this.Ai>=67108864)){var BE=this.Fv();if(!!BE)BE.Lp(null
,null,this,0x0);}if((Ef&&!!(this.Ai&16777216))&&!!(this.Ai&33554432)){Ef=false;CC=
true;}if(!!W&&!(this.Ai&(4096<<W.BJ)))return this;if(!!A6&&!(this.Ai&(4096<<A6.BJ
)))return this;if(CC&&!(this.Ai&16777216))return this;if(((EV||Ke)||Ef)&&((this.
Ai<16777216)||(this.Ai>=33554432)))return this;if(CC)this.Ai=this.Ai&3758100479;
if(CC&&!(this.Ai&16777215))this.Ai=0;if(!!BG&&(BG.JW===this))return null;if((!!BG&&
BG.Down)&&(this.LI||!this.IS))return null;if((!!BG&&BG.Down)&&!B.wa(this.M,this.
I.OH(BG.Ck)))return null;if((!!BG&&!BG.Down)&&(!this.LI||(this.LJ!==BG.BJ)))return null;
if((!W&&!A6)&&!BG)return null;if(!!W){this.LI=EV||Ef;this.LJ=W.BJ;this.DG=W.DG;}
if(!!A6)this.LJ=A6.BJ;if(!!BG){this.LI=BG.Down;this.LJ=BG.BJ;}if(!!BG&&BG.Down){
this.Or();this.AY=(((BG.AA-this.HG)*0.001)*this.FQ)+this.AY;this.AZ=(((BG.AA-this.
Jd)*0.001)*this.FR)+this.AZ;if(this.Ev)this.AY=0;if(this.Ew)this.AZ=0;this.FQ=0;
this.FR=0;this.Ev=false;this.Ew=false;this.LU=this.AO;this.Im=BG.AA;return this;
}if(EV){this.Or();this.AY=(((W.AA-this.HG)*0.001)*this.FQ)+this.AY;this.AZ=(((W.
AA-this.Jd)*0.001)*this.FR)+this.AZ;if(this.Ev||!this.IS)this.AY=0;if(this.Ew||!
this.IS)this.AZ=0;this.FQ=0;this.FR=0;this.Ev=false;this.Ew=false;if(!this.IS){this.
IS=true;(A=this.L3)?A[1].call(A[0],this):null;}this.LU=this.AO;this.Im=W.AA;}if(
!!A6){var Ak=B.abe(A6.Cu,A6.DG);var Az=this.AO;Az=[this.LU[0]+Ak[0],Az[1]];Az=[Az[
0],this.LU[1]+Ak[1]];if(Az[0]<this.Bm[0])Az=[this.Bm[0]+(((Az[0]-this.Bm[0])/2)|
0),Az[1]];else if(Az[0]>this.Bl[0])Az=[this.Bl[0]+(((Az[0]-this.Bl[0])/2)|0),Az[
1]];if(Az[1]<this.Bm[1])Az=[Az[0],this.Bm[1]+(((Az[1]-this.Bm[1])/2)|0)];else if(
Az[1]>this.Bl[1])Az=[Az[0],this.Bl[1]+(((Az[1]-this.Bl[1])/2)|0)];if(!B.aaX(Az,this.
AO)){this.Oy=B.abe(Az,this.AO);this.AO=Az;(A=this.Ja)?A[1].call(A[0],this):null;
}}if((!!BG&&!BG.Down)&&((BG.AA-this.Im)>=200)){this.AY=0;this.AZ=0;}if(Ef&&((W.AA-
this.Im)>=200)){this.AY=0;this.AZ=0;}if(!!A6&&(A6.AA>this.Im)){var Ak=A6.AO;var PG=
1000/(A6.AA-this.Im);var G1;var G2;G1=Ak[0]*PG;G2=Ak[1]*PG;if((G1*this.AY)<0)this.
AY=0;if((G2*this.AZ)<0)this.AZ=0;this.AY=(this.AY+G1)*0.5;this.AZ=(this.AZ+G2)*0.5;
this.Im=A6.AA;}if(!CC&&!BG)return this;if(!!W&&W.CY){this.AY=0;this.AZ=0;}if((this.
AO[0]<=this.Bm[0])||(this.AO[0]>=this.Bl[0]))this.AY=0;else if(!this.AY){var AT=
this.AO[0];var A1=this.Bm[0];var AM=this.Bl[0];if(AT<A1)AM=this.Bm[0];else if(AT>
AM)A1=this.Bl[0];else if(this.D$[0]<=1){A1=AT;AM=AT;}else{var Fn=(AM-AT)%this.D$[
0];AM=(AT-this.D$[0])+Fn;A1=AT+Fn;if(AM<this.Bm[0])AM=this.Bm[0];if(A1>this.Bl[0
])A1=this.Bl[0];}if((A1-AT)<=(AT-AM))AT=A1;else AT=AM;if(AT!==this.AO[0]){var Cx=
AT-this.AO[0];if(Cx>0)this.AY=Math.sqrt((Cx*2)*5000)+20;if(Cx<0)this.AY=-Math.sqrt((-
Cx*2)*5000)-20;this.FQ=(400-(this.AY*this.AY))/(2*Cx);this.Ib=AT;}}else{var Uw=this.
AY*this.AY;var Cx=Uw/10000;var AT=this.AO[0];if(this.AY>0)AT=AT+(Cx|0);if(this.AY<
0)AT=AT-(Cx|0);if(AT>this.Bl[0])AT=this.Bl[0];else if(AT<this.Bm[0])AT=this.Bm[0
];var Qa=AT;var A1=this.Bm[0];var AM=this.Bl[0];if(AT<A1)AM=this.Bm[0];else if(AT>
AM)A1=this.Bl[0];else if(this.D$[0]<=1){A1=AT;AM=AT;}else{var Fn=(AM-AT)%this.D$[
0];AM=(AT-this.D$[0])+Fn;A1=AT+Fn;if(AM<this.Bm[0])AM=this.Bm[0];if(A1>this.Bl[0
])A1=this.Bl[0];}if(this.AY>0){if(AM<=this.AO[0])AT=A1;else if((AT-AM)<(A1-AT))AT=
AM;else AT=A1;}else if(A1>=this.AO[0])AT=AM;else if((AT-AM)>(A1-AT))AT=A1;else AT=
AM;if(AT!==this.AO[0]){Cx=AT-this.AO[0];if(AT!==Qa){var G7=AT-Qa;if(G7>0)this.AY=
this.AY+Math.sqrt((G7*2)*5000);if(G7<0)this.AY=this.AY-Math.sqrt((-G7*2)*5000);}
if(this.AY>0)this.AY=this.AY+20;if(this.AY<0)this.AY=this.AY-20;this.FQ=(400-(this.
AY*this.AY))/(2*Cx);this.Ib=AT;}else this.AY=0;}if((this.AO[1]<=this.Bm[1])||(this.
AO[1]>=this.Bl[1]))this.AZ=0;else if(!this.AZ){var AU=this.AO[1];var A1=this.Bm[
1];var AM=this.Bl[1];if(AU<A1)AM=this.Bm[1];else if(AU>AM)A1=this.Bl[1];else if(
this.D$[1]<=1){A1=AU;AM=AU;}else{var Fn=(AM-AU)%this.D$[1];AM=(AU-this.D$[1])+Fn;
A1=AU+Fn;if(AM<this.Bm[1])AM=this.Bm[1];if(A1>this.Bl[1])A1=this.Bl[1];}if((A1-AU
)<=(AU-AM))AU=A1;else AU=AM;if(AU!==this.AO[1]){var Cx=AU-this.AO[1];if(Cx>0)this.
AZ=Math.sqrt((Cx*2)*5000)+20;if(Cx<0)this.AZ=-Math.sqrt((-Cx*2)*5000)-20;this.FR=(
400-(this.AZ*this.AZ))/(2*Cx);this.Ic=AU;}}else{var Ux=this.AZ*this.AZ;var Cx=Ux
/10000;var AU=this.AO[1];if(this.AZ>0)AU=AU+(Cx|0);if(this.AZ<0)AU=AU-(Cx|0);if(
AU>this.Bl[1])AU=this.Bl[1];else if(AU<this.Bm[1])AU=this.Bm[1];var Qb=AU;var A1=
this.Bm[1];var AM=this.Bl[1];if(AU<A1)AM=this.Bm[1];else if(AU>AM)A1=this.Bl[1];
else if(this.D$[1]<=1){A1=AU;AM=AU;}else{var Fn=(AM-AU)%this.D$[1];AM=(AU-this.D$[
1])+Fn;A1=AU+Fn;if(AM<this.Bm[1])AM=this.Bm[1];if(A1>this.Bl[1])A1=this.Bl[1];}if(
this.AZ>0){if(AM<=this.AO[1])AU=A1;else if((AU-AM)<(A1-AU))AU=AM;else AU=A1;}else
if(A1>=this.AO[1])AU=AM;else if((AU-AM)>(A1-AU))AU=A1;else AU=AM;if(AU!==this.AO[
1]){Cx=AU-this.AO[1];if(AU!==Qb){var G7=AU-Qb;if(G7>0)this.AZ=this.AZ+Math.sqrt((
G7*2)*5000);if(G7<0)this.AZ=this.AZ-Math.sqrt((-G7*2)*5000);}if(this.AZ>0)this.AZ=
this.AZ+20;if(this.AZ<0)this.AZ=this.AZ-20;this.FR=(400-(this.AZ*this.AZ))/(2*Cx
);this.Ic=AU;}else this.AZ=0;}if(!!W)this.HG=W.AA;if(!!BG)this.HG=BG.AA;this.Jd=
this.HG;this.HH=this.AO[0];this.HI=this.AO[1];this.Uy();return this;},EG:function(
At,U,CT,Ep,Ee,FP){var A;if(!!Ep&&(Ep!==this))return null;if(this.Ai>=33554432)return null;
if((this.Ai>=16777216)&&!(this.Ai&(4096<<U)))return null;var H=B.lb(At,this.M);if(
!((H[0]>=H[2])||(H[1]>=H[3]))){var C$=B.aaI(At);var BQ=AV;if(C$[0]<H[0])BQ=[H[0]-
C$[0],BQ[1]];if(C$[0]>=H[2])BQ=[(H[2]-C$[0])-1,BQ[1]];if(C$[1]<H[1])BQ=[BQ[0],H[
1]-C$[1]];if(C$[1]>=H[3])BQ=[BQ[0],(H[3]-C$[1])-1];return B._NewObject(E.K2,0).Initialize(
this,BQ);}return null;},Or:function(){if(!!this.timer){B.z9([this,this.DD],this.
timer,0);this.timer=null;}},Uy:function(){this.timer=B._GetAutoObject(B.acj.G9);
B.zV([this,this.DD],this.timer,0);},DD:function(X){var A;if(!this.timer)return;var
Je=(this.timer.AA-this.HG)*0.001;var Jf=(this.timer.AA-this.Jd)*0.001;var UB=Je*
Je;var UC=Jf*Jf;var G1=(this.FQ*Je)+this.AY;var G2=(this.FR*Jf)+this.AZ;var Az=[((((
this.FQ*0.5)*UB)+(this.AY*Je))+this.HH)|0,((((this.FR*0.5)*UC)+(this.AZ*Jf))+this.
HI)|0];if(this.Ev&&(Je>=0.5)){Az=[this.Ib,Az[1]];this.AY=0;this.FQ=0;this.HH=Az[
0];this.Ev=false;}else if(this.Ev){var C2=1-Math.pow(1-(Je/0.5),5);Az=[(this.HH+((
this.Ib-this.HH)*C2))|0,Az[1]];}if(this.Ew&&(Jf>=0.5)){Az=[Az[0],this.Ic];this.AZ=
0;this.FR=0;this.HI=Az[1];this.Ew=false;}else if(this.Ew){var C2=1-Math.pow(1-(Jf
/0.5),5);Az=[Az[0],(this.HI+((this.Ic-this.HI)*C2))|0];}if(((this.AY>0)&&(G1<0))||((
this.AY<0)&&(G1>0))){G1=0;Az=[this.AO[0],Az[1]];}if(((this.AZ>0)&&(G2<0))||((this.
AZ<0)&&(G2>0))){G2=0;Az=[Az[0],this.AO[1]];}if(!this.Ev&&(Az[0]<this.Bm[0])){this.
HH=Az[0];this.Ib=this.Bm[0];this.HG=this.timer.AA;this.Ev=true;}else if(!this.Ev&&(
Az[0]>this.Bl[0])){this.HH=Az[0];this.Ib=this.Bl[0];this.HG=this.timer.AA;this.Ev=
true;}if(!this.Ew&&(Az[1]<this.Bm[1])){this.HI=Az[1];this.Ic=this.Bm[1];this.Jd=
this.timer.AA;this.Ew=true;}else if(!this.Ew&&(Az[1]>this.Bl[1])){this.HI=Az[1];
this.Ic=this.Bl[1];this.Jd=this.timer.AA;this.Ew=true;}if(((!this.Ev&&!!this.AY)&&(
G1>-20))&&(G1<20)){Az=[this.Ib,Az[1]];this.AY=0;this.FQ=0;this.HH=Az[0];}if(((!this.
Ew&&!!this.AZ)&&(G2>-20))&&(G2<20)){Az=[Az[0],this.Ic];this.AZ=0;this.FR=0;this.
HI=Az[1];}if(!B.aaX(Az,this.AO)){this.Oy=B.abe(Az,this.AO);this.AO=Az;(A=this.Ja
)?A[1].call(A[0],this):null;}if(((!this.AY&&!this.AZ)&&!this.Ev)&&!this.Ew){this.
Or();this.IS=false;}},RH:function(C){if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];this.
D$=C;},_Init:function(aArg){E.Bv._Init.call(this,aArg);this.__proto__=E.D_;this.
F=0x10011B;},_Mark:function(D){var A;E.Bv._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.L3)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Ja)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::SlideTouchHandler"};E.DI={Aa:null,D5:null,CQ:null,IJ:null,Il:0,AA:0,OW:0,
BR:148,BN:0,A0:0,BI:true,Down:false,JS:false,Bw:function(aArg){var A;var Cr=(E.V.
isPrototypeOf(A=this.J)?A:null);if(!Cr)throw new Error(ND);this.Aa=Cr.LY;Cr.LY=this;
},BO:function(Ax){var A;if(!!Ax&&Ax.QR(this.BR)){this.Down=Ax.Down;this.BN=Ax.BN;
this.A0=Ax.A0;this.AA=Ax.AA;if(Ax.Down){this.OW=this.Il;this.JS=this.Il>0;if(this.
JS)(A=this.IJ)?A[1].call(A[0],this):null;else(A=this.CQ)?A[1].call(A[0],this):null;
this.Il=this.Il+1;return true;}if(!Ax.Down){this.JS=this.Il>1;this.OW=this.Il-1;
this.Il=0;(A=this.D5)?A[1].call(A[0],this):null;return true;}}return false;},_Init:
function(aArg){this.__proto__=E.DI;this.Bw(aArg);B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D5)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.CQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
IJ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(
A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};E.K2={Aw:null,Jk:0,AO:B.wf,Initialize:function(P,aOffset){this.Aw=P;this.AO=aOffset;
this.Jk=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=E.K2;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Aw)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};E.OJ={Aa:null,Cr:null,_Init:function(aArg){this.
__proto__=E.OJ;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Aa)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Cr)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(
A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::ModalContext"};E.
K7={Ij:null,Dd:B.wg,AG:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=E.
K7;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Ij)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J
)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};E.K8={KM:B.wf,KL:B.wf,KK:B.wf,KJ:B.wf,_Init:function(aArg
){E.K7._Init.call(this,aArg);this.__proto__=E.K8;},_className:"Core::LayoutQuadContext"
};E.Gq={resource:null,E0:function(){this.resource=null;},Bw:function(aArg){this.
resource=aArg;},_Init:function(aArg){this.__proto__=E.Gq;this.Bw(aArg);B.h7++;},
_Done:function(){this.E0();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:
0,_observers:null,_className:"Core::Resource"};E.Timer={FE:null,timer:null,AA:0,
Period:1000,Is:0,BI:false,E0:function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer(
);this.timer=null;},L6:function(aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<
0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.z8(this,
this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod);}this.timer=
tmp;},FD:function(C){if(C<0)C=0;if(C===this.Period)return;this.Period=C;if(this.
BI)this.L6(this.Is,C);},E5:function(C){if(C<0)C=0;if(C===this.Is)return;this.Is=
C;if(this.BI)this.L6(C,this.Period);},Ah:function(C){if(C===this.BI)return;this.
BI=C;if(C)this.L6(this.Is,this.Period);else this.L6(0,0);this.AA=this.Jz();},Jz:
function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},Trigger:function(){var A;this.AA=this.Jz();if(!this.Period)this.Ah(false);(A=this.
FE)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=E.Timer;B.h7++;
},_Done:function(){this.E0();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.FE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::Timer"};E.Lo={JG:null,A2:null,PY:function(X){var A;(A=this.JG)?A[1].call(
A[0],this):null;},JM:function(C){if(B.aaZ(this.A2,C))return;if(!!this.A2)B.z$([this
,this.PY],this.A2,0);this.A2=C;if(!!this.A2)B.zX([this,this.PY],this.A2,0);},_Init:
function(aArg){this.__proto__=E.Lo;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.JG)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);if((A=this.A2)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::PropertyObserver"};E.V0={V1:0x1,UN:0x2,Vf:0x4,VY:0x8,BI:0x10
,VP:0x20,Vg:0x40,Vr:0x80,Ve:0x100,Vl:0x200,U_:0x400,VC:0x800,Lx:0x1000,VZ:0x2000
,Vw:0x4000,Vx:0x8000,U3:0x10000,Vv:0x20000,VM:0x40000,U4:0x80000,VB:0x100000,U2:
0x200000};E.CG={VD:0x1,VE:0x2,UJ:0x4,UK:0x8,UL:0x10,UI:0x20};E.Vi={Vs:0,VV:1,US:
2,Vm:3,VG:4,VW:5,VX:6,UT:7,UU:8,Vo:9,Vn:10,VI:11,VH:12};E.KeyCode={NoKey:0,Ok:1,
Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};E.VF={V5:0x1,V2:0x2,V3:0x4,V4:0x8,Vq:
0x10,Vh:0x20};
E._Init=function(){E.JR.__proto__=E.Aw;E.Bv.__proto__=E.Aw;E.V.__proto__=E.Bv;E.Root.
__proto__=E.V;E.KeyEvent.__proto__=E.Event;E.Jj.__proto__=E.Event;E.Ga.__proto__=
E.Event;E.Jl.__proto__=E.Event;E.JQ.__proto__=E.Bv;E.A3.__proto__=E.V;E.HY.__proto__=
E.JR;E.D_.__proto__=E.Bv;E.K8.__proto__=E.K7;};E._ReInit=function(){};E.DN=function(
D){};return E;})();

/* Embedded Wizard */