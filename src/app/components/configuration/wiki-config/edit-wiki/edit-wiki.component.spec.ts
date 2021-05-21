import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWikiComponent } from './edit-wiki.component';

describe('EditWikiComponent', () => {
  let component: EditWikiComponent;
  let fixture: ComponentFixture<EditWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
