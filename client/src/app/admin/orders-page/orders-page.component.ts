import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  constructor(public router: Router) { }

  gonext = () => {
this.router.navigate(['/admin','add']);
  }
  ngOnInit(): void {
  }

}
