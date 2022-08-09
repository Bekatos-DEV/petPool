import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-advertdetail',
  templateUrl: './advertdetail.page.html',
  styleUrls: ['./advertdetail.page.scss'],
})
export class AdvertdetailPage implements OnInit {
  id: any;
  advert: any = [];
  constructor(private actRoute: ActivatedRoute, public apiService: ApiService) {
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    console.log(this.id);
    this.getAdvert();
  }
  getAdvert() {
    this.apiService.getAdverts(this.id).subscribe(
      (res: any) => {
        console.log('Success', res);
        this.advert = res;
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }
}
