import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'th[uif-table-header-select]',
    templateUrl: './uiftableheaderselect.component.html'
})
export class UifTableHeaderSelectComponent {
    private checkMark: HTMLElement;

    constructor(private elementReference: ElementRef) { }

    private initializeCheckMark(): void {
        this.checkMark = <HTMLElement>this.elementReference.nativeElement;
        this.checkMark.classList.add('ms-Icon');
        this.checkMark.classList.add('ms-Icon--CheckMark');
        this.checkMark.style.paddingLeft = '5px';
    }

    public ngAfterViewInit() {
        this.initializeCheckMark();
    }

}