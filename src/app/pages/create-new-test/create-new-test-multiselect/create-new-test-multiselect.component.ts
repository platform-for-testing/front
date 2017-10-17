import { HostListener, Component, OnInit } from '@angular/core';

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

  mulselOpen() {
    this.mulselContent = !this.mulselContent;
  }

  click(value, icon, select, $event: Event) {
    console.log('inside');
    this.currentInner = value;
    this.currentClass = icon;
    this.mulselOpen()
  }

  clickedInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers
    console.log("CLICKED INSIDE, MENU WON'T HIDE");
  }

  @HostListener('document:click', ['$event']) 
  clickedOutside($event){
    console.log('outside');

    if (this.mulselContent) {
      this.mulselContent = false
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
