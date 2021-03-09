import { Component, OnInit, Input } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Calendar } from '@ionic-native/calendar/ngx';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { CrudService } from 'src/app/services/crud.service';
import { ContribuintesService } from '../../services/contribuintes.service';
import { Recibos } from '../../class/recibos';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'iniciar.page.html',
  styleUrls: ['iniciar.page.scss']
})
export class Tab2Page implements OnInit {

  listaDeRecibos: Recibos[] = new Array<Recibos>();
  objRecibos: Recibos;
  envioFechado: Date = new Date();
  darkMode: boolean = true;
  usuario: UsuarioDTO;
  codMens: number;
  bairro: string;

  constructor(private navCtrl: NavController, private calendar: Calendar,
    private bluetoothSerial: BluetoothSerial, private crudService: CrudService,
    private contribService: ContribuintesService, private toastCtrl: ToastController,
    private storage: StorageService, private usuarioService: UsuarioService) {
    // Ativador automático do tema dark, quando este reconhece que o tema do sistema do usuário também é dark.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
   }

  ngOnInit() {
    //this.connect();
  }

  carregarContribuintes() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
     this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;

          if (this.codMens == 330) {
            this.bairro = "AMORIM"
          } else if (this.codMens = 795) {
            this.bairro = "CUSTODIO PEREIRA"
          }
        
          this.contribService.getListaRecibos(this.codMens, this.bairro).subscribe( resp => {

            this.listaDeRecibos.push(...resp);
            console.log("Recibos:", this.listaDeRecibos);
            this.setObjRecibos("Recibos baixados!");
    
            // if(this.listaDeRecibos.reagendado == "S") {
            //   this.cardColors = "secondary";
            // } else {
            //   this.cardColors = "danger";
            // }
          },  error =>{});

        }, error => {
            if (error.status == 403) {
              console.log(error.status);
            }
        });
      }  
  }
  


  connect() {
    this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe((data) => {
      console.log('Conectado', data);
    });
  }

  disconnectDevices() {

    this.bluetoothSerial.disconnect().then((error) => {
      console.log('Dispositivo desconectado.', error); 
    });
    this.bluetoothSerial.clear().then(() => {
      console.log('Limpo');
    });
  }

  profile() {
    this.navCtrl.navigateForward('profile', { animated: true });
  }

  // Navega para página Benefício.
  beneficio() {
    this.navCtrl.navigateForward( 'beneficio', {animated: true} );
  }

  // Navega para página Contribuições.
  contribuicao() {
    this.navCtrl.navigateForward( 'contribuicao', {animated: true} );
  }

  // Navega para página Relátorio.
  relatorio() {
    this.navCtrl.navigateForward( 'relatorio', {animated: true} );
  }

  // Navega para página Mensagem.
  mensagem() {
    this.navCtrl.navigateForward( 'mensagem', {animated: true} );
  }


  // Baixa a carga de recibos no local storage (app / baixar recibos)
  envioTotal() {
    this.carregarContribuintes();
  }

  setObjRecibos(msg: string){
    // lista sera aqui
    this.listaDeRecibos.forEach(recibos => {
      console.log(recibos.nrorecibo);
      this.objRecibos = new Recibos(recibos.nrorecibo, recibos.impresso, recibos.dtoperacao, recibos.entrega, recibos.formulario, recibos.nomenorecibo, recibos.entregaweb,
        recibos.dtcobranca, recibos.datadorecebimento, recibos.reagendado, recibos.dtreagendamento, recibos.dtrecebimento, recibos.valorgerado, recibos.valorcheque, recibos.valordinheiro,
        recibos.doacaoespecial, recibos.parceladoacaoespecial, recibos.aumentodefinitivo, recibos.dtoperacaobaixa, recibos.periodicidade, recibos.valoralterado,
        recibos.valornaoalterado, recibos.dtvaloralteradobaixa, recibos.valorbakp, recibos.valorhorabkp, recibos.valordatabkp, recibos.dataqld, recibos.naorecebido,
        recibos.nrosorte, recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.valorremarcado, recibos.dtremarc, recibos.codoperador, recibos.codcategoria, recibos.enderecosecundario, recibos.numerosecundario,
        recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria,
        recibos.observacoes, recibos.codcontrib, recibos.codusuario,  recibos.codmensageiro);
      //inserir recibos   
      this.crudService.insert(this.objRecibos);
    });
    this.presentToast(msg);
  }

  alterarTema() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      mode: "ios",
      color: "dark"
    });
    toast.present();
  }

}
