import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Office UI Fabric test component';
  textFieldValue: string = 'Testing text field';
  anotherTextFieldValue: string = 'Testing another value';

  dropdownValues: {value: string, text: string}[] = [
    { 'value': 'm00', 'text': 'moo'},
    {'value': 'm30w', 'text': 'meow'},
    {'value': 'w00f', 'text': 'woof'}
  ];
  dropdownSelected = this.dropdownValues[1].value;
  dropdownPlaceholder = 'Please select a sound...';

  constructor() {}

  ngOnInit() {

  }

}



