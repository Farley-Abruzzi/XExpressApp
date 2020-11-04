import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioDTO } from '../../interfaces/usuario.dto';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario: UsuarioDTO;

  constructor(public storage: StorageService, public usuarioService: UsuarioService, private navCtrl: NavController) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(resp => {
          this.usuario = resp;
        },
          error => {
            if (error.status == 403) {
              this.navCtrl.navigateRoot('login', { animated: true });
          }
        });
    }
    else {
      this.navCtrl.navigateRoot('login', { animated: true });
    }
  }

}
