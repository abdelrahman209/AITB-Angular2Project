import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  workImages = [
    {imgUrl : "../../assets/img/portfolio/thumbnails/1.jpg", alt:""},
    {imgUrl : "../../assets/img/portfolio/thumbnails/2.jpg", alt:""},
    {imgUrl : "../../assets/img/portfolio/thumbnails/3.jpg", alt:""},
    {imgUrl : "../../assets/img/portfolio/thumbnails/4.jpg", alt:""},
    {imgUrl : "../../assets/img/portfolio/thumbnails/5.jpg", alt:""},
    {imgUrl : "../../assets/img/portfolio/thumbnails/6.jpg", alt:""},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
