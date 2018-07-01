import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';


@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, 
    public router: Router,
    public _subirArchivoService: SubirArchivoService  
  ) {
    this.cargarStorage();

  }

  estaLogueado() {
    if (this.token.length > 5) {
      return true;
    } else {
      return false;
    }
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = "";
      this.usuario = null;
    }

  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }
  // =====================================
  // Login Google Usuario
  // =====================================
  loginGoogle(token: String) {
    let url = URL_SERVICES + '/login/google';

    return this.http.post(url, { token })
      .map((res: any) => {
        this.guardarStorage(res.id, res.token, res.usuario);
        console.log(token);
        return true;
      });
  }


  // =====================================
  // Login Normal Usuario
  // =====================================
  login(usuario: Usuario, recordar: boolean) {
    let url = URL_SERVICES + "/login";

    return this.http.post(url, usuario)
      .map((res: any) => {
        this.guardarStorage(res.id, res.token, res.usuario);
        if (recordar) {
          localStorage.setItem('email', usuario.email);
        } else {
          localStorage.removeItem('email');
        }
        return true;
      });
  }
  // =====================================
  // Logout Usuario
  // =====================================
  logout() {
    this.token = "";
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/aplicacion']);
  }


  // =====================================
  // Crear Usuario
  // =====================================

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICES + "/usuario";

    return this.http.post(url, usuario)
      .map((res: any) => {
        localStorage.setItem('emailRegistrado', usuario.email);
        swal('Usuario creado', usuario.email, 'success');
      });
  }


  // =====================================
  // Actualizar Usuario
  // =====================================
  actualizarUsuario(usuario: Usuario){
    this.token = localStorage.getItem("token");
    
    let url = URL_SERVICES + '/usuario/'+usuario._id;
    url += "?token="+this.token;

    return this.http.put(url, usuario)
    .map((res: any) => {
      this.guardarStorage(res.usuario._id, this.token, res.usuario);
      swal('Usuario Actualizado', usuario.nombre, 'success');
      return true;
    });;
  }

  cambiarImagen(archivo: File, id:string){
    this._subirArchivoService.subirArchivo(archivo, 'usuarios', id)
    .then((res:any)=>{
      console.log(res);
      this.usuario.img = res.usuarioActualizado.img;
      swal('Imagen actualizada', this.usuario.nombre, 'success');
      this.guardarStorage(id, this.token, this.usuario);

    }).catch(res =>{
      console.log(res);
    }) ;
  }

}
