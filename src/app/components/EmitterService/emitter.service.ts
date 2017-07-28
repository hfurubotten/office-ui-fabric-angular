import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class EmitterService {
    private emitter = new BehaviorSubject(null);
    public emitterAnnounced$ = this.emitter.asObservable();

    public emit(incomingData: any) {
        this.emitter.next(incomingData);
    }
}