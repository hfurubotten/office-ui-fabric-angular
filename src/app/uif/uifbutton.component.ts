import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
declare var fabric: any;

@Component({
    moduleId: module.id,
    selector: 'uif-button',
    templateUrl: './uifbutton.component.html',
})

export class UifButtonComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifType: string = '';
    @Input() uifDescription: string = '';
    buttonBaseClass: string = 'ms-Button';
    buttonExtendedClass: string = ' ms-Button--';

    constructor() { }

    createButtons() {
        var ButtonElements = document.querySelectorAll(".ms-Button");
        for (var i = 0; i < ButtonElements.length; i++) {
            new fabric['Button'](ButtonElements[i], function() {    
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
