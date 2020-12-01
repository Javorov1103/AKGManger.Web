import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OrdersService {
    private apiEndpoint = "https://localhost:44380/weatherforecast";

    constructor(private http: HttpClient) { }

    public testApi(): Observable<any[]> {
        return this.http.get<any[]>(this.apiEndpoint);
    }
}