import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrailButtonComponent } from './navrail-button.component';

describe('NavrailButtonComponent', () => {
  let component: NavrailButtonComponent;
  let fixture: ComponentFixture<NavrailButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavrailButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavrailButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
