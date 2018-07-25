import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {


  @Input() ChartLabels:string[] = [];
  @Input() ChartData:number[] = [];
  @Input() ChartType:string 
  constructor() { }

  ngOnInit() {
  }

}