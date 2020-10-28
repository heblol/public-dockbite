import {Component, Input, OnInit} from '@angular/core';
import {ReplyApi} from "../../sdk/services/custom/Reply";
import {Reply} from "../../sdk/models/Reply";
import {Article} from "../../sdk/models";
import {ArticleApi} from "../../sdk/services/custom";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() article: Article;
  replies: Reply[];


  _title: string;
  _body: string;

  constructor(private articleAPI: ArticleApi, private replyApi: ReplyApi) {
  }

  ngOnInit() {


  }

  public loadReplies(){
    console.log('this has been pressed. ')
    // this.articleAPI.getHasReplies(this.article.id)
    //   .subscribe(res => {
    //     console.log("RESPONSE ", res)
    //     this.replies = res;
    //   })
  }


  set title(title: string) {
    this._title = title;
  }

  set body(body: string) {
    this._body = body;
  }

  createReply(id) {

    console.log("Adding a reply")

    const data = {
      "title": "GENERATED_TITLE",
      "body": `Belongs to article ${id}`,
      "createdAt": Date.now(),
      "createdBy": "Ivo Chen",
      "hasReplyId": 0,
    };

    this.replyApi.patchOrCreate(
      data
    )
      .subscribe(res => {
        console.error("There was an error: ")
        console.log(res)
      })
  }

}
