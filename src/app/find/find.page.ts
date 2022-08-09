import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  adverts: any = [];
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.getFinds();
  }
  getFinds() {
    this.apiService.getFinds().subscribe(
      (res: any) => {
        console.log('Success =>', res);
        this.adverts = res;
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }
}
