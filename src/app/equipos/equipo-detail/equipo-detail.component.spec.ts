import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoDetailComponent } from './equipo-detail.component';

describe('EquipoDetailComponent', () => {
  let component: EquipoDetailComponent;
  let fixture: ComponentFixture<EquipoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoDetailComponent]
    });
    fixture = TestBed.createComponent(EquipoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
