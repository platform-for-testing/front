import { HostListener, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';


@Component({
  selector: 'pt-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: MultiselectComponent
  }]
})

export class MultiselectComponent implements ControlValueAccessor, OnInit {
  @Input() selectContent: any;
  @Output() currentType: EventEmitter<any> = new EventEmitter();
  mulsel = true;
  mulselContent = false;
  currentInner: any;
  currentClass: string;
  onChange;

  writeValue(value: any) {
    if (value !== undefined) {
      console.log(value);
      this.currentInner = value;
    }
  }

  propagateChange = (value: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  openContent() {
    this.mulselContent = !this.mulselContent;
  }

  clickInside($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  chooseItem(value, icon, select, $event: Event) {
    this.currentInner = value;
    this.currentClass = icon;
    this.currentType.emit(value);
    this.openContent();
    this.propagateChange(this.currentInner);
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if (this.mulselContent) {
      this.mulselContent = false;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
