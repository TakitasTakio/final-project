import { Component, OnInit } from '@angular/core';
import {NewsServiceUser} from '../services/news.service.user';
import {AdminLoginServiceUser} from '../services/admin.login.service.user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {

  news = [];
  topic = '';
  storys = [];
  story = {};
  title;
  author;
  url;
  urlToImage;
  publishedAt;
  newsTitle = '';
  selectedNewsTitle = '';
  selectedNewsAuthor = '';
  selectedNewsUrl = '';
  selectedNewsUrlToImage = '';
  selectedStoryId = 0;
  selectedNewsPublishedAt = '';

  searchTopic(topic) {
    this.service.findNewsByTopic(topic)
      .then(news => this.news = news);
  }

  loadPushNews() {
    this.service.findAllPushedNews()
      .then(storys => this.storys = storys);
  }

  clickNews(newsTitle) {
    this.selectedNewsTitle = newsTitle;
  }

  createNews(title, author, url, urlToImage, publishedAt) {
    this.service.createNews(title, author, url, urlToImage, publishedAt)
      .then( () => {
        this.loadPushNews();
      });

  }

  deleteNews(storyId) {
    this.selectedStoryId = storyId;
    this.service.deleteNews(storyId)
      .then( () => {
        this.loadPushNews();
      });
  }

  logout() {
    this.serviceII
      .logout()
      .then(() => this.router.navigate(['adminlogin']));
  }

  constructor(
    private service: NewsServiceUser,
    private serviceII: AdminLoginServiceUser,
    private router: Router,
  ) { }

  ngOnInit() {
    this.service.findAllNews()
      .then(news => this.news = news );
    this.service.findAllPushedNews()
      .then(storys => this.storys = storys);
  }

}
