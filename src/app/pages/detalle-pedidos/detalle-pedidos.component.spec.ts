import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePedidosComponent } from './detalle-pedidos.component';

describe('DetallePedidosComponent', () => {
  let component: DetallePedidosComponent;
  let fixture: ComponentFixture<DetallePedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
