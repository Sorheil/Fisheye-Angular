import { Component, Input } from '@angular/core';
import { Media } from '../../../models/Media';
import { LikeComponent } from '../like/like.component';
import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [LikeComponent],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  @Input() media!: Media;
  numberLikes: number = 0;
  constructor(private mediaService: MediasService) { }

  ngOnInit(): void {
    this.numberLikes = this.media.getLikes();
  }
  openLightbox(mediaId: number , event: Event) {
    event.preventDefault();
    this.mediaService.openLightbox(mediaId);
  }

}
