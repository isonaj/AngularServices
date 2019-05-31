import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private client: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.client.get<Character[]>('https://angularservicesapi.azurewebsites.net/api/cast');
  }

  getById(id: number): Observable<Character> {
    return this.client.get<Character>(`https://angularservicesapi.azurewebsites.net/api/cast/${id}`);
  }

  kill(character: Character): Observable<any> {
    return this.client.post(`https://angularservicesapi.azurewebsites.net/api/cast/${character.id}/kill`, null);
  }

  resetData(): Observable<any> {
    return this.client.post('https://angularservicesapi.azurewebsites.net/api/cast/reset', null);
  }
}

