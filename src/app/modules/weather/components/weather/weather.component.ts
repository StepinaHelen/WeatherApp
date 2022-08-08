import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core'
import { WeatherDataI } from 'src/app/models/weather.models'
import { WeatherService } from 'src/app/services/weather.service'
import * as moment from 'moment'
import { catchError, map, takeUntil } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  weatherData!: WeatherDataI
  cityName: string = ''
  destroy$ = new Subject()
  error = ''
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCityWeather('Kyiv')
  }

  getCityWeather(cityName: string) {
    this.weatherService
      .getWeatherData(cityName)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error: HttpErrorResponse) => {
          this.error = error.error.message
          return throwError({ error })
        }),
        map((el: any) => ({
          ...el,
          sys: {
            ...el.sys,
            sunrise: moment.unix(el.sys.sunrise).format('HH:mm'),
            sunset: moment.unix(el.sys.sunset).format('HH:mm'),
          },
        })),
      )
      .subscribe((data) => {
        this.weatherData = data
      })
  }

  onSubmit() {
    this.getCityWeather(this.cityName)
    this.cityName = ''
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
