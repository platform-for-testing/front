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
var MultiselectComponent = /** @class */ (function () {
    function MultiselectComponent() {
        this.currentType = new core_1.EventEmitter();
        this.mulsel = true;
        this.mulselContent = false;
        this.propagateChange = function (value) { };
    }
    MultiselectComponent_1 = MultiselectComponent;
    MultiselectComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.currentInner = value;
        }
    };
    MultiselectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    MultiselectComponent.prototype.registerOnTouched = function () { };
    MultiselectComponent.prototype.openContent = function () {
        this.mulselContent = !this.mulselContent;
    };
    MultiselectComponent.prototype.clickInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    MultiselectComponent.prototype.chooseItem = function (value, icon, select, $event) {
        this.currentInner = value;
        this.currentClass = icon;
        this.currentType.emit(value);
        this.openContent();
        this.propagateChange(this.currentInner);
    };
    MultiselectComponent.prototype.clickedOutside = function ($event) {
        if (this.mulselContent) {
            this.mulselContent = false;
        }
    };
    MultiselectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MultiselectComponent.prototype, "selectContent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MultiselectComponent.prototype, "currentType", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MultiselectComponent.prototype, "clickedOutside", null);
    MultiselectComponent = MultiselectComponent_1 = __decorate([
        core_1.Component({
            selector: 'pt-multiselect',
            templateUrl: './multiselect.component.html',
            styleUrls: ['./multiselect.component.scss'],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    multi: true,
                    useExisting: MultiselectComponent_1
                }]
        }),
        __metadata("design:paramtypes", [])
    ], MultiselectComponent);
    return MultiselectComponent;
    var MultiselectComponent_1;
}());
exports.MultiselectComponent = MultiselectComponent;
//# sourceMappingURL=multiselect.component.js.map