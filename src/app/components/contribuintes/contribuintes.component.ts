import { Component, OnInit, Input } from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';

@Component({
  selector: 'app-contribuintes',
  templateUrl: './contribuintes.component.html',
  styleUrls: ['./contribuintes.component.scss'],
})
export class ContribuintesComponent implements OnInit {

  // @Input() contribuintes: Content[] = [];

  constructor( private contribServices: ContribuintesService ) { }

  ngOnInit() {}

}
