import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronThroneCandidatesComponent } from './iron-throne-candidates.component';

describe('IronThroneCandidatesComponent', () => {
  let component: IronThroneCandidatesComponent;
  let fixture: ComponentFixture<IronThroneCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronThroneCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronThroneCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
