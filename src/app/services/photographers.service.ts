import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Photographer } from '../../models/Photographer';
import { DataphotographerService } from './dataphotographer.service';

@Injectable({
  providedIn: 'root'
})
export class PhotographersService {
  // Propriétés
  photographers!: Photographer[];

  private photographersSubject = new BehaviorSubject<Photographer[]>([]);
  photographersSubject$ = this.photographersSubject.asObservable();

  private tagsSubject = new BehaviorSubject<string[]>([]);
  tagsSubject$ = this.tagsSubject.asObservable();

  constructor(private dataphotographerService: DataphotographerService) {
    // Récupérer tous les photographes
    this.dataphotographerService.getPhotographers()
      .subscribe({
        next: (data) => {
          this.photographers = data['photographers'].map(photographer => new Photographer(photographer));
          this.photographersSubject.next(this.photographers);
          this.tagsSubject.next([...new Set(this.photographers.map(photographer => photographer.getTags()).flat())]);
        },
        error: (error) => {
          console.error('Erreur lors du chargement des photographes:', error);
        },

        complete: () => {
          console.log('Chargement des photographes terminé');
        }
      });
  }

  // Méthodes

  // Retourne tous les photographes
  getAllPhotographers(): Photographer[] {
    return this.photographers;
  }
}
