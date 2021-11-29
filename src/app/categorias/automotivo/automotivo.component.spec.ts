import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotivoComponent } from './automotivo.component';

describe('AutomotivoComponent', () => {
  let component: AutomotivoComponent;
  let fixture: ComponentFixture<AutomotivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
