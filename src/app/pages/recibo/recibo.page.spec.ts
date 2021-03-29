import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboPage } from './recibo.page';

describe('ReciboPage', () => {
  let component: ReciboPage;
  let fixture: ComponentFixture<ReciboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
