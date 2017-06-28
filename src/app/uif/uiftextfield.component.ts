import { Component, Input, OnInit } from '@angular/core';
declare var fabric: any;

@Component({
    selector: 'uif-textfield',
    templateUrl: './uiftextfield.component.html',
    styleUrls: ['./uiftextfield.component.css']
})
export class uiftextfieldComponent implements OnInit {   
    @Input() uifLabel: string;
    inputValue = 'Alice';

    constructor() { }

    createTextFields() {
        var TextFieldElements = document.querySelectorAll(".ms-TextField");
        for (var i = 0; i < TextFieldElements.length; i++) {
            new fabric['TextField'](TextFieldElements[i]);
        }
    }

    ngOnInit() {
        this.createTextFields();
     }
}

