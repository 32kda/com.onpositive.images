/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PictureTableComponent } from './picture-table.component';

describe('PictureTableComponent', () => {
  let component: PictureTableComponent;
  let fixture: ComponentFixture<PictureTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
