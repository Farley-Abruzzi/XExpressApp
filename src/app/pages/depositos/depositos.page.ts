import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Depositos } from '../../class/depositos';
import { UsuarioService } from '../../services/usuario.service';
import { NavController, ToastController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';
import { CrudService } from '../../services/crud.service';
import { Recibos } from '../../class/recibos';
import { DepositoDTO } from '../../class/depositoDTO';


@Component({
  selector: 'app-tab1',
  templateUrl: 'depositos.page.html',
  styleUrls: ['depositos.page.scss']
})
export class Tab1Page implements OnInit {
  
  @ViewChild('mySlider', { static: true }) mySlide: any;
  

  deposito: Depositos = new Depositos();

  dtDeposito: Date = new Date();
  dtDepFim = new Date(this.dtDeposito.getFullYear(), this.dtDeposito.getMonth() + 1, 0);
  dtFech: string = " ";
  entity: string = " ";
  codValid: number;
  valorDesp: number;
  valorDep: number;
  detailDesp: string;

  picture: string;
  cameraOn: boolean = false;

  isVisible: Boolean = false;
  usuario: UsuarioDTO;
  codMens: number;
  listaDeRecibos: DepositoDTO[] = new Array<DepositoDTO>();
  qtdRecibos: number;
  valorDeposito: number;
  dataBaixa: Date;
  // var: String;
  // vetLista: string[] = [];

  constructor(private usuarioService: UsuarioService,
              private datePipe: DatePipe,
              private camera: Camera,
              private toastCtrl: ToastController,
              private navCtrl: NavController,
              private storage: StorageService,
              private crud: CrudService) { }


  ngOnInit() {
    this.getForDep();
    //this.cameraOn = false;
  }

  slideNext() {
    this.mySlide.lockSwipes(false);
    this.mySlide.slideNext();
    this.mySlide.lockSwipes(true);
  }


  selectDtDeposito(event){
    this.dtFech = event.detail.value;
    console.log("Data de fechamento: ", this.datePipe.transform(this.dtFech, "yyyy-MM-dd"));
    this.isVisible = true;
  }

  selectByEntity(event) {
    this.entity = event.detail.value;
    console.log("Entidade: ", this.entity);
  }

  selectByCodValidacao(event) {
    this.codValid = event.detail.value;
    console.log("Código de validação: ", this.codValid);
  }

  selectByValorDespesa(event) {
    this.valorDesp = event.detail.value;
    console.log("Valor despesa: ", this.valorDesp);
  }

  selectByValorDeposito(event) {
    this.valorDep = event.detail.value;
    console.log("Valor deposito: ", this.valorDep);
  }

  selectByDetailDespesa(event) {
    this.detailDesp = event.detail.value;
    console.log("Descrição desp: ", this.detailDesp);
  }

  getForDep() {
    
          let newDate = '2021-02-05';
          let dtbaixa = new Date(newDate);
          
          console.log('DATA FECHAMENTO: ', dtbaixa);

          this.crud.getForDeposito()
            .then((data: DepositoDTO[]) => {
               
              this.listaDeRecibos.push(...data);
              
              for (let i = 0; i < this.listaDeRecibos.length; i++) {

                this.qtdRecibos = this.listaDeRecibos[0].qtdRecibos;
                this.valorDeposito = this.listaDeRecibos[0].totalArrecadado;
              }
              
              
              console.log('QTD RECIBOS: ' + this.qtdRecibos + '\tTOTAL ARRECADADO: ' + this.valorDeposito);
              console.log('DATA: ', this.listaDeRecibos[0]);
              
            }, error => {
                console.log('Error SqLite: ', error);
            });
  }


  setObjDeposito() {

          this.deposito = new Depositos();

          let newDate = this.dtFech;
          let dataFechamento = new Date(newDate);

          this.deposito.dtfechamento = dataFechamento;
          this.deposito.codvalidacao = this.codValid;
          this.deposito.valordeposito = this.valorDep;
          this.deposito.entidade = this.entity;
          this.deposito.codusuario = 70026;
          this.deposito.codmensageiro = this.codMens;
          this.deposito.totalarrecadado = this.valorDep;
          this.deposito.qtdrecibos = null;
          this.deposito.valordespesa = this.valorDesp;
          this.deposito.descricaodespesa = this.detailDesp;

          if (this.deposito.valordespesa !== null) {
            this.deposito.valordeposito = this.deposito.valordeposito - this.deposito.valordespesa;
            this.deposito.totalarrecadado = this.deposito.valordeposito;
            console.log('VALOR DEPOSITO: ', this.deposito.valordeposito);
          }
  }

  getApiDbPostDepositos() {
    this.usuarioService.getApiDbPostDepositos(this.deposito)
      .subscribe(resp => {
        this.presentToast('Deposito inserido com sucesso!');
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
    },error=>{
        this.presentToast('VALOR DO DEPOSITO INCORRETO');
      console.log(error)
    });
  }
  
  getCameraPicture() {
    this.isVisible = false;
    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {   
      this.picture = 'data:image/png;base64,' + imageData;
      this.cameraOn = false;
      console.log('CAMERA ', this.picture);
    }, (err) => {
      
    });
  }

  sendPicture() {
    this.setObjDeposito();
    this.usuarioService.uploadPicture(this.picture)
      .subscribe(resp => {
        this.picture = null;
        this.getApiDbPostDepositos();
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
      }, error => {
          
      });
  }

  cancel() {
    this.picture = null;
  }

  salvar(){
    this.setObjDeposito();
    console.log("OBJ DEPOSITO: ", this.deposito);
    this.getApiDbPostDepositos();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      mode: "ios",
      color: "dark"
    });
    toast.present();
  }

}
