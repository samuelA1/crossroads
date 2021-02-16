import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crossroads';
  commits: any[] = [] //array of all commits

  constructor(private service: ServiceService) {
    this.getCommits();
  }

  //calls api to get all commits
  getCommits() {
    this.service.getCommits().then((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }

}
