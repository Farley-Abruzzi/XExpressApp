import { Component, OnInit } from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'depositos.page.html',
  styleUrls: ['depositos.page.scss']
})
export class Tab1Page implements OnInit {
  

  constructor( private contribService: ContribuintesService ) { }


  ngOnInit() {
  }

}
