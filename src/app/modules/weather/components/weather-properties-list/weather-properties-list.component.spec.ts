import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPropertiesListComponent } from './weather-properties-list.component';

describe('WeatherPropertiesListComponent', () => {
  let component: WeatherPropertiesListComponent;
  let fixture: ComponentFixture<WeatherPropertiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPropertiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
