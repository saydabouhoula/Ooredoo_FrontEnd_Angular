import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ExcelService } from '../services/excel.service';
import { XmlDataService } from '../services/xml-data.service'; // Importez le service XML


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  showConfirmDialog = false;
  file: File | null = null;
  excelData: any[] = []; // Variable pour stocker les données Excel

  constructor(
    private authService: AuthService,
    private excelService: ExcelService,
    private xmlDataService: XmlDataService 
  ) { }

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

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.excelService.parseExcel(this.file).then(data => {
        this.excelData = data; // Utilisez directement les données formatées
      }).catch(error => {
        console.error('Error parsing excel file', error);
      });
    }
  }

  onUpload() {
    if (this.excelData.length > 0) {
      console.log('Uploading data:', this.excelData); // Ajouter cette ligne pour voir ce qui est envoyé
      this.excelService.uploadData(this.excelData).subscribe(
        data => console.log('Data uploaded successfully', data),
        error => console.error('Error uploading data', error)
      );
    } else {
      console.error('No data to upload');
    }
  }

  downloadXml() {
    this.xmlDataService.downloadXml().subscribe(
      (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'RS_DATA.xml'; // Nom du fichier XML à télécharger
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error => console.error('Error downloading XML', error)
    );
  }
}
