import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    chapter = new Rx.BehaviorSubject({});

  constructor(private http: HttpClient) { }

  getChapters(book){
        return new Promise((resolve) => {
  	this.http.get('assets/' + book + '.json').subscribe((response) => {
    resolve(response);
	});
	});
  }

  setChapter(chapter){
  	this.chapter.next(chapter);
  }

  getOneChapter(){
  	return this.chapter;
  }
}
