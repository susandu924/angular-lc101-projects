import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://launchcode.instructure.com/courses/43', 'https://www.facebook.com/media/set/?set=a.622315844929134&type=3'];
  constructor() { }

  ngOnInit() {
  }

}
