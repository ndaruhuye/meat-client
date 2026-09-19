import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface PrivacySection {
  readonly id: string;
  readonly number: string;
  readonly title: string;
}

interface InformationItem {
  readonly title: string;
  readonly description: string;
}

interface PurposeItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface LawfulBasisItem {
  readonly title: string;
  readonly description: string;
}
@Component({
  selector: 'app-privacy-policy-page',
  standalone: false,
  styleUrl: './privacy-policy-page.css',
  templateUrl: './privacy-policy-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly effectiveDate = 'September 18, 2026';
  readonly lastUpdated = 'September 19, 2026';

  readonly sections: readonly PrivacySection[] = [
    { id: 'overview', number: '01', title: 'Overview' },
    { id: 'company', number: '02', title: 'Who we are' },
    { id: 'roles', number: '03', title: 'Our privacy role' },
    { id: 'information', number: '04', title: 'Information we may process' },
    { id: 'sources', number: '05', title: 'How we obtain information' },
    { id: 'usage', number: '06', title: 'How information is used' },
    { id: 'legal-bases', number: '07', title: 'Legal bases for processing' },
    { id: 'meta-data', number: '08', title: 'Meta platform data' },
    { id: 'sensitive-data', number: '09', title: 'Sensitive information' },
    { id: 'sharing', number: '10', title: 'Information sharing' },
    { id: 'providers', number: '11', title: 'Service providers and subprocessors' },
    { id: 'transfers', number: '12', title: 'International data transfers' },
    { id: 'retention', number: '13', title: 'Data retention' },
    { id: 'security', number: '14', title: 'Security' },
    { id: 'credentials', number: '15', title: 'Tokens and credentials' },
    { id: 'cookies', number: '16', title: 'Cookies and similar technologies' },
    { id: 'rights', number: '17', title: 'Your privacy rights' },
    { id: 'automated', number: '18', title: 'Automated decision-making' },
    { id: 'deletion', number: '19', title: 'Data deletion' },
    { id: 'third-party', number: '20', title: 'Third-party services' },
    { id: 'children', number: '21', title: 'Children' },
    { id: 'regional', number: '22', title: 'Regional privacy requirements' },
    { id: 'changes', number: '23', title: 'Changes to this policy' },
    { id: 'contact', number: '24', title: 'Contact and complaints' },
  ];

  readonly informationItems: readonly InformationItem[] = [
    {
      title: 'Account identifiers',
      description:
        'Identifiers associated with connected Meta business accounts, pages, messaging accounts, integrations or authorized users.',
    },
    {
      title: 'Message information',
      description:
        'Message content and related information where required to provide an enabled messaging or communication workflow.',
    },
    {
      title: 'Message metadata',
      description:
        'Information such as message identifiers, timestamps, delivery status, sender or recipient identifiers and event type.',
    },
    {
      title: 'Webhook and integration events',
      description:
        'Supported events delivered by Meta or other configured services to Meta Gateway for processing and routing.',
    },
    {
      title: 'Technical and security information',
      description:
        'Request identifiers, timestamps, IP or network-related information where available, service events, authentication events, logs and diagnostic information required to operate, secure or troubleshoot the service.',
    },
    {
      title: 'Business and configuration information',
      description:
        'Information supplied by organizations or authorized users to configure supported integrations, accounts and business communication workflows.',
    },
    {
      title: 'Support and privacy-request information',
      description:
        'Information provided when an organization or individual contacts Nexera Group for support, privacy questions, rights requests or data deletion.',
    },
  ];

  readonly purposes: readonly PurposeItem[] = [
    {
      number: '01',
      title: 'Provide integration services',
      description:
        'Process authorized requests between connected business applications and supported Meta or other enabled services.',
    },
    {
      number: '02',
      title: 'Process messages and events',
      description:
        'Receive, route and process supported messages, delivery events, webhook notifications and related integration events.',
    },
    {
      number: '03',
      title: 'Protect the platform',
      description:
        'Authenticate requests, validate operations, manage access, detect misuse and support fraud, abuse and security prevention.',
    },
    {
      number: '04',
      title: 'Operate and maintain services',
      description:
        'Diagnose failures, monitor availability, maintain infrastructure, investigate incidents and support reliable service operation.',
    },
    {
      number: '05',
      title: 'Support users and organizations',
      description:
        'Respond to support, privacy, data deletion, account and integration-related requests.',
    },
    {
      number: '06',
      title: 'Improve reliability',
      description:
        'Understand technical failures and improve system stability, maintainability, resilience and operational performance.',
    },
    {
      number: '07',
      title: 'Meet legal and regulatory obligations',
      description:
        'Maintain records or disclose information where required to comply with applicable law, valid legal process or regulatory obligations.',
    },
  ];

  readonly lawfulBases: readonly LawfulBasisItem[] = [
    {
      title: 'Contract',
      description:
        'Where processing is necessary to provide Meta Gateway services requested under an agreement or to take steps connected with such services.',
    },
    {
      title: 'Legitimate interests',
      description:
        'Where permitted by applicable law, for interests such as securing the platform, preventing abuse, maintaining service reliability, supporting users and protecting Nexera Group, its customers and other users, provided those interests are not overridden by applicable privacy rights.',
    },
    {
      title: 'Legal obligation',
      description:
        'Where processing is necessary for Nexera Group to comply with an applicable legal or regulatory obligation.',
    },
    {
      title: 'Consent',
      description:
        'Where applicable law requires consent or where a specific optional activity is based on consent. Consent may be withdrawn where the law provides that right, without affecting processing already lawfully carried out before withdrawal.',
    },
  ];

  constructor() {
    this.configureSeo();
  }

  private configureSeo(): void {
    this.title.setTitle('Privacy Policy | Meta Gateway by Nexera Group');

    this.meta.updateTag({
      name: 'description',
      content:
        'Read the Meta Gateway privacy policy and learn how Nexera Group processes, protects, retains, transfers and deletes information used by supported integrations.',
    });

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Privacy Policy | Meta Gateway',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Information about privacy, Meta platform data, security, retention, international transfers, privacy rights and data deletion for Meta Gateway.',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
