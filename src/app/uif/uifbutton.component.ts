import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'office-ui-fabric-js/src/components/Button/Button';

@Component({
    moduleId: module.id,
    selector: 'uif-button',
    templateUrl: './uifbutton.component.html',
})

export class UifButtonComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifDisabled: boolean = false;
    @Input() uifType: string = '';
    @Input() uifDescription: string = '';
    buttonBaseClass: string = 'ms-Button';
    buttonExtendedClass: string = ' ms-Button--';

    constructor() { }

    createButtons() {
        var ButtonElements = document.querySelectorAll(".ms-Button");
        for (var i = 0; i < ButtonElements.length; i++) {
            new Button(ButtonElements[i], function() {    
                //Insert event here
            });
        }
    }

    getCssClass() {
        var cssClass = this.buttonBaseClass;
        if(this.uifType != '') {
            cssClass += this.buttonExtendedClass + this.uifType;
        }
        return cssClass;
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.createButtons();
     }

}

