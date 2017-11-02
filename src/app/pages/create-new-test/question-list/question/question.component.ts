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
  pictureAdded: boolean = false;
  showPicture:boolean = false;
  valueChange: any;
  types = [{ value: Types.Radio,
             icon: 'icon',
             label: 'One choice' },
           { value: Types.Checkboxes,
             icon: 'icon icon_checkbox',
             label: 'Multiple choices' },
           { value: Types.YesNo,
             icon: 'icon icon_truefalse',
             label: 'Yes/No' },
           { value: Types.Order,
             icon: 'icon icon_ordering',
             label: 'Ordering' },
           { value: Types.Open,
             icon: 'icon',
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
  @Input() ifPictureAdded: boolean;
  @Input() index: number;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() clone: EventEmitter<any> = new EventEmitter();

  question: Question;

  constructor(private fb: FormBuilder) {

  }

  @Input() pictureToAdd;

  receiveAdded(event: boolean) {
    this.ifPictureAdded = event;
    console.log(event);
    this.isEditing == true ? this.changeAdditionValue() : false
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
    this.pictureAdded = this.ifPictureAdded;
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
