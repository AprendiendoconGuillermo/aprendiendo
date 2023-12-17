import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootComponent } from './spring-boot.component';

describe('SpringBootComponent', () => {
  let component: SpringBootComponent;
  let fixture: ComponentFixture<SpringBootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpringBootComponent]
    });
    fixture = TestBed.createComponent(SpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
