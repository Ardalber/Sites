import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherParIdComponent } from './afficher-par-id.component';

describe('AfficherParIdComponent', () => {
  let component: AfficherParIdComponent;
  let fixture: ComponentFixture<AfficherParIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherParIdComponent]
    });
    fixture = TestBed.createComponent(AfficherParIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
