import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { Photographer } from '../../../models/Photographer';
import { CtaComponent } from "../cta/cta.component";
import { FilterByTagService } from '../../services/filter-by-tag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographerheader',
  standalone: true,
  imports: [TagComponent, CtaComponent],
  templateUrl: './photographerheader.component.html',
  styleUrl: './photographerheader.component.scss'
})
export class PhotographerheaderComponent {
  @Input() photographer!: Photographer | undefined
  @Input() tags!: string[]
  constructor(private tagFilterService: FilterByTagService, private router: Router) { }

  onTagSelected(tagName: string): void {
    this.tagFilterService.toggleTag(tagName);
    this.router.navigate(['']);
  }
}
