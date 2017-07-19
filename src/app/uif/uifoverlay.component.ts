import { Component, Input, Output, EventEmitter } from '@angular/core';
//Didn't import Overlay module because commenting the fabric namespace breaks PanelHost
declare let fabric: any;

@Component({
    selector: 'uif-overlay',
    templateUrl: './uifoverlay.component.html'
})
export class UifOverlayComponent {
    @Input() uifId: string = '';
    @Input() uifDark: boolean = false;
    @Input() uifShow: boolean = false;
    @Output() uifClick: EventEmitter<any> = new EventEmitter<any>();
    private overlay: fabric.Overlay;
    private visible: boolean = false;

    constructor() { }

    private initialize():void {
        var overlayContainer = document.getElementById(this.uifId);
        var overlayElement = overlayContainer.querySelector(".ms-Overlay");
        this.overlay = new fabric['Overlay'](overlayElement);
    }

    private showOverlay():void {
        if(this.overlay != null) {
            if(this.uifShow) {
                this.overlay.show();
            } else {
                this.overlay.hide();
            }
        }
    }

    private overlayClick():void {
        console.log("overlay was clicked!");
        this.uifClick.emit();
    }

    ngOnChanges(changes: any) {
        this.showOverlay();
        console.log("overlay visible - show: " + this.uifShow);
     }

     ngAfterViewInit() {
        this.initialize();
        this.showOverlay();
     }
     
}