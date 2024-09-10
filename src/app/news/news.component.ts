import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  blogs: string[] = [
    "KiwiSaver HomeStart grant explained",
    "What's happening in the property market?",
    "Trust law reform",
    "Tax update - Simplification of taxes, foreign ...",
    "What do the new lending rules mean?",
    "How will the Reserve Bank respond to ..."
  ]

}
