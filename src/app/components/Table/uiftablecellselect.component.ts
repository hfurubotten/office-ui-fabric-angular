import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'td[uif-table-cell-select]',
    templateUrl: './uiftablecellselect.component.html'
})
export class UifTableCellSelectComponent implements AfterViewInit {
    private checkbox: HTMLElement;

    public constructor(private elementReference: ElementRef) { }

    private initializeCheckbox(): void {
        this.checkbox = <HTMLElement>this.elementReference.nativeElement;
        this.checkbox.classList.add('ms-Table-rowCheck');
    }

    public ngAfterViewInit() {
        this.initializeCheckbox();
    }
}