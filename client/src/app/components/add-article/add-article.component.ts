import {Component, OnInit, Input} from '@angular/core';
import {ArticleApi} from "../../sdk/services/custom";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  @Input() fetchArticles;

  _title: string;
  _body: string;

  constructor(private articleApi: ArticleApi) {
  }

  ngOnInit() {
  }

  set title(title) {
    this._title = title;
  }

  set body(body) {
    this._body = body;
  }

  resetInput(){
    this.body = "";
    this.title = "";
  }


  onSubmit(event) {
    event.preventDefault()

    const title = this._title;
    const body = this._body;

    if (!title || !body) {
      alert("Add a title and/or article content. ");
    }

    const data = {
      title: title,
      body: body,
    };

    this.articleApi.patchOrCreate(data)
      .subscribe(res => {
        alert(`Article ${title} has been added`);
        this.resetInput();

        // this does not update the site, therefor unfortunately i used window.location.reload();
        this.fetchArticles();
        window.location.reload();
      });

  }
}
