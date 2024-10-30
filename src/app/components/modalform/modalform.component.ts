import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CtaService } from '../../services/cta.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FocusService } from '../../services/focus.service'; // Importer le service

@Component({
  selector: 'app-modalform',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf],
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent implements OnInit {
  @Input() photographerName!: string;
  isModalOpen: boolean = false;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';
  formErrorMessage: string = '';

  @ViewChild('modal') modalElement!: ElementRef;

  constructor(private ctaService: CtaService, private focusService: FocusService) { }

  ngOnInit(): void {
    // Subscribing au cta$
    this.ctaService.cta$.subscribe((value) => {
      this.isModalOpen = value;
      if (this.isModalOpen) {
        this.openModal();
      }
    });
  }

  openModal(): void {
    // Sauvegarder l'élément qui a le focus
    this.focusService.saveFocusedElement();
    this.isModalOpen = true;

    // Mettre le focus sur le premier champ (Prénom)
    setTimeout(() => {
      const input = this.modalElement.nativeElement.querySelector('input');
      this.focusService.setFocusOnElement(input);
      this.trapFocusIn(); // Appel de la méthode pour piéger le focus
    }, 10);
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.focusService.restoreFocusedElement();
    // Réinitialiser les valeurs du formulaire
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';

    // Réinitialiser le message d'erreur
    this.formErrorMessage = '';
  }

  onSubmitForm(form: NgForm): void {
    if (form.valid) {
      console.log(form.value)
      this.closeModal();
    } else {
      this.formErrorMessage = 'Veuillez corriger les erreurs dans le formulaire.';
      console.log('Formulaire invalide');
    }
  }

  isFieldInvalid(field: any): boolean {
    return field.invalid && field.touched;
  }

  private trapFocusIn(): void {
    const modalElement = this.modalElement.nativeElement;
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isTabPressed = e.key === "Tab"
      const isEscapePressed = e.key === "Escape"

      if (!isTabPressed && !isEscapePressed) {
        // Si l'utilisateur n'a pas pressé Tab ni Escape, on ne fait rien
        return;
      }

      if (isEscapePressed) {
        this.closeModal();
        return;
      }

      if (isTabPressed) {
        if (e.shiftKey) {
          // Si Shift + Tab est pressé
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          // Si Tab est pressé
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
