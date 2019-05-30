import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronThroneComponent } from './iron-throne.component';

describe('IronThroneComponent', () => {
  let component: IronThroneComponent;
  let fixture: ComponentFixture<IronThroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronThroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronThroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
