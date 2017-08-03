import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tr[uif-table-row]',
    templateUrl: './uiftablerow.component.html'
})

export class UifTableRowComponent implements AfterViewInit {
    private tablerow: HTMLElement;

    public constructor(private elementReference: ElementRef) { }

    private initialize(): void {
        this.tablerow = <HTMLElement>this.elementReference.nativeElement;
        this.addRowClickedEventHandler();
    }

    private addRowClickedEventHandler(): void {
        this.tablerow.addEventListener('click', this.rowClicked.bind(this));
    }

    private deselectTableHeader() {
        let parentRow = this.tablerow.parentElement;
        if (parentRow.nodeName === 'THEAD') {
            this.tablerow.classList.add('is-selected'); //adding it will make office fabric remove it
        }
    }

    private rowClicked(): void {
        console.log("Row was clicked!");
        this.deselectTableHeader();
    }

    public ngAfterViewInit() {
        this.initialize();
    }
}