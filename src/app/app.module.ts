import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './component/user/login';
import { HttpClientModule } from '@angular/common/http'
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRout: Routes = [
  {path:'login', component: Login},
  {path:'', redirectTo:'/login', pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRout),
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
