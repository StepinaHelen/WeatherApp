export interface WeatherDataI {
  coord: CoordI
  weather: WeatherI[]
  base: string
  main: MainI
  visibility: number
  wind: WindI
  clouds: CloudsI
  dt: number
  sys: SysI
  timezone: number
  id: number
  name: string
  cod: number
}

export interface CoordI {
  lon: number
  lat: number
}
export interface WeatherI {
  id: number
  main: string
  description: string
  icon: string
}

export interface MainI {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface WindI {
  speed: number
  deg: number
  gust: number
}

export interface CloudsI {
  all: number
}

export interface SysI {
  country: string
  sunrise: any
  sunset: any
}
