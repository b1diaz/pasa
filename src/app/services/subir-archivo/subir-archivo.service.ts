import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { URL_SERVICES } from '../../config/config';

@Injectable()
export class SubirArchivoService {

  constructor() { }

  imagenSubir:File;

  subirArchivo(archivo: File, tipo: String, id: String) {

    return new Promise((resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append("imagen", archivo, archivo.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Imagen subida");
            resolve(JSON.parse(xhr.response)) ;
          } else {
            console.log('Fallo la subida');
            reject(xhr.response);
          }
        }
      };
      let url = URL_SERVICES + `/upload/${tipo}/${id}`;
      xhr.open('PUT',url,true);
      xhr.send(formData);

    });

  };

}
