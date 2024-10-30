import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FilterbycategoryService } from '../../services/filterbycategory.service';

@Component({
  selector: 'app-dropdownsort',
  standalone: true,
  imports: [
    NgClass],
  templateUrl: './dropdownsort.component.html',
  styleUrl: './dropdownsort.component.scss'
})
export class DropdownsortComponent {
  isShowContent = false;
  isRotate = false;
  selectedOption = 'Popularité';
  constructor(private filterbycategoryService: FilterbycategoryService) { }

  toggleContent() {
    this.isShowContent = !this.isShowContent;
    this.isRotate = !this.isRotate;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isShowContent = false;
    this.isRotate = false;
    this.filterbycategoryService.setCategory(option);
  }


}

