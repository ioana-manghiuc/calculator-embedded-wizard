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
var A4=[0,0];var Bi=[0,0,0,0];var Dv="The view does not belong to this group";var
E0=[340,600];var Ee="The dialog component is already presented";var FQ="The dialog component is actually not presented";
var IE="No fader to perform the fade-in/out operation";var JZ="Trying to use the same fader twice";
var IF="Trying to fade-in/out a group which belongs to another owner";var IG="No view to restack";
var G6="View is not in this group";var OF="No view to remove";var OG="No view to add";
var Mx="View already in a group";var OH="Recursive invalidate during active update cycle.";
var IH=[-8,-8,9,9];var OI="No group to end the modal state.";var Gl="The group is not modal.";
var My="No group to obtain the modal state.";var OJ="The group serves already as the \'virtual keyboard\'.";
var OK="The group is already modal.";var OL="The method SwitchToDialog() is not available in Core::VerticalList.";
var OM="The method DismissDialog() is not available in Core::VerticalList.";var ON=
"The method PresentDialog() is not available in Core::VerticalList.";var OO="The method FadeGroup() is not available in Core::VerticalList.";
var OP="The method RestackTop() is not available in Core::VerticalList.";var OQ=
"The method Restack() is not available in Core::VerticalList.";var OR="The method Remove() is not available in Core::VerticalList.";
var HW="The method Add() is not available in Core::VerticalList.";var OS="The Slide Touch Handler:";
var OT="is already connected with a view.";var OU="The Slide Touch Handler is already connected with a view to scroll "+
"its content.";var HX=[0,0,170,120];var Mz=[0,0,1,1];var Gm="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var OV="Trying to cancel a task not belonging to this queue!";
var HY="Trying to enqueue a task twice!";
E.AC={Q:null,S:null,I:null,Bl:null,F:0x103,ED:0,DR:0x14,Lk:function(Ao,MF){},CH:function(
C){if(this.ED===C)return;this.ED=C;if(!!this.I){var HE=this.Q;var Ax=0;while(!!HE&&(
C>HE.ED)){HE=HE.Q;Ax=Ax+1;}HE=this.S;while(!!HE&&(C<HE.ED)){HE=HE.S;Ax=Ax-1;}if(
!!Ax)this.I.Qv(this,Ax);}},Du:function(C){var A;var Ax=C^this.DR;if(!Ax)return;this.
DR=C;if(!!this.Bl&&!((this.F&0x400)===0x400)){this.I.F=this.I.F|0x5000;B.pe([A=this.
I,A.Dp],this);this.I.Al([0,0,(A=this.I.M)[2]-A[0],A[3]-A[1]]);}if(!!this.Bl&&((this.
F&0x400)===0x400)){this.Bl.I0.F=this.Bl.I0.F|0x1000;this.I.F=this.I.F|0x4000;B.pe([
A=this.I,A.Dp],this);}},De:function(){var An=this.I;while(!!An){var BM=(E.Root.isPrototypeOf(
An)?An:null);if(!!BM)return BM;An=An.I;}return null;},Ev:function(Bo,aClip,aOffset
,Bg,aBlend){},GetClipping:function(){return this.GetExtent();},BV:function(Az){return null;
},Fj:function(Ay,W,C8,E1,EI,Go){return null;},LV:function(Ay){return Ay;},LX:function(
Ao,EG){return A4;},L9:function(aOffset,MC){},GetExtent:function(){return Bi;},At:
function(DU,EF){var A;if(((this.F&0x200)===0x200))DU=DU&~0x400;var Pw=(this.F&~EF
)|DU;var E_=Pw^this.F;this.F=Pw;if(!!this.I&&!!(E_&0x14)){var Ra=((this.F&0x14)===
0x14);if(Ra&&!this.I.CS)this.I.Df(this);if(!Ra&&(this.I.CS===this))this.I.Df(this.
I.NM(this,0x14));}if(!!this.I&&!!(E_&0x403))this.I.Al(this.GetClipping());if(((!
!this.Bl&&!!this.I)&&((Pw&0x400)===0x400))&&((E_&0x1)===0x1)){this.F=this.F|0x800;
this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dp],this);}if(!!this.I&&((E_&0x400)===
0x400)){this.Bl=null;this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I
,A.Dp],this);}if(((((E_&0x100000)===0x100000)&&((EF&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.At(0x0,0x10);if(((((E_&0x100000
)===0x100000)&&((DU&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.I)&&((this.I.F&0x10)===
0x10))))this.At(0x10,0x0);if(((((E_&0x200000)===0x200000)&&((EF&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.At(0x10,0x0);if((((((
E_&0x200000)===0x200000)&&((DU&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.I&&!((this.I.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.I)&&(this.I.Bq.Au!==this))))this.At(0x0,0x10);},_Init:
function(aArg){this.__proto__=E.AC;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Q)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.S)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bl)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::View"};E.KN={Cz:B.wf,Di:B.wf,Cy:B.wf,Dh:B.wf,Lk:function(
Ao,MF){var Aj=B._NewObject(E.L8,0);this.Bl=null;Aj.DD=this.GetExtent();Aj.Ar=Ao;
Aj.I0=MF;Aj.LE=this.Dh;Aj.LF=this.Cy;Aj.LG=this.Di;Aj.LH=this.Cz;this.Bl=Aj;},LX:
function(Ao,EG){var A;var AX=this.DR;var Aj=(E.L8.isPrototypeOf(A=this.Bl)?A:null
);var Ae=Aj.DD[0];var Af=Aj.DD[1];var Ac=Aj.DD[2];var Ag=Aj.DD[3];var DC=[Ao[2]-
Ao[0],Ao[3]-Ao[1]];var Bh=Ac-Ae;var AM=Ag-Af;if(!EG){var Fh=[(A=Aj.Ar)[2]-A[0],A[
3]-A[1]];Ae=Ae-Aj.Ar[0];Af=Af-Aj.Ar[1];if(Fh[0]!==DC[0]){var BO=((AX&0x4)===0x4);
var BP=((AX&0x8)===0x8);var FY=((AX&0x1)===0x1);if(!BO&&(FY||!BP))Ae=((Ae*DC[0])
/Fh[0])|0;if(!BP&&(FY||!BO)){Ac=Ac-Aj.Ar[0];Ac=((Ac*DC[0])/Fh[0])|0;Ac=Ac-DC[0];
}else Ac=Ac-Aj.Ar[2];Ae=Ae+Ao[0];Ac=Ac+Ao[2];if(!FY){if(BO&&!BP)Ac=Ae+Bh;else if(
!BO&&BP)Ae=Ac-Bh;else{Ae=Ae+((((Ac-Ae)-Bh)/2)|0);Ac=Ae+Bh;}}}else{Ac=Ac-Aj.Ar[2];
Ae=Ae+Ao[0];Ac=Ac+Ao[2];}if(Fh[1]!==DC[1]){var BQ=((AX&0x10)===0x10);var BN=((AX&
0x20)===0x20);var FZ=((AX&0x2)===0x2);if(!BQ&&(FZ||!BN))Af=((Af*DC[1])/Fh[1])|0;
if(!BN&&(FZ||!BQ)){Ag=Ag-Aj.Ar[1];Ag=((Ag*DC[1])/Fh[1])|0;Ag=Ag-DC[1];}else Ag=Ag-
Aj.Ar[3];Af=Af+Ao[1];Ag=Ag+Ao[3];if(!FZ){if(BQ&&!BN)Ag=Af+AM;else if(!BQ&&BN)Af=
Ag-AM;else{Af=Af+((((Ag-Af)-AM)/2)|0);Ag=Af+AM;}}}else{Ag=Ag-Aj.Ar[3];Af=Af+Ao[1
];Ag=Ag+Ao[3];}}else{switch(EG){case 3:{Ae=Ao[0];Ac=Ae+Bh;}break;case 4:{Ac=Ao[2
];Ae=Ac-Bh;}break;case 1:{Af=Ao[1];Ag=Af+AM;}break;case 2:{Ag=Ao[3];Af=Ag-AM;}break;
default:;}if((EG===3)||(EG===4)){var BQ=((AX&0x10)===0x10);var BN=((AX&0x20)===0x20
);var FZ=((AX&0x2)===0x2);if(FZ){Af=Ao[1];Ag=Ao[3];}else if(BQ&&!BN){Af=Ao[1];Ag=
Af+AM;}else if(BN&&!BQ){Ag=Ao[3];Af=Ag-AM;}else{Af=Ao[1]+((((Ao[3]-Ao[1])-AM)/2)|
0);Ag=Af+AM;}}if((EG===1)||(EG===2)){var BO=((AX&0x4)===0x4);var BP=((AX&0x8)===
0x8);var FY=((AX&0x1)===0x1);if(FY){Ae=Ao[0];Ac=Ao[2];}else if(BO&&!BP){Ae=Ao[0];
Ac=Ae+Bh;}else if(BP&&!BO){Ac=Ao[2];Ae=Ac-Bh;}else{Ae=Ao[0]+((((Ao[2]-Ao[0])-Bh)
/2)|0);Ac=Ae+Bh;}}}Aj.isEmpty=(Ae>=Ac)||(Af>=Ag);Bh=(Ac-Ae)-1;AM=(Ag-Af)-1;var Ha=
Aj.DD[0];var Hb=Aj.DD[1];var Gt=(Aj.DD[2]-Ha)-1;var Gs=(Aj.DD[3]-Hb)-1;if(!Gt)Gt=
1;if(!Gs)Gs=1;if(((this.F&0x100)===0x100)){this.Dh=[Ae+((((Aj.LE[0]-Ha)*Bh)/Gt)|
0),Af+((((Aj.LE[1]-Hb)*AM)/Gs)|0)];this.Cy=[Ae+((((Aj.LF[0]-Ha)*Bh)/Gt)|0),Af+((((
Aj.LF[1]-Hb)*AM)/Gs)|0)];this.Di=[Ae+((((Aj.LG[0]-Ha)*Bh)/Gt)|0),Af+((((Aj.LG[1]-
Hb)*AM)/Gs)|0)];this.Cz=[Ae+((((Aj.LH[0]-Ha)*Bh)/Gt)|0),Af+((((Aj.LH[1]-Hb)*AM)/
Gs)|0)];}else{this.JC([Ae+((((Aj.LE[0]-Ha)*Bh)/Gt)|0),Af+((((Aj.LE[1]-Hb)*AM)/Gs
)|0)]);this.JD([Ae+((((Aj.LF[0]-Ha)*Bh)/Gt)|0),Af+((((Aj.LF[1]-Hb)*AM)/Gs)|0)]);
this.JE([Ae+((((Aj.LG[0]-Ha)*Bh)/Gt)|0),Af+((((Aj.LG[1]-Hb)*AM)/Gs)|0)]);this.JF([
Ae+((((Aj.LH[0]-Ha)*Bh)/Gt)|0),Af+((((Aj.LH[1]-Hb)*AM)/Gs)|0)]);this.Bl=Aj;}return[
Bh+1,AM+1];},L9:function(aOffset,MC){if(MC){this.Dh=B.abf(this.Dh,aOffset);this.
Cy=B.abf(this.Cy,aOffset);this.Di=B.abf(this.Di,aOffset);this.Cz=B.abf(this.Cz,aOffset
);}else{this.JC(B.abf(this.Dh,aOffset));this.JD(B.abf(this.Cy,aOffset));this.JE(
B.abf(this.Di,aOffset));this.JF(B.abf(this.Cz,aOffset));}},GetExtent:function(){
if(!!this.Bl&&this.Bl.isEmpty)return Bi;var Ae=this.Dh[0];var Af=this.Dh[1];var Ac=
this.Di[0];var Ag=this.Di[1];if((((this.Cz[0]!==Ae)||(this.Cy[1]!==Af))||(this.Cy[
0]!==Ac))||(this.Cz[1]!==Ag)){if(this.Cy[0]<Ae)Ae=this.Cy[0];if(this.Di[0]<Ae)Ae=
this.Di[0];if(this.Cz[0]<Ae)Ae=this.Cz[0];if(this.Cy[1]<Af)Af=this.Cy[1];if(this.
Di[1]<Af)Af=this.Di[1];if(this.Cz[1]<Af)Af=this.Cz[1];if(this.Dh[0]>Ac)Ac=this.Dh[
0];if(this.Cy[0]>Ac)Ac=this.Cy[0];if(this.Cz[0]>Ac)Ac=this.Cz[0];if(this.Dh[1]>Ag
)Ag=this.Dh[1];if(this.Cy[1]>Ag)Ag=this.Cy[1];if(this.Cz[1]>Ag)Ag=this.Cz[1];}else{
var tmp;if(Ac<Ae){tmp=Ae;Ae=Ac;Ac=tmp;}if(Ag<Af){tmp=Af;Af=Ag;Ag=tmp;}}return[Ae
,Af,Ac+1,Ag+1];},JF:function(C){var A;if(B.aaX(C,this.Cz))return;if(!!this.I&&((
this.F&0x1)===0x1))this.I.Al(this.GetClipping());this.Bl=null;this.Cz=C;if(!!this.
I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping());if((!!this.I&&((this.F&0x400
)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.
F|0x4000;B.pe([A=this.I,A.Dp],this);}},JE:function(C){var A;if(B.aaX(C,this.Di))
return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping());this.Bl=null;
this.Di=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping());if((!!
this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dp],this);}},JD:function(C){var A;
if(B.aaX(C,this.Cy))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));this.Bl=null;this.Cy=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dp],this);}},JC:function(
C){var A;if(B.aaX(C,this.Dh))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(
this.GetClipping());this.Bl=null;this.Dh=C;if(!!this.I&&((this.F&0x1)===0x1))this.
I.Al(this.GetClipping());if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dp],this
);}},NZ:function(Ej){var BB=B.abi(4,B.wf,null);var G=0;var BK=3;var Pg=false;var
Ph=false;BB.Set(0,this.Dh);BB.Set(1,this.Cy);BB.Set(2,this.Di);BB.Set(3,this.Cz);
while(G<4){var RW=BB.Get(G)[0];var Nk=BB.Get(G)[1];var We=BB.Get(BK)[0];var PR=BB.
Get(BK)[1];if(((Nk>Ej[1])!==(PR>Ej[1]))||((Nk<Ej[1])!==(PR<Ej[1]))){var Dq=((((We-
RW)*(Ej[1]-Nk))/(PR-Nk))|0)+RW;if(Ej[0]>Dq)Pg=!Pg;if(Ej[0]<Dq)Ph=!Ph;}BK=G;G=G+1;
}return Pg||Ph;},Sr:function(){return((((this.Dh[0]===this.Cz[0])&&(this.Cy[0]===
this.Di[0]))&&(this.Dh[1]===this.Cy[1]))&&(this.Di[1]===this.Cz[1]))||((((this.Dh[
0]===this.Cy[0])&&(this.Di[0]===this.Cz[0]))&&(this.Dh[1]===this.Cz[1]))&&(this.
Cy[1]===this.Di[1]));},_Init:function(aArg){E.AC._Init.call(this,aArg);this.__proto__=
E.KN;},_className:"Core::QuadView"};E.BD={M:B.wg,Lk:function(Ao,MF){var Aj=B._NewObject(
E.L7,0);Aj.DD=this.M;Aj.Ar=Ao;Aj.I0=MF;this.Bl=Aj;},LX:function(Ao,EG){var A;var
AX=this.DR;var Aj=this.Bl;var Ae=Aj.DD[0];var Af=Aj.DD[1];var Ac=Aj.DD[2];var Ag=
Aj.DD[3];var DC=[Ao[2]-Ao[0],Ao[3]-Ao[1]];var Bh=Ac-Ae;var AM=Ag-Af;if(!EG){var Fh=[(
A=Aj.Ar)[2]-A[0],A[3]-A[1]];Ae=Ae-Aj.Ar[0];Af=Af-Aj.Ar[1];if(Fh[0]!==DC[0]){var BO=((
AX&0x4)===0x4);var BP=((AX&0x8)===0x8);var FY=((AX&0x1)===0x1);if(!BO&&(FY||!BP)
)Ae=((Ae*DC[0])/Fh[0])|0;if(!BP&&(FY||!BO)){Ac=Ac-Aj.Ar[0];Ac=((Ac*DC[0])/Fh[0])|
0;Ac=Ac-DC[0];}else Ac=Ac-Aj.Ar[2];Ae=Ae+Ao[0];Ac=Ac+Ao[2];if(!FY){if(BO&&!BP)Ac=
Ae+Bh;else if(!BO&&BP)Ae=Ac-Bh;else{Ae=Ae+((((Ac-Ae)-Bh)/2)|0);Ac=Ae+Bh;}}}else{
Ac=Ac-Aj.Ar[2];Ae=Ae+Ao[0];Ac=Ac+Ao[2];}if(Fh[1]!==DC[1]){var BQ=((AX&0x10)===0x10
);var BN=((AX&0x20)===0x20);var FZ=((AX&0x2)===0x2);if(!BQ&&(FZ||!BN))Af=((Af*DC[
1])/Fh[1])|0;if(!BN&&(FZ||!BQ)){Ag=Ag-Aj.Ar[1];Ag=((Ag*DC[1])/Fh[1])|0;Ag=Ag-DC[
1];}else Ag=Ag-Aj.Ar[3];Af=Af+Ao[1];Ag=Ag+Ao[3];if(!FZ){if(BQ&&!BN)Ag=Af+AM;else
if(!BQ&&BN)Af=Ag-AM;else{Af=Af+((((Ag-Af)-AM)/2)|0);Ag=Af+AM;}}}else{Ag=Ag-Aj.Ar[
3];Af=Af+Ao[1];Ag=Ag+Ao[3];}}else{switch(EG){case 3:{Ae=Ao[0];Ac=Ae+Bh;}break;case
4:{Ac=Ao[2];Ae=Ac-Bh;}break;case 1:{Af=Ao[1];Ag=Af+AM;}break;case 2:{Ag=Ao[3];Af=
Ag-AM;}break;default:;}if((EG===3)||(EG===4)){var BQ=((AX&0x10)===0x10);var BN=((
AX&0x20)===0x20);var FZ=((AX&0x2)===0x2);if(FZ){Af=Ao[1];Ag=Ao[3];}else if(BQ&&!
BN){Af=Ao[1];Ag=Af+AM;}else if(BN&&!BQ){Ag=Ao[3];Af=Ag-AM;}else{Af=Ao[1]+((((Ao[
3]-Ao[1])-AM)/2)|0);Ag=Af+AM;}}if((EG===1)||(EG===2)){var BO=((AX&0x4)===0x4);var
BP=((AX&0x8)===0x8);var FY=((AX&0x1)===0x1);if(FY){Ae=Ao[0];Ac=Ao[2];}else if(BO&&
!BP){Ae=Ao[0];Ac=Ae+Bh;}else if(BP&&!BO){Ac=Ao[2];Ae=Ac-Bh;}else{Ae=Ao[0]+((((Ao[
2]-Ao[0])-Bh)/2)|0);Ac=Ae+Bh;}}}Aj.isEmpty=(Ae>=Ac)||(Af>=Ag);if(((this.F&0x100)===
0x100))this.M=[Ae,Af,Ac,Ag];else{this.P([Ae,Af,Ac,Ag]);this.Bl=Aj;}return[Ac-Ae,
Ag-Af];},L9:function(aOffset,MC){if(MC)this.M=B.abh(this.M,aOffset);else this.P(
B.abh(this.M,aOffset));},GetExtent:function(){return this.M;},P:function(C){var A;
if(B.aaY(C,this.M))return;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));this.Bl=null;this.M=C;if(!!this.I&&((this.F&0x1)===0x1))this.I.Al(this.GetClipping(
));if((!!this.I&&((this.F&0x400)===0x400))&&!((this.I.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dp],this);}},U5:function(
PQ){this.P(PQ);},SA:function(){return this.M;},_Init:function(aArg){E.AC._Init.call(
this,aArg);this.__proto__=E.BD;},_className:"Core::RectView"};E.L={Am:null,AD:null
,M0:null,Bq:null,E$:null,I3:null,CS:null,Dg:255,Le:0,Lh:0,Lg:0,Lf:0,Bu:function(
aArg){this.Be();},Ev:function(Bo,aClip,aOffset,Bg,aBlend){var A;Bg=((Bg+1)*this.
Dg)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.Vk(Bo,aClip,B.abf(aOffset,this.M.
slice(0,2)),Bg,aBlend);},GetClipping:function(){var A;var H=this.M;H=[].concat(H[
0]-this.Lf,H.slice(1,4));H=B.abP(H,H[1]-this.Lh);H=B.abN(H,H[2]+this.Lg);H=[].concat(
H.slice(0,3),H[3]+this.Le);if(((this.F&0x80000)===0x80000)){var I8=Bi;var K;for(
K=this.Am;!!K;K=K.Q)if(((K.F&0x1)===0x1))I8=B.wC(I8,K.GetClipping());H=B.wC(H,B.
abh(I8,this.M.slice(0,2)));}return H;},Fj:function(Ay,W,C8,E1,EI,Go){var A;var K=
this.AD;var IU=null;var T=Bi;var D0=null;var Ps=!!this.E$&&(!!this.E$.DX||!!this.
E$.Am);if(((A=B.lb(Ay,this.M))[0]>=A[2])||(A[1]>=A[3]))return null;Ay=B.abg(Ay,this.
M.slice(0,2));if(!!EI){K=EI;while(!!K&&(K.I!==this))K=K.I;}while(!!K){if(((K.F&0x400
)===0x400)&&!D0){D0=K.S;while(!!D0&&!((D0.F&0x200)===0x200))D0=D0.S;if(!!D0)T=B.
lb(Ay,D0.GetExtent());else T=Bi;}if(D0===K){D0=null;T=Bi;}if((!!E1&&!!(E.L.isPrototypeOf(
K)?K:null))||((((((K.F&0x8)===0x8)&&((K.F&0x10)===0x10))&&!((K.F&0x40000)===0x40000
))&&!((K.F&0x20000)===0x20000))&&(!((K.F&0x10000)===0x10000)||((this.Bq.Au===K)&&
!Ps)))){var DD=K.GetExtent();var MR=E1;var IR=null;if(MR===K)MR=null;if(((K.F&0x400
)===0x400)){if(!(((A=B.lb(DD,T))[0]>=A[2])||(A[1]>=A[3])))IR=K.Fj(T,W,C8,MR,EI,Go
);}else if(!(((A=B.lb(DD,Ay))[0]>=A[2])||(A[1]>=A[3]))||(E1===K))IR=K.Fj(Ay,W,C8
,MR,EI,Go);K=K.S;if(!!IR){if(!IU||((IR.Kj<IU.Kj)&&(IR.Kj>=0)))IU=IR;if(!IR.Kj)K=
null;}}else K=K.S;EI=null;}return IU;},LV:function(Ay){var A;var B_;var K=this.Am;
var IP=Bi;var LD=true;var result=(Ay=B_=B.abg(Ay,this.M.slice(0,2)),B_);while(!!
K){if(((K.F&0x200)===0x200)){var J$=(E.Fw.isPrototypeOf(K)?K:null);IP=B.lb(Ay,J$.
M);LD=((J$.F&0x1)===0x1);}if(((K.F&0x1)===0x1)){if(((K.F&0x400)===0x400)){if(LD){
var T=B.lb(K.GetClipping(),IP);if(!((T[0]>=T[2])||(T[1]>=T[3])))result=B.wC(result
,K.LV(T));}}else{var T=B.lb(K.GetClipping(),Ay);if(!((T[0]>=T[2])||(T[1]>=T[3]))
)result=B.wC(result,K.LV(T));}}K=K.Q;}return B.lb(B.abh(result,this.M.slice(0,2)
),this.M);},At:function(DU,EF){var A;var M2=this.F;if((!!this.I&&((this.F&0x80001
)===0x80001))&&((EF&0x80000)===0x80000))this.I.Al(this.GetClipping());E.BD.At.call(
this,DU,EF);if(((!!this.I&&((this.F&0x1)===0x1))&&((DU&0x80000)===0x80000))&&!((
M2&0x80000)===0x80000))this.I.Al(this.GetClipping());var E_=this.F^M2;if(!!this.
CS&&((E_&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CS.At(0x40,0x0);else this.
CS.At(0x0,0x40);}if(!!this.Bq&&((E_&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((
this.Bq.Au.F&0x14)===0x14))this.Bq.Au.At(0x40,0x0);else this.Bq.Au.At(0x0,0x40);
}if(((E_&0x10)===0x10)){var K;for(K=this.Am;!!K;K=K.Q)if((((K.F&0x300000)===0x300000
)&&!((K.F&0x80)===0x80))&&(!((K.F&0x10000)===0x10000)||(this.Bq.Au===K)))K.At(DU&
0x10,EF&0x10);}if(!!E_){this.F=this.F|0x8000;B.pe([this,this.Nh],this);}},P:function(
C){var A;if(B.aaY(C,this.M))return;var Id=[(A=this.M)[2]-A[0],A[3]-A[1]];var Pv=[
C[2]-C[0],C[3]-C[1]];var Kb=!B.aaX(Id,Pv);E.BD.P.call(this,C);if((Kb&&(Id[0]>0))&&(
Id[1]>0)){var Ar=[].concat(A4,Id);var K=this.Am;while(!!K){if((!K.Bl&&(K.DR!==0x14
))&&!((K.F&0x400)===0x400))K.Lk(Ar,null);K=K.Q;}}if(Kb){this.F=this.F|0x5000;B.pe([
this,this.Nh],this);}},PJ:function(Az){var Rk=(E.KeyEvent.isPrototypeOf(Az)?Az:null
);var FA=this.M0;if(!Rk)return null;while(!!FA&&(!FA.A_||!FA.BV(Rk)))FA=FA.Q;return FA;
},Vk:function(Bo,aClip,aOffset,Bg,aBlend){var A;var K=this.Am;var IP=Bi;var LD=true;
this.Se(Bo,aClip,aOffset,Bg,aBlend);while(!!K){if(((K.F&0x200)===0x200)){var J$=(
E.Fw.isPrototypeOf(K)?K:null);LD=((J$.F&0x1)===0x1);IP=aClip;if(!((J$.F&0x80000)===
0x80000))IP=B.lb(IP,B.abh(J$.M,aOffset));}if(((K.F&0x1)===0x1)){if(((K.F&0x400)===
0x400)){if(LD){var T=B.lb(B.abh(K.GetClipping(),aOffset),IP);if(!((T[0]>=T[2])||(
T[1]>=T[3])))K.Ev(Bo,T,aOffset,Bg,aBlend);}}else{var T=B.lb(B.abh(K.GetClipping(
),aOffset),aClip);if(!((T[0]>=T[2])||(T[1]>=T[3])))K.Ev(Bo,T,aOffset,Bg,aBlend);
}}K=K.Q;}this.Sh(Bo,aClip,aOffset,Bg,aBlend);},VZ:function(){var A;var Pf=((this.
F&0x1000)===0x1000);var Hc=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];var Gu=false;var J6=
Bi;var Pd=Bi;var K=this.AD;var D0=null;while(!!K){if(((K.F&0x800)===0x800)){Gu=true;
K.F=K.F&~0x800;}if(Gu&&((K.F&0x200)===0x200))Gu=false;K=K.S;}Gu=false;K=this.Am;
if(Pf){this.F=this.F&~0x1000;Pf=!((Hc[0]>=Hc[2])||(Hc[1]>=Hc[3]));}this.F=this.F|
0x2000;while(!!K){if(((K.F&0x400)===0x400)){if(!!K.Bl&&(K.Bl.I0!==D0))K.Bl=null;
if((!K.Bl&&Gu)&&(K.DR!==0x14))K.Lk(Pd,D0);}if(!!K.Bl){if(Pf&&!((K.F&0x400)===0x400
))K.LX(Hc,0);if(Gu&&((K.F&0x400)===0x400))K.LX(Pd,0);}if(((K.F&0x200)===0x200)){
Gu=((K.F&0x1000)===0x1000);D0=(E.Fw.isPrototypeOf(K)?K:null);if(Gu){K.F=K.F&~0x1000;
J6=D0.M;Pd=J6;Gu=!((J6[0]>=J6[2])||(J6[1]>=J6[3]));}if(Gu)this.Al(D0.M);}K=K.Q;}
this.F=this.F&~0x2000;this.Mw([Hc[2]-Hc[0],Hc[3]-Hc[1]]);},Dp:function(Y){B.pe([
this,this.Nh],this);},Nh:function(Y){var A;var Wd=((this.F&0x1000)===0x1000);if(((
this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;this.VZ();}if(((this.F&0x8000)===
0x8000)||Wd){this.F=this.F&~0x8000;this.Gk(this.F);}},Df:function(C){var A;if(!!
C&&(C.I!==this))throw new Error(Dv);if(!!C&&!((C.F&0x14)===0x14))C=null;if(!!C&&((
C.F&0x10000)===0x10000))C=null;if(C===this.CS)return;if(!!this.CS)this.CS.At(0x0
,0x60);this.CS=C;if(!!C){if(((this.F&0x40)===0x40))C.At(0x60,0x0);else C.At(0x20
,0x0);}},SB:function(){var A;return((this.F&0x100000)===0x100000);},Ap:function(
C){if(C)this.At(0x100000,0x0);else this.At(0x0,0x100000);},EY:function(C){var A;
if(C>255)C=255;if(C<0)C=0;if(C===this.Dg)return;this.Dg=C;if(!!this.I&&((this.F&
0x1)===0x1))this.I.Al(this.GetClipping());},OY:function(PQ){this.EY(PQ);},Jy:function(
){var A;return((this.F&0x1)===0x1);},Aq:function(C){if(C)this.At(0x1,0x0);else this.
At(0x0,0x1);},ExtendClipping:function(IK,IL,IM,IJ){var A;var La=this.M;var DW=La;
if(IK<0)IK=0;if(IK>255)IK=255;if(IL<0)IL=0;if(IL>255)IL=255;if(IM<0)IM=0;if(IM>255
)IM=255;if(IJ<0)IJ=0;if(IJ>255)IJ=255;DW=[].concat(DW[0]-(Math.max(IK,this.Lf)&0xFF
),DW.slice(1,4));DW=B.abN(DW,DW[2]+(Math.max(IL,this.Lg)&0xFF));DW=B.abP(DW,DW[1
]-(Math.max(IM,this.Lh)&0xFF));DW=[].concat(DW.slice(0,3),DW[3]+(Math.max(IJ,this.
Le)&0xFF));if(IK!==this.Lf){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000
)===0x80000)){var H=DW;H=B.abN(H,La[0]);this.I.Al(H);}this.Lf=IK&0xFF;}if(IL!==this.
Lg){if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=DW;
H=[].concat(La[2],H.slice(1,4));this.I.Al(H);}this.Lg=IL&0xFF;}if(IM!==this.Lh){
if((!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=DW;H=[
].concat(H.slice(0,3),La[1]);this.I.Al(H);}this.Lh=IM&0xFF;}if(IJ!==this.Le){if((
!!this.I&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var H=DW;H=B.abP(
H,La[3]);this.I.Al(H);}this.Le=IJ&0xFF;}},Sh:function(Bo,aClip,aOffset,Bg,aBlend
){},Se:function(Bo,aClip,aOffset,Bg,aBlend){},GetMaximalSize:function(){return E0;
},GetMinimalSize:function(){return A4;},QC:function(B1,Dw,FR,E3,E5,IN,Ei,E4,C7,C5
,C6){var A;if(!this.Bq){this.JM(B1,Dw,FR,E3,E5,null,null,C7,C5,C6);return;}var Ic=
this.Bq;var B5=Ic.Q;if(((B1.F&0x10000)===0x10000)&&(this.Bq.Au!==B1))throw new Error(
Ee);var FW=B._NewObject(E.NA,0);var DZ=Ic.DZ;var D6=null;var CD=null;if(!!B5){D6=
B5.D6;CD=B5.CD;}if(!!B5&&!!Ic.I2)D6=Ic.I2;if(!!B5&&!!Ei)CD=Ei;if(!!IN)DZ=IN;if(!
Dw)Dw=B._GetAutoObject(B.acj.JO);if(!FR)FR=Dw;if(!E5)E5=E3;if(!E3)E3=E5;FW.DZ=FR;
FW.CD=E3;FW.D6=E5;FW.I2=E4;FW.Au=B1;FW.Q=this.Bq.Q;this.Bq.Q=null;this.Bq=FW;if(
this.CS===B1)this.Df(null);Ic.Au.At(0x0,0x10040);if(((this.F&0x40)===0x40)&&((B1.
F&0x4)===0x4))B1.At(0x10040,0x0);else B1.At(0x10000,0x0);if(!!CD){this.Dd(B5.Au,
CD.Jf(),null,null,C6);this.Dd(Ic.Au,DZ.GA(),null,null,true);this.Dd(FW.Au,Dw.GB(
),C7,C5,true);}else if(!!D6){this.Dd(B5.Au,D6.Jg(),null,null,C6);this.Dd(Ic.Au,DZ.
GA(),null,null,true);this.Dd(FW.Au,Dw.GB(),C7,C5,true);}else if(!!DZ){this.Dd(Ic.
Au,DZ.GA(),null,null,C6);this.Dd(FW.Au,Dw.GB(),C7,C5,true);}else this.Dd(FW.Au,Dw.
GB(),C7,C5,C6);},Km:function(B1,IN,Ei,E4,C7,C5,C6){var A;if(!this.Bq)return;if(!
B1)return;var Cf=this.Bq;var B5=this.Bq.Q;var I6=null;while((!!Cf&&(Cf.Au!==B1))&&
!!Cf.Q){I6=Cf;Cf=B5;B5=Cf.Q;}if(!Cf||(Cf.Au!==B1))throw new Error(FQ);if(!I6){this.
Bq=B5;Cf.Q=null;}else{I6.Q=B5;Cf.Q=null;}Cf.Au.At(0x0,0x10040);if(((((this.F&0x10
)===0x10)&&!!B5)&&!I6)&&((B5.Au.F&0x200000)===0x200000))B5.Au.At(0x10,0x0);if(((((
this.F&0x40)===0x40)&&!!B5)&&!I6)&&((B5.Au.F&0x4)===0x4))B5.Au.At(0x40,0x0);var DZ=
Cf.DZ;var D6=null;var CD=null;if(!!B5)D6=B5.D6;if(!!B5&&!!Cf.I2)D6=Cf.I2;if(!!B5&&
!!E4)D6=E4;if(!!I6&&!!B5)CD=B5.CD;if((!!I6&&!!B5)&&!!Ei)CD=Ei;if(!!IN)DZ=IN;if(!
!CD){this.Dd(B5.Au,CD.Jf(),null,null,C6);this.Dd(Cf.Au,DZ.GA(),C7,C5,true);}else
if(!!D6){this.Dd(B5.Au,D6.Jg(),null,null,C6);this.Dd(Cf.Au,DZ.GA(),C7,C5,true);}
else this.Dd(Cf.Au,DZ.GA(),C7,C5,C6);},JM:function(B1,Dw,FR,E3,E5,Ei,E4,C7,C5,C6
){var A;if(!B1)return;if(!!this.Bq&&(this.Bq.Au===B1)){this.QC(B1,Dw,FR,E3,E5,null
,Ei,E4,C7,C5,C6);return;}if(((B1.F&0x10000)===0x10000))throw new Error(Ee);var Cf=
B._NewObject(E.NA,0);if(!!this.Bq&&!this.Bq.CD){if(!E4)E4=Ei;if(!Ei)Ei=E4;}var CD=
null;if(!!this.Bq)CD=this.Bq.CD;if(!!this.Bq&&!!Ei)CD=Ei;if(!Dw)Dw=B._GetAutoObject(
B.acj.JO);if(!FR)FR=Dw;if(!E5)E5=E3;if(!E3)E3=E5;Cf.DZ=FR;Cf.CD=E3;Cf.D6=E5;Cf.I2=
E4;if(this.CS===B1)this.Df(null);if(!!this.Bq&&((this.Bq.Au.F&0x200000)===0x200000
))this.Bq.Au.At(0x0,0x10);if(!!this.Bq)this.Bq.Au.At(0x0,0x40);if(((this.F&0x40)===
0x40)&&((B1.F&0x4)===0x4))B1.At(0x10040,0x0);else B1.At(0x10000,0x0);Cf.Au=B1;Cf.
Q=this.Bq;this.Bq=Cf;if(!!CD){this.Dd(this.Bq.Q.Au,CD.Jf(),null,null,C6);this.Dd(
B1,Dw.GB(),C7,C5,true);}else this.Dd(B1,Dw.GB(),C7,C5,C6);},P5:function(Ej){var tmp=
this;while(!!tmp){Ej=B.abe(Ej,tmp.M.slice(0,2));tmp=tmp.I;}return Ej;},Sq:function(
Ej){var tmp=this;while(!!tmp){Ej=B.abf(Ej,tmp.M.slice(0,2));tmp=tmp.I;}return Ej;
},DispatchEvent:function(Az){var A;var K=this.CS;var An=(E.L.isPrototypeOf(K)?K:
null);var Bk=null;var Ps=!!this.E$&&(!!this.E$.DX||!!this.E$.Am);if(!!K&&((((K.F&
0x10000)===0x10000)||((K.F&0x40000)===0x40000))||((K.F&0x20000)===0x20000))){K=null;
An=null;}if(!!this.Bq&&!Ps)Bk=this.Bq.Au.DispatchEvent(Az);if(!Bk&&!!An)Bk=An.DispatchEvent(
Az);else if(!Bk&&!!K)Bk=K.BV(Az);if(!Bk)Bk=this.BV(Az);if(!Bk)Bk=this.PJ(Az);return Bk;
},BroadcastEventAtPosition:function(Az,QY,aFilter){var A;var K=this.AD;var Bk=null;
while(!!K&&!Bk){if((!aFilter||((A=aFilter)&&((K.F&A)===A)))&&B.wa(K.GetExtent(),
QY)){var An=(E.L.isPrototypeOf(K)?K:null);if(!!An)Bk=An.BroadcastEventAtPosition(
Az,B.abe(QY,An.M.slice(0,2)),aFilter);else Bk=K.BV(Az);}K=K.S;}if(!Bk)Bk=this.BV(
Az);return Bk;},BroadcastEvent:function(Az,aFilter){var A;var K=this.AD;var Bk=null;
while(!!K&&!Bk){if(!aFilter||((A=aFilter)&&((K.F&A)===A))){var An=(E.L.isPrototypeOf(
K)?K:null);if(!!An)Bk=An.BroadcastEvent(Az,aFilter);else Bk=K.BV(Az);}K=K.S;}if(
!Bk)Bk=this.BV(Az);if(!Bk)Bk=this.PJ(Az);return Bk;},Mw:function(aSize){},Gk:function(
DV){},Be:function(){this.F=this.F|0x8000;B.pe([this,this.Nh],this);},Al:function(
Ay){var A;var An=this;while(!!An&&!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){if(!An.I&&(
An!==this)){An.Al(Ay);return;}if(!((An.F&0x1)===0x1))return;var H=An.M;Ay=B.abh(
Ay,H.slice(0,2));if(!((An.F&0x80000)===0x80000)){H=[].concat(H[0]-An.Lf,H.slice(
1,4));H=B.abP(H,H[1]-An.Lh);H=B.abN(H,H[2]+An.Lg);H=[].concat(H.slice(0,3),H[3]+
An.Le);Ay=B.lb(Ay,H);}An=An.I;}},NM:function(O,aFilter){var A;if(!O||(O.I!==this
))return null;var Ib=O.Q;var Ig=O.S;var Lw=0x10000;if(((aFilter&0x10000)===0x10000
))Lw=0x0;while(!!Ib||!!Ig){if((!!Ib&&(!aFilter||((A=aFilter)&&((Ib.F&A)===A))))&&(
!Lw||!((A=Lw)&&((Ib.F&A)===A))))return Ib;if((!!Ig&&(!aFilter||((A=aFilter)&&((Ig.
F&A)===A))))&&(!Lw||!((A=Lw)&&((Ig.F&A)===A))))return Ig;if(!!Ib)Ib=Ib.Q;if(!!Ig
)Ig=Ig.S;}return null;},Dd:function(Cl,Bd,C7,C5,C6){var A;if(!Cl)return;if(!Bd)throw new
Error(IE);if((!!Bd.L||!!Bd.I)||!!Bd.EO)throw new Error(JZ);if(!!Cl.I&&(Cl.I!==this
))throw new Error(IF);if(!this.E$)this.E$=B._NewObject(E.QD,0);Bd.I=this;Bd.L=Cl;
Bd.M3=C5;Bd.Px=C7;if(!!Cl.I3)Cl.I3.EO.Ty(Cl.I3);Cl.I3=Bd;Cl.F=Cl.F|0x20000;if((C6&&
!!this.E$.AD)&&!this.E$.AD.NW())(B.acj.L3.isPrototypeOf(A=this.E$.AD)?A:null).PS(
Bd);else{var EO=B._NewObject(B.acj.L3,0);EO.PS(Bd);this.E$.TB(EO,false);}},Or:function(
O){var A;if(!O)throw new Error(IG);if(O.I!==this)throw new Error(G6);if(!O.Q)return;
var CW=this.AD;var HD=O.ED;while(!!CW&&(CW.ED>HD))CW=CW.S;if(((CW===O)||!CW)||(CW.
Q===O))return;if(((O.F&0x401)===0x401)){if(!!O.S&&!!O.Bl)O.S.F=O.S.F|0x800;O.F=O.
F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dp],this);}if(((O.F&0x200)===0x200)
){if(!!O.S)O.S.F=O.S.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dp],this);}if(
!!O.S)O.S.Q=O.Q;else this.Am=O.Q;O.Q.S=O.S;O.S=CW;O.Q=CW.Q;CW.Q=O;if(!!O.Q)O.Q.S=
O;else this.AD=O;if(((O.F&0x1)===0x1))this.Al(O.GetClipping());},Qv:function(O,Eh
){var A;if(!O)throw new Error(IG);if(O.I!==this)throw new Error(G6);var CW=O;var
B2=O;var HD=O.ED;while(((Eh>0)&&!!CW.Q)&&(CW.Q.ED<=HD)){CW=CW.Q;Eh=Eh-1;}while(((
Eh<0)&&!!B2.S)&&(B2.S.ED>=HD)){B2=B2.S;Eh=Eh+1;}if((CW===O)&&(B2===O))return;if(((
O.F&0x401)===0x401)){if(!!O.S&&!!O.Bl)O.S.F=O.S.F|0x800;O.F=O.F|0x800;this.F=this.
F|0x4000;B.pe([this,this.Dp],this);}if(((O.F&0x200)===0x200)){if(!!O.S)O.S.F=O.S.
F|0x800;O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dp],this);}if(!!O.S)O.
S.Q=O.Q;if(!!O.Q)O.Q.S=O.S;if(this.Am===O)this.Am=O.Q;if(this.AD===O)this.AD=O.S;
if(CW!==O){O.Q=CW.Q;O.S=CW;CW.Q=O;if(!!O.Q)O.Q.S=O;}if(B2!==O){O.Q=B2;O.S=B2.S;B2.
S=O;if(!!O.S)O.S.Q=O;}if(!O.Q)this.AD=O;if(!O.S)this.Am=O;if(((O.F&0x1)===0x1))this.
Al(O.GetClipping());},Ed:function(O){var A;if(!O)throw new Error(OF);if(O.I!==this
)throw new Error(G6);if((((O.F&0x401)===0x401)&&!!O.S)&&!!O.Bl){O.S.F=O.S.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.Dp],this);}if(((O.F&0x200)===0x200)){if(!!O.
S)O.S.F=O.S.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dp],this);}O.Bl=null;if(
this.CS===O)this.Df(this.NM(O,0x14));if(!!O.S)O.S.Q=O.Q;if(!!O.Q)O.Q.S=O.S;if(this.
Am===O)this.Am=O.Q;if(this.AD===O)this.AD=O.S;O.I=null;O.Q=null;O.S=null;if((!((
O.F&0x10)===0x10)&&((O.F&0x100000)===0x100000))&&!((this.F&0x80)===0x80))O.At(0x10
,0x0);if(((O.F&0x1)===0x1))this.Al(O.GetClipping());},U:function(O,Eh){var A;if(
!O)throw new Error(OG);if(!!O.I)throw new Error(Mx);var B2=null;var HD=O.ED;if(((
Eh<0)&&!!this.AD)&&(this.AD.ED>=HD)){B2=this.AD;Eh=Eh+1;}while((((Eh<0)&&!!B2)&&
!!B2.S)&&(B2.S.ED>=HD)){B2=B2.S;Eh=Eh+1;}if((!B2&&!!this.AD)&&(this.AD.ED>HD))B2=
this.AD;while((!!B2&&!!B2.S)&&(B2.S.ED>HD))B2=B2.S;if(!B2){O.I=this;O.S=this.AD;
if(!!this.AD)this.AD.Q=O;if(!this.Am)this.Am=O;this.AD=O;}else{O.I=this;O.S=B2.S;
O.Q=B2;B2.S=O;if(!!O.S)O.S.Q=O;else this.Am=O;}if(((O.F&0x1)===0x1))this.Al(O.GetClipping(
));if(((O.F&0x80)===0x80)&&(B.aam().So()===O))O.At(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((O.F&0x200010)===0x200010))O.At(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((O.F&0x10)===0x10))&&((O.F&0x100000)===0x100000))O.At(0x10,0x0);if(((!this.
CS&&((O.F&0x4)===0x4))&&((O.F&0x10)===0x10))&&!((O.F&0x10000)===0x10000))this.Df(
O);if(((O.F&0x401)===0x401)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Dp],this);}if(((O.F&0x200)===0x200)){O.F=O.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.Dp],this);}},KC:function(){return this.Dg;},_Init:function(aArg){E.BD._Init.
call(this,aArg);this.__proto__=E.L;this.F=0x10001F;this.Bu(aArg);},_Mark:function(
D){var A;E.BD._Mark.call(this,D);if((A=this.Am)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.M0)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Bq)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
E$)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I3)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.CS)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};
E.Root={D5:null,B4:null,BA:B.abi(10,null,null),J3:null,G_:null,LR:0,BI:0,CB:B.abi(
10,0,null),MQ:B.abi(10,B.wg,null),E9:B.abi(10,0,null),Gr:B.abi(10,B.wf,null),J5:
B.abi(10,0,null),G9:B.abi(10,B.wf,null),E8:B.abi(10,B.wf,null),DY:B.abi(10,B.wf,
null),FS:B.abi(10,B.wf,null),AW:0,MT:0,MS:0,Db:B.abi(4,0,null),Ca:B.abi(4,B.wg,null
),B$:0,Lq:0,J7:0,Lj:true,Bu:function(aArg){if(!!!this.J){var obj=this;B.abD(obj);
}},De:function(){return this;},Ev:function(Bo,aClip,aOffset,Bg,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)Bo.NL(aClip,B.abh(B.abh(aClip,aOffset
),this.M.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);E.L.Ev.call(
this,Bo,aClip,aOffset,Bg,aBlend);},At:function(DU,EF){var A;E.L.At.call(this,DU,
EF);if(!this.I&&(((DU&0x1)===0x1)||((EF&0x1)===0x1)))this.Al([0,0,(A=this.M)[2]-
A[0],A[3]-A[1]]);if(!this.I&&(((DU&0x2)===0x2)||((EF&0x2)===0x2)))this.Al([0,0,(
A=this.M)[2]-A[0],A[3]-A[1]]);},Df:function(C){if((C!==null)||!C)E.L.Df.call(this
,C);},EY:function(C){var A;var EM=this.Dg;E.L.EY.call(this,C);if(((EM!==this.Dg)&&
!this.I)&&((this.F&0x1)===0x1))this.Al([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},DispatchEvent:
function(Az){if(!!Az){Az.Kx=!!this.BI;if(!!this.BI)Az.AG=this.BI;}var Bk=null;if(
!!this.B4){Bk=this.B4.Au.DispatchEvent(Az);if(!Bk)Bk=this.BV(Az);if(!Bk)Bk=this.
PJ(Az);this.BI=0;return Bk;}Bk=E.L.DispatchEvent.call(this,Az);this.BI=0;return Bk;
},BroadcastEvent:function(Az,aFilter){if(!!Az){Az.Kx=!!this.BI;if(!!this.BI)Az.AG=
this.BI;}var Bk=E.L.BroadcastEvent.call(this,Az,aFilter);this.BI=0;return Bk;},Al:
function(Ay){var A;if(this.LR>0)throw new Error(OH);var fullScreenUpdate=false;fullScreenUpdate=
B.m7;if(fullScreenUpdate)Ay=[0,0,(A=this.M)[2]-A[0],A[3]-A[1]];if(!!this.I){E.L.
Al.call(this,Ay);return;}Ay=B.lb(B.abh(Ay,this.M.slice(0,2)),this.M);if((Ay[0]>=
Ay[2])||(Ay[1]>=Ay[3]))return;var G;for(G=0;G<this.B$;G=G+1)if(!(((A=B.lb(this.Ca.
Get(G),Ay))[0]>=A[2])||(A[1]>=A[3]))){this.Ca.Set(G,B.wC(this.Ca.Get(G),Ay));this.
Db.Set(G,B.aaH(this.Ca.Get(G)));return;}if(this.B$<3){this.Ca.Set(this.B$,Ay);this.
Db.Set(this.B$,B.aaH(Ay));this.B$=this.B$+1;return;}var BK;var D4;var Lp=0;var Lr=
0;var Q1=2147483647;this.Ca.Set(this.B$,Ay);this.Db.Set(this.B$,B.aaH(Ay));for(BK=
0;BK<=this.B$;BK=BK+1)for(D4=BK+1;D4<=this.B$;D4=D4+1){var Ng=B.aaH(B.wC(this.Ca.
Get(BK),this.Ca.Get(D4)));var RG=((Ng<<8)/(this.Db.Get(BK)+this.Db.Get(D4)))|0;if(
RG<Q1){Q1=RG;Lp=BK;Lr=D4;}}this.Ca.Set(Lp,B.wC(this.Ca.Get(Lp),this.Ca.Get(Lr)));
this.Db.Set(Lp,B.aaH(this.Ca.Get(Lp)));if(Lr!==this.B$){this.Ca.Set(Lr,this.Ca.Get(
this.B$));this.Db.Set(Lr,this.Db.Get(this.B$));}},Vi:function(){var CK=B._NewObject(
E.Kn,0);CK.Kx=!!this.BI;if(!!this.BI)CK.AG=this.BI;return CK;},IQ:function(){var
CK=B._NewObject(E.GC,0);CK.Kx=!!this.BI;if(!!this.BI)CK.AG=this.BI;return CK;},J4:
function(){var CK=B._NewObject(E.Ki,0);CK.Kx=!!this.BI;if(!!this.BI)CK.AG=this.BI;
return CK;},Vj:function(Y){var G;var IU=false;for(G=0;G<10;G=G+1)if(!!this.BA.Get(
G)){var Z=this.DY.Get(G);var An=this.BA.Get(G).I;while(!!An&&(An!==this)){Z=B.abe(
Z,An.M.slice(0,2));An=An.I;}if(!An&&(this.BA.Get(G)!==this)){var tmp=this.BA.Get(
G);this.AW=G;this.BA.Set(G,null);tmp.BV(this.IQ().InitializeUp(G,this.G9.Get(G),
this.Gr.Get(G),this.E9.Get(G),this.CB.Get(G)+1,this.E8.Get(G),false,this.DY.Get(
G),this.FS.Get(G)));this.BroadcastEvent(this.J4().InitializeUp(G,this.CB.Get(G)+
1,false,tmp,this.DY.Get(G)),0x18);}else{this.E9.Set(G,(this.G_.AG-this.J5.Get(G)
)|0);if(this.E9.Get(G)<10)this.E9.Set(G,10);this.AW=G;this.BA.Get(G).BV(this.IQ(
).InitializeHold(G,Z,this.Gr.Get(G),this.E9.Get(G),this.CB.Get(G)+1,this.E8.Get(
G),this.DY.Get(G),this.FS.Get(G)));IU=true;}}if(!IU)this.G_.Ap(false);},GetFPS:function(
){var ticksCount=0;var Rb=0;ticksCount=((new Date).getTime()-B.v$)|0;if(!!this.MT&&(
ticksCount>this.MT))Rb=((this.MS*1000)/((ticksCount-this.MT)|0))|0;this.MS=0;this.
MT=ticksCount;return Rb;},Update:function(){var A;if(!this.J3)this.J3=B._NewObject(
B.Graphics.Canvas,0);this.J3.Qh([(A=this.M)[2]-A[0],A[3]-A[1]]);this.J3.Update();
return this.UpdateGE20(this.J3);},UpdateGE20:function(Bo){if(!this.BeginUpdate()
)return Bi;var Gx=this.UpdateCanvas(Bo,A4);this.EndUpdate();return Gx;},EndUpdate:
function(){if(this.B$>0){this.MS=this.MS+1;this.B$=0;}},UpdateCanvas:function(Bo
,aOffset){var A;var Gx=Bi;var Vc=[].concat(aOffset,B.abf(Bo.FrameSize,aOffset));
var G;var BK=this.B$;this.LR=this.LR+1;Bo.Au=this;for(G=0;(G<BK)&&(G<4);G=G+1)if(
this.Db.Get(G)>0){this.Ev(Bo,B.abg(this.Ca.Get(G),aOffset),[-aOffset[0],-aOffset[
1]],255,true);Gx=B.wC(Gx,B.lb(Vc,this.Ca.Get(G)));}else BK=BK+1;Bo.Au=null;this.
LR=this.LR-1;if(!((Gx[0]>=Gx[2])||(Gx[1]>=Gx[3])))return B.abg(Gx,aOffset);else return Gx;
},GetUpdateRegion:function(MG){var G;var BK=this.B$;if(MG<0)return Bi;for(G=0;(G<
BK)&&(G<4);G=G+1)if(!this.Db.Get(G)){BK=BK+1;MG=MG+1;}else if(G===MG)return this.
Ca.Get(G);return Bi;},BeginUpdate:function(){var A;var G;if(!!this.B$&&!B.aaY(this.
Ca.Get(0),[0,0,(A=this.M)[2]-A[0],A[3]-A[1]])){var RR=B.abi(3,B.wg,null);var RQ=
this.B$;for(G=0;G<RQ;G++)RR.Set(G,this.Ca.Get(G));for(G=0;G<RQ;G++){var RH=B.abh(
RR.Get(G),this.M.slice(0,2));var RI=this.LV(RH);if(!B.aaY(RH,RI))this.Al(B.abg(RI
,this.M.slice(0,2)));}}var BK;var D4;for(BK=0;BK<(this.B$-1);BK++)if(this.Db.Get(
BK)>0)for(D4=BK+1;D4<this.B$;D4++)if(this.Db.Get(D4)>0){var Ng=B.aaH(B.wC(this.Ca.
Get(BK),this.Ca.Get(D4)));if(((Ng-this.Db.Get(BK))-this.Db.Get(D4))<0){this.Ca.Set(
BK,B.wC(this.Ca.Get(BK),this.Ca.Get(D4)));this.Db.Set(BK,Ng);this.Db.Set(D4,0);}
}for(G=this.B$-1;G>=0;G--)if(!this.Db.Get(G))this.B$=this.B$-1;return this.B$;},
DoesNeedUpdate:function(){if(this.B$>0)return true;return false;},Initialize:function(
aSize){this.P([].concat(A4,aSize));if(this.Lj)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Al(this.M);return this;},SetRootFocus:function(O1){if(O1===this.Lj)return false;
this.Lj=O1;if(!O1){if(!!this.B4)this.B4.Au.At(0x0,0x40);else this.At(0x0,0x40);}
else if(!!this.B4)this.B4.Au.At(0x40,0x0);else this.At(0x40,0x0);return true;},SetUserInputTimestamp:
function(Va){this.BI=Va;},DriveKeyboardHitting:function(Cd,K6,Fy){var A;var PK=!
!this.D5;if(!!this.D5&&((!Fy||(this.Lq!==Cd))||(this.J7!==K6))){var CK=null;var K=(
E.AC.isPrototypeOf(A=this.D5)?A:null);var FA=(E.Ex.isPrototypeOf(A=this.D5)?A:null
);if(!!this.Lq)CK=B._NewObject(E.KeyEvent,0).Initialize(this.Lq,false);if(this.J7
!==0x00)CK=B._NewObject(E.KeyEvent,0).Initialize2(this.J7,false);if(!!FA)FA.BV(CK
);else if(!!K)K.BV(CK);this.Lq=0;this.J7=0x00;this.D5=null;}if(!!this.D5){var CK=
null;var K=(E.AC.isPrototypeOf(A=this.D5)?A:null);var FA=(E.Ex.isPrototypeOf(A=this.
D5)?A:null);if(!!Cd)CK=B._NewObject(E.KeyEvent,0).Initialize(Cd,true);if(this.J7
!==0x00)CK=B._NewObject(E.KeyEvent,0).Initialize2(K6,true);if(!!FA)FA.BV(CK);else
if(!!K)K.BV(CK);}if(!this.D5&&Fy){if(!!Cd)this.D5=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize(Cd,true));if(K6!==0x00)this.D5=this.DispatchEvent(B._NewObject(
E.KeyEvent,0).Initialize2(K6,true));if(!(E.Ex.isPrototypeOf(A=this.D5)?A:null)&&
!(E.AC.isPrototypeOf(A=this.D5)?A:null))this.D5=null;this.Lq=Cd;this.J7=K6;PK=PK||
!!this.D5;}this.BI=0;return PK;},DriveCursorMovement:function(BH){return this.DriveMultiTouchMovement(
this.AW,BH);},DriveMultiTouchMovement:function(W,BH){if((W<0)||(W>9)){this.BI=0;
return false;}var BZ=B.abe(BH,this.DY.Get(W));this.DY.Set(W,BH);if(!this.BA.Get(
W)||B.aaX(BZ,A4)){this.BI=0;return false;}var Z=BH;var An=this.BA.Get(W).I;while(
!!An&&(An!==this)){Z=B.abe(Z,An.M.slice(0,2));An=An.I;}if(!An&&(this.BA.Get(W)!==
this)){var tmp=this.BA.Get(W);this.AW=W;this.BA.Set(W,null);tmp.BV(this.IQ().InitializeUp(
W,this.G9.Get(W),this.Gr.Get(W),this.E9.Get(W),this.CB.Get(W)+1,this.E8.Get(W),false
,this.DY.Get(W),this.FS.Get(W)));this.BroadcastEvent(this.J4().InitializeUp(W,this.
CB.Get(W)+1,false,tmp,BH),0x18);}else{this.G9.Set(W,Z);this.AW=W;this.BA.Get(W).
BV(this.Vi().Initialize(W,Z,this.Gr.Get(W),BZ,this.E9.Get(W),this.CB.Get(W)+1,this.
E8.Get(W),BH,this.FS.Get(W)));}this.BI=0;return true;},DriveCursorHitting:function(
Fy,W,BH){return this.DriveMultiTouchHitting(Fy,W,BH);},DriveMultiTouchHitting:function(
Fy,W,BH){if((W<0)||(W>9)){this.BI=0;return false;}var ticksCount=this.BI;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var V4=this.BI;this.DriveMultiTouchMovement(
W,BH);BH=this.DY.Get(W);this.BI=V4;if(Fy)this.FS.Set(W,BH);if(Fy&&!this.BA.Get(W
)){var B3;var Z=BH;if(B.wa(this.MQ.Get(W),BH)&&((ticksCount-this.J5.Get(W))<=250
))this.CB.Set(W,this.CB.Get(W)+1);else this.CB.Set(W,0);this.MQ.Set(W,B.abh(IH,BH
));this.J5.Set(W,ticksCount);if(!!this.B4)B3=this.Fj(B.abh(IH,BH),W,this.CB.Get(
W)+1,this.B4.Au,null,0x0);else B3=this.Fj(B.abh(IH,BH),W,this.CB.Get(W)+1,null,null
,0x0);if(!!B3){this.BroadcastEvent(this.J4().InitializeDown(W,this.CB.Get(W)+1,false
,B3.AC,BH),0x18);this.BA.Set(W,B3.AC);this.E8.Set(W,B3.AS);}else{this.BA.Set(W,null
);this.E8.Set(W,A4);this.BI=0;return false;}var An=B3.AC.I;while(!!An&&(An!==this
)){Z=B.abe(Z,An.M.slice(0,2));An=An.I;}this.Gr.Set(W,Z);this.G9.Set(W,Z);this.E9.
Set(W,0);this.G_.Ap(true);this.AW=W;this.BA.Get(W).BV(this.IQ().InitializeDown(W
,Z,this.CB.Get(W)+1,this.E8.Get(W),false,BH));this.BI=0;return true;}if(!Fy&&!!this.
BA.Get(W)){var Z=BH;var An=this.BA.Get(W).I;while(!!An&&(An!==this)){Z=B.abe(Z,An.
M.slice(0,2));An=An.I;}if(!An)Z=this.G9.Get(W);this.AW=W;var tmp=this.BA.Get(W);
this.BA.Set(W,null);tmp.BV(this.IQ().InitializeUp(W,Z,this.Gr.Get(W),this.E9.Get(
W),this.CB.Get(W)+1,this.E8.Get(W),false,BH,this.FS.Get(W)));this.BroadcastEvent(
this.J4().InitializeUp(W,this.CB.Get(W)+1,false,tmp,BH),0x18);this.BI=0;return true;
}this.BI=0;return false;},Mn:function(EH,MB,EI,Go){if(EH===this)EH=null;if(!!!EH&&
!!this.B4)EH=this.B4.Au;if(!this.BA.Get(this.AW))return;var B3;B3=this.Fj(B.abh(
IH,this.DY.Get(this.AW)),this.AW,1,EH,EI,Go);if(!!B3&&(this.BA.Get(this.AW)!==B3.
AC))this.PX(B3.AC,B3.AS);if(!B3&&(this.BA.Get(this.AW)!==MB))this.PX(MB,A4);},Tz:
function(EH,MB,EI){this.Mn(EH,MB,EI,0x0);},PX:function(EH,E2){if(!this.BA.Get(this.
AW)||(this.BA.Get(this.AW)===EH))return;var tmp=this.BA.Get(this.AW);this.BA.Set(
this.AW,null);tmp.BV(this.IQ().InitializeUp(this.AW,this.G9.Get(this.AW),this.Gr.
Get(this.AW),this.E9.Get(this.AW),this.CB.Get(this.AW)+1,this.E8.Get(this.AW),true
,this.DY.Get(this.AW),this.FS.Get(this.AW)));this.BroadcastEvent(this.J4().InitializeUp(
this.AW,this.CB.Get(this.AW)+1,true,tmp,this.DY.Get(this.AW)),0x18);var Z=this.DY.
Get(this.AW);var An=null;if(!!EH)An=EH.I;while(!!An&&(An!==this)){Z=B.abe(Z,An.M.
slice(0,2));An=An.I;}if(!An&&(EH!==this)){this.BA.Set(this.AW,null);return;}this.
BroadcastEvent(this.J4().InitializeDown(this.AW,this.CB.Get(this.AW)+1,true,EH,this.
DY.Get(this.AW)),0x18);var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;
this.BA.Set(this.AW,EH);this.E8.Set(this.AW,E2);this.Gr.Set(this.AW,Z);this.G9.Set(
this.AW,Z);this.CB.Set(this.AW,0);this.E9.Set(this.AW,0);this.J5.Set(this.AW,ticksCount
);this.FS.Set(this.AW,this.DY.Get(this.AW));this.BA.Get(this.AW).BV(this.IQ().InitializeDown(
this.AW,Z,this.CB.Get(this.AW)+1,this.E8.Get(this.AW),true,this.FS.Get(this.AW))
);},So:function(){if(!!this.B4)return this.B4.Au;return null;},Sj:function(Cl){var
A;if(!Cl)throw new Error(OI);if(!((Cl.F&0x80)===0x80))throw new Error(Gl);if(this.
B4.Au===Cl)this.B4=this.B4.Q;else{var Li=this.B4;while(Li.Q.Au!==Cl)Li=Li.Q;Li.Q=
Li.Q.Q;}Cl.At(0x0,0xD0);if(this.Lj){if(!!this.B4)this.B4.Au.At(0x50,0x0);else this.
At(0x50,0x0);}},R5:function(Cl){var A;var Aj=B._NewObject(E.P7,0);if(!Cl)throw new
Error(My);if(Cl===null)throw new Error(OJ);if(((Cl.F&0x80)===0x80))throw new Error(
OK);if(!!this.B4)this.B4.Au.At(0x0,0x50);else this.At(0x0,0x50);Aj.Q=this.B4;Aj.
Au=Cl;this.B4=Aj;if(this.Lj)Cl.At(0xD0,0x0);else Cl.At(0x90,0x0);},_Init:function(
aArg){E.L._Init.call(this,aArg);E.Timer._Init.call(this.G_={J:this},0);(this.BA=[
]).__proto__=E.Root.BA;(this.CB=[]).__proto__=E.Root.CB;(this.MQ=[]).__proto__=E.
Root.MQ;(this.E9=[]).__proto__=E.Root.E9;(this.Gr=[]).__proto__=E.Root.Gr;(this.
J5=[]).__proto__=E.Root.J5;(this.G9=[]).__proto__=E.Root.G9;(this.E8=[]).__proto__=
E.Root.E8;(this.DY=[]).__proto__=E.Root.DY;(this.FS=[]).__proto__=E.Root.FS;(this.
Db=[]).__proto__=E.Root.Db;(this.Ca=[]).__proto__=E.Root.Ca;this.__proto__=E.Root;
this.F=0x10007F;this.G_.GT(10);this.G_.GV=[this,this.Vj];this.Bu(aArg);},_Done:function(
){this.__proto__=E.L;this.G_._Done();E.L._Done.call(this);},_ReInit:function(){E.
L._ReInit.call(this);this.G_._ReInit();},_Mark:function(D){var A;E.L._Mark.call(
this,D);if((A=this.D5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.B4)&&(A._cycle
!=D))A._Mark(A._cycle=D);B.aa6(this.BA,D);if((A=this.J3)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G_)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"
};E.Event={AG:0,Kx:false,Bu:function(aArg){this.AG=this.Ku();},Ku:function(){var
ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;},_Init:
function(aArg){this.__proto__=E.Event;this.Bu(aArg);B.h7++;},_Done:function(){this.
__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::Event"};E.KeyEvent={BU:0,A5:0,Down:false,Initialize2:function(Cd,Fy){this.
BU=0;this.A5=Cd;this.Down=Fy;if((Cd>=0x30)&&(Cd<=0x39))this.BU=(10+Cd)-48;if((Cd>=
0x41)&&(Cd<=0x5A))this.BU=(105+Cd)-65;if((Cd>=0x61)&&(Cd<=0x7A))this.BU=(105+Cd)-
97;if(Cd===0x20)this.BU=131;if(!this.BU)switch(Cd){case 0x2B:this.BU=132;break;case
0x2D:this.BU=133;break;case 0x2A:this.BU=134;break;case 0x2F:this.BU=135;break;case
0x3D:this.BU=136;break;case 0x2E:this.BU=137;break;case 0x2C:this.BU=138;break;case
0x3A:this.BU=139;break;case 0x3B:this.BU=140;break;default:;}return this;},Initialize:
function(Cd,Fy){this.BU=Cd;this.Down=Fy;this.A5=0x00;var O6=Cd-10;var O5=Cd-105;
if((O6>=0)&&(O6<=9))this.A5=(48+O6)&0xFFFF;if((O5>=0)&&(O5<=25))this.A5=(65+O5)&
0xFFFF;if(Cd===131)this.A5=0x20;if(this.A5===0x00)switch(Cd){case 132:this.A5=0x2B;
break;case 133:this.A5=0x2D;break;case 134:this.A5=0x2A;break;case 135:this.A5=0x2F;
break;case 136:this.A5=0x3D;break;case 137:this.A5=0x2E;break;case 138:this.A5=0x2C;
break;case 139:this.A5=0x3A;break;case 140:this.A5=0x3B;break;default:;}return this;
},Su:function(QW){switch(QW){case 141:return((this.A5>=0x41)&&(this.A5<=0x5A))||((
this.A5>=0x61)&&(this.A5<=0x7A));case 142:return(((this.A5>=0x41)&&(this.A5<=0x5A
))||((this.A5>=0x61)&&(this.A5<=0x7A)))||((this.A5>=0x30)&&(this.A5<=0x39));case
143:return(this.A5>=0x30)&&(this.A5<=0x39);case 144:return(((this.A5>=0x41)&&(this.
A5<=0x46))||((this.A5>=0x61)&&(this.A5<=0x66)))||((this.A5>=0x30)&&(this.A5<=0x39
));case 145:return this.A5!==0x00;case 146:return(this.A5===0x00)&&!!this.BU;case
147:return(((this.BU===6)||(this.BU===7))||(this.BU===4))||(this.BU===5);case 148:
return(this.A5!==0x00)||!!this.BU;default:;}return QW===this.BU;},_Init:function(
aArg){E.Event._Init.call(this,aArg);this.__proto__=E.KeyEvent;},_className:"Core::KeyEvent"
};E.Ki={KT:null,Cw:B.wf,C4:0,BS:0,Down:false,Dr:false,InitializeUp:function(W,C8
,II,O3,Fz){this.Down=false;this.BS=W;this.C4=C8;this.Cw=Fz;this.KT=O3;this.Dr=II;
return this;},InitializeDown:function(W,C8,II,O3,Fz){this.Down=true;this.BS=W;this.
C4=C8;this.Cw=Fz;this.KT=O3;this.Dr=II;return this;},_Init:function(aArg){E.Event.
_Init.call(this,aArg);this.__proto__=E.Ki;},_Mark:function(D){var A;E.Event._Mark.
call(this,D);if((A=this.KT)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};E.GC={GK:B.wf,Cw:B.wf,C4:0,Cp:0,D_:B.wf,CF:B.wf,BS:0,Down:false,Dr:false,InitializeHold:
function(W,HZ,K8,K9,C8,E2,Fz,K7){this.Down=true;this.BS=W;this.CF=B.abf(HZ,E2);this.
D_=B.abf(K8,E2);this.Cp=K9;this.C4=C8;this.Cw=Fz;this.GK=K7;return this;},InitializeUp:
function(W,HZ,K8,K9,C8,E2,II,Fz,K7){this.Down=false;this.BS=W;this.CF=B.abf(HZ,E2
);this.D_=B.abf(K8,E2);this.Cp=K9;this.C4=C8;this.Dr=II;this.Cw=Fz;this.GK=K7;return this;
},InitializeDown:function(W,HZ,C8,E2,II,Fz){this.Down=true;this.BS=W;this.CF=B.abf(
HZ,E2);this.D_=B.abf(HZ,E2);this.Cp=0;this.C4=C8;this.Dr=II;this.Cw=Fz;this.GK=Fz;
return this;},_Init:function(aArg){E.Event._Init.call(this,aArg);this.__proto__=
E.GC;},_className:"Core::CursorEvent"};E.Kn={GK:B.wf,Cw:B.wf,C4:0,Cp:0,AS:B.wf,D_:
B.wf,CF:B.wf,BS:0,Initialize:function(W,HZ,K8,aOffset,K9,U$,E2,Fz,K7){this.BS=W;
this.CF=B.abf(HZ,E2);this.D_=B.abf(K8,E2);this.AS=aOffset;this.Cp=K9;this.C4=U$;
this.Cw=Fz;this.GK=K7;return this;},_Init:function(aArg){E.Event._Init.call(this
,aArg);this.__proto__=E.Kn;},_className:"Core::DragEvent"};E.Fw={Ev:function(Bo,
aClip,aOffset,Bg,aBlend){},GetClipping:function(){var A;var H=E.BD.GetClipping.call(
this);if(((this.F&0x80000)===0x80000)){var I8=Bi;var K;for(K=this.Q;!!K&&!((K.F&
0x200)===0x200);K=K.Q)if(((K.F&0x1)===0x1))I8=B.wC(I8,K.GetClipping());H=B.wC(H,
I8);}return H;},At:function(DU,EF){var A;var M2=this.F;if((!!this.I&&((this.F&0x80001
)===0x80001))&&((EF&0x80000)===0x80000))this.I.Al(this.GetClipping());E.BD.At.call(
this,DU,EF);if(((!!this.I&&((this.F&0x1)===0x1))&&((DU&0x80000)===0x80000))&&!((
M2&0x80000)===0x80000))this.I.Al(this.GetClipping());},P:function(C){var A;if(B.
aaY(C,this.M))return;var Id=[(A=this.M)[2]-A[0],A[3]-A[1]];var Pv=[C[2]-C[0],C[3
]-C[1]];var Kb=!B.aaX(Id,Pv);var BZ=B.abe(C.slice(0,2),this.M.slice(0,2));if(!B.
aaX(BZ,A4)&&!Kb){var K=this.Q;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&0x400)===
0x400)){var tmp=((K.F&0x100)===0x100);K.L9(BZ,tmp);}K=K.Q;}}if((Kb&&(Id[0]>0))&&(
Id[1]>0)){var Ar=this.M;var K=this.Q;while(!!K&&!((K.F&0x200)===0x200)){if(((K.F&
0x400)===0x400)){if(!!K.Bl&&(K.Bl.I0!==this))K.Bl=null;if(!K.Bl&&(K.DR!==0x14))K.
Lk(Ar,this);}K=K.Q;}}E.BD.P.call(this,C);if(!!this.I&&Kb){this.F=this.F|0x1000;if(
!((this.I.F&0x2000)===0x2000)){this.I.F=this.I.F|0x4000;B.pe([A=this.I,A.Dp],this
);}}},_Init:function(aArg){E.BD._Init.call(this,aArg);this.__proto__=E.Fw;this.F=
0x203;},_className:"Core::Outline"};E.A8={D3:null,Bm:null,AC:null,Gi:null,J_:null
,EX:null,Fi:-1,En:0,MY:8,He:0,Ez:0,JW:B.wf,Ds:-1,Ck:0,CA:-1,Fl:24,Cx:0,HL:null,Rl:
false,QC:function(B1,Dw,FR,E3,E5,IN,Ei,E4,C7,C5,C6){throw new Error(OL);},Km:function(
B1,IN,Ei,E4,C7,C5,C6){throw new Error(OM);},JM:function(B1,Dw,FR,E3,E5,Ei,E4,C7,
C5,C6){throw new Error(ON);},DispatchEvent:function(Az){var A;var result=null;if(((
this.CA>=0)&&(this.CA<this.Cx))&&!this.CS){this.Ds=this.CA;this.AC=(E.AC.isPrototypeOf(
A=B._NewObject(this.HL,0))?A:null);if(!!this.AD)this.AD.Q=this.AC;else this.Am=this.
AC;this.AC.S=this.AD;this.AD=this.AC;this.AC.I=this;this.JW=[(A=this.M)[2]-A[0],
this.Fl];(A=this.EX)?A[1].call(A[0],this):null;var An=(E.L.isPrototypeOf(A=this.
AC)?A:null);if(!!An)result=An.DispatchEvent(Az);else result=this.AC.BV(Az);if(!!
this.AC.S)this.AC.S.Q=null;else this.Am=null;this.AD=this.AC.S;this.AC.S=null;this.
AC.I=null;this.AC=null;}if(!result)result=E.L.DispatchEvent.call(this,Az);return result;
},Gk:function(DV){var A;if(!this.HL)return;this.Rl=true;var C_=this.PE(0-this.Ck
,1);var DJ=this.PE((((A=this.M)[3]-A[1])-this.Ck)-1,2);var MP=DJ-C_;if(MP<1)MP=1;
var ML=(MP/2)|0;var MM=(MP/3)|0;if(!ML)ML=1;if(!MM)MM=1;if(C_<this.En){C_=C_-ML;
DJ=DJ+MM;}else if(DJ>this.Fi){C_=C_-MM;DJ=DJ+ML;}else{C_=this.En;DJ=this.Fi;}if(
C_>=this.Cx){C_=0;DJ=-1;}else if(DJ<0){C_=0;DJ=-1;}if(DJ>=this.Cx)DJ=this.Cx-1;if(
C_<0)C_=0;var M$=this.En;var Na=this.Fi;var Pq=0;var Pr=-1;if(C_>M$)M$=C_;if(DJ<
Na)Na=DJ;if(M$<=Na){while((this.Fi<DJ)&&(this.En<M$)){this.M8();this.Q5();}while((
this.En>C_)&&(this.Fi>Na)){this.RJ();this.Q4();}}else{this.Fi=(this.Fi-this.En)+
C_;this.En=C_;Pq=this.En;Pr=this.Fi;}while(this.En<C_)this.M8();while(this.Fi>DJ
)this.RJ();while(this.En>C_)this.Q4();while(this.Fi<DJ)this.Q5();var V=this.Am;var
D2=this.En;var Z=[0,this.Ck+this.Hd(D2,0)];var AM=(A=this.M)[3]-A[1];var Q_=null;
var RT=(A=this.M)[2]-A[0];while(!!V){var H6=D2;var LK=((H6>=0)&&(H6<=-1))||((D2>=
Pq)&&(D2<=Pr));var Pb=V.GetExtent();var Cs=B.abe(Z,Pb.slice(0,2));if(LK)this.Ez=
this.Fl;else this.Ez=Pb[3]-Pb[1];var Pm=Z[1];var Pn=Z[1]+this.Ez;if(!B.aaX(Cs,A4
))V.L9(Cs,true);if((LK&&(Pm<AM))&&(Pn>0)){this.AC=V;this.Ds=H6;this.JW=[RT,this.
Ez];(A=this.EX)?A[1].call(A[0],this):null;}V=V.Q;D2+=1;Z=[Z[0],Z[1]+this.Ez];}D2=
this.En;V=this.Am;Z=[0,this.Ck+this.Hd(D2,0)];while(!!V){var H6=D2;var LK=((H6>=
0)&&(H6<=-1))||((D2>=Pq)&&(D2<=Pr));if(LK)this.Ez=this.Fl;else this.Ez=(A=V.GetExtent(
))[3]-A[1];var Pm=Z[1];var Pn=Z[1]+this.Ez;if(LK&&!((Pm<AM)&&(Pn>0))){this.AC=V;
this.Ds=H6;this.JW=[RT,this.Ez];(A=this.EX)?A[1].call(A[0],this):null;}if(H6===this.
CA)Q_=V;V=V.Q;D2+=1;Z=[Z[0],Z[1]+this.Ez];}this.AC=null;this.Ds=-1;this.Df(Q_);this.
Rl=false;},NM:function(O,aFilter){return null;},Dd:function(Cl,Bd,C7,C5,C6){throw new
Error(OO);},Or:function(O){throw new Error(OP);},Qv:function(O,Eh){throw new Error(
OQ);},Ed:function(O){throw new Error(OR);},U:function(O,Eh){throw new Error(HW);
},Hd:function(J2,U6){return J2*this.Fl;},PE:function(BH,U6){return(BH/this.Fl)|0;
},RJ:function(){var V=this.AD;if(!V)return null;if(V===this.CS)this.Df(null);this.
Fi=this.Fi-1;if(!!V.S)V.S.Q=null;else this.Am=null;this.AD=V.S;V.S=null;V.I=null;
V.Bl=null;if(this.He<this.MY){if(!!this.D3)this.D3.S=V;V.Q=this.D3;this.D3=V;this.
He++;}return V;},Q5:function(){var A;var V=this.D3;var Lo=this.HL;var RV=++this.
Fi;while(!!V&&(((A=V)?A.__proto__:null)!==Lo))V=V.Q;if(!!V){if(!!V.Q)V.Q.S=V.S;if(
!!V.S)V.S.Q=V.Q;if(this.D3===V)this.D3=V.Q;V.Q=null;V.S=null;this.He--;}else{V=(
E.AC.isPrototypeOf(A=B._NewObject(Lo,0))?A:null);V.Du(0x1D);if(!!this.He)this.MY++;
}this.Ez=this.Fl;this.Ds=RV;this.JW=[(A=this.M)[2]-A[0],this.Ez];this.AC=V;(A=this.
EX)?A[1].call(A[0],this):null;this.AC=null;this.Ds=-1;if(!!this.AD)this.AD.Q=V;V.
I=this;V.S=this.AD;this.AD=V;if(!this.Am)this.Am=V;if(RV===this.CA)this.Df(V);return V;
},M8:function(){var V=this.Am;if(!V)return null;if(V===this.CS)this.Df(null);this.
En=this.En+1;if(!!V.Q)V.Q.S=null;else this.AD=null;this.Am=V.Q;V.Q=null;V.I=null;
V.Bl=null;if(this.He<this.MY){if(!!this.D3)this.D3.S=V;V.Q=this.D3;this.D3=V;this.
He++;}return V;},Q4:function(){var A;var V=this.D3;var Lo=this.HL;var RU=--this.
En;while(!!V&&(((A=V)?A.__proto__:null)!==Lo))V=V.Q;if(!!V){if(!!V.Q)V.Q.S=V.S;if(
!!V.S)V.S.Q=V.Q;if(this.D3===V)this.D3=V.Q;V.Q=null;V.S=null;this.He--;}else{V=(
E.AC.isPrototypeOf(A=B._NewObject(Lo,0))?A:null);V.Du(0x1D);if(!!this.He)this.MY++;
}this.Ez=this.Fl;this.Ds=RU;this.JW=[(A=this.M)[2]-A[0],this.Ez];this.AC=V;(A=this.
EX)?A[1].call(A[0],this):null;this.AC=null;this.Ds=-1;if(!!this.Am)this.Am.S=V;V.
I=this;V.Q=this.Am;this.Am=V;if(!this.AD)this.AD=V;if(RU===this.CA)this.Df(V);return V;
},Rz:function(Y){var A;this.Bm.A6=null;this.Bm.Ih=null;this.Bm=null;(A=this.J_)?
A[1].call(A[0],this):null;},VU:function(Y){this.KJ(this.Gi.AS[1]);},VV:function(
Y){var A;if(!!this.Bm){this.Bm.Ap(false);this.Bm.A6=null;this.Bm.Ih=null;this.Bm=
null;}{var T=this.P2(0,this.Cx-1);var M5=this.M.slice(0,2);if(T[0]>M5[0])T=[].concat(
M5[0],T.slice(1,4));if(T[1]>M5[1])T=B.abP(T,M5[1]);var BZ=T[1]-this.M[1];var Pu=((
A=this.M)[3]-A[1])-(T[3]-T[1]);if(Pu>0)Pu=0;this.Gi.AS=[0,this.Ck];this.Gi.Bw=[0
,(this.Ck+Pu)-BZ];this.Gi.Bv=[0,this.Ck-BZ];}},S5:function(C){if(C===this.Gi)return;
if(!!C&&!!C.Ka){B.ab5("%s%*%s",OS,C,OT);throw new Error(OU);}if(!!this.Gi){this.
Gi.M7=null;this.Gi.Ka=null;}this.Gi=C;if(!!C){C.M7=[this,this.VV];C.Ka=[this,this.
VU];}},KJ:function(C){var A;if(C===this.Ck)return;this.Ck=C;this.Be();this.Al([0
,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},KK:function(C){if(C<0)C=-1;if(C===this.CA)return;
this.CA=C;this.Be();},SX:function(C){var A;if(C<1)C=1;if(C===this.Fl)return;this.
Fl=C;while(!!this.M8());this.Be();this.Al([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},
Mk:function(C){var A;if(C<0)C=0;if(C===this.Cx)return;var T=[0,0,(A=this.M)[2]-A[
0],A[3]-A[1]];if(C>this.Cx){T=[].concat(T.slice(0,3),this.Ck+this.Hd(C,3));T=B.abP(
T,this.Ck+this.Hd(this.Cx,3));}else{T=B.abP(T,this.Ck+this.Hd(C,3));T=[].concat(
T.slice(0,3),this.Ck+this.Hd(this.Cx,3));}this.Cx=C;this.Be();this.Al(T);},SW:function(
C){var A;if(C===this.HL)return;this.HL=C;while(!!this.M8());this.D3=null;this.He=
0;this.Be();this.Al([0,0,(A=this.M)[2]-A[0],A[3]-A[1]]);},RY:function(OZ,Eg){var
A;var MU=this.Ck;var Rc=(((A=this.M)[3]-A[1])-this.Ck)-this.Hd(this.Cx,3);var Cs=
0;if(MU>0)Cs=-MU;else if(Rc>0)Cs=Rc;if((Cs>0)&&(Cs>-MU))Cs=-MU;if(!Cs){(Eg)?Eg[1
].call(Eg[0],this):null;return;}if(!!this.Bm){this.Bm.Ap(false);this.Bm.A6=null;
this.Bm.Ih=null;this.J_=null;}this.Bm=OZ;if(!this.Bm){this.KJ(this.Ck+Cs);(Eg)?Eg[
1].call(Eg[0],this):null;}else{this.Bm.Ap(false);this.Bm.HR(1);this.Bm.A6=[this,
this.P$,this.KJ];this.Bm.Bf=this.Ck;this.Bm.BG=this.Ck+Cs;this.Bm.Ih=[this,this.
Rz];this.Bm.Ml(false);this.Bm.Ap(true);this.J_=Eg;}},L1:function(J2,QX,OZ,Eg){var
A;if((J2<0)||(J2>=this.Cx))return;var H=this.P2(J2,J2);var Ar=this.M;var Ll=B.lb(
H,Ar);if((!QX&&!((Ll[0]>=Ll[2])||(Ll[1]>=Ll[3])))||(QX&&B.aaY(Ll,H))){(Eg)?Eg[1].
call(Eg[0],this):null;return;}var Cs=0;if(H[3]>Ar[3])Cs=H[3]-Ar[3];if(Cs>(H[1]-Ar[
1]))Cs=H[1]-Ar[1];if(!!this.Bm){this.Bm.Ap(false);this.Bm.A6=null;this.Bm.Ih=null;
this.J_=null;}this.Bm=OZ;if(!this.Bm){this.KJ(this.Ck-Cs);(Eg)?Eg[1].call(Eg[0],
this):null;}else{this.Bm.Ap(false);this.Bm.HR(1);this.Bm.A6=[this,this.P$,this.KJ
];this.Bm.Bf=this.Ck;this.Bm.BG=this.Ck-Cs;this.Bm.Ih=[this,this.Rz];this.Bm.Ml(
false);this.Bm.Ap(true);this.J_=Eg;}},Sn:function(BH){if(((this.Cx<=0)||(BH[0]<this.
M[0]))||(BH[0]>=this.M[2]))return-1;BH=B.abe(BH,this.M.slice(0,2));{var V=BH[1]-
this.Ck;if(V>0)V=this.PE(V,0);if((V<0)||(V>=this.Cx))return-1;return V;}},P2:function(
MD,ME){if(MD<0)MD=0;if(ME>=this.Cx)ME=this.Cx-1;if(MD>ME)return Bi;var T=this.M;
var Cs=this.Ck;T=[].concat(T.slice(0,3),(T[1]+Cs)+this.Hd(ME+1,0));T=B.abP(T,(T[
1]+Cs)+this.Hd(MD,0));return T;},P$:function(){return this.Ck;},_Init:function(aArg
){E.L._Init.call(this,aArg);this.__proto__=E.A8;this.P(HX);this.HL=B.acf.Text;},
_Mark:function(D){var A;E.L._Mark.call(this,D);if((A=this.D3)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Bm)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AC)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Gi)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.J_)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.EX)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::VerticalList"};E.JP={N$:null
,KE:null,KB:null,Fm:null,Dt:null,Nf:0,Ai:0,BS:0,AG:0,C4:0,Cp:0,AS:B.wf,D_:B.wf,CF:
B.wf,KP:8,Gh:0,P6:1,Down:false,Ga:false,Dr:false,Pa:false,Lt:0,Ev:function(Bo,aClip
,aOffset,Bg,aBlend){},BV:function(Az){var A;var Ab=(E.GC.isPrototypeOf(Az)?Az:null
);var Ba=(E.Kn.isPrototypeOf(Az)?Az:null);var MX=this.Ga;var FB;var EK;var LP;var
CO;var Ld;if(!Ab&&!Ba)return null;FB=(!!Ab&&Ab.Down)&&!Ab.Cp;EK=(!!Ab&&Ab.Down)&&(
Ab.Cp>0);LP=(!!Ab&&Ab.Down)&&(Ab.Cp>this.Lt);CO=!!Ab&&!Ab.Down;Ld=!!Ba;if(FB)this.
Lt=((A=(Ab.Dr?0:50))&0x80)?A|0xFFFFFF00:A&0xFF;if((((this.Gh&0x20)===0x20)&&(this.
Ai>0))&&(this.Ai<33554432)){var BR=(E.Ki.isPrototypeOf(Az)?Az:null);if(((!!BR&&BR.
Down)&&(BR.KT!==this))&&B.wa(this.GetExtent(),this.I.P5(BR.Cw))){this.Nf=0x20;this.
Ai=this.Ai|67108864;return null;}}if(FB){var IV=0;var FT;this.Ai=this.Ai|(1<<Ab.
BS);for(FT=this.Ai&4095;FT>0;FT=FT>>1)if(!!(FT&1))IV=IV+1;if(IV===1)this.Ai=(this.
Ai|16777216)|(4096<<Ab.BS);}if(CO&&(this.Ai<16777216)){var BM=this.De();var B3=null;
if(!!BM){var PO=(!!this.S?this.S:this.I);var O_=(!!BM.B4?BM.B4.Au:null);B3=BM.Fj(
B.abh(Mz,Ab.Cw),Ab.BS,Ab.C4,O_,PO,0x0);}if(!!B3){var G;for(G=0;G<10;G++)if(!!(this.
Ai&(1<<G)))B3.AC.BV(B._NewObject(E.GC,0).InitializeDown(G,Ab.CF,Ab.C4,A4,true,Ab.
Cw));for(G=0;G<10;G++)if(!!(this.Ai&(1<<G)))B3.AC.BV(B._NewObject(E.GC,0).InitializeUp(
G,Ab.CF,Ab.CF,0,Ab.C4,A4,false,Ab.Cw,Ab.Cw));}}if(CO)this.Ai=(this.Ai&~(1<<Ab.BS
))|33554432;if(LP&&(this.Ai<16777216))this.Ai=this.Ai|67108864;if(CO&&Ab.Dr)this.
Ai=this.Ai|67108864;if(CO&&!(this.Ai&4095))this.Nf=0x0;if(CO&&!(this.Ai&16777215
))this.Ai=0;if(EK&&(this.Ai>=67108864)){var BM=this.De();if(!!BM)BM.Mn(null,null
,this,this.Nf);}if((EK&&!!(this.Ai&16777216))&&!!(this.Ai&33554432)){EK=false;CO=
true;}if(!!Ab&&!(this.Ai&(4096<<Ab.BS)))return this;if(!!Ba&&!(this.Ai&(4096<<Ba.
BS)))return this;if(CO&&!(this.Ai&16777216))return this;if(((FB||Ld)||EK)&&((this.
Ai<16777216)||(this.Ai>=33554432)))return this;if(CO)this.Ai=this.Ai&3758100479;
if(CO&&!(this.Ai&16777215))this.Ai=0;if(!!Ab){this.Down=FB||EK;this.Ga=this.NZ(Ab.
CF);this.D_=Ab.D_;this.CF=Ab.CF;this.AS=A4;this.Cp=Ab.Cp;this.C4=Ab.C4;this.Dr=Ab.
Dr;this.BS=Ab.BS;this.AG=Ab.AG;if(Ab.Down&&!Ab.Cp)MX=false;}if(!!Ba){this.Down=true;
this.Ga=this.NZ(Ba.CF);this.D_=Ba.D_;this.CF=Ba.CF;this.AS=Ba.AS;this.Cp=Ba.Cp;this.
C4=Ba.C4;this.BS=Ba.BS;this.Dr=false;this.AG=Ba.AG;}var O$=this.Down;if(!!Ba)(A=
this.N$)?A[1].call(A[0],this):null;if((!!Ab&&this.Down)&&!this.Cp)(A=this.Dt)?A[
1].call(A[0],this):null;if((this.Down&&this.Ga)&&!MX){this.Pa=true;(A=this.KB)?A[
1].call(A[0],this):null;}if(this.Pa&&(((O$&&!this.Ga)&&MX)||((!O$&&this.Ga)&&MX)
)){this.Pa=false;(A=this.KE)?A[1].call(A[0],this):null;}if(!!Ab&&!O$)(A=this.Fm)?
A[1].call(A[0],this):null;if(!!this.Gh){var Ii=0x0;if(((((this.Gh&0x10)===0x10)&&
!!Ab)&&Ab.Down)&&(Ab.Cp>=1000))Ii=0x10;if((((this.Gh&0x1)===0x1)&&!!Ba)&&((Ba.Cw[
1]-Ba.GK[1])<=-this.KP))Ii=0x1;if((((this.Gh&0x2)===0x2)&&!!Ba)&&((Ba.Cw[1]-Ba.GK[
1])>=this.KP))Ii=0x2;if((((this.Gh&0x4)===0x4)&&!!Ba)&&((Ba.Cw[0]-Ba.GK[0])<=-this.
KP))Ii=0x4;if((((this.Gh&0x8)===0x8)&&!!Ba)&&((Ba.Cw[0]-Ba.GK[0])>=this.KP))Ii=0x8;
if(!!Ii){var BM=this.De();if(!!BM){this.Nf=Ii;BM.Mn(null,this,this,Ii);}}}return this;
},Fj:function(Ay,W,C8,E1,EI,Go){var A;if(!!E1&&(E1!==this))return null;if((C8<1)||(
C8>this.P6))return null;if(this.Ai>=33554432)return null;if((this.Ai>=16777216)&&
!(this.Ai&(4096<<W)))return null;if(!!(Go&this.Gh))return null;if(this.Sr()){var
H=B.lb(Ay,this.GetExtent());if(!((H[0]>=H[2])||(H[1]>=H[3]))){var Dz=B.aaI(Ay);var
BZ=A4;if(Dz[0]<H[0])BZ=[H[0]-Dz[0],BZ[1]];if(Dz[0]>=H[2])BZ=[(H[2]-Dz[0])-1,BZ[1
]];if(Dz[1]<H[1])BZ=[BZ[0],H[1]-Dz[1]];if(Dz[1]>=H[3])BZ=[BZ[0],(H[3]-Dz[1])-1];
return B._NewObject(E.L0,0).Initialize(this,BZ);}}else{var BB=B.abi(9,B.wf,null);
var G;BB.Set(0,B.aaI(Ay));BB.Set(1,BB.Get(0));BB.Set(2,BB.Get(0));BB.Set(3,BB.Get(
0));BB.Set(4,BB.Get(0));BB.Set(1,[Ay[0],BB.Get(1)[1]]);BB.Set(2,[BB.Get(2)[0],Ay[
1]]);BB.Set(3,[Ay[2],BB.Get(3)[1]]);BB.Set(4,[BB.Get(4)[0],Ay[3]]);BB.Set(5,Ay.slice(
0,2));BB.Set(6,[Ay[2],Ay[1]]);BB.Set(7,[Ay[0],Ay[3]]);BB.Set(8,Ay.slice(2,4));for(
G=0;G<9;G=G+1)if(this.NZ(BB.Get(G)))return B._NewObject(E.L0,0).Initialize(this,
B.abe(BB.Get(G),BB.Get(0)));}return null;},Qo:function(C){if(C<1)C=1;this.KP=C;}
,Mi:function(C){if(C<1)C=1;this.P6=C;},Ap:function(C){if(C)this.At(0x100000,0x0);
else this.At(0x0,0x100000);},_Init:function(aArg){E.KN._Init.call(this,aArg);this.
__proto__=E.JP;this.F=0x10011B;},_Mark:function(D){var A;E.KN._Mark.call(this,D);
if((A=this.N$)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.KE)&&((A=A[0
])._cycle!=D))A._Mark(A._cycle=D);if((A=this.KB)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Fm)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dt
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};E.EB={timer:null,M7:null,Ka:null,Ai:0,MJ:0,I7:0,MV:B.wf,IT:0,Gq:0,A3:0,In:0,Kd:
0,IS:0,Gp:0,A2:0,Im:0,Il:0,D_:B.wf,PY:B.wf,Bv:B.wf,Bw:B.wf,AS:B.wf,EC:B.wf,JR:false
,Fa:false,Fb:false,MI:false,Lt:0,Ev:function(Bo,aClip,aOffset,Bg,aBlend){},BV:function(
Az){var A;var Ab=(E.GC.isPrototypeOf(Az)?Az:null);var Ba=(E.Kn.isPrototypeOf(Az)?
Az:null);var BR=(E.Ki.isPrototypeOf(Az)?Az:null);var FB;var EK;var LP;var CO;var
Ld;FB=(!!Ab&&Ab.Down)&&!Ab.Cp;EK=(!!Ab&&Ab.Down)&&(Ab.Cp>0);LP=(!!Ab&&Ab.Down)&&(
Ab.Cp>this.Lt);CO=!!Ab&&!Ab.Down;Ld=!!Ba;if(FB)this.Lt=((A=(Ab.Dr?0:50))&0x80)?A|
0xFFFFFF00:A&0xFF;if(FB){var IV=0;var FT;this.Ai=this.Ai|(1<<Ab.BS);for(FT=this.
Ai&4095;FT>0;FT=FT>>1)if(!!(FT&1))IV=IV+1;if(IV===1)this.Ai=(this.Ai|16777216)|(
4096<<Ab.BS);}if(CO&&(this.Ai<16777216)){var BM=this.De();var B3=null;if(!!BM){var
PO=(!!this.S?this.S:this.I);var O_=(!!BM.B4?BM.B4.Au:null);B3=BM.Fj(B.abh(Mz,Ab.
Cw),Ab.BS,Ab.C4,O_,PO,0x0);}if(!!B3){var G;for(G=0;G<10;G++)if(!!(this.Ai&(1<<G)
))B3.AC.BV(B._NewObject(E.GC,0).InitializeDown(G,Ab.CF,Ab.C4,A4,true,Ab.Cw));for(
G=0;G<10;G++)if(!!(this.Ai&(1<<G)))B3.AC.BV(B._NewObject(E.GC,0).InitializeUp(G,
Ab.CF,Ab.CF,0,Ab.C4,A4,false,Ab.Cw,Ab.Cw));}}if(CO)this.Ai=(this.Ai&~(1<<Ab.BS))|
33554432;if(LP&&(this.Ai<16777216))this.Ai=this.Ai|67108864;if(CO&&Ab.Dr)this.Ai=
this.Ai|67108864;if(CO&&!(this.Ai&16777215))this.Ai=0;if(EK&&(this.Ai>=67108864)
){var BM=this.De();if(!!BM)BM.Mn(null,null,this,0x0);}if((EK&&!!(this.Ai&16777216
))&&!!(this.Ai&33554432)){EK=false;CO=true;}if(!!Ab&&!(this.Ai&(4096<<Ab.BS)))return this;
if(!!Ba&&!(this.Ai&(4096<<Ba.BS)))return this;if(CO&&!(this.Ai&16777216))return this;
if(((FB||Ld)||EK)&&((this.Ai<16777216)||(this.Ai>=33554432)))return this;if(CO)this.
Ai=this.Ai&3758100479;if(CO&&!(this.Ai&16777215))this.Ai=0;if(!!BR&&(BR.KT===this
))return null;if((!!BR&&BR.Down)&&(this.MI||!this.JR))return null;if((!!BR&&BR.Down
)&&!B.wa(this.M,this.I.P5(BR.Cw)))return null;if((!!BR&&!BR.Down)&&(!this.MI||(this.
MJ!==BR.BS)))return null;if((!Ab&&!Ba)&&!BR)return null;if(!!Ab){this.MI=FB||EK;
this.MJ=Ab.BS;this.D_=Ab.D_;}if(!!Ba)this.MJ=Ba.BS;if(!!BR){this.MI=BR.Down;this.
MJ=BR.BS;}if(!!BR&&BR.Down){this.PP();this.A2=(((BR.AG-this.Il)*0.001)*this.Gp)+
this.A2;this.A3=(((BR.AG-this.Kd)*0.001)*this.Gq)+this.A3;if(this.Fa)this.A2=0;if(
this.Fb)this.A3=0;this.Gp=0;this.Gq=0;this.Fa=false;this.Fb=false;this.MV=this.AS;
this.I7=BR.AG;return this;}if(FB){this.PP();this.A2=(((Ab.AG-this.Il)*0.001)*this.
Gp)+this.A2;this.A3=(((Ab.AG-this.Kd)*0.001)*this.Gq)+this.A3;if(this.Fa||!this.
JR)this.A2=0;if(this.Fb||!this.JR)this.A3=0;this.Gp=0;this.Gq=0;this.Fa=false;this.
Fb=false;if(!this.JR){this.JR=true;(A=this.M7)?A[1].call(A[0],this):null;}this.MV=
this.AS;this.I7=Ab.AG;}if(!!Ba){var Ax=B.abe(Ba.CF,Ba.D_);var AF=this.AS;AF=[this.
MV[0]+Ax[0],AF[1]];AF=[AF[0],this.MV[1]+Ax[1]];if(AF[0]<this.Bw[0])AF=[this.Bw[0
]+(((AF[0]-this.Bw[0])/2)|0),AF[1]];else if(AF[0]>this.Bv[0])AF=[this.Bv[0]+(((AF[
0]-this.Bv[0])/2)|0),AF[1]];if(AF[1]<this.Bw[1])AF=[AF[0],this.Bw[1]+(((AF[1]-this.
Bw[1])/2)|0)];else if(AF[1]>this.Bv[1])AF=[AF[0],this.Bv[1]+(((AF[1]-this.Bv[1])
/2)|0)];if(!B.aaX(AF,this.AS)){this.PY=B.abe(AF,this.AS);this.AS=AF;(A=this.Ka)?
A[1].call(A[0],this):null;}}if((!!BR&&!BR.Down)&&((BR.AG-this.I7)>=200)){this.A2=
0;this.A3=0;}if(EK&&((Ab.AG-this.I7)>=200)){this.A2=0;this.A3=0;}if(!!Ba&&(Ba.AG>
this.I7)){var Ax=Ba.AS;var Rg=1000/(Ba.AG-this.I7);var Hz;var HA;Hz=Ax[0]*Rg;HA=
Ax[1]*Rg;if((Hz*this.A2)<0)this.A2=0;if((HA*this.A3)<0)this.A3=0;this.A2=(this.A2+
Hz)*0.5;this.A3=(this.A3+HA)*0.5;this.I7=Ba.AG;}if(!CO&&!BR)return this;if(!!Ab&&
Ab.Dr){this.A2=0;this.A3=0;}if((this.AS[0]<=this.Bw[0])||(this.AS[0]>=this.Bv[0]
))this.A2=0;else if(!this.A2){var AY=this.AS[0];var A7=this.Bw[0];var AR=this.Bv[
0];if(AY<A7)AR=this.Bw[0];else if(AY>AR)A7=this.Bv[0];else if(this.EC[0]<=1){A7=
AY;AR=AY;}else{var FV=(AR-AY)%this.EC[0];AR=(AY-this.EC[0])+FV;A7=AY+FV;if(AR<this.
Bw[0])AR=this.Bw[0];if(A7>this.Bv[0])A7=this.Bv[0];}if((A7-AY)<=(AY-AR))AY=A7;else
AY=AR;if(AY!==this.AS[0]){var CJ=AY-this.AS[0];if(CJ>0)this.A2=Math.sqrt((CJ*2)*
5000)+20;if(CJ<0)this.A2=-Math.sqrt((-CJ*2)*5000)-20;this.Gp=(400-(this.A2*this.
A2))/(2*CJ);this.IS=AY;}}else{var V6=this.A2*this.A2;var CJ=V6/10000;var AY=this.
AS[0];if(this.A2>0)AY=AY+(CJ|0);if(this.A2<0)AY=AY-(CJ|0);if(AY>this.Bv[0])AY=this.
Bv[0];else if(AY<this.Bw[0])AY=this.Bw[0];var RO=AY;var A7=this.Bw[0];var AR=this.
Bv[0];if(AY<A7)AR=this.Bw[0];else if(AY>AR)A7=this.Bv[0];else if(this.EC[0]<=1){
A7=AY;AR=AY;}else{var FV=(AR-AY)%this.EC[0];AR=(AY-this.EC[0])+FV;A7=AY+FV;if(AR<
this.Bw[0])AR=this.Bw[0];if(A7>this.Bv[0])A7=this.Bv[0];}if(this.A2>0){if(AR<=this.
AS[0])AY=A7;else if((AY-AR)<(A7-AY))AY=AR;else AY=A7;}else if(A7>=this.AS[0])AY=
AR;else if((AY-AR)>(A7-AY))AY=A7;else AY=AR;if(AY!==this.AS[0]){CJ=AY-this.AS[0];
if(AY!==RO){var HF=AY-RO;if(HF>0)this.A2=this.A2+Math.sqrt((HF*2)*5000);if(HF<0)
this.A2=this.A2-Math.sqrt((-HF*2)*5000);}if(this.A2>0)this.A2=this.A2+20;if(this.
A2<0)this.A2=this.A2-20;this.Gp=(400-(this.A2*this.A2))/(2*CJ);this.IS=AY;}else this.
A2=0;}if((this.AS[1]<=this.Bw[1])||(this.AS[1]>=this.Bv[1]))this.A3=0;else if(!this.
A3){var AZ=this.AS[1];var A7=this.Bw[1];var AR=this.Bv[1];if(AZ<A7)AR=this.Bw[1];
else if(AZ>AR)A7=this.Bv[1];else if(this.EC[1]<=1){A7=AZ;AR=AZ;}else{var FV=(AR-
AZ)%this.EC[1];AR=(AZ-this.EC[1])+FV;A7=AZ+FV;if(AR<this.Bw[1])AR=this.Bw[1];if(
A7>this.Bv[1])A7=this.Bv[1];}if((A7-AZ)<=(AZ-AR))AZ=A7;else AZ=AR;if(AZ!==this.AS[
1]){var CJ=AZ-this.AS[1];if(CJ>0)this.A3=Math.sqrt((CJ*2)*5000)+20;if(CJ<0)this.
A3=-Math.sqrt((-CJ*2)*5000)-20;this.Gq=(400-(this.A3*this.A3))/(2*CJ);this.IT=AZ;
}}else{var V7=this.A3*this.A3;var CJ=V7/10000;var AZ=this.AS[1];if(this.A3>0)AZ=
AZ+(CJ|0);if(this.A3<0)AZ=AZ-(CJ|0);if(AZ>this.Bv[1])AZ=this.Bv[1];else if(AZ<this.
Bw[1])AZ=this.Bw[1];var RP=AZ;var A7=this.Bw[1];var AR=this.Bv[1];if(AZ<A7)AR=this.
Bw[1];else if(AZ>AR)A7=this.Bv[1];else if(this.EC[1]<=1){A7=AZ;AR=AZ;}else{var FV=(
AR-AZ)%this.EC[1];AR=(AZ-this.EC[1])+FV;A7=AZ+FV;if(AR<this.Bw[1])AR=this.Bw[1];
if(A7>this.Bv[1])A7=this.Bv[1];}if(this.A3>0){if(AR<=this.AS[1])AZ=A7;else if((AZ-
AR)<(A7-AZ))AZ=AR;else AZ=A7;}else if(A7>=this.AS[1])AZ=AR;else if((AZ-AR)>(A7-AZ
))AZ=A7;else AZ=AR;if(AZ!==this.AS[1]){CJ=AZ-this.AS[1];if(AZ!==RP){var HF=AZ-RP;
if(HF>0)this.A3=this.A3+Math.sqrt((HF*2)*5000);if(HF<0)this.A3=this.A3-Math.sqrt((-
HF*2)*5000);}if(this.A3>0)this.A3=this.A3+20;if(this.A3<0)this.A3=this.A3-20;this.
Gq=(400-(this.A3*this.A3))/(2*CJ);this.IT=AZ;}else this.A3=0;}if(!!Ab)this.Il=Ab.
AG;if(!!BR)this.Il=BR.AG;this.Kd=this.Il;this.Im=this.AS[0];this.In=this.AS[1];this.
V8();return this;},Fj:function(Ay,W,C8,E1,EI,Go){var A;if(!!E1&&(E1!==this))return null;
if(this.Ai>=33554432)return null;if((this.Ai>=16777216)&&!(this.Ai&(4096<<W)))return null;
var H=B.lb(Ay,this.M);if(!((H[0]>=H[2])||(H[1]>=H[3]))){var Dz=B.aaI(Ay);var BZ=
A4;if(Dz[0]<H[0])BZ=[H[0]-Dz[0],BZ[1]];if(Dz[0]>=H[2])BZ=[(H[2]-Dz[0])-1,BZ[1]];
if(Dz[1]<H[1])BZ=[BZ[0],H[1]-Dz[1]];if(Dz[1]>=H[3])BZ=[BZ[0],(H[3]-Dz[1])-1];return B.
_NewObject(E.L0,0).Initialize(this,BZ);}return null;},PP:function(){if(!!this.timer
){B.z9([this,this.D7],this.timer,0);this.timer=null;}},V8:function(){this.timer=
B._GetAutoObject(B.acj.HI);B.zV([this,this.D7],this.timer,0);},D7:function(Y){var
A;if(!this.timer)return;var Ke=(this.timer.AG-this.Il)*0.001;var Kf=(this.timer.
AG-this.Kd)*0.001;var V$=Ke*Ke;var Wa=Kf*Kf;var Hz=(this.Gp*Ke)+this.A2;var HA=(
this.Gq*Kf)+this.A3;var AF=[((((this.Gp*0.5)*V$)+(this.A2*Ke))+this.Im)|0,((((this.
Gq*0.5)*Wa)+(this.A3*Kf))+this.In)|0];if(this.Fa&&(Ke>=0.5)){AF=[this.IS,AF[1]];
this.A2=0;this.Gp=0;this.Im=AF[0];this.Fa=false;}else if(this.Fa){var Dm=1-Math.
pow(1-(Ke/0.5),5);AF=[(this.Im+((this.IS-this.Im)*Dm))|0,AF[1]];}if(this.Fb&&(Kf>=
0.5)){AF=[AF[0],this.IT];this.A3=0;this.Gq=0;this.In=AF[1];this.Fb=false;}else if(
this.Fb){var Dm=1-Math.pow(1-(Kf/0.5),5);AF=[AF[0],(this.In+((this.IT-this.In)*Dm
))|0];}if(((this.A2>0)&&(Hz<0))||((this.A2<0)&&(Hz>0))){Hz=0;AF=[this.AS[0],AF[1
]];}if(((this.A3>0)&&(HA<0))||((this.A3<0)&&(HA>0))){HA=0;AF=[AF[0],this.AS[1]];
}if(!this.Fa&&(AF[0]<this.Bw[0])){this.Im=AF[0];this.IS=this.Bw[0];this.Il=this.
timer.AG;this.Fa=true;}else if(!this.Fa&&(AF[0]>this.Bv[0])){this.Im=AF[0];this.
IS=this.Bv[0];this.Il=this.timer.AG;this.Fa=true;}if(!this.Fb&&(AF[1]<this.Bw[1]
)){this.In=AF[1];this.IT=this.Bw[1];this.Kd=this.timer.AG;this.Fb=true;}else if(
!this.Fb&&(AF[1]>this.Bv[1])){this.In=AF[1];this.IT=this.Bv[1];this.Kd=this.timer.
AG;this.Fb=true;}if(((!this.Fa&&!!this.A2)&&(Hz>-20))&&(Hz<20)){AF=[this.IS,AF[1
]];this.A2=0;this.Gp=0;this.Im=AF[0];}if(((!this.Fb&&!!this.A3)&&(HA>-20))&&(HA<
20)){AF=[AF[0],this.IT];this.A3=0;this.Gq=0;this.In=AF[1];}if(!B.aaX(AF,this.AS)
){this.PY=B.abe(AF,this.AS);this.AS=AF;(A=this.Ka)?A[1].call(A[0],this):null;}if(((
!this.A2&&!this.A3)&&!this.Fa)&&!this.Fb){this.PP();this.JR=false;}},S6:function(
C){if(C[0]<0)C=[0,C[1]];if(C[1]<0)C=[C[0],0];this.EC=C;},_Init:function(aArg){E.
BD._Init.call(this,aArg);this.__proto__=E.EB;this.F=0x10011B;},_Mark:function(D){
var A;E.BD._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.M7)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ka)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SlideTouchHandler"};E.Ex={
Q:null,Fm:null,Dt:null,Jz:null,I4:0,AG:0,Qu:0,Cv:148,BU:0,A5:0,A_:true,Down:false
,KO:false,Bu:function(aArg){var A;var Au=(E.L.isPrototypeOf(A=this.J)?A:null);if(
!Au)throw new Error(Gm);this.Q=Au.M0;Au.M0=this;},BV:function(Az){var A;if(!!Az&&
Az.Su(this.Cv)){this.Down=Az.Down;this.BU=Az.BU;this.A5=Az.A5;this.AG=Az.AG;if(Az.
Down){this.Qu=this.I4;this.KO=this.I4>0;if(this.KO)(A=this.Jz)?A[1].call(A[0],this
):null;else(A=this.Dt)?A[1].call(A[0],this):null;this.I4=this.I4+1;return true;}
if(!Az.Down){this.KO=this.I4>1;this.Qu=this.I4-1;this.I4=0;(A=this.Fm)?A[1].call(
A[0],this):null;return true;}}return false;},_Init:function(aArg){this.__proto__=
E.Ex;this.Bu(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Fm)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dt)&&((A=
A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Jz)&&((A=A[0])._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::KeyPressHandler"};E.L0={AC:null,Kj:0,AS:B.wf,Initialize:function(
O,aOffset){this.AC=O;this.AS=aOffset;this.Kj=(aOffset[0]*aOffset[0])+(aOffset[1]
*aOffset[1]);return this;},_Init:function(aArg){this.__proto__=E.L0;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.AC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D)
)A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::CursorHit"
};E.P7={Q:null,Au:null,_Init:function(aArg){this.__proto__=E.P7;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Au)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};E.L7={I0:null,DD:B.wg,Ar:B.wg,isEmpty:false
,_Init:function(aArg){this.__proto__=E.L7;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.I0)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};E.L8={LH:B.wf,LG:B.wf
,LF:B.wf,LE:B.wf,_Init:function(aArg){E.L7._Init.call(this,aArg);this.__proto__=
E.L8;},_className:"Core::LayoutQuadContext"};E.NA={Au:null,Q:null,DZ:null,D6:null
,CD:null,I2:null,_Init:function(aArg){this.__proto__=E.NA;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Au)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.DZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D6)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.CD)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.I2)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A.
_Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};E.QD={DX:null,AD:null,Am:null,Ri:false,Vg:function(){if(!this.DX)return;var EO=
this.DX;this.DX.EN=null;this.DX=null;B.pe([this,this.PA],this);EO.P9(this);},VE:
function(Y){if(!!this.DX)return;if(!this.Am)return;this.DX=this.Am;this.Am=this.
Am.Q;if(!!this.Am)this.Am.S=null;else this.AD=null;this.DX.Q=null;this.Ri=true;this.
DX.JH(this);this.Ri=false;},VS:function(Y){B.pe([this,this.VE],this);},VR:function(
Y){B.pe([this,this.VS],this);},PA:function(Y){B.pe([this,this.VR],this);},R8:function(
BY){if(!BY||!BY.EN)return;if(BY.EN!==this)throw new Error(OV);var RX=false;if(this.
DX===BY){this.DX=null;RX=true;B.pe([this,this.PA],this);}else{if(!!BY.Q)BY.Q.S=BY.
S;else this.AD=BY.S;if(!!BY.S)BY.S.Q=BY.Q;else this.Am=BY.Q;BY.S=null;BY.Q=null;
}BY.EN=null;if(RX)BY.P8(this);},TB:function(BY,Vb){if(!BY)return;if(!!BY.EN)throw new
Error(HY);BY.EN=this;if(Vb){BY.Q=this.Am;if(!!this.Am)this.Am.S=BY;else this.AD=
BY;this.Am=BY;}else{BY.S=this.AD;if(!!this.AD)this.AD.Q=BY;else this.Am=BY;this.
AD=BY;}if(!this.DX)B.pe([this,this.PA],this);},_Init:function(aArg){this.__proto__=
E.QD;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.DX)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Am)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};E.KU={EN:null,S:null,Q:null,P9:function(K_){}
,P8:function(K_){},JH:function(K_){this.PU();},FG:function(){if(!!this.EN&&(this.
EN.DX===this))this.EN.Vg();},PU:function(){if(!!this.EN)this.EN.R8(this);},NW:function(
){return!!this.EN&&(this.EN.DX===this);},_Init:function(aArg){this.__proto__=E.KU;
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.EN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.S
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::Task"};E.GY={resource:null,FH:function(){this.resource=null;
},Bu:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=E.GY;
this.Bu(aArg);B.h7++;},_Done:function(){this.FH();this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::Resource"};E.Timer={GV:null
,timer:null,AG:0,Period:1000,Jd:0,A_:false,FH:function(){var tmp=this.timer;if(!
!tmp)tmp.DestroyTimer();this.timer=null;},M_:function(aBegin,aPeriod){if(aBegin<
0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>
0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin
,aPeriod);}this.timer=tmp;},GT:function(C){if(C<0)C=0;if(C===this.Period)return;
this.Period=C;if(this.A_)this.M_(this.Jd,C);},HO:function(C){if(C<0)C=0;if(C===this.
Jd)return;this.Jd=C;if(this.A_)this.M_(C,this.Period);},Ap:function(C){if(C===this.
A_)return;this.A_=C;if(C)this.M_(this.Jd,this.Period);else this.M_(0,0);this.AG=
this.Ku();},Ku:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.AG=this.Ku();if(!this.Period
)this.Ap(false);(A=this.GV)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=E.Timer;B.h7++;},_Done:function(){this.FH();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.GV)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null
,_cycle:0,_observers:null,_className:"Core::Timer"};E.IA={HN:null,A6:null,Ry:function(
Y){var A;(A=this.HN)?A[1].call(A[0],this):null;},HS:function(C){if(B.aaZ(this.A6
,C))return;if(!!this.A6)B.z$([this,this.Ry],this.A6,0);this.A6=C;if(!!this.A6)B.
zX([this,this.Ry],this.A6,0);},_Init:function(aArg){this.__proto__=E.IA;B.h7++;}
,_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.HN)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.A6)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::PropertyObserver"};E.XB={
B9:0x1,Wm:0x2,WR:0x4,Xz:0x8,A_:0x10,Xo:0x20,WS:0x40,W3:0x80,WQ:0x100,WX:0x200,WK:
0x400,Xb:0x800,Mw:0x1000,XA:0x2000,W7:0x4000,W8:0x8000,WD:0x10000,W6:0x20000,Xl:
0x40000,WE:0x80000,Xa:0x100000,WC:0x200000};E.DR={Xc:0x1,Xd:0x2,Wi:0x4,Wj:0x8,Wk:
0x10,Wh:0x20};E.WU={Sz:0,Xw:1,Ws:2,WY:3,Xf:4,Xx:5,Xy:6,Wt:7,Wu:8,W0:9,WZ:10,Xh:11
,Xg:12};E.Kl={Sz:0,Xu:1,Left:2,Wq:3,BX:4,R6:5,Xv:6,Right:7,Wr:8};E.KeyCode={NoKey:
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};E.Xe={XF:0x1,XC:0x2,XD:0x4,XE:0x8,W2:
0x10,WT:0x20};
E._Init=function(){E.KN.__proto__=E.AC;E.BD.__proto__=E.AC;E.L.__proto__=E.BD;E.Root.
__proto__=E.L;E.KeyEvent.__proto__=E.Event;E.Ki.__proto__=E.Event;E.GC.__proto__=
E.Event;E.Kn.__proto__=E.Event;E.Fw.__proto__=E.BD;E.A8.__proto__=E.L;E.JP.__proto__=
E.KN;E.EB.__proto__=E.BD;E.L8.__proto__=E.L7;};E._ReInit=function(){};E.Ef=function(
D){};return E;})();

/* Embedded Wizard */