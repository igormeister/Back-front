import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { v4 as uuidv4 } from 'uuid';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.scss']
})

export class AddLotComponent implements OnInit {

  lotForm: FormGroup;
  lot_uuid: '';
  user_uuid: '';
  user_login: '';
  name: '';
  picture_url: '';
  description: '';
  redeemed: null;
  price: '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.lotForm = this.formBuilder.group({
      'lot_uuid' : [uuidv4(), Validators.required],
      'user_uuid' : 0,
      'user_login' : 'login',
      'name': [null, Validators.required],
      'picture_url': [null, Validators.required],
      'description': [null, Validators.required],
      'redeemed': false,
      'price' : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addLot(this.lotForm.value).subscribe((res: any) => {
      const id = res._id;
      this.isLoadingResults = false;
      this.router.navigate(['/get-lot', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
