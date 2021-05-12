import { Recibos } from './../../class/recibos';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contribuintes } from '../../class/contribuintes';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';
import { ContribuintesService } from '../../services/contribuintes.service';
import { UltimoContribuinte } from '../../interfaces/ultimoContribuinte';
import { Recibo } from '../../class/recibo';
import { CrudService } from '../../services/crud.service';
import { DatePipe } from '@angular/common';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  contribuinte: Contribuintes = new Contribuintes();
  recibo: Recibo = new Recibo();
  objRecibo: Recibos;
  objRecibo2: Recibos;
  objRecibo3: Recibos;
  public fContribuinte: FormGroup;

  usuario: UsuarioDTO;
  codMens: number;
  codUsuario: number;
  codFunc: number;
  ultimoContrib: UltimoContribuinte;
  isVisible: Boolean = false;
  datadorecebimento: string = '';
  dataFunc: Date = new Date();
  dtOperacao: string = '';
  

  constructor(private fBuilder: FormBuilder, private storage: StorageService, private crudService: CrudService,
    public loadingController: LoadingController, private usuarioService: UsuarioService, public router: Router,
    private contribService: ContribuintesService, private datePipe: DatePipe, private navCtrl: NavController) {
    this.fContribuinte = this.fBuilder.group({
      'nome': [null, Validators.compose([ Validators.required, Validators.minLength(2) ])],
      'telefone': [null, Validators.compose([ Validators.required, Validators.minLength(10) ])],
      'valor': [null, Validators.compose([ Validators.required ])],
      'endereco': [null],
      'numero': [null],
      'bairro': [null],
      'cidade': [null],
      'observacoes': [null]
    })
   }

  ngOnInit() {
    //Exemplo de como setar
    // this.fContribuinte.get('nome').setValue(this.contribuinte.nome);
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = resp.codmensageiro;
          this.codUsuario = resp.codusuario;
          console.log(this.usuario);
        }, error => {}  
      )
    }
  }

  setObj() {
    this.contribuinte = new Contribuintes();

    this.contribuinte.nomenorecibo = this.fContribuinte.value.nome;
    this.contribuinte.telefoneprincipal = this.fContribuinte.value.telefone;
    this.contribuinte.enderecosecundario = this.fContribuinte.value.endereco;
    this.contribuinte.numerosecundario = this.fContribuinte.value.numero;
    this.contribuinte.bairrosecundario = this.fContribuinte.value.bairro;
    this.contribuinte.cidadesecundario = this.fContribuinte.value.cidade;
    this.contribuinte.observacoes = this.fContribuinte.value.observacoes;
    this.contribuinte.codmensageiro = this.codMens;
    this.contribuinte.codstatus = 1;
    this.contribuinte.codcategoria = 5;
    this.contribuinte.codfunc = this.codMens;
    this.contribuinte.stsistema = 2;

    this.postContrib();

  }

  postContrib() {
    this.contribService.postContribuinte(this.contribuinte)
      .subscribe(resp => {
        alert('Contribuinte inserido com sucesso!');
        console.log('Teste 1: ', resp);
        this.getUltContrib();
      });
  }

  getUltContrib() {
    this.contribService.getUltContribuinte()
      .subscribe(resp => {
        this.ultimoContrib = resp;
        console.log('UltContrib: ', this.ultimoContrib);
        this.isVisible = true;
      });
  }
  

  submitForm() {
    this.setObj();
    console.log(this.contribuinte);
  }


  setObjRecibo() {
    
    this.datadorecebimento = this.datePipe.transform(this.dataFunc, 'dd/MM/yyyy');

    this.objRecibo = new Recibos(null, 'N', new Date(), new Date(), null, this.fContribuinte.value.nome, null, new Date(), null,
      this.fContribuinte.value.valor, this.fContribuinte.value.valor, null, null, null, null, null, null, null, null, null, null, null, null,
      null, null, null, 'G', null, '01/01', 2, null, null, null, 73, this.codMens, 5, null, null, this.ultimoContrib.codcontrib,
      this.codUsuario, this.fContribuinte.value.endereco, this.fContribuinte.value.numero, this.fContribuinte.value.bairro,
      this.fContribuinte.value.cidade, null, null, null, 'EVENTUAL', this.fContribuinte.value.observacoes, this.datadorecebimento);
    
    this.postReciboGerado();
  }
  
  postReciboGerado() {
    console.log('OBJRECIBO: ', this.objRecibo);
    this.contribService.postReciboGerado(this.objRecibo)
      .subscribe(() => {
        console.log('Recibo inserido com sucesso!');
        setTimeout(() => {
          this.carregarUltRecibo();
        }, 1500);
    },error=>{
      console.log(error)
    });
  }

  async carregarUltRecibo() {
    let loading = await this.presentLoading();
    this.dtOperacao = this.datePipe.transform(this.objRecibo.dtoperacao, 'yyyy-MM-dd');

    this.contribService.getUltRecibo(this.codMens, this.dtOperacao)
      .subscribe(resp => {
        this.objRecibo3 = resp;
        let nrorecibo = this.objRecibo3.nrorecibo;
        console.log('RECIBO: ', this.objRecibo3);
        this.crudService.insert(this.objRecibo3);
        loading.dismiss();
        setTimeout(() => {
          this.router.navigate(['/recibo', nrorecibo]);
        }, 2000);
      }, error => {
        loading.dismiss();
      });
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loadingClass',
      message: 'Por favor aguarde...',
      animated: true,
      spinner: 'circles',
      translucent: true
    });
    loading.present();
    return loading;
    //const { role, data } = await loading.onDidDismiss();
  }

}
