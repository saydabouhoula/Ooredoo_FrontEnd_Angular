import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showConfirmDialog = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.showConfirmDialog = true;
  }

  onConfirmDialogResult(result: boolean) {
    this.showConfirmDialog = false;
    if (result) {
      this.authService.logout();
    }
  }
}
