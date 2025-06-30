import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLib } from './forms-lib';

describe('FormsLib', () => {
  let component: FormsLib;
  let fixture: ComponentFixture<FormsLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
