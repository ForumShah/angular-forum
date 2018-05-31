import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SideFilterComponent } from './side-filter/side-filter.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { GetAppDataService } from './get-app-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SideFilterComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [GetAppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
