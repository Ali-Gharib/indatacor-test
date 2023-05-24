import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss']
})
export class BienvenueComponent implements OnInit {
  constructor(private router: Router, private shared: SharedService) { }

  ngOnInit(): void {
  }
    goToCalculDetaille(){
      this.shared.activeMenu.next('calcul-etaille');
      // this.router.navigateByUrl('minimum-donnees')
    }
    goToMinimumDonnees(){
        this.shared.activeMenu.next('minimum-donnees');
        this.router.navigateByUrl('minimum-donnees')
    }
}
