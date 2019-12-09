import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';


const routes: Routes = [
  { path: '', component: RestaurantListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
