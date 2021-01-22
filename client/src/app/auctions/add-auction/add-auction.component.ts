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
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.scss']
})

export class AddAuctionComponent implements OnInit {

  auctionForm: FormGroup;
  auction_uuid: '';
  price: '';
  user_uuid: '';
  name: '';
  picture_url: '';
  description: '';
  redeemed: null;
  time: '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.auctionForm = this.formBuilder.group({
      'auction_uuid' : [uuidv4(), Validators.required],
      'price' : [null, Validators.required],
      'user_uuid': [uuidv4(), Validators.required],
      'name': [null, Validators.required],
      'picture_url': [null, Validators.required],
      'description': [null, Validators.required],
      'redeemed': false,
      'time': 100
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addAuction(this.auctionForm.value).subscribe((res: any) => {
      const id = res._id;
      this.isLoadingResults = false;
      this.router.navigate(['/get-auction/', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
