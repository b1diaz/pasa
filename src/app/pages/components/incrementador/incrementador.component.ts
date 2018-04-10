import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgreso') txtProgreso:ElementRef; 

  @Input() leyenda:string;
  @Input() progreso:number;
  @Output() cambioValor:EventEmitter<number>;


  constructor() { 
    this.progreso = 50;
    this.leyenda = "leyenda";
    this.cambioValor = new EventEmitter();
  }
    
  ngOnInit() {
    
  }

  cambiarValor(valor){
    if(this.progreso >0 && this.progreso<=100){
      this.progreso += valor;
      if(this.progreso <=0 ){
        this.progreso=0;
      }else if(this.progreso >=100){
        this.progreso=100;
      }
    }this.cambioValor.emit(this.progreso);
    this.txtProgreso.nativeElement.focus();
  }

 

  onChanges( newValue:number){

    if(newValue >100){
      this.progreso = 100;
    }else if( newValue < 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
