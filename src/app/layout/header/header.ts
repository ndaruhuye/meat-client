import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

interface NavigationItem {
  label: string;
  route: string;
  exact?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onResize()',
  },
})
export class Header implements OnDestroy {
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly mobileDialog = viewChild<ElementRef<HTMLDialogElement>>('mobileDialog');

  private readonly menuTrigger = viewChild<ElementRef<HTMLButtonElement>>('menuTrigger');

  private readonly brandLink = viewChild<ElementRef<HTMLAnchorElement>>('brandLink');

  private previousOverflow: string | null = null;

  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

  readonly dark = this.themeService.dark;

  readonly logoSrc = computed(() =>
    this.themeService.dark() ? './white-logo.png' : './black-logo.png',
  );

  readonly navigationItems: readonly NavigationItem[] = [
    {
      label: 'Home',
      route: '/',
      exact: true,
    },
    {
      label: 'Privacy',
      route: '/privacy-policy',
    },
    {
      label: 'Security',
      route: '/security',
    },
    {
      label: 'Data Deletion',
      route: '/data-deletion',
    },
  ];

  private readonly routerSubscription: Subscription = this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe(() => {
      if (!this.isBrowser) return;

      if (this.isMenuOpen()) {
        this.closeMenu();

        this.document.getElementById('main-content')?.focus({ preventScroll: true });
      }
    });

  constructor() {
    afterNextRender(() => {
      this.onScroll();
    });
  }

  toggleTheme(): void {
    this.themeService.toggleMode();
  }

  toggleMenu(): void {
    if (!this.isBrowser) return;

    if (this.isMenuOpen()) {
      this.closeMenu();
      return;
    }

    const dialog = this.mobileDialog()?.nativeElement;

    if (!dialog) return;

    dialog.showModal();

    this.isMenuOpen.set(true);

    this.previousOverflow = this.document.body.style.overflow;

    this.document.body.style.overflow = 'hidden';
  }

  closeMenu(): void {
    if (!this.isBrowser) return;
    if (!this.isMenuOpen()) return;

    const dialog = this.mobileDialog()?.nativeElement;

    if (dialog?.open) {
      dialog.close();
    }

    this.finishClosing();
  }

  onMobileLinkClick(route: string): void {
    if (!this.isBrowser) return;

    // Navigating to the current page does not emit NavigationEnd.
    if (this.router.url === route) {
      this.closeMenu();

      this.document.getElementById('main-content')?.focus({ preventScroll: true });
    }
  }

  onDialogCancel(event: Event): void {
    if (!this.isBrowser) return;

    event.preventDefault();
    this.closeMenu();
  }

  onDialogClose(): void {
    if (!this.isBrowser) return;

    const dialog = this.mobileDialog()?.nativeElement;

    // Also handles a native close that did not originate
    // from closeMenu().
    if (!dialog?.open) {
      this.finishClosing();
    }
  }

  private finishClosing(): void {
    if (!this.isBrowser) return;
    if (!this.isMenuOpen()) return;

    this.isMenuOpen.set(false);

    this.restoreBodyScroll();

    const desktop = (this.document.defaultView?.innerWidth ?? 0) >= 992;

    const target = desktop ? this.brandLink()?.nativeElement : this.menuTrigger()?.nativeElement;

    target?.focus({ preventScroll: true });
  }

  onScroll(): void {
    if (!this.isBrowser) return;

    this.isScrolled.set((this.document.defaultView?.scrollY ?? 0) > 12);
  }

  onResize(): void {
    if (!this.isBrowser) return;

    if ((this.document.defaultView?.innerWidth ?? 0) >= 992) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();

    // Native DOM APIs must not run during SSR.
    if (!this.isBrowser) return;

    const dialog = this.mobileDialog()?.nativeElement;

    if (dialog?.open) {
      dialog.close();
    }

    this.restoreBodyScroll();
  }

  private restoreBodyScroll(): void {
    if (!this.isBrowser) return;
    if (this.previousOverflow === null) return;

    this.document.body.style.overflow = this.previousOverflow;

    this.previousOverflow = null;
  }
}
