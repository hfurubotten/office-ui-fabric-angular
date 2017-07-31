import { Component, ContentChildren, AfterViewInit, Input, Output, QueryList, EventEmitter } from '@angular/core';
import { UifListItemComponent } from '../ListItem/uiflistitem.component';
import { EmitterService } from '../EmitterService/emitter.service';
import { ListItemData } from '../DataObjects/ListItemData';
import { Subscription } from 'rxjs/Subscription';
import 'office-ui-fabric-js/src/components/List/List';

@Component({
    moduleId: module.id,
    selector: 'uif-list',
    templateUrl: './uiflist.component.html',
    providers: [EmitterService]
})

export class UifListComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifMultiSelect: boolean = false;
    @Output() uifClicked: EventEmitter<ListItemData[]> = new EventEmitter<ListItemData[]>();
    @ContentChildren(UifListItemComponent) childItems: QueryList<UifListItemComponent>
    private list: fabric.List;
    private listContainer: HTMLElement;
    private listItems: Map<string, ListItemData> = new Map<string, ListItemData>();
    private subscription: Subscription;

    constructor(private emitterService: EmitterService) { }

    private initialize(): void {
        this.initializeComponent();
        this.initializeSubscription();
    }

    private initializeComponent(): void {
        this.listContainer = document.getElementById(this.uifId);
        this.list = new fabric.List(this.listContainer);
        this.setListItems();
        this.handleInitialSelectedItemsIfNotMultiselect();
    }

    private initializeSubscription(): void {
        this.subscription = this.emitterService.emitterAnnounced$.subscribe(
            next => this.clickEvent(next),
            e => console.log(`error: ${e}`),
            () => console.log("complete")
        );
    }

    private setListItems(): void {
        let listItems = this.getListItemElements();
        for (let i = 0; i < listItems.length; i++) {
            let listItem = this.getListItemData(listItems[i]);
            this.listItems.set(listItem.id, listItem);
        }
    }

    private getListItemElements(): NodeListOf<Element> {
        let listItems = this.listContainer.querySelectorAll('.ms-ListItem');
        return listItems;
    }

    private getListItemData(listItemElement: Element): ListItemData {
        let listItemData = new ListItemData();
        listItemData.id = listItemElement.id;
        listItemData.isSelected = listItemElement.classList.contains('is-selected');
        listItemData.isSelectable = listItemElement.classList.contains('is-selectable');

        return listItemData;
    }

    private handleInitialSelectedItemsIfNotMultiselect(): void {
        if (!this.uifMultiSelect) {
            let numberOfSelectedItems = this.getNumberofSelectedItems();
            if (numberOfSelectedItems > 1) {
                this.clearAllSelected(null);
                this.clearAllSelectedChildComponents(null);
            }
        }
    }

    private getNumberofSelectedItems(): number {
        let numberOfSelectedItems = 0;
        this.listItems.forEach((listItem) => {
            if (listItem.isSelected) {
                numberOfSelectedItems++;
            }
        });

        return numberOfSelectedItems;
    }

    private updateListItemCheckedStatus(id: string, selected: boolean) {
        let listItem = this.listItems.get(id);
        listItem.isSelected = selected;
        this.listItems.set(listItem.id, listItem);
    }

    private clearAllSelected(currentlySelectedId: string): void {
        let listItems = this.getListItemElements();
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].id !== currentlySelectedId) {
                listItems[i].classList.remove('is-selected');
                this.updateListItemCheckedStatus(listItems[i].id, false);
            }
        }
    }

    private clearAllSelectedChildComponents(currentlySelectedId: string) {
        setTimeout(() => {
            this.childItems.forEach(listItem => {
                if (listItem.uifId !== currentlySelectedId) {
                    listItem.isChecked = false;
                }
            });
        });
    }

    private emitListItemData(): void {
        let listItemData = Array.from(this.listItems.values());
        this.uifClicked.emit(listItemData);
    }

    public clickEvent(eventInput: ListItemData): void {
        if (eventInput) {
            if (!this.uifMultiSelect) {
                this.clearAllSelected(eventInput.id)
                this.clearAllSelectedChildComponents(eventInput.id)
            }
            this.listItems.set(eventInput.id, eventInput);
            this.emitListItemData();
        }
    }

    public ngAfterViewInit() {
        this.initialize();
    }

}