import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherDataI } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherDataI> {
    return this.http.get<WeatherDataI>(environment.weatherApiBaseUrl,
      {
        params: new HttpParams().set('q', cityName)
          .set('units', 'metric').set('appid', environment.apiKey)
      })
  }

}
