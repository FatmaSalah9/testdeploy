import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/EntityServices/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {}

  searchUsers(userId: any) {

    this.userService.searchUserById(userId.target.value).subscribe(user => {
      if (user) {
        this.router.navigate(['/user', user.id]);
      }
    });
  }
}
