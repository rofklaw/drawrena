import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs'

@Injectable()
export class LogregService {

  constructor(
    private _http: Http,
  ) { }

  register(user){
    return this._http.post('/api/register', user).map( (user: Response) => user.json() ).toPromise();
  }

  login(user){
    return this._http.post('/api/login', user).map( ( user: Response) => user.json() ).toPromise();
  }

}
