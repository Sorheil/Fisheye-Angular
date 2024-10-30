import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private likedSubject = new BehaviorSubject<boolean>(false);

  // Expose liked$ as Observable for components to subscribe to
  liked$: Observable<boolean> = this.likedSubject.asObservable();

  constructor() { }

  updateNumberLike(isLiked: boolean): void {
    this.likedSubject.next(isLiked);
  }

  // Optionally, a getter for the current like state
  isLiked(): boolean {
    return this.likedSubject.value;
  }
}
