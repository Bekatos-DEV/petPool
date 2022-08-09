import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;
  constructor(public http: HttpClient, public storage: Storage) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  signUp(data) {
    return this.http.post('http://localhost:8888/pet_api/createUser.php', data);
  }
  getAdopts() {
    return this.http.get('http://localhost:8888/pet_api/getAdopts.php');
  }
  getFinds() {
    return this.http.get('http://localhost:8888/pet_api/getFinds.php');
  }
  getAdverts(id) {
    return this.http.get(
      'http://localhost:8888/pet_api/getAdvertbyid.php?id=' + id
    );
  }
  getUserbymail(mail) {
    return this.http.get(
      'http://localhost:8888/pet_api/getUserbymail.php?userMail=' + mail
    );
  }
}
