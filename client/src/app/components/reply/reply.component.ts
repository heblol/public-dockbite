import {Component, Input, OnInit} from '@angular/core';
import {ReplyApi} from "../../sdk/services/custom/Reply";
import {Reply} from "../../sdk/models/Reply";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  @Input() reply: Reply;
  replies: Reply[];

  _title: string;
  _body: string;
  _hasReplyId: number;

  constructor(private replyApi: ReplyApi) {
  }

  ngOnInit() {
  }

  set title(title: string) {
    this._title = title;
  }

  set body(body: string) {
    this._body = body;
  }

  set hasReplyId(hasReplyId: number) {
    this._hasReplyId = hasReplyId;
  }


  createReply(event) {

    const data = {
      "title": "GENERATED_TITLE",
      "body": "GENERATED_BODY",
      "createdAt": Date.now(),
      "createdBy": "Ivo Chen",
      "hasReplyId": 0
    };

    this.replyApi.patchOrCreate(
      data
    )
      .subscribe(res => {
        console.log(res)
      })
  }

}
