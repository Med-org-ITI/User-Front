import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CHECKOUTService {
    constructor (public check: HttpClient) { }

    CheckURL = 'http://localhost:3000/checkout';

    CheckOut(newCheckout: any) {
        return this.check.post(this.CheckURL, newCheckout);
    }
}