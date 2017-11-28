import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Question } from '../../../../models/question';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { questionTypes } from '../../../../constants/questions-types';

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
  hideItems = false;
  imageLoaded: string;
  valueChange: any;
  options: any[] = [];

  questionTypes = questionTypes;

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

  addOption() {
    const answersArray = this.form.get('answers') as FormArray;
    answersArray.push(this.createOption());
  }
  
  optionNew(ev) {
    if(ev.keyCode == 13) {
      this.addOption()
    }
  }

  createOption() : FormGroup {
    return this.fb.group({
      title: '',
      isCorrect: false
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Question', [Validators.required]],
      description: '',
      required: false,
      answers: this.fb.array([
        this.createOption()
      ]),
      type: '',
      image: '',
      points: [1, [Validators.min(1), Validators.max(10)]]
    });

    this.form.valueChanges.subscribe((value: Question) => {
      this.propagateChange(value);
      this.question = value;
    });
  }
  
  optionDubl(): void {
    this.options.push(this.createOption());
  }

  addPicture() {
    this.showPicture = !this.showPicture;
    this.hideItems = true;
  }

  delete() {
    console.log('function to delete the option...')
  }

  addOptionImage() {
    console.log('function to add an image to the option...')
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
    if (value !== void(0)) {
      this.form.patchValue(value);
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
