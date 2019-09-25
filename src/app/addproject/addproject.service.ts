import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../app-model';

@Injectable({
  providedIn: 'root'
})
export class AddprojectService {

  private uriBase: string;
  private apiAddProj: string;
  private apiGetUser: string;
  private apiGetProj: string;
  private apiUpdProj: string;
  private apiSuspendProj: string;

  constructor(private httpConnection: HttpClient) {
    this.uriBase = 'http://localhost:8888/api/v1/';
    this.apiAddProj = 'addProject/';
    this.apiGetUser = 'users/';
    this.apiGetProj = 'projects/';
    this.apiUpdProj = 'upd-project/';
    this.apiSuspendProj = 'sus-project/';
  }

  updatecount(): Observable<any> {
    const newUrl = this.uriBase + 'projects/';
    return this.httpConnection.get(newUrl);
  }

  getallproject(): Observable<any> {
    const newUrl = this.uriBase + this.apiGetProj;
    return this.httpConnection.get(newUrl);
  }

  getallusers(): Observable<any> {
    const newUrl = this.uriBase + this.apiGetUser;
    return this.httpConnection.get(newUrl);
  }

  addnewproject(pProj: Project): Observable<any> {
    const newUrl = this.uriBase + this.apiAddProj;
    return this.httpConnection.post(newUrl, pProj);
  }

  suspendproject(pProj: Project, pPid: string): Observable<any> {
    const newUrl = this.uriBase + this.apiSuspendProj + pPid;
    return this.httpConnection.put(newUrl, pProj);
  }
}
