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
var A4=[100,100];var Bi=[0,0,100,100];var Ds="Trying to remove a fader from a task, which is actually running";
var ES="The fader doesn\'t belong to this task";var Eb="Trying to add a fader to a task, which is actually running";
var FL="The fader belongs already to a task";
E.GA={CP:null,timer:null,Ic:null,Ip:null,L0:null,K3:0,HE:0,EE:0,Dg:0,Lb:0.001,DB:
0,Bj:0,Br:0,No:0.5,PD:3,KB:3,J6:0.5,EN:3,Om:0,Ol:0,EO:0,Gz:1000,GI:0,GH:0,G0:0,Bc:
false,N$:false,I3:false,M7:false,D4:function(Z){var A;if(!this.timer)return;if(!
this.HE){if(this.N$)this.HE=-1;else this.HE=1;this.K3=this.HE;this.Br=this.timer.
AG;this.Bj=0;this.DB=-1;}var Dy;if((this.HE>0)&&(this.K3>0))Dy=this.VH();else if((
this.HE<0)&&(this.K3<0))Dy=this.VK();else if(this.HE>0)Dy=this.VI();else Dy=this.
VJ();if(Dy){this.As(false);(A=this.Ic)?A[1].call(A[0],this):null;(A=this.Ip)?A[1
].call(A[0],this):null;}},M2:function(N){var A;if(!this.CP&&(((this.G0===19)||(this.
G0===20))||(this.G0===21))){var Mx=this.PD+1;var U8=Math.sqrt(this.No);var I2=0.5;
var G;this.CP=B._NewObject(E.Ml,0);this.CP.Dj.Set(0,1);this.CP.HV.Set(0,1);for(G=
1;G<Mx;G=G+1){this.CP.Dj.Set(G,this.CP.Dj.Get(G-1)*U8);this.CP.HV.Set(G,this.CP.
HV.Get(G-1)*this.No);I2=I2+this.CP.Dj.Get(G);}var Vb=1/I2;this.CP.Dj.Set(0,0.5);
I2=0;for(G=0;G<Mx;G=G+1){this.CP.Dj.Set(G,this.CP.Dj.Get(G)*Vb);I2=I2+this.CP.Dj.
Get(G);}this.CP.Dj.Set(Mx,this.CP.Dj.Get(Mx)+(1-I2));}switch(this.G0){case 1:N=Math.
pow(N,this.EN);break;case 2:{N=1-N;N=1-Math.pow(N,this.EN);}break;case 3:{N=N*2;
if(N<1)N=Math.pow(N,this.EN)/2;else{N=2-N;N=(2-Math.pow(N,this.EN))*0.5;}}break;
case 4:N=(Math.pow(2.718,this.EN*N)-1)/(Math.pow(2.718,this.EN)-1);break;case 5:{
N=1-N;N=1-((Math.pow(2.718,this.EN*N)-1)/(Math.pow(2.718,this.EN)-1));}break;case
6:{N=N*2;if(N<1)N=((Math.pow(2.718,this.EN*N)-1)/(Math.pow(2.718,this.EN)-1))/2;
else{N=2-N;N=(2-((Math.pow(2.718,this.EN*N)-1)/(Math.pow(2.718,this.EN)-1)))*0.5;
}}break;case 7:N=1-Math.cos((N*90)*B.k$);break;case 8:N=Math.sin((N*90)*B.k$);break;
case 9:{N=N*2;if(N<1){N=1-Math.cos((N*90)*B.k$);N=N*0.5;}else{N=2-N;N=1-Math.cos((
N*90)*B.k$);N=(2-N)*0.5;}}break;case 10:N=1-Math.sqrt(1-(N*N));break;case 11:{N=
1-N;N=Math.sqrt(1-(N*N));}break;case 12:{N=N*2;if(N<1){N=1-Math.sqrt(1-(N*N));N=
N*0.5;}else{N=2-N;N=1-Math.sqrt(1-(N*N));N=(2-N)*0.5;}}break;case 13:N=((N*N)*N)-((
N*this.J6)*Math.sin((N*180)*B.k$));break;case 14:{N=1-N;N=((N*N)*N)-((N*this.J6)
*Math.sin((N*180)*B.k$));N=1-N;}break;case 15:{N=N*2;if(N<1){N=((N*N)*N)-((N*this.
J6)*Math.sin((N*180)*B.k$));N=N*0.5;}else{N=2-N;N=((N*N)*N)-((N*this.J6)*Math.sin((
N*180)*B.k$));N=(2-N)*0.5;}}break;case 16:N=((N*N)*N)*Math.sin(((N*90)*(1+(4*this.
KB)))*B.k$);break;case 17:{N=1-N;N=1-(((N*N)*N)*Math.sin(((N*90)*(1+(4*this.KB))
)*B.k$));}break;case 18:{N=N*2;if(N<1){N=((N*N)*N)*Math.sin(((N*90)*(1+(4*this.KB
)))*B.k$);N=N*0.5;}else{N=2-N;N=((N*N)*N)*Math.sin(((N*90)*(1+(4*this.KB)))*B.k$
);N=(2-N)*0.5;}}break;case 19:{var BK=this.CP;var G=0;var FV=0;var DF=BK.Dj.Get(
0);var Cc=1-N;while(Cc>DF){G=G+1;FV=DF;DF=DF+BK.Dj.Get(G);}N=(Cc-FV)/(DF-FV);if(
!G)N=1-(N*N);else{N=(2*N)-1;N=BK.HV.Get(G)*(1-(N*N));}}break;case 20:{var BK=this.
CP;var G=0;var FV=0;var DF=BK.Dj.Get(0);while(N>DF){G=G+1;FV=DF;DF=DF+BK.Dj.Get(
G);}N=(N-FV)/(DF-FV);if(!G)N=N*N;else{N=(2*N)-1;N=1-(BK.HV.Get(G)*(1-(N*N)));}}break;
case 21:{var BK=this.CP;var G=0;var FV=0;var DF=BK.Dj.Get(0);var Dh=N*2;var Cc=Dh-
1;if(Dh<1)Cc=-Cc;while(Cc>DF){G=G+1;FV=DF;DF=DF+BK.Dj.Get(G);}Cc=(Cc-FV)/(DF-FV);
if(!G)Cc=Cc*Cc;else{Cc=(2*Cc)-1;Cc=1-(BK.HV.Get(G)*(1-(Cc*Cc)));}if(Dh<1)N=0.5*(
1-Cc);else N=0.5*(1+Cc);}break;default:if(this.I3){var Dh=N;var Lk=1-Dh;N=((Lk*Dh
)*(this.Dg+1))+(Dh*Dh);}else if(this.M7){var Dh=N;var Lk=1-Dh;var QR=Dh*Dh;var Vh=
Lk*Lk;N=(((Vh*Dh)*(this.Dg+1))+((Lk*QR)*(this.EE+2)))+(QR*Dh);}}this.LM(N);(A=this.
L0)?A[1].call(A[0],this):null;},VK:function(){var Ar=(this.timer.AG-this.Br)|0;if(
Ar<0)Ar=-Ar;var Ej=this.GH;var E7=this.GH+this.Gz;var B6=this.GI+this.Gz;var Dy=
false;var AH=this.DB;if(!this.Bj&&(Ar>=E7)){this.Bj=1;Ar=Ar-E7;this.Br=this.Br+E7;
}if((this.Bj>0)&&(Ar>=B6)){var Cf=(Ar/B6)|0;this.Bj=this.Bj+Cf;Ar=Ar-(Cf*B6);this.
Br=this.Br+(Cf*B6);}if((this.Bj>2)&&!this.EO)this.Bj=1;if(this.Bj>0)Ej=this.GI;if((
this.Bj>=this.EO)&&(this.EO>0)){Dy=true;AH=0;}else if(Ar>=Ej)AH=1-((Ar-Ej)*this.
Lb);else if(AH>=0)AH=0;if(AH!==this.DB){if(AH<0)AH=0;if(AH>1)AH=1;}if(AH!==this.
DB){this.DB=AH;this.M2(AH);}return Dy;},VJ:function(){var Ar=(this.Br-this.timer.
AG)|0;var Ej=this.GH;var E7=this.GH+this.Gz;var B6=this.GI+this.Gz;var Dy=false;
var AH=this.DB;if((this.Bj>1)&&(Ar<0)){var Cf=(((-Ar+B6)-1)/B6)|0;if((this.Bj-Cf
)<=0)Cf=this.Bj-1;this.Bj=this.Bj-Cf;Ar=Ar+(Cf*B6);this.Br=this.Br+(Cf*B6);}if(((
this.Bj===1)&&(Ar<0))&&(this.EO>0)){this.Bj=0;Ar=Ar+E7;this.Br=this.Br+E7;}if(((
this.Bj===1)&&(Ar<0))&&!this.EO){var Cf=(((-Ar+B6)-1)/B6)|0;Ar=Ar+(Cf*B6);this.Br=
this.Br+(Cf*B6);}if(this.Bj>0)Ej=this.GI;if(Ar<0){Dy=true;AH=1;}else if(Ar>=Ej)AH=
1-((Ar-Ej)*this.Lb);else if(AH>=0)AH=1;if(AH!==this.DB){if(AH<0)AH=0;if(AH>1)AH=
1;}if(AH!==this.DB){this.DB=AH;this.M2(AH);}return Dy;},VI:function(){var Ar=(this.
Br-this.timer.AG)|0;var Ej=this.GH;var E7=this.GH+this.Gz;var B6=this.GI+this.Gz;
var Dy=false;var AH=this.DB;if((this.Bj>1)&&(Ar<0)){var Cf=(((-Ar+B6)-1)/B6)|0;if((
this.Bj-Cf)<=0)Cf=this.Bj-1;this.Bj=this.Bj-Cf;Ar=Ar+(Cf*B6);this.Br=this.Br+(Cf
*B6);}if(((this.Bj===1)&&(Ar<0))&&(this.EO>0)){this.Bj=0;Ar=Ar+E7;this.Br=this.Br+
E7;}if(((this.Bj===1)&&(Ar<0))&&!this.EO){var Cf=(((-Ar+B6)-1)/B6)|0;Ar=Ar+(Cf*B6
);this.Br=this.Br+(Cf*B6);}if(this.Bj>0)Ej=this.GI;if(Ar<0){Dy=true;AH=0;}else if(
Ar>=Ej)AH=(Ar-Ej)*this.Lb;else if(AH>=0)AH=0;if(AH!==this.DB){if(AH<0)AH=0;if(AH>
1)AH=1;}if(AH!==this.DB){this.DB=AH;this.M2(AH);}return Dy;},VH:function(){var Ar=(
this.timer.AG-this.Br)|0;if(Ar<0)Ar=-Ar;var Ej=this.GH;var E7=this.GH+this.Gz;var
B6=this.GI+this.Gz;var Dy=false;var AH=this.DB;if(!this.Bj&&(Ar>=E7)){this.Bj=1;
Ar=Ar-E7;this.Br=this.Br+E7;}if((this.Bj>0)&&(Ar>=B6)){var Cf=(Ar/B6)|0;this.Bj=
this.Bj+Cf;Ar=Ar-(Cf*B6);this.Br=this.Br+(Cf*B6);}if((this.Bj>2)&&!this.EO)this.
Bj=1;if(this.Bj>0)Ej=this.GI;if((this.Bj>=this.EO)&&(this.EO>0)){Dy=true;AH=1;}else
if(Ar>=Ej)AH=(Ar-Ej)*this.Lb;else if(AH>=0)AH=1;if(AH!==this.DB){if(AH<0)AH=0;if(
AH>1)AH=1;}if(AH!==this.DB){this.DB=AH;this.M2(AH);}return Dy;},Ma:function(C){if(
this.N$===C)return;this.N$=C;if(!this.Bc||!this.HE)return;if(C)this.K3=-1;else this.
K3=1;this.Br=(this.timer.Ki()*2)-this.Br;},PZ:function(C){if(C<0)C=0;if(C>1)C=1;
this.No=C;},PX:function(C){if(C<1)C=1;if(C>10)C=10;this.PD=C;this.CP=null;},P9:function(
C){if(C<1)C=1;if(C>10)C=10;this.KB=C;},PW:function(C){if(C<0)C=0;if(C>10)C=10;this.
J6=C;},P2:function(C){if(C<1)C=1;if(C>100)C=100;this.EN=C;},Qb:function(C){if(this.
Om===C)return;this.Om=C;if(this.G0===26){this.EE=C;this.I3=(this.Dg===this.EE)&&
!!this.Dg;this.M7=!this.I3&&(this.Dg!==this.EE);}},Qa:function(C){if(this.Ol===C
)return;this.Ol=C;if(this.G0===26){this.Dg=C;this.I3=(this.Dg===this.EE)&&!!this.
Dg;this.M7=!this.I3&&(this.Dg!==this.EE);}},N1:function(C){if(this.G0===C)return;
this.G0=C;this.CP=null;switch(C){case 24:{this.Dg=-1.1;this.EE=1.1;}break;case 22:{
this.Dg=-1;this.EE=-2;}break;case 23:{this.Dg=2;this.EE=1;}break;case 25:{this.Dg=
1.1;this.EE=-1.1;}break;case 0:{this.Dg=0;this.EE=0;}break;default:{this.Dg=this.
Ol;this.EE=this.Om;}}this.I3=(this.Dg===this.EE)&&!!this.Dg;this.M7=!this.I3&&(this.
Dg!==this.EE);},HO:function(C){if(C<0)C=0;this.EO=C;},HM:function(C){if(C<15)C=15;
this.Gz=C;this.Lb=1/C;},SE:function(C){if(C<0)C=0;this.GI=C;},P5:function(C){if(
C<0)C=0;this.GH=C;},As:function(C){if(this.Bc===C)return;this.Bc=C;if(!C&&!!this.
timer){B.z9([this,this.D4],this.timer,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(
E.HG);B.zV([this,this.D4],this.timer,0);this.HE=0;B.pe([this,this.D4],this);}},LM:
function(Gj){},_Init:function(aArg){this.__proto__=E.GA;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.CP)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.timer)&&(A._cycle!=D))A.
_Mark(A._cycle=D);if((A=this.Ic)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=
this.Ip)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.L0)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null
,_cycle:0,_observers:null,_className:"Effects::Effect"};E.BV={A6:null,HR:0,BF:255
,Bf:0,LM:function(Gj){var B_;this.HR=this.Bf+(Math.round((this.BF-this.Bf)*Gj)|0
);if(!!this.A6)(B_=this.A6,B_[2].call(B_[0],this.HR));},_Init:function(aArg){E.GA.
_Init.call(this,aArg);this.__proto__=E.BV;},_Mark:function(D){var A;E.GA._Mark.call(
this,D);if((A=this.A6)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"
};E.N3={HR:B.wf,BF:A4,Bf:B.wf,LM:function(Gj){var Dl=this.Bf[0];var D5=this.Bf[1
];Dl=Dl+(Math.round((this.BF[0]-Dl)*Gj)|0);D5=D5+(Math.round((this.BF[1]-D5)*Gj)|
0);this.HR=[Dl,D5];},_Init:function(aArg){E.GA._Init.call(this,aArg);this.__proto__=
E.N3;},_className:"Effects::PointEffect"};E.N8={A6:null,HR:B.wg,BF:Bi,Bf:B.wg,LM:
function(Gj){var B_;var Ad=this.Bf[0];var Ae=this.Bf[1];var Ac=this.Bf[2];var Af=
this.Bf[3];Ad=Ad+(Math.round((this.BF[0]-Ad)*Gj)|0);Ae=Ae+(Math.round((this.BF[1
]-Ae)*Gj)|0);Ac=Ac+(Math.round((this.BF[2]-Ac)*Gj)|0);Af=Af+(Math.round((this.BF[
3]-Af)*Gj)|0);this.HR=[Ad,Ae,Ac,Af];if(!!this.A6)(B_=this.A6,B_[2].call(B_[0],this.
HR));},_Init:function(aArg){E.GA._Init.call(this,aArg);this.__proto__=E.N8;},_Mark:
function(D){var A;E.GA._Mark.call(this,D);if((A=this.A6)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);},_className:"Effects::RectEffect"};E.GC={EJ:null,S:null,Q:null
,I:null,L:null,MQ:null,Pi:null,Ks:null,B9:true,Bc:true,KU:true,LK:false,LO:true,
Jz:true,It:true,FA:function(){if(!!this.EJ)this.EJ.FA();},NJ:function(){return true;
},HK:function(){},Jt:function(){this.FA();},_Init:function(aArg){this.__proto__=
E.GC;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.EJ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.S)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Q)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.L)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.MQ)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Pi)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ks)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Effects::Fader"};E.JJ={Qc:B.wf,
HZ:false,NJ:function(){return this.HZ;},HK:function(){if(!this.B9&&!!this.L.I)this.
L.Ap(false);if((!this.B9&&this.It)&&!!this.L.I)this.L.I.Ea(this.L);if(!this.Bc)this.
L.As(false);},Jt:function(){if(this.Bc)this.L.As(true);if((this.B9||this.LK)&&!this.
L.I){this.L.Ap(false);this.I.U(this.L,0);}if(this.B9&&this.Jz)this.L.I.N_(this.L
);if(this.B9&&this.LO)this.L.I.Dc(this.L);if(this.B9&&!this.KU)this.L.P(B.abJ(this.
L.M,this.Qc));if(this.B9){this.L.EQ(255);this.L.Ap(true);}if(!this.B9&&(this.I.CS===
this.L))this.I.Dc(null);this.HZ=true;this.FA();},_Init:function(aArg){E.GC._Init.
call(this,aArg);this.__proto__=E.JJ;},_className:"Effects::VisibilityFader"};E.Jw={
Bp:null,AT:null,HZ:false,NJ:function(){return this.HZ;},HK:function(){if(this.B9
){this.L.EQ(this.Bp.BF);this.L.P(B.abJ(this.L.M,this.AT.BF));}if(!this.B9&&!this.
L.Dd)this.L.Ap(false);if((!this.B9&&this.It)&&!!this.L.I)this.L.I.Ea(this.L);if(
!this.Bc)this.L.As(false);},Jt:function(){var A;if(this.KU){if(this.L.Jk()&&!!this.
L.I)this.Bp.Bf=this.L.Dd;else this.Bp.Bf=0;this.AT.Bf=this.L.M.slice(0,2);}var Vc=((
!this.L.I||!this.L.Dd)||!this.L.Jk())||(((A=B.lb(this.L.M,[0,0,(A=this.I.M)[2]-A[
0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Vd=((!this.B9&&((!this.L.I||!this.L.
Jk())||this.It))||!this.Bp.BF)||(((A=B.lb(B.abh([0,0,(A=this.L.M)[2]-A[0],A[3]-A[
1]],this.AT.BF),[0,0,(A=this.I.M)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
if(Vc&&Vd){this.Bp.Bf=0;this.Bp.BF=0;this.AT.Bf=this.AT.BF;}if(this.Bc)this.L.As(
true);if((this.B9||this.LK)&&!this.L.I){this.L.Ap(false);this.I.U(this.L,0);}if(
this.B9&&this.Jz)this.L.I.N_(this.L);if(this.B9&&this.LO)this.L.I.Dc(this.L);if(
!this.B9&&(this.I.CS===this.L))this.I.Dc(null);if(this.B9&&!this.L.Jk()){this.L.
P(B.abJ(this.L.M,this.AT.Bf));this.L.EQ(this.Bp.Bf);this.L.Ap(true);}if(!this.B9&&((
!this.L.I||!this.L.Jk())||!this.L.Dd)){this.HZ=true;this.FA();return;}if(!this.B9&&
B.aaX(this.AT.Bf,this.AT.BF))this.L.P(B.abJ(this.L.M,this.AT.Bf));if(!this.B9&&(
this.Bp.Bf===this.Bp.BF))this.L.EQ(this.Bp.Bf);if((this.L.Dd===this.Bp.BF)&&B.aaX(
this.L.M.slice(0,2),this.AT.BF)){this.HZ=true;this.FA();return;}if((this.Bp.Bf===
this.Bp.BF)&&B.aaX(this.AT.Bf,this.AT.BF)){this.HZ=true;this.FA();return;}if(!this.
Bp.EO)this.Bp.HO(1);if(!this.AT.EO)this.AT.HO(1);this.AT.Ma(false);this.AT.Ip=[this
,this.Rj];this.AT.L0=[this,this.Vj];this.Bp.A6=[A=this.L,A.Kr,A.OJ];this.Bp.Ma(false
);this.Bp.Ip=[this,this.Rj];this.Bp.L0=null;this.AT.As(!B.aaX(this.AT.Bf,this.AT.
BF));this.Bp.As(this.Bp.Bf!==this.Bp.BF);},Rj:function(Z){this.HZ=!this.Bp.Bc&&!
this.AT.Bc;this.FA();},Vj:function(Z){this.L.P(B.abJ(this.L.M,this.AT.HR));},_Init:
function(aArg){E.GC._Init.call(this,aArg);E.BV._Init.call(this.Bp={J:this},0);E.
N3._Init.call(this.AT={J:this},0);this.__proto__=E.Jw;},_Done:function(){this.__proto__=
E.GC;this.Bp._Done();this.AT._Done();E.GC._Done.call(this);},_ReInit:function(){
E.GC._ReInit.call(this);this.Bp._ReInit();this.AT._ReInit();},_Mark:function(D){
var A;E.GC._Mark.call(this,D);if((A=this.Bp)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.AT)._cycle!=D)A._Mark(A._cycle=D);},_className:"Effects::PositionFader"};E.
HQ={Gx:function(){return null;},Gw:function(){return null;},I8:function(){return this.
Gx();},I7:function(){return this.Gw();},_Init:function(aArg){this.__proto__=E.HQ;
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:
0,_observers:null,_className:"Effects::Transition"};E.Oc={Gx:function(){var R=B.
_NewObject(E.JJ,0);R.B9=true;R.Bc=true;R.LO=false;R.Jz=true;R.KU=false;R.Ks=[this
,this.Pj];return R;},Gw:function(){var R=B._NewObject(E.JJ,0);R.B9=false;R.Bc=false;
R.It=true;return R;},I8:function(){var R=E.HQ.I8.call(this);R.Jz=false;R.Bc=true;
return R;},I7:function(){var R=B._NewObject(E.JJ,0);R.B9=false;R.Bc=true;R.LK=true;
R.It=false;return R;},Pj:function(Z){var A;var R=(E.JJ.isPrototypeOf(Z)?Z:null);
var Aq=[0,0,(A=R.I.M)[2]-A[0],A[3]-A[1]];var Bb=[(A=R.L.M)[2]-A[0],A[3]-A[1]];var
Y=Aq.slice(0,2);Y=[(Aq[0]+(((Aq[2]-Aq[0])/2)|0))-((Bb[0]/2)|0),Y[1]];Y=[Y[0],(Aq[
1]+(((Aq[3]-Aq[1])/2)|0))-((Bb[1]/2)|0)];R.Qc=Y;},_Init:function(aArg){E.HQ._Init.
call(this,aArg);this.__proto__=E.Oc;},_className:"Effects::ShowHideTransition"};
E.Me={J$:0,Gx:function(){var R=B._NewObject(E.Jw,0);R.B9=true;R.Bc=true;R.LO=false;
R.Jz=true;R.KU=true;R.Ks=[this,this.Pj];R.Bp.HM(500);R.Bp.P5(0);R.Bp.Bf=0;R.Bp.BF=
255;R.AT.HM(500);R.AT.N1(23);R.AT.Qa(0);R.AT.Qb(0);R.AT.P2(3);R.AT.PW(0.5);R.AT.
P9(3);R.AT.PX(3);R.AT.PZ(0.5);return R;},Gw:function(){var R=B._NewObject(E.Jw,0
);R.B9=false;R.Bc=false;R.It=true;R.KU=true;R.Ks=[this,this.Vu];R.Bp.Bf=255;R.Bp.
BF=0;R.Bp.HM(500);R.Bp.P5(0);R.AT.HM(500);R.AT.N1(23);R.AT.Qa(0);R.AT.Qb(0);R.AT.
P2(3);R.AT.PW(0.5);R.AT.P9(3);R.AT.PX(3);R.AT.PZ(0.5);return R;},I8:function(){var
R=E.HQ.I8.call(this);R.Jz=false;R.Bc=true;return R;},I7:function(){var R=E.HQ.I7.
call(this);R.LK=true;R.It=false;R.Bc=true;return R;},Pj:function(Z){var A;var R=(
E.Jw.isPrototypeOf(Z)?Z:null);var Aq=[0,0,(A=R.I.M)[2]-A[0],A[3]-A[1]];var Bb=[(
A=R.L.M)[2]-A[0],A[3]-A[1]];var Y=Aq.slice(0,2);Y=[(Aq[0]+(((Aq[2]-Aq[0])/2)|0))-((
Bb[0]/2)|0),Y[1]];Y=[Y[0],(Aq[1]+(((Aq[3]-Aq[1])/2)|0))-((Bb[1]/2)|0)];R.AT.BF=Y;
if(((!R.L.I||!R.L.Jk())||!R.L.Dd)||(((A=B.lb(R.L.M,[0,0,(A=R.I.M)[2]-A[0],A[3]-A[
1]]))[0]>=A[2])||(A[1]>=A[3]))){var E8=[(A=R.I.M)[2]-A[0],A[3]-A[1]];switch(this.
J$){case 5:Y=[Y[0],-Bb[1]];break;case 3:{Y=[Y[0],-Bb[1]];Y=[E8[0],Y[1]];}break;case
8:Y=[-Bb[0],-Bb[1]];break;case 2:Y=[E8[0],Y[1]];break;case 7:Y=[-Bb[0],Y[1]];break;
case 4:Y=[Y[0],E8[1]];break;case 1:{Y=[Y[0],E8[1]];Y=[E8[0],Y[1]];}break;case 6:{
Y=[Y[0],E8[1]];Y=[-Bb[0],Y[1]];}break;default:;}R.L.P(B.abJ(R.L.M,Y));}},Vu:function(
Z){var A;var R=(E.Jw.isPrototypeOf(Z)?Z:null);var Y=R.L.M.slice(0,2);var Bb=[(A=
R.L.M)[2]-A[0],A[3]-A[1]];var E8=[(A=R.I.M)[2]-A[0],A[3]-A[1]];switch(this.J$){case
5:Y=[Y[0],E8[1]];break;case 3:{Y=[Y[0],E8[1]];Y=[-Bb[0],Y[1]];}break;case 8:{Y=[
Y[0],E8[1]];Y=[E8[0],Y[1]];}break;case 2:Y=[-Bb[0],Y[1]];break;case 7:Y=[E8[0],Y[
1]];break;case 4:Y=[Y[0],-Bb[1]];break;case 1:Y=[-Bb[0],-Bb[1]];break;case 6:{Y=[
Y[0],-Bb[1]];Y=[E8[0],Y[1]];}break;default:;}R.AT.BF=Y;},_Init:function(aArg){E.
HQ._Init.call(this,aArg);this.__proto__=E.Me;},_className:"Effects::SlideTransition"
};E.G0={WI:0,WQ:1,WS:2,WR:3,Ws:4,Wu:5,Wt:6,W8:7,W_:8,W9:9,Wf:10,Wh:11,Wg:12,V6:13
,V8:14,V7:15,Wo:16,Wq:17,Wp:18,Wc:19,We:20,Wd:21,Wn:22,Wv:23,Wm:24,Ww:25,Wi:26};
E.Nn={Trigger:function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(
aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=E.Nn;},_className:"Effects::EffectTimerClass"
};E.HG={_Init:function(){E.Nn._Init.call(this,0);this.GP(15);this.As(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};E.Ml={Dj:B.abi(12,0,
null),HV:B.abi(12,0,null),_Init:function(aArg){(this.Dj=[]).__proto__=E.Ml.Dj;(this.
HV=[]).__proto__=E.Ml.HV;this.__proto__=E.Ml;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle
!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Effects::TimingList"
};E.LS={AC:null,Am:null,PU:function(KZ){var R=this.Am;while(!!R){R.HK();R.L.F=R.
L.F&~0x40000;R=R.Q;}R=this.Am;while(!!R){B.pe(R.Pi,R);R=R.Q;}},PT:function(KZ){var
R=this.Am;while(!!R){B.pe(R.MQ,R);R=R.Q;}this.Am=null;this.AC=null;},Jt:function(
KZ){var A;if(!this.Am)this.FA();var R=this.Am;while(!!R){R.L.F=(R.L.F|0x40000)&~
0x20000;R.L.IV=null;R=R.Q;}R=this.Am;while(!!R){(A=R.Ks)?A[1].call(A[0],R):null;
R.Jt();R=R.Q;}},FA:function(){var R=this.Am;while(!!R&&R.NJ())R=R.Q;if(!R)B.Core.
KJ.FA.call(this);},Ti:function(Bd){if(!Bd)return;if(this.NI())throw new Error(Ds
);if(Bd.EJ!==this)throw new Error(ES);if(!!Bd.Q)Bd.Q.S=Bd.S;else this.AC=Bd.S;if(
!!Bd.S)Bd.S.Q=Bd.Q;else this.Am=Bd.Q;Bd.EJ=null;Bd.Q=null;Bd.S=null;if(!!Bd.L)Bd.
L.IV=null;B.pe(Bd.MQ,Bd);if(!this.Am)this.PE();},PC:function(Bd){if(!Bd)return;if(
this.NI())throw new Error(Eb);if(!!Bd.EJ)throw new Error(FL);Bd.S=this.AC;Bd.Q=null;
if(!!this.AC)this.AC.Q=Bd;else this.Am=Bd;this.AC=Bd;Bd.EJ=this;},_Init:function(
aArg){B.Core.KJ._Init.call(this,aArg);this.__proto__=E.LS;},_Mark:function(D){var
A;B.Core.KJ._Mark.call(this,D);if((A=this.AC)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Am)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"
};E.JA={_Init:function(){E.Oc._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};E.JC={_Init:function(){E.Me._Init.call(this
,0);this.J$=2;},_ReInit:function(){},_variants:function(){return this;},_this:null
};E.KF={_Init:function(){E.Me._Init.call(this,0);this.J$=7;},_ReInit:function(){
},_variants:function(){return this;},_this:null};
E._Init=function(){E.BV.__proto__=E.GA;E.N3.__proto__=E.GA;E.N8.__proto__=E.GA;E.
JJ.__proto__=E.GC;E.Jw.__proto__=E.GC;E.Oc.__proto__=E.HQ;E.Me.__proto__=E.HQ;E.
Nn.__proto__=B.Core.Timer;E.LS.__proto__=B.Core.KJ;};E._ReInit=function(){var A;
if((A=E.HG._this))A._ReInit(),E.HG._ReInit.call(A);if((A=E.JA._this))A._ReInit()
,E.JA._ReInit.call(A);if((A=E.JC._this))A._ReInit(),E.JC._ReInit.call(A);if((A=E.
KF._this))A._ReInit(),E.KF._ReInit.call(A);};E.Ec=function(D){var A;if((A=E.HG._this
)&&(A._cycle!=D))A._Done(E.HG._this=null);if((A=E.JA._this)&&(A._cycle!=D))A._Done(
E.JA._this=null);if((A=E.JC._this)&&(A._cycle!=D))A._Done(E.JC._this=null);if((A=
E.KF._this)&&(A._cycle!=D))A._Done(E.KF._this=null);};return E;})();

/* Embedded Wizard */