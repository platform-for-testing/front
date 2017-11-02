import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'pt-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.scss']
})
export class FileuploaderComponent implements OnInit {

  imageSrc = '../../assets/images/uploader.svg';
  fileName = 'default filename';
  defaultImage = true;
  stageOne = false;
  isAdded = false;
  dragging = false;
  loaded = false;
  imageLoaded = false;
  x:number;
  y:number;

  @Input() showPicture;
  @Output() propagate = new EventEmitter<boolean>();

  closePopup(status:boolean) {
    this.showPicture = status;
    this.propagate.emit(status);
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

  handleReaderLoaded(e) {
    this.defaultImage = !this.defaultImage;
    this.stageOne = !this.stageOne;
    const reader = e.target;

    this.imageSrc = reader.result;
    this.loaded = true;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent): void  { 
    this.x = event.clientX;
    this.y = event.clientY;
  }

  cropImage() {
    console.log('cropper')
  }

  @Output() addition = new EventEmitter<boolean>();

  addImage() {
    this.closePopup(false);
    this.isAdded = true;
    this.addition.emit(this.isAdded)
  }

  constructor() { }

  ngOnInit() { }
}
