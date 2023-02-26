import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreationsComponent } from './create-creations.component';

describe('CreateCreationsComponent', () => {
  let component: CreateCreationsComponent;
  let fixture: ComponentFixture<CreateCreationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCreationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
