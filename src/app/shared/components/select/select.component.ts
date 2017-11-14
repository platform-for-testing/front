import { HostListener, Component, Input, Output , EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ISelectItem } from '../../models/select-item';


@Component({
  selector: 'pt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: SelectComponent
  }]
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() selectOptions: ISelectItem[];

  @Output() change: EventEmitter<number | string> = new EventEmitter();

  isSelectOpened = false;
  selectedOption: ISelectItem;

  propagateChange = (value: any) => {};

  constructor() {
  }

  ngOnInit() {
    console.log(this.selectOptions);
    if (!this.selectedOption) {
      this.selectedOption = this.selectOptions[0];
    }
  }

  @HostListener('document:click', ['$event'])
  clickedOutside($event) {
    if (this.isSelectOpened) {
      this.isSelectOpened = false;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  toggle() {
    this.isSelectOpened = !this.isSelectOpened;
  }

  handleSelectToggle(event) {
    event.preventDefault();
    event.stopPropagation();

    this.toggle();
  }

  chooseItem(option: ISelectItem, $event: Event) {
    this.selectedOption = option;
    this.toggle();
    this.propagateChange(option.value);
    this.change.emit(option.value);
  }

  writeValue(value: string | number) {
    if (value !== undefined) {
      this.selectedOption = this.selectOptions.find(option => option.value === value);
    }
  }
}
