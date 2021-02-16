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
    this.service.getCommits().then((res: any) => {
      console.log(res);

      //loop through api result and assign to commits property
      res.forEach(commit => {
        this.commits.push(commit.commit.message);
      });
    }, (err) => {
      console.log(err)
    })
  }

}
