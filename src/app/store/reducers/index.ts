import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromLogInReducer from './log-in.reducer';

export interface State {
  [fromLogInReducer.logInFeatureKey]: fromLogInReducer.UserDetails;
}

export const reducers: ActionReducerMap<State> = {
  logIn: fromLogInReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
