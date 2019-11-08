import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  { path: 'people', component: PersonListComponent },
  { path: 'people/:id', component: PersonComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
