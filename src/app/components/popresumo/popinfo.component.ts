import { Component, OnInit, Input} from '@angular/core';
import { ContribuintesService } from '../../services/contribuintes.service';
import { ResumoPorCidade } from '../../interfaces/resumoPorCidade';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  resumos: ResumoPorCidade;

  constructor( private contribService: ContribuintesService, private datePipe: DatePipe ) { }
  

  ngOnInit() {
    // this.conversorDate();
    this.carregarResumoPorCidade();
  }

  // Carrega o objeto de resumo do mensageiro por cidade.
    carregarResumoPorCidade() {

    this.contribService.getResumoPorCidade()
      .subscribe( resp => {
        this.resumos = resp;
        console.log('Resumo por cidade:', this.resumos);
      });
  }


}
