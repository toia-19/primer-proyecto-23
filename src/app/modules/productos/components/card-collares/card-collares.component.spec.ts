import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollaresComponent } from './card-collares.component';

describe('CardCollaresComponent', () => {
  let component: CardCollaresComponent;
  let fixture: ComponentFixture<CardCollaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCollaresComponent]
    });
    fixture = TestBed.createComponent(CardCollaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
