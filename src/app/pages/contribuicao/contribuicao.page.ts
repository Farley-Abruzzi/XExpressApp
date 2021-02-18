import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { ContribuintesService } from 'src/app/services/contribuintes.service';
import { DetalheComponent } from '../../components/detalhe/detalhe.component';
import { Recibos } from '../../class/recibos';
import { CrudService } from '../../services/crud.service';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';


@Component({
  selector: 'app-contribuicao',
  templateUrl: './contribuicao.page.html',
  styleUrls: ['./contribuicao.page.scss'],
})
export class ContribuicaoPage implements OnInit {

  listaDeRecibos: Recibos[] = new Array<Recibos>();
  listaRecibosFiltrados: Recibos[] = new Array<Recibos>();
  n:number = 25;
  cardColors: string;
  usuario: UsuarioDTO;
  codMens: number;
  bairro: string;

  constructor(private navCtrl: NavController, private contribService: ContribuintesService, private modalCtrl: ModalController,
              private crudService: CrudService, public loadingController: LoadingController,
              private storage: StorageService, private usuarioService: UsuarioService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.carregarContribuintes();
    
  }

  // Método que carrega todos os contribuintes do mensageiro.
  async carregarContribuintes() {
    let loading = await this.presentLoading();

    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;

          // Para rodar no app
          this.crudService.getAll()
            .then((data: Recibos[]) => {
                this.listaDeRecibos = data;
                console.log("Recibos:", this.listaDeRecibos);
                loading.dismiss();

                if(this.listaDeRecibos.length[4] == "S") {
                    this.cardColors = "secondary";
                } else {
                    this.cardColors = "danger";
                }
            }, error => {
                console.log(error);
          });
    
          // Para rodar na web
          // this.contribService.getListaRecibos(this.codMens)
          //   .subscribe(resp => {

          //     this.listaDeRecibos = resp;
          //     console.log("Recibos:", this.listaDeRecibos);
          //     loading.dismiss();

          //     if (this.listaDeRecibos.length[4] == "S") {
          //       this.cardColors = "secondary";
          //     } else {
          //       this.cardColors = "danger";
          //     }
          //   }, error => { });
          
        }, error => {
          if (error.status == 403) {
            console.log(error.status);
          }
        });
    }
}

  // Método com promessa para mostrar os detalhes do recibo.
  async verDetalhes( nrorecibo: number ) {

    const modal = await this.modalCtrl.create({
      component: DetalheComponent,
      animated: true, 
      componentProps: {
        nrorecibo
      }
    });
    modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loadingClass',
      message: 'Carregando...',
      animated: true,
      spinner: 'circles',
      translucent: true
    });
    loading.present();
    return loading;

    //const { role, data } = await loading.onDidDismiss();
  }

  doRefresh(event) {
    this.refreshRecibos();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  refreshRecibos() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;
        
          this.crudService.getAll()
            .then((data: Recibos[]) => {
                this.listaDeRecibos = data;
                console.log("Recibos:", this.listaDeRecibos);
                

                if(this.listaDeRecibos.length[4] == "S") {
                    this.cardColors = "secondary";
                } else {
                    this.cardColors = "danger";
                }
            }, error => {
                console.log(error);
          });

        },error => {});
    }  
  }

  async filtrarRecibos() {
    const input = await this.alertCtrl.create({
      header: 'Filtro',
      subHeader: 'Pelo bairro: ',
      inputs: [
        {
          name: 'txtValor',
          type: 'text',
          value: ''
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.bairro = data.txtValor;
            console.log('BAIRRO: ', this.bairro);
            this.filtroPorBairro(this.bairro);
          },
        }
      ]
    });
    await input.present();
  }

  async filtroPorBairro(bairro: string) {
    let loading = await this.presentLoading();
    await this.crudService.getByBairro(bairro)
      .then((data: Recibos[]) => {
        
        this.listaDeRecibos = data;
        //this.refreshFilter(this.listaDeRecibos);
        console.log('Recibos por Bairro: ', this.listaDeRecibos);
        loading.dismiss();
      
      if(this.listaDeRecibos.length[4] == "S") {
          this.cardColors = "secondary";
      } else {
          this.cardColors = "danger";
      }
        
        
      });
  }

  // refreshFilter(listaDeRecibos) {
  //   setTimeout(() => {
  //     // event.target.complete();
  //   }, 2000);
  //     listaDeRecibos
  //     console.log('Recibos por Bairro: ', listaDeRecibos);
      
  //     if(this.listaDeRecibos.length[4] == "S") {
  //         this.cardColors = "secondary";
  //     } else {
  //         this.cardColors = "danger";
  //     }
  // }

}
