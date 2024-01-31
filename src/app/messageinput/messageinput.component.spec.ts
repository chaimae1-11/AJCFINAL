import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageinputComponent } from './messageinput.component';

describe('MessageinputComponent', () => {
  let component: MessageinputComponent;
  let fixture: ComponentFixture<MessageinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
