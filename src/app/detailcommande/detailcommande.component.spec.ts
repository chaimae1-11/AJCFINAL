import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcommandeComponent } from './detailcommande.component';

describe('DetailcommandeComponent', () => {
  let component: DetailcommandeComponent;
  let fixture: ComponentFixture<DetailcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
