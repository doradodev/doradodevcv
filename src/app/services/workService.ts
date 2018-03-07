import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WorkService{

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor( private http: Http) {}

  getWorks(): Promise<any[]> {
    return this.http.get('../data/data.json')
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error));
  }
}
