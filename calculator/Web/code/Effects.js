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
var AV=[0,0,100,100];
E.HN={CN:null,timer:null,HC:null,JH:null,Kd:0,G8:0,Hm:0,FT:0,Ko:0.001,De:0,Ba:0,Bg:
0,E2:0,Gb:1000,Gh:0,HZ:0,BI:false,Nk:false,Os:false,Qg:false,DD:function(X){var A;
if(!this.timer)return;if(!this.G8){if(this.Nk)this.G8=-1;else this.G8=1;this.Kd=
this.G8;this.Bg=this.timer.AA;this.Ba=0;this.De=-1;}var Db;if((this.G8>0)&&(this.
Kd>0))Db=this.Uq();else if((this.G8<0)&&(this.Kd<0))Db=this.Ut();else if(this.G8>
0)Db=this.Ur();else Db=this.Us();if(Db){this.Ah(false);(A=this.HC)?A[1].call(A[0
],this):null;(A=this.JH)?A[1].call(A[0],this):null;}},L$:function(L){if(!this.CN&&(((
this.HZ===19)||(this.HZ===20))||(this.HZ===21))){var Iq=0.5;var G;this.CN=B._NewObject(
E.Lw,0);this.CN.C4.Set(0,1);this.CN.Hk.Set(0,1);for(G=1;G<4;G=G+1){this.CN.C4.Set(
G,this.CN.C4.Get(G-1)*0.707107);this.CN.Hk.Set(G,this.CN.Hk.Get(G-1)*0.5);Iq=Iq+
this.CN.C4.Get(G);}var T5=1/Iq;this.CN.C4.Set(0,0.5);Iq=0;for(G=0;G<4;G=G+1){this.
CN.C4.Set(G,this.CN.C4.Get(G)*T5);Iq=Iq+this.CN.C4.Get(G);}this.CN.C4.Set(4,this.
CN.C4.Get(4)+(1-Iq));}switch(this.HZ){case 1:L=Math.pow(L,3);break;case 2:{L=1-L;
L=1-Math.pow(L,3);}break;case 3:{L=L*2;if(L<1)L=Math.pow(L,3)/2;else{L=2-L;L=(2-
Math.pow(L,3))*0.5;}}break;case 4:L=(Math.pow(2.718,3*L)-1)/19.0793;break;case 5:{
L=1-L;L=1-((Math.pow(2.718,3*L)-1)/19.0793);}break;case 6:{L=L*2;if(L<1)L=((Math.
pow(2.718,3*L)-1)/19.0793)/2;else{L=2-L;L=(2-((Math.pow(2.718,3*L)-1)/19.0793))*
0.5;}}break;case 7:L=1-Math.cos((L*90)*B.k$);break;case 8:L=Math.sin((L*90)*B.k$
);break;case 9:{L=L*2;if(L<1){L=1-Math.cos((L*90)*B.k$);L=L*0.5;}else{L=2-L;L=1-
Math.cos((L*90)*B.k$);L=(2-L)*0.5;}}break;case 10:L=1-Math.sqrt(1-(L*L));break;case
11:{L=1-L;L=Math.sqrt(1-(L*L));}break;case 12:{L=L*2;if(L<1){L=1-Math.sqrt(1-(L*
L));L=L*0.5;}else{L=2-L;L=1-Math.sqrt(1-(L*L));L=(2-L)*0.5;}}break;case 13:L=((L
*L)*L)-((L*0.5)*Math.sin((L*180)*B.k$));break;case 14:{L=1-L;L=((L*L)*L)-((L*0.5
)*Math.sin((L*180)*B.k$));L=1-L;}break;case 15:{L=L*2;if(L<1){L=((L*L)*L)-((L*0.5
)*Math.sin((L*180)*B.k$));L=L*0.5;}else{L=2-L;L=((L*L)*L)-((L*0.5)*Math.sin((L*180
)*B.k$));L=(2-L)*0.5;}}break;case 16:L=((L*L)*L)*Math.sin(((L*90)*13)*B.k$);break;
case 17:{L=1-L;L=1-(((L*L)*L)*Math.sin(((L*90)*13)*B.k$));}break;case 18:{L=L*2;
if(L<1){L=((L*L)*L)*Math.sin(((L*90)*13)*B.k$);L=L*0.5;}else{L=2-L;L=((L*L)*L)*Math.
sin(((L*90)*13)*B.k$);L=(2-L)*0.5;}}break;case 19:{var BD=this.CN;var G=0;var Fs=
0;var Di=BD.C4.Get(0);var B5=1-L;while(B5>Di){G=G+1;Fs=Di;Di=Di+BD.C4.Get(G);}L=(
B5-Fs)/(Di-Fs);if(!G)L=1-(L*L);else{L=(2*L)-1;L=BD.Hk.Get(G)*(1-(L*L));}}break;case
20:{var BD=this.CN;var G=0;var Fs=0;var Di=BD.C4.Get(0);while(L>Di){G=G+1;Fs=Di;
Di=Di+BD.C4.Get(G);}L=(L-Fs)/(Di-Fs);if(!G)L=L*L;else{L=(2*L)-1;L=1-(BD.Hk.Get(G
)*(1-(L*L)));}}break;case 21:{var BD=this.CN;var G=0;var Fs=0;var Di=BD.C4.Get(0
);var C2=L*2;var B5=C2-1;if(C2<1)B5=-B5;while(B5>Di){G=G+1;Fs=Di;Di=Di+BD.C4.Get(
G);}B5=(B5-Fs)/(Di-Fs);if(!G)B5=B5*B5;else{B5=(2*B5)-1;B5=1-(BD.Hk.Get(G)*(1-(B5
*B5)));}if(C2<1)L=0.5*(1-B5);else L=0.5*(1+B5);}break;default:if(this.Os){var C2=
L;var Ky=1-C2;L=((Ky*C2)*(this.FT+1))+(C2*C2);}else if(this.Qg){var C2=L;var Ky=
1-C2;var Px=C2*C2;var T8=Ky*Ky;L=(((T8*C2)*(this.FT+1))+((Ky*Px)*(this.Hm+2)))+(
Px*C2);}}this.Mh(L);},Ut:function(){var As=(this.timer.AA-this.Bg)|0;if(As<0)As=-
As;var DT=0;var Ey=this.Gb;var BY=this.Gh+this.Gb;var Db=false;var AD=this.De;if(
!this.Ba&&(As>=Ey)){this.Ba=1;As=As-Ey;this.Bg=this.Bg+Ey;}if((this.Ba>0)&&(As>=
BY)){var B_=(As/BY)|0;this.Ba=this.Ba+B_;As=As-(B_*BY);this.Bg=this.Bg+(B_*BY);}
if((this.Ba>2)&&!this.E2)this.Ba=1;if(this.Ba>0)DT=this.Gh;if((this.Ba>=this.E2)&&(
this.E2>0)){Db=true;AD=0;}else if(As>=DT)AD=1-((As-DT)*this.Ko);else if(AD>=0)AD=
0;if(AD!==this.De){if(AD<0)AD=0;if(AD>1)AD=1;}if(AD!==this.De){this.De=AD;this.L$(
AD);}return Db;},Us:function(){var As=(this.Bg-this.timer.AA)|0;var DT=0;var Ey=
this.Gb;var BY=this.Gh+this.Gb;var Db=false;var AD=this.De;if((this.Ba>1)&&(As<0
)){var B_=(((-As+BY)-1)/BY)|0;if((this.Ba-B_)<=0)B_=this.Ba-1;this.Ba=this.Ba-B_;
As=As+(B_*BY);this.Bg=this.Bg+(B_*BY);}if(((this.Ba===1)&&(As<0))&&(this.E2>0)){
this.Ba=0;As=As+Ey;this.Bg=this.Bg+Ey;}if(((this.Ba===1)&&(As<0))&&!this.E2){var
B_=(((-As+BY)-1)/BY)|0;As=As+(B_*BY);this.Bg=this.Bg+(B_*BY);}if(this.Ba>0)DT=this.
Gh;if(As<0){Db=true;AD=1;}else if(As>=DT)AD=1-((As-DT)*this.Ko);else if(AD>=0)AD=
1;if(AD!==this.De){if(AD<0)AD=0;if(AD>1)AD=1;}if(AD!==this.De){this.De=AD;this.L$(
AD);}return Db;},Ur:function(){var As=(this.Bg-this.timer.AA)|0;var DT=0;var Ey=
this.Gb;var BY=this.Gh+this.Gb;var Db=false;var AD=this.De;if((this.Ba>1)&&(As<0
)){var B_=(((-As+BY)-1)/BY)|0;if((this.Ba-B_)<=0)B_=this.Ba-1;this.Ba=this.Ba-B_;
As=As+(B_*BY);this.Bg=this.Bg+(B_*BY);}if(((this.Ba===1)&&(As<0))&&(this.E2>0)){
this.Ba=0;As=As+Ey;this.Bg=this.Bg+Ey;}if(((this.Ba===1)&&(As<0))&&!this.E2){var
B_=(((-As+BY)-1)/BY)|0;As=As+(B_*BY);this.Bg=this.Bg+(B_*BY);}if(this.Ba>0)DT=this.
Gh;if(As<0){Db=true;AD=0;}else if(As>=DT)AD=(As-DT)*this.Ko;else if(AD>=0)AD=0;if(
AD!==this.De){if(AD<0)AD=0;if(AD>1)AD=1;}if(AD!==this.De){this.De=AD;this.L$(AD);
}return Db;},Uq:function(){var As=(this.timer.AA-this.Bg)|0;if(As<0)As=-As;var DT=
0;var Ey=this.Gb;var BY=this.Gh+this.Gb;var Db=false;var AD=this.De;if(!this.Ba&&(
As>=Ey)){this.Ba=1;As=As-Ey;this.Bg=this.Bg+Ey;}if((this.Ba>0)&&(As>=BY)){var B_=(
As/BY)|0;this.Ba=this.Ba+B_;As=As-(B_*BY);this.Bg=this.Bg+(B_*BY);}if((this.Ba>2
)&&!this.E2)this.Ba=1;if(this.Ba>0)DT=this.Gh;if((this.Ba>=this.E2)&&(this.E2>0)
){Db=true;AD=1;}else if(As>=DT)AD=(As-DT)*this.Ko;else if(AD>=0)AD=1;if(AD!==this.
De){if(AD<0)AD=0;if(AD>1)AD=1;}if(AD!==this.De){this.De=AD;this.L$(AD);}return Db;
},OT:function(C){if(this.Nk===C)return;this.Nk=C;if(!this.BI||!this.G8)return;if(
C)this.Kd=-1;else this.Kd=1;this.Bg=(this.timer.Jz()*2)-this.Bg;},RX:function(C){
if(this.HZ===C)return;this.HZ=C;this.CN=null;switch(C){case 24:{this.FT=-1.1;this.
Hm=1.1;}break;case 22:{this.FT=-1;this.Hm=-2;}break;case 23:{this.FT=2;this.Hm=1;
}break;case 25:{this.FT=1.1;this.Hm=-1.1;}break;default:{this.FT=0;this.Hm=0;}}this.
Os=(this.FT===this.Hm)&&!!this.FT;this.Qg=!this.Os&&(this.FT!==this.Hm);},IN:function(
C){if(C<0)C=0;this.E2=C;},Li:function(C){if(C<15)C=15;this.Gb=C;this.Ko=1/C;},Rw:
function(C){if(C<0)C=0;this.Gh=C;},Ah:function(C){if(this.BI===C)return;this.BI=
C;if(!C&&!!this.timer){B.z9([this,this.DD],this.timer,0);this.timer=null;}if(C){
this.timer=B._GetAutoObject(E.G9);B.zV([this,this.DD],this.timer,0);this.G8=0;B.
pe([this,this.DD],this);}},Mh:function(H8){},_Init:function(aArg){this.__proto__=
E.HN;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.CN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.HC)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.JH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};E.BS={A2:null,J7:0,FK:255,C1:0,Mh:function(H8){var
B1;this.J7=this.C1+(Math.round((this.FK-this.C1)*H8)|0);if(!!this.A2)(B1=this.A2
,B1[2].call(B1[0],this.J7));},_Init:function(aArg){E.HN._Init.call(this,aArg);this.
__proto__=E.BS;},_Mark:function(D){var A;E.HN._Mark.call(this,D);if((A=this.A2)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};E.Ni={
A2:null,J7:B.wg,FK:AV,C1:B.wg,Mh:function(H8){var B1;var Ab=this.C1[0];var Ac=this.
C1[1];var Z=this.C1[2];var Ad=this.C1[3];Ab=Ab+(Math.round((this.FK[0]-Ab)*H8)|0
);Ac=Ac+(Math.round((this.FK[1]-Ac)*H8)|0);Z=Z+(Math.round((this.FK[2]-Z)*H8)|0);
Ad=Ad+(Math.round((this.FK[3]-Ad)*H8)|0);this.J7=[Ab,Ac,Z,Ad];if(!!this.A2)(B1=this.
A2,B1[2].call(B1[0],this.J7));},_Init:function(aArg){E.HN._Init.call(this,aArg);
this.__proto__=E.Ni;},_Mark:function(D){var A;E.HN._Mark.call(this,D);if((A=this.
A2)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::RectEffect"
};E.HZ={Vp:0,Vy:1,VA:2,Vz:3,U$:4,Vb:5,Va:6,VQ:7,VS:8,VR:9,UY:10,U0:11,UZ:12,UO:13
,UQ:14,UP:15,U7:16,U9:17,U8:18,UV:19,UX:20,UW:21,U6:22,Vc:23,U5:24,Vd:25,U1:26};
E.Mv={Trigger:function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(
aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=E.Mv;},_className:"Effects::EffectTimerClass"
};E.G9={_Init:function(){E.Mv._Init.call(this,0);this.FD(15);this.Ah(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};E.Lw={C4:B.abi(12,0,
null),Hk:B.abi(12,0,null),_Init:function(aArg){(this.C4=[]).__proto__=E.Lw.C4;(this.
Hk=[]).__proto__=E.Lw.Hk;this.__proto__=E.Lw;B.h7++;},_Done:function(){this.__proto__=
null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle
!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Effects::TimingList"
};
E._Init=function(){E.BS.__proto__=E.HN;E.Ni.__proto__=E.HN;E.Mv.__proto__=B.Core.
Timer;};E._ReInit=function(){var A;if((A=E.G9._this))A._ReInit(),E.G9._ReInit.call(
A);};E.DN=function(D){var A;if((A=E.G9._this)&&(A._cycle!=D))A._Done(E.G9._this=
null);};return E;})();

/* Embedded Wizard */