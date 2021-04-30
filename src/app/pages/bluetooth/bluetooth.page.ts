import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';


@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {
  pairedList: pairedlist;
  listToggle: boolean = false;
  pairedDeviceID: number = 0;
  dataSend: string = "";

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public loadingController: LoadingController,
              private bluetoothSerial: BluetoothSerial, private toastCtrl: ToastController) {
    this.checkBluetoothEnabled();
  }

  ngOnInit() {
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

  checkBluetoothEnabled() {
    this.bluetoothSerial.isEnabled().then(success => {
      this.listPairedDevices();
    }, error => {
      this.showError("Habilite o Bluetooth")
    });
  }

  async listPairedDevices() {
    let loading = await this.presentLoading();
    this.bluetoothSerial.list().then(success => {
      this.pairedList = success;
      this.listToggle = true;
      loading.dismiss();
    }, error => {
      this.showError("Habilite o Bluetooth")
      this.listToggle = false;
      loading.dismiss();
    });
  }

  selectDevice() {
    let connectedDevice = this.pairedList[this.pairedDeviceID];
    if (!connectedDevice.address) {
      this.showError('Selecione o dispositivo pareado para conectar');
      return;
    }
    let address = connectedDevice.address;
    let name = connectedDevice.name;
    console.log('Adress: ', address);
    this.connect(address);
  }

  async connect(address) {
    let loading = await this.presentLoading();
    // Attempt to connect device with specified address, call app.deviceConnected if success
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected();
      loading.dismiss();
      this.showToast("Dispositivo conectado!");
    }, error => {
      loading.dismiss();
      this.showError("Erro: Conecte o dispositivo");
    });
  }

  deviceConnected() {
    // Subscribe to data receiving as soon as the delimiter is read
    this.bluetoothSerial.subscribe('\n').subscribe(success => {
      this.handleData(success);
      this.showToast("Conexão bem sucedida");
    }, error => {
      this.showError(error);
    });
  }

  deviceDisconnected() {
    // Unsubscribe from data receiving
    this.bluetoothSerial.disconnect();
    this.showToast("Dispositivo Desconectado");
  }

  handleData(data) {
    this.showToast(data);
  }

  sendData() {
    this.dataSend+='\n';
    this.showToast(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.showToast(success);
    }, error => {
      this.showError(error)
    });
  }

  async showError(error) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: error,
      buttons: ['Ok']
    });
    alert.present();
  }

  async showToast(msj) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 2000
    });
    toast.present();
  }

}

interface pairedlist {
  "class": number,
  "id": string,
  "address": string,
  "name": string
}
