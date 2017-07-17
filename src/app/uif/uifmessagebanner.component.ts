import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageBanner } from 'office-ui-fabric-js/src/components/MessageBanner/MessageBanner';

@Component({
    selector: 'uif-message-banner',
    templateUrl: './uifmessagebanner.component.html'
})
export class UifMessageBannerComponent implements OnInit {
    @Input() uifHidden: boolean = false;
    @Input() uifActionLabel: string = '';
    @Input() uifContent: string = '';
    @Input() uifAction: string = '';
    @Input() uifId: string = '';
    @Output() uifActionButtonClicked:EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() uifCloseButtonClicked:EventEmitter<boolean> = new EventEmitter<boolean>();
    messageBanner: MessageBanner;

    constructor() { }

    createBanner():void {
        let messageBanners = document.querySelectorAll('.ms-MessageBanner');
        for(var i = 0; i < messageBanners.length; ++i) {
            if(messageBanners[i].id == this.uifId) {
                this.messageBanner = new MessageBanner(<HTMLElement>messageBanners[i]);
            }
        }
    }

    actionButtonClick():void {
        this.uifActionButtonClicked.emit(true);
    }

    closeButtonClick():void {
        this.uifCloseButtonClicked.emit(true);
    }

    ngOnInit() {}

     ngAfterViewInit() {
        this.createBanner();
     }
}