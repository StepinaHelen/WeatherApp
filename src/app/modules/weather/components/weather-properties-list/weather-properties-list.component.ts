import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataI } from 'src/app/models/weather.models';

@Component({
  selector: 'app-weather-properties-list',
  templateUrl: './weather-properties-list.component.html',
  styleUrls: ['./weather-properties-list.component.scss']
})
export class WeatherPropertiesListComponent implements OnInit {
  @Input()
  weatherData!: WeatherDataI;
  constructor() {

  }

  ngOnInit(): void {
  }

}
