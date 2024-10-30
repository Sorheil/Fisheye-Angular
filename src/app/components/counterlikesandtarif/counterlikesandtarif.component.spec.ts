import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterlikesandtarifComponent } from './counterlikesandtarif.component';

describe('CounterlikesandtarifComponent', () => {
  let component: CounterlikesandtarifComponent;
  let fixture: ComponentFixture<CounterlikesandtarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterlikesandtarifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterlikesandtarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
