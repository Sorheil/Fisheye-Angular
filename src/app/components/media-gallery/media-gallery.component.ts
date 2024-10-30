import { Component, Input } from '@angular/core';
import { MediaComponent } from '../media/media.component';
import { Media } from '../../../models/Media';

@Component({
  selector: 'app-media-gallery',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './media-gallery.component.html',
  styleUrl: './media-gallery.component.scss'
})
export class MediaGalleryComponent {
  @Input() medias!: Media[]

}
