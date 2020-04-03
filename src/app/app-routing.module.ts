import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterViewComponent } from './register-view/register-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ForgotPasswordViewComponent } from './forgot-password-view/forgot-password-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPlaceViewComponent } from './my-place-view/my-place-view.component';


const routes: Routes = [
  {path:'login', component:LoginViewComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'register', component:RegisterViewComponent},
  {path:'home', component:HomeViewComponent},
  {path:'forgotpassword', component:ForgotPasswordViewComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'myPlaces', component:MyPlaceViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
