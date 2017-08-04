import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'uif-pivot-content',
    templateUrl: './uifpivotcontent.component.html'
})
export class UifPivotContentComponent implements OnInit {
    @Input() uifDataContent: string = '';
    private pivotContent: HTMLDivElement;

    public constructor(private elementReference: ElementRef) { }

    private initialize(): void {
        this.pivotContent = this.elementReference.nativeElement;
        this.pivotContent.classList.add('ms-Pivot-content');
        this.setDataContent();
    }

    private setDataContent(): void {
        this.pivotContent.setAttribute('data-content', this.uifDataContent);
    }

    public ngOnInit() { 
        this.initialize();
    }
}