import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuintesComponent } from './contribuintes/contribuintes.component';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { PopinfoComponent } from './popresumo/popinfo.component';
import { FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PopdevolucaoComponent } from './popdevolucao/popdevolucao.component';



@NgModule({
  entryComponents: [
    DetalheComponent,
    PopinfoComponent,
    PopdevolucaoComponent
  ],
  declarations: [
    ContribuintesComponent,
    AvatarSelectorComponent,
    PopinfoComponent,
    DetalheComponent,
    PopdevolucaoComponent
  ],

  exports: [
    ContribuintesComponent,
    AvatarSelectorComponent,
    PopinfoComponent,
    DetalheComponent,
    PopdevolucaoComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
