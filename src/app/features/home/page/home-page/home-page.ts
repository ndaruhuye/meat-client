import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface TrustItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface Integration {
  readonly name: string;
  readonly description: string;
  readonly status: string;
  readonly icon: string;
}

interface LegalItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly route: string;
  readonly action: string;
}

@Component({
  selector: 'app-home-page',
  standalone: false,
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly trustItems: readonly TrustItem[] = [
    {
      number: '01',
      title: 'Secure by design',
      description:
        'Sensitive credentials and integration operations remain inside protected backend infrastructure.',
    },
    {
      number: '02',
      title: 'Privacy focused',
      description:
        'Platform information is processed only for supported and authorized business purposes.',
    },
    {
      number: '03',
      title: 'Built for reliability',
      description:
        'Requests, webhooks, failures, retries, logs and operational events follow controlled processing flows.',
    },
    {
      number: '04',
      title: 'Designed to scale',
      description:
        'The integration layer can evolve as new business systems and supported Meta capabilities are introduced.',
    },
  ];

  readonly integrations: readonly Integration[] = [
    {
      name: 'WhatsApp Business',
      status: 'Supported integration',
      icon: 'fa-brands fa-whatsapp',
      description:
        'Business messaging, supported webhook events, delivery information and related communication workflows.',
    },
    {
      name: 'Instagram',
      status: 'Supported integration',
      icon: 'fa-brands fa-instagram',
      description:
        'Supported messaging and account event workflows where the required Meta permissions are available.',
    },
    {
      name: 'Facebook',
      status: 'Supported integration',
      icon: 'fa-brands fa-facebook',
      description:
        'Supported messaging and account event workflows where the required Meta permissions are available.',
    },
    {
      name: 'Messenger',
      status: 'Supported integration',
      icon: 'fa-brands fa-facebook-messenger',
      description:
        'Supported messaging and account event workflows where the required Meta permissions are available.',
    },
    {
      name: 'Meta ecosystem',
      status: 'Extensible architecture',
      icon: 'fa-brands fa-meta',
      description:
        'The gateway architecture is designed to support additional approved Meta APIs as requirements evolve.',
    },
  ];

  readonly legalItems: readonly LegalItem[] = [
    {
      number: '01',
      title: 'Privacy Policy',
      description:
        'Understand what information Meta Gateway may process, why it is processed and how it is protected.',
      route: '/privacy-policy',
      action: 'Read privacy policy',
    },
    {
      number: '02',
      title: 'Data Deletion',
      description:
        'Learn how to request deletion of personal information associated with Meta Gateway.',
      route: '/data-deletion',
      action: 'View deletion instructions',
    },
    {
      number: '03',
      title: 'Terms of Service',
      description: 'Review the terms that govern access to and use of Meta Gateway.',
      route: '/terms-of-service',
      action: 'Read terms',
    },
    {
      number: '04',
      title: 'Security',
      description:
        'Learn about the principles used to protect gateway infrastructure and integration data.',
      route: '/security',
      action: 'View security',
    },
  ];

  constructor() {
    this.configureSeo();
  }

  private configureSeo(): void {
    this.title.setTitle('Meta Gateway | Secure Meta Integrations by Nexera Group');

    this.meta.updateTag({
      name: 'description',
      content:
        'Meta Gateway is a secure integration platform by Nexera Group for connecting business applications with supported Meta services including WhatsApp Business and Instagram.',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Meta Gateway | Nexera Group',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Secure infrastructure for connecting authorized business systems with supported Meta platforms.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
