import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username$!: Observable<string>;

  constructor() {
    this.username$ = 'Giovanni Amorim'
  }

  ngOnInit() {}
}
