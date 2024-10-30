import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerheaderComponent } from './photographerheader.component';

describe('PhotographerheaderComponent', () => {
  let component: PhotographerheaderComponent;
  let fixture: ComponentFixture<PhotographerheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographerheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
