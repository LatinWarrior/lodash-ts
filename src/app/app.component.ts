import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'lodash-ts';

  readonly friends = [
    { id: 1, name: "Homer" },
    { id: 2, name: "Bart" },
    { id: 3, name: "Mr. Burns" }
  ];

  friend;

  getFriend(id: number) {
    this.friend = _.find(this.friends, ["id", id]);;
  }

}
