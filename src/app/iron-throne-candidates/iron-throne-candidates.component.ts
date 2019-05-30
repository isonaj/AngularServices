import { GotService } from './../services/got.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iron-throne-candidates',
  templateUrl: './iron-throne-candidates.component.html',
  styleUrls: ['./iron-throne-candidates.component.scss']
})
export class IronThroneCandidatesComponent implements OnInit {

  cast: any[];

  constructor(private gotService: GotService) { }

  ngOnInit() {
    this.gotService.getCast()
      .subscribe(data => this.cast = data as any[]);
  }
}