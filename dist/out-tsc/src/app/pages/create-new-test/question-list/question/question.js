"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Question = /** @class */ (function () {
    function Question(title, description, required, type, image, points) {
        if (title === void 0) { title = 'Question'; }
        if (description === void 0) { description = ''; }
        if (required === void 0) { required = false; }
        if (type === void 0) { type = ''; }
        if (image === void 0) { image = ''; }
        if (points === void 0) { points = ''; }
        this.title = title;
        this.description = description;
        this.required = required;
        this.type = type;
        this.image = image;
        this.points = points;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map