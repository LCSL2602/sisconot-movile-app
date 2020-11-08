import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoCorreoPage } from './ingreso-correo.page';

describe('IngresoCorreoPage', () => {
  let component: IngresoCorreoPage;
  let fixture: ComponentFixture<IngresoCorreoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoCorreoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
