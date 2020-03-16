import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfContentComponent } from './inf-content.component';

describe('InfContentComponent', () => {
  let component: InfContentComponent;
  let fixture: ComponentFixture<InfContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
