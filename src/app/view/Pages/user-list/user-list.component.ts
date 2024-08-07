import { Component } from '@angular/core';
import { UserService } from '../../../services/EntityServices/user.service';
import { Router } from '@angular/router';
import { Iuser } from '../../../models/iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users !: Iuser[];
  isLoading=true;
currentPage=1;
numberOfPages=2;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.fetchUsersByPage(this.currentPage)
  }
  get pages(): number[] {
    return Array.from({ length: this.numberOfPages }, (_, index) => index + 1);
  }
fetchUsersByPage(pageNumber:number){
  this.userService.getUsers(pageNumber).subscribe(users => {
    this.users = users;
    this.isLoading=false;
  },
error=>{
  console.log('error',error);
  this.isLoading=false;

}
);
  console.log('num',this.currentPage);

}

navigateToPage(pageNumber:number){
  this.currentPage=pageNumber;
  this.fetchUsersByPage(this.currentPage)
}
  navigateToUserDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}
