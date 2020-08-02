import { Actions, createEffect, ofType } from '@ngrx/effects';
import { searchSubstring, subStringFound, errorOccurred } from './app.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import {StringMatchService} from '../services/string-match.service'
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffects{
    constructor (private actions: Actions, private stringMatchService: StringMatchService){

    }

    searchSubstring = createEffect(() =>
        this.actions.pipe(
            ofType(searchSubstring),
            switchMap(({text, substring}) => {
                return this.stringMatchService.getStringMatches(text, substring).pipe(
                    map((positions) => {
                        return subStringFound({positions});
                    })
                );
            })
        )
    );
}