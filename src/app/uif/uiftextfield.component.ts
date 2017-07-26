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
    @Input() value: string = '';
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    private textfield: fabric.TextField;
    private textfieldElement: HTMLElement;
    inputType: string = 'Text';

    constructor() { }

    private initialize(): void {
        if (this.uifId != null) {
            this.textfieldElement = document.getElementById(this.uifId);
            var textfield = new fabric.TextField(this.textfieldElement);
        }
    }

    private setTypePassword(): void {
        if (this.uifPassword === true) {
            this.inputType = 'Password';
        }
    }

    onValueChanged() {
        this.valueChange.emit(this.value);
    }

    ngOnInit() {
        this.setTypePassword();
    }

    ngAfterViewInit() {
        this.initialize();
    }
}

