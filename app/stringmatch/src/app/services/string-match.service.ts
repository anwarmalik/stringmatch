import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class StringMatchService{

    constructor(private http: HttpClient){

    }

    getStringMatches(text: string, substring: string): Observable<number[]>{
    	return this.http.post(`/api/stringmatcher/findpoistions`, {text, substring }).pipe(map(data => {
            if (data){
                return data as any as number[];
            }

            return [];
        }));
    }
}