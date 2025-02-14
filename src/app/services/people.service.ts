import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { People } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  public getPeople(cpf: string): Observable<People>{
    return of({
      cpf: cpf,
      name: "Mariane de Sousa Oliveira",
      status: true,
    });
  }

}
