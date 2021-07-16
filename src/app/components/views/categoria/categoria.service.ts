import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl; //url base do environment.ts 'http://localhost:8080/'

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }

  findById(id: String): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url)
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }

  update(categoria: Categoria): Observable<void> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`
    return this.http.put<void>(url, categoria);
  }


  mensagem(srt: String): void {
    this._snack.open(`${srt}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }


}
