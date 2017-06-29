import { Component, HostBinding, Input, OnInit } from '@angular/core';
// import * as fabric from 'office-ui-fabric-js/dist/js/fabric.min';
// declare var fabric: any;
//Had to modify original source file and remove the namespace, else it would result in "is not a module" error.
//reference: https://github.com/OfficeDev/Word-Add-in-Angular2-StyleChecker/blob/master/app/shared/office-fabric-component-wrappers/TextField.js
import { TextField } from 'office-ui-fabric-js/src/components/TextField/TextField';

@Component({
    selector: 'uif-textfield',
    templateUrl: './uiftextfield.component.html',
    styleUrls: ['./uiftextfield.component.css']
})

export class UifTextFieldComponent implements OnInit {   
    @Input() uifLabel: string = '';
    @Input() uifPlaceholder: string = '';
    @Input() uifUnderlined: boolean = false;
    @Input() uifMultiline: boolean = false;
    @Input() uifDisabled: boolean = false;
    inputValue: string = '';

    constructor() {

     }

    createTextField() {
        var TextFieldElements = document.querySelectorAll(".ms-TextField");
        for (var i = 0; i < TextFieldElements.length; i++) {
            new TextField(<HTMLElement>TextFieldElements[i]);
            // new fabric['TextField'](TextFieldElements[i]);
        }
    }

    ngOnInit() {
        this.createTextField();
     }
}

