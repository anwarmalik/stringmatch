import { createReducer, on, Action } from '@ngrx/store';
import { subStringFound, errorOccurred } from './app.actions';
import { state } from '@angular/animations';
import { Actions } from '@ngrx/effects';

export class StringMatchState{
    positions: number[];
    errorDetail: Error;
}

export interface State {
    stringMatch: StringMatchState;
  }

const initialState: StringMatchState = {
    positions: [],
    errorDetail: null
}

export const AppReducer = createReducer(
    initialState,
    on(subStringFound,
    (state, {positions}) => {
        return {
            ...state,
            positions
        };
    }),
    on(errorOccurred, 
    (state, {errorDetail}) => {
        return {
            ...state,
            errorDetail
        }
    })
)

export function reducer (state: StringMatchState | undefined, action: Action){
    let result = AppReducer(state, action);

    return result;
}