import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drugform1Component } from './drugform1.component';

describe('Drugform1Component', () => {
  let component: Drugform1Component;
  let fixture: ComponentFixture<Drugform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Drugform1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Drugform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
