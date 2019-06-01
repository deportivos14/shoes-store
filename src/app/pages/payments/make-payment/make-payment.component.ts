import { Component, OnInit, HostListener } from '@angular/core';
import { PaymentService } from './../../../services/payment.service';
import { environment } from './../../../../environments/environment';

declare var StripeCheckout:any;

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  handler: any;
  amount = 500;

  constructor(private paymentServ: PaymentService ) { }

  ngOnInit() {
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
