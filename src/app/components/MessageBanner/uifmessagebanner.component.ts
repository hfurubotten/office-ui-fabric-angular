import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import 'office-ui-fabric-js/src/components/MessageBanner/MessageBanner';

@Component({
    moduleId: module.id,
    selector: 'uif-message-banner',
    templateUrl: './uifmessagebanner.component.html'
})
export class UifMessageBannerComponent implements AfterViewInit {
    @Input() uifHidden: boolean = false;
    @Input() uifActionLabel: string = '';
    @Input() uifContent: string = '';
    @Input() uifAction: string = '';
    @Input() uifId: string = '';
    @Output() uifActionButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() uifCloseButtonClicked: EventEmitter<any> = new EventEmitter<any>();
    private messageBanner: fabric.MessageBanner;

    private initialize(): void {
        if (this.uifId) {
            var messageBanner = document.getElementById(this.uifId);
            this.messageBanner = new fabric.MessageBanner(messageBanner);
        }
    }

    public actionButtonClick(): void {
        this.uifActionButtonClicked.emit();
    }

    public closeButtonClick(): void {
        this.uifCloseButtonClicked.emit();
    }

    public ngAfterViewInit() {
        this.initialize();
    }
}