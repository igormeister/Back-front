import { Component, OnInit} from '@angular/core'
import { ApiService } from '../api.service';
import { Basket } from '../basket';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.scss']
})
export class BasketsComponent implements OnInit {

  displayedColumns: string[] = ['auction_in_progress', 'number_of_lots'];
  data: Basket[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBaskets().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
