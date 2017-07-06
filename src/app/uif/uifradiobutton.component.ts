import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { RadioButton } from 'office-ui-fabric-js/src/components/RadioButton/RadioButton';
// import { CheckBox } from 'office-ui-fabric-js/src/components/CheckBox/CheckBox';
// import { ChoiceFieldGroup } from 'office-ui-fabric-js/src/components/ChoiceFieldGroup/ChoiceFieldGroup';
declare let fabric: any;

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
            // new ChoiceFieldGroup(<HTMLElement>ChoiceFieldGroupElements[i]);
            new fabric['ChoiceFieldGroup'](ChoiceFieldGroupElements[i]);
        }
    }

    onValueChanged(selected: Option) {
        if(selected.value != this.uifSelectedValue && selected.disabled != true) {
            this.uifSelectedValue = selected.value;
            this.uifSelectedValueChange.emit(this.uifSelectedValue);
        }
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.createRadioButtons();
     }
}

class Option {
    value: string = '';
    text: string = '';
    disabled: boolean = false;

    constructor(value: string, text: string, disabled: boolean) {
        this.value = value;
        this.text = text;
        this.disabled = disabled;
    }
}