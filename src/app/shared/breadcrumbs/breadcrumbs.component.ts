import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  titleBreadcrumb:string;
  
  constructor( 
    private router:Router,
    public title:Title,
    public meta:Meta
     ) {

    this.titleBreadcrumb = "";
    
    this.getDataRouter().subscribe(
      resultado => {
        this.titleBreadcrumb = resultado;
        this.title.setTitle(resultado);

        let metaTag:MetaDefinition = {
          name:'description',
          content:resultado
        }
        this.meta.updateTag(metaTag);
      }
    );
  }

  ngOnInit() {
  }

  getDataRouter(){
    return this.router.events
      .filter( resultado => resultado instanceof ActivationEnd )
      .filter((resultado:ActivationEnd) => resultado.snapshot.firstChild === null)
      .map((resultado:ActivationEnd) => resultado.snapshot.data.titulo);
  }

}
