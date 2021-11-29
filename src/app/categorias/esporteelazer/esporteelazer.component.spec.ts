import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsporteelazerComponent } from './esporteelazer.component';

describe('EsporteelazerComponent', () => {
  let component: EsporteelazerComponent;
  let fixture: ComponentFixture<EsporteelazerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsporteelazerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsporteelazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
