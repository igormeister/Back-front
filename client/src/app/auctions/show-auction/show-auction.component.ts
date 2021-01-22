import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Auction } from '../../auction';

@Component({
  selector: 'app-show-auction',
  templateUrl: './show-auction.component.html',
  styleUrls: ['./show-auction.component.scss']
})
export class ShowAuctionComponent implements OnInit {

  auction: Auction = { _id: '', auction_uuid: '', price: 0, user_uuid: '', name: '', picture_url: '', description: '', redeemed: null, time: 0, };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getAuctionDetails(this.route.snapshot.params.id);
  }

  getAuctionDetails(id: any) {
    this.api.getAuction(id)
      .subscribe((data: any) => {
        this.auction = data;
        console.log(this.auction);
        this.isLoadingResults = false;
      });
  }

  deleteAuction(id: any) {
    this.isLoadingResults = true;
    this.api.deleteAuction(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/auctions']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
