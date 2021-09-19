import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { District } from '../interface/district';
import { State } from '../interface/state';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
  }
  selectedTab = 0;
  selectedState = "";
  selectedDistrict = "";
  states: State[] = [];
  districts: District[] = [];

  ngOnInit(): void {
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedTab = tabChangeEvent.index;
    this.selectedState = "";
    this.selectedDistrict = "";
    if (tabChangeEvent.index == 1 && this.states.length == 0) {
      this.getStates();
    }
  }

  getStates() {
    this.homeService.getStates()
      .subscribe((data) => {
        this.states = data.states;
      }
      );
  }
  getDistricts(state_id: number) {
    this.homeService.getDistricts(state_id)
      .subscribe((data) => {
        this.districts = data.districts;
      }
      );
  }

}
