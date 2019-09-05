import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzPagePage } from './quizz-page.page';

describe('QuizzPagePage', () => {
  let component: QuizzPagePage;
  let fixture: ComponentFixture<QuizzPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
