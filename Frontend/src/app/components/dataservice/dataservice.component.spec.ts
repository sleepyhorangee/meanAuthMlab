import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceComponent } from './dataservice.component';

describe('DataServiceComponent', () => {
  let component: DataServiceComponent;
  let fixture: ComponentFixture<DataServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
