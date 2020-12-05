import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmarAlumnnoPage } from './confirmar-alumnno.page';

describe('ConfirmarAlumnnoPage', () => {
  let component: ConfirmarAlumnnoPage;
  let fixture: ComponentFixture<ConfirmarAlumnnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarAlumnnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarAlumnnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
