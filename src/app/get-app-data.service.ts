import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class GetAppDataService {

  _data:any;
  constructor(private http: Http) { }

  getData() {
     return this.http
      .get('../assets/PizzaAppData.json')
      .map( (data) => 
        this._data = data.json()
      );
  }
}
