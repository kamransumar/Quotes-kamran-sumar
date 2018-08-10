import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

@Input() quote: Quote;
@Output() isDelete = new EventEmitter<boolean>();
  constructor() { }
  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }

  votes: number;

  constructor() {
    this.votes = 0;

  }

 voteUp(): boolean {
  this.votes += 1;
  return false;
}

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }


  ngOnInit() {
  }

}
