import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { debounceTime, map, tap, switchMap, take } from "rxjs/operators";

import { ScheduleService } from "../services/schedule.service";
import { EveningEvent } from "../models/evening-event.interface";
import { DataSource } from '@angular/cdk/collections';





@Component({
  selector: "cc-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit, OnDestroy {
  result: EveningEvent[] = [];
  

  constructor(private scheduleService: ScheduleService) {}
  
  ngOnInit() {
    this.getAllEvents();
  }
  
  ngOnDestroy(): void {
  }

  getAllEvents() {
    this.scheduleService
      .getAllEvents()
      .subscribe(
        data => (this.result = data),
        err => console.error(err),
      );
  }
}
