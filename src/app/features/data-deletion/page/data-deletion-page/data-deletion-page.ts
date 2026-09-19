import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

interface DeletionStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface RequiredDetail {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-data-deletion-page',
  standalone: false,
  styleUrl: './data-deletion-page.css',
  templateUrl: './data-deletion-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataDeletionPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly email = 'info@nexeragroup.rw';
  readonly emailSubject = 'Meta Gateway Data Deletion Request';
  readonly steps: readonly DeletionStep[] = [
    {
      number: '01',
      title: 'Prepare your request',
      description:
        'Gather enough information to help Nexera Group identify the Meta Gateway integration, business account or information associated with your request.',
    },
    {
      number: '02',
      title: 'Send the request',
      description:
        'Email Nexera Group using the subject “Meta Gateway Data Deletion Request” and provide the requested identification details.',
    },
    {
      number: '03',
      title: 'Verification',
      description:
        'We may request additional information to verify that the request relates to you or an organization you are authorized to represent.',
    },
    {
      number: '04',
      title: 'Review and processing',
      description:
        'The request is reviewed to determine what information can be identified and deleted or otherwise removed from active processing.',
    },
    {
      number: '05',
      title: 'Confirmation',
      description:
        'Where appropriate, Nexera Group will confirm when the request has been processed or explain if additional action is required.',
    },
  ];

  readonly requiredDetails: readonly RequiredDetail[] = [
    {
      title: 'Your name',
      description: 'Provide the name of the person submitting the request.',
    },
    {
      title: 'Contact email',
      description:
        'Use an email address that can be used to communicate with you about the request.',
    },
    {
      title: 'Business or organization',
      description:
        'If applicable, provide the organization connected to the Meta Gateway integration.',
    },
    {
      title: 'Meta account information',
      description:
        'Provide relevant non-secret account identifiers that can help identify the integration.',
    },
    {
      title: 'Request description',
      description: 'Describe what information or integration you would like deleted.',
    },
    {
      title: 'Additional context',
      description:
        'Include relevant dates or other information that can help locate the data, where available.',
    },
  ];

  constructor() {
    this.configureSeo();
  }

  get deletionMailto(): string {
    const subject = encodeURIComponent(this.emailSubject);

    return `mailto:${this.email}?subject=${subject}`;
  }

  private configureSeo(): void {
    this.title.setTitle('Data Deletion | Meta Gateway by Nexera Group');

    this.meta.updateTag({
      name: 'description',
      content:
        'Learn how to request deletion of personal information associated with Meta Gateway by Nexera Group.',
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Data Deletion | Meta Gateway',
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Instructions for submitting a Meta Gateway data deletion request to Nexera Group.',
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
