import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    activeMenu:BehaviorSubject<string> = new BehaviorSubject<string>('minimum-donnees');
  constructor() { }
}
