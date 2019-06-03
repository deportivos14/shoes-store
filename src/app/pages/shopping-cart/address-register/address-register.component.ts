import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../../../models/Address';
import { AddressService } from '../../../services/address.service';
import { initialState } from './../../../reducers/shopping_cart.reducer';

@Component({
  selector: 'app-address-register',
  templateUrl: './address-register.component.html',
  styleUrls: ['./address-register.component.css']
})
export class AddressRegisterComponent implements OnInit {

  closeResult: string;
  addresses: Array<Object> = [];
  address:Address = {
    id: null,
    user_id: null,
    pin_code: null,
    nro_mobile: null,
    first_name: null,
    last_name: null,
    locaty_town: null,
    city_district: null,
    street_address: null,
    country: null,
    number_house: null,
  };

  constructor(private modalService: NgbModal, private addressServ: AddressService) { }

  ngOnInit() {
    let datos = [];
    this.addressServ.getAddressess().subscribe( res => this.mappingData(res, datos) );
    this.addresses = datos;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onSaveAndClose() {
    this.addressServ.createAddress( this.address )
      .then( 
        res => { this.modalService.dismissAll(); this.address = this.initState() }
      );
  }

  mappingData( data, res ) {
    data.forEach( ( doc ) => {
      let product = doc.data();
      product.id = doc.id;
      product.image = doc.id;
      res.push(product);
    });

    return res;
  }

  initState() {
    this.address = {
        id: null,
        user_id: null,
        pin_code: null,
        nro_mobile: null,
        first_name: null,
        last_name: null,
        locaty_town: null,
        city_district: null,
        street_address: null,
        country: null,
        number_house: null,
    }
    return this.address;
  }

}
