import {Injectable} from '@angular/core';

@Injectable()

export class NewsServiceUser {
  NEWS_URL = 'https://newsapi.org/v2/everything?q=fitness&language=en&sortBy=publishedAt&apiKey=742df388eea4446bb3599c7cee9a5602';
  PUSH_URL = 'https://node-project-final-server-sw.herokuapp.com/api/news';

  findAllNews() {
    return fetch(this.NEWS_URL)
      .then(response => response.json());
  }

  findNewsByTopic(topic) {
    return fetch(this.NEWS_URL.replace('fitness', topic))
      .then(response => response.json());

  }

  findAllPushedNews() {
    return fetch(this.PUSH_URL)
      .then(response => response.json());
  }

  createNews(title, author, url, urlToImage, publishedAt ) {
    const story = {
      title,
      author,
      url,
      urlToImage,
      publishedAt,

    };
    return fetch(this.PUSH_URL , {
        method: 'post',
        body: JSON.stringify(story),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  deleteNews(newsId) {


    return fetch(this.PUSH_URL + '/' + newsId, {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      }
    );

  }


}
