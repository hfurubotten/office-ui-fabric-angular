import { Component, AfterViewInit, Input } from '@angular/core';
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


    private handleInitialSelectedItemsIfNotMultiselect(): void {
        if (!this.uifMultiSelect) {
            let numberOfSelectedItems = this.getNumberofSelectedItems();
            if (numberOfSelectedItems > 1) {
                this.clearAllSelected();
            }
        }
    }

    //TODO: might be buggy - should perhaps get listitems from DOM instead
    private getNumberofSelectedItems(): number {
        let numberOfSelectedItems = 0;
        this.listItems.forEach((listItem) => {
            if (listItem.isSelected) {
                numberOfSelectedItems++;
            }
        });

        return numberOfSelectedItems;
    }

    private getListItemElements(): NodeListOf<Element> {
        let listItems = this.listContainer.querySelectorAll('.ms-ListItem');
        return listItems;
    }

    private setListItems(): void {
        let listItems = this.getListItemElements();
        for (let i = 0; i < listItems.length; i++) {
            let listItem = this.getListItemData(listItems[i]);
            this.listItems.set(listItem.id, listItem);
        }
    }

    private getListItemData(listItemElement: Element): ListItemData {
        let listItemData = new ListItemData();
        listItemData.id = listItemElement.id;
        listItemData.isSelected = listItemElement.classList.contains('is-selected');
        listItemData.isSelectable = listItemElement.classList.contains('is-selectable');

        return listItemData;
    }

    private clearAllSelected(): void {
        let listItems = this.getListItemElements();
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('is-selected');
        }
    }

    private setSelectedItem(): void {
        //TODO: set one item to selected - needed for clearing + setting if multiselect is false
        let listItems = this.getListItemElements();
        listItems[0].classList.add('is-selected');
    }

    //on init: if !multiselect: then unselect everything? or everything excep the last/first selected item?

    //also needs to keep track of which elements are selected and should emit/output on change
    //functionality needs to be similar to checkbox

    public clickEvent(eventInput: ListItemData): void {
        if (eventInput != null) {
            console.log(eventInput);
            // this.checkboxValues.set(eventInput.value, eventInput);
            // let checkboxdata = Array.from(this.checkboxValues.values());
            // this.uifValuesChanged.emit(checkboxdata);
        }
    }


    public ngAfterViewInit() {
        this.initialize();

        // this.setListItems();
        // this.clearAllSelected();

    }

}