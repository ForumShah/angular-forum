import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { PizzaEntity } from '../PizzaEntity';
import { PizzaList } from '../PizzaList';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent {
  @Input() fullDataSet: PizzaEntity;
  toggleOption: string = "";
  clicked: string;
  pizzaData: PizzaList[];
  _currentRange: string = "600";

  constructor(private sharedService: SharedService) {

  }
  ngOnChanges() {
    this.pizzaData = this.fullDataSet.pizzaList;
  }

  toggle(n) {
    debugger;
    this.clicked = n;
    this.sharedService.updateFilter(n, "type");
  }

  changeBase(baseSelected) {
    debugger;
    this.sharedService.updateFilter(baseSelected, "base");
  }
  changeCheeseFilter(cheeseSelected) {
    debugger;
    this.sharedService.updateFilter(cheeseSelected, "cheese");
  }
  onRangeChange(value: string): void {
    this._currentRange = value;
    this.sharedService.updateFilter(value, "price");
  }
  clearFilter() {
    this.sharedService.clearFilter();
    this._currentRange = "100";
  }
}
