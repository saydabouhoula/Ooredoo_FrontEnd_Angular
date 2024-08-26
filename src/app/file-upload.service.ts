import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = 'http://localhost:8023/api';  // Change this to your actual API URL

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  convertToXML(content: string, action: string): Observable<Blob> {
    const payload = { content, action };
    return this.http.post(`${this.baseUrl}/convert-to-xml`, payload, { responseType: 'blob' });
  }

  downloadXML(fileType: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/download-xml/${fileType}`, { responseType: 'blob' });
  }

  saveFile(blob: Blob, fileName: string): void {
    FileSaver.saveAs(blob, fileName);
  }
}
