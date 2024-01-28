import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemmesComponent } from './femmes.component';

describe('FemmesComponent', () => {
  let component: FemmesComponent;
  let fixture: ComponentFixture<FemmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
