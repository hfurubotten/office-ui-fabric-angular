import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'td[uif-table-row-select]',
    templateUrl: './uiftablerowselect.component.html'
})
export class UifTableRowSelectComponent implements AfterViewInit {
    private checkbox: HTMLElement;

    public constructor(private elementReference: ElementRef) { }

    private initializeCheckbox() {
        this.checkbox = <HTMLElement>this.elementReference.nativeElement;
        this.checkbox.classList.add('ms-Table-rowCheck');
    }

    public ngAfterViewInit() {
        this.initializeCheckbox();
    }
}