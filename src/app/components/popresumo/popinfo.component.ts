import { Component, OnInit, Input} from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';
import { ResumoPorCidade } from '../../interfaces/resumoPorCidade';
import { UsuarioService } from '../../services/usuario.service';
import { StorageService } from '../../services/storage.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';




@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  resumos: ResumoPorCidade;
  usuario: UsuarioDTO;
  codMens: number;

  constructor( private contribService: ContribuintesService, private usuarioService: UsuarioService, private storage: StorageService ) { }
  

  ngOnInit() {
    // this.conversorDate();
    this.carregarResumoPorCidade();
  }

  // Carrega o objeto de resumo do mensageiro por cidade.
  carregarResumoPorCidade() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
          this.codMens = this.usuario.codmensageiro;

    this.contribService.getResumoPorCidade(this.codMens)
      .subscribe( resp => {
        this.resumos = resp;
        console.log('Resumo por cidade:', this.resumos);
      });
          
        }, error => {
          if (error.status == 403) {
            console.log(error.status);
          }
      });
    }
  }


}
