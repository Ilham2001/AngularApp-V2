import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  validateForm!: FormGroup;

  user = new User;

  login = new FormControl('');
  password = new FormControl('');


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.login.value);
    console.log(this.password.value);
  }

}
