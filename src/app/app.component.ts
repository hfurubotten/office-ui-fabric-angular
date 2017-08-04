import { Component, OnInit, ComponentFactory } from '@angular/core';
import { CheckboxData } from './Components/DataObjects/CheckboxData'
import { ListItemData } from './Components/DataObjects/ListItemData'
import { TableRowData } from './Components/DataObjects/TableRowData'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Office UI Fabric test component';
  textFieldValue: string = 'Testing text field';
  anotherTextFieldValue: string = 'Testing another value';
  displayDarkOverlay: boolean = false;
  displayLightOverlay: boolean = false;
  displayPersistentOverlay: boolean = false;
  displayPanel: boolean = false;
  displayPersistentPanel: boolean = false;
  singleCheckboxChecked: boolean = false;
  checkboxValues: string;
  listItemsStatus: string;
  listItemsStatusSimple: string;
  spinSpinners: boolean = true;
  hideSpinners: boolean = false;
  showListAsGrid: boolean = false;
  tableValues: string;
  pivotLarge: boolean = false;
  pivotTabbed: boolean = false;
  progressPercent: number = 50;
  searchString: string = '';

  searchStringChanged(searchValue: string) {
    this.searchString = searchValue;
  }


  dragTest(value: number) {
    this.progressPercent = value;
  }

  pivotLinkClicked($event) {
    console.log('The following pivot was clicked: ' + $event);
  }

  setPivotLarge(): void {
    this.pivotLarge = this.pivotLarge === true ? false : true;
  }

  setPivotTabbed(): void {
    this.pivotTabbed = this.pivotTabbed === true ? false : true;
  }

  rowClicked(values: TableRowData[]): void {
    this.tableValues = '';
    for (let i = 0; i < values.length; i++) {
      this.tableValues += '{selected: ' + values[i].selected + '} {rowvalues: ' + values[i].data + '}\n';
    }
  }

  toggleGridList(): void {
    this.showListAsGrid = this.showListAsGrid === true ? false : true;
  }

  singleCheckboxClicked(value: boolean) {
    this.singleCheckboxChecked = value;
  }

  choiceFieldGroupValuesChanged(values: CheckboxData[]) {
    this.checkboxValues = '';
    for (let i = 0; i < values.length; i++) {
      this.checkboxValues += '{value: ' + values[i].value + '} {checked: ' + values[i].checked + '} {disabled: ' + values[i].disabled + '}\n';
    }
  }

  listItemValuesChanged(values: ListItemData[]) {
    this.listItemsStatus = '';
    for (let i = 0; i < values.length; i++) {
      this.listItemsStatus += '{id: ' + values[i].id + '} {isSelected: ' + values[i].isSelected + '} {isSelectable: ' + values[i].isSelectable + '}\n';
    }
  }

  listItemValuesChangedSimple(values: ListItemData[]) {
    this.listItemsStatusSimple = '';
    for (let i = 0; i < values.length; i++) {
      this.listItemsStatusSimple += '{id: ' + values[i].id + '} {isSelected: ' + values[i].isSelected + '} {isSelectable: ' + values[i].isSelectable + '}\n';
    }
  }

  listItemClicked(): void {
    console.log('List item clicked');
  }

  stopSpinners() {
    this.spinSpinners = this.spinSpinners === true ? false : true;
  }

  showSpinners() {
    this.hideSpinners = this.hideSpinners === true ? false : true;
  }

  listItemButton1Clicked() {
    alert('List item action button #1 clicked!');
  }

  listItemButton2Clicked() {
    alert('List item action button #2 clicked!');
  }

  listItemButton3Clicked() {
    alert('List item action button #3 clicked!');
  }

  button1Click() {
    alert("button1 clicked!");
  }

  button2Click() {
    alert("button2 clicked!");
  }

  messageBannerActionButtonClick() {
    alert("message banner button clicked!");
  }

  messageBannerActionButton2Click() {
    alert("message banner button #2 clicked!");
  }

  messageBannerCloseButtonClick() {
    alert("Banner close button clicked!");
  }

  panelButtonClick() {
    this.displayPanel = this.displayPanel == false ? true : false;
  }

  persistentPanelButtonClick() {
    this.displayPersistentPanel = true;
  }

  persistentPanelCloseButtonClick() {
    this.displayPersistentPanel = false;
  }

  panelCloseButtonClick() {
    this.displayPanel = false;
    console.log("Panel close button clicked!");
  }

  panelOverlayClick() {
    this.displayPanel = false;
    console.log("Panel overlay clicked!");
  }

  darkOverlayButtonClick() {
    this.displayDarkOverlay = true;
  }

  lightOverlayButtonClick() {
    this.displayLightOverlay = true;
  }

  persistentOverlayButtonClick() {
    this.displayPersistentOverlay = true;
  }

  overlayClicked() {
    this.displayDarkOverlay = false;
  }

  overlayLightClicked() {
    alert("light overlay clicked...");
  }

  overlayPersistentClicked() {
    alert("persistent overlay clicked...");
  }



  dropdownValues: { value: string, text: string }[] = [
    { 'value': 'mø', 'text': 'moo' },
    { 'value': 'mjau', 'text': 'meow' },
    { 'value': 'voff', 'text': 'woof' }
  ];
  dropdownSelected = this.dropdownValues[1].value;
  dropdownPlaceholder = 'Please select a sound...';
  dropdownPlaceHolderSelected = '-1';


  radioValuesWithDisabled: { value: string, text: string, disabled: boolean }[] = [
    { 'value': 'banan', 'text': 'Banana', 'disabled': false },
    { 'value': 'eple', 'text': 'Apple', 'disabled': false },
    { 'value': 'druer', 'text': 'Grapes', 'disabled': true },
    { 'value': 'ananas', 'text': 'Pineapple', 'disabled': false }
  ];
  radioValues: { value: string, text: string }[] = [
    { 'value': 'grønn', 'text': 'Green' },
    { 'value': 'rød', 'text': 'Red' },
    { 'value': 'blå', 'text': 'Blue' },
    { 'value': 'gul', 'text': 'Yellow' }
  ];

  radioLabel: string = 'Select color:'
  radioSelected = this.radioValues[1].value;
  radioSelectedFruit = '';

  messageBarText = 'Some random, medium length text for the message bar here. Feel free to add <i>html</i> formatting as well. Some random, medium length text for the message bar here. Feel free to add <i>html</i> formatting as well';

  constructor() { }

  ngOnInit() {

  }

}



