import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes = [
  new Quote(1, ' test ', ' test ', ' test ', new Date(1990 , 1 , 1)),
  new Quote(1, ' test ', ' test ', ' test ', new Date(1990 , 1 , 1))
 ];
  addQuote(quote) {
        const quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
         quote.datePublished = new Date();
        this.quotes.push(quote);

    }
  toogleDetails(index) {      this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete, index) {
      if (isDelete) {
        const toDelete = confirm(`Are you sure you want to delete this quote?\n \n \" ${this.quotes[index].quote}\"`);


        if (toDelete) {
            this.quotes.splice(index, 1);
            }
        }
    }
 constructor() {}

  ngOnInit() {
  }
}
