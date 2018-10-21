import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoginEvent } from '../commponents/smart/login-smart/datamodel/loginEvent';

type AuthState = {
  loggedIn: boolean;
  user:LoginEvent;
}

export interface UserInfo {
  auth: AuthState;
}

export function authReducer(state:AuthState, action): AuthState{
  return state;
}

export const reducers: ActionReducerMap<UserInfo> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<UserInfo>[] = !environment.production ? [] : [];
