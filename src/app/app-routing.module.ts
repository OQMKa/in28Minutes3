import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LogoutComponent } from './logout/logout.component';
import { routeGuard } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [routeGuard] },//canActivate - conditions-> RoutguardService.
  { path: 'listtodo', component: ListTodoComponent, canActivate: [routeGuard] },
  { path: 'wrongURL', component: ErrorpageComponent },
  { path: "error", component: ErrorComponent },
  { path: "logout", component: LogoutComponent, canActivate: [routeGuard] },
  { path: "**", component: ErrorpageComponent }
  // {path:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
