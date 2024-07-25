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
var AX=[0,0];var AF=[0,0,0,0];var Dk="The view does not belong to this group";var
Dl=[340,590];var EB="No view to restack";var EC="View is not in this group";var ED=
"No view to remove";var Hk="No view to add";var I7="View already in a group";var
I8="Recursive invalidate during active update cycle.";var I9=[-8,-8,9,9];var I_=[
0,0,1,1];var Kn="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
E.BZ={AD:null,Ah:null,G:null,AN:null,F:0x103,Ee:0,DI:0x14,It:function(P,Il){},Du:
function(C){if(this.Ee===C)return;this.Ee=C;if(!!this.G){var Gu=this.AD;var B0=0;
while(!!Gu&&(C>Gu.Ee)){Gu=Gu.AD;B0=B0+1;}Gu=this.Ah;while(!!Gu&&(C<Gu.Ee)){Gu=Gu.
Ah;B0=B0-1;}if(!!B0)this.G.PM(this,B0);}},H$:function(C){var A;var B0=C^this.DI;
if(!B0)return;this.DI=C;if(!!this.AN&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.CK],this);this.G.U([0,0,(A=this.G.M)[2]-A[0],A[3]-A[1]
]);}if(!!this.AN&&((this.F&0x400)===0x400)){this.AN.G0.F=this.AN.G0.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],this);}},Gz:function(){var V=this.G;while(
!!V){var DC=(E.Root.isPrototypeOf(V)?V:null);if(!!DC)return DC;V=V.G;}return null;
},C3:function(AK,aClip,aOffset,Aq,aBlend){},GetClipping:function(){return this.GetExtent(
);},Be:function(Ao){return null;},Er:function(Ad,Q,CB,Ef,EE,E3){return null;},IE:
function(Ad){return Ad;},IF:function(P,Cd){return AX;},H7:function(aOffset,Ik){}
,GetExtent:function(){return AF;},A9:function(C8,Dx){var A;if(((this.F&0x200)===
0x200))C8=C8&~0x400;var Mq=(this.F&~Dx)|C8;var Ei=Mq^this.F;this.F=Mq;if(!!this.
G&&!!(Ei&0x14)){var NG=((this.F&0x14)===0x14);if(NG&&!this.G.Ds)this.G.He(this);
if(!NG&&(this.G.Ds===this))this.G.He(this.G.ML(this,0x14));}if(!!this.G&&!!(Ei&0x403
))this.G.U(this.GetClipping());if(((!!this.AN&&!!this.G)&&((Mq&0x400)===0x400))&&((
Ei&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK
],this);}if(!!this.G&&((Ei&0x400)===0x400)){this.AN=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],this);}if(((((Ei&0x100000)===0x100000)&&((
Dx&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.A9(0x0,0x10);if(((((Ei&0x100000)===0x100000)&&((C8&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.A9(0x10,0x0);if(((((Ei&0x200000
)===0x200000)&&((Dx&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.A9(0x10,0x0);if((((((Ei&0x200000)===0x200000)&&((C8&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.A9(0x0,0x10);},_Init:function(aArg){this.__proto__=E.BZ;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::View"};E.H4={AU:B.wf,AT:B.
wf,It:function(P,Il){var S=B._NewObject(E.J1,0);this.AN=null;S.BO=this.getExtent(
);S.Af=P;S.G0=Il;S.Gp=this.AT;S.Gq=this.AU;this.AN=S;},IF:function(P,Cd){var A;var
Aj=this.DI;var S=(E.J1.isPrototypeOf(A=this.AN)?A:null);var x1=S.BO[0];var y1=S.
BO[1];var x2=S.BO[2];var y2=S.BO[3];var BD=[P[2]-P[0],P[3]-P[1]];var Am=x2-x1;var
Ag=y2-y1;var tmp;if(!Cd){var Cv=[(A=S.Af)[2]-A[0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-
S.Af[1];if(Cv[0]!==BD[0]){var A3=((Aj&0x4)===0x4);var A4=((Aj&0x8)===0x8);var CV=((
Aj&0x1)===0x1);if(!A3&&(CV||!A4))x1=((x1*BD[0])/Cv[0])|0;if(!A4&&(CV||!A3)){x2=x2-
S.Af[0];x2=((x2*BD[0])/Cv[0])|0;x2=x2-BD[0];}else x2=x2-S.Af[2];x1=x1+P[0];x2=x2+
P[2];if(!CV){if(A3&&!A4)x2=x1+Am;else if(!A3&&A4)x1=x2-Am;else{x1=x1+((((x2-x1)-
Am)/2)|0);x2=x1+Am;}}}else{x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];}if(Cv[1]!==BD[1]
){var A5=((Aj&0x10)===0x10);var A2=((Aj&0x20)===0x20);var CW=((Aj&0x2)===0x2);if(
!A5&&(CW||!A2))y1=((y1*BD[1])/Cv[1])|0;if(!A2&&(CW||!A5)){y2=y2-S.Af[1];y2=((y2*
BD[1])/Cv[1])|0;y2=y2-BD[1];}else y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];if(!CW){if(
A5&&!A2)y2=y1+Ag;else if(!A5&&A2)y1=y2-Ag;else{y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+
Ag;}}}else{y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];}}else{switch(Cd){case 3:{x1=P[0];
x2=x1+Am;}break;case 4:{x2=P[2];x1=x2-Am;}break;case 1:{y1=P[1];y2=y1+Ag;}break;
case 2:{y2=P[3];y1=y2-Ag;}break;default:;}if((Cd===3)||(Cd===4)){var A5=((Aj&0x10
)===0x10);var A2=((Aj&0x20)===0x20);var CW=((Aj&0x2)===0x2);if(CW){y1=P[1];y2=P[
3];}else if(A5&&!A2){y1=P[1];y2=y1+Ag;}else if(A2&&!A5){y2=P[3];y1=y2-Ag;}else{y1=
P[1]+((((P[3]-P[1])-Ag)/2)|0);y2=y1+Ag;}}if((Cd===1)||(Cd===2)){var A3=((Aj&0x4)===
0x4);var A4=((Aj&0x8)===0x8);var CV=((Aj&0x1)===0x1);if(CV){x1=P[0];x2=P[2];}else
if(A3&&!A4){x1=P[0];x2=x1+Am;}else if(A4&&!A3){x2=P[2];x1=x2-Am;}else{x1=P[0]+((((
P[2]-P[0])-Am)/2)|0);x2=x1+Am;}}}S.isEmpty=(x1>=x2)||(y1>=y2);Am=x2-x1;Ag=y2-y1;
if(S.Gq[0]<S.Gp[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(S.Gq[1]<S.Gp[1]){tmp=y1;y1=y2-1;
y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){
this.AT=[x1,y1];this.AU=[x2,y2];}else{this.Ex([x1,y1]);this.Ec([x2,y2]);this.AN=
S;}return[Am,Ag];},H7:function(aOffset,Ik){if(Ik){this.AT=B.abf(this.AT,aOffset);
this.AU=B.abf(this.AU,aOffset);}else{this.Ex(B.abf(this.AT,aOffset));this.Ec(B.abf(
this.AU,aOffset));}},GetExtent:function(){if(!!this.AN&&this.AN.isEmpty)return AF;
return this.getExtent();},getExtent:function(){var x1=this.AT[0];var y1=this.AT[
1];var x2=this.AU[0];var y2=this.AU[1];var Am=x2-x1;var Ag=y2-y1;var tmp;if(Am<0
)Am=-Am;if(Ag<0)Ag=-Ag;if(Am>=Ag){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(Ag>=Am){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},Ec:function(C){var A;if(B.aaX(C,this.
AU))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());this.AN=
null;this.AU=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((
!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],this);}},Ex:function(C){var
A;if(B.aaX(C,this.AT))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));this.AN=null;this.AT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],this);}},_Init:function(
aArg){E.BZ._Init.call(this,aArg);this.__proto__=E.H4;},_className:"Core::LineView"
};E.Ed={BU:B.wf,Cc:B.wf,AU:B.wf,AT:B.wf,It:function(P,Il){var S=B._NewObject(E.J2
,0);this.AN=null;S.BO=this.GetExtent();S.Af=P;S.G0=Il;S.Gp=this.AT;S.Gq=this.AU;
S.JB=this.Cc;S.JC=this.BU;this.AN=S;},IF:function(P,Cd){var A;var Aj=this.DI;var
S=(E.J2.isPrototypeOf(A=this.AN)?A:null);var x1=S.BO[0];var y1=S.BO[1];var x2=S.
BO[2];var y2=S.BO[3];var BD=[P[2]-P[0],P[3]-P[1]];var Am=x2-x1;var Ag=y2-y1;if(!
Cd){var Cv=[(A=S.Af)[2]-A[0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-S.Af[1];if(Cv[0]!==BD[
0]){var A3=((Aj&0x4)===0x4);var A4=((Aj&0x8)===0x8);var CV=((Aj&0x1)===0x1);if(!
A3&&(CV||!A4))x1=((x1*BD[0])/Cv[0])|0;if(!A4&&(CV||!A3)){x2=x2-S.Af[0];x2=((x2*BD[
0])/Cv[0])|0;x2=x2-BD[0];}else x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];if(!CV){if(A3&&
!A4)x2=x1+Am;else if(!A3&&A4)x1=x2-Am;else{x1=x1+((((x2-x1)-Am)/2)|0);x2=x1+Am;}
}}else{x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];}if(Cv[1]!==BD[1]){var A5=((Aj&0x10)===
0x10);var A2=((Aj&0x20)===0x20);var CW=((Aj&0x2)===0x2);if(!A5&&(CW||!A2))y1=((y1
*BD[1])/Cv[1])|0;if(!A2&&(CW||!A5)){y2=y2-S.Af[1];y2=((y2*BD[1])/Cv[1])|0;y2=y2-
BD[1];}else y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];if(!CW){if(A5&&!A2)y2=y1+Ag;else
if(!A5&&A2)y1=y2-Ag;else{y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+Ag;}}}else{y2=y2-S.Af[
3];y1=y1+P[1];y2=y2+P[3];}}else{switch(Cd){case 3:{x1=P[0];x2=x1+Am;}break;case 4:{
x2=P[2];x1=x2-Am;}break;case 1:{y1=P[1];y2=y1+Ag;}break;case 2:{y2=P[3];y1=y2-Ag;
}break;default:;}if((Cd===3)||(Cd===4)){var A5=((Aj&0x10)===0x10);var A2=((Aj&0x20
)===0x20);var CW=((Aj&0x2)===0x2);if(CW){y1=P[1];y2=P[3];}else if(A5&&!A2){y1=P[
1];y2=y1+Ag;}else if(A2&&!A5){y2=P[3];y1=y2-Ag;}else{y1=P[1]+((((P[3]-P[1])-Ag)/
2)|0);y2=y1+Ag;}}if((Cd===1)||(Cd===2)){var A3=((Aj&0x4)===0x4);var A4=((Aj&0x8)===
0x8);var CV=((Aj&0x1)===0x1);if(CV){x1=P[0];x2=P[2];}else if(A3&&!A4){x1=P[0];x2=
x1+Am;}else if(A4&&!A3){x2=P[2];x1=x2-Am;}else{x1=P[0]+((((P[2]-P[0])-Am)/2)|0);
x2=x1+Am;}}}S.isEmpty=(x1>=x2)||(y1>=y2);Am=(x2-x1)-1;Ag=(y2-y1)-1;var FQ=S.BO[0
];var FR=S.BO[1];var E9=(S.BO[2]-FQ)-1;var E8=(S.BO[3]-FR)-1;if(!E9)E9=1;if(!E8)
E8=1;if(((this.F&0x100)===0x100)){this.AT=[x1+((((S.Gp[0]-FQ)*Am)/E9)|0),y1+((((
S.Gp[1]-FR)*Ag)/E8)|0)];this.AU=[x1+((((S.Gq[0]-FQ)*Am)/E9)|0),y1+((((S.Gq[1]-FR
)*Ag)/E8)|0)];this.Cc=[x1+((((S.JB[0]-FQ)*Am)/E9)|0),y1+((((S.JB[1]-FR)*Ag)/E8)|
0)];this.BU=[x1+((((S.JC[0]-FQ)*Am)/E9)|0),y1+((((S.JC[1]-FR)*Ag)/E8)|0)];}else{
this.Ex([x1+((((S.Gp[0]-FQ)*Am)/E9)|0),y1+((((S.Gp[1]-FR)*Ag)/E8)|0)]);this.Ec([
x1+((((S.Gq[0]-FQ)*Am)/E9)|0),y1+((((S.Gq[1]-FR)*Ag)/E8)|0)]);this.GF([x1+((((S.
JB[0]-FQ)*Am)/E9)|0),y1+((((S.JB[1]-FR)*Ag)/E8)|0)]);this.Hg([x1+((((S.JC[0]-FQ)
*Am)/E9)|0),y1+((((S.JC[1]-FR)*Ag)/E8)|0)]);this.AN=S;}return[Am+1,Ag+1];},H7:function(
aOffset,Ik){if(Ik){this.AT=B.abf(this.AT,aOffset);this.AU=B.abf(this.AU,aOffset);
this.Cc=B.abf(this.Cc,aOffset);this.BU=B.abf(this.BU,aOffset);}else{this.Ex(B.abf(
this.AT,aOffset));this.Ec(B.abf(this.AU,aOffset));this.GF(B.abf(this.Cc,aOffset)
);this.Hg(B.abf(this.BU,aOffset));}},GetExtent:function(){if(!!this.AN&&this.AN.
isEmpty)return AF;var x1=this.AT[0];var y1=this.AT[1];var x2=this.Cc[0];var y2=this.
Cc[1];if((((this.BU[0]!==x1)||(this.AU[1]!==y1))||(this.AU[0]!==x2))||(this.BU[1
]!==y2)){if(this.AU[0]<x1)x1=this.AU[0];if(this.Cc[0]<x1)x1=this.Cc[0];if(this.BU[
0]<x1)x1=this.BU[0];if(this.AU[1]<y1)y1=this.AU[1];if(this.Cc[1]<y1)y1=this.Cc[1
];if(this.BU[1]<y1)y1=this.BU[1];if(this.AT[0]>x2)x2=this.AT[0];if(this.AU[0]>x2
)x2=this.AU[0];if(this.BU[0]>x2)x2=this.BU[0];if(this.AT[1]>y2)y2=this.AT[1];if(
this.AU[1]>y2)y2=this.AU[1];if(this.BU[1]>y2)y2=this.BU[1];}else{var tmp;if(x2<x1
){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];}
,Hg:function(C){var A;if(B.aaX(C,this.BU))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.U(this.GetClipping());this.AN=null;this.BU=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CK],this);}},GF:function(C){var A;if(B.aaX(C,this.Cc))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.U(this.GetClipping());this.AN=null;this.Cc=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CK],this);}},Ec:function(C){var A;if(B.aaX(C,this.AU))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());this.AN=null;
this.AU=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],this);}},Ex:function(C){var A;if(B.
aaX(C,this.AT))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));this.AN=null;this.AT=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],this);}},Lw:function(
Co){var A8=B.abi(4,B.wf,null);var H=0;var Ba=3;var Mi=false;var Mj=false;A8.Set(
0,this.AT);A8.Set(1,this.AU);A8.Set(2,this.Cc);A8.Set(3,this.BU);while(H<4){var Or=
A8.Get(H)[0];var K3=A8.Get(H)[1];var Sh=A8.Get(Ba)[0];var MB=A8.Get(Ba)[1];if(((
K3>Co[1])!==(MB>Co[1]))||((K3<Co[1])!==(MB<Co[1]))){var D7=((((Sh-Or)*(Co[1]-K3)
)/(MB-K3))|0)+Or;if(Co[0]>D7)Mi=!Mi;if(Co[0]<D7)Mj=!Mj;}Ba=H;H=H+1;}return Mi||Mj;
},OP:function(){return((((this.AT[0]===this.BU[0])&&(this.AU[0]===this.Cc[0]))&&(
this.AT[1]===this.AU[1]))&&(this.Cc[1]===this.BU[1]))||((((this.AT[0]===this.AU[
0])&&(this.Cc[0]===this.BU[0]))&&(this.AT[1]===this.BU[1]))&&(this.AU[1]===this.
Cc[1]));},_Init:function(aArg){E.BZ._Init.call(this,aArg);this.__proto__=E.Ed;},
_className:"Core::QuadView"};E.A$={M:B.wg,It:function(P,Il){var S=B._NewObject(E.
H3,0);S.BO=this.M;S.Af=P;S.G0=Il;this.AN=S;},IF:function(P,Cd){var A;var Aj=this.
DI;var S=this.AN;var x1=S.BO[0];var y1=S.BO[1];var x2=S.BO[2];var y2=S.BO[3];var
BD=[P[2]-P[0],P[3]-P[1]];var Am=x2-x1;var Ag=y2-y1;if(!Cd){var Cv=[(A=S.Af)[2]-A[
0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-S.Af[1];if(Cv[0]!==BD[0]){var A3=((Aj&0x4)===0x4
);var A4=((Aj&0x8)===0x8);var CV=((Aj&0x1)===0x1);if(!A3&&(CV||!A4))x1=((x1*BD[0
])/Cv[0])|0;if(!A4&&(CV||!A3)){x2=x2-S.Af[0];x2=((x2*BD[0])/Cv[0])|0;x2=x2-BD[0];
}else x2=x2-S.Af[2];x1=x1+P[0];x2=x2+P[2];if(!CV){if(A3&&!A4)x2=x1+Am;else if(!A3&&
A4)x1=x2-Am;else{x1=x1+((((x2-x1)-Am)/2)|0);x2=x1+Am;}}}else{x2=x2-S.Af[2];x1=x1+
P[0];x2=x2+P[2];}if(Cv[1]!==BD[1]){var A5=((Aj&0x10)===0x10);var A2=((Aj&0x20)===
0x20);var CW=((Aj&0x2)===0x2);if(!A5&&(CW||!A2))y1=((y1*BD[1])/Cv[1])|0;if(!A2&&(
CW||!A5)){y2=y2-S.Af[1];y2=((y2*BD[1])/Cv[1])|0;y2=y2-BD[1];}else y2=y2-S.Af[3];
y1=y1+P[1];y2=y2+P[3];if(!CW){if(A5&&!A2)y2=y1+Ag;else if(!A5&&A2)y1=y2-Ag;else{
y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+Ag;}}}else{y2=y2-S.Af[3];y1=y1+P[1];y2=y2+P[3];
}}else{switch(Cd){case 3:{x1=P[0];x2=x1+Am;}break;case 4:{x2=P[2];x1=x2-Am;}break;
case 1:{y1=P[1];y2=y1+Ag;}break;case 2:{y2=P[3];y1=y2-Ag;}break;default:;}if((Cd===
3)||(Cd===4)){var A5=((Aj&0x10)===0x10);var A2=((Aj&0x20)===0x20);var CW=((Aj&0x2
)===0x2);if(CW){y1=P[1];y2=P[3];}else if(A5&&!A2){y1=P[1];y2=y1+Ag;}else if(A2&&
!A5){y2=P[3];y1=y2-Ag;}else{y1=P[1]+((((P[3]-P[1])-Ag)/2)|0);y2=y1+Ag;}}if((Cd===
1)||(Cd===2)){var A3=((Aj&0x4)===0x4);var A4=((Aj&0x8)===0x8);var CV=((Aj&0x1)===
0x1);if(CV){x1=P[0];x2=P[2];}else if(A3&&!A4){x1=P[0];x2=x1+Am;}else if(A4&&!A3){
x2=P[2];x1=x2-Am;}else{x1=P[0]+((((P[2]-P[0])-Am)/2)|0);x2=x1+Am;}}}S.isEmpty=(x1>=
x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.O([x1,y1
,x2,y2]);this.AN=S;}return[x2-x1,y2-y1];},H7:function(aOffset,Ik){if(Ik)this.M=B.
abh(this.M,aOffset);else this.O(B.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},O:function(C){var A;if(B.aaY(C,this.M))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.U(this.GetClipping());this.AN=null;this.M=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.U(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CK],this);}},_Init:function(aArg){E.BZ._Init.call(this,aArg);this.__proto__=
E.A$;},_className:"Core::RectView"};E.Z={BP:null,Cs:null,KM:null,AV:null,Ds:null
,Dh:255,Jn:0,Jq:0,Jp:0,Jo:0,Bl:function(aArg){this.Dt();},C3:function(AK,aClip,aOffset
,Aq,aBlend){var A;Aq=((Aq+1)*this.Dh)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);if(
!this.AV||(AK.E$===this))this.NC(AK,aClip,B.abf(aOffset,this.M.slice(0,2)),Aq,aBlend
);else{var Ar=255|(255<<8)|(255<<16)|((Aq&0xFF)<<24);this.AV.Update();AK.MH(aClip
,this.AV,0,B.abh(this.M,aOffset),AX,Ar,Ar,Ar,Ar,aBlend);}},GetClipping:function(
){var A;var I=this.M;if(!!this.AV)return I;I=[].concat(I[0]-this.Jo,I.slice(1,4)
);I=B.abP(I,I[1]-this.Jq);I=B.abN(I,I[2]+this.Jp);I=[].concat(I.slice(0,3),I[3]+
this.Jn);if(((this.F&0x80000)===0x80000)){var HP=AF;var J;for(J=this.BP;!!J;J=J.
AD)if(((J.F&0x1)===0x1))HP=B.wC(HP,J.GetClipping());I=B.wC(I,B.abh(HP,this.M.slice(
0,2)));}return I;},Er:function(Ad,Q,CB,Ef,EE,E3){var A;var J=this.Cs;var Hz=null;
var N=AF;var C$=null;if(((A=B.lb(Ad,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ad=B.abg(Ad,this.M.slice(0,2));if(!!EE){J=EE;while(!!J&&(J.G!==this))J=J.G;}while(
!!J){if(((J.F&0x400)===0x400)&&!C$){C$=J.Ah;while(!!C$&&!((C$.F&0x200)===0x200))
C$=C$.Ah;if(!!C$)N=B.lb(Ad,C$.GetExtent());else N=AF;}if(C$===J){C$=null;N=AF;}if((
!!Ef&&!!(E.Z.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var BO=J.GetExtent();var KG=Ef;var Hv=null;if(KG===J)KG=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(BO,N))[0]>=A[2])||(A[1]>=A[3])))Hv=
J.Er(N,Q,CB,KG,EE,E3);}else if(!(((A=B.lb(BO,Ad))[0]>=A[2])||(A[1]>=A[3]))||(Ef===
J))Hv=J.Er(Ad,Q,CB,KG,EE,E3);J=J.Ah;if(!!Hv){if(!Hz||((Hv.IJ<Hz.IJ)&&(Hv.IJ>=0))
)Hz=Hv;if(!Hv.IJ)J=null;}}else J=J.Ah;EE=null;}return Hz;},IE:function(Ad){var A;
var DT;var J=this.BP;var Ht=AF;var Jz=true;var result=(Ad=DT=B.abg(Ad,this.M.slice(
0,2)),DT);while(!!J){if(((J.F&0x200)===0x200)){var Iv=(E.BB.isPrototypeOf(J)?J:null
);Ht=B.lb(Ad,Iv.M);Jz=((Iv.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(Jz){var N=B.lb(J.GetClipping(),Ht);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=
B.wC(result,J.IE(N));}}else{var N=B.lb(J.GetClipping(),Ad);if(!((N[0]>=N[2])||(N[
1]>=N[3])))result=B.wC(result,J.IE(N));}}J=J.AD;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},A9:function(C8,Dx){var A;var KO=this.F;if(((!!this.G&&!!!this.
AV)&&((this.F&0x80001)===0x80001))&&((Dx&0x80000)===0x80000))this.G.U(this.GetClipping(
));E.A$.A9.call(this,C8,Dx);if((((!!this.G&&!!!this.AV)&&((this.F&0x1)===0x1))&&((
C8&0x80000)===0x80000))&&!((KO&0x80000)===0x80000))this.G.U(this.GetClipping());
var Ei=this.F^KO;if(!!this.Ds&&((Ei&0x40)===0x40)){if(((this.F&0x40)===0x40))this.
Ds.A9(0x40,0x0);else this.Ds.A9(0x0,0x40);}if(((Ei&0x10)===0x10)){var J;for(J=this.
BP;!!J;J=J.AD)if((((J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000
)===0x10000)||(null===J)))J.A9(C8&0x10,Dx&0x10);}if(!!Ei){this.F=this.F|0x8000;B.
pe([this,this.K2],this);}},O:function(C){var A;if(B.aaY(C,this.M))return;var GZ=[(
A=this.M)[2]-A[0],A[3]-A[1]];var KN=[C[2]-C[0],C[3]-C[1]];var HN=!B.aaX(GZ,KN);if(
HN&&!!this.AV){this.AV.IY(KN);B.we(this,0);B.we(this.AV,0);}E.A$.O.call(this,C);
if((HN&&(GZ[0]>0))&&(GZ[1]>0)){var Af=[].concat(AX,GZ);var J=this.BP;while(!!J){
if((!J.AN&&(J.DI!==0x14))&&!((J.F&0x400)===0x400))J.It(Af,null);J=J.AD;}}if(HN){
this.F=this.F|0x5000;B.pe([this,this.K2],this);}},Og:function(Ao){var NT=(E.KeyEvent.
isPrototypeOf(Ao)?Ao:null);var Ej=this.KM;if(!NT)return null;while(!!Ej&&(!Ej.Cl||
!Ej.Be(NT)))Ej=Ej.AD;return Ej;},Sd:function(Au){if(!!this.AV){this.AV.E$=this;var
N=B.abg(this.IE(B.abh(this.AV.DH,this.M.slice(0,2))),this.M.slice(0,2));this.AV.
JW(N,N,0x00000000,0x00000000,0x00000000,0x00000000,false);this.NC(this.AV,N,AX,255
,true);this.AV.E$=null;}},NC:function(AK,aClip,aOffset,Aq,aBlend){var A;var J=this.
BP;var Ht=AF;var Jz=true;this.OB(AK,aClip,aOffset,Aq,aBlend);while(!!J){if(((J.F&
0x200)===0x200)){var Iv=(E.BB.isPrototypeOf(J)?J:null);Jz=((Iv.F&0x1)===0x1);Ht=
aClip;if(!((Iv.F&0x80000)===0x80000))Ht=B.lb(Ht,B.abh(Iv.M,aOffset));}if(((J.F&0x1
)===0x1)){if(((J.F&0x400)===0x400)){if(Jz){var N=B.lb(B.abh(J.GetClipping(),aOffset
),Ht);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.C3(AK,N,aOffset,Aq,aBlend);}}else{var N=
B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.C3(
AK,N,aOffset,Aq,aBlend);}}J=J.AD;}this.OE(AK,aClip,aOffset,Aq,aBlend);},R0:function(
){var A;var Mg=((this.F&0x1000)===0x1000);var FU=[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]];var E_=false;var Ir=AF;var Me=AF;var J=this.Cs;var C$=null;while(!!J){if(((J.
F&0x800)===0x800)){E_=true;J.F=J.F&~0x800;}if(E_&&((J.F&0x200)===0x200))E_=false;
J=J.Ah;}E_=false;J=this.BP;if(Mg){this.F=this.F&~0x1000;Mg=!((FU[0]>=FU[2])||(FU[
1]>=FU[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400)){if(!!J.AN&&(
J.AN.G0!==C$))J.AN=null;if((!J.AN&&E_)&&(J.DI!==0x14))J.It(Me,C$);}if(!!J.AN){if(
Mg&&!((J.F&0x400)===0x400))J.IF(FU,0);if(E_&&((J.F&0x400)===0x400))J.IF(Me,0);}if(((
J.F&0x200)===0x200)){E_=((J.F&0x1000)===0x1000);C$=(E.BB.isPrototypeOf(J)?J:null
);if(E_){J.F=J.F&~0x1000;Ir=C$.M;Me=Ir;E_=!((Ir[0]>=Ir[2])||(Ir[1]>=Ir[3]));}if(
E_)this.U(C$.M);}J=J.AD;}this.F=this.F&~0x2000;this.Nb([FU[2]-FU[0],FU[3]-FU[1]]
);},CK:function(Au){B.pe([this,this.K2],this);},K2:function(Au){var A;var Se=((this.
F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.R0(
);}if(((this.F&0x8000)===0x8000)||Se){this.F=this.F&~0x8000;this.I4(this.F);}},He:
function(C){var A;if(!!C&&(C.G!==this))throw new Error(Dk);if(!!C&&!((C.F&0x14)===
0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Ds)return;if(!
!this.Ds)this.Ds.A9(0x0,0x60);this.Ds=C;if(!!C){if(((this.F&0x40)===0x40))C.A9(0x60
,0x0);else C.A9(0x20,0x0);}},J9:function(C){var A;if(!!this.AV===C)return;if(!C){
this.AV.J7=null;this.AV.IY(AX);this.AV=null;}if(!!this.G&&((this.F&0x1)===0x1))this.
G.U(this.GetClipping());if(C){this.AV=B._NewObject(B.Graphics.Canvas,0);this.AV.
IY([(A=this.M)[2]-A[0],A[3]-A[1]]);this.AV.J7=[this,this.Sd];}B.we(this,0);},Hf:
function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.Dh)return;this.Dh=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.U(this.GetClipping());},Rn:function(Sg){this.
Hf(Sg);},AS:function(C){if(C)this.A9(0x1,0x0);else this.A9(0x0,0x1);},ExtendClipping:
function(Hn,Ho,Hp,Hm){var A;var Jg=this.M;var C9=Jg;if(Hn<0)Hn=0;if(Hn>255)Hn=255;
if(Ho<0)Ho=0;if(Ho>255)Ho=255;if(Hp<0)Hp=0;if(Hp>255)Hp=255;if(Hm<0)Hm=0;if(Hm>255
)Hm=255;C9=[].concat(C9[0]-(Math.max(Hn,this.Jo)&0xFF),C9.slice(1,4));C9=B.abN(C9
,C9[2]+(Math.max(Ho,this.Jp)&0xFF));C9=B.abP(C9,C9[1]-(Math.max(Hp,this.Jq)&0xFF
));C9=[].concat(C9.slice(0,3),C9[3]+(Math.max(Hm,this.Jn)&0xFF));if(Hn!==this.Jo
){if(((!!this.G&&((this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000
)){var I=C9;I=B.abN(I,Jg[0]);this.G.U(I);}this.Jo=Hn&0xFF;}if(Ho!==this.Jp){if(((
!!this.G&&((this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000)){var
I=C9;I=[].concat(Jg[2],I.slice(1,4));this.G.U(I);}this.Jp=Ho&0xFF;}if(Hp!==this.
Jq){if(((!!this.G&&((this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===0x80000
)){var I=C9;I=[].concat(I.slice(0,3),Jg[1]);this.G.U(I);}this.Jq=Hp&0xFF;}if(Hm!==
this.Jn){if(((!!this.G&&((this.F&0x1)===0x1))&&!!!this.AV)&&!((this.F&0x80000)===
0x80000)){var I=C9;I=B.abP(I,Jg[3]);this.G.U(I);}this.Jn=Hm&0xFF;}},OE:function(
AK,aClip,aOffset,Aq,aBlend){},OB:function(AK,aClip,aOffset,Aq,aBlend){},GetMaximalSize:
function(){return Dl;},GetMinimalSize:function(){return AX;},LI:function(){var A;
if(((this.F&0x40)===0x40))return;if(((this.F&0x80)===0x80))return;if(((this.F&0x10000
)===0x10000)){if(!!this.G)this.G.LI();return;}if(!!this.G&&(this.G.Ds!==this))this.
G.He(this);if(!!this.G)this.G.LI();},OQ:function(FF){var A;return(A=FF)&&((this.
F&A)===A);},OX:function(Co){var tmp=this;while(!!tmp){Co=B.abe(Co,tmp.M.slice(0,
2));tmp=tmp.G;}return Co;},DispatchEvent:function(Ao){var A;var J=this.Ds;var V=(
E.Z.isPrototypeOf(J)?J:null);var Br=null;if(!!J&&((((J.F&0x10000)===0x10000)||((
J.F&0x40000)===0x40000))||((J.F&0x20000)===0x20000))){J=null;V=null;}if(!!V)Br=V.
DispatchEvent(Ao);else if(!!J)Br=J.Be(Ao);if(!Br)Br=this.Be(Ao);if(!Br)Br=this.Og(
Ao);return Br;},BroadcastEventAtPosition:function(Ao,Nt,aFilter){var A;var J=this.
Cs;var Br=null;while(!!J&&!Br){if((!aFilter||((A=aFilter)&&((J.F&A)===A)))&&B.wa(
J.GetExtent(),Nt)){var V=(E.Z.isPrototypeOf(J)?J:null);if(!!V)Br=V.BroadcastEventAtPosition(
Ao,B.abe(Nt,V.M.slice(0,2)),aFilter);else Br=J.Be(Ao);}J=J.Ah;}if(!Br)Br=this.Be(
Ao);return Br;},BroadcastEvent:function(Ao,aFilter){var A;var J=this.Cs;var Br=null;
while(!!J&&!Br){if(!aFilter||((A=aFilter)&&((J.F&A)===A))){var V=(E.Z.isPrototypeOf(
J)?J:null);if(!!V)Br=V.BroadcastEvent(Ao,aFilter);else Br=J.Be(Ao);}J=J.Ah;}if(!
Br)Br=this.Be(Ao);if(!Br)Br=this.Og(Ao);return Br;},Nb:function(aSize){},I4:function(
FF){},Dt:function(){this.F=this.F|0x8000;B.pe([this,this.K2],this);},U:function(
Ad){var A;var V=this;while(!!V&&!((Ad[0]>=Ad[2])||(Ad[1]>=Ad[3]))){var Im=V.AV;if(
!V.G&&(V!==this)){V.U(Ad);return;}if(!!Im){var RN=Im.DH;Im.DH=B.wC(Im.DH,Ad);if(
!B.aaY(RN,Im.DH)){B.we(V,0);B.we(Im,0);}}if(!((V.F&0x1)===0x1))return;var I=V.M;
Ad=B.abh(Ad,I.slice(0,2));if(!!V.AV||!((V.F&0x80000)===0x80000)){if(!!!V.AV){I=[
].concat(I[0]-V.Jo,I.slice(1,4));I=B.abP(I,I[1]-V.Jq);I=B.abN(I,I[2]+V.Jp);I=[].
concat(I.slice(0,3),I[3]+V.Jn);}Ad=B.lb(Ad,I);}V=V.G;}},ML:function(L,aFilter){var
A;if(!L||(L.G!==this))return null;var GY=L.AD;var G2=L.Ah;var Jx=0x10000;if(((aFilter&
0x10000)===0x10000))Jx=0x0;while(!!GY||!!G2){if((!!GY&&(!aFilter||((A=aFilter)&&((
GY.F&A)===A))))&&(!Jx||!((A=Jx)&&((GY.F&A)===A))))return GY;if((!!G2&&(!aFilter||((
A=aFilter)&&((G2.F&A)===A))))&&(!Jx||!((A=Jx)&&((G2.F&A)===A))))return G2;if(!!GY
)GY=GY.AD;if(!!G2)G2=G2.Ah;}return null;},PM:function(L,DV){var A;if(!L)throw new
Error(EB);if(L.G!==this)throw new Error(EC);var FN=L;var Bz=L;var HR=L.Ee;while(((
DV>0)&&!!FN.AD)&&(FN.AD.Ee<=HR)){FN=FN.AD;DV=DV-1;}while(((DV<0)&&!!Bz.Ah)&&(Bz.
Ah.Ee>=HR)){Bz=Bz.Ah;DV=DV+1;}if((FN===L)&&(Bz===L))return;if(((L.F&0x401)===0x401
)){if(!!L.Ah&&!!L.AN)L.Ah.F=L.Ah.F|0x800;L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.CK],this);}if(((L.F&0x200)===0x200)){if(!!L.Ah)L.Ah.F=L.Ah.F|0x800;L.F=
L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK],this);}if(!!L.Ah)L.Ah.AD=L.AD;
if(!!L.AD)L.AD.Ah=L.Ah;if(this.BP===L)this.BP=L.AD;if(this.Cs===L)this.Cs=L.Ah;if(
FN!==L){L.AD=FN.AD;L.Ah=FN;FN.AD=L;if(!!L.AD)L.AD.Ah=L;}if(Bz!==L){L.AD=Bz;L.Ah=
Bz.Ah;Bz.Ah=L;if(!!L.Ah)L.Ah.AD=L;}if(!L.AD)this.Cs=L;if(!L.Ah)this.BP=L;if(((L.
F&0x1)===0x1))this.U(L.GetClipping());},GH:function(L){var A;if(!L)throw new Error(
ED);if(L.G!==this)throw new Error(EC);if((((L.F&0x401)===0x401)&&!!L.Ah)&&!!L.AN
){L.Ah.F=L.Ah.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK],this);}if(((L.F&0x200
)===0x200)){if(!!L.Ah)L.Ah.F=L.Ah.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK
],this);}L.AN=null;if(this.Ds===L)this.He(this.ML(L,0x14));if(!!L.Ah)L.Ah.AD=L.AD;
if(!!L.AD)L.AD.Ah=L.Ah;if(this.BP===L)this.BP=L.AD;if(this.Cs===L)this.Cs=L.Ah;L.
G=null;L.AD=null;L.Ah=null;if((!((L.F&0x10)===0x10)&&((L.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))L.A9(0x10,0x0);if(((L.F&0x1)===0x1))this.U(L.GetClipping(
));},T:function(L,DV){var A;if(!L)throw new Error(Hk);if(!!L.G)throw new Error(I7
);var Bz=null;var HR=L.Ee;if(((DV<0)&&!!this.Cs)&&(this.Cs.Ee>=HR)){Bz=this.Cs;DV=
DV+1;}while((((DV<0)&&!!Bz)&&!!Bz.Ah)&&(Bz.Ah.Ee>=HR)){Bz=Bz.Ah;DV=DV+1;}if((!Bz&&
!!this.Cs)&&(this.Cs.Ee>HR))Bz=this.Cs;while((!!Bz&&!!Bz.Ah)&&(Bz.Ah.Ee>HR))Bz=Bz.
Ah;if(!Bz){L.G=this;L.Ah=this.Cs;if(!!this.Cs)this.Cs.AD=L;if(!this.BP)this.BP=L;
this.Cs=L;}else{L.G=this;L.Ah=Bz.Ah;L.AD=Bz;Bz.Ah=L;if(!!L.Ah)L.Ah.AD=L;else this.
BP=L;}if(((L.F&0x1)===0x1))this.U(L.GetClipping());if(((L.F&0x80)===0x80)&&(B.aam(
).OL()===L))L.A9(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((L.F&0x200010)===0x200010
))L.A9(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((L.F&0x10)===0x10))&&((L.F&0x100000
)===0x100000))L.A9(0x10,0x0);if(((!this.Ds&&((L.F&0x4)===0x4))&&((L.F&0x10)===0x10
))&&!((L.F&0x10000)===0x10000))this.He(L);if(((L.F&0x401)===0x401)){L.F=L.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CK],this);}if(((L.F&0x200)===0x200)){L.F=L.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.CK],this);}},LN:function(){return this.
Dh;},_Init:function(aArg){E.A$._Init.call(this,aArg);this.__proto__=E.Z;this.F=0x10001F;
this.Bl(aArg);},_Mark:function(D){var A;E.A$._Mark.call(this,D);if((A=this.BP)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cs)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.KM)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AV)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Ds)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::Group"};E.Root={Dc:null,AM:B.abi(10,null,null),In:null,FP:null,JM:0,Bi:0,
Cf:B.abi(10,0,null),KE:B.abi(10,B.wg,null),DZ:B.abi(10,0,null),E7:B.abi(10,B.wf,
null),Ip:B.abi(10,0,null),FO:B.abi(10,B.wf,null),DY:B.abi(10,B.wf,null),C_:B.abi(
10,B.wf,null),EH:B.abi(10,B.wf,null),AC:0,KJ:0,KI:0,CE:B.abi(4,0,null),BG:B.abi(
4,B.wg,null),BF:0,Jt:0,Iu:0,Mh:true,Bl:function(aArg){if(!!!this.K){var obj=this;
B.abD(obj);}},Gz:function(){return this;},C3:function(AK,aClip,aOffset,Aq,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AK.JW(aClip
,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);E.Z.C3.call(this,AK,aClip,aOffset,Aq,aBlend);},A9:function(C8,
Dx){var A;E.Z.A9.call(this,C8,Dx);if(!this.G&&(((C8&0x1)===0x1)||((Dx&0x1)===0x1
)))this.U([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((C8&0x2)===0x2)||((Dx&
0x2)===0x2)))this.U([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},He:function(C){if((C!==
null)||!C)E.Z.He.call(this,C);},J9:function(C){var A;var RM=this.AV;E.Z.J9.call(
this,C);if(((RM!==this.AV)&&!this.G)&&((this.F&0x1)===0x1))this.U([0,0,(A=this.M
)[2]-A[0],A[3]-A[1]]);},Hf:function(C){var A;var RP=this.Dh;E.Z.Hf.call(this,C);
if(((RP!==this.Dh)&&!this.G)&&((this.F&0x1)===0x1))this.U([0,0,(A=this.M)[2]-A[0
],A[3]-A[1]]);},DispatchEvent:function(Ao){if(!!Ao){Ao.IQ=!!this.Bi;if(!!this.Bi
)Ao.An=this.Bi;}var Br;Br=E.Z.DispatchEvent.call(this,Ao);this.Bi=0;return Br;},
BroadcastEvent:function(Ao,aFilter){if(!!Ao){Ao.IQ=!!this.Bi;if(!!this.Bi)Ao.An=
this.Bi;}var Br=E.Z.BroadcastEvent.call(this,Ao,aFilter);this.Bi=0;return Br;},U:
function(Ad){var A;if(this.JM>0)throw new Error(I8);if(!!this.AV&&!this.G){if(((
A=this.AV.DH)[0]>=A[2])||(A[1]>=A[3])){B.we(this,0);B.we(this.AV,0);}this.AV.DH=
B.wC(this.AV.DH,Ad);}var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate
)Ad=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.G){E.Z.U.call(this,Ad);return;}
Ad=B.lb(B.abh(Ad,this.M.slice(0,2)),this.M);if((Ad[0]>=Ad[2])||(Ad[1]>=Ad[3]))return;
var H;for(H=0;H<this.BF;H=H+1)if(!(((A=B.lb(this.BG.Get(H),Ad))[0]>=A[2])||(A[1]>=
A[3]))){this.BG.Set(H,B.wC(this.BG.Get(H),Ad));this.CE.Set(H,B.aaH(this.BG.Get(H
)));return;}if(this.BF<3){this.BG.Set(this.BF,Ad);this.CE.Set(this.BF,B.aaH(Ad));
this.BF=this.BF+1;return;}var Ba;var Db;var Js=0;var Jv=0;var Nv=2147483647;this.
BG.Set(this.BF,Ad);this.CE.Set(this.BF,B.aaH(Ad));for(Ba=0;Ba<=this.BF;Ba=Ba+1)for(
Db=Ba+1;Db<=this.BF;Db=Db+1){var K0=B.aaH(B.wC(this.BG.Get(Ba),this.BG.Get(Db)));
var Of=((K0<<8)/(this.CE.Get(Ba)+this.CE.Get(Db)))|0;if(Of<Nv){Nv=Of;Js=Ba;Jv=Db;
}}this.BG.Set(Js,B.wC(this.BG.Get(Js),this.BG.Get(Jv)));this.CE.Set(Js,B.aaH(this.
BG.Get(Js)));if(Jv!==this.BF){this.BG.Set(Jv,this.BG.Get(this.BF));this.CE.Set(Jv
,this.CE.Get(this.BF));}},RD:function(){var Ch=B._NewObject(E.HX,0);Ch.IQ=!!this.
Bi;if(!!this.Bi)Ch.An=this.Bi;return Ch;},Hu:function(){var Ch=B._NewObject(E.EP
,0);Ch.IQ=!!this.Bi;if(!!this.Bi)Ch.An=this.Bi;return Ch;},Io:function(){var Ch=
B._NewObject(E.JS,0);Ch.IQ=!!this.Bi;if(!!this.Bi)Ch.An=this.Bi;return Ch;},RE:function(
Au){var H;var Hz=false;for(H=0;H<10;H=H+1)if(!!this.AM.Get(H)){var pos=this.C_.Get(
H);var V=this.AM.Get(H).G;while(!!V&&(V!==this)){pos=B.abe(pos,V.M.slice(0,2));V=
V.G;}if(!V&&(this.AM.Get(H)!==this)){var tmp=this.AM.Get(H);this.AC=H;this.AM.Set(
H,null);tmp.Be(this.Hu().InitializeUp(H,this.FO.Get(H),this.E7.Get(H),this.DZ.Get(
H),this.Cf.Get(H)+1,this.DY.Get(H),false,this.C_.Get(H),this.EH.Get(H)));this.BroadcastEvent(
this.Io().InitializeUp(H,this.Cf.Get(H)+1,false,tmp,this.C_.Get(H)),0x18);}else{
this.DZ.Set(H,(this.FP.An-this.Ip.Get(H))|0);if(this.DZ.Get(H)<10)this.DZ.Set(H,
10);this.AC=H;this.AM.Get(H).Be(this.Hu().InitializeHold(H,pos,this.E7.Get(H),this.
DZ.Get(H),this.Cf.Get(H)+1,this.DY.Get(H),this.C_.Get(H),this.EH.Get(H)));Hz=true;
}}if(!Hz)this.FP.BY(false);},GetFPS:function(){var ticksCount=0;var NH=0;ticksCount=((
new Date).getTime()-B.v$)|0;if(!!this.KJ&&(ticksCount>this.KJ))NH=((this.KI*1000
)/((ticksCount-this.KJ)|0))|0;this.KI=0;this.KJ=ticksCount;return NH;},Update:function(
){var A;if(!this.In)this.In=B._NewObject(B.Graphics.Canvas,0);this.In.IY([(A=this.
M)[2]-A[0],A[3]-A[1]]);this.In.Update();return this.UpdateGE20(this.In);},UpdateGE20:
function(AK){if(!this.BeginUpdate())return AF;var Fg=this.UpdateCanvas(AK,AX);this.
EndUpdate();return Fg;},EndUpdate:function(){if(this.BF>0){this.KI=this.KI+1;this.
BF=0;}},UpdateCanvas:function(AK,aOffset){var A;var Fg=AF;var Rz=[].concat(aOffset
,B.abf(AK.FrameSize,aOffset));var H;var Ba=this.BF;this.JM=this.JM+1;AK.E$=this;
for(H=0;(H<Ba)&&(H<4);H=H+1)if(this.CE.Get(H)>0){this.C3(AK,B.abg(this.BG.Get(H)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);Fg=B.wC(Fg,B.lb(Rz,this.BG.Get(H))
);}else Ba=Ba+1;AK.E$=null;this.JM=this.JM-1;if(!((Fg[0]>=Fg[2])||(Fg[1]>=Fg[3])
))return B.abg(Fg,aOffset);else return Fg;},GetUpdateRegion:function(Kr){var H;var
Ba=this.BF;if(Kr<0)return AF;for(H=0;(H<Ba)&&(H<4);H=H+1)if(!this.CE.Get(H)){Ba=
Ba+1;Kr=Kr+1;}else if(H===Kr)return this.BG.Get(H);return AF;},BeginUpdate:function(
){var A;var H;if(!!this.BF&&!B.aaY(this.BG.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]])){var Op=B.abi(3,B.wg,null);var Oo=this.BF;for(H=0;H<Oo;H++)Op.Set(H,this.BG.
Get(H));for(H=0;H<Oo;H++){var Oh=B.abh(Op.Get(H),this.M.slice(0,2));var Oi=this.
IE(Oh);if(!B.aaY(Oh,Oi))this.U(B.abg(Oi,this.M.slice(0,2)));}}var Ba;var Db;for(
Ba=0;Ba<(this.BF-1);Ba++)if(this.CE.Get(Ba)>0)for(Db=Ba+1;Db<this.BF;Db++)if(this.
CE.Get(Db)>0){var K0=B.aaH(B.wC(this.BG.Get(Ba),this.BG.Get(Db)));if(((K0-this.CE.
Get(Ba))-this.CE.Get(Db))<0){this.BG.Set(Ba,B.wC(this.BG.Get(Ba),this.BG.Get(Db)
));this.CE.Set(Ba,K0);this.CE.Set(Db,0);}}for(H=this.BF-1;H>=0;H--)if(!this.CE.Get(
H))this.BF=this.BF-1;return this.BF;},DoesNeedUpdate:function(){if(this.BF>0)return true;
return false;},Initialize:function(aSize){this.O([].concat(AX,aSize));if(this.Mh
)this.F=this.F|0x60;else this.F=this.F|0x20;this.U(this.M);return this;},SetRootFocus:
function(L4){if(L4===this.Mh)return false;this.Mh=L4;if(!L4)this.A9(0x0,0x40);else
this.A9(0x40,0x0);return true;},SetUserInputTimestamp:function(Rq){this.Bi=Rq;},
DriveKeyboardHitting:function(BM,I$,Eg){var A;var Mw=!!this.Dc;if(!!this.Dc&&((!
Eg||(this.Jt!==BM))||(this.Iu!==I$))){var Ch=null;var J=(E.BZ.isPrototypeOf(A=this.
Dc)?A:null);var Ej=(E.Ev.isPrototypeOf(A=this.Dc)?A:null);if(!!this.Jt)Ch=B._NewObject(
E.KeyEvent,0).Initialize(this.Jt,false);if(this.Iu!==0x00)Ch=B._NewObject(E.KeyEvent
,0).Initialize2(this.Iu,false);if(!!Ej)Ej.Be(Ch);else if(!!J)J.Be(Ch);this.Jt=0;
this.Iu=0x00;this.Dc=null;}if(!!this.Dc){var Ch=null;var J=(E.BZ.isPrototypeOf(A=
this.Dc)?A:null);var Ej=(E.Ev.isPrototypeOf(A=this.Dc)?A:null);if(!!BM)Ch=B._NewObject(
E.KeyEvent,0).Initialize(BM,true);if(this.Iu!==0x00)Ch=B._NewObject(E.KeyEvent,0
).Initialize2(I$,true);if(!!Ej)Ej.Be(Ch);else if(!!J)J.Be(Ch);}if(!this.Dc&&Eg){
if(!!BM)this.Dc=this.DispatchEvent(B._NewObject(E.KeyEvent,0).Initialize(BM,true
));if(I$!==0x00)this.Dc=this.DispatchEvent(B._NewObject(E.KeyEvent,0).Initialize2(
I$,true));if(!(E.Ev.isPrototypeOf(A=this.Dc)?A:null)&&!(E.BZ.isPrototypeOf(A=this.
Dc)?A:null))this.Dc=null;this.Jt=BM;this.Iu=I$;Mw=Mw||!!this.Dc;}this.Bi=0;return Mw;
},DriveCursorMovement:function(By){return this.DriveMultiTouchMovement(this.AC,By
);},DriveMultiTouchMovement:function(Q,By){if((Q<0)||(Q>9)){this.Bi=0;return false;
}var A0=B.abe(By,this.C_.Get(Q));this.C_.Set(Q,By);if(!this.AM.Get(Q)||B.aaX(A0,
AX)){this.Bi=0;return false;}var pos=By;var V=this.AM.Get(Q).G;while(!!V&&(V!==this
)){pos=B.abe(pos,V.M.slice(0,2));V=V.G;}if(!V&&(this.AM.Get(Q)!==this)){var tmp=
this.AM.Get(Q);this.AC=Q;this.AM.Set(Q,null);tmp.Be(this.Hu().InitializeUp(Q,this.
FO.Get(Q),this.E7.Get(Q),this.DZ.Get(Q),this.Cf.Get(Q)+1,this.DY.Get(Q),false,this.
C_.Get(Q),this.EH.Get(Q)));this.BroadcastEvent(this.Io().InitializeUp(Q,this.Cf.
Get(Q)+1,false,tmp,By),0x18);}else{this.FO.Set(Q,pos);this.AC=Q;this.AM.Get(Q).Be(
this.RD().Initialize(Q,pos,this.E7.Get(Q),A0,this.DZ.Get(Q),this.Cf.Get(Q)+1,this.
DY.Get(Q),By,this.EH.Get(Q)));}this.Bi=0;return true;},DriveCursorHitting:function(
Eg,Q,By){return this.DriveMultiTouchHitting(Eg,Q,By);},DriveMultiTouchHitting:function(
Eg,Q,By){if((Q<0)||(Q>9)){this.Bi=0;return false;}var ticksCount=this.Bi;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var R6=this.Bi;this.DriveMultiTouchMovement(
Q,By);By=this.C_.Get(Q);this.Bi=R6;if(Eg)this.EH.Set(Q,By);if(Eg&&!this.AM.Get(Q
)){var BE;var pos=By;if(B.wa(this.KE.Get(Q),By)&&((ticksCount-this.Ip.Get(Q))<=250
))this.Cf.Set(Q,this.Cf.Get(Q)+1);else this.Cf.Set(Q,0);this.KE.Set(Q,B.abh(I9,By
));this.Ip.Set(Q,ticksCount);BE=this.Er(B.abh(I9,By),Q,this.Cf.Get(Q)+1,null,null
,0x0);if(!!BE){this.BroadcastEvent(this.Io().InitializeDown(Q,this.Cf.Get(Q)+1,false
,BE.BZ,By),0x18);this.AM.Set(Q,BE.BZ);this.DY.Set(Q,BE.Av);}else{this.AM.Set(Q,null
);this.DY.Set(Q,AX);this.Bi=0;return false;}var V=BE.BZ.G;while(!!V&&(V!==this)){
pos=B.abe(pos,V.M.slice(0,2));V=V.G;}this.E7.Set(Q,pos);this.FO.Set(Q,pos);this.
DZ.Set(Q,0);this.FP.BY(true);this.AC=Q;this.AM.Get(Q).Be(this.Hu().InitializeDown(
Q,pos,this.Cf.Get(Q)+1,this.DY.Get(Q),false,By));this.Bi=0;return true;}if(!Eg&&
!!this.AM.Get(Q)){var pos=By;var V=this.AM.Get(Q).G;while(!!V&&(V!==this)){pos=B.
abe(pos,V.M.slice(0,2));V=V.G;}if(!V)pos=this.FO.Get(Q);this.AC=Q;var tmp=this.AM.
Get(Q);this.AM.Set(Q,null);tmp.Be(this.Hu().InitializeUp(Q,pos,this.E7.Get(Q),this.
DZ.Get(Q),this.Cf.Get(Q)+1,this.DY.Get(Q),false,By,this.EH.Get(Q)));this.BroadcastEvent(
this.Io().InitializeUp(Q,this.Cf.Get(Q)+1,false,tmp,By),0x18);this.Bi=0;return true;
}this.Bi=0;return false;},M4:function(E2,Nr,EE,E3){if(E2===this)E2=null;if(!this.
AM.Get(this.AC))return;var BE;BE=this.Er(B.abh(I9,this.C_.Get(this.AC)),this.AC,
1,E2,EE,E3);if(!!BE&&(this.AM.Get(this.AC)!==BE.BZ))this.Lc(BE.BZ,BE.Av);if(!BE&&(
this.AM.Get(this.AC)!==Nr))this.Lc(Nr,AX);},Lc:function(E2,DU){if(!this.AM.Get(this.
AC)||(this.AM.Get(this.AC)===E2))return;var tmp=this.AM.Get(this.AC);this.AM.Set(
this.AC,null);tmp.Be(this.Hu().InitializeUp(this.AC,this.FO.Get(this.AC),this.E7.
Get(this.AC),this.DZ.Get(this.AC),this.Cf.Get(this.AC)+1,this.DY.Get(this.AC),true
,this.C_.Get(this.AC),this.EH.Get(this.AC)));this.BroadcastEvent(this.Io().InitializeUp(
this.AC,this.Cf.Get(this.AC)+1,true,tmp,this.C_.Get(this.AC)),0x18);var pos=this.
C_.Get(this.AC);var V=null;if(!!E2)V=E2.G;while(!!V&&(V!==this)){pos=B.abe(pos,V.
M.slice(0,2));V=V.G;}if(!V&&(E2!==this)){this.AM.Set(this.AC,null);return;}this.
BroadcastEvent(this.Io().InitializeDown(this.AC,this.Cf.Get(this.AC)+1,true,E2,this.
C_.Get(this.AC)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.AM.Set(this.AC,E2);this.DY.Set(this.AC,DU);this.E7.Set(this.AC,pos);this.FO.
Set(this.AC,pos);this.Cf.Set(this.AC,0);this.DZ.Set(this.AC,0);this.Ip.Set(this.
AC,ticksCount);this.EH.Set(this.AC,this.C_.Get(this.AC));this.AM.Get(this.AC).Be(
this.Hu().InitializeDown(this.AC,pos,this.Cf.Get(this.AC)+1,this.DY.Get(this.AC)
,true,this.EH.Get(this.AC)));},OL:function(){return null;},_Init:function(aArg){
E.Z._Init.call(this,aArg);E.Timer._Init.call(this.FP={K:this},0);(this.AM=[]).__proto__=
E.Root.AM;(this.Cf=[]).__proto__=E.Root.Cf;(this.KE=[]).__proto__=E.Root.KE;(this.
DZ=[]).__proto__=E.Root.DZ;(this.E7=[]).__proto__=E.Root.E7;(this.Ip=[]).__proto__=
E.Root.Ip;(this.FO=[]).__proto__=E.Root.FO;(this.DY=[]).__proto__=E.Root.DY;(this.
C_=[]).__proto__=E.Root.C_;(this.EH=[]).__proto__=E.Root.EH;(this.CE=[]).__proto__=
E.Root.CE;(this.BG=[]).__proto__=E.Root.BG;this.__proto__=E.Root;this.F=0x10007F;
this.FP.I0(10);this.FP.Ia=[this,this.RE];this.Bl(aArg);},_Done:function(){this.__proto__=
E.Z;this.FP._Done();E.Z._Done.call(this);},_ReInit:function(){E.Z._ReInit.call(this
);this.FP._ReInit();},_Mark:function(D){var A;E.Z._Mark.call(this,D);if((A=this.
Dc)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.AM,D);if((A=this.In)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.FP)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Core::Root"};E.Event={An:0,IQ:false,Bl:function(aArg){this.An=this.JY();},JY:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=E.Event;this.Bl(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={A_:0,AL:0,Down:false,Initialize2:function(BM,Eg){this.
A_=0;this.AL=BM;this.Down=Eg;if((BM>=0x30)&&(BM<=0x39))this.A_=(10+BM)-48;if((BM>=
0x41)&&(BM<=0x5A))this.A_=(105+BM)-65;if((BM>=0x61)&&(BM<=0x7A))this.A_=(105+BM)-
97;if(BM===0x20)this.A_=131;if(!this.A_)switch(BM){case 0x2B:this.A_=132;break;case
0x2D:this.A_=133;break;case 0x2A:this.A_=134;break;case 0x2F:this.A_=135;break;case
0x3D:this.A_=136;break;case 0x2E:this.A_=137;break;case 0x2C:this.A_=138;break;case
0x3A:this.A_=139;break;case 0x3B:this.A_=140;break;default:;}return this;},Initialize:
function(BM,Eg){this.A_=BM;this.Down=Eg;this.AL=0x00;var L9=BM-10;var L8=BM-105;
if((L9>=0)&&(L9<=9))this.AL=(48+L9)&0xFFFF;if((L8>=0)&&(L8<=25))this.AL=(65+L8)&
0xFFFF;if(BM===131)this.AL=0x20;if(this.AL===0x00)switch(BM){case 132:this.AL=0x2B;
break;case 133:this.AL=0x2D;break;case 134:this.AL=0x2A;break;case 135:this.AL=0x2F;
break;case 136:this.AL=0x3D;break;case 137:this.AL=0x2E;break;case 138:this.AL=0x2C;
break;case 139:this.AL=0x3A;break;case 140:this.AL=0x3B;break;default:;}return this;
},OT:function(Nq){switch(Nq){case 141:return((this.AL>=0x41)&&(this.AL<=0x5A))||((
this.AL>=0x61)&&(this.AL<=0x7A));case 142:return(((this.AL>=0x41)&&(this.AL<=0x5A
))||((this.AL>=0x61)&&(this.AL<=0x7A)))||((this.AL>=0x30)&&(this.AL<=0x39));case
143:return(this.AL>=0x30)&&(this.AL<=0x39);case 144:return(((this.AL>=0x41)&&(this.
AL<=0x46))||((this.AL>=0x61)&&(this.AL<=0x66)))||((this.AL>=0x30)&&(this.AL<=0x39
));case 145:return this.AL!==0x00;case 146:return(this.AL===0x00)&&!!this.A_;case
147:return(((this.A_===6)||(this.A_===7))||(this.A_===4))||(this.A_===5);case 148:
return(this.AL!==0x00)||!!this.A_;default:;}return Nq===this.A_;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.JS={Kf:null,CL:B.wf,CA:0,Bk:0,Down:false,De:false,InitializeUp:function(Q,CB
,Hl,L6,Eh){this.Down=false;this.Bk=Q;this.CA=CB;this.CL=Eh;this.Kf=L6;this.De=Hl;
return this;},InitializeDown:function(Q,CB,Hl,L6,Eh){this.Down=true;this.Bk=Q;this.
CA=CB;this.CL=Eh;this.Kf=L6;this.De=Hl;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.JS;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.Kf)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.EP={IO:B.wf,CL:B.wf,CA:0,B6:0,Cw:B.wf,Bo:B.wf,Bk:0,Down:false,De:false,InitializeHold:
function(Q,GK,Jb,Jc,CB,DU,Eh,Ja){this.Down=true;this.Bk=Q;this.Bo=B.abf(GK,DU);this.
Cw=B.abf(Jb,DU);this.B6=Jc;this.CA=CB;this.CL=Eh;this.IO=Ja;return this;},InitializeUp:
function(Q,GK,Jb,Jc,CB,DU,Hl,Eh,Ja){this.Down=false;this.Bk=Q;this.Bo=B.abf(GK,DU
);this.Cw=B.abf(Jb,DU);this.B6=Jc;this.CA=CB;this.De=Hl;this.CL=Eh;this.IO=Ja;return this;
},InitializeDown:function(Q,GK,CB,DU,Hl,Eh){this.Down=true;this.Bk=Q;this.Bo=B.abf(
GK,DU);this.Cw=B.abf(GK,DU);this.B6=0;this.CA=CB;this.De=Hl;this.CL=Eh;this.IO=Eh;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.EP;},_className:"Core::CursorEvent"};E.HX={IO:B.wf,CL:B.wf,CA:0,B6:0,Av:B.wf,Cw:
B.wf,Bo:B.wf,Bk:0,Initialize:function(Q,GK,Jb,aOffset,Jc,Rp,DU,Eh,Ja){this.Bk=Q;
this.Bo=B.abf(GK,DU);this.Cw=B.abf(Jb,DU);this.Av=aOffset;this.B6=Jc;this.CA=Rp;
this.CL=Eh;this.IO=Ja;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.HX;},_className:"Core::DragEvent"};E.BB={C3:function(AK,
aClip,aOffset,Aq,aBlend){},GetClipping:function(){var A;var I=E.A$.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var HP=AF;var J;for(J=this.AD;!!J&&!((J.F&
0x200)===0x200);J=J.AD)if(((J.F&0x1)===0x1))HP=B.wC(HP,J.GetClipping());I=B.wC(I
,HP);}return I;},A9:function(C8,Dx){var A;var KO=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((Dx&0x80000)===0x80000))this.G.U(this.GetClipping());E.A$.A9.call(
this,C8,Dx);if(((!!this.G&&((this.F&0x1)===0x1))&&((C8&0x80000)===0x80000))&&!((
KO&0x80000)===0x80000))this.G.U(this.GetClipping());},O:function(C){var A;if(B.aaY(
C,this.M))return;var GZ=[(A=this.M)[2]-A[0],A[3]-A[1]];var KN=[C[2]-C[0],C[3]-C[
1]];var HN=!B.aaX(GZ,KN);var A0=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.aaX(
A0,AX)&&!HN){var J=this.AD;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400)===
0x400)){var tmp=((J.F&0x100)===0x100);J.H7(A0,tmp);}J=J.AD;}}if((HN&&(GZ[0]>0))&&(
GZ[1]>0)){var Af=this.M;var J=this.AD;while(!!J&&!((J.F&0x200)===0x200)){if(((J.
F&0x400)===0x400)){if(!!J.AN&&(J.AN.G0!==this))J.AN=null;if(!J.AN&&(J.DI!==0x14)
)J.It(Af,this);}J=J.AD;}}E.A$.O.call(this,C);if(!!this.G&&HN){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CK],
this);}}},_Init:function(aArg){E.A$._Init.call(this,aArg);this.__proto__=E.BB;this.
F=0x203;},_className:"Core::Outline"};E.BL={LJ:null,LO:null,LK:null,Ea:null,GC:null
,Dg:null,Ac:0,Bk:0,An:0,CA:0,B6:0,Av:B.wf,Cw:B.wf,Bo:B.wf,PN:8,MT:1,Down:false,GA:
false,De:false,Mc:false,Jw:0,C3:function(AK,aClip,aOffset,Aq,aBlend){},Be:function(
Ao){var A;var R=(E.EP.isPrototypeOf(Ao)?Ao:null);var AP=(E.HX.isPrototypeOf(Ao)?
Ao:null);var KL=this.GA;var En;var Dz;var JL;var Ct;var Jm;if(!R&&!AP)return null;
En=(!!R&&R.Down)&&!R.B6;Dz=(!!R&&R.Down)&&(R.B6>0);JL=(!!R&&R.Down)&&(R.B6>this.
Jw);Ct=!!R&&!R.Down;Jm=!!AP;if(En)this.Jw=((A=(R.De?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if(En){var HG=0;var EI;this.Ac=this.Ac|(1<<R.Bk);for(EI=this.Ac&4095;EI>0;EI=
EI>>1)if(!!(EI&1))HG=HG+1;if(HG===1)this.Ac=(this.Ac|16777216)|(4096<<R.Bk);}if(
Ct&&(this.Ac<16777216)){var DC=this.Gz();var BE=null;if(!!DC){var Mz=(!!this.Ah?
this.Ah:this.G);BE=DC.Er(B.abh(I_,R.CL),R.Bk,R.CA,null,Mz,0x0);}if(!!BE){var H;for(
H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BE.BZ.Be(B._NewObject(E.EP,0).InitializeDown(
H,R.Bo,R.CA,AX,true,R.CL));for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BE.BZ.Be(B._NewObject(
E.EP,0).InitializeUp(H,R.Bo,R.Bo,0,R.CA,AX,false,R.CL,R.CL));}}if(Ct)this.Ac=(this.
Ac&~(1<<R.Bk))|33554432;if(JL&&(this.Ac<16777216))this.Ac=this.Ac|67108864;if(Ct&&
R.De)this.Ac=this.Ac|67108864;if(Ct&&!(this.Ac&16777215))this.Ac=0;if(Dz&&(this.
Ac>=67108864)){var DC=this.Gz();if(!!DC)DC.M4(null,null,this,0x0);}if((Dz&&!!(this.
Ac&16777216))&&!!(this.Ac&33554432)){Dz=false;Ct=true;}if(!!R&&!(this.Ac&(4096<<
R.Bk)))return this;if(!!AP&&!(this.Ac&(4096<<AP.Bk)))return this;if(Ct&&!(this.Ac&
16777216))return this;if(((En||Jm)||Dz)&&((this.Ac<16777216)||(this.Ac>=33554432
)))return this;if(Ct)this.Ac=this.Ac&3758100479;if(Ct&&!(this.Ac&16777215))this.
Ac=0;if(!!R){this.Down=En||Dz;this.GA=this.Lw(R.Bo);this.Cw=R.Cw;this.Bo=R.Bo;this.
Av=AX;this.B6=R.B6;this.CA=R.CA;this.De=R.De;this.Bk=R.Bk;this.An=R.An;if(R.Down&&
!R.B6)KL=false;}if(!!AP){this.Down=true;this.GA=this.Lw(AP.Bo);this.Cw=AP.Cw;this.
Bo=AP.Bo;this.Av=AP.Av;this.B6=AP.B6;this.CA=AP.CA;this.Bk=AP.Bk;this.De=false;this.
An=AP.An;}var Mb=this.Down;if(!!AP)(A=this.LJ)?A[1].call(A[0],this):null;if((!!R&&
this.Down)&&!this.B6)(A=this.Dg)?A[1].call(A[0],this):null;if((!!R&&this.Down)&&(
this.B6>0))(A=this.Ea)?A[1].call(A[0],this):null;if((this.Down&&this.GA)&&!KL){this.
Mc=true;(A=this.LK)?A[1].call(A[0],this):null;}if(this.Mc&&(((Mb&&!this.GA)&&KL)||((
!Mb&&this.GA)&&KL))){this.Mc=false;(A=this.LO)?A[1].call(A[0],this):null;}if(!!R&&
!Mb)(A=this.GC)?A[1].call(A[0],this):null;return this;},Er:function(Ad,Q,CB,Ef,EE
,E3){var A;if(!!Ef&&(Ef!==this))return null;if((CB<1)||(CB>this.MT))return null;
if(this.Ac>=33554432)return null;if((this.Ac>=16777216)&&!(this.Ac&(4096<<Q)))return null;
if(this.OP()){var I=B.lb(Ad,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var CO=B.aaI(Ad);var A0=AX;if(CO[0]<I[0])A0=[I[0]-CO[0],A0[1]];if(CO[0]>=I[2])A0=[(
I[2]-CO[0])-1,A0[1]];if(CO[1]<I[1])A0=[A0[0],I[1]-CO[1]];if(CO[1]>=I[3])A0=[A0[0
],(I[3]-CO[1])-1];return B._NewObject(E.II,0).Initialize(this,A0);}}else{var A8=
B.abi(9,B.wf,null);var H;A8.Set(0,B.aaI(Ad));A8.Set(1,A8.Get(0));A8.Set(2,A8.Get(
0));A8.Set(3,A8.Get(0));A8.Set(4,A8.Get(0));A8.Set(1,[Ad[0],A8.Get(1)[1]]);A8.Set(
2,[A8.Get(2)[0],Ad[1]]);A8.Set(3,[Ad[2],A8.Get(3)[1]]);A8.Set(4,[A8.Get(4)[0],Ad[
3]]);A8.Set(5,Ad.slice(0,2));A8.Set(6,[Ad[2],Ad[1]]);A8.Set(7,[Ad[0],Ad[3]]);A8.
Set(8,Ad.slice(2,4));for(H=0;H<9;H=H+1)if(this.Lw(A8.Get(H)))return B._NewObject(
E.II,0).Initialize(this,B.abe(A8.Get(H),A8.Get(0)));}return null;},Pu:function(C
){if(C<1)C=1;this.PN=C;},MX:function(C){if(C<1)C=1;this.MT=C;},BY:function(C){if(
C)this.A9(0x100000,0x0);else this.A9(0x0,0x100000);},_Init:function(aArg){E.Ed._Init.
call(this,aArg);this.__proto__=E.BL;this.F=0x10011B;},_Mark:function(D){var A;E.
Ed._Mark.call(this,D);if((A=this.LJ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.LO)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.LK)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Ea)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.GC)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dg)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};E.Dj={
timer:null,KT:null,Iw:null,Ac:0,Ku:0,EJ:5000,HM:0,KK:B.wf,Hy:0,E5:0,AI:0,G8:0,Iz:
0,Hx:0,E4:0,AH:0,G7:0,G6:0,Cw:B.wf,MJ:B.wf,BI:B.wf,BJ:B.wf,Av:B.wf,MN:0.5,Ke:true
,Ie:false,D1:false,D2:false,Kt:false,Jw:0,C3:function(AK,aClip,aOffset,Aq,aBlend
){},Be:function(Ao){var A;var R=(E.EP.isPrototypeOf(Ao)?Ao:null);var AP=(E.HX.isPrototypeOf(
Ao)?Ao:null);var BN=(E.JS.isPrototypeOf(Ao)?Ao:null);var En;var Dz;var JL;var Ct;
var Jm;En=(!!R&&R.Down)&&!R.B6;Dz=(!!R&&R.Down)&&(R.B6>0);JL=(!!R&&R.Down)&&(R.B6>
this.Jw);Ct=!!R&&!R.Down;Jm=!!AP;if(En)this.Jw=((A=(R.De?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(En){var HG=0;var EI;this.Ac=this.Ac|(1<<R.Bk);for(EI=this.Ac&4095;EI>0;
EI=EI>>1)if(!!(EI&1))HG=HG+1;if(HG===1)this.Ac=(this.Ac|16777216)|(4096<<R.Bk);}
if(Ct&&(this.Ac<16777216)){var DC=this.Gz();var BE=null;if(!!DC){var Mz=(!!this.
Ah?this.Ah:this.G);BE=DC.Er(B.abh(I_,R.CL),R.Bk,R.CA,null,Mz,0x0);}if(!!BE){var H;
for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BE.BZ.Be(B._NewObject(E.EP,0).InitializeDown(
H,R.Bo,R.CA,AX,true,R.CL));for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))BE.BZ.Be(B._NewObject(
E.EP,0).InitializeUp(H,R.Bo,R.Bo,0,R.CA,AX,false,R.CL,R.CL));}}if(Ct)this.Ac=(this.
Ac&~(1<<R.Bk))|33554432;if(JL&&(this.Ac<16777216))this.Ac=this.Ac|67108864;if(Ct&&
R.De)this.Ac=this.Ac|67108864;if(Ct&&!(this.Ac&16777215))this.Ac=0;if(Dz&&(this.
Ac>=67108864)){var DC=this.Gz();if(!!DC)DC.M4(null,null,this,0x0);}if((Dz&&!!(this.
Ac&16777216))&&!!(this.Ac&33554432)){Dz=false;Ct=true;}if(!!R&&!(this.Ac&(4096<<
R.Bk)))return this;if(!!AP&&!(this.Ac&(4096<<AP.Bk)))return this;if(Ct&&!(this.Ac&
16777216))return this;if(((En||Jm)||Dz)&&((this.Ac<16777216)||(this.Ac>=33554432
)))return this;if(Ct)this.Ac=this.Ac&3758100479;if(Ct&&!(this.Ac&16777215))this.
Ac=0;if(!!BN&&(BN.Kf===this))return null;if((!!BN&&BN.Down)&&(this.Kt||!this.Ie)
)return null;if((!!BN&&BN.Down)&&!B.wa(this.M,this.G.OX(BN.CL)))return null;if((
!!BN&&!BN.Down)&&(!this.Kt||(this.Ku!==BN.Bk)))return null;if((!R&&!AP)&&!BN)return null;
if(!!R){this.Kt=En||Dz;this.Ku=R.Bk;this.Cw=R.Cw;}if(!!AP)this.Ku=AP.Bk;if(!!BN){
this.Kt=BN.Down;this.Ku=BN.Bk;}if(!!BN&&BN.Down){this.MA();this.AH=(((BN.An-this.
G6)*0.001)*this.E4)+this.AH;this.AI=(((BN.An-this.Iz)*0.001)*this.E5)+this.AI;if(
this.D1)this.AH=0;if(this.D2)this.AI=0;this.E4=0;this.E5=0;this.D1=false;this.D2=
false;this.KK=this.Av;this.HM=BN.An;return this;}if(En){this.MA();this.AH=(((R.An-
this.G6)*0.001)*this.E4)+this.AH;this.AI=(((R.An-this.Iz)*0.001)*this.E5)+this.AI;
if(this.D1||!this.Ie)this.AH=0;if(this.D2||!this.Ie)this.AI=0;this.E4=0;this.E5=
0;this.D1=false;this.D2=false;if(!this.Ie){this.Ie=true;(A=this.KT)?A[1].call(A[
0],this):null;}this.KK=this.Av;this.HM=R.An;}if(!!AP){var B0=B.abe(AP.Bo,AP.Cw);
var Al=this.Av;if(this.Ke)Al=[this.KK[0]+B0[0],Al[1]];Al=[Al[0],this.KK[1]+B0[1]
];if(Al[0]<this.BJ[0])Al=[this.BJ[0]+(((Al[0]-this.BJ[0])/2)|0),Al[1]];else if(Al[
0]>this.BI[0])Al=[this.BI[0]+(((Al[0]-this.BI[0])/2)|0),Al[1]];if(Al[1]<this.BJ[
1])Al=[Al[0],this.BJ[1]+(((Al[1]-this.BJ[1])/2)|0)];else if(Al[1]>this.BI[1])Al=[
Al[0],this.BI[1]+(((Al[1]-this.BI[1])/2)|0)];if(!B.aaX(Al,this.Av)){this.MJ=B.abe(
Al,this.Av);this.Av=Al;(A=this.Iw)?A[1].call(A[0],this):null;}}if((!!BN&&!BN.Down
)&&((BN.An-this.HM)>=200)){this.AH=0;this.AI=0;}if(Dz&&((R.An-this.HM)>=200)){this.
AH=0;this.AI=0;}if(!!AP&&(AP.An>this.HM)){var B0=AP.Av;var NS=1000/(AP.An-this.HM
);var Gm=0;var Gn;if(this.Ke)Gm=B0[0]*NS;Gn=B0[1]*NS;if((Gm*this.AH)<0)this.AH=0;
if((Gn*this.AI)<0)this.AI=0;this.AH=(this.AH+Gm)*0.5;this.AI=(this.AI+Gn)*0.5;this.
HM=AP.An;}if(!Ct&&!BN)return this;if(!!R&&R.De){this.AH=0;this.AI=0;}if((this.Av[
0]<=this.BJ[0])||(this.Av[0]>=this.BI[0]))this.AH=0;else if(!this.AH){var AQ=this.
Av[0];var Bc=this.BJ[0];var Bd=this.BI[0];if(AQ<Bc)Bd=this.BJ[0];else if(AQ>Bd)Bc=
this.BI[0];else{Bc=AQ;Bd=AQ;}if((Bc-AQ)<=(AQ-Bd))AQ=Bc;else AQ=Bd;if(AQ!==this.Av[
0]){var Cg=AQ-this.Av[0];if(Cg>0)this.AH=Math.sqrt((Cg*2)*this.EJ)+20;if(Cg<0)this.
AH=-Math.sqrt((-Cg*2)*this.EJ)-20;this.E4=(400-(this.AH*this.AH))/(2*Cg);this.Hx=
AQ;}}else{var R7=this.AH*this.AH;var Cg=R7/(2*this.EJ);var AQ=this.Av[0];if(this.
AH>0)AQ=AQ+(Cg|0);if(this.AH<0)AQ=AQ-(Cg|0);if(AQ>this.BI[0])AQ=this.BI[0];else if(
AQ<this.BJ[0])AQ=this.BJ[0];var Om=AQ;var Bc=this.BJ[0];var Bd=this.BI[0];if(AQ<
Bc)Bd=this.BJ[0];else if(AQ>Bd)Bc=this.BI[0];else{Bc=AQ;Bd=AQ;}if(this.AH>0){if(
Bd<=this.Av[0])AQ=Bc;else if((AQ-Bd)<(Bc-AQ))AQ=Bd;else AQ=Bc;}else if(Bc>=this.
Av[0])AQ=Bd;else if((AQ-Bd)>(Bc-AQ))AQ=Bc;else AQ=Bd;if(AQ!==this.Av[0]){Cg=AQ-this.
Av[0];if(AQ!==Om){var Gw=AQ-Om;if(Gw>0)this.AH=this.AH+Math.sqrt((Gw*2)*this.EJ);
if(Gw<0)this.AH=this.AH-Math.sqrt((-Gw*2)*this.EJ);}if(this.AH>0)this.AH=this.AH+
20;if(this.AH<0)this.AH=this.AH-20;this.E4=(400-(this.AH*this.AH))/(2*Cg);this.Hx=
AQ;}else this.AH=0;}if((this.Av[1]<=this.BJ[1])||(this.Av[1]>=this.BI[1]))this.AI=
0;else if(!this.AI){var AR=this.Av[1];var Bc=this.BJ[1];var Bd=this.BI[1];if(AR<
Bc)Bd=this.BJ[1];else if(AR>Bd)Bc=this.BI[1];else{Bc=AR;Bd=AR;}if((Bc-AR)<=(AR-Bd
))AR=Bc;else AR=Bd;if(AR!==this.Av[1]){var Cg=AR-this.Av[1];if(Cg>0)this.AI=Math.
sqrt((Cg*2)*this.EJ)+20;if(Cg<0)this.AI=-Math.sqrt((-Cg*2)*this.EJ)-20;this.E5=(
400-(this.AI*this.AI))/(2*Cg);this.Hy=AR;}}else{var R8=this.AI*this.AI;var Cg=R8
/(2*this.EJ);var AR=this.Av[1];if(this.AI>0)AR=AR+(Cg|0);if(this.AI<0)AR=AR-(Cg|
0);if(AR>this.BI[1])AR=this.BI[1];else if(AR<this.BJ[1])AR=this.BJ[1];var On=AR;
var Bc=this.BJ[1];var Bd=this.BI[1];if(AR<Bc)Bd=this.BJ[1];else if(AR>Bd)Bc=this.
BI[1];else{Bc=AR;Bd=AR;}if(this.AI>0){if(Bd<=this.Av[1])AR=Bc;else if((AR-Bd)<(Bc-
AR))AR=Bd;else AR=Bc;}else if(Bc>=this.Av[1])AR=Bd;else if((AR-Bd)>(Bc-AR))AR=Bc;
else AR=Bd;if(AR!==this.Av[1]){Cg=AR-this.Av[1];if(AR!==On){var Gw=AR-On;if(Gw>0
)this.AI=this.AI+Math.sqrt((Gw*2)*this.EJ);if(Gw<0)this.AI=this.AI-Math.sqrt((-Gw
*2)*this.EJ);}if(this.AI>0)this.AI=this.AI+20;if(this.AI<0)this.AI=this.AI-20;this.
E5=(400-(this.AI*this.AI))/(2*Cg);this.Hy=AR;}else this.AI=0;}if(!!R)this.G6=R.An;
if(!!BN)this.G6=BN.An;this.Iz=this.G6;this.G7=this.Av[0];this.G8=this.Av[1];this.
R9();return this;},Er:function(Ad,Q,CB,Ef,EE,E3){var A;if(!!Ef&&(Ef!==this))return null;
if(this.Ac>=33554432)return null;if((this.Ac>=16777216)&&!(this.Ac&(4096<<Q)))return null;
if(!this.Ke&&!!(E3&0xC))return null;var I=B.lb(Ad,this.M);if(!((I[0]>=I[2])||(I[
1]>=I[3]))){var CO=B.aaI(Ad);var A0=AX;if(CO[0]<I[0])A0=[I[0]-CO[0],A0[1]];if(CO[
0]>=I[2])A0=[(I[2]-CO[0])-1,A0[1]];if(CO[1]<I[1])A0=[A0[0],I[1]-CO[1]];if(CO[1]>=
I[3])A0=[A0[0],(I[3]-CO[1])-1];return B._NewObject(E.II,0).Initialize(this,A0);}
return null;},MA:function(){if(!!this.timer){B.z9([this,this.CF],this.timer,0);this.
timer=null;}},R9:function(){this.timer=B._GetAutoObject(B.acj.Fj);B.zV([this,this.
CF],this.timer,0);},CF:function(Au){var A;if(!this.timer)return;var IA=(this.timer.
An-this.G6)*0.001;var IB=(this.timer.An-this.Iz)*0.001;var Sa=IA*IA;var Sb=IB*IB;
var Gm=(this.E4*IA)+this.AH;var Gn=(this.E5*IB)+this.AI;var Al=[((((this.E4*0.5)
*Sa)+(this.AH*IA))+this.G7)|0,((((this.E5*0.5)*Sb)+(this.AI*IB))+this.G8)|0];if(
this.D1&&(IA>=0.5)){Al=[this.Hx,Al[1]];this.AH=0;this.E4=0;this.G7=Al[0];this.D1=
false;}else if(this.D1){var GR=1-Math.pow(1-(IA/0.5),5);Al=[(this.G7+((this.Hx-this.
G7)*GR))|0,Al[1]];}if(this.D2&&(IB>=0.5)){Al=[Al[0],this.Hy];this.AI=0;this.E5=0;
this.G8=Al[1];this.D2=false;}else if(this.D2){var GR=1-Math.pow(1-(IB/0.5),5);Al=[
Al[0],(this.G8+((this.Hy-this.G8)*GR))|0];}if(((this.AH>0)&&(Gm<0))||((this.AH<0
)&&(Gm>0))){Gm=0;Al=[this.Av[0],Al[1]];}if(((this.AI>0)&&(Gn<0))||((this.AI<0)&&(
Gn>0))){Gn=0;Al=[Al[0],this.Av[1]];}if(!this.D1&&(Al[0]<this.BJ[0])){this.G7=Al[
0];this.Hx=this.BJ[0];this.G6=this.timer.An;this.D1=true;}else if(!this.D1&&(Al[
0]>this.BI[0])){this.G7=Al[0];this.Hx=this.BI[0];this.G6=this.timer.An;this.D1=true;
}if(!this.D2&&(Al[1]<this.BJ[1])){this.G8=Al[1];this.Hy=this.BJ[1];this.Iz=this.
timer.An;this.D2=true;}else if(!this.D2&&(Al[1]>this.BI[1])){this.G8=Al[1];this.
Hy=this.BI[1];this.Iz=this.timer.An;this.D2=true;}if(((!this.D1&&!!this.AH)&&(Gm>-
20))&&(Gm<20)){Al=[this.Hx,Al[1]];this.AH=0;this.E4=0;this.G7=Al[0];}if(((!this.
D2&&!!this.AI)&&(Gn>-20))&&(Gn<20)){Al=[Al[0],this.Hy];this.AI=0;this.E5=0;this.
G8=Al[1];}if(!B.aaX(Al,this.Av)){this.MJ=B.abe(Al,this.Av);this.Av=Al;(A=this.Iw
)?A[1].call(A[0],this):null;}if(((!this.AH&&!this.AI)&&!this.D1)&&!this.D2){this.
MA();this.Ie=false;}},Pd:function(C){if(C<0)C=0;if(C>1)C=1;if(C===this.MN)return;
this.MN=C;if(C<(1e-007))C=1e-007;this.EJ=C*10000;},_Init:function(aArg){E.A$._Init.
call(this,aArg);this.__proto__=E.Dj;this.F=0x10011B;},_Mark:function(D){var A;E.
A$._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.KT)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Iw)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"};E.Ev={AD:null,GC:
null,Dg:null,Ea:null,HK:0,An:0,M3:0,D_:148,A_:0,AL:0,Cl:true,Down:false,LW:false
,Bl:function(aArg){var A;var E$=(E.Z.isPrototypeOf(A=this.K)?A:null);if(!E$)throw new
Error(Kn);this.AD=E$.KM;E$.KM=this;},Be:function(Ao){var A;if(!!Ao&&Ao.OT(this.D_
)){this.Down=Ao.Down;this.A_=Ao.A_;this.AL=Ao.AL;this.An=Ao.An;if(Ao.Down){this.
M3=this.HK;this.LW=this.HK>0;if(this.LW)(A=this.Ea)?A[1].call(A[0],this):null;else(
A=this.Dg)?A[1].call(A[0],this):null;this.HK=this.HK+1;return true;}if(!Ao.Down){
this.LW=this.HK>1;this.M3=this.HK-1;this.HK=0;(A=this.GC)?A[1].call(A[0],this):null;
return true;}}return false;},_Init:function(aArg){this.__proto__=E.Ev;this.Bl(aArg
);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.GC
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dg)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.Ea)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};E.II={BZ:null,IJ:0,Av:B.wf,Initialize:function(L,aOffset
){this.BZ=L;this.Av=aOffset;this.IJ=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=E.II;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.BZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};E.H3={
G0:null,BO:B.wg,Af:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=E.H3;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.G0)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K
)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};E.J1={Gq:B.wf,Gp:B.wf,_Init:function(aArg){E.H3._Init.call(
this,aArg);this.__proto__=E.J1;},_className:"Core::LayoutLineContext"};E.J2={JC:
B.wf,JB:B.wf,Gq:B.wf,Gp:B.wf,_Init:function(aArg){E.H3._Init.call(this,aArg);this.
__proto__=E.J2;},_className:"Core::LayoutQuadContext"};E.Fy={resource:null,Et:function(
){this.resource=null;},Bl:function(aArg){this.resource=aArg;},_Init:function(aArg
){this.__proto__=E.Fy;this.Bl(aArg);B.h7++;},_Done:function(){this.Et();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};E.Timer={Ia:null,timer:null,An:0,Period:1000,JP:0,Cl:false,Et:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},KU:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},I0:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Cl)this.KU(this.JP,C);},J8:function(C){if(C<0)C=0;if(C===this.
JP)return;this.JP=C;if(this.Cl)this.KU(C,this.Period);},BY:function(C){if(C===this.
Cl)return;this.Cl=C;if(C)this.KU(this.JP,this.Period);else this.KU(0,0);this.An=
this.JY();},JY:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.An=this.JY();if(!this.Period
)this.BY(false);(A=this.Ia)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.Et();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Ia)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.M1={LL:null,Cy:null,Ob:function(
Au){var A;(A=this.LL)?A[1].call(A[0],this):null;},Pp:function(C){if(B.aaZ(this.Cy
,C))return;if(!!this.Cy)B.z$([this,this.Ob],this.Cy,0);this.Cy=C;if(!!this.Cy)B.
zX([this,this.Ob],this.Cy,0);},_Init:function(aArg){this.__proto__=E.M1;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.LL)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cy)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};E.Tf={
Tg:0x1,Ss:0x2,SD:0x4,Td:0x8,Cl:0x10,S9:0x20,SE:0x40,SO:0x80,SC:0x100,SJ:0x200,SB:
0x400,SW:0x800,Nb:0x1000,Te:0x2000,ST:0x4000,SU:0x8000,Sy:0x10000,SS:0x20000,S6:
0x40000,Sz:0x80000,SV:0x100000,Sx:0x200000};E.DI={SX:0x1,SY:0x2,So:0x4,Sp:0x8,Sq:
0x10,Sn:0x20};E.SG={SP:0,Ta:1,Su:2,SK:3,S0:4,Tb:5,Tc:6,Sv:7,Sw:8,SM:9,SL:10,S2:11
,S1:12};E.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:
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
346};E.SZ={Tk:0x1,Th:0x2,Ti:0x4,Tj:0x8,SN:0x10,SF:0x20};
E._Init=function(){E.H4.__proto__=E.BZ;E.Ed.__proto__=E.BZ;E.A$.__proto__=E.BZ;E.
Z.__proto__=E.A$;E.Root.__proto__=E.Z;E.KeyEvent.__proto__=E.Event;E.JS.__proto__=
E.Event;E.EP.__proto__=E.Event;E.HX.__proto__=E.Event;E.BB.__proto__=E.A$;E.BL.__proto__=
E.Ed;E.Dj.__proto__=E.A$;E.J1.__proto__=E.H3;E.J2.__proto__=E.H3;};E._ReInit=function(
){};E.Dm=function(D){};return E;})();

/* Embedded Wizard */