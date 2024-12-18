import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDetailComponent } from './competition-detail.component';

describe('CompetitionDetailComponent', () => {
  let component: CompetitionDetailComponent;
  let fixture: ComponentFixture<CompetitionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
