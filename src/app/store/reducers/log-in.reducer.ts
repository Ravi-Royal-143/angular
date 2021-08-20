import { Action, createReducer, on } from "@ngrx/store";
import * as loginActions from '../actions/log-in.action';

export const logInFeatureKey = 'logIn';

export interface UserDetails {
    userName: string;
    token: string;
    loggedIn: boolean;
}

export const initialState: UserDetails = {
    userName: '',
    token: '',
    loggedIn: !!document.cookie
};

const logInReducer = createReducer(
    initialState,
    on(loginActions.login, (state, payload) => ({ ...state, ...payload })),
    on(loginActions.logOut, _ => ({ ...initialState })),
);

export function reducer(state: UserDetails | undefined, action: Action) {
    return logInReducer(state, action);
}