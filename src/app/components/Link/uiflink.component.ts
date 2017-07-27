import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'uif-link',
    templateUrl: './uiflink.component.html'
})
export class UifLinkComponent implements OnInit {
    @Input() uifUrl: string = '';
    @Input() uifTitle: string = '';

    constructor() { }

    ngOnInit() { }
}