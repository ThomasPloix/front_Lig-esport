import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTounamentComponent } from './sidebar-tounament.component';

describe('SidebarTounamentComponent', () => {
  let component: SidebarTounamentComponent;
  let fixture: ComponentFixture<SidebarTounamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarTounamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarTounamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
