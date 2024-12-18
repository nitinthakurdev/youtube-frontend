import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedvideoComponent } from './likedvideo.component';

describe('LikedvideoComponent', () => {
  let component: LikedvideoComponent;
  let fixture: ComponentFixture<LikedvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikedvideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
