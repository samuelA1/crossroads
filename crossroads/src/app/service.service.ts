import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //get all commits
  getCommits() {
    return this.http.get(`${this.apiUrl}`).toPromise();
  }

}
