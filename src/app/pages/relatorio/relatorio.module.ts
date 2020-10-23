import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelatorioPage } from './relatorio.page';
import { ComponentsModule } from '../../components/components.module';
import { PopinfoComponent } from '../../components/popresumo/popinfo.component';

const routes: Routes = [
  {
    path: '',
    component: RelatorioPage
  }
];

@NgModule({
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelatorioPage]
})
export class RelatorioPageModule {}
