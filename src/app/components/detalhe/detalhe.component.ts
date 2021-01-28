import { Component, OnInit, Input } from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';
import { Recibos } from '../../class/recibos';
import { ModalController, ActionSheetController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Devolvidos } from '../../Class/devolvidos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss'],
})
export class DetalheComponent implements OnInit {

  recibo: Recibos;
  devolvido: Devolvidos;
  @Input() nrorecibo;

  lbReferencia: boolean = false;

  dtReagendamento: Date = new Date();
  dtBaixa: Date = new Date();
  dtDevAtual: Date = new Date();

  valorDoacao: number;
  conectPrint: boolean = false;


  constructor( private contribService: ContribuintesService,
               private modalCtrl: ModalController,
               private actionSheetCtrl: ActionSheetController,
               private datePipe: DatePipe,
               private toastCtrl: ToastController,
               private alertCtrl: AlertController,
               private navCtrl: NavController,
               private bluetoothSerial: BluetoothSerial,
               private crudService: CrudService
               ) { }

  ngOnInit() {
    this.carregarRecibosDetalhes();
    console.log('Número do recibo: ', this.nrorecibo );
  }

  // Chama a API de recibos para ser vizualizada no app
  carregarRecibosDetalhes() {
    // Para rodar no app
    this.crudService.getById(this.nrorecibo)
      .then( (data: Recibos) => {
        this.recibo = data;

        if(this.recibo.complementosecundario == "") {
          this.lbReferencia = false;
        } else {
          this.lbReferencia = true;
        }
    });

    // Para rodar na web
    // this.contribService.getRecibosDetalhe( this.nrorecibo )
    //   .subscribe( resp => {
    //     this.recibo = resp;

    //     if (this.recibo.complementosecundario == "") {
    //       this.lbReferencia = false;
    //     } else {
    //       this.lbReferencia = true;
    //     }
    // });
  }

  // Atualiza a API de recibos no backend ou no BD do app
  getPutRecibos( msg: string, opcao: string ) {
    // Para rodar no app
    this.crudService.update(this.recibo, opcao)
      .then(() => {
        this.presentToast(msg);
        this.sairDoModal();
    }).catch(
      e => console.error(e)
    );

    // Para rodar na web
    // this.contribService.putRecibo( this.recibo )
    //   .subscribe(() => {
    //     // Exibir tost de reagendamento
    //     this.presentToast(msg);
    //     this.sairDoModal();
    //     console.log(this.recibo);
    //   }, error => {
    //     console.log(error);
    //   });
}

