import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribeComponent } from 'src/app/shared/components/auto-unsubscribe/auto-unsubscribe.component';
import { Article, CountryDetails, KeyVal, NewsApiRes } from './model/news.interface';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends AutoUnsubscribeComponent implements OnInit {

  newses: Article[];
  countryList: KeyVal[];
  defaultNewsCountry = "us";
  selectedCountry;

  constructor(private newsService: NewsService) {
    super();
   }

  ngOnInit(): void {
    const sub$ = this.newsService.getCountryDetails().subscribe((res: CountryDetails[]) => {
      this.countryList = res.map(data => {
        return {
          key: data.country,
          value: data.countryKey
        }
      });
      this.selectedCountry = this.countryList.find(data => data.value == this.defaultNewsCountry);
      this.getNews(this.selectedCountry.value);
    });
    this.addsub(sub$);
  }

  onChangeCountry(data) {
    this.getNews(data.value.value);
  }

  getNews(newsCountry: string = "us") {
    const sub$ = this.newsService.getNews(newsCountry).subscribe((res: NewsApiRes) => {
      this.newses = res.articles;
    });
    this.addsub(sub$);
  }
}
