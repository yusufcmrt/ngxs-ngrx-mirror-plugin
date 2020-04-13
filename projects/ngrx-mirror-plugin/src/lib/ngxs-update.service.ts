import {Injectable} from '@angular/core';
import {NgxsPlugin, UpdateState} from '@ngxs/store';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class NgxsUpdateService implements NgxsPlugin {

  private rxState: any = {};

  constructor(private rxStore: Store<any>) {
    rxStore.subscribe(state => this.rxState = state);
  }

  handle(state: any, action: any, next: (state: any, mutation: any) => any): any {
    if (action.isNgrxAction) {
      return next(this.rxState, action);
    } else {
      const a = next(state, action);

      if (action.type) {

        action.isNgxsAction = true;
        this.rxStore.dispatch(action);

      } else if (action instanceof UpdateState) {

        const act: any = action;
        act.type = '@Ngxs/UpdateState';
        act.isNgxsAction = true;
        act.stateUpdated = true;
        this.rxStore.dispatch(act);

      }

      return a;
    }
  }
}
