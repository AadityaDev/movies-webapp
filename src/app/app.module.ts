import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatRadioModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatRippleModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatPaginatorModule
} from '@angular/material';
import { GuestnavComponent } from './auth/guestnav/guestnav.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPaasswordComponent } from './auth/forgot-paassword/forgot-paassword.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesService } from './services/movie/movies.service';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestnavComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPaasswordComponent,
    DashboardComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatRippleModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
