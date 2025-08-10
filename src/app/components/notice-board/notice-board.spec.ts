import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoard } from './notice-board';

describe('NoticeBoard', () => {
  let component: NoticeBoard;
  let fixture: ComponentFixture<NoticeBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticeBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
