import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CuSearchComponent } from './cu-search/cu-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  //{ path: 'list', component: CardListComponent },
  { path: 'search', component: CuSearchComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
