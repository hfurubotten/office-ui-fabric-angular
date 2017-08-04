import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckboxData } from '../DataObjects/CheckboxData';
import { EmitterService } from '../EmitterService/emitter.service';
import 'office-ui-fabric-js/src/components/CheckBox/CheckBox';


@Component({
    moduleId: module.id,
    selector: 'uif-checkbox',
    templateUrl: './uifcheckbox.component.html'
})
export class UifCheckBoxComponent implements AfterViewInit {
    @Input() uifLabel: string = '';
    @Input() uifId: string = '';
    @Input() uifChecked: boolean = false;
    @Input() uifDisabled: boolean = false;
    @Output() uifClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
    private emitterService: EmitterService;
    private checkboxLabel: HTMLElement;
    private checkbox: fabric.CheckBox;

    public constructor(private emitter: EmitterService) {
        this.emitterService = emitter;
    }

    private initialize() {
        if (this.uifId) {
            let checkboxElement = document.getElementById(this.uifId);
            this.checkboxLabel = <HTMLElement>checkboxElement.querySelector('.ms-CheckBox-field');
            this.checkbox = new fabric.CheckBox(checkboxElement);
            this.toggleInitialCheck();
        }
    }

    private toggleInitialCheck() {
        if (this.uifChecked) {
            this.checkbox.check();
        }
    }

    private isDisabled(): boolean {
        let disabled = this.checkboxLabel.classList.contains('is-disabled');
        return disabled;
    }

    private getCheckboxData(): CheckboxData {
        let checkboxData = new CheckboxData();
        checkboxData.value = this.uifId;
        checkboxData.checked = this.uifChecked;
        checkboxData.disabled = this.uifDisabled;

        return checkboxData;
    }

    private toggleChecked() {
        this.uifChecked = this.uifChecked === true ? false : true;
    }

    private emitCheckboxDataToEmitterService(): void {
        let checkboxData = this.getCheckboxData();
        this.emitterService.emit(checkboxData);
    }

    public checkboxClicked(): void {
        if (!this.isDisabled()) {
            this.toggleChecked();
            this.uifClicked.emit(this.uifChecked);
            this.emitCheckboxDataToEmitterService();
        }
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}