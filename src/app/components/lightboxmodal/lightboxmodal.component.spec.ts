import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxmodalComponent } from './lightboxmodal.component';

describe('LightboxmodalComponent', () => {
  let component: LightboxmodalComponent;
  let fixture: ComponentFixture<LightboxmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightboxmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightboxmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
