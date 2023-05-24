import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppMainComponent } from './app.main.component';

import { LoginComponent } from './components/login/login.component';
import {StackedBarChartComponent} from "./components/stacked-bar-chart/stacked-bar-chart.component";
import {PieChartComponent} from "./components/pie-chart/pie-chart.component";
import {CandidatsComponent} from "./components/candidats/candidats.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'stacked-bar-chart', component: StackedBarChartComponent},
                    {path: 'pie-chart', component: PieChartComponent},
                    {path: 'candidats', component: CandidatsComponent},


                ],
            },
            {path:'login', component: LoginComponent},

            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
