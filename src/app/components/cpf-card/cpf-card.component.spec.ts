import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfCardComponent } from './cpf-card.component';

describe('CpfCardComponent', () => {
  let component: CpfCardComponent;
  let fixture: ComponentFixture<CpfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
