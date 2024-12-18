import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelsComponent } from './reels.component';

describe('ReelsComponent', () => {
  let component: ReelsComponent;
  let fixture: ComponentFixture<ReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
