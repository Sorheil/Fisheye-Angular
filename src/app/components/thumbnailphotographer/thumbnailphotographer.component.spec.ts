import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailphotographerComponent } from './thumbnailphotographer.component';

describe('ThumbnailphotographerComponent', () => {
  let component: ThumbnailphotographerComponent;
  let fixture: ComponentFixture<ThumbnailphotographerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailphotographerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbnailphotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
