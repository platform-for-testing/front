export class Activation {
    public name: string;
    public created: number;
    public lastEdited: number;
    public numberOfParticipants: number;
    public imagePath: string;

    constructor(name: string, created: number, lastEdited: number, numberOfParticipants: number, imagePath: string) {
        this.name = name;
        this.created = created;
        this.lastEdited = lastEdited;
        this.numberOfParticipants = numberOfParticipants;
        this.imagePath = imagePath;
    }
}
