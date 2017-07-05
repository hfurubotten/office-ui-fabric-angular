import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
declare var fabric: any;

@Component({
    moduleId: module.id,
    selector: 'uif-button',
    templateUrl: './uifbutton.component.html',
})

export class UifButtonComponent implements OnInit {
    @Input() uifLabel: string = '';
    @Input() uifType: string = 'hero';

    constructor() { }

    createButtons() {
        var ButtonElements = document.querySelectorAll(".ms-Button");
        for (var i = 0; i < ButtonElements.length; i++) {
            new fabric['Button'](ButtonElements[i], function() {    
                //Insert event here
            });
        }
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.createButtons();
     }

}

