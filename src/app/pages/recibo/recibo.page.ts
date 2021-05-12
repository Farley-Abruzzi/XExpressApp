import { Component, OnInit } from '@angular/core';
import { Recibos } from '../../class/recibos';
import { ContribuintesService } from '../../services/contribuintes.service';
import { ActionSheetController, ToastController, AlertController, NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Devolvidos } from '../../class/devolvidos';
import { UsuarioService } from '../../services/usuario.service';
import { StorageService } from '../../services/storage.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.page.html',
  styleUrls: ['./recibo.page.scss'],
})
export class ReciboPage implements OnInit {

  recibo: Recibos;
  devolvido: Devolvidos;
  //@Input() nrorecibo;

  lbReferencia: boolean = false;

  dtReagendamento: Date = new Date();
  dataReag = new Date(this.dtReagendamento.getFullYear(), this.dtReagendamento.getMonth() + 1, 0);
  dtBaixa: Date = new Date();
  dtDevAtual: Date = new Date();
  usuario: UsuarioDTO;
  codMens: number;
  codUser: number;

  dtReag: string = " ";
  dataR: Date;

  valorDoacao: number;
  conectPrint: boolean = false;
  nrorecibo: any;
  connection: boolean = false;

  constructor( private contribService: ContribuintesService, private actionSheetCtrl: ActionSheetController,
    private datePipe: DatePipe, private toastCtrl: ToastController, private alertCtrl: AlertController,
    private bluetoothSerial: BluetoothSerial, private crudService: CrudService, private route: ActivatedRoute,
    private navCtrl: NavController, private usuarioService: UsuarioService, private storage: StorageService) {
      // console.log('Route: ', this.route);
     }
  

  ngOnInit() {
    this.nrorecibo = this.route.snapshot.paramMap.get('id');
    this.carregarRecibosDetalhes();
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;
          this.codUser = this.usuario.codusuario;
        },
      );
    }
    
}

// Chama a API de recibos para ser vizualizada no app
carregarRecibosDetalhes() {
// Para rodar no app
    this.crudService.getById(this.nrorecibo)
      .then( (data: Recibos) => {
        this.recibo = data;
        console.log('RECIBO: ', this.recibo);

        if(this.recibo.complementosecundario == null) {
        this.lbReferencia = false;
        } else {
        this.lbReferencia = true;
        }
    });
  }
  
  // getReciboWeb() {
  //   // Para rodar na web
  // this.contribService.getRecibosDetalhe( this.nrorecibo )
  //   .subscribe( resp => {
  //       this.recibo = resp;
  //       console.log('RECIBO WEB: ', this.recibo);
  //       if (this.recibo.complementosecundario == null) {
  //         this.lbReferencia = false;
  //       } else {
  //         this.lbReferencia = true;
  //       }
  //   }, error => {});
  // }


// Atualiza a API de recibos no backend ou no BD do app
async getPutRecibosInApp( msg: string, opcao: string ) {
// Para rodar no app
  await this.crudService.update(this.recibo, opcao)
    .then(() => {
      console.log('PUT IN APP: ', this.recibo);
      this.presentToast(msg);
      this.sairDoModal();
    }).catch(
      e => console.error(e)
    );
}

getPutRecibosInWeb() {
//Para rodar na web
  this.contribService.putRecibo( this.recibo )
    .subscribe(() => {
    console.log('PUT IN WEB: ', this.recibo);
  }, error => {});
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
          this.recibo.datadorecebimento = this.datePipe.transform(this.dtBaixa, 'dd/MM/yyyy');
          this.recibo.dtreagendamento = new Date(this.recibo.dtreagendamento);
          this.recibo.reagendado = null;
        
          this.getPutRecibosInApp('Doação realizada!', 'doacao');
          this.getPutRecibosInWeb();
          this.imprimir();
      }
    }
  }
]
});
await input.present();
}

