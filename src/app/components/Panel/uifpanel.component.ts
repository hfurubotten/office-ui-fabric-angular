import { Component, Input, OnInit, AfterViewInit, OnChanges, Output, EventEmitter } from '@angular/core';
import 'office-ui-fabric-js/src/components/Panel/Panel';

@Component({
    moduleId: module.id,
    selector: 'uif-panel',
    templateUrl: './uifpanel.component.html'
})
export class UifPanelComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() uifId: string = '';
    @Input() uifPanelHeader: string = '';
    @Input() uifOpen: boolean = false;
    @Input() uifPositionLeft: boolean = false;
    @Input() uifPanelSize: string = '';
    @Input() uifPersistent: boolean = false;
    @Input() uifDarkOverlay: boolean = false;
    @Output() uifCloseButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifOverlayClicked: EventEmitter<any> = new EventEmitter<any>();
    private panelElement: Element;
    private panel: fabric.Panel;
    public panelSizeCss: string = '';
    public panelId: string;

    private initialize(): void {
        if (this.uifId) {
            var panelContainer = document.getElementById(this.uifId);
            this.panelElement = panelContainer.querySelector(".ms-Panel");
            this.togglePanel();
        }
    }

    private togglePanel(): void {
        if (this.uifOpen) {
            this.panel = new fabric.Panel(this.panelElement);
            this.handlePersistence();
        }
    }

    private handlePersistence(): void {
        if (this.uifPersistent) {
            this.panel.panelHost.overlay.remove();
        } else {
            this.panel.panelHost.overlay.overlayElement.onclick = () => this.overlayClick();
            this.setPanelOverlayColor();
        }
    }

    private setPanelOverlayColor(): void {
        if (this.uifDarkOverlay) {
            this.panel.panelHost.overlay.overlayElement.classList.add('ms-Overlay--dark');
        }
    }

    private setPanelSize(): void {
        let panelSizeBaseClass = 'ms-Panel--';
        this.panelSizeCss = panelSizeBaseClass + this.uifPanelSize;
    }

    private setOverlayId(): void {
        this.panelId = this.uifId + 'Overlay';
    }

    public overlayClick(): void {
        this.uifOverlayClicked.emit();
    }

    public closeButtonClick(): void {
        this.uifCloseButtonClicked.emit();
    }

    public ngOnChanges() {
        this.togglePanel();
    }

    public ngAfterViewInit() {
        this.initialize();
    }

    public ngOnInit() {
        this.setOverlayId();
        this.setPanelSize();
    }
}