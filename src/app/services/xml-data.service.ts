import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XmlDataService {
  private apiUrl = 'http://localhost:8094/api/excel/downloadXML';

  constructor(private http: HttpClient) { }

  downloadXml(): Observable<Blob> {
    return this.http.get(this.apiUrl, { responseType: 'blob' });
  }
}
