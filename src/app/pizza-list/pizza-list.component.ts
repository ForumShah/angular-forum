import { Component, OnInit, Input } from '@angular/core';
import { GetAppDataService } from '../get-app-data.service';
import { PizzaEntity } from '../PizzaEntity';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {
  @Input() fullDataSet: PizzaEntity;
  emptyMessage: string = "";
  noPizza: boolean = false;
  constructor(private sharedService: SharedService) {
    this.sharedService.filteredAllList.subscribe(
      value => {
        this.fullDataSet.pizzaList = value;
        if (this.fullDataSet.pizzaList.length == 0) {
          this.noPizza = true;
          this.emptyMessage = "No Pizzas for given filters";
        }
        else
          this.emptyMessage = "";


      });
  }

}
