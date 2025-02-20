import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcTeamComponent } from './oc-team.component';

describe('OcTeamComponent', () => {
  let component: OcTeamComponent;
  let fixture: ComponentFixture<OcTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OcTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OcTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
