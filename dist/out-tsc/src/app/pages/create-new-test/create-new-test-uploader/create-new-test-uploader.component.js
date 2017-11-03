"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CreateNewTestUploaderComponent = /** @class */ (function () {
    function CreateNewTestUploaderComponent() {
        this.imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/View_from_connors_hill_panorama.jpg'; // : string
        this.dragging = false; // : boolean
        this.loaded = false; // : boolean
        this.imageLoaded = false; // : boolean
    }
    CreateNewTestUploaderComponent.prototype.handleDragEnter = function () {
        this.dragging = true;
    };
    CreateNewTestUploaderComponent.prototype.handleDragLeave = function () {
        this.dragging = false;
    };
    CreateNewTestUploaderComponent.prototype.handleDrop = function (e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    };
    CreateNewTestUploaderComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    CreateNewTestUploaderComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.loaded = false;
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    CreateNewTestUploaderComponent.prototype.handleReaderLoaded = function (e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    CreateNewTestUploaderComponent = __decorate([
        core_1.Component({
            selector: 'pt-create-new-test-uploader',
            templateUrl: './create-new-test-uploader.component.html',
            styleUrls: ['./create-new-test-uploader.component.scss']
        })
    ], CreateNewTestUploaderComponent);
    return CreateNewTestUploaderComponent;
}());
exports.CreateNewTestUploaderComponent = CreateNewTestUploaderComponent;
//# sourceMappingURL=create-new-test-uploader.component.js.map