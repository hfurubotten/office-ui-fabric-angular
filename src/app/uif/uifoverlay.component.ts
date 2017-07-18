import { Component, OnInit, Input } from '@angular/core';
//Didn't import Overlay module because commenting the fabric namespace breaks PanelHost
declare let fabric: any;

@Component({
    selector: 'uif-overlay',
    templateUrl: './uifoverlay.component.html'
})
export class UifOverlayComponent implements OnInit {
    @Input() uifId: string = '';
    @Input() uifDark: boolean = false;
    @Input() uifShow: boolean = false;
    overlay: any;

    constructor() { }

    private createOverlay():void {
        var OverlayContainers = document.querySelectorAll(".ms-OverlayContainer");
        for (var i = 0; i < OverlayContainers.length; i++) {
            if(OverlayContainers[i].id == this.uifId) {
                var OverlayComponent = OverlayContainers[i].querySelector(".ms-Overlay");
                this.overlay = new fabric['Overlay'](OverlayComponent);
            }
        }
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

    ngOnChanges(changes: any) {
        this.showOverlay();                  
     }

     ngAfterViewInit() {
        this.createOverlay();
        this.showOverlay();
     }

    ngOnInit() {

     }
     
}