import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppMainComponent } from './app.main.component';

import { LoginComponent } from './components/login/login.component';
import {StackedBarChartComponent} from "./components/stacked-bar-chart/stacked-bar-chart.component";
import {PieChartComponent} from "./components/pie-chart/pie-chart.component";
import {CandidatsComponent} from "./components/candidats/candidats.component";
import { DataTableComponent } from './datatable-page/datatable-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

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
                    { path: '', redirectTo: '/datatable', pathMatch: 'full' },
                    { path: 'datatable', component: DataTableComponent  },
                    { path: 'upload', component: UploadPageComponent }


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
