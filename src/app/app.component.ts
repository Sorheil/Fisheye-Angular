import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SkiptocontentComponent } from './components/skiptocontent/skiptocontent.component';
import { AsyncPipe } from '@angular/common';
import { Router, NavigationStart, Event } from '@angular/router';
import { CtaService } from './services/cta.service';
import { MediasService } from './services/medias.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SkiptocontentComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private ctaService: CtaService, private mediasService: MediasService) { }
  ngOnInit(): void {
    // Écouter les changements de route
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.ctaService.closeModalForm();
        this.mediasService.closeLightbox();
      }
    });
  }


}
