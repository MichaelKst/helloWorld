import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBoardComponent } from './hello-board.component';

describe('HelloBoardComponent', () => {
  let component: HelloBoardComponent;
  let fixture: ComponentFixture<HelloBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
