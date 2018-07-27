import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from 'src/app/pages/graficas1/graficas1.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { SharedModule } from '../shared/shared.moduel';


import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms'
import { IncrementadorComponent } from 'src/app/components/incrementador/incrementador.component';

//Temp
// gradicas ng charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


// In your App's module:


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        GraficoDonaComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
