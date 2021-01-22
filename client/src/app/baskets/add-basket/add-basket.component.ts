import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
};

@Component({
  selector: 'app-add-basket',
  templateUrl: './add-basket.component.html',
  styleUrls: ['./add-basket.component.scss']
})

export class AddBasketComponent implements OnInit {

  basketForm: FormGroup;
  user_uuid = '';
  auction_in_progress = '';
  number_of_lots = '';
  lot_uuid = '';
  auction_uuid = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.basketForm = this.FormBuilder.group({
      'user_login' : [null, Validators.required],
      'auction_in_progress' : [null, Validators.required],
      'number_of_lots' : [null, Validators.required],
      'lot_uuid' : [null, Validators.required],
      'auction_uuid' : [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addBasket(this.basketForm.value).subscribe((res: any) =>{
      const id = res._id;
      this.isLoadingResults = false;
      this.router.navigate(['/get-basket', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
