import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPassanger } from '../models/IPassanger';
import { Observable, throwError, catchError } from 'rxjs';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root',
})
export class PassangerService {
  private serverUrl: string = 'http://localhost:9000'; //json server url

  constructor(private httpClient: HttpClient) {}

  // Get all Passangers
  public getAllPassangers(): Observable<IPassanger[]> {
    let dataUrl: string = `${this.serverUrl}/passangers`;
    return this.httpClient
      .get<IPassanger[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Get single Passanger
  public getPassanger(passangerId: string): Observable<IPassanger> {
    let dataUrl: string = ` ${this.serverUrl}/passangers/${passangerId}`;
    return this.httpClient
      .get<IPassanger>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Create Passanger
  public createPassanger(passanger: IPassanger): Observable<IPassanger> {
    let dataUrl: string = ` ${this.serverUrl}/passangers`;
    return this.httpClient
      .post<IPassanger>(dataUrl, passanger)
      .pipe(catchError(this.handleError));
  }

  // Update Passanger
  public updatePassanger(
    passanger: IPassanger,
    passangerId: string
  ): Observable<IPassanger> {
    let dataUrl: string = ` ${this.serverUrl}/passangers/${passangerId}`;
    return this.httpClient
      .put<IPassanger>(dataUrl, passanger)
      .pipe(catchError(this.handleError));
  }

  // Delete Passanger
  public deletePassanger(passangerId: string): Observable<{}> {
    let dataUrl: string = ` ${this.serverUrl}/passangers/${passangerId}`;
    return this.httpClient
      .delete<{}>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Get All Groups
  public getAllGroups(): Observable<IGroup[]> {
    let dataUrl: string = ` ${this.serverUrl}/groups`;
    return this.httpClient
      .get<IGroup[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Get single Passanger
  public getGroup(groupId: string): Observable<IGroup> {
    let dataUrl: string = ` ${this.serverUrl}/groups/${groupId}`;
    return this.httpClient
      .get<IGroup>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
    } else {
      errorMessage = `Status : ${error.status} \n Message:${error.message}`;
    }

    return throwError(errorMessage);
  }
}
