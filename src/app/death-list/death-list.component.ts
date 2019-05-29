import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-list',
  templateUrl: './death-list.component.html',
  styleUrls: ['./death-list.component.scss']
})
export class DeathListComponent implements OnInit {

  cast = [
    { name: "Eddard “Ned” Stark", img: "eddard-ned-stark" },
    { name: "Robert Baratheon", img: "robert-baratheon" }, 
    { name: "Tyrion Lannister", img: "tyrion-lannister" },
    { name: "Cersei Lannister", img: "cersei-lannister" },
    { name: "Catelyn Stark", img: "catelyn-stark" },
    { name: "Jaime Lannister", img: "jamie-lannister" },
    { name: "Daenerys Targaryen", img: "daenarys" },
    { name: "Viserys Targaryen", img: "viserys-targaryen" },
    { name: "Jon Snow", img: "john-snow" },
    { name: "Robb Stark", img: "robert-stark" },
    { name: "Sansa Stark", img: "sansa-stark" },
    { name: "Arya Stark", img: "arya-stark" },
    { name: "Bran Stark", img: "bran-stark" },
    { name: "Rickon Stark", img: "rickon-stark" },
  ]
  constructor() { }

  ngOnInit() {
  }

  kill(character) {
    character.dead = true;
  }
  
  imgSrc(img) {
    return `https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/${img}-512x512.jpg/_jcr_content/renditions/cq5dam.web.260.260.jpeg`;
  }

  killAStark() {
    var starks = this.cast.filter(char => char.name.indexOf("Stark") >= 0 && !(<any>char).dead);
    if (starks.length > 0) {
      var idx = starks.length;
      while (idx == starks.length)
        idx = Math.floor(Math.random() * starks.length);

      (<any>starks[idx]).dead = true;
    } else
      alert('End the series. There are no more Starks to kill');
  }
}
