import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourvideoComponent } from './yourvideo.component';

describe('YourvideoComponent', () => {
  let component: YourvideoComponent;
  let fixture: ComponentFixture<YourvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourvideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
