import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input() isSelected: boolean = false;
  @Input() tagName!: string
  @Output() tagSelected = new EventEmitter<string>();

  onTagSelected() {
    this.tagSelected.emit(this.tagName);
  }
}
