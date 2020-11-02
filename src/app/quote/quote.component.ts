import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'The purpose of our lives is to be happy.','Dalai Lama', 0,0,new Date(2020,8,20)),
    new Quote(2, 'Life is what happens when you’re busy making other plans.','Fabienne',0,0,new Date(2020,3,14)),
    new Quote(3,'Get busy living or get busy dying.','Claude',0,0,new Date(2020,6,18)),
    new Quote (4, 'You only live once, but if you do it right, once is enough.','Diane',0,0,new Date(2020,9,25)),
     new Quote(5,'Many of life’s failures are people who did not realize how close they were to success when they gave up.','FRorberto',0,0,new Date(2020,5,12)),
    new Quote (6,'the privilege of friendship to talk nonsense, and to have her nonsense respected.','Bonte',0,0,new Date(2020,7,3)),
   ];

   toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  preNum:number;
  lastNum:number;
  counter:number;
  HighestUpvote(){

    this.preNum = 0
    this.lastNum = 0
    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].like;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}

