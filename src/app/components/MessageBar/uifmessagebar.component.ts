import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'uif-message-bar',
    templateUrl: './uifmessagebar.component.html',
})
export class UifMessageBarComponent implements OnInit {
    @Input() uifContent: string = '';
    @Input() uifLinkLabel: string = '';
    @Input() uifLinkURL: string = '';
    @Input() uifType: string = '';
    public iconCssClass: string;
    
    private addLinkToContent():void {
         if(this.uifLinkLabel != '' && this.uifLinkURL != '') {
             this.uifContent += '<br/>' + '<a href="' + this.uifLinkURL + '" class="ms-Link">' + this.uifLinkLabel + '</a>';
         }
    }

    private setIconCssClass(): void {
        let baseClass = 'ms-Icon--';
        switch(this.uifType) {
            case 'success':
                this.iconCssClass = baseClass + 'Completed';
                break;
            case 'error':
                this.iconCssClass = baseClass + 'ErrorBadge';
                break;
            case 'blocked':
                this.iconCssClass = baseClass + 'Blocked';
                break;
            case 'severeWarning':
                this.iconCssClass = baseClass + 'Warning';
                break;
            default:
                this.iconCssClass = baseClass + 'Info';
                break;
        }
    }

    public ngOnInit() {
        this.setIconCssClass();
        this.addLinkToContent();
    }

}