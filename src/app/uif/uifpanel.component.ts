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
    @Input() uifOpen: boolean = false;
    @Input() uifPositionLeft: boolean = false;
    @Input() uifPanelSize: string = '';
    @Output() uifCloseButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    panelElement: Element;
    panel: any;
    constructor() { }

    private createPanel():void {
        if(this.uifId != null) {
            var panelContainer = document.getElementById(this.uifId);
            this.panelElement = panelContainer.querySelector(".ms-Panel");
            this.togglePanel();
        }
    }
    
    private togglePanel():void {
        if(this.uifOpen) {
            this.initializePanel();
        }
    }

    private initializePanel():void {
        this.panel = new fabric['Panel'](this.panelElement);
    }

    closeButtonClick():void {
        this.uifCloseButtonClicked.emit();
    }

    ngOnChanges(changes: any) {
        this.togglePanel();
     }

    ngAfterViewInit() {
        this.createPanel();        
    }

    ngOnInit() { }

}