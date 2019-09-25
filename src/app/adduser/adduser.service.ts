import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app-model';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  private uriBase: string;
  private apiAddUser: string;
  private apiGetUser: string;
  private apiDelUser: string;

  constructor(private httpConnection: HttpClient) {
    this.uriBase = 'http://localhost:8888/api/v1/';
    this.apiAddUser = 'addUser/';
    this.apiGetUser = 'users/';
    this.apiDelUser = 'user/';
  }

  addnewuser(user: User): Observable<any> {
    const newUrl = this.uriBase + this.apiAddUser;
    return this.httpConnection.post(newUrl, user);
  }

  getallusers(): Observable<any> {
    const newUrl = this.uriBase + this.apiGetUser;
    return this.httpConnection.get(newUrl);
  }

  deleteuser(pEmpId: number): Observable<any> {
    const newUrl = this.uriBase + this.apiDelUser + pEmpId+"/";
    return this.httpConnection.delete(newUrl);
  }
}
