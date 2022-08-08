import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherPropertiesListComponent } from './components/weather-properties-list/weather-properties-list.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MatFormFieldModule } from "@angular/material/form-field";



@NgModule({
  declarations: [
    WeatherComponent,
    WeatherPropertiesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports:[WeatherComponent]
})
export class WeatherModule { }
