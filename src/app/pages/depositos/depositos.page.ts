import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Depositos } from '../../class/depositos';
import { UsuarioService } from '../../services/usuario.service';
import { NavController, ToastController } from '@ionic/angular';

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


  constructor(private usuarioService: UsuarioService,
              private datePipe: DatePipe,
              private camera: Camera,
              private toastCtrl: ToastController,
              private navCtrl: NavController) { }


  ngOnInit() {
    //this.conversorDate();
    this.mySlide.lockSwipes(true);
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
    console.log("Valor desp: ", this.valorDesp);
  }

  selectByDetailDespesa(event) {
    this.detailDesp = event.detail.value;
    console.log("Descrição desp: ", this.detailDesp);
  }


  setObjDeposito() {
    this.deposito = new Depositos();

    let newDate = this.dtFech;
    let dataFechamento = new Date(newDate);

    this.deposito.dtfechamento = dataFechamento;
    this.deposito.codvalidacao = this.codValid;
    this.deposito.valordeposito = 1746;
    this.deposito.entidade = this.entity;
    this.deposito.codusuario = 70026;
    this.deposito.codmensageiro = 345;
    this.deposito.totalarrecadado = 1745;
    this.deposito.qtdrecibos = null;
    this.deposito.valordespesa = this.valorDesp;
    this.deposito.descricaodespesa = this.detailDesp;

    if (this.deposito.valordespesa !== null) {
      this.deposito.valordeposito =  this.deposito.valordeposito - this.deposito.valordespesa;
      console.log('VALOR DEPOSITO: ', this.deposito.valordeposito); 
    }

  }

  getApiDbPostDepositos() {
    this.usuarioService.getApiDbPostDepositos(this.deposito)
    .subscribe(resp=>{
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
      console.log("Obj Deposito: ",this.deposito);
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
