import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/TextField/TextField';

@Component({
    moduleId: module.id,
    selector: 'uif-textfield',
    templateUrl: './uiftextfield.component.html',
})

export class UifTextFieldComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifLabel: string = '';
    @Input() uifPlaceholder: string = '';
    @Input() uifUnderlined: boolean = false;
    @Input() uifMultiline: boolean = false;
    @Input() uifDisabled: boolean = false;
    @Input() uifType: string = 'Text';
    @Input() value: string = '';
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    private textfield: fabric.TextField;

    constructor() { }

    private initialize(): void {
        if (this.uifId != null) {
            var textfieldElement = document.getElementById(this.uifId);
            var textfield = new fabric.TextField(textfieldElement);
        }
    }

    onValueChanged() {
        this.valueChange.emit(this.value);
    }

    ngAfterViewInit() {
        this.initialize();
    }
}

