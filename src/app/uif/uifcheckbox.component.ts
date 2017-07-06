import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CheckBox } from 'office-ui-fabric-js/src/components/CheckBox/CheckBox';

@Component({
    moduleId: module.id,
    selector: 'uif-checkbox',
    templateUrl: './uifcheckbox.component.html',
})
export class UifCheckBoxComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifId: string = '';
    constructor() { }

    createCheckBoxes() {
        var CheckBoxElements = document.querySelectorAll(".ms-CheckBox");
        for (var i = 0; i < CheckBoxElements.length; i++) {
            var checkBox = new CheckBox(<HTMLElement>CheckBoxElements[i]);
            checkBox.unCheck();
            console.log("toggles...");
        }
        

    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.createCheckBoxes();
     }
}