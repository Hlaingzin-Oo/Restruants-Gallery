import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestComponent } from './add-rest/add-rest.component';
import { ListRestComponent } from './list-rest/list-rest.component';
import { UpdateRestComponent } from './update-rest/update-rest.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    component:AddRestComponent,
    path:'addRest'
  },
  {
    component:UpdateRestComponent,
    path:'update/:id',
    
  },
  {
    component:ListRestComponent,
    path:'list'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:LoginComponent,
    path:'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
