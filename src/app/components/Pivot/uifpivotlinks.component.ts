import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'uif-pivot-links',
    templateUrl: './uifpivotlinks.component.html'
})
export class UifPivotLinksComponent implements OnInit {
    private pivotLinkContainer: HTMLUListElement;

    public constructor(private elementReference: ElementRef) { }

    private initialize(): void {
        this.pivotLinkContainer = this.elementReference.nativeElement;
        this.pivotLinkContainer.classList.add('ms-Pivot-links');
    }

    public ngOnInit() {
        this.initialize();
    }
}