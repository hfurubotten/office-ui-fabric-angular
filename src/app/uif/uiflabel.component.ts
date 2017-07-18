import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'uif-label',
    templateUrl: './uiflabel.component.html'
})
export class UifLabelComponent implements OnInit {
    @Input() uifDisabled: boolean = false;
    @Input() uifRequired: boolean = false;
    constructor() { }

    ngOnInit() { }
}