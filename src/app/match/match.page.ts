/* eslint-disable @typescript-eslint/prefer-for-of */
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Gesture, GestureController, IonCard, Platform } from '@ionic/angular';
@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements AfterViewInit {
  animals = [
    {
      name: 'Dog 1',
      img: '../../assets/imgs/1.jpg',
      age: 0,
      gender: 'Golden',
      power: 0,
    },
    {
      name: 'Dog 2',
      img: '../../assets/imgs/2.jpg',
      age: 0,
      gender: 'Boo',
      power: 0,
    },
    {
      name: 'Dog 3',
      img: '../../assets/imgs/3.jpg',
      age: 0,
      gender: 'Morkie',
      power: 0,
    },
    {
      name: 'Dog 4',
      img: '../../assets/imgs/4.jpg',
      age: 0,
      gender: 'Cane Corso',
      power: 0,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;
  longPressActive = false;
  constructor(
    private gestureCtrl: GestureController,
    private zone: NgZone,
    private platform: Platform
  ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {}
  ngAfterViewInit() {
    const cardArray = this.cards.toArray();
    this.useLongPress(cardArray);
    this.tinderSwipe(cardArray);
  }
  useLongPress(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'long-press',
        onStart: (ev) => {
          this.longPressActive = true;
          this.increasePower(i);
        },
        onEnd: (ev) => {
          this.longPressActive = false;
        },
      });
      gesture.enable(true);
    }
  }
  increasePower(i) {
    console.log();
    setTimeout(() => {
      if (this.longPressActive) {
        this.zone.run(() => {
          this.animals[i].power++;
          this.increasePower(i);
        });
      }
    }, 200);
  }
  tinderSwipe(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: (ev) => {},
        onMove: (ev) => {
          card.nativeElement.style.transform = `translateX(${
            ev.deltaX
          }px) rotate(${ev.deltaX / 10}deg)`;
        },
        onEnd: (ev) => {
          card.nativeElement.style.transition = '1s ease-out';
          if (ev.deltaX > 150) {
            // swipe to right
            card.nativeElement.style.transform = `translateX(${
              +this.platform.width() * 2
            }px) rotate(${ev.deltaX / 2}deg)`;
          } else if (ev.deltaX < -150) {
            // swipe to left
            card.nativeElement.style.transform = `translateX(-${
              +this.platform.width() * 2
            }px) rotate(${ev.deltaX / 2}deg)`;
          } else {
            card.nativeElement.style.transform = '';
          }
        },
      });
      gesture.enable(true);
    }
  }
}
