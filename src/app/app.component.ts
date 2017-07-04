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
    {'value': 'm00', 'text': 'moo'},
    {'value': 'm30w', 'text': 'meow'},
    {'value': 'w00f', 'text': 'woof'}
  ];
  dropdownSelected = this.dropdownValues[1].value;
  dropdownPlaceholder = 'Please select a sound...';

  radioValuesWithDisabled: {value: string, text: string, disabled: boolean}[] = [
    {'value': 'gr33n', 'text': 'Green', 'disabled': false},
    {'value': 'r3d', 'text': 'Red', 'disabled': false},
    {'value': 'b1u', 'text': 'Blue', 'disabled': true},
    {'value': 'y3ll0w', 'text': 'Yellow', 'disabled': false}
  ];
  
  radioValues: {value: string, text: string}[] = [
    {'value': 'gr33n', 'text': 'Green'},
    {'value': 'r3d', 'text': 'Red'},
    {'value': 'b1u', 'text': 'Blue'},
    {'value': 'y3ll0w', 'text': 'Yellow'}
  ];

  radioSelected = this.radioValues[1].value;
  radioLabel: string = 'Select color:'
  

  constructor() {}

  ngOnInit() {

  }

}



