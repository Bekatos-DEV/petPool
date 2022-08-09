import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Anasayfa', url: '/folder', icon: 'apps' },
    { title: 'Profil', url: '/profile', icon: 'person' },
    { title: 'İlan Ekle', url: '/advert', icon: 'add' },
    { title: 'Mesajlar', url: '/messages', icon: 'chatbubbles' },
    { title: 'Eşleşmeler', url: '/matches', icon: 'heart' },
  ];

  constructor(private storage: Storage, private router: Router) {}
  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
    this.storage.get('id').then((val) => {
      if (val) {
        this.router.navigate(['/folder']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
  logout() {
    this.storage.remove('id');
    console.log('clear');
    this.router.navigate(['/login']);
  }
}
