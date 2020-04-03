import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuViewComponent } from './side-menu-view.component';

describe('SideMenuViewComponent', () => {
  let component: SideMenuViewComponent;
  let fixture: ComponentFixture<SideMenuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
