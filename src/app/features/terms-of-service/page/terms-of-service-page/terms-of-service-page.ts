import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-service-page',
  standalone: false,
  styleUrl: './terms-of-service-page.css',
  templateUrl: './terms-of-service-page.html',
})
export class TermsOfServicePage {
  constructor() {
    inject(Title).setTitle('Terms of Service | Meta Gateway');
    const meta = inject(Meta);
    meta.updateTag({
      name: 'description',
      content: 'Contact Nexera Group for the terms applicable to your Meta Gateway integration.',
    });
    meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    meta.updateTag({ property: 'og:title', content: 'Terms of Service | Meta Gateway' });
    meta.updateTag({
      property: 'og:description',
      content: 'Contact Nexera Group for the terms applicable to your Meta Gateway integration.',
    });
  }
}
