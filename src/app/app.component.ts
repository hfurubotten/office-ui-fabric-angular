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
    { 'value': '5', 'text': 'moo'},
    {'value': '15', 'text': 'meow'},
    {'value': '11', 'text': 'woof'}
  ];


  constructor() {}

  ngOnInit() {

  }

}



