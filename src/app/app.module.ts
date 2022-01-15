import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GitsearchComponent, SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSService } from './user-s.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchComponent,
    GitsearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
