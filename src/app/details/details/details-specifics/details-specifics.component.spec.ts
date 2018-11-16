import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSpecificsComponent } from './details-specifics.component';

describe('DetailsSpecificsComponent', () => {
  let component: DetailsSpecificsComponent;
  let fixture: ComponentFixture<DetailsSpecificsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSpecificsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
