import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friendList = [
    { nama: 'Desy', status: 'Add friend', img: "assets/img/1.jpg"},
    { nama: 'jichangwook', status: 'Unfriend', img: "assets/img/2.jpg"},
    { nama: 'Wi ha jon', status: 'Accept', img: "assets/img/3.jpg"},
    { nama: 'Park hae jin', status: 'Accept', img: "assets/img/4.jpg"},
    { nama: 'Park seo joon', status: 'Accept', img: "assets/img/5.jpg"},
  ];
}