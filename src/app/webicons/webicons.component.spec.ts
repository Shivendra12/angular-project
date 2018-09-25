import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebiconsComponent } from './webicons.component';

describe('WebiconsComponent', () => {
  let component: WebiconsComponent;
  let fixture: ComponentFixture<WebiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
