import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() uifPersistent: boolean = false;
    @Output() uifCloseButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifOverlayClicked: EventEmitter<any> = new EventEmitter<any>();
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
        this.handlePersistence();
    }

    private handlePersistence() {
        if(this.uifPersistent) {
            this.panel.panelHost.overlay.remove();
            console.log('this is persistent.');
        } else {
            console.log('overlay clickable');
            this.panel.panelHost.overlay.overlayElement.onclick = () => this.overlayClick();
            this.panel.panelHost.overlay.overlayElement.classList.add('ms-Overlay--dark');
        }
    }

    getPanelSize():string {
        return this.panelSizeBaseClass + this.uifPanelSize;
    }

    overlayClick() {
        this.uifOpen = false;
        this.uifOverlayClicked.emit();
    }

    closeButtonClick():void {
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