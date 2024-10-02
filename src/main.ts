import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AppModule } from './app/app.module';
import { initializeApp } from '@angular/fire/app';
import { firebaseConfig } from './environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

initializeApp(firebaseConfig);
bootstrapApplication(AppModule, appConfig,

)
  .catch((err) => console.error(err));
