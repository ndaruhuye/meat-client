import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface SecurityPrinciple {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface SecurityLayer {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface SecurityPractice {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-security-page',
  standalone: false,
  styleUrl: './security-page.css',
  templateUrl: './security-page.html',
})
export class SecurityPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly principles: readonly SecurityPrinciple[] = [
    {
      number: '01',
      title: 'Protected credentials',
      icon: 'fa-solid fa-key',
      description:
        'Access tokens, application secrets and integration credentials are intended to remain inside protected backend infrastructure.',
    },
    {
      number: '02',
      title: 'Controlled access',
      icon: 'fa-solid fa-user-shield',
      description:
        'Sensitive gateway operations can be restricted to authenticated and authorized applications and users.',
    },
    {
      number: '03',
      title: 'Encrypted communication',
      icon: 'fa-solid fa-lock',
      description:
        'Communication between systems and supported external services uses encrypted network connections.',
    },
    {
      number: '04',
      title: 'Request validation',
      icon: 'fa-solid fa-circle-check',
      description:
        'Incoming requests can be validated before an integration operation is accepted or sent to an external platform.',
    },
    {
      number: '05',
      title: 'Webhook verification',
      icon: 'fa-solid fa-code-branch',
      description:
        'Supported webhook events can be verified before they are accepted and processed by connected applications.',
    },
    {
      number: '06',
      title: 'Operational visibility',
      icon: 'fa-solid fa-chart-line',
      description:
        'Relevant requests, failures and integration activity can be logged and monitored for operational and security purposes.',
    },
  ];

  readonly layers: readonly SecurityLayer[] = [
    {
      number: '01',
      title: 'Business application',
      description:
        'The business application requests only the operations it is permitted to perform.',
    },
    {
      number: '02',
      title: 'Application server',
      description:
        'The server authenticates users, applies business rules and communicates with Meta Gateway through controlled backend channels.',
    },
    {
      number: '03',
      title: 'Meta Gateway',
      description:
        'The gateway validates the operation, protects platform credentials and manages communication with the external integration.',
    },
    {
      number: '04',
      title: 'Meta services',
      description:
        'Requests are sent only to the supported APIs and capabilities required by the configured integration.',
    },
  ];

  readonly practices: readonly SecurityPractice[] = [
    {
      title: 'Least privilege',
      description:
        'Applications and integrations should receive only the permissions required to perform their intended operations.',
    },
    {
      title: 'Data minimization',
      description:
        'The platform is designed to avoid processing information that is unrelated to the configured integration workflow.',
    },
    {
      title: 'Secret isolation',
      description:
        'Sensitive platform credentials should never be exposed to public browser applications or client-side code.',
    },
    {
      title: 'Failure isolation',
      description:
        'Integration failures are handled at the gateway boundary so external platform problems do not spread unnecessarily throughout business systems.',
    },
    {
      title: 'Auditability',
      description:
        'Relevant system activity can be recorded to support troubleshooting, security reviews and operational accountability.',
    },
    {
      title: 'Maintainability',
      description:
        'Security controls are centralized so integrations can evolve without duplicating sensitive logic across applications.',
    },
  ];

  constructor() {
    this.configureSeo();
  }

  private configureSeo(): void {
    this.title.setTitle('Security | Meta Gateway by Nexera Group');

    this.meta.updateTag({
      name: 'description',
      content:
        'Learn how Meta Gateway by Nexera Group approaches credential protection, access control, request validation, encrypted communication and integration security.',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Security | Meta Gateway',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Security principles and architectural protections used by Meta Gateway.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
