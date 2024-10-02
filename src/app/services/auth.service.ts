import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private ui!: firebaseui.auth.AuthUI;

    constructor(private afAuth: AngularFireAuth) {
        this.initializeFirebaseUI();
    }

    private initializeFirebaseUI() {
        this.afAuth.authState.subscribe(() => {
            if (!this.ui) {
                this.ui = new firebaseui.auth.AuthUI(firebase.auth());
            }
        });
    }

    startFirebaseUi(elementId: string) {
        const uiConfig: firebaseui.auth.Config = {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Add other configuration options as needed
        };

        if (this.ui) {
            this.ui.start(`#${elementId}`, uiConfig);
        } else {
            console.error('FirebaseUI not initialized');
        }
    }
}