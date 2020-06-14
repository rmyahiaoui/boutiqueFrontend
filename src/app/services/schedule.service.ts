import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { EveningEvent } from '../models/evening-event.interface';
import { Schedule } from '../models/schedule.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private httpClient: HttpClient) { }

  getAllEvents(): Observable<any> {
    return this.httpClient
                .get<any>('http://127.0.0.1:8000/chaussures')
                .pipe(
                  map(res => JSON.parse(res.data))
                );
  }

}
