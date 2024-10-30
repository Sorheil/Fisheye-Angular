import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MediasService } from '../../services/medias.service';
import { Media } from '../../../models/Media';
import { NgClass, NgIf } from '@angular/common';
import { FocusService } from '../../services/focus.service';

@Component({
  selector: 'app-lightboxmodal',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './lightboxmodal.component.html',
  styleUrls: ['./lightboxmodal.component.scss']
})
export class LightboxmodalComponent implements OnInit {
  medias!: Media[];
  curentIndexMedia: number = 0;
  isModalOpen: boolean = false;

  @ViewChild('modal') modalElement!: ElementRef;

  constructor(private mediasService: MediasService, private focusService: FocusService) { }

  ngOnInit(): void {
    // Souscription pour récupérer les médias
    this.mediasService.medias$.subscribe((medias) => {
      console.log(medias);
      this.medias = medias;
    });

    // Notification lors du clic sur un média
    this.mediasService.idMediaClicked$.subscribe((id) => {
      if (id !== -1) {
        this.openLightbox();
        this.curentIndexMedia = this.findIndexById(id);
      }
    });
  }

  getCurrentMediaSrc(): string {
    const media = this.medias[this.curentIndexMedia];
    if (media.getImage()) {
      return `./assets/images/creations/${media.photographerId}/${media.image}`;
    } else {
      return `./assets/images/creations/${media.photographerId}/${media.video}`;
    }
  }

  prevMedia(event: Event): void {
    event.preventDefault();
    this.curentIndexMedia = (this.curentIndexMedia > 0)
      ? this.curentIndexMedia - 1
      : this.medias.length - 1;
  }

  nextMedia(event: Event): void {
    event.preventDefault();
    this.curentIndexMedia = (this.curentIndexMedia < this.medias.length - 1)
      ? this.curentIndexMedia + 1
      : 0;
  }

  findIndexById(id: number): number {
    return this.medias.findIndex(media => media.getId() === id);
  }

  openLightbox(): void {
    this.focusService.saveFocusedElement();
    this.isModalOpen = true;

    // Mettre le focus sur le premier champ (ou le premier élément focusable)
    setTimeout(() => {
      const firstFocusableElement = this.modalElement.nativeElement.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
      this.focusService.setFocusOnElement(firstFocusableElement);
      this.trapFocusIn();
    }, 10);
  }

  closeLightbox(): void {
    this.curentIndexMedia = 0;
    this.isModalOpen = false;
    this.focusService.restoreFocusedElement();

  }

  private trapFocusIn(): void {
    const modalElement = this.modalElement.nativeElement;
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isTabPressed = e.key === "Tab";
      const isEscapePressed = e.key === "Escape";
      const isArrowLeftPressed = e.key === "ArrowLeft";
      const isArrowRightPressed = e.key === "ArrowRight";

      if (isEscapePressed) {
        this.closeLightbox();
        modalElement.removeEventListener('keydown', handleKeyDown);
        return;
      }
      if (isArrowLeftPressed) {
        this.prevMedia(e);
      }
      if (isArrowRightPressed) {
        this.nextMedia(e);
      }
      if (isTabPressed) {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    modalElement.addEventListener('keydown', handleKeyDown);
  }

}
