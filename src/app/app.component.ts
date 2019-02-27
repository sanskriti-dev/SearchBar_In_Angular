import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams, Response} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search: FormGroup;
  result;

  constructor(public http: HttpClient) {

  }

  ngOnInit() {
    this.search = new FormGroup({
      SearchItem: new FormControl(null)
    });
  }

  search1() {
    const s = this.search.get('SearchItem').value;
    const header = new HttpParams().set('q', s);
    this.result = this.http.get('https://api.github.com/search/repositories?sort=stars&order=desc', {params: header}).map(res =>
      res.items.map(item1 => item1.name));
  }
}


