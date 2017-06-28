import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UifTextfieldComponent } from './uif-textfield.component';

describe('UifTextfieldComponent', () => {
  let component: UifTextfieldComponent;
  let fixture: ComponentFixture<UifTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UifTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UifTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
