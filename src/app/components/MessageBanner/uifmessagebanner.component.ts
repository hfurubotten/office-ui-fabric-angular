import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'office-ui-fabric-js/src/components/MessageBanner/MessageBanner';

@Component({
    moduleId: module.id,
    selector: 'uif-message-banner',
    templateUrl: './uifmessagebanner.component.html'
})
export class UifMessageBannerComponent implements OnInit {
    @Input() uifHidden: boolean = false;
    @Input() uifActionLabel: string = '';
    @Input() uifContent: string = '';
    @Input() uifAction: string = '';
    @Input() uifId: string = '';
    @Output() uifActionButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    @Output() uifCloseButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    private messageBanner: fabric.MessageBanner;

    constructor() { }

    createBanner():void {
        if(this.uifId != '') {
            var messageBanner = document.getElementById(this.uifId);
            this.messageBanner = new fabric.MessageBanner(messageBanner);
        }
    }

    actionButtonClick():void {
        this.uifActionButtonClicked.emit();
    }

    closeButtonClick():void {
        this.uifCloseButtonClicked.emit();
    }

    ngOnInit() {}

     ngAfterViewInit() {
        this.createBanner();
     }
}