import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { ContribuintesService } from 'src/app/services/contribuintes.service';
import { DetalheComponent } from '../../components/detalhe/detalhe.component';
import { Recibos } from '../../class/recibos';
import { CrudService } from '../../services/crud.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-contribuicao',
  templateUrl: './contribuicao.page.html',
  styleUrls: ['./contribuicao.page.scss'],
})
export class ContribuicaoPage implements OnInit {

  listaDeRecibos: Recibos[] = new Array<Recibos>();
  n:number = 25;
  cardColors: string;

  constructor(private navCtrl: NavController,
              private contribService: ContribuintesService,
              private modalCtrl: ModalController,
              private crudService: CrudService,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.carregarContribuintes();
    
  }

  // Método que carrega todos os contribuintes do mensageiro.
  async carregarContribuintes() {
    let loading = await this.presentLoading();
    // Para rodar no app
    /*this.crudService.getAll().then((data:Recibos[]) => {
       this.listaDeRecibos = data;
    });*/
    
    // Para rodar na web
    this.contribService.getListaRecibos()
      .subscribe( resp => {

        this.listaDeRecibos = resp;
        console.log("Recibos:", this.listaDeRecibos);
        loading.dismiss();

        if(this.listaDeRecibos.length[4] == "S") {
          this.cardColors = "secondary";
        } else {
          this.cardColors = "danger";
        }
      },error=> {});
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
      message: 'Carregando...'
      //duration: 2000,
    });
    loading.present();
    return loading;

    //const { role, data } = await loading.onDidDismiss();
  }


}
