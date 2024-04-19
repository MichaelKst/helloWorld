import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloResultComponent } from './hello-result.component';

describe('HelloResultComponent', () => {
  let component: HelloResultComponent;
  let fixture: ComponentFixture<HelloResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
