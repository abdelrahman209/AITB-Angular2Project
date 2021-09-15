import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../latest-news.service';
@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  news : any= [];
  constructor(public latestNews: LatestNewsService) { }

  ngOnInit(): void {
    this.latestNews.getEgyptNews().subscribe((data)=>{
      this.news = data.articles; //ashan howa feh el keys bto3i

      //console.log(this.news);

    });
    
  }

}
