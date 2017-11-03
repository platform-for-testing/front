"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var question_list_component_1 = require("./question-list.component");
describe('QuestionListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [question_list_component_1.QuestionListComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            providers: [forms_1.FormBuilder]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(question_list_component_1.QuestionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=question-list.component.spec.js.map