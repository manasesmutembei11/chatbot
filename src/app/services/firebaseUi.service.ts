import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root'
})
export class FirebaseUIService {
    ui!: firebaseui.auth.AuthUI;

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(() => {
            if (!this.ui) {
                this.ui = new firebaseui.auth.AuthUI(firebase.auth());
            }
        });
    }

    // Method to start FirebaseUI
    startFirebaseUI(elementId: string, uiConfig: firebaseui.auth.Config) {
        if (this.ui) {
            this.ui.start(elementId, uiConfig);
        }
    }
}