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
    }

    private initializeSubscription(): void {
        this.subscription = this.emitterService.emitterAnnounced$.subscribe(
            next => this.clickEvent(next),
            e => console.log(`error: ${e}`),
            () => console.log("complete")
        );
    }

    public clickEvent(eventInput: ListItemData): void {
        if (eventInput != null) {
            console.log(eventInput);
            // this.checkboxValues.set(eventInput.value, eventInput);
            // let checkboxdata = Array.from(this.checkboxValues.values());
            // this.uifValuesChanged.emit(checkboxdata);
        }
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

    //this component needs to know if any of the listitems are selected - does it?
    //when a select click event occurs - 


    //also needs to keep track of which elements are selected and should emit/output on change
    //functionality needs to be similar to checkbox

    public ngAfterViewInit() {
        this.initialize();

        // this.setListItems();
        // this.clearAllSelected();

    }

}