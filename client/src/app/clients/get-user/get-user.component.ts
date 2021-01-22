import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { Client } from '../../client';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {

  Client: Client = { _id: '', user_uuid: '', user_login: '', password: '', card: '', admin: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getUserDetails(this.route.snapshot.params.id);
  }

  getUserDetails(id: any) {
    this.api.getUser(id).subscribe((data: any) => {
      this.Client = data;
      console.log(this.Client);
      this.isLoadingResults = false;
    });
  }
}
