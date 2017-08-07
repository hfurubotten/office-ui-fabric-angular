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
    components.UifSpinnerComponent,
    components.UifListItemComponent,
    components.UifListComponent,
    components.UifTableComponent,
    components.UifTableHeadComponent,
    components.UifTableHeaderComponent,
    components.UifTableRowComponent,
    components.UifTableCellSelectComponent,
    components.UifTableHeaderSelectComponent,
    components.UifTableBodyComponent,
    components.UifTableCellComponent,
    components.UifPivotComponent,
    components.UifPivotLinksComponent,
    components.UifPivotLinkComponent,
    components.UifPivotContentComponent,
    components.UifPivotEllipsisComponent,
    components.UifProgressIndicatorComponent,
    components.UifSearchBoxComponent
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
