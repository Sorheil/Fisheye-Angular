import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CtaService {

  private ctaSubject = new BehaviorSubject<boolean>(false);
  cta$ = this.ctaSubject.asObservable();

  constructor() { }

  // Ouvre la ModalForm
  openModalForm(): void {
    this.ctaSubject.next(true);
  }
  //ferme la modalform
  closeModalForm(): void {
    this.ctaSubject.next(false);
  }


}
