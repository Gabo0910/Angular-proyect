import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from 'src/app/shared/components/services/data.service';
import { Store } from 'src/app/shared/interfaces/stores.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    model = {
      name:'',
      store: '',
      shippingAddress: '',
      city: ''
    };

    stores: Store[] = []

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value:boolean): void {
    console.log(value);
  }

  getStores(): void {
    this.dataSvc.getStores()
    .pipe(tap ((stores:Store[]) => this.stores = stores))
    .subscribe()
  }
}
