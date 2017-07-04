import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RadioButton } from 'office-ui-fabric-js/src/components/RadioButton/RadioButton';

@Component({
    moduleId: module.id,
    selector: 'uif-radiobutton',
    templateUrl: './uifradiobutton.component.html'
})
export class UifRadioButtonComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifId: string = '';
    @Input() uifRequired: boolean = false;
    @Input() uifOptions: {value: string, text: string}[];
    @Input() uifSelectedValue: string = '';

    constructor() { }

    createRadioButtons() {
        var ChoiceFieldGroupElements = document.querySelectorAll(".ms-ChoiceFieldGroup");
        for (var i = 0; i < ChoiceFieldGroupElements.length; i++) {
            new RadioButton(<HTMLElement>ChoiceFieldGroupElements[i]);
        }
    }

    ngOnInit() { 
        this.createRadioButtons();
    }
}