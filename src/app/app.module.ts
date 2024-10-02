import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { firebaseConfig } from '../environment';// Adjust if needed
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirebaseUIService } from './services/firebaseUi.service';
import { AuthService } from './services/auth.service';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        AngularFireModule.initializeApp(firebaseConfig), // Adjust if using .env or other methods
        AngularFireAuthModule, // Include AngularFireAuthModule
        BrowserModule,
        AngularFirestoreModule,
        AngularFireDatabaseModule,


        CommonModule,
        RouterModule.forRoot(routes),
    ],
    providers: [RouterModule, RouterOutlet, FirebaseUIService, AngularFireAuthModule, AngularFireModule, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
