import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusService {
  private previouslyFocusedElement: HTMLElement | null = null;

  saveFocusedElement(): void {
    this.previouslyFocusedElement = document.activeElement as HTMLElement;
  }

  restoreFocusedElement(): void {
    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }

  setFocusOnElement(element: HTMLElement): void {
    if (element) {
      element.focus();
    }
  }
}
