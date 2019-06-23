import { Character } from './../character';
import { GotService } from './../services/got.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iron-throne',
  templateUrl: './iron-throne.component.html',
  styleUrls: ['./iron-throne.component.scss']
})
export class IronThroneComponent implements OnInit {

  king: Character = null;

  constructor(
    private route: ActivatedRoute,
    private gotService: GotService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.gotService.getById(+id)
      .subscribe(c => this.king = c);
  }

}
