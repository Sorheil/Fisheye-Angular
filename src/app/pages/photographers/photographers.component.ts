import { Component, OnInit } from '@angular/core';
// component
import { PhotographerprofileComponent } from '../../components/photographerprofile/photographerprofile.component';

// services
import { PhotographersService } from '../../services/photographers.service';
import { FilterByTagService } from '../../services/filter-by-tag.service';
import { DataphotographerService } from '../../services/dataphotographer.service';

// models
import { Photographer } from '../../../models/Photographer';

@Component({
  selector: 'app-photographers',
  standalone: true,
  imports: [PhotographerprofileComponent],
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.scss']
})
export class PhotographersComponent implements OnInit {

  photographers!: Photographer[];

  constructor(
    private photographersService: PhotographersService,
    private filterByTagService: FilterByTagService,
  ) { }

  ngOnInit(): void {
    //obtenir tout les photographes 
    this.photographersService.photographersSubject$.subscribe(photographers => this.photographers = photographers)

    // Observer les changements dans les filtres et appliquer les filtres
    this.filterByTagService.selectedTags$.subscribe((tags: string[]) => {
      this.photographers = this.filterPhotographersByTags(tags);

    });

  }

  // Fonction pour filtrer les photographes en fonction des tags
  filterPhotographersByTags(tags: string[]): Photographer[] {
    const AllPhotographers = this.photographersService.getAllPhotographers()
    if (!tags.length) {
      // Si aucun tag n'est sélectionné, retourner tous les photographes
      return AllPhotographers;
    }

    // Filtrer les photographes qui possèdent tous les tags
    return AllPhotographers.filter(photographer =>
      tags.every(tag => photographer.tags.includes(tag))
    );
  }


}
