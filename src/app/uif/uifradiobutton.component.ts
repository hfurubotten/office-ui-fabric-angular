import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
declare var fabric: any;

@Component({
    moduleId: module.id,
    selector: 'uif-radiobutton',
    templateUrl: './uifradiobutton.component.html'
})
export class UifRadioButtonComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifId: string = '';
    @Input() uifRequired: boolean = false;
    @Input() uifOptions: {value: string, text: string, disabled: boolean}[];
    @Input() uifSelectedValue: string = '';
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    createRadioButtons() {
        var ChoiceFieldGroupElements = document.querySelectorAll(".ms-ChoiceFieldGroup");
        for (var i = 0; i < ChoiceFieldGroupElements.length; i++) {
            new fabric['ChoiceFieldGroup'](ChoiceFieldGroupElements[i]);
        }
    }

    onValueChanged(value: string) {
        if(value != this.uifSelectedValue) {
            this.uifSelectedValue = value;
            this.uifSelectedValueChange.emit(this.uifSelectedValue);
        }
    }

    ngOnInit() { 
    }

    ngAfterViewInit() {
        this.createRadioButtons();
     }
}