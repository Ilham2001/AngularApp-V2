import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { User } from './models/user';
import { AppService } from './services/app.service';
import { AccessModeService } from './services/access-mode.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean;

  isCollapsed = false;
  submitted = false;

  search = new FormControl('');

  data: any;
  token: any;
  userData: any;
  authenticatedUser: User;

  login_form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private router: Router, private appService: AppService, private searchService: SearchService) { }

  loginForm() {
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loginForm();

    if (localStorage.getItem('token')) {

      this.loggedIn = true;
      console.log("logged in");
      this.token = localStorage.getItem('token');
      this.userData = jwt_decode(this.token);
      //console.log(this.userData);
      this.getAuthenticatedUser();
    }
    else {
      this.loggedIn = false;
      console.log("not logged in");
      //window.location.reload();
      this.token = localStorage.getItem('token');
      //console.log(this.token);

    }
  }

  onSubmit() {
    console.log(this.search.value);
    this.searchService.searchResult(this.search.value).subscribe(
      response => {
        this.router.navigate(['search_result']);
        this.searchService.sendUpdate(response);
      }
    )
  }

  get f() {
    return this.login_form.controls;
  }

  onSubmitLogin() {
    this.submitted = true;
    if (this.login_form.invalid) {
      return;
    }
    this.userService.login(this.login_form.value).subscribe(response => {
      this.data = response;
      if (this.data.status === 1) {
        //console.log(response);
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.loggedIn = true;
        this.router.navigate(['home'])
          .then(() => {
            window.location.reload(); //Navigate and refresh page
          });
      }
      else {
        console.log("Echec, veuillez réssayer");
      }
    })
  }

  logout() {
    if (this.loggedIn === true) {
      this.loggedIn = false;
    }
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
      .then(() => {
        window.location.reload(); //Navigate and refresh page
      });
  }

  getAuthenticatedUser() {
    this.userService.getUser(this.userData.id).subscribe(
      (response: User) => {
        this.authenticatedUser = response;
        //console.log(this.authenticatedUser);
        /* Store the id of the authenticated user in the service  */
        this.appService.setAuthenticatedUser(this.authenticatedUser.id);

      }
    )
  }
}
