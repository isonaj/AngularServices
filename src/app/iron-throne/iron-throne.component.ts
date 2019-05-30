import { GotService } from './../services/got.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-iron-throne',
  templateUrl: './iron-throne.component.html',
  styleUrls: ['./iron-throne.component.scss']
})
export class IronThroneComponent implements OnInit {

  king: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gotService: GotService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.gotService.getCastById(id)
      .subscribe(c => this.king = c);
  }

}
