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
var test_1 = require("../../models/test");
var WraperComponent = /** @class */ (function () {
    function WraperComponent() {
        this.tests = [
            new test_1.Test('Тест по Git. Начальный уровень', 4, 10),
            new test_1.Test('Тест по HTML. Средний уровень', 5, 12),
            new test_1.Test('Тест по JS на тему: "Основы. Часть 05', 6, 8),
            new test_1.Test('Тест по английскому на тему: "Основы.', 4, 4),
        ];
    }
    WraperComponent.prototype.ngOnInit = function () {
    };
    WraperComponent = __decorate([
        core_1.Component({
            selector: 'pt-tests-list',
            templateUrl: './tests-list.component.html',
            styleUrls: ['./tests-list.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], WraperComponent);
    return WraperComponent;
}());
exports.WraperComponent = WraperComponent;
//# sourceMappingURL=tests-list.component.js.map