import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { WeatherReportComponent } from './components/weather-report/weather-report.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '' , component:LoginComponent
  },
  {
    path: 'register' , component: RegisterComponent
  },
  {
    path: 'weather-report' , component: WeatherReportComponent, canActivate: [AuthGuard]
  },
  {
    path: '**' , component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
