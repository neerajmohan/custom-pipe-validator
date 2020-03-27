import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { ApplyComponent } from './apply/apply.component';
import { ResponseComponent } from './response/response.component';
import { FormService } from './form.service';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    ApplyComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
