import { Component } from '@angular/core';
import { RedditService } from './reddit.service';
import { RedditI} from './reddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RedditService]
})
export class AppComponent {
  title = 'paupersReddit';
  redditArray : RedditI [] = [];

  constructor(private reddit: RedditService){
    
  }

  searchReddit(): void{
    this.reddit.searchReddit().subscribe( 
    (response: RedditI) => {
      this.redditArray.push(response);
    });
  }
 }

