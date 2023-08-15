import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './shared/shared.module';

// FIREBASE
import { environment } from 'src/environments/environment'; // CONECTAMOS CON LA BD
import { AngularFireModule } from '@angular/fire/compat'; // IMPORTACIÓN FIRESTORE (DB nube)
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // IMPORTACIÓN AUTENTIFICACIÓN
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // IMPORTACIÓN STORAGE (img)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // IMPORTAR COMPONENTES GLOBALES
    SharedModule,
    // MÓDULOS DE FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig), // INICIALIZA FIREBASE
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
