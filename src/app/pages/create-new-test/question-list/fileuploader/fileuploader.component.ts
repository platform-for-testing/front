import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'pt-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: FileuploaderComponent
  }]
})
export class FileuploaderComponent implements ControlValueAccessor, OnInit {

  imageSrc = '../../assets/images/uploader.svg';
  fileName = '...';
  defaultImage = true;
  stageOne = false;
  isAdded = false;
  dragging = false;
  loaded = false;
  imageLoaded = false;

  @Input() showPicture;
  @Output() propagatePopupClosing = new EventEmitter<boolean>();
  @Output() propagateFileAddition = new EventEmitter<boolean>();
  @Output() imageUploading = new EventEmitter<any>();

  writeValue(value: any) {
    if (value !== undefined) {
      this.imageSrc = this.imageSrc;
    }
  }

  propagateChange = (value: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  closePopup(status: boolean) {
    this.showPicture = status;
    this.propagatePopupClosing.emit(status);
  }

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
  }

  handleInputChange(e) {
    this.loaded = false;

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    const fileName = file.name;

    this.fileName = fileName;

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded = (event) => {
    this.defaultImage = !this.defaultImage;
    this.stageOne = !this.stageOne;
    const reader = event.target;

    this.imageSrc = reader.result;
    this.loaded = true;
  }

  cropImage() {
    console.log('cropper');
  }

  pictureUpload() {
    this.imageUploading.emit(this.imageSrc);
  }

  addImage() {
    this.closePopup(false);
    this.isAdded = true;
    this.pictureUpload();
    this.propagateChange(this.imageSrc);
    this.propagateFileAddition.emit(this.isAdded);
  }

  constructor() { }

  ngOnInit() { }
}
