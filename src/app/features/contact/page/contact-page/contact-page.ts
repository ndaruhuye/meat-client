import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

interface ContactReason {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface ContactDetail {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-contact-page',
  standalone: false,
  styleUrl: './contact-page.css',
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly formBuilder = inject(FormBuilder);

  readonly email = 'info@nexeragroup.rw';

  readonly contactDetails: readonly ContactDetail[] = [
    {
      label: 'Email',
      value: 'info@nexeragroup.rw',
      href: 'mailto:info@nexeragroup.rw',
    },
    {
      label: 'Company',
      value: 'Nexera Group',
    },
    {
      label: 'Location',
      value: 'Kigali, Rwanda',
    },
    {
      label: 'Website',
      value: 'nexeragroup.rw',
      href: 'https://nexeragroup.rw/',
      external: true,
    },
  ];

  readonly contactReasons: readonly ContactReason[] = [
    {
      number: '01',
      title: 'Meta Gateway integrations',
      description: 'Questions about connecting business applications with supported Meta services.',
    },
    {
      number: '02',
      title: 'Technical support',
      description:
        'Help with integration behavior, webhook processing, messaging or technical configuration.',
    },
    {
      number: '03',
      title: 'Privacy',
      description: 'Questions about how Meta Gateway processes, protects or manages information.',
    },
    {
      number: '04',
      title: 'Data deletion',
      description: 'Requests relating to deletion of information associated with Meta Gateway.',
    },
    {
      number: '05',
      title: 'Security',
      description: 'Security-related questions or reports involving Meta Gateway infrastructure.',
    },
    {
      number: '06',
      title: 'General inquiries',
      description:
        'Questions about Nexera Group, Meta Gateway or potential business collaboration.',
    },
  ];

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],

    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],

    company: ['', [Validators.maxLength(150)]],

    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],

    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(3000)]],
  });

  constructor() {
    this.configureSeo();
  }

  submitContactForm(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      return;
    }

    const value = this.contactForm.getRawValue();

    const body = [
      `Name: ${value.name}`,
      `Email: ${value.email}`,
      `Company: ${value.company || 'Not provided'}`,
      '',
      'Message:',
      value.message,
    ].join('\n');

    const mailto =
      `mailto:${this.email}` +
      `?subject=${encodeURIComponent(value.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailto;
    }
  }

  private configureSeo(): void {
    this.title.setTitle('Contact | Meta Gateway by Nexera Group');

    this.meta.updateTag({
      name: 'description',
      content:
        'Contact Nexera Group for questions about Meta Gateway integrations, support, privacy, security and data deletion.',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact | Meta Gateway',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Get in touch with Nexera Group about Meta Gateway and supported Meta integrations.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
