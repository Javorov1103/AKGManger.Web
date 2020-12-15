import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contragent } from '../models/contragent';

@Injectable()
export class ClientService {
    
    constructor(private http: HttpClient) {}

    saveClient(client: Contragent) {
        console.log(client);
    }
}