"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FileuploaderComponent = /** @class */ (function () {
    function FileuploaderComponent() {
        this.imageSrc = '../../assets/images/uploader.svg';
        this.fileName = 'default filename';
        this.defaultImage = true;
        this.stageOne = false;
        this.isAdded = false;
        this.dragging = false;
        this.loaded = false;
        this.imageLoaded = false;
        this.propagate = new core_1.EventEmitter();
        this.propagateChange = function (value) { };
        this.addition = new core_1.EventEmitter();
        this.imageUploading = new core_1.EventEmitter();
    }
    FileuploaderComponent_1 = FileuploaderComponent;
    FileuploaderComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.imageSrc = value;
        }
    };
    FileuploaderComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    FileuploaderComponent.prototype.registerOnTouched = function () { };
    FileuploaderComponent.prototype.closePopup = function (status) {
        this.showPicture = status;
        this.propagate.emit(status);
    };
    FileuploaderComponent.prototype.handleDragEnter = function () {
        this.dragging = true;
    };
    FileuploaderComponent.prototype.handleDragLeave = function () {
        this.dragging = false;
    };
    FileuploaderComponent.prototype.handleDrop = function (e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    };
    FileuploaderComponent.prototype.handleImageLoad = function () {
        this.imageLoaded = true;
    };
    FileuploaderComponent.prototype.handleInputChange = function (e) {
        this.loaded = false;
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        var fileName = file.name;
        this.fileName = fileName;
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this.handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    FileuploaderComponent.prototype.handleReaderLoaded = function (e) {
        this.defaultImage = !this.defaultImage;
        this.stageOne = !this.stageOne;
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    };
    FileuploaderComponent.prototype.cropImage = function () {
        console.log('cropper');
    };
    FileuploaderComponent.prototype.addImage = function () {
        this.closePopup(false);
        this.isAdded = true;
        var loadImage = true;
        this.imageUploading.emit(this.imageSrc);
        this.addition.emit(this.isAdded);
    };
    FileuploaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FileuploaderComponent.prototype, "showPicture", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FileuploaderComponent.prototype, "propagate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FileuploaderComponent.prototype, "addition", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FileuploaderComponent.prototype, "imageUploading", void 0);
    FileuploaderComponent = FileuploaderComponent_1 = __decorate([
        core_1.Component({
            selector: 'pt-fileuploader',
            templateUrl: './fileuploader.component.html',
            styleUrls: ['./fileuploader.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: FileuploaderComponent_1
                }]
        }),
        __metadata("design:paramtypes", [])
    ], FileuploaderComponent);
    return FileuploaderComponent;
    var FileuploaderComponent_1;
}());
exports.FileuploaderComponent = FileuploaderComponent;
//# sourceMappingURL=fileuploader.component.js.map