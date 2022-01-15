import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchFormComponent} from './form/form.component';
import {GitsearchComponent} from './search/search.component';


const routes: Routes = [
  {path: 'searchForm' , component: SearchFormComponent},
  {path: '' , component: GitsearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }