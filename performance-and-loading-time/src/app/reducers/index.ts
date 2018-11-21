import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { LoginEvent } from '../commponents/smart/login-smart/datamodel/loginEvent';
import { AuthActionTypes } from '../auth/auth.actions';
import { Action } from '@ngrx/store';

type AuthState = {
  loggedIn: boolean;
  user:LoginEvent;
}

export interface UserInfo {
  auth: AuthState;
}

const initialState:AuthState = {
  loggedIn:false,
  user:undefined
}

export function authReducer(state:AuthState = initialState, action): AuthState{
  switch(action.type){
    case AuthActionTypes.LoginAction:
    console.log('2');
      return {
        loggedIn: true,
        user: action.event
      }
  }
  return state;
}

export const reducers: ActionReducerMap<UserInfo> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<UserInfo>[] = !environment.production ? [] : [];
