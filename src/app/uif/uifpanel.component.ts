import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
    @Input() uifPersistent: boolean = false;
    @Input() uifDarkOverlay: boolean = false;
    @Output() uifCloseButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifOverlayClicked: EventEmitter<any> = new EventEmitter<any>();
    panelId: string;
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

    //todo: needs refactoring:
    private handlePersistence() {
        if(this.uifPersistent) {
            this.panel.panelHost.overlay.remove();
        } else {
            this.panel.panelHost.overlay.overlayElement.onclick = () => this.overlayClick();

            if(this.uifDarkOverlay) {
                this.panel.panelHost.overlay.overlayElement.classList.add('ms-Overlay--dark');
            }
            
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
        this.uifCloseButtonClicked.emit();
    }

    ngOnChanges(changes: any) {
        this.togglePanel();
     }

    ngAfterViewInit() {
        this.createPanel();        
    }

    ngOnInit() {
        this.panelId = this.uifId + 'Overlay';
    }
}