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

  // dtStart: Date = new Date();
  // dtEnd: Date = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);

  // dtInicio: string = " ";
  // dtFim: string = " ";

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


  // conversorDate(): void {
  //   this.dtInicio = this.datePipe.transform(this.dtStart,"yyyy-MM-dd");
  //   this.dtFim = this.datePipe.transform(this.dtEnd,"yyyy-MM-dd");
  //  }

  // carregarDtInicio(event){
  //   this.dtInicio = this.datePipe.transform(new Date( event.detail.value ),"yyyy-MM-dd");
  // }

  // carregarDtFim(event){
  //   this.dtFim = this.datePipe.transform(new Date( event.detail.value ),"yyyy-MM-dd");

  //   this.carregarResumoPorCidade();
  // }


}
