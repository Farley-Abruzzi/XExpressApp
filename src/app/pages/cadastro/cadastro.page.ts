import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contribuintes } from '../../class/contribuintes';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';
import { ContribuintesService } from '../../services/contribuintes.service';
import { UltimoContribuinte } from '../../interfaces/ultimoContribuinte';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  contribuinte: Contribuintes = new Contribuintes();
  public fContribuinte: FormGroup;

  usuario: UsuarioDTO;
  codMens: number;
  codUsuario: number;
  codFunc: number;
  ultimoContrib: UltimoContribuinte;
  

  constructor(private fBuilder: FormBuilder, private storage: StorageService,
              private usuarioService: UsuarioService, private contribService: ContribuintesService) {
    this.fContribuinte = this.fBuilder.group({
      'nome': [null, Validators.compose([ Validators.required, Validators.minLength(2) ])],
      'telefone': [null, Validators.compose([ Validators.required, Validators.minLength(10) ])],
      'valor': [null, Validators.compose([ Validators.required ])],
      'endereco': [null],
      'numero': [null],
      'bairro': [null],
      'cidade': [null],
      'observacoes': [null]
    })
   }

  ngOnInit() {
    //Exemplo de como setar
    // this.fContribuinte.get('nome').setValue(this.contribuinte.nome);
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = resp.codmensageiro;
          this.codUsuario = resp.codusuario;
          this.codFunc = resp.codfunc;
          console.log(this.usuario);
        }, error => {}  
      )
    }
  }

  setObj() {
    this.contribuinte = new Contribuintes();

    this.contribuinte.nomenorecibo = this.fContribuinte.value.nome;
    this.contribuinte.telefoneprincipal = this.fContribuinte.value.telefone;
    this.contribuinte.enderecoprincipal = this.fContribuinte.value.endereco;
    this.contribuinte.numeroprincipal = this.fContribuinte.value.numero;
    this.contribuinte.bairroprincipal = this.fContribuinte.value.bairro;
    this.contribuinte.cidadeprincipal = this.fContribuinte.value.cidade;
    this.contribuinte.observacoes = this.fContribuinte.value.observacoes;
    this.contribuinte.codmensageiro = this.codMens;
    this.contribuinte.codstatus = 1;
    this.contribuinte.codcategoria = 5;
    this.contribuinte.codfunc = 73
    this.contribuinte.stsistema = 2;

    this.postContrib();

  }

  postContrib() {
    this.contribService.postContribuinte(this.contribuinte)
      .subscribe(resp => {
        alert('Contribuinte inserido com sucesso!');
        console.log('Teste 1: ', resp);
        this.getUltContrib();
      });
  }

  getUltContrib() {
    this.contribService.getUltContribuinte()
      .subscribe(resp => {
        this.ultimoContrib = resp;
        console.log('UltContrib: ', this.ultimoContrib);
      });
  }
  

  submitForm() {
    this.setObj();
    console.log(this.contribuinte);
  }

}
