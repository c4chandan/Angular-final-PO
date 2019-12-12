import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,private location: LocationStrategy) { 

     history.pushState(null, null, window.location.href);
      this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);
      }); 
  }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get("userEmail");
  }


  get password() {
    return this.loginForm.get("userPass");
  }


  loginForm = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    userPass: new FormControl('', Validators.required)
  });

  onSubmitValidate() {
    console.log(this.loginForm.value.userEmail, this.loginForm.value.userPass);
    this.authService.validateUser(this.loginForm.value.userEmail, this.loginForm.value.userPass).subscribe(
      data => {
        let userObj = data;
        sessionStorage.setItem("uObj", JSON.stringify(userObj));    //session 
       
       console.log(userObj);
          console.log(data.userRole);
        if (userObj.userRole == 'Seller') {
          this.router.navigate(['./sellerPage']);
        }
        else if (userObj.userRole == 'Buyer') {
          this.router.navigate(['./buyerPage']);

        }
        else if (userObj.userRole == 'Vendor') {
          this.router.navigate(['./vendorPage']);
        }
        else {
          alert("invalid!");
          this.router.navigate(['./']);
        }
      },
      error => {
        alert("Email and password is incorrect");
      });
  }
}
