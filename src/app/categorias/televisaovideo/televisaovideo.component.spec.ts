import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisaovideoComponent } from './televisaovideo.component';

describe('TelevisaovideoComponent', () => {
  let component: TelevisaovideoComponent;
  let fixture: ComponentFixture<TelevisaovideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisaovideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisaovideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
