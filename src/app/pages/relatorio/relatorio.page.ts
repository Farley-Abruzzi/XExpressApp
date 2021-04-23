import { Component, OnInit, Input } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ContribuintesService } from '../../services/contribuintes.service';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { LoadingController, PopoverController, ToastController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popresumo/popinfo.component';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';
import { Resumo } from '../../interfaces/resumo';
import { ResumoDTO } from '../../interfaces/resumoDTO';
import { write } from 'fs';



@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  @Input() objResumo: Resumo;
  @Input() resumoDTO: ResumoDTO[];

  dtStart: Date = new Date();
  dtEnd: Date = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);
  dtInicio: string = " ";
  dtFim: string = " ";
  usuario: UsuarioDTO;
  codMens: number;
  nrecibos: any[] = [];

  constructor( private bluetoothSerial: BluetoothSerial,
               private contribService: ContribuintesService,
               private datePipe: DatePipe,
               private popoverCtrl: PopoverController,
               private loadingController: LoadingController,
               private toastCtrl: ToastController,
               private usuarioService: UsuarioService,
               private storage: StorageService) { }


  ngOnInit() {
    this.carregarPeriodo();
  }

  // Método para carregar a contabilização por período após a seleção da data início e fim.
  // Carrega também os recibos por cidade através do mesmo seletor de data.
  async carregarPeriodo() {
    await this.carregarResumo();
    await this.carregarResumoBaixados();
  }

  // Carrega o objeto de resumo do mensageiro.
  async carregarResumo() {
    let loading = await this.presentLoading();
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;
        

          this.contribService.getResumo(this.codMens, this.dtInicio, this.dtFim)
            .subscribe(resp => {
              this.objResumo = resp;
              this.objResumo.trabalhadas = this.objResumo.qtdRecebido + this.objResumo.qtdCancelado + this.objResumo.qtdDevolvido;
              console.log('OBJ RESUMO: ', this.objResumo);
              loading.dismiss();
            }, error => {
              console.log(error);
              loading.dismiss();
            });
          
        }, error => {
          if (error.status == 403) {
            console.log(error.status);
          }
      });
    } 
  }

  async carregarResumoBaixados() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;

          this.contribService.getResumoBaixados(this.codMens, this.dtInicio, this.dtFim)
            .subscribe(resp => {
              this.resumoDTO = resp;
              
              console.log('BAIXADOS: ', this.resumoDTO);
            })
          }, error => {
            if (error.status == 403) {
              console.log(error.status);
            }
        });
      }
  }


  // Mostrando mensagens de confirmação no Toast
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      mode: "ios",
      color: "dark"
    });
    toast.present();
  }

  teste() {
    if (this.resumoDTO !== null) {
      for (var val of this.resumoDTO) {
        console.log('TESTE: ', val['nrorecibo'] + ' ' + val['valorgerado']);
        return val['nrorecibo'] + '   ' + val['valorgerado'] + '\n';
      }
    }
  }

  // Imprime as informações relacionadas na impressora.
  Imprimir() {
    this.conversorDate();
    
    this.bluetoothSerial.write(
      '\n\n\n' + '      *** RELATORIO ***' + '\n\n' +
      'Mensageiro:\n' +
      this.objResumo.mensageiro + '\n\n' +
      'Contabilizando o Periodo:\n' + 'DE ' + this.dtInicio + ' A ' + this.dtFim + '\n\n' +
      'HOSPITAL DO CANCER EM UBERLANDIA\n\n\n\n\n' +
      'Codigo validacao: ' + '123' + '\n\n\n' +
      'RESUMO\n' +
      'Trabalhadas: ' + this.objResumo.totalQtd + '\n\n\n' +
      // 'A Receber: R$' + this.objResumo.valorEmAberto.toFixed(2) + '\n\n' +
      'Recebidas: ' + this.objResumo.qtdRecebido + '\n' +
      'Valor: R$' + this.objResumo.valorRecebido.toFixed(2) + '\n\n\n' +
      'Devolvidas: ' + this.objResumo.qtdDevolvido + '\n' +
      'Valor: R$' + this.objResumo.valorDevolvido.toFixed(2) + '\n\n\n' +
      'Canceladas: ' + this.objResumo.qtdCancelado + '\n\n\n\n' +
      'Recebidas (Dinheiro)' + '\n\n' +
      'Codigo  ' + '  Valor(R$)' + '\n' +
      // this.resumoDTO[0].nrorecibo + '    ' + this.resumoDTO[0].valorgerado.toFixed(2) + '\n' +
      // this.resumoDTO[1].nrorecibo + '    ' + this.resumoDTO[1].valorgerado.toFixed(2) + '\n' +
      // this.resumoDTO[2].nrorecibo + '    ' + this.resumoDTO[2].valorgerado.toFixed(2) + '\n\n\n' +
      this.teste()
      );
      console.log('Imprimindo');
    }

  // converte datas
  conversorDate(): void {
   this.dtInicio = this.datePipe.transform(this.dtStart,"dd/MM/yyyy");
   this.dtFim = this.datePipe.transform(this.dtEnd,"dd/MM/yyyy");
  }

  // Carrega e transforma a data inicio
  carregarDtInicio(event) {
    this.dtInicio = this.datePipe.transform(new Date( event.detail.value ),"yyyy-MM-dd");
    console.log('Data Inicio ' + this.dtInicio);
  }

  // Carrega e tranforma a data fim
  carregarDtFim(event) {
    this.dtFim = this.datePipe.transform(new Date( event.detail.value ),"yyyy-MM-dd");
    console.log('Data Fim ' + this.dtFim);
    this.carregarPeriodo();
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

  // Mostra o resumo por cidade da página relatorio
  async mostrarPop( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      translucent: true,
      animated: true
    });
    await popover.present();
  }

}
