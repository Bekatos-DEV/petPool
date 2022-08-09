import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.page.html',
  styleUrls: ['./adoption.page.scss'],
})
export class AdoptionPage implements OnInit {
  adverts: any = [];
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.getAdopts();
  }
  getAdopts() {
    this.apiService.getAdopts().subscribe(
      (res: any) => {
        console.log('Success =>', res);
        this.adverts = res;
      },
      (error: any) => {
        console.log('Error =>', error);
      }
    );
  }
}
