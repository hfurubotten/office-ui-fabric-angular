import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import 'office-ui-fabric-js/src/components/Button/Button';

@Component({
    moduleId: module.id,
    selector: 'uif-button',
    templateUrl: './uifbutton.component.html',
})

export class UifButtonComponent implements OnInit {
    @Input() uifId: string = '';
    @Input() uifLabel: string = '';
    @Input() uifDisabled: boolean = false;
    @Input() uifType: string = '';
    @Input() uifDescription: string = '';
    @Output() uifButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    private button: fabric.Button;
    buttonBaseClass: string = 'ms-Button';
    buttonExtendedClass: string = ' ms-Button--';

    constructor() {}

    createButtons():void {
        if(this.uifId != null) {
            var buttonElement = document.getElementById(this.uifId);
            this.button = new fabric.Button(buttonElement);
        }
    }

    buttonClicked():void {
        this.uifButtonClicked.emit();
    }

    getCssClass():string {
        var cssClass = this.buttonBaseClass;
        if(this.uifType != '') {
            cssClass += this.buttonExtendedClass + this.uifType;
        }
        return cssClass;
    }

    ngAfterViewInit() {
        this.createButtons();
     }

    ngOnInit() { }

}