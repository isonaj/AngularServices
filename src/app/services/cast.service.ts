import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  cast: Character[] = [];

  constructor(private client: HttpClient) { }

  getAll(): Character[] {
    if (this.cast.length == 0) {
      this.client.get('https://angularservicesapi.azurewebsites.net/api/cast')
        .subscribe((data: Character[]) => {
          this.cast.push(...data);
        });
    }

    return this.cast;
  }

  killCharacter(id: number) {
    this.client.post('https://angularservicesapi.azurewebsites.net/api/cast/' + id + '/kill', null)
      .subscribe(x => {
        this.getById(id).dead = true;
      });
  }

  getById(id: number): Character {    
    var characters = this.cast.filter(c => c.id == id);
    if (characters.length === 0)
      return null;

    return characters[0];
  }

  resetData() {
    this.client.post('https://angularservicesapi.azurewebsites.net/api/cast/reset', null)
      .subscribe(x => { 
        //Clear the current cache and then reload
        this.cast.splice(0, this.cast.length);
        this.getAll();
      });
  }
}
