import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Depositos } from '../../class/depositos';
import { UsuarioService } from '../../services/usuario.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';
import { CrudService } from '../../services/crud.service';
import { DepositoDTO } from '../../class/depositoDTO';
import { DomSanitizer } from '@angular/platform-browser';


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
  detailDesp: string;

  picture: string;
  cameraOn: boolean = false;

  isVisible: Boolean = false;
  usuario: UsuarioDTO;
  codMens: number;
  listaDeRecibos: DepositoDTO[] = new Array<DepositoDTO>();
  qtdRecibos: number;
  valorDeposito: number;
  dataFech: Date;
  email: string;
  codUsuario: number;
  

  constructor(private usuarioService: UsuarioService, private datePipe: DatePipe, private camera: Camera,
              private toastCtrl: ToastController, public loadingController: LoadingController,
              private storage: StorageService, private crud: CrudService, public sanitizer: DomSanitizer) { }


  ngOnInit() {
    //this.cameraOn = false;
    this.isVisible = false;
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = resp.codmensageiro;
          // this.urlimage = resp.imageUrl;
          this.email = resp.email;
          this.codUsuario = resp.codusuario;
        }, error => {}  
      )
    }
  }

  slideNext() {
    this.mySlide.lockSwipes(false);
    this.mySlide.slideNext();
    this.mySlide.lockSwipes(true);
  }


  selectDtDeposito(event){
    this.dtFech = event.detail.value;
    console.log("Data do deposito: ", this.dtFech);
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

  selectByDetailDespesa(event) {
    this.detailDesp = event.detail.value;
    console.log("Descrição desp: ", this.detailDesp);
  }

  async getForDep() {
          
          let datadorecebimento = this.datePipe.transform(this.dtFech, 'dd/MM/yyyy');
          console.log('DATA RECEBIMENTO: ', datadorecebimento);
          
          await this.crud.getForDeposito(datadorecebimento)
            .then((data: DepositoDTO[]) => {
               
              this.listaDeRecibos.push(...data);
              
              for (let i = 0; i < this.listaDeRecibos.length; i++) {

                this.qtdRecibos = this.listaDeRecibos[0].qtdRecibos;
                this.valorDeposito = this.listaDeRecibos[0].totalArrecadado;
              }
              
              console.log('QTD RECIBOS: ' + this.qtdRecibos + '\tTOTAL ARRECADADO: ' + this.valorDeposito);
              
              this.setObjDeposito(this.qtdRecibos, this.valorDeposito);
              
        }, error => {
            console.log('Error SqLite: ', error);
      });
  }

  setObjDeposito(qtdRec: number, valorTotal: number) {
          this.deposito = new Depositos();

          let newDate = this.dtFech;
          this.dataFech = new Date(newDate);
          console.log('DTFECHAMENTO: ', this.dataFech);
          
          this.deposito.dtfechamento = this.dataFech;
          this.deposito.codvalidacao = this.codValid;
          this.deposito.valordeposito = valorTotal;
          this.deposito.entidade = this.entity;
          this.deposito.codusuario = this.codUsuario;
          this.deposito.codmensageiro = this.codMens;
          this.deposito.totalarrecadado = valorTotal;
          this.deposito.qtdrecibos = qtdRec;
          this.deposito.valordespesa = this.valorDesp;
          this.deposito.descricaodespesa = this.detailDesp;
          //this.deposito.imageurl = this.urlImage;
          this.deposito.email = this.email;

          if (this.deposito.valordespesa != null) {
            this.deposito.valordeposito = this.deposito.valordeposito - this.deposito.valordespesa;
            this.deposito.totalarrecadado = this.deposito.valordeposito;
            console.log('VALOR DEPOSITO: ', this.deposito.valordeposito);
    }
  }

  async getApiDbPostDepositos() {
    await this.presentLoading();
    this.sendPicture();
    console.log("OBJ DEPOSITO: ", this.deposito);
    this.usuarioService.getApiDbPostDepositos(this.deposito)
      .subscribe(resp => {
        setTimeout(() => {
          this.mySlide.lockSwipes(false);
          this.mySlide.slideTo(0);
          this.presentToast('Deposito e Imagem inseridos com sucesso!');
        }, 2000); 
      }, error => {
        alert('Erro ' + error.status + ': Valor do deposito incorreto');
        //this.presentToast('VALOR DO DEPOSITO INCORRETO');
        this.mySlide.lockSwipes(false);
        this.mySlide.slideTo(0);
    });
  }
  
  getCameraPicture() {
    this.isVisible = false;
    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {   
        this.picture = 'data:image/png;base64,' + imageData;
        this.cameraOn = false;
    }, (err) => {
       this.cameraOn = false;
       }
    );
  }

  getGalleryPicture() {
    this.cameraOn = true;

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.picture = 'data:image/png;base64,' + imageData;
      this.cameraOn = false;
    }, (err) => {
      this.cameraOn = false;
    });
  }

  sendPicture() {
    this.usuarioService.uploadPicture(this.picture)
      .subscribe(resp => {
        this.picture = null;
        this.deposito.imageurl = resp.headers.get("Location");
      }, error => {
        alert('Falha no envio da imagen');
      }
    );
  }

  cancel() {
    this.picture = null;
  }

  async salvar(){
    await this.getForDep();
    this.getApiDbPostDepositos();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor aguarde...',
      spinner: "bubbles",
      duration: 2000
    });
    loading.present();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 6000,
      mode: "ios",
      color: "dark"
    });
    toast.present();
  }

}
