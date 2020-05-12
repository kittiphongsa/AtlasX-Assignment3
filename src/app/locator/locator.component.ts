import { Component, EventEmitter, OnInit, Input, Output, OnDestroy } from '@angular/core';

import { CustomPoint } from './custompoint.class';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit, OnDestroy {

  location: CustomPoint;

  currentLat: number;
  currentLng: number;

  @Input() formTitle = "Locator";
  @Input() center: number[];

  @Output() located = new EventEmitter<CustomPoint>();

  constructor(public locService: LocationService){}

  ngOnInit(){

    this.location = new CustomPoint(this.center[0],this.center[1]);

    this.currentLng = this.center[0];
    this.currentLat = this.center[1];

    console.log("ngOnInit",this.location);

  }

  ngOnDestroy(){

  }

  onLocate(){
    this.location = new CustomPoint(this.currentLng,this.currentLat);
    this.located.emit(this.location);
    this.locService.setLocation(this.currentLng,this.currentLat);
    console.log("onLocate",this.location);
  }

}
