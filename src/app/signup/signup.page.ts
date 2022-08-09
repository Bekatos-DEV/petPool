import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userName: any;
  userMail: any;
  userPassword: any;
  confirm: any = '1';
  constructor(public apiService: ApiService) {}

  ngOnInit() {}
  signUp() {
    const data = {
      userName: this.userName,
      userMail: this.userMail,
      userPassword: this.userPassword,
      confirm: this.confirm,
    };
    this.apiService.signUp(data).subscribe(
      (res: any) => {
        console.log('SUCCESS', res);
      },
      (error: any) => {
        console.log('ERROR', error);
        console.log(data);
      }
    );
  }
}
