import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-explore-component',
  templateUrl: './explore-component.component.html',
  styleUrls: ['./explore-component.component.css']
})
export class ExploreComponentComponent implements OnInit {
  servicesData = [
    {
      iconClass : "fas fa-gem fa-5x",
      heading : "Study Theme",
      description : "Our themes are updated regularly to keep them bug free"

    },
    {
      iconClass : "fas fa-laptop fa-5x",
      heading : "Up to date",
      description : "Our themes are updated regularly to keep them bug free"

    },
    {
      iconClass : "fas fa-globe fa-5x",
      heading : "Ready to publish",
      description : "Our themes are updated regularly to keep them bug free"

    },
    {
      iconClass : "fas fa-heart fa-5x",
      heading : "Made with love",
      description : "Our themes are updated regularly to keep them bug free"

    },

  ];

  exploreData = [
    {
      img : "../../assets/img/br1.jpg",
      title: "Explore"
    },
    {
      img : "../../assets/img/br2.jpg",
      title: "Experience"
    }
    

  ]
  constructor(public testService : TestService) {

    testService.sayWelcome(`Explore Component`);
   }

  ngOnInit(): void {
  }

}
