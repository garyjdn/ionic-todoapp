import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedToDoPage } from './completed-to-do.page';

describe('CompletedToDoPage', () => {
  let component: CompletedToDoPage;
  let fixture: ComponentFixture<CompletedToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedToDoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
