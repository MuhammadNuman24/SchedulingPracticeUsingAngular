import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
img='../../assets/ face.png';
  constructor() { }

  ngOnInit(): void {
  }

}
