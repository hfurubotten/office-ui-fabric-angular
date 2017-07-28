import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/Dropdown/Dropdown';

@Component({
    moduleId: module.id,
    selector: 'uif-dropdown',
    templateUrl: './uifdropdown.component.html',
})

export class UifDropdownComponent implements OnInit, AfterViewInit {
    @Input() uifLabel: string = '';
    @Input() uifDisabled: boolean = false;
    @Input() uifOptions: { value: string, text: string }[];
    @Input() uifSelectedValue: string = '';
    @Input() uifPlaceholder: string = '';
    @Input() uifId: string = '';
    @Output() uifSelectedValueChange: EventEmitter<string> = new EventEmitter<string>();
    private dropdown: fabric.Dropdown;
    public uifSelected: { value: string, text: string } = { 'value': '', 'text': '' };

    private initialize(): void {
        if (this.uifId !== null && this.uifId !== undefined) {
            var dropdownElement = document.getElementById(this.uifId);
            this.dropdown = new fabric.Dropdown(dropdownElement);
        }
    }

    public onValueChanged(target: HTMLSelectElement): void {
        this.uifSelectedValue = target.value;
        this.uifSelectedValueChange.emit(this.uifSelectedValue);
    }

    public ngOnInit() {
        this.uifSelected = this.uifOptions.filter(o => o.value == this.uifSelectedValue)[0];
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}