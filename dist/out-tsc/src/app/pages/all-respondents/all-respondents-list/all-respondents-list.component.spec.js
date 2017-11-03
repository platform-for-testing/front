"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var all_respondents_list_component_1 = require("./all-respondents-list.component");
var respondent_item_component_1 = require("./respondent-item/respondent-item.component");
xdescribe('AllRespondentsListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [all_respondents_list_component_1.AllRespondentsListComponent, respondent_item_component_1.RespondentItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(all_respondents_list_component_1.AllRespondentsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-respondents-list.component.spec.js.map