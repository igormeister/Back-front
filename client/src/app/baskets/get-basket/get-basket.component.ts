import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Basket } from '../../basket';

@Component({
  selector: 'app-get-basket',
  templateUrl: './get-basket.component.html',
  styleUrls: ['./get-basket.component.scss']
})
export class GetBasketComponent implements OnInit {

  Basket: Basket = { _id: '', user_uuid: '', auction_in_progress: 0, number_of_lots: 0, lot_uuid: '', auction_uuid: '' };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getBasketDetails(this.route.snapshot.params.id);
  }

  getBasketDetails(id: any) {
    this.api.getBasket(id).subscribe((data: any) => {
      this.Basket = data;
      console.log(this.Basket);
      this.isLoadingResults = false;
    });
  }
}
