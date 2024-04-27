import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'toDoApp para SD';
  displayName = '';
  constructor(public userService: UserService, public router: Router) {}
  ngOnInit(): void {
    console.log('ngOnInit: navbar');
    this.userService.getUser().subscribe({
      next: (user) => {
        this.displayName = user.displayName;
      },
      error: (err) => {
        this.router.navigateByUrl('/login');
        console.error('Error cargando datos del usuario');
        console.log(err);
      },
    });
  }
}
