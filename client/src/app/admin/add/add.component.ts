import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  constructor(
    public router: Router
  ) {}

  myform: FormGroup;

  gonext = () => {
    if (this.myform.invalid){
      return;
    }

    const lot = {
      type: this.myform.value.type,
      title: this.myform.value.title,
      photo: this.myform.value.photo,
      info: this.myform.value.info,
      price: this.myform.value.price,
    }

    this.router.navigate(['/admin', 'orders']);
    console.log(this.myform)
  }

  ngOnInit() {
    this.myform = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

}
