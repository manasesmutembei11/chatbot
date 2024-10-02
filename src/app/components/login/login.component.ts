import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Start FirebaseUI when the component initializes
    this.authService.startFirebaseUi('firebaseui-auth-container');
  }

}
