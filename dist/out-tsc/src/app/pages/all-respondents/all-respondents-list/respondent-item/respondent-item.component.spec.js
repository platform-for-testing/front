"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var respondent_item_component_1 = require("./respondent-item.component");
var respondent_model_1 = require("../../../models/respondent.model");
var user_model_1 = require("../../../models/user.model");
var test_1 = require("../../../models/test");
describe('RespondentItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [respondent_item_component_1.RespondentItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(respondent_item_component_1.RespondentItemComponent);
        component = fixture.componentInstance;
        component.respondent = new respondent_model_1.RespondentModel(new user_model_1.UserModel('userNameFirst', 'userDescriptionFirst', 'lastVisited', 'lastTested'), new test_1.Test('Тест по HTML. Средний уровень', 5, 12), 1, 5, 'time');
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=respondent-item.component.spec.js.map