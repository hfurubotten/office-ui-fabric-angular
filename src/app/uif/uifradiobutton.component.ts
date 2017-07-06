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
    @Input() uifOptions: {value: string, text: string, disabled: boolean}[];
    @Input() uifSelectedValue: string = '';
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();
    private _choiceFieldGroup: HTMLElement;
    private _choiceFieldComponents: RadioButton[];

    constructor() { }

    createRadioButtons() {
        let ChoiceFieldGroupElements = document.querySelectorAll(".ms-ChoiceFieldGroup");
        for (var i = 0; i < ChoiceFieldGroupElements.length; i++) {
            if(ChoiceFieldGroupElements[i].id == this.uifId) {
                this._choiceFieldGroup = <HTMLElement>ChoiceFieldGroupElements[i];
                new RadioButton(<HTMLElement>ChoiceFieldGroupElements[i]);  
                this._initialize();
            }
        }
    }

    onValueChanged(selected: Option) {
        if(selected.value != this.uifSelectedValue && selected.disabled != true) {
            this.uifSelectedValue = selected.value;
            this.uifSelectedValueChange.emit(this.uifSelectedValue);
        }
    }

    private _initialize() {
            this._choiceFieldGroup = this._choiceFieldGroup;
            this._choiceFieldComponents = [];
            this._initalSetup();
            this._addListeners();
    }

    private _initalSetup(): void {
        let choiceFieldElements: NodeListOf<Element> = this._choiceFieldGroup.querySelectorAll(".ms-RadioButton");
        for (let i: number = 0; i < choiceFieldElements.length; i++) {
            this._choiceFieldComponents[i] =  new RadioButton(<HTMLElement>choiceFieldElements[i]);
        }
    }

    private _addListeners(): void {
      document.addEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this), false);
    }

    private _ChoiceFieldHandler(event: CustomEvent): void {
        let name: string = event.detail.name;
        let selectedChoice: RadioButton = <RadioButton>event.detail.item;
        if ( this._choiceFieldGroup.id === name) {
            for (let i: number = 0; i < this._choiceFieldComponents.length; i++) {
                this._choiceFieldComponents[i].unCheck();
            }
            selectedChoice.check();
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
}