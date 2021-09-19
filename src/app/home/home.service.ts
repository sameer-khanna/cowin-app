import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Constants } from '../constants/constants';
import { Districts } from '../interface/district';
import { States } from '../interface/state';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient, private constants: Constants) { 
  }

  public getStates(): Observable<States> {
    return this.http.get<States>(this.constants.GETSTATES_ENDPOINT);
  }

  public getDistricts(state_id:number): Observable<Districts> {
    return this.http.get<Districts>(this.constants.GETDISTRICTS_ENDPOINT + state_id);
  }
}
