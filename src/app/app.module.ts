import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DatePipe } from '@angular/common';
import { ListStudentsComponent } from './pages/list-students/list-students.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PublicComponent } from './shared/layouts/public/public.component';
import { RegisterMonitoringComponent } from './pages/register-monitoring/register-monitoring.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    PublicComponent,
    NotFoundComponent,
    HeaderComponent,
    RegisterStudentComponent,
    ListStudentsComponent,
    RegisterMonitoringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask(), DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
