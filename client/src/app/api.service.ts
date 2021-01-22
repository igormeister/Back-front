import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Client } from './client';
import { Auction } from './auction';
import { Lot } from './lot';
import { Basket } from './basket';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const clientUrl = '/api/Client';
const auctionUrl = '/api/Auction';
const lotUrl = '/api/Lot';
const basketUrl = '/api/Basket';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
     console.error(error); // log to console instead
     return of(result as T);
   };
 }

 getUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(clientUrl)
      .pipe(
        tap(client => console.log('fetched clients')),
        catchError(this.handleError('getUsers', []))
      );
  }

 addUser(client: Client): Observable<Client> {
   const url = `${this.API_SERVER}${clientUrl}/addUser`;
   return this.http.post<Client>(url, client, httpOptions).pipe(
     tap((cli: Client) => console.log('added user w/ id=${cli._id}')),
     catchError(this.handleError<Client>('addUser'))
   );
 }

 getUser(id: string): Observable<Client> {
   const url = `${this.API_SERVER}${clientUrl}/getUser/${id}`;
   return this.http.get<Client>(url).pipe(
     tap(_ => console.log('fetched user id=${id}')),
     catchError(this.handleError<Client>('getUser id=${id}'))
   );
 }

 addAuction(auction: Auction): Observable<Auction> {
   const url = `${this.API_SERVER}${auctionUrl}/addAuction`;
   return this.http.post<Auction>(url, auction, httpOptions).pipe(
     tap((auc: Auction) => console.log('added auction /w id=${auc._id}')),
     catchError(this.handleError<Auction>('addAuction'))
   );
 }

 getAuctions(): Observable<Auction[]> {
    const url = `${this.API_SERVER}${auctionUrl}/getAuctions`
    return this.http.get<Auction[]>(url)
      .pipe(
        tap(auction => console.log('fetched auctions')),
        catchError(this.handleError('getAuctions', []))
      );
  }

  getAuction(id: string): Observable<Auction> {
  const url = `${this.API_SERVER}${auctionUrl}/getAuction/${id}`;
  return this.http.get<Auction>(url).pipe(
    tap(_ => console.log(`fetched auction id=${id}`)),
    catchError(this.handleError<Auction>(`getAuction id=${id}`))
  );
}

  editAuction(id: any, auction: Auction): Observable<any> {
    const url = `${this.API_SERVER}${auctionUrl}/editAuction/${id}`;
    return this.http.put(url, auction, httpOptions).pipe(
      tap(_ => console.log(`updated auction id=${id}`)),
      catchError(this.handleError<any>('AditAuction'))
    );
  }

  deleteAuction(id: any): Observable<Auction> {
    const url = `${this.API_SERVER}${auctionUrl}/deleteAuction/${id}`;
    return this.http.delete<Auction>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted auction id=${id}`)),
      catchError(this.handleError<Auction>('deleteAuction'))
    );
  }

  addLot(lot: Lot): Observable<Lot> {
    const url = `${this.API_SERVER}${lotUrl}/addLot`;
    return this.http.post<Lot>(url, lot, httpOptions).pipe(
      tap((lot: Lot) => console.log('added lot /w id=${lot._id}')),
      catchError(this.handleError<Lot>('addLot'))
    );
  }

  getLots(): Observable<Lot[]> {
    const url = `${this.API_SERVER}${lotUrl}/getLots`;
     return this.http.get<Lot[]>(url)
       .pipe(
         tap(lot => console.log('fetched lots')),
         catchError(this.handleError('getLots', []))
       );
   }

   getLot(id: string): Observable<Lot> {
   const url = `${this.API_SERVER}${lotUrl}/getLot/${id}`;
   return this.http.get<Lot>(url).pipe(
     tap(_ => console.log(`fetched lot id=${id}`)),
     catchError(this.handleError<Lot>(`getLot id=${id}`))
   );
  }

   editLot(id: any, lot: Lot): Observable<any> {
     const url = `${this.API_SERVER}${lotUrl}/editLot/${id}`;
     return this.http.put(url, lot, httpOptions).pipe(
       tap(_ => console.log(`updated lot id=${id}`)),
       catchError(this.handleError<any>('EditLot'))
     );
   }

   deleteLot(id: any): Observable<Lot> {
     const url = `${this.API_SERVER}${lotUrl}/deleteLot/${id}`;
     return this.http.delete<Lot>(url, httpOptions).pipe(
       tap(_ => console.log(`deleted lot id=${id}`)),
       catchError(this.handleError<Lot>('deleteLot'))
     );
   }

   getBaskets(): Observable<Basket[]> {
      return this.http.get<Basket[]>(basketUrl)
        .pipe(
          tap(basket => console.log('fetched baskets')),
          catchError(this.handleError('getBaskets', []))
        );
    }

   addBasket(basket: Basket): Observable<Basket> {
     const url = `${this.API_SERVER}${basketUrl}/addBasket`;
     return this.http.post<Basket>(url, basket, httpOptions).pipe(
       tap((bas: Basket) => console.log('added basket w/ id=${bas._id}')),
       catchError(this.handleError<Basket>('addBasket'))
     );
   }

   getBasket(id: string): Observable<Basket> {
    const url = `${this.API_SERVER}${basketUrl}/${id}`;
     return this.http.get<Basket>(url).pipe(
       tap(_ => console.log('fetched basket id=${id}')),
       catchError(this.handleError<Basket>('getBasket id=${id}'))
     );
   }

}
