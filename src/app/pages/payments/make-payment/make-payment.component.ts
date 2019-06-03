import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from './../../../services/payment.service';
import { environment } from './../../../../environments/environment';
import { Address } from 'src/app/models/Address';
import { AddressService } from 'src/app/services/address.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

declare var StripeCheckout:any;

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  address;
  mount_cart: Observable<Number>;
  handler: any;
  amount: Number;

  constructor(private paymentServ: PaymentService, private activatedRoute: ActivatedRoute, private addressServ: AddressService, private storeCart: Store<{ mount_cart: Number }> ) {
    this.mount_cart = storeCart.pipe( select('mount_cart') );
    this.mount_cart.subscribe( res => {
      //console.log("este es en valor", res)
      this.amount = res;
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.addressServ.getAddress( params.id ).subscribe( res => {
        this.address = res;
        //console.log(res)
      });
    });

    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'assets/images/logo/logo2.png',
      locale: 'auto',
      token: token => {
        this.paymentServ.processPayment(token, this.amount)
      }
    });
  }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      excerpt: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }

}
