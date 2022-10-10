import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PassangerManagerComponent } from './components/passanger-manager/passanger-manager.component';
import { AddPassangerComponent } from './components/add-passanger/add-passanger.component';
import { EditPassangerComponent } from './components/edit-passanger/edit-passanger.component';
import { ViewPassangerComponent } from './components/view-passanger/view-passanger.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PassangerManagerComponent,
    AddPassangerComponent,
    EditPassangerComponent,
    ViewPassangerComponent,
    SpinnerComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
