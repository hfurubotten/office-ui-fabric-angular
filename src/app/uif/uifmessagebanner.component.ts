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
    @Output() uifActionButtonClicked:EventEmitter<any> = new EventEmitter<any>();
    @Output() uifCloseButtonClicked:EventEmitter<any> = new EventEmitter<any>();
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