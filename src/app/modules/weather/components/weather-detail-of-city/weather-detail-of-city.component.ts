import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DetailOfCity } from 'src/app/shared/interfaces/weather.model';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'bb-weather-detail-of-city',
  templateUrl: './weather-detail-of-city.component.html',
  styleUrls: ['./weather-detail-of-city.component.scss']
})
export class WeatherDetailOfCityComponent implements OnInit {

  @Input() detailedCity!: DetailOfCity;

  @Select(AppState.selectUnit) unit$!: Observable<string>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
