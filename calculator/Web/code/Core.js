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
var A4=[0,0];var Bi=[0,0,0,0];var Ds="The view does not belong to this group";var
ES=[340,600];var Eb="The dialog component is already presented";var FL="The dialog component is actually not presented";
var Iw="No fader to perform the fade-in/out operation";var JL="Trying to use the same fader twice";
var Ix="Trying to fade-in/out a group which belongs to another owner";var Iy="No view to restack";
var G3="View is not in this group";var On="No view to remove";var Oo="No view to add";
var Op="View already in a group";var Oq="Recursive invalidate during active update cycle.";
var Iz=[-8,-8,9,9];var Or="No group to end the modal state.";var Gh="The group is not modal.";
var Mn="No group to obtain the modal state.";var Os="The group serves already as the \'virtual keyboard\'.";
var Ot="The group is already modal.";var Ou="The method SwitchToDialog() is not available in Core::VerticalList.";
var Ov="The method DismissDialog() is not available in Core::VerticalList.";var Ow=
"The method PresentDialog() is not available in Core::VerticalList.";var Ox="The method FadeGroup() is not available in Core::VerticalList.";
var Oy="The method RestackTop() is not available in Core::VerticalList.";var Oz=
"The method Restack() is not available in Core::VerticalList.";var OA="The method Remove() is not available in Core::VerticalList.";
var OB="The method Add() is not available in Core::VerticalList.";var HS="The Slide Touch Handler:";
var OC="is already connected with a view.";var OD="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var OE=[0,0,170,120];var G4=[0,0,1,1];var OF="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Gi="Trying to cancel a task not belonging to this queue!";
var OG="Trying to enqueue a task twice!";
E.AB={Q:null,S:null,I:null,Bl:null,F:0x103,Ez:0,DP:0x14,K$:function(Ao,Ms){},CH:function(
C){if(this.Ez===C)return;this.Ez=C;if(!!this.I){var HC=this.Q;var Ax=0;while(!!HC&&(
C>HC.Ez)){HC=HC.Q;Ax=Ax+1;}HC=this.S;while(!!HC&&(C<HC.Ez)){HC=HC.S;Ax=Ax-1;}if(
!!Ax)this.I.Qf(this,Ax);}},Dp:function(C){var A;var Ax=C^this.DP;if(!Ax)return;this.
DP=C;if(!!this.Bl&&!((this.F&0x400)===0x400)){this.I.F=this.I.F|0x5000;B.pe([A=this.
I,A.Dk],this);this.I.Al([0,0,(A=this.I.M)[2]-A[0],A[3]-A[1]]);}if(!!this.Bl&&((this.
F&0x400)===0x400)){this.Bl.IS.F=this.Bl.IS.F|0x1000;this.I.F=this.I.F|0x4000;B.pe([
A=this.I,A.Dk],this);}},Db:function(){var An=this.I;while(!!An){var BL=(E.Root.isPrototypeOf(
An)?An:null);if(!!BL)return BL;An=An.I;}return null;},Er:function(Bn,aClip,aOffset
,Bg,aBlend){},GetClipping:function(){return this.GetExtent();},BU:function(Az){return null;
},Fd:function(Ay,W,C6,ET,ED,Gk){return null;},LL:function(Ay){return Ay;},LN:function(
Ao,EB){return A4;},LX:function(aOffset,Mp){},GetExtent:function(){return Bi;},At:
function(DR,EA){var A;if(((this.F&0x200)===0x200))DR=DR&~0x400;var Ph=(this.F&~EA
)|DR;var E2=Ph^this.F;this.F=Ph;if(!!this.I&&!!(E2&0x14)){var QU=((this.F&0x14)===
0x14);if(QU&&!this.I.CS)this.I.Dc(this);if(!QU&&(this.I.CS===this))this.I.Dc(this.
I.Ny(this,0x14));}if(!!this.I&&!!(E2&0x403))this.I.Al(this.GetClipping());if(((!
!this.Bl&&!!this.I)&&((Ph&0x400)===0x400))&&((E2&0x1)===0x1)){this.F=this.F|0x800;
this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dk],this);}if(!!this.I&&((E2&0x400)===
0x400)){this.Bl=null;this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I
,A.Dk],this);}if(((((E2&0x100000)===0x100000)&&((EA&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.At(0x0,0x10);if(((((E2&0x100000
)===0x100000)&&((DR&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.I)&&((this.I.F&0x10)===
0x10))))this.At(0x10,0x0);if(((((E2&0x200000)===0x200000)&&((EA&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.At(0x10,0x0);if((((((
E2&0x200000)===0x200000)&&((DR&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.I&&!((this.I.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.I)&&(this.I.Bq.Au!==this))))this.At(0x0,0x10);},_Init:
function(aArg){this.__proto__=E.AB;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Q)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.S)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bl)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::View"};E.KC={Cz:B.wf,Df:B.wf,Cy:B.wf,De:B.wf,K$:function(
Ao,Ms){var Aj=B._NewObject(E.LW,0);this.Bl=null;Aj.DA=this.GetExtent();Aj.Aq=Ao;
Aj.IS=Ms;Aj.Lu=this.De;Aj.Lv=this.Cy;Aj.Lw=this.Df;Aj.Lx=this.Cz;this.Bl=Aj;},LN:
function(Ao,EB){var A;var AX=this.DP;var Aj=(E.LW.isPrototypeOf(A=this.Bl)?A:null
);var Ad=Aj.DA[0];var Ae=Aj.DA[1];var Ac=Aj.DA[2];var Af=Aj.DA[3];var Dz=[Ao[2]-
Ao[0],Ao[3]-Ao[1]];var Bh=Ac-Ad;var AM=Af-Ae;if(!EB){var E$=[(A=Aj.Aq)[2]-A[0],A[
3]-A[1]];Ad=Ad-Aj.Aq[0];Ae=Ae-Aj.Aq[1];if(E$[0]!==Dz[0]){var BN=((AX&0x4)===0x4);
var BO=((AX&0x8)===0x8);var FT=((AX&0x1)===0x1);if(!BN&&(FT||!BO))Ad=((Ad*Dz[0])
/E$[0])|0;if(!BO&&(FT||!BN)){Ac=Ac-Aj.Aq[0];Ac=((Ac*Dz[0])/E$[0])|0;Ac=Ac-Dz[0];
}else Ac=Ac-Aj.Aq[2];Ad=Ad+Ao[0];Ac=Ac+Ao[2];if(!FT){if(BN&&!BO)Ac=Ad+Bh;else if(
!BN&&BO)Ad=Ac-Bh;else{Ad=Ad+((((Ac-Ad)-Bh)/2)|0);Ac=Ad+Bh;}}}else{Ac=Ac-Aj.Aq[2];
Ad=Ad+Ao[0];Ac=Ac+Ao[2];}if(E$[1]!==Dz[1]){var BP=((AX&0x10)===0x10);var BM=((AX&
0x20)===0x20);var FU=((AX&0x2)===0x2);if(!BP&&(FU||!BM))Ae=((Ae*Dz[1])/E$[1])|0;
if(!BM&&(FU||!BP)){Af=Af-Aj.Aq[1];Af=((Af*Dz[1])/E$[1])|0;Af=Af-Dz[1];}else Af=Af-
Aj.Aq[3];Ae=Ae+Ao[1];Af=Af+Ao[3];if(!FU){if(BP&&!BM)Af=Ae+AM;else if(!BP&&BM)Ae=
Af-AM;else{Ae=Ae+((((Af-Ae)-AM)/2)|0);Af=Ae+AM;}}}else{Af=Af-Aj.Aq[3];Ae=Ae+Ao[1
];Af=Af+Ao[3];}}else{switch(EB){case 3:{Ad=Ao[0];Ac=Ad+Bh;}break;case 4:{Ac=Ao[2
];Ad=Ac-Bh;}break;case 1:{Ae=Ao[1];Af=Ae+AM;}break;case 2:{Af=Ao[3];Ae=Af-AM;}break;
default:;}if((EB===3)||(EB===4)){var BP=((AX&0x10)===0x10);var BM=((AX&0x20)===0x20
);var FU=((AX&0x2)===0x2);if(FU){Ae=Ao[1];Af=Ao[3];}else if(BP&&!BM){Ae=Ao[1];Af=
Ae+AM;}else if(BM&&!BP){Af=Ao[3];Ae=Af-AM;}else{Ae=Ao[1]+((((Ao[3]-Ao[1])-AM)/2)|
0);Af=Ae+AM;}}if((EB===1)||(EB===2)){var BN=((AX&0x4)===0x4);var BO=((AX&0x8)===
0x8);var FT=((AX&0x1)===0x1);if(FT){Ad=Ao[0];Ac=Ao[2];}else if(BN&&!BO){Ad=Ao[0];
Ac=Ad+Bh;}else if(BO&&!BN){Ac=Ao[2];Ad=Ac-Bh;}else{Ad=Ao[0]+((((Ao[2]-Ao[0])-Bh)
/2)|0);Ac=Ad+Bh;}}}Aj.isEmpty=(Ad>=Ac)||(Ae>=Af);Bh=(Ac-Ad)-1;AM=(Af-Ae)-1;var G_=
Aj.DA[0];var G$=Aj.DA[1];var Gp=(Aj.DA[2]-G_)-1;var Go=(Aj.DA[3]-G$)-1;if(!Gp)Gp=
1;if(!Go)Go=1;if(((this.F&0x100)===0x100)){this.De=[Ad+((((Aj.Lu[0]-G_)*Bh)/Gp)|
0),Ae+((((Aj.Lu[1]-G$)*AM)/Go)|0)];this.Cy=[Ad+((((Aj.Lv[0]-G_)*Bh)/Gp)|0),Ae+((((
Aj.Lv[1]-G$)*AM)/Go)|0)];this.Df=[Ad+((((Aj.Lw[0]-G_)*Bh)/Gp)|0),Ae+((((Aj.Lw[1]-
G$)*AM)/Go)|0)];this.Cz=[Ad+((((Aj.Lx[0]-G_)*Bh)/Gp)|0),Ae+((((Aj.Lx[1]-G$)*AM)/
Go)|0)];}else{this.Jo([Ad+((((Aj.Lu[0]-G_)*Bh)/Gp)|0),Ae+((((Aj.Lu[1]-G$)*AM)/Go
)|0)]);this.Jp([Ad+((((Aj.Lv[0]-G_)*Bh)/Gp)|0),Ae+((((Aj.Lv[1]-G$)*AM)/Go)|0)]);
this.Jq([Ad+((((Aj.Lw[0]-G_)*Bh)/Gp)|0),Ae+((((Aj.Lw[1]-G$)*AM)/Go)|0)]);this.Jr([
Ad+((((Aj.Lx[0]-G_)*Bh)/Gp)|0),Ae+((((Aj.Lx[1]-G$)*AM)/Go)|0)]);this.Bl=Aj;}return[
Bh+1,AM+1];},LX:function(aOffset,Mp){if(Mp){this.De=B.abf(this.De,aOffset);this.
Cy=B.abf(this.Cy,aOffset);this.Df=B.abf(this.Df,aOffset);this.Cz=B.abf(this.Cz,aOffset
);}else{this.Jo(B.abf(this.De,aOffset));this.Jp(B.abf(this.Cy,aOffset));this.Jq(
B.abf(this.Df,aOffset));this.Jr(B.abf(this.Cz,aOffset));}},GetExtent:function(){
if(!!this.Bl&&this.Bl.isEmpty)return Bi;var Ad=this.De[0];var Ae=this.De[1];var Ac=
this.Df[0];var Af=this.Df[1];if((((this.Cz[0]!==Ad)||(this.Cy[1]!==Ae))||(this.Cy[
0]!==Ac))||(this.Cz[1]!==Af)){if(this.Cy[0]<Ad)Ad=this.Cy[0];if(this.Df[0]<Ad)Ad=
this.Df[0];if(this.Cz[0]<Ad)Ad=this.Cz[0];if(this.Cy[1]<Ae)Ae=this.Cy[1];if(this.
Df[1]<Ae)Ae=this.Df[1];if(this.Cz[1]<Ae)Ae=this.Cz[1];if(this.De[0]>Ac)Ac=this.De[
0];if(this.Cy[0]>Ac)Ac=this.Cy[0];if(this.Cz[0]>Ac)Ac=this.Cz[0];if(this.De[1]>Af
)Af=this.De[1];if(this.Cy[1]>Af)Af=this.Cy[1];if(this.Cz[1]>Af)Af=this.Cz[1];}else{
var tmp;if(Ac<Ad){tmp=Ad;Ad=Ac;Ac=tmp;}if(Af<Ae){tmp=Ae;Ae=Af;Af=tmp;}}return[Ad
,Ae,Ac+1,Af+1];},Jr:function(C){var A;if(B.aaX(C,this.Cz))return;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.GetClipping());this.Bl=null;this.Cz=C;if(!!this.
I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping());if((!!this.I&&((this.F&0x400
)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.
F|0x4000;B.pe([A=this.I,A.Dk],this);}},Jq:function(C){var A;if(B.aaX(C,this.Df))
return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping());this.Bl=null;
this.Df=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping());if((!!
this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dk],this);}},Jp:function(C){var A;
if(B.aaX(C,this.Cy))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));this.Bl=null;this.Cy=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dk],this);}},Jo:function(
C){var A;if(B.aaX(C,this.De))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(
this.GetClipping());this.Bl=null;this.De=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Al(this.GetClipping());if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dk],this
);}},NL:function(Eg){var BA=B.abi(4,B.wf,null);var G=0;var BJ=3;var O3=false;var
O4=false;BA.Set(0,this.De);BA.Set(1,this.Cy);BA.Set(2,this.Df);BA.Set(3,this.Cz);
while(G<4){var RE=BA.Get(G)[0];var M9=BA.Get(G)[1];var VX=BA.Get(BJ)[0];var PB=BA.
Get(BJ)[1];if(((M9>Eg[1])!==(PB>Eg[1]))||((M9<Eg[1])!==(PB<Eg[1]))){var Dl=((((VX-
RE)*(Eg[1]-M9))/(PB-M9))|0)+RE;if(Eg[0]>Dl)O3=!O3;if(Eg[0]<Dl)O4=!O4;}BJ=G;G=G+1;
}return O3||O4;},Sa:function(){return((((this.De[0]===this.Cz[0])&&(this.Cy[0]===
this.Df[0]))&&(this.De[1]===this.Cy[1]))&&(this.Df[1]===this.Cz[1]))||((((this.De[
0]===this.Cy[0])&&(this.Df[0]===this.Cz[0]))&&(this.De[1]===this.Cz[1]))&&(this.
Cy[1]===this.Df[1]));},_Init:function(aArg){E.AB._Init.call(this,aArg);this.__proto__=
E.KC;},_className:"Core::QuadView"};E.BC={M:B.wg,K$:function(Ao,Ms){var Aj=B._NewObject(
E.LV,0);Aj.DA=this.M;Aj.Aq=Ao;Aj.IS=Ms;this.Bl=Aj;},LN:function(Ao,EB){var A;var
AX=this.DP;var Aj=this.Bl;var Ad=Aj.DA[0];var Ae=Aj.DA[1];var Ac=Aj.DA[2];var Af=
Aj.DA[3];var Dz=[Ao[2]-Ao[0],Ao[3]-Ao[1]];var Bh=Ac-Ad;var AM=Af-Ae;if(!EB){var E$=[(
A=Aj.Aq)[2]-A[0],A[3]-A[1]];Ad=Ad-Aj.Aq[0];Ae=Ae-Aj.Aq[1];if(E$[0]!==Dz[0]){var BN=((
AX&0x4)===0x4);var BO=((AX&0x8)===0x8);var FT=((AX&0x1)===0x1);if(!BN&&(FT||!BO)
)Ad=((Ad*Dz[0])/E$[0])|0;if(!BO&&(FT||!BN)){Ac=Ac-Aj.Aq[0];Ac=((Ac*Dz[0])/E$[0])|
0;Ac=Ac-Dz[0];}else Ac=Ac-Aj.Aq[2];Ad=Ad+Ao[0];Ac=Ac+Ao[2];if(!FT){if(BN&&!BO)Ac=
Ad+Bh;else if(!BN&&BO)Ad=Ac-Bh;else{Ad=Ad+((((Ac-Ad)-Bh)/2)|0);Ac=Ad+Bh;}}}else{
Ac=Ac-Aj.Aq[2];Ad=Ad+Ao[0];Ac=Ac+Ao[2];}if(E$[1]!==Dz[1]){var BP=((AX&0x10)===0x10
);var BM=((AX&0x20)===0x20);var FU=((AX&0x2)===0x2);if(!BP&&(FU||!BM))Ae=((Ae*Dz[
1])/E$[1])|0;if(!BM&&(FU||!BP)){Af=Af-Aj.Aq[1];Af=((Af*Dz[1])/E$[1])|0;Af=Af-Dz[
1];}else Af=Af-Aj.Aq[3];Ae=Ae+Ao[1];Af=Af+Ao[3];if(!FU){if(BP&&!BM)Af=Ae+AM;else
if(!BP&&BM)Ae=Af-AM;else{Ae=Ae+((((Af-Ae)-AM)/2)|0);Af=Ae+AM;}}}else{Af=Af-Aj.Aq[
3];Ae=Ae+Ao[1];Af=Af+Ao[3];}}else{switch(EB){case 3:{Ad=Ao[0];Ac=Ad+Bh;}break;case
4:{Ac=Ao[2];Ad=Ac-Bh;}break;case 1:{Ae=Ao[1];Af=Ae+AM;}break;case 2:{Af=Ao[3];Ae=
Af-AM;}break;default:;}if((EB===3)||(EB===4)){var BP=((AX&0x10)===0x10);var BM=((
AX&0x20)===0x20);var FU=((AX&0x2)===0x2);if(FU){Ae=Ao[1];Af=Ao[3];}else if(BP&&!
BM){Ae=Ao[1];Af=Ae+AM;}else if(BM&&!BP){Af=Ao[3];Ae=Af-AM;}else{Ae=Ao[1]+((((Ao[
3]-Ao[1])-AM)/2)|0);Af=Ae+AM;}}if((EB===1)||(EB===2)){var BN=((AX&0x4)===0x4);var
BO=((AX&0x8)===0x8);var FT=((AX&0x1)===0x1);if(FT){Ad=Ao[0];Ac=Ao[2];}else if(BN&&
!BO){Ad=Ao[0];Ac=Ad+Bh;}else if(BO&&!BN){Ac=Ao[2];Ad=Ac-Bh;}else{Ad=Ao[0]+((((Ao[
2]-Ao[0])-Bh)/2)|0);Ac=Ad+Bh;}}}Aj.isEmpty=(Ad>=Ac)||(Ae>=Af);if(((this.F&0x100)===
0x100))this.M=[Ad,Ae,Ac,Af];else{this.P([Ad,Ae,Ac,Af]);this.Bl=Aj;}return[Ac-Ad,
Af-Ae];},LX:function(aOffset,Mp){if(Mp)this.M=B.abh(this.M,aOffset);else this.P(
B.abh(this.M,aOffset));},GetExtent:function(){return this.M;},P:function(C){var A;
if(B.aaY(C,this.M))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));this.Bl=null;this.M=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dk],this);}},UQ:function(
PA){this.P(PA);},Sj:function(){return this.M;},_Init:function(aArg){E.AB._Init.call(
this,aArg);this.__proto__=E.BC;},_className:"Core::RectView"};E.L={Am:null,AC:null
,MN:null,Bq:null,E3:null,IV:null,CS:null,Dd:255,K5:0,K8:0,K7:0,K6:0,Bt:function(
aArg){this.Be();},Er:function(Bn,aClip,aOffset,Bg,aBlend){var A;Bg=((Bg+1)*this.
Dd)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.U7(Bn,aClip,B.abf(aOffset,this.M.
slice(0,2)),Bg,aBlend);},GetClipping:function(){var A;var H=this.M;H=[].concat(H[
0]-this.K6,H.slice(1,4));H=B.abP(H,H[1]-this.K8);H=B.abN(H,H[2]+this.K7);H=[].concat(
H.slice(0,3),H[3]+this.K5);if(((this.F&0x80000)===0x80000)){var I0=Bi;var K;for(
K=this.Am;!!K;K=K.Q)if(((K.F&0x1)===0x1))I0=B.wC(I0,K.GetClipping());H=B.wC(H,B.
abh(I0,this.M.slice(0,2)));}return H;},Fd:function(Ay,W,C6,ET,ED,Gk){var A;var K=
this.AC;var IM=null;var T=Bi;var DX=null;var Pd=!!this.E3&&(!!this.E3.DU||!!this.
E3.Am);if(((A=B.lb(Ay,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;Ay=B.abg(Ay,this.
M.slice(0,2));if(!!ED){K=ED;while(!!K&&(K.I!==this))K=K.I;}while(!!K){if(((K.F&0x400
)===0x400)&&!DX){DX=K.S;while(!!DX&&!((DX.F&0x200)===0x200))DX=DX.S;if(!!DX)T=B.
lb(Ay,DX.GetExtent());else T=Bi;}if(DX===K){DX=null;T=Bi;}if((!!ET&&!!(E.L.isPrototypeOf(
K)?K:null))||((((((K.F&0x8)===0x8)&&((K.F&0x10)===0x10))&&!((K.F&0x40000)===0x40000
))&&!((K.F&0x20000)===0x20000))&&(!((K.F&0x10000)===0x10000)||((this.Bq.Au===K)&&
!Pd)))){var DA=K.GetExtent();var ME=ET;var IJ=null;if(ME===K)ME=null;if(((K.F&0x400
)===0x400)){if(!(((A=B.lb(DA,T))[0]>=A[2])||(A[1]>=A[3])))IJ=K.Fd(T,W,C6,ME,ED,Gk
);}else if(!(((A=B.lb(DA,Ay))[0]>=A[2])||(A[1]>=A[3]))||(ET===K))IJ=K.Fd(Ay,W,C6
,ME,ED,Gk);K=K.S;if(!!IJ){if(!IM||((IJ.J9<IM.J9)&&(IJ.J9>=0)))IM=IJ;if(!IJ.J9)K=
null;}}else K=K.S;ED=null;}return IM;},LL:function(Ay){var A;var B_;var K=this.Am;
var IH=Bi;var Lt=true;var result=(Ay=B_=B.abg(Ay,this.M.slice(0,2)),B_);while(!!
K){if(((K.F&0x200)===0x200)){var JY=(E.Fr.isPrototypeOf(K)?K:null);IH=B.lb(Ay,JY.
M);Lt=((JY.F&0x1)===0x1);}if(((K.F&0x1)===0x1)){if(((K.F&0x400)===0x400)){if(Lt){
var T=B.lb(K.GetClipping(),IH);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.wC(result
,K.LL(T));}}else{var T=B.lb(K.GetClipping(),Ay);if(!((T[0]>=T[2])||(T[1]>=T[3]))
)result=B.wC(result,K.LL(T));}}K=K.Q;}return B.lb(B.abh(result,this.M.slice(0,2)
),this.M);},At:function(DR,EA){var A;var MP=this.F;if((!!this.I&&((this.F&0x80001
)===0x80001))&&((EA&0x80000)===0x80000))this.I.Al(this.GetClipping());E.BC.At.call(
this,DR,EA);if(((!!this.I&&((this.F&0x1)===0x1))&&((DR&0x80000)===0x80000))&&!((
MP&0x80000)===0x80000))this.I.Al(this.GetClipping());var E2=this.F^MP;if(!!this.
CS&&((E2&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CS.At(0x40,0x0);else this.
CS.At(0x0,0x40);}if(!!this.Bq&&((E2&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((
this.Bq.Au.F&0x14)===0x14))this.Bq.Au.At(0x40,0x0);else this.Bq.Au.At(0x0,0x40);
}if(((E2&0x10)===0x10)){var K;for(K=this.Am;!!K;K=K.Q)if((((K.F&0x300000)===0x300000
)&&!((K.F&0x80)===0x80))&&(!((K.F&0x10000)===0x10000)||(this.Bq.Au===K)))K.At(DR&
0x10,EA&0x10);}if(!!E2){this.F=this.F|0x8000;B.pe([this,this.M6],this);}},P:function(
C){var A;if(B.aaY(C,this.M))return;var H_=[(A=this.M)[2]-A[0],A[3]-A[1]];var Pg=[
C[2]-C[0],C[3]-C[1]];var J0=!B.aaX(H_,Pg);E.BC.P.call(this,C);if((J0&&(H_[0]>0))&&(
H_[1]>0)){var Aq=[].concat(A4,H_);var K=this.Am;while(!!K){if((!K.Bl&&(K.DP!==0x14
))&&!((K.F&0x400)===0x400))K.K$(Aq,null);K=K.Q;}}if(J0){this.F=this.F|0x5000;B.pe([
this,this.M6],this);}},Pt:function(Az){var Q4=(E.KeyEvent.isPrototypeOf(Az)?Az:null
);var Fu=this.MN;if(!Q4)return null;while(!!Fu&&(!Fu.Bc||!Fu.BU(Q4)))Fu=Fu.Q;return Fu;
},U7:function(Bn,aClip,aOffset,Bg,aBlend){var A;var K=this.Am;var IH=Bi;var Lt=true;
this.RZ(Bn,aClip,aOffset,Bg,aBlend);while(!!K){if(((K.F&0x200)===0x200)){var JY=(
E.Fr.isPrototypeOf(K)?K:null);Lt=((JY.F&0x1)===0x1);IH=aClip;if(!((JY.F&0x80000)===
0x80000))IH=B.lb(IH,B.abh(JY.M,aOffset));}if(((K.F&0x1)===0x1)){if(((K.F&0x400)===
0x400)){if(Lt){var T=B.lb(B.abh(K.GetClipping(),aOffset),IH);if(!((T[0]>=T[2])||(
T[1]>=T[3])))K.Er(Bn,T,aOffset,Bg,aBlend);}}else{var T=B.lb(B.abh(K.GetClipping(
),aOffset),aClip);if(!((T[0]>=T[2])||(T[1]>=T[3])))K.Er(Bn,T,aOffset,Bg,aBlend);
}}K=K.Q;}this.R2(Bn,aClip,aOffset,Bg,aBlend);},VG:function(){var A;var O2=((this.
F&0x1000)===0x1000);var Ha=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var Gq=false;var JT=
Bi;var O0=Bi;var K=this.AC;var DX=null;while(!!K){if(((K.F&0x800)===0x800)){Gq=true;
K.F=K.F&~0x800;}if(Gq&&((K.F&0x200)===0x200))Gq=false;K=K.S;}Gq=false;K=this.Am;
if(O2){this.F=this.F&~0x1000;O2=!((Ha[0]>=Ha[2])||(Ha[1]>=Ha[3]));}this.F=this.F|
0x2000;while(!!K){if(((K.F&0x400)===0x400)){if(!!K.Bl&&(K.Bl.IS!==DX))K.Bl=null;
if((!K.Bl&&Gq)&&(K.DP!==0x14))K.K$(O0,DX);}if(!!K.Bl){if(O2&&!((K.F&0x400)===0x400
))K.LN(Ha,0);if(Gq&&((K.F&0x400)===0x400))K.LN(O0,0);}if(((K.F&0x200)===0x200)){
Gq=((K.F&0x1000)===0x1000);DX=(E.Fr.isPrototypeOf(K)?K:null);if(Gq){K.F=K.F&~0x1000;
JT=DX.M;O0=JT;Gq=!((JT[0]>=JT[2])||(JT[1]>=JT[3]));}if(Gq)this.Al(DX.M);}K=K.Q;}
this.F=this.F&~0x2000;this.Mm([Ha[2]-Ha[0],Ha[3]-Ha[1]]);},Dk:function(Z){B.pe([
this,this.M6],this);},M6:function(Z){var A;var VW=((this.F&0x1000)===0x1000);if(((
this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.VG();}if(((this.F&0x8000)===
0x8000)||VW){this.F=this.F&~0x8000;this.Gg(this.F);}},Dc:function(C){var A;if(!!
C&&(C.I!==this))throw new Error(Ds);if(!!C&&!((C.F&0x14)===0x14))C=null;if(!!C&&((
C.F&0x10000)===0x10000))C=null;if(C===this.CS)return;if(!!this.CS)this.CS.At(0x0
,0x60);this.CS=C;if(!!C){if(((this.F&0x40)===0x40))C.At(0x60,0x0);else C.At(0x20
,0x0);}},Sk:function(){var A;return((this.F&0x100000)===0x100000);},As:function(
C){if(C)this.At(0x100000,0x0);else this.At(0x0,0x100000);},EQ:function(C){var A;
if(C>255)C=255;if(C<0)C=0;if(C===this.Dd)return;this.Dd=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Al(this.GetClipping());},OJ:function(PA){this.EQ(PA);},Jk:function(
){var A;return((this.F&0x1)===0x1);},Ap:function(C){if(C)this.At(0x1,0x0);else this.
At(0x0,0x1);},ExtendClipping:function(IC,ID,IE,IB){var A;var K1=this.M;var DT=K1;
if(IC<0)IC=0;if(IC>255)IC=255;if(ID<0)ID=0;if(ID>255)ID=255;if(IE<0)IE=0;if(IE>255
)IE=255;if(IB<0)IB=0;if(IB>255)IB=255;DT=[].concat(DT[0]-(Math.max(IC,this.K6)&0xFF
),DT.slice(1,4));DT=B.abN(DT,DT[2]+(Math.max(ID,this.K7)&0xFF));DT=B.abP(DT,DT[1
]-(Math.max(IE,this.K8)&0xFF));DT=[].concat(DT.slice(0,3),DT[3]+(Math.max(IB,this.
K5)&0xFF));if(IC!==this.K6){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var H=DT;H=B.abN(H,K1[0]);this.I.Al(H);}this.K6=IC&0xFF;}if(ID!==this.
K7){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=DT;
H=[].concat(K1[2],H.slice(1,4));this.I.Al(H);}this.K7=ID&0xFF;}if(IE!==this.K8){
if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=DT;H=[
].concat(H.slice(0,3),K1[1]);this.I.Al(H);}this.K8=IE&0xFF;}if(IB!==this.K5){if((
!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=DT;H=B.abP(
H,K1[3]);this.I.Al(H);}this.K5=IB&0xFF;}},R2:function(Bn,aClip,aOffset,Bg,aBlend
){},RZ:function(Bn,aClip,aOffset,Bg,aBlend){},GetMaximalSize:function(){return ES;
},GetMinimalSize:function(){return A4;},Qm:function(B1,Dt,FM,EV,EX,IF,Ef,EW,C5,C3
,C4){var A;if(!this.Bq){this.Jy(B1,Dt,FM,EV,EX,null,null,C5,C3,C4);return;}var H9=
this.Bq;var B5=H9.Q;if(((B1.F&0x10000)===0x10000)&&(this.Bq.Au!==B1))throw new Error(
Eb);var FR=B._NewObject(E.Nm,0);var DW=H9.DW;var D3=null;var CD=null;if(!!B5){D3=
B5.D3;CD=B5.CD;}if(!!B5&&!!H9.IU)D3=H9.IU;if(!!B5&&!!Ef)CD=Ef;if(!!IF)DW=IF;if(!
Dt)Dt=B._GetAutoObject(B.acj.JA);if(!FM)FM=Dt;if(!EX)EX=EV;if(!EV)EV=EX;FR.DW=FM;
FR.CD=EV;FR.D3=EX;FR.IU=EW;FR.Au=B1;FR.Q=this.Bq.Q;this.Bq.Q=null;this.Bq=FR;if(
this.CS===B1)this.Dc(null);H9.Au.At(0x0,0x10040);if(((this.F&0x40)===0x40)&&((B1.
F&0x4)===0x4))B1.At(0x10040,0x0);else B1.At(0x10000,0x0);if(!!CD){this.Da(B5.Au,
CD.I7(),null,null,C4);this.Da(H9.Au,DW.Gw(),null,null,true);this.Da(FR.Au,Dt.Gx(
),C5,C3,true);}else if(!!D3){this.Da(B5.Au,D3.I8(),null,null,C4);this.Da(H9.Au,DW.
Gw(),null,null,true);this.Da(FR.Au,Dt.Gx(),C5,C3,true);}else if(!!DW){this.Da(H9.
Au,DW.Gw(),null,null,C4);this.Da(FR.Au,Dt.Gx(),C5,C3,true);}else this.Da(FR.Au,Dt.
Gx(),C5,C3,C4);},Ka:function(B1,IF,Ef,EW,C5,C3,C4){var A;if(!this.Bq)return;if(!
B1)return;var Cg=this.Bq;var B5=this.Bq.Q;var IY=null;while((!!Cg&&(Cg.Au!==B1))&&
!!Cg.Q){IY=Cg;Cg=B5;B5=Cg.Q;}if(!Cg||(Cg.Au!==B1))throw new Error(FL);if(!IY){this.
Bq=B5;Cg.Q=null;}else{IY.Q=B5;Cg.Q=null;}Cg.Au.At(0x0,0x10040);if(((((this.F&0x10
)===0x10)&&!!B5)&&!IY)&&((B5.Au.F&0x200000)===0x200000))B5.Au.At(0x10,0x0);if(((((
this.F&0x40)===0x40)&&!!B5)&&!IY)&&((B5.Au.F&0x4)===0x4))B5.Au.At(0x40,0x0);var DW=
Cg.DW;var D3=null;var CD=null;if(!!B5)D3=B5.D3;if(!!B5&&!!Cg.IU)D3=Cg.IU;if(!!B5&&
!!EW)D3=EW;if(!!IY&&!!B5)CD=B5.CD;if((!!IY&&!!B5)&&!!Ef)CD=Ef;if(!!IF)DW=IF;if(!
!CD){this.Da(B5.Au,CD.I7(),null,null,C4);this.Da(Cg.Au,DW.Gw(),C5,C3,true);}else
if(!!D3){this.Da(B5.Au,D3.I8(),null,null,C4);this.Da(Cg.Au,DW.Gw(),C5,C3,true);}
else this.Da(Cg.Au,DW.Gw(),C5,C3,C4);},Jy:function(B1,Dt,FM,EV,EX,Ef,EW,C5,C3,C4
){var A;if(!B1)return;if(!!this.Bq&&(this.Bq.Au===B1)){this.Qm(B1,Dt,FM,EV,EX,null
,Ef,EW,C5,C3,C4);return;}if(((B1.F&0x10000)===0x10000))throw new Error(Eb);var Cg=
B._NewObject(E.Nm,0);if(!!this.Bq&&!this.Bq.CD){if(!EW)EW=Ef;if(!Ef)Ef=EW;}var CD=
null;if(!!this.Bq)CD=this.Bq.CD;if(!!this.Bq&&!!Ef)CD=Ef;if(!Dt)Dt=B._GetAutoObject(
B.acj.JA);if(!FM)FM=Dt;if(!EX)EX=EV;if(!EV)EV=EX;Cg.DW=FM;Cg.CD=EV;Cg.D3=EX;Cg.IU=
EW;if(this.CS===B1)this.Dc(null);if(!!this.Bq&&((this.Bq.Au.F&0x200000)===0x200000
))this.Bq.Au.At(0x0,0x10);if(!!this.Bq)this.Bq.Au.At(0x0,0x40);if(((this.F&0x40)===
0x40)&&((B1.F&0x4)===0x4))B1.At(0x10040,0x0);else B1.At(0x10000,0x0);Cg.Au=B1;Cg.
Q=this.Bq;this.Bq=Cg;if(!!CD){this.Da(this.Bq.Q.Au,CD.I7(),null,null,C4);this.Da(
B1,Dt.Gx(),C5,C3,true);}else this.Da(B1,Dt.Gx(),C5,C3,C4);},PQ:function(Eg){var tmp=
this;while(!!tmp){Eg=B.abe(Eg,tmp.M.slice(0,2));tmp=tmp.I;}return Eg;},R$:function(
Eg){var tmp=this;while(!!tmp){Eg=B.abf(Eg,tmp.M.slice(0,2));tmp=tmp.I;}return Eg;
},DispatchEvent:function(Az){var A;var K=this.CS;var An=(E.L.isPrototypeOf(K)?K:
null);var Bk=null;var Pd=!!this.E3&&(!!this.E3.DU||!!this.E3.Am);if(!!K&&((((K.F&
0x10000)===0x10000)||((K.F&0x40000)===0x40000))||((K.F&0x20000)===0x20000))){K=null;
An=null;}if(!!this.Bq&&!Pd)Bk=this.Bq.Au.DispatchEvent(Az);if(!Bk&&!!An)Bk=An.DispatchEvent(
Az);else if(!Bk&&!!K)Bk=K.BU(Az);if(!Bk)Bk=this.BU(Az);if(!Bk)Bk=this.Pt(Az);return Bk;
},BroadcastEventAtPosition:function(Az,QG,aFilter){var A;var K=this.AC;var Bk=null;
while(!!K&&!Bk){if((!aFilter||((A=aFilter)&&((K.F&A)===A)))&&B.wa(K.GetExtent(),
QG)){var An=(E.L.isPrototypeOf(K)?K:null);if(!!An)Bk=An.BroadcastEventAtPosition(
Az,B.abe(QG,An.M.slice(0,2)),aFilter);else Bk=K.BU(Az);}K=K.S;}if(!Bk)Bk=this.BU(
Az);return Bk;},BroadcastEvent:function(Az,aFilter){var A;var K=this.AC;var Bk=null;
while(!!K&&!Bk){if(!aFilter||((A=aFilter)&&((K.F&A)===A))){var An=(E.L.isPrototypeOf(
K)?K:null);if(!!An)Bk=An.BroadcastEvent(Az,aFilter);else Bk=K.BU(Az);}K=K.S;}if(
!Bk)Bk=this.BU(Az);if(!Bk)Bk=this.Pt(Az);return Bk;},Mm:function(aSize){},Gg:function(
DS){},Be:function(){this.F=this.F|0x8000;B.pe([this,this.M6],this);},Al:function(
Ay){var A;var An=this;while(!!An&&!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){if(!An.I&&(
An!==this)){An.Al(Ay);return;}if(!((An.F&0x1)===0x1))return;var H=An.M;Ay=B.abh(
Ay,H.slice(0,2));if(!((An.F&0x80000)===0x80000)){H=[].concat(H[0]-An.K6,H.slice(
1,4));H=B.abP(H,H[1]-An.K8);H=B.abN(H,H[2]+An.K7);H=[].concat(H.slice(0,3),H[3]+
An.K5);Ay=B.lb(Ay,H);}An=An.I;}},Ny:function(O,aFilter){var A;if(!O||(O.I!==this
))return null;var H8=O.Q;var Ib=O.S;var Ll=0x10000;if(((aFilter&0x10000)===0x10000
))Ll=0x0;while(!!H8||!!Ib){if((!!H8&&(!aFilter||((A=aFilter)&&((H8.F&A)===A))))&&(
!Ll||!((A=Ll)&&((H8.F&A)===A))))return H8;if((!!Ib&&(!aFilter||((A=aFilter)&&((Ib.
F&A)===A))))&&(!Ll||!((A=Ll)&&((Ib.F&A)===A))))return Ib;if(!!H8)H8=H8.Q;if(!!Ib
)Ib=Ib.S;}return null;},Da:function(Cm,Bd,C5,C3,C4){var A;if(!Cm)return;if(!Bd)throw new
Error(Iw);if((!!Bd.L||!!Bd.I)||!!Bd.EJ)throw new Error(JL);if(!!Cm.I&&(Cm.I!==this
))throw new Error(Ix);if(!this.E3)this.E3=B._NewObject(E.Qn,0);Bd.I=this;Bd.L=Cm;
Bd.MQ=C3;Bd.Pi=C5;if(!!Cm.IV)Cm.IV.EJ.Ti(Cm.IV);Cm.IV=Bd;Cm.F=Cm.F|0x20000;if((C4&&
!!this.E3.AC)&&!this.E3.AC.NI())(B.acj.LS.isPrototypeOf(A=this.E3.AC)?A:null).PC(
Bd);else{var EJ=B._NewObject(B.acj.LS,0);EJ.PC(Bd);this.E3.Tl(EJ,false);}},N_:function(
O){var A;if(!O)throw new Error(Iy);if(O.I!==this)throw new Error(G3);if(!O.Q)return;
var CV=this.AC;var HB=O.Ez;while(!!CV&&(CV.Ez>HB))CV=CV.S;if(((CV===O)||!CV)||(CV.
Q===O))return;if(((O.F&0x401)===0x401)){if(!!O.S&&!!O.Bl)O.S.F=O.S.F|0x800;O.F=O.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dk],this);}if(((O.F&0x200)===0x200)
){if(!!O.S)O.S.F=O.S.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dk],this);}if(
!!O.S)O.S.Q=O.Q;else this.Am=O.Q;O.Q.S=O.S;O.S=CV;O.Q=CV.Q;CV.Q=O;if(!!O.Q)O.Q.S=
O;else this.AC=O;if(((O.F&0x1)===0x1))this.Al(O.GetClipping());},Qf:function(O,Ee
){var A;if(!O)throw new Error(Iy);if(O.I!==this)throw new Error(G3);var CV=O;var
B2=O;var HB=O.Ez;while(((Ee>0)&&!!CV.Q)&&(CV.Q.Ez<=HB)){CV=CV.Q;Ee=Ee-1;}while(((
Ee<0)&&!!B2.S)&&(B2.S.Ez>=HB)){B2=B2.S;Ee=Ee+1;}if((CV===O)&&(B2===O))return;if(((
O.F&0x401)===0x401)){if(!!O.S&&!!O.Bl)O.S.F=O.S.F|0x800;O.F=O.F|0x800;this.F=this.
F|0x4000;B.pe([this,this.Dk],this);}if(((O.F&0x200)===0x200)){if(!!O.S)O.S.F=O.S.
F|0x800;O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dk],this);}if(!!O.S)O.
S.Q=O.Q;if(!!O.Q)O.Q.S=O.S;if(this.Am===O)this.Am=O.Q;if(this.AC===O)this.AC=O.S;
if(CV!==O){O.Q=CV.Q;O.S=CV;CV.Q=O;if(!!O.Q)O.Q.S=O;}if(B2!==O){O.Q=B2;O.S=B2.S;B2.
S=O;if(!!O.S)O.S.Q=O;}if(!O.Q)this.AC=O;if(!O.S)this.Am=O;if(((O.F&0x1)===0x1))this.
Al(O.GetClipping());},Ea:function(O){var A;if(!O)throw new Error(On);if(O.I!==this
)throw new Error(G3);if((((O.F&0x401)===0x401)&&!!O.S)&&!!O.Bl){O.S.F=O.S.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.Dk],this);}if(((O.F&0x200)===0x200)){if(!!O.
S)O.S.F=O.S.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dk],this);}O.Bl=null;if(
this.CS===O)this.Dc(this.Ny(O,0x14));if(!!O.S)O.S.Q=O.Q;if(!!O.Q)O.Q.S=O.S;if(this.
Am===O)this.Am=O.Q;if(this.AC===O)this.AC=O.S;O.I=null;O.Q=null;O.S=null;if((!((
O.F&0x10)===0x10)&&((O.F&0x100000)===0x100000))&&!((this.F&0x80)===0x80))O.At(0x10
,0x0);if(((O.F&0x1)===0x1))this.Al(O.GetClipping());},U:function(O,Ee){var A;if(
!O)throw new Error(Oo);if(!!O.I)throw new Error(Op);var B2=null;var HB=O.Ez;if(((
Ee<0)&&!!this.AC)&&(this.AC.Ez>=HB)){B2=this.AC;Ee=Ee+1;}while((((Ee<0)&&!!B2)&&
!!B2.S)&&(B2.S.Ez>=HB)){B2=B2.S;Ee=Ee+1;}if((!B2&&!!this.AC)&&(this.AC.Ez>HB))B2=
this.AC;while((!!B2&&!!B2.S)&&(B2.S.Ez>HB))B2=B2.S;if(!B2){O.I=this;O.S=this.AC;
if(!!this.AC)this.AC.Q=O;if(!this.Am)this.Am=O;this.AC=O;}else{O.I=this;O.S=B2.S;
O.Q=B2;B2.S=O;if(!!O.S)O.S.Q=O;else this.Am=O;}if(((O.F&0x1)===0x1))this.Al(O.GetClipping(
));if(((O.F&0x80)===0x80)&&(B.aam().R9()===O))O.At(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((O.F&0x200010)===0x200010))O.At(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((O.F&0x10)===0x10))&&((O.F&0x100000)===0x100000))O.At(0x10,0x0);if(((!this.
CS&&((O.F&0x4)===0x4))&&((O.F&0x10)===0x10))&&!((O.F&0x10000)===0x10000))this.Dc(
O);if(((O.F&0x401)===0x401)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Dk],this);}if(((O.F&0x200)===0x200)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.Dk],this);}},Kr:function(){return this.Dd;},_Init:function(aArg){E.BC._Init.
call(this,aArg);this.__proto__=E.L;this.F=0x10001F;this.Bt(aArg);},_Mark:function(
D){var A;E.BC._Mark.call(this,D);if((A=this.Am)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.AC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.MN)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Bq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
E3)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IV)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.CS)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};
E.Root={D2:null,B4:null,Bz:B.abi(10,null,null),JQ:null,G8:null,LH:0,BH:0,CB:B.abi(
10,0,null),MD:B.abi(10,B.wg,null),E1:B.abi(10,0,null),Gn:B.abi(10,B.wf,null),JS:
B.abi(10,0,null),G7:B.abi(10,B.wf,null),E0:B.abi(10,B.wf,null),DV:B.abi(10,B.wf,
null),FN:B.abi(10,B.wf,null),AW:0,MG:0,MF:0,C$:B.abi(4,0,null),Cb:B.abi(4,B.wg,null
),B$:0,Lf:0,JU:0,K_:true,Bt:function(aArg){if(!!!this.J){var obj=this;B.abD(obj);
}},Db:function(){return this;},Er:function(Bn,aClip,aOffset,Bg,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)Bn.Nx(aClip,B.abh(B.abh(aClip,aOffset
),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);E.L.Er.call(
this,Bn,aClip,aOffset,Bg,aBlend);},At:function(DR,EA){var A;E.L.At.call(this,DR,
EA);if(!this.I&&(((DR&0x1)===0x1)||((EA&0x1)===0x1)))this.Al([0,0,(A=this.M)[2]-
A[0],A[3]-A[1]]);if(!this.I&&(((DR&0x2)===0x2)||((EA&0x2)===0x2)))this.Al([0,0,(
A=this.M)[2]-A[0],A[3]-A[1]]);},Dc:function(C){if((C!==null)||!C)E.L.Dc.call(this
,C);},EQ:function(C){var A;var EH=this.Dd;E.L.EQ.call(this,C);if(((EH!==this.Dd)&&
!this.I)&&((this.F&0x1)===0x1))this.Al([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:
function(Az){if(!!Az){Az.Kl=!!this.BH;if(!!this.BH)Az.AG=this.BH;}var Bk=null;if(
!!this.B4){Bk=this.B4.Au.DispatchEvent(Az);if(!Bk)Bk=this.BU(Az);if(!Bk)Bk=this.
Pt(Az);this.BH=0;return Bk;}Bk=E.L.DispatchEvent.call(this,Az);this.BH=0;return Bk;
},BroadcastEvent:function(Az,aFilter){if(!!Az){Az.Kl=!!this.BH;if(!!this.BH)Az.AG=
this.BH;}var Bk=E.L.BroadcastEvent.call(this,Az,aFilter);this.BH=0;return Bk;},Al:
function(Ay){var A;if(this.LH>0)throw new Error(Oq);var fullScreenUpdate=false;fullScreenUpdate=
B.m7;if(fullScreenUpdate)Ay=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.I){E.L.
Al.call(this,Ay);return;}Ay=B.lb(B.abh(Ay,this.M.slice(0,2)),this.M);if((Ay[0]>=
Ay[2])||(Ay[1]>=Ay[3]))return;var G;for(G=0;G<this.B$;G=G+1)if(!(((A=B.lb(this.Cb.
Get(G),Ay))[0]>=A[2])||(A[1]>=A[3]))){this.Cb.Set(G,B.wC(this.Cb.Get(G),Ay));this.
C$.Set(G,B.aaH(this.Cb.Get(G)));return;}if(this.B$<3){this.Cb.Set(this.B$,Ay);this.
C$.Set(this.B$,B.aaH(Ay));this.B$=this.B$+1;return;}var BJ;var D1;var Le=0;var Lg=
0;var QJ=2147483647;this.Cb.Set(this.B$,Ay);this.C$.Set(this.B$,B.aaH(Ay));for(BJ=
0;BJ<=this.B$;BJ=BJ+1)for(D1=BJ+1;D1<=this.B$;D1=D1+1){var M5=B.aaH(B.wC(this.Cb.
Get(BJ),this.Cb.Get(D1)));var Ro=((M5<<8)/(this.C$.Get(BJ)+this.C$.Get(D1)))|0;if(
Ro<QJ){QJ=Ro;Le=BJ;Lg=D1;}}this.Cb.Set(Le,B.wC(this.Cb.Get(Le),this.Cb.Get(Lg)));
this.C$.Set(Le,B.aaH(this.Cb.Get(Le)));if(Lg!==this.B$){this.Cb.Set(Lg,this.Cb.Get(
this.B$));this.C$.Set(Lg,this.C$.Get(this.B$));}},U5:function(){var CK=B._NewObject(
E.Kb,0);CK.Kl=!!this.BH;if(!!this.BH)CK.AG=this.BH;return CK;},II:function(){var
CK=B._NewObject(E.Gy,0);CK.Kl=!!this.BH;if(!!this.BH)CK.AG=this.BH;return CK;},JR:
function(){var CK=B._NewObject(E.J8,0);CK.Kl=!!this.BH;if(!!this.BH)CK.AG=this.BH;
return CK;},U6:function(Z){var G;var IM=false;for(G=0;G<10;G=G+1)if(!!this.Bz.Get(
G)){var Y=this.DV.Get(G);var An=this.Bz.Get(G).I;while(!!An&&(An!==this)){Y=B.abe(
Y,An.M.slice(0,2));An=An.I;}if(!An&&(this.Bz.Get(G)!==this)){var tmp=this.Bz.Get(
G);this.AW=G;this.Bz.Set(G,null);tmp.BU(this.II().InitializeUp(G,this.G7.Get(G),
this.Gn.Get(G),this.E1.Get(G),this.CB.Get(G)+1,this.E0.Get(G),false,this.DV.Get(
G),this.FN.Get(G)));this.BroadcastEvent(this.JR().InitializeUp(G,this.CB.Get(G)+
1,false,tmp,this.DV.Get(G)),0x18);}else{this.E1.Set(G,(this.G8.AG-this.JS.Get(G)
)|0);if(this.E1.Get(G)<10)this.E1.Set(G,10);this.AW=G;this.Bz.Get(G).BU(this.II(
).InitializeHold(G,Y,this.Gn.Get(G),this.E1.Get(G),this.CB.Get(G)+1,this.E0.Get(
G),this.DV.Get(G),this.FN.Get(G)));IM=true;}}if(!IM)this.G8.As(false);},GetFPS:function(
){var ticksCount=0;var QV=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.MG&&(
ticksCount>this.MG))QV=((this.MF*1000)/((ticksCount-this.MG)|0))|0;this.MF=0;this.
MG=ticksCount;return QV;},Update:function(){var A;if(!this.JQ)this.JQ=B._NewObject(
B.Graphics.Canvas,0);this.JQ.P3([(A=this.M)[2]-A[0],A[3]-A[1]]);this.JQ.Update();
return this.UpdateGE20(this.JQ);},UpdateGE20:function(Bn){if(!this.BeginUpdate()
)return Bi;var Gt=this.UpdateCanvas(Bn,A4);this.EndUpdate();return Gt;},EndUpdate:
function(){if(this.B$>0){this.MF=this.MF+1;this.B$=0;}},UpdateCanvas:function(Bn
,aOffset){var A;var Gt=Bi;var UZ=[].concat(aOffset,B.abf(Bn.FrameSize,aOffset));
var G;var BJ=this.B$;this.LH=this.LH+1;Bn.Au=this;for(G=0;(G<BJ)&&(G<4);G=G+1)if(
this.C$.Get(G)>0){this.Er(Bn,B.abg(this.Cb.Get(G),aOffset),[-aOffset[0],-aOffset[
1]],255,true);Gt=B.wC(Gt,B.lb(UZ,this.Cb.Get(G)));}else BJ=BJ+1;Bn.Au=null;this.
LH=this.LH-1;if(!((Gt[0]>=Gt[2])||(Gt[1]>=Gt[3])))return B.abg(Gt,aOffset);else return Gt;
},GetUpdateRegion:function(Mt){var G;var BJ=this.B$;if(Mt<0)return Bi;for(G=0;(G<
BJ)&&(G<4);G=G+1)if(!this.C$.Get(G)){BJ=BJ+1;Mt=Mt+1;}else if(G===Mt)return this.
Cb.Get(G);return Bi;},BeginUpdate:function(){var A;var G;if(!!this.B$&&!B.aaY(this.
Cb.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[1]])){var Rz=B.abi(3,B.wg,null);var Ry=
this.B$;for(G=0;G<Ry;G++)Rz.Set(G,this.Cb.Get(G));for(G=0;G<Ry;G++){var Rp=B.abh(
Rz.Get(G),this.M.slice(0,2));var Rq=this.LL(Rp);if(!B.aaY(Rp,Rq))this.Al(B.abg(Rq
,this.M.slice(0,2)));}}var BJ;var D1;for(BJ=0;BJ<(this.B$-1);BJ++)if(this.C$.Get(
BJ)>0)for(D1=BJ+1;D1<this.B$;D1++)if(this.C$.Get(D1)>0){var M5=B.aaH(B.wC(this.Cb.
Get(BJ),this.Cb.Get(D1)));if(((M5-this.C$.Get(BJ))-this.C$.Get(D1))<0){this.Cb.Set(
BJ,B.wC(this.Cb.Get(BJ),this.Cb.Get(D1)));this.C$.Set(BJ,M5);this.C$.Set(D1,0);}
}for(G=this.B$-1;G>=0;G--)if(!this.C$.Get(G))this.B$=this.B$-1;return this.B$;},
DoesNeedUpdate:function(){if(this.B$>0)return true;return false;},Initialize:function(
aSize){this.P([].concat(A4,aSize));if(this.K_)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Al(this.M);return this;},SetRootFocus:function(OM){if(OM===this.K_)return false;
this.K_=OM;if(!OM){if(!!this.B4)this.B4.Au.At(0x0,0x40);else this.At(0x0,0x40);}
else if(!!this.B4)this.B4.Au.At(0x40,0x0);else this.At(0x40,0x0);return true;},SetUserInputTimestamp:
function(UX){this.BH=UX;},DriveKeyboardHitting:function(Ce,KV,Fs){var A;var Pu=!
!this.D2;if(!!this.D2&&((!Fs||(this.Lf!==Ce))||(this.JU!==KV))){var CK=null;var K=(
E.AB.isPrototypeOf(A=this.D2)?A:null);var Fu=(E.Et.isPrototypeOf(A=this.D2)?A:null
);if(!!this.Lf)CK=B._NewObject(E.KeyEvent,0).Initialize(this.Lf,false);if(this.JU
!==0x00)CK=B._NewObject(E.KeyEvent,0).Initialize2(this.JU,false);if(!!Fu)Fu.BU(CK
);else if(!!K)K.BU(CK);this.Lf=0;this.JU=0x00;this.D2=null;}if(!!this.D2){var CK=
null;var K=(E.AB.isPrototypeOf(A=this.D2)?A:null);var Fu=(E.Et.isPrototypeOf(A=this.
D2)?A:null);if(!!Ce)CK=B._NewObject(E.KeyEvent,0).Initialize(Ce,true);if(this.JU
!==0x00)CK=B._NewObject(E.KeyEvent,0).Initialize2(KV,true);if(!!Fu)Fu.BU(CK);else
if(!!K)K.BU(CK);}if(!this.D2&&Fs){if(!!Ce)this.D2=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize(Ce,true));if(KV!==0x00)this.D2=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize2(KV,true));if(!(E.Et.isPrototypeOf(A=this.D2)?A:null)&&
!(E.AB.isPrototypeOf(A=this.D2)?A:null))this.D2=null;this.Lf=Ce;this.JU=KV;Pu=Pu||
!!this.D2;}this.BH=0;return Pu;},DriveCursorMovement:function(BG){return this.DriveMultiTouchMovement(
this.AW,BG);},DriveMultiTouchMovement:function(W,BG){if((W<0)||(W>9)){this.BH=0;
return false;}var BZ=B.abe(BG,this.DV.Get(W));this.DV.Set(W,BG);if(!this.Bz.Get(
W)||B.aaX(BZ,A4)){this.BH=0;return false;}var Y=BG;var An=this.Bz.Get(W).I;while(
!!An&&(An!==this)){Y=B.abe(Y,An.M.slice(0,2));An=An.I;}if(!An&&(this.Bz.Get(W)!==
this)){var tmp=this.Bz.Get(W);this.AW=W;this.Bz.Set(W,null);tmp.BU(this.II().InitializeUp(
W,this.G7.Get(W),this.Gn.Get(W),this.E1.Get(W),this.CB.Get(W)+1,this.E0.Get(W),false
,this.DV.Get(W),this.FN.Get(W)));this.BroadcastEvent(this.JR().InitializeUp(W,this.
CB.Get(W)+1,false,tmp,BG),0x18);}else{this.G7.Set(W,Y);this.AW=W;this.Bz.Get(W).
BU(this.U5().Initialize(W,Y,this.Gn.Get(W),BZ,this.E1.Get(W),this.CB.Get(W)+1,this.
E0.Get(W),BG,this.FN.Get(W)));}this.BH=0;return true;},DriveCursorHitting:function(
Fs,W,BG){return this.DriveMultiTouchHitting(Fs,W,BG);},DriveMultiTouchHitting:function(
Fs,W,BG){if((W<0)||(W>9)){this.BH=0;return false;}var ticksCount=this.BH;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var VL=this.BH;this.DriveMultiTouchMovement(
W,BG);BG=this.DV.Get(W);this.BH=VL;if(Fs)this.FN.Set(W,BG);if(Fs&&!this.Bz.Get(W
)){var B3;var Y=BG;if(B.wa(this.MD.Get(W),BG)&&((ticksCount-this.JS.Get(W))<=250
))this.CB.Set(W,this.CB.Get(W)+1);else this.CB.Set(W,0);this.MD.Set(W,B.abh(Iz,BG
));this.JS.Set(W,ticksCount);if(!!this.B4)B3=this.Fd(B.abh(Iz,BG),W,this.CB.Get(
W)+1,this.B4.Au,null,0x0);else B3=this.Fd(B.abh(Iz,BG),W,this.CB.Get(W)+1,null,null
,0x0);if(!!B3){this.BroadcastEvent(this.JR().InitializeDown(W,this.CB.Get(W)+1,false
,B3.AB,BG),0x18);this.Bz.Set(W,B3.AB);this.E0.Set(W,B3.AS);}else{this.Bz.Set(W,null
);this.E0.Set(W,A4);this.BH=0;return false;}var An=B3.AB.I;while(!!An&&(An!==this
)){Y=B.abe(Y,An.M.slice(0,2));An=An.I;}this.Gn.Set(W,Y);this.G7.Set(W,Y);this.E1.
Set(W,0);this.G8.As(true);this.AW=W;this.Bz.Get(W).BU(this.II().InitializeDown(W
,Y,this.CB.Get(W)+1,this.E0.Get(W),false,BG));this.BH=0;return true;}if(!Fs&&!!this.
Bz.Get(W)){var Y=BG;var An=this.Bz.Get(W).I;while(!!An&&(An!==this)){Y=B.abe(Y,An.
M.slice(0,2));An=An.I;}if(!An)Y=this.G7.Get(W);this.AW=W;var tmp=this.Bz.Get(W);
this.Bz.Set(W,null);tmp.BU(this.II().InitializeUp(W,Y,this.Gn.Get(W),this.E1.Get(
W),this.CB.Get(W)+1,this.E0.Get(W),false,BG,this.FN.Get(W)));this.BroadcastEvent(
this.JR().InitializeUp(W,this.CB.Get(W)+1,false,tmp,BG),0x18);this.BH=0;return true;
}this.BH=0;return false;},Md:function(EC,Mo,ED,Gk){if(EC===this)EC=null;if(!!!EC&&
!!this.B4)EC=this.B4.Au;if(!this.Bz.Get(this.AW))return;var B3;B3=this.Fd(B.abh(
Iz,this.DV.Get(this.AW)),this.AW,1,EC,ED,Gk);if(!!B3&&(this.Bz.Get(this.AW)!==B3.
AB))this.PH(B3.AB,B3.AS);if(!B3&&(this.Bz.Get(this.AW)!==Mo))this.PH(Mo,A4);},Tj:
function(EC,Mo,ED){this.Md(EC,Mo,ED,0x0);},PH:function(EC,EU){if(!this.Bz.Get(this.
AW)||(this.Bz.Get(this.AW)===EC))return;var tmp=this.Bz.Get(this.AW);this.Bz.Set(
this.AW,null);tmp.BU(this.II().InitializeUp(this.AW,this.G7.Get(this.AW),this.Gn.
Get(this.AW),this.E1.Get(this.AW),this.CB.Get(this.AW)+1,this.E0.Get(this.AW),true
,this.DV.Get(this.AW),this.FN.Get(this.AW)));this.BroadcastEvent(this.JR().InitializeUp(
this.AW,this.CB.Get(this.AW)+1,true,tmp,this.DV.Get(this.AW)),0x18);var Y=this.DV.
Get(this.AW);var An=null;if(!!EC)An=EC.I;while(!!An&&(An!==this)){Y=B.abe(Y,An.M.
slice(0,2));An=An.I;}if(!An&&(EC!==this)){this.Bz.Set(this.AW,null);return;}this.
BroadcastEvent(this.JR().InitializeDown(this.AW,this.CB.Get(this.AW)+1,true,EC,this.
DV.Get(this.AW)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.Bz.Set(this.AW,EC);this.E0.Set(this.AW,EU);this.Gn.Set(this.AW,Y);this.G7.Set(
this.AW,Y);this.CB.Set(this.AW,0);this.E1.Set(this.AW,0);this.JS.Set(this.AW,ticksCount
);this.FN.Set(this.AW,this.DV.Get(this.AW));this.Bz.Get(this.AW).BU(this.II().InitializeDown(
this.AW,Y,this.CB.Get(this.AW)+1,this.E0.Get(this.AW),true,this.FN.Get(this.AW))
);},R9:function(){if(!!this.B4)return this.B4.Au;return null;},R4:function(Cm){var
A;if(!Cm)throw new Error(Or);if(!((Cm.F&0x80)===0x80))throw new Error(Gh);if(this.
B4.Au===Cm)this.B4=this.B4.Q;else{var K9=this.B4;while(K9.Q.Au!==Cm)K9=K9.Q;K9.Q=
K9.Q.Q;}Cm.At(0x0,0xD0);if(this.K_){if(!!this.B4)this.B4.Au.At(0x50,0x0);else this.
At(0x50,0x0);}},RN:function(Cm){var A;var Aj=B._NewObject(E.PS,0);if(!Cm)throw new
Error(Mn);if(Cm===null)throw new Error(Os);if(((Cm.F&0x80)===0x80))throw new Error(
Ot);if(!!this.B4)this.B4.Au.At(0x0,0x50);else this.At(0x0,0x50);Aj.Q=this.B4;Aj.
Au=Cm;this.B4=Aj;if(this.K_)Cm.At(0xD0,0x0);else Cm.At(0x90,0x0);},_Init:function(
aArg){E.L._Init.call(this,aArg);E.Timer._Init.call(this.G8={J:this},0);(this.Bz=[
]).__proto__=E.Root.Bz;(this.CB=[]).__proto__=E.Root.CB;(this.MD=[]).__proto__=E.
Root.MD;(this.E1=[]).__proto__=E.Root.E1;(this.Gn=[]).__proto__=E.Root.Gn;(this.
JS=[]).__proto__=E.Root.JS;(this.G7=[]).__proto__=E.Root.G7;(this.E0=[]).__proto__=
E.Root.E0;(this.DV=[]).__proto__=E.Root.DV;(this.FN=[]).__proto__=E.Root.FN;(this.
C$=[]).__proto__=E.Root.C$;(this.Cb=[]).__proto__=E.Root.Cb;this.__proto__=E.Root;
this.F=0x10007F;this.G8.GP(10);this.G8.GR=[this,this.U6];this.Bt(aArg);},_Done:function(
){this.__proto__=E.L;this.G8._Done();E.L._Done.call(this);},_ReInit:function(){E.
L._ReInit.call(this);this.G8._ReInit();},_Mark:function(D){var A;E.L._Mark.call(
this,D);if((A=this.D2)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.B4)&&(A._cycle
!=D))A._Mark(A._cycle=D);B.aa6(this.Bz,D);if((A=this.JQ)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G8)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"
};E.Event={AG:0,Kl:false,Bt:function(aArg){this.AG=this.Ki();},Ki:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=E.Event;this.Bt(aArg);B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={BT:0,A5:0,Down:false,Initialize2:function(Ce,Fs){this.
BT=0;this.A5=Ce;this.Down=Fs;if((Ce>=0x30)&&(Ce<=0x39))this.BT=(10+Ce)-48;if((Ce>=
0x41)&&(Ce<=0x5A))this.BT=(105+Ce)-65;if((Ce>=0x61)&&(Ce<=0x7A))this.BT=(105+Ce)-
97;if(Ce===0x20)this.BT=131;if(!this.BT)switch(Ce){case 0x2B:this.BT=132;break;case
0x2D:this.BT=133;break;case 0x2A:this.BT=134;break;case 0x2F:this.BT=135;break;case
0x3D:this.BT=136;break;case 0x2E:this.BT=137;break;case 0x2C:this.BT=138;break;case
0x3A:this.BT=139;break;case 0x3B:this.BT=140;break;default:;}return this;},Initialize:
function(Ce,Fs){this.BT=Ce;this.Down=Fs;this.A5=0x00;var OR=Ce-10;var OQ=Ce-105;
if((OR>=0)&&(OR<=9))this.A5=(48+OR)&0xFFFF;if((OQ>=0)&&(OQ<=25))this.A5=(65+OQ)&
0xFFFF;if(Ce===131)this.A5=0x20;if(this.A5===0x00)switch(Ce){case 132:this.A5=0x2B;
break;case 133:this.A5=0x2D;break;case 134:this.A5=0x2A;break;case 135:this.A5=0x2F;
break;case 136:this.A5=0x3D;break;case 137:this.A5=0x2E;break;case 138:this.A5=0x2C;
break;case 139:this.A5=0x3A;break;case 140:this.A5=0x3B;break;default:;}return this;
},Sd:function(QE){switch(QE){case 141:return((this.A5>=0x41)&&(this.A5<=0x5A))||((
this.A5>=0x61)&&(this.A5<=0x7A));case 142:return(((this.A5>=0x41)&&(this.A5<=0x5A
))||((this.A5>=0x61)&&(this.A5<=0x7A)))||((this.A5>=0x30)&&(this.A5<=0x39));case
143:return(this.A5>=0x30)&&(this.A5<=0x39);case 144:return(((this.A5>=0x41)&&(this.
A5<=0x46))||((this.A5>=0x61)&&(this.A5<=0x66)))||((this.A5>=0x30)&&(this.A5<=0x39
));case 145:return this.A5!==0x00;case 146:return(this.A5===0x00)&&!!this.BT;case
147:return(((this.BT===6)||(this.BT===7))||(this.BT===4))||(this.BT===5);case 148:
return(this.A5!==0x00)||!!this.BT;default:;}return QE===this.BT;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.J8={KI:null,Cv:B.wf,C2:0,BR:0,Down:false,Dm:false,InitializeUp:function(W,C6
,IA,OO,Ft){this.Down=false;this.BR=W;this.C2=C6;this.Cv=Ft;this.KI=OO;this.Dm=IA;
return this;},InitializeDown:function(W,C6,IA,OO,Ft){this.Down=true;this.BR=W;this.
C2=C6;this.Cv=Ft;this.KI=OO;this.Dm=IA;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.J8;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.KI)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.Gy={GG:B.wf,Cv:B.wf,C2:0,Cq:0,D7:B.wf,CF:B.wf,BR:0,Down:false,Dm:false,InitializeHold:
function(W,HT,KX,KY,C6,EU,Ft,KW){this.Down=true;this.BR=W;this.CF=B.abf(HT,EU);this.
D7=B.abf(KX,EU);this.Cq=KY;this.C2=C6;this.Cv=Ft;this.GG=KW;return this;},InitializeUp:
function(W,HT,KX,KY,C6,EU,IA,Ft,KW){this.Down=false;this.BR=W;this.CF=B.abf(HT,EU
);this.D7=B.abf(KX,EU);this.Cq=KY;this.C2=C6;this.Dm=IA;this.Cv=Ft;this.GG=KW;return this;
},InitializeDown:function(W,HT,C6,EU,IA,Ft){this.Down=true;this.BR=W;this.CF=B.abf(
HT,EU);this.D7=B.abf(HT,EU);this.Cq=0;this.C2=C6;this.Dm=IA;this.Cv=Ft;this.GG=Ft;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.Gy;},_className:"Core::CursorEvent"};E.Kb={GG:B.wf,Cv:B.wf,C2:0,Cq:0,AS:B.wf,D7:
B.wf,CF:B.wf,BR:0,Initialize:function(W,HT,KX,aOffset,KY,UW,EU,Ft,KW){this.BR=W;
this.CF=B.abf(HT,EU);this.D7=B.abf(KX,EU);this.AS=aOffset;this.Cq=KY;this.C2=UW;
this.Cv=Ft;this.GG=KW;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.Kb;},_className:"Core::DragEvent"};E.Fr={Er:function(Bn,
aClip,aOffset,Bg,aBlend){},GetClipping:function(){var A;var H=E.BC.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var I0=Bi;var K;for(K=this.Q;!!K&&!((K.F&
0x200)===0x200);K=K.Q)if(((K.F&0x1)===0x1))I0=B.wC(I0,K.GetClipping());H=B.wC(H,
I0);}return H;},At:function(DR,EA){var A;var MP=this.F;if((!!this.I&&((this.F&0x80001
)===0x80001))&&((EA&0x80000)===0x80000))this.I.Al(this.GetClipping());E.BC.At.call(
this,DR,EA);if(((!!this.I&&((this.F&0x1)===0x1))&&((DR&0x80000)===0x80000))&&!((
MP&0x80000)===0x80000))this.I.Al(this.GetClipping());},P:function(C){var A;if(B.
aaY(C,this.M))return;var H_=[(A=this.M)[2]-A[0],A[3]-A[1]];var Pg=[C[2]-C[0],C[3
]-C[1]];var J0=!B.aaX(H_,Pg);var BZ=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(BZ,A4)&&!J0){var K=this.Q;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&0x400)===
0x400)){var tmp=((K.F&0x100)===0x100);K.LX(BZ,tmp);}K=K.Q;}}if((J0&&(H_[0]>0))&&(
H_[1]>0)){var Aq=this.M;var K=this.Q;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&
0x400)===0x400)){if(!!K.Bl&&(K.Bl.IS!==this))K.Bl=null;if(!K.Bl&&(K.DP!==0x14))K.
K$(Aq,this);}K=K.Q;}}E.BC.P.call(this,C);if(!!this.I&&J0){this.F=this.F|0x1000;if(
!((this.I.F&0x2000)===0x2000)){this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dk],this
);}}},_Init:function(aArg){E.BC._Init.call(this,aArg);this.__proto__=E.Fr;this.F=
0x203;},_className:"Core::Outline"};E.A8={D0:null,Bm:null,AB:null,Ge:null,JX:null
,EP:null,Fa:-1,El:0,ML:8,Hc:0,Ev:0,JI:B.wf,Dn:-1,Cl:0,CA:-1,Fg:24,Cx:0,HJ:null,Q5:
false,Qm:function(B1,Dt,FM,EV,EX,IF,Ef,EW,C5,C3,C4){throw new Error(Ou);},Ka:function(
B1,IF,Ef,EW,C5,C3,C4){throw new Error(Ov);},Jy:function(B1,Dt,FM,EV,EX,Ef,EW,C5,
C3,C4){throw new Error(Ow);},DispatchEvent:function(Az){var A;var result=null;if(((
this.CA>=0)&&(this.CA<this.Cx))&&!this.CS){this.Dn=this.CA;this.AB=(E.AB.isPrototypeOf(
A=B._NewObject(this.HJ,0))?A:null);if(!!this.AC)this.AC.Q=this.AB;else this.Am=this.
AB;this.AB.S=this.AC;this.AC=this.AB;this.AB.I=this;this.JI=[(A=this.M)[2]-A[0],
this.Fg];(A=this.EP)?A[1].call(A[0],this):null;var An=(E.L.isPrototypeOf(A=this.
AB)?A:null);if(!!An)result=An.DispatchEvent(Az);else result=this.AB.BU(Az);if(!!
this.AB.S)this.AB.S.Q=null;else this.Am=null;this.AC=this.AB.S;this.AB.S=null;this.
AB.I=null;this.AB=null;}if(!result)result=E.L.DispatchEvent.call(this,Az);return result;
},Gg:function(DS){var A;if(!this.HJ)return;this.Q5=true;var C8=this.Pp(0-this.Cl
,1);var DG=this.Pp((((A=this.M)[3]-A[1])-this.Cl)-1,2);var MC=DG-C8;if(MC<1)MC=1;
var My=(MC/2)|0;var Mz=(MC/3)|0;if(!My)My=1;if(!Mz)Mz=1;if(C8<this.El){C8=C8-My;
DG=DG+Mz;}else if(DG>this.Fa){C8=C8-Mz;DG=DG+My;}else{C8=this.El;DG=this.Fa;}if(
C8>=this.Cx){C8=0;DG=-1;}else if(DG<0){C8=0;DG=-1;}if(DG>=this.Cx)DG=this.Cx-1;if(
C8<0)C8=0;var MY=this.El;var MZ=this.Fa;var Pb=0;var Pc=-1;if(C8>MY)MY=C8;if(DG<
MZ)MZ=DG;if(MY<=MZ){while((this.Fa<DG)&&(this.El<MY)){this.MV();this.QN();}while((
this.El>C8)&&(this.Fa>MZ)){this.Rr();this.QM();}}else{this.Fa=(this.Fa-this.El)+
C8;this.El=C8;Pb=this.El;Pc=this.Fa;}while(this.El<C8)this.MV();while(this.Fa>DG
)this.Rr();while(this.El>C8)this.QM();while(this.Fa<DG)this.QN();var V=this.Am;var
DZ=this.El;var Y=[0,this.Cl+this.Hb(DZ,0)];var AM=(A=this.M)[3]-A[1];var QS=null;
var RB=(A=this.M)[2]-A[0];while(!!V){var H1=DZ;var LA=((H1>=0)&&(H1<=-1))||((DZ>=
Pb)&&(DZ<=Pc));var OY=V.GetExtent();var Cs=B.abe(Y,OY.slice(0,2));if(LA)this.Ev=
this.Fg;else this.Ev=OY[3]-OY[1];var O9=Y[1];var O_=Y[1]+this.Ev;if(!B.aaX(Cs,A4
))V.LX(Cs,true);if((LA&&(O9<AM))&&(O_>0)){this.AB=V;this.Dn=H1;this.JI=[RB,this.
Ev];(A=this.EP)?A[1].call(A[0],this):null;}V=V.Q;DZ+=1;Y=[Y[0],Y[1]+this.Ev];}DZ=
this.El;V=this.Am;Y=[0,this.Cl+this.Hb(DZ,0)];while(!!V){var H1=DZ;var LA=((H1>=
0)&&(H1<=-1))||((DZ>=Pb)&&(DZ<=Pc));if(LA)this.Ev=this.Fg;else this.Ev=(A=V.GetExtent(
))[3]-A[1];var O9=Y[1];var O_=Y[1]+this.Ev;if(LA&&!((O9<AM)&&(O_>0))){this.AB=V;
this.Dn=H1;this.JI=[RB,this.Ev];(A=this.EP)?A[1].call(A[0],this):null;}if(H1===this.
CA)QS=V;V=V.Q;DZ+=1;Y=[Y[0],Y[1]+this.Ev];}this.AB=null;this.Dn=-1;this.Dc(QS);this.
Q5=false;},Ny:function(O,aFilter){return null;},Da:function(Cm,Bd,C5,C3,C4){throw new
Error(Ox);},N_:function(O){throw new Error(Oy);},Qf:function(O,Ee){throw new Error(
Oz);},Ea:function(O){throw new Error(OA);},U:function(O,Ee){throw new Error(OB);
},Hb:function(JP,UR){return JP*this.Fg;},Pp:function(BG,UR){return(BG/this.Fg)|0;
},Rr:function(){var V=this.AC;if(!V)return null;if(V===this.CS)this.Dc(null);this.
Fa=this.Fa-1;if(!!V.S)V.S.Q=null;else this.Am=null;this.AC=V.S;V.S=null;V.I=null;
V.Bl=null;if(this.Hc<this.ML){if(!!this.D0)this.D0.S=V;V.Q=this.D0;this.D0=V;this.
Hc++;}return V;},QN:function(){var A;var V=this.D0;var Ld=this.HJ;var RD=++this.
Fa;while(!!V&&(((A=V)?A.__proto__:null)!==Ld))V=V.Q;if(!!V){if(!!V.Q)V.Q.S=V.S;if(
!!V.S)V.S.Q=V.Q;if(this.D0===V)this.D0=V.Q;V.Q=null;V.S=null;this.Hc--;}else{V=(
E.AB.isPrototypeOf(A=B._NewObject(Ld,0))?A:null);V.Dp(0x1D);if(!!this.Hc)this.ML++;
}this.Ev=this.Fg;this.Dn=RD;this.JI=[(A=this.M)[2]-A[0],this.Ev];this.AB=V;(A=this.
EP)?A[1].call(A[0],this):null;this.AB=null;this.Dn=-1;if(!!this.AC)this.AC.Q=V;V.
I=this;V.S=this.AC;this.AC=V;if(!this.Am)this.Am=V;if(RD===this.CA)this.Dc(V);return V;
},MV:function(){var V=this.Am;if(!V)return null;if(V===this.CS)this.Dc(null);this.
El=this.El+1;if(!!V.Q)V.Q.S=null;else this.AC=null;this.Am=V.Q;V.Q=null;V.I=null;
V.Bl=null;if(this.Hc<this.ML){if(!!this.D0)this.D0.S=V;V.Q=this.D0;this.D0=V;this.
Hc++;}return V;},QM:function(){var A;var V=this.D0;var Ld=this.HJ;var RC=--this.
El;while(!!V&&(((A=V)?A.__proto__:null)!==Ld))V=V.Q;if(!!V){if(!!V.Q)V.Q.S=V.S;if(
!!V.S)V.S.Q=V.Q;if(this.D0===V)this.D0=V.Q;V.Q=null;V.S=null;this.Hc--;}else{V=(
E.AB.isPrototypeOf(A=B._NewObject(Ld,0))?A:null);V.Dp(0x1D);if(!!this.Hc)this.ML++;
}this.Ev=this.Fg;this.Dn=RC;this.JI=[(A=this.M)[2]-A[0],this.Ev];this.AB=V;(A=this.
EP)?A[1].call(A[0],this):null;this.AB=null;this.Dn=-1;if(!!this.Am)this.Am.S=V;V.
I=this;V.Q=this.Am;this.Am=V;if(!this.AC)this.AC=V;if(RC===this.CA)this.Dc(V);return V;
},Ri:function(Z){var A;this.Bm.A6=null;this.Bm.Ic=null;this.Bm=null;(A=this.JX)?
A[1].call(A[0],this):null;},VB:function(Z){this.Ky(this.Ge.AS[1]);},VC:function(
Z){var A;if(!!this.Bm){this.Bm.As(false);this.Bm.A6=null;this.Bm.Ic=null;this.Bm=
null;}{var T=this.PN(0,this.Cx-1);var MS=this.M.slice(0,2);if(T[0]>MS[0])T=[].concat(
MS[0],T.slice(1,4));if(T[1]>MS[1])T=B.abP(T,MS[1]);var BZ=T[1]-this.M[1];var Pf=((
A=this.M)[3]-A[1])-(T[3]-T[1]);if(Pf>0)Pf=0;this.Ge.AS=[0,this.Cl];this.Ge.Bv=[0
,(this.Cl+Pf)-BZ];this.Ge.Bu=[0,this.Cl-BZ];}},SO:function(C){if(C===this.Ge)return;
if(!!C&&!!C.JZ){B.ab5("%s%*%s",HS,C,OC);throw new Error(OD);}if(!!this.Ge){this.
Ge.MU=null;this.Ge.JZ=null;}this.Ge=C;if(!!C){C.MU=[this,this.VC];C.JZ=[this,this.
VB];}},Ky:function(C){var A;if(C===this.Cl)return;this.Cl=C;this.Be();this.Al([0
,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},Kz:function(C){if(C<0)C=-1;if(C===this.CA)return;
this.CA=C;this.Be();},SG:function(C){var A;if(C<1)C=1;if(C===this.Fg)return;this.
Fg=C;while(!!this.MV());this.Be();this.Al([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},
L$:function(C){var A;if(C<0)C=0;if(C===this.Cx)return;var T=[0,0,(A=this.M)[2]-A[
0],A[3]-A[1]];if(C>this.Cx){T=[].concat(T.slice(0,3),this.Cl+this.Hb(C,3));T=B.abP(
T,this.Cl+this.Hb(this.Cx,3));}else{T=B.abP(T,this.Cl+this.Hb(C,3));T=[].concat(
T.slice(0,3),this.Cl+this.Hb(this.Cx,3));}this.Cx=C;this.Be();this.Al(T);},SF:function(
C){var A;if(C===this.HJ)return;this.HJ=C;while(!!this.MV());this.D0=null;this.Hc=
0;this.Be();this.Al([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},RG:function(OK,Ed){var
A;var MH=this.Cl;var QW=(((A=this.M)[3]-A[1])-this.Cl)-this.Hb(this.Cx,3);var Cs=
0;if(MH>0)Cs=-MH;else if(QW>0)Cs=QW;if((Cs>0)&&(Cs>-MH))Cs=-MH;if(!Cs){(Ed)?Ed[1
].call(Ed[0],this):null;return;}if(!!this.Bm){this.Bm.As(false);this.Bm.A6=null;
this.Bm.Ic=null;this.JX=null;}this.Bm=OK;if(!this.Bm){this.Ky(this.Cl+Cs);(Ed)?Ed[
1].call(Ed[0],this):null;}else{this.Bm.As(false);this.Bm.HO(1);this.Bm.A6=[this,
this.PV,this.Ky];this.Bm.Bf=this.Cl;this.Bm.BF=this.Cl+Cs;this.Bm.Ic=[this,this.
Ri];this.Bm.Ma(false);this.Bm.As(true);this.JX=Ed;}},LQ:function(JP,QF,OK,Ed){var
A;if((JP<0)||(JP>=this.Cx))return;var H=this.PN(JP,JP);var Aq=this.M;var La=B.lb(
H,Aq);if((!QF&&!((La[0]>=La[2])||(La[1]>=La[3])))||(QF&&B.aaY(La,H))){(Ed)?Ed[1].
call(Ed[0],this):null;return;}var Cs=0;if(H[3]>Aq[3])Cs=H[3]-Aq[3];if(Cs>(H[1]-Aq[
1]))Cs=H[1]-Aq[1];if(!!this.Bm){this.Bm.As(false);this.Bm.A6=null;this.Bm.Ic=null;
this.JX=null;}this.Bm=OK;if(!this.Bm){this.Ky(this.Cl-Cs);(Ed)?Ed[1].call(Ed[0],
this):null;}else{this.Bm.As(false);this.Bm.HO(1);this.Bm.A6=[this,this.PV,this.Ky
];this.Bm.Bf=this.Cl;this.Bm.BF=this.Cl-Cs;this.Bm.Ic=[this,this.Ri];this.Bm.Ma(
false);this.Bm.As(true);this.JX=Ed;}},R8:function(BG){if(((this.Cx<=0)||(BG[0]<this.
M[0]))||(BG[0]>=this.M[2]))return-1;BG=B.abe(BG,this.M.slice(0,2));{var V=BG[1]-
this.Cl;if(V>0)V=this.Pp(V,0);if((V<0)||(V>=this.Cx))return-1;return V;}},PN:function(
Mq,Mr){if(Mq<0)Mq=0;if(Mr>=this.Cx)Mr=this.Cx-1;if(Mq>Mr)return Bi;var T=this.M;
var Cs=this.Cl;T=[].concat(T.slice(0,3),(T[1]+Cs)+this.Hb(Mr+1,0));T=B.abP(T,(T[
1]+Cs)+this.Hb(Mq,0));return T;},PV:function(){return this.Cl;},_Init:function(aArg
){E.L._Init.call(this,aArg);this.__proto__=E.A8;this.P(OE);this.HJ=B.acf.Text;},
_Mark:function(D){var A;E.L._Mark.call(this,D);if((A=this.D0)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Bm)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AB)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Ge)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.JX)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.EP)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::VerticalList"};E.JB={NW:null
,Kt:null,Kp:null,Fh:null,Do:null,M4:0,Ai:0,BR:0,AG:0,C2:0,Cq:0,AS:B.wf,D7:B.wf,CF:
B.wf,KE:8,Gd:0,PR:1,Down:false,FZ:false,Dm:false,OX:false,Li:0,Er:function(Bn,aClip
,aOffset,Bg,aBlend){},BU:function(Az){var A;var Ab=(E.Gy.isPrototypeOf(Az)?Az:null
);var A$=(E.Kb.isPrototypeOf(Az)?Az:null);var MK=this.FZ;var Fv;var EF;var LF;var
CO;var K4;if(!Ab&&!A$)return null;Fv=(!!Ab&&Ab.Down)&&!Ab.Cq;EF=(!!Ab&&Ab.Down)&&(
Ab.Cq>0);LF=(!!Ab&&Ab.Down)&&(Ab.Cq>this.Li);CO=!!Ab&&!Ab.Down;K4=!!A$;if(Fv)this.
Li=((A=(Ab.Dm?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.Gd&0x20)===0x20)&&(this.
Ai>0))&&(this.Ai<33554432)){var BQ=(E.J8.isPrototypeOf(Az)?Az:null);if(((!!BQ&&BQ.
Down)&&(BQ.KI!==this))&&B.wa(this.GetExtent(),this.I.PQ(BQ.Cv))){this.M4=0x20;this.
Ai=this.Ai|67108864;return null;}}if(Fv){var IN=0;var FO;this.Ai=this.Ai|(1<<Ab.
BR);for(FO=this.Ai&4095;FO>0;FO=FO>>1)if(!!(FO&1))IN=IN+1;if(IN===1)this.Ai=(this.
Ai|16777216)|(4096<<Ab.BR);}if(CO&&(this.Ai<16777216)){var BL=this.Db();var B3=null;
if(!!BL){var Py=(!!this.S?this.S:this.I);var OV=(!!BL.B4?BL.B4.Au:null);B3=BL.Fd(
B.abh(G4,Ab.Cv),Ab.BR,Ab.C2,OV,Py,0x0);}if(!!B3){var G;for(G=0;G<10;G++)if(!!(this.
Ai&(1<<G)))B3.AB.BU(B._NewObject(E.Gy,0).InitializeDown(G,Ab.CF,Ab.C2,A4,true,Ab.
Cv));for(G=0;G<10;G++)if(!!(this.Ai&(1<<G)))B3.AB.BU(B._NewObject(E.Gy,0).InitializeUp(
G,Ab.CF,Ab.CF,0,Ab.C2,A4,false,Ab.Cv,Ab.Cv));}}if(CO)this.Ai=(this.Ai&~(1<<Ab.BR
))|33554432;if(LF&&(this.Ai<16777216))this.Ai=this.Ai|67108864;if(CO&&Ab.Dm)this.
Ai=this.Ai|67108864;if(CO&&!(this.Ai&4095))this.M4=0x0;if(CO&&!(this.Ai&16777215
))this.Ai=0;if(EF&&(this.Ai>=67108864)){var BL=this.Db();if(!!BL)BL.Md(null,null
,this,this.M4);}if((EF&&!!(this.Ai&16777216))&&!!(this.Ai&33554432)){EF=false;CO=
true;}if(!!Ab&&!(this.Ai&(4096<<Ab.BR)))return this;if(!!A$&&!(this.Ai&(4096<<A$.
BR)))return this;if(CO&&!(this.Ai&16777216))return this;if(((Fv||K4)||EF)&&((this.
Ai<16777216)||(this.Ai>=33554432)))return this;if(CO)this.Ai=this.Ai&3758100479;
if(CO&&!(this.Ai&16777215))this.Ai=0;if(!!Ab){this.Down=Fv||EF;this.FZ=this.NL(Ab.
CF);this.D7=Ab.D7;this.CF=Ab.CF;this.AS=A4;this.Cq=Ab.Cq;this.C2=Ab.C2;this.Dm=Ab.
Dm;this.BR=Ab.BR;this.AG=Ab.AG;if(Ab.Down&&!Ab.Cq)MK=false;}if(!!A$){this.Down=true;
this.FZ=this.NL(A$.CF);this.D7=A$.D7;this.CF=A$.CF;this.AS=A$.AS;this.Cq=A$.Cq;this.
C2=A$.C2;this.BR=A$.BR;this.Dm=false;this.AG=A$.AG;}var OW=this.Down;if(!!A$)(A=
this.NW)?A[1].call(A[0],this):null;if((!!Ab&&this.Down)&&!this.Cq)(A=this.Do)?A[
1].call(A[0],this):null;if((this.Down&&this.FZ)&&!MK){this.OX=true;(A=this.Kp)?A[
1].call(A[0],this):null;}if(this.OX&&(((OW&&!this.FZ)&&MK)||((!OW&&this.FZ)&&MK)
)){this.OX=false;(A=this.Kt)?A[1].call(A[0],this):null;}if(!!Ab&&!OW)(A=this.Fh)?
A[1].call(A[0],this):null;if(!!this.Gd){var Id=0x0;if(((((this.Gd&0x10)===0x10)&&
!!Ab)&&Ab.Down)&&(Ab.Cq>=1000))Id=0x10;if((((this.Gd&0x1)===0x1)&&!!A$)&&((A$.Cv[
1]-A$.GG[1])<=-this.KE))Id=0x1;if((((this.Gd&0x2)===0x2)&&!!A$)&&((A$.Cv[1]-A$.GG[
1])>=this.KE))Id=0x2;if((((this.Gd&0x4)===0x4)&&!!A$)&&((A$.Cv[0]-A$.GG[0])<=-this.
KE))Id=0x4;if((((this.Gd&0x8)===0x8)&&!!A$)&&((A$.Cv[0]-A$.GG[0])>=this.KE))Id=0x8;
if(!!Id){var BL=this.Db();if(!!BL){this.M4=Id;BL.Md(null,this,this,Id);}}}return this;
},Fd:function(Ay,W,C6,ET,ED,Gk){var A;if(!!ET&&(ET!==this))return null;if((C6<1)||(
C6>this.PR))return null;if(this.Ai>=33554432)return null;if((this.Ai>=16777216)&&
!(this.Ai&(4096<<W)))return null;if(!!(Gk&this.Gd))return null;if(this.Sa()){var
H=B.lb(Ay,this.GetExtent());if(!((H[0]>=H[2])||(H[1]>=H[3]))){var Dw=B.aaI(Ay);var
BZ=A4;if(Dw[0]<H[0])BZ=[H[0]-Dw[0],BZ[1]];if(Dw[0]>=H[2])BZ=[(H[2]-Dw[0])-1,BZ[1
]];if(Dw[1]<H[1])BZ=[BZ[0],H[1]-Dw[1]];if(Dw[1]>=H[3])BZ=[BZ[0],(H[3]-Dw[1])-1];
return B._NewObject(E.LP,0).Initialize(this,BZ);}}else{var BA=B.abi(9,B.wf,null);
var G;BA.Set(0,B.aaI(Ay));BA.Set(1,BA.Get(0));BA.Set(2,BA.Get(0));BA.Set(3,BA.Get(
0));BA.Set(4,BA.Get(0));BA.Set(1,[Ay[0],BA.Get(1)[1]]);BA.Set(2,[BA.Get(2)[0],Ay[
1]]);BA.Set(3,[Ay[2],BA.Get(3)[1]]);BA.Set(4,[BA.Get(4)[0],Ay[3]]);BA.Set(5,Ay.slice(
0,2));BA.Set(6,[Ay[2],Ay[1]]);BA.Set(7,[Ay[0],Ay[3]]);BA.Set(8,Ay.slice(2,4));for(
G=0;G<9;G=G+1)if(this.NL(BA.Get(G)))return B._NewObject(E.LP,0).Initialize(this,
B.abe(BA.Get(G),BA.Get(0)));}return null;},P_:function(C){if(C<1)C=1;this.KE=C;}
,L9:function(C){if(C<1)C=1;this.PR=C;},As:function(C){if(C)this.At(0x100000,0x0);
else this.At(0x0,0x100000);},_Init:function(aArg){E.KC._Init.call(this,aArg);this.
__proto__=E.JB;this.F=0x10011B;},_Mark:function(D){var A;E.KC._Mark.call(this,D);
if((A=this.NW)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Kt)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Kp)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Fh)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Do
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};E.Ex={timer:null,MU:null,JZ:null,Ai:0,Mw:0,IZ:0,MI:B.wf,IL:0,Gm:0,A3:0,Ii:0,J2:
0,IK:0,Gl:0,A2:0,Ih:0,Ig:0,D7:B.wf,PJ:B.wf,Bu:B.wf,Bv:B.wf,AS:B.wf,Ey:B.wf,JD:false
,E4:false,E5:false,Mv:false,Li:0,Er:function(Bn,aClip,aOffset,Bg,aBlend){},BU:function(
Az){var A;var Ab=(E.Gy.isPrototypeOf(Az)?Az:null);var A$=(E.Kb.isPrototypeOf(Az)?
Az:null);var BQ=(E.J8.isPrototypeOf(Az)?Az:null);var Fv;var EF;var LF;var CO;var
K4;Fv=(!!Ab&&Ab.Down)&&!Ab.Cq;EF=(!!Ab&&Ab.Down)&&(Ab.Cq>0);LF=(!!Ab&&Ab.Down)&&(
Ab.Cq>this.Li);CO=!!Ab&&!Ab.Down;K4=!!A$;if(Fv)this.Li=((A=(Ab.Dm?0:50))&0x80)?A|
0xFFFFFF00:A&0xFF;if(Fv){var IN=0;var FO;this.Ai=this.Ai|(1<<Ab.BR);for(FO=this.
Ai&4095;FO>0;FO=FO>>1)if(!!(FO&1))IN=IN+1;if(IN===1)this.Ai=(this.Ai|16777216)|(
4096<<Ab.BR);}if(CO&&(this.Ai<16777216)){var BL=this.Db();var B3=null;if(!!BL){var
Py=(!!this.S?this.S:this.I);var OV=(!!BL.B4?BL.B4.Au:null);B3=BL.Fd(B.abh(G4,Ab.
Cv),Ab.BR,Ab.C2,OV,Py,0x0);}if(!!B3){var G;for(G=0;G<10;G++)if(!!(this.Ai&(1<<G)
))B3.AB.BU(B._NewObject(E.Gy,0).InitializeDown(G,Ab.CF,Ab.C2,A4,true,Ab.Cv));for(
G=0;G<10;G++)if(!!(this.Ai&(1<<G)))B3.AB.BU(B._NewObject(E.Gy,0).InitializeUp(G,
Ab.CF,Ab.CF,0,Ab.C2,A4,false,Ab.Cv,Ab.Cv));}}if(CO)this.Ai=(this.Ai&~(1<<Ab.BR))|
33554432;if(LF&&(this.Ai<16777216))this.Ai=this.Ai|67108864;if(CO&&Ab.Dm)this.Ai=
this.Ai|67108864;if(CO&&!(this.Ai&16777215))this.Ai=0;if(EF&&(this.Ai>=67108864)
){var BL=this.Db();if(!!BL)BL.Md(null,null,this,0x0);}if((EF&&!!(this.Ai&16777216
))&&!!(this.Ai&33554432)){EF=false;CO=true;}if(!!Ab&&!(this.Ai&(4096<<Ab.BR)))return this;
if(!!A$&&!(this.Ai&(4096<<A$.BR)))return this;if(CO&&!(this.Ai&16777216))return this;
if(((Fv||K4)||EF)&&((this.Ai<16777216)||(this.Ai>=33554432)))return this;if(CO)this.
Ai=this.Ai&3758100479;if(CO&&!(this.Ai&16777215))this.Ai=0;if(!!BQ&&(BQ.KI===this
))return null;if((!!BQ&&BQ.Down)&&(this.Mv||!this.JD))return null;if((!!BQ&&BQ.Down
)&&!B.wa(this.M,this.I.PQ(BQ.Cv)))return null;if((!!BQ&&!BQ.Down)&&(!this.Mv||(this.
Mw!==BQ.BR)))return null;if((!Ab&&!A$)&&!BQ)return null;if(!!Ab){this.Mv=Fv||EF;
this.Mw=Ab.BR;this.D7=Ab.D7;}if(!!A$)this.Mw=A$.BR;if(!!BQ){this.Mv=BQ.Down;this.
Mw=BQ.BR;}if(!!BQ&&BQ.Down){this.Pz();this.A2=(((BQ.AG-this.Ig)*0.001)*this.Gl)+
this.A2;this.A3=(((BQ.AG-this.J2)*0.001)*this.Gm)+this.A3;if(this.E4)this.A2=0;if(
this.E5)this.A3=0;this.Gl=0;this.Gm=0;this.E4=false;this.E5=false;this.MI=this.AS;
this.IZ=BQ.AG;return this;}if(Fv){this.Pz();this.A2=(((Ab.AG-this.Ig)*0.001)*this.
Gl)+this.A2;this.A3=(((Ab.AG-this.J2)*0.001)*this.Gm)+this.A3;if(this.E4||!this.
JD)this.A2=0;if(this.E5||!this.JD)this.A3=0;this.Gl=0;this.Gm=0;this.E4=false;this.
E5=false;if(!this.JD){this.JD=true;(A=this.MU)?A[1].call(A[0],this):null;}this.MI=
this.AS;this.IZ=Ab.AG;}if(!!A$){var Ax=B.abe(A$.CF,A$.D7);var AF=this.AS;AF=[this.
MI[0]+Ax[0],AF[1]];AF=[AF[0],this.MI[1]+Ax[1]];if(AF[0]<this.Bv[0])AF=[this.Bv[0
]+(((AF[0]-this.Bv[0])/2)|0),AF[1]];else if(AF[0]>this.Bu[0])AF=[this.Bu[0]+(((AF[
0]-this.Bu[0])/2)|0),AF[1]];if(AF[1]<this.Bv[1])AF=[AF[0],this.Bv[1]+(((AF[1]-this.
Bv[1])/2)|0)];else if(AF[1]>this.Bu[1])AF=[AF[0],this.Bu[1]+(((AF[1]-this.Bu[1])
/2)|0)];if(!B.aaX(AF,this.AS)){this.PJ=B.abe(AF,this.AS);this.AS=AF;(A=this.JZ)?
A[1].call(A[0],this):null;}}if((!!BQ&&!BQ.Down)&&((BQ.AG-this.IZ)>=200)){this.A2=
0;this.A3=0;}if(EF&&((Ab.AG-this.IZ)>=200)){this.A2=0;this.A3=0;}if(!!A$&&(A$.AG>
this.IZ)){var Ax=A$.AS;var Q0=1000/(A$.AG-this.IZ);var Hx;var Hy;Hx=Ax[0]*Q0;Hy=
Ax[1]*Q0;if((Hx*this.A2)<0)this.A2=0;if((Hy*this.A3)<0)this.A3=0;this.A2=(this.A2+
Hx)*0.5;this.A3=(this.A3+Hy)*0.5;this.IZ=A$.AG;}if(!CO&&!BQ)return this;if(!!Ab&&
Ab.Dm){this.A2=0;this.A3=0;}if((this.AS[0]<=this.Bv[0])||(this.AS[0]>=this.Bu[0]
))this.A2=0;else if(!this.A2){var AY=this.AS[0];var A7=this.Bv[0];var AR=this.Bu[
0];if(AY<A7)AR=this.Bv[0];else if(AY>AR)A7=this.Bu[0];else if(this.Ey[0]<=1){A7=
AY;AR=AY;}else{var FQ=(AR-AY)%this.Ey[0];AR=(AY-this.Ey[0])+FQ;A7=AY+FQ;if(AR<this.
Bv[0])AR=this.Bv[0];if(A7>this.Bu[0])A7=this.Bu[0];}if((A7-AY)<=(AY-AR))AY=A7;else
AY=AR;if(AY!==this.AS[0]){var CJ=AY-this.AS[0];if(CJ>0)this.A2=Math.sqrt((CJ*2)*
5000)+20;if(CJ<0)this.A2=-Math.sqrt((-CJ*2)*5000)-20;this.Gl=(400-(this.A2*this.
A2))/(2*CJ);this.IK=AY;}}else{var VN=this.A2*this.A2;var CJ=VN/10000;var AY=this.
AS[0];if(this.A2>0)AY=AY+(CJ|0);if(this.A2<0)AY=AY-(CJ|0);if(AY>this.Bu[0])AY=this.
Bu[0];else if(AY<this.Bv[0])AY=this.Bv[0];var Rw=AY;var A7=this.Bv[0];var AR=this.
Bu[0];if(AY<A7)AR=this.Bv[0];else if(AY>AR)A7=this.Bu[0];else if(this.Ey[0]<=1){
A7=AY;AR=AY;}else{var FQ=(AR-AY)%this.Ey[0];AR=(AY-this.Ey[0])+FQ;A7=AY+FQ;if(AR<
this.Bv[0])AR=this.Bv[0];if(A7>this.Bu[0])A7=this.Bu[0];}if(this.A2>0){if(AR<=this.
AS[0])AY=A7;else if((AY-AR)<(A7-AY))AY=AR;else AY=A7;}else if(A7>=this.AS[0])AY=
AR;else if((AY-AR)>(A7-AY))AY=A7;else AY=AR;if(AY!==this.AS[0]){CJ=AY-this.AS[0];
if(AY!==Rw){var HD=AY-Rw;if(HD>0)this.A2=this.A2+Math.sqrt((HD*2)*5000);if(HD<0)
this.A2=this.A2-Math.sqrt((-HD*2)*5000);}if(this.A2>0)this.A2=this.A2+20;if(this.
A2<0)this.A2=this.A2-20;this.Gl=(400-(this.A2*this.A2))/(2*CJ);this.IK=AY;}else this.
A2=0;}if((this.AS[1]<=this.Bv[1])||(this.AS[1]>=this.Bu[1]))this.A3=0;else if(!this.
A3){var AZ=this.AS[1];var A7=this.Bv[1];var AR=this.Bu[1];if(AZ<A7)AR=this.Bv[1];
else if(AZ>AR)A7=this.Bu[1];else if(this.Ey[1]<=1){A7=AZ;AR=AZ;}else{var FQ=(AR-
AZ)%this.Ey[1];AR=(AZ-this.Ey[1])+FQ;A7=AZ+FQ;if(AR<this.Bv[1])AR=this.Bv[1];if(
A7>this.Bu[1])A7=this.Bu[1];}if((A7-AZ)<=(AZ-AR))AZ=A7;else AZ=AR;if(AZ!==this.AS[
1]){var CJ=AZ-this.AS[1];if(CJ>0)this.A3=Math.sqrt((CJ*2)*5000)+20;if(CJ<0)this.
A3=-Math.sqrt((-CJ*2)*5000)-20;this.Gm=(400-(this.A3*this.A3))/(2*CJ);this.IL=AZ;
}}else{var VO=this.A3*this.A3;var CJ=VO/10000;var AZ=this.AS[1];if(this.A3>0)AZ=
AZ+(CJ|0);if(this.A3<0)AZ=AZ-(CJ|0);if(AZ>this.Bu[1])AZ=this.Bu[1];else if(AZ<this.
Bv[1])AZ=this.Bv[1];var Rx=AZ;var A7=this.Bv[1];var AR=this.Bu[1];if(AZ<A7)AR=this.
Bv[1];else if(AZ>AR)A7=this.Bu[1];else if(this.Ey[1]<=1){A7=AZ;AR=AZ;}else{var FQ=(
AR-AZ)%this.Ey[1];AR=(AZ-this.Ey[1])+FQ;A7=AZ+FQ;if(AR<this.Bv[1])AR=this.Bv[1];
if(A7>this.Bu[1])A7=this.Bu[1];}if(this.A3>0){if(AR<=this.AS[1])AZ=A7;else if((AZ-
AR)<(A7-AZ))AZ=AR;else AZ=A7;}else if(A7>=this.AS[1])AZ=AR;else if((AZ-AR)>(A7-AZ
))AZ=A7;else AZ=AR;if(AZ!==this.AS[1]){CJ=AZ-this.AS[1];if(AZ!==Rx){var HD=AZ-Rx;
if(HD>0)this.A3=this.A3+Math.sqrt((HD*2)*5000);if(HD<0)this.A3=this.A3-Math.sqrt((-
HD*2)*5000);}if(this.A3>0)this.A3=this.A3+20;if(this.A3<0)this.A3=this.A3-20;this.
Gm=(400-(this.A3*this.A3))/(2*CJ);this.IL=AZ;}else this.A3=0;}if(!!Ab)this.Ig=Ab.
AG;if(!!BQ)this.Ig=BQ.AG;this.J2=this.Ig;this.Ih=this.AS[0];this.Ii=this.AS[1];this.
VP();return this;},Fd:function(Ay,W,C6,ET,ED,Gk){var A;if(!!ET&&(ET!==this))return null;
if(this.Ai>=33554432)return null;if((this.Ai>=16777216)&&!(this.Ai&(4096<<W)))return null;
var H=B.lb(Ay,this.M);if(!((H[0]>=H[2])||(H[1]>=H[3]))){var Dw=B.aaI(Ay);var BZ=
A4;if(Dw[0]<H[0])BZ=[H[0]-Dw[0],BZ[1]];if(Dw[0]>=H[2])BZ=[(H[2]-Dw[0])-1,BZ[1]];
if(Dw[1]<H[1])BZ=[BZ[0],H[1]-Dw[1]];if(Dw[1]>=H[3])BZ=[BZ[0],(H[3]-Dw[1])-1];return B.
_NewObject(E.LP,0).Initialize(this,BZ);}return null;},Pz:function(){if(!!this.timer
){B.z9([this,this.D4],this.timer,0);this.timer=null;}},VP:function(){this.timer=
B._GetAutoObject(B.acj.HG);B.zV([this,this.D4],this.timer,0);},D4:function(Z){var
A;if(!this.timer)return;var J3=(this.timer.AG-this.Ig)*0.001;var J4=(this.timer.
AG-this.J2)*0.001;var VS=J3*J3;var VT=J4*J4;var Hx=(this.Gl*J3)+this.A2;var Hy=(
this.Gm*J4)+this.A3;var AF=[((((this.Gl*0.5)*VS)+(this.A2*J3))+this.Ih)|0,((((this.
Gm*0.5)*VT)+(this.A3*J4))+this.Ii)|0];if(this.E4&&(J3>=0.5)){AF=[this.IK,AF[1]];
this.A2=0;this.Gl=0;this.Ih=AF[0];this.E4=false;}else if(this.E4){var Dh=1-Math.
pow(1-(J3/0.5),5);AF=[(this.Ih+((this.IK-this.Ih)*Dh))|0,AF[1]];}if(this.E5&&(J4>=
0.5)){AF=[AF[0],this.IL];this.A3=0;this.Gm=0;this.Ii=AF[1];this.E5=false;}else if(
this.E5){var Dh=1-Math.pow(1-(J4/0.5),5);AF=[AF[0],(this.Ii+((this.IL-this.Ii)*Dh
))|0];}if(((this.A2>0)&&(Hx<0))||((this.A2<0)&&(Hx>0))){Hx=0;AF=[this.AS[0],AF[1
]];}if(((this.A3>0)&&(Hy<0))||((this.A3<0)&&(Hy>0))){Hy=0;AF=[AF[0],this.AS[1]];
}if(!this.E4&&(AF[0]<this.Bv[0])){this.Ih=AF[0];this.IK=this.Bv[0];this.Ig=this.
timer.AG;this.E4=true;}else if(!this.E4&&(AF[0]>this.Bu[0])){this.Ih=AF[0];this.
IK=this.Bu[0];this.Ig=this.timer.AG;this.E4=true;}if(!this.E5&&(AF[1]<this.Bv[1]
)){this.Ii=AF[1];this.IL=this.Bv[1];this.J2=this.timer.AG;this.E5=true;}else if(
!this.E5&&(AF[1]>this.Bu[1])){this.Ii=AF[1];this.IL=this.Bu[1];this.J2=this.timer.
AG;this.E5=true;}if(((!this.E4&&!!this.A2)&&(Hx>-20))&&(Hx<20)){AF=[this.IK,AF[1
]];this.A2=0;this.Gl=0;this.Ih=AF[0];}if(((!this.E5&&!!this.A3)&&(Hy>-20))&&(Hy<
20)){AF=[AF[0],this.IL];this.A3=0;this.Gm=0;this.Ii=AF[1];}if(!B.aaX(AF,this.AS)
){this.PJ=B.abe(AF,this.AS);this.AS=AF;(A=this.JZ)?A[1].call(A[0],this):null;}if(((
!this.A2&&!this.A3)&&!this.E4)&&!this.E5){this.Pz();this.JD=false;}},SP:function(
C){if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];this.Ey=C;},_Init:function(aArg){E.
BC._Init.call(this,aArg);this.__proto__=E.Ex;this.F=0x10011B;},_Mark:function(D){
var A;E.BC._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.MU)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.JZ)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"};E.Et={
Q:null,Fh:null,Do:null,Jl:null,IW:0,AG:0,Qe:0,Cu:148,BT:0,A5:0,Bc:true,Down:false
,KD:false,Bt:function(aArg){var A;var Au=(E.L.isPrototypeOf(A=this.J)?A:null);if(
!Au)throw new Error(OF);this.Q=Au.MN;Au.MN=this;},BU:function(Az){var A;if(!!Az&&
Az.Sd(this.Cu)){this.Down=Az.Down;this.BT=Az.BT;this.A5=Az.A5;this.AG=Az.AG;if(Az.
Down){this.Qe=this.IW;this.KD=this.IW>0;if(this.KD)(A=this.Jl)?A[1].call(A[0],this
):null;else(A=this.Do)?A[1].call(A[0],this):null;this.IW=this.IW+1;return true;}
if(!Az.Down){this.KD=this.IW>1;this.Qe=this.IW-1;this.IW=0;(A=this.Fh)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
E.Et;this.Bt(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Fh)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Do)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Jl)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};E.LP={AB:null,J9:0,AS:B.wf,Initialize:function(
O,aOffset){this.AB=O;this.AS=aOffset;this.J9=(aOffset[0]*aOffset[0])+(aOffset[1]
*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=E.LP;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AB)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D)
)A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};E.PS={Q:null,Au:null,_Init:function(aArg){this.__proto__=E.PS;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};E.LV={IS:null,DA:B.wg,Aq:B.wg,isEmpty:false
,_Init:function(aArg){this.__proto__=E.LV;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.IS)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};E.LW={Lx:B.wf,Lw:B.wf
,Lv:B.wf,Lu:B.wf,_Init:function(aArg){E.LV._Init.call(this,aArg);this.__proto__=
E.LW;},_className:"Core::LayoutQuadContext"};E.Nm={Au:null,Q:null,DW:null,D3:null
,CD:null,IU:null,_Init:function(aArg){this.__proto__=E.Nm;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Au)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.DW)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D3)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.CD)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.IU)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A.
_Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};E.Qn={DU:null,AC:null,Am:null,Q2:false,U3:function(){if(!this.DU)return;var EJ=
this.DU;this.DU.EI=null;this.DU=null;B.pe([this,this.Pl],this);EJ.PU(this);},Vn:
function(Z){if(!!this.DU)return;if(!this.Am)return;this.DU=this.Am;this.Am=this.
Am.Q;if(!!this.Am)this.Am.S=null;else this.AC=null;this.DU.Q=null;this.Q2=true;this.
DU.Jt(this);this.Q2=false;},Vz:function(Z){B.pe([this,this.Vn],this);},Vy:function(
Z){B.pe([this,this.Vz],this);},Pl:function(Z){B.pe([this,this.Vy],this);},RQ:function(
BY){if(!BY||!BY.EI)return;if(BY.EI!==this)throw new Error(Gi);var RF=false;if(this.
DU===BY){this.DU=null;RF=true;B.pe([this,this.Pl],this);}else{if(!!BY.Q)BY.Q.S=BY.
S;else this.AC=BY.S;if(!!BY.S)BY.S.Q=BY.Q;else this.Am=BY.Q;BY.S=null;BY.Q=null;
}BY.EI=null;if(RF)BY.PT(this);},Tl:function(BY,UY){if(!BY)return;if(!!BY.EI)throw new
Error(OG);BY.EI=this;if(UY){BY.Q=this.Am;if(!!this.Am)this.Am.S=BY;else this.AC=
BY;this.Am=BY;}else{BY.S=this.AC;if(!!this.AC)this.AC.Q=BY;else this.Am=BY;this.
AC=BY;}if(!this.DU)B.pe([this,this.Pl],this);},_Init:function(aArg){this.__proto__=
E.Qn;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.DU)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.AC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Am)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};E.KJ={EI:null,S:null,Q:null,PU:function(KZ){}
,PT:function(KZ){},Jt:function(KZ){this.PE();},FA:function(){if(!!this.EI&&(this.
EI.DU===this))this.EI.U3();},PE:function(){if(!!this.EI)this.EI.RQ(this);},NI:function(
){return!!this.EI&&(this.EI.DU===this);},_Init:function(aArg){this.__proto__=E.KJ;
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.EI)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.S
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::Task"};E.GU={resource:null,FB:function(){this.resource=null;
},Bt:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=E.GU;
this.Bt(aArg);B.h7++;},_Done:function(){this.FB();this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::Resource"};E.Timer={GR:null
,timer:null,AG:0,Period:1000,I5:0,Bc:false,FB:function(){var tmp=this.timer;if(!
!tmp)tmp.DestroyTimer();this.timer=null;},MX:function(aBegin,aPeriod){if(aBegin<
0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>
0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin
,aPeriod);}this.timer=tmp;},GP:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.Bc)this.MX(this.I5,C);},HL:function(C){if(C<0)C=0;if(C===this.
I5)return;this.I5=C;if(this.Bc)this.MX(C,this.Period);},As:function(C){if(C===this.
Bc)return;this.Bc=C;if(C)this.MX(this.I5,this.Period);else this.MX(0,0);this.AG=
this.Ki();},Ki:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AG=this.Ki();if(!this.Period
)this.As(false);(A=this.GR)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.FB();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.GR)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.Mc={Kq:null,A6:null,Rh:function(
Z){var A;(A=this.Kq)?A[1].call(A[0],this):null;},Kx:function(C){if(B.aaZ(this.A6
,C))return;if(!!this.A6)B.z$([this,this.Rh],this.A6,0);this.A6=C;if(!!this.A6)B.
zX([this,this.Rh],this.A6,0);},_Init:function(aArg){this.__proto__=E.Mc;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Kq)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.A6)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};E.Xi={
B9:0x1,V5:0x2,Wy:0x4,Xg:0x8,Bc:0x10,W7:0x20,Wz:0x40,WK:0x80,Wx:0x100,WE:0x200,Wr:
0x400,WU:0x800,Mm:0x1000,Xh:0x2000,WO:0x4000,WP:0x8000,Wk:0x10000,WN:0x20000,W4:
0x40000,Wl:0x80000,WT:0x100000,Wj:0x200000};E.DP={WV:0x1,WW:0x2,V1:0x4,V2:0x8,V3:
0x10,V0:0x20};E.WB={Si:0,Xd:1,V$:2,WF:3,WY:4,Xe:5,Xf:6,Wa:7,Wb:8,WH:9,WG:10,W0:11
,WZ:12};E.J$={Si:0,Xb:1,Left:2,V9:3,BX:4,RO:5,Xc:6,Right:7,V_:8};E.KeyCode={NoKey:
0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:
11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:
21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:
32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:
40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48
,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,
SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};E.WX={Xm:0x1,Xj:0x2,Xk:0x4,Xl:0x8,WJ:
0x10,WA:0x20};
E._Init=function(){E.KC.__proto__=E.AB;E.BC.__proto__=E.AB;E.L.__proto__=E.BC;E.Root.
__proto__=E.L;E.KeyEvent.__proto__=E.Event;E.J8.__proto__=E.Event;E.Gy.__proto__=
E.Event;E.Kb.__proto__=E.Event;E.Fr.__proto__=E.BC;E.A8.__proto__=E.L;E.JB.__proto__=
E.KC;E.Ex.__proto__=E.BC;E.LW.__proto__=E.LV;};E._ReInit=function(){};E.Ec=function(
D){};return E;})();

/* Embedded Wizard */