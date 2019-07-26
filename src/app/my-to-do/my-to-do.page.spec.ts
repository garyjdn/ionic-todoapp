import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyToDoPage } from './my-to-do.page';

describe('MyToDoPage', () => {
  let component: MyToDoPage;
  let fixture: ComponentFixture<MyToDoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyToDoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
