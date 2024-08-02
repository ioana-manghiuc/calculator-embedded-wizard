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
);if(EmWiApp.acj)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
acj=(function(){var B=EmWiApp;var E={};
var A4=[100,100];var Bi=[0,0,100,100];var Dv="Trying to remove a fader from a task, which is actually running";
var E0="The fader doesn\'t belong to this task";var Ee="Trying to add a fader to a task, which is actually running";
var FQ="The fader belongs already to a task";
E.GE={CP:null,timer:null,Ih:null,Iu:null,Ma:null,Lc:0,HG:0,EJ:0,Dl:0,Lm:0.001,DE:
0,Bj:0,Br:0,NC:0.5,PT:3,KM:3,Kg:0.5,EU:3,OE:0,OD:0,EW:0,GD:1000,GM:0,GL:0,G3:0,A_:
false,Os:false,Ja:false,Ni:false,D7:function(Y){var A;if(!this.timer)return;if(!
this.HG){if(this.Os)this.HG=-1;else this.HG=1;this.Lc=this.HG;this.Br=this.timer.
AG;this.Bj=0;this.DE=-1;}var DB;if((this.HG>0)&&(this.Lc>0))DB=this.V0();else if((
this.HG<0)&&(this.Lc<0))DB=this.V3();else if(this.HG>0)DB=this.V1();else DB=this.
V2();if(DB){this.Ap(false);(A=this.Ih)?A[1].call(A[0],this):null;(A=this.Iu)?A[1
].call(A[0],this):null;}},Nd:function(N){var A;if(!this.CP&&(((this.G3===19)||(this.
G3===20))||(this.G3===21))){var MK=this.PT+1;var Vl=Math.sqrt(this.NC);var I_=0.5;
var G;this.CP=B._NewObject(E.Mv,0);this.CP.Do.Set(0,1);this.CP.H0.Set(0,1);for(G=
1;G<MK;G=G+1){this.CP.Do.Set(G,this.CP.Do.Get(G-1)*Vl);this.CP.H0.Set(G,this.CP.
H0.Get(G-1)*this.NC);I_=I_+this.CP.Do.Get(G);}var Vq=1/I_;this.CP.Do.Set(0,0.5);
I_=0;for(G=0;G<MK;G=G+1){this.CP.Do.Set(G,this.CP.Do.Get(G)*Vq);I_=I_+this.CP.Do.
Get(G);}this.CP.Do.Set(MK,this.CP.Do.Get(MK)+(1-I_));}switch(this.G3){case 1:N=Math.
pow(N,this.EU);break;case 2:{N=1-N;N=1-Math.pow(N,this.EU);}break;case 3:{N=N*2;
if(N<1)N=Math.pow(N,this.EU)/2;else{N=2-N;N=(2-Math.pow(N,this.EU))*0.5;}}break;
case 4:N=(Math.pow(2.718,this.EU*N)-1)/(Math.pow(2.718,this.EU)-1);break;case 5:{
N=1-N;N=1-((Math.pow(2.718,this.EU*N)-1)/(Math.pow(2.718,this.EU)-1));}break;case
6:{N=N*2;if(N<1)N=((Math.pow(2.718,this.EU*N)-1)/(Math.pow(2.718,this.EU)-1))/2;
else{N=2-N;N=(2-((Math.pow(2.718,this.EU*N)-1)/(Math.pow(2.718,this.EU)-1)))*0.5;
}}break;case 7:N=1-Math.cos((N*90)*B.k$);break;case 8:N=Math.sin((N*90)*B.k$);break;
case 9:{N=N*2;if(N<1){N=1-Math.cos((N*90)*B.k$);N=N*0.5;}else{N=2-N;N=1-Math.cos((
N*90)*B.k$);N=(2-N)*0.5;}}break;case 10:N=1-Math.sqrt(1-(N*N));break;case 11:{N=
1-N;N=Math.sqrt(1-(N*N));}break;case 12:{N=N*2;if(N<1){N=1-Math.sqrt(1-(N*N));N=
N*0.5;}else{N=2-N;N=1-Math.sqrt(1-(N*N));N=(2-N)*0.5;}}break;case 13:N=((N*N)*N)-((
N*this.Kg)*Math.sin((N*180)*B.k$));break;case 14:{N=1-N;N=((N*N)*N)-((N*this.Kg)
*Math.sin((N*180)*B.k$));N=1-N;}break;case 15:{N=N*2;if(N<1){N=((N*N)*N)-((N*this.
Kg)*Math.sin((N*180)*B.k$));N=N*0.5;}else{N=2-N;N=((N*N)*N)-((N*this.Kg)*Math.sin((
N*180)*B.k$));N=(2-N)*0.5;}}break;case 16:N=((N*N)*N)*Math.sin(((N*90)*(1+(4*this.
KM)))*B.k$);break;case 17:{N=1-N;N=1-(((N*N)*N)*Math.sin(((N*90)*(1+(4*this.KM))
)*B.k$));}break;case 18:{N=N*2;if(N<1){N=((N*N)*N)*Math.sin(((N*90)*(1+(4*this.KM
)))*B.k$);N=N*0.5;}else{N=2-N;N=((N*N)*N)*Math.sin(((N*90)*(1+(4*this.KM)))*B.k$
);N=(2-N)*0.5;}}break;case 19:{var BL=this.CP;var G=0;var F0=0;var DI=BL.Do.Get(
0);var Cb=1-N;while(Cb>DI){G=G+1;F0=DI;DI=DI+BL.Do.Get(G);}N=(Cb-F0)/(DI-F0);if(
!G)N=1-(N*N);else{N=(2*N)-1;N=BL.H0.Get(G)*(1-(N*N));}}break;case 20:{var BL=this.
CP;var G=0;var F0=0;var DI=BL.Do.Get(0);while(N>DI){G=G+1;F0=DI;DI=DI+BL.Do.Get(
G);}N=(N-F0)/(DI-F0);if(!G)N=N*N;else{N=(2*N)-1;N=1-(BL.H0.Get(G)*(1-(N*N)));}}break;
case 21:{var BL=this.CP;var G=0;var F0=0;var DI=BL.Do.Get(0);var Dm=N*2;var Cb=Dm-
1;if(Dm<1)Cb=-Cb;while(Cb>DI){G=G+1;F0=DI;DI=DI+BL.Do.Get(G);}Cb=(Cb-F0)/(DI-F0);
if(!G)Cb=Cb*Cb;else{Cb=(2*Cb)-1;Cb=1-(BL.H0.Get(G)*(1-(Cb*Cb)));}if(Dm<1)N=0.5*(
1-Cb);else N=0.5*(1+Cb);}break;default:if(this.Ja){var Dm=N;var Lv=1-Dm;N=((Lv*Dm
)*(this.Dl+1))+(Dm*Dm);}else if(this.Ni){var Dm=N;var Lv=1-Dm;var Q9=Dm*Dm;var Vw=
Lv*Lv;N=(((Vw*Dm)*(this.Dl+1))+((Lv*Q9)*(this.EJ+2)))+(Q9*Dm);}}this.LW(N);(A=this.
Ma)?A[1].call(A[0],this):null;},V3:function(){var As=(this.timer.AG-this.Br)|0;if(
As<0)As=-As;var El=this.GL;var Fd=this.GL+this.GD;var B6=this.GM+this.GD;var DB=
false;var AH=this.DE;if(!this.Bj&&(As>=Fd)){this.Bj=1;As=As-Fd;this.Br=this.Br+Fd;
}if((this.Bj>0)&&(As>=B6)){var Ce=(As/B6)|0;this.Bj=this.Bj+Ce;As=As-(Ce*B6);this.
Br=this.Br+(Ce*B6);}if((this.Bj>2)&&!this.EW)this.Bj=1;if(this.Bj>0)El=this.GM;if((
this.Bj>=this.EW)&&(this.EW>0)){DB=true;AH=0;}else if(As>=El)AH=1-((As-El)*this.
Lm);else if(AH>=0)AH=0;if(AH!==this.DE){if(AH<0)AH=0;if(AH>1)AH=1;}if(AH!==this.
DE){this.DE=AH;this.Nd(AH);}return DB;},V2:function(){var As=(this.Br-this.timer.
AG)|0;var El=this.GL;var Fd=this.GL+this.GD;var B6=this.GM+this.GD;var DB=false;
var AH=this.DE;if((this.Bj>1)&&(As<0)){var Ce=(((-As+B6)-1)/B6)|0;if((this.Bj-Ce
)<=0)Ce=this.Bj-1;this.Bj=this.Bj-Ce;As=As+(Ce*B6);this.Br=this.Br+(Ce*B6);}if(((
this.Bj===1)&&(As<0))&&(this.EW>0)){this.Bj=0;As=As+Fd;this.Br=this.Br+Fd;}if(((
this.Bj===1)&&(As<0))&&!this.EW){var Ce=(((-As+B6)-1)/B6)|0;As=As+(Ce*B6);this.Br=
this.Br+(Ce*B6);}if(this.Bj>0)El=this.GM;if(As<0){DB=true;AH=1;}else if(As>=El)AH=
1-((As-El)*this.Lm);else if(AH>=0)AH=1;if(AH!==this.DE){if(AH<0)AH=0;if(AH>1)AH=
1;}if(AH!==this.DE){this.DE=AH;this.Nd(AH);}return DB;},V1:function(){var As=(this.
Br-this.timer.AG)|0;var El=this.GL;var Fd=this.GL+this.GD;var B6=this.GM+this.GD;
var DB=false;var AH=this.DE;if((this.Bj>1)&&(As<0)){var Ce=(((-As+B6)-1)/B6)|0;if((
this.Bj-Ce)<=0)Ce=this.Bj-1;this.Bj=this.Bj-Ce;As=As+(Ce*B6);this.Br=this.Br+(Ce
*B6);}if(((this.Bj===1)&&(As<0))&&(this.EW>0)){this.Bj=0;As=As+Fd;this.Br=this.Br+
Fd;}if(((this.Bj===1)&&(As<0))&&!this.EW){var Ce=(((-As+B6)-1)/B6)|0;As=As+(Ce*B6
);this.Br=this.Br+(Ce*B6);}if(this.Bj>0)El=this.GM;if(As<0){DB=true;AH=0;}else if(
As>=El)AH=(As-El)*this.Lm;else if(AH>=0)AH=0;if(AH!==this.DE){if(AH<0)AH=0;if(AH>
1)AH=1;}if(AH!==this.DE){this.DE=AH;this.Nd(AH);}return DB;},V0:function(){var As=(
this.timer.AG-this.Br)|0;if(As<0)As=-As;var El=this.GL;var Fd=this.GL+this.GD;var
B6=this.GM+this.GD;var DB=false;var AH=this.DE;if(!this.Bj&&(As>=Fd)){this.Bj=1;
As=As-Fd;this.Br=this.Br+Fd;}if((this.Bj>0)&&(As>=B6)){var Ce=(As/B6)|0;this.Bj=
this.Bj+Ce;As=As-(Ce*B6);this.Br=this.Br+(Ce*B6);}if((this.Bj>2)&&!this.EW)this.
Bj=1;if(this.Bj>0)El=this.GM;if((this.Bj>=this.EW)&&(this.EW>0)){DB=true;AH=1;}else
if(As>=El)AH=(As-El)*this.Lm;else if(AH>=0)AH=1;if(AH!==this.DE){if(AH<0)AH=0;if(
AH>1)AH=1;}if(AH!==this.DE){this.DE=AH;this.Nd(AH);}return DB;},Ml:function(C){if(
this.Os===C)return;this.Os=C;if(!this.A_||!this.HG)return;if(C)this.Lc=-1;else this.
Lc=1;this.Br=(this.timer.Ku()*2)-this.Br;},Qd:function(C){if(C<0)C=0;if(C>1)C=1;
this.NC=C;},Qb:function(C){if(C<1)C=1;if(C>10)C=10;this.PT=C;this.CP=null;},Qn:function(
C){if(C<1)C=1;if(C>10)C=10;this.KM=C;},Qa:function(C){if(C<0)C=0;if(C>10)C=10;this.
Kg=C;},Qg:function(C){if(C<1)C=1;if(C>100)C=100;this.EU=C;},Qr:function(C){if(this.
OE===C)return;this.OE=C;if(this.G3===26){this.EJ=C;this.Ja=(this.Dl===this.EJ)&&
!!this.Dl;this.Ni=!this.Ja&&(this.Dl!==this.EJ);}},Qq:function(C){if(this.OD===C
)return;this.OD=C;if(this.G3===26){this.Dl=C;this.Ja=(this.Dl===this.EJ)&&!!this.
Dl;this.Ni=!this.Ja&&(this.Dl!==this.EJ);}},Of:function(C){if(this.G3===C)return;
this.G3=C;this.CP=null;switch(C){case 24:{this.Dl=-1.1;this.EJ=1.1;}break;case 22:{
this.Dl=-1;this.EJ=-2;}break;case 23:{this.Dl=2;this.EJ=1;}break;case 25:{this.Dl=
1.1;this.EJ=-1.1;}break;case 0:{this.Dl=0;this.EJ=0;}break;default:{this.Dl=this.
OD;this.EJ=this.OE;}}this.Ja=(this.Dl===this.EJ)&&!!this.Dl;this.Ni=!this.Ja&&(this.
Dl!==this.EJ);},HR:function(C){if(C<0)C=0;this.EW=C;},HP:function(C){if(C<15)C=15;
this.GD=C;this.Lm=1/C;},SV:function(C){if(C<0)C=0;this.GM=C;},Qj:function(C){if(
C<0)C=0;this.GL=C;},Ap:function(C){if(this.A_===C)return;this.A_=C;if(!C&&!!this.
timer){B.z9([this,this.D7],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
E.HI);B.zV([this,this.D7],this.timer,0);this.HG=0;B.pe([this,this.D7],this);}},LW:
function(Gn){},_Init:function(aArg){this.__proto__=E.GE;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.CP)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.timer)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.Ih)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Iu)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ma)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null
,_cycle:0,_observers:null,_className:"Effects::Effect"};E.BW={A6:null,HV:0,BG:255
,Bf:0,LW:function(Gn){var B_;this.HV=this.Bf+(Math.round((this.BG-this.Bf)*Gn)|0
);if(!!this.A6)(B_=this.A6,B_[2].call(B_[0],this.HV));},_Init:function(aArg){E.GE.
_Init.call(this,aArg);this.__proto__=E.BW;},_Mark:function(D){var A;E.GE._Mark.call(
this,D);if((A=this.A6)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"
};E.Oi={HV:B.wf,BG:A4,Bf:B.wf,LW:function(Gn){var Dq=this.Bf[0];var D8=this.Bf[1
];Dq=Dq+(Math.round((this.BG[0]-Dq)*Gn)|0);D8=D8+(Math.round((this.BG[1]-D8)*Gn)|
0);this.HV=[Dq,D8];},_Init:function(aArg){E.GE._Init.call(this,aArg);this.__proto__=
E.Oi;},_className:"Effects::PointEffect"};E.Op={A6:null,HV:B.wg,BG:Bi,Bf:B.wg,LW:
function(Gn){var B_;var Ae=this.Bf[0];var Af=this.Bf[1];var Ac=this.Bf[2];var Ag=
this.Bf[3];Ae=Ae+(Math.round((this.BG[0]-Ae)*Gn)|0);Af=Af+(Math.round((this.BG[1
]-Af)*Gn)|0);Ac=Ac+(Math.round((this.BG[2]-Ac)*Gn)|0);Ag=Ag+(Math.round((this.BG[
3]-Ag)*Gn)|0);this.HV=[Ae,Af,Ac,Ag];if(!!this.A6)(B_=this.A6,B_[2].call(B_[0],this.
HV));},_Init:function(aArg){E.GE._Init.call(this,aArg);this.__proto__=E.Op;},_Mark:
function(D){var A;E.GE._Mark.call(this,D);if((A=this.A6)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);},_className:"Effects::RectEffect"};E.GG={EO:null,S:null,Q:null
,I:null,L:null,M3:null,Px:null,KD:null,B9:true,A_:true,K5:true,LU:false,LY:true,
JN:true,IB:true,FG:function(){if(!!this.EO)this.EO.FG();},NX:function(){return true;
},HM:function(){},JH:function(){this.FG();},_Init:function(aArg){this.__proto__=
E.GG;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.EO)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.S)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.L)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.M3)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Px)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.KD)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Effects::Fader"};E.JX={Qs:B.wf,
H4:false,NX:function(){return this.H4;},HM:function(){if(!this.B9&&!!this.L.I)this.
L.Aq(false);if((!this.B9&&this.IB)&&!!this.L.I)this.L.I.Ed(this.L);if(!this.A_)this.
L.Ap(false);},JH:function(){if(this.A_)this.L.Ap(true);if((this.B9||this.LU)&&!this.
L.I){this.L.Aq(false);this.I.U(this.L,0);}if(this.B9&&this.JN)this.L.I.Or(this.L
);if(this.B9&&this.LY)this.L.I.Df(this.L);if(this.B9&&!this.K5)this.L.P(B.abJ(this.
L.M,this.Qs));if(this.B9){this.L.EY(255);this.L.Aq(true);}if(!this.B9&&(this.I.CS===
this.L))this.I.Df(null);this.H4=true;this.FG();},_Init:function(aArg){E.GG._Init.
call(this,aArg);this.__proto__=E.JX;},_className:"Effects::VisibilityFader"};E.JK={
Bp:null,AT:null,H4:false,NX:function(){return this.H4;},HM:function(){if(this.B9
){this.L.EY(this.Bp.BG);this.L.P(B.abJ(this.L.M,this.AT.BG));}if(!this.B9&&!this.
L.Dg)this.L.Aq(false);if((!this.B9&&this.IB)&&!!this.L.I)this.L.I.Ed(this.L);if(
!this.A_)this.L.Ap(false);},JH:function(){var A;if(this.K5){if(this.L.Jy()&&!!this.
L.I)this.Bp.Bf=this.L.Dg;else this.Bp.Bf=0;this.AT.Bf=this.L.M.slice(0,2);}var Vr=((
!this.L.I||!this.L.Dg)||!this.L.Jy())||(((A=B.lb(this.L.M,[0,0,(A=this.I.M)[2]-A[
0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Vs=((!this.B9&&((!this.L.I||!this.L.
Jy())||this.IB))||!this.Bp.BG)||(((A=B.lb(B.abh([0,0,(A=this.L.M)[2]-A[0],A[3]-A[
1]],this.AT.BG),[0,0,(A=this.I.M)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
if(Vr&&Vs){this.Bp.Bf=0;this.Bp.BG=0;this.AT.Bf=this.AT.BG;}if(this.A_)this.L.Ap(
true);if((this.B9||this.LU)&&!this.L.I){this.L.Aq(false);this.I.U(this.L,0);}if(
this.B9&&this.JN)this.L.I.Or(this.L);if(this.B9&&this.LY)this.L.I.Df(this.L);if(
!this.B9&&(this.I.CS===this.L))this.I.Df(null);if(this.B9&&!this.L.Jy()){this.L.
P(B.abJ(this.L.M,this.AT.Bf));this.L.EY(this.Bp.Bf);this.L.Aq(true);}if(!this.B9&&((
!this.L.I||!this.L.Jy())||!this.L.Dg)){this.H4=true;this.FG();return;}if(!this.B9&&
B.aaX(this.AT.Bf,this.AT.BG))this.L.P(B.abJ(this.L.M,this.AT.Bf));if(!this.B9&&(
this.Bp.Bf===this.Bp.BG))this.L.EY(this.Bp.Bf);if((this.L.Dg===this.Bp.BG)&&B.aaX(
this.L.M.slice(0,2),this.AT.BG)){this.H4=true;this.FG();return;}if((this.Bp.Bf===
this.Bp.BG)&&B.aaX(this.AT.Bf,this.AT.BG)){this.H4=true;this.FG();return;}if(!this.
Bp.EW)this.Bp.HR(1);if(!this.AT.EW)this.AT.HR(1);this.AT.Ml(false);this.AT.Iu=[this
,this.RA];this.AT.Ma=[this,this.Vy];this.Bp.A6=[A=this.L,A.KC,A.OY];this.Bp.Ml(false
);this.Bp.Iu=[this,this.RA];this.Bp.Ma=null;this.AT.Ap(!B.aaX(this.AT.Bf,this.AT.
BG));this.Bp.Ap(this.Bp.Bf!==this.Bp.BG);},RA:function(Y){this.H4=!this.Bp.A_&&!
this.AT.A_;this.FG();},Vy:function(Y){this.L.P(B.abJ(this.L.M,this.AT.HV));},_Init:
function(aArg){E.GG._Init.call(this,aArg);E.BW._Init.call(this.Bp={J:this},0);E.
Oi._Init.call(this.AT={J:this},0);this.__proto__=E.JK;},_Done:function(){this.__proto__=
E.GG;this.Bp._Done();this.AT._Done();E.GG._Done.call(this);},_ReInit:function(){
E.GG._ReInit.call(this);this.Bp._ReInit();this.AT._ReInit();},_Mark:function(D){
var A;E.GG._Mark.call(this,D);if((A=this.Bp)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.AT)._cycle!=D)A._Mark(A._cycle=D);},_className:"Effects::PositionFader"};E.
HU={GB:function(){return null;},GA:function(){return null;},Jg:function(){return this.
GB();},Jf:function(){return this.GA();},_Init:function(aArg){this.__proto__=E.HU;
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};E.Ov={GB:function(){var R=B.
_NewObject(E.JX,0);R.B9=true;R.A_=true;R.LY=false;R.JN=true;R.K5=false;R.KD=[this
,this.Py];return R;},GA:function(){var R=B._NewObject(E.JX,0);R.B9=false;R.A_=false;
R.IB=true;return R;},Jg:function(){var R=E.HU.Jg.call(this);R.JN=false;R.A_=true;
return R;},Jf:function(){var R=B._NewObject(E.JX,0);R.B9=false;R.A_=true;R.LU=true;
R.IB=false;return R;},Py:function(Y){var A;var R=(E.JX.isPrototypeOf(Y)?Y:null);
var Ar=[0,0,(A=R.I.M)[2]-A[0],A[3]-A[1]];var Bc=[(A=R.L.M)[2]-A[0],A[3]-A[1]];var
Z=Ar.slice(0,2);Z=[(Ar[0]+(((Ar[2]-Ar[0])/2)|0))-((Bc[0]/2)|0),Z[1]];Z=[Z[0],(Ar[
1]+(((Ar[3]-Ar[1])/2)|0))-((Bc[1]/2)|0)];R.Qs=Z;},_Init:function(aArg){E.HU._Init.
call(this,aArg);this.__proto__=E.Ov;},_className:"Effects::ShowHideTransition"};
E.Mo={Kl:0,GB:function(){var R=B._NewObject(E.JK,0);R.B9=true;R.A_=true;R.LY=false;
R.JN=true;R.K5=true;R.KD=[this,this.Py];R.Bp.HP(500);R.Bp.Qj(0);R.Bp.Bf=0;R.Bp.BG=
255;R.AT.HP(500);R.AT.Of(23);R.AT.Qq(0);R.AT.Qr(0);R.AT.Qg(3);R.AT.Qa(0.5);R.AT.
Qn(3);R.AT.Qb(3);R.AT.Qd(0.5);return R;},GA:function(){var R=B._NewObject(E.JK,0
);R.B9=false;R.A_=false;R.IB=true;R.K5=true;R.KD=[this,this.VN];R.Bp.Bf=255;R.Bp.
BG=0;R.Bp.HP(500);R.Bp.Qj(0);R.AT.HP(500);R.AT.Of(23);R.AT.Qq(0);R.AT.Qr(0);R.AT.
Qg(3);R.AT.Qa(0.5);R.AT.Qn(3);R.AT.Qb(3);R.AT.Qd(0.5);return R;},Jg:function(){var
R=E.HU.Jg.call(this);R.JN=false;R.A_=true;return R;},Jf:function(){var R=E.HU.Jf.
call(this);R.LU=true;R.IB=false;R.A_=true;return R;},Py:function(Y){var A;var R=(
E.JK.isPrototypeOf(Y)?Y:null);var Ar=[0,0,(A=R.I.M)[2]-A[0],A[3]-A[1]];var Bc=[(
A=R.L.M)[2]-A[0],A[3]-A[1]];var Z=Ar.slice(0,2);Z=[(Ar[0]+(((Ar[2]-Ar[0])/2)|0))-((
Bc[0]/2)|0),Z[1]];Z=[Z[0],(Ar[1]+(((Ar[3]-Ar[1])/2)|0))-((Bc[1]/2)|0)];R.AT.BG=Z;
if(((!R.L.I||!R.L.Jy())||!R.L.Dg)||(((A=B.lb(R.L.M,[0,0,(A=R.I.M)[2]-A[0],A[3]-A[
1]]))[0]>=A[2])||(A[1]>=A[3]))){var Fe=[(A=R.I.M)[2]-A[0],A[3]-A[1]];switch(this.
Kl){case 5:Z=[Z[0],-Bc[1]];break;case 3:{Z=[Z[0],-Bc[1]];Z=[Fe[0],Z[1]];}break;case
8:Z=[-Bc[0],-Bc[1]];break;case 2:Z=[Fe[0],Z[1]];break;case 7:Z=[-Bc[0],Z[1]];break;
case 4:Z=[Z[0],Fe[1]];break;case 1:{Z=[Z[0],Fe[1]];Z=[Fe[0],Z[1]];}break;case 6:{
Z=[Z[0],Fe[1]];Z=[-Bc[0],Z[1]];}break;default:;}R.L.P(B.abJ(R.L.M,Z));}},VN:function(
Y){var A;var R=(E.JK.isPrototypeOf(Y)?Y:null);var Z=R.L.M.slice(0,2);var Bc=[(A=
R.L.M)[2]-A[0],A[3]-A[1]];var Fe=[(A=R.I.M)[2]-A[0],A[3]-A[1]];switch(this.Kl){case
5:Z=[Z[0],Fe[1]];break;case 3:{Z=[Z[0],Fe[1]];Z=[-Bc[0],Z[1]];}break;case 8:{Z=[
Z[0],Fe[1]];Z=[Fe[0],Z[1]];}break;case 2:Z=[-Bc[0],Z[1]];break;case 7:Z=[Fe[0],Z[
1]];break;case 4:Z=[Z[0],-Bc[1]];break;case 1:Z=[-Bc[0],-Bc[1]];break;case 6:{Z=[
Z[0],-Bc[1]];Z=[Fe[0],Z[1]];}break;default:;}R.AT.BG=Z;},_Init:function(aArg){E.
HU._Init.call(this,aArg);this.__proto__=E.Mo;},_className:"Effects::SlideTransition"
};E.G3={W1:0,W9:1,W$:2,W_:3,WL:4,WN:5,WM:6,Xp:7,Xr:8,Xq:9,Wy:10,WA:11,Wz:12,Wn:13
,Wp:14,Wo:15,WH:16,WJ:17,WI:18,Wv:19,Wx:20,Ww:21,WG:22,WO:23,WF:24,WP:25,WB:26};
E.NB={Trigger:function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(
aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=E.NB;},_className:"Effects::EffectTimerClass"
};E.HI={_Init:function(){E.NB._Init.call(this,0);this.GT(15);this.Ap(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};E.Mv={Do:B.abi(12,0,
null),H0:B.abi(12,0,null),_Init:function(aArg){(this.Do=[]).__proto__=E.Mv.Do;(this.
H0=[]).__proto__=E.Mv.H0;this.__proto__=E.Mv;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle
!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Effects::TimingList"
};E.L3={AD:null,Am:null,P9:function(K_){var R=this.Am;while(!!R){R.HM();R.L.F=R.
L.F&~0x40000;R=R.Q;}R=this.Am;while(!!R){B.pe(R.Px,R);R=R.Q;}},P8:function(K_){var
R=this.Am;while(!!R){B.pe(R.M3,R);R=R.Q;}this.Am=null;this.AD=null;},JH:function(
K_){var A;if(!this.Am)this.FG();var R=this.Am;while(!!R){R.L.F=(R.L.F|0x40000)&~
0x20000;R.L.I3=null;R=R.Q;}R=this.Am;while(!!R){(A=R.KD)?A[1].call(A[0],R):null;
R.JH();R=R.Q;}},FG:function(){var R=this.Am;while(!!R&&R.NX())R=R.Q;if(!R)B.Core.
KU.FG.call(this);},Ty:function(Bd){if(!Bd)return;if(this.NW())throw new Error(Dv
);if(Bd.EO!==this)throw new Error(E0);if(!!Bd.Q)Bd.Q.S=Bd.S;else this.AD=Bd.S;if(
!!Bd.S)Bd.S.Q=Bd.Q;else this.Am=Bd.Q;Bd.EO=null;Bd.Q=null;Bd.S=null;if(!!Bd.L)Bd.
L.I3=null;B.pe(Bd.M3,Bd);if(!this.Am)this.PU();},PS:function(Bd){if(!Bd)return;if(
this.NW())throw new Error(Ee);if(!!Bd.EO)throw new Error(FQ);Bd.S=this.AD;Bd.Q=null;
if(!!this.AD)this.AD.Q=Bd;else this.Am=Bd;this.AD=Bd;Bd.EO=this;},_Init:function(
aArg){B.Core.KU._Init.call(this,aArg);this.__proto__=E.L3;},_Mark:function(D){var
A;B.Core.KU._Mark.call(this,D);if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Am)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"
};E.JO={_Init:function(){E.Ov._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};E.JQ={_Init:function(){E.Mo._Init.call(this
,0);this.Kl=2;},_ReInit:function(){},_variants:function(){return this;},_this:null
};E.KQ={_Init:function(){E.Mo._Init.call(this,0);this.Kl=7;},_ReInit:function(){
},_variants:function(){return this;},_this:null};
E._Init=function(){E.BW.__proto__=E.GE;E.Oi.__proto__=E.GE;E.Op.__proto__=E.GE;E.
JX.__proto__=E.GG;E.JK.__proto__=E.GG;E.Ov.__proto__=E.HU;E.Mo.__proto__=E.HU;E.
NB.__proto__=B.Core.Timer;E.L3.__proto__=B.Core.KU;};E._ReInit=function(){var A;
if((A=E.HI._this))A._ReInit(),E.HI._ReInit.call(A);if((A=E.JO._this))A._ReInit()
,E.JO._ReInit.call(A);if((A=E.JQ._this))A._ReInit(),E.JQ._ReInit.call(A);if((A=E.
KQ._this))A._ReInit(),E.KQ._ReInit.call(A);};E.Ef=function(D){var A;if((A=E.HI._this
)&&(A._cycle!=D))A._Done(E.HI._this=null);if((A=E.JO._this)&&(A._cycle!=D))A._Done(
E.JO._this=null);if((A=E.JQ._this)&&(A._cycle!=D))A._Done(E.JQ._this=null);if((A=
E.KQ._this)&&(A._cycle!=D))A._Done(E.KQ._this=null);};return E;})();

/* Embedded Wizard */