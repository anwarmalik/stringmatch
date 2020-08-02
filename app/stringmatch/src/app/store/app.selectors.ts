import { State } from './app.reducers';
import { createSelector } from '@ngrx/store';

export const selectStringMatch = (state: State) => state.stringMatch;
export const selectPoistions = createSelector(selectStringMatch, (state) => state.positions)
export const selectErrorDetail = createSelector(selectStringMatch, (state) => state.errorDetail)