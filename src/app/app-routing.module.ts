import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercanciaComponent } from './components/mercancia/mercancia.component';
import { CrearmercanciaComponent } from './components/crearmercancia/crearmercancia.component';

const routes: Routes = [
  { path: 'crearmercancia', component: CrearmercanciaComponent },
  { path: 'mercancia', component: MercanciaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
