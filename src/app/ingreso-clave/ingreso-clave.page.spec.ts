import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoClavePage } from './ingreso-clave.page';

describe('IngresoClavePage', () => {
  let component: IngresoClavePage;
  let fixture: ComponentFixture<IngresoClavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoClavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
