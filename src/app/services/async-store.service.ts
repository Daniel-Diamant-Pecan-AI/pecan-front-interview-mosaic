import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SyncStoreService} from './sync-store.service';
import {delay} from 'rxjs/operators';

const mockDelay = 500;

@Injectable({
    providedIn: 'root'
})
export class AsyncStoreService {

    constructor(private syncStore: SyncStoreService) {
    }

    get(key: string): Observable<any> {
        return of(this.syncStore.get(key))
            .pipe(delay(mockDelay));
    }

    set(key: string, data: any): Observable<void> {
        return new Observable(subscriber => {
            setTimeout(() => {
                this.syncStore.set(key, data);
                subscriber.next();
                subscriber.complete();
            }, mockDelay)
        });
    }
}
