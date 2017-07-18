import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Didn't import Panel module because of fabric namespace dependencies
declare let fabric: any;

@Component({
    selector: 'uif-panel',
    templateUrl: './uifpanel.component.html'
})
export class UifPanelComponent implements OnInit {
    @Input() uifId: string = '';
    @Input() uifPanelHeader: string = '';
    @Output() uifCloseButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    panel: any;
    constructor() { }

    private createPanel():void {
        if(this.uifId != null) {
            var panelContainer = document.getElementById(this.uifId);
            var panelElement = panelContainer.querySelector(".ms-Panel");
            this.panel = new fabric['Panel'](panelElement);
        }
    }

    closeButtonClick():void {
        this.uifCloseButtonClicked.emit();
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.createPanel();        
    }
}