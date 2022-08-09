import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solidarity',
  templateUrl: './solidarity.page.html',
  styleUrls: ['./solidarity.page.scss'],
})
export class SolidarityPage implements OnInit {
  animals = [
    {
      name: 'Dog 1',
      img: '../../assets/imgs/1.jpg',
      age: 0,
      gender: 'Golden',
      power: 0,
      description:
        'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory',
    },
    {
      name: 'Dog 2',
      img: '../../assets/imgs/2.jpg',
      age: 0,
      gender: 'Boo',
      power: 0,
      description:
        'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory',
    },
    {
      name: 'Dog 3',
      img: '../../assets/imgs/3.jpg',
      age: 0,
      gender: 'Morkie',
      power: 0,
      description:
        'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory',
    },
    {
      name: 'Dog 4',
      img: '../../assets/imgs/4.jpg',
      age: 0,
      gender: 'Cane Corso',
      power: 0,
      description:
        'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota Madison was named the capital of the Wisconsin Territory',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
