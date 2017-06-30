import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Dropdown } from 'office-ui-fabric-js/src/components/Dropdown/Dropdown';

@Component({
    moduleId: module.id,
    selector: 'uif-dropdown',
    templateUrl: './uifdropdown.component.html',
})
export class UifDropdownComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifDisabled: boolean = false;
    @Input() uifOptions: {value: string, text: string}[];

    constructor() {

     }

    createDropdown() {
        var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
        for (var i = 0; i < DropdownHTMLElements.length; ++i) {
            new Dropdown(<HTMLElement>DropdownHTMLElements[i]);
        }
    }

    ngOnInit() {
        this.createDropdown();
     }
}