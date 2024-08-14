import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpublicacionesComponent } from './editarpublicaciones.component';

describe('EditarpublicacionesComponent', () => {
  let component: EditarpublicacionesComponent;
  let fixture: ComponentFixture<EditarpublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarpublicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
