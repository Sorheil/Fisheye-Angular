import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { DataphotographerService } from '../../services/dataphotographer.service';
import { FilterByTagService } from '../../services/filter-by-tag.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { Photographer } from '../../../models/Photographer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TagComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  selectedTags: string[] = []
  tags!: string[]
  currentRoute: string = ''; // Stocke l'URL actuelle

  constructor(private dataphotographerService: DataphotographerService, private filterByTagService: FilterByTagService, private router: Router) { }

  ngOnInit(): void {

    //recuperer tout les tags (devrait etre fait depuis une call api)
    this.dataphotographerService.getTags().subscribe(
      (data) => {
        let Photographers = data.photographers.map(photographer => new Photographer(photographer));
        this.tags = [...new Set(Photographers.map(photographer => photographer.getTags()).flat())];
      }
    )
    
    //observable for tags
    this.filterByTagService.selectedTags$.subscribe((tags) => {
      this.selectedTags = tags;
    });

    // Écoute les changements de navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Stocke la route actuelle chaque fois qu'une navigation est terminée
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  onTagSelected(tagName: string) {
    this.filterByTagService.toggleTag(tagName) // va notifier de maniere implicite l'observable qui retourne tout les tags
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag); // Vérifie si le tag est sélectionné
  }

  // Méthode pour vérifier si une route spécifique est active
  isRouteActive(route: string): boolean {
    return this.currentRoute === route;
  }

}
