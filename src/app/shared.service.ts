import { Injectable, OnInit } from '@angular/core';
import { PizzaEntity } from './PizzaEntity';
import { PizzaList } from './PizzaList';
import { Subject } from 'rxjs/Rx';
import { GetAppDataService } from './get-app-data.service';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  filteredAllList = new Subject<PizzaList[]>();
  list: PizzaList[] = [];
  allList: PizzaList[];
  filterList = [];
  constructor(private getAppDataService: GetAppDataService) {
    this.resetFilters();
  }

  resetFilters() {
    this.filterList = [{ filterString: "", filterType: "base" },
    { filterString: "", filterType: "price" },
    { filterString: "", filterType: "type" },
    { filterString: "", filterType: "cheese" }
    ];
  }
  k = this.getAppDataService.getData()
    .subscribe(
      result => {
        this.allList = result.pizzaList;
      }
    );
  // Service message commands
  updateFilter(filter: string, filterName: string) {
    if (filterName === "base")
      this.filterList.splice(0, 1, { filterString: filter, filterType: "base" });

    if (filterName === "price")
      this.filterList.splice(1, 1, { filterString: filter, filterType: "price" });


    if (filterName === "type")
      this.filterList.splice(2, 1, { filterString: filter, filterType: "type" });

    if (filterName === "cheese")
      this.filterList.splice(3, 1, { filterString: filter, filterType: "cheese" });
    this.publishData();
  }
  publishData() {
    debugger;
    this.list = [];
    this.allList.forEach(element => {
      let c = 0;
      this.filterList.forEach(ele => {
        if (ele.filterString === "")
          c++;
        else if (ele.filterType === "price" && parseInt(element[ele.filterType]) <= parseInt(ele.filterString)) {
          if (!this.list.includes(element)) {
            c++;
            debugger;
          }
        }
        else if (element[ele.filterType] === ele.filterString) {
          if (!this.list.includes(element)) {
            c++;
            debugger;
          }
        }
      });
      if (c == 4)
        this.list.push(element);
    });
    this.filteredAllList.next(this.list);
  }
  clearFilter() {
    this.getAppDataService.getData().subscribe(result => {
      this.filteredAllList.next(result.pizzaList);
      this.resetFilters();
    });

  }
}
