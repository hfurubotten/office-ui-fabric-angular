import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'uif-label',
    templateUrl: './uiflabel.component.html'
})
export class UifLabelComponent {
    @Input() uifDisabled: boolean = false;
    @Input() uifRequired: boolean = false;
}