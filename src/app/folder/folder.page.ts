import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public storage: Storage
  ) {}

  ngOnInit() {
    this.getStorage();
  }
  getStorage() {
    return this.storage.get('id').then((result) => {
      console.log(' func id : ', result);
      return result;
    });
  }
}