  // Método para efetuar uma doação
  async inputDoacao() {

    const input = await this.alertCtrl.create({
      header: 'Doação',
      subHeader: 'Digite o valor da doação: ',
      inputs: [
        {
          name: 'txtValor',
          type: 'number',
          value: this.recibo.valorgerado
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
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.valorDoacao = data.txtValor;

            if(this.recibo !== undefined) {
              // Condição para receber o valor com alteração ou não
              if(this.valorDoacao !== this.recibo.valorgerado) {
                this.recibo.motivodevol = 'Valor alterado';
                // Tabela motivo devolução, aqui vou chamar essa api
                this.objDevolvido('Recebido com alteração de valor');
                this.getPostDevolvidos();
                this.insertDevolvidos();
              }
              this.recibo.valorgerado = this.valorDoacao;
              this.recibo.statusrec = 'B';
              this.recibo.dtbaixa = this.dtBaixa;

              this.getPutRecibos('Doação realizada!', 'doacao');
              this.imprimir();
              // this.atualizarPagina();
            }
          }
        }
      ]
    });
    await input.present();
  }

  // Método que recebe a data pelo componente "datetime" e imputa para data de "reagendamento".
  reagendar( event ) {
    // Evento do click "Ok"
    if(this.recibo !== undefined){
      this.recibo.dtreagendamento = new Date( event.detail.value );
      this.recibo.reagendado = "S";
      console.log('Data de reagendamento atualizada: ', this.datePipe.transform(this.recibo.dtreagendamento, 'dd/MM/yyyy'));

      this.getPutRecibos("Reagendamento realizado com sucesso!" , 'reagendamento');
      this.imprimirReagendamento();
      //this.atualizarPagina();
    }
  }

  // Método para imputar motivos da devolução
  async alertDevolucao() {
    const alert = await this.alertCtrl.create({
      header: 'Motivo da devolução:',
      buttons: [{
        text: 'Não localizado',
        handler: () => {
          this.objDevolvido('Não localizado');
          //this.getPostDevolvidos();
          this.insertDevolvidos();
          this.statusRecibo();
          this.atualizarPagina();
        }
      },
      {
        text: 'Endereço não encontrado',
        handler: () => {
          this.objDevolvido('Endereço não encontrado');
          // this.getPostDevolvidos();
          this.insertDevolvidos();
          this.statusRecibo();
          this.atualizarPagina();
        }
      },
      {
        text: 'Mudou-se',
        handler: () => {
          this.objDevolvido('Mudou-se');
          // this.getPostDevolvidos();
          this.insertDevolvidos();
          this.statusRecibo();
          this.atualizarPagina();
        }
      },
      {
        text: 'Faleceu',
        handler: () => {
          this.objDevolvido('Faleceu');
          // this.getPostDevolvidos();
          this.insertDevolvidos();
          this.statusRecibo();
          this.atualizarPagina();

        }
      }

    ]
    });

    await alert.present();
  }

  insertDevolvidos() {
    this.crudService.insertDevolvidos(this.devolvido).then(

    ).catch(
      e => console.error(e)
    );
}

  // Setando alterações para o recibo devolvido
  objDevolvido( motivo: string ) {
    this.devolvido = new Devolvidos(
      this.nrorecibo,
      this.dtDevAtual,
      this.datePipe.transform( this.dtDevAtual, 'HH:mm:ss'),
      this.dtDevAtual, 341, 70014, motivo, 1, 'Descrição do atendimento');
  }

  // Inserindo alterações do recibo devolvido para o backend
  getPostDevolvidos() {
    this.contribService.postDevolvidos( this.devolvido )
      .subscribe( () => {
        console.log('Inserido');
      }, error => {
        console.log(error);
      });
  }

  // Setando o statusrec do recido pra quando ele for devolvido
  statusRecibo() {
    this.recibo.statusrec = "D";
    this.getPutRecibos("Devolvido com sucesso!" , 'devolucao');
  }

  // Imprimindo o recibo de doação
  imprimir() {

    this.bluetoothSerial.write(
    '\n\n\n'+'   *** RECIBO DE DOACAO ***' + '\n\n' +
    'HOSPITAL DO CANCER EM UBERLANDIA' + '\n\n' +
    'AV. AMAZONAS, 1996 - B. UMUARAMA' + '\n' +
    'UBERLANDIA/MG - (34) 3291-6100' + '\n' +
    'GRUPO LUTA PELA VIDA' + '\n' +
    'CNPJ: 01.316.056/0001-12' + '\n' +
    '0800-342062' + '\n\n' +
    'VALOR: R$' + this.recibo.valorgerado +',00' + '\n\n' +
    '===============================' + '\n\n' +

    'Cod. Contribuinte: ' + this.recibo.nrorecibo + '\n' +
    'Doador: ' + '\n' +
    this.recibo.nomenorecibo + '\n' +
    'Data: ' + this.datePipe.transform(this.recibo.dtbaixa, 'dd/MM/yyyy') + '\n' +
    'Valor: R$' + this.recibo.valorgerado +',00' + '\n\n\n\n' +


    '    Codigo de autenticacao   ' + '\n\n' +
    '           xxxxxxx           ' + '\n\n' +

    'Obrigado! Sua doacao e muito' + '\n' +
    'importante para os nossos pacientes.' + '\n\n\n'
    );
    console.log('Impressão de doação');
}

  // Imprimindo recibo de reagendamento
  imprimirReagendamento() {

    this.bluetoothSerial.write(
      '\n\n\n'+'   *** RECIBO DE REAGENDAMENTO ***' + '\n\n' +
      'HOSPITAL DO CANCER EM UBERLANDIA' + '\n\n' +
      'AV. AMAZONAS, 1996 - B. UMUARAMA' + '\n' +
      'UBERLANDIA/MG - (34) 3291-6100' + '\n' +
      'GRUPO LUTA PELA VIDA' + '\n' +
      'CNPJ: 01.316.056/0001-12' + '\n' +
      '0800-342062' + '\n\n' +
      'VALOR: R$' + this.recibo.valorgerado +',00' + '\n\n' +
      '===============================' + '\n\n\n' +
      'Ola estive aqui para recolher'+ '\n' +
      'sua doacao que e muito '+ '\n' +
      'importante para nos.'+ '\n\n' +
      'Retornaremos no dia: '+ this.datePipe.transform(this.recibo.dtreagendamento, 'dd/MM/yyyy') + '\n\n\n'
    );
    console.log('Impressão de reagendamento');
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

  // Encerra o modal recibo/detalhes, e atualiza a página que contem a lista de recibos
  async sairDoModal() {
    return await this.modalCtrl.dismiss( {animated: true} );

  }

  // Método para selecionar ações no modal recibo/detalhes
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ações',
      backdropDismiss: true,
      buttons: [{
        text: 'Enviar para análise',
        role: 'destructive',
        icon: 'paper-plane',
        cssClass: 'rojo',
        handler: () => {
          console.log('Enviando');
        }
      }, {
        text: 'Ver análise',
        icon: 'paper',
        handler: () => {
          console.log('Vendo análise');
        }
      }, {
        text: 'Ver Historico',
        icon: 'filing',
        handler: () => {
          console.log('Vendo histórico');
        }
      }, {
        text: 'telefones adicionais',
        icon: 'call',
        handler: () => {
          console.log('Telefones ad.');
        }
      }, {
        text: 'Telefones ad. online',
        icon: 'power',
        handler: () => {
          console.log('Telefones online');
        }
      }, {
        text: 'Gerar parcelas da campanha de natal',
        icon: 'add',
        role: 'cancel',
        handler: () => {
          console.log('Gerando parcelas');
        },
      }]
    });
    await actionSheet.present();
  }

  bluetoothImpressora(bluetooth: boolean) {
    
  }

  // Método para conectar o dispositivo a impressora via bluetooth.
  connectOrDisconnectPrint() {
    if (this.conectPrint = !this.conectPrint) {
      console.log('CONECTADO: ', this.conectPrint);
        this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe((data) => {
          console.log('Conectado', data);
        });
      this.presentToast('IMPRESSORA CONECTADA!');

    } else {
      console.log('DESCONECTADO: ', this.conectPrint);
      this.bluetoothSerial.disconnect().then((error) => {
        console.log('Dispositivo desconectado.', error);
      });
      this.bluetoothSerial.clear().then(() => {
        console.log('Limpo');
      });
      this.presentToast('IMPRESSORA DESCONECTADA!');
    }
  }


  // Atualiza a página contribuição apos ações(Doação, Reagendamento e Devolução) no modal recibo/detalhes
  atualizarPagina() {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

}
