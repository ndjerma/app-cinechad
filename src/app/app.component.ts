import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './components/auth/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-cinechad';

  profileOpened: boolean = false;

  constructor (public authService: AuthService, public dialog: MatDialog) {}

  openProfile(userId: number) {
    this.profileOpened = true; 

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "50vw",
      maxWidth: "50vw",
      data: {user: this.authService.getUserById(userId)}
    });

    profileDialog.afterClosed().subscribe(r => {
      this.profileOpened = false;
    })
  }
}