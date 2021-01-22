import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Lot } from '../../lot';

@Component({
  selector: 'app-show-lot',
  templateUrl: './show-lot.component.html',
  styleUrls: ['./show-lot.component.scss']
})
export class ShowLotComponent implements OnInit {

  lot: Lot = { _id: '', lot_uuid: '', user_uuid: '', user_login: '', name: '', picture_url: '', description: '', redeemed: null, price: 0, };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getLotDetails(this.route.snapshot.params.id);
  }

  getLotDetails(id: any) {
    this.api.getLot(id)
      .subscribe((data: any) => {
        this.lot = data;
        console.log(this.lot);
        this.isLoadingResults = false;
      });
  }

  deleteLot(id: any) {
    this.isLoadingResults = true;
    this.api.deleteLot(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/lots']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
