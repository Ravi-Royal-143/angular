(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[58],{7058:(e,s,r)=>{"use strict";r.r(s),r.d(s,{CredentialModule:()=>y});var t=r(1116),i=r(1021),a=r(1462),n=r(8619),o=r(1036),l=r(2693);let u=(()=>{class e{constructor(e){this.http=e}authenticate(e){return this.http.post(o.QG.logIn,e)}}return e.\u0275fac=function(s){return new(s||e)(n.LFG(l.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=r(4719),d=r(2030),c=r(9892),g=r(6726);function m(e,s){1&e&&(n.TgZ(0,"span",14),n._uU(1," Please Enter Gmail"),n.qZA())}function Z(e,s){1&e&&(n.TgZ(0,"span",14),n._uU(1," Please Enter Valid Email"),n.qZA())}function h(e,s){1&e&&(n.TgZ(0,"span",14),n._uU(1," Please Enter Password"),n.qZA())}const f=function(){return["../","sign-up"]};let v=(()=>{class e{constructor(e,s,r,t,i,n){this.fb=e,this.logInService=s,this.router=r,this.route=t,this.toastMessageService=i,this.navBarService=n,this.userInfo=this.fb.group({gmail:["",[a.kI.required,a.kI.email]],password:["",a.kI.required]})}get formDetails(){return this.userInfo.controls}get gmailFormDetails(){return this.formDetails.gmail}get passwordFormDetails(){return this.formDetails.password}onSubmit(){this.checkOnSubmit();const{gmail:e,password:s}=this.userInfo.value;this.userInfo.invalid||this.logInService.authenticate({gmail:e,password:s}).subscribe(e=>{document.cookie="cookie="+e.cookie+";expires="+this.expTime().toUTCString()+";path=/",this.navBarService.isLoggedIn.next(!0),this.toastMessageService.showSuccessToast(["Sucessfully logged in."]),this.redirectionIfAny()})}expTime(){var e=new Date,s=e.getTime();return e.setTime(s+36e6),e}redirectionIfAny(){let e="/",s=this.route.snapshot.queryParams;s.redirectURL&&(e=s.redirectURL),e?this.router.navigateByUrl(e).catch(()=>this.router.navigate(["/"])):this.router.navigate(["/"])}onBlurFields(e){this[e]=!0}checkOnSubmit(){this.isgmailValidate=!0,this.ispasswordValidate=!0}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(a.qu),n.Y36(u),n.Y36(i.F0),n.Y36(i.gz),n.Y36(p.D),n.Y36(d.u))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-log-in"]],decls:25,vars:6,consts:[[1,"centerOfScreen",3,"formGroup"],[1,"p-col-12","p-xl-5","p-p-5","p-md-7","p-xs-12"],[1,"p-fluid","p-jc-center","chat-border","p-p-6"],[1,"p-col-12"],[1,"royal-ft-wt-700"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","email","pInputText","","placeholder","Gmail","formControlName","gmail",3,"blur"],["class","royal-color-red",4,"ngIf"],[1,"pi","pi-key"],["type","text","pInputText","","placeholder","Password","formControlName","password",3,"blur"],["label","Log-in",3,"onClick"],["queryParamsHandling","preserve",3,"routerLink"],[1,"royal-color-red"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"span",4),n._uU(5,"Log In"),n.qZA(),n.qZA(),n.TgZ(6,"div",3),n.TgZ(7,"div",5),n.TgZ(8,"span",6),n._UZ(9,"i",7),n.qZA(),n.TgZ(10,"input",8),n.NdJ("blur",function(){return s.onBlurFields("isgmailValidate")}),n.qZA(),n.qZA(),n.YNc(11,m,2,0,"span",9),n.YNc(12,Z,2,0,"span",9),n.qZA(),n.TgZ(13,"div",3),n.TgZ(14,"div",5),n.TgZ(15,"span",6),n._UZ(16,"i",10),n.qZA(),n.TgZ(17,"input",11),n.NdJ("blur",function(){return s.onBlurFields("ispasswordValidate")}),n.qZA(),n.qZA(),n.YNc(18,h,2,0,"span",9),n.qZA(),n.TgZ(19,"div",3),n.TgZ(20,"p-button",12),n.NdJ("onClick",function(){return s.onSubmit()}),n.qZA(),n.qZA(),n.TgZ(21,"div",3),n._uU(22," New member.Please "),n.TgZ(23,"a",13),n._uU(24," Sign-up"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",s.userInfo),n.xp6(11),n.Q6J("ngIf",s.isgmailValidate&&!s.gmailFormDetails.value),n.xp6(1),n.Q6J("ngIf",s.isgmailValidate&&s.gmailFormDetails.value&&s.gmailFormDetails.invalid),n.xp6(6),n.Q6J("ngIf",s.ispasswordValidate&&!s.passwordFormDetails.value),n.xp6(5),n.Q6J("routerLink",n.DdM(5,f)))},directives:[a.JL,a.sg,a.Fj,c.o,a.JJ,a.u,t.O5,g.zx,i.yS],styles:[""]}),e})(),T=(()=>{class e{constructor(e){this.http=e}signUp(e){return this.http.post(o.QG.signUp,e)}}return e.\u0275fac=function(s){return new(s||e)(n.LFG(l.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function q(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Please Enter User Name"),n.qZA())}function w(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Enter atleast 5 Character"),n.qZA())}function A(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Please Enter Gmail"),n.qZA())}function U(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Please Enter Valid Email"),n.qZA())}function I(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Please Enter Password"),n.qZA())}function b(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Passowrd must be atleast 8 Character"),n.qZA())}function S(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Please Retype Password"),n.qZA())}function D(e,s){1&e&&(n.TgZ(0,"span",17),n._uU(1," Password must be same"),n.qZA())}const N=function(){return["../","log-in"]},F=[{path:"log-in",component:v},{path:"sign-up",component:(()=>{class e{constructor(e,s,r,t,i){this.fb=e,this.signUpService=s,this.router=r,this.route=t,this.toastMessageService=i,this.userSignUp=this.fb.group({username:["",[a.kI.required,a.kI.minLength(5)]],gmail:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required,a.kI.minLength(8)]],repassword:["",a.kI.required]})}get formDetails(){return this.userSignUp.controls}get userNameFormDetails(){return this.formDetails.username}get gmailFormDetails(){return this.formDetails.gmail}get passwordFormDetails(){return this.formDetails.password}get repasswordFormDetails(){return this.formDetails.repassword}onSubmit(){this.checkOnSubmit();const{username:e,gmail:s,password:r,repassword:t}=this.userSignUp.value;let i=!1;i=!!this.userSignUp.invalid||this.checkDataPresent(),i=i||this.isPasswordSame(r,t),i||this.signUpService.signUp({gmail:s,password:r,username:e}).subscribe(e=>{this.toastMessageService.showSuccessToast([e.message]),this.router.navigate(["../","log-in"],{relativeTo:this.route,queryParamsHandling:"preserve"})})}onBlurFields(e){this[e]=!0}checkOnSubmit(){this.isgmailValidate=!0,this.isUserNameValidate=!0,this.ispasswordValidate=!0,this.isrepasswordValidate=!0}checkDataPresent(){const e=[];return Object.keys(this.userSignUp.controls).forEach(s=>{this.formDetails[s].value||e.push(`Please Enter ${s}`)}),!!e.length&&(this.toastMessageService.showErrorToast(e),!0)}isPasswordSame(e,s){return e!==s&&(this.toastMessageService.showErrorToast(["Password must be same"]),!0)}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(a.qu),n.Y36(T),n.Y36(i.F0),n.Y36(i.gz),n.Y36(p.D))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-sign-up"]],decls:40,vars:11,consts:[[1,"centerOfScreen",3,"formGroup"],[1,"p-col-12","p-xl-5","p-p-5","p-md-7","p-xs-12"],[1,"p-fluid","p-jc-center","chat-border","p-p-6"],[1,"p-col-12"],[1,"royal-ft-wt-700"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","text","pInputText","","placeholder","User Name","formControlName","username",3,"blur"],["class","royal-color-red",4,"ngIf"],[1,"pi","pi-envelope"],["type","email","pInputText","","placeholder","Email","formControlName","gmail",3,"blur"],[1,"pi","pi-key"],["type","text","pInputText","","placeholder","Password","formControlName","password",3,"blur"],["type","text","pInputText","","placeholder","Repeat password","formControlName","repassword",3,"blur"],["label","Sign Up",3,"onClick"],["queryParamsHandling","preserve",3,"routerLink"],[1,"royal-color-red"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"span",4),n._uU(5,"Sign Up"),n.qZA(),n.qZA(),n.TgZ(6,"div",3),n.TgZ(7,"div",5),n.TgZ(8,"span",6),n._UZ(9,"i",7),n.qZA(),n.TgZ(10,"input",8),n.NdJ("blur",function(){return s.onBlurFields("isUserNameValidate")}),n.qZA(),n.qZA(),n.YNc(11,q,2,0,"span",9),n.YNc(12,w,2,0,"span",9),n.qZA(),n.TgZ(13,"div",3),n.TgZ(14,"div",5),n.TgZ(15,"span",6),n._UZ(16,"i",10),n.qZA(),n.TgZ(17,"input",11),n.NdJ("blur",function(){return s.onBlurFields("isgmailValidate")}),n.qZA(),n.qZA(),n.YNc(18,A,2,0,"span",9),n.YNc(19,U,2,0,"span",9),n.qZA(),n.TgZ(20,"div",3),n.TgZ(21,"div",5),n.TgZ(22,"span",6),n._UZ(23,"i",12),n.qZA(),n.TgZ(24,"input",13),n.NdJ("blur",function(){return s.onBlurFields("ispasswordValidate")}),n.qZA(),n.qZA(),n.YNc(25,I,2,0,"span",9),n.YNc(26,b,2,0,"span",9),n.qZA(),n.TgZ(27,"div",3),n.TgZ(28,"div",5),n.TgZ(29,"span",6),n._UZ(30,"i",12),n.qZA(),n.TgZ(31,"input",14),n.NdJ("blur",function(){return s.onBlurFields("isrepasswordValidate")}),n.qZA(),n.qZA(),n.YNc(32,S,2,0,"span",9),n.YNc(33,D,2,0,"span",9),n.qZA(),n.TgZ(34,"div",3),n.TgZ(35,"p-button",15),n.NdJ("onClick",function(){return s.onSubmit()}),n.qZA(),n.qZA(),n.TgZ(36,"div",3),n._uU(37," Already member "),n.TgZ(38,"a",16),n._uU(39," Log-in"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",s.userSignUp),n.xp6(11),n.Q6J("ngIf",s.isUserNameValidate&&!s.userNameFormDetails.value),n.xp6(1),n.Q6J("ngIf",s.isUserNameValidate&&s.userNameFormDetails.value&&s.userNameFormDetails.invalid),n.xp6(6),n.Q6J("ngIf",s.isgmailValidate&&!s.gmailFormDetails.value),n.xp6(1),n.Q6J("ngIf",s.isgmailValidate&&s.gmailFormDetails.value&&s.gmailFormDetails.invalid),n.xp6(6),n.Q6J("ngIf",s.ispasswordValidate&&!s.passwordFormDetails.value),n.xp6(1),n.Q6J("ngIf",s.ispasswordValidate&&s.passwordFormDetails.value&&s.passwordFormDetails.invalid),n.xp6(6),n.Q6J("ngIf",s.isrepasswordValidate&&!s.repasswordFormDetails.value),n.xp6(1),n.Q6J("ngIf",s.ispasswordValidate&&s.isrepasswordValidate&&s.repasswordFormDetails.value&&s.repasswordFormDetails.value!==s.passwordFormDetails.value),n.xp6(5),n.Q6J("routerLink",n.DdM(10,N)))},directives:[a.JL,a.sg,a.Fj,c.o,a.JJ,a.u,t.O5,g.zx,i.yS],styles:[""]}),e})()},{path:"",redirectTo:"add",pathMatch:"full"}];let k=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.Bz.forChild(F)],i.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[t.ez,a.u5,a.UX,k,c.j,g.hJ]]}),e})()}}]);