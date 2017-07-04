import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Dropdown } from 'office-ui-fabric-js/src/components/Dropdown/Dropdown';
// import * as $ from "jquery";

@Component({
    moduleId: module.id,
    selector: 'uif-dropdown',
    templateUrl: './uifdropdown.component.html',
})

export class UifDropdownComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifDisabled: boolean = false;
    @Input() uifOptions: {value: string, text: string}[];
    @Input() uifSelectedValue: string = '';
    @Input() uifPlaceholder: string = '';
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();
    uifSelected: {value: string, text: string} = {'value':'', 'text':''};

    constructor() { }

    createDropdown() {
        var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
        for (var i = 0; i < DropdownHTMLElements.length; ++i) {
            new Dropdown(<HTMLElement>DropdownHTMLElements[i]);
        }
    }

    onValueChanged() {
        this.uifSelectedValue = this.uifSelected.value;
        this.uifSelectedValueChange.emit(this.uifSelectedValue);
        console.log("selected changed: " + this.uifSelected.text);
    }

    ngOnInit() {
        this.uifSelected = this.uifOptions.filter(o => o.value == this.uifSelectedValue)[0];
        console.log(this.uifOptions.filter(o => o.value == this.uifSelectedValue)[0]);
    }

     ngAfterViewInit() {
        this.createDropdown();
     }

}