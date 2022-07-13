import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drugform2Component } from './drugform2.component';

describe('Drugform2Component', () => {
  let component: Drugform2Component;
  let fixture: ComponentFixture<Drugform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Drugform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Drugform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
