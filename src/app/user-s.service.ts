import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserSService {
 private username: string;
 private client_ID = '8f8ca1b9f46944953b221e93ba90793030b38de9';
 private client_secret= ' a0491ce4b9bad3f63000a99ef95848ea54d06694';
  constructor(private http: HttpClient) {
console.log(' service is ready ');
// tslint:disable-next-line: no-unused-expression
this.username = 'BRIANCHERUIYOT';
   }
   getProfile() {
      // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id' + this.client_ID + '&client_secret=' + this.client_secret ).pipe(map(res => res));
   }
   getRepos() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id' + this.client_ID + '&client_secret=' + this.client_secret ).pipe(map(res => res));

   }
   updateProfile(username: string) {
      this.username = username;
   }
}