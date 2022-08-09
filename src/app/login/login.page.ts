import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userMail: any;
  userPassword: any;
  user: any = [];
  constructor(
    public apiService: ApiService,
    public storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {}
  login() {
    this.apiService.getUserbymail(this.userMail).subscribe(
      (res: any) => {
        this.user = res;

        if (
          this.userMail === this.user[0].userMail &&
          this.userPassword === this.user[0].userPassword
        ) {
          console.log('Success', this.user);
          const userid = this.user[0].id;
          this.storage.set('id', userid);
          const id = this.getStorage();
          console.log('id : ', id);
          this.router.navigate(['/folder']);
        }
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }
  getStorage() {
    return this.storage.get('id').then((result) => {
      console.log(' func id : ', result);
      return result;
    });
  }
  clear() {
    this.storage.remove('id');
    console.log('clear');
  }
}
