import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeProduitComponent } from './liste-de-produit.component';

describe('ListeDeProduitComponent', () => {
  let component: ListeDeProduitComponent;
  let fixture: ComponentFixture<ListeDeProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDeProduitComponent]
    });
    fixture = TestBed.createComponent(ListeDeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
