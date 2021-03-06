import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsearchComponent } from './search.component';

describe('GitsearchComponent', () => {
  let component: GitsearchComponent;
  let fixture: ComponentFixture<GitsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});