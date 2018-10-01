import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ResaltarDirective } from "./directives/resaltar.directive";
import { ContarClicksDirective } from "./directives/contar-clicks.directive";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from "@angular/router";
import { DetalleComponent } from "./detalle/detalle.component";
import { LugaresComponent } from "./lugares/lugares.component";
import { ContactoComponent } from './contacto/contacto.component';
import {LugaresService} from "./services/lugares.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBnYmFLyuACAjv9vci7UFyPizP-s3vHuas",
  authDomain: "tienda-19dd8.firebaseapp.com",
  databaseURL: "https://tienda-19dd8.firebaseio.com",
  storageBucket: "tienda-19dd8.appspot.com",
  messagingSenderId: "783161463599"
};

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
