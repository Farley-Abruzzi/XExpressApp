(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7m4i":function(e,n,o){"use strict";o.d(n,"a",function(){return l});var l=function(){return function(e,n,o,l,t,r,i,a,u,s,c,d,b,h,p,g,f,m,v,z,k,y,w,C,D,x,B,O,R,S,j,M,P,E,A,L,T,_,q,I,F,G,Z,J,N,U,H,W,V){this.nrorecibo=e,this.impresso=n,this.dtoperacao=o,this.entrega=l,this.formulario=t,this.nomenorecibo=r,this.entregaweb=i,this.dtcobranca=a,this.reagendado=u,this.dtreagendamento=s,this.dtrecebimento=c,this.valorgerado=d,this.valordinheiro=b,this.valorcheque=h,this.doacaoespecial=p,this.parceladoacaoespecial=g,this.aumentodefinitivo=f,this.dtoperacaobaixa=m,this.periodicidade=v,this.valoralterado=z,this.valornaoalterado=k,this.dtvaloralteradobaixa=y,this.valorbakp=w,this.valorhorabkp=C,this.valordatabkp=D,this.dataqld=x,this.naorecebido=B,this.nrosorte=O,this.statusrec=R,this.dtbaixa=S,this.parcela=j,this.via=M,this.motivodevol=P,this.valorremarcado=E,this.dtremarc=A,this.codoperador=L,this.codcategoria=T,this.enderecosecundario=_,this.numerosecundario=q,this.bairrosecundario=I,this.cidadesecundario=F,this.complementosecundario=G,this.cepsecundario=Z,this.telefonesecundario=J,this.desccategoria=N,this.observacoes=U,this.codmensageiro=H,this.codcontrib=W,this.codusuario=V}}()},"8OjO":function(e,n,o){"use strict";o.d(n,"a",function(){return a});var l=o("mrSG"),t=o("ZJFI"),r=o("7m4i"),i=o("CcnG"),a=function(){function e(e){this.dbService=e}return e.prototype.insert=function(e){return l.b(this,void 0,void 0,function(){var n,o,t,r,i;return l.e(this,function(l){switch(l.label){case 0:return l.trys.push([0,6,,7]),[4,this.dbService.getDB()];case 1:n=l.sent(),o="insert into recibos (nrorecibo, nomenorecibo, entregaweb, dtcobranca, reagendado, dtreagendamento, valorgerado, statusrec, dtbaixa, parcela, via, motivodevol, enderecosecundario, numerosecundario, bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria,  observacoes, codmensageiro) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",t=[e.nrorecibo,e.nomenorecibo,e.entregaweb,e.dtcobranca,e.reagendado,e.dtreagendamento,e.valorgerado,e.statusrec,e.dtbaixa,e.parcela,e.via,e.motivodevol,e.enderecosecundario,e.numerosecundario,e.bairrosecundario,e.cidadesecundario,e.complementosecundario,e.cepsecundario,e.telefonesecundario,e.desccategoria,e.observacoes,e.codmensageiro],l.label=2;case 2:return l.trys.push([2,4,,5]),[4,n.executeSql(o,t)];case 3:return l.sent(),[3,5];case 4:return r=l.sent(),[2,console.error(r)];case 5:return[3,7];case 6:return i=l.sent(),[2,console.error(i)];case 7:return[2]}})})},e.prototype.insertDevolvidos=function(e){return l.b(this,void 0,void 0,function(){var n,o,t,r,i;return l.e(this,function(l){switch(l.label){case 0:return l.trys.push([0,6,,7]),[4,this.dbService.getDB()];case 1:n=l.sent(),o="insert into recibosDevolvidos (nrorecibo, dtdevol, horaoper, dtoperacao, codoperador, codusuario, motivodevolucao, statendimento, dscatendimento) values(?,?,?,?,?,?,?,?,?)",t=[e.nrorecibo,e.dtdevol,e.horaoper,e.dtoperacao,e.codoperador,e.codusuario,e.motivodevolucao,e.statendimento,e.dscatendimento],l.label=2;case 2:return l.trys.push([2,4,,5]),[4,n.executeSql(o,t)];case 3:return l.sent(),[3,5];case 4:return r=l.sent(),[2,console.error(r)];case 5:return[3,7];case 6:return i=l.sent(),[2,console.error(i)];case 7:return[2]}})})},e.prototype.getAll=function(){return this.dbService.getDB().then(function(e){return e.executeSql("select * from recibos where statusrec = 'G'",void 0).then(function(e){if(e.rows.length>0){for(var n=new Array,o=0;o<e.rows.length;o++){var l=e.rows.item(o),t=new r.a(l.nrorecibo,l.impresso,l.dtoperacao,l.entrega,l.formulario,l.nomenorecibo,l.entregaweb,l.dtcobranca,l.reagendado,l.dtreagendamento,l.dtrecebimento,l.valorgerado,l.valorcheque,l.valordinheiro,l.doacaoespecial,l.parceladoacaoespecial,l.aumentodefinitivo,l.dtoperacaobaixa,l.periodicidade,l.valoralterado,l.valornaoalterado,l.dtvaloralteradobaixa,l.valorbakp,l.valorhorabkp,l.valordatabkp,l.dataqld,l.naorecebido,l.nrosorte,l.statusrec,l.dtbaixa,l.parcela,l.via,l.motivodevol,l.enderecosecundario,l.numerosecundario,l.bairrosecundario,l.cidadesecundario,l.complementosecundario,l.cepsecundario,l.telefonesecundario,l.desccategoria,l.valorremarcado,l.dtremarc,l.codoperador,l.codcategoria,l.codcontrib,l.codusuario,l.observacoes,l.codmensageiro);n.push(t),console.log("Consulta realizada!")}return n}return console.log("return new array<Recibos>"),new Array}).catch(function(e){console.error(e)})}).catch(function(e){console.error(e)})},e.prototype.getByCodmensageiro=function(e,n){return this.dbService.getDB().then(function(o){return o.executeSql("SELECT COUNT(obj.nrorecibo), SUM(obj.valorgerado) FROM recibos obj WHERE obj.codmensageiro = ? AND obj.statusrec = 'B' AND obj.impresso = 'S' AND obj.dtbaixa = ?",[e,n]).then(function(o){if(o.rows.length>0){for(var l=new Array,t=0;t<o.rows.length;t++){var r=o.rows.item(t);l.push(r),console.log("Consulta realizada "),console.log("COD, DT: ",e,n)}return console.log("return recibos: ",l),l}return console.log("return new array<Recibos>"),new Array}).catch(function(e){console.error(e)})}).catch(function(e){console.error(e)})},e.prototype.getById=function(e){return this.dbService.getDB().then(function(n){return n.executeSql("select * from recibos where nrorecibo = ?",[e]).then(function(e){if(e.rows.length>0){var n=e.rows.item(0),o=new r.a(n.nrorecibo,n.impresso,n.dtoperacao,n.entrega,n.formulario,n.nomenorecibo,n.entregaweb,n.dtcobranca,n.reagendado,n.dtreagendamento,n.valorgerado,n.dtrecebimento,n.valorcheque,n.valordinheiro,n.doacaoespecial,n.parceladoacaoespecial,n.aumentodefinitivo,n.dtoperacaobaixa,n.periodicidade,n.valoralterado,n.valornaoalterado,n.dtvaloralteradobaixa,n.valorbakp,n.valorhorabkp,n.valordatabkp,n.dataqld,n.naorecebido,n.nrosorte,n.statusrec,n.dtbaixa,n.parcela,n.via,n.motivodevol,n.enderecosecundario,n.numerosecundario,n.bairrosecundario,n.cidadesecundario,n.complementosecundario,n.cepsecundario,n.telefonesecundario,n.desccategoria,n.valorremarcado,n.dtremarc,n.codoperador,n.codcategoria,n.codcontrib,n.codusuario,n.observacoes,n.codmensageiro);return console.log("Consulta realizada"),o}return null}).catch(function(e){return console.error(e)})}).catch(function(e){return console.error(e)})},e.prototype.update=function(e,n){return this.dbService.getDB().then(function(o){var l,t;switch(n){case"doacao":l="UPDATE recibos SET valorgerado  = ?, statusrec = ?, dtbaixa = ?, motivodevol = ? WHERE nrorecibo = ?",t=[e.valorgerado,e.statusrec,e.dtbaixa,e.motivodevol,e.nrorecibo];break;case"reagendamento":l="UPDATE recibos SET reagendado = ?, dtreagendamento = ? WHERE nrorecibo = ?",t=[e.reagendado,e.dtreagendamento,e.nrorecibo];break;case"devolucao":l="UPDATE recibos SET statusrec = ? WHERE nrorecibo = ?",t=[e.statusrec,e.nrorecibo]}return o.executeSql(l,t).then(function(){return console.log("Recibo Atualizado")}).catch(function(e){return console.error(e)})}).catch(function(e){return console.error(e)})},e.ngInjectableDef=i.Ob({factory:function(){return new e(i.Pb(t.a))},token:e,providedIn:"root"}),e}()},"9Atq":function(e,n,o){"use strict";o.r(n);var l=o("CcnG"),t=function(){return function(){}}(),r=o("pMnS"),i=o("oBZk"),a=o("ZZ/e"),u=o("gIcY"),s=o("mrSG"),c=o("cMM6"),d=o("bRl7"),b=o("8OjO"),h=o("wh8y"),p=o("7m4i"),g=o("n90K"),f=o("on2l"),m=function(){function e(e,n,o,l,t,r,i,a){this.navCtrl=e,this.calendar=n,this.bluetoothSerial=o,this.crudService=l,this.contribService=t,this.toastCtrl=r,this.storage=i,this.usuarioService=a,this.listaDeRecibos=new Array,this.envioFechado=new Date,this.darkMode=!0;var u=window.matchMedia("(prefers-color-scheme: dark)");this.darkMode=u.matches}return e.prototype.ngOnInit=function(){},e.prototype.carregarContribuintes=function(){var e=this,n=this.storage.getLocalUser();n&&n.email&&this.usuarioService.findByEmail(n.email).subscribe(function(n){e.usuario=n,e.codMens=e.usuario.codmensageiro,e.contribService.getListaRecibos(e.codMens).subscribe(function(n){var o;(o=e.listaDeRecibos).push.apply(o,n),console.log("Recibos:",e.listaDeRecibos),e.setObjRecibos("Recibos baixados!")},function(e){})},function(e){403==e.status&&console.log(e.status)})},e.prototype.connect=function(){this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe(function(e){console.log("Conectado",e)})},e.prototype.disconnectDevices=function(){this.bluetoothSerial.disconnect().then(function(e){console.log("Dispositivo desconectado.",e)}),this.bluetoothSerial.clear().then(function(){console.log("Limpo")})},e.prototype.profile=function(){this.navCtrl.navigateForward("profile",{animated:!0})},e.prototype.beneficio=function(){this.navCtrl.navigateForward("beneficio",{animated:!0})},e.prototype.contribuicao=function(){this.navCtrl.navigateForward("contribuicao",{animated:!0})},e.prototype.relatorio=function(){this.navCtrl.navigateForward("relatorio",{animated:!0})},e.prototype.mensagem=function(){this.navCtrl.navigateForward("mensagem",{animated:!0})},e.prototype.envioTotal=function(){this.carregarContribuintes()},e.prototype.setObjRecibos=function(e){var n=this;this.listaDeRecibos.forEach(function(e){console.log(e.nrorecibo),n.objRecibos=new p.a(e.nrorecibo,e.impresso,e.dtoperacao,e.entrega,e.formulario,e.nomenorecibo,e.entregaweb,e.dtcobranca,e.reagendado,e.dtreagendamento,e.dtrecebimento,e.valorgerado,e.valorcheque,e.valordinheiro,e.doacaoespecial,e.parceladoacaoespecial,e.aumentodefinitivo,e.dtoperacaobaixa,e.periodicidade,e.valoralterado,e.valornaoalterado,e.dtvaloralteradobaixa,e.valorbakp,e.valorhorabkp,e.valordatabkp,e.dataqld,e.naorecebido,e.nrosorte,e.statusrec,e.dtbaixa,e.parcela,e.via,e.motivodevol,e.valorremarcado,e.dtremarc,e.codoperador,e.codcategoria,e.enderecosecundario,e.numerosecundario,e.bairrosecundario,e.cidadesecundario,e.complementosecundario,e.cepsecundario,e.telefonesecundario,e.desccategoria,e.observacoes,e.codcontrib,e.codusuario,e.codmensageiro),n.crudService.insert(n.objRecibos)}),this.presentToast(e)},e.prototype.alterarTema=function(){this.darkMode=!this.darkMode,document.body.classList.toggle("dark")},e.prototype.presentToast=function(e){return s.b(this,void 0,void 0,function(){return s.e(this,function(n){switch(n.label){case 0:return[4,this.toastCtrl.create({message:e,duration:2e3,mode:"ios",color:"dark"})];case 1:return n.sent().present(),[2]}})})},e}(),v=l.qb({encapsulation:0,styles:[[".button-1[_ngcontent-%COMP%]{position:fixed;bottom:69%;left:0;right:40%;--ripple-color:white!important;--border-radius:50%}.label-1[_ngcontent-%COMP%]{position:fixed;bottom:65%;left:0;right:40%}.button-2[_ngcontent-%COMP%]{position:fixed;bottom:69%;left:40%;right:0;--ripple-color:white!important;--border-radius:50%}.label-2[_ngcontent-%COMP%]{position:fixed;bottom:65%;left:40%;right:0}.button-3[_ngcontent-%COMP%]{position:fixed;bottom:47%;left:0;right:40%;--ripple-color:white!important;--border-radius:50%}.label-3[_ngcontent-%COMP%]{position:fixed;bottom:43%;left:0;right:40%}.button-4[_ngcontent-%COMP%]{position:fixed;bottom:47%;left:40%;right:0;--ripple-color:white!important;--border-radius:50%}.label-4[_ngcontent-%COMP%]{position:fixed;bottom:43%;left:40%;right:0}.button-5[_ngcontent-%COMP%]{position:fixed;bottom:23%;left:0;right:40%;--ripple-color:white!important;--border-radius:50%}.label-5[_ngcontent-%COMP%]{position:fixed;bottom:19%;left:0;right:40%}.button-6[_ngcontent-%COMP%]{position:fixed;bottom:23%;left:40%;right:0;--ripple-color:white!important;--border-radius:50%}.label-6[_ngcontent-%COMP%]{position:fixed;bottom:19%;left:40%;right:0}.Developer[_ngcontent-%COMP%]{position:fixed;top:94%;right:0;left:0;font-size:11px}.datetime-text[_ngcontent-%COMP%]{position:fixed!important;font-size:0!important}ion-toggle[_ngcontent-%COMP%]{--background-checked:#2fdf75;--handle-background:#2fdf75;--handle-background-checked:#2fdf75}"]],data:{}});function z(e){return l.Lb(0,[(e()(),l.sb(0,0,null,null,17,"ion-header",[],null,null,null,i.V,i.n)),l.rb(1,49152,null,0,a.C,[l.h,l.k,l.z],null,null),(e()(),l.sb(2,0,null,0,15,"ion-toolbar",[["color","dark"]],null,null,null,i.pb,i.H)),l.rb(3,49152,null,0,a.Cb,[l.h,l.k,l.z],{color:[0,"color"]},null),(e()(),l.sb(4,0,null,0,2,"ion-title",[],null,null,null,i.nb,i.F)),l.rb(5,49152,null,0,a.Ab,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" X-Express "])),(e()(),l.sb(7,0,null,0,1,"ion-icon",[["name","person"],["slot","start"],["style","margin-left: 7px;"]],null,[[null,"click"]],function(e,n,o){var l=!0;return"click"===n&&(l=!1!==e.component.profile()&&l),l},i.W,i.o)),l.rb(8,49152,null,0,a.D,[l.h,l.k,l.z],{name:[0,"name"]},null),(e()(),l.sb(9,0,null,0,1,"ion-icon",[["name","moon"],["slot","end"]],null,null,null,i.W,i.o)),l.rb(10,49152,null,0,a.D,[l.h,l.k,l.z],{name:[0,"name"]},null),(e()(),l.sb(11,0,null,0,6,"ion-toggle",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],function(e,n,o){var t=!0,r=e.component;return"ionBlur"===n&&(t=!1!==l.Db(e,13)._handleBlurEvent(o.target)&&t),"ionChange"===n&&(t=!1!==l.Db(e,13)._handleIonChange(o.target)&&t),"ionChange"===n&&(t=!1!==r.alterarTema()&&t),t},i.ob,i.G)),l.rb(12,49152,null,0,a.Bb,[l.h,l.k,l.z],null,null),l.rb(13,16384,null,0,a.d,[l.k],null,null),l.Gb(1024,null,u.b,function(e){return[e]},[a.d]),l.rb(15,671744,null,0,u.e,[[8,null],[8,null],[8,null],[6,u.b]],{model:[0,"model"]},null),l.Gb(2048,null,u.c,null,[u.e]),l.rb(17,16384,null,0,u.d,[[4,u.c]],null,null),(e()(),l.sb(18,0,null,null,67,"ion-content",[["color","light"],["text-center",""]],null,null,null,i.S,i.k)),l.rb(19,49152,null,0,a.v,[l.h,l.k,l.z],{color:[0,"color"]},null),(e()(),l.sb(20,0,null,0,61,"ion-grid",[["fixed",""]],null,null,null,i.U,i.m)),l.rb(21,49152,null,0,a.B,[l.h,l.k,l.z],{fixed:[0,"fixed"]},null),(e()(),l.sb(22,0,null,0,19,"ion-row",[],null,null,null,i.db,i.v)),l.rb(23,49152,null,0,a.jb,[l.h,l.k,l.z],null,null),(e()(),l.sb(24,0,null,0,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-sm","6"]],null,null,null,i.R,i.j)),l.rb(25,49152,null,0,a.u,[l.h,l.k,l.z],{size:[0,"size"]},null),(e()(),l.sb(26,0,null,0,6,"div",[],null,null,null,null,null)),(e()(),l.sb(27,0,null,null,2,"ion-button",[["class","button-1"],["fill","clear"],["size","large"]],null,[[null,"click"]],function(e,n,o){var l=!0;return"click"===n&&(l=!1!==e.component.contribuicao()&&l),l},i.L,i.d)),l.rb(28,49152,null,0,a.l,[l.h,l.k,l.z],{fill:[0,"fill"],size:[1,"size"]},null),(e()(),l.sb(29,0,null,0,0,"img",[["src","assets/icon/box.png"]],null,null,null,null,null)),(e()(),l.sb(30,0,null,null,2,"ion-label",[["class","label-1"]],null,null,null,i.Z,i.r)),l.rb(31,49152,null,0,a.O,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" Contribui\xe7\xf5es "])),(e()(),l.sb(33,0,null,0,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-sm","6"]],null,null,null,i.R,i.j)),l.rb(34,49152,null,0,a.u,[l.h,l.k,l.z],{size:[0,"size"]},null),(e()(),l.sb(35,0,null,0,6,"div",[],null,null,null,null,null)),(e()(),l.sb(36,0,null,null,2,"ion-button",[["class","button-2"],["fill","clear"],["size","large"]],null,[[null,"click"]],function(e,n,o){var l=!0;return"click"===n&&(l=!1!==e.component.relatorio()&&l),l},i.L,i.d)),l.rb(37,49152,null,0,a.l,[l.h,l.k,l.z],{fill:[0,"fill"],size:[1,"size"]},null),(e()(),l.sb(38,0,null,0,0,"img",[["src","assets/icon/analytics.png"]],null,null,null,null,null)),(e()(),l.sb(39,0,null,null,2,"ion-label",[["class","label-2"]],null,null,null,i.Z,i.r)),l.rb(40,49152,null,0,a.O,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" Relat\xf3rios "])),(e()(),l.sb(42,0,null,0,19,"ion-row",[],null,null,null,i.db,i.v)),l.rb(43,49152,null,0,a.jb,[l.h,l.k,l.z],null,null),(e()(),l.sb(44,0,null,0,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-sm","6"]],null,null,null,i.R,i.j)),l.rb(45,49152,null,0,a.u,[l.h,l.k,l.z],{size:[0,"size"]},null),(e()(),l.sb(46,0,null,0,6,"div",[],null,null,null,null,null)),(e()(),l.sb(47,0,null,null,2,"ion-button",[["class","button-3"],["fill","clear"],["size","large"]],null,[[null,"click"]],function(e,n,o){var l=!0;return"click"===n&&(l=!1!==e.component.envioTotal()&&l),l},i.L,i.d)),l.rb(48,49152,null,0,a.l,[l.h,l.k,l.z],{fill:[0,"fill"],size:[1,"size"]},null),(e()(),l.sb(49,0,null,0,0,"img",[["src","assets/icon/send.png"]],null,null,null,null,null)),(e()(),l.sb(50,0,null,null,2,"ion-label",[["class","label-3"]],null,null,null,i.Z,i.r)),l.rb(51,49152,null,0,a.O,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" Baixar recibos "])),(e()(),l.sb(53,0,null,0,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-sm","6"]],null,null,null,i.R,i.j)),l.rb(54,49152,null,0,a.u,[l.h,l.k,l.z],{size:[0,"size"]},null),(e()(),l.sb(55,0,null,0,6,"div",[],null,null,null,null,null)),(e()(),l.sb(56,0,null,null,2,"ion-button",[["class","button-4"],["fill","clear"],["size","large"]],null,[[null,"click"]],function(e,n,o){var l=!0;return"click"===n&&(l=!1!==e.component.beneficio()&&l),l},i.L,i.d)),l.rb(57,49152,null,0,a.l,[l.h,l.k,l.z],{fill:[0,"fill"],size:[1,"size"]},null),(e()(),l.sb(58,0,null,0,0,"img",[["src","assets/icon/money-bag.png"]],null,null,null,null,null)),(e()(),l.sb(59,0,null,null,2,"ion-label",[["class","label-4"]],null,null,null,i.Z,i.r)),l.rb(60,49152,null,0,a.O,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" Benef\xedcios "])),(e()(),l.sb(62,0,null,0,19,"ion-row",[],null,null,null,i.db,i.v)),l.rb(63,49152,null,0,a.jb,[l.h,l.k,l.z],null,null),(e()(),l.sb(64,0,null,0,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-sm","6"]],null,null,null,i.R,i.j)),l.rb(65,49152,null,0,a.u,[l.h,l.k,l.z],{size:[0,"size"]},null),(e()(),l.sb(66,0,null,0,6,"div",[],null,null,null,null,null)),(e()(),l.sb(67,0,null,null,2,"ion-button",[["class","button-5"],["fill","clear"],["size","large"]],null,null,null,i.L,i.d)),l.rb(68,49152,null,0,a.l,[l.h,l.k,l.z],{fill:[0,"fill"],size:[1,"size"]},null),(e()(),l.sb(69,0,null,0,0,"img",[["src","assets/icon/donation.png"]],null,null,null,null,null)),(e()(),l.sb(70,0,null,null,2,"ion-label",[["class","label-5"]],null,null,null,i.Z,i.r)),l.rb(71,49152,null,0,a.O,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" Lan\xe7ar Doa\xe7\xe3o "])),(e()(),l.sb(73,0,null,0,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-sm","6"]],null,null,null,i.R,i.j)),l.rb(74,49152,null,0,a.u,[l.h,l.k,l.z],{size:[0,"size"]},null),(e()(),l.sb(75,0,null,0,6,"div",[],null,null,null,null,null)),(e()(),l.sb(76,0,null,null,2,"ion-button",[["class","button-6"],["fill","clear"],["size","large"]],null,[[null,"click"]],function(e,n,o){var l=!0;return"click"===n&&(l=!1!==e.component.mensagem()&&l),l},i.L,i.d)),l.rb(77,49152,null,0,a.l,[l.h,l.k,l.z],{fill:[0,"fill"],size:[1,"size"]},null),(e()(),l.sb(78,0,null,0,0,"img",[["src","assets/icon/chat.png"]],null,null,null,null,null)),(e()(),l.sb(79,0,null,null,2,"ion-label",[["class","label-6"]],null,null,null,i.Z,i.r)),l.rb(80,49152,null,0,a.O,[l.h,l.k,l.z],null,null),(e()(),l.Jb(-1,0,[" Mensagens "])),(e()(),l.sb(82,0,null,0,3,"ion-textarea",[["class","Developer"],["disabled","true"],["placeholder","@GLPV - Developed by Farley Abruzzi."]],null,[[null,"ionBlur"],[null,"ionChange"]],function(e,n,o){var t=!0;return"ionBlur"===n&&(t=!1!==l.Db(e,85)._handleBlurEvent(o.target)&&t),"ionChange"===n&&(t=!1!==l.Db(e,85)._handleInputEvent(o.target)&&t),t},i.mb,i.E)),l.Gb(5120,null,u.b,function(e){return[e]},[a.Nb]),l.rb(84,49152,null,0,a.yb,[l.h,l.k,l.z],{disabled:[0,"disabled"],placeholder:[1,"placeholder"]},null),l.rb(85,16384,null,0,a.Nb,[l.k],null,null)],function(e,n){var o=n.component;e(n,3,0,"dark"),e(n,8,0,"person"),e(n,10,0,"moon"),e(n,15,0,o.darkMode),e(n,19,0,"light"),e(n,21,0,""),e(n,25,0,"6"),e(n,28,0,"clear","large"),e(n,34,0,"6"),e(n,37,0,"clear","large"),e(n,45,0,"6"),e(n,48,0,"clear","large"),e(n,54,0,"6"),e(n,57,0,"clear","large"),e(n,65,0,"6"),e(n,68,0,"clear","large"),e(n,74,0,"6"),e(n,77,0,"clear","large"),e(n,84,0,"true","@GLPV - Developed by Farley Abruzzi.")},function(e,n){e(n,11,0,l.Db(n,17).ngClassUntouched,l.Db(n,17).ngClassTouched,l.Db(n,17).ngClassPristine,l.Db(n,17).ngClassDirty,l.Db(n,17).ngClassValid,l.Db(n,17).ngClassInvalid,l.Db(n,17).ngClassPending)})}function k(e){return l.Lb(0,[(e()(),l.sb(0,0,null,null,1,"app-tab2",[],null,null,null,z,v)),l.rb(1,114688,null,0,m,[a.Ib,c.a,d.a,b.a,h.a,a.Ob,g.a,f.a],null,null)],function(e,n){e(n,1,0)},null)}var y=l.ob("app-tab2",m,k,{},{},[]),w=o("Ip0R"),C=o("ZYCi");o.d(n,"Tab2PageModuleNgFactory",function(){return D});var D=l.pb(t,[],function(e){return l.Ab([l.Bb(512,l.j,l.ab,[[8,[r.a,y]],[3,l.j],l.x]),l.Bb(4608,w.l,w.k,[l.u,[2,w.v]]),l.Bb(4608,a.c,a.c,[l.z,l.g]),l.Bb(4608,a.Hb,a.Hb,[a.c,l.j,l.q]),l.Bb(4608,a.Lb,a.Lb,[a.c,l.j,l.q]),l.Bb(4608,u.g,u.g,[]),l.Bb(1073742336,w.b,w.b,[]),l.Bb(1073742336,a.Eb,a.Eb,[]),l.Bb(1073742336,u.f,u.f,[]),l.Bb(1073742336,u.a,u.a,[]),l.Bb(1073742336,C.n,C.n,[[2,C.s],[2,C.m]]),l.Bb(1073742336,t,t,[]),l.Bb(1024,C.k,function(){return[[{path:"",component:m}]]},[])])})},wh8y:function(e,n,o){"use strict";o.d(n,"a",function(){return u});var l=o("t/Na"),t=o("AytR"),r=o("CcnG"),i=o("ZYCi"),a=t.a.url,u=function(){function e(e,n,o){this.http=e,this.route=n,this.router=o}return e.prototype.getListaRecibos=function(e){return this.http.get(a+"/recibos/listarecibosapp?cod="+e+"&startDate=2019-07-01&endDate=2019-07-31")},e.prototype.getRecibosDetalhe=function(e){return this.http.get(a+"/recibos/app/"+e)},e.prototype.getResumo=function(e,n){return this.dtInicio=e,this.dtFim=n,this.http.get(a+"/recibos/resumomensageiro?cod=315&startDate="+e+"&endDate="+n)},e.prototype.getResumoPorCidade=function(){return this.http.get(a+"/recibos/mensageiroporcidade1?cod=315&startDate="+this.dtInicio+"&endDate="+this.dtFim)},e.prototype.putRecibo=function(e){return this.http.put(a+"/recibos/"+e.nrorecibo,e,{headers:new l.g({"Content-Type":"application/json"})})},e.prototype.postDevolvidos=function(e){return this.http.post(a+"/devolvido",e,{headers:new l.g({"Content-Type":"application/json"})})},e.ngInjectableDef=r.Ob({factory:function(){return new e(r.Pb(l.c),r.Pb(i.a),r.Pb(i.m))},token:e,providedIn:"root"}),e}()}}]);