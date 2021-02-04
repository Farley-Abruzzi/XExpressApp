import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  { path: 'contribuicao', loadChildren: './pages/contribuicao/contribuicao.module#ContribuicaoPageModule' },
  { path: 'relatorio', loadChildren: './pages/relatorio/relatorio.module#RelatorioPageModule' },
  { path: 'beneficio', loadChildren: './pages/beneficio/beneficio.module#BeneficioPageModule' },
  { path: 'mensagem', loadChildren: './pages/mensagem/mensagem.module#MensagemPageModule' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
