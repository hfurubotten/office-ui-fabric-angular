import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UifTextfieldComponent } from './uif-textfield/uif-textfield.component';

@NgModule({
  declarations: [
    AppComponent,
    UifTextfieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
