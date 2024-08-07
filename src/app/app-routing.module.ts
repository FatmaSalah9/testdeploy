import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './view/Pages/user-list/user-list.component';
import { UserDetailsComponent } from './view/Pages/user-details/user-details.component';

export const routes: Routes = [

  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
