import { Injectable } from '@angular/core';
import {MinimumDonnees} from "../model/minimumDonnees.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MinimumDonneesService {
items: MinimumDonnees[];
traitement: string = '';
  constructor() {
      this.items = [];
      this.items.push(new MinimumDonnees(1,15.05,784.02,48.00,45.78,23,'Oui',null))
      this.items.push(new MinimumDonnees(2,15.242,34.23,64.0220,34.65,2,'Non',null))
  }

  getAll(){
      return this.items;
  }
  add(itme: MinimumDonnees){
      this.items.push(itme);
  }
  edit(id:number, itme:MinimumDonnees){
      this.items.findIndex(item =>{ item.id == id})
  }
}
