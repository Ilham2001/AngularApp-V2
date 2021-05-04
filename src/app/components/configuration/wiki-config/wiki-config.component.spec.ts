import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiConfigComponent } from './wiki-config.component';

describe('WikiConfigComponent', () => {
  let component: WikiConfigComponent;
  let fixture: ComponentFixture<WikiConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
