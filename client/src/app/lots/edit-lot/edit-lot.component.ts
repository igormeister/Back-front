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
  selector: 'app-edit-lot',
  templateUrl: './edit-lot.component.html',
  styleUrls: ['./edit-lot.component.scss']
})

export class EditLotComponent implements OnInit {

  lotForm: FormGroup;
  _id = '';
  name: '';
  picture_url: '';
  description: '';
  price: '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getLot(this.route.snapshot.params.id);
    this.lotForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'picture_url': [null, Validators.required],
      'description': [null, Validators.required],
      'price' : [null, Validators.required]
    });
  }

  getLot(id: any) {
  this.api.getLot(id).subscribe((data: any) => {
    this._id = data._id;
    this.lotForm.setValue({
      name: data.name,
      picture_url: data.picture_url,
      description: data.description,
      price: data.price
    });
  });
}

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.editLot(this._id, this.lotForm.value).subscribe((res: any) => {
      const id = this._id;
      this.isLoadingResults = false;
      this.router.navigate(['/get-lot', id]);
    }, (err: any) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  lotDetails() {
    this.router.navigate(['/get-lot', this._id]);
  }

}
