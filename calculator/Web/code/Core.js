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
var AV=[0,0];var AF=[0,0,0,0];var Da="The view does not belong to this group";var
Db=[340,590];var Ew="No view to restack";var Ex="View is not in this group";var EU=
"No view to remove";var Hf="No view to add";var Hg="View already in a group";var
I0="Recursive invalidate during active update cycle.";var I1=[-8,-8,9,9];var Kb=[
0,0,1,1];var LM="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
E.BV={AC:null,Ah:null,G:null,AM:null,F:0x103,D1:0,DA:0x14,Il:function(O,Id){},Dm:
function(C){if(this.D1===C)return;this.D1=C;if(!!this.G){var F0=this.AC;var BW=0;
while(!!F0&&(C>F0.D1)){F0=F0.AC;BW=BW+1;}F0=this.Ah;while(!!F0&&(C<F0.D1)){F0=F0.
Ah;BW=BW-1;}if(!!BW)this.G.Pm(this,BW);}},G_:function(C){var A;var BW=C^this.DA;
if(!BW)return;this.DA=C;if(!!this.AM&&!((this.F&0x400)===0x400)){this.G.F=this.G.
F|0x5000;B.pe([A=this.G,A.CC],this);this.G.T([0,0,(A=this.G.M)[2]-A[0],A[3]-A[1]
]);}if(!!this.AM&&((this.F&0x400)===0x400)){this.AM.GS.F=this.AM.GS.F|0x1000;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],this);}},Gc:function(){var W=this.G;while(
!!W){var Du=(E.Root.isPrototypeOf(W)?W:null);if(!!Du)return Du;W=W.G;}return null;
},CV:function(AJ,aClip,aOffset,Ap,aBlend){},GetClipping:function(){return this.GetExtent(
);},Bc:function(Ao){return null;},Eb:function(Ad,P,Ct,D2,Ey,EW){return null;},Ix:
function(Ad){return Ad;},Iy:function(O,B_){return AV;},H0:function(aOffset,Ic){}
,GetExtent:function(){return AF;},A7:function(C0,Dp){var A;if(((this.F&0x200)===
0x200))C0=C0&~0x400;var Mc=(this.F&~Dp)|C0;var D5=Mc^this.F;this.F=Mc;if(!!this.
G&&!!(D5&0x14)){var Ni=((this.F&0x14)===0x14);if(Ni&&!this.G.Dj)this.G.G9(this);
if(!Ni&&(this.G.Dj===this))this.G.G9(this.G.Mv(this,0x14));}if(!!this.G&&!!(D5&0x403
))this.G.T(this.GetClipping());if(((!!this.AM&&!!this.G)&&((Mc&0x400)===0x400))&&((
D5&0x1)===0x1)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC
],this);}if(!!this.G&&((D5&0x400)===0x400)){this.AM=null;this.F=this.F|0x800;this.
G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],this);}if(((((D5&0x100000)===0x100000)&&((
Dp&0x100000)===0x100000))&&((this.F&0x10)===0x10))&&!((this.F&0x200080)===0x200080
))this.A7(0x0,0x10);if(((((D5&0x100000)===0x100000)&&((C0&0x100000)===0x100000))&&
!((this.F&0x10)===0x10))&&(!((this.F&0x200000)===0x200000)||((!((this.F&0x80)===
0x80)&&!!this.G)&&((this.G.F&0x10)===0x10))))this.A7(0x10,0x0);if(((((D5&0x200000
)===0x200000)&&((Dp&0x200000)===0x200000))&&!((this.F&0x10)===0x10))&&((this.F&0x100000
)===0x100000))this.A7(0x10,0x0);if((((((D5&0x200000)===0x200000)&&((C0&0x200000)===
0x200000))&&((this.F&0x100010)===0x100010))&&!((this.F&0x80)===0x80))&&((!!this.
G&&!((this.G.F&0x10)===0x10))||((((this.F&0x10000)===0x10000)&&!!this.G)&&(null!==
this))))this.A7(0x0,0x10);},_Init:function(aArg){this.__proto__=E.BV;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ah)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AM)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=
D);},K:null,_cycle:0,_observers:null,_className:"Core::View"};E.HY={AS:B.wf,AR:B.
wf,Il:function(O,Id){var S=B._NewObject(E.JR,0);this.AM=null;S.BI=this.getExtent(
);S.Af=O;S.GS=Id;S.FV=this.AR;S.FW=this.AS;this.AM=S;},Iy:function(O,B_){var A;var
Ai=this.DA;var S=(E.JR.isPrototypeOf(A=this.AM)?A:null);var x1=S.BI[0];var y1=S.
BI[1];var x2=S.BI[2];var y2=S.BI[3];var Bw=[O[2]-O[0],O[3]-O[1]];var Am=x2-x1;var
Ag=y2-y1;var tmp;if(!B_){var Co=[(A=S.Af)[2]-A[0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-
S.Af[1];if(Co[0]!==Bw[0]){var A0=((Ai&0x4)===0x4);var A1=((Ai&0x8)===0x8);var CN=((
Ai&0x1)===0x1);if(!A0&&(CN||!A1))x1=((x1*Bw[0])/Co[0])|0;if(!A1&&(CN||!A0)){x2=x2-
S.Af[0];x2=((x2*Bw[0])/Co[0])|0;x2=x2-Bw[0];}else x2=x2-S.Af[2];x1=x1+O[0];x2=x2+
O[2];if(!CN){if(A0&&!A1)x2=x1+Am;else if(!A0&&A1)x1=x2-Am;else{x1=x1+((((x2-x1)-
Am)/2)|0);x2=x1+Am;}}}else{x2=x2-S.Af[2];x1=x1+O[0];x2=x2+O[2];}if(Co[1]!==Bw[1]
){var A2=((Ai&0x10)===0x10);var AZ=((Ai&0x20)===0x20);var CO=((Ai&0x2)===0x2);if(
!A2&&(CO||!AZ))y1=((y1*Bw[1])/Co[1])|0;if(!AZ&&(CO||!A2)){y2=y2-S.Af[1];y2=((y2*
Bw[1])/Co[1])|0;y2=y2-Bw[1];}else y2=y2-S.Af[3];y1=y1+O[1];y2=y2+O[3];if(!CO){if(
A2&&!AZ)y2=y1+Ag;else if(!A2&&AZ)y1=y2-Ag;else{y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+
Ag;}}}else{y2=y2-S.Af[3];y1=y1+O[1];y2=y2+O[3];}}else{switch(B_){case 3:{x1=O[0];
x2=x1+Am;}break;case 4:{x2=O[2];x1=x2-Am;}break;case 1:{y1=O[1];y2=y1+Ag;}break;
case 2:{y2=O[3];y1=y2-Ag;}break;default:;}if((B_===3)||(B_===4)){var A2=((Ai&0x10
)===0x10);var AZ=((Ai&0x20)===0x20);var CO=((Ai&0x2)===0x2);if(CO){y1=O[1];y2=O[
3];}else if(A2&&!AZ){y1=O[1];y2=y1+Ag;}else if(AZ&&!A2){y2=O[3];y1=y2-Ag;}else{y1=
O[1]+((((O[3]-O[1])-Ag)/2)|0);y2=y1+Ag;}}if((B_===1)||(B_===2)){var A0=((Ai&0x4)===
0x4);var A1=((Ai&0x8)===0x8);var CN=((Ai&0x1)===0x1);if(CN){x1=O[0];x2=O[2];}else
if(A0&&!A1){x1=O[0];x2=x1+Am;}else if(A1&&!A0){x2=O[2];x1=x2-Am;}else{x1=O[0]+((((
O[2]-O[0])-Am)/2)|0);x2=x1+Am;}}}S.isEmpty=(x1>=x2)||(y1>=y2);Am=x2-x1;Ag=y2-y1;
if(S.FW[0]<S.FV[0]){tmp=x1;x1=x2-1;x2=tmp-1;}if(S.FW[1]<S.FV[1]){tmp=y1;y1=y2-1;
y2=tmp-1;}if((x2-x1)===1)x2=x1;if((y2-y1)===1)y2=y1;if(((this.F&0x100)===0x100)){
this.AR=[x1,y1];this.AS=[x2,y2];}else{this.Ep([x1,y1]);this.DZ([x2,y2]);this.AM=
S;}return[Am,Ag];},H0:function(aOffset,Ic){if(Ic){this.AR=B.abf(this.AR,aOffset);
this.AS=B.abf(this.AS,aOffset);}else{this.Ep(B.abf(this.AR,aOffset));this.DZ(B.abf(
this.AS,aOffset));}},GetExtent:function(){if(!!this.AM&&this.AM.isEmpty)return AF;
return this.getExtent();},getExtent:function(){var x1=this.AR[0];var y1=this.AR[
1];var x2=this.AS[0];var y2=this.AS[1];var Am=x2-x1;var Ag=y2-y1;var tmp;if(Am<0
)Am=-Am;if(Ag<0)Ag=-Ag;if(Am>=Ag){if(x2>x1)x2=x2-1;if(x2<x1)x2=x2+1;}if(Ag>=Am){
if(y2>y1)y2=y2-1;if(y2<y1)y2=y2+1;}if(x2<x1){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=
y1;y1=y2;y2=tmp;}return[x1,y1,x2+1,y2+1];},DZ:function(C){var A;if(B.aaX(C,this.
AS))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());this.AM=
null;this.AS=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());if((
!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],this);}},Ep:function(C){var
A;if(B.aaX(C,this.AR))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping(
));this.AM=null;this.AR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],this);}},_Init:function(
aArg){E.BV._Init.call(this,aArg);this.__proto__=E.HY;},_className:"Core::LineView"
};E.D0={BP:B.wf,B9:B.wf,AS:B.wf,AR:B.wf,Il:function(O,Id){var S=B._NewObject(E.JS
,0);this.AM=null;S.BI=this.GetExtent();S.Af=O;S.GS=Id;S.FV=this.AR;S.FW=this.AS;
S.Jr=this.B9;S.Js=this.BP;this.AM=S;},Iy:function(O,B_){var A;var Ai=this.DA;var
S=(E.JS.isPrototypeOf(A=this.AM)?A:null);var x1=S.BI[0];var y1=S.BI[1];var x2=S.
BI[2];var y2=S.BI[3];var Bw=[O[2]-O[0],O[3]-O[1]];var Am=x2-x1;var Ag=y2-y1;if(!
B_){var Co=[(A=S.Af)[2]-A[0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-S.Af[1];if(Co[0]!==Bw[
0]){var A0=((Ai&0x4)===0x4);var A1=((Ai&0x8)===0x8);var CN=((Ai&0x1)===0x1);if(!
A0&&(CN||!A1))x1=((x1*Bw[0])/Co[0])|0;if(!A1&&(CN||!A0)){x2=x2-S.Af[0];x2=((x2*Bw[
0])/Co[0])|0;x2=x2-Bw[0];}else x2=x2-S.Af[2];x1=x1+O[0];x2=x2+O[2];if(!CN){if(A0&&
!A1)x2=x1+Am;else if(!A0&&A1)x1=x2-Am;else{x1=x1+((((x2-x1)-Am)/2)|0);x2=x1+Am;}
}}else{x2=x2-S.Af[2];x1=x1+O[0];x2=x2+O[2];}if(Co[1]!==Bw[1]){var A2=((Ai&0x10)===
0x10);var AZ=((Ai&0x20)===0x20);var CO=((Ai&0x2)===0x2);if(!A2&&(CO||!AZ))y1=((y1
*Bw[1])/Co[1])|0;if(!AZ&&(CO||!A2)){y2=y2-S.Af[1];y2=((y2*Bw[1])/Co[1])|0;y2=y2-
Bw[1];}else y2=y2-S.Af[3];y1=y1+O[1];y2=y2+O[3];if(!CO){if(A2&&!AZ)y2=y1+Ag;else
if(!A2&&AZ)y1=y2-Ag;else{y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+Ag;}}}else{y2=y2-S.Af[
3];y1=y1+O[1];y2=y2+O[3];}}else{switch(B_){case 3:{x1=O[0];x2=x1+Am;}break;case 4:{
x2=O[2];x1=x2-Am;}break;case 1:{y1=O[1];y2=y1+Ag;}break;case 2:{y2=O[3];y1=y2-Ag;
}break;default:;}if((B_===3)||(B_===4)){var A2=((Ai&0x10)===0x10);var AZ=((Ai&0x20
)===0x20);var CO=((Ai&0x2)===0x2);if(CO){y1=O[1];y2=O[3];}else if(A2&&!AZ){y1=O[
1];y2=y1+Ag;}else if(AZ&&!A2){y2=O[3];y1=y2-Ag;}else{y1=O[1]+((((O[3]-O[1])-Ag)/
2)|0);y2=y1+Ag;}}if((B_===1)||(B_===2)){var A0=((Ai&0x4)===0x4);var A1=((Ai&0x8)===
0x8);var CN=((Ai&0x1)===0x1);if(CN){x1=O[0];x2=O[2];}else if(A0&&!A1){x1=O[0];x2=
x1+Am;}else if(A1&&!A0){x2=O[2];x1=x2-Am;}else{x1=O[0]+((((O[2]-O[0])-Am)/2)|0);
x2=x1+Am;}}}S.isEmpty=(x1>=x2)||(y1>=y2);Am=(x2-x1)-1;Ag=(y2-y1)-1;var FM=S.BI[0
];var FN=S.BI[1];var E2=(S.BI[2]-FM)-1;var E1=(S.BI[3]-FN)-1;if(!E2)E2=1;if(!E1)
E1=1;if(((this.F&0x100)===0x100)){this.AR=[x1+((((S.FV[0]-FM)*Am)/E2)|0),y1+((((
S.FV[1]-FN)*Ag)/E1)|0)];this.AS=[x1+((((S.FW[0]-FM)*Am)/E2)|0),y1+((((S.FW[1]-FN
)*Ag)/E1)|0)];this.B9=[x1+((((S.Jr[0]-FM)*Am)/E2)|0),y1+((((S.Jr[1]-FN)*Ag)/E1)|
0)];this.BP=[x1+((((S.Js[0]-FM)*Am)/E2)|0),y1+((((S.Js[1]-FN)*Ag)/E1)|0)];}else{
this.Ep([x1+((((S.FV[0]-FM)*Am)/E2)|0),y1+((((S.FV[1]-FN)*Ag)/E1)|0)]);this.DZ([
x1+((((S.FW[0]-FM)*Am)/E2)|0),y1+((((S.FW[1]-FN)*Ag)/E1)|0)]);this.Gk([x1+((((S.
Jr[0]-FM)*Am)/E2)|0),y1+((((S.Jr[1]-FN)*Ag)/E1)|0)]);this.G$([x1+((((S.Js[0]-FM)
*Am)/E2)|0),y1+((((S.Js[1]-FN)*Ag)/E1)|0)]);this.AM=S;}return[Am+1,Ag+1];},H0:function(
aOffset,Ic){if(Ic){this.AR=B.abf(this.AR,aOffset);this.AS=B.abf(this.AS,aOffset);
this.B9=B.abf(this.B9,aOffset);this.BP=B.abf(this.BP,aOffset);}else{this.Ep(B.abf(
this.AR,aOffset));this.DZ(B.abf(this.AS,aOffset));this.Gk(B.abf(this.B9,aOffset)
);this.G$(B.abf(this.BP,aOffset));}},GetExtent:function(){if(!!this.AM&&this.AM.
isEmpty)return AF;var x1=this.AR[0];var y1=this.AR[1];var x2=this.B9[0];var y2=this.
B9[1];if((((this.BP[0]!==x1)||(this.AS[1]!==y1))||(this.AS[0]!==x2))||(this.BP[1
]!==y2)){if(this.AS[0]<x1)x1=this.AS[0];if(this.B9[0]<x1)x1=this.B9[0];if(this.BP[
0]<x1)x1=this.BP[0];if(this.AS[1]<y1)y1=this.AS[1];if(this.B9[1]<y1)y1=this.B9[1
];if(this.BP[1]<y1)y1=this.BP[1];if(this.AR[0]>x2)x2=this.AR[0];if(this.AS[0]>x2
)x2=this.AS[0];if(this.BP[0]>x2)x2=this.BP[0];if(this.AR[1]>y2)y2=this.AR[1];if(
this.AS[1]>y2)y2=this.AS[1];if(this.BP[1]>y2)y2=this.BP[1];}else{var tmp;if(x2<x1
){tmp=x1;x1=x2;x2=tmp;}if(y2<y1){tmp=y1;y1=y2;y2=tmp;}}return[x1,y1,x2+1,y2+1];}
,G$:function(C){var A;if(B.aaX(C,this.BP))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.T(this.GetClipping());this.AM=null;this.BP=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.T(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CC],this);}},Gk:function(C){var A;if(B.aaX(C,this.B9))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.T(this.GetClipping());this.AM=null;this.B9=C;if(!!this.
G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CC],this);}},DZ:function(C){var A;if(B.aaX(C,this.AS))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());this.AM=null;
this.AS=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());if((!!this.
G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;
this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],this);}},Ep:function(C){var A;if(B.
aaX(C,this.AR))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping(
));this.AM=null;this.AR=C;if(!!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],this);}},Lh:function(
Ch){var A6=B.abi(4,B.wf,null);var H=0;var A_=3;var L7=false;var L8=false;A6.Set(
0,this.AR);A6.Set(1,this.AS);A6.Set(2,this.B9);A6.Set(3,this.BP);while(H<4){var N4=
A6.Get(H)[0];var KP=A6.Get(H)[1];var RT=A6.Get(A_)[0];var Mm=A6.Get(A_)[1];if(((
KP>Ch[1])!==(Mm>Ch[1]))||((KP<Ch[1])!==(Mm<Ch[1]))){var DS=((((RT-N4)*(Ch[1]-KP)
)/(Mm-KP))|0)+N4;if(Ch[0]>DS)L7=!L7;if(Ch[0]<DS)L8=!L8;}A_=H;H=H+1;}return L7||L8;
},Os:function(){return((((this.AR[0]===this.BP[0])&&(this.AS[0]===this.B9[0]))&&(
this.AR[1]===this.AS[1]))&&(this.B9[1]===this.BP[1]))||((((this.AR[0]===this.AS[
0])&&(this.B9[0]===this.BP[0]))&&(this.AR[1]===this.BP[1]))&&(this.AS[1]===this.
B9[1]));},_Init:function(aArg){E.BV._Init.call(this,aArg);this.__proto__=E.D0;},
_className:"Core::QuadView"};E.A9={M:B.wg,Il:function(O,Id){var S=B._NewObject(E.
HX,0);S.BI=this.M;S.Af=O;S.GS=Id;this.AM=S;},Iy:function(O,B_){var A;var Ai=this.
DA;var S=this.AM;var x1=S.BI[0];var y1=S.BI[1];var x2=S.BI[2];var y2=S.BI[3];var
Bw=[O[2]-O[0],O[3]-O[1]];var Am=x2-x1;var Ag=y2-y1;if(!B_){var Co=[(A=S.Af)[2]-A[
0],A[3]-A[1]];x1=x1-S.Af[0];y1=y1-S.Af[1];if(Co[0]!==Bw[0]){var A0=((Ai&0x4)===0x4
);var A1=((Ai&0x8)===0x8);var CN=((Ai&0x1)===0x1);if(!A0&&(CN||!A1))x1=((x1*Bw[0
])/Co[0])|0;if(!A1&&(CN||!A0)){x2=x2-S.Af[0];x2=((x2*Bw[0])/Co[0])|0;x2=x2-Bw[0];
}else x2=x2-S.Af[2];x1=x1+O[0];x2=x2+O[2];if(!CN){if(A0&&!A1)x2=x1+Am;else if(!A0&&
A1)x1=x2-Am;else{x1=x1+((((x2-x1)-Am)/2)|0);x2=x1+Am;}}}else{x2=x2-S.Af[2];x1=x1+
O[0];x2=x2+O[2];}if(Co[1]!==Bw[1]){var A2=((Ai&0x10)===0x10);var AZ=((Ai&0x20)===
0x20);var CO=((Ai&0x2)===0x2);if(!A2&&(CO||!AZ))y1=((y1*Bw[1])/Co[1])|0;if(!AZ&&(
CO||!A2)){y2=y2-S.Af[1];y2=((y2*Bw[1])/Co[1])|0;y2=y2-Bw[1];}else y2=y2-S.Af[3];
y1=y1+O[1];y2=y2+O[3];if(!CO){if(A2&&!AZ)y2=y1+Ag;else if(!A2&&AZ)y1=y2-Ag;else{
y1=y1+((((y2-y1)-Ag)/2)|0);y2=y1+Ag;}}}else{y2=y2-S.Af[3];y1=y1+O[1];y2=y2+O[3];
}}else{switch(B_){case 3:{x1=O[0];x2=x1+Am;}break;case 4:{x2=O[2];x1=x2-Am;}break;
case 1:{y1=O[1];y2=y1+Ag;}break;case 2:{y2=O[3];y1=y2-Ag;}break;default:;}if((B_===
3)||(B_===4)){var A2=((Ai&0x10)===0x10);var AZ=((Ai&0x20)===0x20);var CO=((Ai&0x2
)===0x2);if(CO){y1=O[1];y2=O[3];}else if(A2&&!AZ){y1=O[1];y2=y1+Ag;}else if(AZ&&
!A2){y2=O[3];y1=y2-Ag;}else{y1=O[1]+((((O[3]-O[1])-Ag)/2)|0);y2=y1+Ag;}}if((B_===
1)||(B_===2)){var A0=((Ai&0x4)===0x4);var A1=((Ai&0x8)===0x8);var CN=((Ai&0x1)===
0x1);if(CN){x1=O[0];x2=O[2];}else if(A0&&!A1){x1=O[0];x2=x1+Am;}else if(A1&&!A0){
x2=O[2];x1=x2-Am;}else{x1=O[0]+((((O[2]-O[0])-Am)/2)|0);x2=x1+Am;}}}S.isEmpty=(x1>=
x2)||(y1>=y2);if(((this.F&0x100)===0x100))this.M=[x1,y1,x2,y2];else{this.R([x1,y1
,x2,y2]);this.AM=S;}return[x2-x1,y2-y1];},H0:function(aOffset,Ic){if(Ic)this.M=B.
abh(this.M,aOffset);else this.R(B.abh(this.M,aOffset));},GetExtent:function(){return this.
M;},R:function(C){var A;if(B.aaY(C,this.M))return;if(!!this.G&&((this.F&0x1)===0x1
))this.G.T(this.GetClipping());this.AM=null;this.M=C;if(!!this.G&&((this.F&0x1)===
0x1))this.G.T(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.
G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CC],this);}},_Init:function(aArg){E.BV._Init.call(this,aArg);this.__proto__=
E.A9;},_className:"Core::RectView"};E.Ab={BJ:null,Cl:null,Ky:null,AT:null,Dj:null
,EP:255,Je:0,Jh:0,Jg:0,Jf:0,Bh:function(aArg){this.Dk();},CV:function(AJ,aClip,aOffset
,Ap,aBlend){var A;Ap=((Ap+1)*this.EP)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);if(
!this.AT||(AJ.E4===this))this.Ne(AJ,aClip,B.abf(aOffset,this.M.slice(0,2)),Ap,aBlend
);else{var Aq=255|(255<<8)|(255<<16)|((Ap&0xFF)<<24);this.AT.Update();AJ.Mr(aClip
,this.AT,0,B.abh(this.M,aOffset),AV,Aq,Aq,Aq,Aq,aBlend);}},GetClipping:function(
){var A;var I=this.M;if(!!this.AT)return I;I=[].concat(I[0]-this.Jf,I.slice(1,4)
);I=B.abP(I,I[1]-this.Jh);I=B.abN(I,I[2]+this.Jg);I=[].concat(I.slice(0,3),I[3]+
this.Je);if(((this.F&0x80000)===0x80000)){var HL=AF;var J;for(J=this.BJ;!!J;J=J.
AC)if(((J.F&0x1)===0x1))HL=B.wC(HL,J.GetClipping());I=B.wC(I,B.abh(HL,this.M.slice(
0,2)));}return I;},Eb:function(Ad,P,Ct,D2,Ey,EW){var A;var J=this.Cl;var Hv=null;
var N=AF;var C3=null;if(((A=B.lb(Ad,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;
Ad=B.abg(Ad,this.M.slice(0,2));if(!!Ey){J=Ey;while(!!J&&(J.G!==this))J=J.G;}while(
!!J){if(((J.F&0x400)===0x400)&&!C3){C3=J.Ah;while(!!C3&&!((C3.F&0x200)===0x200))
C3=C3.Ah;if(!!C3)N=B.lb(Ad,C3.GetExtent());else N=AF;}if(C3===J){C3=null;N=AF;}if((
!!D2&&!!(E.Ab.isPrototypeOf(J)?J:null))||((((((J.F&0x8)===0x8)&&((J.F&0x10)===0x10
))&&!((J.F&0x40000)===0x40000))&&!((J.F&0x20000)===0x20000))&&(!((J.F&0x10000)===
0x10000)||(null===J)))){var BI=J.GetExtent();var Ks=D2;var Hr=null;if(Ks===J)Ks=
null;if(((J.F&0x400)===0x400)){if(!(((A=B.lb(BI,N))[0]>=A[2])||(A[1]>=A[3])))Hr=
J.Eb(N,P,Ct,Ks,Ey,EW);}else if(!(((A=B.lb(BI,Ad))[0]>=A[2])||(A[1]>=A[3]))||(D2===
J))Hr=J.Eb(Ad,P,Ct,Ks,Ey,EW);J=J.Ah;if(!!Hr){if(!Hv||((Hr.IB<Hv.IB)&&(Hr.IB>=0))
)Hv=Hr;if(!Hr.IB)J=null;}}else J=J.Ah;Ey=null;}return Hv;},Ix:function(Ad){var A;
var DD;var J=this.BJ;var Hp=AF;var Jp=true;var result=(Ad=DD=B.abg(Ad,this.M.slice(
0,2)),DD);while(!!J){if(((J.F&0x200)===0x200)){var Io=(E.IU.isPrototypeOf(J)?J:null
);Hp=B.lb(Ad,Io.M);Jp=((Io.F&0x1)===0x1);}if(((J.F&0x1)===0x1)){if(((J.F&0x400)===
0x400)){if(Jp){var N=B.lb(J.GetClipping(),Hp);if(!((N[0]>=N[2])||(N[1]>=N[3])))result=
B.wC(result,J.Ix(N));}}else{var N=B.lb(J.GetClipping(),Ad);if(!((N[0]>=N[2])||(N[
1]>=N[3])))result=B.wC(result,J.Ix(N));}}J=J.AC;}return B.lb(B.abh(result,this.M.
slice(0,2)),this.M);},A7:function(C0,Dp){var A;var KA=this.F;if(((!!this.G&&!!!this.
AT)&&((this.F&0x80001)===0x80001))&&((Dp&0x80000)===0x80000))this.G.T(this.GetClipping(
));E.A9.A7.call(this,C0,Dp);if((((!!this.G&&!!!this.AT)&&((this.F&0x1)===0x1))&&((
C0&0x80000)===0x80000))&&!((KA&0x80000)===0x80000))this.G.T(this.GetClipping());
var D5=this.F^KA;if(!!this.Dj&&((D5&0x40)===0x40)){if(((this.F&0x40)===0x40))this.
Dj.A7(0x40,0x0);else this.Dj.A7(0x0,0x40);}if(((D5&0x10)===0x10)){var J;for(J=this.
BJ;!!J;J=J.AC)if((((J.F&0x300000)===0x300000)&&!((J.F&0x80)===0x80))&&(!((J.F&0x10000
)===0x10000)||(null===J)))J.A7(C0&0x10,Dp&0x10);}if(!!D5){this.F=this.F|0x8000;B.
pe([this,this.KO],this);}},R:function(C){var A;if(B.aaY(C,this.M))return;var GR=[(
A=this.M)[2]-A[0],A[3]-A[1]];var Kz=[C[2]-C[0],C[3]-C[1]];var HJ=!B.aaX(GR,Kz);if(
HJ&&!!this.AT){this.AT.IP(Kz);B.we(this,0);B.we(this.AT,0);}E.A9.R.call(this,C);
if((HJ&&(GR[0]>0))&&(GR[1]>0)){var Af=[].concat(AV,GR);var J=this.BJ;while(!!J){
if((!J.AM&&(J.DA!==0x14))&&!((J.F&0x400)===0x400))J.Il(Af,null);J=J.AC;}}if(HJ){
this.F=this.F|0x5000;B.pe([this,this.KO],this);}},NU:function(Ao){var Nv=(E.KeyEvent.
isPrototypeOf(Ao)?Ao:null);var D6=this.Ky;if(!Nv)return null;while(!!D6&&(!D6.Cp||
!D6.Bc(Nv)))D6=D6.AC;return D6;},RP:function(Aw){if(!!this.AT){this.AT.E4=this;var
N=B.abg(this.Ix(B.abh(this.AT.Dz,this.M.slice(0,2))),this.M.slice(0,2));this.AT.
JM(N,N,0x00000000,0x00000000,0x00000000,0x00000000,false);this.Ne(this.AT,N,AV,255
,true);this.AT.E4=null;}},Ne:function(AJ,aClip,aOffset,Ap,aBlend){var A;var J=this.
BJ;var Hp=AF;var Jp=true;this.Oc(AJ,aClip,aOffset,Ap,aBlend);while(!!J){if(((J.F&
0x200)===0x200)){var Io=(E.IU.isPrototypeOf(J)?J:null);Jp=((Io.F&0x1)===0x1);Hp=
aClip;if(!((Io.F&0x80000)===0x80000))Hp=B.lb(Hp,B.abh(Io.M,aOffset));}if(((J.F&0x1
)===0x1)){if(((J.F&0x400)===0x400)){if(Jp){var N=B.lb(B.abh(J.GetClipping(),aOffset
),Hp);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.CV(AJ,N,aOffset,Ap,aBlend);}}else{var N=
B.lb(B.abh(J.GetClipping(),aOffset),aClip);if(!((N[0]>=N[2])||(N[1]>=N[3])))J.CV(
AJ,N,aOffset,Ap,aBlend);}}J=J.AC;}this.Of(AJ,aClip,aOffset,Ap,aBlend);},RA:function(
){var A;var L5=((this.F&0x1000)===0x1000);var FQ=[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]];var E3=false;var Ij=AF;var L3=AF;var J=this.Cl;var C3=null;while(!!J){if(((J.
F&0x800)===0x800)){E3=true;J.F=J.F&~0x800;}if(E3&&((J.F&0x200)===0x200))E3=false;
J=J.Ah;}E3=false;J=this.BJ;if(L5){this.F=this.F&~0x1000;L5=!((FQ[0]>=FQ[2])||(FQ[
1]>=FQ[3]));}this.F=this.F|0x2000;while(!!J){if(((J.F&0x400)===0x400)){if(!!J.AM&&(
J.AM.GS!==C3))J.AM=null;if((!J.AM&&E3)&&(J.DA!==0x14))J.Il(L3,C3);}if(!!J.AM){if(
L5&&!((J.F&0x400)===0x400))J.Iy(FQ,0);if(E3&&((J.F&0x400)===0x400))J.Iy(L3,0);}if(((
J.F&0x200)===0x200)){E3=((J.F&0x1000)===0x1000);C3=(E.IU.isPrototypeOf(J)?J:null
);if(E3){J.F=J.F&~0x1000;Ij=C3.M;L3=Ij;E3=!((Ij[0]>=Ij[2])||(Ij[1]>=Ij[3]));}if(
E3)this.T(C3.M);}J=J.AC;}this.F=this.F&~0x2000;this.MV([FQ[2]-FQ[0],FQ[3]-FQ[1]]
);},CC:function(Aw){B.pe([this,this.KO],this);},KO:function(Aw){var A;var RQ=((this.
F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.RA(
);}if(((this.F&0x8000)===0x8000)||RQ){this.F=this.F&~0x8000;this.IX(this.F);}},G9:
function(C){var A;if(!!C&&(C.G!==this))throw new Error(Da);if(!!C&&!((C.F&0x14)===
0x14))C=null;if(!!C&&((C.F&0x10000)===0x10000))C=null;if(C===this.Dj)return;if(!
!this.Dj)this.Dj.A7(0x0,0x60);this.Dj=C;if(!!C){if(((this.F&0x40)===0x40))C.A7(0x60
,0x0);else C.A7(0x20,0x0);}},JZ:function(C){var A;if(!!this.AT===C)return;if(!C){
this.AT.JX=null;this.AT.IP(AV);this.AT=null;}if(!!this.G&&((this.F&0x1)===0x1))this.
G.T(this.GetClipping());if(C){this.AT=B._NewObject(B.Graphics.Canvas,0);this.AT.
IP([(A=this.M)[2]-A[0],A[3]-A[1]]);this.AT.JX=[this,this.RP];}B.we(this,0);},IR:
function(C){var A;if(C>255)C=255;if(C<0)C=0;if(C===this.EP)return;this.EP=C;if(!
!this.G&&((this.F&0x1)===0x1))this.G.T(this.GetClipping());},QY:function(RS){this.
IR(RS);},Er:function(C){if(C)this.A7(0x1,0x0);else this.A7(0x0,0x1);},ExtendClipping:
function(Hj,Hk,Hl,Hi){var A;var I9=this.M;var C1=I9;if(Hj<0)Hj=0;if(Hj>255)Hj=255;
if(Hk<0)Hk=0;if(Hk>255)Hk=255;if(Hl<0)Hl=0;if(Hl>255)Hl=255;if(Hi<0)Hi=0;if(Hi>255
)Hi=255;C1=[].concat(C1[0]-(Math.max(Hj,this.Jf)&0xFF),C1.slice(1,4));C1=B.abN(C1
,C1[2]+(Math.max(Hk,this.Jg)&0xFF));C1=B.abP(C1,C1[1]-(Math.max(Hl,this.Jh)&0xFF
));C1=[].concat(C1.slice(0,3),C1[3]+(Math.max(Hi,this.Je)&0xFF));if(Hj!==this.Jf
){if(((!!this.G&&((this.F&0x1)===0x1))&&!!!this.AT)&&!((this.F&0x80000)===0x80000
)){var I=C1;I=B.abN(I,I9[0]);this.G.T(I);}this.Jf=Hj&0xFF;}if(Hk!==this.Jg){if(((
!!this.G&&((this.F&0x1)===0x1))&&!!!this.AT)&&!((this.F&0x80000)===0x80000)){var
I=C1;I=[].concat(I9[2],I.slice(1,4));this.G.T(I);}this.Jg=Hk&0xFF;}if(Hl!==this.
Jh){if(((!!this.G&&((this.F&0x1)===0x1))&&!!!this.AT)&&!((this.F&0x80000)===0x80000
)){var I=C1;I=[].concat(I.slice(0,3),I9[1]);this.G.T(I);}this.Jh=Hl&0xFF;}if(Hi!==
this.Je){if(((!!this.G&&((this.F&0x1)===0x1))&&!!!this.AT)&&!((this.F&0x80000)===
0x80000)){var I=C1;I=B.abP(I,I9[3]);this.G.T(I);}this.Je=Hi&0xFF;}},Of:function(
AJ,aClip,aOffset,Ap,aBlend){},Oc:function(AJ,aClip,aOffset,Ap,aBlend){},GetMaximalSize:
function(){return Db;},GetMinimalSize:function(){return AV;},Lt:function(){var A;
if(((this.F&0x40)===0x40))return;if(((this.F&0x80)===0x80))return;if(((this.F&0x10000
)===0x10000)){if(!!this.G)this.G.Lt();return;}if(!!this.G&&(this.G.Dj!==this))this.
G.G9(this);if(!!this.G)this.G.Lt();},Ot:function(FB){var A;return(A=FB)&&((this.
F&A)===A);},Oz:function(Ch){var tmp=this;while(!!tmp){Ch=B.abe(Ch,tmp.M.slice(0,
2));tmp=tmp.G;}return Ch;},DispatchEvent:function(Ao){var A;var J=this.Dj;var W=(
E.Ab.isPrototypeOf(J)?J:null);var Bm=null;if(!!J&&((((J.F&0x10000)===0x10000)||((
J.F&0x40000)===0x40000))||((J.F&0x20000)===0x20000))){J=null;W=null;}if(!!W)Bm=W.
DispatchEvent(Ao);else if(!!J)Bm=J.Bc(Ao);if(!Bm)Bm=this.Bc(Ao);if(!Bm)Bm=this.NU(
Ao);return Bm;},BroadcastEventAtPosition:function(Ao,M7,aFilter){var A;var J=this.
Cl;var Bm=null;while(!!J&&!Bm){if((!aFilter||((A=aFilter)&&((J.F&A)===A)))&&B.wa(
J.GetExtent(),M7)){var W=(E.Ab.isPrototypeOf(J)?J:null);if(!!W)Bm=W.BroadcastEventAtPosition(
Ao,B.abe(M7,W.M.slice(0,2)),aFilter);else Bm=J.Bc(Ao);}J=J.Ah;}if(!Bm)Bm=this.Bc(
Ao);return Bm;},BroadcastEvent:function(Ao,aFilter){var A;var J=this.Cl;var Bm=null;
while(!!J&&!Bm){if(!aFilter||((A=aFilter)&&((J.F&A)===A))){var W=(E.Ab.isPrototypeOf(
J)?J:null);if(!!W)Bm=W.BroadcastEvent(Ao,aFilter);else Bm=J.Bc(Ao);}J=J.Ah;}if(!
Bm)Bm=this.Bc(Ao);if(!Bm)Bm=this.NU(Ao);return Bm;},MV:function(aSize){},IX:function(
FB){},Dk:function(){this.F=this.F|0x8000;B.pe([this,this.KO],this);},T:function(
Ad){var A;var W=this;while(!!W&&!((Ad[0]>=Ad[2])||(Ad[1]>=Ad[3]))){var Ie=W.AT;if(
!W.G&&(W!==this)){W.T(Ad);return;}if(!!Ie){var Rn=Ie.Dz;Ie.Dz=B.wC(Ie.Dz,Ad);if(
!B.aaY(Rn,Ie.Dz)){B.we(W,0);B.we(Ie,0);}}if(!((W.F&0x1)===0x1))return;var I=W.M;
Ad=B.abh(Ad,I.slice(0,2));if(!!W.AT||!((W.F&0x80000)===0x80000)){if(!!!W.AT){I=[
].concat(I[0]-W.Jf,I.slice(1,4));I=B.abP(I,I[1]-W.Jh);I=B.abN(I,I[2]+W.Jg);I=[].
concat(I.slice(0,3),I[3]+W.Je);}Ad=B.lb(Ad,I);}W=W.G;}},Mv:function(L,aFilter){var
A;if(!L||(L.G!==this))return null;var GQ=L.AC;var GU=L.Ah;var Jn=0x10000;if(((aFilter&
0x10000)===0x10000))Jn=0x0;while(!!GQ||!!GU){if((!!GQ&&(!aFilter||((A=aFilter)&&((
GQ.F&A)===A))))&&(!Jn||!((A=Jn)&&((GQ.F&A)===A))))return GQ;if((!!GU&&(!aFilter||((
A=aFilter)&&((GU.F&A)===A))))&&(!Jn||!((A=Jn)&&((GU.F&A)===A))))return GU;if(!!GQ
)GQ=GQ.AC;if(!!GU)GU=GU.Ah;}return null;},Pm:function(L,DF){var A;if(!L)throw new
Error(Ew);if(L.G!==this)throw new Error(Ex);var FJ=L;var Bs=L;var HN=L.D1;while(((
DF>0)&&!!FJ.AC)&&(FJ.AC.D1<=HN)){FJ=FJ.AC;DF=DF-1;}while(((DF<0)&&!!Bs.Ah)&&(Bs.
Ah.D1>=HN)){Bs=Bs.Ah;DF=DF+1;}if((FJ===L)&&(Bs===L))return;if(((L.F&0x401)===0x401
)){if(!!L.Ah&&!!L.AM)L.Ah.F=L.Ah.F|0x800;L.F=L.F|0x800;this.F=this.F|0x4000;B.pe([
this,this.CC],this);}if(((L.F&0x200)===0x200)){if(!!L.Ah)L.Ah.F=L.Ah.F|0x800;L.F=
L.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CC],this);}if(!!L.Ah)L.Ah.AC=L.AC;
if(!!L.AC)L.AC.Ah=L.Ah;if(this.BJ===L)this.BJ=L.AC;if(this.Cl===L)this.Cl=L.Ah;if(
FJ!==L){L.AC=FJ.AC;L.Ah=FJ;FJ.AC=L;if(!!L.AC)L.AC.Ah=L;}if(Bs!==L){L.AC=Bs;L.Ah=
Bs.Ah;Bs.Ah=L;if(!!L.Ah)L.Ah.AC=L;}if(!L.AC)this.Cl=L;if(!L.Ah)this.BJ=L;if(((L.
F&0x1)===0x1))this.T(L.GetClipping());},Gl:function(L){var A;if(!L)throw new Error(
EU);if(L.G!==this)throw new Error(Ex);if((((L.F&0x401)===0x401)&&!!L.Ah)&&!!L.AM
){L.Ah.F=L.Ah.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CC],this);}if(((L.F&0x200
)===0x200)){if(!!L.Ah)L.Ah.F=L.Ah.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CC
],this);}L.AM=null;if(this.Dj===L)this.G9(this.Mv(L,0x14));if(!!L.Ah)L.Ah.AC=L.AC;
if(!!L.AC)L.AC.Ah=L.Ah;if(this.BJ===L)this.BJ=L.AC;if(this.Cl===L)this.Cl=L.Ah;L.
G=null;L.AC=null;L.Ah=null;if((!((L.F&0x10)===0x10)&&((L.F&0x100000)===0x100000)
)&&!((this.F&0x80)===0x80))L.A7(0x10,0x0);if(((L.F&0x1)===0x1))this.T(L.GetClipping(
));},U:function(L,DF){var A;if(!L)throw new Error(Hf);if(!!L.G)throw new Error(Hg
);var Bs=null;var HN=L.D1;if(((DF<0)&&!!this.Cl)&&(this.Cl.D1>=HN)){Bs=this.Cl;DF=
DF+1;}while((((DF<0)&&!!Bs)&&!!Bs.Ah)&&(Bs.Ah.D1>=HN)){Bs=Bs.Ah;DF=DF+1;}if((!Bs&&
!!this.Cl)&&(this.Cl.D1>HN))Bs=this.Cl;while((!!Bs&&!!Bs.Ah)&&(Bs.Ah.D1>HN))Bs=Bs.
Ah;if(!Bs){L.G=this;L.Ah=this.Cl;if(!!this.Cl)this.Cl.AC=L;if(!this.BJ)this.BJ=L;
this.Cl=L;}else{L.G=this;L.Ah=Bs.Ah;L.AC=Bs;Bs.Ah=L;if(!!L.Ah)L.Ah.AC=L;else this.
BJ=L;}if(((L.F&0x1)===0x1))this.T(L.GetClipping());if(((L.F&0x80)===0x80)&&(B.aam(
).On()===L))L.A7(0x10,0x0);else if(!((this.F&0x10)===0x10)&&((L.F&0x200010)===0x200010
))L.A7(0x0,0x10);else if((((this.F&0x10)===0x10)&&!((L.F&0x10)===0x10))&&((L.F&0x100000
)===0x100000))L.A7(0x10,0x0);if(((!this.Dj&&((L.F&0x4)===0x4))&&((L.F&0x10)===0x10
))&&!((L.F&0x10000)===0x10000))this.G9(L);if(((L.F&0x401)===0x401)){L.F=L.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CC],this);}if(((L.F&0x200)===0x200)){L.F=L.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.CC],this);}},OH:function(){return this.
EP;},_Init:function(aArg){E.A9._Init.call(this,aArg);this.__proto__=E.Ab;this.F=
0x10001F;this.Bh(aArg);},_Mark:function(D){var A;E.A9._Mark.call(this,D);if((A=this.
BJ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cl)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ky)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AT)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Dj)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::Group"};E.Root={C6:null,AL:B.abi(10,null,null),If:null,FL:null,JC:0,Be:0,
Ca:B.abi(10,0,null),Kq:B.abi(10,B.wg,null),DK:B.abi(10,0,null),E0:B.abi(10,B.wf,
null),Ih:B.abi(10,0,null),FK:B.abi(10,B.wf,null),DJ:B.abi(10,B.wf,null),C2:B.abi(
10,B.wf,null),EA:B.abi(10,B.wf,null),AB:0,Kv:0,Ku:0,Cw:B.abi(4,0,null),Bz:B.abi(
4,B.wg,null),By:0,Jk:0,Im:0,L6:true,Bh:function(aArg){if(!!!this.K){var obj=this;
B.abD(obj);}},Gc:function(){return this;},CV:function(AJ,aClip,aOffset,Ap,aBlend
){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)AJ.JM(aClip
,B.abh(B.abh(aClip,aOffset),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,
0x00000000,false);E.Ab.CV.call(this,AJ,aClip,aOffset,Ap,aBlend);},A7:function(C0
,Dp){var A;E.Ab.A7.call(this,C0,Dp);if(!this.G&&(((C0&0x1)===0x1)||((Dp&0x1)===0x1
)))this.T([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((C0&0x2)===0x2)||((Dp&
0x2)===0x2)))this.T([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},G9:function(C){if((C!==
null)||!C)E.Ab.G9.call(this,C);},JZ:function(C){var A;var Rm=this.AT;E.Ab.JZ.call(
this,C);if(((Rm!==this.AT)&&!this.G)&&((this.F&0x1)===0x1))this.T([0,0,(A=this.M
)[2]-A[0],A[3]-A[1]]);},IR:function(C){var A;var Rp=this.EP;E.Ab.IR.call(this,C);
if(((Rp!==this.EP)&&!this.G)&&((this.F&0x1)===0x1))this.T([0,0,(A=this.M)[2]-A[0
],A[3]-A[1]]);},DispatchEvent:function(Ao){if(!!Ao){Ao.II=!!this.Be;if(!!this.Be
)Ao.An=this.Be;}var Bm;Bm=E.Ab.DispatchEvent.call(this,Ao);this.Be=0;return Bm;}
,BroadcastEvent:function(Ao,aFilter){if(!!Ao){Ao.II=!!this.Be;if(!!this.Be)Ao.An=
this.Be;}var Bm=E.Ab.BroadcastEvent.call(this,Ao,aFilter);this.Be=0;return Bm;},
T:function(Ad){var A;if(this.JC>0)throw new Error(I0);if(!!this.AT&&!this.G){if(((
A=this.AT.Dz)[0]>=A[2])||(A[1]>=A[3])){B.we(this,0);B.we(this.AT,0);}this.AT.Dz=
B.wC(this.AT.Dz,Ad);}var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate
)Ad=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.G){E.Ab.T.call(this,Ad);return;
}Ad=B.lb(B.abh(Ad,this.M.slice(0,2)),this.M);if((Ad[0]>=Ad[2])||(Ad[1]>=Ad[3]))return;
var H;for(H=0;H<this.By;H=H+1)if(!(((A=B.lb(this.Bz.Get(H),Ad))[0]>=A[2])||(A[1]>=
A[3]))){this.Bz.Set(H,B.wC(this.Bz.Get(H),Ad));this.Cw.Set(H,B.aaH(this.Bz.Get(H
)));return;}if(this.By<3){this.Bz.Set(this.By,Ad);this.Cw.Set(this.By,B.aaH(Ad));
this.By=this.By+1;return;}var A_;var C5;var Jj=0;var Jl=0;var M9=2147483647;this.
Bz.Set(this.By,Ad);this.Cw.Set(this.By,B.aaH(Ad));for(A_=0;A_<=this.By;A_=A_+1)for(
C5=A_+1;C5<=this.By;C5=C5+1){var KM=B.aaH(B.wC(this.Bz.Get(A_),this.Bz.Get(C5)));
var NT=((KM<<8)/(this.Cw.Get(A_)+this.Cw.Get(C5)))|0;if(NT<M9){M9=NT;Jj=A_;Jl=C5;
}}this.Bz.Set(Jj,B.wC(this.Bz.Get(Jj),this.Bz.Get(Jl)));this.Cw.Set(Jj,B.aaH(this.
Bz.Get(Jj)));if(Jl!==this.By){this.Bz.Set(Jl,this.Bz.Get(this.By));this.Cw.Set(Jl
,this.Cw.Get(this.By));}},Rc:function(){var Cc=B._NewObject(E.HR,0);Cc.II=!!this.
Be;if(!!this.Be)Cc.An=this.Be;return Cc;},Hq:function(){var Cc=B._NewObject(E.EJ
,0);Cc.II=!!this.Be;if(!!this.Be)Cc.An=this.Be;return Cc;},Ig:function(){var Cc=
B._NewObject(E.JI,0);Cc.II=!!this.Be;if(!!this.Be)Cc.An=this.Be;return Cc;},Rd:function(
Aw){var H;var Hv=false;for(H=0;H<10;H=H+1)if(!!this.AL.Get(H)){var pos=this.C2.Get(
H);var W=this.AL.Get(H).G;while(!!W&&(W!==this)){pos=B.abe(pos,W.M.slice(0,2));W=
W.G;}if(!W&&(this.AL.Get(H)!==this)){var tmp=this.AL.Get(H);this.AB=H;this.AL.Set(
H,null);tmp.Bc(this.Hq().InitializeUp(H,this.FK.Get(H),this.E0.Get(H),this.DK.Get(
H),this.Ca.Get(H)+1,this.DJ.Get(H),false,this.C2.Get(H),this.EA.Get(H)));this.BroadcastEvent(
this.Ig().InitializeUp(H,this.Ca.Get(H)+1,false,tmp,this.C2.Get(H)),0x18);}else{
this.DK.Set(H,(this.FL.An-this.Ih.Get(H))|0);if(this.DK.Get(H)<10)this.DK.Set(H,
10);this.AB=H;this.AL.Get(H).Bc(this.Hq().InitializeHold(H,pos,this.E0.Get(H),this.
DK.Get(H),this.Ca.Get(H)+1,this.DJ.Get(H),this.C2.Get(H),this.EA.Get(H)));Hv=true;
}}if(!Hv)this.FL.BU(false);},GetFPS:function(){var ticksCount=0;var Nj=0;ticksCount=((
new Date).getTime()-B.v$)|0;if(!!this.Kv&&(ticksCount>this.Kv))Nj=((this.Ku*1000
)/((ticksCount-this.Kv)|0))|0;this.Ku=0;this.Kv=ticksCount;return Nj;},Update:function(
){var A;if(!this.If)this.If=B._NewObject(B.Graphics.Canvas,0);this.If.IP([(A=this.
M)[2]-A[0],A[3]-A[1]]);this.If.Update();return this.UpdateGE20(this.If);},UpdateGE20:
function(AJ){if(!this.BeginUpdate())return AF;var E_=this.UpdateCanvas(AJ,AV);this.
EndUpdate();return E_;},EndUpdate:function(){if(this.By>0){this.Ku=this.Ku+1;this.
By=0;}},UpdateCanvas:function(AJ,aOffset){var A;var E_=AF;var Q_=[].concat(aOffset
,B.abf(AJ.FrameSize,aOffset));var H;var A_=this.By;this.JC=this.JC+1;AJ.E4=this;
for(H=0;(H<A_)&&(H<4);H=H+1)if(this.Cw.Get(H)>0){this.CV(AJ,B.abg(this.Bz.Get(H)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);E_=B.wC(E_,B.lb(Q_,this.Bz.Get(H))
);}else A_=A_+1;AJ.E4=null;this.JC=this.JC-1;if(!((E_[0]>=E_[2])||(E_[1]>=E_[3])
))return B.abg(E_,aOffset);else return E_;},GetUpdateRegion:function(Kd){var H;var
A_=this.By;if(Kd<0)return AF;for(H=0;(H<A_)&&(H<4);H=H+1)if(!this.Cw.Get(H)){A_=
A_+1;Kd=Kd+1;}else if(H===Kd)return this.Bz.Get(H);return AF;},BeginUpdate:function(
){var A;var H;if(!!this.By&&!B.aaY(this.Bz.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[
1]])){var N2=B.abi(3,B.wg,null);var N1=this.By;for(H=0;H<N1;H++)N2.Set(H,this.Bz.
Get(H));for(H=0;H<N1;H++){var NV=B.abh(N2.Get(H),this.M.slice(0,2));var NW=this.
Ix(NV);if(!B.aaY(NV,NW))this.T(B.abg(NW,this.M.slice(0,2)));}}var A_;var C5;for(
A_=0;A_<(this.By-1);A_++)if(this.Cw.Get(A_)>0)for(C5=A_+1;C5<this.By;C5++)if(this.
Cw.Get(C5)>0){var KM=B.aaH(B.wC(this.Bz.Get(A_),this.Bz.Get(C5)));if(((KM-this.Cw.
Get(A_))-this.Cw.Get(C5))<0){this.Bz.Set(A_,B.wC(this.Bz.Get(A_),this.Bz.Get(C5)
));this.Cw.Set(A_,KM);this.Cw.Set(C5,0);}}for(H=this.By-1;H>=0;H--)if(!this.Cw.Get(
H))this.By=this.By-1;return this.By;},DoesNeedUpdate:function(){if(this.By>0)return true;
return false;},Initialize:function(aSize){this.R([].concat(AV,aSize));if(this.L6
)this.F=this.F|0x60;else this.F=this.F|0x20;this.T(this.M);return this;},SetRootFocus:
function(LQ){if(LQ===this.L6)return false;this.L6=LQ;if(!LQ)this.A7(0x0,0x40);else
this.A7(0x40,0x0);return true;},SetUserInputTimestamp:function(Q1){this.Be=Q1;},
DriveKeyboardHitting:function(BG,I2,D3){var A;var Mh=!!this.C6;if(!!this.C6&&((!
D3||(this.Jk!==BG))||(this.Im!==I2))){var Cc=null;var J=(E.BV.isPrototypeOf(A=this.
C6)?A:null);var D6=(E.Ee.isPrototypeOf(A=this.C6)?A:null);if(!!this.Jk)Cc=B._NewObject(
E.KeyEvent,0).Initialize(this.Jk,false);if(this.Im!==0x00)Cc=B._NewObject(E.KeyEvent
,0).Initialize2(this.Im,false);if(!!D6)D6.Bc(Cc);else if(!!J)J.Bc(Cc);this.Jk=0;
this.Im=0x00;this.C6=null;}if(!!this.C6){var Cc=null;var J=(E.BV.isPrototypeOf(A=
this.C6)?A:null);var D6=(E.Ee.isPrototypeOf(A=this.C6)?A:null);if(!!BG)Cc=B._NewObject(
E.KeyEvent,0).Initialize(BG,true);if(this.Im!==0x00)Cc=B._NewObject(E.KeyEvent,0
).Initialize2(I2,true);if(!!D6)D6.Bc(Cc);else if(!!J)J.Bc(Cc);}if(!this.C6&&D3){
if(!!BG)this.C6=this.DispatchEvent(B._NewObject(E.KeyEvent,0).Initialize(BG,true
));if(I2!==0x00)this.C6=this.DispatchEvent(B._NewObject(E.KeyEvent,0).Initialize2(
I2,true));if(!(E.Ee.isPrototypeOf(A=this.C6)?A:null)&&!(E.BV.isPrototypeOf(A=this.
C6)?A:null))this.C6=null;this.Jk=BG;this.Im=I2;Mh=Mh||!!this.C6;}this.Be=0;return Mh;
},DriveCursorMovement:function(Br){return this.DriveMultiTouchMovement(this.AB,Br
);},DriveMultiTouchMovement:function(P,Br){if((P<0)||(P>9)){this.Be=0;return false;
}var AY=B.abe(Br,this.C2.Get(P));this.C2.Set(P,Br);if(!this.AL.Get(P)||B.aaX(AY,
AV)){this.Be=0;return false;}var pos=Br;var W=this.AL.Get(P).G;while(!!W&&(W!==this
)){pos=B.abe(pos,W.M.slice(0,2));W=W.G;}if(!W&&(this.AL.Get(P)!==this)){var tmp=
this.AL.Get(P);this.AB=P;this.AL.Set(P,null);tmp.Bc(this.Hq().InitializeUp(P,this.
FK.Get(P),this.E0.Get(P),this.DK.Get(P),this.Ca.Get(P)+1,this.DJ.Get(P),false,this.
C2.Get(P),this.EA.Get(P)));this.BroadcastEvent(this.Ig().InitializeUp(P,this.Ca.
Get(P)+1,false,tmp,Br),0x18);}else{this.FK.Set(P,pos);this.AB=P;this.AL.Get(P).Bc(
this.Rc().Initialize(P,pos,this.E0.Get(P),AY,this.DK.Get(P),this.Ca.Get(P)+1,this.
DJ.Get(P),Br,this.EA.Get(P)));}this.Be=0;return true;},DriveCursorHitting:function(
D3,P,Br){return this.DriveMultiTouchHitting(D3,P,Br);},DriveMultiTouchHitting:function(
D3,P,Br){if((P<0)||(P>9)){this.Be=0;return false;}var ticksCount=this.Be;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var RG=this.Be;this.DriveMultiTouchMovement(
P,Br);Br=this.C2.Get(P);this.Be=RG;if(D3)this.EA.Set(P,Br);if(D3&&!this.AL.Get(P
)){var Bx;var pos=Br;if(B.wa(this.Kq.Get(P),Br)&&((ticksCount-this.Ih.Get(P))<=250
))this.Ca.Set(P,this.Ca.Get(P)+1);else this.Ca.Set(P,0);this.Kq.Set(P,B.abh(I1,Br
));this.Ih.Set(P,ticksCount);Bx=this.Eb(B.abh(I1,Br),P,this.Ca.Get(P)+1,null,null
,0x0);if(!!Bx){this.BroadcastEvent(this.Ig().InitializeDown(P,this.Ca.Get(P)+1,false
,Bx.BV,Br),0x18);this.AL.Set(P,Bx.BV);this.DJ.Set(P,Bx.At);}else{this.AL.Set(P,null
);this.DJ.Set(P,AV);this.Be=0;return false;}var W=Bx.BV.G;while(!!W&&(W!==this)){
pos=B.abe(pos,W.M.slice(0,2));W=W.G;}this.E0.Set(P,pos);this.FK.Set(P,pos);this.
DK.Set(P,0);this.FL.BU(true);this.AB=P;this.AL.Get(P).Bc(this.Hq().InitializeDown(
P,pos,this.Ca.Get(P)+1,this.DJ.Get(P),false,Br));this.Be=0;return true;}if(!D3&&
!!this.AL.Get(P)){var pos=Br;var W=this.AL.Get(P).G;while(!!W&&(W!==this)){pos=B.
abe(pos,W.M.slice(0,2));W=W.G;}if(!W)pos=this.FK.Get(P);this.AB=P;var tmp=this.AL.
Get(P);this.AL.Set(P,null);tmp.Bc(this.Hq().InitializeUp(P,pos,this.E0.Get(P),this.
DK.Get(P),this.Ca.Get(P)+1,this.DJ.Get(P),false,Br,this.EA.Get(P)));this.BroadcastEvent(
this.Ig().InitializeUp(P,this.Ca.Get(P)+1,false,tmp,Br),0x18);this.Be=0;return true;
}this.Be=0;return false;},MN:function(EV,M6,Ey,EW){if(EV===this)EV=null;if(!this.
AL.Get(this.AB))return;var Bx;Bx=this.Eb(B.abh(I1,this.C2.Get(this.AB)),this.AB,
1,EV,Ey,EW);if(!!Bx&&(this.AL.Get(this.AB)!==Bx.BV))this.KZ(Bx.BV,Bx.At);if(!Bx&&(
this.AL.Get(this.AB)!==M6))this.KZ(M6,AV);},KZ:function(EV,DE){if(!this.AL.Get(this.
AB)||(this.AL.Get(this.AB)===EV))return;var tmp=this.AL.Get(this.AB);this.AL.Set(
this.AB,null);tmp.Bc(this.Hq().InitializeUp(this.AB,this.FK.Get(this.AB),this.E0.
Get(this.AB),this.DK.Get(this.AB),this.Ca.Get(this.AB)+1,this.DJ.Get(this.AB),true
,this.C2.Get(this.AB),this.EA.Get(this.AB)));this.BroadcastEvent(this.Ig().InitializeUp(
this.AB,this.Ca.Get(this.AB)+1,true,tmp,this.C2.Get(this.AB)),0x18);var pos=this.
C2.Get(this.AB);var W=null;if(!!EV)W=EV.G;while(!!W&&(W!==this)){pos=B.abe(pos,W.
M.slice(0,2));W=W.G;}if(!W&&(EV!==this)){this.AL.Set(this.AB,null);return;}this.
BroadcastEvent(this.Ig().InitializeDown(this.AB,this.Ca.Get(this.AB)+1,true,EV,this.
C2.Get(this.AB)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.AL.Set(this.AB,EV);this.DJ.Set(this.AB,DE);this.E0.Set(this.AB,pos);this.FK.
Set(this.AB,pos);this.Ca.Set(this.AB,0);this.DK.Set(this.AB,0);this.Ih.Set(this.
AB,ticksCount);this.EA.Set(this.AB,this.C2.Get(this.AB));this.AL.Get(this.AB).Bc(
this.Hq().InitializeDown(this.AB,pos,this.Ca.Get(this.AB)+1,this.DJ.Get(this.AB)
,true,this.EA.Get(this.AB)));},On:function(){return null;},_Init:function(aArg){
E.Ab._Init.call(this,aArg);E.Timer._Init.call(this.FL={K:this},0);(this.AL=[]).__proto__=
E.Root.AL;(this.Ca=[]).__proto__=E.Root.Ca;(this.Kq=[]).__proto__=E.Root.Kq;(this.
DK=[]).__proto__=E.Root.DK;(this.E0=[]).__proto__=E.Root.E0;(this.Ih=[]).__proto__=
E.Root.Ih;(this.FK=[]).__proto__=E.Root.FK;(this.DJ=[]).__proto__=E.Root.DJ;(this.
C2=[]).__proto__=E.Root.C2;(this.EA=[]).__proto__=E.Root.EA;(this.Cw=[]).__proto__=
E.Root.Cw;(this.Bz=[]).__proto__=E.Root.Bz;this.__proto__=E.Root;this.F=0x10007F;
this.FL.IS(10);this.FL.H4=[this,this.Rd];this.Bh(aArg);},_Done:function(){this.__proto__=
E.Ab;this.FL._Done();E.Ab._Done.call(this);},_ReInit:function(){E.Ab._ReInit.call(
this);this.FL._ReInit();},_Mark:function(D){var A;E.Ab._Mark.call(this,D);if((A=
this.C6)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.AL,D);if((A=this.If)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.FL)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Core::Root"};E.Event={An:0,II:false,Bh:function(aArg){this.An=this.JO();},JO:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},
_Init:function(aArg){this.__proto__=E.Event;this.Bh(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={A4:0,AK:0,Down:false,Initialize2:function(BG,D3){this.
A4=0;this.AK=BG;this.Down=D3;if((BG>=0x30)&&(BG<=0x39))this.A4=(10+BG)-48;if((BG>=
0x41)&&(BG<=0x5A))this.A4=(105+BG)-65;if((BG>=0x61)&&(BG<=0x7A))this.A4=(105+BG)-
97;if(BG===0x20)this.A4=131;if(!this.A4)switch(BG){case 0x2B:this.A4=132;break;case
0x2D:this.A4=133;break;case 0x2A:this.A4=134;break;case 0x2F:this.A4=135;break;case
0x3D:this.A4=136;break;case 0x2E:this.A4=137;break;case 0x2C:this.A4=138;break;case
0x3A:this.A4=139;break;case 0x3B:this.A4=140;break;default:;}return this;},Initialize:
function(BG,D3){this.A4=BG;this.Down=D3;this.AK=0x00;var LV=BG-10;var LU=BG-105;
if((LV>=0)&&(LV<=9))this.AK=(48+LV)&0xFFFF;if((LU>=0)&&(LU<=25))this.AK=(65+LU)&
0xFFFF;if(BG===131)this.AK=0x20;if(this.AK===0x00)switch(BG){case 132:this.AK=0x2B;
break;case 133:this.AK=0x2D;break;case 134:this.AK=0x2A;break;case 135:this.AK=0x2F;
break;case 136:this.AK=0x3D;break;case 137:this.AK=0x2E;break;case 138:this.AK=0x2C;
break;case 139:this.AK=0x3A;break;case 140:this.AK=0x3B;break;default:;}return this;
},Ov:function(M5){switch(M5){case 141:return((this.AK>=0x41)&&(this.AK<=0x5A))||((
this.AK>=0x61)&&(this.AK<=0x7A));case 142:return(((this.AK>=0x41)&&(this.AK<=0x5A
))||((this.AK>=0x61)&&(this.AK<=0x7A)))||((this.AK>=0x30)&&(this.AK<=0x39));case
143:return(this.AK>=0x30)&&(this.AK<=0x39);case 144:return(((this.AK>=0x41)&&(this.
AK<=0x46))||((this.AK>=0x61)&&(this.AK<=0x66)))||((this.AK>=0x30)&&(this.AK<=0x39
));case 145:return this.AK!==0x00;case 146:return(this.AK===0x00)&&!!this.A4;case
147:return(((this.A4===6)||(this.A4===7))||(this.A4===4))||(this.A4===5);case 148:
return(this.AK!==0x00)||!!this.A4;default:;}return M5===this.A4;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.JI={J5:null,CD:B.wf,Cs:0,Bg:0,Down:false,C8:false,InitializeUp:function(P,Ct
,Hh,LS,D4){this.Down=false;this.Bg=P;this.Cs=Ct;this.CD=D4;this.J5=LS;this.C8=Hh;
return this;},InitializeDown:function(P,Ct,Hh,LS,D4){this.Down=true;this.Bg=P;this.
Cs=Ct;this.CD=D4;this.J5=LS;this.C8=Hh;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.JI;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.J5)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.EJ={IG:B.wf,CD:B.wf,Cs:0,B3:0,Cq:B.wf,Bi:B.wf,Bg:0,Down:false,C8:false,InitializeHold:
function(P,Gn,I4,I5,Ct,DE,D4,I3){this.Down=true;this.Bg=P;this.Bi=B.abf(Gn,DE);this.
Cq=B.abf(I4,DE);this.B3=I5;this.Cs=Ct;this.CD=D4;this.IG=I3;return this;},InitializeUp:
function(P,Gn,I4,I5,Ct,DE,Hh,D4,I3){this.Down=false;this.Bg=P;this.Bi=B.abf(Gn,DE
);this.Cq=B.abf(I4,DE);this.B3=I5;this.Cs=Ct;this.C8=Hh;this.CD=D4;this.IG=I3;return this;
},InitializeDown:function(P,Gn,Ct,DE,Hh,D4){this.Down=true;this.Bg=P;this.Bi=B.abf(
Gn,DE);this.Cq=B.abf(Gn,DE);this.B3=0;this.Cs=Ct;this.C8=Hh;this.CD=D4;this.IG=D4;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.EJ;},_className:"Core::CursorEvent"};E.HR={IG:B.wf,CD:B.wf,Cs:0,B3:0,At:B.wf,Cq:
B.wf,Bi:B.wf,Bg:0,Initialize:function(P,Gn,I4,aOffset,I5,Q0,DE,D4,I3){this.Bg=P;
this.Bi=B.abf(Gn,DE);this.Cq=B.abf(I4,DE);this.At=aOffset;this.B3=I5;this.Cs=Q0;
this.CD=D4;this.IG=I3;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.HR;},_className:"Core::DragEvent"};E.IU={CV:function(AJ,
aClip,aOffset,Ap,aBlend){},GetClipping:function(){var A;var I=E.A9.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var HL=AF;var J;for(J=this.AC;!!J&&!((J.F&
0x200)===0x200);J=J.AC)if(((J.F&0x1)===0x1))HL=B.wC(HL,J.GetClipping());I=B.wC(I
,HL);}return I;},A7:function(C0,Dp){var A;var KA=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((Dp&0x80000)===0x80000))this.G.T(this.GetClipping());E.A9.A7.call(
this,C0,Dp);if(((!!this.G&&((this.F&0x1)===0x1))&&((C0&0x80000)===0x80000))&&!((
KA&0x80000)===0x80000))this.G.T(this.GetClipping());},R:function(C){var A;if(B.aaY(
C,this.M))return;var GR=[(A=this.M)[2]-A[0],A[3]-A[1]];var Kz=[C[2]-C[0],C[3]-C[
1]];var HJ=!B.aaX(GR,Kz);var AY=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.aaX(
AY,AV)&&!HJ){var J=this.AC;while(!!J&&!((J.F&0x200)===0x200)){if(((J.F&0x400)===
0x400)){var tmp=((J.F&0x100)===0x100);J.H0(AY,tmp);}J=J.AC;}}if((HJ&&(GR[0]>0))&&(
GR[1]>0)){var Af=this.M;var J=this.AC;while(!!J&&!((J.F&0x200)===0x200)){if(((J.
F&0x400)===0x400)){if(!!J.AM&&(J.AM.GS!==this))J.AM=null;if(!J.AM&&(J.DA!==0x14)
)J.Il(Af,this);}J=J.AC;}}E.A9.R.call(this,C);if(!!this.G&&HJ){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CC],
this);}}},_Init:function(aArg){E.A9._Init.call(this,aArg);this.__proto__=E.IU;this.
F=0x203;},_className:"Core::Outline"};E.BF={Lu:null,Lx:null,Lv:null,DX:null,Ge:null
,Dl:null,Ac:0,Bg:0,An:0,Cs:0,B3:0,At:B.wf,Cq:B.wf,Bi:B.wf,Pn:8,MD:1,Down:false,Gd:
false,C8:false,L1:false,Jm:0,CV:function(AJ,aClip,aOffset,Ap,aBlend){},Bc:function(
Ao){var A;var Q=(E.EJ.isPrototypeOf(Ao)?Ao:null);var AO=(E.HR.isPrototypeOf(Ao)?
Ao:null);var Kx=this.Gd;var D_;var Dr;var JB;var Cm;var Jd;if(!Q&&!AO)return null;
D_=(!!Q&&Q.Down)&&!Q.B3;Dr=(!!Q&&Q.Down)&&(Q.B3>0);JB=(!!Q&&Q.Down)&&(Q.B3>this.
Jm);Cm=!!Q&&!Q.Down;Jd=!!AO;if(D_)this.Jm=((A=(Q.C8?0:50))&0x80)?A|0xFFFFFF00:A&
0xFF;if(D_){var HC=0;var EB;this.Ac=this.Ac|(1<<Q.Bg);for(EB=this.Ac&4095;EB>0;EB=
EB>>1)if(!!(EB&1))HC=HC+1;if(HC===1)this.Ac=(this.Ac|16777216)|(4096<<Q.Bg);}if(
Cm&&(this.Ac<16777216)){var Du=this.Gc();var Bx=null;if(!!Du){var Mk=(!!this.Ah?
this.Ah:this.G);Bx=Du.Eb(B.abh(Kb,Q.CD),Q.Bg,Q.Cs,null,Mk,0x0);}if(!!Bx){var H;for(
H=0;H<10;H++)if(!!(this.Ac&(1<<H)))Bx.BV.Bc(B._NewObject(E.EJ,0).InitializeDown(
H,Q.Bi,Q.Cs,AV,true,Q.CD));for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))Bx.BV.Bc(B._NewObject(
E.EJ,0).InitializeUp(H,Q.Bi,Q.Bi,0,Q.Cs,AV,false,Q.CD,Q.CD));}}if(Cm)this.Ac=(this.
Ac&~(1<<Q.Bg))|33554432;if(JB&&(this.Ac<16777216))this.Ac=this.Ac|67108864;if(Cm&&
Q.C8)this.Ac=this.Ac|67108864;if(Cm&&!(this.Ac&16777215))this.Ac=0;if(Dr&&(this.
Ac>=67108864)){var Du=this.Gc();if(!!Du)Du.MN(null,null,this,0x0);}if((Dr&&!!(this.
Ac&16777216))&&!!(this.Ac&33554432)){Dr=false;Cm=true;}if(!!Q&&!(this.Ac&(4096<<
Q.Bg)))return this;if(!!AO&&!(this.Ac&(4096<<AO.Bg)))return this;if(Cm&&!(this.Ac&
16777216))return this;if(((D_||Jd)||Dr)&&((this.Ac<16777216)||(this.Ac>=33554432
)))return this;if(Cm)this.Ac=this.Ac&3758100479;if(Cm&&!(this.Ac&16777215))this.
Ac=0;if(!!Q){this.Down=D_||Dr;this.Gd=this.Lh(Q.Bi);this.Cq=Q.Cq;this.Bi=Q.Bi;this.
At=AV;this.B3=Q.B3;this.Cs=Q.Cs;this.C8=Q.C8;this.Bg=Q.Bg;this.An=Q.An;if(Q.Down&&
!Q.B3)Kx=false;}if(!!AO){this.Down=true;this.Gd=this.Lh(AO.Bi);this.Cq=AO.Cq;this.
Bi=AO.Bi;this.At=AO.At;this.B3=AO.B3;this.Cs=AO.Cs;this.Bg=AO.Bg;this.C8=false;this.
An=AO.An;}var L0=this.Down;if(!!AO)(A=this.Lu)?A[1].call(A[0],this):null;if((!!Q&&
this.Down)&&!this.B3)(A=this.Dl)?A[1].call(A[0],this):null;if((!!Q&&this.Down)&&(
this.B3>0))(A=this.DX)?A[1].call(A[0],this):null;if((this.Down&&this.Gd)&&!Kx){this.
L1=true;(A=this.Lv)?A[1].call(A[0],this):null;}if(this.L1&&(((L0&&!this.Gd)&&Kx)||((
!L0&&this.Gd)&&Kx))){this.L1=false;(A=this.Lx)?A[1].call(A[0],this):null;}if(!!Q&&
!L0)(A=this.Ge)?A[1].call(A[0],this):null;return this;},Eb:function(Ad,P,Ct,D2,Ey
,EW){var A;if(!!D2&&(D2!==this))return null;if((Ct<1)||(Ct>this.MD))return null;
if(this.Ac>=33554432)return null;if((this.Ac>=16777216)&&!(this.Ac&(4096<<P)))return null;
if(this.Os()){var I=B.lb(Ad,this.GetExtent());if(!((I[0]>=I[2])||(I[1]>=I[3]))){
var CG=B.aaI(Ad);var AY=AV;if(CG[0]<I[0])AY=[I[0]-CG[0],AY[1]];if(CG[0]>=I[2])AY=[(
I[2]-CG[0])-1,AY[1]];if(CG[1]<I[1])AY=[AY[0],I[1]-CG[1]];if(CG[1]>=I[3])AY=[AY[0
],(I[3]-CG[1])-1];return B._NewObject(E.IA,0).Initialize(this,AY);}}else{var A6=
B.abi(9,B.wf,null);var H;A6.Set(0,B.aaI(Ad));A6.Set(1,A6.Get(0));A6.Set(2,A6.Get(
0));A6.Set(3,A6.Get(0));A6.Set(4,A6.Get(0));A6.Set(1,[Ad[0],A6.Get(1)[1]]);A6.Set(
2,[A6.Get(2)[0],Ad[1]]);A6.Set(3,[Ad[2],A6.Get(3)[1]]);A6.Set(4,[A6.Get(4)[0],Ad[
3]]);A6.Set(5,Ad.slice(0,2));A6.Set(6,[Ad[2],Ad[1]]);A6.Set(7,[Ad[0],Ad[3]]);A6.
Set(8,Ad.slice(2,4));for(H=0;H<9;H=H+1)if(this.Lh(A6.Get(H)))return B._NewObject(
E.IA,0).Initialize(this,B.abe(A6.Get(H),A6.Get(0)));}return null;},O7:function(C
){if(C<1)C=1;this.Pn=C;},MI:function(C){if(C<1)C=1;this.MD=C;},BU:function(C){if(
C)this.A7(0x100000,0x0);else this.A7(0x0,0x100000);},_Init:function(aArg){E.D0._Init.
call(this,aArg);this.__proto__=E.BF;this.F=0x10011B;},_Mark:function(D){var A;E.
D0._Mark.call(this,D);if((A=this.Lu)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Lx)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Lv)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.DX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Ge)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dl)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};E.CZ={
timer:null,KF:null,Ip:null,Ac:0,Kg:0,EC:5000,HI:0,Kw:B.wf,Hu:0,EY:0,AH:0,G0:0,Is:
0,Ht:0,EX:0,AG:0,GZ:0,GY:0,Cq:B.wf,Mt:B.wf,BB:B.wf,BC:B.wf,At:B.wf,Mx:0.5,IW:true
,H8:false,DM:false,DN:false,Kf:false,Jm:0,CV:function(AJ,aClip,aOffset,Ap,aBlend
){},Bc:function(Ao){var A;var Q=(E.EJ.isPrototypeOf(Ao)?Ao:null);var AO=(E.HR.isPrototypeOf(
Ao)?Ao:null);var BH=(E.JI.isPrototypeOf(Ao)?Ao:null);var D_;var Dr;var JB;var Cm;
var Jd;D_=(!!Q&&Q.Down)&&!Q.B3;Dr=(!!Q&&Q.Down)&&(Q.B3>0);JB=(!!Q&&Q.Down)&&(Q.B3>
this.Jm);Cm=!!Q&&!Q.Down;Jd=!!AO;if(D_)this.Jm=((A=(Q.C8?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if(D_){var HC=0;var EB;this.Ac=this.Ac|(1<<Q.Bg);for(EB=this.Ac&4095;EB>0;
EB=EB>>1)if(!!(EB&1))HC=HC+1;if(HC===1)this.Ac=(this.Ac|16777216)|(4096<<Q.Bg);}
if(Cm&&(this.Ac<16777216)){var Du=this.Gc();var Bx=null;if(!!Du){var Mk=(!!this.
Ah?this.Ah:this.G);Bx=Du.Eb(B.abh(Kb,Q.CD),Q.Bg,Q.Cs,null,Mk,0x0);}if(!!Bx){var H;
for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))Bx.BV.Bc(B._NewObject(E.EJ,0).InitializeDown(
H,Q.Bi,Q.Cs,AV,true,Q.CD));for(H=0;H<10;H++)if(!!(this.Ac&(1<<H)))Bx.BV.Bc(B._NewObject(
E.EJ,0).InitializeUp(H,Q.Bi,Q.Bi,0,Q.Cs,AV,false,Q.CD,Q.CD));}}if(Cm)this.Ac=(this.
Ac&~(1<<Q.Bg))|33554432;if(JB&&(this.Ac<16777216))this.Ac=this.Ac|67108864;if(Cm&&
Q.C8)this.Ac=this.Ac|67108864;if(Cm&&!(this.Ac&16777215))this.Ac=0;if(Dr&&(this.
Ac>=67108864)){var Du=this.Gc();if(!!Du)Du.MN(null,null,this,0x0);}if((Dr&&!!(this.
Ac&16777216))&&!!(this.Ac&33554432)){Dr=false;Cm=true;}if(!!Q&&!(this.Ac&(4096<<
Q.Bg)))return this;if(!!AO&&!(this.Ac&(4096<<AO.Bg)))return this;if(Cm&&!(this.Ac&
16777216))return this;if(((D_||Jd)||Dr)&&((this.Ac<16777216)||(this.Ac>=33554432
)))return this;if(Cm)this.Ac=this.Ac&3758100479;if(Cm&&!(this.Ac&16777215))this.
Ac=0;if(!!BH&&(BH.J5===this))return null;if((!!BH&&BH.Down)&&(this.Kf||!this.H8)
)return null;if((!!BH&&BH.Down)&&!B.wa(this.M,this.G.Oz(BH.CD)))return null;if((
!!BH&&!BH.Down)&&(!this.Kf||(this.Kg!==BH.Bg)))return null;if((!Q&&!AO)&&!BH)return null;
if(!!Q){this.Kf=D_||Dr;this.Kg=Q.Bg;this.Cq=Q.Cq;}if(!!AO)this.Kg=AO.Bg;if(!!BH){
this.Kf=BH.Down;this.Kg=BH.Bg;}if(!!BH&&BH.Down){this.Ml();this.AG=(((BH.An-this.
GY)*0.001)*this.EX)+this.AG;this.AH=(((BH.An-this.Is)*0.001)*this.EY)+this.AH;if(
this.DM)this.AG=0;if(this.DN)this.AH=0;this.EX=0;this.EY=0;this.DM=false;this.DN=
false;this.Kw=this.At;this.HI=BH.An;return this;}if(D_){this.Ml();this.AG=(((Q.An-
this.GY)*0.001)*this.EX)+this.AG;this.AH=(((Q.An-this.Is)*0.001)*this.EY)+this.AH;
if(this.DM||!this.H8)this.AG=0;if(this.DN||!this.H8)this.AH=0;this.EX=0;this.EY=
0;this.DM=false;this.DN=false;if(!this.H8){this.H8=true;(A=this.KF)?A[1].call(A[
0],this):null;}this.Kw=this.At;this.HI=Q.An;}if(!!AO){var BW=B.abe(AO.Bi,AO.Cq);
var Al=this.At;if(this.IW)Al=[this.Kw[0]+BW[0],Al[1]];Al=[Al[0],this.Kw[1]+BW[1]
];if(Al[0]<this.BC[0])Al=[this.BC[0]+(((Al[0]-this.BC[0])/2)|0),Al[1]];else if(Al[
0]>this.BB[0])Al=[this.BB[0]+(((Al[0]-this.BB[0])/2)|0),Al[1]];if(Al[1]<this.BC[
1])Al=[Al[0],this.BC[1]+(((Al[1]-this.BC[1])/2)|0)];else if(Al[1]>this.BB[1])Al=[
Al[0],this.BB[1]+(((Al[1]-this.BB[1])/2)|0)];if(!B.aaX(Al,this.At)){this.Mt=B.abe(
Al,this.At);this.At=Al;(A=this.Ip)?A[1].call(A[0],this):null;}}if((!!BH&&!BH.Down
)&&((BH.An-this.HI)>=200)){this.AG=0;this.AH=0;}if(Dr&&((Q.An-this.HI)>=200)){this.
AG=0;this.AH=0;}if(!!AO&&(AO.An>this.HI)){var BW=AO.At;var Nu=1000/(AO.An-this.HI
);var FS=0;var FT;if(this.IW)FS=BW[0]*Nu;FT=BW[1]*Nu;if((FS*this.AG)<0)this.AG=0;
if((FT*this.AH)<0)this.AH=0;this.AG=(this.AG+FS)*0.5;this.AH=(this.AH+FT)*0.5;this.
HI=AO.An;}if(!Cm&&!BH)return this;if(!!Q&&Q.C8){this.AG=0;this.AH=0;}if((this.At[
0]<=this.BC[0])||(this.At[0]>=this.BB[0]))this.AG=0;else if(!this.AG){var AP=this.
At[0];var Ba=this.BC[0];var Bb=this.BB[0];if(AP<Ba)Bb=this.BC[0];else if(AP>Bb)Ba=
this.BB[0];else{Ba=AP;Bb=AP;}if((Ba-AP)<=(AP-Bb))AP=Ba;else AP=Bb;if(AP!==this.At[
0]){var Cb=AP-this.At[0];if(Cb>0)this.AG=Math.sqrt((Cb*2)*this.EC)+20;if(Cb<0)this.
AG=-Math.sqrt((-Cb*2)*this.EC)-20;this.EX=(400-(this.AG*this.AG))/(2*Cb);this.Ht=
AP;}}else{var RH=this.AG*this.AG;var Cb=RH/(2*this.EC);var AP=this.At[0];if(this.
AG>0)AP=AP+(Cb|0);if(this.AG<0)AP=AP-(Cb|0);if(AP>this.BB[0])AP=this.BB[0];else if(
AP<this.BC[0])AP=this.BC[0];var NZ=AP;var Ba=this.BC[0];var Bb=this.BB[0];if(AP<
Ba)Bb=this.BC[0];else if(AP>Bb)Ba=this.BB[0];else{Ba=AP;Bb=AP;}if(this.AG>0){if(
Bb<=this.At[0])AP=Ba;else if((AP-Bb)<(Ba-AP))AP=Bb;else AP=Ba;}else if(Ba>=this.
At[0])AP=Bb;else if((AP-Bb)>(Ba-AP))AP=Ba;else AP=Bb;if(AP!==this.At[0]){Cb=AP-this.
At[0];if(AP!==NZ){var F$=AP-NZ;if(F$>0)this.AG=this.AG+Math.sqrt((F$*2)*this.EC);
if(F$<0)this.AG=this.AG-Math.sqrt((-F$*2)*this.EC);}if(this.AG>0)this.AG=this.AG+
20;if(this.AG<0)this.AG=this.AG-20;this.EX=(400-(this.AG*this.AG))/(2*Cb);this.Ht=
AP;}else this.AG=0;}if((this.At[1]<=this.BC[1])||(this.At[1]>=this.BB[1]))this.AH=
0;else if(!this.AH){var AQ=this.At[1];var Ba=this.BC[1];var Bb=this.BB[1];if(AQ<
Ba)Bb=this.BC[1];else if(AQ>Bb)Ba=this.BB[1];else{Ba=AQ;Bb=AQ;}if((Ba-AQ)<=(AQ-Bb
))AQ=Ba;else AQ=Bb;if(AQ!==this.At[1]){var Cb=AQ-this.At[1];if(Cb>0)this.AH=Math.
sqrt((Cb*2)*this.EC)+20;if(Cb<0)this.AH=-Math.sqrt((-Cb*2)*this.EC)-20;this.EY=(
400-(this.AH*this.AH))/(2*Cb);this.Hu=AQ;}}else{var RI=this.AH*this.AH;var Cb=RI
/(2*this.EC);var AQ=this.At[1];if(this.AH>0)AQ=AQ+(Cb|0);if(this.AH<0)AQ=AQ-(Cb|
0);if(AQ>this.BB[1])AQ=this.BB[1];else if(AQ<this.BC[1])AQ=this.BC[1];var N0=AQ;
var Ba=this.BC[1];var Bb=this.BB[1];if(AQ<Ba)Bb=this.BC[1];else if(AQ>Bb)Ba=this.
BB[1];else{Ba=AQ;Bb=AQ;}if(this.AH>0){if(Bb<=this.At[1])AQ=Ba;else if((AQ-Bb)<(Ba-
AQ))AQ=Bb;else AQ=Ba;}else if(Ba>=this.At[1])AQ=Bb;else if((AQ-Bb)>(Ba-AQ))AQ=Ba;
else AQ=Bb;if(AQ!==this.At[1]){Cb=AQ-this.At[1];if(AQ!==N0){var F$=AQ-N0;if(F$>0
)this.AH=this.AH+Math.sqrt((F$*2)*this.EC);if(F$<0)this.AH=this.AH-Math.sqrt((-F$
*2)*this.EC);}if(this.AH>0)this.AH=this.AH+20;if(this.AH<0)this.AH=this.AH-20;this.
EY=(400-(this.AH*this.AH))/(2*Cb);this.Hu=AQ;}else this.AH=0;}if(!!Q)this.GY=Q.An;
if(!!BH)this.GY=BH.An;this.Is=this.GY;this.GZ=this.At[0];this.G0=this.At[1];this.
RJ();return this;},Eb:function(Ad,P,Ct,D2,Ey,EW){var A;if(!!D2&&(D2!==this))return null;
if(this.Ac>=33554432)return null;if((this.Ac>=16777216)&&!(this.Ac&(4096<<P)))return null;
if(!this.IW&&!!(EW&0xC))return null;var I=B.lb(Ad,this.M);if(!((I[0]>=I[2])||(I[
1]>=I[3]))){var CG=B.aaI(Ad);var AY=AV;if(CG[0]<I[0])AY=[I[0]-CG[0],AY[1]];if(CG[
0]>=I[2])AY=[(I[2]-CG[0])-1,AY[1]];if(CG[1]<I[1])AY=[AY[0],I[1]-CG[1]];if(CG[1]>=
I[3])AY=[AY[0],(I[3]-CG[1])-1];return B._NewObject(E.IA,0).Initialize(this,AY);}
return null;},Ml:function(){if(!!this.timer){B.z9([this,this.Cx],this.timer,0);this.
timer=null;}},RJ:function(){this.timer=B._GetAutoObject(B.acj.Fb);B.zV([this,this.
Cx],this.timer,0);},Cx:function(Aw){var A;if(!this.timer)return;var It=(this.timer.
An-this.GY)*0.001;var Iu=(this.timer.An-this.Is)*0.001;var RM=It*It;var RN=Iu*Iu;
var FS=(this.EX*It)+this.AG;var FT=(this.EY*Iu)+this.AH;var Al=[((((this.EX*0.5)
*RM)+(this.AG*It))+this.GZ)|0,((((this.EY*0.5)*RN)+(this.AH*Iu))+this.G0)|0];if(
this.DM&&(It>=0.5)){Al=[this.Ht,Al[1]];this.AG=0;this.EX=0;this.GZ=Al[0];this.DM=
false;}else if(this.DM){var Gu=1-Math.pow(1-(It/0.5),5);Al=[(this.GZ+((this.Ht-this.
GZ)*Gu))|0,Al[1]];}if(this.DN&&(Iu>=0.5)){Al=[Al[0],this.Hu];this.AH=0;this.EY=0;
this.G0=Al[1];this.DN=false;}else if(this.DN){var Gu=1-Math.pow(1-(Iu/0.5),5);Al=[
Al[0],(this.G0+((this.Hu-this.G0)*Gu))|0];}if(((this.AG>0)&&(FS<0))||((this.AG<0
)&&(FS>0))){FS=0;Al=[this.At[0],Al[1]];}if(((this.AH>0)&&(FT<0))||((this.AH<0)&&(
FT>0))){FT=0;Al=[Al[0],this.At[1]];}if(!this.DM&&(Al[0]<this.BC[0])){this.GZ=Al[
0];this.Ht=this.BC[0];this.GY=this.timer.An;this.DM=true;}else if(!this.DM&&(Al[
0]>this.BB[0])){this.GZ=Al[0];this.Ht=this.BB[0];this.GY=this.timer.An;this.DM=true;
}if(!this.DN&&(Al[1]<this.BC[1])){this.G0=Al[1];this.Hu=this.BC[1];this.Is=this.
timer.An;this.DN=true;}else if(!this.DN&&(Al[1]>this.BB[1])){this.G0=Al[1];this.
Hu=this.BB[1];this.Is=this.timer.An;this.DN=true;}if(((!this.DM&&!!this.AG)&&(FS>-
20))&&(FS<20)){Al=[this.Ht,Al[1]];this.AG=0;this.EX=0;this.GZ=Al[0];}if(((!this.
DN&&!!this.AH)&&(FT>-20))&&(FT<20)){Al=[Al[0],this.Hu];this.AH=0;this.EY=0;this.
G0=Al[1];}if(!B.aaX(Al,this.At)){this.Mt=B.abe(Al,this.At);this.At=Al;(A=this.Ip
)?A[1].call(A[0],this):null;}if(((!this.AG&&!this.AH)&&!this.DM)&&!this.DN){this.
Ml();this.H8=false;}},OQ:function(C){if(C<0)C=0;if(C>1)C=1;if(C===this.Mx)return;
this.Mx=C;if(C<(1e-007))C=1e-007;this.EC=C*10000;},_Init:function(aArg){E.A9._Init.
call(this,aArg);this.__proto__=E.CZ;this.F=0x10011B;},_Mark:function(D){var A;E.
A9._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.KF)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ip)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"};E.Ee={AC:null,Ge:
null,Dl:null,DX:null,HG:0,An:0,MM:0,DU:148,A4:0,AK:0,Cp:true,Down:false,LE:false
,Bh:function(aArg){var A;var E4=(E.Ab.isPrototypeOf(A=this.K)?A:null);if(!E4)throw new
Error(LM);this.AC=E4.Ky;E4.Ky=this;},Bc:function(Ao){var A;if(!!Ao&&Ao.Ov(this.DU
)){this.Down=Ao.Down;this.A4=Ao.A4;this.AK=Ao.AK;this.An=Ao.An;if(Ao.Down){this.
MM=this.HG;this.LE=this.HG>0;if(this.LE)(A=this.DX)?A[1].call(A[0],this):null;else(
A=this.Dl)?A[1].call(A[0],this):null;this.HG=this.HG+1;return true;}if(!Ao.Down){
this.LE=this.HG>1;this.MM=this.HG-1;this.HG=0;(A=this.Ge)?A[1].call(A[0],this):null;
return true;}}return false;},_Init:function(aArg){this.__proto__=E.Ee;this.Bh(aArg
);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.AC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ge
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dl)&&((A=A[0])._cycle!=D)
)A._Mark(A._cycle=D);if((A=this.DX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};E.IA={BV:null,IB:0,At:B.wf,Initialize:function(L,aOffset
){this.BV=L;this.At=aOffset;this.IB=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=E.IA;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.BV)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(
A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};E.HX={
GS:null,BI:B.wg,Af:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=E.HX;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.GS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K
)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};E.JR={FW:B.wf,FV:B.wf,_Init:function(aArg){E.HX._Init.call(
this,aArg);this.__proto__=E.JR;},_className:"Core::LayoutLineContext"};E.JS={Js:
B.wf,Jr:B.wf,FW:B.wf,FV:B.wf,_Init:function(aArg){E.HX._Init.call(this,aArg);this.
__proto__=E.JS;},_className:"Core::LayoutQuadContext"};E.Ft={resource:null,Ed:function(
){this.resource=null;},Bh:function(aArg){this.resource=aArg;},_Init:function(aArg
){this.__proto__=E.Ft;this.Bh(aArg);B.h7++;},_Done:function(){this.Ed();this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:"Core::Resource"
};E.Timer={H4:null,timer:null,An:0,Period:1000,JF:0,Cp:false,Ed:function(){var tmp=
this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},KG:function(aBegin,aPeriod
){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>
0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(
aBegin,aPeriod);}this.timer=tmp;},IS:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Cp)this.KG(this.JF,C);},JY:function(C){if(C<0)C=0;if(C===this.
JF)return;this.JF=C;if(this.Cp)this.KG(C,this.Period);},BU:function(C){if(C===this.
Cp)return;this.Cp=C;if(C)this.KG(this.JF,this.Period);else this.KG(0,0);this.An=
this.JO();},JO:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.An=this.JO();if(!this.Period
)this.BU(false);(A=this.H4)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.Ed();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.H4)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.SR={SS:0x1,R4:0x2,Sd:0x4,SP:
0x8,Cp:0x10,SJ:0x20,Se:0x40,So:0x80,Sc:0x100,Sj:0x200,Sb:0x400,Sw:0x800,MV:0x1000
,SQ:0x2000,St:0x4000,Su:0x8000,R_:0x10000,Ss:0x20000,SG:0x40000,R$:0x80000,Sv:0x100000
,R9:0x200000};E.DA={Sx:0x1,Sy:0x2,R0:0x4,R1:0x8,R2:0x10,RZ:0x20};E.Sg={Sp:0,SM:1
,R6:2,Sk:3,SA:4,SN:5,SO:6,R7:7,R8:8,Sm:9,Sl:10,SC:11,SB:12};E.KeyCode={NoKey:0,Ok:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};E.Sz={SW:0x1,ST:0x2,SU:0x4,SV:0x8,Sn:
0x10,Sf:0x20};
E._Init=function(){E.HY.__proto__=E.BV;E.D0.__proto__=E.BV;E.A9.__proto__=E.BV;E.
Ab.__proto__=E.A9;E.Root.__proto__=E.Ab;E.KeyEvent.__proto__=E.Event;E.JI.__proto__=
E.Event;E.EJ.__proto__=E.Event;E.HR.__proto__=E.Event;E.IU.__proto__=E.A9;E.BF.__proto__=
E.D0;E.CZ.__proto__=E.A9;E.JR.__proto__=E.HX;E.JS.__proto__=E.HX;};E._ReInit=function(
){};E.Dc=function(D){};return E;})();

/* Embedded Wizard */