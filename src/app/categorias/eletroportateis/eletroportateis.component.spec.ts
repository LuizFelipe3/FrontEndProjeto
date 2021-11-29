import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletroportateisComponent } from './eletroportateis.component';

describe('EletroportateisComponent', () => {
  let component: EletroportateisComponent;
  let fixture: ComponentFixture<EletroportateisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletroportateisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletroportateisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
