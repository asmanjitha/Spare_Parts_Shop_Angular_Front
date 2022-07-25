import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService} from './service/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { RecipecardComponent } from './components/recipecard/recipecard.component';
import { NavbaruserComponent } from './components/navbaruser/navbaruser.component';

import { SweetAlertService } from 'angular-sweetalert-service';
import { AddpartComponent } from './components/addpart/addpart.component';
import { PartdataService } from './service/partdata.service';
import { PartdetailsComponent } from './components/partdetails/partdetails.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutcardComponent } from './components/checkoutcard/checkoutcard.component';
import { EditpartcardComponent } from './components/editpartcard/editpartcard.component';
import { EditpartComponent } from './components/editpart/editpart.component';


const applicationRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: LandingpageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchpageComponent},
  {path: 'editpart/:_id', component: EditpartComponent},
  {path: 'addpart', component: AddpartComponent},
  {path: 'part/:_id', component: PartdetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchpageComponent,
    RecipecardComponent,
    NavbaruserComponent,
    AddpartComponent,
    PartdetailsComponent,
    CheckoutComponent,
    CheckoutcardComponent,
    EditpartcardComponent,
    EditpartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [
    AuthService,
    SweetAlertService,
    PartdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
