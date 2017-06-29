import { Component, Input, OnInit } from '@angular/core';
// import * as fabric from 'office-ui-fabric-js/dist/js/fabric.min';
// declare var fabric: any;
//Had to modify original source file and remove the namespace, else it would result in "is not a module" error
import { TextField } from 'office-ui-fabric-js/src/components/TextField/TextField';

@Component({
    selector: 'uif-textfield',
    templateUrl: './uiftextfield.component.html',
    styleUrls: ['./uiftextfield.component.css']
})
export class uiftextfieldComponent implements OnInit {   
    @Input() uifLabel: string;
    @Input() uifUnderlined: boolean;
    inputValue: string = '';

    constructor() { }

    createTextFields() {
        var TextFieldElements = document.querySelectorAll(".ms-TextField");
        for (var i = 0; i < TextFieldElements.length; i++) {
            new TextField['TextField'](TextFieldElements[i]);
        }
    }

    ngOnInit() {
        this.createTextFields();
     }
}

