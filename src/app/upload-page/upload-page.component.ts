import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent {
  isUploading = false;

  uploadFile(): void {
    this.isUploading = true;

    // Simuler un délai de chargement
    setTimeout(() => {
      this.isUploading = false;
    }, 3000);
  }
}
