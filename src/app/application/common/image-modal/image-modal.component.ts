import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string },
  public dialogRef: MatDialogRef<ImageModalComponent>) {}
  zoomFactor = 1.0; // Initial zoom factor
  zoomStep = 0.1;   // Zoom step for each click

  zoomIn(): void {
      this.zoomFactor += this.zoomStep;
      this.applyZoom();
  }

  zoomOut(): void {
      this.zoomFactor -= this.zoomStep;
      this.applyZoom();
  }

  applyZoom(): void {
      const image = document.querySelector('.zoomable-image') as HTMLImageElement;
      if (image) {
          image.style.transform = `scale(${this.zoomFactor})`;
      }
  }
  closeModal() {
    this.dialogRef.close();
}
}
