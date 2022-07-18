import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/65529753_620649305095788_7005592143725068288_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HFWzomuP1WgAX-YBhA4&_nc_oc=AQn7CbO-GOK3gZBlbKXo6sOCQX33JPayU6yU_4tzwrAsCbia08lFJMm7-kP57lUcvpw&_nc_ht=scontent-ort2-1.xx&oh=00_AT_dVe-w68Bwqu5ekkq0iPOUnGVQiVxk1KxwFpxT7HcX4g&oe=62FA3F05';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}