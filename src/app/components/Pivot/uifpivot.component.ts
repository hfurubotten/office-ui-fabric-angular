import { Component, AfterViewInit, Input } from '@angular/core';
import 'office-ui-fabric-js/src/components/Pivot/Pivot';

@Component({
    moduleId: module.id,
    selector: 'uif-pivot',
    templateUrl: './uifpivot.component.html'
})
export class UifPivotComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifTabs: boolean = false;
    @Input() uifLarge: boolean = false;
    private pivotContainer: HTMLElement;
    private pivot: fabric.Pivot;

    private initialize(): void {
        if (this.uifId) {
            this.pivotContainer = document.getElementById(this.uifId);
            this.pivot = new fabric.Pivot(this.pivotContainer);
        }
    }

    public ngAfterViewInit() {
        this.initialize();
    }
}