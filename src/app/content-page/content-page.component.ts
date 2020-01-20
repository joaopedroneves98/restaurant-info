import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { faMapMarkedAlt, faAsterisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  faMapMarkedAlt = faMapMarkedAlt;
  faAsterisk = faAsterisk;

  params: any;

  pageData: any;

  components = [];

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
      this.pageData = this.pageService.getPage(this.params.slug);
      this.components = this.pageData.components;
    });
  }

}
