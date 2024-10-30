import { Component, Input, OnInit, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importez RouterModule ici


// component
import { TagComponent } from '../tag/tag.component';

// services
import { FilterByTagService } from '../../services/filter-by-tag.service';

// models
import { Photographer } from '../../../models/Photographer';

@Component({
  selector: 'app-photographerprofile',
  standalone: true,
  imports: [TagComponent, RouterModule, RouterLink],
  templateUrl: './photographerprofile.component.html',
  styleUrl: './photographerprofile.component.scss'
})
export class PhotographerprofileComponent implements OnInit {
  @Input() photographerData!: Photographer
  selectedTags: string[] = [];

  constructor(private filterByTagService: FilterByTagService) { }

  ngOnInit(): void {
    this.filterByTagService.selectedTags$.subscribe((tags) => {
      this.selectedTags = tags;
    });
  }

  onTagSelected(tag: string) {
    this.filterByTagService.toggleTag(tag);
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }
}
