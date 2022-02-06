import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueReportnComponent } from './issue-reportn.component';

describe('IssueReportnComponent', () => {
  let component: IssueReportnComponent;
  let fixture: ComponentFixture<IssueReportnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueReportnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueReportnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
