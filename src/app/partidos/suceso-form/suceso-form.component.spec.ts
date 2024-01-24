import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesoFormComponent } from './suceso-form.component';

describe('SucesoFormComponent', () => {
  let component: SucesoFormComponent;
  let fixture: ComponentFixture<SucesoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucesoFormComponent]
    });
    fixture = TestBed.createComponent(SucesoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
