import { Router} from '@angular/router';
//import { AuthService } from './../../Common/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Validator } from '@angular/forms';

  /* const confirmPasswordValidator = (controlToCompare: AbstractControl) => 
  (control: AbstractControl) => {
    const controlValue = control.value;
    const anotherValue = controlToCompare.value
    if( controlValue!==anotherValue) return { confirmPassword: true } 
    return null;
}*/



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
myform: FormGroup;
submitted = false;


  constructor(
    //public auth: AuthService,
    public router: Router,
  ) {
    
   }

  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      conpassword: new FormControl(null, [Validators.required])
    });
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