// Método que recebe a data pelo componente "datetime" e imputa para data de "reagendamento".
  reagendar(event) {
    this.dtReag = event.detail.value;
    let newDtReag = this.dtReag;
    this.dataR = new Date(newDtReag);
    console.log('DATA REAG: ', this.dataR);
// Evento do click "Ok"
if (this.recibo !== undefined) {
    this.recibo.dtreagendamento = this.dataR;
    this.recibo.reagendado = "S";
    this.imprimirReagendamento();
    this.getPutRecibosInApp("Reagendamento realizado com sucesso!", 'reagendamento');
    this.getPutRecibosInWeb();
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
      }
    },
      {
      text: 'Endereço não encontrado',
      handler: () => {
      this.objDevolvido('Endereço não encontrado');
      //this.getPostDevolvidos();
      this.insertDevolvidos();
      this.statusRecibo();
      }
    },
      {
      text: 'Mudou-se',
      handler: () => {
      this.objDevolvido('Mudou-se');
      // this.getPostDevolvidos();
      this.insertDevolvidos();
      this.statusRecibo();
      }
    },
      {
      text: 'Faleceu',
      handler: () => {
      this.objDevolvido('Faleceu');
      // this.getPostDevolvidos();
      this.insertDevolvidos();
      this.statusRecibo();
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
    this.dtDevAtual, this.codMens, this.codUser, motivo, 1, 'Descrição do atendimento');
}

// Inserindo alterações do recibo devolvido para o backend
getPostDevolvidos() {
    this.contribService.postDevolvidos( this.devolvido )
    .subscribe( () => {
    console.log('Devolvido Inserido');
  }, error => {
  console.log(error);
  });
}

// Setando o statusrec do recido pra quando ele for devolvido
statusRecibo() {
  this.recibo.statusrec = "D";
  this.recibo.dtbaixa = new Date();
  this.recibo.dtreagendamento = null;
  this.recibo.reagendado = null;
  console.log('DTDEVOL: ', this.recibo.dtbaixa);
  this.getPutRecibosInApp("Devolvido com sucesso!", 'devolucao');
  this.getPutRecibosInWeb();
  //this.getPostDevolvidos();
}

// Imprimindo o recibo de doação
imprimir() {

    this.bluetoothSerial.write(
    '\n\n\n'+'  *** RECIBO DE DOACAO ***' + '\n\n' +
    'HOSPITAL DO CANCER EM UBERLANDIA' + '\n\n' +
    'AV. AMAZONAS, 1996 - B. UMUARAMA' + '\n' +
    'UBERLANDIA/MG - (34) 3291-6100' + '\n' +
    'GRUPO LUTA PELA VIDA' + '\n' +
    'CNPJ: 01.316.056/0001-12' + '\n' +
    '0800-342062' + '\n\n' +
    'VALOR: R$' + this.recibo.valorgerado +',00' + '\n\n' +
    '===============================' + '\n\n' +

    'Cod. Contribuinte: ' + this.recibo.codcontrib + '\n' +
    'Doador:\n' +
     this.recibo.nomenorecibo + '\n' +
    'Data: ' + this.datePipe.transform(this.recibo.dtbaixa, 'dd/MM/yyyy') + '\n' +
    'Valor: R$' + this.recibo.valorgerado +',00' + '\n\n\n\n' +


    '    Codigo de autenticacao   ' + '\n\n' +
    '          ' + this.recibo.nrorecibo + '          ' + '\n\n' +

    'Obrigado! Sua doacao e muito' + '\n' +
    'importante para os nossos' + '\n' +
    'pacientes.' + '\n\n\n'
    );
  console.log('Impressão de doação');
}

// Imprimindo recibo de reagendamento
imprimirReagendamento() {

    this.bluetoothSerial.write(
    '\n\n\n'+' *** RECIBO DE REAGENDAMENTO ***' + '\n\n' +
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
sairDoModal() {
  this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
  setTimeout(() => {
    this.navCtrl.navigateForward('contribuicao', { animated: true });
  }, 1500);
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

}
