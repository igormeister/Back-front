import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-auction',
  templateUrl: './edit-auction.component.html',
  styleUrls: ['./edit-auction.component.scss']
})

export class EditAuctionComponent implements OnInit {

  auctionForm: FormGroup;
  _id = '';
  price: '';
  name: '';
  picture_url: '';
  description: '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAuction(this.route.snapshot.params.id);
    this.auctionForm = this.formBuilder.group({
      'price' : [null, Validators.required],
      'name': [null, Validators.required],
      'picture_url': [null, Validators.required],
      'description': [null, Validators.required],
    });
  }

  getAuction(id: any) {
  this.api.getAuction(id).subscribe((data: any) => {
    this._id = data._id;
    this.auctionForm.setValue({
      price: data.price,
      name: data.name,
      picture_url: data.picture_url,
      description: data.description,
    });
  });
}

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.editAuction(this._id, this.auctionForm.value).subscribe((res: any) => {
      const id = this._id;
      this.isLoadingResults = false;
      this.router.navigate(['/get-auction', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  auctionDetails() {
    this.router.navigate(['/get-auction', this._id]);
  }

}
