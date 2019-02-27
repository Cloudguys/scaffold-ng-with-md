import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootLayoutComponent } from './root-layout.component';

describe('RootLayoutComponent', () => {
  let component: RootLayoutComponent;
  let fixture: ComponentFixture<RootLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
