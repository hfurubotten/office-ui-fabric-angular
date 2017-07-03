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
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();
    uifSelected: {value: string, text: string};

    constructor() {

     }

    createDropdown() {
        var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
        for (var i = 0; i < DropdownHTMLElements.length; ++i) {
            new Dropdown(<HTMLElement>DropdownHTMLElements[i]);
        }
    }

    setSelectedItem() {
        // var methodDropdown = document.getElementById("fabric_name_builder_method");
        // var g_fabricDropdownMethod = new Dropdown(methodDropdown);
        // $("#native_name_builder_method").change(this.onValueChanged);
        // $(g_fabricDropdownMethod._dropdownItems[5].newItem).click();
    }

    ngOnInit() {
        this.uifSelected = this.uifOptions.filter(o => o.value === this.uifSelectedValue)[0];
        console.log(this.uifOptions.filter(o => o.value == this.uifSelectedValue)[0]);
    }

    onValueChanged() {
        console.log("selected changed: " + this.uifSelected.text);
        this.uifSelectedValue = this.uifSelected.value;
        this.uifSelectedValueChange.emit(this.uifSelectedValue);

    }

     ngAfterViewInit() {
        this.createDropdown();
        console.log("Created dropdown...");
        this.uifSelected = this.uifOptions.filter(o => o.value === this.uifSelectedValue)[0];
        console.log(this.uifOptions.filter(o => o.value == this.uifSelectedValue)[0]);
     }

}