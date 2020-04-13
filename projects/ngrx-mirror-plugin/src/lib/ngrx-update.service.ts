import {Injectable} from '@angular/core';
import {Store as RxStore} from '@ngrx/store';
import {Store as XsStore} from '@ngxs/store';
import {Actions as RxActions} from '@ngrx/effects';

@Injectable()
export class NgrxUpdateService {

  constructor(private rxStore: RxStore<any>, private xsStore: XsStore, actions$: RxActions) {
    this.addReducers(Object.keys(xsStore.snapshot()));

    actions$.subscribe((action) => {
      const a: { isNgrxAction: boolean, isNgxsAction: boolean, stateUpdated: boolean } = action as any;
      if (!a.isNgxsAction) {
        a.isNgrxAction = true;
        xsStore.dispatch(action);
      } else if (a.stateUpdated) {
        this.addReducers(Object.keys((action as any).addedStates));
      }
    });
  }

  private addReducers(states: string[]) {
    states.forEach(key => {
      this.rxStore.addReducer(key, () => this.xsStore.selectSnapshot(s => s[key]));
    });
  }

}
