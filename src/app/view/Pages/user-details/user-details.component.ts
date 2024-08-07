import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/EntityServices/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: any;
  isLoading : boolean=true;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if(userId)
    this.userService.getUser(userId).subscribe(user => {
      this.user = user;
      this.isLoading=false
    },
    error => {
      this.isLoading = false;
      console.log(error);

    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
