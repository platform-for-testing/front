import { Component, OnInit } from '@angular/core';

const mulselItems = [
  {
    value: 'Multiple choices',
    icon: 'icon'
  },{
    value: 'Checkboxes',
    icon: 'icon icon_checkbox'
  },{
    value: 'Yes/No',
    icon: 'icon icon_truefalse'
  },{
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
  mulsel = true;
  mulselContent = false;

  currentInner = this.currentInner = 'Multiple choices';
  currentClass = this.currentClass = 'icon';

  mulselOpen() {
    this.mulselContent = !this.mulselContent
  };

  click(value, icon) {
      this.currentInner = value;
      this.currentClass = icon;
      this.mulselOpen();
      console.log('current value is ' + value + ',' + ' current icon class is ' + icon)
  }

  constructor() { }

  ngOnInit() { }
}
