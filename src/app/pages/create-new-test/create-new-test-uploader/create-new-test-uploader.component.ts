
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-app-create-new-test-uploader',
  templateUrl: './create-new-test-uploader.component.html',
  styleUrls: ['./create-new-test-uploader.component.scss'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class CreateNewTestUploaderComponent {
    imageSrc: String = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/View_from_connors_hill_panorama.jpg';
    activeColor: String = 'green';
    baseColor: String = '#ccc';
    overlayColor: String = 'rgba(255,255,255,0.5)';
    iconColor: String = '#ccc';
    borderColor: String = 'transparent';

    dragging: Boolean = false;
    loaded: Boolean = false;
    imageLoaded: Boolean = false;

    handleDragEnter() {
        this.dragging = true;
    }

    handleDragLeave() {
        this.dragging = false;
    }

    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }

    handleImageLoad() {
        this.imageLoaded = true;
        this.iconColor = this.overlayColor;
    }


    handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        const pattern = /image-*/;
        const reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }

    _handleReaderLoaded(e) {
        const reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }

    _setActive() {
        this.borderColor = this.activeColor;
        if (this.imageSrc.length === 0) {
            this.iconColor = this.activeColor;
        }
    }

    _setInactive() {

        if (this.imageSrc.length === 0) {
            this.iconColor = this.baseColor;
        }
    }

}
