import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Media } from '../../models/Media';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  constructor() { }
  medias: BehaviorSubject<Media[]> = new BehaviorSubject<Media[]>([]);
  medias$ = this.medias.asObservable();

  setMedias(medias: Media[]) {
    this.medias.next(medias);
  }
  idMediaClicked: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  idMediaClicked$ = this.idMediaClicked.asObservable();
  openLightbox(id: number) {
    this.idMediaClicked.next(id);
  }
  closeLightbox() {
    this.idMediaClicked.next(-1);
  }
}
