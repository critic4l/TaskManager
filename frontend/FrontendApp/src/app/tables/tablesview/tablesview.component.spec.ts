import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesviewComponent } from './tablesview.component';

describe('TablesviewComponent', () => {
  let component: TablesviewComponent;
  let fixture: ComponentFixture<TablesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
