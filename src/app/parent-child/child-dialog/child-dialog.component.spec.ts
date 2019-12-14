import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDialogComponent } from './child-dialog.component';

describe('ChildDialogComponent', () => {
  let component: ChildDialogComponent;
  let fixture: ComponentFixture<ChildDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
