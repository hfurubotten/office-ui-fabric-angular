import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tr[uif-table-row]',
    templateUrl: './uiftablerow.component.html'
})

export class UifTableRowComponent implements AfterViewInit {
    private tablerow: HTMLElement;

    constructor(private elementReference: ElementRef) { }

    addRowClickedEventHandler(): void {
        this.tablerow = <HTMLElement>this.elementReference.nativeElement;
        this.tablerow.addEventListener('click', this.rowClicked.bind(this));
    }

    rowClicked(): void {
        console.log("Row was clicked!");
    }

    ngAfterViewInit() {
        this.addRowClickedEventHandler();
    }
}