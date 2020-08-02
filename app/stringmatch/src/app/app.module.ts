import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringMatcherComponent } from './string-matcher/string-matcher.component';

import {MatInputModule} from '@angular/material/input'
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { reducer as stringMatchReducer } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringMatchService } from './services/string-match.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StringMatcherComponent
  ],
  imports: [
    MatInputModule,
    MatCommonModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        stringMatch: stringMatchReducer  
      }
    ),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [StringMatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
