import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/RadioButton/RadioButton';

@Component({
    moduleId: module.id,
    selector: 'uif-radiobutton',
    templateUrl: './uifradiobutton.component.html'
})
export class UifRadioButtonComponent implements AfterViewInit {
    @Input() uifLabel: string = '';
    @Input() uifId: string = '';
    @Input() uifRequired: boolean = false;
    @Input() uifOptions: {value: string, text: string, disabled: boolean}[];
    @Input() uifSelectedValue: string = '';
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();
    private choiceFieldGroup: HTMLElement;
    private choiceFieldComponents: fabric.RadioButton[];
    
    private initialize():void {
        if(this.uifId) {
            this.choiceFieldGroup = document.getElementById(this.uifId);
            new fabric.RadioButton(this.choiceFieldGroup);
            this.initializeComponent();
        }
    }

    public onValueChanged(selected: Option):void {
        if(selected.value != this.uifSelectedValue && selected.disabled != true) {
            this.uifSelectedValue = selected.value;
            this.uifSelectedValueChange.emit(this.uifSelectedValue);
        }
    }

    private initializeComponent():void {
            this.choiceFieldGroup = this.choiceFieldGroup;
            this.choiceFieldComponents = [];
            this.initalSetup();
            this.addListeners();
    }

    private initalSetup():void {
        let choiceFieldElements: NodeListOf<Element> = this.choiceFieldGroup.querySelectorAll(".ms-RadioButton");
        for (let i: number = 0; i < choiceFieldElements.length; i++) {
            this.choiceFieldComponents[i] = new fabric.RadioButton(<HTMLElement>choiceFieldElements[i]);
        }
    }

    private addListeners():void {
      document.addEventListener("msChoicefield", this.ChoiceFieldHandler.bind(this), false);
    }

    private ChoiceFieldHandler(event: CustomEvent):void {
        let name: string = event.detail.name;
        let selectedChoice: fabric.RadioButton = <fabric.RadioButton>event.detail.item;
        if ( this.choiceFieldGroup.id === name) {
            for (let i: number = 0; i < this.choiceFieldComponents.length; i++) {
                this.choiceFieldComponents[i].unCheck();
            }
            selectedChoice.check();
        }
    }

    public ngAfterViewInit() {
        this.initialize();
     }
}

class Option {
    value: string = '';
    text: string = '';
    disabled: boolean = false;
}