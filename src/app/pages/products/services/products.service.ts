// Un servicio es una capa que añadimos para manejar los datos
// Un servicio es un proveedor de datos, que mantiene logica de
// acceso y logica de negocio
// Los servicios seran consumidos por los componentes y tendran
// la responsabilidad de acceder a la informacion y de manipularla

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

// Este decorador indica que estara disponible para toda la aplicacion
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  // Un observable es un flujo de datos en el tiempo, los observables
  // representan una coleccion de futuros valores o data
  getProducts():Observable<Product[]> {
    return this.http.get<Product[]> (this.apiURL);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = {"stock": stock}
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body)
  }
}
