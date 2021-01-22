import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'
import { v4 as uuidv4 } from 'uuid';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
};

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  user_uuid = '';
  user_login = '';
  password = '';
  card = '';
  admin = false;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.FormBuilder.group({
      'user_uuid' : [uuidv4(), Validators.required],
      'user_login' : [null, Validators.required],
      'password' : [null, Validators.required],
      'card' : [null, Validators.required],
      'admin' : false,
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addUser(this.userForm.value).subscribe((res: any) =>{
      const id = res.user_uuid;
      this.isLoadingResults = false;
      this.router.navigate(['/get-user', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
