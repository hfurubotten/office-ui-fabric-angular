import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'uif-link',
    templateUrl: './uiflink.component.html'
})
export class UifLinkComponent {
    @Input() uifUrl: string = '';
    @Input() uifTitle: string = '';
}