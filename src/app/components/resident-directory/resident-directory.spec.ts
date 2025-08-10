import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDirectory } from './resident-directory';

describe('ResidentDirectory', () => {
  let component: ResidentDirectory;
  let fixture: ComponentFixture<ResidentDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentDirectory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentDirectory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
