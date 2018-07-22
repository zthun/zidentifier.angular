import { Component } from '@angular/core';
import { IDomQuery } from './dom-query.interface';

@Component({
  selector: 'zidentifier-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public ids: IDomQuery[];

  public constructor() {
    this.ids = [
      { name: 'zid-demo', exists: false },
      { name: 'zid-demo-app', exists: false },
      { name: 'zid-demo-app-run-test-button', exists: false },
      { name: 'zid-demo-app-reset-test-button', exists: false },
      { name: 'zid-demo-app-id-table', exists: false },
      { name: 'zid-demo-app-a-child-component', exists: false },
      { name: 'zid-demo-app-b-child-component', exists: false }
    ];
  }

  public resetTest() {
    for (let id of this.ids) {
      id.exists = false;
    }
  }

  public runTest() {
    for (let id of this.ids) {
      id.exists = !!document.getElementById(id.name);
    }
  }
}
