import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterbycategoryService {

  constructor() { }
  categorySubject = new BehaviorSubject<string>('');
  selectedCategory$ = this.categorySubject.asObservable();
  setCategory(category: string) {
    this.categorySubject.next(category);
  }
}
