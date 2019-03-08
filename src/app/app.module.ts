// BrowserModule, NgModule, FormModule are internal Angular modules.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
        MatButtonModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatAutocompleteModule, 
        MatOptionModule 
      } from '@angular/material';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

// Custom components are imported from their definition files
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CuSearchComponent } from './cu-search/cu-search.component';
import { IDOLService } from './services/IDOLService';

/**
 * Custom components are included in the declarations array of NgModule decorator
 */
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardComponent,
    CuSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatOptionModule,
    AutoCompleteModule,
    ButtonModule
  ],
  providers: [
    IDOLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

