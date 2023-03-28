import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { Cep } from '../interfaces/cep';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) {}

  getCep(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`).pipe(
      tap((response: any) => {
        if (response.erro) {
          throw new Error();
        }
      }),
      map((response: any) => ({
        cep: response.cep,
        rua: response.logradouro,
        bairro: response.bairro,
        cidade: response.localidade,
        estado: response.uf,
      }))
    );
  }
}
