(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[269],{4269:(e,s,t)=>{"use strict";t.r(s),t.d(s,{UserDetailsModule:()=>q});var r=t(1116),l=t(9892),n=t(6726),o=t(1462),i=t(1021),a=t(1520);class u{constructor(e){this.fb=e,this.waitingForRes="Be ready",this.result="",this.intervals=[],this.removalOrder=[],this.flamesTexts=[{name:"Friends",isCancel:!1,shortForm:"f"},{name:"Love",isCancel:!1,shortForm:"l"},{name:"Affair",isCancel:!1,shortForm:"a"},{name:"Marriage",isCancel:!1,shortForm:"m"},{name:"Enemy",isCancel:!1,shortForm:"e"},{name:"Sister",isCancel:!1,shortForm:"s"}],this.userData=this.fb.group({yourName:["",o.kI.required],crushName:["",o.kI.required]}),this.flames={f:"Friends",l:"Love",a:"Affair",m:"Marriage",e:"Enemy",s:"Sister"}}}var c=t(8619),m=t(1036),f=t(2693);let h=(()=>{class e{constructor(e){this.http=e}getCrush(e){return this.http.post(m.Q.crush,e)}}return e.\u0275fac=function(s){return new(s||e)(c.LFG(f.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function d(e,s){1&e&&(c.TgZ(0,"span",15),c._uU(1," Enter Your Name"),c.qZA())}function p(e,s){1&e&&(c.TgZ(0,"span",15),c._uU(1," Enter Your Crush Name"),c.qZA())}function g(e,s){if(1&e){const e=c.EpF();c.TgZ(0,"div"),c.TgZ(1,"div",5),c.TgZ(2,"span",6),c._uU(3," FLAMES "),c.qZA(),c.qZA(),c.TgZ(4,"div",5),c.TgZ(5,"div",7),c.TgZ(6,"span",8),c._UZ(7,"i",9),c.qZA(),c.TgZ(8,"input",10),c.NdJ("blur",function(){return c.CHM(e),c.oxw().onBlurFields("iscrushNameValidate")}),c.qZA(),c.qZA(),c.YNc(9,d,2,0,"span",11),c.qZA(),c.TgZ(10,"div",5),c._UZ(11,"span",12),c.qZA(),c.TgZ(12,"div",5),c.TgZ(13,"div",7),c.TgZ(14,"span",8),c._UZ(15,"i",9),c.qZA(),c.TgZ(16,"input",13),c.NdJ("blur",function(){return c.CHM(e),c.oxw().onBlurFields("iscrushNameValidate")}),c.qZA(),c.qZA(),c.YNc(17,p,2,0,"span",11),c.qZA(),c.TgZ(18,"div",5),c.TgZ(19,"p-button",14),c.NdJ("onClick",function(){return c.CHM(e),c.oxw().onSubmit()}),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(9),c.Q6J("ngIf",e.flamesModel.isyourNameValidate&&!e.yourNameDetails.value),c.xp6(8),c.Q6J("ngIf",e.flamesModel.isyourNameValidate&&!e.crushNameFormDetails.value)}}function v(e,s){1&e&&(c.TgZ(0,"div"),c._uU(1,"here is ignored"),c.qZA())}const Z=function(e){return{"txt-dcr-line-thr":e}};function M(e,s){if(1&e&&(c.TgZ(0,"div"),c.TgZ(1,"div",20),c._uU(2),c.qZA(),c.qZA()),2&e){const e=s.$implicit;c.xp6(1),c.Q6J("ngClass",c.VKq(2,Z,e.isCancel)),c.xp6(1),c.hij(" ",e.name," ")}}function N(e,s){if(1&e&&c.YNc(0,M,3,4,"div",19),2&e){const e=c.oxw(2);c.Q6J("ngForOf",e.flamesModel.flamesTexts)}}function C(e,s){if(1&e&&(c._uU(0),c.ALo(1,"uppercase")),2&e){const e=c.oxw(2);c.hij(" ",c.lcZ(1,1,e.flamesModel.waitingForRes)," ")}}function A(e,s){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,v,2,0,"div",16),c.YNc(2,N,1,1,"ng-template",null,17,c.W1O),c.YNc(4,C,2,3,"ng-template",null,18,c.W1O),c.qZA()),2&e){const e=c.MAs(3),s=c.MAs(5),t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.flamesModel.removalOrder.length)("ngIfThen",e)("ngIfElse",s)}}function T(e,s){if(1&e){const e=c.EpF();c.TgZ(0,"p-button",21),c.NdJ("onClick",function(){return c.CHM(e),c.oxw().reset()}),c.qZA()}}const w=function(e){return{res:e}},x=[{path:"flames",component:(()=>{class e{constructor(e,s){this.fb=e,this.crushService=s,this.flamesModel=new u(this.fb),this.fla=["f","l","a","m","e","s"]}get formDetails(){return this.flamesModel.userData.controls}get yourNameDetails(){return this.formDetails.yourName}get crushNameFormDetails(){return this.formDetails.crushName}onSubmit(){if(this.checkOnSubmit(),this.flamesModel.userData.invalid)return;const{yourName:e,crushName:s,flamesRes:t}=this.flamesLogic();this.crushService.getCrush({yourName:e,crushName:s,flamesRes:t}).pipe((0,a.x)(()=>{this.oneByOneRes(),this.flamesModel.result=t})).subscribe()}flamesLogic(){const{yourName:e,crushName:s}=this.flamesModel.userData.value;let t=e.trim(),r=s.trim();if(t==r)return void(this.flamesModel.result="Enemy");const l=/\s+/g;t=t.toLowerCase().replace(l,"").split(""),r=r.toLowerCase().replace(l,"").split(""),t.forEach((e,s)=>{r.forEach((e,l)=>{t[s]===r[l]&&""!=t[s]&&(t[s]="",r[l]="")})}),t=t.join(""),r=r.join("");let n=t.length+r.length;n-=1;let o=["f","l","a","m","e","s"];for(;o.length>1;){const e=n%o.length;this.flamesModel.removalOrder.push(o[e]),o[e]=" ",o=o.join("").trim().split(" "),o.length>1&&(o=o.reverse().join("").split("")),o=o.join("").split("")}return{yourName:e,crushName:s,flamesRes:this.flamesModel.flames[o.join("")]}}oneByOneRes(){const e=setInterval(()=>{const s=this.flamesModel.removalOrder.shift(),t=this.flamesModel.flamesTexts.findIndex(e=>e.shortForm===s);this.flamesModel.flamesTexts[t].isCancel=!0,this.flamesModel.removalOrder.length||(clearInterval(e),this.showResSlow(),this.removeIntervalFromModel("oneByOneResinterval"))},2e3);this.flamesModel.intervals.push({name:"oneByOneResinterval",interval:e})}showResSlow(){let e=5;const s=setInterval(()=>{e--,this.flamesModel.waitingForRes=`Result in ${e}`,e||(this.flamesModel.waitingForRes=this.flamesModel.result,clearInterval(s),this.removeIntervalFromModel("showResSlowinterval1"))},1e3);this.flamesModel.intervals.push({name:"showResSlowinterval",interval:s})}onBlurFields(e){this[e]=!0}checkOnSubmit(){this.flamesModel.isyourNameValidate=!0,this.flamesModel.iscrushNameValidate=!0}reset(){this.flamesModel=new u(this.fb),this.flamesModel.intervals.length&&this.flamesModel.intervals.map(e=>this.removeIntervalFromModel(e.name))}removeIntervalFromModel(e){var s;clearInterval(null===(s=this.flamesModel.intervals.find(s=>s.name==e))||void 0===s?void 0:s.interval),this.flamesModel.intervals=this.flamesModel.intervals.filter(s=>s.name!==e)}}return e.\u0275fac=function(s){return new(s||e)(c.Y36(o.qu),c.Y36(h))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-flames"]],decls:6,vars:7,consts:[[1,"centerOfScreen",3,"formGroup"],[1,"p-col-12","p-xl-5","p-p-5","p-md-7","p-xs-12"],[1,"p-fluid","p-jc-center","chat-border","p-p-6",3,"ngClass"],[4,"ngIf"],["label","Check Next Crush","icon","pi pi-refresh","iconPos","right",3,"onClick",4,"ngIf"],[1,"p-col-12"],[1,"royal-ft-wt-700"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","email","pInputText","","placeholder","Your Name","formControlName","yourName",3,"blur"],["class","royal-color-red",4,"ngIf"],[1,"pi","pi-heart","royal-color-red"],["type","text","pInputText","","placeholder","Crush Name","formControlName","crushName",3,"blur"],["label","Calculate",3,"onClick"],[1,"royal-color-red"],[4,"ngIf","ngIfThen","ngIfElse"],["content",""],["other_content",""],[4,"ngFor","ngForOf"],[3,"ngClass"],["label","Check Next Crush","icon","pi pi-refresh","iconPos","right",3,"onClick"]],template:function(e,s){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.YNc(3,g,20,2,"div",3),c.YNc(4,A,6,3,"div",3),c.qZA(),c.YNc(5,T,1,0,"p-button",4),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",s.flamesModel.userData),c.xp6(2),c.Q6J("ngClass",c.VKq(5,w,s.flamesModel.result)),c.xp6(1),c.Q6J("ngIf",!s.flamesModel.result),c.xp6(1),c.Q6J("ngIf",s.flamesModel.result),c.xp6(1),c.Q6J("ngIf",s.flamesModel.result))},directives:[o.JL,o.sg,r.mk,r.O5,o.Fj,l.o,o.JJ,o.u,n.zx,r.sg],pipes:[r.gd],styles:[".res[_ngcontent-%COMP%]{background:#7fffd4}"]}),e})()},{path:"",redirectTo:"flames",pathMatch:"full"}];let y=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Bz.forChild(x)],i.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,o.UX,n.hJ,o.u5,l.j]]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.ez,o.u5,l.j,n.hJ,o.UX,y,F]]}),e})()}}]);