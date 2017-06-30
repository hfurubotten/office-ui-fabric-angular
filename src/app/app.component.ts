import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Office UI Fabric test component';
  textFieldValue: string = 'Testing text field';
  anotherTextFieldValue: string = 'Testing another value';
}
