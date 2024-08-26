import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  showConfirmDialog = false;
  file: File | null = null;
  action: string = 'ajouter'; 

  constructor(private authService: AuthService, private fileUploadService: FileUploadService) { }

  ngOnInit(): void { }

  logout() {
    this.showConfirmDialog = true;
  }

  onConfirmDialogResult(result: boolean) {
    this.showConfirmDialog = false;
    if (result) {
      this.authService.logout();
    }
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onActionChange(event: any) {
    this.action = event.target.value;
  }

  uploadFile() {
    if (this.file) {
      this.fileUploadService.uploadFile(this.file).subscribe(response => {
        alert('File uploaded successfully');
        this.convertToXML();
      }, error => {
        alert('Failed to upload file');
      });
    }
  }

  convertToXML() {
    if (!this.file) {
      alert('Please upload a file first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const content = e.target.result;
      this.fileUploadService.convertToXML(content, this.action).subscribe(response => {
        alert('Conversion to XML successful');
        this.downloadXML(this.action);
      }, error => {
        alert('Failed to convert to XML');
      });
    };
    reader.readAsText(this.file);
  }

  downloadXML(fileType: string) {
    this.fileUploadService.downloadXML(fileType).subscribe(blob => {
      this.fileUploadService.saveFile(blob, `${fileType}.xml`);
    });
  }

}
