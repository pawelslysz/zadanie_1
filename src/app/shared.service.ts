import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http:HttpClient) { }

  //  CRUD  //
  getAlbums():Observable<any[]> {
    return this.http.get<any>(this.APIUrl);
  }

  addAlbum(val:any) {
    return this.http.post(this.APIUrl, val);
  }

  updateAlbum(val:any) {
    return this.http.put(this.APIUrl + '/' + val.id, val);
  }

  deleteAlbum(val:any) {
    return this.http.delete(this.APIUrl + '/' + val.id, val);
  }

}
