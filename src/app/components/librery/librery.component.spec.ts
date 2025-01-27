import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreryComponent } from './librery.component';

describe('LibreryComponent', () => {
  let component: LibreryComponent;
  let fixture: ComponentFixture<LibreryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibreryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibreryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
