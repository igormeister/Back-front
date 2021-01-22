import { Router} from '@angular/router';
//import { AuthService } from './../../Common/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Validator } from '@angular/forms';


type NewType = FormGroup;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
myform: NewType;
submitted = false;


  constructor(
    //public auth: AuthService,
    public router: Router,
  ) {
    this.myform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
   }

  ngOnInit() : void {

    }

  submit() {
    if ( this.myform.invalid){
      return;
    }

    this.submitted = true;

    const user = {
      email: this.myform.value.email,
      password: this.myform.value.password,
    }

    
   /* this.auth.login(user).subscribe( res => {
      this.form.reset;
      this.router.navigate(['/admin','dashboard']);
      this.submitted = false;
      }, () => {
        this.submitted = false;
      } );*/
  }
  gonext = () => {
    this.router.navigate(['/admin', 'dashboard']);
  }
}
