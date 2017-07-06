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
    private choiceFieldGroup: HTMLElement;
    private choiceFieldComponents: RadioButton[];

    constructor() { }

    createRadioButtons() {
        let ChoiceFieldGroupElements = document.querySelectorAll(".ms-ChoiceFieldGroup");
        for (var i = 0; i < ChoiceFieldGroupElements.length; i++) {
            if(ChoiceFieldGroupElements[i].id == this.uifId) {
                this.choiceFieldGroup = <HTMLElement>ChoiceFieldGroupElements[i];
                new RadioButton(<HTMLElement>ChoiceFieldGroupElements[i]);  
                this.initialize();
            }
        }
    }

    onValueChanged(selected: Option) {
        if(selected.value != this.uifSelectedValue && selected.disabled != true) {
            this.uifSelectedValue = selected.value;
            this.uifSelectedValueChange.emit(this.uifSelectedValue);
        }
    }

    private initialize() {
            this.choiceFieldGroup = this.choiceFieldGroup;
            this.choiceFieldComponents = [];
            this.initalSetup();
            this.addListeners();
    }

    private initalSetup(): void {
        let choiceFieldElements: NodeListOf<Element> = this.choiceFieldGroup.querySelectorAll(".ms-RadioButton");
        for (let i: number = 0; i < choiceFieldElements.length; i++) {
            this.choiceFieldComponents[i] =  new RadioButton(<HTMLElement>choiceFieldElements[i]);
        }
    }

    private addListeners(): void {
      document.addEventListener("msChoicefield", this.ChoiceFieldHandler.bind(this), false);
    }

    private ChoiceFieldHandler(event: CustomEvent): void {
        let name: string = event.detail.name;
        let selectedChoice: RadioButton = <RadioButton>event.detail.item;
        if ( this.choiceFieldGroup.id === name) {
            for (let i: number = 0; i < this.choiceFieldComponents.length; i++) {
                this.choiceFieldComponents[i].unCheck();
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