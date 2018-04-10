import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

 
  ngOnInit(){

  }
  graficos:any = {
    'grafico1':{
      'labels':['con frigoles', 'con natilla', 'con tocino'],
      'data': [24, 30,46 ],
      'type': 'doughnut',
      'leyenda':'el pan se come con'
    },'grafico2':{
      'labels':['hombres', 'mujeres'],
      'data': [45000, 60000],
      'type': 'doughnut',
      'leyenda':'entrevistados'
    },'grafico3':{
      'labels':['si', 'no'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda':'le dan gases los frijoles?'
    },'grafico4':{
      'labels':['no', 'si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda':'le importa que le den gases?'
    }
}
}