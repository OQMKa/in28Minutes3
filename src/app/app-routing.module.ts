import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'listtodo',component:ListTodoComponent},
  {path:'wrongURL', component:ErrorpageComponent},
  {path:"error", component:ErrorComponent},
  {path:"**", component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
