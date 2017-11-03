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
var activation_1 = require("../../models/activation");
var ActivationsListWrapperComponent = /** @class */ (function () {
    function ActivationsListWrapperComponent() {
        this.activations = [
            new activation_1.Activation('ACTIVATION NAME', 2, 1, 3, '/assets/images/image.jpeg', true),
            new activation_1.Activation('ANOTHER ACTIVATOIN', 4, 5, 6, '/assets/images/image.jpeg', false),
        ];
    }
    ActivationsListWrapperComponent.prototype.ngOnInit = function () {
    };
    ActivationsListWrapperComponent = __decorate([
        core_1.Component({
            selector: 'pt-activations-list-wrapper',
            templateUrl: './activations-list-wrapper.component.html',
            styleUrls: ['./activations-list-wrapper.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], ActivationsListWrapperComponent);
    return ActivationsListWrapperComponent;
}());
exports.ActivationsListWrapperComponent = ActivationsListWrapperComponent;
//# sourceMappingURL=activations-list-wrapper.component.js.map