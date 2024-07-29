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
var AN=[0,0];var AO=[0,0,0,0];var DB="The view does not belong to this group";var
El=[340,590];var D0="No view to restack";var Em="View is not in this group";var Fe=
"No view to remove";var ET="No view to add";var HH="View already in a group";var
HI="Recursive invalidate during active update cycle.";var HJ=[-8,-8,9,9];var K9=[
0,0,1,1];var K_="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
E.B7={AG:null,Aj:null,G:null,AT:null,F:0x103,Ek:0,CX:0x14,IW:function(P,IO){},CR:
function(C){if(this.Ek===C)return;this.Ek=C;if(!!this.G){var GL=this.AG;var Ak=0;
while(!!GL&&(C>GL.Ek)){GL=GL.AG;Ak=Ak+1;}GL=this.Aj;while(!!GL&&(C<GL.Ek)){GL=GL.
Aj;Ak=Ak-1;}if(!!Ak)this.G.Q1(this,Ak);}},Hy:function(C){var A;var Ak=C^this.CX;
if(!Ak)return;this.CX=C;if(!!this.AT&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.CV],this);this.G.V([0,0,(A=this.G.M)[2]-A[0],A[3]-A[1]
]);}if(!!this.AT&&((this.F&0x400)===0x400)){this.AT.He.F=this.AT.He.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],this);}},FD:function(){var X=this.G;while(
!!X){var C$=(E.Root.isPrototypeOf(X)?X:null);if(!!C$)return C$;X=X.G;}return null;
},Dg:function(AP,aClip,aOffset,Ar,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bn:function(Aq){return null;},Ez:function(Ag,R,CJ,En,D3,Ff){return null;},I8:
function(Ag){return Ag;},I9:function(P,Ck){return AN;},Iv:function(aOffset,IN){}
,GetExtent:function(){return AO;},A3:function(Dn,DL){var A;if(((this.F&0x200)===
0x200))Dn=Dn&~0x400;var Np=(this.F&~DL)|Dn;var Er=Np^this.F;this.F=Np;if(!!this.
G&&!!(Er&0x14)){var OE=((this.F&0x14)===0x14);if(OE&&!this.G.DI)this.G.Hw(this);
if(!OE&&(this.G.DI===this))this.G.Hw(this.G.NJ(this,0x14));}if(!!this.G&&!!(Er&0x403
))this.G.V(this.GetClipping());if(((!!this.AT&&!!this.G)&&((Np&0x400)===0x400))&&((
Er&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV
],this);}if(!!this.G&&((Er&0x400)===0x400)){this.AT=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],this);}if(((((Er&0x100000)===0x100000)&&((
DL&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.A3(0x0,0x10);if(((((Er&0x100000)===0x100000)&&((Dn&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.A3(0x10,0x0);if(((((Er&0x200000
)===0x200000)&&((DL&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.A3(0x10,0x0);if((((((Er&0x200000)===0x200000)&&((Dn&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.A3(0x0,0x10);},_Init:function(aArg){this.__proto__=E.B7;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AG)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Aj)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AT)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::View"};E.Is={A0:B.wf,AZ:B.
wf,IW:function(P,IO){var T=B._NewObject(E.KJ,0);this.AT=null;T.BW=this.getExtent(
);T.Ah=P;T.He=IO;T.GF=this.AZ;T.GG=this.A0;this.AT=T;},I9:function(P,Ck){var A;var
Al=this.CX;var T=(E.KJ.isPrototypeOf(A=this.AT)?A:null);var x1=T.BW[0];var y1=T.
BW[1];var x2=T.BW[2];var y2=T.BW[3];var BM=[P[2]-P[0],P[3]-P[1]];var Ao=x2-x1;var
Ai=y2-y1;var tmp;if(!Ck){var CG=[(A=T.Ah)[2]-A[0],A[3]-A[1]];x1=x1-T.Ah[0];y1=y1-
T.Ah[1];if(CG[0]!==BM[0]){var A5=((Al&0x4)===0x4);var A6=((Al&0x8)===0x8);var C9=((
Al&0x1)===0x1);if(!A5&&(C9||!A6))x1=((x1*BM[0])/CG[0])|0;if(!A6&&(C9||!A5)){x2=x2-
T.Ah[0];x2=((x2*BM[0])/CG[0])|0;x2=x2-BM[0];}else x2=x2-T.Ah[2];x1=x1+P[0];x2=x2+
P[2];if(!C9){if(A5&&!A6)x2=x1+Ao;else if(!A5&&A6)x1=x2-Ao;else{x1=x1+((((x2-x1)-
Ao)/2)|0);x2=x1+Ao;}}}else{x2=x2-T.Ah[2];x1=x1+P[0];x2=x2+P[2];}if(CG[1]!==BM[1]
){var A7=((Al&0x10)===0x10);var A4=((Al&0x20)===0x20);var C_=((Al&0x2)===0x2);if(
!A7&&(C_||!A4))y1=((y1*BM[1])/CG[1])|0;if(!A4&&(C_||!A7)){y2=y2-T.Ah[1];y2=((y2*
BM[1])/CG[1])|0;y2=y2-BM[1];}else y2=y2-T.Ah[3];y1=y1+P[1];y2=y2+P[3];if(!C_){if(
A7&&!A4)y2=y1+Ai;else if(!A7&&A4)y1=y2-Ai;else{y1=y1+((((y2-y1)-Ai)/2)|0);y2=y1+
Ai;}}}else{y2=y2-T.Ah[3];y1=y1+P[1];y2=y2+P[3];}}else{switch(Ck){case 3:{x1=P[0];
x2=x1+Ao;}break;case 4:{x2=P[2];x1=x2-Ao;}break;case 1:{y1=P[1];y2=y1+Ai;}break;
case 2:{y2=P[3];y1=y2-Ai;}break;default:;}if((Ck===3)||(Ck===4)){var A7=((Al&0x10
)===0x10);var A4=((Al&0x20)===0x20);var C_=((Al&0x2)===0x2);if(C_){y1=P[1];y2=P[
3];}else if(A7&&!A4){y1=P[1];y2=y1+Ai;}else if(A4&&!A7){y2=P[3];y1=y2-Ai;}else{y1=
P[1]+((((P[3]-P[1])-Ai)/2)|0);y2=y1+Ai;}}if((Ck===1)||(Ck===2)){var A5=((Al&0x4)===
0x4);var A6=((Al&0x8)===0x8);var C9=((Al&0x1)===0x1);if(C9){x1=P[0];x2=P[2];}else
if(A5&&!A6){x1=P[0];x2=x1+Ao;}else if(A6&&!A5){x2=P[2];x1=x2-Ao;}else{x1=P[0]+((((
P[2]-P[0])-Ao)/2)|0);x2=x1+Ao;}}}T.isEmpty=(x1>=x2)||(y1>=y2);Ao=x2-x1;Ai=y2-y1;
if(T.GG[0]<T.GF[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(T.GG[1]<T.GF[1]){tmp=y1;y1=y2-1;
y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){
this.AZ=[x1,y1];this.A0=[x2,y2];}else{this.Ei([x1,y1]);this.DX([x2,y2]);this.AT=
T;}return[Ao,Ai];},Iv:function(aOffset,IN){if(IN){this.AZ=B.abf(this.AZ,aOffset);
this.A0=B.abf(this.A0,aOffset);}else{this.Ei(B.abf(this.AZ,aOffset));this.DX(B.abf(
this.A0,aOffset));}},GetExtent:function(){if(!!this.AT&&this.AT.isEmpty)return AO;
return this.getExtent();},getExtent:function(){var x1=this.AZ[0];var y1=this.AZ[
1];var x2=this.A0[0];var y2=this.A0[1];var Ao=x2-x1;var Ai=y2-y1;var tmp;if(Ao<0
)Ao=-Ao;if(Ai<0)Ai=-Ai;if(Ao>=Ai){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(Ai>=Ao){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DX:function(C){var A;if(B.aaX(C,this.
A0))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());this.AT=
null;this.A0=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if((
!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],this);}},Ei:function(C){var
A;if(B.aaX(C,this.AZ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping(
));this.AT=null;this.AZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],this);}},_Init:function(
aArg){E.B7._Init.call(this,aArg);this.__proto__=E.Is;},_className:"Core::LineView"
};E.Ej={B3:B.wf,Cj:B.wf,A0:B.wf,AZ:B.wf,IW:function(P,IO){var T=B._NewObject(E.KK
,0);this.AT=null;T.BW=this.GetExtent();T.Ah=P;T.He=IO;T.GF=this.AZ;T.GG=this.A0;
T.Kk=this.Cj;T.Kl=this.B3;this.AT=T;},I9:function(P,Ck){var A;var Al=this.CX;var
T=(E.KK.isPrototypeOf(A=this.AT)?A:null);var x1=T.BW[0];var y1=T.BW[1];var x2=T.
BW[2];var y2=T.BW[3];var BM=[P[2]-P[0],P[3]-P[1]];var Ao=x2-x1;var Ai=y2-y1;if(!
Ck){var CG=[(A=T.Ah)[2]-A[0],A[3]-A[1]];x1=x1-T.Ah[0];y1=y1-T.Ah[1];if(CG[0]!==BM[
0]){var A5=((Al&0x4)===0x4);var A6=((Al&0x8)===0x8);var C9=((Al&0x1)===0x1);if(!
A5&&(C9||!A6))x1=((x1*BM[0])/CG[0])|0;if(!A6&&(C9||!A5)){x2=x2-T.Ah[0];x2=((x2*BM[
0])/CG[0])|0;x2=x2-BM[0];}else x2=x2-T.Ah[2];x1=x1+P[0];x2=x2+P[2];if(!C9){if(A5&&
!A6)x2=x1+Ao;else if(!A5&&A6)x1=x2-Ao;else{x1=x1+((((x2-x1)-Ao)/2)|0);x2=x1+Ao;}
}}else{x2=x2-T.Ah[2];x1=x1+P[0];x2=x2+P[2];}if(CG[1]!==BM[1]){var A7=((Al&0x10)===
0x10);var A4=((Al&0x20)===0x20);var C_=((Al&0x2)===0x2);if(!A7&&(C_||!A4))y1=((y1
*BM[1])/CG[1])|0;if(!A4&&(C_||!A7)){y2=y2-T.Ah[1];y2=((y2*BM[1])/CG[1])|0;y2=y2-
BM[1];}else y2=y2-T.Ah[3];y1=y1+P[1];y2=y2+P[3];if(!C_){if(A7&&!A4)y2=y1+Ai;else
if(!A7&&A4)y1=y2-Ai;else{y1=y1+((((y2-y1)-Ai)/2)|0);y2=y1+Ai;}}}else{y2=y2-T.Ah[
3];y1=y1+P[1];y2=y2+P[3];}}else{switch(Ck){case 3:{x1=P[0];x2=x1+Ao;}break;case 4:{
x2=P[2];x1=x2-Ao;}break;case 1:{y1=P[1];y2=y1+Ai;}break;case 2:{y2=P[3];y1=y2-Ai;
}break;default:;}if((Ck===3)||(Ck===4)){var A7=((Al&0x10)===0x10);var A4=((Al&0x20
)===0x20);var C_=((Al&0x2)===0x2);if(C_){y1=P[1];y2=P[3];}else if(A7&&!A4){y1=P[
1];y2=y1+Ai;}else if(A4&&!A7){y2=P[3];y1=y2-Ai;}else{y1=P[1]+((((P[3]-P[1])-Ai)/
2)|0);y2=y1+Ai;}}if((Ck===1)||(Ck===2)){var A5=((Al&0x4)===0x4);var A6=((Al&0x8)===
0x8);var C9=((Al&0x1)===0x1);if(C9){x1=P[0];x2=P[2];}else if(A5&&!A6){x1=P[0];x2=
x1+Ao;}else if(A6&&!A5){x2=P[2];x1=x2-Ao;}else{x1=P[0]+((((P[2]-P[0])-Ao)/2)|0);
x2=x1+Ao;}}}T.isEmpty=(x1>=x2)||(y1>=y2);Ao=(x2-x1)-1;Ai=(y2-y1)-1;var Ge=T.BW[0
];var Gf=T.BW[1];var Fl=(T.BW[2]-Ge)-1;var Fk=(T.BW[3]-Gf)-1;if(!Fl)Fl=1;if(!Fk)
Fk=1;if(((this.F&0x100)===0x100)){this.AZ=[x1+((((T.GF[0]-Ge)*Ao)/Fl)|0),y1+((((
T.GF[1]-Gf)*Ai)/Fk)|0)];this.A0=[x1+((((T.GG[0]-Ge)*Ao)/Fl)|0),y1+((((T.GG[1]-Gf
)*Ai)/Fk)|0)];this.Cj=[x1+((((T.Kk[0]-Ge)*Ao)/Fl)|0),y1+((((T.Kk[1]-Gf)*Ai)/Fk)|
0)];this.B3=[x1+((((T.Kl[0]-Ge)*Ao)/Fl)|0),y1+((((T.Kl[1]-Gf)*Ai)/Fk)|0)];}else{
this.Ei([x1+((((T.GF[0]-Ge)*Ao)/Fl)|0),y1+((((T.GF[1]-Gf)*Ai)/Fk)|0)]);this.DX([
x1+((((T.GG[0]-Ge)*Ao)/Fl)|0),y1+((((T.GG[1]-Gf)*Ai)/Fk)|0)]);this.FK([x1+((((T.
Kk[0]-Ge)*Ao)/Fl)|0),y1+((((T.Kk[1]-Gf)*Ai)/Fk)|0)]);this.GW([x1+((((T.Kl[0]-Ge)
*Ao)/Fl)|0),y1+((((T.Kl[1]-Gf)*Ai)/Fk)|0)]);this.AT=T;}return[Ao+1,Ai+1];},Iv:function(
aOffset,IN){if(IN){this.AZ=B.abf(this.AZ,aOffset);this.A0=B.abf(this.A0,aOffset);
this.Cj=B.abf(this.Cj,aOffset);this.B3=B.abf(this.B3,aOffset);}else{this.Ei(B.abf(
this.AZ,aOffset));this.DX(B.abf(this.A0,aOffset));this.FK(B.abf(this.Cj,aOffset)
);this.GW(B.abf(this.B3,aOffset));}},GetExtent:function(){if(!!this.AT&&this.AT.
isEmpty)return AO;var x1=this.AZ[0];var y1=this.AZ[1];var x2=this.Cj[0];var y2=this.
Cj[1];if((((this.B3[0]!==x1)||(this.A0[1]!==y1))||(this.A0[0]!==x2))||(this.B3[1
]!==y2)){if(this.A0[0]<x1)x1=this.A0[0];if(this.Cj[0]<x1)x1=this.Cj[0];if(this.B3[
0]<x1)x1=this.B3[0];if(this.A0[1]<y1)y1=this.A0[1];if(this.Cj[1]<y1)y1=this.Cj[1
];if(this.B3[1]<y1)y1=this.B3[1];if(this.AZ[0]>x2)x2=this.AZ[0];if(this.A0[0]>x2
)x2=this.A0[0];if(this.B3[0]>x2)x2=this.B3[0];if(this.AZ[1]>y2)y2=this.AZ[1];if(
this.A0[1]>y2)y2=this.A0[1];if(this.B3[1]>y2)y2=this.B3[1];}else{var tmp;if(x2<x1
){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];}
,GW:function(C){var A;if(B.aaX(C,this.B3))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.V(this.GetClipping());this.AT=null;this.B3=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.V(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CV],this);}},FK:function(C){var A;if(B.aaX(C,this.Cj))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.V(this.GetClipping());this.AT=null;this.Cj=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CV],this);}},DX:function(C){var A;if(B.aaX(C,this.A0))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());this.AT=null;
this.A0=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],this);}},Ei:function(C){var A;if(B.
aaX(C,this.AZ))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping(
));this.AT=null;this.AZ=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.V(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],this);}},Ml:function(
Cz){var Bc=B.abi(4,B.wf,null);var I=0;var Bi=3;var Nh=false;var Ni=false;Bc.Set(
0,this.AZ);Bc.Set(1,this.A0);Bc.Set(2,this.Cj);Bc.Set(3,this.B3);while(I<4){var Pu=
Bc.Get(I)[0];var LR=Bc.Get(I)[1];var TA=Bc.Get(Bi)[0];var Nz=Bc.Get(Bi)[1];if(((
LR>Cz[1])!==(Nz>Cz[1]))||((LR<Cz[1])!==(Nz<Cz[1]))){var Cu=((((TA-Pu)*(Cz[1]-LR)
)/(Nz-LR))|0)+Pu;if(Cz[0]>Cu)Nh=!Nh;if(Cz[0]<Cu)Ni=!Ni;}Bi=I;I=I+1;}return Nh||Ni;
},PT:function(){return((((this.AZ[0]===this.B3[0])&&(this.A0[0]===this.Cj[0]))&&(
this.AZ[1]===this.A0[1]))&&(this.Cj[1]===this.B3[1]))||((((this.AZ[0]===this.A0[
0])&&(this.Cj[0]===this.B3[0]))&&(this.AZ[1]===this.B3[1]))&&(this.A0[1]===this.
Cj[1]));},_Init:function(aArg){E.B7._Init.call(this,aArg);this.__proto__=E.Ej;},
_className:"Core::QuadView"};E.Bh={M:B.wg,IW:function(P,IO){var T=B._NewObject(E.
Ir,0);T.BW=this.M;T.Ah=P;T.He=IO;this.AT=T;},I9:function(P,Ck){var A;var Al=this.
CX;var T=this.AT;var x1=T.BW[0];var y1=T.BW[1];var x2=T.BW[2];var y2=T.BW[3];var
BM=[P[2]-P[0],P[3]-P[1]];var Ao=x2-x1;var Ai=y2-y1;if(!Ck){var CG=[(A=T.Ah)[2]-A[
0],A[3]-A[1]];x1=x1-T.Ah[0];y1=y1-T.Ah[1];if(CG[0]!==BM[0]){var A5=((Al&0x4)===0x4
);var A6=((Al&0x8)===0x8);var C9=((Al&0x1)===0x1);if(!A5&&(C9||!A6))x1=((x1*BM[0
])/CG[0])|0;if(!A6&&(C9||!A5)){x2=x2-T.Ah[0];x2=((x2*BM[0])/CG[0])|0;x2=x2-BM[0];
}else x2=x2-T.Ah[2];x1=x1+P[0];x2=x2+P[2];if(!C9){if(A5&&!A6)x2=x1+Ao;else if(!A5&&
A6)x1=x2-Ao;else{x1=x1+((((x2-x1)-Ao)/2)|0);x2=x1+Ao;}}}else{x2=x2-T.Ah[2];x1=x1+
P[0];x2=x2+P[2];}if(CG[1]!==BM[1]){var A7=((Al&0x10)===0x10);var A4=((Al&0x20)===
0x20);var C_=((Al&0x2)===0x2);if(!A7&&(C_||!A4))y1=((y1*BM[1])/CG[1])|0;if(!A4&&(
C_||!A7)){y2=y2-T.Ah[1];y2=((y2*BM[1])/CG[1])|0;y2=y2-BM[1];}else y2=y2-T.Ah[3];
y1=y1+P[1];y2=y2+P[3];if(!C_){if(A7&&!A4)y2=y1+Ai;else if(!A7&&A4)y1=y2-Ai;else{
y1=y1+((((y2-y1)-Ai)/2)|0);y2=y1+Ai;}}}else{y2=y2-T.Ah[3];y1=y1+P[1];y2=y2+P[3];
}}else{switch(Ck){case 3:{x1=P[0];x2=x1+Ao;}break;case 4:{x2=P[2];x1=x2-Ao;}break;
case 1:{y1=P[1];y2=y1+Ai;}break;case 2:{y2=P[3];y1=y2-Ai;}break;default:;}if((Ck===
3)||(Ck===4)){var A7=((Al&0x10)===0x10);var A4=((Al&0x20)===0x20);var C_=((Al&0x2
)===0x2);if(C_){y1=P[1];y2=P[3];}else if(A7&&!A4){y1=P[1];y2=y1+Ai;}else if(A4&&
!A7){y2=P[3];y1=y2-Ai;}else{y1=P[1]+((((P[3]-P[1])-Ai)/2)|0);y2=y1+Ai;}}if((Ck===
1)||(Ck===2)){var A5=((Al&0x4)===0x4);var A6=((Al&0x8)===0x8);var C9=((Al&0x1)===
0x1);if(C9){x1=P[0];x2=P[2];}else if(A5&&!A6){x1=P[0];x2=x1+Ao;}else if(A6&&!A5){
x2=P[2];x1=x2-Ao;}else{x1=P[0]+((((P[2]-P[0])-Ao)/2)|0);x2=x1+Ao;}}}T.isEmpty=(x1>=
x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.O([x1,y1
,x2,y2]);this.AT=T;}return[x2-x1,y2-y1];},Iv:function(aOffset,IN){if(IN)this.M=B.
abh(this.M,aOffset);else this.O(B.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},O:function(C){var A;if(B.aaY(C,this.M))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.V(this.GetClipping());this.AT=null;this.M=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.V(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CV],this);}},_Init:function(aArg){E.B7._Init.call(this,aArg);this.__proto__=
E.Bh;},_className:"Core::RectView"};E.W={BX:null,CD:null,Lw:null,A1:null,DI:null
,Dy:255,J3:0,J6:0,J5:0,J4:0,Bt:function(aArg){this.Ci();},Dg:function(AP,aClip,aOffset
,Ar,aBlend){var A;Ar=((Ar+1)*this.Dy)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);if(
!this.A1||(AP.Fn===this))this.OA(AP,aClip,B.abf(aOffset,this.M.slice(0,2)),Ar,aBlend
);else{var As=255|(255<<8)|(255<<16)|((Ar&0xFF)<<24);this.A1.Update();AP.NF(aClip
,this.A1,0,B.abh(this.M,aOffset),AN,As,As,As,As,aBlend);}},GetClipping:function(
){var A;var H=this.M;if(!!this.A1)return H;H=[].concat(H[0]-this.J4,H.slice(1,4)
);H=B.abP(H,H[1]-this.J6);H=B.abN(H,H[2]+this.J5);H=[].concat(H.slice(0,3),H[3]+
this.J3);if(((this.F&0x80000)===0x80000)){var Id=AO;var J;for(J=this.BX;!!J;J=J.
AG)if(((J.F&0x1)===0x1))Id=B.wC(Id,J.GetClipping());H=B.wC(H,B.abh(Id,this.M.slice(
0,2)));}return H;},Ez:function(Ag,R,CJ,En,D3,Ff){var A;var J=this.CD;var HY=null;
var L=AO;var Dq=null;if(((A=B.lb(Ag,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ag=B.abg(Ag,this.M.slice(0,2));if(!!D3){J=D3;while(!!J&&(J.G!==this))J=J.G;}while(
!!J){if(((J.F&0x400)===0x400)&&!Dq){Dq=J.Aj;while(!!Dq&&!((Dq.F&0x200)===0x200))
Dq=Dq.Aj;if(!!Dq)L=B.lb(Ag,Dq.GetExtent());else L=AO;}if(Dq===J){Dq=null;L=AO;}if((
!!En&&!!(E.W.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var BW=J.GetExtent();var Lq=En;var HU=null;if(Lq===J)Lq=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(BW,L))[0]>=A[2])||(A[1]>=A[3])))HU=
J.Ez(L,R,CJ,Lq,D3,Ff);}else if(!(((A=B.lb(BW,Ag))[0]>=A[2])||(A[1]>=A[3]))||(En===
J))HU=J.Ez(Ag,R,CJ,Lq,D3,Ff);J=J.Aj;if(!!HU){if(!HY||((HU.Ja<HY.Ja)&&(HU.Ja>=0))
)HY=HU;if(!HU.Ja)J=null;}}else J=J.Aj;D3=null;}return HY;},I8:function(Ag){var A;
var Bw;var J=this.BX;var HS=AO;var Ki=true;var result=(Ag=Bw=B.abg(Ag,this.M.slice(
0,2)),Bw);while(!!J){if(((J.F&0x200)===0x200)){var IZ=(E.Jy.isPrototypeOf(J)?J:null
);HS=B.lb(Ag,IZ.M);Ki=((IZ.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(Ki){var L=B.lb(J.GetClipping(),HS);if(!((L[0]>=L[2])||(L[1]>=L[3])))result=
B.wC(result,J.I8(L));}}else{var L=B.lb(J.GetClipping(),Ag);if(!((L[0]>=L[2])||(L[
1]>=L[3])))result=B.wC(result,J.I8(L));}}J=J.AG;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},A3:function(Dn,DL){var A;var Lz=this.F;if(((!!this.G&&!!!this.
A1)&&((this.F&0x80001)===0x80001))&&((DL&0x80000)===0x80000))this.G.V(this.GetClipping(
));E.Bh.A3.call(this,Dn,DL);if((((!!this.G&&!!!this.A1)&&((this.F&0x1)===0x1))&&((
Dn&0x80000)===0x80000))&&!((Lz&0x80000)===0x80000))this.G.V(this.GetClipping());
var Er=this.F^Lz;if(!!this.DI&&((Er&0x40)===0x40)){if(((this.F&0x40)===0x40))this.
DI.A3(0x40,0x0);else this.DI.A3(0x0,0x40);}if(((Er&0x10)===0x10)){var J;for(J=this.
BX;!!J;J=J.AG)if((((J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000
)===0x10000)||(null===J)))J.A3(Dn&0x10,DL&0x10);}if(!!Er){this.F=this.F|0x8000;B.
pe([this,this.LQ],this);}},O:function(C){var A;if(B.aaY(C,this.M))return;var Hd=[(
A=this.M)[2]-A[0],A[3]-A[1]];var Ly=[C[2]-C[0],C[3]-C[1]];var Ib=!B.aaX(Hd,Ly);if(
Ib&&!!this.A1){this.A1.Js(Ly);B.we(this,0);B.we(this.A1,0);}E.Bh.O.call(this,C);
if((Ib&&(Hd[0]>0))&&(Hd[1]>0)){var Ah=[].concat(AN,Hd);var J=this.BX;while(!!J){
if((!J.AT&&(J.CX!==0x14))&&!((J.F&0x400)===0x400))J.IW(Ah,null);J=J.AG;}}if(Ib){
this.F=this.F|0x5000;B.pe([this,this.LQ],this);}},Pj:function(Aq){var OT=(E.KeyEvent.
isPrototypeOf(Aq)?Aq:null);var Es=this.Lw;if(!OT)return null;while(!!Es&&(!Es.B1||
!Es.Bn(OT)))Es=Es.AG;return Es;},Tw:function(Ae){if(!!this.A1){this.A1.Fn=this;var
L=B.abg(this.I8(B.abh(this.A1.DV,this.M.slice(0,2))),this.M.slice(0,2));this.A1.
KF(L,L,0x00000000,0x00000000,0x00000000,0x00000000,false);this.OA(this.A1,L,AN,255
,true);this.A1.Fn=null;}},OA:function(AP,aClip,aOffset,Ar,aBlend){var A;var J=this.
BX;var HS=AO;var Ki=true;this.PE(AP,aClip,aOffset,Ar,aBlend);while(!!J){if(((J.F&
0x200)===0x200)){var IZ=(E.Jy.isPrototypeOf(J)?J:null);Ki=((IZ.F&0x1)===0x1);HS=
aClip;if(!((IZ.F&0x80000)===0x80000))HS=B.lb(HS,B.abh(IZ.M,aOffset));}if(((J.F&0x1
)===0x1)){if(((J.F&0x400)===0x400)){if(Ki){var L=B.lb(B.abh(J.GetClipping(),aOffset
),HS);if(!((L[0]>=L[2])||(L[1]>=L[3])))J.Dg(AP,L,aOffset,Ar,aBlend);}}else{var L=
B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((L[0]>=L[2])||(L[1]>=L[3])))J.Dg(
AP,L,aOffset,Ar,aBlend);}}J=J.AG;}this.PH(AP,aClip,aOffset,Ar,aBlend);},Tg:function(
){var A;var Nf=((this.F&0x1000)===0x1000);var Gi=[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]];var Fm=false;var IU=AO;var Nd=AO;var J=this.CD;var Dq=null;while(!!J){if(((J.
F&0x800)===0x800)){Fm=true;J.F=J.F&~0x800;}if(Fm&&((J.F&0x200)===0x200))Fm=false;
J=J.Aj;}Fm=false;J=this.BX;if(Nf){this.F=this.F&~0x1000;Nf=!((Gi[0]>=Gi[2])||(Gi[
1]>=Gi[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400)){if(!!J.AT&&(
J.AT.He!==Dq))J.AT=null;if((!J.AT&&Fm)&&(J.CX!==0x14))J.IW(Nd,Dq);}if(!!J.AT){if(
Nf&&!((J.F&0x400)===0x400))J.I9(Gi,0);if(Fm&&((J.F&0x400)===0x400))J.I9(Nd,0);}if(((
J.F&0x200)===0x200)){Fm=((J.F&0x1000)===0x1000);Dq=(E.Jy.isPrototypeOf(J)?J:null
);if(Fm){J.F=J.F&~0x1000;IU=Dq.M;Nd=IU;Fm=!((IU[0]>=IU[2])||(IU[1]>=IU[3]));}if(
Fm)this.V(Dq.M);}J=J.AG;}this.F=this.F&~0x2000;this.Oa([Gi[2]-Gi[0],Gi[3]-Gi[1]]
);},CV:function(Ae){B.pe([this,this.LQ],this);},LQ:function(Ae){var A;var Tx=((this.
F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.Tg(
);}if(((this.F&0x8000)===0x8000)||Tx){this.F=this.F&~0x8000;this.HD(this.F);}},Hw:
function(C){var A;if(!!C&&(C.G!==this))throw new Error(DB);if(!!C&&!((C.F&0x14)===
0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.DI)return;if(!
!this.DI)this.DI.A3(0x0,0x60);this.DI=C;if(!!C){if(((this.F&0x40)===0x40))C.A3(0x60
,0x0);else C.A3(0x20,0x0);}},KT:function(C){var A;if(!!this.A1===C)return;if(!C){
this.A1.KQ=null;this.A1.Js(AN);this.A1=null;}if(!!this.G&&((this.F&0x1)===0x1))this.
G.V(this.GetClipping());if(C){this.A1=B._NewObject(B.Graphics.Canvas,0);this.A1.
Js([(A=this.M)[2]-A[0],A[3]-A[1]]);this.A1.KQ=[this,this.Tw];}B.we(this,0);},P9:
function(){var A;return((this.F&0x100000)===0x100000);},Bb:function(C){if(C)this.
A3(0x100000,0x0);else this.A3(0x0,0x100000);},Hz:function(C){var A;if(C>255)C=255;
if(C<0)C=0;if(C===this.Dy)return;this.Dy=C;if(!!this.G&&((this.F&0x1)===0x1))this.
G.V(this.GetClipping());},SD:function(Tz){this.Hz(Tz);},AI:function(C){if(C)this.
A3(0x1,0x0);else this.A3(0x0,0x1);},ExtendClipping:function(HM,HN,HO,HL){var A;var
JV=this.M;var Do=JV;if(HM<0)HM=0;if(HM>255)HM=255;if(HN<0)HN=0;if(HN>255)HN=255;
if(HO<0)HO=0;if(HO>255)HO=255;if(HL<0)HL=0;if(HL>255)HL=255;Do=[].concat(Do[0]-(
Math.max(HM,this.J4)&0xFF),Do.slice(1,4));Do=B.abN(Do,Do[2]+(Math.max(HN,this.J5
)&0xFF));Do=B.abP(Do,Do[1]-(Math.max(HO,this.J6)&0xFF));Do=[].concat(Do.slice(0,
3),Do[3]+(Math.max(HL,this.J3)&0xFF));if(HM!==this.J4){if(((!!this.G&&((this.F&0x1
)===0x1))&&!!!this.A1)&&!((this.F&0x80000)===0x80000)){var H=Do;H=B.abN(H,JV[0]);
this.G.V(H);}this.J4=HM&0xFF;}if(HN!==this.J5){if(((!!this.G&&((this.F&0x1)===0x1
))&&!!!this.A1)&&!((this.F&0x80000)===0x80000)){var H=Do;H=[].concat(JV[2],H.slice(
1,4));this.G.V(H);}this.J5=HN&0xFF;}if(HO!==this.J6){if(((!!this.G&&((this.F&0x1
)===0x1))&&!!!this.A1)&&!((this.F&0x80000)===0x80000)){var H=Do;H=[].concat(H.slice(
0,3),JV[1]);this.G.V(H);}this.J6=HO&0xFF;}if(HL!==this.J3){if(((!!this.G&&((this.
F&0x1)===0x1))&&!!!this.A1)&&!((this.F&0x80000)===0x80000)){var H=Do;H=B.abP(H,JV[
3]);this.G.V(H);}this.J3=HL&0xFF;}},PH:function(AP,aClip,aOffset,Ar,aBlend){},PE:
function(AP,aClip,aOffset,Ar,aBlend){},GetMaximalSize:function(){return El;},GetMinimalSize:
function(){return AN;},Mx:function(){var A;if(((this.F&0x40)===0x40))return;if(((
this.F&0x80)===0x80))return;if(((this.F&0x10000)===0x10000)){if(!!this.G)this.G.
Mx();return;}if(!!this.G&&(this.G.DI!==this))this.G.Hw(this);if(!!this.G)this.G.
Mx();},PU:function(D4){var A;return(A=D4)&&((this.F&A)===A);},P1:function(Cz){var
tmp=this;while(!!tmp){Cz=B.abe(Cz,tmp.M.slice(0,2));tmp=tmp.G;}return Cz;},DispatchEvent:
function(Aq){var A;var J=this.DI;var X=(E.W.isPrototypeOf(J)?J:null);var Bz=null;
if(!!J&&((((J.F&0x10000)===0x10000)||((J.F&0x40000)===0x40000))||((J.F&0x20000)===
0x20000))){J=null;X=null;}if(!!X)Bz=X.DispatchEvent(Aq);else if(!!J)Bz=J.Bn(Aq);
if(!Bz)Bz=this.Bn(Aq);if(!Bz)Bz=this.Pj(Aq);return Bz;},BroadcastEventAtPosition:
function(Aq,Os,aFilter){var A;var J=this.CD;var Bz=null;while(!!J&&!Bz){if((!aFilter||((
A=aFilter)&&((J.F&A)===A)))&&B.wa(J.GetExtent(),Os)){var X=(E.W.isPrototypeOf(J)?
J:null);if(!!X)Bz=X.BroadcastEventAtPosition(Aq,B.abe(Os,X.M.slice(0,2)),aFilter
);else Bz=J.Bn(Aq);}J=J.Aj;}if(!Bz)Bz=this.Bn(Aq);return Bz;},BroadcastEvent:function(
Aq,aFilter){var A;var J=this.CD;var Bz=null;while(!!J&&!Bz){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var X=(E.W.isPrototypeOf(J)?J:null);if(!!X)Bz=X.BroadcastEvent(
Aq,aFilter);else Bz=J.Bn(Aq);}J=J.Aj;}if(!Bz)Bz=this.Bn(Aq);if(!Bz)Bz=this.Pj(Aq
);return Bz;},Oa:function(aSize){},HD:function(D4){},Ci:function(){this.F=this.F|
0x8000;B.pe([this,this.LQ],this);},V:function(Ag){var A;var X=this;while(!!X&&!((
Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))){var IP=X.A1;if(!X.G&&(X!==this)){X.V(Ag);return;
}if(!!IP){var S3=IP.DV;IP.DV=B.wC(IP.DV,Ag);if(!B.aaY(S3,IP.DV)){B.we(X,0);B.we(
IP,0);}}if(!((X.F&0x1)===0x1))return;var H=X.M;Ag=B.abh(Ag,H.slice(0,2));if(!!X.
A1||!((X.F&0x80000)===0x80000)){if(!!!X.A1){H=[].concat(H[0]-X.J4,H.slice(1,4));
H=B.abP(H,H[1]-X.J6);H=B.abN(H,H[2]+X.J5);H=[].concat(H.slice(0,3),H[3]+X.J3);}Ag=
B.lb(Ag,H);}X=X.G;}},NJ:function(N,aFilter){var A;if(!N||(N.G!==this))return null;
var Hc=N.AG;var Hg=N.Aj;var Kd=0x10000;if(((aFilter&0x10000)===0x10000))Kd=0x0;while(
!!Hc||!!Hg){if((!!Hc&&(!aFilter||((A=aFilter)&&((Hc.F&A)===A))))&&(!Kd||!((A=Kd)&&((
Hc.F&A)===A))))return Hc;if((!!Hg&&(!aFilter||((A=aFilter)&&((Hg.F&A)===A))))&&(
!Kd||!((A=Kd)&&((Hg.F&A)===A))))return Hg;if(!!Hc)Hc=Hc.AG;if(!!Hg)Hg=Hg.Aj;}return null;
},Q1:function(N,D2){var A;if(!N)throw new Error(D0);if(N.G!==this)throw new Error(
Em);var Gb=N;var BH=N;var If=N.Ek;while(((D2>0)&&!!Gb.AG)&&(Gb.AG.Ek<=If)){Gb=Gb.
AG;D2=D2-1;}while(((D2<0)&&!!BH.Aj)&&(BH.Aj.Ek>=If)){BH=BH.Aj;D2=D2+1;}if((Gb===
N)&&(BH===N))return;if(((N.F&0x401)===0x401)){if(!!N.Aj&&!!N.AT)N.Aj.F=N.Aj.F|0x800;
N.F=N.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CV],this);}if(((N.F&0x200)===
0x200)){if(!!N.Aj)N.Aj.F=N.Aj.F|0x800;N.F=N.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.CV],this);}if(!!N.Aj)N.Aj.AG=N.AG;if(!!N.AG)N.AG.Aj=N.Aj;if(this.BX===N)this.
BX=N.AG;if(this.CD===N)this.CD=N.Aj;if(Gb!==N){N.AG=Gb.AG;N.Aj=Gb;Gb.AG=N;if(!!N.
AG)N.AG.Aj=N;}if(BH!==N){N.AG=BH;N.Aj=BH.Aj;BH.Aj=N;if(!!N.Aj)N.Aj.AG=N;}if(!N.AG
)this.CD=N;if(!N.Aj)this.BX=N;if(((N.F&0x1)===0x1))this.V(N.GetClipping());},EQ:
function(N){var A;if(!N)throw new Error(Fe);if(N.G!==this)throw new Error(Em);if((((
N.F&0x401)===0x401)&&!!N.Aj)&&!!N.AT){N.Aj.F=N.Aj.F|0x800;this.F=this.F|0x4000;B.
pe([this,this.CV],this);}if(((N.F&0x200)===0x200)){if(!!N.Aj)N.Aj.F=N.Aj.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CV],this);}N.AT=null;if(this.DI===N)this.Hw(
this.NJ(N,0x14));if(!!N.Aj)N.Aj.AG=N.AG;if(!!N.AG)N.AG.Aj=N.Aj;if(this.BX===N)this.
BX=N.AG;if(this.CD===N)this.CD=N.Aj;N.G=null;N.AG=null;N.Aj=null;if((!((N.F&0x10
)===0x10)&&((N.F&0x100000)===0x100000))&&!((this.F&0x80)===0x80))N.A3(0x10,0x0);
if(((N.F&0x1)===0x1))this.V(N.GetClipping());},U:function(N,D2){var A;if(!N)throw new
Error(ET);if(!!N.G)throw new Error(HH);var BH=null;var If=N.Ek;if(((D2<0)&&!!this.
CD)&&(this.CD.Ek>=If)){BH=this.CD;D2=D2+1;}while((((D2<0)&&!!BH)&&!!BH.Aj)&&(BH.
Aj.Ek>=If)){BH=BH.Aj;D2=D2+1;}if((!BH&&!!this.CD)&&(this.CD.Ek>If))BH=this.CD;while((
!!BH&&!!BH.Aj)&&(BH.Aj.Ek>If))BH=BH.Aj;if(!BH){N.G=this;N.Aj=this.CD;if(!!this.CD
)this.CD.AG=N;if(!this.BX)this.BX=N;this.CD=N;}else{N.G=this;N.Aj=BH.Aj;N.AG=BH;
BH.Aj=N;if(!!N.Aj)N.Aj.AG=N;else this.BX=N;}if(((N.F&0x1)===0x1))this.V(N.GetClipping(
));if(((N.F&0x80)===0x80)&&(B.aam().PP()===N))N.A3(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((N.F&0x200010)===0x200010))N.A3(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((N.F&0x10)===0x10))&&((N.F&0x100000)===0x100000))N.A3(0x10,0x0);if(((!this.
DI&&((N.F&0x4)===0x4))&&((N.F&0x10)===0x10))&&!((N.F&0x10000)===0x10000))this.Hw(
N);if(((N.F&0x401)===0x401)){N.F=N.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
CV],this);}if(((N.F&0x200)===0x200)){N.F=N.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.CV],this);}},MB:function(){return this.Dy;},_Init:function(aArg){E.Bh._Init.
call(this,aArg);this.__proto__=E.W;this.F=0x10001F;this.Bt(aArg);},_Mark:function(
D){var A;E.Bh._Mark.call(this,D);if((A=this.BX)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.CD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Lw)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.A1)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
DI)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};E.Root={Dt:null
,AS:B.abi(10,null,null),IQ:null,Gd:null,Kv:0,Bp:0,Cm:B.abi(10,0,null),Lp:B.abi(10
,B.wg,null),D8:B.abi(10,0,null),Fj:B.abi(10,B.wf,null),IS:B.abi(10,0,null),Gc:B.
abi(10,B.wf,null),D7:B.abi(10,B.wf,null),Dp:B.abi(10,B.wf,null),EW:B.abi(10,B.wf
,null),AF:0,Lt:0,Ls:0,CO:B.abi(4,0,null),BP:B.abi(4,B.wg,null),BO:0,J9:0,IX:0,Ng:
true,Bt:function(aArg){if(!!!this.K){var obj=this;B.abD(obj);}},FD:function(){return this;
},Dg:function(AP,aClip,aOffset,Ar,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
B.m7;if(!fullScreenUpdate)AP.KF(aClip,B.abh(B.abh(aClip,aOffset),this.M.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);E.W.Dg.call(this,AP,aClip
,aOffset,Ar,aBlend);},A3:function(Dn,DL){var A;E.W.A3.call(this,Dn,DL);if(!this.
G&&(((Dn&0x1)===0x1)||((DL&0x1)===0x1)))this.V([0,0,(A=this.M)[2]-A[0],A[3]-A[1]
]);if(!this.G&&(((Dn&0x2)===0x2)||((DL&0x2)===0x2)))this.V([0,0,(A=this.M)[2]-A[
0],A[3]-A[1]]);},Hw:function(C){if((C!==null)||!C)E.W.Hw.call(this,C);},KT:function(
C){var A;var S2=this.A1;E.W.KT.call(this,C);if(((S2!==this.A1)&&!this.G)&&((this.
F&0x1)===0x1))this.V([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},Hz:function(C){var A;
var DQ=this.Dy;E.W.Hz.call(this,C);if(((DQ!==this.Dy)&&!this.G)&&((this.F&0x1)===
0x1))this.V([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Aq){if(
!!Aq){Aq.Jj=!!this.Bp;if(!!this.Bp)Aq.Ap=this.Bp;}var Bz;Bz=E.W.DispatchEvent.call(
this,Aq);this.Bp=0;return Bz;},BroadcastEvent:function(Aq,aFilter){if(!!Aq){Aq.Jj=
!!this.Bp;if(!!this.Bp)Aq.Ap=this.Bp;}var Bz=E.W.BroadcastEvent.call(this,Aq,aFilter
);this.Bp=0;return Bz;},V:function(Ag){var A;if(this.Kv>0)throw new Error(HI);if(
!!this.A1&&!this.G){if(((A=this.A1.DV)[0]>=A[2])||(A[1]>=A[3])){B.we(this,0);B.we(
this.A1,0);}this.A1.DV=B.wC(this.A1.DV,Ag);}var fullScreenUpdate=false;fullScreenUpdate=
B.m7;if(fullScreenUpdate)Ag=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.G){E.W.
V.call(this,Ag);return;}Ag=B.lb(B.abh(Ag,this.M.slice(0,2)),this.M);if((Ag[0]>=Ag[
2])||(Ag[1]>=Ag[3]))return;var I;for(I=0;I<this.BO;I=I+1)if(!(((A=B.lb(this.BP.Get(
I),Ag))[0]>=A[2])||(A[1]>=A[3]))){this.BP.Set(I,B.wC(this.BP.Get(I),Ag));this.CO.
Set(I,B.aaH(this.BP.Get(I)));return;}if(this.BO<3){this.BP.Set(this.BO,Ag);this.
CO.Set(this.BO,B.aaH(Ag));this.BO=this.BO+1;return;}var Bi;var Ds;var J8=0;var J$=
0;var Ou=2147483647;this.BP.Set(this.BO,Ag);this.CO.Set(this.BO,B.aaH(Ag));for(Bi=
0;Bi<=this.BO;Bi=Bi+1)for(Ds=Bi+1;Ds<=this.BO;Ds=Ds+1){var LO=B.aaH(B.wC(this.BP.
Get(Bi),this.BP.Get(Ds)));var Pi=((LO<<8)/(this.CO.Get(Bi)+this.CO.Get(Ds)))|0;if(
Pi<Ou){Ou=Pi;J8=Bi;J$=Ds;}}this.BP.Set(J8,B.wC(this.BP.Get(J8),this.BP.Get(J$)));
this.CO.Set(J8,B.aaH(this.BP.Get(J8)));if(J$!==this.BO){this.BP.Set(J$,this.BP.Get(
this.BO));this.CO.Set(J$,this.CO.Get(this.BO));}},ST:function(){var Co=B._NewObject(
E.Ij,0);Co.Jj=!!this.Bp;if(!!this.Bp)Co.Ap=this.Bp;return Co;},HT:function(){var
Co=B._NewObject(E.E4,0);Co.Jj=!!this.Bp;if(!!this.Bp)Co.Ap=this.Bp;return Co;},IR:
function(){var Co=B._NewObject(E.KB,0);Co.Jj=!!this.Bp;if(!!this.Bp)Co.Ap=this.Bp;
return Co;},SU:function(Ae){var I;var HY=false;for(I=0;I<10;I=I+1)if(!!this.AS.Get(
I)){var pos=this.Dp.Get(I);var X=this.AS.Get(I).G;while(!!X&&(X!==this)){pos=B.abe(
pos,X.M.slice(0,2));X=X.G;}if(!X&&(this.AS.Get(I)!==this)){var tmp=this.AS.Get(I
);this.AF=I;this.AS.Set(I,null);tmp.Bn(this.HT().InitializeUp(I,this.Gc.Get(I),this.
Fj.Get(I),this.D8.Get(I),this.Cm.Get(I)+1,this.D7.Get(I),false,this.Dp.Get(I),this.
EW.Get(I)));this.BroadcastEvent(this.IR().InitializeUp(I,this.Cm.Get(I)+1,false,
tmp,this.Dp.Get(I)),0x18);}else{this.D8.Set(I,(this.Gd.Ap-this.IS.Get(I))|0);if(
this.D8.Get(I)<10)this.D8.Set(I,10);this.AF=I;this.AS.Get(I).Bn(this.HT().InitializeHold(
I,pos,this.Fj.Get(I),this.D8.Get(I),this.Cm.Get(I)+1,this.D7.Get(I),this.Dp.Get(
I),this.EW.Get(I)));HY=true;}}if(!HY)this.Gd.Bb(false);},GetFPS:function(){var ticksCount=
0;var OF=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.Lt&&(ticksCount>this.
Lt))OF=((this.Ls*1000)/((ticksCount-this.Lt)|0))|0;this.Ls=0;this.Lt=ticksCount;
return OF;},Update:function(){var A;if(!this.IQ)this.IQ=B._NewObject(B.Graphics.
Canvas,0);this.IQ.Js([(A=this.M)[2]-A[0],A[3]-A[1]]);this.IQ.Update();return this.
UpdateGE20(this.IQ);},UpdateGE20:function(AP){if(!this.BeginUpdate())return AO;var
Fu=this.UpdateCanvas(AP,AN);this.EndUpdate();return Fu;},EndUpdate:function(){if(
this.BO>0){this.Ls=this.Ls+1;this.BO=0;}},UpdateCanvas:function(AP,aOffset){var A;
var Fu=AO;var SP=[].concat(aOffset,B.abf(AP.FrameSize,aOffset));var I;var Bi=this.
BO;this.Kv=this.Kv+1;AP.Fn=this;for(I=0;(I<Bi)&&(I<4);I=I+1)if(this.CO.Get(I)>0){
this.Dg(AP,B.abg(this.BP.Get(I),aOffset),[-aOffset[0],-aOffset[1]],255,true);Fu=
B.wC(Fu,B.lb(SP,this.BP.Get(I)));}else Bi=Bi+1;AP.Fn=null;this.Kv=this.Kv-1;if(!((
Fu[0]>=Fu[2])||(Fu[1]>=Fu[3])))return B.abg(Fu,aOffset);else return Fu;},GetUpdateRegion:
function(Lc){var I;var Bi=this.BO;if(Lc<0)return AO;for(I=0;(I<Bi)&&(I<4);I=I+1)
if(!this.CO.Get(I)){Bi=Bi+1;Lc=Lc+1;}else if(I===Lc)return this.BP.Get(I);return AO;
},BeginUpdate:function(){var A;var I;if(!!this.BO&&!B.aaY(this.BP.Get(0),[0,0,(A=
this.M)[2]-A[0],A[3]-A[1]])){var Pr=B.abi(3,B.wg,null);var Pq=this.BO;for(I=0;I<
Pq;I++)Pr.Set(I,this.BP.Get(I));for(I=0;I<Pq;I++){var Pk=B.abh(Pr.Get(I),this.M.
slice(0,2));var Pl=this.I8(Pk);if(!B.aaY(Pk,Pl))this.V(B.abg(Pl,this.M.slice(0,2
)));}}var Bi;var Ds;for(Bi=0;Bi<(this.BO-1);Bi++)if(this.CO.Get(Bi)>0)for(Ds=Bi+
1;Ds<this.BO;Ds++)if(this.CO.Get(Ds)>0){var LO=B.aaH(B.wC(this.BP.Get(Bi),this.BP.
Get(Ds)));if(((LO-this.CO.Get(Bi))-this.CO.Get(Ds))<0){this.BP.Set(Bi,B.wC(this.
BP.Get(Bi),this.BP.Get(Ds)));this.CO.Set(Bi,LO);this.CO.Set(Ds,0);}}for(I=this.BO-
1;I>=0;I--)if(!this.CO.Get(I))this.BO=this.BO-1;return this.BO;},DoesNeedUpdate:
function(){if(this.BO>0)return true;return false;},Initialize:function(aSize){this.
O([].concat(AN,aSize));if(this.Ng)this.F=this.F|0x60;else this.F=this.F|0x20;this.
V(this.M);return this;},SetRootFocus:function(M3){if(M3===this.Ng)return false;this.
Ng=M3;if(!M3)this.A3(0x0,0x40);else this.A3(0x40,0x0);return true;},SetUserInputTimestamp:
function(SG){this.Bp=SG;},DriveKeyboardHitting:function(BU,JO,Eo){var A;var Nu=!
!this.Dt;if(!!this.Dt&&((!Eo||(this.J9!==BU))||(this.IX!==JO))){var Co=null;var J=(
E.B7.isPrototypeOf(A=this.Dt)?A:null);var Es=(E.DW.isPrototypeOf(A=this.Dt)?A:null
);if(!!this.J9)Co=B._NewObject(E.KeyEvent,0).Initialize(this.J9,false);if(this.IX
!==0x00)Co=B._NewObject(E.KeyEvent,0).Initialize2(this.IX,false);if(!!Es)Es.Bn(Co
);else if(!!J)J.Bn(Co);this.J9=0;this.IX=0x00;this.Dt=null;}if(!!this.Dt){var Co=
null;var J=(E.B7.isPrototypeOf(A=this.Dt)?A:null);var Es=(E.DW.isPrototypeOf(A=this.
Dt)?A:null);if(!!BU)Co=B._NewObject(E.KeyEvent,0).Initialize(BU,true);if(this.IX
!==0x00)Co=B._NewObject(E.KeyEvent,0).Initialize2(JO,true);if(!!Es)Es.Bn(Co);else
if(!!J)J.Bn(Co);}if(!this.Dt&&Eo){if(!!BU)this.Dt=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize(BU,true));if(JO!==0x00)this.Dt=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize2(JO,true));if(!(E.DW.isPrototypeOf(A=this.Dt)?A:null)&&
!(E.B7.isPrototypeOf(A=this.Dt)?A:null))this.Dt=null;this.J9=BU;this.IX=JO;Nu=Nu||
!!this.Dt;}this.Bp=0;return Nu;},DriveCursorMovement:function(BG){return this.DriveMultiTouchMovement(
this.AF,BG);},DriveMultiTouchMovement:function(R,BG){if((R<0)||(R>9)){this.Bp=0;
return false;}var A$=B.abe(BG,this.Dp.Get(R));this.Dp.Set(R,BG);if(!this.AS.Get(
R)||B.aaX(A$,AN)){this.Bp=0;return false;}var pos=BG;var X=this.AS.Get(R).G;while(
!!X&&(X!==this)){pos=B.abe(pos,X.M.slice(0,2));X=X.G;}if(!X&&(this.AS.Get(R)!==this
)){var tmp=this.AS.Get(R);this.AF=R;this.AS.Set(R,null);tmp.Bn(this.HT().InitializeUp(
R,this.Gc.Get(R),this.Fj.Get(R),this.D8.Get(R),this.Cm.Get(R)+1,this.D7.Get(R),false
,this.Dp.Get(R),this.EW.Get(R)));this.BroadcastEvent(this.IR().InitializeUp(R,this.
Cm.Get(R)+1,false,tmp,BG),0x18);}else{this.Gc.Set(R,pos);this.AF=R;this.AS.Get(R
).Bn(this.ST().Initialize(R,pos,this.Fj.Get(R),A$,this.D8.Get(R),this.Cm.Get(R)+
1,this.D7.Get(R),BG,this.EW.Get(R)));}this.Bp=0;return true;},DriveCursorHitting:
function(Eo,R,BG){return this.DriveMultiTouchHitting(Eo,R,BG);},DriveMultiTouchHitting:
function(Eo,R,BG){if((R<0)||(R>9)){this.Bp=0;return false;}var ticksCount=this.Bp;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var Tm=this.Bp;this.DriveMultiTouchMovement(
R,BG);BG=this.Dp.Get(R);this.Bp=Tm;if(Eo)this.EW.Set(R,BG);if(Eo&&!this.AS.Get(R
)){var BN;var pos=BG;if(B.wa(this.Lp.Get(R),BG)&&((ticksCount-this.IS.Get(R))<=250
))this.Cm.Set(R,this.Cm.Get(R)+1);else this.Cm.Set(R,0);this.Lp.Set(R,B.abh(HJ,BG
));this.IS.Set(R,ticksCount);BN=this.Ez(B.abh(HJ,BG),R,this.Cm.Get(R)+1,null,null
,0x0);if(!!BN){this.BroadcastEvent(this.IR().InitializeDown(R,this.Cm.Get(R)+1,false
,BN.B7,BG),0x18);this.AS.Set(R,BN.B7);this.D7.Set(R,BN.Aw);}else{this.AS.Set(R,null
);this.D7.Set(R,AN);this.Bp=0;return false;}var X=BN.B7.G;while(!!X&&(X!==this)){
pos=B.abe(pos,X.M.slice(0,2));X=X.G;}this.Fj.Set(R,pos);this.Gc.Set(R,pos);this.
D8.Set(R,0);this.Gd.Bb(true);this.AF=R;this.AS.Get(R).Bn(this.HT().InitializeDown(
R,pos,this.Cm.Get(R)+1,this.D7.Get(R),false,BG));this.Bp=0;return true;}if(!Eo&&
!!this.AS.Get(R)){var pos=BG;var X=this.AS.Get(R).G;while(!!X&&(X!==this)){pos=B.
abe(pos,X.M.slice(0,2));X=X.G;}if(!X)pos=this.Gc.Get(R);this.AF=R;var tmp=this.AS.
Get(R);this.AS.Set(R,null);tmp.Bn(this.HT().InitializeUp(R,pos,this.Fj.Get(R),this.
D8.Get(R),this.Cm.Get(R)+1,this.D7.Get(R),false,BG,this.EW.Get(R)));this.BroadcastEvent(
this.IR().InitializeUp(R,this.Cm.Get(R)+1,false,tmp,BG),0x18);this.Bp=0;return true;
}this.Bp=0;return false;},MQ:function(Eq,Lb,D3,Ff){if(Eq===this)Eq=null;if(!this.
AS.Get(this.AF))return;var BN;BN=this.Ez(B.abh(HJ,this.Dp.Get(this.AF)),this.AF,
1,Eq,D3,Ff);if(!!BN&&(this.AS.Get(this.AF)!==BN.B7))this.L4(BN.B7,BN.Aw);if(!BN&&(
this.AS.Get(this.AF)!==Lb))this.L4(Lb,AN);},Q2:function(Eq,Lb,D3){this.MQ(Eq,Lb,
D3,0x0);},L4:function(Eq,D1){if(!this.AS.Get(this.AF)||(this.AS.Get(this.AF)===Eq
))return;var tmp=this.AS.Get(this.AF);this.AS.Set(this.AF,null);tmp.Bn(this.HT().
InitializeUp(this.AF,this.Gc.Get(this.AF),this.Fj.Get(this.AF),this.D8.Get(this.
AF),this.Cm.Get(this.AF)+1,this.D7.Get(this.AF),true,this.Dp.Get(this.AF),this.EW.
Get(this.AF)));this.BroadcastEvent(this.IR().InitializeUp(this.AF,this.Cm.Get(this.
AF)+1,true,tmp,this.Dp.Get(this.AF)),0x18);var pos=this.Dp.Get(this.AF);var X=null;
if(!!Eq)X=Eq.G;while(!!X&&(X!==this)){pos=B.abe(pos,X.M.slice(0,2));X=X.G;}if(!X&&(
Eq!==this)){this.AS.Set(this.AF,null);return;}this.BroadcastEvent(this.IR().InitializeDown(
this.AF,this.Cm.Get(this.AF)+1,true,Eq,this.Dp.Get(this.AF)),0x18);var ticksCount=
0;ticksCount=((new Date).getTime()-B.v$)|0;this.AS.Set(this.AF,Eq);this.D7.Set(this.
AF,D1);this.Fj.Set(this.AF,pos);this.Gc.Set(this.AF,pos);this.Cm.Set(this.AF,0);
this.D8.Set(this.AF,0);this.IS.Set(this.AF,ticksCount);this.EW.Set(this.AF,this.
Dp.Get(this.AF));this.AS.Get(this.AF).Bn(this.HT().InitializeDown(this.AF,pos,this.
Cm.Get(this.AF)+1,this.D7.Get(this.AF),true,this.EW.Get(this.AF)));},PP:function(
){return null;},_Init:function(aArg){E.W._Init.call(this,aArg);E.Timer._Init.call(
this.Gd={K:this},0);(this.AS=[]).__proto__=E.Root.AS;(this.Cm=[]).__proto__=E.Root.
Cm;(this.Lp=[]).__proto__=E.Root.Lp;(this.D8=[]).__proto__=E.Root.D8;(this.Fj=[]
).__proto__=E.Root.Fj;(this.IS=[]).__proto__=E.Root.IS;(this.Gc=[]).__proto__=E.
Root.Gc;(this.D7=[]).__proto__=E.Root.D7;(this.Dp=[]).__proto__=E.Root.Dp;(this.
EW=[]).__proto__=E.Root.EW;(this.CO=[]).__proto__=E.Root.CO;(this.BP=[]).__proto__=
E.Root.BP;this.__proto__=E.Root;this.F=0x10007F;this.Gd.HA(10);this.Gd.HB=[this,
this.SU];this.Bt(aArg);},_Done:function(){this.__proto__=E.W;this.Gd._Done();E.W.
_Done.call(this);},_ReInit:function(){E.W._ReInit.call(this);this.Gd._ReInit();}
,_Mark:function(D){var A;E.W._Mark.call(this,D);if((A=this.Dt)&&(A._cycle!=D))A.
_Mark(A._cycle=D);B.aa6(this.AS,D);if((A=this.IQ)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Gd)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"};E.Event={
Ap:0,Jj:false,Bt:function(aArg){this.Ap=this.KH();},KH:function(){var ticksCount=
0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:function(aArg
){this.__proto__=E.Event;this.Bt(aArg);B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::Event"
};E.KeyEvent={Bg:0,AR:0,Down:false,Initialize2:function(BU,Eo){this.Bg=0;this.AR=
BU;this.Down=Eo;if((BU>=0x30)&&(BU<=0x39))this.Bg=(10+BU)-48;if((BU>=0x41)&&(BU<=
0x5A))this.Bg=(105+BU)-65;if((BU>=0x61)&&(BU<=0x7A))this.Bg=(105+BU)-97;if(BU===
0x20)this.Bg=131;if(!this.Bg)switch(BU){case 0x2B:this.Bg=132;break;case 0x2D:this.
Bg=133;break;case 0x2A:this.Bg=134;break;case 0x2F:this.Bg=135;break;case 0x3D:this.
Bg=136;break;case 0x2E:this.Bg=137;break;case 0x2C:this.Bg=138;break;case 0x3A:this.
Bg=139;break;case 0x3B:this.Bg=140;break;default:;}return this;},Initialize:function(
BU,Eo){this.Bg=BU;this.Down=Eo;this.AR=0x00;var M8=BU-10;var M7=BU-105;if((M8>=0
)&&(M8<=9))this.AR=(48+M8)&0xFFFF;if((M7>=0)&&(M7<=25))this.AR=(65+M7)&0xFFFF;if(
BU===131)this.AR=0x20;if(this.AR===0x00)switch(BU){case 132:this.AR=0x2B;break;case
133:this.AR=0x2D;break;case 134:this.AR=0x2A;break;case 135:this.AR=0x2F;break;case
136:this.AR=0x3D;break;case 137:this.AR=0x2E;break;case 138:this.AR=0x2C;break;case
139:this.AR=0x3A;break;case 140:this.AR=0x3B;break;default:;}return this;},PX:function(
Or){switch(Or){case 141:return((this.AR>=0x41)&&(this.AR<=0x5A))||((this.AR>=0x61
)&&(this.AR<=0x7A));case 142:return(((this.AR>=0x41)&&(this.AR<=0x5A))||((this.AR>=
0x61)&&(this.AR<=0x7A)))||((this.AR>=0x30)&&(this.AR<=0x39));case 143:return(this.
AR>=0x30)&&(this.AR<=0x39);case 144:return(((this.AR>=0x41)&&(this.AR<=0x46))||((
this.AR>=0x61)&&(this.AR<=0x66)))||((this.AR>=0x30)&&(this.AR<=0x39));case 145:return this.
AR!==0x00;case 146:return(this.AR===0x00)&&!!this.Bg;case 147:return(((this.Bg===
6)||(this.Bg===7))||(this.Bg===4))||(this.Bg===5);case 148:return(this.AR!==0x00
)||!!this.Bg;default:;}return Or===this.Bg;},_Init:function(aArg){E.Event._Init.
call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"};E.KB={K2:
null,CW:B.wf,CI:0,Br:0,Down:false,Dv:false,InitializeUp:function(R,CJ,HK,M5,Ep){
this.Down=false;this.Br=R;this.CI=CJ;this.CW=Ep;this.K2=M5;this.Dv=HK;return this;
},InitializeDown:function(R,CJ,HK,M5,Ep){this.Down=true;this.Br=R;this.CI=CJ;this.
CW=Ep;this.K2=M5;this.Dv=HK;return this;},_Init:function(aArg){E.Event._Init.call(
this,aArg);this.__proto__=E.KB;},_Mark:function(D){var A;E.Event._Mark.call(this
,D);if((A=this.K2)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.E4={Jh:B.wf,CW:B.wf,CI:0,Cb:0,Cw:B.wf,Bm:B.wf,Br:0,Down:false,Dv:false,InitializeHold:
function(R,GY,JQ,JR,CJ,D1,Ep,JP){this.Down=true;this.Br=R;this.Bm=B.abf(GY,D1);this.
Cw=B.abf(JQ,D1);this.Cb=JR;this.CI=CJ;this.CW=Ep;this.Jh=JP;return this;},InitializeUp:
function(R,GY,JQ,JR,CJ,D1,HK,Ep,JP){this.Down=false;this.Br=R;this.Bm=B.abf(GY,D1
);this.Cw=B.abf(JQ,D1);this.Cb=JR;this.CI=CJ;this.Dv=HK;this.CW=Ep;this.Jh=JP;return this;
},InitializeDown:function(R,GY,CJ,D1,HK,Ep){this.Down=true;this.Br=R;this.Bm=B.abf(
GY,D1);this.Cw=B.abf(GY,D1);this.Cb=0;this.CI=CJ;this.Dv=HK;this.CW=Ep;this.Jh=Ep;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.E4;},_className:"Core::CursorEvent"};E.Ij={Jh:B.wf,CW:B.wf,CI:0,Cb:0,Aw:B.wf,Cw:
B.wf,Bm:B.wf,Br:0,Initialize:function(R,GY,JQ,aOffset,JR,SF,D1,Ep,JP){this.Br=R;
this.Bm=B.abf(GY,D1);this.Cw=B.abf(JQ,D1);this.Aw=aOffset;this.Cb=JR;this.CI=SF;
this.CW=Ep;this.Jh=JP;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.Ij;},_className:"Core::DragEvent"};E.Jy={Dg:function(AP,
aClip,aOffset,Ar,aBlend){},GetClipping:function(){var A;var H=E.Bh.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var Id=AO;var J;for(J=this.AG;!!J&&!((J.F&
0x200)===0x200);J=J.AG)if(((J.F&0x1)===0x1))Id=B.wC(Id,J.GetClipping());H=B.wC(H
,Id);}return H;},A3:function(Dn,DL){var A;var Lz=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((DL&0x80000)===0x80000))this.G.V(this.GetClipping());E.Bh.A3.call(
this,Dn,DL);if(((!!this.G&&((this.F&0x1)===0x1))&&((Dn&0x80000)===0x80000))&&!((
Lz&0x80000)===0x80000))this.G.V(this.GetClipping());},O:function(C){var A;if(B.aaY(
C,this.M))return;var Hd=[(A=this.M)[2]-A[0],A[3]-A[1]];var Ly=[C[2]-C[0],C[3]-C[
1]];var Ib=!B.aaX(Hd,Ly);var A$=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.aaX(
A$,AN)&&!Ib){var J=this.AG;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400)===
0x400)){var tmp=((J.F&0x100)===0x100);J.Iv(A$,tmp);}J=J.AG;}}if((Ib&&(Hd[0]>0))&&(
Hd[1]>0)){var Ah=this.M;var J=this.AG;while(!!J&&!((J.F&0x200)===0x200)){if(((J.
F&0x400)===0x400)){if(!!J.AT&&(J.AT.He!==this))J.AT=null;if(!J.AT&&(J.CX!==0x14)
)J.IW(Ah,this);}J=J.AG;}}E.Bh.O.call(this,C);if(!!this.G&&Ib){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CV],
this);}}},_Init:function(aArg){E.Bh._Init.call(this,aArg);this.__proto__=E.Jy;this.
F=0x203;},_className:"Core::Outline"};E.BK={KP:null,MD:null,My:null,Eg:null,EF:null
,CY:null,Af:0,Br:0,Ap:0,CI:0,Cb:0,Aw:B.wf,Cw:B.wf,Bm:B.wf,Q3:8,NR:1,Down:false,GQ:
false,Dv:false,Nb:false,Kb:0,Dg:function(AP,aClip,aOffset,Ar,aBlend){},Bn:function(
Aq){var A;var S=(E.E4.isPrototypeOf(Aq)?Aq:null);var AU=(E.Ij.isPrototypeOf(Aq)?
Aq:null);var Lv=this.GQ;var Ev;var DN;var Kt;var CE;var J2;if(!S&&!AU)return null;
Ev=(!!S&&S.Down)&&!S.Cb;DN=(!!S&&S.Down)&&(S.Cb>0);Kt=(!!S&&S.Down)&&(S.Cb>this.
Kb);CE=!!S&&!S.Down;J2=!!AU;if(Ev)this.Kb=((A=(S.Dv?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if(Ev){var H5=0;var EX;this.Af=this.Af|(1<<S.Br);for(EX=this.Af&4095;EX>0;EX=
EX>>1)if(!!(EX&1))H5=H5+1;if(H5===1)this.Af=(this.Af|16777216)|(4096<<S.Br);}if(
CE&&(this.Af<16777216)){var C$=this.FD();var BN=null;if(!!C$){var Nx=(!!this.Aj?
this.Aj:this.G);BN=C$.Ez(B.abh(K9,S.CW),S.Br,S.CI,null,Nx,0x0);}if(!!BN){var I;for(
I=0;I<10;I++)if(!!(this.Af&(1<<I)))BN.B7.Bn(B._NewObject(E.E4,0).InitializeDown(
I,S.Bm,S.CI,AN,true,S.CW));for(I=0;I<10;I++)if(!!(this.Af&(1<<I)))BN.B7.Bn(B._NewObject(
E.E4,0).InitializeUp(I,S.Bm,S.Bm,0,S.CI,AN,false,S.CW,S.CW));}}if(CE)this.Af=(this.
Af&~(1<<S.Br))|33554432;if(Kt&&(this.Af<16777216))this.Af=this.Af|67108864;if(CE&&
S.Dv)this.Af=this.Af|67108864;if(CE&&!(this.Af&16777215))this.Af=0;if(DN&&(this.
Af>=67108864)){var C$=this.FD();if(!!C$)C$.MQ(null,null,this,0x0);}if((DN&&!!(this.
Af&16777216))&&!!(this.Af&33554432)){DN=false;CE=true;}if(!!S&&!(this.Af&(4096<<
S.Br)))return this;if(!!AU&&!(this.Af&(4096<<AU.Br)))return this;if(CE&&!(this.Af&
16777216))return this;if(((Ev||J2)||DN)&&((this.Af<16777216)||(this.Af>=33554432
)))return this;if(CE)this.Af=this.Af&3758100479;if(CE&&!(this.Af&16777215))this.
Af=0;if(!!S){this.Down=Ev||DN;this.GQ=this.Ml(S.Bm);this.Cw=S.Cw;this.Bm=S.Bm;this.
Aw=AN;this.Cb=S.Cb;this.CI=S.CI;this.Dv=S.Dv;this.Br=S.Br;this.Ap=S.Ap;if(S.Down&&
!S.Cb)Lv=false;}if(!!AU){this.Down=true;this.GQ=this.Ml(AU.Bm);this.Cw=AU.Cw;this.
Bm=AU.Bm;this.Aw=AU.Aw;this.Cb=AU.Cb;this.CI=AU.CI;this.Br=AU.Br;this.Dv=false;this.
Ap=AU.Ap;}var Na=this.Down;if(!!AU)(A=this.KP)?A[1].call(A[0],this):null;if((!!S&&
this.Down)&&!this.Cb)(A=this.CY)?A[1].call(A[0],this):null;if((!!S&&this.Down)&&(
this.Cb>0))(A=this.Eg)?A[1].call(A[0],this):null;if((this.Down&&this.GQ)&&!Lv){this.
Nb=true;(A=this.My)?A[1].call(A[0],this):null;}if(this.Nb&&(((Na&&!this.GQ)&&Lv)||((
!Na&&this.GQ)&&Lv))){this.Nb=false;(A=this.MD)?A[1].call(A[0],this):null;}if(!!S&&
!Na)(A=this.EF)?A[1].call(A[0],this):null;return this;},Ez:function(Ag,R,CJ,En,D3
,Ff){var A;if(!!En&&(En!==this))return null;if((CJ<1)||(CJ>this.NR))return null;
if(this.Af>=33554432)return null;if((this.Af>=16777216)&&!(this.Af&(4096<<R)))return null;
if(this.PT()){var H=B.lb(Ag,this.GetExtent());if(!((H[0]>=H[2])||(H[1]>=H[3]))){
var C2=B.aaI(Ag);var A$=AN;if(C2[0]<H[0])A$=[H[0]-C2[0],A$[1]];if(C2[0]>=H[2])A$=[(
H[2]-C2[0])-1,A$[1]];if(C2[1]<H[1])A$=[A$[0],H[1]-C2[1]];if(C2[1]>=H[3])A$=[A$[0
],(H[3]-C2[1])-1];return B._NewObject(E.I$,0).Initialize(this,A$);}}else{var Bc=
B.abi(9,B.wf,null);var I;Bc.Set(0,B.aaI(Ag));Bc.Set(1,Bc.Get(0));Bc.Set(2,Bc.Get(
0));Bc.Set(3,Bc.Get(0));Bc.Set(4,Bc.Get(0));Bc.Set(1,[Ag[0],Bc.Get(1)[1]]);Bc.Set(
2,[Bc.Get(2)[0],Ag[1]]);Bc.Set(3,[Ag[2],Bc.Get(3)[1]]);Bc.Set(4,[Bc.Get(4)[0],Ag[
3]]);Bc.Set(5,Ag.slice(0,2));Bc.Set(6,[Ag[2],Ag[1]]);Bc.Set(7,[Ag[0],Ag[3]]);Bc.
Set(8,Ag.slice(2,4));for(I=0;I<9;I=I+1)if(this.Ml(Bc.Get(I)))return B._NewObject(
E.I$,0).Initialize(this,B.abe(Bc.Get(I),Bc.Get(0)));}return null;},NZ:function(C
){if(C<1)C=1;this.Q3=C;},MH:function(C){if(C<1)C=1;this.NR=C;},Bb:function(C){if(
C)this.A3(0x100000,0x0);else this.A3(0x0,0x100000);},_Init:function(aArg){E.Ej._Init.
call(this,aArg);this.__proto__=E.BK;this.F=0x10011B;},_Mark:function(D){var A;E.
Ej._Mark.call(this,D);if((A=this.KP)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.MD)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.My)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Eg)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.EF)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CY)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};E.DA={
timer:null,LG:null,I0:null,Af:0,Lf:0,EY:5000,Ia:0,Lu:B.wf,HX:0,Fh:0,AL:0,Hm:0,I3:
0,HW:0,Fg:0,AK:0,Hl:0,Hk:0,Cw:B.wf,NH:B.wf,BQ:B.wf,BR:B.wf,Aw:B.wf,NL:0.5,K1:true
,IF:false,D_:false,D$:false,Le:false,Kb:0,Dg:function(AP,aClip,aOffset,Ar,aBlend
){},Bn:function(Aq){var A;var S=(E.E4.isPrototypeOf(Aq)?Aq:null);var AU=(E.Ij.isPrototypeOf(
Aq)?Aq:null);var BV=(E.KB.isPrototypeOf(Aq)?Aq:null);var Ev;var DN;var Kt;var CE;
var J2;Ev=(!!S&&S.Down)&&!S.Cb;DN=(!!S&&S.Down)&&(S.Cb>0);Kt=(!!S&&S.Down)&&(S.Cb>
this.Kb);CE=!!S&&!S.Down;J2=!!AU;if(Ev)this.Kb=((A=(S.Dv?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Ev){var H5=0;var EX;this.Af=this.Af|(1<<S.Br);for(EX=this.Af&4095;EX>0;
EX=EX>>1)if(!!(EX&1))H5=H5+1;if(H5===1)this.Af=(this.Af|16777216)|(4096<<S.Br);}
if(CE&&(this.Af<16777216)){var C$=this.FD();var BN=null;if(!!C$){var Nx=(!!this.
Aj?this.Aj:this.G);BN=C$.Ez(B.abh(K9,S.CW),S.Br,S.CI,null,Nx,0x0);}if(!!BN){var I;
for(I=0;I<10;I++)if(!!(this.Af&(1<<I)))BN.B7.Bn(B._NewObject(E.E4,0).InitializeDown(
I,S.Bm,S.CI,AN,true,S.CW));for(I=0;I<10;I++)if(!!(this.Af&(1<<I)))BN.B7.Bn(B._NewObject(
E.E4,0).InitializeUp(I,S.Bm,S.Bm,0,S.CI,AN,false,S.CW,S.CW));}}if(CE)this.Af=(this.
Af&~(1<<S.Br))|33554432;if(Kt&&(this.Af<16777216))this.Af=this.Af|67108864;if(CE&&
S.Dv)this.Af=this.Af|67108864;if(CE&&!(this.Af&16777215))this.Af=0;if(DN&&(this.
Af>=67108864)){var C$=this.FD();if(!!C$)C$.MQ(null,null,this,0x0);}if((DN&&!!(this.
Af&16777216))&&!!(this.Af&33554432)){DN=false;CE=true;}if(!!S&&!(this.Af&(4096<<
S.Br)))return this;if(!!AU&&!(this.Af&(4096<<AU.Br)))return this;if(CE&&!(this.Af&
16777216))return this;if(((Ev||J2)||DN)&&((this.Af<16777216)||(this.Af>=33554432
)))return this;if(CE)this.Af=this.Af&3758100479;if(CE&&!(this.Af&16777215))this.
Af=0;if(!!BV&&(BV.K2===this))return null;if((!!BV&&BV.Down)&&(this.Le||!this.IF)
)return null;if((!!BV&&BV.Down)&&!B.wa(this.M,this.G.P1(BV.CW)))return null;if((
!!BV&&!BV.Down)&&(!this.Le||(this.Lf!==BV.Br)))return null;if((!S&&!AU)&&!BV)return null;
if(!!S){this.Le=Ev||DN;this.Lf=S.Br;this.Cw=S.Cw;}if(!!AU)this.Lf=AU.Br;if(!!BV){
this.Le=BV.Down;this.Lf=BV.Br;}if(!!BV&&BV.Down){this.Ny();this.AK=(((BV.Ap-this.
Hk)*0.001)*this.Fg)+this.AK;this.AL=(((BV.Ap-this.I3)*0.001)*this.Fh)+this.AL;if(
this.D_)this.AK=0;if(this.D$)this.AL=0;this.Fg=0;this.Fh=0;this.D_=false;this.D$=
false;this.Lu=this.Aw;this.Ia=BV.Ap;return this;}if(Ev){this.Ny();this.AK=(((S.Ap-
this.Hk)*0.001)*this.Fg)+this.AK;this.AL=(((S.Ap-this.I3)*0.001)*this.Fh)+this.AL;
if(this.D_||!this.IF)this.AK=0;if(this.D$||!this.IF)this.AL=0;this.Fg=0;this.Fh=
0;this.D_=false;this.D$=false;if(!this.IF){this.IF=true;(A=this.LG)?A[1].call(A[
0],this):null;}this.Lu=this.Aw;this.Ia=S.Ap;}if(!!AU){var Ak=B.abe(AU.Bm,AU.Cw);
var An=this.Aw;if(this.K1)An=[this.Lu[0]+Ak[0],An[1]];An=[An[0],this.Lu[1]+Ak[1]
];if(An[0]<this.BR[0])An=[this.BR[0]+(((An[0]-this.BR[0])/2)|0),An[1]];else if(An[
0]>this.BQ[0])An=[this.BQ[0]+(((An[0]-this.BQ[0])/2)|0),An[1]];if(An[1]<this.BR[
1])An=[An[0],this.BR[1]+(((An[1]-this.BR[1])/2)|0)];else if(An[1]>this.BQ[1])An=[
An[0],this.BQ[1]+(((An[1]-this.BQ[1])/2)|0)];if(!B.aaX(An,this.Aw)){this.NH=B.abe(
An,this.Aw);this.Aw=An;(A=this.I0)?A[1].call(A[0],this):null;}}if((!!BV&&!BV.Down
)&&((BV.Ap-this.Ia)>=200)){this.AK=0;this.AL=0;}if(DN&&((S.Ap-this.Ia)>=200)){this.
AK=0;this.AL=0;}if(!!AU&&(AU.Ap>this.Ia)){var Ak=AU.Aw;var OS=1000/(AU.Ap-this.Ia
);var GD=0;var GE;if(this.K1)GD=Ak[0]*OS;GE=Ak[1]*OS;if((GD*this.AK)<0)this.AK=0;
if((GE*this.AL)<0)this.AL=0;this.AK=(this.AK+GD)*0.5;this.AL=(this.AL+GE)*0.5;this.
Ia=AU.Ap;}if(!CE&&!BV)return this;if(!!S&&S.Dv){this.AK=0;this.AL=0;}if((this.Aw[
0]<=this.BR[0])||(this.Aw[0]>=this.BQ[0]))this.AK=0;else if(!this.AK){var AX=this.
Aw[0];var Bk=this.BR[0];var Bl=this.BQ[0];if(AX<Bk)Bl=this.BR[0];else if(AX>Bl)Bk=
this.BQ[0];else{Bk=AX;Bl=AX;}if((Bk-AX)<=(AX-Bl))AX=Bk;else AX=Bl;if(AX!==this.Aw[
0]){var Cn=AX-this.Aw[0];if(Cn>0)this.AK=Math.sqrt((Cn*2)*this.EY)+20;if(Cn<0)this.
AK=-Math.sqrt((-Cn*2)*this.EY)-20;this.Fg=(400-(this.AK*this.AK))/(2*Cn);this.HW=
AX;}}else{var Tn=this.AK*this.AK;var Cn=Tn/(2*this.EY);var AX=this.Aw[0];if(this.
AK>0)AX=AX+(Cn|0);if(this.AK<0)AX=AX-(Cn|0);if(AX>this.BQ[0])AX=this.BQ[0];else if(
AX<this.BR[0])AX=this.BR[0];var Po=AX;var Bk=this.BR[0];var Bl=this.BQ[0];if(AX<
Bk)Bl=this.BR[0];else if(AX>Bl)Bk=this.BQ[0];else{Bk=AX;Bl=AX;}if(this.AK>0){if(
Bl<=this.Aw[0])AX=Bk;else if((AX-Bl)<(Bk-AX))AX=Bl;else AX=Bk;}else if(Bk>=this.
Aw[0])AX=Bl;else if((AX-Bl)>(Bk-AX))AX=Bk;else AX=Bl;if(AX!==this.Aw[0]){Cn=AX-this.
Aw[0];if(AX!==Po){var GN=AX-Po;if(GN>0)this.AK=this.AK+Math.sqrt((GN*2)*this.EY);
if(GN<0)this.AK=this.AK-Math.sqrt((-GN*2)*this.EY);}if(this.AK>0)this.AK=this.AK+
20;if(this.AK<0)this.AK=this.AK-20;this.Fg=(400-(this.AK*this.AK))/(2*Cn);this.HW=
AX;}else this.AK=0;}if((this.Aw[1]<=this.BR[1])||(this.Aw[1]>=this.BQ[1]))this.AL=
0;else if(!this.AL){var AY=this.Aw[1];var Bk=this.BR[1];var Bl=this.BQ[1];if(AY<
Bk)Bl=this.BR[1];else if(AY>Bl)Bk=this.BQ[1];else{Bk=AY;Bl=AY;}if((Bk-AY)<=(AY-Bl
))AY=Bk;else AY=Bl;if(AY!==this.Aw[1]){var Cn=AY-this.Aw[1];if(Cn>0)this.AL=Math.
sqrt((Cn*2)*this.EY)+20;if(Cn<0)this.AL=-Math.sqrt((-Cn*2)*this.EY)-20;this.Fh=(
400-(this.AL*this.AL))/(2*Cn);this.HX=AY;}}else{var To=this.AL*this.AL;var Cn=To
/(2*this.EY);var AY=this.Aw[1];if(this.AL>0)AY=AY+(Cn|0);if(this.AL<0)AY=AY-(Cn|
0);if(AY>this.BQ[1])AY=this.BQ[1];else if(AY<this.BR[1])AY=this.BR[1];var Pp=AY;
var Bk=this.BR[1];var Bl=this.BQ[1];if(AY<Bk)Bl=this.BR[1];else if(AY>Bl)Bk=this.
BQ[1];else{Bk=AY;Bl=AY;}if(this.AL>0){if(Bl<=this.Aw[1])AY=Bk;else if((AY-Bl)<(Bk-
AY))AY=Bl;else AY=Bk;}else if(Bk>=this.Aw[1])AY=Bl;else if((AY-Bl)>(Bk-AY))AY=Bk;
else AY=Bl;if(AY!==this.Aw[1]){Cn=AY-this.Aw[1];if(AY!==Pp){var GN=AY-Pp;if(GN>0
)this.AL=this.AL+Math.sqrt((GN*2)*this.EY);if(GN<0)this.AL=this.AL-Math.sqrt((-GN
*2)*this.EY);}if(this.AL>0)this.AL=this.AL+20;if(this.AL<0)this.AL=this.AL-20;this.
Fh=(400-(this.AL*this.AL))/(2*Cn);this.HX=AY;}else this.AL=0;}if(!!S)this.Hk=S.Ap;
if(!!BV)this.Hk=BV.Ap;this.I3=this.Hk;this.Hl=this.Aw[0];this.Hm=this.Aw[1];this.
Tp();return this;},Ez:function(Ag,R,CJ,En,D3,Ff){var A;if(!!En&&(En!==this))return null;
if(this.Af>=33554432)return null;if((this.Af>=16777216)&&!(this.Af&(4096<<R)))return null;
if(!this.K1&&!!(Ff&0xC))return null;var H=B.lb(Ag,this.M);if(!((H[0]>=H[2])||(H[
1]>=H[3]))){var C2=B.aaI(Ag);var A$=AN;if(C2[0]<H[0])A$=[H[0]-C2[0],A$[1]];if(C2[
0]>=H[2])A$=[(H[2]-C2[0])-1,A$[1]];if(C2[1]<H[1])A$=[A$[0],H[1]-C2[1]];if(C2[1]>=
H[3])A$=[A$[0],(H[3]-C2[1])-1];return B._NewObject(E.I$,0).Initialize(this,A$);}
return null;},Ny:function(){if(!!this.timer){B.z9([this,this.CP],this.timer,0);this.
timer=null;}},Tp:function(){this.timer=B._GetAutoObject(B.acj.Fx);B.zV([this,this.
CP],this.timer,0);},CP:function(Ae){var A;if(!this.timer)return;var I4=(this.timer.
Ap-this.Hk)*0.001;var I5=(this.timer.Ap-this.I3)*0.001;var Ts=I4*I4;var Tt=I5*I5;
var GD=(this.Fg*I4)+this.AK;var GE=(this.Fh*I5)+this.AL;var An=[((((this.Fg*0.5)
*Ts)+(this.AK*I4))+this.Hl)|0,((((this.Fh*0.5)*Tt)+(this.AL*I5))+this.Hm)|0];if(
this.D_&&(I4>=0.5)){An=[this.HW,An[1]];this.AK=0;this.Fg=0;this.Hl=An[0];this.D_=
false;}else if(this.D_){var G6=1-Math.pow(1-(I4/0.5),5);An=[(this.Hl+((this.HW-this.
Hl)*G6))|0,An[1]];}if(this.D$&&(I5>=0.5)){An=[An[0],this.HX];this.AL=0;this.Fh=0;
this.Hm=An[1];this.D$=false;}else if(this.D$){var G6=1-Math.pow(1-(I5/0.5),5);An=[
An[0],(this.Hm+((this.HX-this.Hm)*G6))|0];}if(((this.AK>0)&&(GD<0))||((this.AK<0
)&&(GD>0))){GD=0;An=[this.Aw[0],An[1]];}if(((this.AL>0)&&(GE<0))||((this.AL<0)&&(
GE>0))){GE=0;An=[An[0],this.Aw[1]];}if(!this.D_&&(An[0]<this.BR[0])){this.Hl=An[
0];this.HW=this.BR[0];this.Hk=this.timer.Ap;this.D_=true;}else if(!this.D_&&(An[
0]>this.BQ[0])){this.Hl=An[0];this.HW=this.BQ[0];this.Hk=this.timer.Ap;this.D_=true;
}if(!this.D$&&(An[1]<this.BR[1])){this.Hm=An[1];this.HX=this.BR[1];this.I3=this.
timer.Ap;this.D$=true;}else if(!this.D$&&(An[1]>this.BQ[1])){this.Hm=An[1];this.
HX=this.BQ[1];this.I3=this.timer.Ap;this.D$=true;}if(((!this.D_&&!!this.AK)&&(GD>-
20))&&(GD<20)){An=[this.HW,An[1]];this.AK=0;this.Fg=0;this.Hl=An[0];}if(((!this.
D$&&!!this.AL)&&(GE>-20))&&(GE<20)){An=[An[0],this.HX];this.AL=0;this.Fh=0;this.
Hm=An[1];}if(!B.aaX(An,this.Aw)){this.NH=B.abe(An,this.Aw);this.Aw=An;(A=this.I0
)?A[1].call(A[0],this):null;}if(((!this.AK&&!this.AL)&&!this.D_)&&!this.D$){this.
Ny();this.IF=false;}},Qf:function(C){if(C<0)C=0;if(C>1)C=1;if(C===this.NL)return;
this.NL=C;if(C<(1e-007))C=1e-007;this.EY=C*10000;},_Init:function(aArg){E.Bh._Init.
call(this,aArg);this.__proto__=E.DA;this.F=0x10011B;},_Mark:function(D){var A;E.
Bh._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.LG)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.I0)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"};E.DW={AG:null,EF:
null,CY:null,Eg:null,H_:0,Ap:0,N3:0,Ca:148,Bg:0,AR:0,B1:true,Down:false,MO:false
,Bt:function(aArg){var A;var Fn=(E.W.isPrototypeOf(A=this.K)?A:null);if(!Fn)throw new
Error(K_);this.AG=Fn.Lw;Fn.Lw=this;},Bn:function(Aq){var A;if(!!Aq&&Aq.PX(this.Ca
)){this.Down=Aq.Down;this.Bg=Aq.Bg;this.AR=Aq.AR;this.Ap=Aq.Ap;if(Aq.Down){this.
N3=this.H_;this.MO=this.H_>0;if(this.MO)(A=this.Eg)?A[1].call(A[0],this):null;else(
A=this.CY)?A[1].call(A[0],this):null;this.H_=this.H_+1;return true;}if(!Aq.Down){
this.MO=this.H_>1;this.N3=this.H_-1;this.H_=0;(A=this.EF)?A[1].call(A[0],this):null;
return true;}}return false;},_Init:function(aArg){this.__proto__=E.DW;this.Bt(aArg
);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.AG)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.EF
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.CY)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.Eg)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};E.I$={B7:null,Ja:0,Aw:B.wf,Initialize:function(N,aOffset
){this.B7=N;this.Aw=aOffset;this.Ja=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=E.I$;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.B7)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};E.Ir={
He:null,BW:B.wg,Ah:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=E.Ir;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.He)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K
)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};E.KJ={GG:B.wf,GF:B.wf,_Init:function(aArg){E.Ir._Init.call(
this,aArg);this.__proto__=E.KJ;},_className:"Core::LayoutLineContext"};E.KK={Kl:
B.wf,Kk:B.wf,GG:B.wf,GF:B.wf,_Init:function(aArg){E.Ir._Init.call(this,aArg);this.
__proto__=E.KK;},_className:"Core::LayoutQuadContext"};E.FQ={resource:null,EB:function(
){this.resource=null;},Bt:function(aArg){this.resource=aArg;},_Init:function(aArg
){this.__proto__=E.FQ;this.Bt(aArg);B.h7++;},_Done:function(){this.EB();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};E.Timer={HB:null,timer:null,Ap:0,Period:1000,Ky:0,B1:false,EB:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},LH:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},HA:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.B1)this.LH(this.Ky,C);},IA:function(C){if(C<0)C=0;if(C===this.
Ky)return;this.Ky=C;if(this.B1)this.LH(C,this.Period);},Bb:function(C){if(C===this.
B1)return;this.B1=C;if(C)this.LH(this.Ky,this.Period);else this.LH(0,0);this.Ap=
this.KH();},KH:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ap=this.KH();if(!this.Period
)this.Bb(false);(A=this.HB)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.EB();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.HB)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.K0={Jn:null,A_:null,Pe:function(
Ae){var A;(A=this.Jn)?A[1].call(A[0],this):null;},Ju:function(C){if(B.aaZ(this.A_
,C))return;if(!!this.A_)B.z$([this,this.Pe],this.A_,0);this.A_=C;if(!!this.A_)B.
zX([this,this.Pe],this.A_,0);},_Init:function(aArg){this.__proto__=E.K0;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Jn)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.A_)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};E.Uz={
UA:0x1,TL:0x2,TW:0x4,Ux:0x8,B1:0x10,Ur:0x20,TX:0x40,T7:0x80,TU:0x100,T2:0x200,TT:
0x400,Ud:0x800,Oa:0x1000,Uy:0x2000,Ua:0x4000,Ub:0x8000,TR:0x10000,T$:0x20000,Un:
0x40000,TS:0x80000,Uc:0x100000,TQ:0x200000};E.CX={Ue:0x1,Uf:0x2,TH:0x4,TI:0x8,TJ:
0x10,TG:0x20};E.TZ={T8:0,Uu:1,TN:2,T3:3,Uh:4,Uv:5,Uw:6,TO:7,TP:8,T5:9,T4:10,Uj:11
,Ui:12};E.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};E.Ug={UE:0x1,UB:0x2,UC:0x4,UD:0x8,T6:0x10,TY:0x20};
E._Init=function(){E.Is.__proto__=E.B7;E.Ej.__proto__=E.B7;E.Bh.__proto__=E.B7;E.
W.__proto__=E.Bh;E.Root.__proto__=E.W;E.KeyEvent.__proto__=E.Event;E.KB.__proto__=
E.Event;E.E4.__proto__=E.Event;E.Ij.__proto__=E.Event;E.Jy.__proto__=E.Bh;E.BK.__proto__=
E.Ej;E.DA.__proto__=E.Bh;E.KJ.__proto__=E.Ir;E.KK.__proto__=E.Ir;};E._ReInit=function(
){};E.DC=function(D){};return E;})();

/* Embedded Wizard */