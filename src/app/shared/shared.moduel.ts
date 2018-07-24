import { NgModule } from "@angular/core";

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from "src/app/shared/sidebar/sidebar.component";
import { BreadcrumbsComponent } from "src/app/shared/breadcrumbs/breadcrumbs.component";
import { NopagefoundComponent } from "src/app/shared/nopagefound/nopagefound.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
    ]
})

export class SharedModule {}