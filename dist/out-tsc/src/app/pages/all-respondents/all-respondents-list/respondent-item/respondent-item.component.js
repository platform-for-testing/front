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
var respondent_model_1 = require("../../../models/respondent.model");
var RespondentItemComponent = /** @class */ (function () {
    function RespondentItemComponent() {
    }
    RespondentItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", respondent_model_1.RespondentModel)
    ], RespondentItemComponent.prototype, "respondent", void 0);
    RespondentItemComponent = __decorate([
        core_1.Component({
            selector: 'pt-respondent-item',
            templateUrl: './respondent-item.component.html',
            styleUrls: ['./respondent-item.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], RespondentItemComponent);
    return RespondentItemComponent;
}());
exports.RespondentItemComponent = RespondentItemComponent;
//# sourceMappingURL=respondent-item.component.js.map