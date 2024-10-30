import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsortComponent } from './dropdownsort.component';

describe('DropdownsortComponent', () => {
  let component: DropdownsortComponent;
  let fixture: ComponentFixture<DropdownsortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownsortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
