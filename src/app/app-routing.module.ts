import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"inicio", component:HomepageComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"listado",component:ListadoComponent},
  {path:"registro", component: RegisterComponent},
  // {path:"productos/:id",component:ProductdetailComponent},
  {path:"**",component:NotfoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
