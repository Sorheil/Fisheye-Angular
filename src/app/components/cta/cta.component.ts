import { Component } from '@angular/core';
import { CtaService } from '../../services/cta.service';
@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  constructor(private ctaService: CtaService) { }
  openModalForm(): void {
    this.ctaService.openModalForm();
  }
}
