import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'uif-pivot-link',
    templateUrl: './uifpivotlink.component.html'
})

export class UifPivotLinkComponent implements OnInit {
    @Input() uifTitle: string = '';
    @Input() uifIsSelected: boolean = false;
    @Input() uifDataContent: string = '';
    @Input() uifTabIndex: number = 1;
    @Output() uifClicked: EventEmitter<string> = new EventEmitter<string>();
    private pivotLink: HTMLLIElement;

    public constructor(private elementReference: ElementRef) { }

    private initialize(): void {
        this.pivotLink = this.elementReference.nativeElement;
        this.pivotLink.classList.add('ms-Pivot-link');
        this.toggleSelected();
        this.setDataContent();
        this.setTitle();
        this.addRowClickedEventHandler();
    }

    private addRowClickedEventHandler(): void {
        this.pivotLink.addEventListener('click', this.clicked.bind(this));
    }

    private clicked(): void {
        this.uifClicked.emit(this.uifDataContent);
    }

    private toggleSelected(): void {
        if (this.uifIsSelected) {
            this.pivotLink.classList.add('is-selected');
        } else {
            this.pivotLink.classList.remove('is-selected');
        }
    }

    private setDataContent(): void {
        this.pivotLink.setAttribute('data-content', this.uifDataContent);
    }

    private setTitle(): void {
        this.pivotLink.setAttribute('title', this.uifTitle);
    }

    private setTabIndex(): void {
        this.pivotLink.setAttribute('tabindex', this.uifTabIndex.toString());
    }

    public ngOnInit() {
        this.initialize();
    }
}