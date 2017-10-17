import { Component, OnInit, Input } from '@angular/core';

const mulselItems = [{
    value: 'Multiple choices',
    icon: 'icon'
}, {
    value: 'Checkboxes',
    icon: 'icon icon_checkbox'
}, {
    value: 'Yes/No',
    icon: 'icon icon_truefalse'
}, {
    value: 'Ordering',
    icon: 'icon icon_ordering'
}];

@Component({
  selector: 'pt-create-new-test-multiselect',
  templateUrl: './create-new-test-multiselect.component.html',
  styleUrls: ['./create-new-test-multiselect.component.scss']
})

export class CreateNewTestMultiselectComponent implements OnInit {
  mulselItems = mulselItems;
  mulsel:boolean = true;
  mulselContent:boolean = false;
  currentInner:string = this.currentInner = 'Multiple choices';
  currentClass:string = this.currentClass = 'icon';
  event = this.event;
  select = this.select;

  mulselOpen() {
    this.event = event;
    
    if (!this.mulselItems) {
      this.mulselContent = !this.mulselContent;
    }

    else if (this.mulselItems && event.target != this.select) {
      this.mulselContent = !this.mulselContent;
    }
  }

  click(value, icon, select, $event: Event) {
    this.currentInner = value;
    this.currentClass = icon;
    this.select = select;
    this.event = event;
    this.mulselOpen();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
