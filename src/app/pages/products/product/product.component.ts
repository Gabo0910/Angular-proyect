import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // Es el mecanismo o estrategia de deteccion de cambios que utiliza Angular, para saber cuando debe actualizar un componente
  // o toda la vista en caso de que la data haya cambiado
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  // El decorador input, es un componente (o directiva) hijo, significa que la propiedad puede recibir un valor de su componente padre
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
  onClick(): void {
    this.addToCartClick.emit(this.product);
  }
}
