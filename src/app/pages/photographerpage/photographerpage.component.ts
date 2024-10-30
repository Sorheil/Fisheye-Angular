import { Component } from '@angular/core';
import { TagComponent } from '../../components/tag/tag.component';
import { PhotographerheaderComponent } from '../../components/photographerheader/photographerheader.component';
import { CounterlikesandtarifComponent } from '../../components/counterlikesandtarif/counterlikesandtarif.component';
import { Photographer } from '../../../models/Photographer';
import { ActivatedRoute } from '@angular/router';
import { PhotographerService } from '../../services/photographer.service';
import { DataphotographerService } from '../../services/dataphotographer.service';
import { DropdownsortComponent } from '../../components/dropdownsort/dropdownsort.component';
import { Media } from '../../../models/Media';
import { MediaGalleryComponent } from '../../components/media-gallery/media-gallery.component';
import { ModalformComponent } from "../../components/modalform/modalform.component";
import { FilterbycategoryService } from '../../services/filterbycategory.service';
import { LightboxmodalComponent } from "../../components/lightboxmodal/lightboxmodal.component";
import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'app-photographerpage',
  standalone: true,
  imports: [TagComponent, PhotographerheaderComponent, CounterlikesandtarifComponent, DropdownsortComponent, MediaGalleryComponent, ModalformComponent, LightboxmodalComponent],
  templateUrl: './photographerpage.component.html',
  styleUrl: './photographerpage.component.scss'
})
export class PhotographerpageComponent {
  photographer!: Photographer
  photographerName!: string
  medias!: Media[]
  idPhotographer!: number;
  tags!: string[]
  numberLikes!: number
  price!: number

  constructor(private route: ActivatedRoute, private photographerService: PhotographerService,
    private dataphotographerService: DataphotographerService, private filterbycategoryService: FilterbycategoryService, private mediasService: MediasService) { }

  ngOnInit(): void {

    // Récupérer l'ID du photographe à partir des paramètres de la route
    this.route.params.subscribe(params => {
      this.idPhotographer = +params['id']; // 'id' est le nom du paramètre défini dans votre route
    });

    //recuperer le photographe et ces tags
    this.dataphotographerService.getPhotographerById(this.idPhotographer).subscribe(data => {
      this.photographer = new Photographer(data.photographers.find(photographer => photographer.id === this.idPhotographer))
      this.tags = this.photographer.getTags()
      this.price = this.photographer.getPrice()
      this.photographerName = this.photographer.getName()
    })

    //recuperer les medias et le nombre de tags
    this.dataphotographerService.getMedias().subscribe(data => {
      this.medias = data.media
        .filter(media => media.photographerId === this.idPhotographer)
        .map(mediaData => new Media(mediaData));
      this.numberLikes = this.medias.reduce((acc, media) => acc + media.getLikes(), 0);
      //notifier la lightbox du changement
      this.mediasService.setMedias(this.medias);
    })

    //trier les media l'orsque on clique sur les options de trie
    this.filterbycategoryService.selectedCategory$.subscribe((category) => {
      this.medias = this.photographerService.filterMediaByCategory(this.medias, category);
      //notifier la lightbox du changement
      this.mediasService.setMedias(this.medias);

    })

  }
}
