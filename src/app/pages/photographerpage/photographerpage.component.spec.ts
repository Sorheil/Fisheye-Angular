import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerpageComponent } from './photographerpage.component';

describe('PhotographerpageComponent', () => {
  let component: PhotographerpageComponent;
  let fixture: ComponentFixture<PhotographerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotographerpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
