import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuicaoPage } from './contribuicao.page';

describe('ContribuicaoPage', () => {
  let component: ContribuicaoPage;
  let fixture: ComponentFixture<ContribuicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
