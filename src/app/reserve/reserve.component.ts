import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: "cc-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"]
})
export class ReserveComponent implements OnInit {
  reservationForm: FormGroup;

  marques = [
    "adidas",
    "celio",
    "jules",
    "nike",
    "puma",
  ];

  couleurs = [
    "noir",
    "jaune",
    "bleu",
    "gris",
    "vert",
    "rouge",
  ];

  types = [
    "ville",
    "sport",
    "soirée",
    "travail",
  ];

  matieres = [
    "tissu",
    "cuir"
  ];

  prix: number;


  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): any {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: "",
      marque: 1,
      type: "",
      matiere: "",
      prix: "",
      couleur: ""
    });
  }

  saveReservation() {
    if(this.reservationForm.valid) {
      console.log(this.reservationForm);
      this.httpClient
      .post('http://127.0.0.1:8000/chaussures/create', this.reservationForm.value)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }
  }
}
