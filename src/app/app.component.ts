import { Component, OnInit } from '@angular/core';
import { GetAppDataService } from './get-app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fullDataSet = { PizzaList: [] };
  constructor(private getAppDataService: GetAppDataService) {

  }
  ngOnInit() {
    this.getAppDataService.getData()
      .subscribe(
        result => {
          this.fullDataSet = result;
        }
      );
  }
}
