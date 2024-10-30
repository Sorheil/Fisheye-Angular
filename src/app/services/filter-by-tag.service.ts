import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterByTagService {

  constructor() { }

  // Création d'un BehaviorSubject pour stocker les tags sélectionnés
  private selectedTags = new BehaviorSubject<string[]>([]);

  // Création d'un Observable à partir du BehaviorSubject
  selectedTags$ = this.selectedTags.asObservable();

  // Méthode pour ajouter ou retirer un filtre
  toggleTag(tag: string) {
    
    const currentTags = this.selectedTags.getValue();

    if (currentTags.includes(tag)) {
      this.selectedTags.next(currentTags.filter((t) => t !== tag));
    } else {
      this.selectedTags.next([...currentTags, tag]);
    }
  }
}
