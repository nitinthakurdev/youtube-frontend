import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourclipsComponent } from './yourclips.component';

describe('YourclipsComponent', () => {
  let component: YourclipsComponent;
  let fixture: ComponentFixture<YourclipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourclipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourclipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
