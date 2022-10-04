import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPassangerComponent } from './components/add-passanger/add-passanger.component';
import { EditPassangerComponent } from './components/edit-passanger/edit-passanger.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PassangerManagerComponent } from './components/passanger-manager/passanger-manager.component';
import { ViewPassangerComponent } from './components/view-passanger/view-passanger.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/passanger/admin',
    pathMatch: 'full',
  },
  { path: 'passanger/admin', component: PassangerManagerComponent },
  { path: 'passanger/add', component: AddPassangerComponent },
  { path: 'passanger/edit/:passangerId', component: EditPassangerComponent },
  { path: 'passanger/view/:passangerId', component: ViewPassangerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
