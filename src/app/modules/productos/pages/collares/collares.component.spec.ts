import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaresComponent } from './collares.component';

describe('CollaresComponent', () => {
  let component: CollaresComponent;
  let fixture: ComponentFixture<CollaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaresComponent]
    });
    fixture = TestBed.createComponent(CollaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
