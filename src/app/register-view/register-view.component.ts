import { Component, OnInit } from '@angular/core';
import { User } from '../shared/services/user';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
