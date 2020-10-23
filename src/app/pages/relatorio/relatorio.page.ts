import { Component, OnInit, Input } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ContribuintesService } from '../../services/contribuintes.service';
import { Resumo } from '../../interfaces/resumo';
import { DatePipe } from '@angular/common';
import { DataLocalService } from '../../services/data-local.service';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popresumo/popinfo.component';



@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  @Input() objetos: Resumo;

  dtStart: Date = new Date();
  dtEnd: Date = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);
  dtInicio: string = " ";
  dtFim: string = " ";

  constructor( private bluetoothSerial: BluetoothSerial,
               private contribService: ContribuintesService,
               private datePipe: DatePipe,
               private dataLocal: DataLocalService,
               private popoverCtrl: PopoverController ) { }


  ngOnInit() {

    this.conversorDate();
    this.connect();
    this.carregarPeriodo();
    // this.carregarResumo();
  }

  // Método para carregar a contabilização por período após a seleção da data início e fim.
  // Carrega também os recibos por cidade através do mesmo seletor de data.
  carregarPeriodo() {
    this.carregarResumo();
    // this.carregarResumoPorCidade();
  }

  // Carrega o objeto de resumo do mensageiro.
  carregarResumo() {
     this.contribService.getResumo(this.dtInicio, this.dtFim)
      .subscribe( resp => {
        this.objetos = resp;
      });
  }

  // Método para conectar o dispositivo a impressora via bluetooth.
  connect() {
      this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe((data) => {
        console.log('Conectado', data);
      });
  }

  // Desconecta o dispositivo da impressora.
  disconnectDevices() {
    this.bluetoothSerial.disconnect().then((error) => {
      console.log('Dispositivo desconectado.', error);
    });
    this.bluetoothSerial.clear().then(() => {
      console.log('Limpo');
    });
  }

  // Imprime as informações relacionadas na impressora.
  Imprimir() {
    this.conversorDate();

    this.bluetoothSerial.write(
      'Contabilizando o Periodo:\n'+'DE' + this.dtInicio +' A '+ this.dtFim + '\n' +
      'Total de contribuicoes: R$' + this.objetos.totalQtd + '\n' +
      'A Receber: R$' + this.objetos.valorEmAberto.toFixed(2) + '\n' +
      'Recebidas: ' + this.objetos.qtdRecebido + '\n' +
      'Devolvidas: '+ this.objetos.qtdDevolvido + '\n' +
      'Canceladas: '+ this.objetos.qtdCancelado + '\n\n\n'
      );
      console.log('Imprimindo');
    }

  // Teste, guarda recibos no local storage
  mostrarRecidos() {
    this.dataLocal.guardarRecibos( this.objetos );
    console.log('Recibos salvos', this.objetos );
  }

  // converte datas
  conversorDate(): void {
   this.dtInicio = this.datePipe.transform(this.dtStart,"yyyy-MM-dd");
   this.dtFim = this.datePipe.transform(this.dtEnd,"yyyy-MM-dd");
  }

  // Carrega e transforma a data inicio
  carregarDtInicio(event){
    this.dtInicio = this.datePipe.transform(new Date( event.detail.value ),"yyyy-MM-dd");
    console.log('Data Inicio ' + this.dtInicio);
  }

  // Carrega e tranforma a data fim
  carregarDtFim(event){
    this.dtFim = this.datePipe.transform(new Date( event.detail.value ),"yyyy-MM-dd");
    console.log('Data Fim ' + this.dtFim);

    this.carregarPeriodo();
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