import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl //url base do environment.ts 'http://localhost:8080/'

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

findAllByCategoria(id_cat: String): Observable<Livro[]> {
  const url = `${this.baseUrl}/livros?categoria=${id_cat}`
  return this.http.get<Livro[]>(url)
}

findById(id: String): Observable<Livro> {
  const url = `${this.baseUrl}/livros${id}`
  return this.http.get<Livro>(url)
} 

update(livro: Livro): Observable<Livro> {
  const url = `${this.baseUrl}/livros/${livro.id}`
  return this.http.put<Livro>(url, livro)
}

delete(id: String): Observable<void> {
  const url = `${this.baseUrl}/livros/${id}`
  return this.http.delete<void>(url)
}


create(livro: Livro, id_cat: String): Observable<Livro> {
  const url = `${this.baseUrl}/livros?categoria=${id_cat}`
return this.http.post<Livro>(url, livro)
}

mensagem(srt: String): void {
  this._snack.open(`${srt}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 3000
  })
}





}
