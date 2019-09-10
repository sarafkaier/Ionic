import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieForAdminPage } from './categorie-for-admin.page';

describe('CategorieForAdminPage', () => {
  let component: CategorieForAdminPage;
  let fixture: ComponentFixture<CategorieForAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieForAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieForAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
