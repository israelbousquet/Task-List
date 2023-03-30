import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieCardComponent } from './countrie-card.component';

describe('CountrieCardComponent', () => {
  let component: CountrieCardComponent;
  let fixture: ComponentFixture<CountrieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrieCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
