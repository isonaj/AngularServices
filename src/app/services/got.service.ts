import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  constructor(private client: HttpClient) { }

  getCast() {
    return this.client.get('https://angularservicesapi.azurewebsites.net/api/cast');
  }

  getCastById(id: number | any) {
    return this.client.get(`https://angularservicesapi.azurewebsites.net/api/cast/${id}`);
  }
}

