import { Component, AfterViewInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ListItemData } from '../DataObjects/ListItemData';
import { EmitterService } from '../EmitterService/emitter.service';
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
    @Input() uifFocused: boolean = false;
    @Input() uifAction1Enabled: boolean = false;
    @Input() uifAction2Enabled: boolean = false;
    @Input() uifAction3Enabled: boolean = false;
    @Input() uifAction1Icon: string = 'Waffle';
    @Input() uifAction2Icon: string = 'Waffle';
    @Input() uifAction3Icon: string = 'Waffle';
    @Output() uifAction1Clicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifAction2Clicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifAction3Clicked: EventEmitter<any> = new EventEmitter<any>();
    private emitterService: EmitterService;
    private listItem: fabric.ListItem;
    private listItemContainer: HTMLElement;
    public isChecked: boolean = false;

    constructor(private elementReference: ElementRef, private emitter: EmitterService) {
        this.emitterService = emitter;
    }

    private initialize(): void {
        this.listItemContainer = document.getElementById(this.uifId);
        this.setInitialCheckedValue();
        if (!this.parentIsList()) {
            this.initializeComponent();
        }
    }

    private initializeComponent(): void {
        this.listItem = new fabric.ListItem(this.listItemContainer);
    }

    private setInitialCheckedValue(): void {
        if (this.uifSelected) {
            this.isChecked = true;
        }
    }

    private parentIsList(): boolean {
        let parentElement = <HTMLElement>this.elementReference.nativeElement.parentElement;
        let isList = parentElement.classList.contains('ms-List');
        

        return isList;
    }

    private getListItemData(): ListItemData {
        let listItemdata = new ListItemData();
        listItemdata.id = this.uifId;
        listItemdata.isSelected = this.isChecked;
        listItemdata.isSelectable = this.uifSelectable;

        return listItemdata;
    }

    private toggleChecked(): void {
        this.isChecked = this.isChecked === true ? false : true;
    }

    private emitListItemDataToEmitterService(): void {
        let listItemData = this.getListItemData();
        this.emitterService.emit(listItemData);
    }

    public checkboxClick(): void {
        this.toggleChecked();
        this.emitListItemDataToEmitterService();
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