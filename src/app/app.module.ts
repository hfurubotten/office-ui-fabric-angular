import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import * as components from './components';

@NgModule({
  declarations: [
    AppComponent, 
    components.UifTextFieldComponent, 
    components.UifDropdownComponent, 
    components.UifRadioButtonComponent,
    components.UifButtonComponent,
    components.UifCheckBoxComponent,
    components.UifMessageBarComponent,
    components.UifMessageBannerComponent,
    components.UifLabelComponent,
    components.UifLinkComponent,
    components.UifOverlayComponent,
    components.UifPanelComponent,
    components.UifChoiceFieldGroupComponent,
    components.UifSpinnerComponent
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
