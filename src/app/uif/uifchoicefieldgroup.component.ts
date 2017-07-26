import { Component, OnDestroy, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { EmitterService } from '../EmitterService/emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { CheckboxData } from '../DataObjects/CheckboxData';
import 'office-ui-fabric-js/src/components/ChoiceFieldGroup/ChoiceFieldGroup';

@Component({
    moduleId: module.id,
    selector: 'uif-choicefieldgroup',
    templateUrl: './uifchoicefieldgroup.component.html',
    providers: [EmitterService]
})
export class UifChoiceFieldGroupComponent implements OnDestroy, AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifLabel: string = '';
    @Input() uifRequired: boolean = false;
    @Input() uifType: string = '';
    @Output() uifValuesChanged: EventEmitter<CheckboxData[]> = new EventEmitter<CheckboxData[]>();
    private choiceFieldGroup: fabric.ChoiceFieldGroup;
    private choiceFieldGroupItems: HTMLElement;
    private choiceFieldGroupElement: HTMLElement;
    private subscription: Subscription;
    private checkboxValues: Map<string, CheckboxData> = new Map<string, CheckboxData>();

    constructor(private emitterService: EmitterService) { }

    private setType(): void {
        if (this.uifType == '' || this.uifType == 'checkbox') {
            this.uifType = 'checkboxgroup';
        } else {
            this.uifType = 'radiogroup';
        }
    }

    private initialize(): void {
        this.initializeComponent();
        this.initializeSubscription();
        this.populateCheckboxValues();
        this.emitInitialValues();
    }

    private initializeComponent(): void {
        this.setType();
        this.choiceFieldGroupElement = document.getElementById(this.uifId);
        this.choiceFieldGroup = new fabric.ChoiceFieldGroup(this.choiceFieldGroupElement);
    }

    private initializeSubscription(): void {
        this.subscription = this.emitterService.emitterAnnounced$.subscribe(
            next => this.clickEvent(next),
            e => console.log(`error: ${e}`),
            () => console.log("complete")
        );
    }

    private populateCheckboxValues(): void {
        let checkboxElements = this.choiceFieldGroupElement.querySelectorAll('.ms-CheckBox');

        for (let i = 0; i < checkboxElements.length; i++) {
            let checkbox = checkboxElements[i];
            let checkboxField = <HTMLElement>checkbox.querySelector('.ms-CheckBox-field');
            let checkboxdata = this.getCheckboxData(checkbox, checkboxField);
            this.checkboxValues.set(checkboxdata.value, checkboxdata);
        }
    }

    private emitInitialValues(): void {
        setTimeout(() => {
            if (this.checkboxValues.size > 0) {
                let checkboxdata = Array.from(this.checkboxValues.values());
                this.uifValuesChanged.emit(checkboxdata);
            }
        }, 500);
    }

    private getCheckboxData(checkbox: Element, checkboxField: HTMLElement): CheckboxData {
        let checkboxdata = new CheckboxData();
        checkboxdata.value = checkbox.id;
        checkboxdata.checked = checkboxField.classList.contains('is-checked');
        checkboxdata.disabled = checkboxField.classList.contains('is-disabled');

        return checkboxdata;
    }

    clickEvent(eventInput: CheckboxData): void {
        if (eventInput != null) {
            this.checkboxValues.set(eventInput.value, eventInput);
            let checkboxdata = Array.from(this.checkboxValues.values());
            this.uifValuesChanged.emit(checkboxdata);
        }
    }

    ngAfterViewInit() {
        this.initialize();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}