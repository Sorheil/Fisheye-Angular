import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerprofileComponent } from './photographerprofile.component';

describe('PhotographerprofileComponent', () => {
  let component: PhotographerprofileComponent;
  let fixture: ComponentFixture<PhotographerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographerprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
