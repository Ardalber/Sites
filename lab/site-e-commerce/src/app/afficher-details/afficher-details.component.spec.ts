import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDetailsComponent } from './afficher-details.component';

describe('AfficherDetailsComponent', () => {
  let component: AfficherDetailsComponent;
  let fixture: ComponentFixture<AfficherDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherDetailsComponent]
    });
    fixture = TestBed.createComponent(AfficherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
