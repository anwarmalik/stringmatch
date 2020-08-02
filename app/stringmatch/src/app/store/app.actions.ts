import { createAction, props } from '@ngrx/store';

export const searchSubstring = createAction('[String Match] Search Sub String', props<{text: string, substring: string}>());
export const subStringFound = createAction('[String Match] Sub String Found', props<{positions: number[]}>());
export const errorOccurred = createAction('[String Match] Error Occured', props<{errorDetail: Error}>());
