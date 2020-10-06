import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModule,Material} from './mat/mat.module';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { FormarraytaskComponent } from './formarraytask/formarraytask.component';



@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    MyDialogComponent,
    FormarraytaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    
  ],
  entryComponents: [
    MyDialogComponent,MaterialComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
