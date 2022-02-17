import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProductsComponent } from './di-products.component';

describe('DiProductsComponent', () => {
  let component: DiProductsComponent;
  let fixture: ComponentFixture<DiProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
