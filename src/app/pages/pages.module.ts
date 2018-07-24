import { NgModule } from '@angular/core';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from 'src/app/pages/graficas1/graficas1.component';
import { PagesComponent } from 'src/app/pages/pages.component';
import { SharedModule } from '../shared/shared.moduel';

import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
