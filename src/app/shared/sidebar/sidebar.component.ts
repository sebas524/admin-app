import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .has-arrow.waves-effect.waves-dark.active {
        background: transparent;
      }
    `,
  ],
})
export class SidebarComponent {}
