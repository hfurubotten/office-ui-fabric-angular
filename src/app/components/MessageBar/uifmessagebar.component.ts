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
    baseClass: string = 'ms-MessageBar';
    extendedClass: string = ' ms-MessageBar--';
    iconBaseClass: string = 'ms-Icon ms-Icon--';
    
    constructor() { }

    addLinkToContent():void {
         if(this.uifLinkLabel != '' && this.uifLinkURL != '') {
             this.uifContent += '<br/>' + '<a href="' + this.uifLinkURL + '" class="ms-Link">' + this.uifLinkLabel + '</a>';
         }
    }

    getCssClass():string {
        var cssClass = this.baseClass;
        if(this.uifType != '') {
            cssClass += this.extendedClass + this.uifType;
        }
        return cssClass;
    }

    getCssIcon():string {
        var cssClass = this.iconBaseClass + 'Info';

        if(this.uifType == 'success') {
            cssClass = this.iconBaseClass + 'Completed';
        }
        if(this.uifType == 'error') {
            cssClass = this.iconBaseClass + 'ErrorBadge';
        }
        if(this.uifType == 'blocked') {
            cssClass = this.iconBaseClass + 'Blocked';
        }
        if(this.uifType == 'severeWarning') {
            cssClass = this.iconBaseClass + 'Warning';
        }

        return cssClass;        
    }

    ngOnInit() {}

}