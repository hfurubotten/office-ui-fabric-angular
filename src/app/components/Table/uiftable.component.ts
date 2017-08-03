import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { EmitterService } from '../EmitterService/emitter.service';
import { TableRowData } from '../DataObjects/TableRowData';
import { Subscription } from 'rxjs/Subscription';
import 'office-ui-fabric-js/src/components/Table/Table';

@Component({
    moduleId: module.id,
    selector: 'uif-table',
    templateUrl: './uiftable.component.html',
    providers: [EmitterService]
})

export class UifTableComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifSelectable: boolean = false;
    @Input() uifFixed: boolean = false;
    @Output() uifRowClicked: EventEmitter<TableRowData[]> = new EventEmitter<TableRowData[]>();
    private table: fabric.Table;
    private subscription: Subscription;
    private rowSelectedStatus: Map<number, boolean> = new Map<number, boolean>();

    public constructor(private emitterService: EmitterService) { }

    private initialize(): void {
        let tableContainer = document.getElementById(this.uifId);
        this.table = new fabric.Table(tableContainer);
        this.initializeSubscription();
        this.getInitialRowSelectedStatus();
    }

    private initializeSubscription(): void {
        this.subscription = this.emitterService.emitterAnnounced$.subscribe(
            next => this.rowClick(next),
            e => console.log(`error: ${e}`),
            () => console.log("complete")
        );
    }

    private getInitialRowSelectedStatus(): void {
        let tableRows = this.table.container.getElementsByTagName('tr');
        for (let i = 0; i < tableRows.length; i++) {
            let rowIndex = tableRows[i].rowIndex;
            let isSelected = tableRows[i].classList.contains('is-selected');
            this.rowSelectedStatus.set(rowIndex, isSelected);
        }
    }

    private rowClick(rowIndex: number): void {
        if (rowIndex || rowIndex === 0) {
            this.toggleRowSelected(rowIndex);
            this.emitTableData();
        }
    }

    private toggleRowSelected(rowIndex: number): void {
        let previousSelectedValue = this.rowSelectedStatus.get(rowIndex);
        let newSelectedValue = previousSelectedValue === true ? false : true;
        this.rowSelectedStatus.set(rowIndex, newSelectedValue);
    }

    private emitTableData(): void {
        let tableData = this.getTableData();
        this.uifRowClicked.emit(tableData);
    }

    private getTableData(): TableRowData[] {
        let tableData: TableRowData[] = [];
        let tableBody = <HTMLTableSectionElement>this.table.container.getElementsByTagName('tbody')[0];
        let tableRows = tableBody.getElementsByTagName('tr');
        for (let i = 0; i < tableRows.length; i++) {
            let rowData = this.getRowData(tableRows[i]);
            tableData.push(rowData);
        }
        return tableData;
    }

    private getRowData(tablerow: HTMLTableRowElement): TableRowData {
        let rowData = new TableRowData();
        rowData.selected = this.rowSelectedStatus.get(tablerow.rowIndex);
        rowData.data = this.getRowCellValues(tablerow);

        return rowData;
    }

    private getRowCellValues(tablerow: HTMLTableRowElement): string[] {
        let cellValues: string[] = [];
        let rowCells = tablerow.childNodes;
        for (let i = 0; i < rowCells.length; i++) {
            if (rowCells[i].firstChild) {
                cellValues.push(rowCells[i].textContent);
            }
        }
        return cellValues;
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}