import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import 'office-ui-fabric-js/src/components/ListItem/ListItem';

@Component({
    moduleId: module.id,
    selector: 'uif-listitem',
    templateUrl: './uiflistitem.component.html'
})
export class UifListItemComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifPrimaryText: string = '';
    @Input() uifSecondaryText: string = '';
    @Input() uifTertiaryText: string = '';
    @Input() uifMetaText: string = '';
    @Input() uifSelectable: boolean = false;
    @Input() uifSelected: boolean = false;
    @Input() uifAction1Enabled: boolean = false;
    @Input() uifAction2Enabled: boolean = false;
    @Input() uifAction3Enabled: boolean = false;
    @Input() uifAction1Icon: string = 'Waffle';
    @Input() uifAction2Icon: string = 'Waffle';
    @Input() uifAction3Icon: string = 'Waffle';
    @Output() uifAction1Clicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifAction2Clicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifAction3Clicked: EventEmitter<any> = new EventEmitter<any>();
    private listItem: fabric.ListItem;
    private listItemContainer: HTMLElement;
    private initialized: boolean = false;

    constructor() { }

    private initialize(): void {
        if (this.uifId !== null && this.uifId !== undefined) {
            this.listItemContainer = document.getElementById(this.uifId);
            this.listItem = new fabric.ListItem(this.listItemContainer);
            this.initialized = true;
        }
    }

    public actionButton1Click(): void {
        this.uifAction1Clicked.emit();
    }

    public actionButton2Click(): void {
        this.uifAction2Clicked.emit();
    }

    public actionButton3Click(): void {
        this.uifAction3Clicked.emit();
    }

    public ngAfterViewInit() {
        this.initialize();
    }
}