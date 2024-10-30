import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiptocontentComponent } from './skiptocontent.component';

describe('SkiptocontentComponent', () => {
  let component: SkiptocontentComponent;
  let fixture: ComponentFixture<SkiptocontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkiptocontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiptocontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
