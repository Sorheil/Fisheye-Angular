import { Injectable } from '@angular/core';
import { DataphotographerService } from './dataphotographer.service';
import { ActivatedRoute } from '@angular/router';
import { Media } from '../../models/Media';


@Injectable({
  providedIn: 'root'
})
export class PhotographerService {

  constructor(private dataphotographerService: DataphotographerService, private route: ActivatedRoute) {

  }

  getNumberLikesPhotographerById(): number {
    return 600;
  }

  filterMediaByCategory(medias: Media[], category: string): Media[] {
    switch (category.toLowerCase()) {
      case 'popularité':
        return [...medias].sort((a, b) => b.getLikes() - a.getLikes());
        break
      case 'date':
        return [...medias].sort((a, b) => new Date(b.getDate()).getTime() - new Date(a.getDate()).getTime());

      case 'titre':
        return [...medias].sort((a, b) => a.getTitle().localeCompare(b.getTitle()));

      default:
        return medias;
    }
  }
}
