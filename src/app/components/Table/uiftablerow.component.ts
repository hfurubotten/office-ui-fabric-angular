import { Component, ElementRef, AfterViewInit, Input, OnChanges } from '@angular/core';
import { EmitterService } from '../EmitterService/emitter.service';
import { TableRowData } from '../DataObjects/TableRowData';

@Component({
    moduleId: module.id,
    selector: 'tr[uif-table-row]',
    templateUrl: './uiftablerow.component.html'
})

export class UifTableRowComponent implements AfterViewInit {
    @Input() uifSelected: boolean = false;
    private emitterService: EmitterService;
    private tablerow: HTMLTableRowElement;
    private isHeaderRow: boolean = false;
    private tableIsSelectable: boolean = false;
    private isSelected: boolean = false;

    public constructor(private elementReference: ElementRef, private emitter: EmitterService) {
        this.emitterService = emitter;
    }

    private initialize(): void {
        this.tablerow = <HTMLTableRowElement>this.elementReference.nativeElement;
        this.addRowClickedEventHandler();
        this.setTableIsSelectable();
        this.setIsHeaderRow();
        this.isSelected = this.uifSelected;
        this.toggleSelected(this.isSelected);
    }

    private addRowClickedEventHandler(): void {
        this.tablerow.addEventListener('click', this.rowClicked.bind(this));
    }

    private setIsHeaderRow(): void {
        let parentRow = this.tablerow.parentElement;
        if (parentRow.nodeName === 'THEAD') {
            this.isHeaderRow = true;
        }
    }

    private setTableIsSelectable(): void {
        let table = this.tablerow.parentElement.parentElement;
        this.tableIsSelectable = table.classList.contains('ms-Table--selectable');
    }

    private deselectTableHeader(): void {
        if (this.isHeaderRow) {
            this.toggleSelected(true); //adding it will make office fabric remove it
        }
    }

    private toggleSelected(selected: boolean): void {
        if (this.tableIsSelectable) {
            this.toggleSelectedCssClass(selected);
        }
    }

    private toggleSelectedCssClass(selected: boolean): void {
        if (selected) {
            this.tablerow.classList.add('is-selected');
        } else {
            this.tablerow.classList.remove('is-selected');
        }
    }

    private emitThatRowHasBeenClicked(): void {
        this.emitterService.emit(this.tablerow.rowIndex);
    }

    private rowClicked(): void {
        this.deselectTableHeader();
        this.emitThatRowHasBeenClicked();
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}