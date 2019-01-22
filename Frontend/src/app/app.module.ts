import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { DataTablesModule } from 'angular-datatables';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataServiceComponent } from './components/dataservice/dataservice.component';
import { ApiComponent } from './components/api/api.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { UserModelComponent } from './components/user-model/user-model.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'forget', component: ForgetComponent},
  {path:'verify/:token', component: VerifyComponent},
  {path:'reset/:token', component: ResetComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},

  {path:'about', component: AboutComponent, canActivate:[AuthGuard]},
  {path:'api', component: ApiComponent, canActivate:[AuthGuard]},
  {path:'contact', component: ContactComponent, canActivate:[AuthGuard]},
  {path:'dataservice', component: DataServiceComponent, canActivate:[AuthGuard]}
] 

@NgModule({
  declarations: [
    AboutComponent,
    ApiComponent,
    ContactComponent,
    DataServiceComponent,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    UserModelComponent,
    VerifyComponent,
    ForgetComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [ValidateService,AuthService,AuthGuard,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
