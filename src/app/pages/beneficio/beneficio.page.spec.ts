import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioPage } from './beneficio.page';

describe('BeneficioPage', () => {
  let component: BeneficioPage;
  let fixture: ComponentFixture<BeneficioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
