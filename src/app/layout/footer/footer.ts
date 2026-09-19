import { Component } from '@angular/core';

interface FooterLink {
  readonly label: string;
  readonly route?: string;
  readonly href?: string;
}

interface FooterSection {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly sections: readonly FooterSection[] = [
    {
      title: 'Platform',
      links: [
        {
          label: 'Overview',
          route: '/',
        },
        {
          label: 'Security',
          route: '/security',
        },
        {
          label: 'Contact',
          route: '/contact',
        },
      ],
    },
    {
      title: 'Legal',
      links: [
        {
          label: 'Privacy Policy',
          route: '/privacy-policy',
        },
        {
          label: 'Terms of Service',
          route: '/terms-of-service',
        },
        {
          label: 'Data Deletion',
          route: '/data-deletion',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'Nexera Group',
          href: 'https://nexeragroup.rw/',
        },
        {
          label: 'Ndaruhuye · Portfolio',
          href: 'https://ndaruhuye.nexeragroup.rw/',
        },
        {
          label: 'Email Us',
          href: 'mailto:info@nexeragroup.rw',
        },
      ],
    },
  ];
}
