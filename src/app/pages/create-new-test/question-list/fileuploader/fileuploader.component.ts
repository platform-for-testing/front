import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'pt-fileuploader',
	templateUrl: './fileuploader.component.html',
	styleUrls: ['./fileuploader.component.scss']
})
export class FileuploaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	hideUploader() {
		console.log('function to hide popup')
	}

}
