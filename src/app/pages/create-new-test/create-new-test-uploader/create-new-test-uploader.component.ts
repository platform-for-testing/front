import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'pt-create-new-test-uploader',
  templateUrl: './create-new-test-uploader.component.html',
  styleUrls: ['./create-new-test-uploader.component.scss']
})
export class CreateNewTestUploaderComponent implements OnInit{
  imageSrc: string = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/View_from_connors_hill_panorama.jpg';

  dragging = false; // : boolean
  loaded = false; // : boolean
  imageLoaded = false; // : boolean
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      background: ''
    });

    this.form.valueChanges.subscribe(value => console.log(value));
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
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }
}
