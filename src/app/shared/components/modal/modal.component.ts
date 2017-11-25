import {
    Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener, Input, Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'pt-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ModalComponent implements OnInit {
    @ViewChild('body') body;

    @Input()
    set isOpened(state: boolean) {
        this._isOpened = state;
        this.isOpenedChange.emit(state);
    }

    get isOpened() {
        return this._isOpened;
    }

    private _isOpened: boolean;

    @Output()
    isOpenedChange: EventEmitter<boolean> = new EventEmitter();

    constructor(private eref: ElementRef) {
    }

    @HostListener('document:click', ['$event'])
    closeModal(event) {
        if (!this.eref.nativeElement.contains(event.target)) {
            this.isOpened = false;
        }
    }

   @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
     this.isOpened = false;
   }

    ngOnInit() {
    }
}
