import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
import 'office-ui-fabric-js/src/components/Spinner/Spinner';

@Component({
    moduleId: module.id,
    selector: 'uif-spinner',
    templateUrl: './uifspinner.component.html'
})
export class UifSpinnerComponent implements AfterViewInit, OnChanges {
    @Input() uifId: string = '';
    @Input() uifLarge: boolean = false;
    @Input() uifSpin: boolean = true;
    @Input() uifHide: boolean = false;
    @Input() uifAnimationSpeed: number = 90;
    private spinner: fabric.Spinner;
    private initialized: boolean = false;

    private initialize(): void {
        if (this.uifId) {
            let spinnerContainer = document.getElementById(this.uifId);
            this.spinner = new fabric.Spinner(spinnerContainer);
            this.initialized = true;
            this.setSpinnerProperties();
            this.toggleSpin();
        }
    }

    private setSpinnerProperties(): void {
        if(this.initialized) {
            this.spinner.animationSpeed = this.uifAnimationSpeed;
        }
    }

    private toggleSpin(): void {
        if (this.initialized) {
            if (this.uifSpin) {
                this.spinner.start();
            } else {
                this.spinner.stop();
            }
        }
    }

    public ngAfterViewInit() {
        this.initialize();
    }

    public ngOnChanges() {
        this.toggleSpin();
    }

}