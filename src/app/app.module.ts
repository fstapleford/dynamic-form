import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynaform/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynaform/dynamic-form-question.component';

@NgModule({
  declarations: [ AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
