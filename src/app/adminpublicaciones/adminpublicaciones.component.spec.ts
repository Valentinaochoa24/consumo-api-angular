import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpublicacionesComponent } from './adminpublicaciones.component';

describe('AdminpublicacionesComponent', () => {
  let component: AdminpublicacionesComponent;
  let fixture: ComponentFixture<AdminpublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminpublicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
