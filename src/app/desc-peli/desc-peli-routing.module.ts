import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescPeliPage } from './desc-peli.page';

const routes: Routes = [
  {
    path: '',
    component: DescPeliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescPeliPageRoutingModule {}
