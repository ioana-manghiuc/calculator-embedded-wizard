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
var AY=[0,0];var AF=[0,0,0,0];var Do="The view does not belong to this group";var
Ei=[340,590];var Ej="No view to restack";var Ek="View is not in this group";var E4=
"No view to remove";var FJ="No view to add";var Jf="View already in a group";var
Jg="Recursive invalidate during active update cycle.";var Jh=[-8,-8,9,9];var Kz=[
0,0,1,1];var Ji="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
E.BZ={AD:null,Ah:null,G:null,AO:null,F:0x103,Eh:0,DK:0x14,IC:function(P,Iu){},Dk:
function(C){if(this.Eh===C)return;this.Eh=C;if(!!this.G){var Gz=this.AD;var B0=0;
while(!!Gz&&(C>Gz.Eh)){Gz=Gz.AD;B0=B0+1;}Gz=this.Ah;while(!!Gz&&(C<Gz.Eh)){Gz=Gz.
Ah;B0=B0-1;}if(!!B0)this.G.P4(this,B0);}},Ig:function(C){var A;var B0=C^this.DK;
if(!B0)return;this.DK=C;if(!!this.AO&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.CL],this);this.G.U([0,0,(A=this.G.M)[2]-A[0],A[3]-A[1]
]);}if(!!this.AO&&((this.F&0x400)===0x400)){this.AO.G4.F=this.AO.G4.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],this);}},GE:function(){var W=this.G;while(
!!W){var DE=(E.Root.isPrototypeOf(W)?W:null);if(!!DE)return DE;W=W.G;}return null;
},C5:function(AL,aClip,aOffset,Ar,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bg:function(Ap){return null;},Ex:function(Ad,Q,CB,El,EG,E6){return null;},IN:
function(Ad){return Ad;},IO:function(P,Cd){return AY;},H$:function(aOffset,It){}
,GetExtent:function(){return AF;},A7:function(Da,Dz){var A;if(((this.F&0x200)===
0x200))Da=Da&~0x400;var ML=(this.F&~Dz)|Da;var Eo=ML^this.F;this.F=ML;if(!!this.
G&&!!(Eo&0x14)){var N1=((this.F&0x14)===0x14);if(N1&&!this.G.Dv)this.G.Hi(this);
if(!N1&&(this.G.Dv===this))this.G.Hi(this.G.M7(this,0x14));}if(!!this.G&&!!(Eo&0x403
))this.G.U(this.GetClipping());if(((!!this.AO&&!!this.G)&&((ML&0x400)===0x400))&&((
Eo&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL
],this);}if(!!this.G&&((Eo&0x400)===0x400)){this.AO=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],this);}if(((((Eo&0x100000)===0x100000)&&((
Dz&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.A7(0x0,0x10);if(((((Eo&0x100000)===0x100000)&&((Da&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.A7(0x10,0x0);if(((((Eo&0x200000
)===0x200000)&&((Dz&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.A7(0x10,0x0);if((((((Eo&0x200000)===0x200000)&&((Da&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.A7(0x0,0x10);},_Init:function(aArg){this.__proto__=E.BZ;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AO)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::View"};E.H8={AU:B.wf,AT:B.
wf,IC:function(P,Iu){var S=B._NewObject(E.Ka,0);this.AO=null;S.BP=this.getExtent(
);S.Af=P;S.G4=Iu;S.Gu=this.AT;S.Gv=this.AU;this.AO=S;},IO:function(P,Cd){var A;var
Aj=this.DK;var S=(E.Ka.isPrototypeOf(A=this.AO)?A:null);var x1=S.BP[0];var y1=S.
BP[1];var x2=S.BP[2];var y2=S.BP[3];var BF=[P[2]-P[0],P[3]-P[1]];var An=x2-x1;var
Ag=y2-y1;var tmp;if(!Cd){var Cw=[(A=S.Af)[2]-A[0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-
S.Af[1];if(Cw[0]!==BF[0]){var A4=((Aj&0x4)===0x4);var A5=((Aj&0x8)===0x8);var CX=((
Aj&0x1)===0x1);if(!A4&&(CX||!A5))x1=((x1*BF[0])/Cw[0])|0;if(!A5&&(CX||!A4)){x2=x2-
S.Af[0];x2=((x2*BF[0])/Cw[0])|0;x2=x2-BF[0];}else x2=x2-S.Af[2];x1=x1+P[0];x2=x2+
P[2];if(!CX){if(A4&&!A5)x2=x1+An;else if(!A4&&A5)x1=x2-An;else{x1=x1+((((x2-x1)-
An)/2)|0);x2=x1+An;}}}else{x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];}if(Cw[1]!==BF[1]
){var A6=((Aj&0x10)===0x10);var A3=((Aj&0x20)===0x20);var CY=((Aj&0x2)===0x2);if(
!A6&&(CY||!A3))y1=((y1*BF[1])/Cw[1])|0;if(!A3&&(CY||!A6)){y2=y2-S.Af[1];y2=((y2*
BF[1])/Cw[1])|0;y2=y2-BF[1];}else y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];if(!CY){if(
A6&&!A3)y2=y1+Ag;else if(!A6&&A3)y1=y2-Ag;else{y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+
Ag;}}}else{y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];}}else{switch(Cd){case 3:{x1=P[0];
x2=x1+An;}break;case 4:{x2=P[2];x1=x2-An;}break;case 1:{y1=P[1];y2=y1+Ag;}break;
case 2:{y2=P[3];y1=y2-Ag;}break;default:;}if((Cd===3)||(Cd===4)){var A6=((Aj&0x10
)===0x10);var A3=((Aj&0x20)===0x20);var CY=((Aj&0x2)===0x2);if(CY){y1=P[1];y2=P[
3];}else if(A6&&!A3){y1=P[1];y2=y1+Ag;}else if(A3&&!A6){y2=P[3];y1=y2-Ag;}else{y1=
P[1]+((((P[3]-P[1])-Ag)/2)|0);y2=y1+Ag;}}if((Cd===1)||(Cd===2)){var A4=((Aj&0x4)===
0x4);var A5=((Aj&0x8)===0x8);var CX=((Aj&0x1)===0x1);if(CX){x1=P[0];x2=P[2];}else
if(A4&&!A5){x1=P[0];x2=x1+An;}else if(A5&&!A4){x2=P[2];x1=x2-An;}else{x1=P[0]+((((
P[2]-P[0])-An)/2)|0);x2=x1+An;}}}S.isEmpty=(x1>=x2)||(y1>=y2);An=x2-x1;Ag=y2-y1;
if(S.Gv[0]<S.Gu[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(S.Gv[1]<S.Gu[1]){tmp=y1;y1=y2-1;
y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){
this.AT=[x1,y1];this.AU=[x2,y2];}else{this.EC([x1,y1]);this.Ef([x2,y2]);this.AO=
S;}return[An,Ag];},H$:function(aOffset,It){if(It){this.AT=B.abf(this.AT,aOffset);
this.AU=B.abf(this.AU,aOffset);}else{this.EC(B.abf(this.AT,aOffset));this.Ef(B.abf(
this.AU,aOffset));}},GetExtent:function(){if(!!this.AO&&this.AO.isEmpty)return AF;
return this.getExtent();},getExtent:function(){var x1=this.AT[0];var y1=this.AT[
1];var x2=this.AU[0];var y2=this.AU[1];var An=x2-x1;var Ag=y2-y1;var tmp;if(An<0
)An=-An;if(Ag<0)Ag=-Ag;if(An>=Ag){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(Ag>=An){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},Ef:function(C){var A;if(B.aaX(C,this.
AU))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());this.AO=
null;this.AU=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((
!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],this);}},EC:function(C){var
A;if(B.aaX(C,this.AT))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));this.AO=null;this.AT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],this);}},_Init:function(
aArg){E.BZ._Init.call(this,aArg);this.__proto__=E.H8;},_className:"Core::LineView"
};E.Eg={BV:B.wf,Cb:B.wf,AU:B.wf,AT:B.wf,IC:function(P,Iu){var S=B._NewObject(E.Kb
,0);this.AO=null;S.BP=this.GetExtent();S.Af=P;S.G4=Iu;S.Gu=this.AT;S.Gv=this.AU;
S.JM=this.Cb;S.JN=this.BV;this.AO=S;},IO:function(P,Cd){var A;var Aj=this.DK;var
S=(E.Kb.isPrototypeOf(A=this.AO)?A:null);var x1=S.BP[0];var y1=S.BP[1];var x2=S.
BP[2];var y2=S.BP[3];var BF=[P[2]-P[0],P[3]-P[1]];var An=x2-x1;var Ag=y2-y1;if(!
Cd){var Cw=[(A=S.Af)[2]-A[0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-S.Af[1];if(Cw[0]!==BF[
0]){var A4=((Aj&0x4)===0x4);var A5=((Aj&0x8)===0x8);var CX=((Aj&0x1)===0x1);if(!
A4&&(CX||!A5))x1=((x1*BF[0])/Cw[0])|0;if(!A5&&(CX||!A4)){x2=x2-S.Af[0];x2=((x2*BF[
0])/Cw[0])|0;x2=x2-BF[0];}else x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];if(!CX){if(A4&&
!A5)x2=x1+An;else if(!A4&&A5)x1=x2-An;else{x1=x1+((((x2-x1)-An)/2)|0);x2=x1+An;}
}}else{x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];}if(Cw[1]!==BF[1]){var A6=((Aj&0x10)===
0x10);var A3=((Aj&0x20)===0x20);var CY=((Aj&0x2)===0x2);if(!A6&&(CY||!A3))y1=((y1
*BF[1])/Cw[1])|0;if(!A3&&(CY||!A6)){y2=y2-S.Af[1];y2=((y2*BF[1])/Cw[1])|0;y2=y2-
BF[1];}else y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];if(!CY){if(A6&&!A3)y2=y1+Ag;else
if(!A6&&A3)y1=y2-Ag;else{y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+Ag;}}}else{y2=y2-S.Af[
3];y1=y1+P[1];y2=y2+P[3];}}else{switch(Cd){case 3:{x1=P[0];x2=x1+An;}break;case 4:{
x2=P[2];x1=x2-An;}break;case 1:{y1=P[1];y2=y1+Ag;}break;case 2:{y2=P[3];y1=y2-Ag;
}break;default:;}if((Cd===3)||(Cd===4)){var A6=((Aj&0x10)===0x10);var A3=((Aj&0x20
)===0x20);var CY=((Aj&0x2)===0x2);if(CY){y1=P[1];y2=P[3];}else if(A6&&!A3){y1=P[
1];y2=y1+Ag;}else if(A3&&!A6){y2=P[3];y1=y2-Ag;}else{y1=P[1]+((((P[3]-P[1])-Ag)/
2)|0);y2=y1+Ag;}}if((Cd===1)||(Cd===2)){var A4=((Aj&0x4)===0x4);var A5=((Aj&0x8)===
0x8);var CX=((Aj&0x1)===0x1);if(CX){x1=P[0];x2=P[2];}else if(A4&&!A5){x1=P[0];x2=
x1+An;}else if(A5&&!A4){x2=P[2];x1=x2-An;}else{x1=P[0]+((((P[2]-P[0])-An)/2)|0);
x2=x1+An;}}}S.isEmpty=(x1>=x2)||(y1>=y2);An=(x2-x1)-1;Ag=(y2-y1)-1;var FV=S.BP[0
];var FW=S.BP[1];var Fa=(S.BP[2]-FV)-1;var E$=(S.BP[3]-FW)-1;if(!Fa)Fa=1;if(!E$)
E$=1;if(((this.F&0x100)===0x100)){this.AT=[x1+((((S.Gu[0]-FV)*An)/Fa)|0),y1+((((
S.Gu[1]-FW)*Ag)/E$)|0)];this.AU=[x1+((((S.Gv[0]-FV)*An)/Fa)|0),y1+((((S.Gv[1]-FW
)*Ag)/E$)|0)];this.Cb=[x1+((((S.JM[0]-FV)*An)/Fa)|0),y1+((((S.JM[1]-FW)*Ag)/E$)|
0)];this.BV=[x1+((((S.JN[0]-FV)*An)/Fa)|0),y1+((((S.JN[1]-FW)*Ag)/E$)|0)];}else{
this.EC([x1+((((S.Gu[0]-FV)*An)/Fa)|0),y1+((((S.Gu[1]-FW)*Ag)/E$)|0)]);this.Ef([
x1+((((S.Gv[0]-FV)*An)/Fa)|0),y1+((((S.Gv[1]-FW)*Ag)/E$)|0)]);this.GK([x1+((((S.
JM[0]-FV)*An)/Fa)|0),y1+((((S.JM[1]-FW)*Ag)/E$)|0)]);this.Hk([x1+((((S.JN[0]-FV)
*An)/Fa)|0),y1+((((S.JN[1]-FW)*Ag)/E$)|0)]);this.AO=S;}return[An+1,Ag+1];},H$:function(
aOffset,It){if(It){this.AT=B.abf(this.AT,aOffset);this.AU=B.abf(this.AU,aOffset);
this.Cb=B.abf(this.Cb,aOffset);this.BV=B.abf(this.BV,aOffset);}else{this.EC(B.abf(
this.AT,aOffset));this.Ef(B.abf(this.AU,aOffset));this.GK(B.abf(this.Cb,aOffset)
);this.Hk(B.abf(this.BV,aOffset));}},GetExtent:function(){if(!!this.AO&&this.AO.
isEmpty)return AF;var x1=this.AT[0];var y1=this.AT[1];var x2=this.Cb[0];var y2=this.
Cb[1];if((((this.BV[0]!==x1)||(this.AU[1]!==y1))||(this.AU[0]!==x2))||(this.BV[1
]!==y2)){if(this.AU[0]<x1)x1=this.AU[0];if(this.Cb[0]<x1)x1=this.Cb[0];if(this.BV[
0]<x1)x1=this.BV[0];if(this.AU[1]<y1)y1=this.AU[1];if(this.Cb[1]<y1)y1=this.Cb[1
];if(this.BV[1]<y1)y1=this.BV[1];if(this.AT[0]>x2)x2=this.AT[0];if(this.AU[0]>x2
)x2=this.AU[0];if(this.BV[0]>x2)x2=this.BV[0];if(this.AT[1]>y2)y2=this.AT[1];if(
this.AU[1]>y2)y2=this.AU[1];if(this.BV[1]>y2)y2=this.BV[1];}else{var tmp;if(x2<x1
){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];}
,Hk:function(C){var A;if(B.aaX(C,this.BV))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.U(this.GetClipping());this.AO=null;this.BV=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CL],this);}},GK:function(C){var A;if(B.aaX(C,this.Cb))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.GetClipping());this.AO=null;this.Cb=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CL],this);}},Ef:function(C){var A;if(B.aaX(C,this.AU))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());this.AO=null;
this.AU=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],this);}},EC:function(C){var A;if(B.
aaX(C,this.AT))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));this.AO=null;this.AT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],this);}},LH:function(
Cp){var A_=B.abi(4,B.wf,null);var H=0;var Bc=3;var MC=false;var MD=false;A_.Set(
0,this.AT);A_.Set(1,this.AU);A_.Set(2,this.Cb);A_.Set(3,this.BV);while(H<4){var OM=
A_.Get(H)[0];var Lc=A_.Get(H)[1];var SD=A_.Get(Bc)[0];var MX=A_.Get(Bc)[1];if(((
Lc>Cp[1])!==(MX>Cp[1]))||((Lc<Cp[1])!==(MX<Cp[1]))){var D9=((((SD-OM)*(Cp[1]-Lc)
)/(MX-Lc))|0)+OM;if(Cp[0]>D9)MC=!MC;if(Cp[0]<D9)MD=!MD;}Bc=H;H=H+1;}return MC||MD;
},O_:function(){return((((this.AT[0]===this.BV[0])&&(this.AU[0]===this.Cb[0]))&&(
this.AT[1]===this.AU[1]))&&(this.Cb[1]===this.BV[1]))||((((this.AT[0]===this.AU[
0])&&(this.Cb[0]===this.BV[0]))&&(this.AT[1]===this.BV[1]))&&(this.AU[1]===this.
Cb[1]));},_Init:function(aArg){E.BZ._Init.call(this,aArg);this.__proto__=E.Eg;},
_className:"Core::QuadView"};E.Bb={M:B.wg,IC:function(P,Iu){var S=B._NewObject(E.
H7,0);S.BP=this.M;S.Af=P;S.G4=Iu;this.AO=S;},IO:function(P,Cd){var A;var Aj=this.
DK;var S=this.AO;var x1=S.BP[0];var y1=S.BP[1];var x2=S.BP[2];var y2=S.BP[3];var
BF=[P[2]-P[0],P[3]-P[1]];var An=x2-x1;var Ag=y2-y1;if(!Cd){var Cw=[(A=S.Af)[2]-A[
0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-S.Af[1];if(Cw[0]!==BF[0]){var A4=((Aj&0x4)===0x4
);var A5=((Aj&0x8)===0x8);var CX=((Aj&0x1)===0x1);if(!A4&&(CX||!A5))x1=((x1*BF[0
])/Cw[0])|0;if(!A5&&(CX||!A4)){x2=x2-S.Af[0];x2=((x2*BF[0])/Cw[0])|0;x2=x2-BF[0];
}else x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];if(!CX){if(A4&&!A5)x2=x1+An;else if(!A4&&
A5)x1=x2-An;else{x1=x1+((((x2-x1)-An)/2)|0);x2=x1+An;}}}else{x2=x2-S.Af[2];x1=x1+
P[0];x2=x2+P[2];}if(Cw[1]!==BF[1]){var A6=((Aj&0x10)===0x10);var A3=((Aj&0x20)===
0x20);var CY=((Aj&0x2)===0x2);if(!A6&&(CY||!A3))y1=((y1*BF[1])/Cw[1])|0;if(!A3&&(
CY||!A6)){y2=y2-S.Af[1];y2=((y2*BF[1])/Cw[1])|0;y2=y2-BF[1];}else y2=y2-S.Af[3];
y1=y1+P[1];y2=y2+P[3];if(!CY){if(A6&&!A3)y2=y1+Ag;else if(!A6&&A3)y1=y2-Ag;else{
y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+Ag;}}}else{y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];
}}else{switch(Cd){case 3:{x1=P[0];x2=x1+An;}break;case 4:{x2=P[2];x1=x2-An;}break;
case 1:{y1=P[1];y2=y1+Ag;}break;case 2:{y2=P[3];y1=y2-Ag;}break;default:;}if((Cd===
3)||(Cd===4)){var A6=((Aj&0x10)===0x10);var A3=((Aj&0x20)===0x20);var CY=((Aj&0x2
)===0x2);if(CY){y1=P[1];y2=P[3];}else if(A6&&!A3){y1=P[1];y2=y1+Ag;}else if(A3&&
!A6){y2=P[3];y1=y2-Ag;}else{y1=P[1]+((((P[3]-P[1])-Ag)/2)|0);y2=y1+Ag;}}if((Cd===
1)||(Cd===2)){var A4=((Aj&0x4)===0x4);var A5=((Aj&0x8)===0x8);var CX=((Aj&0x1)===
0x1);if(CX){x1=P[0];x2=P[2];}else if(A4&&!A5){x1=P[0];x2=x1+An;}else if(A5&&!A4){
x2=P[2];x1=x2-An;}else{x1=P[0]+((((P[2]-P[0])-An)/2)|0);x2=x1+An;}}}S.isEmpty=(x1>=
x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.O([x1,y1
,x2,y2]);this.AO=S;}return[x2-x1,y2-y1];},H$:function(aOffset,It){if(It)this.M=B.
abh(this.M,aOffset);else this.O(B.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},O:function(C){var A;if(B.aaY(C,this.M))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.U(this.GetClipping());this.AO=null;this.M=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CL],this);}},_Init:function(aArg){E.BZ._Init.call(this,aArg);this.__proto__=
E.Bb;},_className:"Core::RectView"};E.Z={BQ:null,Ct:null,KX:null,AV:null,Dv:null
,Dl:255,Jx:0,JA:0,Jz:0,Jy:0,Bk:function(aArg){this.Dw();},C5:function(AL,aClip,aOffset
,Ar,aBlend){var A;Ar=((Ar+1)*this.Dl)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);if(
!this.AV||(AL.Fc===this))this.NX(AL,aClip,B.abf(aOffset,this.M.slice(0,2)),Ar,aBlend
);else{var As=255|(255<<8)|(255<<16)|((Ar&0xFF)<<24);this.AV.Update();AL.M3(aClip
,this.AV,0,B.abh(this.M,aOffset),AY,As,As,As,As,aBlend);}},GetClipping:function(
){var A;var I=this.M;if(!!this.AV)return I;I=[].concat(I[0]-this.Jy,I.slice(1,4)
);I=B.abP(I,I[1]-this.JA);I=B.abN(I,I[2]+this.Jz);I=[].concat(I.slice(0,3),I[3]+
this.Jx);if(((this.F&0x80000)===0x80000)){var HS=AF;var J;for(J=this.BQ;!!J;J=J.
AD)if(((J.F&0x1)===0x1))HS=B.wC(HS,J.GetClipping());I=B.wC(I,B.abh(HS,this.M.slice(
0,2)));}return I;},Ex:function(Ad,Q,CB,El,EG,E6){var A;var J=this.Ct;var HC=null;
var N=AF;var Dd=null;if(((A=B.lb(Ad,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ad=B.abg(Ad,this.M.slice(0,2));if(!!EG){J=EG;while(!!J&&(J.G!==this))J=J.G;}while(
!!J){if(((J.F&0x400)===0x400)&&!Dd){Dd=J.Ah;while(!!Dd&&!((Dd.F&0x200)===0x200))
Dd=Dd.Ah;if(!!Dd)N=B.lb(Ad,Dd.GetExtent());else N=AF;}if(Dd===J){Dd=null;N=AF;}if((
!!El&&!!(E.Z.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var BP=J.GetExtent();var KR=El;var Hy=null;if(KR===J)KR=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(BP,N))[0]>=A[2])||(A[1]>=A[3])))Hy=
J.Ex(N,Q,CB,KR,EG,E6);}else if(!(((A=B.lb(BP,Ad))[0]>=A[2])||(A[1]>=A[3]))||(El===
J))Hy=J.Ex(Ad,Q,CB,KR,EG,E6);J=J.Ah;if(!!Hy){if(!HC||((Hy.IR<HC.IR)&&(Hy.IR>=0))
)HC=Hy;if(!Hy.IR)J=null;}}else J=J.Ah;EG=null;}return HC;},IN:function(Ad){var A;
var DU;var J=this.BQ;var Hw=AF;var JK=true;var result=(Ad=DU=B.abg(Ad,this.M.slice(
0,2)),DU);while(!!J){if(((J.F&0x200)===0x200)){var IE=(E.C9.isPrototypeOf(J)?J:null
);Hw=B.lb(Ad,IE.M);JK=((IE.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(JK){var N=B.lb(J.GetClipping(),Hw);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=
B.wC(result,J.IN(N));}}else{var N=B.lb(J.GetClipping(),Ad);if(!((N[0]>=N[2])||(N[
1]>=N[3])))result=B.wC(result,J.IN(N));}}J=J.AD;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},A7:function(Da,Dz){var A;var K0=this.F;if(((!!this.G&&!!!this.
AV)&&((this.F&0x80001)===0x80001))&&((Dz&0x80000)===0x80000))this.G.U(this.GetClipping(
));E.Bb.A7.call(this,Da,Dz);if((((!!this.G&&!!!this.AV)&&((this.F&0x1)===0x1))&&((
Da&0x80000)===0x80000))&&!((K0&0x80000)===0x80000))this.G.U(this.GetClipping());
var Eo=this.F^K0;if(!!this.Dv&&((Eo&0x40)===0x40)){if(((this.F&0x40)===0x40))this.
Dv.A7(0x40,0x0);else this.Dv.A7(0x0,0x40);}if(((Eo&0x10)===0x10)){var J;for(J=this.
BQ;!!J;J=J.AD)if((((J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000
)===0x10000)||(null===J)))J.A7(Da&0x10,Dz&0x10);}if(!!Eo){this.F=this.F|0x8000;B.
pe([this,this.Lb],this);}},O:function(C){var A;if(B.aaY(C,this.M))return;var G3=[(
A=this.M)[2]-A[0],A[3]-A[1]];var KZ=[C[2]-C[0],C[3]-C[1]];var HQ=!B.aaX(G3,KZ);if(
HQ&&!!this.AV){this.AV.I6(KZ);B.we(this,0);B.we(this.AV,0);}E.Bb.O.call(this,C);
if((HQ&&(G3[0]>0))&&(G3[1]>0)){var Af=[].concat(AY,G3);var J=this.BQ;while(!!J){
if((!J.AO&&(J.DK!==0x14))&&!((J.F&0x400)===0x400))J.IC(Af,null);J=J.AD;}}if(HQ){
this.F=this.F|0x5000;B.pe([this,this.Lb],this);}},OC:function(Ap){var Oc=(E.KeyEvent.
isPrototypeOf(Ap)?Ap:null);var Ep=this.KX;if(!Oc)return null;while(!!Ep&&(!Ep.Ck||
!Ep.Bg(Oc)))Ep=Ep.AD;return Ep;},Sz:function(Am){if(!!this.AV){this.AV.Fc=this;var
N=B.abg(this.IN(B.abh(this.AV.DJ,this.M.slice(0,2))),this.M.slice(0,2));this.AV.
J7(N,N,0x00000000,0x00000000,0x00000000,0x00000000,false);this.NX(this.AV,N,AY,255
,true);this.AV.Fc=null;}},NX:function(AL,aClip,aOffset,Ar,aBlend){var A;var J=this.
BQ;var Hw=AF;var JK=true;this.OW(AL,aClip,aOffset,Ar,aBlend);while(!!J){if(((J.F&
0x200)===0x200)){var IE=(E.C9.isPrototypeOf(J)?J:null);JK=((IE.F&0x1)===0x1);Hw=
aClip;if(!((IE.F&0x80000)===0x80000))Hw=B.lb(Hw,B.abh(IE.M,aOffset));}if(((J.F&0x1
)===0x1)){if(((J.F&0x400)===0x400)){if(JK){var N=B.lb(B.abh(J.GetClipping(),aOffset
),Hw);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.C5(AL,N,aOffset,Ar,aBlend);}}else{var N=
B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.C5(
AL,N,aOffset,Ar,aBlend);}}J=J.AD;}this.OZ(AL,aClip,aOffset,Ar,aBlend);},Sk:function(
){var A;var MA=((this.F&0x1000)===0x1000);var FZ=[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]];var Fb=false;var IA=AF;var My=AF;var J=this.Ct;var Dd=null;while(!!J){if(((J.
F&0x800)===0x800)){Fb=true;J.F=J.F&~0x800;}if(Fb&&((J.F&0x200)===0x200))Fb=false;
J=J.Ah;}Fb=false;J=this.BQ;if(MA){this.F=this.F&~0x1000;MA=!((FZ[0]>=FZ[2])||(FZ[
1]>=FZ[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400)){if(!!J.AO&&(
J.AO.G4!==Dd))J.AO=null;if((!J.AO&&Fb)&&(J.DK!==0x14))J.IC(My,Dd);}if(!!J.AO){if(
MA&&!((J.F&0x400)===0x400))J.IO(FZ,0);if(Fb&&((J.F&0x400)===0x400))J.IO(My,0);}if(((
J.F&0x200)===0x200)){Fb=((J.F&0x1000)===0x1000);Dd=(E.C9.isPrototypeOf(J)?J:null
);if(Fb){J.F=J.F&~0x1000;IA=Dd.M;My=IA;Fb=!((IA[0]>=IA[2])||(IA[1]>=IA[3]));}if(
Fb)this.U(Dd.M);}J=J.AD;}this.F=this.F&~0x2000;this.Nv([FZ[2]-FZ[0],FZ[3]-FZ[1]]
);},CL:function(Am){B.pe([this,this.Lb],this);},Lb:function(Am){var A;var SA=((this.
F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.Sk(
);}if(((this.F&0x8000)===0x8000)||SA){this.F=this.F&~0x8000;this.Jc(this.F);}},Hi:
function(C){var A;if(!!C&&(C.G!==this))throw new Error(Do);if(!!C&&!((C.F&0x14)===
0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Dv)return;if(!
!this.Dv)this.Dv.A7(0x0,0x60);this.Dv=C;if(!!C){if(((this.F&0x40)===0x40))C.A7(0x60
,0x0);else C.A7(0x20,0x0);}},Ki:function(C){var A;if(!!this.AV===C)return;if(!C){
this.AV.Kg=null;this.AV.I6(AY);this.AV=null;}if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.GetClipping());if(C){this.AV=B._NewObject(B.Graphics.Canvas,0);this.AV.
I6([(A=this.M)[2]-A[0],A[3]-A[1]]);this.AV.Kg=[this,this.Sz];}B.we(this,0);},Bx:
function(C){if(C)this.A7(0x100000,0x0);else this.A7(0x0,0x100000);},Hj:function(
C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dl)return;this.Dl=C;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.GetClipping());},RE:function(SC){this.Hj(SC);},
AM:function(C){if(C)this.A7(0x1,0x0);else this.A7(0x0,0x1);},ExtendClipping:function(
Hq,Hr,Hs,Hp){var A;var Jq=this.M;var Db=Jq;if(Hq<0)Hq=0;if(Hq>255)Hq=255;if(Hr<0
)Hr=0;if(Hr>255)Hr=255;if(Hs<0)Hs=0;if(Hs>255)Hs=255;if(Hp<0)Hp=0;if(Hp>255)Hp=255;
Db=[].concat(Db[0]-(Math.max(Hq,this.Jy)&0xFF),Db.slice(1,4));Db=B.abN(Db,Db[2]+(
Math.max(Hr,this.Jz)&0xFF));Db=B.abP(Db,Db[1]-(Math.max(Hs,this.JA)&0xFF));Db=[].
concat(Db.slice(0,3),Db[3]+(Math.max(Hp,this.Jx)&0xFF));if(Hq!==this.Jy){if(((!!
this.G&&((this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000)){var I=
Db;I=B.abN(I,Jq[0]);this.G.U(I);}this.Jy=Hq&0xFF;}if(Hr!==this.Jz){if(((!!this.G&&((
this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000)){var I=Db;I=[].concat(
Jq[2],I.slice(1,4));this.G.U(I);}this.Jz=Hr&0xFF;}if(Hs!==this.JA){if(((!!this.G&&((
this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000)){var I=Db;I=[].concat(
I.slice(0,3),Jq[1]);this.G.U(I);}this.JA=Hs&0xFF;}if(Hp!==this.Jx){if(((!!this.G&&((
this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000)){var I=Db;I=B.abP(
I,Jq[3]);this.G.U(I);}this.Jx=Hp&0xFF;}},OZ:function(AL,aClip,aOffset,Ar,aBlend){
},OW:function(AL,aClip,aOffset,Ar,aBlend){},GetMaximalSize:function(){return Ei;
},GetMinimalSize:function(){return AY;},LU:function(){var A;if(((this.F&0x40)===
0x40))return;if(((this.F&0x80)===0x80))return;if(((this.F&0x10000)===0x10000)){if(
!!this.G)this.G.LU();return;}if(!!this.G&&(this.G.Dv!==this))this.G.Hi(this);if(
!!this.G)this.G.LU();},O$:function(FK){var A;return(A=FK)&&((this.F&A)===A);},Pg:
function(Cp){var tmp=this;while(!!tmp){Cp=B.abe(Cp,tmp.M.slice(0,2));tmp=tmp.G;}
return Cp;},DispatchEvent:function(Ap){var A;var J=this.Dv;var W=(E.Z.isPrototypeOf(
J)?J:null);var Bs=null;if(!!J&&((((J.F&0x10000)===0x10000)||((J.F&0x40000)===0x40000
))||((J.F&0x20000)===0x20000))){J=null;W=null;}if(!!W)Bs=W.DispatchEvent(Ap);else
if(!!J)Bs=J.Bg(Ap);if(!Bs)Bs=this.Bg(Ap);if(!Bs)Bs=this.OC(Ap);return Bs;},BroadcastEventAtPosition:
function(Ap,NO,aFilter){var A;var J=this.Ct;var Bs=null;while(!!J&&!Bs){if((!aFilter||((
A=aFilter)&&((J.F&A)===A)))&&B.wa(J.GetExtent(),NO)){var W=(E.Z.isPrototypeOf(J)?
J:null);if(!!W)Bs=W.BroadcastEventAtPosition(Ap,B.abe(NO,W.M.slice(0,2)),aFilter
);else Bs=J.Bg(Ap);}J=J.Ah;}if(!Bs)Bs=this.Bg(Ap);return Bs;},BroadcastEvent:function(
Ap,aFilter){var A;var J=this.Ct;var Bs=null;while(!!J&&!Bs){if(!aFilter||((A=aFilter
)&&((J.F&A)===A))){var W=(E.Z.isPrototypeOf(J)?J:null);if(!!W)Bs=W.BroadcastEvent(
Ap,aFilter);else Bs=J.Bg(Ap);}J=J.Ah;}if(!Bs)Bs=this.Bg(Ap);if(!Bs)Bs=this.OC(Ap
);return Bs;},Nv:function(aSize){},Jc:function(FK){},Dw:function(){this.F=this.F|
0x8000;B.pe([this,this.Lb],this);},U:function(Ad){var A;var W=this;while(!!W&&!((
Ad[0]>=Ad[2])||(Ad[1]>=Ad[3]))){var Iv=W.AV;if(!W.G&&(W!==this)){W.U(Ad);return;
}if(!!Iv){var R4=Iv.DJ;Iv.DJ=B.wC(Iv.DJ,Ad);if(!B.aaY(R4,Iv.DJ)){B.we(W,0);B.we(
Iv,0);}}if(!((W.F&0x1)===0x1))return;var I=W.M;Ad=B.abh(Ad,I.slice(0,2));if(!!W.
AV||!((W.F&0x80000)===0x80000)){if(!!!W.AV){I=[].concat(I[0]-W.Jy,I.slice(1,4));
I=B.abP(I,I[1]-W.JA);I=B.abN(I,I[2]+W.Jz);I=[].concat(I.slice(0,3),I[3]+W.Jx);}Ad=
B.lb(Ad,I);}W=W.G;}},M7:function(L,aFilter){var A;if(!L||(L.G!==this))return null;
var G2=L.AD;var G6=L.Ah;var JH=0x10000;if(((aFilter&0x10000)===0x10000))JH=0x0;while(
!!G2||!!G6){if((!!G2&&(!aFilter||((A=aFilter)&&((G2.F&A)===A))))&&(!JH||!((A=JH)&&((
G2.F&A)===A))))return G2;if((!!G6&&(!aFilter||((A=aFilter)&&((G6.F&A)===A))))&&(
!JH||!((A=JH)&&((G6.F&A)===A))))return G6;if(!!G2)G2=G2.AD;if(!!G6)G6=G6.Ah;}return null;
},P4:function(L,DW){var A;if(!L)throw new Error(Ej);if(L.G!==this)throw new Error(
Ek);var FS=L;var BB=L;var HU=L.Eh;while(((DW>0)&&!!FS.AD)&&(FS.AD.Eh<=HU)){FS=FS.
AD;DW=DW-1;}while(((DW<0)&&!!BB.Ah)&&(BB.Ah.Eh>=HU)){BB=BB.Ah;DW=DW+1;}if((FS===
L)&&(BB===L))return;if(((L.F&0x401)===0x401)){if(!!L.Ah&&!!L.AO)L.Ah.F=L.Ah.F|0x800;
L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CL],this);}if(((L.F&0x200)===
0x200)){if(!!L.Ah)L.Ah.F=L.Ah.F|0x800;L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.CL],this);}if(!!L.Ah)L.Ah.AD=L.AD;if(!!L.AD)L.AD.Ah=L.Ah;if(this.BQ===L)this.
BQ=L.AD;if(this.Ct===L)this.Ct=L.Ah;if(FS!==L){L.AD=FS.AD;L.Ah=FS;FS.AD=L;if(!!L.
AD)L.AD.Ah=L;}if(BB!==L){L.AD=BB;L.Ah=BB.Ah;BB.Ah=L;if(!!L.Ah)L.Ah.AD=L;}if(!L.AD
)this.Ct=L;if(!L.Ah)this.BQ=L;if(((L.F&0x1)===0x1))this.U(L.GetClipping());},GL:
function(L){var A;if(!L)throw new Error(E4);if(L.G!==this)throw new Error(Ek);if((((
L.F&0x401)===0x401)&&!!L.Ah)&&!!L.AO){L.Ah.F=L.Ah.F|0x800;this.F=this.F|0x4000;B.
pe([this,this.CL],this);}if(((L.F&0x200)===0x200)){if(!!L.Ah)L.Ah.F=L.Ah.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CL],this);}L.AO=null;if(this.Dv===L)this.Hi(
this.M7(L,0x14));if(!!L.Ah)L.Ah.AD=L.AD;if(!!L.AD)L.AD.Ah=L.Ah;if(this.BQ===L)this.
BQ=L.AD;if(this.Ct===L)this.Ct=L.Ah;L.G=null;L.AD=null;L.Ah=null;if((!((L.F&0x10
)===0x10)&&((L.F&0x100000)===0x100000))&&!((this.F&0x80)===0x80))L.A7(0x10,0x0);
if(((L.F&0x1)===0x1))this.U(L.GetClipping());},T:function(L,DW){var A;if(!L)throw new
Error(FJ);if(!!L.G)throw new Error(Jf);var BB=null;var HU=L.Eh;if(((DW<0)&&!!this.
Ct)&&(this.Ct.Eh>=HU)){BB=this.Ct;DW=DW+1;}while((((DW<0)&&!!BB)&&!!BB.Ah)&&(BB.
Ah.Eh>=HU)){BB=BB.Ah;DW=DW+1;}if((!BB&&!!this.Ct)&&(this.Ct.Eh>HU))BB=this.Ct;while((
!!BB&&!!BB.Ah)&&(BB.Ah.Eh>HU))BB=BB.Ah;if(!BB){L.G=this;L.Ah=this.Ct;if(!!this.Ct
)this.Ct.AD=L;if(!this.BQ)this.BQ=L;this.Ct=L;}else{L.G=this;L.Ah=BB.Ah;L.AD=BB;
BB.Ah=L;if(!!L.Ah)L.Ah.AD=L;else this.BQ=L;}if(((L.F&0x1)===0x1))this.U(L.GetClipping(
));if(((L.F&0x80)===0x80)&&(B.aam().O6()===L))L.A7(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((L.F&0x200010)===0x200010))L.A7(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((L.F&0x10)===0x10))&&((L.F&0x100000)===0x100000))L.A7(0x10,0x0);if(((!this.
Dv&&((L.F&0x4)===0x4))&&((L.F&0x10)===0x10))&&!((L.F&0x10000)===0x10000))this.Hi(
L);if(((L.F&0x401)===0x401)){L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
CL],this);}if(((L.F&0x200)===0x200)){L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.CL],this);}},L0:function(){return this.Dl;},_Init:function(aArg){E.Bb._Init.
call(this,aArg);this.__proto__=E.Z;this.F=0x10001F;this.Bk(aArg);},_Mark:function(
D){var A;E.Bb._Mark.call(this,D);if((A=this.BQ)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ct)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.KX)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Dv)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};E.Root={Dg:null
,AN:B.abi(10,null,null),Iw:null,FU:null,JX:0,Bh:0,Cf:B.abi(10,0,null),KP:B.abi(10
,B.wg,null),D0:B.abi(10,0,null),E_:B.abi(10,B.wf,null),Iy:B.abi(10,0,null),FT:B.
abi(10,B.wf,null),DZ:B.abi(10,B.wf,null),Dc:B.abi(10,B.wf,null),EJ:B.abi(10,B.wf
,null),AC:0,KU:0,KT:0,CE:B.abi(4,0,null),BI:B.abi(4,B.wg,null),BH:0,JD:0,ID:0,MB:
true,Bk:function(aArg){if(!!!this.K){var obj=this;B.abD(obj);}},GE:function(){return this;
},C5:function(AL,aClip,aOffset,Ar,aBlend){var fullScreenUpdate=false;fullScreenUpdate=
B.m7;if(!fullScreenUpdate)AL.J7(aClip,B.abh(B.abh(aClip,aOffset),this.M.slice(0,
2)),0x00000000,0x00000000,0x00000000,0x00000000,false);E.Z.C5.call(this,AL,aClip
,aOffset,Ar,aBlend);},A7:function(Da,Dz){var A;E.Z.A7.call(this,Da,Dz);if(!this.
G&&(((Da&0x1)===0x1)||((Dz&0x1)===0x1)))this.U([0,0,(A=this.M)[2]-A[0],A[3]-A[1]
]);if(!this.G&&(((Da&0x2)===0x2)||((Dz&0x2)===0x2)))this.U([0,0,(A=this.M)[2]-A[
0],A[3]-A[1]]);},Hi:function(C){if((C!==null)||!C)E.Z.Hi.call(this,C);},Ki:function(
C){var A;var R3=this.AV;E.Z.Ki.call(this,C);if(((R3!==this.AV)&&!this.G)&&((this.
F&0x1)===0x1))this.U([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},Hj:function(C){var A;
var R6=this.Dl;E.Z.Hj.call(this,C);if(((R6!==this.Dl)&&!this.G)&&((this.F&0x1)===
0x1))this.U([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:function(Ap){if(
!!Ap){Ap.IY=!!this.Bh;if(!!this.Bh)Ap.Ao=this.Bh;}var Bs;Bs=E.Z.DispatchEvent.call(
this,Ap);this.Bh=0;return Bs;},BroadcastEvent:function(Ap,aFilter){if(!!Ap){Ap.IY=
!!this.Bh;if(!!this.Bh)Ap.Ao=this.Bh;}var Bs=E.Z.BroadcastEvent.call(this,Ap,aFilter
);this.Bh=0;return Bs;},U:function(Ad){var A;if(this.JX>0)throw new Error(Jg);if(
!!this.AV&&!this.G){if(((A=this.AV.DJ)[0]>=A[2])||(A[1]>=A[3])){B.we(this,0);B.we(
this.AV,0);}this.AV.DJ=B.wC(this.AV.DJ,Ad);}var fullScreenUpdate=false;fullScreenUpdate=
B.m7;if(fullScreenUpdate)Ad=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.G){E.Z.
U.call(this,Ad);return;}Ad=B.lb(B.abh(Ad,this.M.slice(0,2)),this.M);if((Ad[0]>=Ad[
2])||(Ad[1]>=Ad[3]))return;var H;for(H=0;H<this.BH;H=H+1)if(!(((A=B.lb(this.BI.Get(
H),Ad))[0]>=A[2])||(A[1]>=A[3]))){this.BI.Set(H,B.wC(this.BI.Get(H),Ad));this.CE.
Set(H,B.aaH(this.BI.Get(H)));return;}if(this.BH<3){this.BI.Set(this.BH,Ad);this.
CE.Set(this.BH,B.aaH(Ad));this.BH=this.BH+1;return;}var Bc;var Df;var JC=0;var JF=
0;var NQ=2147483647;this.BI.Set(this.BH,Ad);this.CE.Set(this.BH,B.aaH(Ad));for(Bc=
0;Bc<=this.BH;Bc=Bc+1)for(Df=Bc+1;Df<=this.BH;Df=Df+1){var K$=B.aaH(B.wC(this.BI.
Get(Bc),this.BI.Get(Df)));var OB=((K$<<8)/(this.CE.Get(Bc)+this.CE.Get(Df)))|0;if(
OB<NQ){NQ=OB;JC=Bc;JF=Df;}}this.BI.Set(JC,B.wC(this.BI.Get(JC),this.BI.Get(JF)));
this.CE.Set(JC,B.aaH(this.BI.Get(JC)));if(JF!==this.BH){this.BI.Set(JF,this.BI.Get(
this.BH));this.CE.Set(JF,this.CE.Get(this.BH));}},RU:function(){var Ch=B._NewObject(
E.H1,0);Ch.IY=!!this.Bh;if(!!this.Bh)Ch.Ao=this.Bh;return Ch;},Hx:function(){var
Ch=B._NewObject(E.ER,0);Ch.IY=!!this.Bh;if(!!this.Bh)Ch.Ao=this.Bh;return Ch;},Ix:
function(){var Ch=B._NewObject(E.J3,0);Ch.IY=!!this.Bh;if(!!this.Bh)Ch.Ao=this.Bh;
return Ch;},RV:function(Am){var H;var HC=false;for(H=0;H<10;H=H+1)if(!!this.AN.Get(
H)){var pos=this.Dc.Get(H);var W=this.AN.Get(H).G;while(!!W&&(W!==this)){pos=B.abe(
pos,W.M.slice(0,2));W=W.G;}if(!W&&(this.AN.Get(H)!==this)){var tmp=this.AN.Get(H
);this.AC=H;this.AN.Set(H,null);tmp.Bg(this.Hx().InitializeUp(H,this.FT.Get(H),this.
E_.Get(H),this.D0.Get(H),this.Cf.Get(H)+1,this.DZ.Get(H),false,this.Dc.Get(H),this.
EJ.Get(H)));this.BroadcastEvent(this.Ix().InitializeUp(H,this.Cf.Get(H)+1,false,
tmp,this.Dc.Get(H)),0x18);}else{this.D0.Set(H,(this.FU.Ao-this.Iy.Get(H))|0);if(
this.D0.Get(H)<10)this.D0.Set(H,10);this.AC=H;this.AN.Get(H).Bg(this.Hx().InitializeHold(
H,pos,this.E_.Get(H),this.D0.Get(H),this.Cf.Get(H)+1,this.DZ.Get(H),this.Dc.Get(
H),this.EJ.Get(H)));HC=true;}}if(!HC)this.FU.Bx(false);},GetFPS:function(){var ticksCount=
0;var N2=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.KU&&(ticksCount>this.
KU))N2=((this.KT*1000)/((ticksCount-this.KU)|0))|0;this.KT=0;this.KU=ticksCount;
return N2;},Update:function(){var A;if(!this.Iw)this.Iw=B._NewObject(B.Graphics.
Canvas,0);this.Iw.I6([(A=this.M)[2]-A[0],A[3]-A[1]]);this.Iw.Update();return this.
UpdateGE20(this.Iw);},UpdateGE20:function(AL){if(!this.BeginUpdate())return AF;var
Fi=this.UpdateCanvas(AL,AY);this.EndUpdate();return Fi;},EndUpdate:function(){if(
this.BH>0){this.KT=this.KT+1;this.BH=0;}},UpdateCanvas:function(AL,aOffset){var A;
var Fi=AF;var RQ=[].concat(aOffset,B.abf(AL.FrameSize,aOffset));var H;var Bc=this.
BH;this.JX=this.JX+1;AL.Fc=this;for(H=0;(H<Bc)&&(H<4);H=H+1)if(this.CE.Get(H)>0){
this.C5(AL,B.abg(this.BI.Get(H),aOffset),[-aOffset[0],-aOffset[1]],255,true);Fi=
B.wC(Fi,B.lb(RQ,this.BI.Get(H)));}else Bc=Bc+1;AL.Fc=null;this.JX=this.JX-1;if(!((
Fi[0]>=Fi[2])||(Fi[1]>=Fi[3])))return B.abg(Fi,aOffset);else return Fi;},GetUpdateRegion:
function(KC){var H;var Bc=this.BH;if(KC<0)return AF;for(H=0;(H<Bc)&&(H<4);H=H+1)
if(!this.CE.Get(H)){Bc=Bc+1;KC=KC+1;}else if(H===KC)return this.BI.Get(H);return AF;
},BeginUpdate:function(){var A;var H;if(!!this.BH&&!B.aaY(this.BI.Get(0),[0,0,(A=
this.M)[2]-A[0],A[3]-A[1]])){var OK=B.abi(3,B.wg,null);var OJ=this.BH;for(H=0;H<
OJ;H++)OK.Set(H,this.BI.Get(H));for(H=0;H<OJ;H++){var OD=B.abh(OK.Get(H),this.M.
slice(0,2));var OE=this.IN(OD);if(!B.aaY(OD,OE))this.U(B.abg(OE,this.M.slice(0,2
)));}}var Bc;var Df;for(Bc=0;Bc<(this.BH-1);Bc++)if(this.CE.Get(Bc)>0)for(Df=Bc+
1;Df<this.BH;Df++)if(this.CE.Get(Df)>0){var K$=B.aaH(B.wC(this.BI.Get(Bc),this.BI.
Get(Df)));if(((K$-this.CE.Get(Bc))-this.CE.Get(Df))<0){this.BI.Set(Bc,B.wC(this.
BI.Get(Bc),this.BI.Get(Df)));this.CE.Set(Bc,K$);this.CE.Set(Df,0);}}for(H=this.BH-
1;H>=0;H--)if(!this.CE.Get(H))this.BH=this.BH-1;return this.BH;},DoesNeedUpdate:
function(){if(this.BH>0)return true;return false;},Initialize:function(aSize){this.
O([].concat(AY,aSize));if(this.MB)this.F=this.F|0x60;else this.F=this.F|0x20;this.
U(this.M);return this;},SetRootFocus:function(Mm){if(Mm===this.MB)return false;this.
MB=Mm;if(!Mm)this.A7(0x0,0x40);else this.A7(0x40,0x0);return true;},SetUserInputTimestamp:
function(RH){this.Bh=RH;},DriveKeyboardHitting:function(BN,Jj,Em){var A;var MR=!
!this.Dg;if(!!this.Dg&&((!Em||(this.JD!==BN))||(this.ID!==Jj))){var Ch=null;var J=(
E.BZ.isPrototypeOf(A=this.Dg)?A:null);var Ep=(E.Eb.isPrototypeOf(A=this.Dg)?A:null
);if(!!this.JD)Ch=B._NewObject(E.KeyEvent,0).Initialize(this.JD,false);if(this.ID
!==0x00)Ch=B._NewObject(E.KeyEvent,0).Initialize2(this.ID,false);if(!!Ep)Ep.Bg(Ch
);else if(!!J)J.Bg(Ch);this.JD=0;this.ID=0x00;this.Dg=null;}if(!!this.Dg){var Ch=
null;var J=(E.BZ.isPrototypeOf(A=this.Dg)?A:null);var Ep=(E.Eb.isPrototypeOf(A=this.
Dg)?A:null);if(!!BN)Ch=B._NewObject(E.KeyEvent,0).Initialize(BN,true);if(this.ID
!==0x00)Ch=B._NewObject(E.KeyEvent,0).Initialize2(Jj,true);if(!!Ep)Ep.Bg(Ch);else
if(!!J)J.Bg(Ch);}if(!this.Dg&&Em){if(!!BN)this.Dg=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize(BN,true));if(Jj!==0x00)this.Dg=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize2(Jj,true));if(!(E.Eb.isPrototypeOf(A=this.Dg)?A:null)&&
!(E.BZ.isPrototypeOf(A=this.Dg)?A:null))this.Dg=null;this.JD=BN;this.ID=Jj;MR=MR||
!!this.Dg;}this.Bh=0;return MR;},DriveCursorMovement:function(BA){return this.DriveMultiTouchMovement(
this.AC,BA);},DriveMultiTouchMovement:function(Q,BA){if((Q<0)||(Q>9)){this.Bh=0;
return false;}var A2=B.abe(BA,this.Dc.Get(Q));this.Dc.Set(Q,BA);if(!this.AN.Get(
Q)||B.aaX(A2,AY)){this.Bh=0;return false;}var pos=BA;var W=this.AN.Get(Q).G;while(
!!W&&(W!==this)){pos=B.abe(pos,W.M.slice(0,2));W=W.G;}if(!W&&(this.AN.Get(Q)!==this
)){var tmp=this.AN.Get(Q);this.AC=Q;this.AN.Set(Q,null);tmp.Bg(this.Hx().InitializeUp(
Q,this.FT.Get(Q),this.E_.Get(Q),this.D0.Get(Q),this.Cf.Get(Q)+1,this.DZ.Get(Q),false
,this.Dc.Get(Q),this.EJ.Get(Q)));this.BroadcastEvent(this.Ix().InitializeUp(Q,this.
Cf.Get(Q)+1,false,tmp,BA),0x18);}else{this.FT.Set(Q,pos);this.AC=Q;this.AN.Get(Q
).Bg(this.RU().Initialize(Q,pos,this.E_.Get(Q),A2,this.D0.Get(Q),this.Cf.Get(Q)+
1,this.DZ.Get(Q),BA,this.EJ.Get(Q)));}this.Bh=0;return true;},DriveCursorHitting:
function(Em,Q,BA){return this.DriveMultiTouchHitting(Em,Q,BA);},DriveMultiTouchHitting:
function(Em,Q,BA){if((Q<0)||(Q>9)){this.Bh=0;return false;}var ticksCount=this.Bh;
if(!ticksCount)ticksCount=((new Date).getTime()-B.v$)|0;var Sq=this.Bh;this.DriveMultiTouchMovement(
Q,BA);BA=this.Dc.Get(Q);this.Bh=Sq;if(Em)this.EJ.Set(Q,BA);if(Em&&!this.AN.Get(Q
)){var BG;var pos=BA;if(B.wa(this.KP.Get(Q),BA)&&((ticksCount-this.Iy.Get(Q))<=250
))this.Cf.Set(Q,this.Cf.Get(Q)+1);else this.Cf.Set(Q,0);this.KP.Set(Q,B.abh(Jh,BA
));this.Iy.Set(Q,ticksCount);BG=this.Ex(B.abh(Jh,BA),Q,this.Cf.Get(Q)+1,null,null
,0x0);if(!!BG){this.BroadcastEvent(this.Ix().InitializeDown(Q,this.Cf.Get(Q)+1,false
,BG.BZ,BA),0x18);this.AN.Set(Q,BG.BZ);this.DZ.Set(Q,BG.Av);}else{this.AN.Set(Q,null
);this.DZ.Set(Q,AY);this.Bh=0;return false;}var W=BG.BZ.G;while(!!W&&(W!==this)){
pos=B.abe(pos,W.M.slice(0,2));W=W.G;}this.E_.Set(Q,pos);this.FT.Set(Q,pos);this.
D0.Set(Q,0);this.FU.Bx(true);this.AC=Q;this.AN.Get(Q).Bg(this.Hx().InitializeDown(
Q,pos,this.Cf.Get(Q)+1,this.DZ.Get(Q),false,BA));this.Bh=0;return true;}if(!Em&&
!!this.AN.Get(Q)){var pos=BA;var W=this.AN.Get(Q).G;while(!!W&&(W!==this)){pos=B.
abe(pos,W.M.slice(0,2));W=W.G;}if(!W)pos=this.FT.Get(Q);this.AC=Q;var tmp=this.AN.
Get(Q);this.AN.Set(Q,null);tmp.Bg(this.Hx().InitializeUp(Q,pos,this.E_.Get(Q),this.
D0.Get(Q),this.Cf.Get(Q)+1,this.DZ.Get(Q),false,BA,this.EJ.Get(Q)));this.BroadcastEvent(
this.Ix().InitializeUp(Q,this.Cf.Get(Q)+1,false,tmp,BA),0x18);this.Bh=0;return true;
}this.Bh=0;return false;},Nm:function(E5,NN,EG,E6){if(E5===this)E5=null;if(!this.
AN.Get(this.AC))return;var BG;BG=this.Ex(B.abh(Jh,this.Dc.Get(this.AC)),this.AC,
1,E5,EG,E6);if(!!BG&&(this.AN.Get(this.AC)!==BG.BZ))this.Ln(BG.BZ,BG.Av);if(!BG&&(
this.AN.Get(this.AC)!==NN))this.Ln(NN,AY);},Ln:function(E5,DV){if(!this.AN.Get(this.
AC)||(this.AN.Get(this.AC)===E5))return;var tmp=this.AN.Get(this.AC);this.AN.Set(
this.AC,null);tmp.Bg(this.Hx().InitializeUp(this.AC,this.FT.Get(this.AC),this.E_.
Get(this.AC),this.D0.Get(this.AC),this.Cf.Get(this.AC)+1,this.DZ.Get(this.AC),true
,this.Dc.Get(this.AC),this.EJ.Get(this.AC)));this.BroadcastEvent(this.Ix().InitializeUp(
this.AC,this.Cf.Get(this.AC)+1,true,tmp,this.Dc.Get(this.AC)),0x18);var pos=this.
Dc.Get(this.AC);var W=null;if(!!E5)W=E5.G;while(!!W&&(W!==this)){pos=B.abe(pos,W.
M.slice(0,2));W=W.G;}if(!W&&(E5!==this)){this.AN.Set(this.AC,null);return;}this.
BroadcastEvent(this.Ix().InitializeDown(this.AC,this.Cf.Get(this.AC)+1,true,E5,this.
Dc.Get(this.AC)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.AN.Set(this.AC,E5);this.DZ.Set(this.AC,DV);this.E_.Set(this.AC,pos);this.FT.
Set(this.AC,pos);this.Cf.Set(this.AC,0);this.D0.Set(this.AC,0);this.Iy.Set(this.
AC,ticksCount);this.EJ.Set(this.AC,this.Dc.Get(this.AC));this.AN.Get(this.AC).Bg(
this.Hx().InitializeDown(this.AC,pos,this.Cf.Get(this.AC)+1,this.DZ.Get(this.AC)
,true,this.EJ.Get(this.AC)));},O6:function(){return null;},_Init:function(aArg){
E.Z._Init.call(this,aArg);E.Timer._Init.call(this.FU={K:this},0);(this.AN=[]).__proto__=
E.Root.AN;(this.Cf=[]).__proto__=E.Root.Cf;(this.KP=[]).__proto__=E.Root.KP;(this.
D0=[]).__proto__=E.Root.D0;(this.E_=[]).__proto__=E.Root.E_;(this.Iy=[]).__proto__=
E.Root.Iy;(this.FT=[]).__proto__=E.Root.FT;(this.DZ=[]).__proto__=E.Root.DZ;(this.
Dc=[]).__proto__=E.Root.Dc;(this.EJ=[]).__proto__=E.Root.EJ;(this.CE=[]).__proto__=
E.Root.CE;(this.BI=[]).__proto__=E.Root.BI;this.__proto__=E.Root;this.F=0x10007F;
this.FU.I9(10);this.FU.Ih=[this,this.RV];this.Bk(aArg);},_Done:function(){this.__proto__=
E.Z;this.FU._Done();E.Z._Done.call(this);},_ReInit:function(){E.Z._ReInit.call(this
);this.FU._ReInit();},_Mark:function(D){var A;E.Z._Mark.call(this,D);if((A=this.
Dg)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.AN,D);if((A=this.Iw)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.FU)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Core::Root"};E.Event={Ao:0,IY:false,Bk:function(aArg){this.Ao=this.J9();},J9:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=E.Event;this.Bk(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={A$:0,AK:0,Down:false,Initialize2:function(BN,Em){this.
A$=0;this.AK=BN;this.Down=Em;if((BN>=0x30)&&(BN<=0x39))this.A$=(10+BN)-48;if((BN>=
0x41)&&(BN<=0x5A))this.A$=(105+BN)-65;if((BN>=0x61)&&(BN<=0x7A))this.A$=(105+BN)-
97;if(BN===0x20)this.A$=131;if(!this.A$)switch(BN){case 0x2B:this.A$=132;break;case
0x2D:this.A$=133;break;case 0x2A:this.A$=134;break;case 0x2F:this.A$=135;break;case
0x3D:this.A$=136;break;case 0x2E:this.A$=137;break;case 0x2C:this.A$=138;break;case
0x3A:this.A$=139;break;case 0x3B:this.A$=140;break;default:;}return this;},Initialize:
function(BN,Em){this.A$=BN;this.Down=Em;this.AK=0x00;var Mr=BN-10;var Mq=BN-105;
if((Mr>=0)&&(Mr<=9))this.AK=(48+Mr)&0xFFFF;if((Mq>=0)&&(Mq<=25))this.AK=(65+Mq)&
0xFFFF;if(BN===131)this.AK=0x20;if(this.AK===0x00)switch(BN){case 132:this.AK=0x2B;
break;case 133:this.AK=0x2D;break;case 134:this.AK=0x2A;break;case 135:this.AK=0x2F;
break;case 136:this.AK=0x3D;break;case 137:this.AK=0x2E;break;case 138:this.AK=0x2C;
break;case 139:this.AK=0x3A;break;case 140:this.AK=0x3B;break;default:;}return this;
},Pc:function(NM){switch(NM){case 141:return((this.AK>=0x41)&&(this.AK<=0x5A))||((
this.AK>=0x61)&&(this.AK<=0x7A));case 142:return(((this.AK>=0x41)&&(this.AK<=0x5A
))||((this.AK>=0x61)&&(this.AK<=0x7A)))||((this.AK>=0x30)&&(this.AK<=0x39));case
143:return(this.AK>=0x30)&&(this.AK<=0x39);case 144:return(((this.AK>=0x41)&&(this.
AK<=0x46))||((this.AK>=0x61)&&(this.AK<=0x66)))||((this.AK>=0x30)&&(this.AK<=0x39
));case 145:return this.AK!==0x00;case 146:return(this.AK===0x00)&&!!this.A$;case
147:return(((this.A$===6)||(this.A$===7))||(this.A$===4))||(this.A$===5);case 148:
return(this.AK!==0x00)||!!this.A$;default:;}return NM===this.A$;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.J3={Kr:null,CM:B.wf,CA:0,Bj:0,Down:false,Di:false,InitializeUp:function(Q,CB
,Ho,Mo,En){this.Down=false;this.Bj=Q;this.CA=CB;this.CM=En;this.Kr=Mo;this.Di=Ho;
return this;},InitializeDown:function(Q,CB,Ho,Mo,En){this.Down=true;this.Bj=Q;this.
CA=CB;this.CM=En;this.Kr=Mo;this.Di=Ho;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.J3;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.Kr)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.ER={IW:B.wf,CM:B.wf,CA:0,B6:0,Cy:B.wf,Bn:B.wf,Bj:0,Down:false,Di:false,InitializeHold:
function(Q,GN,Jl,Jm,CB,DV,En,Jk){this.Down=true;this.Bj=Q;this.Bn=B.abf(GN,DV);this.
Cy=B.abf(Jl,DV);this.B6=Jm;this.CA=CB;this.CM=En;this.IW=Jk;return this;},InitializeUp:
function(Q,GN,Jl,Jm,CB,DV,Ho,En,Jk){this.Down=false;this.Bj=Q;this.Bn=B.abf(GN,DV
);this.Cy=B.abf(Jl,DV);this.B6=Jm;this.CA=CB;this.Di=Ho;this.CM=En;this.IW=Jk;return this;
},InitializeDown:function(Q,GN,CB,DV,Ho,En){this.Down=true;this.Bj=Q;this.Bn=B.abf(
GN,DV);this.Cy=B.abf(GN,DV);this.B6=0;this.CA=CB;this.Di=Ho;this.CM=En;this.IW=En;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.ER;},_className:"Core::CursorEvent"};E.H1={IW:B.wf,CM:B.wf,CA:0,B6:0,Av:B.wf,Cy:
B.wf,Bn:B.wf,Bj:0,Initialize:function(Q,GN,Jl,aOffset,Jm,RG,DV,En,Jk){this.Bj=Q;
this.Bn=B.abf(GN,DV);this.Cy=B.abf(Jl,DV);this.Av=aOffset;this.B6=Jm;this.CA=RG;
this.CM=En;this.IW=Jk;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.H1;},_className:"Core::DragEvent"};E.C9={C5:function(AL,
aClip,aOffset,Ar,aBlend){},GetClipping:function(){var A;var I=E.Bb.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var HS=AF;var J;for(J=this.AD;!!J&&!((J.F&
0x200)===0x200);J=J.AD)if(((J.F&0x1)===0x1))HS=B.wC(HS,J.GetClipping());I=B.wC(I
,HS);}return I;},A7:function(Da,Dz){var A;var K0=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((Dz&0x80000)===0x80000))this.G.U(this.GetClipping());E.Bb.A7.call(
this,Da,Dz);if(((!!this.G&&((this.F&0x1)===0x1))&&((Da&0x80000)===0x80000))&&!((
K0&0x80000)===0x80000))this.G.U(this.GetClipping());},O:function(C){var A;if(B.aaY(
C,this.M))return;var G3=[(A=this.M)[2]-A[0],A[3]-A[1]];var KZ=[C[2]-C[0],C[3]-C[
1]];var HQ=!B.aaX(G3,KZ);var A2=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.aaX(
A2,AY)&&!HQ){var J=this.AD;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400)===
0x400)){var tmp=((J.F&0x100)===0x100);J.H$(A2,tmp);}J=J.AD;}}if((HQ&&(G3[0]>0))&&(
G3[1]>0)){var Af=this.M;var J=this.AD;while(!!J&&!((J.F&0x200)===0x200)){if(((J.
F&0x400)===0x400)){if(!!J.AO&&(J.AO.G4!==this))J.AO=null;if(!J.AO&&(J.DK!==0x14)
)J.IC(Af,this);}J=J.AD;}}E.Bb.O.call(this,C);if(!!this.G&&HQ){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CL],
this);}}},_Init:function(aArg){E.Bb._Init.call(this,aArg);this.__proto__=E.C9;this.
F=0x203;},_className:"Core::Outline"};E.BM={LV:null,L2:null,LW:null,Ec:null,GH:null
,Dj:null,Ac:0,Bj:0,Ao:0,CA:0,B6:0,Av:B.wf,Cy:B.wf,Bn:B.wf,P5:8,Nd:1,Down:false,GF:
false,Di:false,Mw:false,JG:0,C5:function(AL,aClip,aOffset,Ar,aBlend){},Bg:function(
Ap){var A;var R=(E.ER.isPrototypeOf(Ap)?Ap:null);var AQ=(E.H1.isPrototypeOf(Ap)?
Ap:null);var KW=this.GF;var Et;var DB;var JW;var Cu;var Jw;if(!R&&!AQ)return null;
Et=(!!R&&R.Down)&&!R.B6;DB=(!!R&&R.Down)&&(R.B6>0);JW=(!!R&&R.Down)&&(R.B6>this.
JG);Cu=!!R&&!R.Down;Jw=!!AQ;if(Et)this.JG=((A=(R.Di?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if(Et){var HJ=0;var EK;this.Ac=this.Ac|(1<<R.Bj);for(EK=this.Ac&4095;EK>0;EK=
EK>>1)if(!!(EK&1))HJ=HJ+1;if(HJ===1)this.Ac=(this.Ac|16777216)|(4096<<R.Bj);}if(
Cu&&(this.Ac<16777216)){var DE=this.GE();var BG=null;if(!!DE){var MU=(!!this.Ah?
this.Ah:this.G);BG=DE.Ex(B.abh(Kz,R.CM),R.Bj,R.CA,null,MU,0x0);}if(!!BG){var H;for(
H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BG.BZ.Bg(B._NewObject(E.ER,0).InitializeDown(
H,R.Bn,R.CA,AY,true,R.CM));for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BG.BZ.Bg(B._NewObject(
E.ER,0).InitializeUp(H,R.Bn,R.Bn,0,R.CA,AY,false,R.CM,R.CM));}}if(Cu)this.Ac=(this.
Ac&~(1<<R.Bj))|33554432;if(JW&&(this.Ac<16777216))this.Ac=this.Ac|67108864;if(Cu&&
R.Di)this.Ac=this.Ac|67108864;if(Cu&&!(this.Ac&16777215))this.Ac=0;if(DB&&(this.
Ac>=67108864)){var DE=this.GE();if(!!DE)DE.Nm(null,null,this,0x0);}if((DB&&!!(this.
Ac&16777216))&&!!(this.Ac&33554432)){DB=false;Cu=true;}if(!!R&&!(this.Ac&(4096<<
R.Bj)))return this;if(!!AQ&&!(this.Ac&(4096<<AQ.Bj)))return this;if(Cu&&!(this.Ac&
16777216))return this;if(((Et||Jw)||DB)&&((this.Ac<16777216)||(this.Ac>=33554432
)))return this;if(Cu)this.Ac=this.Ac&3758100479;if(Cu&&!(this.Ac&16777215))this.
Ac=0;if(!!R){this.Down=Et||DB;this.GF=this.LH(R.Bn);this.Cy=R.Cy;this.Bn=R.Bn;this.
Av=AY;this.B6=R.B6;this.CA=R.CA;this.Di=R.Di;this.Bj=R.Bj;this.Ao=R.Ao;if(R.Down&&
!R.B6)KW=false;}if(!!AQ){this.Down=true;this.GF=this.LH(AQ.Bn);this.Cy=AQ.Cy;this.
Bn=AQ.Bn;this.Av=AQ.Av;this.B6=AQ.B6;this.CA=AQ.CA;this.Bj=AQ.Bj;this.Di=false;this.
Ao=AQ.Ao;}var Mv=this.Down;if(!!AQ)(A=this.LV)?A[1].call(A[0],this):null;if((!!R&&
this.Down)&&!this.B6)(A=this.Dj)?A[1].call(A[0],this):null;if((!!R&&this.Down)&&(
this.B6>0))(A=this.Ec)?A[1].call(A[0],this):null;if((this.Down&&this.GF)&&!KW){this.
Mw=true;(A=this.LW)?A[1].call(A[0],this):null;}if(this.Mw&&(((Mv&&!this.GF)&&KW)||((
!Mv&&this.GF)&&KW))){this.Mw=false;(A=this.L2)?A[1].call(A[0],this):null;}if(!!R&&
!Mv)(A=this.GH)?A[1].call(A[0],this):null;return this;},Ex:function(Ad,Q,CB,El,EG
,E6){var A;if(!!El&&(El!==this))return null;if((CB<1)||(CB>this.Nd))return null;
if(this.Ac>=33554432)return null;if((this.Ac>=16777216)&&!(this.Ac&(4096<<Q)))return null;
if(this.O_()){var I=B.lb(Ad,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var CQ=B.aaI(Ad);var A2=AY;if(CQ[0]<I[0])A2=[I[0]-CQ[0],A2[1]];if(CQ[0]>=I[2])A2=[(
I[2]-CQ[0])-1,A2[1]];if(CQ[1]<I[1])A2=[A2[0],I[1]-CQ[1]];if(CQ[1]>=I[3])A2=[A2[0
],(I[3]-CQ[1])-1];return B._NewObject(E.IQ,0).Initialize(this,A2);}}else{var A_=
B.abi(9,B.wf,null);var H;A_.Set(0,B.aaI(Ad));A_.Set(1,A_.Get(0));A_.Set(2,A_.Get(
0));A_.Set(3,A_.Get(0));A_.Set(4,A_.Get(0));A_.Set(1,[Ad[0],A_.Get(1)[1]]);A_.Set(
2,[A_.Get(2)[0],Ad[1]]);A_.Set(3,[Ad[2],A_.Get(3)[1]]);A_.Set(4,[A_.Get(4)[0],Ad[
3]]);A_.Set(5,Ad.slice(0,2));A_.Set(6,[Ad[2],Ad[1]]);A_.Set(7,[Ad[0],Ad[3]]);A_.
Set(8,Ad.slice(2,4));for(H=0;H<9;H=H+1)if(this.LH(A_.Get(H)))return B._NewObject(
E.IQ,0).Initialize(this,B.abe(A_.Get(H),A_.Get(0)));}return null;},PM:function(C
){if(C<1)C=1;this.P5=C;},Ng:function(C){if(C<1)C=1;this.Nd=C;},Bx:function(C){if(
C)this.A7(0x100000,0x0);else this.A7(0x0,0x100000);},_Init:function(aArg){E.Eg._Init.
call(this,aArg);this.__proto__=E.BM;this.F=0x10011B;},_Mark:function(D){var A;E.
Eg._Mark.call(this,D);if((A=this.LV)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.L2)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.LW)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ec)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.GH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dj)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};E.Dn={
timer:null,K4:null,IF:null,Ac:0,KF:0,EL:5000,HP:0,KV:B.wf,HB:0,E8:0,AI:0,Ha:0,II:
0,HA:0,E7:0,AH:0,G$:0,G_:0,Cy:B.wf,M5:B.wf,BJ:B.wf,BK:B.wf,Av:B.wf,M9:0.5,Kq:true
,Il:false,D2:false,D3:false,KE:false,JG:0,C5:function(AL,aClip,aOffset,Ar,aBlend
){},Bg:function(Ap){var A;var R=(E.ER.isPrototypeOf(Ap)?Ap:null);var AQ=(E.H1.isPrototypeOf(
Ap)?Ap:null);var BO=(E.J3.isPrototypeOf(Ap)?Ap:null);var Et;var DB;var JW;var Cu;
var Jw;Et=(!!R&&R.Down)&&!R.B6;DB=(!!R&&R.Down)&&(R.B6>0);JW=(!!R&&R.Down)&&(R.B6>
this.JG);Cu=!!R&&!R.Down;Jw=!!AQ;if(Et)this.JG=((A=(R.Di?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(Et){var HJ=0;var EK;this.Ac=this.Ac|(1<<R.Bj);for(EK=this.Ac&4095;EK>0;
EK=EK>>1)if(!!(EK&1))HJ=HJ+1;if(HJ===1)this.Ac=(this.Ac|16777216)|(4096<<R.Bj);}
if(Cu&&(this.Ac<16777216)){var DE=this.GE();var BG=null;if(!!DE){var MU=(!!this.
Ah?this.Ah:this.G);BG=DE.Ex(B.abh(Kz,R.CM),R.Bj,R.CA,null,MU,0x0);}if(!!BG){var H;
for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BG.BZ.Bg(B._NewObject(E.ER,0).InitializeDown(
H,R.Bn,R.CA,AY,true,R.CM));for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BG.BZ.Bg(B._NewObject(
E.ER,0).InitializeUp(H,R.Bn,R.Bn,0,R.CA,AY,false,R.CM,R.CM));}}if(Cu)this.Ac=(this.
Ac&~(1<<R.Bj))|33554432;if(JW&&(this.Ac<16777216))this.Ac=this.Ac|67108864;if(Cu&&
R.Di)this.Ac=this.Ac|67108864;if(Cu&&!(this.Ac&16777215))this.Ac=0;if(DB&&(this.
Ac>=67108864)){var DE=this.GE();if(!!DE)DE.Nm(null,null,this,0x0);}if((DB&&!!(this.
Ac&16777216))&&!!(this.Ac&33554432)){DB=false;Cu=true;}if(!!R&&!(this.Ac&(4096<<
R.Bj)))return this;if(!!AQ&&!(this.Ac&(4096<<AQ.Bj)))return this;if(Cu&&!(this.Ac&
16777216))return this;if(((Et||Jw)||DB)&&((this.Ac<16777216)||(this.Ac>=33554432
)))return this;if(Cu)this.Ac=this.Ac&3758100479;if(Cu&&!(this.Ac&16777215))this.
Ac=0;if(!!BO&&(BO.Kr===this))return null;if((!!BO&&BO.Down)&&(this.KE||!this.Il)
)return null;if((!!BO&&BO.Down)&&!B.wa(this.M,this.G.Pg(BO.CM)))return null;if((
!!BO&&!BO.Down)&&(!this.KE||(this.KF!==BO.Bj)))return null;if((!R&&!AQ)&&!BO)return null;
if(!!R){this.KE=Et||DB;this.KF=R.Bj;this.Cy=R.Cy;}if(!!AQ)this.KF=AQ.Bj;if(!!BO){
this.KE=BO.Down;this.KF=BO.Bj;}if(!!BO&&BO.Down){this.MV();this.AH=(((BO.Ao-this.
G_)*0.001)*this.E7)+this.AH;this.AI=(((BO.Ao-this.II)*0.001)*this.E8)+this.AI;if(
this.D2)this.AH=0;if(this.D3)this.AI=0;this.E7=0;this.E8=0;this.D2=false;this.D3=
false;this.KV=this.Av;this.HP=BO.Ao;return this;}if(Et){this.MV();this.AH=(((R.Ao-
this.G_)*0.001)*this.E7)+this.AH;this.AI=(((R.Ao-this.II)*0.001)*this.E8)+this.AI;
if(this.D2||!this.Il)this.AH=0;if(this.D3||!this.Il)this.AI=0;this.E7=0;this.E8=
0;this.D2=false;this.D3=false;if(!this.Il){this.Il=true;(A=this.K4)?A[1].call(A[
0],this):null;}this.KV=this.Av;this.HP=R.Ao;}if(!!AQ){var B0=B.abe(AQ.Bn,AQ.Cy);
var Al=this.Av;if(this.Kq)Al=[this.KV[0]+B0[0],Al[1]];Al=[Al[0],this.KV[1]+B0[1]
];if(Al[0]<this.BK[0])Al=[this.BK[0]+(((Al[0]-this.BK[0])/2)|0),Al[1]];else if(Al[
0]>this.BJ[0])Al=[this.BJ[0]+(((Al[0]-this.BJ[0])/2)|0),Al[1]];if(Al[1]<this.BK[
1])Al=[Al[0],this.BK[1]+(((Al[1]-this.BK[1])/2)|0)];else if(Al[1]>this.BJ[1])Al=[
Al[0],this.BJ[1]+(((Al[1]-this.BJ[1])/2)|0)];if(!B.aaX(Al,this.Av)){this.M5=B.abe(
Al,this.Av);this.Av=Al;(A=this.IF)?A[1].call(A[0],this):null;}}if((!!BO&&!BO.Down
)&&((BO.Ao-this.HP)>=200)){this.AH=0;this.AI=0;}if(DB&&((R.Ao-this.HP)>=200)){this.
AH=0;this.AI=0;}if(!!AQ&&(AQ.Ao>this.HP)){var B0=AQ.Av;var Ob=1000/(AQ.Ao-this.HP
);var Gr=0;var Gs;if(this.Kq)Gr=B0[0]*Ob;Gs=B0[1]*Ob;if((Gr*this.AH)<0)this.AH=0;
if((Gs*this.AI)<0)this.AI=0;this.AH=(this.AH+Gr)*0.5;this.AI=(this.AI+Gs)*0.5;this.
HP=AQ.Ao;}if(!Cu&&!BO)return this;if(!!R&&R.Di){this.AH=0;this.AI=0;}if((this.Av[
0]<=this.BK[0])||(this.Av[0]>=this.BJ[0]))this.AH=0;else if(!this.AH){var AR=this.
Av[0];var Be=this.BK[0];var Bf=this.BJ[0];if(AR<Be)Bf=this.BK[0];else if(AR>Bf)Be=
this.BJ[0];else{Be=AR;Bf=AR;}if((Be-AR)<=(AR-Bf))AR=Be;else AR=Bf;if(AR!==this.Av[
0]){var Cg=AR-this.Av[0];if(Cg>0)this.AH=Math.sqrt((Cg*2)*this.EL)+20;if(Cg<0)this.
AH=-Math.sqrt((-Cg*2)*this.EL)-20;this.E7=(400-(this.AH*this.AH))/(2*Cg);this.HA=
AR;}}else{var Sr=this.AH*this.AH;var Cg=Sr/(2*this.EL);var AR=this.Av[0];if(this.
AH>0)AR=AR+(Cg|0);if(this.AH<0)AR=AR-(Cg|0);if(AR>this.BJ[0])AR=this.BJ[0];else if(
AR<this.BK[0])AR=this.BK[0];var OH=AR;var Be=this.BK[0];var Bf=this.BJ[0];if(AR<
Be)Bf=this.BK[0];else if(AR>Bf)Be=this.BJ[0];else{Be=AR;Bf=AR;}if(this.AH>0){if(
Bf<=this.Av[0])AR=Be;else if((AR-Bf)<(Be-AR))AR=Bf;else AR=Be;}else if(Be>=this.
Av[0])AR=Bf;else if((AR-Bf)>(Be-AR))AR=Be;else AR=Bf;if(AR!==this.Av[0]){Cg=AR-this.
Av[0];if(AR!==OH){var GB=AR-OH;if(GB>0)this.AH=this.AH+Math.sqrt((GB*2)*this.EL);
if(GB<0)this.AH=this.AH-Math.sqrt((-GB*2)*this.EL);}if(this.AH>0)this.AH=this.AH+
20;if(this.AH<0)this.AH=this.AH-20;this.E7=(400-(this.AH*this.AH))/(2*Cg);this.HA=
AR;}else this.AH=0;}if((this.Av[1]<=this.BK[1])||(this.Av[1]>=this.BJ[1]))this.AI=
0;else if(!this.AI){var AS=this.Av[1];var Be=this.BK[1];var Bf=this.BJ[1];if(AS<
Be)Bf=this.BK[1];else if(AS>Bf)Be=this.BJ[1];else{Be=AS;Bf=AS;}if((Be-AS)<=(AS-Bf
))AS=Be;else AS=Bf;if(AS!==this.Av[1]){var Cg=AS-this.Av[1];if(Cg>0)this.AI=Math.
sqrt((Cg*2)*this.EL)+20;if(Cg<0)this.AI=-Math.sqrt((-Cg*2)*this.EL)-20;this.E8=(
400-(this.AI*this.AI))/(2*Cg);this.HB=AS;}}else{var Ss=this.AI*this.AI;var Cg=Ss
/(2*this.EL);var AS=this.Av[1];if(this.AI>0)AS=AS+(Cg|0);if(this.AI<0)AS=AS-(Cg|
0);if(AS>this.BJ[1])AS=this.BJ[1];else if(AS<this.BK[1])AS=this.BK[1];var OI=AS;
var Be=this.BK[1];var Bf=this.BJ[1];if(AS<Be)Bf=this.BK[1];else if(AS>Bf)Be=this.
BJ[1];else{Be=AS;Bf=AS;}if(this.AI>0){if(Bf<=this.Av[1])AS=Be;else if((AS-Bf)<(Be-
AS))AS=Bf;else AS=Be;}else if(Be>=this.Av[1])AS=Bf;else if((AS-Bf)>(Be-AS))AS=Be;
else AS=Bf;if(AS!==this.Av[1]){Cg=AS-this.Av[1];if(AS!==OI){var GB=AS-OI;if(GB>0
)this.AI=this.AI+Math.sqrt((GB*2)*this.EL);if(GB<0)this.AI=this.AI-Math.sqrt((-GB
*2)*this.EL);}if(this.AI>0)this.AI=this.AI+20;if(this.AI<0)this.AI=this.AI-20;this.
E8=(400-(this.AI*this.AI))/(2*Cg);this.HB=AS;}else this.AI=0;}if(!!R)this.G_=R.Ao;
if(!!BO)this.G_=BO.Ao;this.II=this.G_;this.G$=this.Av[0];this.Ha=this.Av[1];this.
St();return this;},Ex:function(Ad,Q,CB,El,EG,E6){var A;if(!!El&&(El!==this))return null;
if(this.Ac>=33554432)return null;if((this.Ac>=16777216)&&!(this.Ac&(4096<<Q)))return null;
if(!this.Kq&&!!(E6&0xC))return null;var I=B.lb(Ad,this.M);if(!((I[0]>=I[2])||(I[
1]>=I[3]))){var CQ=B.aaI(Ad);var A2=AY;if(CQ[0]<I[0])A2=[I[0]-CQ[0],A2[1]];if(CQ[
0]>=I[2])A2=[(I[2]-CQ[0])-1,A2[1]];if(CQ[1]<I[1])A2=[A2[0],I[1]-CQ[1]];if(CQ[1]>=
I[3])A2=[A2[0],(I[3]-CQ[1])-1];return B._NewObject(E.IQ,0).Initialize(this,A2);}
return null;},MV:function(){if(!!this.timer){B.z9([this,this.CF],this.timer,0);this.
timer=null;}},St:function(){this.timer=B._GetAutoObject(B.acj.Fl);B.zV([this,this.
CF],this.timer,0);},CF:function(Am){var A;if(!this.timer)return;var IJ=(this.timer.
Ao-this.G_)*0.001;var IK=(this.timer.Ao-this.II)*0.001;var Sw=IJ*IJ;var Sx=IK*IK;
var Gr=(this.E7*IJ)+this.AH;var Gs=(this.E8*IK)+this.AI;var Al=[((((this.E7*0.5)
*Sw)+(this.AH*IJ))+this.G$)|0,((((this.E8*0.5)*Sx)+(this.AI*IK))+this.Ha)|0];if(
this.D2&&(IJ>=0.5)){Al=[this.HA,Al[1]];this.AH=0;this.E7=0;this.G$=Al[0];this.D2=
false;}else if(this.D2){var GV=1-Math.pow(1-(IJ/0.5),5);Al=[(this.G$+((this.HA-this.
G$)*GV))|0,Al[1]];}if(this.D3&&(IK>=0.5)){Al=[Al[0],this.HB];this.AI=0;this.E8=0;
this.Ha=Al[1];this.D3=false;}else if(this.D3){var GV=1-Math.pow(1-(IK/0.5),5);Al=[
Al[0],(this.Ha+((this.HB-this.Ha)*GV))|0];}if(((this.AH>0)&&(Gr<0))||((this.AH<0
)&&(Gr>0))){Gr=0;Al=[this.Av[0],Al[1]];}if(((this.AI>0)&&(Gs<0))||((this.AI<0)&&(
Gs>0))){Gs=0;Al=[Al[0],this.Av[1]];}if(!this.D2&&(Al[0]<this.BK[0])){this.G$=Al[
0];this.HA=this.BK[0];this.G_=this.timer.Ao;this.D2=true;}else if(!this.D2&&(Al[
0]>this.BJ[0])){this.G$=Al[0];this.HA=this.BJ[0];this.G_=this.timer.Ao;this.D2=true;
}if(!this.D3&&(Al[1]<this.BK[1])){this.Ha=Al[1];this.HB=this.BK[1];this.II=this.
timer.Ao;this.D3=true;}else if(!this.D3&&(Al[1]>this.BJ[1])){this.Ha=Al[1];this.
HB=this.BJ[1];this.II=this.timer.Ao;this.D3=true;}if(((!this.D2&&!!this.AH)&&(Gr>-
20))&&(Gr<20)){Al=[this.HA,Al[1]];this.AH=0;this.E7=0;this.G$=Al[0];}if(((!this.
D3&&!!this.AI)&&(Gs>-20))&&(Gs<20)){Al=[Al[0],this.HB];this.AI=0;this.E8=0;this.
Ha=Al[1];}if(!B.aaX(Al,this.Av)){this.M5=B.abe(Al,this.Av);this.Av=Al;(A=this.IF
)?A[1].call(A[0],this):null;}if(((!this.AH&&!this.AI)&&!this.D2)&&!this.D3){this.
MV();this.Il=false;}},Pv:function(C){if(C<0)C=0;if(C>1)C=1;if(C===this.M9)return;
this.M9=C;if(C<(1e-007))C=1e-007;this.EL=C*10000;},_Init:function(aArg){E.Bb._Init.
call(this,aArg);this.__proto__=E.Dn;this.F=0x10011B;},_Mark:function(D){var A;E.
Bb._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.K4)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.IF)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"};E.Eb={AD:null,GH:
null,Dj:null,Ec:null,HN:0,Ao:0,Nl:0,D$:148,A$:0,AK:0,Ck:true,Down:false,Mc:false
,Bk:function(aArg){var A;var Fc=(E.Z.isPrototypeOf(A=this.K)?A:null);if(!Fc)throw new
Error(Ji);this.AD=Fc.KX;Fc.KX=this;},Bg:function(Ap){var A;if(!!Ap&&Ap.Pc(this.D$
)){this.Down=Ap.Down;this.A$=Ap.A$;this.AK=Ap.AK;this.Ao=Ap.Ao;if(Ap.Down){this.
Nl=this.HN;this.Mc=this.HN>0;if(this.Mc)(A=this.Ec)?A[1].call(A[0],this):null;else(
A=this.Dj)?A[1].call(A[0],this):null;this.HN=this.HN+1;return true;}if(!Ap.Down){
this.Mc=this.HN>1;this.Nl=this.HN-1;this.HN=0;(A=this.GH)?A[1].call(A[0],this):null;
return true;}}return false;},_Init:function(aArg){this.__proto__=E.Eb;this.Bk(aArg
);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.GH
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dj)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.Ec)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};E.IQ={BZ:null,IR:0,Av:B.wf,Initialize:function(L,aOffset
){this.BZ=L;this.Av=aOffset;this.IR=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=E.IQ;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.BZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};E.H7={
G4:null,BP:B.wg,Af:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=E.H7;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G4)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K
)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};E.Ka={Gv:B.wf,Gu:B.wf,_Init:function(aArg){E.H7._Init.call(
this,aArg);this.__proto__=E.Ka;},_className:"Core::LayoutLineContext"};E.Kb={JN:
B.wf,JM:B.wf,Gv:B.wf,Gu:B.wf,_Init:function(aArg){E.H7._Init.call(this,aArg);this.
__proto__=E.Kb;},_className:"Core::LayoutQuadContext"};E.FC={resource:null,Ez:function(
){this.resource=null;},Bk:function(aArg){this.resource=aArg;},_Init:function(aArg
){this.__proto__=E.FC;this.Bk(aArg);B.h7++;},_Done:function(){this.Ez();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};E.Timer={Ih:null,timer:null,Ao:0,Period:1000,J0:0,Ck:false,Ez:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},K5:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},I9:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Ck)this.K5(this.J0,C);},Kh:function(C){if(C<0)C=0;if(C===this.
J0)return;this.J0=C;if(this.Ck)this.K5(C,this.Period);},Bx:function(C){if(C===this.
Ck)return;this.Ck=C;if(C)this.K5(this.J0,this.Period);else this.K5(0,0);this.Ao=
this.J9();},J9:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.Ao=this.J9();if(!this.Period
)this.Bx(false);(A=this.Ih)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.Ez();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ih)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.Kp={I1:null,Cz:null,Ox:function(
Am){var A;(A=this.I1)?A[1].call(A[0],this):null;},L8:function(C){if(B.aaZ(this.Cz
,C))return;if(!!this.Cz)B.z$([this,this.Ox],this.Cz,0);this.Cz=C;if(!!this.Cz)B.
zX([this,this.Ox],this.Cz,0);},_Init:function(aArg){this.__proto__=E.Kp;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.I1)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cz)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};E.TB={
TC:0x1,SO:0x2,SZ:0x4,Tz:0x8,Ck:0x10,Tt:0x20,S0:0x40,S_:0x80,SY:0x100,S5:0x200,SX:
0x400,Tg:0x800,Nv:0x1000,TA:0x2000,Td:0x4000,Te:0x8000,SU:0x10000,Tc:0x20000,Tq:
0x40000,SV:0x80000,Tf:0x100000,ST:0x200000};E.DK={Th:0x1,Ti:0x2,SK:0x4,SL:0x8,SM:
0x10,SJ:0x20};E.S2={S$:0,Tw:1,SQ:2,S6:3,Tk:4,Tx:5,Ty:6,SR:7,SS:8,S8:9,S7:10,Tm:11
,Tl:12};E.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};E.Tj={TG:0x1,TD:0x2,TE:0x4,TF:0x8,S9:0x10,S1:0x20};
E._Init=function(){E.H8.__proto__=E.BZ;E.Eg.__proto__=E.BZ;E.Bb.__proto__=E.BZ;E.
Z.__proto__=E.Bb;E.Root.__proto__=E.Z;E.KeyEvent.__proto__=E.Event;E.J3.__proto__=
E.Event;E.ER.__proto__=E.Event;E.H1.__proto__=E.Event;E.C9.__proto__=E.Bb;E.BM.__proto__=
E.Eg;E.Dn.__proto__=E.Bb;E.Ka.__proto__=E.H7;E.Kb.__proto__=E.H7;};E._ReInit=function(
){};E.Dp=function(D){};return E;})();

/* Embedded Wizard */