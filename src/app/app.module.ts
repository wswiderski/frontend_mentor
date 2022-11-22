import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';

import { IpApiService } from './service/ip-api.service';
import { InfoItemComponent } from './components/info/info-item/info-item.component';

@NgModule({
  declarations: [AppComponent, InfoComponent, SearchComponent, InfoItemComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [IpApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
