import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContribuicaoPage } from './contribuicao.page';
import { ComponentsModule } from '../../components/components.module';
import { AppRoutingModule } from '../../app-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ContribuicaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContribuicaoPage]
})
export class ContribuicaoPageModule {}
