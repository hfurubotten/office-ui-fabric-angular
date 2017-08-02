import { Component, AfterViewInit, Input } from '@angular/core';
import 'office-ui-fabric-js/src/components/Table/Table';

@Component({
    moduleId: module.id,
    selector: 'uif-table',
    templateUrl: './uiftable.component.html'
})

export class UifTableComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifSelectable: boolean = false;
    @Input() uifFixed: boolean = false;
    private table: fabric.Table;
    private tableContainer: HTMLElement;

    private initialize(): void {
            this.tableContainer = document.getElementById(this.uifId);
            this.table = new fabric.Table(this.tableContainer);
            console.log('table is selectable: ' + this.uifSelectable);
            console.log('table is set to Fixed: ' + this.uifFixed);
    }

    public ngAfterViewInit() {
        this.initialize();
    }
}