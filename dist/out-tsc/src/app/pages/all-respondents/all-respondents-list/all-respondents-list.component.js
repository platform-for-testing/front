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
var getRespondents_service_1 = require("../../../shared/services/getRespondents.service");
var AllRespondentsListComponent = /** @class */ (function () {
    function AllRespondentsListComponent(request) {
        this.request = request;
        this.request = request;
    }
    AllRespondentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.promiseRespondents = this.request.get();
        this.promiseRespondents.then(function (respondent) { return _this.respondentsList = respondent; }, function (error) { return _this.errorMessage = error; });
    };
    AllRespondentsListComponent = __decorate([
        core_1.Component({
            selector: 'pt-all-respondents-list',
            templateUrl: './all-respondents-list.component.html',
            styleUrls: ['./all-respondents-list.component.scss']
        }),
        __metadata("design:paramtypes", [getRespondents_service_1.GetRespondentsService])
    ], AllRespondentsListComponent);
    return AllRespondentsListComponent;
}());
exports.AllRespondentsListComponent = AllRespondentsListComponent;
//# sourceMappingURL=all-respondents-list.component.js.map