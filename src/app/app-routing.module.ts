import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsListsComponent } from './events/events-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path:  'events', component: EventsListsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
