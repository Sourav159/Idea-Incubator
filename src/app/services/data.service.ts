import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

//Urls for the API server
const baseURL = 'http://localhost:4000/api/ideas';
const holdURL = 'http://localhost:4000/api/ideas-hold';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  //Method to read all the data in the server in ascending order of idea value
  readSort() {
    return this.httpClient.get(baseURL);
  }

  //Method to read the data for a particular id in the server
  read(id: number) {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  //Method to add data in the main server
  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  //Method to add data in the defered server
  createHold(data: any): Observable<any> {
    return this.httpClient.post(holdURL, data);
  }

  //Method to update the data in the server
  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  //Method to delete the data for a particular id in the server
  delete(id: any){
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  //Method to delete all the data in the server
  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

}
