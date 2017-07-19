import { Component, Input, Output, EventEmitter } from '@angular/core';
//Didn't import Panel module because of fabric namespace dependencies

@Component({
    selector: 'uif-panel',
    templateUrl: './uifpanel.component.html'
})
export class UifPanelComponent {
    @Input() uifId: string = '';
    @Input() uifPanelHeader: string = '';
    @Input() uifOpen: boolean = false;
    @Input() uifPositionLeft: boolean = false;
    @Input() uifPanelSize: string = '';
    @Output() uifCloseButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    private panelSizeBaseClass: string = 'ms-Panel--';
    private panelElement: Element;
    private panel: fabric.Panel;

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

    private getPanelSize():string {
        return this.panelSizeBaseClass + this.uifPanelSize;
    }

    private closeButtonClick():void {
        this.uifOpen = false;
        this.uifCloseButtonClicked.emit();
    }

    ngOnChanges(changes: any) {
        this.togglePanel();
     }

    ngAfterViewInit() {
        this.createPanel();        
    }

}