"use strict";(self.webpackChunktask_list=self.webpackChunktask_list||[]).push([[622],{3622:(T,l,c)=>{c.r(l),c.d(l,{LoginModule:()=>A});var p=c(6895),e=c(4006),s=c(9549),m=c(4144),d=c(4466),u=c(7392),g=c(490),n=c(4650),f=c(785),C=c(8305),h=c(1928),M=c(1443),O=c(5395);let P=(()=>{class o{constructor(t,a,i){this.loginService=t,this.localService=a,this.toast=i}ngOnInit(){this.initForm()}deleteAccount(){const t=this.localService.get("account");return t&&Object.keys(t).length?(this.localService.remove("account"),void this.toast.showToastSucess("Conta removida com sucesso")):this.toast.showToastError("N\xe3o existe uma conta")}initForm(){this.form=new e.cw({userName:new e.NI("",[e.kI.required]),email:new e.NI("",[e.kI.required,e.kI.email]),password:new e.NI("",[e.kI.required,e.kI.minLength(8),f.d.passwordValidator])})}onSubmit(){this.loginService.saveInLocalStorage(this.form.value),this.formGroupDirective.resetForm()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(C.r),n.Y36(h.n),n.Y36(M.k))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-form"]],viewQuery:function(t,a){if(1&t&&n.Gf(e.sg,5),2&t){let i;n.iGM(i=n.CRH())&&(a.formGroupDirective=i.first)}},decls:35,vars:8,consts:[[1,"account-container"],[1,"showBottom"],[1,"showUp",3,"formGroup","ngSubmit"],[1,"input-box"],["appearance","fill"],["matInput","","formControlName","userName"],["matSuffix",""],[3,"control","label"],["matInput","","formControlName","email"],["matInput","","formControlName","password"],["type","submit",3,"disabled"],[3,"click"]],template:function(t,a){1&t&&(n.TgZ(0,"div",0)(1,"h1",1),n._uU(2,"Crie sua conta"),n.qZA(),n.TgZ(3,"form",2),n.NdJ("ngSubmit",function(){return a.onSubmit()}),n.TgZ(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),n._uU(7,"Nome de usu\xe1rio"),n.qZA(),n._UZ(8,"input",5),n.TgZ(9,"mat-icon",6),n._uU(10,"person"),n.qZA(),n.TgZ(11,"mat-error"),n._UZ(12,"app-error-msg",7),n.qZA()()(),n.TgZ(13,"div",3)(14,"mat-form-field",4)(15,"mat-label"),n._uU(16,"Email"),n.qZA(),n._UZ(17,"input",8),n.TgZ(18,"mat-icon",6),n._uU(19,"email"),n.qZA(),n.TgZ(20,"mat-error"),n._UZ(21,"app-error-msg",7),n.qZA()()(),n.TgZ(22,"div",3)(23,"mat-form-field",4)(24,"mat-label"),n._uU(25,"Senha"),n.qZA(),n._UZ(26,"input",9),n.TgZ(27,"mat-icon",6),n._uU(28,"lock"),n.qZA(),n.TgZ(29,"mat-error"),n._UZ(30,"app-error-msg",7),n.qZA()()(),n.TgZ(31,"button",10),n._uU(32,"Enviar"),n.qZA(),n.TgZ(33,"a",11),n.NdJ("click",function(){return a.deleteAccount()}),n._uU(34,"excluir conta"),n.qZA()()()),2&t&&(n.xp6(3),n.Q6J("formGroup",a.form),n.xp6(9),n.Q6J("control",a.form.controls.userName)("label","Nome"),n.xp6(9),n.Q6J("control",a.form.controls.email)("label","Email"),n.xp6(9),n.Q6J("control",a.form.controls.password)("label","Senha"),n.xp6(1),n.Q6J("disabled",!a.form.valid))},dependencies:[s.TO,s.KE,s.hX,s.R9,O.u,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,m.Nt,u.Hw],styles:["[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]{width:400px}@media (max-width: 768px){[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]{width:350px}}@media (max-width: 400px){[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]{width:300px}}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--secondary-color);font-size:2.2rem;font-weight:700;margin-bottom:45px}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;gap:25px}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--blue-primary-color)}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:12px 0;color:#fff;background-color:var(--blue-primary-color);border-radius:4px;transition:background-color .25s ease}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{cursor:not-allowed;background-color:var(--blue-secondary-color)}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]:hover{background-color:var(--blue-secondary-color);transform:scale(1)}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.01)}[_nghost-%COMP%]   .account-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:12px 0;color:#fff;background-color:var(--red-primary-color);border-radius:4px;text-align:center}"]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:3,vars:0,consts:[[1,"container","login-container"]],template:function(t,a){1&t&&(n.TgZ(0,"section")(1,"div",0),n._UZ(2,"app-form"),n.qZA()())},dependencies:[P],styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{height:100vh}@media (max-width: 900px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{height:80vh}}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}"]}),o})();var Z=c(6546);let _=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-account"]],decls:17,vars:0,consts:[[1,"account-infos-container"]],template:function(t,a){1&t&&(n.TgZ(0,"div",0)(1,"ul")(2,"li")(3,"h4"),n._uU(4,"UserName"),n.qZA(),n.TgZ(5,"span"),n._uU(6,"israel"),n.qZA()(),n.TgZ(7,"li")(8,"h4"),n._uU(9,"Email"),n.qZA(),n.TgZ(10,"span"),n._uU(11,"israelbousquet@gmail.com"),n.qZA()(),n.TgZ(12,"li")(13,"h4"),n._uU(14,"Password"),n.qZA(),n.TgZ(15,"span"),n._uU(16,"********"),n.qZA()()()())},styles:["[_nghost-%COMP%]   .account-infos-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;width:500px}[_nghost-%COMP%]   .account-infos-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:var(--secondary-color)}"]}),o})();const x=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-account-info"]],decls:7,vars:0,consts:[[1,"container","account-container"],[1,"content-tt"]],template:function(t,a){1&t&&(n.TgZ(0,"section")(1,"div",0)(2,"h2"),n._uU(3,"Informa\xe7\xf5es da sua conta"),n.qZA(),n.TgZ(4,"div",1),n._UZ(5,"app-card-perfil")(6,"app-account"),n.qZA()()())},dependencies:[Z.I,_],styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{height:100vh;max-width:100vw;display:flex;align-items:center}@media (max-width: 900px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]{height:80vh}}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .account-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.9rem;color:var(--secondary-color);margin-bottom:35px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .account-container[_ngcontent-%COMP%]   .content-tt[_ngcontent-%COMP%]{display:flex;gap:25px}"]}),o})()},{path:"login",component:v}];let y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(x),g.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.ez,y,s.lN,d.m,e.u5,e.UX,m.c,u.Ps]}),o})()}}]);