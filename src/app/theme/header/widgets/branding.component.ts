import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="/">
      <img src="./assets/images/slaughterhouse.jpg" class="matero-branding-logo-expanded" alt="logo" />
      <span class="matero-branding-name">SlaughterHouse</span>
    </a>
  `,
})
export class BrandingComponent {}
