import {
  inject,
  NgModule,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { renderingProviders } from './rendering.providers';
import { App } from './app';
import { provideStorageConfig } from './config/storage.config';
import { ThemeService } from './core/services/theme.service';
import { LayoutModule } from './layout/layout-module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SharedModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => inject(ThemeService).initialize()),
    ...renderingProviders,
    provideStorageConfig({
      namespace: 'meta-gateway',
      version: 1,
      defaultArea: 'local',
    }),
  ],
  bootstrap: [App],
})
export class AppModule {}
