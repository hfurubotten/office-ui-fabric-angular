import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
declare var fabric: any;

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
            new fabric['Dropdown'](DropdownHTMLElements[i]);
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