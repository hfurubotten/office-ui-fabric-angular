import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/TextField/TextField';

@Component({
    moduleId: module.id,
    selector: 'uif-textfield',
    templateUrl: './uiftextfield.component.html',
})

export class UifTextFieldComponent implements OnInit, AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifLabel: string = '';
    @Input() uifPlaceholder: string = '';
    @Input() uifUnderlined: boolean = false;
    @Input() uifMultiline: boolean = false;
    @Input() uifDisabled: boolean = false;
    @Input() uifPassword: boolean = false;
    @Input() uifAutoAdjustSize: boolean = false;
    @Input() value: string = '';
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    private textfield: fabric.TextField;
    private textfieldElement: HTMLElement;
    public inputType: string = 'Text';

    private initialize(): void {
        if (this.uifId) {
            let textfieldContainer = document.getElementById(this.uifId);
            this.textfieldElement = <HTMLElement>textfieldContainer.querySelector('.ms-TextField-field');
            var textfield = new fabric.TextField(textfieldContainer);
        }
    }

    private setTypePassword(): void {
        if (this.uifPassword === true) {
            this.inputType = 'Password';
        }
    }

    private setAutoAdjustSize(): void {
        if (this.uifId && this.uifMultiline && this.uifAutoAdjustSize) {
            this.textfieldElement.style.height = '';
            let scrollHeight = this.textfieldElement.scrollHeight + 20; // +20 to avoid vertical scroll bars
            this.textfieldElement.style.height = scrollHeight + 'px';
        }
    }

    public onValueChanged() {
        this.setAutoAdjustSize();
        this.valueChange.emit(this.value);
    }

    public ngOnInit() {
        this.setTypePassword();
    }

    public ngAfterViewInit() {
        this.initialize();
        this.setAutoAdjustSize();
    }
}

