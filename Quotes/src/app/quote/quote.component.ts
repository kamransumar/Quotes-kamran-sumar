import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  function QuoteComponent() {
this.quotes = [
  new Quote(1, '“Get busy living or get busy dying.”', '-Stephen King', 'kamran sumar', new Date(2013, 04, 09 )),
  new Quote(2, '“Those who dare to fail miserably can achieve greatly"', '-John F. Kennedy', 'jason mamloa', new Date( 2014, 07 , 05 )),
  new Quote(3, '“Love is a serious mental disease.”', '-Plato', 'hellen henerus', new Date( 2017, 06 , 03)),
  new Quote(4, '“If you want to be happy, be.”', '-Leo Tolstoy', 'melisa malala', new Date(2018, 07 , 09)),
];
}
  addQuote(quote); {
        const quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
         quote.datePublished = new Date();
        this.quotes.push(quote);

    }
  toogleDetails(index); {      this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete, index); {
      if (isDelete) {
        const toDelete = confirm(`Are you sure you want to delete this quote?\n \n \" ${this.quotes[index].quote}\"`);


        if (toDelete) {
            this.quotes.splice(index, 1);
            }
        }
    }
 constructor(); {}

  ngOnInit(); {
  }
}
