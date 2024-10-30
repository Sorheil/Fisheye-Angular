import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-skiptocontent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './skiptocontent.component.html',
  styleUrls: ['./skiptocontent.component.scss']
})
export class SkiptocontentComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }


  scrollToSection(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.focus();
    }
  }

}
