import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-page',
  standalone: false,
  styleUrl: './not-found-page.css',
  templateUrl: './not-found-page.html',
})
export class NotFoundPage {
  constructor() {
    inject(Title).setTitle('Page not found | Meta Gateway');
    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content: 'Find your way back to Meta Gateway or contact Nexera Group for help.',
    });
    meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    meta.updateTag({ property: 'og:title', content: 'Page not found | Meta Gateway' });
    meta.updateTag({
      property: 'og:description',
      content: 'Find your way back to Meta Gateway or contact Nexera Group for help.',
    });
  }
}
