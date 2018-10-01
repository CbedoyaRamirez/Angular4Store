import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'lugares', component: AppComponent },
    { path: 'detalle', component: DetalleComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);