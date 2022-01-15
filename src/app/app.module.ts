import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSService } from './user-s.service';
import { GitsearchComponent } from  './search/search.component';
import { SearchFormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
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
