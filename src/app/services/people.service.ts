import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IPeople } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleSubject = new BehaviorSubject<IPeople | undefined>(undefined);

  constructor() { }

  public getPeople(cpf: string): Observable<IPeople> {
    const people = {
      cpf: cpf,
      name: "Mariane de Sousa Oliveira",
      status: true,
    };
    return of(people);
  }

  public getPeopleState() {
    return this.peopleSubject.asObservable();
  }

  public setState(people: IPeople | undefined): void {
    this.peopleSubject.next(people);
  }

  public clearState() {
    this.setState(undefined);
  }
}
