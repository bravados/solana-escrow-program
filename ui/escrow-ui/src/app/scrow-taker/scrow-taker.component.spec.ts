import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrowTakerComponent } from './scrow-taker.component';

describe('ScrowTakerComponent', () => {
  let component: ScrowTakerComponent;
  let fixture: ComponentFixture<ScrowTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrowTakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrowTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
