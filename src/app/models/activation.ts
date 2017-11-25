import {Test} from "./test";

export class Activation {
    public name: string;
    public created: number;
    public endIn: number;
    public numberOfParticipants: number;
    public imagePath: string;
    public isActive: boolean;
    public quiz: Test;

    constructor(name: string, created: number, endIn: number, numberOfParticipants: number, imagePath: string, isActive, quiz) {
        this.name = name;
        this.created = created;
        this.endIn = endIn;
        this.numberOfParticipants = numberOfParticipants;
        this.imagePath = imagePath;
        this.isActive = isActive;
        this.quiz = quiz;
    }
}
