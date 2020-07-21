import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ReserveComponent } from "./reserve/reserve.component";
import { MainDashComponent } from "./main-dash/main-dash.component";
import { ScheduleComponent } from './schedule/schedule.component';
import { PhoneComponent } from './phone/phone.component';
import { HomeComponent } from './home/home.component';
import { TableArticlesComponent } from './table-articles/table-articles.component';

const routes: Routes = [
  { path: "", component: ScheduleComponent },
  { path: "reserve", component: ReserveComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ReserveComponent,
    MainDashComponent,
    ScheduleComponent,
    PhoneComponent,
    TableArticlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},],
  bootstrap: [AppComponent],
  exports:[ MatTableModule ]

})
export class AppModule {}
