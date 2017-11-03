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
var question_1 = require("./question/question");
var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(elementRef, fb) {
        var _this = this;
        this.elementRef = elementRef;
        this.fb = fb;
        this.questions = [];
        this.pictureToAdd = false;
        // ngAfterViewChecked() {
        // }
        this.createQuestion = function (question) {
            return _this.fb.control(question);
        };
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            questions: this.fb.array(this.questions.map(this.createQuestion))
        });
        this.form.valueChanges.subscribe(function (value) {
            _this.questions = value.questions;
        });
    };
    QuestionListComponent.prototype.addQuestion = function () {
        var newQuestion = new question_1.Question();
        var questionsArray = this.form.get('questions');
        questionsArray.push(this.fb.control(newQuestion));
        // this.form.updateValueAndValidity();
        this.editQuestion(questionsArray.length - 1);
    };
    QuestionListComponent.prototype.addPicture = function () {
        alert('add image');
    };
    QuestionListComponent.prototype.addText = function () {
        alert('add text');
    };
    QuestionListComponent.prototype.addVideo = function () {
        alert('add video');
    };
    QuestionListComponent.prototype.addSection = function () {
        alert('add section');
    };
    QuestionListComponent.prototype.removeQuestion = function (index) {
        var questionsArray = this.form.get('questions');
        questionsArray.removeAt(index);
        this.editQuestion(index);
    };
    QuestionListComponent.prototype.cloneQuestion = function (index) {
        var questionsArray = this.form.get('questions');
        var questionValue = questionsArray.value[index];
        var newQuestion = questionValue;
        questionsArray.insert(index + 1, this.fb.control(newQuestion));
        this.editQuestion(index);
    };
    QuestionListComponent.prototype.editQuestion = function (index) {
        this.editedQuestion = index;
    };
    QuestionListComponent = __decorate([
        core_1.Component({
            selector: 'pt-question-list',
            templateUrl: './question-list.component.html',
            styleUrls: ['./question-list.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.FormBuilder])
    ], QuestionListComponent);
    return QuestionListComponent;
}());
exports.QuestionListComponent = QuestionListComponent;
//# sourceMappingURL=question-list.component.js.map