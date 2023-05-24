import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import {SharedService} from "./shared/shared.service";

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <ng-container *ngFor="let child of item.items">
                            <ng-container *ngIf="child.principal">
                                <li app-menuitem [item]="child" [index]="i" role="none"></li>
                            </ng-container>
                            <ng-container *ngIf="!child.principal">
                                <li app-menuitem *ngIf="child.parent == activeMenu"  [item]="child" [index]="i" role="none"></li>
                            </ng-container>

                        </ng-container>

                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
    activeMenu:string;

    constructor(public appMain: AppMainComponent, public shared:SharedService) { }

    ngOnInit() {
        this.shared.activeMenu.subscribe({
            next: activeMenu =>{this.activeMenu = activeMenu;}
        })
        this.model = [
            {label: 'Accueil', icon: 'pi pi-fw pi-home', items: [
                    {label: 'Stacked bar chart', icon: 'pi pi-database', principal:true, routerLink: ['stacked-bar-chart']},
                    {label: 'Pie Chart', icon: 'pi pi-database', principal:true, routerLink: ['pie-chart']},
                    {label: 'Liste Candidat', icon: 'pi pi-database', principal:true, routerLink: ['candidats']},
                ]},
            // {
            //     label: 'Minimum de données',
            //     items:[
            //         {label: 'Minimum de données',icon: 'pi pi-database', items:[
            //                 {label: 'Ajouter Nouveau', icon: 'pi pi-fw pi-plus', routerLink: ['minimum-donnees']},
            //                 {label: 'Consulter les minimum de données', icon: 'pi pi-server', routerLink: ['consult-donnees']},
            //             ]}
            //     ]
            // },
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
