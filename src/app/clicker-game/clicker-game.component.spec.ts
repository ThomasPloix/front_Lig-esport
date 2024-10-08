import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerGameComponent } from './clicker-game.component';

describe('ClickerGameComponent', () => {
  let component: ClickerGameComponent;
  let fixture: ComponentFixture<ClickerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickerGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
