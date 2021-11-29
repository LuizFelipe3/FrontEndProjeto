import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameseconsolesComponent } from './gameseconsoles.component';

describe('GameseconsolesComponent', () => {
  let component: GameseconsolesComponent;
  let fixture: ComponentFixture<GameseconsolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameseconsolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameseconsolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
