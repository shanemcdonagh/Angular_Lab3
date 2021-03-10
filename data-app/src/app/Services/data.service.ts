import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) 
  { 

  }

  GetStudentData():Observable<any>
  {
    return this.http.get('https://jsonblob.com/api/jsonblob/a07d468d-81aa-11eb-8c36-1fcff13067da');
  }

  GetWeatherData():Observable<any>
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=6a66416403ed8e5e6e762cb8c261f303');
  }
}
