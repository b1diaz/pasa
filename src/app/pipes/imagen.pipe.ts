import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { UsuarioService } from '../services/service.index';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  constructor(public _usuarioService: UsuarioService){

  }
  
  transform( img:string, tipo:string="usuarios" ): any {

  
    let url= URL_SERVICES+'/img';

    if(!img){
      return url += '/usuarios/noImagennnnn';
    }
    
    if(this._usuarioService.usuario.google){
      if(!img.indexOf('https')){
        console.log('entro en img');
        return img;
        
      }
      console.log('salto el img');
      return url += '/usuarios/'+img;
    }

    switch(tipo){
      case 'usuarios':
      url += '/usuarios/'+img;
      break;
      default:
      console.log('El tipo de imagen no existe');
      url += '/usuarios/noImagen';
    }
    return url;



  }

}
