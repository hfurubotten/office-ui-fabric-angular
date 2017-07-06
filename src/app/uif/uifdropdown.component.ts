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
    @Input() uifSelectedValue: string = '';
    @Input() uifPlaceholder: string = '';
    @Input() uifId: string = '';
    @Output() uifSelectedValueChange:EventEmitter<string> = new EventEmitter<string>();
    uifSelected: {value: string, text: string} = {'value':'', 'text':''};

    constructor() { }

    private createDropdown():void {
        let DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
        for (var i = 0; i < DropdownHTMLElements.length; ++i) {
            if(DropdownHTMLElements[i].id == this.uifId) {
                new Dropdown(<HTMLElement>DropdownHTMLElements[i]);
            }
        }
    }

    private onValueChanged(target: HTMLSelectElement):void {
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