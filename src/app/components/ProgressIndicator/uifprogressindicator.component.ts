import { Component, Input, AfterViewInit } from '@angular/core';
import 'office-ui-fabric-js/src/components/ProgressIndicator/ProgressIndicator';

@Component({
    moduleId: module.id,
    selector: 'uif-progress-indicator',
    templateUrl: './uifprogressindicator.component.html'
})
export class UifProgressIndicatorComponent implements AfterViewInit {
    @Input() uifId: string = '';
    @Input() uifTitle: string = '';
    @Input() uifDescription: string = '';
    @Input() uifProgressPercent: number = 0;
    private progressIndicator: fabric.ProgressIndicator;
    private initialized: boolean = false;

    private initialize(): void {
        if (this.uifId) {
            let progressIndicatorContainer = document.getElementById(this.uifId);
            this.progressIndicator = new fabric.ProgressIndicator(progressIndicatorContainer);
            this.setProgressPercent();
            this.initialized = true;
        }
    }

    private setProgressPercent(): void {
        let percent = this.getPercent();
        this.progressIndicator.setProgressPercent(percent);
    }

    private getPercent(): number {
        let percent = 0;
        if (this.uifProgressPercent > 0 && this.uifProgressPercent <= 100) {
            percent = this.uifProgressPercent / 100;
        }
        return percent;
    }

    public ngAfterViewInit() {
        this.initialize();
    }

    public ngOnChanges() {
        if (this.initialized) {
            this.setProgressPercent();
        }
    }

}