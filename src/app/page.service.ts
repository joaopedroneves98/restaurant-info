import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private http: HttpClient
  ) { }

  pages = [];

  getUrl(component) {
    switch (component) {
      case 'headers_log_in':
        return isDevMode() ? 'http://localhost:1337/headersloggedins/' : 'https://restaurant-cms-strapi.herokuapp.com/headersloggedins/';

      case 'headers_log_out':
        return isDevMode() ? 'http://localhost:1337/headersloggedouts/' : 'https://restaurant-cms-strapi.herokuapp.com/headersloggedouts/';

      case 'headers':
        return isDevMode() ? 'http://localhost:1337/headers/' : 'https://restaurant-cms-strapi.herokuapp.com/headers/';

      case 'pages':
        return isDevMode() ? 'http://localhost:1337/paginas/' : 'https://restaurant-cms-strapi.herokuapp.com/paginas/';

    }
  }

  getTestHeaders() {
    return this.http.get(this.getUrl('headers'));
  }

  setPages(pages) {
    this.pages = pages;
  }

  getPage(slug: string) {
    let selectedPage: any;
    this.pages.forEach(page => {
      if (page.slug === slug) {
        selectedPage = page;
      }
    });
    return selectedPage;
  }

  getPages() {
    return this.http.get(this.getUrl('pages'));
  }

  getLoggedInHeaders() {
    return this.http.get(this.getUrl('headers_log_in'));
  }

  getLoggedOutHeaders() {
    return this.http.get(this.getUrl('headers_log_out'));
  }
}
