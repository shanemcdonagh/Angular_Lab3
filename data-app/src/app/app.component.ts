import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{DataService} from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'data-app';
  students:any = [];
  weather:any = [];

  // Instantiates a DataService object
  constructor(private dataService:DataService){}

  ngOnInit()
  {
    // Calls upon GetStudentData method - returns data and passes into array
    //Subscribe - Begins to return values
    this.dataService.GetStudentData().subscribe(
      (data)=>{
      this.students = data.students
      console.log(this.students);
    });

    // Calls upon GetWeather method - returns data and passes into array
    //Subscribe - Begins to return values
    this.dataService.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
        console.log(this.weather);
    });
  }
}
