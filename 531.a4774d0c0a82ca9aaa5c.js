(self.webpackChunkfirst_app=self.webpackChunkfirst_app||[]).push([[531],{2531:(e,s,t)=>{"use strict";t.r(s),t.d(s,{CredentialModule:()=>B});var r=t(1116),a=t(1462),i=t(9892),o=t(6726),n=t(322),l=t(6472),p=t(8619),u=t(4719),d=t(1036),c=t(2693);let g=(()=>{class e{constructor(e){this.http=e}resetPass(e,s,t){return this.http.post(d.Q.resetPassEnd.replace("<ResetMail>",e).replace("<ResetToken>",s),{password:t})}}return e.\u0275fac=function(s){return new(s||e)(p.LFG(c.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,s){1&e&&(p.TgZ(0,"span",12),p._uU(1," Please Enter Password"),p.qZA())}function Z(e,s){1&e&&(p.TgZ(0,"span",12),p._uU(1," Passowrd must be atleast 8 Character"),p.qZA())}function h(e,s){1&e&&(p.TgZ(0,"span",12),p._uU(1," Please Retype Password"),p.qZA())}function f(e,s){1&e&&(p.TgZ(0,"span",12),p._uU(1," Password must be same"),p.qZA())}let w=(()=>{class e{constructor(e,s,t,r,i){this.route=e,this.toastMessageService=s,this.fb=t,this.router=r,this.forgetPasswordService=i,this.resettingPass=this.fb.group({password:["",[a.kI.required,a.kI.minLength(8)]],repassword:["",a.kI.required]})}get formDetails(){return this.resettingPass.controls}get passwordFormDetails(){return this.formDetails.password}get repasswordFormDetails(){return this.formDetails.repassword}ngOnInit(){this.route.params.subscribe(e=>{this.gmail=e.gmail,this.token=e.token})}onBlurFields(e){this[e]=!0}onSubmit(){this.checkOnSubmit();const{password:e,repassword:s}=this.resettingPass.value;let t=!1;t=t||this.isPasswordSame(e,s),t||this.forgetPasswordService.resetPass(this.gmail,this.token,this.passwordFormDetails.value).subscribe(e=>{this.toastMessageService.showSuccessToast([e.message]),this.router.navigate(["../../../","log-in"],{relativeTo:this.route,queryParamsHandling:"preserve"})})}checkOnSubmit(){this.ispasswordValidate=!0,this.isrepasswordValidate=!0}isPasswordSame(e,s){return e!==s&&(this.toastMessageService.showErrorToast(["Password must be same"]),!0)}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(l.gz),p.Y36(u.D),p.Y36(a.qu),p.Y36(l.F0),p.Y36(g))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-forget-password"]],decls:22,vars:5,consts:[[1,"centerOfScreen",3,"formGroup"],[1,"p-col-12","p-xl-5","p-p-5","p-md-7","p-xs-12"],[1,"p-fluid","p-jc-center","chat-border","p-p-6"],[1,"p-col-12"],[1,"royal-ft-wt-700"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-key"],["type","password","pInputText","","placeholder","Password","formControlName","password",3,"blur"],["class","royal-color-red",4,"ngIf"],["type","password","pInputText","","placeholder","Repeat password","formControlName","repassword",3,"blur"],["label","Confirm",3,"onClick"],[1,"royal-color-red"]],template:function(e,s){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"span",4),p._uU(5,"Reset Password"),p.qZA(),p.qZA(),p.TgZ(6,"div",3),p.TgZ(7,"div",5),p.TgZ(8,"span",6),p._UZ(9,"i",7),p.qZA(),p.TgZ(10,"input",8),p.NdJ("blur",function(){return s.onBlurFields("ispasswordValidate")}),p.qZA(),p.qZA(),p.YNc(11,m,2,0,"span",9),p.YNc(12,Z,2,0,"span",9),p.qZA(),p.TgZ(13,"div",3),p.TgZ(14,"div",5),p.TgZ(15,"span",6),p._UZ(16,"i",7),p.qZA(),p.TgZ(17,"input",10),p.NdJ("blur",function(){return s.onBlurFields("isrepasswordValidate")}),p.qZA(),p.qZA(),p.YNc(18,h,2,0,"span",9),p.YNc(19,f,2,0,"span",9),p.qZA(),p.TgZ(20,"div",3),p.TgZ(21,"p-button",11),p.NdJ("onClick",function(){return s.onSubmit()}),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",s.resettingPass),p.xp6(11),p.Q6J("ngIf",s.ispasswordValidate&&!s.passwordFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.ispasswordValidate&&s.passwordFormDetails.value&&s.passwordFormDetails.invalid),p.xp6(6),p.Q6J("ngIf",s.isrepasswordValidate&&!s.repasswordFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.ispasswordValidate&&s.isrepasswordValidate&&s.repasswordFormDetails.value&&s.repasswordFormDetails.value!==s.passwordFormDetails.value))},directives:[a.JL,a.sg,a.Fj,i.o,a.JJ,a.u,r.O5,o.zx],styles:[""]}),e})();var v=t(797),T=t(3105);let q=(()=>{class e{constructor(e){this.http=e}authenticate(e){return this.http.post(d.Q.logIn,e)}resetPass(e){return this.http.get(d.Q.resetPass.replace("<ResetMail>",e))}}return e.\u0275fac=function(s){return new(s||e)(p.LFG(c.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var A=t(7012);function b(e,s){1&e&&(p.TgZ(0,"span",20),p._uU(1," Please Enter Email"),p.qZA())}function P(e,s){1&e&&(p.TgZ(0,"span",20),p._uU(1," Please Enter Valid Email"),p.qZA())}function F(e,s){1&e&&(p.TgZ(0,"span",20),p._uU(1," Please Enter Password"),p.qZA())}function I(e,s){1&e&&(p.TgZ(0,"span",20),p._uU(1," Please Enter Email"),p.qZA())}function U(e,s){1&e&&(p.TgZ(0,"span",20),p._uU(1," Please Enter Valid Email"),p.qZA())}const k=function(){return["../","sign-up"]};let S=(()=>{class e extends v.r{constructor(e,s,t,r,i,o){super(),this.fb=e,this.logInService=s,this.router=t,this.route=r,this.toastMessageService=i,this.store=o,this.forgotGmail=new a.NI("",[a.kI.required,a.kI.email]),this.userInfo=this.fb.group({gmail:["",[a.kI.required,a.kI.email]],password:["",a.kI.required]})}get formDetails(){return this.userInfo.controls}get gmailFormDetails(){return this.formDetails.gmail}get passwordFormDetails(){return this.formDetails.password}onSubmit(){this.checkOnSubmit();const{gmail:e,password:s}=this.userInfo.value;if(this.userInfo.invalid)return;const t=this.logInService.authenticate({gmail:e,password:s}).subscribe(e=>{document.cookie="cookie="+e.cookie+";expires="+this.expTime().toUTCString()+";path=/",this.store.dispatch(T.x({loggedIn:!0})),this.toastMessageService.showSuccessToast(["Sucessfully logged in."]),this.redirectionIfAny()});this.addsub(t)}expTime(){var e=new Date,s=e.getTime();return e.setTime(s+36e6),e}redirectionIfAny(){let e="/",s=this.route.snapshot.queryParams;s.redirectURL&&(e=s.redirectURL),e?this.router.navigateByUrl(e).catch(()=>this.router.navigate(["/"])):this.router.navigate(["/"])}onBlurFields(e){this[e]=!0}checkOnSubmit(){this.isgmailValidate=!0,this.ispasswordValidate=!0}closeForgotPass(){this.isPasswordForgot=!1,this.isforgetGmailValidate=!1,this.forgotGmail.reset()}onResetPass(){this.checkonResetPass(),this.forgotGmail.invalid||this.logInService.resetPass(this.forgotGmail.value).subscribe(e=>{this.toastMessageService.showSuccessToast([e.message]),this.closeForgotPass()})}checkonResetPass(){this.isforgetGmailValidate=!0}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(a.qu),p.Y36(q),p.Y36(l.F0),p.Y36(l.gz),p.Y36(u.D),p.Y36(A.yh))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-log-in"]],features:[p.qOj],decls:42,vars:10,consts:[[1,"centerOfScreen",3,"formGroup"],[1,"p-col-12","p-xl-5","p-p-5","p-md-7","p-xs-12"],[1,"p-fluid","p-jc-center","chat-border","p-p-6"],[1,"p-col-12"],[1,"royal-ft-wt-700"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","email","pInputText","","placeholder","Email","formControlName","gmail",3,"blur"],["class","royal-color-red",4,"ngIf"],[1,"pi","pi-key"],["type","password","pInputText","","placeholder","Password","formControlName","password",3,"blur"],["label","Log-in",3,"onClick"],["queryParamsHandling","preserve",3,"routerLink"],[1,"p-col-12",3,"click"],["pButton","","pRipple","","type","button","label","Forgot Your Password?",1,"p-button-text"],["header","Reset Your Password",3,"visible","visibleChange","onHide"],[1,"p-fluid"],["type","email","pInputText","","placeholder","Email Address","required","",3,"formControl","blur"],["pButton","","pRipple","","type","button","label","Submit",1,"p-button-rounded",3,"click"],[1,"royal-color-red"]],template:function(e,s){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"span",4),p._uU(5,"Log In"),p.qZA(),p.qZA(),p.TgZ(6,"div",3),p.TgZ(7,"div",5),p.TgZ(8,"span",6),p._UZ(9,"i",7),p.qZA(),p.TgZ(10,"input",8),p.NdJ("blur",function(){return s.onBlurFields("isgmailValidate")}),p.qZA(),p.qZA(),p.YNc(11,b,2,0,"span",9),p.YNc(12,P,2,0,"span",9),p.qZA(),p.TgZ(13,"div",3),p.TgZ(14,"div",5),p.TgZ(15,"span",6),p._UZ(16,"i",10),p.qZA(),p.TgZ(17,"input",11),p.NdJ("blur",function(){return s.onBlurFields("ispasswordValidate")}),p.qZA(),p.qZA(),p.YNc(18,F,2,0,"span",9),p.qZA(),p.TgZ(19,"div",3),p.TgZ(20,"p-button",12),p.NdJ("onClick",function(){return s.onSubmit()}),p.qZA(),p.qZA(),p.TgZ(21,"div",3),p._uU(22," New Member? "),p.TgZ(23,"a",13),p._uU(24,"Create an account"),p.qZA(),p.qZA(),p.TgZ(25,"div",14),p.NdJ("click",function(){return s.isPasswordForgot=!0}),p._UZ(26,"button",15),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(27,"p-dialog",16),p.NdJ("visibleChange",function(e){return s.isPasswordForgot=e})("onHide",function(){return s.closeForgotPass()}),p.TgZ(28,"div",17),p.TgZ(29,"div",3),p._uU(30," Enter the email associated with your account and "),p._UZ(31,"br"),p._uU(32," we'll send you instructions to reset your password. "),p.qZA(),p.TgZ(33,"div",3),p.TgZ(34,"div",5),p.TgZ(35,"span",6),p._UZ(36,"i",7),p.qZA(),p.TgZ(37,"input",18),p.NdJ("blur",function(){return s.onBlurFields("isforgetGmailValidate")}),p.qZA(),p.qZA(),p.YNc(38,I,2,0,"span",9),p.YNc(39,U,2,0,"span",9),p.qZA(),p.TgZ(40,"div",3),p.TgZ(41,"button",19),p.NdJ("click",function(){return s.onResetPass()}),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",s.userInfo),p.xp6(11),p.Q6J("ngIf",s.isgmailValidate&&!s.gmailFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.isgmailValidate&&s.gmailFormDetails.value&&s.gmailFormDetails.invalid),p.xp6(6),p.Q6J("ngIf",s.ispasswordValidate&&!s.passwordFormDetails.value),p.xp6(5),p.Q6J("routerLink",p.DdM(9,k)),p.xp6(4),p.Q6J("visible",s.isPasswordForgot),p.xp6(10),p.Q6J("formControl",s.forgotGmail),p.xp6(1),p.Q6J("ngIf",s.isforgetGmailValidate&&!s.forgotGmail.value),p.xp6(1),p.Q6J("ngIf",s.isforgetGmailValidate&&!!s.forgotGmail.value&&s.forgotGmail.invalid))},directives:[a.JL,a.sg,a.Fj,i.o,a.JJ,a.u,r.O5,o.zx,l.yS,o.Hq,n.V,a.Q7,a.oH],styles:[""]}),e})(),N=(()=>{class e{constructor(e){this.http=e}signUp(e){return this.http.post(d.Q.signUp,e)}}return e.\u0275fac=function(s){return new(s||e)(p.LFG(c.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function y(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Please Enter User Name"),p.qZA())}function D(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Enter atleast 5 Character"),p.qZA())}function J(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Please Enter Email"),p.qZA())}function x(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Please Enter Valid Email"),p.qZA())}function V(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Please Enter Password"),p.qZA())}function _(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Passowrd must be atleast 8 Character"),p.qZA())}function Y(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Please Retype Password"),p.qZA())}function Q(e,s){1&e&&(p.TgZ(0,"span",17),p._uU(1," Password must be same"),p.qZA())}const C=function(){return["../","log-in"]},E=[{path:"log-in",component:S},{path:"sign-up",component:(()=>{class e extends v.r{constructor(e,s,t,r,i){super(),this.fb=e,this.signUpService=s,this.router=t,this.route=r,this.toastMessageService=i,this.userSignUp=this.fb.group({username:["",[a.kI.required,a.kI.minLength(5)]],gmail:["",[a.kI.required,a.kI.email]],password:["",[a.kI.required,a.kI.minLength(8)]],repassword:["",a.kI.required]})}get formDetails(){return this.userSignUp.controls}get userNameFormDetails(){return this.formDetails.username}get gmailFormDetails(){return this.formDetails.gmail}get passwordFormDetails(){return this.formDetails.password}get repasswordFormDetails(){return this.formDetails.repassword}onSubmit(){this.checkOnSubmit();const{username:e,gmail:s,password:t,repassword:r}=this.userSignUp.value;let a=!1;if(a=!!this.userSignUp.invalid||this.checkDataPresent(),a=a||this.isPasswordSame(t,r),a)return;const i=this.signUpService.signUp({gmail:s,password:t,username:e}).subscribe(e=>{this.toastMessageService.showSuccessToast([e.message]),this.router.navigate(["../","log-in"],{relativeTo:this.route,queryParamsHandling:"preserve"})});this.addsub(i)}onBlurFields(e){this[e]=!0}checkOnSubmit(){this.isgmailValidate=!0,this.isUserNameValidate=!0,this.ispasswordValidate=!0,this.isrepasswordValidate=!0}checkDataPresent(){const e=[];return Object.keys(this.userSignUp.controls).forEach(s=>{this.formDetails[s].value||e.push(`Please Enter ${s}`)}),!!e.length&&(this.toastMessageService.showErrorToast(e),!0)}isPasswordSame(e,s){return e!==s&&(this.toastMessageService.showErrorToast(["Password must be same"]),!0)}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(a.qu),p.Y36(N),p.Y36(l.F0),p.Y36(l.gz),p.Y36(u.D))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-sign-up"]],features:[p.qOj],decls:40,vars:11,consts:[[1,"centerOfScreen",3,"formGroup"],[1,"p-col-12","p-xl-5","p-p-5","p-md-7","p-xs-12"],[1,"p-fluid","p-jc-center","chat-border","p-p-6"],[1,"p-col-12"],[1,"royal-ft-wt-700"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","text","pInputText","","placeholder","User Name","formControlName","username",3,"blur"],["class","royal-color-red",4,"ngIf"],[1,"pi","pi-envelope"],["type","email","pInputText","","placeholder","Email","formControlName","gmail",3,"blur"],[1,"pi","pi-key"],["type","password","pInputText","","placeholder","Password","formControlName","password",3,"blur"],["type","password","pInputText","","placeholder","Repeat password","formControlName","repassword",3,"blur"],["label","Sign Up",3,"onClick"],["queryParamsHandling","preserve",3,"routerLink"],[1,"royal-color-red"]],template:function(e,s){1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"span",4),p._uU(5,"Sign Up"),p.qZA(),p.qZA(),p.TgZ(6,"div",3),p.TgZ(7,"div",5),p.TgZ(8,"span",6),p._UZ(9,"i",7),p.qZA(),p.TgZ(10,"input",8),p.NdJ("blur",function(){return s.onBlurFields("isUserNameValidate")}),p.qZA(),p.qZA(),p.YNc(11,y,2,0,"span",9),p.YNc(12,D,2,0,"span",9),p.qZA(),p.TgZ(13,"div",3),p.TgZ(14,"div",5),p.TgZ(15,"span",6),p._UZ(16,"i",10),p.qZA(),p.TgZ(17,"input",11),p.NdJ("blur",function(){return s.onBlurFields("isgmailValidate")}),p.qZA(),p.qZA(),p.YNc(18,J,2,0,"span",9),p.YNc(19,x,2,0,"span",9),p.qZA(),p.TgZ(20,"div",3),p.TgZ(21,"div",5),p.TgZ(22,"span",6),p._UZ(23,"i",12),p.qZA(),p.TgZ(24,"input",13),p.NdJ("blur",function(){return s.onBlurFields("ispasswordValidate")}),p.qZA(),p.qZA(),p.YNc(25,V,2,0,"span",9),p.YNc(26,_,2,0,"span",9),p.qZA(),p.TgZ(27,"div",3),p.TgZ(28,"div",5),p.TgZ(29,"span",6),p._UZ(30,"i",12),p.qZA(),p.TgZ(31,"input",14),p.NdJ("blur",function(){return s.onBlurFields("isrepasswordValidate")}),p.qZA(),p.qZA(),p.YNc(32,Y,2,0,"span",9),p.YNc(33,Q,2,0,"span",9),p.qZA(),p.TgZ(34,"div",3),p.TgZ(35,"p-button",15),p.NdJ("onClick",function(){return s.onSubmit()}),p.qZA(),p.qZA(),p.TgZ(36,"div",3),p._uU(37," Already member "),p.TgZ(38,"a",16),p._uU(39," Log-in"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("formGroup",s.userSignUp),p.xp6(11),p.Q6J("ngIf",s.isUserNameValidate&&!s.userNameFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.isUserNameValidate&&s.userNameFormDetails.value&&s.userNameFormDetails.invalid),p.xp6(6),p.Q6J("ngIf",s.isgmailValidate&&!s.gmailFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.isgmailValidate&&s.gmailFormDetails.value&&s.gmailFormDetails.invalid),p.xp6(6),p.Q6J("ngIf",s.ispasswordValidate&&!s.passwordFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.ispasswordValidate&&s.passwordFormDetails.value&&s.passwordFormDetails.invalid),p.xp6(6),p.Q6J("ngIf",s.isrepasswordValidate&&!s.repasswordFormDetails.value),p.xp6(1),p.Q6J("ngIf",s.ispasswordValidate&&s.isrepasswordValidate&&s.repasswordFormDetails.value&&s.repasswordFormDetails.value!==s.passwordFormDetails.value),p.xp6(5),p.Q6J("routerLink",p.DdM(10,C)))},directives:[a.JL,a.sg,a.Fj,i.o,a.JJ,a.u,r.O5,o.zx,l.yS],styles:[""]}),e})()},{path:"reset/:gmail/:token",component:w},{path:"",redirectTo:"log-in",pathMatch:"full"}];let G=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[l.Bz.forChild(E)],l.Bz]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[r.ez,a.u5,a.UX,G,i.j,n.S,o.hJ]]}),e})()}}]);