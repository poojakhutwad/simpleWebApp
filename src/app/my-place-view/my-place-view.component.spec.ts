import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaceViewComponent } from './my-place-view.component';

describe('MyPlaceViewComponent', () => {
  let component: MyPlaceViewComponent;
  let fixture: ComponentFixture<MyPlaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPlaceViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
