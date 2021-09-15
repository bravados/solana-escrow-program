import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrowInitializerComponent } from './scrow-initializer.component';

describe('ScrowInitializerComponent', () => {
  let component: ScrowInitializerComponent;
  let fixture: ComponentFixture<ScrowInitializerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrowInitializerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrowInitializerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
