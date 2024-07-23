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

E.JK={timer:null,LZ:0,HO:0,Ji:0.001,CK:0,AI:0,AX:0,Ef:0,Dx:1000,Dy:0,Cp:false,Cx:
function(Aw){if(!this.timer)return;if(!this.HO){this.HO=1;this.LZ=this.HO;this.AX=
this.timer.An;this.AI=0;this.CK=-1;}var CJ;if((this.HO>0)&&(this.LZ>0))CJ=this.RC(
);else if((this.HO<0)&&(this.LZ<0))CJ=this.RF();else if(this.HO>0)CJ=this.RD();else
CJ=this.RE();if(CJ)this.BU(false);},KL:function(QZ){this.Mp(QZ);},RF:function(){
var X=(this.timer.An-this.AX)|0;if(X<0)X=-X;var Cv=0;var C7=this.Dx;var A$=this.
Dy+this.Dx;var CJ=false;var Ar=this.CK;if(!this.AI&&(X>=C7)){this.AI=1;X=X-C7;this.
AX=this.AX+C7;}if((this.AI>0)&&(X>=A$)){var Bl=(X/A$)|0;this.AI=this.AI+Bl;X=X-(
Bl*A$);this.AX=this.AX+(Bl*A$);}if((this.AI>2)&&!this.Ef)this.AI=1;if(this.AI>0)
Cv=this.Dy;if((this.AI>=this.Ef)&&(this.Ef>0)){CJ=true;Ar=0;}else if(X>=Cv)Ar=1-((
X-Cv)*this.Ji);else if(Ar>=0)Ar=0;if(Ar!==this.CK){if(Ar<0)Ar=0;if(Ar>1)Ar=1;}if(
Ar!==this.CK){this.CK=Ar;this.KL(Ar);}return CJ;},RE:function(){var X=(this.AX-this.
timer.An)|0;var Cv=0;var C7=this.Dx;var A$=this.Dy+this.Dx;var CJ=false;var Ar=this.
CK;if((this.AI>1)&&(X<0)){var Bl=(((-X+A$)-1)/A$)|0;if((this.AI-Bl)<=0)Bl=this.AI-
1;this.AI=this.AI-Bl;X=X+(Bl*A$);this.AX=this.AX+(Bl*A$);}if(((this.AI===1)&&(X<
0))&&(this.Ef>0)){this.AI=0;X=X+C7;this.AX=this.AX+C7;}if(((this.AI===1)&&(X<0))&&
!this.Ef){var Bl=(((-X+A$)-1)/A$)|0;X=X+(Bl*A$);this.AX=this.AX+(Bl*A$);}if(this.
AI>0)Cv=this.Dy;if(X<0){CJ=true;Ar=1;}else if(X>=Cv)Ar=1-((X-Cv)*this.Ji);else if(
Ar>=0)Ar=1;if(Ar!==this.CK){if(Ar<0)Ar=0;if(Ar>1)Ar=1;}if(Ar!==this.CK){this.CK=
Ar;this.KL(Ar);}return CJ;},RD:function(){var X=(this.AX-this.timer.An)|0;var Cv=
0;var C7=this.Dx;var A$=this.Dy+this.Dx;var CJ=false;var Ar=this.CK;if((this.AI>
1)&&(X<0)){var Bl=(((-X+A$)-1)/A$)|0;if((this.AI-Bl)<=0)Bl=this.AI-1;this.AI=this.
AI-Bl;X=X+(Bl*A$);this.AX=this.AX+(Bl*A$);}if(((this.AI===1)&&(X<0))&&(this.Ef>0
)){this.AI=0;X=X+C7;this.AX=this.AX+C7;}if(((this.AI===1)&&(X<0))&&!this.Ef){var
Bl=(((-X+A$)-1)/A$)|0;X=X+(Bl*A$);this.AX=this.AX+(Bl*A$);}if(this.AI>0)Cv=this.
Dy;if(X<0){CJ=true;Ar=0;}else if(X>=Cv)Ar=(X-Cv)*this.Ji;else if(Ar>=0)Ar=0;if(Ar
!==this.CK){if(Ar<0)Ar=0;if(Ar>1)Ar=1;}if(Ar!==this.CK){this.CK=Ar;this.KL(Ar);}
return CJ;},RC:function(){var X=(this.timer.An-this.AX)|0;if(X<0)X=-X;var Cv=0;var
C7=this.Dx;var A$=this.Dy+this.Dx;var CJ=false;var Ar=this.CK;if(!this.AI&&(X>=C7
)){this.AI=1;X=X-C7;this.AX=this.AX+C7;}if((this.AI>0)&&(X>=A$)){var Bl=(X/A$)|0;
this.AI=this.AI+Bl;X=X-(Bl*A$);this.AX=this.AX+(Bl*A$);}if((this.AI>2)&&!this.Ef
)this.AI=1;if(this.AI>0)Cv=this.Dy;if((this.AI>=this.Ef)&&(this.Ef>0)){CJ=true;Ar=
1;}else if(X>=Cv)Ar=(X-Cv)*this.Ji;else if(Ar>=0)Ar=1;if(Ar!==this.CK){if(Ar<0)Ar=
0;if(Ar>1)Ar=1;}if(Ar!==this.CK){this.CK=Ar;this.KL(Ar);}return CJ;},O2:function(
C){if(C<0)C=0;this.Ef=C;},J0:function(C){if(C<15)C=15;this.Dx=C;this.Ji=1/C;},J3:
function(C){if(C<0)C=0;this.Dy=C;},BU:function(C){if(this.Cp===C)return;this.Cp=
C;if(!C&&!!this.timer){B.z9([this,this.Cx],this.timer,0);this.timer=null;}if(C){
this.timer=B._GetAutoObject(E.Fb);B.zV([this,this.Cx],this.timer,0);this.HO=0;B.
pe([this,this.Cx],this);}},Mp:function(M8){},_Init:function(aArg){this.__proto__=
E.JK;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);},K:null,_cycle:0,_observers:null,_className:
"Effects::Effect"};E.C_={Et:null,MW:0,Hd:0,Mp:function(M8){var DD;this.MW=this.Hd+(
Math.round((255-this.Hd)*M8)|0);if(!!this.Et)(DD=this.Et,DD[2].call(DD[0],this.MW
));},_Init:function(aArg){E.JK._Init.call(this,aArg);this.__proto__=E.C_;},_Mark:
function(D){var A;E.JK._Mark.call(this,D);if((A=this.Et)&&((A=A[0])._cycle!=D))A.
_Mark(A._cycle=D);},_className:"Effects::Int32Effect"};E.Dg={timer:null,Et:null,
AI:0,AX:0,Dx:1000,Dy:1000,Cp:false,Hd:false,LK:true,Cx:function(Aw){var DD;if(!this.
timer)return;if(this.AI<0){this.AX=this.timer.An;this.AI=0;}var X=(this.timer.An-
this.AX)|0;var C7=this.Dx;var A$=this.Dy+this.Dx;var Cv=0;var Ez=this.AI;if(!Ez&&(
X>=C7)){Ez=1;X=X-C7;}if((Ez>0)&&(X>=A$)){var Bl=(X/A$)|0;X=X-(Bl*A$);Ez=Ez+Bl;}if(
Ez>2)Ez=1;if(Ez!==this.AI){this.AX=this.timer.An-(((A=X)<0)?A+0x100000000:A);this.
AI=Ez;}if(Ez>0)Cv=this.Dy;if(!!this.Et){if(X>=Cv)(DD=this.Et,DD[2].call(DD[0],this.
Hd));if((X<Cv)&&(Ez>0))(DD=this.Et,DD[2].call(DD[0],this.LK));}},J0:function(C){
if(C<100)C=100;this.Dx=C;},J3:function(C){if(C<0)C=0;this.Dy=C;},BU:function(C){
if(this.Cp===C)return;this.Cp=C;if(!C&&!!this.timer){B.z9([this,this.Cx],this.timer
,0);this.timer=null;}if(C){this.timer=B._GetAutoObject(E.Fb);B.zV([this,this.Cx]
,this.timer,0);this.AI=-1;}},_Init:function(aArg){this.__proto__=E.Dg;B.h7++;},_Done:
function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var
A;if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Et)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle!=D))A._Mark(A._cycle=D);
},K:null,_cycle:0,_observers:null,_className:"Effects::BoolEffect"};E.K1={Trigger:
function(){B.Core.Timer.Trigger.call(this);B.we(this,0);},_Init:function(aArg){B.
Core.Timer._Init.call(this,aArg);this.__proto__=E.K1;},_className:"Effects::EffectTimerClass"
};E.Fb={_Init:function(){E.K1._Init.call(this,0);this.IS(15);this.BU(true);},_ReInit:
function(){},_variants:function(){return this;},_this:null};
E._Init=function(){E.C_.__proto__=E.JK;E.K1.__proto__=B.Core.Timer;};E._ReInit=function(
){var A;if((A=E.Fb._this))A._ReInit(),E.Fb._ReInit.call(A);};E.Dc=function(D){var
A;if((A=E.Fb._this)&&(A._cycle!=D))A._Done(E.Fb._this=null);};return E;})();

/* Embedded Wizard */