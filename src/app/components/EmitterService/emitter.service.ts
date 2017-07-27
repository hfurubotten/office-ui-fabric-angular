import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmitterService {
    private emitter = new BehaviorSubject(null);
    emitterAnnounced$ = this.emitter.asObservable();

    emit(incomingData: any) {
        this.emitter.next(incomingData);
    }
}