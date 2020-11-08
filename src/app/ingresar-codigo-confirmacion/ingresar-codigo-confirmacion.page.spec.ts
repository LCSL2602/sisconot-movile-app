import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresarCodigoConfirmacionPage } from './ingresar-codigo-confirmacion.page';

describe('IngresarCodigoConfirmacionPage', () => {
  let component: IngresarCodigoConfirmacionPage;
  let fixture: ComponentFixture<IngresarCodigoConfirmacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarCodigoConfirmacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresarCodigoConfirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
