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
    return this.client.get<Character[]>('https://localhost:5001/api/cast');
  }

  getById(id: number): Observable<Character> {
    return this.client.get<Character>(`https://localhost:5001/api/cast/${id}`);
  }
}

