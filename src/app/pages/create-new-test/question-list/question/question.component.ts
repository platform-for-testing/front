import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Question } from './question';
import { QuestionListComponent } from '../question-list.component';
import { MultiselectComponent } from '../../../../shared/components/multiselect/multiselect.component';

enum Types {
  Checkboxes,
  Radio,
  YesNo,
  Order,
  Open
}

@Component({
  selector: 'pt-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => QuestionComponent),
                multi: true }]
})
export class QuestionComponent implements ControlValueAccessor, OnInit {
  form: FormGroup;
  pictureAdded = false;
  showPicture = false;
  imageLoaded: string;
  valueChange: any;
  types = [{ value: Types.Radio,
             icon: 'select__icon pt-dot-circle-o',
             label: 'One choice' },
           { value: Types.Checkboxes,
             icon: 'select__icon pt-check-square-o',
             label: 'Multiple choices' },
           { value: Types.YesNo,
             icon: 'select__icon pt-thumbs-up',
             label: 'Yes/No' },
           { value: Types.Order,
             icon: 'select__icon pt-sort',
             label: 'Ordering' },
           { value: Types.Open,
             icon: 'select__icon pt-external-link-square',
             label: 'Open answer' }];

  points = [{
    value: 1,
    icon: 'icon'
  }, {
    value: 2,
    icon: 'icon'
  }, {
    value: 3,
    icon: 'icon'
  }, {
    value: 4,
    icon: 'icon'
  }];

  @Input() isEditing: boolean;
  @Input() isPictureAdded: boolean;
  @Input() index: number;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() clone: EventEmitter<any> = new EventEmitter();

  question: Question;

  constructor(private fb: FormBuilder) {

  }

  @Input() pictureToAdd;

  receiveAdded(isAdded: boolean) {
    this.isPictureAdded = isAdded;
    if (this.isEditing === true) {
      this.changeAdditionValue();
    }
  }

  pictureUpload(value) {
    this.imageLoaded = value;
  }

  receive(event) {
    this.showPicture = event;
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Question', [Validators.required]],
      description: '',
      required: false,
      type: '',
      image: '',
      points: [1, [Validators.min(1), Validators.max(10)]]
    });

    this.form.valueChanges.subscribe((value: Question) => {
      this.propagateChange(value);
      this.question = value;
    });
  }

  addPicture() {
    this.showPicture = !this.showPicture;
  }

  currentType(value) {
    this.valueChange = value;
  }

  changeAdditionValue() {
    this.pictureAdded = this.isPictureAdded;
  }

  propagateChange(value: Question) {
  }

  writeValue(value: Question) {
    console.log(value);
    if (value !== void(0)) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
  }

  editQuestion() {
    this.edit.emit();
  }

  removeQuestion() {
    this.remove.emit();
  }

  cloneQuestion() {
    this.clone.emit();
  }
}
