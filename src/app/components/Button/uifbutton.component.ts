import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import 'office-ui-fabric-js/src/components/Button/Button';

@Component({
    moduleId: module.id,
    selector: 'uif-button',
    templateUrl: './uifbutton.component.html',
})

export class UifButtonComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifLabel: string = '';
    @Input() uifDisabled: boolean = false;
    @Input() uifType: string = '';
    @Input() uifDescription: string = '';
    @Output() uifButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    private button: fabric.Button;

    private initialize(): void {
        if (this.uifId) {
            var buttonElement = document.getElementById(this.uifId);
            this.button = new fabric.Button(buttonElement);
        }
    }

    public buttonClicked(): void {
        this.uifButtonClicked.emit();
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}