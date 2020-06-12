import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { RouterComponent } from './router/router.component';
import { ActivatedRouterComponent } from './activated-router/activated-router.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RocketComponent } from './rocket/rocket.component';


const routes: Routes = [
{ path:'home', component:HomeComponent},
{ path:'parent/:id', component:ParentComponent},
{ path:'router',component:RouterComponent},
{ path:'activated-router/:id',component:ActivatedRouterComponent},
{ path:'login',component:LoginComponent},
{ path:'register',component:RegisterComponent},
{ path:'Http-client',component:RocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
