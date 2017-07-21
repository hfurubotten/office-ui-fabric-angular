import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/CheckBox/CheckBox';

@Component({
    moduleId: module.id,
    selector: 'uif-checkbox',
    templateUrl: './uifcheckbox.component.html',
})
export class UifCheckBoxComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifId: string = '';
    private checkbox: fabric.CheckBox;
    constructor() { }

    createCheckBoxes() {
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (var i = 0; i < CheckBoxElements.length; i++) {
            this.checkbox = new fabric.CheckBox(<HTMLElement>CheckBoxElements[i]);
            this.checkbox.unCheck();
            console.log("toggles...");
        }
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.createCheckBoxes();
     }
}