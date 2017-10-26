import { HostListener, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';


@Component({
  selector: 'pt-create-new-test-multiselect',
  templateUrl: './create-new-test-multiselect.component.html',
  styleUrls: ['./create-new-test-multiselect.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: CreateNewTestMultiselectComponent
  }]
})

export class CreateNewTestMultiselectComponent implements ControlValueAccessor, OnInit {
  @Input() selectContent: any;
  @Output() currentType: EventEmitter<any> = new EventEmitter();
  mulsel = true;
  mulselContent = false;
  currentInner: any;
  currentClass: string;

  writeValue(value: any) {
    this.currentInner = value;
  }

  registerOnChange(fn) {
    this.writeValue = fn;
  }

  registerOnTouched(fn) {
  }

  mulselOpen() {
    this.mulselContent = !this.mulselContent;
  }

  click(value, icon, select, $event: Event) {
    this.currentInner = value;
    this.currentClass = icon;
    this.currentType.emit(value);
    this.mulselOpen();
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
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
