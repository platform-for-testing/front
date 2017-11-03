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
var CreateNewTestHeaderComponent = /** @class */ (function () {
    function CreateNewTestHeaderComponent() {
        this.testTitle = 'Test title';
        this.formDescription = '';
    }
    CreateNewTestHeaderComponent.prototype.onUpdateTestTitle = function (event) {
        this.testTitle = event.target.value;
    };
    CreateNewTestHeaderComponent.prototype.onUpdateFormDescription = function (event) {
        this.formDescription = event.target.value;
    };
    CreateNewTestHeaderComponent.prototype.ngOnInit = function () {
    };
    CreateNewTestHeaderComponent = __decorate([
        core_1.Component({
            selector: 'pt-create-new-test-header',
            templateUrl: './create-new-test-header.component.html',
            styleUrls: ['./create-new-test-header.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CreateNewTestHeaderComponent);
    return CreateNewTestHeaderComponent;
}());
exports.CreateNewTestHeaderComponent = CreateNewTestHeaderComponent;
//# sourceMappingURL=create-new-test-header.component.js.map