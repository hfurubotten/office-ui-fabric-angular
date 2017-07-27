import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/Dropdown/Dropdown';

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
    @Input() uifId: string = '';
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();
    private dropdown: fabric.Dropdown;
    uifSelected: {value: string, text: string} = {'value':'', 'text':''};

    constructor() { }

    private createDropdown():void {
        if(this.uifId != null) {
            var dropdownElement = document.getElementById(this.uifId);
            this.dropdown = new fabric.Dropdown(dropdownElement);
        }
    }

    onValueChanged(target: HTMLSelectElement):void {
        this.uifSelectedValue = target.value;
        this.uifSelectedValueChange.emit(this.uifSelectedValue);
    }

    ngOnInit() {
        this.uifSelected = this.uifOptions.filter(o => o.value == this.uifSelectedValue)[0];
    }

     ngAfterViewInit() {
        this.createDropdown();
     }

}