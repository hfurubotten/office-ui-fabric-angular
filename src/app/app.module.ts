import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import * as uif from './uif';

@NgModule({
  declarations: [
    AppComponent, 
    uif.UifTextFieldComponent, 
    uif.UifDropdownComponent, 
    uif.UifRadioButtonComponent,
    uif.UifButtonComponent,
    uif.UifCheckBoxComponent,
    uif.UifMessageBarComponent,
    uif.UifMessageBannerComponent,
    uif.UifLabelComponent,
    uif.UifLinkComponent,
    uif.UifOverlayComponent,
    uif.UifPanelComponent,
    uif.UifChoiceFieldGroupComponent,
    uif.UifSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
