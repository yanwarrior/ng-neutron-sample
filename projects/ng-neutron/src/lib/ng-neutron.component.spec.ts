import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNeutronComponent } from './ng-neutron.component';

describe('NgNeutronComponent', () => {
  let component: NgNeutronComponent;
  let fixture: ComponentFixture<NgNeutronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNeutronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNeutronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
