import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { Data } from './data';

@Injectable({ providedIn: 'root' })
export class OnPushService {
    public data$: Observable<Data>
    constructor() {
    }

    /**
     * getData
     */
    public getData(): Observable<Data> {
        this.data$ = new Observable<Data>(subscribe => {
            subscribe.next({ str: "test", num: 1 })
        });
        return this.data$;
    }

}