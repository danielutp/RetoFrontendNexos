import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercanciaComponent } from './components/mercancia/mercancia.component';
import { CrearmercanciaComponent } from './components/crearmercancia/crearmercancia.component';

const routes: Routes = [
  { path: '', component: MercanciaComponent },
  { path: 'editarMercancia/:id', component: CrearmercanciaComponent },
  { path: 'guardarMercancia', component: CrearmercanciaComponent },
  { path: 'mercancia', component: MercanciaComponent },
  { path: '*', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
