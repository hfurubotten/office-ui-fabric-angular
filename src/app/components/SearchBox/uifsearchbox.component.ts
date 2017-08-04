import { Component, AfterViewInit, Input, EventEmitter, Output } from '@angular/core';
import 'office-ui-fabric-js/src/components/SearchBox/SearchBox';

@Component({
    selector: 'uif-searchbox',
    templateUrl: './uifsearchbox.component.html'
})
export class UifSearchBoxComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifPlaceholder: string = 'Search';
    @Input() uifCommandBar: boolean = false;
    @Input() uifCollapsed: boolean = false;
    @Output() searchInputChanged: EventEmitter<string> = new EventEmitter<string>(); 
    private searchbox: fabric.SearchBox;
    public searchString: string = '';

    private initialize(): void {
        if (this.uifId) {
            let container = document.getElementById(this.uifId);
            this.searchbox = new fabric.SearchBox(container);
        }
    }

    public onValueChanged(): void {
        this.searchInputChanged.emit(this.searchString);
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}