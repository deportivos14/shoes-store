import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductCardComponent } from './app-product-card.component';

describe('AppProductCardComponent', () => {
  let component: AppProductCardComponent;
  let fixture: ComponentFixture<AppProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
