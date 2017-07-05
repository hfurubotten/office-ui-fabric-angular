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
    {'value': 'mø', 'text': 'moo'},
    {'value': 'mjau', 'text': 'meow'},
    {'value': 'voff', 'text': 'woof'}
  ];
  dropdownSelected = this.dropdownValues[1].value;
  dropdownPlaceholder = 'Please select a sound...';

  radioValuesWithDisabled: {value: string, text: string, disabled: boolean}[] = [
    {'value': 'grønn', 'text': 'Green', 'disabled': false},
    {'value': 'rød', 'text': 'Red', 'disabled': false},
    {'value': 'blå', 'text': 'Blue', 'disabled': true},
    {'value': 'gul', 'text': 'Yellow', 'disabled': false}
  ];
  
  radioValues: {value: string, text: string}[] = [
    {'value': 'grønn', 'text': 'Green'},
    {'value': 'rød', 'text': 'Red'},
    {'value': 'blå', 'text': 'Blue'},
    {'value': 'gul', 'text': 'Yellow'}
  ];

  radioSelected = this.radioValues[1].value;
  radioLabel: string = 'Select color:'
  

  constructor() {}

  ngOnInit() {

  }

}



